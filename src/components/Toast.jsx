// <Toast message show /> — single micro-confirmation (CONTRACTS.md §4).
// Used for the "Added" confirmation; rendered in --larder-leaf. Polite live
// region so screen readers announce the message without stealing focus.
import './Toast.css'

export default function Toast({ message = 'Added', show = false }) {
  return (
    <div className="larder-toast-region" role="status" aria-live="polite">
      {show && (
        <div className="larder-toast">
          <svg
            className="larder-toast__tick"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span>{message}</span>
        </div>
      )}
    </div>
  )
}
