// <MealBadgeRow timeMinutes servings dietLabels kcal /> (CONTRACTS.md §4).
//
// The tidy meta line under a card title and on the Meal screen — delivery-app
// style: "25 min · Serves 4 · 480 kcal" with a leaf diet cue. Time / servings /
// kcal are quiet captions separated by middots; diet labels get the leaf pill
// (confirmations / diet are always leaf, never red). Absent values are dropped
// gracefully, and the whole row collapses to nothing when there's nothing to
// show. Props and prop names are fixed by the contract; only presentation here.
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

  // The quiet caption facts, in reading order, that get the middot leaders.
  const facts = [
    time && { key: 'time', text: time },
    serves && { key: 'serves', text: serves },
    energy && { key: 'kcal', text: energy, mono: true },
  ].filter(Boolean)

  if (facts.length === 0 && diets.length === 0) return null

  return (
    <p className="larder-badges" aria-label="At a glance">
      {facts.map((fact, i) => (
        <span
          key={fact.key}
          className={'larder-badge' + (fact.mono ? ' larder-badge--mono' : '')}
        >
          {i > 0 && (
            <span className="larder-badge__sep" aria-hidden="true">
              ·
            </span>
          )}
          {fact.text}
        </span>
      ))}

      {diets.map((label) => (
        <span key={label} className="larder-badge larder-badge--diet">
          {label}
        </span>
      ))}
    </p>
  )
}
