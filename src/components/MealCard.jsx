// <MealCard meal variant="grid|rail" inBasket onToggle /> (CONTRACTS.md §4).
//
// The appetising browse unit. Two variants:
//   grid — full card in the meal grid (image, title, badges, add toggle)
//   rail — narrower fixed-width card for horizontal category rails
//
// Card body is a link to /meal/:id. The add/remove control is a separate button
// (stall red to add as a primary action; leaf green once it is in the basket).
// Adding lifts the image briefly — the single add-to-basket micro-interaction
// (disabled under prefers-reduced-motion via the global media query).
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import MealBadgeRow from './MealBadgeRow.jsx'
import './MealCard.css'

export default function MealCard({
  meal,
  variant = 'grid',
  inBasket = false,
  onToggle,
}) {
  const imageRef = useRef(null)

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
    event.preventDefault()
    event.stopPropagation()
    // Lift the image once on add (not on remove).
    if (!inBasket && imageRef.current) {
      imageRef.current.classList.remove('is-lifting')
      // Force reflow so the animation can replay on repeat adds.
      void imageRef.current.offsetWidth
      imageRef.current.classList.add('is-lifting')
    }
    onToggle?.(id)
  }

  const kcal = nutritionPerServing?.energyKcal ?? null

  return (
    <article
      className={`larder-card larder-card--${variant}`}
      aria-label={title}
    >
      <Link to={`/meal/${id}`} className="larder-card__link">
        <div className="larder-card__media" ref={imageRef}>
          {imageUrl ? (
            <img
              className="larder-card__img"
              src={imageUrl}
              alt=""
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="larder-card__img larder-card__img--placeholder" aria-hidden="true" />
          )}
        </div>

        <div className="larder-card__body">
          <h3 className="larder-card__title">{title}</h3>
          <MealBadgeRow
            timeMinutes={totalTimeMinutes}
            servings={servingsBase}
            dietLabels={variant === 'rail' ? [] : dietLabels}
            kcal={variant === 'rail' ? null : kcal}
          />
        </div>
      </Link>

      <button
        type="button"
        className={
          'larder-card__add' + (inBasket ? ' is-in-basket' : '')
        }
        onClick={handleToggle}
        aria-pressed={inBasket}
        aria-label={
          inBasket
            ? `Remove ${title} from basket`
            : `Add ${title} to basket`
        }
      >
        {inBasket ? (
          <>
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
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>In basket</span>
          </>
        ) : (
          <>
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
              <path d="M12 5v14M5 12h14" />
            </svg>
            <span>Add</span>
          </>
        )}
      </button>
    </article>
  )
}
