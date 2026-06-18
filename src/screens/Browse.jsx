// Browse — the delivery-app home (Just Eat / Deliveroo benchmark).
//
// Layout, top to bottom:
//   1. A small hero (one appetising line of intent — no stat walls).
//   2. A SLIM sticky bar (~56px): a horizontally FLICKABLE row of the key chips
//      (momentum scroll, scroll-snap, hidden scrollbar, edge fade, no wrap), a
//      compact search box, and a "Filters" button that opens a COLLAPSIBLE sheet
//      (closed by default) holding the full <FilterBar>. NEVER a giant always-open
//      panel — the bar never overlays the cards, so tiles are always tappable.
//   3. Flickable category RAILS (momentum, scroll-snap, edge fade, "See all").
//   4. A responsive image-led GRID with smooth INFINITE SCROLL (IntersectionObserver
//      sentinel) the moment a filter / search is active.
//
// The compact presentation is owned here: <FilterBar> keeps its exact
// value/onChange/facets contract — we only choose WHEN and HOW it is revealed
// (slim quick-chips inline + the full bar inside the sheet). Every image renders
// through <RecipeImage> via <MealCard>. Loading = shimmer skeletons, no layout
// shift. Empty = an invitation, not a dead end. queryRecipes(db, …) unchanged.
import { useCallback, useDeferredValue, useEffect, useId, useMemo, useRef, useState } from 'react'
import { db } from '../firebase.js'
import { queryRecipes, getFacets } from '../lib/queryRecipes.js'
import { useBasket } from '../state/basket.js'
import MealCard from '../components/MealCard.jsx'
import FilterBar, { FilterChip } from '../components/FilterBar.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Toast from '../components/Toast.jsx'
import './Browse.css'

// The curated rails. Each is a single queryRecipes call with fixed filters.
// `apply` is the FilterBar value the "See all" link switches the grid to.
const RAILS = [
  {
    key: 'quick',
    title: 'Quick dinners',
    blurb: 'On the table without much fuss.',
    filters: { course: 'Dinner', maxTime: 30 },
    sort: 'time',
    apply: { course: 'Dinner', maxTime: 30, sort: 'time' },
  },
  {
    key: 'veggie',
    title: 'Veggie',
    blurb: 'Meat-free meals worth making.',
    filters: { diet: 'Vegetarian' },
    sort: 'popularity',
    apply: { diet: 'Vegetarian' },
  },
  {
    key: 'british',
    title: 'British classics',
    blurb: 'The comforting stuff we grew up on.',
    filters: { cuisine: 'British' },
    sort: 'popularity',
    apply: { cuisine: 'British' },
  },
  {
    key: 'under30',
    title: 'Under 30 min',
    blurb: 'Fast from fridge to fork.',
    filters: { maxTime: 30 },
    sort: 'time',
    apply: { maxTime: 30, sort: 'time' },
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

const PAGE_SIZE = 24

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

// How many filter fields are active — drives the "Filters (n)" badge.
function activeFilterCount(value) {
  if (!value) return 0
  let n = 0
  if (value.cuisine) n += 1
  if (value.course) n += 1
  if (value.diet) n += 1
  if (value.freeFrom) n += 1
  if (value.maxTime) n += 1
  return n
}

// A friendly label for the time chips in the slim row.
function timeLabel(mins) {
  if (mins === 15) return 'Under 15 min'
  if (mins === 30) return 'Under 30 min'
  if (mins === 45) return 'Under 45 min'
  if (mins === 60) return 'Under 1 hour'
  return `Under ${mins} min`
}

function CardSkeleton({ variant = 'grid' }) {
  return (
    <div className={`browse-skel browse-skel--${variant}`} aria-hidden="true">
      <div className="browse-skel__img" />
      <div className="browse-skel__line browse-skel__line--title" />
      <div className="browse-skel__line browse-skel__line--meta" />
    </div>
  )
}

// One horizontal category shelf. Loads its own page; hides itself if empty.
function Rail({ rail, isInBasket, onToggle, onSeeAll }) {
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
        <div className="rail__heading">
          <h2 className="rail__title">{rail.title}</h2>
          <p className="rail__blurb">{rail.blurb}</p>
        </div>
        <button
          type="button"
          className="rail__seeall"
          onClick={() => onSeeAll(rail)}
        >
          See all
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </header>

      <div className="rail__viewport">
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
      </div>
    </section>
  )
}

export default function Browse() {
  const { has, add, remove } = useBasket()
  const [facets, setFacets] = useState(null)
  const [filter, setFilter] = useState(DEFAULT_FILTER)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [search, setSearch] = useState('')
  const deferredSearch = useDeferredValue(search)
  const sheetId = useId()

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

  const trimmedSearch = deferredSearch.trim()
  const searching = trimmedSearch.length > 0
  const filtering = useMemo(
    () => isFiltering(filter) || searching,
    [filter, searching],
  )
  const filterCount = useMemo(() => activeFilterCount(filter), [filter])

  // Load facets once for the FilterBar + the slim quick-chip row.
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

  // When a search is active we pull the relevant slice (filters still applied at
  // the index level) and narrow by title client-side. Title isn't indexed, so
  // search ranks within whatever the filter query returns — honest + fast.
  const matchesSearch = useCallback(
    (meal) => {
      if (!searching) return true
      const q = trimmedSearch.toLowerCase()
      const title = String(meal?.title || '').toLowerCase()
      if (title.includes(q)) return true
      const cuisine = String(meal?.cuisine || '').toLowerCase()
      return cuisine.includes(q)
    },
    [searching, trimmedSearch],
  )

  // Fresh query whenever the filter / search changes (only while filtering).
  useEffect(() => {
    if (!filtering) {
      setGridRecipes([])
      setCursor(null)
      setDone(false)
      setGridError(false)
      setLoading(false)
      return undefined
    }
    let live = true
    setLoading(true)
    setGridError(false)
    setDone(false)
    setGridRecipes([])
    setCursor(null)
    // When searching, pull a larger page so the title filter has more to match.
    const pageSize = searching ? PAGE_SIZE * 2 : PAGE_SIZE
    queryRecipes(db, {
      filters: queryFilters,
      sort: filter.sort,
      cursor: null,
      pageSize,
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
  }, [filtering, searching, queryFilters, filter.sort])

  const loadMore = useCallback(() => {
    if (loadingMore || loading || done || !cursor) return undefined
    let cancelled = false
    setLoadingMore(true)
    const pageSize = searching ? PAGE_SIZE * 2 : PAGE_SIZE
    queryRecipes(db, {
      filters: queryFilters,
      sort: filter.sort,
      cursor,
      pageSize,
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
  }, [loadingMore, loading, done, cursor, searching, queryFilters, filter.sort])

  // The visible grid: when searching, narrow the loaded page by title client-side.
  const visibleGrid = useMemo(
    () => (searching ? gridRecipes.filter(matchesSearch) : gridRecipes),
    [searching, gridRecipes, matchesSearch],
  )

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
      { rootMargin: '700px 0px' },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [filtering, done, loadMore])

  // When searching keeps trimming the page below a comfortable count but more
  // pages exist, keep pulling so a search never looks emptier than it is.
  useEffect(() => {
    if (!searching || done || loading || loadingMore) return
    if (visibleGrid.length < 8 && cursor) loadMore()
  }, [searching, done, loading, loadingMore, visibleGrid.length, cursor, loadMore])

  const resetAll = useCallback(() => {
    setFilter(DEFAULT_FILTER)
    setSearch('')
  }, [])

  const clearFilters = useCallback(() => setFilter(DEFAULT_FILTER), [])

  // "See all" on a rail: apply the rail's filters → the grid view.
  const applyRail = useCallback((rail) => {
    setSearch('')
    setFilter({ ...DEFAULT_FILTER, ...rail.apply })
    setSheetOpen(false)
    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() =>
        window.scrollTo({ top: 0, behavior: 'smooth' }),
      )
    }
  }, [])

  // ── Slim quick-chips: the handful of high-value shortcuts on the flick row ──
  const quickChips = useMemo(() => {
    const f = facets || {}
    const courses = (f.courses || []).map((c) => c.value)
    const diets = (f.dietLabels || []).map((d) => d.value)
    const cuisines = (f.cuisines || []).map((c) => c.value)
    const chips = []

    // Time-first — the delivery-app reflex is "fast".
    chips.push({
      key: 'quick-30',
      label: 'Under 30 min',
      active: filter.maxTime === 30,
      onClick: () =>
        setFilter((v) => ({
          ...v,
          maxTime: v.maxTime === 30 ? null : 30,
          sort: v.maxTime === 30 ? v.sort : 'time',
        })),
    })

    const wantCourses = ['Dinner', 'Lunch', 'Breakfast', 'Dessert'].filter((c) =>
      courses.includes(c),
    )
    for (const course of wantCourses) {
      chips.push({
        key: `course-${course}`,
        label: course,
        active: filter.course === course,
        onClick: () =>
          setFilter((v) => ({
            ...v,
            course: v.course === course ? '' : course,
          })),
      })
    }

    const wantDiets = ['Vegetarian', 'Vegan', 'Pescatarian'].filter((d) =>
      diets.includes(d),
    )
    for (const diet of wantDiets) {
      chips.push({
        key: `diet-${diet}`,
        label: diet,
        active: filter.diet === diet,
        onClick: () =>
          setFilter((v) => ({ ...v, diet: v.diet === diet ? '' : diet })),
      })
    }

    const wantCuisines = ['British', 'Italian', 'Indian', 'Thai', 'Mexican'].filter(
      (c) => cuisines.includes(c),
    )
    for (const cuisine of wantCuisines) {
      chips.push({
        key: `cuisine-${cuisine}`,
        label: cuisine,
        active: filter.cuisine === cuisine,
        onClick: () =>
          setFilter((v) => ({
            ...v,
            cuisine: v.cuisine === cuisine ? '' : cuisine,
          })),
      })
    }

    return chips
  }, [facets, filter.maxTime, filter.course, filter.diet, filter.cuisine])

  const anyActive = filtering

  return (
    <div className="browse">
      {/* Hero — a single appetising statement of intent. No stat walls. */}
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

      {/* ── SLIM sticky bar: flick-row of chips + search + Filters button ───── */}
      <div className="browse-bar" role="search">
        <div className="browse-bar__row">
          <label className="browse-search">
            <span className="u-visually-hidden">Search meals</span>
            <svg
              className="browse-search__icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              className="browse-search__input"
              placeholder="Search meals"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
              enterKeyHint="search"
            />
            {search ? (
              <button
                type="button"
                className="browse-search__clear"
                onClick={() => setSearch('')}
                aria-label="Clear search"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            ) : null}
          </label>

          <button
            type="button"
            className={
              'browse-bar__filters' + (filterCount > 0 ? ' is-active' : '')
            }
            onClick={() => setSheetOpen((o) => !o)}
            aria-expanded={sheetOpen}
            aria-controls={sheetId}
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16M7 12h10M10 18h4" />
            </svg>
            <span>Filters</span>
            {filterCount > 0 ? (
              <span className="browse-bar__count" aria-hidden="true">
                {filterCount}
              </span>
            ) : null}
          </button>
        </div>

        {/* Flickable quick-chip row — momentum, snap, hidden scrollbar, edge fade. */}
        <div className="browse-chiprow">
          <div className="browse-chiprow__track" role="list">
            {anyActive ? (
              <button
                type="button"
                className="browse-chiprow__clear"
                onClick={resetAll}
                role="listitem"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
                Clear
              </button>
            ) : null}
            {quickChips.map((chip) => (
              <span className="browse-chiprow__item" key={chip.key} role="listitem">
                <FilterChip
                  label={chip.label}
                  active={chip.active}
                  onClick={chip.onClick}
                />
              </span>
            ))}
          </div>
        </div>

        {/* Collapsible sheet — the FULL FilterBar, closed by default. It never
            overlays the cards: it pushes content down only while open. */}
        <div
          id={sheetId}
          className={'browse-sheet' + (sheetOpen ? ' is-open' : '')}
          hidden={!sheetOpen}
        >
          <div className="browse-sheet__inner browse-filter-sheet">
            <FilterBar facets={facets} value={filter} onChange={setFilter} />
            <div className="browse-sheet__actions">
              <button
                type="button"
                className="u-btn u-btn--quiet"
                onClick={clearFilters}
                disabled={filterCount === 0}
              >
                Clear filters
              </button>
              <button
                type="button"
                className="u-btn u-btn--primary"
                onClick={() => setSheetOpen(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Default view: curated rails. Filtered / searching view: the grid. */}
      {!filtering ? (
        <div className="browse-rails">
          {RAILS.map((rail) => (
            <Rail
              key={rail.key}
              rail={rail}
              isInBasket={has}
              onToggle={handleToggle}
              onSeeAll={applyRail}
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
              onAction={resetAll}
            />
          ) : null}

          {!loading && !gridError && visibleGrid.length === 0 ? (
            <EmptyState
              title={
                searching
                  ? `No meals match “${trimmedSearch}” just yet`
                  : 'No meals match just yet'
              }
              body="Loosen a filter or try a different word — there's a lot in the larder."
              actionLabel="Start over"
              onAction={resetAll}
            />
          ) : null}

          {!loading && !gridError && visibleGrid.length > 0 ? (
            <>
              <div className="browse-grid">
                {visibleGrid.map((meal) => (
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
                  {/* The infinite-scroll sentinel — loads the next page well
                      before it reaches the viewport. The button is the
                      keyboard / no-IO fallback, never the primary path. */}
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
