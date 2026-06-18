import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { db } from '../firebase.js'
import { getRecipe, getIngredients } from '../lib/queryRecipes.js'
import { buildShoppingList } from '../lib/buildShoppingList.js'
import { useBasket } from '../state/basket.js'
import ReceiptList from '../components/ReceiptList.jsx'
import RecipeImage from '../components/RecipeImage.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Toast from '../components/Toast.jsx'
import './ShoppingList.css'

// TheMealDB serves a free ingredient photo at a name-keyed URL:
//   https://www.themealdb.com/images/ingredients/{Name}.png
// Ingredient docs are MEANT to carry a resolved `imageUrl`, but where the
// ingestion layer hasn't populated one yet we derive a candidate from the
// canonical name so the list still reads with photos rather than rows of dots.
// We Title-Case the name (TheMealDB's convention) and URL-encode it. If the
// derived photo 404s, RecipeImage degrades to its on-brand block; genuine
// no-name items keep the quiet monochrome dot.
const MEALDB_INGREDIENT_BASE =
  'https://www.themealdb.com/images/ingredients/'

function mealdbIngredientUrl(name) {
  const clean = String(name || '').trim()
  if (!clean) return null
  // Title Case each word — "cheddar cheese" -> "Cheddar Cheese" — matching how
  // TheMealDB names its ingredient image files.
  const titled = clean
    .toLowerCase()
    .replace(/\b([a-z])/g, (m, c) => c.toUpperCase())
  return `${MEALDB_INGREDIENT_BASE}${encodeURIComponent(titled)}.png`
}

// Collect every referenced ingredientId across the basketed recipe docs.
function collectIngredientIds(recipes) {
  const ids = new Set()
  for (const recipe of Object.values(recipes)) {
    const lines = Array.isArray(recipe?.ingredients) ? recipe.ingredients : []
    for (const line of lines) {
      if (line?.ingredientId) ids.add(line.ingredientId)
    }
  }
  return [...ids]
}

// Build a plain-text receipt for copy/share — readable in any messaging app.
function toPlainText(list) {
  if (!list) return ''
  const out = ['Larder — your shopping list', '']
  const { totals } = list
  if (totals) {
    const meals =
      totals.recipeCount === 1
        ? '1 meal'
        : `${totals.recipeCount} meals`
    const people =
      totals.householdSize === 1
        ? '1 person'
        : `${totals.householdSize} people`
    out.push(`${meals}, ${totals.itemCount} items, for ${people}.`, '')
  }
  for (const section of list.sections || []) {
    const items = Array.isArray(section?.items) ? section.items : []
    if (items.length === 0) continue
    out.push(section.aisle.toUpperCase())
    for (const item of items) {
      const qty = item.displayQuantity ? `  —  ${item.displayQuantity}` : ''
      const mark = item.optional ? '( ) ' : '[ ] '
      out.push(`${mark}${item.name}${qty}`)
      if (item.alternative) out.push(`      ${item.alternative}`)
      if (item.note) out.push(`      ${item.note}`)
    }
    out.push('')
  }
  out.push('Made with Larder')
  return out.join('\n')
}

function ListSkeleton() {
  return (
    <div className="list-skel" aria-busy="true" aria-live="polite">
      <div className="list-skel__head" />
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="list-skel__row" key={i}>
          <span className="list-skel__name" />
          <span className="list-skel__qty" />
        </div>
      ))}
      <span className="sr-only">Building your shopping list…</span>
    </div>
  )
}

export default function ShoppingList() {
  const navigate = useNavigate()
  const location = useLocation()
  const { recipeIds, householdSize } = useBasket()

  const fromBasket = Boolean(location.state?.fromBasket)

  const [recipes, setRecipes] = useState({})
  const [ingredients, setIngredients] = useState({})
  const [status, setStatus] = useState('loading') // loading | ready | error
  const [collapsed, setCollapsed] = useState(!fromBasket)
  const [toast, setToast] = useState(false)
  const toastTimer = useRef(null)

  const recipeIdsKey = useMemo(
    () => recipeIds.slice().sort().join(','),
    [recipeIds],
  )

  // Fetch recipe docs, then their referenced ingredient docs.
  useEffect(() => {
    let live = true
    if (recipeIds.length === 0) {
      setStatus('ready')
      setRecipes({})
      setIngredients({})
      return undefined
    }
    setStatus('loading')

    Promise.all(
      recipeIds.map((id) =>
        getRecipe(db, id)
          .then((doc) => [id, doc ?? null])
          .catch(() => [id, null]),
      ),
    )
      .then(async (entries) => {
        if (!live) return
        const recipeMap = {}
        for (const [id, doc] of entries) {
          if (doc) recipeMap[id] = doc
        }
        setRecipes(recipeMap)

        const ingIds = collectIngredientIds(recipeMap)
        if (ingIds.length === 0) {
          setIngredients({})
          setStatus('ready')
          return
        }
        try {
          const docs = await getIngredients(db, ingIds)
          if (!live) return
          if (Array.isArray(docs)) {
            setIngredients(
              Object.fromEntries(docs.filter(Boolean).map((d) => [d.id, d])),
            )
          } else {
            setIngredients(docs || {})
          }
          setStatus('ready')
        } catch {
          if (live) {
            setIngredients({})
            setStatus('ready')
          }
        }
      })
      .catch(() => {
        if (live) setStatus('error')
      })

    return () => {
      live = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeIdsKey])

  // Run the pure builder client-side.
  const list = useMemo(() => {
    const ids = Object.keys(recipes)
    if (ids.length === 0) return null
    try {
      return buildShoppingList(
        { recipeIds: ids, householdSize },
        recipes,
        ingredients,
      )
    } catch {
      return null
    }
  }, [recipes, ingredients, householdSize])

  // Ingredient-photo lookup for the receipt. Each ingredient doc is meant to
  // carry an `imageUrl` (a free TheMealDB ingredient photo). We prefer that;
  // where it is absent we derive a candidate from the canonical name (same free
  // TheMealDB source). ReceiptList falls back to a monochrome dot when there is
  // no ingredient/name at all, so a row is never blank.
  const imageFor = useCallback(
    (ingredientId) => {
      const doc = ingredientId ? ingredients[ingredientId] : null
      if (!doc) return null
      if (doc.imageUrl) return doc.imageUrl
      return mealdbIngredientUrl(doc.canonicalName)
    },
    [ingredients],
  )

  // The signature moment: once the list is ready and we arrived from the
  // basket, flip from "meals" to "collapsed receipt" on the next frame so the
  // CSS transition runs. Under prefers-reduced-motion the durations are 0 (see
  // tokens.css) so this becomes an instant cross-fade.
  useEffect(() => {
    if (status !== 'ready' || !list) return undefined
    if (collapsed) return undefined
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setCollapsed(true))
    })
    return () => cancelAnimationFrame(raf)
  }, [status, list, collapsed])

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current)
    },
    [],
  )

  const flashToast = useCallback((message) => {
    setToast(message)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(false), 2200)
  }, [])

  const plainText = useMemo(() => toPlainText(list), [list])

  const canShare =
    typeof navigator !== 'undefined' && typeof navigator.share === 'function'

  const handlePrint = useCallback(() => {
    if (typeof window !== 'undefined') window.print()
  }, [])

  const handleCopy = useCallback(async () => {
    if (!plainText) return
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(plainText)
      } else {
        // Fallback for older browsers.
        const ta = document.createElement('textarea')
        ta.value = plainText
        ta.setAttribute('readonly', '')
        ta.style.position = 'absolute'
        ta.style.left = '-9999px'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      flashToast('List copied')
    } catch {
      flashToast('Couldn’t copy — try again')
    }
  }, [plainText, flashToast])

  const handleShare = useCallback(async () => {
    if (!canShare || !plainText) return
    try {
      await navigator.share({
        title: 'My Larder shopping list',
        text: plainText,
      })
    } catch {
      // User dismissed the share sheet — nothing to do.
    }
  }, [canShare, plainText])

  if (status === 'loading') return <ListSkeleton />

  if (recipeIds.length === 0) {
    return (
      <EmptyState
        title="Nothing to shop for yet"
        body="Your basket's empty. Pick a few meals and we'll build the list."
        actionLabel="Browse meals"
        onAction={() => navigate('/')}
      />
    )
  }

  if (status === 'error' || !list) {
    return (
      <EmptyState
        title="We couldn't build your list"
        body="Something went wrong fetching your meals. Please try again."
        actionLabel="Back to basket"
        onAction={() => navigate('/basket')}
      />
    )
  }

  const meals = Object.values(recipes)

  return (
    <div className="list">
      <header className="list-head">
        <div className="list-head__text">
          <h1 className="list-title">Your shopping list</h1>
          <p className="list-sub">
            {list.totals.recipeCount}{' '}
            {list.totals.recipeCount === 1 ? 'meal' : 'meals'},{' '}
            {list.totals.itemCount}{' '}
            {list.totals.itemCount === 1 ? 'item' : 'items'}, for{' '}
            {list.totals.householdSize}{' '}
            {list.totals.householdSize === 1 ? 'person' : 'people'}.
          </p>
        </div>

        <div className="list-actions" role="group" aria-label="Export options">
          <button
            type="button"
            className="list-action"
            onClick={handlePrint}
          >
            Print
          </button>
          <button
            type="button"
            className="list-action"
            onClick={handleCopy}
          >
            Copy to clipboard
          </button>
          {canShare ? (
            <button
              type="button"
              className="list-action list-action--primary"
              onClick={handleShare}
            >
              Share
            </button>
          ) : null}
        </div>
      </header>

      {/* The collapse: meal cards fold away into receipt lines. */}
      <div className={`list-collapse${collapsed ? ' is-collapsed' : ''}`}>
        <div className="list-collapse__meals" aria-hidden={collapsed}>
          <ul className="list-meal-strip">
            {meals.map((m) => (
              <li className="list-meal-strip__item" key={m.id}>
                <RecipeImage
                  src={m.imageUrl}
                  alt=""
                  priority
                  ratio="1/1"
                  rounded
                  w={120}
                  className="list-meal-strip__img"
                />
                <span className="list-meal-strip__title">
                  {m.title || 'Untitled meal'}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="list-collapse__receipt">
          <ReceiptList list={list} imageFor={imageFor} />
        </div>
      </div>

      <Toast message={typeof toast === 'string' ? toast : 'Done'} show={Boolean(toast)} />
    </div>
  )
}
