import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../useDocumentTitle.js'
import './Legal.css'

// Privacy policy (roadmap #27). UK GDPR / PECR baseline for a no-accounts,
// no-payments static site. Plain, honest copy: Larder holds almost no personal
// data, stores your basket only on your own device, and (if analytics is ever
// switched on) uses a cookie-free, first-party beacon. This page also carries
// the honesty notices the roadmap requires — AI-generated photos and
// approximate nutrition — and the source attribution baseline.
export default function Privacy() {
  useDocumentTitle('Privacy policy')

  return (
    <div className="legal">
      <header className="legal-head">
        <h1 className="legal-title">Privacy policy</h1>
        <p className="legal-lede">
          Larder is a small UK meal-planning tool. It works without an account,
          collects as little as possible, and keeps your choices on your own
          device. This page explains exactly what that means.
        </p>
        <p className="legal-updated">Last updated: 19 June 2026</p>
      </header>

      <section className="legal-section">
        <h2 className="legal-h2">The short version</h2>
        <ul className="legal-list">
          <li>
            <strong>No account, no sign-up.</strong> You can browse meals and
            build a shopping list without giving us anything about you.
          </li>
          <li>
            <strong>Your basket lives on your device.</strong> The meals you pick
            and your household size are saved in your browser&rsquo;s local
            storage &mdash; not on our servers.
          </li>
          <li>
            <strong>No advertising cookies, no tracking pixels, no selling
            data.</strong> We never sell or share personal data, because we
            don&rsquo;t collect it to begin with.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Who we are</h2>
        <p className="legal-p">
          Larder is a personal, non-commercial project based in the United
          Kingdom. For the purposes of UK GDPR, the project owner is the data
          controller. If you have a question about this policy or your data, you
          can reach us via the contact details on the{' '}
          <Link className="legal-link" to="/sources">
            sources and credits
          </Link>{' '}
          page.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">What data we hold, and where</h2>
        <h3 className="legal-h3">On your device (local storage)</h3>
        <p className="legal-p">
          To make the tool work, your browser stores a small amount of data
          locally:
        </p>
        <ul className="legal-list">
          <li>
            <strong>Your basket</strong> &mdash; the meals you&rsquo;ve chosen,
            your per-meal portions and household size, and which shopping-list
            items you&rsquo;ve ticked off.
          </li>
          <li>
            <strong>Saved lists</strong> &mdash; if you save a shopping list to
            return to, it is stored on your device only.
          </li>
          <li>
            <strong>Your preferences</strong> &mdash; for example, any free-from
            filters you keep on.
          </li>
        </ul>
        <p className="legal-p">
          This data never leaves your browser unless you choose to share a list
          (see below). It is not personal data we can see, and you can clear it
          at any time by clearing your basket, deleting a saved list, or clearing
          your browser&rsquo;s site data.
        </p>

        <h3 className="legal-h3">In the page address (when you share a list)</h3>
        <p className="legal-p">
          When you share a shopping list, the meals and household size are
          encoded into the link itself so the person you send it to can open the
          same list. The link contains only meal references and numbers &mdash;
          no information about you.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Cookies and analytics</h2>
        <p className="legal-p">
          Larder does <strong>not</strong> use advertising or tracking cookies,
          and shows no cookie banner because none is required for the strictly
          necessary local storage described above.
        </p>
        <p className="legal-p">
          If usage analytics are enabled, we use a{' '}
          <strong>privacy-friendly, cookie-free measurement</strong> approach: a
          small first-party signal records anonymous, aggregate events &mdash;
          for example, that a page was viewed or a shopping list was built &mdash;
          to help us understand whether the tool is useful. It sets no cookies,
          builds no profile of you, does not track you across other websites, and
          collects no name, email or precise location. We do not record the
          contents of your basket or shared-list links.
        </p>
        <p className="legal-p">
          We also record anonymous technical error reports (for example, a
          message and stack trace when something breaks) so we can fix problems.
          These contain no personal data.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Third-party services</h2>
        <p className="legal-p">
          Loading the site involves a few third parties, who may process your IP
          address purely to deliver content:
        </p>
        <ul className="legal-list">
          <li>
            <strong>Firebase Hosting and Cloud Firestore (Google)</strong> serve
            the app and the recipe data your browser reads.
          </li>
          <li>
            <strong>Google Fonts</strong> serves the typefaces used across the
            site.
          </li>
          <li>
            <strong>Image delivery</strong> &mdash; recipe and dish photos are
            loaded from their hosts and an image-resizing proxy.
          </li>
        </ul>
        <p className="legal-p">
          These providers act as our processors or independent controllers for
          content delivery only; we do not pass them any personal data about you.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Honesty about our content</h2>
        <p className="legal-note">
          Some dish photographs are <strong>AI-generated illustrations</strong>{' '}
          and may not show the exact finished dish. Where a recipe&rsquo;s own
          source photo exists, we always prefer it. Nutrition figures are{' '}
          <strong>approximate</strong>, calculated from typical ingredient data
          and not a substitute for the labelling on the products you buy. If you
          cook for an allergy or a strict diet, always check the actual packaging.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Recipe and data sources</h2>
        <p className="legal-p">
          Recipes, images, packaging and nutrition data come from open sources
          including TheMealDB, Edamam, Open Food Facts and the UK government&rsquo;s
          CoFID dataset, used under their respective licences. Full attribution is
          on the{' '}
          <Link className="legal-link" to="/sources">
            sources and credits
          </Link>{' '}
          page.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Your rights</h2>
        <p className="legal-p">
          Under UK data protection law you have rights to access, correct and
          erase personal data we hold about you. Because Larder holds your data
          only on your own device, you exercise these rights directly: clear your
          basket, delete saved lists, or clear your browser&rsquo;s site data and
          nothing of yours remains. You also have the right to complain to the
          Information Commissioner&rsquo;s Office (
          <a
            className="legal-link"
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            ico.org.uk
          </a>
          ).
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-h2">Changes to this policy</h2>
        <p className="legal-p">
          We may update this policy as Larder evolves. The date at the top shows
          when it last changed. Continued use after a change means you accept the
          updated policy.
        </p>
        <p className="legal-p">
          See also our{' '}
          <Link className="legal-link" to="/terms">
            terms of use
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
