// <MealCard meal variant="grid|rail" inBasket onToggle priority={false} />
// (CONTRACTS.md §4 — `priority` is an additive, optional perf hint; the four
// contracted props are unchanged.)
//
// The delivery-app browse unit — Just Eat / Uber Eats / Deliveroo grade:
// a big, fast image, a clear title, a tidy single meta line (time · diet cue ·
// kcal), and a clean circular add control with the stall→leaf add/added states.
//
//   grid — full-width card in the meal grid.
//   rail — fixed-width card for horizontal, scroll-snapped category rails.
//
// The WHOLE card is tappable to open the meal (it is a <Link>). The add control
// is a button layered above it that stops propagation, so tapping it never
// navigates. Adding plays the single "stall → leaf" micro-interaction: the
// control morphs from a tomato plus into a leaf tick (disabled under
// prefers-reduced-motion via the global media query).
//
// EVERY image renders through <RecipeImage> so it ALWAYS loads — never the old
// native loading="lazy" that silently failed. The first ~8 cards should pass
// priority so above-the-fold imagery paints immediately.
import { Link } from 'react-router-dom'
import RecipeImage from './RecipeImage.jsx'
import MealBadgeRow from './MealBadgeRow.jsx'
import './MealCard.css'

export default function MealCard({
  meal,
  variant = 'grid',
  inBasket = false,
  onToggle,
  priority = false,
}) {
  if (!meal) return null

  const {
    id,
    title,
    imageUrl,
    totalTimeMinutes,
    servingsBase,
    dietLabels,
    nutritionPerServing,
  } = meal

  function handleToggle(event) {
    // Keep the tap on the add control: never navigate, never bubble to the card.
    event.preventDefault()
    event.stopPropagation()
    onToggle?.(id)
  }

  const kcal = nutritionPerServing?.energyKcal ?? null

  // One tidy diet cue on the card (the delivery-app meta line stays a single
  // line). The Meal screen shows the full set; here we surface just the first
  // meaningful label so the line reads "25 min · Vegan · 480 kcal".
  const diets = Array.isArray(dietLabels) ? dietLabels.filter(Boolean) : []
  const dietCue = diets[0] ?? null

  const isRail = variant === 'rail'

  return (
    <article className={`larder-card larder-card--${variant}`} aria-label={title}>
      <Link to={`/meal/${id}`} className="larder-card__link">
        <div className="larder-card__media">
          <RecipeImage
            src={imageUrl}
            alt={title}
            priority={priority}
            ratio={isRail ? '4/3' : '5/4'}
            className="larder-card__image"
          />
          <span className="larder-card__media-veil" aria-hidden="true" />
        </div>

        <div className="larder-card__body">
          <h3 className="larder-card__title">{title}</h3>
          <MealBadgeRow
            timeMinutes={totalTimeMinutes}
            servings={isRail ? null : servingsBase}
            dietLabels={dietCue ? [dietCue] : []}
            kcal={isRail ? null : kcal}
          />
        </div>
      </Link>

      <button
        type="button"
        className={'larder-card__add' + (inBasket ? ' is-in-basket' : '')}
        onClick={handleToggle}
        aria-pressed={inBasket}
        aria-label={
          inBasket ? `Remove ${title} from basket` : `Add ${title} to basket`
        }
        title={inBasket ? 'In basket' : 'Add to basket'}
      >
        {/* Both glyphs are always rendered and cross-faded so the add→added
            morph is one smooth motion rather than a swap-on-click flash. */}
        <span className="larder-card__add-glyph larder-card__add-glyph--plus" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
        <span className="larder-card__add-glyph larder-card__add-glyph--leaf" aria-hidden="true">
          {/* A leaf with a check vein — the "added to the larder" confirmation. */}
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
      </button>
    </article>
  )
}
