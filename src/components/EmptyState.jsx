// <EmptyState title body actionLabel onAction /> (CONTRACTS.md §4).
// Calm, friendly placeholder for empty baskets / no search results / empty list.
// The action button is optional; render it only when both label and handler are
// supplied. Active-voice button copy is the caller's responsibility.
import './EmptyState.css'

export default function EmptyState({ title, body, actionLabel, onAction }) {
  return (
    <div className="larder-empty" role="region" aria-label={title}>
      <svg
        className="larder-empty__art"
        viewBox="0 0 64 64"
        width="64"
        height="64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22h40l-3.5 26a4 4 0 0 1-4 3.5H19.5a4 4 0 0 1-4-3.5L12 22Z" />
        <path d="M22 22 32 8l10 14" />
        <path d="M25 32v12M39 32v12M32 32v12" />
      </svg>

      {title && <h2 className="larder-empty__title">{title}</h2>}
      {body && <p className="larder-empty__body">{body}</p>}

      {actionLabel && onAction && (
        <button
          type="button"
          className="u-btn u-btn--primary larder-empty__action"
          onClick={onAction}
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}
