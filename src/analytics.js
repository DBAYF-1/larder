// Larder — privacy-friendly analytics + error tracking (roadmap #17).
//
// NO npm dependency, NO cookies, NO fingerprinting, NO third-party SDK. This is a
// tiny first-party beacon: it POSTs small JSON events to a single configurable
// endpoint using `navigator.sendBeacon` (with a `fetch(keepalive)` fallback) and
// NO-OPS entirely when no endpoint is configured. That keeps the funnel and
// error signals available without the GDPR/PECR weight of a tracking SDK — the
// privacy policy (#27, src/screens/Privacy.jsx) documents exactly this.
//
// ── Configuration ────────────────────────────────────────────────────────────
// The endpoint is read from `window.__LARDER_ANALYTICS__` (a single string URL,
// set by a small inline <script> in index.html, owned by the SEO agent). When it
// is unset/empty every function here is a silent no-op — safe to call anywhere.
//
//   <script>window.__LARDER_ANALYTICS__ = 'https://…/collect'</script>
//
// We send only: a coarse event name, an optional small props object (no PII), the
// path (no query string — it can carry a basket), a referrer host only, and a
// timestamp. No user id, no IP collection on our side, no cross-site state.

/** @returns {string} the configured collect endpoint, or '' when disabled. */
function endpoint() {
  if (typeof window === 'undefined') return ''
  const url = window.__LARDER_ANALYTICS__
  return typeof url === 'string' ? url.trim() : ''
}

// Coalesce duplicate error reports within a short window so a render loop or a
// repeated rejection cannot flood the endpoint (and the user's bandwidth).
const _recentErrors = new Map()
const ERROR_DEDUPE_MS = 10_000

function shouldSendError(signature) {
  const now = Date.now()
  // Sweep stale entries cheaply.
  for (const [key, ts] of _recentErrors) {
    if (now - ts > ERROR_DEDUPE_MS) _recentErrors.delete(key)
  }
  if (_recentErrors.has(signature)) return false
  _recentErrors.set(signature, now)
  return true
}

/** Path without the query string (which may encode a basket — keep it private). */
function safePath() {
  if (typeof window === 'undefined') return ''
  try {
    return window.location.pathname || '/'
  } catch {
    return '/'
  }
}

/** Referrer host only (never the full URL — avoids leaking other sites' paths). */
function referrerHost() {
  if (typeof document === 'undefined') return ''
  try {
    if (!document.referrer) return ''
    return new URL(document.referrer).host || ''
  } catch {
    return ''
  }
}

/**
 * Low-level send. Builds the payload and posts it via sendBeacon, falling back to
 * a keep-alive fetch. Never throws; returns true if a send was attempted.
 *
 * @param {'event'|'error'} kind
 * @param {Record<string, unknown>} body
 * @returns {boolean}
 */
function post(kind, body) {
  const url = endpoint()
  if (!url) return false

  const payload = {
    kind,
    path: safePath(),
    ref: referrerHost(),
    ts: Date.now(),
    ...body,
  }

  let json
  try {
    json = JSON.stringify(payload)
  } catch {
    return false
  }

  try {
    if (
      typeof navigator !== 'undefined' &&
      typeof navigator.sendBeacon === 'function'
    ) {
      const blob = new Blob([json], { type: 'application/json' })
      if (navigator.sendBeacon(url, blob)) return true
    }
  } catch {
    // fall through to fetch
  }

  try {
    if (typeof fetch === 'function') {
      // keepalive lets the request outlive a page unload (e.g. a share/leave).
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json,
        keepalive: true,
        mode: 'no-cors',
        credentials: 'omit',
      }).catch(() => {})
      return true
    }
  } catch {
    // give up silently
  }
  return false
}

/**
 * Record a funnel/analytics event. No-ops if no endpoint is configured.
 * Keep `name` a short, stable, low-cardinality string ("browse_view",
 * "add_to_basket", "make_list", "share_list"). `props` must be small and
 * PII-free (counts, booleans, enum-like strings).
 *
 * @param {string} name
 * @param {Record<string, unknown>} [props]
 */
export function trackEvent(name, props) {
  if (!name || typeof name !== 'string') return
  const body = { name }
  if (props && typeof props === 'object') {
    // Shallow copy; drop functions/undefined to keep the payload tiny + safe.
    const clean = {}
    for (const [k, v] of Object.entries(props)) {
      if (v === undefined || typeof v === 'function') continue
      clean[k] = v
    }
    body.props = clean
  }
  post('event', body)
}

/**
 * Record a single page/route view (call on every SPA navigation). No-ops without
 * an endpoint. `title` is the document title we just set (helps read the funnel).
 *
 * @param {string} [title]
 */
export function trackPageView(title) {
  post('event', { name: 'page_view', props: title ? { title } : undefined })
}

/**
 * Report an error. De-duplicated within a short window. No-ops without an
 * endpoint. `source` distinguishes 'window' / 'promise' / 'boundary'.
 *
 * @param {{ message?: string, stack?: string, source?: string,
 *           componentStack?: string }} info
 */
export function reportError(info = {}) {
  const message = String(info.message || 'Unknown error').slice(0, 500)
  const source = info.source || 'window'
  const signature = `${source}:${message}`
  if (!shouldSendError(signature)) return

  post('error', {
    source,
    message,
    stack: info.stack ? String(info.stack).slice(0, 2000) : undefined,
    componentStack: info.componentStack
      ? String(info.componentStack).slice(0, 2000)
      : undefined,
    ua: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
  })
}

let _installed = false

/**
 * Install global window.onerror / onunhandledrejection beacons. Idempotent and
 * safe to call once at boot (from main.jsx). When no endpoint is configured the
 * handlers are still attached but every send is a no-op, so there is no cost.
 */
export function installGlobalErrorTracking() {
  if (_installed || typeof window === 'undefined') return
  _installed = true

  window.addEventListener('error', (event) => {
    // Resource-load errors (img/script) surface here with no `error` object and
    // a non-window target; skip those — they are noise, not app exceptions.
    if (event && event.error) {
      reportError({
        source: 'window',
        message: event.message || event.error.message,
        stack: event.error.stack,
      })
    } else if (event && event.message && !event.target) {
      reportError({ source: 'window', message: event.message })
    }
  })

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event && event.reason
    const message =
      reason && reason.message ? reason.message : String(reason ?? 'rejection')
    reportError({
      source: 'promise',
      message,
      stack: reason && reason.stack ? reason.stack : undefined,
    })
  })
}
