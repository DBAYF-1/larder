// <HouseholdStepper value onChange min=1 max=12 /> (CONTRACTS.md §4).
// Stepper for how many people to cook for; drives the shopping-list scaling.
// Implemented as a spinbutton group: two buttons plus an aria spinbutton value,
// fully keyboard operable (arrows adjust within range).
import './HouseholdStepper.css'

export default function HouseholdStepper({ value, onChange, min = 1, max = 12 }) {
  const current = Number.isFinite(value) ? value : min
  const clamped = Math.min(max, Math.max(min, current))

  function set(next) {
    const bounded = Math.min(max, Math.max(min, next))
    if (bounded !== clamped) onChange?.(bounded)
  }

  function handleKeyDown(event) {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowRight':
        event.preventDefault()
        set(clamped + 1)
        break
      case 'ArrowDown':
      case 'ArrowLeft':
        event.preventDefault()
        set(clamped - 1)
        break
      case 'Home':
        event.preventDefault()
        set(min)
        break
      case 'End':
        event.preventDefault()
        set(max)
        break
      default:
        break
    }
  }

  return (
    <div className="larder-stepper">
      <span id="larder-stepper-label" className="larder-stepper__label">
        Cooking for
      </span>
      <div className="larder-stepper__control">
        <button
          type="button"
          className="larder-stepper__btn"
          onClick={() => set(clamped - 1)}
          disabled={clamped <= min}
          aria-label="One fewer person"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
          </svg>
        </button>

        <span
          className="larder-stepper__value"
          role="spinbutton"
          tabIndex={0}
          aria-labelledby="larder-stepper-label"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={clamped}
          aria-valuetext={`${clamped} ${clamped === 1 ? 'person' : 'people'}`}
          onKeyDown={handleKeyDown}
        >
          {clamped}
        </span>

        <button
          type="button"
          className="larder-stepper__btn"
          onClick={() => set(clamped + 1)}
          disabled={clamped >= max}
          aria-label="One more person"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>
      <span className="larder-stepper__suffix u-meta">
        {clamped === 1 ? 'person' : 'people'}
      </span>
    </div>
  )
}
