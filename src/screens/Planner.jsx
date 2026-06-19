// Weekly meal planner (roadmap #43) — assign meals to Mon–Sun breakfast / lunch /
// dinner slots, then "Build this week's shopping list" to load every planned meal
// into the basket and write one consolidated, aisle-sorted list. The plan persists
// in localStorage (src/state/planner.js); picking meals reuses the one-read
// home/feed and the catalogue search, so the screen stays cheap on the Spark
// read budget.
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase.js'
import { getHomeFeed, searchRecipes } from '../lib/queryRecipes.js'
import { useBasket } from '../state/basket.js'
import {
  DAYS,
  DAY_LABELS,
  SLOTS,
  SLOT_LABELS,
  readWeek,
  writeWeek,
  setSlot,
  removeSlot,
  assignedRecipeIds,
  countAssigned,
  emptyWeek,
} from '../state/planner.js'
import { useDocumentTitle } from '../useDocumentTitle.js'
import { trackEvent } from '../analytics.js'
import RecipeImage from '../components/RecipeImage.jsx'
import './Planner.css'

// Flatten the feed rails into a single de-duplicated pool of suggestion cards.
function poolFromFeed(feed) {
  if (!feed || !Array.isArray(feed.rails)) return []
  const seen = new Set()
  const out = []
  for (const rail of feed.rails) {
    for (const card of Array.isArray(rail.cards) ? rail.cards : []) {
      if (card && card.id && !seen.has(card.id)) {
        seen.add(card.id)
        out.push(card)
      }
    }
  }
  return out
}

export default function Planner() {
  const navigate = useNavigate()
  const { replaceBasket, householdSize } = useBasket()
  useDocumentTitle('Plan your week')

  const [week, setWeek] = useState(() => readWeek())
  const [picker, setPicker] = useState(null) // { day, slot } | null
  const [pool, setPool] = useState([])
  const [term, setTerm] = useState('')
  const [results, setResults] = useState(null) // null = show pool; array = search hits
  const [searching, setSearching] = useState(false)

  // Persist the plan whenever it changes.
  useEffect(() => {
    writeWeek(week)
  }, [week])

  // Load the one-read feed once for the picker's suggestions.
  useEffect(() => {
    let live = true
    getHomeFeed(db)
      .then((feed) => {
        if (live) setPool(poolFromFeed(feed))
      })
      .catch(() => {
        if (live) setPool([])
      })
    return () => {
      live = false
    }
  }, [])

  // Debounced catalogue search inside the picker.
  useEffect(() => {
    const q = term.trim()
    if (!q) {
      setResults(null)
      setSearching(false)
      return undefined
    }
    setSearching(true)
    const t = setTimeout(() => {
      let live = true
      searchRecipes(db, q, { pageSize: 24 })
        .then((res) => {
          if (live) setResults(Array.isArray(res?.recipes) ? res.recipes : [])
        })
        .catch(() => {
          if (live) setResults([])
        })
        .finally(() => {
          if (live) setSearching(false)
        })
      return () => {
        live = false
      }
    }, 300)
    return () => clearTimeout(t)
  }, [term])

  const openPicker = useCallback((day, slot) => {
    setTerm('')
    setResults(null)
    setPicker({ day, slot })
  }, [])

  const closePicker = useCallback(() => setPicker(null), [])

  const assign = useCallback(
    (recipe) => {
      if (!picker) return
      setWeek((w) => setSlot(w, picker.day, picker.slot, recipe))
      setPicker(null)
    },
    [picker],
  )

  const clearSlot = useCallback((day, slot) => {
    setWeek((w) => removeSlot(w, day, slot))
  }, [])

  const ids = useMemo(() => assignedRecipeIds(week), [week])
  const filled = useMemo(() => countAssigned(week), [week])

  const buildList = useCallback(() => {
    if (ids.length === 0) return
    replaceBasket({ recipeIds: ids, householdSize, portions: {} })
    trackEvent('planner_build_list', { count: ids.length })
    navigate('/list')
  }, [ids, replaceBasket, householdSize, navigate])

  const clearAll = useCallback(() => {
    setWeek(emptyWeek())
  }, [])

  // Close the picker on Escape.
  useEffect(() => {
    if (!picker) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') closePicker()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [picker, closePicker])

  const pickerList = results === null ? pool : results

  return (
    <div className="planner">
      <header className="planner-head">
        <h1 className="planner-title">Plan your week</h1>
        <p className="planner-lede">
          Drop a meal into any slot, then build one shopping list for the whole
          week — quantities scaled and aisles sorted.
        </p>
      </header>

      <div className="planner-grid" role="table" aria-label="Weekly meal plan">
        {DAYS.map((day) => (
          <section className="planner-day" key={day} role="row">
            <h2 className="planner-day__name">{DAY_LABELS[day]}</h2>
            <div className="planner-day__slots">
              {SLOTS.map((slot) => {
                const ref = week.days[day]?.[slot]
                return (
                  <div className="planner-slot" key={slot} role="cell">
                    <span className="planner-slot__label">
                      {SLOT_LABELS[slot]}
                    </span>
                    {ref ? (
                      <div className="planner-slot__meal">
                        <RecipeImage
                          src={ref.imageUrl}
                          alt=""
                          ratio="1/1"
                          rounded
                          w={64}
                          className="planner-slot__thumb"
                        />
                        <span className="planner-slot__mealtitle">
                          {ref.title || 'Meal'}
                        </span>
                        <button
                          type="button"
                          className="planner-slot__remove"
                          onClick={() => clearSlot(day, slot)}
                          aria-label={`Remove ${ref.title || 'meal'} from ${DAY_LABELS[day]} ${SLOT_LABELS[slot]}`}
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="planner-slot__add"
                        onClick={() => openPicker(day, slot)}
                        aria-label={`Add a meal to ${DAY_LABELS[day]} ${SLOT_LABELS[slot]}`}
                      >
                        + Add meal
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Sticky action bar */}
      <div className="planner-actions">
        <p className="planner-actions__count" aria-live="polite">
          {filled === 0
            ? 'No meals planned yet'
            : `${filled} ${filled === 1 ? 'meal' : 'meals'} planned · ${ids.length} distinct`}
        </p>
        <div className="planner-actions__btns">
          <button
            type="button"
            className="u-btn u-btn--quiet"
            onClick={clearAll}
            disabled={filled === 0}
          >
            Clear week
          </button>
          <button
            type="button"
            className="u-btn u-btn--primary"
            onClick={buildList}
            disabled={ids.length === 0}
          >
            Build this week’s shopping list
          </button>
        </div>
      </div>

      {/* ── Meal picker ───────────────────────────────────────────────────── */}
      {picker ? (
        <div
          className="planner-picker"
          role="dialog"
          aria-modal="true"
          aria-label={`Choose a meal for ${DAY_LABELS[picker.day]} ${SLOT_LABELS[picker.slot]}`}
        >
          <div
            className="planner-picker__backdrop"
            onClick={closePicker}
            aria-hidden="true"
          />
          <div className="planner-picker__panel">
            <header className="planner-picker__head">
              <h2 className="planner-picker__title">
                {DAY_LABELS[picker.day]} · {SLOT_LABELS[picker.slot]}
              </h2>
              <button
                type="button"
                className="planner-picker__close"
                onClick={closePicker}
                aria-label="Close meal picker"
              >
                ✕
              </button>
            </header>

            <label className="planner-picker__search">
              <span className="sr-only">Search meals</span>
              <input
                type="search"
                placeholder="Search meals or ingredients"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                autoComplete="off"
                enterKeyHint="search"
                autoFocus
              />
            </label>

            <div className="planner-picker__results">
              {searching ? (
                <p className="planner-picker__status">Searching…</p>
              ) : null}
              {!searching && pickerList.length === 0 ? (
                <p className="planner-picker__status">
                  {results === null
                    ? 'Suggestions are loading…'
                    : 'No meals match — try another word.'}
                </p>
              ) : null}
              <ul className="planner-picker__list">
                {pickerList.map((meal) => (
                  <li key={meal.id}>
                    <button
                      type="button"
                      className="planner-picker__item"
                      onClick={() => assign(meal)}
                    >
                      <RecipeImage
                        src={meal.imageUrl}
                        alt=""
                        ratio="1/1"
                        rounded
                        w={56}
                        className="planner-picker__thumb"
                      />
                      <span className="planner-picker__itemtitle">
                        {meal.title || 'Meal'}
                      </span>
                      {meal.cuisine || meal.course ? (
                        <span className="planner-picker__itemmeta">
                          {[meal.cuisine, meal.course].filter(Boolean).join(' · ')}
                        </span>
                      ) : null}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
