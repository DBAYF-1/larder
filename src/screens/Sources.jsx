import SourceCredit from '../components/SourceCredit.jsx'
import './Sources.css'

// Full attribution for every data source Larder draws on. Each entry states
// the licence basis and links back to the source, as required by their terms.
const SOURCES = [
  {
    key: 'themealdb',
    name: 'TheMealDB',
    role: 'Recipes, meal images and cooking methods',
    licence:
      'An open, crowd-sourced recipe database. We use the free API and link back to each meal at its source. Recipe images carry their own attribution, shown on the meal.',
    licenceLabel: 'Open recipe API — attribution on each meal',
    url: 'https://www.themealdb.com',
    urlLabel: 'themealdb.com',
  },
  {
    key: 'edamam',
    name: 'Edamam',
    role: 'Additional recipes and nutrition data',
    licence:
      'Recipe search is provided by Edamam. Their terms require the “Powered by Edamam” credit and that full methods stay on the publisher’s own site — so for these meals we link out rather than reprinting the method here.',
    licenceLabel: 'Powered by Edamam — methods link out to the publisher',
    url: 'https://www.edamam.com',
    urlLabel: 'edamam.com',
  },
  {
    key: 'off',
    name: 'Open Food Facts',
    role: 'Product packs, barcodes and minimum purchase sizes',
    licence:
      'Product and packaging data comes from Open Food Facts, a collaborative database made available under the Open Database Licence (ODbL). We share their data on the same open terms.',
    licenceLabel: 'Open Database Licence (ODbL)',
    url: 'https://world.openfoodfacts.org',
    urlLabel: 'openfoodfacts.org',
  },
  {
    key: 'cofid',
    name: 'CoFID',
    role: 'Nutrient profiles for canonical ingredients',
    licence:
      'Ingredient nutrition draws on the Composition of Foods Integrated Dataset (CoFID), the UK government’s reference dataset, published under the Open Government Licence.',
    licenceLabel: 'UK government dataset — Open Government Licence',
    url: 'https://www.gov.uk/government/publications/composition-of-foods-integrated-dataset-cofid',
    urlLabel: 'gov.uk — CoFID',
  },
]

export default function Sources() {
  return (
    <div className="sources">
      <header className="sources-head">
        <h1 className="sources-title">Sources &amp; credits</h1>
        <p className="sources-lede">
          Larder stands on the shoulders of some brilliant open data. Here&rsquo;s
          where everything comes from, and the terms we use it under. We link
          back to each source and keep recipe methods with their publishers
          where their licences ask us to.
        </p>
      </header>

      <ul className="sources-list">
        {SOURCES.map((s) => (
          <li className="source-card" key={s.key}>
            <div className="source-card__top">
              <h2 className="source-card__name">{s.name}</h2>
              <span className="source-card__licence">{s.licenceLabel}</span>
            </div>
            <p className="source-card__role">{s.role}</p>
            <p className="source-card__licence-body">{s.licence}</p>
            <a
              className="source-card__link"
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit {s.urlLabel}
              <span className="source-card__ext" aria-hidden="true">
                {' '}
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>

      <section className="sources-credit" aria-label="Attribution summary">
        <p className="sources-credit__intro">
          The short version that appears across the site:
        </p>
        <SourceCredit variant="footer" />
      </section>

      <p className="sources-note">
        Spotted something that needs correcting? Larder is a personal project and
        we want the credits right &mdash; do get in touch.
      </p>
    </div>
  )
}
