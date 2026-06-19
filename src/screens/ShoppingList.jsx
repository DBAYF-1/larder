import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import {
  collection,
  getDocs,
  limit as fsLimit,
  query,
  where,
} from 'firebase/firestore'
import { db } from '../firebase.js'
import { getRecipe, getIngredients } from '../lib/queryRecipes.js'
import { buildShoppingList } from '../lib/buildShoppingList.js'
import {
  useBasket,
  encodeBasketParams,
  decodeBasketParams,
  saveList as persistSavedList,
} from '../state/basket.js'
import { scaleRecipesByPortion } from './Basket.jsx'
import ReceiptList, { receiptItemKey } from '../components/ReceiptList.jsx'
import RecipeImage from '../components/RecipeImage.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Toast from '../components/Toast.jsx'
import { GROCERS, searchUrl } from '../lib/supermarket.js'
import { trackEvent } from '../analytics.js'
import './ShoppingList.css'
import './Supermarket.css'

const GROCER_KEY = 'larder.grocer'

// TheMealDB serves a free ingredient photo at a name-keyed URL:
//   https://www.themealdb.com/images/ingredients/{Name}.png
// Ingredient docs are MEANT to carry a resolved `imageUrl`, but where the
// ingestion layer hasn't populated one yet we derive a candidate from the
// canonical name so the list still reads with photos rather than rows of dots.
const MEALDB_INGREDIENT_BASE =
  'https://www.themealdb.com/images/ingredients/'

function mealdbIngredientUrl(name) {
  const clean = String(name || '').trim()
  if (!clean) return null
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

// A stable signature for the built list — recipes + per-recipe servings — used
// to key persisted tick-state (roadmap #12). Two visits that build the same list
// share their ticks; changing the meals or portions starts a fresh sheet.
function listSignature(recipeIds, effectiveHousehold) {
  return recipeIds
    .slice()
    .sort()
    .map((id) => `${id}:${effectiveHousehold(id)}`)
    .join('|')
}

const TICK_PREFIX = 'larder.ticks.'

function readTicks(signature) {
  if (typeof window === 'undefined' || !signature) return new Set()
  try {
    const raw = window.localStorage.getItem(TICK_PREFIX + signature)
    if (!raw) return new Set()
    const parsed = JSON.parse(raw)
    return new Set(Array.isArray(parsed) ? parsed.filter((k) => typeof k === 'string') : [])
  } catch {
    return new Set()
  }
}

function writeTicks(signature, set) {
  if (typeof window === 'undefined' || !signature) return
  try {
    window.localStorage.setItem(TICK_PREFIX + signature, JSON.stringify([...set]))
  } catch {
    // Storage unavailable — ticks persist for the session only.
  }
}

// Build a plain-text receipt for copy/share — readable in any messaging app.
// `shareUrl` (roadmap #11) is appended so a recipient can rebuild the exact list
// on their own device.
function toPlainText(list, shareUrl) {
  if (!list) return ''
  const out = ['Larder — your shopping list', '']
  const { totals } = list
  if (totals) {
    const meals =
      totals.recipeCount === 1 ? '1 meal' : `${totals.recipeCount} meals`
    const people =
      totals.householdSize === 1 ? '1 person' : `${totals.householdSize} people`
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
  if (shareUrl) {
    out.push('Open or re-shop this list:', shareUrl, '')
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

// ── Leftovers panel (roadmap #23) ─────────────────────────────────────────────
// Aggregates the `spare` the engine already computes per item. Each row links to
// other recipes that use that ingredient — found on demand (one bounded
// array-contains read per ingredient, only when the shopper asks) so the list
// view itself stays cheap on the Spark read budget.
function LeftoverRow({ leftover, excludeIds }) {
  const [state, setState] = useState('idle') // idle | loading | done | error
  const [matches, setMatches] = useState([])

  const handleFind = useCallback(async () => {
    if (state === 'loading' || state === 'done') return
    setState('loading')
    try {
      // searchTokens carry lowercased title + ingredient tokens. The canonical
      // name's first word is a reliable token (e.g. "Chopped tomatoes" → set
      // contains "tomatoes"); we query the most specific single token we have.
      const token = ingredientToken(leftover.name)
      if (!token) {
        setMatches([])
        setState('done')
        return
      }
      const q = query(
        collection(db, 'recipes'),
        where('searchTokens', 'array-contains', token),
        fsLimit(8),
      )
      const snap = await getDocs(q)
      const exclude = excludeIds instanceof Set ? excludeIds : new Set(excludeIds)
      const found = snap.docs
        .map((d) => ({ id: d.id, title: d.data()?.title || 'Untitled meal' }))
        .filter((r) => !exclude.has(r.id))
        .slice(0, 5)
      setMatches(found)
      setState('done')
    } catch {
      setState('error')
    }
  }, [state, leftover.name, excludeIds])

  return (
    <li className="leftovers__row">
      <div className="leftovers__head">
        <span className="leftovers__name">{leftover.name}</span>
        <span className="leftovers__spare">{leftover.spare}</span>
      </div>

      {state === 'idle' && (
        <button
          type="button"
          className="leftovers__find"
          onClick={handleFind}
        >
          Use it up — find recipes
        </button>
      )}
      {state === 'loading' && (
        <span className="leftovers__status" aria-live="polite">
          Finding recipes…
        </span>
      )}
      {state === 'error' && (
        <button type="button" className="leftovers__find" onClick={handleFind}>
          Couldn&rsquo;t load — try again
        </button>
      )}
      {state === 'done' && matches.length === 0 && (
        <span className="leftovers__status">No other recipes found just now.</span>
      )}
      {state === 'done' && matches.length > 0 && (
        <ul className="leftovers__matches">
          {matches.map((m) => (
            <li key={m.id}>
              <Link className="leftovers__match" to={`/meal/${m.id}`}>
                {m.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

// The most specific lowercase token for an ingredient name — its last word
// ("Chopped tomatoes" → "tomatoes", "Plain flour" → "flour") matches how
// searchTokens are built (per-word, lowercased) and avoids over-broad words.
function ingredientToken(name) {
  const words = String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
  return words.length > 0 ? words[words.length - 1] : ''
}

export default function ShoppingList() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const {
    recipeIds,
    householdSize,
    portions,
    effectiveHousehold,
    replaceBasket,
  } = useBasket()

  const fromBasket = Boolean(location.state?.fromBasket)

  // ── Rehydrate from the URL on first load (roadmap #11) ──────────────────────
  // A shared link (/list?meals=…&n=…&portions=…) rebuilds the exact list on any
  // device. We rehydrate ONCE, only when the URL actually carries meals AND they
  // differ from the current basket, then strip the params (the basket is now the
  // source of truth and stays the canonical state for the rest of the session).
  const rehydratedRef = useRef(false)
  useEffect(() => {
    if (rehydratedRef.current) return
    const decoded = decodeBasketParams(searchParams)
    if (!decoded) {
      rehydratedRef.current = true
      return
    }
    const currentSig = recipeIds.slice().sort().join(',')
    const urlSig = decoded.recipeIds.slice().sort().join(',')
    const portionsMatch =
      JSON.stringify(decoded.portions || {}) === JSON.stringify(portions || {})
    if (urlSig !== currentSig || decoded.householdSize !== householdSize || !portionsMatch) {
      replaceBasket(decoded)
    }
    rehydratedRef.current = true
    // Clear the params so a refresh reads the (now-authoritative) basket and the
    // address bar stays clean. We keep the route, drop the query.
    setSearchParams({}, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [recipes, setRecipes] = useState({})
  const [ingredients, setIngredients] = useState({})
  const [status, setStatus] = useState('loading') // loading | ready | error
  const [collapsed, setCollapsed] = useState(!fromBasket)
  const [toast, setToast] = useState(false)
  const toastTimer = useRef(null)

  // Remembered supermarket choice (roadmap #45). Persisted so the shopper picks
  // their shop once and it sticks across visits.
  const [grocerId, setGrocerId] = useState(() => {
    if (typeof window === 'undefined') return ''
    try {
      return window.localStorage.getItem(GROCER_KEY) || ''
    } catch {
      return ''
    }
  })
  const chooseGrocer = useCallback(
    (id) => {
      const next = id === grocerId ? '' : id // tapping the active shop clears it
      setGrocerId(next)
      try {
        if (next) window.localStorage.setItem(GROCER_KEY, next)
        else window.localStorage.removeItem(GROCER_KEY)
      } catch {
        /* storage unavailable — the choice lasts the session only */
      }
    },
    [grocerId],
  )

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

  // Run the pure builder client-side, honouring per-meal portion overrides
  // (roadmap #28) via the scale-by-portion adapter — buildShoppingList's
  // signature is unchanged.
  const list = useMemo(() => {
    const ids = Object.keys(recipes)
    if (ids.length === 0) return null
    try {
      const scaled = scaleRecipesByPortion(recipes, effectiveHousehold)
      return buildShoppingList({ recipeIds: ids, householdSize: 1 }, scaled, ingredients)
    } catch {
      return null
    }
    // effectiveHousehold closes over portions + householdSize.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes, ingredients, householdSize, portions])

  // ── Leftovers (roadmap #23): aggregate the engine's `spare` figures ─────────
  const leftovers = useMemo(() => {
    if (!list) return []
    const out = []
    for (const section of list.sections || []) {
      for (const item of section.items || []) {
        if (item?.pack?.spare) {
          out.push({
            key: item.ingredientId || item.name,
            name: item.name,
            spare: item.pack.spare,
          })
        }
      }
    }
    return out
  }, [list])

  // Flat list of every receipt item, for the supermarket panel (roadmap #45).
  const allItems = useMemo(() => {
    if (!list) return []
    const out = []
    for (const section of list.sections || []) {
      for (const item of section.items || []) {
        if (item?.name) out.push(item)
      }
    }
    return out
  }, [list])

  // ── Tick-off state, persisted by list signature (roadmap #12) ───────────────
  const signature = useMemo(
    () => (list ? listSignature(Object.keys(recipes), effectiveHousehold) : ''),
    // effectiveHousehold closes over portions + householdSize.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [list, recipes, householdSize, portions],
  )

  const [checkedIds, setCheckedIds] = useState(() => new Set())

  // Load the persisted ticks whenever the signature changes (new list = new
  // sheet). Prune any keys that aren't in the current list so stale ticks don't
  // linger if the list changed shape.
  useEffect(() => {
    if (!signature || !list) {
      setCheckedIds(new Set())
      return
    }
    const stored = readTicks(signature)
    const valid = new Set()
    for (const section of list.sections || []) {
      for (const item of section.items || []) {
        const key = receiptItemKey(item)
        if (stored.has(key)) valid.add(key)
      }
    }
    setCheckedIds(valid)
  }, [signature, list])

  const handleToggleItem = useCallback(
    (key) => {
      setCheckedIds((prev) => {
        const next = new Set(prev)
        if (next.has(key)) next.delete(key)
        else next.add(key)
        writeTicks(signature, next)
        return next
      })
    },
    [signature],
  )

  // Ingredient-photo lookup for the receipt.
  const imageFor = useCallback(
    (ingredientId) => {
      const doc = ingredientId ? ingredients[ingredientId] : null
      if (!doc) return null
      if (doc.imageUrl) return doc.imageUrl
      return mealdbIngredientUrl(doc.canonicalName)
    },
    [ingredients],
  )

  // The signature moment: collapse meals into the receipt once ready.
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

  // ── Shareable URL (roadmap #11) ─────────────────────────────────────────────
  const shareUrl = useMemo(() => {
    if (recipeIds.length === 0) return ''
    const params = encodeBasketParams({ recipeIds, householdSize, portions })
    if (typeof window === 'undefined') return `/list?${params.toString()}`
    return `${window.location.origin}/list?${params.toString()}`
  }, [recipeIds, householdSize, portions])

  const plainText = useMemo(() => toPlainText(list, shareUrl), [list, shareUrl])

  const canShare =
    typeof navigator !== 'undefined' && typeof navigator.share === 'function'

  const handlePrint = useCallback(() => {
    if (typeof window !== 'undefined') window.print()
  }, [])

  const copyText = useCallback(async (text) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.setAttribute('readonly', '')
        ta.style.position = 'absolute'
        ta.style.left = '-9999px'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      return true
    } catch {
      return false
    }
  }, [])

  const handleCopy = useCallback(async () => {
    if (!plainText) return
    flashToast((await copyText(plainText)) ? 'List copied' : 'Couldn’t copy — try again')
  }, [plainText, copyText, flashToast])

  const handleCopyLink = useCallback(async () => {
    if (!shareUrl) return
    flashToast((await copyText(shareUrl)) ? 'Link copied' : 'Couldn’t copy — try again')
  }, [shareUrl, copyText, flashToast])

  const handleShare = useCallback(async () => {
    if (!canShare) return
    try {
      await navigator.share({
        title: 'My Larder shopping list',
        text: plainText,
        url: shareUrl || undefined,
      })
    } catch {
      // User dismissed the share sheet — nothing to do.
    }
  }, [canShare, plainText, shareUrl])

  // ── Save this list (roadmap #24) ────────────────────────────────────────────
  const handleSave = useCallback(() => {
    if (recipeIds.length === 0) return
    const meals = Object.values(recipes)
    const title =
      meals.length > 0
        ? meals
            .slice(0, 3)
            .map((m) => m.title || 'Meal')
            .join(', ') + (meals.length > 3 ? `, +${meals.length - 3} more` : '')
        : undefined
    persistSavedList({
      title,
      recipeIds,
      householdSize,
      portions,
      checked: [...checkedIds],
      builtAt: Date.now(),
    })
    flashToast('List saved — find it under Saved')
  }, [recipeIds, recipes, householdSize, portions, checkedIds, flashToast])

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
  const basketIdSet = new Set(recipeIds)
  const activeGrocer = GROCERS.find((g) => g.id === grocerId) || null

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

        <div className="list-actions" role="group" aria-label="List actions">
          <button type="button" className="list-action" onClick={handleSave}>
            Save this list
          </button>
          <button type="button" className="list-action" onClick={handlePrint}>
            Print
          </button>
          <button type="button" className="list-action" onClick={handleCopy}>
            Copy list
          </button>
          <button type="button" className="list-action" onClick={handleCopyLink}>
            Copy link
          </button>
          {canShare ? (
            <button
              type="button"
              className="list-action list-action--primary"
              onClick={handleShare}
            >
              Share list
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
          <ReceiptList
            list={list}
            imageFor={imageFor}
            checkedIds={checkedIds}
            onToggleItem={handleToggleItem}
          />
        </div>
      </div>

      {/* Send to a supermarket (roadmap #45). Honest search deep-links into each
          grocer's own site — no partnership, prices/stock are the grocer's. */}
      <section className="grocer" aria-labelledby="grocer-title">
        <div className="grocer__intro">
          <h2 className="grocer__title" id="grocer-title">
            Shop this list at a supermarket
          </h2>
          <p className="grocer__blurb">
            Pick your shop, then tap any item to find it there. These open the
            supermarket&rsquo;s own search in a new tab &mdash; prices and stock
            are theirs.
          </p>
        </div>

        <div
          className="grocer__pick"
          role="group"
          aria-label="Choose a supermarket"
        >
          {GROCERS.map((g) => (
            <button
              key={g.id}
              type="button"
              className={'grocer__chip' + (grocerId === g.id ? ' is-active' : '')}
              onClick={() => chooseGrocer(g.id)}
              aria-pressed={grocerId === g.id}
            >
              <span
                className="grocer__dot"
                style={{ backgroundColor: g.brandColour }}
                aria-hidden="true"
              />
              {g.name}
            </button>
          ))}
        </div>

        {activeGrocer ? (
          <ul className="grocer__items">
            {allItems.map((item) => {
              const url = searchUrl(activeGrocer.id, item.name)
              if (!url) return null
              return (
                <li className="grocer__item" key={receiptItemKey(item)}>
                  <span className="grocer__itemname">
                    {item.name}
                    {item.displayQuantity ? (
                      <span className="grocer__itemqty"> · {item.displayQuantity}</span>
                    ) : null}
                  </span>
                  <a
                    className="grocer__find"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent('supermarket_open', { grocer: activeGrocer.id })
                    }
                  >
                    Find at {activeGrocer.name}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="grocer__hint">Choose a shop above to get item links.</p>
        )}
      </section>

      {/* Leftovers from this shop (roadmap #23). */}
      {leftovers.length > 0 ? (
        <section className="leftovers" aria-labelledby="leftovers-title">
          <div className="leftovers__intro">
            <h2 className="leftovers__title" id="leftovers-title">
              Leftovers from this shop
            </h2>
            <p className="leftovers__blurb">
              Buying in packs leaves a little spare. Here&rsquo;s what&rsquo;s
              over — and other meals that put it to use.
            </p>
          </div>
          <ul className="leftovers__list">
            {leftovers.map((leftover) => (
              <LeftoverRow
                key={leftover.key}
                leftover={leftover}
                excludeIds={basketIdSet}
              />
            ))}
          </ul>
        </section>
      ) : null}

      <Toast
        message={typeof toast === 'string' ? toast : 'Done'}
        show={Boolean(toast)}
      />
    </div>
  )
}
