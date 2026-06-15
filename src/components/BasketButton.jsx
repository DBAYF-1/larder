// <BasketButton count onClick /> — header basket control (CONTRACTS.md §4).
// Count badge uses --larder-stall (reserved for basket + CTAs + counts). The
// count ticks up with a one-shot micro-animation when it increases.
import { useEffect, useRef, useState } from 'react'
import './BasketButton.css'

export default function BasketButton({ count = 0, onClick }) {
  const [ticking, setTicking] = useState(false)
  const prev = useRef(count)

  useEffect(() => {
    if (count > prev.current) {
      setTicking(true)
      const id = window.setTimeout(() => setTicking(false), 260)
      prev.current = count
      return () => window.clearTimeout(id)
    }
    prev.current = count
  }, [count])

  const label =
    count === 0
      ? 'Open basket — empty'
      : `Open basket — ${count} ${count === 1 ? 'meal' : 'meals'}`

  return (
    <button
      type="button"
      className="larder-basket-btn"
      onClick={onClick}
      aria-label={label}
    >
      <svg
        className="larder-basket-btn__icon"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 8h14l-1.2 9.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z" />
        <path d="M9 8 12 3l3 5" />
        <path d="M9.5 12v3.5M14.5 12v3.5" />
      </svg>
      <span className="larder-basket-btn__text">Basket</span>
      {count > 0 && (
        <span
          className={
            'larder-basket-btn__badge' + (ticking ? ' is-ticking' : '')
          }
          aria-hidden="true"
        >
          {count}
        </span>
      )}
    </button>
  )
}
