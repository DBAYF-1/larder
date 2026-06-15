// <MealBadgeRow timeMinutes servings dietLabels kcal /> (CONTRACTS.md §4).
// The small meta tier on cards + the Meal screen. Diet labels get the leaf cue;
// time / servings / kcal are quiet captions. Gracefully omits absent values.
import './MealBadgeRow.css'

function formatTime(minutes) {
  if (!Number.isFinite(minutes) || minutes <= 0) return null
  if (minutes < 60) return `${Math.round(minutes)} min`
  const hrs = Math.floor(minutes / 60)
  const mins = Math.round(minutes % 60)
  return mins ? `${hrs} hr ${mins} min` : `${hrs} hr`
}

export default function MealBadgeRow({
  timeMinutes = null,
  servings = null,
  dietLabels = [],
  kcal = null,
}) {
  const time = formatTime(timeMinutes)
  const serves =
    Number.isFinite(servings) && servings > 0 ? `Serves ${servings}` : null
  const energy =
    Number.isFinite(kcal) && kcal > 0 ? `${Math.round(kcal)} kcal` : null
  const diets = Array.isArray(dietLabels) ? dietLabels.filter(Boolean) : []

  if (!time && !serves && !energy && diets.length === 0) return null

  return (
    <ul className="larder-badges" aria-label="At a glance">
      {time && (
        <li className="larder-badge">
          <svg
            className="larder-badge__icon"
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
          <span>{time}</span>
        </li>
      )}

      {serves && (
        <li className="larder-badge">
          <svg
            className="larder-badge__icon"
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
            <circle cx="9.5" cy="8" r="3" />
            <path d="M21 19v-1a4 4 0 0 0-3-3.85" />
          </svg>
          <span>{serves}</span>
        </li>
      )}

      {energy && (
        <li className="larder-badge larder-badge--mono">
          <span>{energy}</span>
        </li>
      )}

      {diets.map((label) => (
        <li key={label} className="larder-badge larder-badge--diet">
          {label}
        </li>
      ))}
    </ul>
  )
}
