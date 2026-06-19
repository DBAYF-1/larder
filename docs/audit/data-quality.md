# Larder — Data Quality, Coverage & Correctness Audit

**Dimension:** Data quality, coverage & correctness
**Date:** 2026-06-19 · **Branch:** `main` · **Analysis only — no app/source code changed.**
**Method:** read of the ingestion pipeline (`ingestion/pipeline/*`, `ingestion/sources/*`, `ingestion/data/*`),
the pure list algorithm (`src/lib/buildShoppingList.js`), the test suite (`npm test` → 65 passing), and **live
sampling of Firestore** via the REST API: `facets/global`, a 300-doc alphabetical recipe page, and a 150-doc
`source == 'themealdb'` `runQuery`. (A daily Spark read-quota 429 was hit mid-audit — itself evidence for the
cost-constraint findings; samples below are the data gathered before the cap.)

**Catalogue at audit time:** `facets/global.totalRecipes = 1955`, updated `2026-06-19T00:25Z`. 713 canonical
ingredients across `ingestion/data/ingredients/*.js`. 368 generated dish photos (`generated-images.json`).

## Severity legend
P0 blocker · P1 major · P2 worthwhile · P3 nice-to-have. IMPACT 1–5, EFFORT S/M/L.

---

## Highest-leverage move for this dimension

**Make diet/allergen labels trustworthy by deriving and *cross-checking* them against resolved ingredients, and
treat any unresolved (`needsReview`) line as a label-blocker.** Today free-from labels are asserted from the
*absence* of detected allergens behind only a `parseCompleteness >= 0.7` gate (`buildRecipe.js:235`), the allergen
keyword list has real gaps (oats, tortilla → "Gluten-free" served to coeliacs), TheMealDB auto-tags whole
categories ("Pasta", "Dessert", "Side", "Starter") as Vegetarian (Lasagne-with-bacon is "Vegetarian"), and curated
diet tags are hand-authored with no guard (honey/butter dishes tagged "Vegan"). These are *safety-critical* and
currently shipping live. One verification stage — "a free-from/diet label may only stand if (a) every relevant line
resolved, and (b) no resolved ingredient or raw token contradicts it" — fixes the entire class. The
`catalogue-10k` skill already scopes "adversarially verify diet/allergen labels"; run that logic against the
*existing* corpus, not just future Edamam imports.

---

## Findings (ranked)

### 1. Free-from labels survive unresolved lines and keyword gaps — coeliacs/allergic users misled (P0)
- **Severity P0 · IMPACT 5 · EFFORT M**
- **Evidence.** `deriveHealthLabels` (`ingestion/pipeline/buildRecipe.js:111-120`) asserts e.g. `Gluten-free`
  purely when `!allergens.includes('contains-gluten')`. Allergens come from `deriveAllergens`
  (`buildRecipe.js:94-105`), a keyword regex (`buildRecipe.js:79-92`). The gluten regex is
  `flour|bread|pasta|spaghetti|couscous|breadcrumb|wheat|barley|rye|cracker|pastry` — it does **not** include
  **oats, tortilla, spelt, semolina, bulgur, naan, chapati, pitta, gnocchi, noodle, orzo, seitan, polenta**.
  Live confirmation (300-doc sample): **16 recipes carry `Gluten-free` while containing a gluten-bearing
  ingredient the regex misses**, e.g. "Banana and oat cookies" (`200g Oats`), "Chicken fajitas"
  (`8 Tortilla wrap`), "Bean and vegetable enchiladas" (`8 small Tortilla wrap`), "Berry and oat flapjack"
  (`300g Oats`). Standard oats are cross-contaminated with gluten and tortillas are wheat — these labels are
  unsafe for coeliacs.
- **Compounding gate flaw.** The free-from labels are gated at `parseCompleteness >= 0.7` (`buildRecipe.js:235`).
  At exactly 0.7, **30% of lines are unresolved** yet free-from labels are still asserted. The keyword fallback
  *does* test `line.raw` for `needsReview` lines (it reads `line.canonicalName || line.raw`, `buildRecipe.js:97`),
  which mitigates *known* keywords — but anything outside the keyword list (oats/tortilla above) or any novel
  ingredient escapes entirely. Measured: **18% of recipes (80/450 sampled) sit below 0.7** and fall back to
  source labels; the rest assert derived labels even with up to 30% unresolved content.
- **Recommendation.**
  1. Expand the allergen keyword tables to cover the gluten long-tail (oats, tortilla, wrap, spelt, semolina,
     bulgur, farro, seitan, naan, chapati, pitta, baguette, brioche, crouton, filo, orzo, gnocchi, noodle, udon,
     ramen, soba, polenta, matzo, panko), the dairy long-tail (ghee, custard, mascarpone, ricotta, feta, halloumi,
     paneer, buttermilk, brie, cheddar, gouda, etc.), and nuts (pine nut, chestnut, marzipan, praline, nut butter).
  2. **Block, don't gate.** A free-from label should require that *every* line resolved AND no contradiction —
     refuse to assert "Gluten-free" if any line is `needsReview`. Far safer to under-label than to mislabel a
     coeliac dish.
  3. Mark oats `contains-gluten` by default unless a variant is explicitly "certified gluten-free oats".
- **Feasibility.** Pure data/code change in ingestion; free. No Blaze needed.

---

### 2. TheMealDB category → Vegetarian mapping over-labels meat dishes (P0)
- **Severity P0 · IMPACT 5 · EFFORT S**
- **Evidence.** `ingestion/sources/themealdb.js:150` —
  `VEGETARIAN_CATEGORIES = new Set(['Vegetarian','Vegan','Dessert','Pasta','Side','Starter'])`. Any recipe whose
  TheMealDB `strCategory` is Pasta/Dessert/Side/Starter is auto-tagged `Vegetarian` regardless of contents
  (`themealdb.js:167-168`). Live confirmation (150-doc `source==themealdb` sample): **4 meat/fish dishes tagged
  Vegetarian** — **"Venetian Duck Ragu"** (Pasta → contains Duck), **"Lasagne"** (Pasta → contains Bacon),
  **"Clam chowder"** (contains Bacon + clams), **"Brie wrapped in prosciutto & brioche"** (Starter → contains
  Prosciutto). At catalogue scale (Pasta/Starter/Side categories) this is dozens of dishes.
- **Impact.** A vegetarian adding "Lasagne" gets bacon on their shopping list and in their meal; trust-destroying
  and, for strict vegetarians, a real harm.
- **Recommendation.** Remove Pasta/Dessert/Side/Starter from the auto-vegetarian set. Derive Vegetarian/Vegan from
  *resolved ingredients* (no meat/fish/gelatine/animal-derived line) the same way free-from labels should be
  derived, and require full resolution before asserting it. Keep the TheMealDB tag only as a *hint*, never as the
  decision.
- **Feasibility.** One-line set edit + re-derive in ingestion; free.

---

### 3. Hand-authored curated diet tags are wrong and unguarded (Vegan dishes with honey/butter) (P0)
- **Severity P0 · IMPACT 4 · EFFORT M**
- **Evidence.** Curated `dietLabels` are passed straight through (`ingestion/sources/curated.js:119,144`;
  `buildRecipe.js:232` `dietLabels = src.dietLabels || []`) with **no validation against ingredients**. Live + source
  confirmation:
  - **"Baked apples with sultanas"** — `dietLabels: ['Low-calorie','Vegan']`
    (`ingestion/data/curated/diet-low-calorie.js:1965`) but ingredient list includes `4 tsp Honey`. Honey is not
    vegan.
  - **"Charoset"** — `dietLabels: ['Kosher','Vegan','Vegetarian','Dairy-free']`
    (`ingestion/data/curated/diet-kosher.js`) but includes `2 tbsp Honey`. Not vegan.
  - **"Braised red cabbage"** — tagged Vegan in `diet-low-calorie.js` but includes `40g Butter`. Not vegan, not
    dairy-free.
  - **"Cauliflower and chickpea curry-spiced traybake"** — tagged Vegan but includes `4 tbsp Natural yoghurt`.
- **Note on the redundant `healthLabels` field.** Curated records carry their own `healthLabels` (e.g.
  `['Vegan','Vegetarian','Dairy-free','Egg-free','Low-fat']`, `diet-low-calorie.js:31`), but `buildRecipe.js:234-237`
  **discards** them for any recipe at `parseCompleteness >= 0.7` (it derives free-from from allergens instead) and
  *only* uses them as a fallback below 0.7. So the curators' careful health tagging is silently dropped for most
  recipes, while their *diet* tags (which AREN'T re-derived) pass through unchecked. The pipeline trusts the wrong
  half of the curated metadata.
- **Recommendation.** Add an ingestion validation pass that **rejects/flags any diet label contradicted by a
  resolved ingredient**: Vegan ⇒ no honey/dairy/egg/meat/fish/gelatine; Vegetarian ⇒ no meat/fish/gelatine;
  Pescatarian ⇒ no meat. Fail the build (or emit a `system/last_ingestion.errors` entry) listing offenders so the
  curated files get fixed. Decide one source of truth for `healthLabels` (derive everywhere, or trust curated
  everywhere) — the current split is a latent correctness trap.
- **Feasibility.** Free; pure ingestion validation. ~30 lines.

---

### 4. Dish-photo coverage is far worse than "368/1955" implies — ~46% of curated recipes show SVG placeholders (P1)
- **Severity P1 · IMPACT 4 · EFFORT L**
- **Evidence.** Image hosts by source (live sampling):
  - `source==themealdb` (150 sampled): **150/150 real TheMealDB photos.**
  - 300-doc alphabetical sample (mostly curated A–C): **139 data-URI SVG placeholders (46%)**, 113 Wikimedia, 48
    Firebase-generated.
  Curated recipes fall back to a generated `data:image/svg+xml,...` "market-stall" placeholder when no Wikipedia
  photo is cached (`ingestion/sources/curated.js:74-108`, used at `:134`). The 368 generated Pollinations photos
  (`generated-images.json`) cover only a slice of the ~1,640 non-TheMealDB recipes. So the user-visible reality on
  curated/diet content (the catalogue's bulk and the "image-led" promise) is a wall of text placeholders, not the
  "368/1955" headline.
- **Secondary cost issue.** The SVG placeholder is stored *inline in each recipe doc* as a `data:` URI
  (`curated.js:134`); these blobs ship on every Firestore query of those recipes, inflating read payloads (noted
  also in `OVERHAUL_AUDIT.md §1.4`).
- **Recommendation.** (a) Keep generating real photos (CI workflow already exists) and track coverage *per source*
  as a launch metric — the curated/diet sets are where the gap is. (b) Stop embedding the data-URI blob in the doc;
  store an empty `imageUrl` and let `RecipeImage` render the placeholder client-side, so placeholders cost no
  Firestore bytes. (c) Prioritise photo generation by popularity *within curated*, not globally.
- **Feasibility.** Generation is free (Pollinations, rate-limited — known constraint). The data-URI removal is a
  pure ingestion change, free, and *reduces* read cost.

---

### 5. Dish-photo *accuracy* is unverified — generated images may not match the dish (P1)
- **Severity P1 · IMPACT 3 · EFFORT M**
- **Evidence.** Generated photos come from Pollinations text-to-image keyed on the dish title
  (`ingestion/scripts/generateDishImages.mjs`), overriding the source photo (`buildRecipe.js:255`,
  `GENERATED_IMAGES[id] || src.imageUrl`). There is **no accuracy check** in the pipeline — no human review gate, no
  CLIP/label verification, no record of prompt→image fidelity. AI image generators routinely produce plausible-but-
  wrong food (wrong protein, wrong cuisine, extra garnish). Because the generated URL *overrides* a real source
  photo where one existed, a wrong generation can replace a correct image.
- **Uncertainty.** I could not visually audit the 368 images within the read budget; this is a *process* risk
  flagged on high confidence, not a count of confirmed-wrong images.
- **Recommendation.** (1) Never let a generated image override a *real* source photo (TheMealDB/Wikimedia) — only
  fill genuine gaps; flip the precedence in `buildRecipe.js:255` to `src.imageUrl || GENERATED_IMAGES[id] ||
  placeholder`. (2) Add a lightweight sampling QA: spot-check a random 5% per batch, log to a sheet. (3) Optional:
  a CLIP-similarity score (title vs image) threshold before accepting a generation (needs a small offline GPU/API
  step — not on the Spark hot path, so feasible as a CI step).
- **Feasibility.** Precedence flip is free. CLIP gating is a CI cost only (no Blaze).

---

### 6. Cuisine taxonomy has duplicate/inconsistent values that fragment filters (P1)
- **Severity P1 · IMPACT 3 · EFFORT S**
- **Evidence.** `facets/global.cuisines` (live) contains synonym pairs splitting one cuisine across two filter
  chips:
  - **Middle Eastern (48) + Middle-Eastern (44)** = 92 split in two (hyphen vs space).
  - **India (14) + Indian (72)**, **France (28) + French (17)**, **American (28) + United States (34)** —
    country-name vs demonym duplicates.
  - Country-name (not demonym) values inconsistent with the British/Italian/Thai house style: **France, India,
    Norway, Netherlands, Argentina, Venezuela, Uruguayan, Saudi Arabian, Canadian** (mix of styles).
  A user filtering "Middle Eastern" sees only 48 of 92 relevant recipes; "French" misses the 28 tagged "France".
- **Recommendation.** Normalise cuisine to a single canonical vocabulary (demonym form: French, Indian, American,
  Middle Eastern, Norwegian, Dutch, Argentine, Venezuelan…) in a small mapping table in the source adapters
  (TheMealDB `strArea` and curated `cuisine`), re-derive facets. Add a CI assertion that every cuisine value is in
  the canonical set.
- **Feasibility.** Free; a mapping table + re-ingest. Small.

---

### 7. Course taxonomy leaks values outside the contract enum (P2)
- **Severity P2 · IMPACT 2 · EFFORT S**
- **Evidence.** Contract course enum (CONTRACTS.md §1) is `Breakfast|Lunch|Dinner|Side|Dessert|Snack|Drink`. Live
  `facets/global.courses` includes **`Starter` (12)** and **`Pudding` (1)** — outside the enum — alongside the
  valid set. "Pudding" overlaps "Dessert"; "Starter" overlaps "Snack"/"Side". This splits browsing and breaks any
  UI that assumes the fixed enum.
- **Recommendation.** Map `Starter → Snack` (or add `Starter` to the enum deliberately) and `Pudding → Dessert` in
  the source adapters; assert course ∈ enum at ingestion.
- **Feasibility.** Free; trivial mapping.

---

### 8. Nutrition is approximate and silently incomplete — count-based ingredients contribute zero (P2)
- **Severity P2 · IMPACT 3 · EFFORT M**
- **Evidence.** `deriveNutrition` (`buildRecipe.js:126-151`) sums CoFID-style per-100g/ml profiles weighted by
  resolved base quantity, divided by servings. It **skips every `count`-based ingredient** (`buildRecipe.js:135`,
  `if (line.baseUnit === 'count') continue`) because profiles are per-100g. So an omelette's eggs, a pie's apples,
  a roast's chicken-by-the-piece, etc. contribute **0 kcal/protein** — systematically *understating* nutrition for
  any recipe whose main components are counted, with no flag to the user. It also skips `needsReview` lines and
  staples, and only emits a number "if anything resolved with a profile" (so partial recipes show a confidently-
  wrong low total rather than null). Live spot-check: "Aloo gobi" shows `77 kcal / 2 g protein` per serving for a
  potato-and-cauliflower main — implausibly low, consistent with under-counting.
- **Recommendation.** (1) Add `perItemGrams` (already used elsewhere, `normalise.js:88`) to count ingredients so
  eggs/onions/chicken-breasts convert to grams for nutrition. (2) Emit a `nutritionCompleteness` (share of lines
  with a profile) and have the UI label nutrition "approximate — based on N of M ingredients" or hide it below a
  threshold. (3) Prefer source nutrition (Edamam) where present (already does, `buildRecipe.js:239-242`).
- **Feasibility.** Free; data + ingestion code. The contract already lists `nutritionPerServing` as approximate, so
  surfacing completeness is the honest minimum.

---

### 9. ~13% of ingredient lines land in "Check these yourself" — common items still unresolved (P2)
- **Severity P2 · IMPACT 3 · EFFORT M**
- **Evidence.** Measured over 450 sampled recipes: **mean `needsReview` line rate = 13.1%**, mean
  `parseCompleteness = 0.84` (median 0.86). Concrete unresolved lines seen are *common* ingredients the dictionary
  should cover: `Ginger garlic paste`, `Tahini`, `Wholegrain bread`, `Cooking apples`, `Cannellini beans`,
  `Chopped tomatoes` (tinned), `Capers`, `Parmesan` (grated), `Butter` (cold). Several of these (Butter, Parmesan,
  Chopped tomatoes) almost certainly *exist* as canonicals — the misses are resolution failures (the parser/cleaner
  leaving a stray descriptor or quantity), not dictionary gaps. Each unresolved line drops out of the quantity
  maths (it can't be scaled/deduped/aisle-sorted) and lands verbatim under "Check these yourself", degrading the
  core shopping-list value.
- **Recommendation.** (1) Mine `system/last_ingestion`-style logs for the top unresolved cores and add synonyms /
  fix `cleanName` (`buildRecipe.js:37-55`) for the recurring patterns ("cold Butter", "grated Parmesan",
  "x 400g tin Chopped tomatoes"). (2) Add `Ginger garlic paste`, `Tahini`, `Wholegrain bread`, `Cooking apples`,
  `Cannellini beans`, `Capers` as canonicals if genuinely missing. (3) Track resolution rate as a CI metric and
  fail if it regresses. `ingestion/scripts/measureGap.mjs` / `trueGap.mjs` exist — wire them into CI.
- **Feasibility.** Free; iterative dictionary + parser work. The tooling partly exists.

---

### 10. Shopping-list maths is correct and well-guarded — but min-purchase has a unit-disambiguation foot-gun (P2)
- **Severity P2 · IMPACT 2 · EFFORT S**
- **Evidence (strength first).** `src/lib/buildShoppingList.js` is genuinely careful and the 65-test suite passes
  (`npm test`: `format.test.js` 22 + `buildShoppingList.test.js` 43, all green). Scaling (`factor =
  householdSize / servingsBase`, `:68`), keyed dedupe (`:101-106`), staple/optional/needsReview routing, aisle sort
  (`:174-189`), and pack-rounding (`:271-317`) all match the contract. `normalise.js` never fabricates densities
  (`:167-180`) — volume→mass with unknown density is flagged `needsReview`, the safe choice. This is a real
  differentiator; **do not regress it.**
- **The foot-gun.** Min-purchase reads `mp.weight ?? mp.number` (`buildShoppingList.js:215-219`) and the code
  comment (`:212-214`) admits "volume minimums also live under `weight` per the seed convention". So a *volume*
  ingredient's minimum is stored in a field named `weight`, disambiguated only by `minimumPurchase.unit`. If any
  ingredient doc gets this convention wrong (e.g. a volume min in `number`, or unit mismatch), the bump silently
  uses the wrong figure with no validation. There is no ingestion assertion that `minimumPurchase.unit ===
  baseUnit`.
- **Recommendation.** Add an ingestion-time invariant check: for every ingredient, `minimumPurchase.unit` and any
  `defaultPack.unit` must equal `baseUnit` (or be a declared pack unit); fail the build on mismatch. Keeps the
  pure algorithm clean while catching seed-data drift. No algorithm change needed.
- **Feasibility.** Free; a validator (`ingestion/scripts/validateDict.mjs` already exists — extend it).

---

### 11. No automated dedup across sources; relies on disjoint id namespaces (P3)
- **Severity P3 · IMPACT 2 · EFFORT M**
- **Evidence.** Recipe ids are `${source}-${slug}` (`buildRecipe.js:277-279`), so TheMealDB, curated, and Edamam
  can never *collide by id* — but the same *dish* can exist under two sources (e.g. a curated "Lasagne" plus
  TheMealDB "Lasagne") with no detection. In the 300-doc sample I found **0 exact-normalised duplicate titles and
  0 cross-source near-duplicate pairs (≥0.6 token Jaccard)** — so today it's not an active problem — but there is
  **no guard**, so as curated/Edamam sets grow, duplicate dishes will appear in browse and rails with no merge.
- **Recommendation.** Add a build-time near-duplicate report (normalised-title + ingredient-set similarity) to
  `system/last_ingestion`; decide a precedence (prefer the one with a real photo / instructions) when a dup is
  detected. Low urgency now, cheap insurance before scaling to 10k.
- **Feasibility.** Free; offline ingestion analysis.

---

### 12. Ingredient docs still carry no `imageUrl` — the brief's ingredient-thumbnail requirement is unmet at the data layer (P3)
- **Severity P3 · IMPACT 2 · EFFORT S**
- **Evidence.** `grep -c imageUrl ingestion/data/ingredients/*.js` → **0 in every file.** TheMealDB serves free
  ingredient photos at `https://www.themealdb.com/images/ingredients/{Name}.png`. The contract (CONTRACTS.md §1
  notes the field is *intended*) and `OVERHAUL_AUDIT.md §8.2` both call for it; the data simply isn't populated, so
  the receipt/ingredient lines can only be text. (This overlaps the UX audit but the *root cause is a data gap*.)
- **Recommendation.** In ingestion, derive `imageUrl` for each canonical ingredient from its TheMealDB-style name
  (`.../{Name}.png` or `-Small.png`), guard 404s client-side via the existing `RecipeImage` error fallback.
  Free, reliable images.
- **Feasibility.** Free; a derivation + backfill.

---

## Cross-cutting observations

- **Constraint reality check.** A daily Firestore read-quota **429 (RESOURCE_EXHAUSTED)** was hit during this audit
  from a handful of `runQuery` calls — corroborating the cost concern in `OVERHAUL_AUDIT.md §14.3`. Any data fix
  that *reduces* per-doc payload (Finding 4b: drop inline SVG data-URIs) is doubly valuable.
- **What's strong (do not regress):** the pure shopping-list algorithm and its 65 tests; the never-fabricate-density
  discipline in `normalise.js`; the `needsReview` appendix that keeps unresolved lines visible rather than dropping
  them silently; the careful keyword fallback on raw text for allergens.
- **The pattern across the P0s:** labels are *asserted optimistically* (from absence, from category, from human tags)
  rather than *proven from resolved ingredients and blocked by uncertainty*. Inverting that default — "prove it or
  don't claim it" — is the dimension's central fix and is entirely free on Spark.

## Suggested order of work (this dimension)
1. Findings 1–3 (label safety) — P0, free, ship first. Add the verification stage + expand allergen tables +
   derive Vegetarian/Vegan from ingredients + validate curated tags.
2. Finding 6/7 (taxonomy normalisation) — quick wins that immediately improve filter coverage.
3. Finding 4/5 (photo coverage + accuracy precedence) — biggest perceived-quality lever after labels.
4. Findings 8–10 (nutrition completeness, resolution rate, min-purchase invariant).
5. Findings 11–12 (dedup guard, ingredient images) — pre-scale insurance / brief completeness.
