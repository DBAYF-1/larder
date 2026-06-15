// <SourceCredit variant="footer|inline" sources? recipe? /> (CONTRACTS.md §4).
//
//   variant="footer"  — the standing attribution shown in the app footer.
//   variant="inline"  — per-recipe attribution shown on the Meal screen,
//                       crediting the specific source/publisher of that recipe.
//
// Recipe attribution is required by TheMealDB and Edamam licences, so when a
// recipe carries attributionRequired we always surface the source + a link-out.
import './SourceCredit.css'

// The standing data sources Larder is built on (footer credit).
const DEFAULT_SOURCES = [
  { label: 'TheMealDB', url: 'https://www.themealdb.com' },
  { label: 'Edamam', url: 'https://www.edamam.com' },
  { label: 'Open Food Facts', url: 'https://world.openfoodfacts.org' },
  { label: 'CoFID', url: 'https://www.gov.uk/government/publications/composition-of-foods-integrated-dataset-cofid' },
]

// Map a recipe.source token to a human label for inline credit.
const SOURCE_LABELS = {
  themealdb: 'TheMealDB',
  edamam: 'Edamam',
  curated: 'Larder kitchen',
}

function FooterCredit({ sources }) {
  return (
    <p className="larder-credit larder-credit--footer">
      <span>Recipe and food data from </span>
      {sources.map((source, i) => (
        <span key={source.label}>
          <a href={source.url} target="_blank" rel="noopener noreferrer">
            {source.label}
          </a>
          {i < sources.length - 2 ? ', ' : ''}
          {i === sources.length - 2 ? ' and ' : ''}
        </span>
      ))}
      <span>.</span>
    </p>
  )
}

function InlineCredit({ recipe }) {
  if (!recipe) return null

  const sourceLabel = SOURCE_LABELS[recipe.source] || 'an external source'
  const publisher = recipe.publisher || sourceLabel

  return (
    <p className="larder-credit larder-credit--inline">
      <span className="larder-credit__by">Recipe by {publisher}</span>
      {recipe.sourceUrl && (
        <>
          {' · '}
          <a
            className="larder-credit__link"
            href={recipe.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on {sourceLabel}
          </a>
        </>
      )}
      {recipe.imageAttribution && (
        <span className="larder-credit__image">
          {' · '}Image: {recipe.imageAttribution}
        </span>
      )}
    </p>
  )
}

export default function SourceCredit({
  variant = 'footer',
  sources = DEFAULT_SOURCES,
  recipe = null,
}) {
  if (variant === 'inline') {
    return <InlineCredit recipe={recipe} />
  }
  return <FooterCredit sources={sources} />
}
