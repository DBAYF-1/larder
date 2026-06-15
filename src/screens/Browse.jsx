import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { db } from '../firebase.js'
import { queryRecipes, getFacets } from '../lib/queryRecipes.js'
import { useBasket } from '../state/basket.js'
import MealCard from '../components/MealCard.jsx'
import FilterBar from '../components/FilterBar.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Toast from '../components/Toast.jsx'
import './Browse.css'

// The curated rails. Each is a single queryRecipes call with fixed filters.
const RAILS = [
  {
    key: 'quick',
    title: 'Quick dinners',
    blurb: 'On the table without much fuss.',
    filters: { course: 'Dinner', maxTime: 30 },
    sort: 'popularity',
  },
  {
    key: 'veggie',
    title: 'Veggie',
    blurb: 'Meat-free meals worth making.',
    filters: { diet: 'Vegetarian' },
    sort: 'popularity',
  },
  {
    key: 'british',
    title: 'British classics',
    blurb: 'The comforting stuff we grew up on.',
    filters: { cuisine: 'British' },
    sort: 'popularity',
  },
  {
    key: 'under30',
    title: 'Under 30 min',
    blurb: 'Fast from fridge to fork.',
    filters: { maxTime: 30 },
    sort: 'time',
  },
]

const DEFAULT_FILTER = {
  cuisine: '',
  course: '',
  diet: '',
  freeFrom: '',
  maxTime: null,
  sort: 'popularity',
}

// True when the user has narrowed the browse at all (so we show the grid, not rails).
function isFiltering(value) {
  if (!value) return false
  return Boolean(
    value.cuisine ||
      value.course ||
      value.diet ||
      value.freeFrom ||
      value.maxTime ||
      (value.sort && value.sort !== 'popularity'),
  )
}

function CardSkeleton({ variant = 'grid' }) {
  return (
    <div
      className={`browse-skel browse-skel--${variant}`}
      aria-hidden="true"
    >
      <div className="browse-skel__img" />
      <div className="browse-skel__line browse-skel__line--title" />
      <div className="browse-skel__line browse-skel__line--meta" />
    </div>
  )
}

function Rail({ rail, isInBasket, onToggle }) {
  const [recipes, setRecipes] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let live = true
    setRecipes(null)
    setError(false)
    queryRecipes(db, { filters: rail.filters, sort: rail.sort, pageSize: 12 })
      .then((res) => {
        if (!live) return
        setRecipes(Array.isArray(res?.recipes) ? res.recipes : [])
      })
      .catch(() => {
        if (live) setError(true)
      })
    return () => {
      live = false
    }
  }, [rail])

  // Hide a rail that genuinely has nothing — never show an empty shelf.
  if (recipes && recipes.length === 0 && !error) return null

  return (
    <section className="rail" aria-label={rail.title}>
      <header className="rail__head">
        <h2 className="rail__title">{rail.title}</h2>
        <p className="rail__blurb">{rail.blurb}</p>
      </header>

      <div className="rail__track" role="list">
        {recipes === null && !error
          ? Array.from({ length: 6 }).map((_, i) => (
              <div className="rail__item" key={i} role="listitem">
                <CardSkeleton variant="rail" />
              </div>
            ))
          : null}

        {recipes && recipes.length > 0
          ? recipes.map((meal) => (
              <div className="rail__item" key={meal.id} role="listitem">
                <MealCard
                  meal={meal}
                  variant="rail"
                  inBasket={isInBasket(meal.id)}
                  onToggle={() => onToggle(meal)}
                />
              </div>
            ))
          : null}

        {error ? (
          <p className="rail__error">
            We couldn&rsquo;t load these just now. Try refreshing.
          </p>
        ) : null}
      </div>
    </section>
  )
}

export default function Browse() {
  const { has, add, remove } = useBasket()
  const [facets, setFacets] = useState(null)
  const [filter, setFilter] = useState(DEFAULT_FILTER)

  // Grid (filtered) state.
  const [gridRecipes, setGridRecipes] = useState([])
  const [cursor, setCursor] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [done, setDone] = useState(false)
  const [gridError, setGridError] = useState(false)

  // Toast for add-to-basket from a card.
  const [toast, setToast] = useState(false)
  const toastTimer = useRef(null)

  const filtering = useMemo(() => isFiltering(filter), [filter])

  // Load facets once for the FilterBar.
  useEffect(() => {
    let live = true
    getFacets(db)
      .then((f) => {
        if (live) setFacets(f || null)
      })
      .catch(() => {
        if (live) setFacets(null)
      })
    return () => {
      live = false
    }
  }, [])

  const showToast = useCallback(() => {
    setToast(true)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(false), 2200)
  }, [])

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current)
    },
    [],
  )

  const handleToggle = useCallback(
    (meal) => {
      if (!meal || !meal.id) return
      if (has(meal.id)) {
        remove(meal.id)
      } else {
        add(meal.id)
        showToast()
      }
    },
    [add, remove, has, showToast],
  )

  // Build the filter payload for queryRecipes from FilterBar value.
  const queryFilters = useMemo(() => {
    const f = {}
    if (filter.cuisine) f.cuisine = filter.cuisine
    if (filter.course) f.course = filter.course
    if (filter.diet) f.diet = filter.diet
    if (filter.freeFrom) f.freeFrom = filter.freeFrom
    if (filter.maxTime) f.maxTime = filter.maxTime
    return f
  }, [filter])

  // Fresh query whenever the filter changes (only while actually filtering).
  useEffect(() => {
    if (!filtering) {
      setGridRecipes([])
      setCursor(null)
      setDone(false)
      setGridError(false)
      return
    }
    let live = true
    setLoading(true)
    setGridError(false)
    setDone(false)
    setGridRecipes([])
    setCursor(null)
    queryRecipes(db, {
      filters: queryFilters,
      sort: filter.sort,
      cursor: null,
      pageSize: 24,
    })
      .then((res) => {
        if (!live) return
        const list = Array.isArray(res?.recipes) ? res.recipes : []
        setGridRecipes(list)
        setCursor(res?.nextCursor ?? null)
        setDone(!res?.nextCursor || list.length === 0)
      })
      .catch(() => {
        if (live) setGridError(true)
      })
      .finally(() => {
        if (live) setLoading(false)
      })
    return () => {
      live = false
    }
  }, [filtering, queryFilters, filter.sort])

  const loadMore = useCallback(() => {
    if (loadingMore || loading || done || !cursor) return
    let cancelled = false
    setLoadingMore(true)
    queryRecipes(db, {
      filters: queryFilters,
      sort: filter.sort,
      cursor,
      pageSize: 24,
    })
      .then((res) => {
        if (cancelled) return
        const list = Array.isArray(res?.recipes) ? res.recipes : []
        setGridRecipes((prev) => {
          const seen = new Set(prev.map((r) => r.id))
          return [...prev, ...list.filter((r) => !seen.has(r.id))]
        })
        setCursor(res?.nextCursor ?? null)
        setDone(!res?.nextCursor || list.length === 0)
      })
      .catch(() => {
        if (!cancelled) setDone(true)
      })
      .finally(() => {
        if (!cancelled) setLoadingMore(false)
      })
    return () => {
      cancelled = true
    }
  }, [loadingMore, loading, done, cursor, queryFilters, filter.sort])

  // Infinite scroll via a sentinel at the foot of the grid.
  const sentinelRef = useRef(null)
  useEffect(() => {
    if (!filtering || done) return undefined
    const node = sentinelRef.current
    if (!node || typeof IntersectionObserver === 'undefined') return undefined
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) loadMore()
      },
      { rootMargin: '600px 0px' },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [filtering, done, loadMore])

  const resetFilters = useCallback(() => setFilter(DEFAULT_FILTER), [])

  return (
    <div className="browse">
      {/* Hero — a single appetising statement of intent + headline. No stats. */}
      <section className="browse-hero" aria-label="Welcome to Larder">
        <p className="browse-hero__eyebrow">Browse dinner like a takeaway</p>
        <h1 className="browse-hero__headline">
          Pick the meals you fancy. We&rsquo;ll write the shopping list.
        </h1>
        <p className="browse-hero__lede">
          Add a few dishes to your basket and Larder turns them into one tidy,
          aisle-by-aisle list &mdash; quantities sorted, duplicates merged.
        </p>
      </section>

      {/* Filter bar — wired to queryRecipes via filter state. */}
      <div className="browse-filters">
        <FilterBar facets={facets} value={filter} onChange={setFilter} />
      </div>

      {/* Default view: curated rails. Filtered view: the grid. */}
      {!filtering ? (
        <div className="browse-rails">
          {RAILS.map((rail) => (
            <Rail
              key={rail.key}
              rail={rail}
              isInBasket={has}
              onToggle={handleToggle}
            />
          ))}
        </div>
      ) : (
        <section className="browse-grid-wrap" aria-label="Search results">
          {loading ? (
            <div className="browse-grid">
              {Array.from({ length: 12 }).map((_, i) => (
                <CardSkeleton key={i} variant="grid" />
              ))}
            </div>
          ) : null}

          {!loading && gridError ? (
            <EmptyState
              title="Something went wrong"
              body="We couldn't fetch those meals just now. Adjust your filters or try again."
              actionLabel="Clear filters"
              onAction={resetFilters}
            />
          ) : null}

          {!loading && !gridError && gridRecipes.length === 0 ? (
            <EmptyState
              title="No meals match just yet"
              body="Loosen a filter or two and we'll find you something to cook."
              actionLabel="Clear filters"
              onAction={resetFilters}
            />
          ) : null}

          {!loading && !gridError && gridRecipes.length > 0 ? (
            <>
              <div className="browse-grid">
                {gridRecipes.map((meal) => (
                  <MealCard
                    key={meal.id}
                    meal={meal}
                    variant="grid"
                    inBasket={has(meal.id)}
                    onToggle={() => handleToggle(meal)}
                  />
                ))}
              </div>

              {loadingMore ? (
                <div className="browse-grid browse-grid--more">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <CardSkeleton key={i} variant="grid" />
                  ))}
                </div>
              ) : null}

              {!done ? (
                <div className="browse-more">
                  <span ref={sentinelRef} aria-hidden="true" />
                  <button
                    type="button"
                    className="browse-more__btn"
                    onClick={loadMore}
                    disabled={loadingMore}
                  >
                    {loadingMore ? 'Loading more meals…' : 'Show more meals'}
                  </button>
                </div>
              ) : (
                <p className="browse-more__end">That&rsquo;s everything.</p>
              )}
            </>
          ) : null}
        </section>
      )}

      <Toast message="Added to basket" show={toast} />
    </div>
  )
}
