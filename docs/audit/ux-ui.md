# Larder — UX & UI Audit

**Auditor dimension:** UX & UI (Browse → Meal → Basket → Shopping-list golden path; delivery-app feel;
empty/loading/error states; mobile ergonomics & tap targets; information density; microcopy/voice; the
receipt "signature moment"; friction; visual polish).

**Date:** 2026-06-19 · **Live build inspected:** `index-DYy-aP0H.js` + `index-zxSKyz0z.css` on
https://larder-dbayft.web.app · **Data:** `facets/global.totalRecipes = 1955` (Firestore REST, confirmed live).

**Method:** read all 5 screens + 11 components + their CSS in `/Users/danielb/meals/src`; curled the live
HTML, JS and CSS bundles; cross-checked rendered class names in the deployed bundle against the CSS that
targets them; queried the live Firestore facets. Findings are evidence-based with `file:line` or a measured
live observation. I did not run a headless browser (the client-rendered shell returns an empty `#root`, so
DOM assertions are derived from the bundle + source, which is conclusive for the issues raised).

**Overall:** The build quality is genuinely high for a free-tier SPA. The image primitive
(`RecipeImage.jsx`) is robust, tap targets are consistently ≥44px, `prefers-reduced-motion` and `@media print`
are handled across the board, microcopy is warm and British, and empty/loading/error states exist on every
screen. The problems below are concentrated in (a) one shipped layout regression in the Browse filter sheet,
(b) state that is lost on navigation, and (c) the receipt "signature moment" not paying off in-store.

---

## Highest-leverage move

**Persist and restore Browse state + receipt check-state across navigation (Findings 1 & 2 combined).**
Right now the two moments a user does most often — *tap a meal then hit Back*, and *tick items off while
walking the shop* — both silently throw away their work. Both are component-local `useState` with zero
persistence. Fixing them (URL/sessionStorage for Browse filters+scroll; localStorage for ticked items)
converts Larder from "a nice demo" into "a thing you actually shop with", and neither needs a single
Firestore read or any paid service.

---

## Findings (ranked)

### 1. Browse loses all filter/search/scroll state on back-navigation — P1
- **Severity:** P1 major · **Impact:** 5 · **Effort:** M
- **Evidence:** In `src/screens/Browse.jsx`, `filter` (L212), `search` (L214), `gridRecipes`/`cursor`/scroll
  position are all local `useState`. There is **no** URL sync, scroll restoration, or sessionStorage anywhere
  in the app — confirmed by grep: `searchParams|URLSearchParams|scrollRestoration|sessionStorage|ScrollRestoration`
  returns **zero matches** across `src/`. Because `Meal` is a separate route, the browser Back button remounts
  `Browse` from scratch: filters reset to `DEFAULT_FILTER` (L66), search clears, the infinitely-scrolled grid
  collapses back to page 1, and the page jumps to the top.
- **Why it matters:** This is *the* core delivery-app loop — browse a filtered grid, open a dish, decide,
  come back, open the next. Every competitor (Deliveroo/Just Eat/Uber Eats) restores the exact scroll
  position and filters. Here the user re-filters and re-scrolls every single time. It also means a filtered
  view (`Veggie · Under 30 min`) is **not shareable or bookmarkable** — there is no URL state.
- **Recommendation:** Move `filter`/`search` into the URL via `useSearchParams` (react-router v6 already in
  use) so views are shareable and Back-restorable for free. Add scroll/grid restoration with
  `sessionStorage` keyed by the search string (store scrollY + loaded page count on unmount, rehydrate on
  mount). All client-side; **no Firestore cost** beyond re-fetching the visible page (and even that can be
  cached in sessionStorage). This is the single highest-value fix in this dimension.

### 2. Shopping-list tick-off state is never persisted — you lose your place mid-shop — P1
- **Severity:** P1 major · **Impact:** 5 · **Effort:** S
- **Evidence:** `ShoppingList.jsx` renders `<ReceiptList list={list} imageFor={imageFor} />` (L366) and
  passes **no `checkedIds` and no `onToggleItem`**. In `ReceiptList.jsx` the controlled path requires
  `checkedIds instanceof Set` (L248); with none supplied, each `ReceiptItem` falls back to its internal
  `localChecked` state (L122–124). That state lives only in the component instance: any reload, tab switch
  that unmounts, or navigation to `/basket` and back **resets every ticked box to unchecked**.
- **Why it matters:** The whole product promise is "take this list to the shop". People shop over 20–40
  minutes, lock their phone, get interrupted, switch apps — and return to a fully-unticked list with no idea
  where they were. This silently defeats the primary use case.
- **Recommendation:** Lift check state into `ShoppingList` as a `Set` of `keyFor(item)` keys (the helper
  already exists at `ReceiptList.jsx:259`), wire `checkedIds`/`onToggleItem` (the props are already
  contracted and implemented), and persist to `localStorage` keyed by the sorted recipe-id set so the same
  basket reopens with progress intact. Pure client-side, **zero Firestore cost**, ~25 lines. Consider a
  "X of N ticked" line in `ReceiptFooter` and a subtle "tap to reset" once complete.

### 3. The Browse "Filters" sheet renders a duplicated, nested filter UI (shipped CSS/JS mismatch) — P1
- **Severity:** P1 major · **Impact:** 4 · **Effort:** S
- **Evidence:** `Browse.jsx` already provides its own slim chip row (`browse-chiprow`, L597) and its own
  "Filters" button (`browse-bar__filters`, L565) that opens the `browse-sheet`. Inside that sheet it then
  embeds the **full `<FilterBar>`** (L642). But `FilterBar.jsx` is itself a self-contained delivery-app
  filter widget: it renders its *own* slim bar with chips (`larder-filterbar__bar` / `__rail`, L191–226) and
  its *own* "Filters" trigger button (`larder-filterbar__trigger`, L229) that opens *another* absolute-overlay
  panel. The Browse CSS that was meant to suppress these duplicates targets **class names that no longer
  exist**: `.browse-filter-sheet .larder-filterbar__head`, `__title`, `__foot` (`Browse.css:335–345`). I
  confirmed against the **deployed bundle**: `larder-filterbar__head` → **0 matches** (stale), while
  `larder-filterbar__bar`, `larder-filterbar__rail`, `larder-filterbar__trigger`, `larder-filterbar__panel-head`
  → **present**. So the suppression is dead code and the inner bar + inner Filters button render live.
- **Why it matters:** Opening Browse's "Filters" reveals a *second* row of filter chips and a *second*
  "Filters" button (which opens a third, overlay panel). It is confusing, looks broken, and undermines the
  "clean delivery-app" positioning precisely at the moment the user is trying to narrow the catalogue.
- **Recommendation:** Pick one. Either (a) stop embedding the whole `<FilterBar>` and render only its
  `<FacetGroup>` panel-body inside the Browse sheet, or (b) drop Browse's bespoke bar/sheet and let
  `<FilterBar>` own the whole control (it already does the slim-bar + panel pattern well). At minimum,
  immediately fix the stale selectors in `Browse.css` to the live class names
  (`larder-filterbar__bar`, `__panel-head`, `__panel-title`, `__panel-foot`) so the inner chrome is hidden.
  Low effort, high polish payoff. (Flag: this is the kind of regression an automated test or a screenshot
  diff would have caught — see KNOWN ISSUES "no visual tests".)

### 4. The "signature moment" collapse animation doesn't actually fire on the real path — P2
- **Severity:** P2 worthwhile · **Impact:** 3 · **Effort:** M
- **Evidence:** Spec/CONTRACTS §5 promise: "on Make my shopping list, meal rows collapse into receipt
  lines." The mechanism: `Basket.handleMakeList` navigates with `state:{fromBasket:true}` (`Basket.jsx:140`);
  `ShoppingList` reads it (`L100`) and starts `collapsed=false`, then flips to `true` on a double-rAF (`L208–215`).
  But two things blunt it: (i) the screen shows `<ListSkeleton/>` while data loads (`L274`), so the collapse
  toggles **before the user can perceive the un-collapsed meal strip** in the common case where data isn't
  cached — the meals-to-receipt fold happens against an already-painted skeleton-then-list, not the meal
  strip; (ii) the polished keyframes `larder-collapse-out/in` defined in `global.css:505–578` (the staggered,
  clip-path "register shift") are **not used by the ShoppingList collapse at all** — that screen uses its own
  `.list-collapse` opacity/transform transition (`ShoppingList.css:199+`). So the marquee animation that was
  built is effectively dead, and the moment that does play is a quiet cross-fade most users will miss.
- **Why it matters:** This is the product's emotional payoff — the "wow, it turned my meals into a shop
  list" beat. It is under-delivered relative to the effort already invested.
- **Recommendation:** Either retire the unused `larder-collapse-*` keyframes (dead CSS) or wire the
  ShoppingList collapse to them. Ensure the meal strip is painted for at least one frame *after* data is
  ready before collapsing (gate the rAF on `status==='ready'`, which it does, but also delay the skeleton→
  content swap so the strip is visibly present). Keep the reduced-motion instant cross-fade (already correct,
  `ShoppingList.css:200`).

### 5. No "Clear basket" / empty-all affordance — P2
- **Severity:** P2 worthwhile · **Impact:** 3 · **Effort:** S
- **Evidence:** `basket.js` exports a working `clear()` (L112), but grep shows it is **never called** in
  `Basket.jsx` (no `clear` usage). The only removal is per-row "Remove" (`Basket.jsx:208`). To empty a 6-meal
  basket the user must tap Remove six times.
- **Why it matters:** Starting a fresh week's plan is a common action; one-by-one removal is tedious and the
  capability already exists in state.
- **Recommendation:** Add a quiet "Clear basket" text button in the Basket header (`basket-head`) with a
  lightweight confirm (or an undo Toast — the `Toast` component already exists). Trivial; the function is
  already there.

### 6. Search is shallow: title-only, within the current filter page, and not whole-catalogue — P2
- **Severity:** P2 worthwhile · **Impact:** 4 · **Effort:** M (within free-tier constraints)
- **Evidence:** `Browse.matchesSearch` (L293–303) matches only `title` and `cuisine`, **client-side**, over
  whatever the filter query already returned — title is explicitly *not indexed* (comment L290). With 1,955
  recipes and a `pageSize` of 48 while searching (`PAGE_SIZE*2`, L322), a search for e.g. "chickpea" only
  finds matches inside the loaded slice; the auto-load loop (L403–406) pulls more pages until 8 results
  exist, but a genuinely whole-catalogue search is impossible — you can search the *page*, not the *larder*.
  Ironically the empty-state copy says "there's a lot in the larder" (L703) while search can't see most of it.
- **Why it matters:** Search is the fastest path to intent in a delivery app. A user typing a known dish
  ("katsu", "dal") may get "No meals match" simply because it's beyond the loaded window.
- **Recommendation:** Within Spark/free constraints, build a tiny search index: at ingest time emit a
  `searchIndex` document (or a static JSON shipped with the build) of `{id, title, cuisine, tokens}` for all
  recipes (1,955 rows ≈ a few hundred KB gzipped). Load it once on Browse mount and resolve search entirely
  client-side, then `getRecipe` the matched ids. This is a single read (or zero, if shipped as a static
  asset) and gives true catalogue search. Alternatively, store a lowercased `titleTokens` array field and use
  Firestore `array-contains` (needs a composite index, still free). Document the trade-off if deferred.

### 7. The hero block costs a screenful on mobile and repeats on every visit — P2
- **Severity:** P2 worthwhile · **Impact:** 3 · **Effort:** S
- **Evidence:** `Browse.jsx:500–510` renders an eyebrow + H1 + lede on **every** load, above the sticky bar
  and rails. On a phone this pushes the first row of actual meals below the fold. Returning users (the
  majority, given a localStorage basket) re-read the same pitch each time.
- **Why it matters:** Delivery apps put product (restaurants/dishes) at the top; marketing copy is for
  first-run only. Information density on first scroll is low.
- **Recommendation:** Keep the full hero for first-visit (gate on a `localStorage` "seen" flag or on
  `basket.count === 0`), and collapse it to a single slim line (or nothing) for returning users so the rails
  start higher. Pure client-side.

### 8. Meal screen "Back to browse" always goes to `/` (home), discarding context — P2
- **Severity:** P2 worthwhile · **Impact:** 3 · **Effort:** S
- **Evidence:** `Meal.jsx:191` hard-links Back to `/` (`<Link to="/">Back to browse`). It does not call
  `navigate(-1)`. Combined with Finding 1, arriving from a filtered grid and tapping "Back to browse" dumps
  you at the unfiltered home rails, not where you were. The empty/error states on Meal also send to `/`
  (L168, L179).
- **Why it matters:** Compounds the lost-context problem; the affordance literally says "back" but doesn't go
  back.
- **Recommendation:** Use `navigate(-1)` when there is history (`window.history.length > 1` /
  `location.key !== 'default'`), falling back to `/` for deep-links. Once Finding 1 lands (URL filter state),
  `navigate(-1)` restores the exact filtered grid.

### 9. Receipt has no per-item or quantity editing — quantities are take-it-or-leave-it — P3
- **Severity:** P3 nice-to-have · **Impact:** 3 · **Effort:** M
- **Evidence:** `ReceiptItem` (`ReceiptList.jsx:119`) renders a checkbox, name, qty and an expandable "needed
  for" — there is no way to mark "already have this" distinctly from "bought", nor to nudge a quantity.
  Household scaling is the only lever (`HouseholdStepper`), set back on the Basket screen. In practice people
  already own salt/pasta/oil; staples *are* split into a "Store-cupboard" appendix (good), but a normal item
  the user already owns can only be ticked as if bought.
- **Why it matters:** Real shopping lists get pruned ("got that already"). Minor, but it's the difference
  between a printout and a tool.
- **Recommendation:** v2: a long-press / overflow "I already have this" that strikes through without counting
  as bought, and a small qty stepper. Lower priority than 1–3.

### 10. Loading the list refetches everything on every visit; no in-session cache — P3
- **Severity:** P3 nice-to-have · **Impact:** 2 · **Effort:** M
- **Evidence:** `ShoppingList.jsx` and `Basket.jsx` each independently `getRecipe` every basket id (L125–131
  in both) and then `getIngredients` (L147 / L91). Navigating Basket → List → Basket re-reads the same docs.
  No shared cache layer exists. The skeleton (`ListSkeleton`) therefore shows on every entry even though the
  data is unchanged.
- **Why it matters:** UX: an avoidable skeleton flash on a path the user repeats. Also bears on the free
  Firestore read quota (~50K/day) — a 6-meal basket round-tripped a few times is dozens of reads each visit.
- **Recommendation:** Cache fetched recipe + ingredient docs in a module-level Map or React context for the
  session (and optionally persist the basketed recipe docs in `localStorage`, since the basket is already
  there). Removes the skeleton flash and trims reads. Pure client-side.

### 11. Search input lacks an enter-to-act / result-count feedback; relies on debounce alone — P3
- **Severity:** P3 nice-to-have · **Impact:** 2 · **Effort:** S
- **Evidence:** The search uses `useDeferredValue` (`Browse.jsx:215`) so it filters as you type — good — but
  there is no visible "N results for 'x'" count and the grid header is just `aria-label="Search results"`
  (L678) with no on-screen heading. When the auto-pull loop is fetching (L403), there's no indication that
  more results are still coming, so a momentarily-thin grid can read as "that's all".
- **Why it matters:** Users can't tell whether a sparse result is the true answer or mid-load.
- **Recommendation:** Show a small "Showing N meals for 'query'" line above the grid; while the search
  auto-pull is in flight show the existing skeleton row (it already does for `loadingMore`, just surface it
  during the thin-result top-up too).

### 12. `Toast` is a single global slot — rapid adds can stomp each other; no undo — P3
- **Severity:** P3 nice-to-have · **Impact:** 2 · **Effort:** S
- **Evidence:** `Toast.jsx` renders one message; `Browse.showToast` (L253) and `Meal.handleAdd` (L139) each
  drive a single boolean with a 2.2s timer. Adding several cards quickly just re-arms the same toast; there's
  no "Undo" on add/remove. Removing a meal from a card gives **no** confirmation at all (only adding does).
- **Why it matters:** Minor, but "Added — Undo" is a delivery-app staple and removes the fear of mis-taps,
  especially since the whole card is tappable and the add control is a 44px target inside it.
- **Recommendation:** Add an "Undo" action to the add toast (re-uses `remove`), and show a brief toast on
  removal too. Keep the single-slot model; just enrich the message.

### 13. Polish gaps: no favicon-confirmed brand mark in-app header beyond a glyph; attribution overlay legibility — P3
- **Severity:** P3 nice-to-have · **Impact:** 2 · **Effort:** S
- **Evidence:** The header wordmark is a CSS glyph "◖ Larder" (`App.jsx:37–40`) — fine, but there's no
  logotype/lockup. On the Meal hero, `imageAttribution` is overlaid bottom-right (`Meal.jsx:211`,
  `.meal-hero__attr`) on top of a photo; against a light dish photo this can be low-contrast. The fallback
  gradient block puts alt text over a market-stall gradient (`RecipeImage.jsx:156`) which is on-brand and
  legible — good — but the live attribution overlay should be checked for a scrim.
- **Why it matters:** Small credibility/polish items; attribution legibility is also a licence-compliance
  concern (TheMealDB/Edamam attribution is a stated first-class requirement).
- **Recommendation:** Ensure the attribution overlay has a gradient scrim behind it (verify
  `.meal-hero__attr` has a backing); consider a simple SVG logotype. Low effort.

---

## What is genuinely good (don't regress these)

- **Image reliability:** `RecipeImage.jsx` is excellent — aspect-ratio box (zero CLS), IntersectionObserver
  with a 1200ms safety timer for broken-observer environments (L116), deterministic on-brand gradient
  fallback (never a broken tile), and free WebP/resize via wsrv.nl (`optimize`, L29). The receipt thumbnail
  even *probes* the optimised URL before showing it so a 40px row degrades to a quiet dot, not a loud block
  (`ReceiptThumb`, L69–117). This is the strongest part of the UI.
- **Accessibility & tap targets:** ≥44px targets are applied consistently (MealCard add, FilterBar chips,
  receipt rows, Meal back-link — confirmed across the CSS). `aria-pressed`, `role="spinbutton"` with
  `aria-valuetext` on the stepper, `aria-live` polite regions, `sr-only` loading text, focus return on
  filter-panel close (`FilterBar.jsx:157`), Escape-to-close + outside-click. Solid.
- **Reduced motion & print:** `prefers-reduced-motion` kills animation globally (`global.css:581`) and the
  receipt + list have dedicated `@media print` rules that drop chrome, photos and the "why" buttons for a
  clean, ink-saving printout (`ReceiptList.css:289`, `ShoppingList.css:212`). This is the export "moment"
  done right.
- **Empty/loading/error states everywhere:** every screen has skeletons (no layout shift), a friendly
  `EmptyState`, and a distinct error branch — and a catch-all 404 route with on-brand copy (`App.jsx:60`).
- **Microcopy/voice:** warm, active, British throughout ("We'll write the shopping list", "That's
  everything.", "Tap again to remove it."). Buttons say what happens. Consistent with the brand.
- **Receipt as artefact:** mono quantities, dotted leaders, aisle headers with counts, a till-style footer,
  defensive re-sort by `SHOP_WALK` (`ReceiptList.jsx:244`), plain-text export that reads cleanly in any
  messaging app (`toPlainText`, `ShoppingList.jsx:48`), Web Share API when available. The core deliverable is
  well-realised.

---

## Constraint notes (Spark free tier)

None of the P1/P2 fixes require Blaze, Cloud Functions, or Storage:
- Findings 1, 2, 5, 7, 8, 10–13 are **pure client-side** (URL/session/local storage, React state, CSS).
- Finding 3 is a **CSS/JSX cleanup** — no infra.
- Finding 6 (whole-catalogue search) is the only one with a data-shape implication; the recommended path
  (a static search index shipped with the build, or an ingest-time `searchIndex` doc) stays within free
  quota — it's **0–1 Firestore reads**, not per-keystroke queries.
- Finding 10 additionally **reduces** Firestore reads, helping stay under the ~50K/day cap.
