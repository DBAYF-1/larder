import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../firebase.js'
import { getRecipe, getIngredients } from '../lib/queryRecipes.js'
import { buildShoppingList } from '../lib/buildShoppingList.js'
import { useBasket } from '../state/basket.js'
import HouseholdStepper from '../components/HouseholdStepper.jsx'
import RecipeImage from '../components/RecipeImage.jsx'
import EmptyState from '../components/EmptyState.jsx'
import './Basket.css'

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

export default function Basket() {
  const navigate = useNavigate()
  const { recipeIds, householdSize, remove, setHouseholdSize } = useBasket()

  // recipeId -> doc | null (null = fetched-but-missing)
  const [recipes, setRecipes] = useState({})
  const [loadingMeals, setLoadingMeals] = useState(true)

  // Live unique-item preview state.
  const [ingredients, setIngredients] = useState({})
  const [previewLoading, setPreviewLoading] = useState(false)

  // Fetch each basketed recipe doc by id. Only fetch ids we don't already hold.
  useEffect(() => {
    let live = true
    if (recipeIds.length === 0) {
      setRecipes({})
      setLoadingMeals(false)
      return undefined
    }
    setLoadingMeals(true)
    Promise.all(
      recipeIds.map((id) =>
        getRecipe(db, id)
          .then((doc) => [id, doc ?? null])
          .catch(() => [id, null]),
      ),
    )
      .then((entries) => {
        if (!live) return
        setRecipes(Object.fromEntries(entries))
      })
      .finally(() => {
        if (live) setLoadingMeals(false)
      })
    return () => {
      live = false
    }
  }, [recipeIds])

  // Fetch referenced ingredient docs for the live preview.
  const resolvedRecipes = useMemo(() => {
    const out = {}
    for (const [id, doc] of Object.entries(recipes)) {
      if (doc) out[id] = doc
    }
    return out
  }, [recipes])

  const ingredientIds = useMemo(
    () => collectIngredientIds(resolvedRecipes),
    [resolvedRecipes],
  )

  const ingredientIdsKey = useMemo(
    () => ingredientIds.slice().sort().join(','),
    [ingredientIds],
  )

  useEffect(() => {
    let live = true
    if (ingredientIds.length === 0) {
      setIngredients({})
      setPreviewLoading(false)
      return undefined
    }
    setPreviewLoading(true)
    getIngredients(db, ingredientIds)
      .then((docs) => {
        if (!live) return
        // Accept either a keyed map or an array of docs.
        if (Array.isArray(docs)) {
          setIngredients(
            Object.fromEntries(docs.filter(Boolean).map((d) => [d.id, d])),
          )
        } else {
          setIngredients(docs || {})
        }
      })
      .catch(() => {
        if (live) setIngredients({})
      })
      .finally(() => {
        if (live) setPreviewLoading(false)
      })
    return () => {
      live = false
    }
    // ingredientIdsKey captures membership changes cheaply.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredientIdsKey])

  // Compute the live unique-item count from the pure builder.
  const itemCount = useMemo(() => {
    const ids = Object.keys(resolvedRecipes)
    if (ids.length === 0) return 0
    try {
      const list = buildShoppingList(
        { recipeIds: ids, householdSize },
        resolvedRecipes,
        ingredients,
      )
      if (typeof list?.totals?.itemCount === 'number') {
        return list.totals.itemCount
      }
      // Fallback: count items across sections.
      return (list?.sections || []).reduce(
        (n, s) => n + (s?.items?.length || 0),
        0,
      )
    } catch {
      return 0
    }
  }, [resolvedRecipes, ingredients, householdSize])

  const handleMakeList = useCallback(() => {
    // Flag the arrival so ShoppingList can play the collapse animation.
    navigate('/list', { state: { fromBasket: true } })
  }, [navigate])

  if (recipeIds.length === 0) {
    return (
      <EmptyState
        title="Your basket's empty"
        body="Pick a few meals and we'll build the list."
        actionLabel="Browse meals"
        onAction={() => navigate('/')}
      />
    )
  }

  return (
    <div className="basket">
      <header className="basket-head">
        <h1 className="basket-title">Your basket</h1>
        <p className="basket-sub">
          {recipeIds.length}{' '}
          {recipeIds.length === 1 ? 'meal' : 'meals'} chosen. Set your household
          size, then turn it into one shopping list.
        </p>
      </header>

      <ul className="basket-list">
        {recipeIds.map((id) => {
          const doc = recipes[id]
          const isLoading = loadingMeals && doc === undefined
          return (
            <li className="basket-row" key={id}>
              <Link
                to={`/meal/${id}`}
                className="basket-row__thumb"
                aria-label={doc?.title ? `Open ${doc.title}` : 'Open meal'}
                tabIndex={doc ? 0 : -1}
              >
                <RecipeImage
                  src={doc?.imageUrl}
                  alt=""
                  priority
                  ratio="1/1"
                  rounded
                  className="basket-row__img"
                />
              </Link>

              <div className="basket-row__main">
                {isLoading ? (
                  <span className="basket-row__loading">Loading…</span>
                ) : doc ? (
                  <Link to={`/meal/${id}`} className="basket-row__name">
                    {doc.title || 'Untitled meal'}
                  </Link>
                ) : (
                  <span className="basket-row__name basket-row__name--missing">
                    This meal is no longer available
                  </span>
                )}
                {doc?.cuisine || doc?.course ? (
                  <span className="basket-row__meta">
                    {[doc.cuisine, doc.course].filter(Boolean).join(' · ')}
                  </span>
                ) : null}
              </div>

              <button
                type="button"
                className="basket-row__remove"
                onClick={() => remove(id)}
                aria-label={
                  doc?.title
                    ? `Remove ${doc.title} from your basket`
                    : 'Remove this meal from your basket'
                }
              >
                Remove
              </button>
            </li>
          )
        })}
      </ul>

      <div className="basket-foot">
        <div className="basket-household">
          {/* HouseholdStepper renders its own "Cooking for" label + "people"
              suffix, so we don't repeat the label here — just the scaling hint. */}
          <HouseholdStepper
            value={householdSize}
            onChange={setHouseholdSize}
            min={1}
            max={12}
          />
          <span className="basket-household__hint">
            We&rsquo;ll scale every quantity to suit.
          </span>
        </div>

        <div className="basket-preview" aria-live="polite">
          <span className="basket-preview__count">
            {previewLoading && itemCount === 0 ? '…' : itemCount}
          </span>
          <span className="basket-preview__label">
            {itemCount === 1 ? 'item on your list' : 'items on your list'}
          </span>
        </div>

        <button
          type="button"
          className="basket-make"
          onClick={handleMakeList}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="basket-make__icon"
          >
            <path d="M3 6h18M3 12h18M3 18h12" />
            <path d="M19 16l2 2 3-3" />
          </svg>
          <span className="basket-make__label">Make my shopping list</span>
          {itemCount > 0 ? (
            <span className="basket-make__count">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </span>
          ) : null}
        </button>
      </div>
    </div>
  )
}
