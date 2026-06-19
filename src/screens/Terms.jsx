import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../useDocumentTitle.js'
import './Legal.css'

// Terms of use (roadmap #27). Plain, honest, UK-appropriate baseline for a free,
// no-accounts, non-commercial tool: what Larder is, the important caveats about
// allergens / nutrition / AI imagery, third-party content ownership, and the
// usual "as is" liability position written in readable English.
export default function Terms() {
  useDocumentTitle('Terms of use')

  return (
    <div className="legal">
      <header className="legal-head">
        <h1 className="legal-title">Terms of use</h1>
        <p className="legal-lede">
          These terms cover your use of Larder. They&rsquo;re written to be read,
          not skimmed past &mdash; the parts about allergens and nutrition matter.
        </p>
        <p className="legal-updated">Last updated: 19 June 2026</p>
      </header>

      <section className="legal-section">
        <h2 className="legal-h2">What Larder is</h2>
        <p className="legal-p">
          Larder is a free, personal meal-planning tool. You browse meals, add
          them to a basket, set your household size, and Larder turns that into a
          single, aisle-sorted shopping list. It is provided for personal,
          non-commercial use. There is no account and nothing to pay.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Accuracy, allergens and nutrition</h2>
        <p className="legal-note">
          Larder is a planning aid, not dietary or medical advice. Diet labels
          (such as &ldquo;vegetarian&rdquo; or &ldquo;gluten-free&rdquo;),
          allergen information and nutrition figures are derived from third-party
          data and are <strong>approximate</strong>. They can be incomplete or
          wrong. <strong>If you cook for an allergy, intolerance or a strict
          diet, always check the actual product packaging and the original recipe
          before you rely on it.</strong> We do not accept liability for
          decisions made solely on the information shown here.
        </p>
        <p className="legal-p">
          Quantities on your shopping list are scaled and rounded to sensible
          pack sizes. Treat them as a helpful estimate, and use your own judgement
          when shopping and cooking.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Images and AI-generated content</h2>
        <p className="legal-p">
          Some dish photographs are AI-generated illustrations and may not depict
          the exact finished dish, its portion size or its ingredients. Where a
          recipe&rsquo;s own source photo is available, we prefer it. Images are
          for illustration only.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Recipes and third-party content</h2>
        <p className="legal-p">
          Recipes, methods, images and reference data are drawn from open sources
          and remain the property of their respective owners, used under their
          licences. We link back to each source and, where a licence requires it,
          keep the full method on the publisher&rsquo;s own site rather than
          reprinting it. Full attribution is on the{' '}
          <Link className="legal-link" to="/sources">
            sources and credits
          </Link>{' '}
          page. Larder&rsquo;s own design, code and the shopping-list logic remain
          ours.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Acceptable use</h2>
        <ul className="legal-list">
          <li>Use Larder for your own personal meal planning.</li>
          <li>
            Don&rsquo;t attempt to disrupt the service, scrape it at scale, or
            misuse the underlying data sources against their terms.
          </li>
          <li>
            Don&rsquo;t present Larder&rsquo;s output as professional dietary,
            medical or nutritional advice.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Availability and changes</h2>
        <p className="legal-p">
          Larder is offered &ldquo;as is&rdquo; and &ldquo;as available&rdquo;.
          It runs on free-tier infrastructure, so it may occasionally be slow,
          incomplete or unavailable, and the catalogue can change at any time. We
          may update, suspend or withdraw any part of it without notice.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Liability</h2>
        <p className="legal-p">
          To the fullest extent permitted by law, Larder and its owner are not
          liable for any loss arising from your use of, or inability to use, the
          tool &mdash; including reliance on diet, allergen or nutrition
          information. Nothing in these terms limits any liability that cannot be
          limited under applicable law, including for death or personal injury
          caused by negligence.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Governing law</h2>
        <p className="legal-p">
          These terms are governed by the law of England and Wales, and disputes
          are subject to the courts of England and Wales.
        </p>
        <p className="legal-p">
          See also our{' '}
          <Link className="legal-link" to="/privacy">
            privacy policy
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
