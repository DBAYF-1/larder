import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase.js'
import { getRecipe, getIngredients } from '../lib/queryRecipes.js'
import { useBasket } from '../state/basket.js'
import { recordView } from '../lib/personalize.js'
import { useDocumentTitle } from '../useDocumentTitle.js'
import RecipeImage from '../components/RecipeImage.jsx'
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
  // Map of ingredientId -> imageUrl (TheMealDB ingredient photo). Populated from
  // the referenced canonical docs once the recipe is in hand. Lines fall back
  // gracefully (RecipeImage's on-brand block) when an id is absent or null.
  const [ingredientImages, setIngredientImages] = useState({})
  const [toast, setToast] = useState(false)
  const toastTimer = useRef(null)

  // Refine the route's coarse title to the meal name once loaded (#10-titles).
  useDocumentTitle(recipe?.title)

  useEffect(() => {
    let live = true
    setStatus('loading')
    setRecipe(null)
    setIngredientImages({})
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

  // Once the recipe is ready, fetch the referenced ingredient docs so we can show
  // a small photo on each line. This is a best-effort enhancement: any failure
  // simply leaves the thumbnails on their clean fallback — the line still works.
  useEffect(() => {
    if (!recipe) return undefined
    const ids = (Array.isArray(recipe.ingredients) ? recipe.ingredients : [])
      .map((line) => line?.ingredientId)
      .filter(Boolean)
    if (ids.length === 0) {
      setIngredientImages({})
      return undefined
    }
    let live = true
    getIngredients(db, ids)
      .then((docs) => {
        if (!live) return
        // getIngredients returns a keyed map; tolerate an array too.
        const entries = Array.isArray(docs)
          ? docs.filter(Boolean).map((d) => [d.id, d])
          : Object.entries(docs || {})
        const map = {}
        for (const [ingId, doc] of entries) {
          if (doc && doc.imageUrl) map[ingId] = doc.imageUrl
        }
        setIngredientImages(map)
      })
      .catch(() => {
        if (live) setIngredientImages({})
      })
    return () => {
      live = false
    }
  }, [recipe])

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current)
    },
    [],
  )

  // Once the recipe is in hand: record the view for personalisation (#39) and
  // inject Recipe schema.org JSON-LD (#14) so this page is eligible for Google
  // rich results even as a client-rendered SPA. The <script> is removed on
  // unmount / recipe change, so exactly one is ever present.
  useEffect(() => {
    if (!recipe) return undefined
    recordView(recipe)

    if (typeof document === 'undefined') return undefined
    const lines = Array.isArray(recipe.ingredients) ? recipe.ingredients : []
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Recipe',
      name: recipe.title || 'Meal',
    }
    if (recipe.imageUrl) ld.image = [recipe.imageUrl]
    if (recipe.cuisine) ld.recipeCuisine = recipe.cuisine
    if (recipe.course) ld.recipeCategory = recipe.course
    if (recipe.servingsBase) ld.recipeYield = String(recipe.servingsBase)
    if (typeof recipe.totalTimeMinutes === 'number' && recipe.totalTimeMinutes > 0) {
      ld.totalTime = `PT${Math.round(recipe.totalTimeMinutes)}M`
    }
    const ingredientStrings = lines
      .map((l) => String(l?.raw || l?.name || '').trim())
      .filter(Boolean)
    if (ingredientStrings.length > 0) ld.recipeIngredient = ingredientStrings
    if (recipe.instructionsExternal === false) {
      const stepTexts = toSteps(recipe.instructions)
      if (stepTexts.length > 0) {
        ld.recipeInstructions = stepTexts.map((text, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          text,
        }))
      }
    }
    const kcal = recipe.nutritionPerServing?.energyKcal
    if (typeof kcal === 'number' && kcal > 0) {
      ld.nutrition = {
        '@type': 'NutritionInformation',
        calories: `${Math.round(kcal)} kcal`,
      }
    }

    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.setAttribute('data-larder-jsonld', '')
    el.textContent = JSON.stringify(ld)
    document.head.appendChild(el)
    return () => {
      el.remove()
    }
  }, [recipe])

  const inBasket = recipe ? has(recipe.id) : false
  // Cook mode is offered only when the method is on-site and has steps to walk.
  const hasInternalSteps =
    recipe?.instructionsExternal === false &&
    toSteps(recipe?.instructions).length > 0

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
  const showAttribution = recipe.attributionRequired && recipe.imageAttribution
  const external = recipe.instructionsExternal === true

  return (
    <article className="meal">
      <p className="meal-back">
        <Link to="/" className="meal-back__link">
          <span className="meal-back__arrow" aria-hidden="true">
            &larr;
          </span>
          Back to browse
        </Link>
      </p>

      {/* Hero image — rendered through RecipeImage with priority so it paints
          immediately (never the old broken native lazy img). Fixed 16/9 box =
          zero layout shift; attribution overlays the bottom-right. */}
      <div className="meal-hero">
        <RecipeImage
          src={recipe.imageUrl}
          alt={recipe.title || 'Meal'}
          priority
          ratio="16/9"
          w={820}
          className="meal-hero__media"
        />
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
          {hasInternalSteps ? (
            <Link
              to={`/cook/${recipe.id}`}
              className="u-btn u-btn--quiet meal-cook"
            >
              <span aria-hidden="true">▶</span> Cook mode
            </Link>
          ) : null}
          {inBasket ? (
            <span className="meal-actions__hint">Tap again to remove it.</span>
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
                    imageUrl={
                      line?.ingredientId
                        ? ingredientImages[line.ingredientId] || null
                        : null
                    }
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
