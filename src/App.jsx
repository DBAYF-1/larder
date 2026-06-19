// Larder — application shell (CONTRACTS.md §5).
//
// Layout: a skip-to-content link, a sticky header (wordmark → /, BasketButton →
// /basket), <main> with the routed screens, and a footer with source credit and
// legal links. Screens are route-split with React.lazy (#33) so the Firestore
// SDK (and each screen's code) loads only when its route is visited — Sources,
// Privacy, Terms and the 404 never pull the firebase chunk.
//
// On every route change (#19/#10-titles) we: set a per-route document.title,
// move keyboard focus to <main>, scroll to the top, and emit a privacy-friendly
// page-view beacon (#17). The ErrorBoundary still resets on route change and the
// catch-all 404 still renders the NotFound screen.

import { Suspense, lazy, useEffect, useRef } from 'react'
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import BasketButton from './components/BasketButton.jsx'
import SourceCredit from './components/SourceCredit.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import EmptyState from './components/EmptyState.jsx'
import { useBasket } from './state/basket.js'
import { trackPageView } from './analytics.js'
import { useDocumentTitle } from './useDocumentTitle.js'
import './App.css'

// ── Route-level code-splitting (#33) ─────────────────────────────────────────
// Each screen becomes its own chunk. Browse/Meal/Basket/ShoppingList import
// firebase.js, so the firebase chunk is fetched only when one of those loads;
// Sources/Privacy/Terms carry no Firestore code at all.
const Browse = lazy(() => import('./screens/Browse.jsx'))
const Meal = lazy(() => import('./screens/Meal.jsx'))
const Basket = lazy(() => import('./screens/Basket.jsx'))
const ShoppingList = lazy(() => import('./screens/ShoppingList.jsx'))
const Sources = lazy(() => import('./screens/Sources.jsx'))
const Saved = lazy(() => import('./screens/Saved.jsx'))
const Privacy = lazy(() => import('./screens/Privacy.jsx'))
const Terms = lazy(() => import('./screens/Terms.jsx'))
const Planner = lazy(() => import('./screens/Planner.jsx'))
const CookMode = lazy(() => import('./screens/CookMode.jsx'))

const SITE_NAME = 'Larder'

// Static per-route titles (#10). Dynamic screens (e.g. a meal name) override
// these from inside the screen via the exported useDocumentTitle hook; the
// fallback below keeps a sensible title even before that screen's data loads.
const ROUTE_TITLES = {
  '/': 'Browse meals — build your shopping list',
  '/basket': 'Your basket',
  '/list': 'Your shopping list',
  '/sources': 'Sources and credits',
  '/saved': 'Saved lists',
  '/planner': 'Plan your week',
  '/privacy': 'Privacy policy',
  '/terms': 'Terms of use',
}

function titleForPath(pathname) {
  if (ROUTE_TITLES[pathname]) return ROUTE_TITLES[pathname]
  if (pathname.startsWith('/meal/')) return 'Meal'
  if (pathname.startsWith('/cook/')) return 'Cook mode'
  return 'Page not found'
}

function Header() {
  const { count } = useBasket()
  const navigate = useNavigate()

  return (
    <header className="larder-header">
      <div className="larder-container larder-header__inner">
        <Link to="/" className="larder-wordmark" aria-label="Larder — home">
          <span className="larder-wordmark__mark" aria-hidden="true">
            ◖
          </span>
          <span>Larder</span>
        </Link>

        <div className="larder-header__actions">
          <Link to="/planner" className="larder-plan-link">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            <span>Plan week</span>
          </Link>
          <BasketButton count={count} onClick={() => navigate('/basket')} />
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="larder-footer">
      <div className="larder-container larder-footer__inner">
        <SourceCredit variant="footer" />
        <nav className="larder-footer__links" aria-label="Footer">
          <Link to="/sources">Sources and credits</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  )
}

function NotFound() {
  const navigate = useNavigate()
  // Make the 404 title explicit even on a non-matching path.
  useDocumentTitle('Page not found')
  return (
    <EmptyState
      title="That page has moved on"
      body="We couldn't find that page. Head back and pick a few meals — we'll write the list."
      actionLabel="Browse meals"
      onAction={() => navigate('/')}
    />
  )
}

// Lightweight, accessible fallback while a route chunk loads.
function RouteFallback() {
  return (
    <div className="larder-route-loading" role="status" aria-live="polite">
      <span className="larder-route-loading__spinner" aria-hidden="true" />
      <span className="sr-only">Loading…</span>
    </div>
  )
}

/**
 * Side-effects that run on every route change (#19/#10/#17):
 *   - set a sensible default document.title for the route,
 *   - move keyboard focus to <main> (so screen-reader/keyboard users land on the
 *     new content, not stranded on a stale control),
 *   - scroll to the top,
 *   - emit a page-view beacon.
 * A screen may refine the title afterwards via useDocumentTitle; we set the
 * coarse default here first so there is never an empty/stale title flash.
 */
function useRouteChangeEffects(mainRef) {
  const { pathname } = useLocation()
  // Skip the focus/scroll move on the very first render (initial load already
  // starts at the top and focus belongs in the document body).
  const isFirst = useRef(true)

  useEffect(() => {
    const title = titleForPath(pathname)
    document.title = `${title} · ${SITE_NAME}`
    trackPageView(title)

    if (isFirst.current) {
      isFirst.current = false
      return
    }

    // Scroll to top of the page for the new route.
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }

    // Move focus to <main> without scrolling it into view a second time.
    const main = mainRef.current
    if (main) {
      main.focus({ preventScroll: true })
    }
  }, [pathname, mainRef])
}

export default function App() {
  const location = useLocation()
  const mainRef = useRef(null)

  useRouteChangeEffects(mainRef)

  return (
    <div className="larder-app">
      {/* Skip-to-content (#19): first focusable element; visible on focus. */}
      <a className="larder-skip-link" href="#larder-main">
        Skip to main content
      </a>

      <Header />

      {/* tabIndex=-1 makes <main> programmatically focusable for route changes
          without adding it to the natural tab order. */}
      <main
        className="larder-main"
        id="larder-main"
        ref={mainRef}
        tabIndex={-1}
      >
        <ErrorBoundary routeKey={location.pathname}>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route index element={<Browse />} />
              <Route path="meal/:id" element={<Meal />} />
              <Route path="basket" element={<Basket />} />
              <Route path="list" element={<ShoppingList />} />
              <Route path="saved" element={<Saved />} />
              <Route path="planner" element={<Planner />} />
              <Route path="cook/:id" element={<CookMode />} />
              <Route path="sources" element={<Sources />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  )
}
