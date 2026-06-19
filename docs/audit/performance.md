# Performance & Core Web Vitals — Domain Audit

**Scope:** JS bundle size & code-splitting, image pipeline (wsrv.nl) & LCP, Firestore read
patterns & quota headroom, caching/offline persistence, CLS/INP, perceived speed, and what to
measure. Analysis only — no source changes made.

**Date:** 2026-06-19 · **Branch:** main · **Build:** Vite 6.4.3
**Hard constraint context:** Firebase Spark (free) — Hosting + Firestore (~50K reads/day) only,
no Cloud Functions outbound, no Cloud Storage/Blaze. All recommendations below are feasible on
Spark unless explicitly flagged.

---

## Measured baseline (evidence)

Production build (`npm run build`, 2026-06-19) and live-site probes:

| Asset | Raw | gzip | brotli (live) | Notes |
|---|---|---|---|---|
| `firebase-*.js` | 429.88 KB | 107.38 KB | **90.56 KB** | `firebase/app` + `firebase/firestore`, `modulepreload`ed |
| `index-*.js` (app+React+router) | 226.92 KB | 71.98 KB | ~62 KB est. | the entry chunk — render-blocking |
| `index-*.css` | 59.70 KB | 9.70 KB | ~8 KB est. | single stylesheet, render-blocking |
| `index.html` | 1.14 KB | 0.58 KB | — | empty `#root` shell (SPA) |

- **Total JS shipped on first paint: ~657 KB raw / ~179 KB gzip / ~153 KB brotli.** Both JS
  chunks load on every route because `firebase-*.js` is `modulepreload`ed in `index.html` and
  `index-*.js` imports `src/firebase.js` at module top.
- Live assets are served with **brotli** (`content-encoding: br`) and
  `cache-control: public, max-age=31536000, immutable` — correct (verified via `curl -I`).
- Live `index.html` is served with `cache-control: max-age=3600` (NOT the `no-cache` configured
  in `firebase.json` — Firebase Hosting applies its own SPA-fallback default; see Finding 9).
- **Home (cold) Firestore reads:** 1 facets doc + 4 rails × up to 12 docs = **up to 49 reads**
  per cold home load (`Browse.jsx:130,241`).
- **facets/global doc:** 24,027 bytes JSON over REST (one read, large payload).
- **Recipe doc:** ~6,960 bytes JSON over REST (~4–5 KB on the SDK wire) — full doc incl.
  `instructions`, `nutritionPerServing`, `allergens`, all `ingredients` lines, fetched even for
  card rendering (`queryRecipes.js:179` returns `{ id, ...d.data() }`).
- Offline persistence IS enabled (`firebase.js:27` `persistentLocalCache` +
  `persistentMultipleTabManager`) — good, repeat reads hit IndexedDB, not quota.
- No realtime listeners anywhere (`grep onSnapshot src/` → none) — good, all reads are one-shot.

---

## Findings (ranked by leverage)

### 1. Firebase SDK (~90 KB brotli) is preloaded & loads on every route, incl. routes that never query
**Severity: P1 · Impact: 4 · Effort: M**

`index.html` emits `<link rel="modulepreload" href="/assets/firebase-*.js">`, so the 429 KB raw /
90.6 KB brotli Firestore chunk is fetched with high priority during the initial load on *every*
page — including the Sources screen (no Firestore reads) and the 404 page. The chunk also blocks
nothing visually but competes for bandwidth/CPU (parse+compile of 430 KB of JS) with the app
chunk during the critical window, hurting TTI/INP on mid/low-end mobile.

**Evidence:** `vite.config.js:11-13` forces a `firebase` manualChunk; live HTML contains
`<link rel="modulepreload" crossorigin href="/assets/firebase-BK-TEgHD.js">`; `src/firebase.js`
is imported at module top by `queryRecipes.js`, which is imported by `Browse.jsx` (the index
route) — so the chunk is in the index route's static import graph and Vite preloads it.

**Recommendation (feasible on Spark):**
- **Lazy-init Firestore.** Convert `src/firebase.js` to export an async `getDb()` that
  dynamically `import('firebase/firestore')` on first call, so the chunk is only fetched when a
  screen actually queries. Screens already fetch inside `useEffect`, so an extra `await` is cheap
  and keeps Firestore off the critical path for the first paint and off Sources/404 entirely.
- Alternatively, keep the static import but **remove the modulepreload** by setting Vite
  `build.modulePreload: { polyfill: false }` and pruning the firebase chunk from preload — at
  minimum drop it from high-priority preload so it loads after the app chunk.
- Audit the firebase entrypoints: only `firebase/app` + `firebase/firestore` are imported (good),
  but confirm tree-shaking isn't pulling `firebase/auth`/analytics transitively (it isn't here,
  but lock it in). Firebase v11 modular is already as small as it gets for Firestore;
  the win is *when* it loads, not *whether*.

**Expected win:** moves ~90 KB brotli off the LCP critical path; faster TTI/INP, especially on
the Sources/404/Meal-from-cache paths.

---

### 2. No route-level code-splitting — all 5 screens + their CSS ship in one 227 KB chunk
**Severity: P1 · Impact: 4 · Effort: S**

Every screen is statically imported in `App.jsx:23-27`, so Browse, Meal, Basket, ShoppingList,
and Sources (plus `buildShoppingList`, the shopping-list maths only ShoppingList/Basket need) are
all in the single `index-*.js` (227 KB raw / ~62 KB brotli). A first-time visitor to the home page
downloads, parses, and compiles the ShoppingList receipt logic and Sources screen they may never
open. `grep -rn 'lazy|Suspense' src/` → no `React.lazy` anywhere.

**Evidence:** `App.jsx:23-27` static imports; build output is a single app chunk; `Basket.jsx:5`
and `ShoppingList` import `buildShoppingList.js` (a pure module with non-trivial maths) into the
common chunk.

**Recommendation:** Wrap each route in `React.lazy(() => import('./screens/X.jsx'))` with a
`<Suspense fallback={skeleton}>` around `<Routes>` in `App.jsx`. Vite will emit per-route chunks
and per-screen CSS, shrinking the initial chunk to Browse + shell only. This is the single
lowest-effort structural win and pairs naturally with Finding 1 (Firestore then only loads for
the routes that import it).

**Expected win:** initial JS drops materially (Sources/Meal/Basket/ShoppingList code deferred);
faster first-load FCP/LCP/TTI. Effort is S because routing is already centralized.

---

### 3. Home fires up to 49 Firestore reads on a cold load; rails over-fetch full recipe docs
**Severity: P1 · Impact: 4 · Effort: M**

The home page issues 5 independent reads on mount: `getFacets` (1 read, 24 KB doc) + 4 rails each
`queryRecipes(... pageSize: 12)` (`Browse.jsx:130`). Each rail returns **full** recipe documents
(~5 KB on the wire) although a `MealCard` uses only `title`, `imageUrl`, `totalTimeMinutes`,
`servingsBase`, `dietLabels`, `nutritionPerServing.energyKcal` — roughly a fifth of the doc.
That is up to 48 full-doc reads (≈240 KB+ of recipe JSON) plus a 24 KB facets doc on first paint.

**Quota math:** 50,000 reads/day ÷ ~49 reads/cold-home ≈ **~1,020 cold home loads/day** before the
free cap (persistence amortizes repeat visits, but a viral spike or many first-time visitors blows
through it). The 4 rails also each select a *different* composite index, so they cannot share a
query.

**Evidence:** `Browse.jsx:126-141` (Rail effect), `Browse.jsx:239-251` (facets effect),
`queryRecipes.js:179` returns full `d.data()`; recipe doc measured at 6,960 B REST.

**Recommendation (feasible on Spark):**
- **Pre-bake the home page into one read.** During ingestion, write a `home/feed` document
  containing the 4 rails × 12 *lightweight* card projections (id, title, imageUrl,
  totalTimeMinutes, dietLabels[0], kcal). The home page then costs **1 read** instead of 49, and a
  much smaller payload. This is the highest-leverage quota+latency move and is pure ingestion work
  (the cron already runs off-Firebase). Cost: a few extra writes per cron run (well within 20K/day).
- **Trim card payloads regardless:** add a denormalized `card` map (or top-level
  `cardTitle/cardImage/cardKcal`) to each recipe at ingestion so card queries can `select()`-style
  read less — though the Web SDK doesn't support field masks, so the pre-baked feed (above) is the
  real fix.
- Keep facets at 1 read but consider **shrinking the 24 KB facets doc** to just the values the
  filter UI shows (the chip row only uses a handful of courses/diets/cuisines — `Browse.jsx:428`).

**Expected win:** home cold-load reads 49 → ~2, payload drops ~250 KB → ~30 KB, and the page is
network-bound on a single fast read. Big quota headroom and faster LCP (cards arrive sooner).

---

### 4. LCP image gets no `fetchpriority=high` — the `priority` prop is never passed on the home grid/rails
**Severity: P1 · Impact: 4 · Effort: S**

`RecipeImage` correctly supports `priority` → `fetchpriority="high"` + eager load
(`RecipeImage.jsx:59,171`), and `MealCard` forwards a `priority` prop (`MealCard.jsx:31,69`). But
**`Browse.jsx` never passes `priority` to any `MealCard`** (`grep priority src/screens/Browse.jsx`
→ none). So the largest above-the-fold images on the home page (the LCP candidate) load at
`fetchpriority="auto"`, behind the 90 KB Firestore chunk and 12 font files in the browser's
priority queue. The component's own comment even says "The first ~8 cards should pass priority"
(`MealCard.jsx:19`) — the contract exists but is unused.

**Evidence:** `MealCard.jsx:19` comment; `Browse.jsx:186-195` (rail cards) and
`Browse.jsx:712-720` (grid cards) both omit `priority`; Meal hero DOES pass it
(`Meal.jsx:206`), confirming the prop works.

**Recommendation:** Pass `priority` to the first row of the first rail and the first ~6–8 grid
cards (e.g. `priority={railIndex === 0 && i < 4}` / `priority={i < 6}`). Trivial change, directly
improves LCP by promoting the hero imagery in the resource queue.

**Expected win:** LCP image starts downloading immediately rather than after lower-priority
fetches; measurable LCP improvement on first home paint.

---

### 5. No `preconnect`/`dns-prefetch` to wsrv.nl or Firestore — every image and query pays full handshake latency
**Severity: P1 · Impact: 3 · Effort: S**

All recipe/ingredient images route through `wsrv.nl` (`RecipeImage.jsx:33`) and all data through
`firestore.googleapis.com`, yet `index.html` only preconnects to the two Google Fonts origins
(`index.html:13-14`). The first image and the first Firestore read each pay a cold DNS + TCP + TLS
handshake to a new origin (often 100–300 ms on mobile) on the critical path to LCP.

**Evidence:** `index.html:13-14` (only fonts preconnected); `grep wsrv index.html` → none;
optimize() builds `https://wsrv.nl/...` URLs (`RecipeImage.jsx:33`).

**Recommendation:** Add to `<head>`:
```html
<link rel="preconnect" href="https://wsrv.nl" crossorigin>
<link rel="preconnect" href="https://firestore.googleapis.com" crossorigin>
```
Optionally `<link rel="dns-prefetch">` as a fallback. Effectively free, shaves the handshake off
LCP and time-to-first-card.

**Expected win:** ~100–250 ms off LCP/first-card on cold connections.

---

### 6. wsrv.nl is a single, free third-party with no fallback — a SPOF for all imagery and a latency tax
**Severity: P2 · Impact: 3 · Effort: M**

Every non-data-URI image is rewritten to `https://wsrv.nl/?url=<origin>&w=…&output=webp&q=72`
(`RecipeImage.jsx:29-34`). wsrv.nl is a free community CDN: if it is slow, rate-limits, or is down,
**100% of imagery degrades to the gradient fallback** (the `onError` path). It also adds a proxy
hop (origin → wsrv → browser) and its own cold-cache miss latency for never-before-requested
crops. The pollinations-generated dish photos are themselves on a free origin, so this is a
free-tier dependency chain feeding LCP.

**Evidence:** `RecipeImage.jsx:29-34`; MEMORY/README confirm wsrv is the sole image CDN.

**Recommendation:**
- Keep wsrv (it's the right free choice for on-the-fly WebP+resize) but **warm its cache** by
  requesting the home-rail crops during ingestion (one fetch per generated image at the card
  width), so first visitors hit a wsrv HIT not a cold proxy+origin fetch.
- Consider a tiny client-side fallback: on `onError`, retry once with the raw origin URL (skip
  wsrv) before showing the gradient, so a wsrv blip doesn't blank the whole grid.
- Document wsrv's rate limits and treat sustained 429s as a known risk (no paid CDN on Spark; the
  only zero-cost alternative is committing pre-resized WebP into the Hosting bundle, which bloats
  the repo/deploy — note this trade-off).

**Expected win:** resilience (no full-grid blanking on a wsrv blip) + faster first-card paint via
cache warming. Flag: a guaranteed-fast image CDN would need a paid service (Cloudflare
Images/imgix ~$5+/mo) — out of scope for Spark.

---

### 7. 12 font files across 3 families load via a render-blocking Google Fonts stylesheet
**Severity: P2 · Impact: 3 · Effort: S**

`index.html:15-18` requests Archivo (5 weights), Hanken Grotesk (4 weights), and Spline Sans Mono
(3 weights) — **12 `@font-face` blocks** (confirmed by fetching the Google CSS) — via a single
render-blocking `<link rel="stylesheet">`. Even with `display=swap`, this is a blocking CSS request
to a third origin plus up to 12 woff2 downloads competing with the LCP image. Spline Sans Mono is
only used for monospace accents (receipt quantities) — a heavy cost for a niche role.

**Evidence:** `index.html:15-18`; Google CSS returns 12 `@font-face` blocks; `tokens.css:32` maps
`--font-display: Archivo`; mono family used sparingly.

**Recommendation (all free):**
- **Cut weights ruthlessly.** Most UIs need 2–3 weights per family. Drop Archivo to e.g. 700+900,
  Hanken to 400+600, and reconsider whether Spline Sans Mono earns its 3 weights (or use a system
  monospace stack for receipt numbers). Fewer weights = fewer woff2 fetches.
- **Self-host the woff2** in the bundle and `<link rel="preload" as="font" crossorigin>` the 1–2
  fonts used above the fold (the display/body weights for the hero + first cards). Self-hosting
  removes the third-origin handshake and the render-blocking Google stylesheet, and the
  Hosting layer already serves fonts with 1-year immutable caching (`firebase.json` headers cover
  `woff2`). This is the cleanest fix and stays on Spark.
- If keeping Google Fonts, at least `preload` the stylesheet or inline the small `@font-face` CSS
  to remove one blocking round-trip.

**Expected win:** removes a render-blocking third-party stylesheet + reduces font bytes; faster
first text paint and less LCP contention.

---

### 8. Browse search re-queries and over-fetches; can pull `PAGE_SIZE*2` pages in a loop client-side
**Severity: P2 · Impact: 2 · Effort: M**

Search is implemented as: run the *filter* query (no title index), then filter by title
client-side (`Browse.jsx:293-303,380-383`). To compensate for client-side trimming, searching
doubles the page size to 48 (`Browse.jsx:322,351`) and an effect keeps calling `loadMore` while
`visibleGrid.length < 8 && cursor` (`Browse.jsx:403-406`). A search for a rare term can therefore
walk many 48-doc pages — each a Firestore read burst — to surface a handful of matches. With no
debounce on the input beyond React's `useDeferredValue`, fast typing can also issue successive
queries.

**Evidence:** `Browse.jsx:322` (`searching ? PAGE_SIZE*2`), `Browse.jsx:403-406` (auto-paging
loop), `Browse.jsx:536-537` (input has no explicit debounce).

**Recommendation:**
- **Cap the auto-page loop** (e.g. stop after N pages or M total docs scanned) so a rare-term
  search can't quietly burn dozens of reads.
- Add a short input debounce (~250 ms) on top of `useDeferredValue` to coalesce keystrokes before
  the network query fires.
- Longer term, a proper search needs a search index (out of Spark scope without a service); a
  cheap stopgap is a small client-side index built from the pre-baked feed (Finding 3) for
  popular meals, falling back to the current behavior.

**Expected win:** bounded read cost per search; fewer redundant queries while typing.

---

### 9. `index.html` is served with `max-age=3600`, not the configured `no-cache`
**Severity: P2 · Impact: 2 · Effort: S**

`firebase.json` sets `index.html` to `Cache-Control: no-cache`, but the live response is
`cache-control: max-age=3600` (verified: `curl -I https://larder-dbayft.web.app/`). Firebase
Hosting's SPA `**` → `/index.html` rewrite returns the rewrite target with Hosting's default
1-hour cache, and the per-file `headers` rule for `index.html` does not apply to rewritten paths.
Net effect: after a deploy, returning visitors (and the Fastly edge, `x-cache: HIT`) can serve a
**stale `index.html` for up to an hour**, which references the *previous* hashed asset names. The
old assets are `immutable`-cached so they still load (no breakage), but users don't get the new
build promptly, and a deploy that removes an old asset could 404 for an hour.

**Evidence:** `firebase.json` `index.html` header = `no-cache`; live header = `max-age=3600`;
`x-cache: HIT` from Fastly.

**Recommendation:** Add an explicit header rule for the rewrite target — i.e. a `source: "/"` (and
`"**"`) entry forcing `Cache-Control: no-cache` (or `max-age=300`), or use Firebase's
`cleanUrls`/rewrite header support so the SPA entry isn't edge-cached for an hour. Verify with
`curl -I` post-deploy. Low effort, removes the stale-shell window.

**Expected win:** new deploys take effect immediately; eliminates the stale-index-references-old-
assets risk.

---

### 10. React StrictMode double-invokes effects in dev — and doubles the *real* Firestore reads while developing
**Severity: P3 · Impact: 2 · Effort: S**

`main.jsx:14` wraps the app in `React.StrictMode`. In dev, StrictMode intentionally
mounts→unmounts→remounts, running each `useEffect` twice. Because every screen's data fetch lives
in a `useEffect` against the *live* Firestore (`Browse.jsx`, `Meal.jsx`, `Basket.jsx`), local
development issues **double the reads** against the shared free quota (the home page's 49 reads
become ~98 per dev refresh). StrictMode is stripped from the production build, so end users are
unaffected — but heavy local iteration can dent the same 50K/day pool the live site uses.

**Evidence:** `main.jsx:14` `<React.StrictMode>`; all fetches are in effects hitting the live DB
(no local emulator configured — no `connectFirestoreEmulator` in `src/`).

**Recommendation:** Use the **Firestore emulator** for local dev (free, zero quota impact) so
StrictMode double-reads and iteration don't touch production quota. Keep StrictMode (it surfaces
bugs); just point dev at the emulator. Optional: a dev-only seed export from the emulator.

**Expected win:** protects the shared read quota during development; no production impact.

---

### 11. No image `width`/`height` attributes on `<img>` — CLS is mitigated by the aspect-ratio box but the contract is implicit
**Severity: P3 · Impact: 1 · Effort: S**

`RecipeImage` reserves space via a CSS `aspect-ratio` box (`RecipeImage.jsx:142`), which prevents
layout shift *as long as the CSS loads before paint*. The `<img>` itself has no `width`/`height`
attributes (`RecipeImage.jsx:160-175`). If the render-blocking CSS is ever delayed (e.g. a slow
third-party font stylesheet stalls the head — see Finding 7), the aspect-ratio box has no
dimensions and images could reflow. CLS is currently good by design, but it leans entirely on CSS
timing.

**Evidence:** `RecipeImage.jsx:142` aspect-ratio box; `RecipeImage.jsx:160-175` `<img>` with no
`width`/`height`.

**Recommendation:** Add intrinsic `width`/`height` attributes to the `<img>` matching the ratio
(e.g. 4:3 → `width={w} height={Math.round(w*3/4)}`). Modern browsers compute aspect-ratio from
the attributes even before CSS, making the zero-CLS guarantee independent of stylesheet timing.
Cheap belt-and-braces.

**Expected win:** hardens CLS against CSS-load delays; no downside.

---

### 12. Heavy per-item work in render lists (no memoized cards) — INP risk on large grids
**Severity: P3 · Impact: 2 · Effort: M**

The grid maps every loaded recipe to a `MealCard` (`Browse.jsx:712-720`), each card mounting a
`RecipeImage` that arms an `IntersectionObserver` + a `setTimeout(1200ms)` safety timer
(`RecipeImage.jsx:102-116`). With infinite scroll accumulating 24→48→… cards, a re-render of the
Browse component (e.g. on basket toggle, which updates `has`) re-runs the whole list. `MealCard`
is not wrapped in `React.memo`, and `onToggle` is a fresh closure per card per render
(`Browse.jsx:718` `() => handleToggle(meal)`), so all cards reconcile on any state change. On a
long grid this can produce long tasks → worse INP on interaction.

**Evidence:** `Browse.jsx:712-720` (inline arrow per card, no memo); `MealCard` has no
`React.memo`; each `RecipeImage` sets a 1200 ms timer + observer on mount (`RecipeImage.jsx:116`).

**Recommendation:**
- Wrap `MealCard` in `React.memo` and pass a stable `onToggle` (the card already receives `id`;
  `handleToggle` could take the meal and be passed directly, or use a `useCallback` keyed by id).
- Consider windowing/virtualization once grids routinely exceed ~60–100 cards (a lightweight
  approach, no library needed: only render cards near the viewport). Not urgent at current scale.

**Expected win:** fewer reconciliations on basket toggles/scroll; smoother INP on long grids.

---

## What to measure (no monitoring exists today)

The project has **no analytics/RUM/error tracking** (per MEMORY known issues). Without measurement,
the above are evidence-based estimates, not field data. Cheap, Spark-compatible options:

1. **Lab:** run **Lighthouse / PageSpeed Insights** against `https://larder-dbayft.web.app`
   (mobile profile) for LCP/CLS/TBT/INP baselines, and **WebPageTest** for a filmstrip of the
   home cold load (will visualize the firebase chunk vs LCP image contention in Findings 1/4).
   Record a build-size budget from this audit's table and check it in CI (`vite build` output).
2. **Field (free):** ship the **`web-vitals` npm library** (~2 KB) and beacon LCP/CLS/INP/TTFB to
   a free sink — e.g. a Google Form, a free Cloudflare Worker, or `console`/localStorage in a
   debug mode. No Blaze needed; the beacon is `navigator.sendBeacon` to any free endpoint.
3. **Quota:** watch the Firestore **Usage** tab daily-reads chart; correlate spikes with the
   ~49-reads-per-cold-home math (Finding 3). Pre-baking the feed should drop the slope sharply.
4. **Bundle:** add `rollup-plugin-visualizer` (dev-only) to confirm what's in the 227 KB app chunk
   before/after code-splitting (Finding 2).

---

## Highest-leverage move

**Pre-bake the home feed into a single Firestore document during ingestion (Finding 3),
combined with route-level code-splitting + lazy Firestore init (Findings 1 & 2).**

These three together attack the worst cost on the most-visited path: they collapse the cold home
load from ~49 reads / ~250 KB of recipe JSON to **1 small read**, and remove ~90 KB of Firestore
JS + four screens' worth of code from the first-paint critical path. The feed pre-bake is pure
ingestion work (the cron already runs off-Firebase, writes are far under the 20K/day cap), and the
code-split is a centralized `App.jsx` change — both fully within the Spark free tier. Pair with the
trivial wins (pass `priority` to the LCP cards, add `preconnect` to wsrv/Firestore) for an
immediate LCP improvement at near-zero effort.

---

## Appendix — quick-win checklist (effort S, do first)

- [ ] Pass `priority` to first ~6 grid cards + first rail row (Finding 4) — biggest LCP win per line changed.
- [ ] Add `<link rel="preconnect">` for `wsrv.nl` and `firestore.googleapis.com` (Finding 5).
- [ ] Trim Google Font weights; preload the 1–2 above-the-fold fonts (Finding 7).
- [ ] Fix `index.html` cache header so deploys aren't stale for an hour (Finding 9).
- [ ] Add intrinsic `width`/`height` to `<img>` (Finding 11).
- [ ] Route-split the 5 screens with `React.lazy` (Finding 2).
