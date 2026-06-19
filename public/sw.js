/*
 * Larder service worker (roadmap #32 — installable PWA + repeat-visit read relief).
 *
 * Strategy
 * ────────
 *  • App shell / navigations: network-first, falling back to the cached shell so a
 *    repeat visitor (or an offline one) still gets the SPA frame instead of the
 *    browser's dinosaur. index.html is served `no-cache` by Hosting, so a fresh
 *    shell is fetched whenever the network is up.
 *  • Same-origin static assets (hashed JS/CSS, fonts, /dishes/*.jpg, favicon,
 *    manifest): cache-first with background revalidate (stale-while-revalidate).
 *    These are content-hashed or immutable, so serving the cached copy first is
 *    safe and fast, and saves bandwidth on every repeat visit.
 *  • Firestore reads (firestore.googleapis.com): network-first with a short-lived
 *    cache fallback ONLY for plain GET document/list reads, giving read-quota +
 *    offline relief without ever serving stale data while online. Firestore's
 *    streaming/listen/write channels (POST, /Listen/, /Write/) are left entirely
 *    alone — we never touch them.
 *  • Cross-origin GETs we don't recognise (Google Fonts CSS/woff2, wsrv.nl photos):
 *    stale-while-revalidate, so fonts and remote images load instantly on return.
 *
 * The SW is intentionally dependency-free and defensive: any unexpected error in a
 * handler falls through to a normal network fetch, so it can never break the app.
 */

const VERSION = 'larder-v1'
const SHELL_CACHE = `${VERSION}-shell`
const STATIC_CACHE = `${VERSION}-static`
const REMOTE_CACHE = `${VERSION}-remote`
const FIRESTORE_CACHE = `${VERSION}-firestore`

// The minimal set we want available immediately, even on the very first offline load.
const SHELL_URLS = ['/', '/index.html', '/manifest.webmanifest', '/favicon.svg']

// How long a cached Firestore read may be served as a fallback when the network
// fails (ms). Kept short so an online user effectively always gets fresh data.
const FIRESTORE_MAX_AGE = 60 * 60 * 1000 // 1 hour

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL_URLS))
      .catch(() => {})
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            // Drop every cache that isn't part of the current VERSION.
            .filter((key) => !key.startsWith(VERSION))
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  )
})

// Allow the page to trigger an immediate activation of a waiting SW.
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting()
})

function isFirestore(url) {
  return url.hostname === 'firestore.googleapis.com'
}

// Only plain document/list GET reads are cacheable; never the realtime/listen or
// write channels (those are POSTs or carry /Listen//Write/ in the path).
function isCacheableFirestoreRead(request, url) {
  if (request.method !== 'GET') return false
  if (/\/(Listen|Write)\b/.test(url.pathname)) return false
  return true
}

function isStaticAsset(url) {
  return /\.(?:js|mjs|css|woff2?|ttf|otf|eot|png|jpe?g|svg|webp|gif|ico|json|webmanifest)$/i.test(
    url.pathname,
  )
}

// ── Strategy helpers ────────────────────────────────────────────────────────

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(request)
  const network = fetch(request)
    .then((response) => {
      if (response && response.ok) cache.put(request, response.clone())
      return response
    })
    .catch(() => null)
  return cached || (await network) || fetch(request)
}

async function firestoreNetworkFirst(request) {
  const cache = await caches.open(FIRESTORE_CACHE)
  try {
    const response = await fetch(request)
    if (response && response.ok) {
      // Stamp the time so we can expire stale fallbacks.
      const stamped = new Response(response.clone().body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers),
      })
      stamped.headers.set('x-larder-cached-at', String(Date.now()))
      cache.put(request, stamped).catch(() => {})
    }
    return response
  } catch (err) {
    const cached = await cache.match(request)
    if (cached) {
      const cachedAt = Number(cached.headers.get('x-larder-cached-at') || 0)
      if (Date.now() - cachedAt <= FIRESTORE_MAX_AGE) return cached
    }
    throw err
  }
}

async function networkFirstShell(request) {
  const cache = await caches.open(SHELL_CACHE)
  try {
    const response = await fetch(request)
    if (response && response.ok) cache.put('/index.html', response.clone()).catch(() => {})
    return response
  } catch (err) {
    const cached = (await cache.match(request)) || (await cache.match('/index.html'))
    if (cached) return cached
    throw err
  }
}

// ── Fetch router ────────────────────────────────────────────────────────────

self.addEventListener('fetch', (event) => {
  const { request } = event
  let url
  try {
    url = new URL(request.url)
  } catch {
    return // Unparseable — let the browser handle it.
  }

  // Only ever handle GET; writes/uploads/etc. pass straight through.
  if (request.method !== 'GET') return

  // SPA navigations -> network-first shell with offline fallback.
  if (request.mode === 'navigate') {
    event.respondWith(networkFirstShell(request))
    return
  }

  // Firestore reads -> network-first with short-lived fallback.
  if (isFirestore(url)) {
    if (isCacheableFirestoreRead(request, url)) {
      event.respondWith(firestoreNetworkFirst(request))
    }
    return
  }

  // Same-origin static assets -> stale-while-revalidate.
  if (url.origin === self.location.origin && isStaticAsset(url)) {
    event.respondWith(staleWhileRevalidate(request, STATIC_CACHE))
    return
  }

  // Recognised cross-origin GETs (fonts, remote photos) -> stale-while-revalidate.
  if (
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com' ||
    url.hostname === 'wsrv.nl'
  ) {
    event.respondWith(staleWhileRevalidate(request, REMOTE_CACHE))
    return
  }

  // Everything else: default network behaviour (no respondWith).
})
