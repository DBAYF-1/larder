# Audit — SEO, Shareability & Discoverability

**Dimension owner:** SEO / shareability / discoverability auditor
**Date:** 2026-06-19
**Live target:** https://larder-dbayft.web.app
**Scope:** CSR crawlability, prerender/SSR/SSG options on Spark, per-meal meta/OG/Twitter, Recipe
structured data (JSON-LD), `sitemap.xml` / `robots.txt`, PWA/manifest/installability, deep-link share
of a meal or a finished list.

This dimension **gates organic growth**. Today the product has effectively **zero organic discovery
surface**: a crawler, a social-card unfurler, and a "share this meal" action all hit the same wall.

---

## Executive summary

Larder is a pure client-rendered (CSR) React SPA on Firebase Hosting. **Every URL returns the same
static `index.html` with an empty `<div id="root">`** and a generic `<title>`/`<meta description>` — no
per-route content, no Open Graph, no Twitter cards, no canonical, no `Recipe` JSON-LD, no real
`robots.txt`, no real `sitemap.xml`, no web app manifest. The catch-all rewrite (`firebase.json` L9)
means even `/robots.txt`, `/sitemap.xml`, and `/manifest.webmanifest` return the HTML shell with
`content-type: text/html` (HTTP 200) — actively misleading to crawlers and PWA installers.

The underlying data is **excellent raw material for SEO**: ~1,955 recipes with rich, schema-mappable
fields (`title`, `imageUrl`, `ingredients`, `instructions`, `nutritionPerServing`, `totalTimeMinutes`,
`servingsBase`, `cuisine`, `course`, `popularity`). A meal-planning site that surfaces "[dish]
ingredients and shopping list" pages with `Recipe` rich results could capture a large volume of
long-tail recipe search traffic — but **none of it is reachable today**.

The single highest-leverage move is **build-time prerendering of the home page + top-N meal pages**
(SSG) with injected per-page meta + `Recipe` JSON-LD, plus a generated `sitemap.xml` and a real
`robots.txt`. This is 100% feasible on the free Spark tier (it's all static files), and it converts the
app from "invisible" to "indexable with rich results" without any Blaze/SSR cost.

---

## Evidence base (measured)

All confirmed live on 2026-06-19:

| Probe | Result | Meaning |
|---|---|---|
| `curl -A Googlebot https://larder-dbayft.web.app/` | `<div id="root"></div>` empty; only `<title>` + `<meta description>` | No crawlable content; no social/structured tags. |
| `curl -A Googlebot .../meal/52772` | **Identical** head: `<title>Larder — browse meals, build your shopping list</title>`, no `og:`/`twitter:`/`ld+json`/`<h1>` | Every meal shares one generic title/description; per-meal SEO impossible. |
| `grep -iE 'og:|twitter:|canonical|application/ld' served root | NONE FOUND | Confirmed absent on the deployed bundle. |
| `GET /robots.txt` | **HTTP 200, `content-type: text/html`**, body = SPA shell | No real robots.txt; crawlers get HTML. |
| `GET /sitemap.xml` | **HTTP 200, `content-type: text/html`**, body = SPA shell | No real sitemap; nothing to discover URLs from. |
| `GET /manifest.webmanifest` and `/manifest.json` | **HTTP 200, `text/html`**, body = SPA shell | No PWA manifest; not installable; `<link rel=manifest>` absent from `index.html`. |
| `grep -riE 'helmet|document.title|og:|json-ld' src/` | No meta-management code anywhere | No mechanism exists to set per-route head tags. |
| `firebase.json` L9 | `"rewrites": [{ "source": "**", "destination": "/index.html" }]` | The catch-all is what makes the four probes above return HTML. |
| Firestore `facets/global` | British 668, Italian 130, Mediterranean 124, Chinese 76, Indian 72… (37 cuisines) | Cuisine/diet/course hubs are enumerable for hub pages + sitemap. |
| Recipe doc fields | `title, imageUrl, ingredients, instructions, nutritionPerServing, totalTimeMinutes, servingsBase, cuisine, course, popularity, dietLabels, healthLabels, allergens, sourceUrl, publisher` | Directly maps to schema.org/Recipe + sitemap `<priority>` via `popularity`. |
| `public/dishes/` | 368 AI dish images named by recipe slug (e.g. `curated-curated-caprese-salad.jpg`) | Ready-made per-meal OG images already exist for ~368 meals. |
| `git ls-files dist/` | empty; `.gitignore` lists `dist/` | Build is not committed — a prerender/build step is safe to add. |

**What is already good (keep):**
- `<html lang="en-GB">`, `<meta name="theme-color" content="#FBFAF6">`, a `<meta description>`, and a
  `favicon.svg` exist (`index.html` L2, L5, L7, L9).
- The **finished shopping list already has Web Share + Copy** (`ShoppingList.jsx` L232–272) — a real
  share affordance, though it shares plain text only, not a URL (see Finding 8).
- `popularity` ordering exists in `queryRecipes.js` — perfect for sitemap prioritisation and choosing
  which meals to prerender first.

---

## Findings (ranked by leverage)

### F1 — Crawlers and social unfurlers see an empty shell on every URL (CSR with no prerender) — P1
- **Severity P1 · Impact 5 · Effort M (SSG) / L (full SSR)**
- **Evidence:** `curl -A Googlebot /` and `/meal/52772` both return `<div id="root"></div>` with the
  same generic `<title>`; `main.jsx` mounts React client-side only (`createRoot(...).render(...)`).
  Googlebot *can* execute JS in a second render wave, but (a) it is deferred and unreliable for a
  1,955-page site, (b) Bing/DuckDuckGo/most social unfurlers (Facebook, LinkedIn, WhatsApp, Slack,
  iMessage, Discord) **do not run JS at all**, so they see nothing. The Meal screen also fetches its
  data client-side from Firestore (`Meal.jsx` L71), so even JS-running crawlers must complete a
  network round-trip before any content exists.
- **Why it matters:** This is the root cause that makes F2–F4 unfixable by tag injection alone. Without
  server-rendered or prerendered HTML, OG tags and JSON-LD can be injected by React at runtime but will
  not be seen by non-JS unf[urlers/crawlers.
- **Recommendation (feasible on Spark — preferred): build-time SSG / prerender.**
  1. Add a post-build prerender step that, for a chosen set of routes, runs the SPA in a headless
     renderer (e.g. `vite-plugin-ssr`/`vike`, `react-snap`, or `puppeteer` in the existing GitHub
     Actions runner — networking is already available there) and writes a real `index.html` per route:
     `/index.html`, `/meal/<id>/index.html`, and cuisine/diet hub pages.
  2. Pull the recipe list at build time from Firestore via the Admin SDK (already used by ingestion) —
     no client read-quota cost. Prerender the **top ~500 by `popularity`** first (matches the existing
     image-generation prioritisation), expand over time.
  3. Each prerendered page ships static `<title>`, `<meta description>`, OG/Twitter, canonical, and
     `Recipe` JSON-LD (F2–F3) baked into the HTML — then React hydrates for interactivity.
  - Output is static files served by Hosting → **stays on the free Spark tier**. The only cost is CI
    minutes (free on a public repo) and bundle/build time.
- **Recommendation (alternative — costs money): SSR/edge via Hosting dynamic rewrite to a Cloud
  Function/Cloud Run.** This gives fresh per-request HTML for all 1,955 meals, but **Firebase Hosting
  dynamic rewrites to Functions/Cloud Run require the Blaze (pay-as-you-go) plan** — explicitly
  out of scope per the project's HARD CONSTRAINTS (no Blaze). Note as a future option only; do not
  pursue for v1.
- **Uncertainty:** SSG adds build complexity and a hydration story (React 18 `hydrateRoot`). If full
  prerender is too heavy for v1, the minimum viable version is F2's "prerender just the home page +
  top-N meals" — still strictly better than today.

### F2 — No per-meal Open Graph / Twitter / canonical tags; broken link previews everywhere — P1
- **Severity P1 · Impact 5 · Effort S (home, static) / M (per-meal, needs F1)**
- **Evidence:** Served root contains no `og:*`, `twitter:*`, or `canonical` (grep: NONE FOUND).
  `meal/52772` returns the same generic `<title>` with no meal-specific OG image/title/description.
- **Why it matters:** When anyone shares a Larder meal link in WhatsApp/iMessage/Slack/Discord/Facebook
  (the primary growth loop for a consumer food app), the preview is blank or shows the generic
  homepage title — no dish photo, no dish name. This kills the viral share loop *and* every meal page
  is a duplicate-title page to Google (1,955 pages all titled "Larder — browse meals…").
- **Recommendation:**
  - **Static, do now (no F1 needed):** Add to `index.html` a full default OG/Twitter block —
    `og:title`, `og:description`, `og:type=website`, `og:url`, `og:image` (a 1200×630 branded card),
    `og:site_name=Larder`, `twitter:card=summary_large_image`, `twitter:image`, and a `<link
    rel="canonical">`. This fixes homepage + any non-meal share immediately.
  - **Per-meal (needs F1 prerender):** Inject `og:title = "<dish> — ingredients & shopping list"`,
    `og:description` from the recipe, `og:image` = the meal's `imageUrl` (or the existing
    `public/dishes/<slug>.jpg`, of which **368 already exist**), and a self-referential canonical
    `https://larder-dbayft.web.app/meal/<id>`.
  - Build a **default 1200×630 OG card** for the homepage (a static asset, e.g. wordmark + tagline);
    none exists today.
- **Quick win flag:** The homepage/default OG block is **S effort and ships without any prerender** —
  do this first regardless of the SSG decision.

### F3 — No `Recipe` structured data (schema.org JSON-LD) — leaves Google rich results on the table — P1
- **Severity P1 · Impact 5 · Effort M (needs F1) · the single biggest organic-traffic opportunity**
- **Evidence:** `grep -iE 'application/ld|json-ld' src/ dist served-root` → none. Recipe docs already
  carry every field Google's Recipe rich result wants: `name` (title), `image` (imageUrl /
  public dish jpg), `recipeIngredient` (ingredients[]), `recipeInstructions` (instructions /
  instructionsExternal), `nutrition` (nutritionPerServing), `totalTime`/`cookTime` (totalTimeMinutes),
  `recipeYield` (servingsBase), `recipeCuisine` (cuisine), `recipeCategory` (course).
- **Why it matters:** Recipe queries are extremely high-volume and Google renders them with rich
  cards (photo, time, rating). A correctly-marked-up Recipe page is eligible for the recipe carousel
  and rich snippet — disproportionate CTR vs. a plain blue link. For a meal-planning product this is
  *the* organic acquisition channel.
- **Recommendation:** During the F1 prerender, emit a `<script type="application/ld+json">` per meal
  with `@type: "Recipe"`. Map fields directly; use ISO-8601 durations (`PT30M`) for `totalTime`; only
  include `recipeInstructions` when `instructionsExternal === false` (many TheMealDB/Edamam recipes
  link out — for those, omit instructions and keep it an ingredients/aggregation page to avoid
  thin-content/structured-data violations). Validate with Google's Rich Results Test before launch.
- **Caveat / honesty:** Google requires recipe instructions to be present on the page for full Recipe
  rich-result eligibility. For link-out recipes (`instructionsExternal === true`), expect reduced
  eligibility — these pages should lean on the unique value (consolidated, aisle-sorted shopping list)
  rather than competing as recipe pages.

### F4 — `robots.txt`, `sitemap.xml`, and `manifest.webmanifest` all return the HTML shell (HTTP 200) — P1
- **Severity P1 · Impact 4 · Effort S**
- **Evidence:** `GET /robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/manifest.json` each →
  HTTP 200 with `content-type: text/html` and the SPA body, caused by `firebase.json` L9's `"**"`
  rewrite. `public/` contains only `favicon.svg` and `dishes/`.
- **Why it matters:** This is *worse than missing* — a crawler requesting `robots.txt` gets HTML
  (treated as "no rules / parse error"), and a sitemap fetch returns HTML (invalid sitemap). There is
  no URL-discovery source, so even if pages were crawlable, Google has no list of the 1,955 meal URLs.
- **Recommendation:**
  - Add `public/robots.txt` (Vite copies `public/` verbatim, so it bypasses the rewrite):
    `User-agent: *` / `Allow: /` / `Sitemap: https://larder-dbayft.web.app/sitemap.xml`.
  - **Generate `sitemap.xml` at build** from Firestore (Admin SDK in CI): one `<url>` per meal
    (`/meal/<id>`), per cuisine/diet hub, plus `/`. Use `popularity` to set `<priority>` and
    ingestion `updatedAt` for `<lastmod>`. ~1,955 URLs is well within the 50,000-URL single-file
    limit. Write it to `public/` (or `dist/`) so it ships as a real `.xml`.
  - Because real files in `public/` take precedence over the `**` rewrite, these stop returning HTML.
    No `firebase.json` change strictly required, but consider explicit headers for correct
    `content-type` on `.xml`/`.webmanifest`.

### F5 — Not installable: no web app manifest, despite "feel like Just Eat" positioning — P2
- **Severity P2 · Impact 3 · Effort S**
- **Evidence:** `/manifest.webmanifest` returns HTML; `index.html` has no `<link rel="manifest">`;
  `public/` has no manifest. `theme-color` is set (good start) but unused by any install prompt.
- **Why it matters:** A consumer meal-planning app that wants delivery-app feel benefits hugely from
  "Add to Home Screen" — repeat engagement, an app icon, standalone chrome. Currently impossible.
- **Recommendation:** Add `public/manifest.webmanifest` with `name: "Larder"`,
  `short_name: "Larder"`, `start_url: "/"`, `display: "standalone"`, `background_color`/`theme_color:
  "#FBFAF6"`, and `icons` (192/512 PNG + a maskable variant — currently only an SVG favicon exists, so
  PNG icons must be produced). Reference it via `<link rel="manifest" href="/manifest.webmanifest">` in
  `index.html`. Pairs naturally with the F9 service-worker for true installability.

### F6 — Duplicate/generic titles and descriptions across all routes — P2
- **Severity P2 · Impact 4 · Effort S (home routes) / M (per-meal, needs F1)**
- **Evidence:** All five routes (`/`, `/meal/:id`, `/basket`, `/list`, `/sources` — `App.jsx` L82–87)
  render with the identical static `<title>Larder — browse meals, build your shopping list</title>`.
  No `document.title` updates exist (`grep` confirmed).
- **Why it matters:** Even setting aside crawlability, duplicate titles/descriptions are a classic
  on-page SEO defect: Google may collapse/ignore duplicate-title pages, and browser tabs/bookmarks/
  history are all indistinguishable for the user.
- **Recommendation:**
  - **Immediate (runtime, helps users + JS-crawlers):** add a tiny `useDocumentTitle(title)` hook (or
    `react-helmet-async`) so each screen sets a meaningful `<title>` — e.g. meal pages →
    `"<dish> — ingredients & UK shopping list | Larder"`, basket → `"Your basket | Larder"`. This is a
    small win even before SSG, since it improves bookmarks and JS-rendered crawl.
  - **Full (with F1):** bake the per-page title/description into the prerendered HTML.
  - Mark `/basket` and `/list` `noindex` (user-specific, thin) via meta robots so crawl budget
    concentrates on meals + hubs.

### F7 — No indexable cuisine/diet/course hub pages — missing the long-tail category surface — P2
- **Severity P2 · Impact 4 · Effort M**
- **Evidence:** Filtering is done in-app via `FilterBar` + `queryRecipes` (`planQuery` supports
  cuisine/diet/course/health filters), but filter state is **not in the URL** — `grep` found no
  `useSearchParams`/`URLSearchParams` use in `src` (the OVERHAUL_AUDIT §2 also notes this at L180).
  `facets/global` shows 37 cuisines and diet/health facets with counts (British 668, Italian 130,
  etc.) — all enumerable.
- **Why it matters:** "vegan dinner recipes", "gluten-free meals", "Italian recipes UK" are huge
  search categories. Without URL-addressable filtered views there are no landing pages to rank, and no
  internal-link graph for crawlers to discover individual meals. Hub pages are also the natural place
  to win category queries that individual recipe pages can't.
- **Recommendation:**
  1. Persist filter state to the URL (`?cuisine=Italian&diet=Vegan` or clean paths like
     `/cuisine/italian`, `/diet/vegan`) — this alone makes filtered views shareable and crawlable.
  2. Prerender (F1) a hub page per high-count cuisine/diet/course with an H1, intro copy, and a grid of
     meal cards linking to `/meal/:id` — giving crawlers an internal link graph and users a real
     landing page. Add these to the sitemap (F4).
  - Synergy: directly reuses the OVERHAUL_AUDIT §2 recommendation to put filters in the URL.

### F8 — Meal & list deep-link sharing is weak: no shareable list URL, share is plain-text only — P2
- **Severity P2 · Impact 3 · Effort M**
- **Evidence:** `ShoppingList.jsx` L262–272 uses `navigator.share({ title, text: plainText })` — it
  shares the list **as plain text, with no URL back to Larder**. The basket lives only in
  `localStorage` (`state/basket.js`), not in the URL, so a shared list cannot be reconstructed by a
  recipient and the share carries no link/branding/back-pointer. Meal pages have a "Back to browse"
  link (`Meal.jsx` L191) but no explicit "share this meal" affordance.
- **Why it matters:** Sharing is the cheapest growth channel for a consumer food app, and the current
  share is a dead-end (text blob, no link). A recipient can't open the list, and there's no acquisition
  loop. Meal sharing relies on users copying the URL bar — which (per F2) unfurls to nothing.
- **Recommendation:**
  - Add a "Share this meal" button on the Meal screen that copies/shares the canonical
    `/meal/<id>` URL (which, post-F2, unfurls to a rich card).
  - Make the finished list shareable as a URL by encoding the basket into the query string (e.g.
    `/list?meals=52772,52959&n=4`) and reading it back in `ShoppingList`/`Basket`. This is fully
    client-side (no accounts/Firestore writes needed — respects the no-auth v1 constraint). Include the
    URL in `navigator.share({ url })` alongside the plain text. For long baskets, keep the text as the
    body and the URL as the canonical pointer.
  - **Honesty:** A fully crawlable, OG-rich shared *list* page would need prerender/SSR of a dynamic
    list, which is impractical on Spark — so keep list-sharing as a deep link for humans (the URL
    rehydrates the basket), and reserve rich OG cards for the stable, prerenderable **meal** pages.

### F9 — No service worker / offline app shell (installability + repeat-visit perf) — P3
- **Severity P3 · Impact 2 · Effort M**
- **Evidence:** No service worker in `src`/`public`; no `vite-plugin-pwa` in `package.json`
  dependencies. OVERHAUL_AUDIT §14.2 notes the same gap.
- **Why it matters:** Secondary to discoverability, but a service worker (a) is required for a
  genuinely installable PWA alongside the F5 manifest, (b) caches the app shell + images (368 dish
  jpgs + wsrv.nl WebP) for fast repeat visits, and (c) reduces Firestore reads on return visits
  (helping the §14.3 read-quota concern).
- **Recommendation:** Add `vite-plugin-pwa` (Workbox) with a precache of the shell and a
  stale-while-revalidate cache for images and Firestore-derived data. Static + client-side — free on
  Spark. Sequence after F5 (manifest) and F1 (so the prerendered HTML is also cached).

### F10 — `theme-color` lacks a dark-scheme variant; no canonical/hreflang strategy for a UK product — P3
- **Severity P3 · Impact 1 · Effort S**
- **Evidence:** `index.html` L7 has a single light `theme-color`; `<html lang="en-GB">` is set (good),
  but there is no `canonical` or any explicit single-region signal beyond `lang`.
- **Why it matters:** Minor polish. UK-specific positioning is well served by `en-GB` + UK content; no
  hreflang is needed for a single-locale site, but a self-referential canonical on every page prevents
  duplicate-URL dilution (e.g. trailing slash, query-param variants).
- **Recommendation:** Add `<meta name="theme-color" media="(prefers-color-scheme: dark)" ...>` if a
  dark theme ships; ensure every prerendered page emits a self-referential `<link rel="canonical">`
  (covered under F2). No hreflang required for v1.

---

## Highest-leverage move

**Stand up build-time prerendering (SSG) for the home page + the top ~500 meals by `popularity`, with
per-page `<title>`/meta, full OG/Twitter tags, and `Recipe` JSON-LD baked into the HTML — and ship a
real `robots.txt` + a generated `sitemap.xml`.**

This single workstream (F1 + F2 + F3 + F4 together) is the unlock: it converts Larder from
"invisible to every crawler and unfurler" into "indexable with Google recipe rich results and rich
social cards," using the data that already exists (rich recipe fields, 368 dish images, `popularity`
ordering, enumerable facets). Crucially it is **entirely static output served by Firebase Hosting —
fully within the free Spark tier** (build runs in the already-free GitHub Actions runner via the Admin
SDK; no Blaze, no Cloud Functions, no Cloud Storage). The SSR alternative would cover all 1,955 meals
with fresher data but requires Blaze and is therefore out of scope for v1.

**Suggested sequence:**
1. **Today, no prerender needed (S):** real `public/robots.txt`; default homepage OG/Twitter block + a
   1200×630 OG card; a `useDocumentTitle` hook for per-route titles (F4 partial, F2 partial, F6
   partial). Immediate wins for homepage shares and JS-crawl.
2. **Prerender pipeline (M):** SSG the home + top-N meals + hubs with full meta + `Recipe` JSON-LD
   (F1, F2, F3, F7).
3. **Generated `sitemap.xml`** from Firestore in CI (F4).
4. **PWA:** manifest + service worker (F5, F9).
5. **Shareable URLs:** meal share button + URL-encoded basket/list (F8).

---

## Cross-references to the panel
- Overlaps with **OVERHAUL_AUDIT §13** (SEO/meta/social) — this audit confirms each item live and adds
  the prerender-vs-SSR feasibility analysis, the hub-page strategy, and the deep-link-share gap.
- F7 (URL-addressable filters) is shared with **OVERHAUL_AUDIT §2 / §11.x** (filter state in URL).
- F9 (service worker) overlaps **OVERHAUL_AUDIT §14.2/§14.3** (PWA + Firestore read-quota relief).
