# Larder — Feature Depth & Product Roadmap Audit

**Dimension:** Feature depth & product roadmap (one of a multi-dimension panel).
**Date:** 2026-06-19 · **Branch:** `main` · **Scope:** analysis only — no app/source code changed.
**Reviewed:** `src/screens/*`, `src/components/*`, `src/state/basket.js`, `src/lib/*`,
`src/firebase.js`, `ingestion/` (pipeline + sources + data), `docs/CATALOGUE_10K_DESIGN.md`,
`firestore.indexes.json`, live Firestore (rate-limited at audit time — see Finding F12).

---

## 0. Where the product actually is (evidence baseline)

What I verified is **built and live**, versus the spec's Step 2/3 vision:

| Capability | State | Evidence |
|---|---|---|
| Browse → basket → aisle-sorted list | **Done, strong** | `Browse.jsx`, `Basket.jsx`, `ShoppingList.jsx`, `buildShoppingList.js` |
| Pack-rounding + "spare" guidance | **Done** | `buildShoppingList.js` L234–316 (`computePack`, `buyLabel`, `spare`) |
| Minimum-purchase bump + humanise | **Done** | `buildShoppingList.js` L212–240; `format.js` |
| Aisle sort (SHOP_WALK) + appendices | **Done, differentiator** | `shopWalk.js`, `ReceiptList.jsx` |
| Diet/free-from filtering + facets | **Done** | `queryRecipes.js`; `firestore.indexes.json` has `dietLabels`/`healthLabels` CONTAINS indexes (L31–83); `facets/diets` written (`ingestion/lib/facets.js` L60–94) |
| Catalogue scale | **Live: 1,955 recipes** | `docs/audit/architecture-scale.md` L13 (`facets/global.totalRecipes = 1955`) |
| Text search | **Partial — title-only, client-side over the loaded page** | `Browse.jsx` L293–303 (`matchesSearch`), L379–406 |
| Open Food Facts pack enrichment | **Partial — barcode/brand/size cache, build-time only** | `ingestion/sources/openfoodfacts.js`; `ingestion/pipeline/ingredientsDoc.js` L194, L284 (`offBarcode` on `defaultPack`) |
| Household scaling | **Single global size (1–12)** | `basket.js` L29–31, `HouseholdStepper`; one factor for the whole basket |
| **Accounts / auth** | **Not built (deliberate v1 cut)** | `firebase.js` initializes **only** Firestore — no `firebase/auth` import; no sign-in UI |
| **Saved plans / lists / favourites** | **Not built** | no favourites store; basket is `localStorage` only (`basket.js`) |
| **Weekly planner (days/slots)** | **Not built** | basket is a flat `recipeIds[]`, no day/meal-slot model |
| **Personalisation / recommendations** | **Not built** | rails are 4 hard-coded static filters (`Browse.jsx` L31–64); no "for you", no related-meals |
| **Cook mode** | **Not built** | `Meal.jsx` renders a static `<ol>` of steps (L313–320); no step-by-step / wake-lock / timers |
| **Ratings / reviews** | **Not built** | no rating field rendered or written |
| **Leftovers / "use it up"** | **Not built** | pack "spare" is computed but never re-surfaced as a feature; no grep hit for leftover logic in `src/` |
| **Supermarket basket hand-off** | **Not built** | export is Print/Copy/Share only (`ShoppingList.jsx` L235–272); `offBarcode` is stored but never used in the UI |
| **Per-portion / per-meal servings** | **Not built** | one `householdSize` scales every recipe equally |

The **engine** (scale/dedupe/min-purchase/aisle-sort/pack-round) is genuinely deep and well-tested
(65 vitest cases per the brief). The **product surface around it is thin**: a user can build *one*
list, *once*, and the moment they close the tab the only thing that survives is the raw basket in
`localStorage`. Every "come back tomorrow" loop is missing. That is the central feature-depth gap.

---

## How to read the rankings

Each finding has **SEVERITY** (P0 blocker / P1 major / P2 worthwhile / P3 nice-to-have),
**IMPACT** (1–5, product/retention value), **EFFORT** (S < ~1 day · M ~2–5 days · L > 1 week),
and notes feasibility on **Spark free tier**. Findings are ordered by value-vs-effort on this stack.

---

## F1 — No persistence loop beyond a single throwaway list (the retention hole)
**Severity: P1 · Impact: 5 · Effort: S (local) / M (synced)**

**Problem.** The entire product is single-use. `basket.js` persists only `{ recipeIds, householdSize }`
to `localStorage` (L28, L77–88). The generated shopping list is **never saved** — `ShoppingList.jsx`
recomputes it from scratch on every visit and discards it on navigation. Checked-off receipt items
are not even mentioned in `ShoppingList.jsx` (no `checkedIds`/`onToggleItem` is passed to
`ReceiptList`), so ticking an item off is lost on reload. There is nothing to bring a user back.

**Why it matters most.** Meal-planning is inherently *recurring* (weekly shop). A planner with no
memory of last week, no "my lists", and no trolley state is a calculator, not a habit. This is the
highest-leverage gap because it converts a demo into a returning-user product and it is **achievable
entirely free** — no auth, no Firestore writes.

**Recommendation (free, no auth):**
1. Persist **checked receipt items** to `localStorage` keyed by basket signature (the
   `recipeIdsKey` sorted-join already exists in `ShoppingList.jsx` L109–112). Wire
   `checkedIds`/`onToggleItem` into `ReceiptList`.
2. Add **"Saved lists"** in `localStorage`: snapshot `{ recipeIds, householdSize, builtAt, checked[] }`
   on "Make my shopping list". A `/saved` route lists them; re-open restores the basket. Zero backend.
3. Add a lightweight **"This week" reuse**: "Shop again from last week" CTA on an empty basket.

**Evidence:** `basket.js` L77–88 (only basket persisted); `ShoppingList.jsx` L342–368 (no checked
state passed to `ReceiptList`); cross-ref `docs/OVERHAUL_AUDIT.md` §7.4 (same observation from the UX
auditor — "receipt has no per-item check persistence").

---

## F2 — Surface the leftovers / "use it up" feature the engine already computes
**Severity: P1 · Impact: 4 · Effort: S**

**Problem.** `buildShoppingList.js` already computes per-item **spare** after pack-rounding
(L292–313: `spareAmt = total - need`, rendered as `"… spare"`). This is *exactly* the data a
"use it up" / waste-reduction feature needs — and it is currently shown only as a passive label on
the receipt. There is **no** "you'll have ~300 g spare → meals that use it" surfacing, no aggregate
"this shop leaves you with: …" panel.

**Why it matters.** "Reduce food waste / use up leftovers" is a top-tier UK consumer motivation and a
genuine differentiator versus Just Eat-style apps (which never think past the order). The expensive
part — computing realistic spare from real pack sizes — is **done**. The missing part is product
packaging of it.

**Recommendation (free, client-side):**
- Aggregate the `spare` values into a **"Leftovers from this shop"** summary at the foot of
  `/list`. For each meaningful spare, link to recipes that contain that `ingredientId` (a single
  `array-contains`-style query already supported by the embedded `ingredients[]` + an
  ingredient→recipe lookup, or a precomputed map at ingest).
- Phase 2 (needs ingestion support): a lightweight `ingredientId → recipeIds` index doc so
  "use up your spare feta" is one read.

**Evidence:** `buildShoppingList.js` L234–316; the brief explicitly lists "leftovers/'use it up'" as
an in-scope roadmap item; no UI consumes `spare` beyond the receipt label.

---

## F3 — Search is title-substring-only over a partial page (weak primary entry point)
**Severity: P1 · Impact: 4 · Effort: M**

**Problem.** Search filters `meal.title`/`meal.cuisine` client-side over **whatever page the index
query already returned** (`Browse.jsx` L293–303, `visibleGrid` L379–383). With 1,955 recipes and a
24–48 item page, a query like "halloumi" or "puttanesca" can return nothing simply because the
matching recipes were never paged in. It also can't match by ingredient ("recipes with chickpeas"),
which is the most valuable search for a *shopping*-led app. The auto-pull loop (L403–406) papers over
it but is fundamentally bounded by the index page.

**Why it matters.** Search is the primary entry on every food app (the SEO/UX auditor flags the same).
On a shopping product, ingredient search ("what can I make with X") is uniquely on-brand.

**Recommendation (Spark-feasible options, in order):**
1. **Best free option:** a `searchTokens: string[]` field per recipe (title words + key ingredient
   canonical names), written at ingestion, queried via `array-contains` against a new composite
   index `(searchTokens CONTAINS, popularity desc)`. Gives true prefix-token search and
   ingredient search within the free tier. ~1,955 single-doc updates fits the 20K writes/day cap.
2. A precomputed **search shard** doc (titles + ids, gzipped) read once and matched in memory —
   simplest, but a ~1,955-title blob is a single fat read (acceptable; it changes only at ingest).
3. Document the limitation honestly until (1) ships ("searching the meals on this page").

**Evidence:** `Browse.jsx` L293–303, L379–406; `queryRecipes.js` (no full-text path); corpus 1,955
(`architecture-scale.md` L13). Cross-ref `OVERHAUL_AUDIT.md` §4.5.

---

## F4 — Per-meal / per-portion servings: one global household size is too blunt
**Severity: P2 · Impact: 4 · Effort: M**

**Problem.** `buildShoppingList` scales **every** recipe by the *same* `householdSize`
(CONTRACTS §2 step 1: `factor = householdSize / recipe.servingsBase`). The basket has a single
`householdSize` (`basket.js` L29). A real weekly shop is "dinner for 4 on Mon, lunch for 2 on Wed" —
the model can't express different portions per meal, nor "I'll batch-cook this one for 6 to freeze".

**Why it matters.** This is the difference between a toy ("everything for N people") and a real
planner. It directly feeds the shopping-list accuracy that is the product's whole value.

**Recommendation:**
- Extend the basket model to `{ recipeIds, householdSize, portions?: Record<recipeId, number> }`
  (default to `householdSize` when absent — backward compatible). `buildShoppingList` already keys by
  recipe, so per-recipe `factor` is a small, well-bounded change (and fully unit-testable — extend the
  vitest suite). Surface a per-row serving stepper in `/basket`.
- Keep the global stepper as the default/bulk control. **Free** (client-side only).

**Evidence:** CONTRACTS §2 step 1 (single factor); `basket.js` L29–31 (one size); `Basket.jsx`
L227–230 (one `HouseholdStepper`). The engine's keyed accumulation makes this cheap to add.

---

## F5 — Weekly planner (days × meal slots): the natural product shape, not built
**Severity: P2 · Impact: 4 · Effort: L**

**Problem.** The basket is a flat `recipeIds[]`. There is no concept of days, meal slots
(breakfast/lunch/dinner), or a "plan my week" grid — even though `course` is a first-class recipe
field (CONTRACTS §1) and the spec's Step 2/3 vision is explicitly a planner.

**Why it matters.** A day×slot planner is the canonical meal-planning UX (Mealime, Whisk, BBC Good
Food) and the most defensible position above a generic recipe browser. It naturally produces the
shopping list (the strength) as its *output*, and naturally drives F4 (portions per slot) and F1
(save the week).

**Recommendation:**
- Model `plan: { [dayKey]: { dinner?: recipeId, lunch?: recipeId, ... } }` over the existing basket;
  the shopping list builds from the flattened recipe set + per-slot portions. **Free** end-to-end
  on `localStorage` (no auth needed for v1).
- Phase the build: (a) a simple 7-day list grouping the basket by user-assigned day; (b) a true
  drag-into-slot grid later. Reuse `MealCard` and the collapse animation.

**Evidence:** `basket.js` (flat array, no slots); `course` field exists per CONTRACTS §1; brief lists
"weekly planner" + "household/portion management" as in-scope. Effort L because it's a new screen +
state model + interactions, but it has **no infra cost**.

---

## F6 — Accounts + cross-device sync (the gate that unlocks the persistence features)
**Severity: P2 · Impact: 4 · Effort: M-L · ⚠ needs a paid/extra service for full value**

**Problem.** No auth at all (`firebase.js` initializes only Firestore; no `firebase/auth`). Everything
in F1/F5 (saved lists, saved plans, favourites) is therefore **device-local** — a user loses their
plans switching from phone to laptop, exactly when a planner is most useful (plan on laptop, shop on
phone).

**Constraint reality.** Firebase **Authentication is available on Spark** (free, generous quota) —
contrary to a naive "no Blaze" read. The blocker is **per-user *writes***: storing saved plans needs
user-scoped Firestore documents, which means client *writes* (currently the rules are public-read,
**no client write** — `firestore.rules`), consuming the 20K writes/day cap and requiring rules that
authorize `request.auth.uid`. That is feasible on Spark for modest scale; it is **not free of risk**
(write quota, abuse surface) but needs no Blaze.

**Recommendation (staged, lowest-risk first):**
1. **Ship F1/F5 device-local first** (no auth) to validate the loop cheaply.
2. Add **Firebase Auth (anonymous + Google)** — Spark-free — and a single `users/{uid}/lists/*`
   collection with rules `allow read, write: if request.auth.uid == userId`. Cap writes (debounce,
   one doc per plan). This is the only way to get cross-device, and it stays on Spark.
3. Alternative if write-quota is a worry: keep storage local + an **export/import code** (encode the
   plan in a shareable URL/string) — zero writes, manual sync. Cheapest cross-device bridge.

**Evidence:** `firebase.js` (no auth init); `firestore.rules` (public read, no client write per README
L23–24); brief's "accounts + saved meal plans/lists (needs Auth)". Flagging uncertainty: exact write
volume at scale needs measuring before committing to (2).

---

## F7 — Favourites / ratings: cheap engagement signal, partially free
**Severity: P2 · Impact: 3 · Effort: S (favourites local) / M (ratings)**

**Problem.** No favourites toggle and no ratings anywhere (confirmed: no rating field rendered in
`MealCard.jsx`/`Meal.jsx`; no favourites store). Users can't mark "make again", and there's no quality
signal to improve the `popularity` sort beyond ingestion-time defaults.

**Recommendation:**
- **Favourites (free, now):** a `localStorage` set + a heart on `MealCard`/`Meal`; a `/favourites`
  view (reuses the grid). No backend. Strong, cheap engagement win; also seeds F8 personalisation.
- **Ratings (needs writes):** aggregate ratings require client writes (same constraint as F6) or a
  separate counter doc; defer until auth/write strategy is decided. **Reading** an ingestion-provided
  rating is free if a source supplies one. Don't fake social proof — only show ratings when real.

**Evidence:** no rating/favourite code in `src/`; `popularity` is the only quality signal
(`queryRecipes.js` default sort). Brief lists "ratings/favourites".

---

## F8 — Personalisation / recommendations are static (4 hard-coded rails, no "for you")
**Severity: P2 · Impact: 3 · Effort: M**

**Problem.** The home rails are 4 fixed filter queries (`Browse.jsx` L31–64: Quick dinners, Veggie,
British classics, Under 30 min). There is no "Because you cooked X", no related-meals on the Meal
screen, no diet-aware home (a vegan user still sees a meat rail first). Recommendations are listed in
the brief's Step 2/3 vision and are absent.

**Why it matters.** With 1,955 recipes and growing toward 10K (`CATALOGUE_10K_DESIGN.md`),
discovery becomes the bottleneck; static rails don't scale to that breadth.

**Recommendation (free, no ML server needed):**
1. **Remember a diet preference** (`localStorage`) from filters used / favourites; reorder rails and
   default the diet chip. Pure client logic, zero infra.
2. **Related meals rail** on the Meal screen: same `cuisine` or shared diet labels via the existing
   indexes — one extra query. Classic upsell, on-brand ("…and find sides").
3. **"More like your basket"** rail on `/basket` (shared cuisine/diet). All achievable with the
   indexes already declared.

**Evidence:** `Browse.jsx` L31–64 (static rails); `OVERHAUL_AUDIT.md` §4.2/§5.4 (per-rail queries,
no related meals); indexes exist for cuisine/diet (`firestore.indexes.json`).

---

## F9 — Cook mode: meal page is a static recipe, not a cooking aid
**Severity: P3 · Impact: 3 · Effort: M**

**Problem.** `Meal.jsx` renders steps as a plain `<ol>` (L313–320) — no step-by-step full-screen
mode, no screen-wake-lock, no inline timers, no "tap to advance", no servings re-scale preview on the
page. For a UK home-cooking audience this is the part of the experience that happens *at the hob*.

**Recommendation (free, client-side):**
- A **Cook mode** overlay launched from the Meal screen: one step at a time, large type,
  `navigator.wakeLock` to keep the screen on, optional `setTimeout`/`Notification`-free in-page
  timers parsed from step text ("simmer 20 min"). Pairs with a **"scale to N servings"** preview on
  the meal page (the auditor's §5.3). Note: only internal-method recipes (`instructionsExternal===false`)
  have steps to drive this — Edamam link-outs are excluded (already detected at `Meal.jsx` L152–158).

**Evidence:** `Meal.jsx` L313–320 (static list); `instructionsExternal` flag distinguishes
displayable methods (CONTRACTS §1). Cross-ref `OVERHAUL_AUDIT.md` §5.3.

---

## F10 — Supermarket price & basket hand-off: half-built, the missing monetisation/utility step
**Severity: P3 · Impact: 4 · Effort: L · ⚠ partly blocked by data/legal/Spark**

**Problem.** The Open Food Facts layer already stores a representative **barcode + brand + pack size**
per ingredient (`openfoodfacts.js`; `ingredientsDoc.js` L194, L284 put `offBarcode` on `defaultPack`),
but **none of it reaches the UI** and there is **no price data at all** (confirmed: zero `price` hits
in `buildShoppingList.js` and in OFF — OFF carries packaging, not reliable UK prices). Export is
Print/Copy/Share only (`ShoppingList.jsx` L235–272). The "order from a supermarket" / basket hand-off
that turns this from a checklist into a transaction is absent.

**Why it matters.** It's the clearest utility/monetisation lever (affiliate basket hand-off), and the
hardest constraint-wise — worth scoping but **not** a near-term build.

**Recommendation (realistic, staged):**
1. **Now (free):** surface the OFF pack/brand you already have ("buy 1 × 500 g Tesco-style block")
   to make the list feel retail-real. No new data.
2. **Medium:** an **estimated total** using coarse per-ingredient price bands authored in the
   dictionary (not OFF — OFF prices are unreliable). Honest "approx" labelling. Free.
3. **Long / blocked:** true basket hand-off needs a retailer API/affiliate programme (Tesco/Ocado have
   no open public basket API; most require partnership) — and live price needs a paid feed. **Flag as
   needs paid service + commercial agreement.** Don't promise it on the current stack.

**Evidence:** `openfoodfacts.js` (barcode/brand/size, no price; explicitly "OFF carries packaging");
`ingredientsDoc.js` L166, L194, L284 (`offBarcode` stored, unused in UI); `ShoppingList.jsx` L235–272
(export only). Cross-ref `OVERHAUL_AUDIT.md` §7.5.

---

## F11 — Catalogue depth is designed but unrun; per-diet completeness is the trust gap
**Severity: P2 · Impact: 4 · Effort: L · ⚠ needs Edamam keys (+ likely paid tier)**

**Problem.** Live corpus is **1,955** recipes (`architecture-scale.md` L13). The 10K every-diet plan
(`CATALOGUE_10K_DESIGN.md`) is **design-only, not run** ("Status: DESIGN ONLY — not yet run", L4). The
infra it needs already exists in part — `facets/diets` is written (`ingestion/lib/facets.js` L60–94)
and the CONTAINS indexes are deployed (`firestore.indexes.json` L31–83) — but the **content floors**
per diet aren't met, so a niche filter (e.g. low-FODMAP, kosher) likely returns a thin or empty grid.
That is a *feature-depth* problem: a diet filter that returns 3 recipes feels broken, and accuracy of
free-from labels is "the whole relationship" (design doc §6).

**Recommendation:**
- **Free ceiling first:** push TheMealDB-supporter + curated to fill the *highest-traffic* diet
  floors (Vegetarian/Vegan/GF/DF) before chasing 10K — the design doc itself notes ~3–4K is the
  free ceiling without Edamam (§1, §"Prerequisites"). This is achievable on Spark via the
  checkpointed backfill.
- **Then** decide on Edamam paid tier for the long tail (the only realistic path to 10K, design §1) —
  **flag: needs `EDAMAM_ID`/`EDAMAM_KEY` + likely a paid plan**. Cost-gate this against demand.
- Add a UI guard: when a diet filter has < N results, say so ("we're still stocking the vegan
  larder") rather than showing a near-empty grid.

**Evidence:** `CATALOGUE_10K_DESIGN.md` L4, L38–47, L70–80; `facets.js` L60–94; `firestore.indexes.json`
L31–83; live total 1,955.

---

## F12 — Read-budget headroom for the new features (a real constraint, observed)
**Severity: P2 · Impact: 3 · Effort: S–M**

**Problem / live evidence.** During this audit the Firestore REST read **returned HTTP 429
`RESOURCE_EXHAUSTED` "Quota exceeded"** for `facets/global` — i.e. the project is already brushing the
Spark daily read ceiling under audit-level traffic. Every roadmap feature here adds reads
(related-meals rails, search shards, saved-list re-opens, planner). Without budgeting, depth and the
free tier collide.

**Recommendation (free, enabling):**
- Precompute a **home/shelves doc** (one read for the default rails) instead of 4 rail queries +
  facets on every home load (`Browse.jsx` L126–141 fires a query per rail).
- **Cache recipe docs across Basket → List** (currently re-fetched: `Basket.jsx` and
  `ShoppingList.jsx` both `getRecipe` the same ids) — halves the per-session reads (`OVERHAUL_AUDIT.md`
  §6.2/§14.3).
- Lean on the **persistent local cache** already configured (`firebase.js` L28–34) and cache facets
  (they change only at ingest). These offsets create the headroom the new features will consume.

**Evidence:** live `curl` to `firestore.googleapis.com/.../facets/global` → `429 RESOURCE_EXHAUSTED`
(2026-06-19); `Browse.jsx` L126–141 (per-rail queries); duplicate `getRecipe` across `Basket.jsx` /
`ShoppingList.jsx`; `firebase.js` L28–34 (cache configured).

---

## Ranked summary (value vs effort on this stack)

| # | Finding | Sev | Impact | Effort | Free on Spark? |
|---|---|---|---|---|---|
| F1 | Persistence loop: saved lists + checked-item state | P1 | 5 | S/M | ✅ (local) |
| F2 | Surface leftovers / "use it up" (engine already computes spare) | P1 | 4 | S | ✅ |
| F3 | Real search (token/ingredient field), not title-substring | P1 | 4 | M | ✅ |
| F4 | Per-meal / per-portion servings | P2 | 4 | M | ✅ |
| F12 | Read-budget headroom (home doc, doc caching) | P2 | 3 | S–M | ✅ enabling |
| F8 | Personalisation: related meals + diet-aware home | P2 | 3 | M | ✅ |
| F7 | Favourites (local) + later ratings | P2 | 3 | S/M | ✅ favourites |
| F5 | Weekly planner (days × slots) | P2 | 4 | L | ✅ |
| F11 | Catalogue per-diet completeness toward 10K | P2 | 4 | L | ⚠ Edamam paid |
| F6 | Accounts + cross-device sync | P2 | 4 | M–L | ⚠ Auth free, writes risk |
| F9 | Cook mode + on-page scaling | P3 | 3 | M | ✅ |
| F10 | Supermarket price & basket hand-off | P3 | 4 | L | ⚠ paid/commercial |

---

## Highest-leverage move for this dimension

**Close the persistence loop without auth (F1 + F2), then ship real search (F3).** The product's
deep, well-tested *engine* is wasted because nothing brings a user back: lists evaporate, ticked items
reset, and the leftover-spare the algorithm already computes is never turned into a feature. Saved
lists + checked-state + a "leftovers from this shop" panel are **all free, client-side, low-effort**,
and they convert Larder from a one-shot calculator into a weekly habit — the single biggest return per
day of work on the current free stack. Real ingredient/title search (F3) is the next unlock because at
1,955→10K recipes, discovery, not computation, becomes the ceiling. Defer the infra-heavy bets
(accounts F6, 10K catalogue F11, supermarket hand-off F10) until that retention loop proves demand —
each of those costs money or write-quota and shouldn't be paid for before the free loop is validated.
