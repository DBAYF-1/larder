// <FilterBar facets value onChange /> with <FilterChip> + <SortSelect>
// (CONTRACTS.md §4). Co-located here for cohesion; all three are exported.
//
//   facets = { cuisines, courses, dietLabels, healthLabels }  // [{value,count}]
//   value  = { cuisine, course, diet, freeFrom, maxTime, sort }
//
// Each change calls onChange with the FULL next value object. A selected chip
// toggles back off when clicked again (set the field to null/empty).
//
// PRESENTATION (delivery-app pattern — Just Eat / Deliveroo):
//   • A SLIM bar (~56px): one horizontally FLICKABLE row of primary chips
//     (course + top cuisines) with momentum scroll, scroll-snap, hidden
//     scrollbar, fading edges, no wrap — plus a "Filters" button (active-count
//     badge) that toggles a COLLAPSIBLE panel (CLOSED by default).
//   • The panel holds the full controls: course, cuisine, diet, free-from,
//     ready-in time and the sort select, with Clear / Apply affordances.
//   • The panel is an ABSOLUTE overlay so opening it never grows the slim bar
//     (the parent .browse-filters wrapper is itself sticky — a flow-expanding
//     panel would re-create the "filter blocks the screen" bug).
import { useEffect, useId, useRef, useState } from 'react'
import './FilterBar.css'

const SORT_OPTIONS = [
  { value: 'popularity', label: 'Most popular' },
  { value: 'time', label: 'Quickest first' },
  { value: 'title', label: 'A to Z' },
]

const MAX_TIME_OPTIONS = [
  { value: 15, label: 'Under 15 min' },
  { value: 30, label: 'Under 30 min' },
  { value: 45, label: 'Under 45 min' },
  { value: 60, label: 'Under 1 hour' },
]

// How many cuisine chips ride along in the slim flickable row.
const PRIMARY_CUISINE_COUNT = 6

export function FilterChip({ label, active = false, onClick, className = '' }) {
  return (
    <button
      type="button"
      className={'larder-chip' + (active ? ' is-active' : '') + (className ? ' ' + className : '')}
      onClick={onClick}
      aria-pressed={active}
    >
      {label}
    </button>
  )
}

export function SortSelect({ value, onChange }) {
  const id = useId()
  return (
    <div className="larder-sort">
      <label htmlFor={id} className="larder-sort__label">
        Sort by
      </label>
      <div className="larder-sort__control">
        <select
          id={id}
          className="larder-sort__select"
          value={value ?? 'popularity'}
          onChange={(event) => onChange?.(event.target.value)}
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <svg
          className="larder-sort__chevron"
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
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  )
}

function FacetGroup({ legend, options, selected, onSelect, limit = 10 }) {
  const list = Array.isArray(options) ? options.slice(0, limit) : []
  if (list.length === 0) return null

  return (
    <fieldset className="larder-facet">
      <legend className="larder-facet__legend">{legend}</legend>
      <div className="larder-facet__chips">
        {list.map((opt) => {
          const isActive = selected === opt.value
          return (
            <FilterChip
              key={opt.value}
              label={opt.value}
              active={isActive}
              onClick={() => onSelect(isActive ? null : opt.value)}
            />
          )
        })}
      </div>
    </fieldset>
  )
}

export default function FilterBar({ facets, value, onChange }) {
  const v = value || {}
  const f = facets || {}
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const rootRef = useRef(null)
  const panelRef = useRef(null)
  const triggerRef = useRef(null)

  function set(patch) {
    onChange?.({ ...v, ...patch })
  }

  function clearAll() {
    onChange?.({
      cuisine: null,
      course: null,
      diet: null,
      freeFrom: null,
      maxTime: null,
      sort: v.sort ?? 'popularity',
    })
  }

  // Count of constraints applied (sort is not a "filter", so it doesn't count).
  const activeCount =
    (v.cuisine ? 1 : 0) +
    (v.course ? 1 : 0) +
    (v.diet ? 1 : 0) +
    (v.freeFrom ? 1 : 0) +
    (v.maxTime ? 1 : 0)
  const hasActiveFilters = activeCount > 0

  // Close the panel on Escape and on an outside click/tap. Return focus to the
  // trigger when Escape closes it (keyboard hygiene).
  useEffect(() => {
    if (!open) return undefined

    function onKey(event) {
      if (event.key === 'Escape') {
        event.stopPropagation()
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    function onPointer(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  // Move focus into the panel when it opens (so keyboard users land inside it).
  useEffect(() => {
    if (open) panelRef.current?.focus()
  }, [open])

  // The slim flickable row: course chips first, then a few top cuisines.
  const primaryCourses = Array.isArray(f.courses) ? f.courses.slice(0, 6) : []
  const primaryCuisines = Array.isArray(f.cuisines)
    ? f.cuisines.slice(0, PRIMARY_CUISINE_COUNT)
    : []

  return (
    <section
      className={'larder-filterbar' + (open ? ' is-open' : '')}
      aria-label="Filter and sort meals"
      ref={rootRef}
    >
      {/* ── Slim sticky bar: flickable primary chips + Filters trigger ────── */}
      <div className="larder-filterbar__bar">
        <div
          className="larder-filterbar__rail"
          role="group"
          aria-label="Quick filters"
        >
          {primaryCourses.map((opt) => {
            const isActive = v.course === opt.value
            return (
              <FilterChip
                key={'course-' + opt.value}
                label={opt.value}
                active={isActive}
                onClick={() => set({ course: isActive ? null : opt.value })}
                className="larder-chip--snap"
              />
            )
          })}

          {primaryCourses.length > 0 && primaryCuisines.length > 0 ? (
            <span className="larder-filterbar__sep" aria-hidden="true" />
          ) : null}

          {primaryCuisines.map((opt) => {
            const isActive = v.cuisine === opt.value
            return (
              <FilterChip
                key={'cuisine-' + opt.value}
                label={opt.value}
                active={isActive}
                onClick={() => set({ cuisine: isActive ? null : opt.value })}
                className="larder-chip--snap"
              />
            )
          })}
        </div>

        <div className="larder-filterbar__trigger-wrap">
          <button
            type="button"
            ref={triggerRef}
            className={
              'larder-filterbar__trigger' +
              (hasActiveFilters ? ' has-active' : '')
            }
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              className="larder-filterbar__trigger-icon"
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
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="7" y1="12" x2="17" y2="12" />
              <line x1="10" y1="18" x2="14" y2="18" />
            </svg>
            <span className="larder-filterbar__trigger-label">Filters</span>
            {activeCount > 0 ? (
              <>
                <span className="larder-filterbar__badge" aria-hidden="true">
                  {activeCount}
                </span>
                <span className="u-visually-hidden">
                  , {activeCount} active
                </span>
              </>
            ) : null}
          </button>
        </div>
      </div>

      {/* ── Collapsible panel: full controls. Absolute overlay, closed by default ── */}
      {open ? (
        <div
          className="larder-filterbar__scrim"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <div
        id={panelId}
        className="larder-filterbar__panel"
        role="dialog"
        aria-modal="false"
        aria-label="All filters"
        ref={panelRef}
        tabIndex={-1}
        hidden={!open}
      >
        <div className="larder-filterbar__panel-head">
          <h2 className="larder-filterbar__panel-title">Filters</h2>
          <button
            type="button"
            className="larder-filterbar__close"
            onClick={() => {
              setOpen(false)
              triggerRef.current?.focus()
            }}
            aria-label="Close filters"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="larder-filterbar__panel-body">
          <FacetGroup
            legend="Course"
            options={f.courses}
            selected={v.course}
            onSelect={(course) => set({ course })}
          />
          <FacetGroup
            legend="Cuisine"
            options={f.cuisines}
            selected={v.cuisine}
            onSelect={(cuisine) => set({ cuisine })}
          />
          <FacetGroup
            legend="Diet"
            options={f.dietLabels}
            selected={v.diet}
            onSelect={(diet) => set({ diet })}
          />
          <FacetGroup
            legend="Free from"
            options={f.healthLabels}
            selected={v.freeFrom}
            onSelect={(freeFrom) => set({ freeFrom })}
          />

          <fieldset className="larder-facet">
            <legend className="larder-facet__legend">Ready in</legend>
            <div className="larder-facet__chips">
              {MAX_TIME_OPTIONS.map((opt) => {
                const isActive = v.maxTime === opt.value
                return (
                  <FilterChip
                    key={opt.value}
                    label={opt.label}
                    active={isActive}
                    onClick={() =>
                      set({ maxTime: isActive ? null : opt.value })
                    }
                  />
                )
              })}
            </div>
          </fieldset>

          <div className="larder-facet larder-facet--sort">
            <span className="larder-facet__legend">Sort</span>
            <SortSelect value={v.sort} onChange={(sort) => set({ sort })} />
          </div>
        </div>

        <div className="larder-filterbar__panel-foot">
          <button
            type="button"
            className="larder-filterbar__clear"
            onClick={clearAll}
            disabled={!hasActiveFilters}
          >
            Clear all
          </button>
          <button
            type="button"
            className="larder-filterbar__apply"
            onClick={() => {
              setOpen(false)
              triggerRef.current?.focus()
            }}
          >
            {hasActiveFilters
              ? `Show ${activeCount === 1 ? '1 filter' : activeCount + ' filters'}`
              : 'Done'}
          </button>
        </div>
      </div>
    </section>
  )
}
