// <FilterBar facets value onChange /> with <FilterChip> + <SortSelect>
// (CONTRACTS.md §4). Co-located here for cohesion; all three are exported.
//
//   facets = { cuisines, courses, dietLabels, healthLabels }  // [{value,count}]
//   value  = { cuisine, course, diet, freeFrom, maxTime, sort }
//
// Each change calls onChange with the FULL next value object. A selected chip
// toggles back off when clicked again (set the field to null/empty).
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

export function FilterChip({ label, active = false, onClick }) {
  return (
    <button
      type="button"
      className={'larder-chip' + (active ? ' is-active' : '')}
      onClick={onClick}
      aria-pressed={active}
    >
      {label}
    </button>
  )
}

export function SortSelect({ value, onChange }) {
  const id = 'larder-sort'
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

function FacetGroup({ legend, options, selected, onSelect, limit = 8 }) {
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

  const hasActiveFilters =
    v.cuisine || v.course || v.diet || v.freeFrom || v.maxTime

  return (
    <section className="larder-filterbar" aria-label="Filter and sort meals">
      <div className="larder-filterbar__head">
        <h2 className="larder-filterbar__title u-section-title">Find a meal</h2>
        <div className="larder-filterbar__sort">
          <SortSelect value={v.sort} onChange={(sort) => set({ sort })} />
        </div>
      </div>

      <div className="larder-filterbar__groups">
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
      </div>

      {hasActiveFilters && (
        <div className="larder-filterbar__foot">
          <button
            type="button"
            className="larder-filterbar__clear"
            onClick={clearAll}
          >
            Clear all filters
          </button>
        </div>
      )}
    </section>
  )
}
