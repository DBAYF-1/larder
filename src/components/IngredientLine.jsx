// <IngredientLine line imageUrl /> (CONTRACTS.md §4).
// One embedded recipe ingredient line (shape §1). Shows the original `raw` text
// — always kept and displayed — with the resolved canonical name as a tooltip
// (title + aria-label) when available. Optional and store-cupboard staples get a
// small quiet tag; needsReview lines are shown verbatim with no false promises.
//
// Delivery-app refinement: each line leads with a SMALL square THUMBNAIL of the
// ingredient, rendered through the shared <RecipeImage> primitive (the ONLY way
// images render). The photo comes from the referenced ingredient doc's imageUrl
// (a TheMealDB ingredient png), passed in by the Meal screen which has already
// fetched the canonical docs via getIngredients(). When imageUrl is null/absent
// — TheMealDB has no faithful photo for that ingredient — RecipeImage degrades
// to its on-brand fallback block automatically, so a line is never blank.
import RecipeImage from './RecipeImage.jsx'
import './IngredientLine.css'

export default function IngredientLine({ line, imageUrl = null }) {
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

  // The thumbnail's alt is the canonical name when we have it (most descriptive),
  // otherwise the raw text. RecipeImage handles a null src as a clean fallback.
  const thumbAlt = canonicalName || text || 'Ingredient'

  return (
    <li className={'larder-ingredient' + (optional ? ' is-optional' : '')}>
      <span className="larder-ingredient__thumb" aria-hidden={needsReview ? undefined : 'true'}>
        <RecipeImage
          src={imageUrl || undefined}
          alt=""
          ratio="1/1"
          rounded
          w={72}
          className="larder-ingredient__img"
        />
      </span>

      <span
        className={
          'larder-ingredient__text' +
          (showCanonical ? ' has-canonical' : '')
        }
        title={title}
        aria-label={showCanonical ? `${text} (${canonicalName})` : undefined}
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
