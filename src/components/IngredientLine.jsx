// <IngredientLine line /> (CONTRACTS.md §4).
// One embedded recipe ingredient line (shape §1). Shows the original `raw` text
// — always kept and displayed — with the resolved canonical name as a tooltip
// (title + aria-label) when available. Optional and store-cupboard staples get a
// small quiet tag; needsReview lines are shown verbatim with no false promises.
import './IngredientLine.css'

export default function IngredientLine({ line }) {
  if (!line) return null

  const {
    raw,
    canonicalName,
    preparationNote,
    optional,
    staple,
    resolutionStatus,
  } = line

  const needsReview = resolutionStatus === 'needsReview'
  const text = raw || canonicalName || ''

  // Only offer the canonical tooltip when it adds information.
  const showCanonical =
    canonicalName &&
    !needsReview &&
    canonicalName.toLowerCase() !== String(text).toLowerCase()

  const title = showCanonical ? canonicalName : undefined

  return (
    <li className={'larder-ingredient' + (optional ? ' is-optional' : '')}>
      <span className="larder-ingredient__bullet" aria-hidden="true" />
      <span
        className={
          'larder-ingredient__text' +
          (showCanonical ? ' has-canonical' : '')
        }
        title={title}
        aria-label={
          showCanonical ? `${text} (${canonicalName})` : undefined
        }
      >
        {text}
        {preparationNote ? (
          <span className="larder-ingredient__prep">, {preparationNote}</span>
        ) : null}
      </span>

      {optional && <span className="larder-ingredient__tag">Optional</span>}
      {staple && !optional && (
        <span className="larder-ingredient__tag larder-ingredient__tag--staple">
          Store-cupboard
        </span>
      )}
      {needsReview && (
        <span className="larder-ingredient__tag larder-ingredient__tag--review">
          Check yourself
        </span>
      )}
    </li>
  )
}
