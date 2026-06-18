# Larder — Overhaul Audit (READ-ONLY ANALYSIS)

**Goal:** take Larder from "works on paper" to a market-ready, delivery-app-grade product whose
benchmark UX is Just Eat / Uber Eats / Deliveroo — image-led, fluid scroll/flick, every image loads
fast and reliably, navigation always works, nothing blocks taps.

**Scope of this document:** analysis only. No app code has been changed. Findings are ruthless and
prioritised. Each finding gives **current state → gap vs a delivery app → concrete fix**. File paths
are absolute.

Date: 2026-06-18 · Branch: `main` · Reviewed: `src/`, `ingestion/`, `index.html`, `vite.config.js`,
`firebase.json`, `firestore.*`, `dist/`.

---

## 0. Executive summary — the P0 blockers

These three issues alone make the product feel broken. Everything else is polish on top.

1. **Images never load (P0).** Every image in the app (`MealCard`, `Meal` hero, `Basket` thumbs,
   `ShoppingList` meal strip) is a bare `<img loading="lazy">`. The diagnosis is confirmed: native
   lazy-loading is failing to trigger for visible content, so 0/48 images render even though the
   sources are valid. There is **no `RecipeImage` primitive** in the codebase yet
   (`/Users/danielb/meals/src/components/RecipeImage.jsx` does not exist) — the shared contract names
   it but nobody renders through it. This is the single biggest blocker.
2. **The filter bar blocks the screen (P0).** `/Users/danielb/meals/src/components/FilterBar.jsx` is a
   giant always-open panel (`Course`, `Cuisine`, `Diet`, `Free from`, `Ready in` — up to 8 chips each
   = ~30+ chips stacked). It is `position: sticky; z-index: 20` and capped at
   `max-height: calc(100dvh - …)`, i.e. it can occupy ~46% of the viewport and overlays the cards
   below, intercepting taps. Tiles feel "unclickable".
3. **No ingredient photos exist (P0 for the brief, P1 functionally).** The contract says ingredient
   docs gain `imageUrl` (a TheMealDB ingredient photo) and the receipt/ingredient lines should render
   small thumbnails. **No ingredient doc carries `imageUrl`** (confirmed: nothing under
   `/Users/danielb/meals/ingestion/data/ingredients/` sets it), and no UI renders ingredient images.
   The shopping list and ingredient lines are pure text — far from delivery-app polish.

Fixing #1 and #2 is the difference between "demo that looks broken" and "feels like a real app."

---

## 1. Image loading & performance

### 1.1 No `RecipeImage` primitive — images load via native `loading="lazy"` (P0)
- **Current:** Five separate, inconsistent `<img>` implementations:
  - `/Users/danielb/meals/src/components/MealCard.jsx` (L58–68) — `loading="lazy" decoding="async"`, `alt=""`.
  - `/Users/danielb/meals/src/screens/Meal.jsx` (L159–168) — `loading="lazy"`, `alt={title}`, no `decoding`.
  - `/Users/danielb/meals/src/screens/Basket.jsx` (L172–184) — `loading="lazy"`, `alt=""`.
  - `/Users/danielb/meals/src/screens/ShoppingList.jsx` (L310–322) — `loading="lazy"`, `alt=""`.
  - No width/height or aspect-ratio attributes on the `<img>` itself (ratio is only on the CSS wrapper).
- **Gap vs delivery app:** Just Eat/Deliveroo images appear instantly on visible cards, fade in, never
  pop layout, and degrade to a tasteful placeholder on error. Here, nothing renders at all.
- **Fix:** Build `/Users/danielb/meals/src/components/RecipeImage.jsx` to the exact contract
  `<RecipeImage src alt priority={false} ratio="4/3" rounded={false} className />` and route **every**
  image through it. The primitive must:
  - **Not** rely on native `loading="lazy"` for above-the-fold/visible content. Use an
    `IntersectionObserver` (with a generous `rootMargin`, e.g. `400px`) to flip `src` in, OR eager-load
    with `fetchpriority="high"` when `priority` is true (hero, first rail row). For lazy items, observe
    and load — never depend on the browser heuristic that is currently failing.
  - Reserve space via the `ratio` prop (`aspect-ratio` on a wrapper) so there is **zero CLS**.
  - Track `onLoad`/`onError`: fade in on load (opacity transition, respect `prefers-reduced-motion`),
    and on error swap to an on-brand placeholder (the SVG plate already used by `EmptyState`/cards).
  - Set explicit `decoding="async"` and a low-quality/skeleton background while pending.
  - Be the ONLY image renderer (delete the 5 inline `<img>` tags).

### 1.2 Full-resolution thumbnails everywhere (P1)
- **Current:** Recipe `imageUrl` is the full-size TheMealDB thumb (`m.strMealThumb`,
  `/Users/danielb/meals/ingestion/sources/themealdb.js` L96/109/175). TheMealDB serves a `/preview`
  (smaller) variant (`{thumb}/preview`) that is ideal for cards/rails.
- **Gap:** Delivery apps serve right-sized images per breakpoint; shipping a 600px+ photo into a 230px
  rail card wastes bandwidth and slows first paint on mobile.
- **Fix:** In `RecipeImage`, when the host is `themealdb.com` and `priority` is false (card/rail/thumb
  context), append `/preview` to get the small variant; use the full image only for the Meal hero.
  Optionally do the same transform centrally so curated/Edamam images get a sized variant where
  available. (Ingestion stays as-is; the transform is a pure client-side string op.)

### 1.3 No `srcset`/`sizes`, no width/height attributes (P1)
- **Current:** No responsive image hints anywhere.
- **Gap:** No DPR-aware delivery; retina screens get soft images or oversized downloads.
- **Fix:** Where a source offers multiple sizes (TheMealDB `/preview` + full), emit a 2-entry `srcset`
  with a `sizes` matching the card/rail/grid column width. Always set intrinsic `width`/`height` (or
  rely on the `aspect-ratio` wrapper) to lock layout.

### 1.4 Data-URI SVG placeholders are heavy and uncached (P2)
- **Current:** Curated recipes without a real photo get a generated `data:image/svg+xml,…` placeholder
  (`/Users/danielb/meals/ingestion/sources/curated.js` L74–108, used at L134). These inline blobs live
  inside the recipe doc and ship on every query — they are not a real "image-led" experience and bloat
  Firestore reads.
- **Gap:** Delivery apps never show a wall of generated placeholders; they show real food photography.
- **Fix:** (a) Short term — render placeholders through `RecipeImage` so they at least size correctly
  and don't block. (b) Medium term — source real photos for curated recipes (TheMealDB ingredient
  composites, Wikimedia, or a stock set) so the placeholder is the rare exception, not the norm.
  Track placeholder coverage as a launch metric (see §13).

### 1.5 No preloading of the LCP image (P2)
- **Current:** `/Users/danielb/meals/index.html` preconnects to Google Fonts only. The hero/first-rail
  image is discovered late.
- **Fix:** Preconnect to `https://www.themealdb.com` (and any CDN hosts) in `index.html`; have
  `RecipeImage priority` set `fetchpriority="high"` so the first visible images win the network race.

---

## 2. The filter UX (P0)

### 2.1 Always-open giant panel that overlays content (P0)
- **Current:** `/Users/danielb/meals/src/components/FilterBar.jsx` renders a full `<section>` with a
  title, a sort `<select>`, and **five** `FacetGroup`s, each up to 8 chips, all expanded at once. The
  wrapper `/Users/danielb/meals/src/screens/Browse.css` (`.browse-filters`, L44–51) plus
  `/Users/danielb/meals/src/components/FilterBar.css` (`.larder-filterbar`, L1–18) make it
  `position: sticky; z-index: 20; max-height: calc(100dvh - …); overflow-y: auto`. Result: a ~417px
  tall bar that covers ~half the viewport and intercepts taps on cards beneath it.
- **Gap:** Just Eat/Uber Eats use a **slim** (~52–60px) horizontally flickable chip row plus a
  "Filters" button that opens a sheet/panel on demand. The default state shows food, not a control
  panel.
- **Fix (presentation only — keep the `value`/`onChange`/`facets` contract):**
  - Slim sticky bar ~52–60px: a single horizontally **flickable** row of the key chips (momentum
    scroll, `scroll-snap-type: x proximity`, hidden scrollbar, `flex-wrap: nowrap`,
    `-webkit-overflow-scrolling: touch`).
  - A **"Filters"** button (with active-count badge) opening a **collapsible panel/bottom sheet**,
    closed by default, containing the full facet set, the sort control, and "Clear all".
  - Keep `value = { cuisine, course, diet, freeFrom, maxTime, sort }` and call `onChange(nextValue)`
    exactly as today; only the layout changes.
  - Ensure the bar never exceeds its slim height and never overlays cards: it should push content, not
    float over it (or be a true sticky strip with cards starting below it).

### 2.2 Filter changes are silently dropped, with no user feedback (P1)
- **Current:** `queryRecipes` returns `appliedFallback` (dropped filter keys) when a filter combination
  has no composite index (`/Users/danielb/meals/src/lib/queryRecipes.js` L139–149, L182). Browse
  **ignores `appliedFallback` entirely** (`/Users/danielb/meals/src/screens/Browse.jsx` reads only
  `res.recipes`/`res.nextCursor`). So selecting, e.g., Cuisine + Diet + Free-from silently returns
  results filtered by only ONE of them — the user sees "Italian" results that aren't actually vegan,
  with no explanation.
- **Gap:** A delivery app's filters are trustworthy; if a combination isn't supported it says so or
  narrows client-side.
- **Fix:** Either (a) finish the narrowing client-side on the dropped keys before display, or (b) show
  an honest inline note ("Showing Italian; we couldn't combine Vegan + Gluten-free here"). Prefer (a):
  over-fetch the single-index page, then filter in memory on `dietLabels`/`healthLabels`/`cuisine`.

### 2.3 `maxTime` + filter combinations drop everything but one filter (P1)
- **Current:** Any time-sorted/time-bounded query keeps at most ONE of course|cuisine and drops the
  rest (`queryRecipes.js` L84–104). "Under 30 min" + "Vegetarian" + "Italian" silently becomes "Under
  30 min, Italian only" (diet dropped).
- **Fix:** Same as §2.2 — narrow client-side and surface what was applied. Long-term, add the missing
  composite indexes for the highest-value combinations (see §11.2).

### 2.4 Sort control is buried and `sort` triggers a full grid (P2)
- **Current:** Sort lives inside the big panel header. Any non-default sort flips Browse from the
  curated-rails view to the flat grid (`isFiltering` treats `sort !== 'popularity'` as filtering,
  `Browse.jsx` L53–63).
- **Gap:** Delivery apps keep sort as a small, always-reachable control and don't blow away the curated
  shelves just because you sorted.
- **Fix:** Put sort in the slim bar (or the Filters sheet) and decouple "sorting" from "leaving the
  rails" — or keep rails and re-sort within them.

---

## 3. Navigation & clickability

### 3.1 No catch-all / 404 route (P1)
- **Current:** `/Users/danielb/meals/src/App.jsx` (L67–74) defines exactly five routes and **no `*`
  fallback**. Any unknown URL (typo, stale link, deep link to a removed page) renders an empty `<main>`
  — a blank screen, exactly what the brief forbids.
- **Fix:** Add `<Route path="*" element={<NotFound/>} />` rendering an `EmptyState` ("This page has
  moved on — back to browse"). Firebase hosting already rewrites `**` → `/index.html`
  (`/Users/danielb/meals/firebase.json`), so the SPA gets the request; the router must handle it.

### 3.2 Filter bar overlay intercepts taps (P0) — see §2.1.

### 3.3 "Back" is a hardcoded link to `/`, not real history (P2)
- **Current:** Meal screen's back link is `<Link to="/">` ("Back to browse",
  `/Users/danielb/meals/src/screens/Meal.jsx` L151–155). Arriving from `/basket` or a rail and pressing
  it always dumps you on the home grid, losing scroll position and filter state.
- **Gap:** Delivery apps return you exactly where you were (preserved scroll + filters).
- **Fix:** Use `navigate(-1)` when there's history, fall back to `/`. Preserve Browse scroll/filter
  state across navigation (see §3.4).

### 3.4 Browse loses all state on return (P2)
- **Current:** Filter state lives in `Browse` local `useState` (`Browse.jsx` L144) and resets on
  unmount. Navigating into a meal and back re-runs facets + query from scratch and scrolls to top.
- **Gap:** Just Eat preserves your filtered/scrolled position when you back out of a restaurant.
- **Fix:** Persist filter state to the URL query string (also makes filtered views shareable/SEO-able)
  and/or sessionStorage; restore scroll on back.

### 3.5 Header has no nav affordances beyond logo + basket (P3)
- **Current:** Header is wordmark + BasketButton only (`App.jsx` L28–46). No search, no visible "all
  categories" entry.
- **Gap:** Delivery apps lead with search. Larder has no search at all (see §4.5).
- **Fix:** Add a search entry point in the header once search exists.

---

## 4. Browse / cards / scroll vs Just Eat / Uber Eats

### 4.1 Rails are good bones but images kill them (P0 via §1)
- **Current:** `/Users/danielb/meals/src/screens/Browse.jsx` has four curated rails (Quick dinners,
  Veggie, British classics, Under 30 min) with horizontal scroll-snap tracks (`Browse.css` L80–98) and
  skeletons — structurally close to a delivery app. But every card image is blank (§1.1), so the
  "image-led" promise collapses into title-only cards.
- **Fix:** §1 fixes the images; then the rails genuinely feel like Deliveroo shelves.

### 4.2 Each rail fires its own query on mount; no parallel budget control (P2)
- **Current:** Each `Rail` runs an independent `queryRecipes` in its own `useEffect`
  (`Browse.jsx` L82–97). Four rails = four serial-ish Firestore round trips on first paint, plus the
  facets read, plus the grid query when filtering.
- **Gap:** Delivery home screens batch/stream their shelves and feel instant.
- **Fix:** Consider a single batched fetch or a server-precomputed "home" doc (one read) for the
  default shelves; keep per-rail queries only for personalised/dynamic shelves.

### 4.3 Cards: tap target & overlay add-button ergonomics (P2)
- **Current:** The Add button is absolutely positioned top-right over the image
  (`/Users/danielb/meals/src/components/MealCard.css` L99–145) with padding `var(--sp-2) var(--sp-3)`
  (~8–12px) — likely **under the 44px minimum** tap target. The whole card is a `<Link>` with the Add
  button overlaid; on a dense rail this is fiddly on thumb.
- **Gap:** Delivery cards have large, unambiguous add/tap zones.
- **Fix:** Ensure the Add control is ≥44×44px (min-height/min-width), increase hit area, and make sure
  it never overlaps the image's most appetising region. Verify card link vs button don't fight for the
  same pixels.

### 4.4 No hero imagery / no visual anchor on the home screen (P2)
- **Current:** The hero is **text only** (`Browse.jsx` L302–312): eyebrow + headline + lede, no image.
- **Gap:** Just Eat/Uber Eats open with imagery and category tiles, not a paragraph.
- **Fix:** Add an image-led hero (a flagship dish photo or a category tile strip) once `RecipeImage`
  exists. Keep the value-prop copy but anchor it visually.

### 4.5 No search (P1)
- **Current:** There is **no text search** anywhere — only facet chips. You cannot type "chicken curry".
- **Gap:** Search is the primary entry on every delivery app.
- **Fix:** Add a search box. On the Spark/Firestore free tier, exact full-text is hard; options:
  (a) client-side filter over a cached page, (b) a `searchTokens` array field + `array-contains`
  prefix tokens generated at ingestion, or (c) a lightweight prefix index. Document the chosen approach.

### 4.6 Category tiles missing (P3)
- **Current:** Categories only appear as filter chips. No browsable "by cuisine/course" tiles.
- **Fix:** Add a tappable category strip (image tiles) that sets filters — classic delivery-app pattern.

---

## 5. Meal screen

### 5.1 Hero image relies on lazy `<img>` (P0 via §1) and lacks priority (P1)
- **Current:** `/Users/danielb/meals/src/screens/Meal.jsx` L159–168 — `loading="lazy"` on the **LCP
  hero**. Lazy-loading the largest, most important image is exactly wrong, and per the diagnosis it
  doesn't load at all.
- **Fix:** Route through `<RecipeImage priority ratio="16/9" />` so the hero eager-loads with
  `fetchpriority="high"`.

### 5.2 Ingredient lines have no photos (P1 for the brief) — see §8.
### 5.3 No nutrition panel detail, no servings re-scale on the meal page (P3)
- **Current:** Only a single badge row (time/serves/kcal). `nutritionPerServing` carries
  protein/fat/carbs but they're never shown; you can't preview the recipe scaled to your household.
- **Fix:** Add an optional nutrition breakdown and a "scale to N servings" preview on the meal page.

### 5.4 Method link-out / external recipes are fine, but no related/"add similar" (P3)
- **Fix:** Add an "Add to basket and find sides" or a related-meals rail at the foot of the meal page
  (delivery-app upsell pattern). Optional.

---

## 6. Basket screen

### 6.1 Thumbs blank (P0 via §1); rows are list-y, not image-led (P2)
- **Current:** `/Users/danielb/meals/src/screens/Basket.jsx` L172–184 — lazy `<img>` thumbs (blank).
  Rows are functional but plain.
- **Fix:** `RecipeImage` for thumbs; tighten the row to a delivery-app "your order" style.

### 6.2 Sequential per-recipe fetches (P2)
- **Current:** `Promise.all(recipeIds.map(getRecipe))` (L44–50) is parallel — good — but each is a
  single-doc read; the same recipes are re-fetched again on `/list` (`ShoppingList.jsx` L102–108). The
  basket already has the docs but doesn't pass them on.
- **Gap:** Re-reading the same docs across two screens doubles Firestore reads (cost + latency on free
  tier).
- **Fix:** Cache fetched recipe docs (context or a tiny in-memory map keyed by id) and reuse on
  `/list`. The basket already computes the list once for the preview count (L116–136) — share it.

### 6.3 No "remove" undo / no clear-all (P3)
- **Current:** Remove is immediate, no undo; there's `clear()` in the basket API
  (`/Users/danielb/meals/src/state/basket.js` L112) but **no UI** exposes it.
- **Fix:** Add "Clear basket" and an undo toast on remove.

### 6.4 Preview count can read 0 during load and look broken (P2)
- **Current:** `itemCount` falls back to 0 on any builder throw (`Basket.jsx` L133) and the preview
  shows `…` only while `previewLoading && itemCount === 0` (L241). A partially-loaded ingredient map
  can briefly show a too-low count.
- **Fix:** Gate the count on ingredient-load completion; show a skeleton number until stable.

---

## 7. ShoppingList screen & the "register shift"

### 7.1 The signature collapse is good — keep it (strength)
- **Current:** The meals-collapse-into-receipt animation (`ShoppingList.jsx` L170–177, classes in
  `/Users/danielb/meals/src/styles/global.css` L498–578) with `prefers-reduced-motion` → instant
  cross-fade is a genuine differentiator. Preserve it through the overhaul.

### 7.2 Re-fetches everything from scratch (P2) — see §6.2.

### 7.3 Meal-strip thumbs blank (P0 via §1).

### 7.4 Receipt has no per-item check persistence (P2)
- **Current:** `ReceiptItem` check state is local/ephemeral
  (`/Users/danielb/meals/src/components/ReceiptList.jsx` L36–53); ticking items off is lost on reload
  or navigation. `ShoppingList` passes no `checkedIds`/`onToggleItem`.
- **Gap:** A real shopping list remembers what you've already put in the trolley.
- **Fix:** Persist checked items (localStorage keyed by basket signature) and wire
  `checkedIds`/`onToggleItem` from the screen.

### 7.5 Export is solid; "Order from a supermarket" is the missing delivery-app move (P3)
- **Current:** Print / Copy / Share (Web Share) all present and well-built (L197–234).
- **Fix (future):** Deep-link to a supermarket basket or export a standard format — the natural
  monetisation/utility step. Out of scope for launch but note it.

---

## 8. The shopping-list aisle grouping & ingredient photos

### 8.1 Aisle grouping is a real strength — keep & strengthen (strength)
- **Current:** `SHOP_WALK` ordering (`/Users/danielb/meals/src/lib/shopWalk.js`) drives a defensible
  re-sort in `ReceiptList` (L159–161) and appendix sections (Store-cupboard / Optional / Check
  yourself). This is better than most delivery apps' flat lists. Keep it.
- **Strengthen:** Show an aisle item count (already supported via `ReceiptAisleHeader count`), and
  consider collapsible aisles for long lists.

### 8.2 No ingredient thumbnails anywhere (P1 — explicit brief requirement)
- **Current:** Ingredient docs have **no `imageUrl`** (nothing under
  `/Users/danielb/meals/ingestion/data/ingredients/` sets it; the contract says they *gain* it). The
  receipt rows (`ReceiptList.jsx`) and meal ingredient lines (`IngredientLine.jsx`) are text-only.
- **Gap:** The brief explicitly calls for small ingredient photos from
  `https://www.themealdb.com/images/ingredients/{Name}.png`; a delivery-grade list reads at a glance
  with little product images.
- **Fix:**
  - **Ingestion:** add `imageUrl` to each ingredient doc, derived from its canonical/`themealdb` name
    (`https://www.themealdb.com/images/ingredients/{Name}.png`, or `.../{Name}-Small.png` for the
    small variant). Backfill existing docs.
  - **UI:** render a small thumbnail (through `RecipeImage`) in `ReceiptItem` and optionally
    `IngredientLine`. Guard for missing/404 images via the `RecipeImage` error placeholder.
  - These images are free and reliable per the diagnosis — no excuse not to.

### 8.3 `displayQuantity` humanisation is strong (strength)
- The format/rounding/min-purchase/pack logic (per CONTRACTS §2) is a differentiator; keep it visible
  (right-aligned mono qty with dotted leader is already in `ReceiptList`).

---

## 9. Mobile responsiveness

### 9.1 Filter bar is worst on mobile (P0) — see §2.1. The brief notes it's even taller on mobile.

### 9.2 Grid min column may be too wide for small phones (P2)
- **Current:** `.browse-grid { grid-template-columns: repeat(auto-fill, minmax(13.5rem, 1fr)); }`
  (`/Users/danielb/meals/src/screens/Browse.css` L114–118). 13.5rem ≈ 216px min; on a 360px viewport
  with `--sp-4` gutters this yields a slightly cramped single column or awkward wrap.
- **Fix:** Drop the mobile min to ~9–10rem so two columns fit comfortably on small phones (delivery
  apps show 1–2 image cards per row on mobile), or define explicit breakpoints.

### 9.3 Header offers no mobile-condensed treatment / safe-area insets (P3)
- **Current:** Sticky header `--header-h: 64px`, no `env(safe-area-inset-*)` handling for notched
  devices; backdrop blur is fine.
- **Fix:** Respect safe-area insets on the sticky header and any bottom sheet (filter sheet).

### 9.4 No bottom nav / thumb-reach consideration (P3)
- **Gap:** Delivery apps keep primary actions in thumb reach (bottom). Larder's basket CTA is top-right.
- **Fix (future):** Consider a bottom basket bar on mobile when the basket is non-empty
  ("View basket · N meals").

---

## 10. Accessibility

### 10.1 Generally strong base (strength)
- `:focus-visible` rings, `prefers-reduced-motion` handling, `aria-pressed` on toggles, `role="status"`
  polite toast (`/Users/danielb/meals/src/components/Toast.jsx`), spinbutton stepper
  (`HouseholdStepper.jsx`), `sr-only` loading text. This is above-average. Preserve it.

### 10.2 Decorative vs informative image alt (P2)
- **Current:** `MealCard` uses `alt=""` (decorative) even though the image **is** the meal
  (`MealCard.jsx` L62). Meal hero uses `alt={title}`. Inconsistent.
- **Fix:** Standardise via `RecipeImage`'s `alt` prop: meaningful alt on cards/hero (the dish name),
  empty alt only for truly decorative imagery and ingredient thumbs where the name is adjacent text.

### 10.3 Skeletons/spinners need consistent live-region semantics (P3)
- **Current:** `Browse` skeletons are `aria-hidden` with no busy state on the region; `Meal`/`List`
  skeletons do set `aria-busy`/`aria-live`. Inconsistent.
- **Fix:** Standardise loading announcements; mark the grid region `aria-busy` while loading.

### 10.4 Filter sheet must be accessible (forward-looking)
- When the filter becomes a sheet (§2.1), it must trap focus, close on Esc, restore focus to the
  trigger, and be labelled — bake this into the redesign.

### 10.5 Colour-contrast of `--larder-slate` captions (P3)
- Verify `--larder-slate` (#6b7066) on `--larder-paper`/`--larder-mist` meets WCAG AA for the small
  meta tier (`--fs-meta` 13px). If borderline, note it (tokens are off-limits to edit — flag for the
  token owner).

---

## 11. Perceived performance, CLS, bundle, indexes

### 11.1 Bundle size (P2)
- **Current (`/Users/danielb/meals/dist/assets/`):** `firebase-*.js` **420KB**, `index-*.js` **210KB**,
  CSS **42KB** (uncompressed). The Firebase chunk is already split out (good,
  `/Users/danielb/meals/vite.config.js` L11–13), but 630KB of JS before gzip is heavy for a
  delivery-app feel on mobile.
- **Fix:** Import Firestore via modular tree-shaken paths only (already mostly done); audit for unused
  Firebase modules; consider lazy-loading screens (`React.lazy` for Meal/Basket/List/Sources) so the
  Browse-first paint ships less JS. Confirm gzip/brotli is served (Firebase hosting does gzip by
  default; verify brotli).

### 11.2 Missing composite indexes force silent fallbacks (P1) — ties to §2.2/§2.3
- **Current:** `/Users/danielb/meals/firestore.indexes.json` covers single-filter + `course+diet`
  combos only. The most valuable real-world combos (cuisine+diet, diet+time, freeFrom+anything,
  course+freeFrom) have **no index**, so they silently drop filters.
- **Fix:** Add composite indexes for the top combinations users will actually pick; pair with the
  client-side narrowing in §2.2 for the long tail.

### 11.3 CLS risk from unsized images (P1)
- **Current:** Wrappers set `aspect-ratio` (`MealCard.css` L34, `Meal.css` L31) so card/hero slots are
  reserved — good. But ingredient thumbs (once added) and any non-ratio image must also reserve space.
- **Fix:** `RecipeImage` enforces the ratio box universally → zero CLS by construction.

### 11.4 Skeletons exist and are tasteful (strength)
- Browse card skeletons + shimmer, Meal/List skeletons are all present. Keep; extend the same
  treatment to ingredient thumbs and the new filter bar.

### 11.5 Fonts: three families, render-blocking stylesheet (P2)
- **Current:** `index.html` loads Archivo + Hanken Grotesk + Spline Sans Mono with many weights via a
  render-blocking Google Fonts `<link>`. Good: `display=swap` + preconnect. Bad: a lot of font weight
  variants.
- **Fix:** Trim to the weights actually used; consider self-hosting the woff2 (already covered by the
  immutable cache header in `firebase.json`) to drop a third-party round trip and FOUT.

---

## 12. Error / empty / edge states

### 12.1 Empty/error states are well-covered (strength)
- `EmptyState` is used for empty basket, no results, missing meal, build failure; rails hide when empty
  rather than showing a bare shelf (`Browse.jsx` L99–100); `ErrorBoundary` resets on route change.
  This is genuinely good.

### 12.2 Blank screen on unknown route (P1) — see §3.1.

### 12.3 Rail/grid errors are quietly degraded but inconsistent (P3)
- **Current:** A rail error shows inline text inside the track (`Browse.jsx` L131–135); the grid shows
  a full `EmptyState`. Fine, but the rail error sits awkwardly in a horizontal scroller.
- **Fix:** Standardise a small "couldn't load — retry" affordance with an actual retry action (current
  copy says "try refreshing" but offers no button).

### 12.4 Offline / no-network handling (P3)
- **Current:** No offline messaging; Firestore reads just fail into error states.
- **Fix:** Detect offline and show a friendly banner; the basket already survives offline (localStorage).

---

## 13. SEO / meta / social

### 13.1 No Open Graph / Twitter / canonical / structured data (P1)
- **Current:** `/Users/danielb/meals/index.html` and the built `/Users/danielb/meals/dist/index.html`
  have only `<title>` + `<meta name="description">`. **No** `og:*`, `twitter:*`, `canonical`, or
  JSON-LD (confirmed: grep found none in `dist/index.html`).
- **Gap:** A market-ready food product needs rich link previews (image + title) when shared, and
  `Recipe` structured data for Google rich results.
- **Fix:** Add static OG/Twitter tags + a default share image to `index.html`. For per-meal pages,
  inject `og:title`/`og:image`/`Recipe` JSON-LD — this requires either prerendering or a small SSR/edge
  function, since the SPA renders client-side and crawlers may not run the meal query. Note the
  architectural choice (prerender vs SSR) as a launch decision.

### 13.2 Client-rendered content is invisible to non-JS crawlers (P2)
- **Current:** Everything is CSR; the rewrite serves an empty `#root` to crawlers.
- **Fix:** Prerender the key routes (home + popular meals) at build, or add SSR. At minimum, ensure the
  home page has meaningful static content in `index.html`.

### 13.3 No `robots.txt`, no `sitemap.xml`, no web app manifest (P2)
- **Current:** `/Users/danielb/meals/public/` contains only `favicon.svg`. No `robots.txt`,
  `sitemap.xml`, or PWA `manifest.webmanifest` (confirmed by directory listing).
- **Fix:** Add `robots.txt` + a generated `sitemap.xml` (meals are enumerable from Firestore at build),
  and a `manifest.webmanifest` (name, icons, theme colour `#FBFAF6`, `display: standalone`) so Larder
  is installable — table stakes for an app that wants to feel like Just Eat.

### 13.4 `theme-color` present (strength) — keep; add dark-scheme variant if a dark theme ships.

---

## 14. Production-readiness

### 14.1 No analytics / error reporting (P2)
- **Current:** Errors only `console.error` in `ErrorBoundary`. No client telemetry, no funnel
  instrumentation (browse → meal → basket → list).
- **Fix:** Add privacy-respecting analytics + error reporting (e.g. a lightweight beacon). Critical for
  knowing whether the overhaul actually moved the needle.

### 14.2 No PWA / offline shell (P3)
- **Fix:** Add a service worker for the app shell + image caching (also turbo-charges perceived
  performance and repeat-visit image loads — directly addresses the "every image loads fast" goal).

### 14.3 Firestore reads are uncapped per session (P2 cost)
- **Current:** Four rail queries + facets on every home load, single-doc reads duplicated across
  Basket and List (§6.2), infinite scroll pulling 24 at a time. On the Spark free tier this can hit
  daily read quotas under modest traffic.
- **Fix:** Precompute a home/shelves doc (one read), cache recipe docs across screens, and cache facets
  (they change only at ingestion time).

### 14.4 Security rules / public read (verify)
- **Current:** `/Users/danielb/meals/firestore.rules` should be read-only public for `recipes`,
  `ingredients`, `facets`, `system` and deny writes (ingestion uses Admin SDK, bypassing rules). Verify
  no write path is open and that there are no PII collections exposed. (Rules file is small; confirm
  before launch.)

### 14.5 `dist/` is committed (P3 hygiene)
- **Current:** A built `dist/` is present in the working tree. Builds should be CI artefacts, not
  committed, to avoid drift between source and shipped bundle.
- **Fix:** Ensure `dist/` is gitignored and built in CI/hosting deploy.

---

## 15. Prioritised backlog (do in this order)

**P0 — ship-blockers (the app looks broken without these):**
1. Build `src/components/RecipeImage.jsx` to contract; route ALL images through it; do not trust
   native `loading="lazy"` (§1.1).
2. Rebuild `FilterBar` presentation: slim flickable chip row + "Filters" sheet, closed by default;
   stop it overlaying/blocking cards (§2.1). Keep the value/onChange/facets contract.
3. Eager-load the Meal hero with priority (§5.1) — part of the `RecipeImage` rollout.

**P1 — market-ready essentials:**
4. Ingredient `imageUrl` in ingestion + render small thumbnails in the receipt/ingredient lines (§8.2).
5. Catch-all 404 route — no blank screens (§3.1).
6. Honest filter behaviour: client-side narrowing + surface `appliedFallback`; add the high-value
   composite indexes (§2.2, §2.3, §11.2).
7. Text search entry point (§4.5).
8. SEO/social: OG/Twitter/canonical + per-meal structured data via prerender/SSR; robots, sitemap,
   manifest (§13).
9. Sized images (`/preview` variant + srcset) and CLS-proof image boxes (§1.2, §1.3, §11.3).

**P2 — polish & cost:**
10. Cache recipe docs across Basket/List; precompute home shelves; cache facets (§6.2, §14.3).
11. Bottom-sheet a11y, mobile grid columns, tap-target sizing ≥44px (§9.2, §4.3).
12. Persist receipt check state (§7.4); image-led basket rows (§6.1).
13. Bundle: lazy-load screens, trim fonts (§11.1, §11.5).
14. Analytics + error reporting (§14.1).

**P3 — differentiators & nice-to-haves:**
15. Image-led hero + category tiles (§4.4, §4.6); related meals (§5.4); bottom basket bar (§9.4);
    PWA/offline shell (§14.2); "order from supermarket" export (§7.5).

---

## 16. What's already good (do not regress)

- The **aisle-grouped receipt** (`SHOP_WALK` + appendix sections) and humanised quantities — a real
  differentiator.
- The **register-shift collapse** animation with reduced-motion fallback.
- **Empty/error/skeleton states** and the route-resetting `ErrorBoundary`.
- **Accessibility base**: focus-visible, reduced-motion, ARIA toggles, spinbutton stepper, polite toast.
- **Design-token discipline** (no hex literals in components) and the Firebase chunk split.
- The **curated + multi-source ingestion** pipeline and broad diet coverage.

The product's logic and information architecture are strong. The launch gap is almost entirely in the
**presentation layer**: images that don't load and a filter that blocks the screen. Fix those two and
Larder jumps from "looks broken" to "feels like a delivery app."
