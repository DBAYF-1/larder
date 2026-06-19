// Browse — the delivery-app home (Just Eat / Deliveroo benchmark).
//
// Layout, top to bottom:
//   1. A small hero (one appetising line of intent — no stat walls).
//   2. A SLIM sticky bar (~56px): a horizontally FLICKABLE row of the key chips
//      (momentum scroll, scroll-snap, hidden scrollbar, edge fade, no wrap), a
//      compact search box, and a "Filters" button that opens a COLLAPSIBLE sheet
//      (closed by default) holding the facet controls ONCE. The bar never
//      overlays the cards, so tiles are always tappable.
//   3. Flickable category RAILS (momentum, scroll-snap, edge fade, "See all").
//   4. A responsive image-led GRID with smooth INFINITE SCROLL (IntersectionObserver
//      sentinel) the moment a filter / search is active.
//
// Read economy (roadmap #6): the home renders rails + facets from ONE pre-baked
// home/feed document (getHomeFeed) when it exists, falling back to the per-rail
// queries + getFacets only when the doc is absent. State (filters + search) is
// URL-encoded via useSearchParams so a filtered view is shareable and survives
// back-navigation (roadmap #12); scroll position is restored from sessionStorage.
// Dropped filter predicates are re-applied client-side with an honest note
// (roadmap #3); search uses the baked searchTokens[] field (roadmap #22); the
// free-from choice is first-class and remembered (roadmap #36).
//
// The facet controls render exactly once — FilterBar variant="embedded" supplies
// just the control body; Browse owns the sheet + its Clear/Done actions (the old
// nested-filter bug, roadmap #16).
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useSearchParams } from 'react-router-dom'
import { db } from '../firebase.js'
import {
  queryRecipes,
  getFacets,
  getHomeFeed,
  searchRecipes,
} from '../lib/queryRecipes.js'
import { useBasket } from '../state/basket.js'
import MealCard from '../components/MealCard.jsx'
import FilterBar, { FilterChip } from '../components/FilterBar.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Toast from '../components/Toast.jsx'
import './Browse.css'

// The curated FALLBACK rails — used only when the pre-baked home/feed doc is
// absent. Each is a single queryRecipes call with fixed filters; `apply` is the
// FilterBar value the "See all" link switches the grid to. These mirror the feed
// rails in ingestion/pipeline/buildFeed.js so the home reads identically either
// way.
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

// localStorage key for the remembered free-from choice (roadmap #36). It is a
// first-class, persistent affordance: once chosen it survives reloads and is the
// default free-from filter on a fresh visit (unless the URL overrides it).
const FREEFROM_KEY = 'larder.freeFrom'

// sessionStorage key prefix for Browse scroll restoration (roadmap #12).
const SCROLL_KEY = 'larder.browse.scroll'

// Human-friendly labels for a dropped-filter key, used in the honest
// "closest matches" note (roadmap #3).
const FILTER_NOUN = {
  cuisine: 'cuisine',
  course: 'course',
  diet: 'diet',
  freeFrom: 'free-from',
}

// ── localStorage helpers (defensive: storage can throw in private mode) ───────
function readFreeFrom() {
  try {
    return window.localStorage.getItem(FREEFROM_KEY) || ''
  } catch {
    return ''
  }
}

function writeFreeFrom(value) {
  try {
    if (value) window.localStorage.setItem(FREEFROM_KEY, value)
    else window.localStorage.removeItem(FREEFROM_KEY)
  } catch {
    /* ignore — a remembered free-from is a nicety, never load-bearing */
  }
}

// ── URL <-> filter encoding (roadmap #12) ─────────────────────────────────────
// The active filter + search live in the query string so a filtered view is
// shareable and restorable on back-navigation. Empty/default fields are omitted
// to keep URLs clean.
function filterFromParams(params, fallbackFreeFrom = '') {
  const get = (k) => params.get(k) || ''
  const maxTimeRaw = get('maxTime')
  const maxTime = maxTimeRaw ? Number(maxTimeRaw) : null
  const sort = get('sort')
  // A URL without a freeFrom param falls back to the remembered choice, so the
  // user's free-from preference rides along on a fresh visit (roadmap #36).
  const freeFrom = params.has('freeFrom') ? get('freeFrom') : fallbackFreeFrom
  return {
    cuisine: get('cuisine'),
    course: get('course'),
    diet: get('diet'),
    freeFrom,
    maxTime: Number.isFinite(maxTime) && maxTime > 0 ? maxTime : null,
    sort: sort === 'time' || sort === 'title' ? sort : 'popularity',
  }
}

function paramsFromState(filter, search) {
  const next = {}
  if (filter.cuisine) next.cuisine = filter.cuisine
  if (filter.course) next.course = filter.course
  if (filter.diet) next.diet = filter.diet
  if (filter.freeFrom) next.freeFrom = filter.freeFrom
  if (filter.maxTime) next.maxTime = String(filter.maxTime)
  if (filter.sort && filter.sort !== 'popularity') next.sort = filter.sort
  const q = search.trim()
  if (q) next.q = q
  return next
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

// Build the filter payload for queryRecipes from FilterBar value (drops empties).
function toQueryFilters(filter) {
  const f = {}
  if (filter.cuisine) f.cuisine = filter.cuisine
  if (filter.course) f.course = filter.course
  if (filter.diet) f.diet = filter.diet
  if (filter.freeFrom) f.freeFrom = filter.freeFrom
  if (filter.maxTime) f.maxTime = filter.maxTime
  return f
}

// Predicate a recipe against a single (potentially dropped) filter key, so we
// can re-apply client-side the predicate the index could not serve (roadmap #3).
function recipeMatchesFilter(meal, key, value) {
  if (!value) return true
  switch (key) {
    case 'cuisine':
      return String(meal?.cuisine || '') === value
    case 'course':
      return String(meal?.course || '') === value
    case 'diet':
      return Array.isArray(meal?.dietLabels) && meal.dietLabels.includes(value)
    case 'freeFrom':
      return (
        Array.isArray(meal?.healthLabels) && meal.healthLabels.includes(value)
      )
    default:
      return true
  }
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

// One horizontal category shelf. Cards come either from the pre-baked feed
// (passed in) or from a live per-rail query (loaded here). Hides itself if empty.
function Rail({ rail, isInBasket, onToggle, onSeeAll }) {
  const [recipes, setRecipes] = useState(
    Array.isArray(rail.cards) ? rail.cards : null,
  )
  const [error, setError] = useState(false)

  const preloaded = Array.isArray(rail.cards)

  useEffect(() => {
    // When the rail already carries baked cards we render them directly — no read.
    if (preloaded) {
      setRecipes(Array.isArray(rail.cards) ? rail.cards : [])
      setError(false)
      return undefined
    }
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
  }, [rail, preloaded])

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
  const [searchParams, setSearchParams] = useSearchParams()

  // The remembered free-from choice seeds the initial filter when the URL omits
  // one. Read once on mount (it can't change underneath us this render).
  const initialFreeFromRef = useRef(readFreeFrom())

  // Filter + search are DERIVED from the URL so back-navigation restores them and
  // the view is shareable (roadmap #12). The URL is the single source of truth.
  const filter = useMemo(
    () => filterFromParams(searchParams, initialFreeFromRef.current),
    [searchParams],
  )
  const urlSearch = searchParams.get('q') || ''

  // The search box is locally controlled for snappy typing; we debounce its value
  // into the URL (which then drives the actual query).
  const [searchInput, setSearchInput] = useState(urlSearch)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [facets, setFacets] = useState(null)
  const [feed, setFeed] = useState(null) // home/feed doc (null until resolved)
  const [feedResolved, setFeedResolved] = useState(false)
  const sheetId = useId()

  // Grid (filtered/search) state.
  const [gridRecipes, setGridRecipes] = useState([])
  const [cursor, setCursor] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [done, setDone] = useState(false)
  const [gridError, setGridError] = useState(false)
  // Filter keys dropped by the planner (no composite index) and re-applied
  // client-side — drives the honest "closest matches" note (roadmap #3).
  const [droppedFilters, setDroppedFilters] = useState([])

  // Toast for add-to-basket from a card.
  const [toast, setToast] = useState(false)
  const toastTimer = useRef(null)

  const trimmedSearch = urlSearch.trim()
  const searching = trimmedSearch.length > 0
  const filtering = isFiltering(filter) || searching
  const filterCount = activeFilterCount(filter)

  // ── URL writers ────────────────────────────────────────────────────────────
  // Commit a filter change to the URL (replace history so chip-toggling doesn't
  // flood the back stack). Always remember the free-from choice (roadmap #36).
  const commitFilter = useCallback(
    (nextFilter) => {
      writeFreeFrom(nextFilter.freeFrom || '')
      setSearchParams(paramsFromState(nextFilter, trimmedSearch), {
        replace: true,
      })
    },
    [setSearchParams, trimmedSearch],
  )

  // FilterBar / chips hand us a full next value object.
  const handleFilterChange = useCallback(
    (next) => {
      commitFilter({ ...DEFAULT_FILTER, ...next })
    },
    [commitFilter],
  )

  // ── Debounce the search box into the URL ────────────────────────────────────
  // Keep the box in sync when the URL changes from elsewhere (back nav, See all).
  useEffect(() => {
    setSearchInput(urlSearch)
  }, [urlSearch])

  useEffect(() => {
    const next = searchInput.trim()
    if (next === trimmedSearch) return undefined
    const t = setTimeout(() => {
      setSearchParams(paramsFromState(filter, next), { replace: true })
    }, 300)
    return () => clearTimeout(t)
  }, [searchInput, trimmedSearch, filter, setSearchParams])

  // ── Load the home: ONE pre-baked feed read, falling back to live queries ─────
  useEffect(() => {
    let live = true
    getHomeFeed(db)
      .then((doc) => {
        if (!live) return
        if (doc && Array.isArray(doc.rails) && doc.rails.length > 0) {
          setFeed(doc)
          // The feed embeds the facets summary, so no separate facets read.
          setFacets(doc.facets || null)
        } else {
          setFeed(null)
        }
      })
      .catch(() => {
        if (live) setFeed(null)
      })
      .finally(() => {
        if (live) setFeedResolved(true)
      })
    return () => {
      live = false
    }
  }, [])

  // Fallback facets read — ONLY when the feed (which embeds facets) is absent.
  useEffect(() => {
    if (!feedResolved) return undefined
    if (feed) return undefined // facets already came from the feed doc
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
  }, [feedResolved, feed])

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

  const queryFilters = useMemo(() => toQueryFilters(filter), [filter])

  // Stable key so the grid effect only re-runs when something it reads changes
  // (objects would be new each render).
  const queryFiltersKey = useMemo(
    () => JSON.stringify(queryFilters),
    [queryFilters],
  )

  // ── Fresh query whenever the filter / search changes (only while filtering) ──
  useEffect(() => {
    if (!filtering) {
      setGridRecipes([])
      setCursor(null)
      setDone(false)
      setGridError(false)
      setLoading(false)
      setDroppedFilters([])
      return undefined
    }
    let live = true
    setLoading(true)
    setGridError(false)
    setDone(false)
    setGridRecipes([])
    setCursor(null)
    setDroppedFilters([])

    // Search uses the baked searchTokens[] field across the WHOLE catalogue
    // (title + ingredient names) — a single array-contains-any read. Any active
    // filters are then re-applied client-side over the search hits (search and
    // the filter indexes can't be combined in one Firestore query).
    if (searching) {
      searchRecipes(db, trimmedSearch, { pageSize: PAGE_SIZE * 2 })
        .then((res) => {
          if (!live) return
          const list = Array.isArray(res?.recipes) ? res.recipes : []
          setGridRecipes(list)
          setCursor(null) // search returns a single ranked page
          setDone(true)
          // When filters accompany a search, every active filter is applied
          // client-side, so report them all as the narrowing note (roadmap #3).
          setDroppedFilters(
            Object.keys(queryFilters).filter((k) => k in FILTER_NOUN),
          )
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
    }

    queryRecipes(db, {
      filters: queryFilters,
      sort: filter.sort,
      cursor: null,
      pageSize: PAGE_SIZE,
    })
      .then((res) => {
        if (!live) return
        const list = Array.isArray(res?.recipes) ? res.recipes : []
        setGridRecipes(list)
        setCursor(res?.nextCursor ?? null)
        setDone(!res?.nextCursor || list.length === 0)
        setDroppedFilters(
          Array.isArray(res?.appliedFallback) ? res.appliedFallback : [],
        )
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
    // queryFiltersKey + filter.sort + searching cover everything the query reads.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtering, searching, trimmedSearch, queryFiltersKey, filter.sort])

  const loadMore = useCallback(() => {
    if (loadingMore || loading || done || !cursor || searching) return undefined
    let cancelled = false
    setLoadingMore(true)
    queryRecipes(db, {
      filters: queryFilters,
      sort: filter.sort,
      cursor,
      pageSize: PAGE_SIZE,
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

  // ── The visible grid ─────────────────────────────────────────────────────
  // Re-apply EVERY dropped predicate client-side so the filters never silently
  // lie (roadmap #3). During a search the active filters are all applied here
  // (search can't be combined with the filter indexes). The dropped set drives
  // the honest "closest matches" note below.
  const visibleGrid = useMemo(() => {
    if (droppedFilters.length === 0) return gridRecipes
    return gridRecipes.filter((meal) =>
      droppedFilters.every((key) =>
        recipeMatchesFilter(meal, key, filter[key]),
      ),
    )
  }, [gridRecipes, droppedFilters, filter])

  // Whether the page is genuinely narrowed client-side (so the note is honest:
  // only shown when a predicate was actually dropped AND has a value set).
  const narrowedKeys = useMemo(
    () => droppedFilters.filter((k) => filter[k]),
    [droppedFilters, filter],
  )

  // Infinite scroll via a sentinel at the foot of the grid (paged queries only).
  const sentinelRef = useRef(null)
  useEffect(() => {
    if (!filtering || done || searching) return undefined
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
  }, [filtering, done, searching, loadMore])

  // When client-side narrowing trims a paged result below a comfortable count but
  // more pages exist, keep pulling so a narrowed view never looks emptier than it
  // is (roadmap #3 — honest, not anaemic).
  useEffect(() => {
    if (searching || done || loading || loadingMore) return
    if (narrowedKeys.length > 0 && visibleGrid.length < 8 && cursor) loadMore()
  }, [
    searching,
    done,
    loading,
    loadingMore,
    narrowedKeys.length,
    visibleGrid.length,
    cursor,
    loadMore,
  ])

  // ── Scroll restoration (roadmap #12) ─────────────────────────────────────
  // Save the scroll position keyed by the current view (filters + search) so the
  // exact spot is restored when the user comes back to this view.
  const viewKey = useMemo(
    () => SCROLL_KEY + ':' + searchParams.toString(),
    [searchParams],
  )

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const save = () => {
      try {
        window.sessionStorage.setItem(viewKey, String(window.scrollY))
      } catch {
        /* ignore */
      }
    }
    // Persist on unload AND on view change (cleanup runs before the next effect).
    window.addEventListener('pagehide', save)
    return () => {
      save()
      window.removeEventListener('pagehide', save)
    }
  }, [viewKey])

  // Restore once the content that determines page height is present.
  const restoredRef = useRef('')
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (restoredRef.current === viewKey) return
    // Wait until the view has something to scroll to (rails ready, or grid done).
    const contentReady = filtering ? !loading : feedResolved
    if (!contentReady) return
    restoredRef.current = viewKey
    let saved = null
    try {
      saved = window.sessionStorage.getItem(viewKey)
    } catch {
      saved = null
    }
    const y = saved != null ? Number(saved) : 0
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: Number.isFinite(y) ? y : 0, behavior: 'auto' })
    })
  }, [viewKey, filtering, loading, feedResolved])

  const resetAll = useCallback(() => {
    writeFreeFrom('')
    setSearchInput('')
    setSearchParams({}, { replace: true })
  }, [setSearchParams])

  const clearFilters = useCallback(() => {
    writeFreeFrom('')
    setSearchParams(paramsFromState(DEFAULT_FILTER, trimmedSearch), {
      replace: true,
    })
  }, [setSearchParams, trimmedSearch])

  // "See all" on a rail: apply the rail's filters → the grid view. Push a new
  // history entry so Back returns to the home (a deliberate navigation).
  const applyRail = useCallback(
    (rail) => {
      const next = { ...DEFAULT_FILTER, ...(rail.apply || {}) }
      writeFreeFrom(next.freeFrom || '')
      setSearchInput('')
      setSearchParams(paramsFromState(next, ''))
      setSheetOpen(false)
      if (typeof window !== 'undefined') {
        window.requestAnimationFrame(() =>
          window.scrollTo({ top: 0, behavior: 'smooth' }),
        )
      }
    },
    [setSearchParams],
  )

  // ── Slim quick-chips: high-value shortcuts on the flick row ────────────────
  const quickChips = useMemo(() => {
    const f = facets || {}
    const courses = (f.courses || []).map((c) => c.value)
    const diets = (f.dietLabels || []).map((d) => d.value)
    const cuisines = (f.cuisines || []).map((c) => c.value)
    const health = (f.healthLabels || []).map((h) => h.value)
    const chips = []

    // Free-from first — it is the first-class wedge affordance (roadmap #36).
    // Surface the user's remembered choice up front; otherwise the top option.
    const remembered = initialFreeFromRef.current
    const freeFromChoice =
      (remembered && health.includes(remembered) && remembered) ||
      (health.includes('Gluten-free') && 'Gluten-free') ||
      health[0]
    if (freeFromChoice) {
      chips.push({
        key: 'freefrom-' + freeFromChoice,
        label: freeFromChoice,
        active: filter.freeFrom === freeFromChoice,
        onClick: () =>
          commitFilter({
            ...filter,
            freeFrom:
              filter.freeFrom === freeFromChoice ? '' : freeFromChoice,
          }),
      })
    }

    // Time-first — the delivery-app reflex is "fast".
    chips.push({
      key: 'quick-30',
      label: 'Under 30 min',
      active: filter.maxTime === 30,
      onClick: () =>
        commitFilter({
          ...filter,
          maxTime: filter.maxTime === 30 ? null : 30,
          sort: filter.maxTime === 30 ? filter.sort : 'time',
        }),
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
          commitFilter({
            ...filter,
            course: filter.course === course ? '' : course,
          }),
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
          commitFilter({
            ...filter,
            diet: filter.diet === diet ? '' : diet,
          }),
      })
    }

    const wantCuisines = [
      'British',
      'Italian',
      'Indian',
      'Thai',
      'Mexican',
    ].filter((c) => cuisines.includes(c))
    for (const cuisine of wantCuisines) {
      chips.push({
        key: `cuisine-${cuisine}`,
        label: cuisine,
        active: filter.cuisine === cuisine,
        onClick: () =>
          commitFilter({
            ...filter,
            cuisine: filter.cuisine === cuisine ? '' : cuisine,
          }),
      })
    }

    return chips
  }, [facets, filter, commitFilter])

  const anyActive = filtering

  // Rails to render: the baked feed's rails (with cards) if present, else the
  // curated fallback rails (each loads its own page).
  const railsToRender = useMemo(() => {
    if (feed && Array.isArray(feed.rails) && feed.rails.length > 0) {
      return feed.rails.map((r) => ({
        key: r.key,
        title: r.title,
        blurb: r.blurb,
        cards: Array.isArray(r.cards) ? r.cards : [],
        apply: r.apply || {},
      }))
    }
    return RAILS
  }, [feed])

  // Honest "closest matches" note copy (roadmap #3).
  const narrowedNote = useMemo(() => {
    if (narrowedKeys.length === 0) return null
    const nouns = narrowedKeys.map((k) => FILTER_NOUN[k] || k)
    const list =
      nouns.length === 1
        ? nouns[0]
        : nouns.slice(0, -1).join(', ') + ' and ' + nouns[nouns.length - 1]
    return `Showing closest matches — your ${list} filter${
      nouns.length > 1 ? 's are' : ' is'
    } applied here on the loaded results.`
  }, [narrowedKeys])

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
            <span className="u-visually-hidden">Search meals and ingredients</span>
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
              placeholder="Search meals or ingredients"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              autoComplete="off"
              enterKeyHint="search"
            />
            {searchInput ? (
              <button
                type="button"
                className="browse-search__clear"
                onClick={() => setSearchInput('')}
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

        {/* Collapsible sheet — the facet controls, rendered ONCE via the embedded
            FilterBar (roadmap #16). Closed by default; pushes content down only
            while open, never overlaying the cards. */}
        <div
          id={sheetId}
          className={'browse-sheet' + (sheetOpen ? ' is-open' : '')}
          hidden={!sheetOpen}
        >
          <div className="browse-sheet__inner browse-filter-sheet">
            <FilterBar
              facets={facets}
              value={filter}
              onChange={handleFilterChange}
              variant="embedded"
            />
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
          {railsToRender.map((rail) => (
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
          {/* Honest narrowing note: shown when a filter predicate is applied
              client-side because no single index covered the combination. */}
          {!loading && !gridError && narrowedNote && visibleGrid.length > 0 ? (
            <p className="browse-note" role="status">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8h.01M11 12h1v4h1" />
              </svg>
              {narrowedNote}
            </p>
          ) : null}

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
                {visibleGrid.map((meal, i) => (
                  <MealCard
                    key={meal.id}
                    meal={meal}
                    variant="grid"
                    inBasket={has(meal.id)}
                    onToggle={() => handleToggle(meal)}
                    priority={i < 6}
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
