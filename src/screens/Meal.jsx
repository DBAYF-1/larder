import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase.js'
import { getRecipe } from '../lib/queryRecipes.js'
import { useBasket } from '../state/basket.js'
import MealBadgeRow from '../components/MealBadgeRow.jsx'
import IngredientLine from '../components/IngredientLine.jsx'
import SourceCredit from '../components/SourceCredit.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Toast from '../components/Toast.jsx'
import './Meal.css'

// Split a themealdb-style instructions blob into paragraphs/steps.
function toSteps(text) {
  if (!text || typeof text !== 'string') return []
  // Prefer explicit numbered/STEP markers; otherwise split on blank lines, then newlines.
  const cleaned = text.replace(/\r\n/g, '\n').trim()
  let parts = cleaned
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
  if (parts.length <= 1) {
    parts = cleaned
      .split(/\n/)
      .map((p) => p.trim())
      .filter(Boolean)
  }
  return parts
}

function MealSkeleton() {
  return (
    <div className="meal meal--loading" aria-busy="true" aria-live="polite">
      <div className="meal-hero meal-hero--skel" />
      <div className="meal-body">
        <div className="meal-skel-line meal-skel-line--title" />
        <div className="meal-skel-line meal-skel-line--badges" />
        <div className="meal-skel-line" />
        <div className="meal-skel-line" />
        <div className="meal-skel-line meal-skel-line--short" />
      </div>
      <span className="sr-only">Loading meal…</span>
    </div>
  )
}

export default function Meal() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { has, add, remove } = useBasket()

  const [recipe, setRecipe] = useState(null)
  const [status, setStatus] = useState('loading') // loading | ready | missing | error
  const [toast, setToast] = useState(false)
  const toastTimer = useRef(null)

  useEffect(() => {
    let live = true
    setStatus('loading')
    setRecipe(null)
    if (!id) {
      setStatus('missing')
      return undefined
    }
    getRecipe(db, id)
      .then((doc) => {
        if (!live) return
        if (!doc) {
          setStatus('missing')
        } else {
          setRecipe(doc)
          setStatus('ready')
        }
      })
      .catch(() => {
        if (live) setStatus('error')
      })
    return () => {
      live = false
    }
  }, [id])

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current)
    },
    [],
  )

  const inBasket = recipe ? has(recipe.id) : false

  const handleAdd = useCallback(() => {
    if (!recipe || !recipe.id) return
    if (inBasket) {
      remove(recipe.id)
      return
    }
    add(recipe.id)
    setToast(true)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(false), 2200)
  }, [recipe, inBasket, add, remove])

  // Sort embedded ingredient lines by displayOrder, guarding optionals.
  const ingredients = useMemo(() => {
    const list = Array.isArray(recipe?.ingredients) ? recipe.ingredients : []
    return [...list].sort(
      (a, b) => (a?.displayOrder ?? 0) - (b?.displayOrder ?? 0),
    )
  }, [recipe])

  const steps = useMemo(
    () =>
      recipe && recipe.instructionsExternal === false
        ? toSteps(recipe.instructions)
        : [],
    [recipe],
  )

  if (status === 'loading') return <MealSkeleton />

  if (status === 'missing') {
    return (
      <EmptyState
        title="We couldn't find that meal"
        body="It may have moved on. Head back and pick another to cook."
        actionLabel="Browse meals"
        onAction={() => navigate('/')}
      />
    )
  }

  if (status === 'error' || !recipe) {
    return (
      <EmptyState
        title="Something went wrong"
        body="We couldn't load this meal just now. Please try again."
        actionLabel="Browse meals"
        onAction={() => navigate('/')}
      />
    )
  }

  const publisher = recipe.publisher || 'the publisher'
  const showAttribution =
    recipe.attributionRequired && recipe.imageAttribution
  const external = recipe.instructionsExternal === true

  return (
    <article className="meal">
      <p className="meal-back">
        <Link to="/" className="meal-back__link">
          &larr; Back to browse
        </Link>
      </p>

      {/* Hero image with optional attribution overlay. */}
      <div className="meal-hero">
        {recipe.imageUrl ? (
          <img
            className="meal-hero__img"
            src={recipe.imageUrl}
            alt={recipe.title || 'Meal'}
            loading="lazy"
          />
        ) : (
          <div className="meal-hero__placeholder" aria-hidden="true" />
        )}
        {showAttribution ? (
          <p className="meal-hero__attr">{recipe.imageAttribution}</p>
        ) : null}
      </div>

      <div className="meal-body">
        <header className="meal-head">
          <h1 className="meal-title">{recipe.title || 'Untitled meal'}</h1>
          {recipe.cuisine || recipe.course ? (
            <p className="meal-kicker">
              {[recipe.cuisine, recipe.course].filter(Boolean).join(' · ')}
            </p>
          ) : null}
        </header>

        <MealBadgeRow
          timeMinutes={recipe.totalTimeMinutes ?? null}
          servings={recipe.servingsBase ?? null}
          dietLabels={Array.isArray(recipe.dietLabels) ? recipe.dietLabels : []}
          kcal={recipe.nutritionPerServing?.energyKcal ?? null}
        />

        <div className="meal-actions">
          <button
            type="button"
            className={`meal-add${inBasket ? ' meal-add--in' : ''}`}
            onClick={handleAdd}
            aria-pressed={inBasket}
          >
            {inBasket ? (
              <>
                <span className="meal-add__tick" aria-hidden="true">
                  ✓
                </span>
                In your basket
              </>
            ) : (
              'Add to basket'
            )}
          </button>
          {inBasket ? (
            <span className="meal-actions__hint">
              Tap again to remove it.
            </span>
          ) : null}
        </div>

        <div className="meal-columns">
          {/* Ingredients */}
          <section className="meal-ingredients" aria-label="Ingredients">
            <h2 className="meal-h2">Ingredients</h2>
            {recipe.servingsBase ? (
              <p className="meal-ingredients__note">
                Written for {recipe.servingsBase}{' '}
                {recipe.servingsBase === 1 ? 'serving' : 'servings'}.
              </p>
            ) : null}
            {ingredients.length > 0 ? (
              <ul className="meal-ingredients__list">
                {ingredients.map((line, i) => (
                  <IngredientLine
                    key={`${line?.ingredientId || line?.raw || 'line'}-${i}`}
                    line={line}
                  />
                ))}
              </ul>
            ) : (
              <p className="meal-ingredients__empty">
                Ingredients aren&rsquo;t listed for this meal.
              </p>
            )}
          </section>

          {/* Method — internal body, OR external link-out. Never both. */}
          <section className="meal-method" aria-label="Method">
            <h2 className="meal-h2">Method</h2>
            {external ? (
              <div className="meal-linkout">
                <p className="meal-linkout__lede">
                  This recipe&rsquo;s full method lives with {publisher}.
                </p>
                {recipe.sourceUrl ? (
                  <a
                    className="meal-linkout__btn"
                    href={recipe.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View full method on {publisher}
                    <span className="meal-linkout__ext" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ) : (
                  <p className="meal-linkout__missing">
                    A link to the full method isn&rsquo;t available.
                  </p>
                )}
              </div>
            ) : steps.length > 0 ? (
              <ol className="meal-steps">
                {steps.map((step, i) => (
                  <li key={i} className="meal-steps__item">
                    {step}
                  </li>
                ))}
              </ol>
            ) : (
              <p className="meal-method__empty">
                No method has been provided for this meal.
              </p>
            )}
          </section>
        </div>

        {/* Inline source credit where required. */}
        {recipe.attributionRequired ? (
          <div className="meal-credit">
            <SourceCredit variant="inline" recipe={recipe} />
          </div>
        ) : null}
      </div>

      <Toast message="Added to basket" show={toast} />
    </article>
  )
}
