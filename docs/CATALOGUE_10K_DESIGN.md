# Larder — 10,000-recipe, every-diet catalogue expansion (DESIGN)

> Status: **DESIGN ONLY — not yet run.** This document specifies the work; the
> runnable orchestration is `.claude/workflows/catalogue-10k.js` (launch later
> with `Workflow({ name: "catalogue-10k" })`). Nothing here writes to Firestore
> until you decide to run it.

## 0. Goal

Grow the live catalogue from **790** to **≥10,000 unique recipes**, every recipe
richly labelled so that *every* dietary variation is a first-class, filterable
view — with a fully-covered **top-1,000** core and per-diet floors that make each
diet feel like its own complete app.

Two hard constraints stay non-negotiable (spec §0, §3):
- **Free Firestore (Spark).** 20K writes/day cap ⇒ a 10K backfill must be
  **checkpointed and spread across scheduled runs**, never one burst.
- **Legally clean only.** No scraping. Fully-displayable method ONLY where we
  hold the right (TheMealDB, curated). Everything else is **link-out** (Edamam:
  `instructions=null`, `instructionsExternal=true`, "Powered by Edamam").

## 1. The sourcing reality (how 10K is actually reached)

Fully-displayable recipes are scarce; breadth is the long tail. The mix:

| Layer | Source | Method rights | Realistic volume | Role |
|---|---|---|---|---|
| Core (display) | **TheMealDB** (supporter key) | full | ~1.5–3k | the displayable spine |
| Core (display) | **Curated** (we author) | full, original | ~1.5–2.5k | guarantees per-diet floors |
| Breadth (link-out) | **Edamam Recipe Search** | link-out | the remaining ~5–7k | reaches 10K, every-diet filters |

**Edamam is the only realistic path to 10K** and is purpose-built for this: it
exposes `health` + `diet` filters and returns `dietLabels`, `healthLabels`,
`cautions` (allergens) and 25+ nutrients per recipe. We store metadata +
ingredient *lines* + nutrition + labels + the publisher link; the Meal screen
already renders the "View full method on {publisher}" link-out for these.

### Prerequisites to actually RUN (decisions to confirm)
1. **Edamam Recipe Search paid tier + keys** (`EDAMAM_ID`/`EDAMAM_KEY` secrets).
   Free tier prototypes but is rate-limited; production breadth needs a paid plan.
   *Without it, the ceiling is ~3–4k (TheMealDB supporter + curated only).*
2. **TheMealDB supporter key** (`THEMEALDB_KEY`) — lifts the 100-item list cap and
   unlocks the full DB + ingredient artwork.
3. **Firestore write budget** — 10K + dictionary + facets ≈ a few days of free
   20K/day runs via the **checkpointed backfill** below; OR a one-time Blaze
   window collapses it to hours. Default design = **stay free, spread the writes.**

## 2. Dietary taxonomy (every variation is a labelled, filterable view)

Recipes are multi-labelled (a dish is often vegan **and** gluten-free **and**
high-protein). "10K unique recipes" carries rich `dietLabels[]` + `healthLabels[]`
so each diet below is a filter, with a **minimum recipe floor** the audit enforces.

**Lifestyle / macro diets:** Vegetarian · Vegan / plant-based · Pescatarian ·
Flexitarian · Mediterranean · Keto / ketogenic · Low-carb · High-protein ·
Low-fat · Low-calorie (Slimming-World / 5:2 style) · Paleo · Whole-food ·
Heart-healthy (DASH) · Diabetic-friendly / low-sugar.

**Free-from / allergen (load-bearing — accuracy is the whole relationship):**
Gluten-free (coeliac) · Wheat-free · Dairy-free / lactose-free · Egg-free ·
Peanut-free · Tree-nut-free · Soy-free · Fish-free · Shellfish/crustacean-free ·
Sesame-free · Celery-free · Mustard-free · Sulphite-free · Low-FODMAP (IBS).

**Cultural / religious:** Halal · Kosher.

**UK-popularity emphasis** (bigger floors): Vegetarian, Vegan, Flexitarian,
Gluten-free, Dairy-free, Mediterranean, Slimming-World/calorie-controlled,
Keto/Low-carb, High-protein, Halal, Pescatarian.

### Per-label floors (sum of *unique* recipes ≥ 10,000; overlaps expected)
```
Vegetarian        2000   Gluten-free   1400   Dairy-free    1000
Vegan             1500   High-protein   900   Pescatarian    800
Low-carb / Keto   1100   Mediterranean  700   Low-calorie    700
Halal              600   Nut-free       600   Diabetic/low-sugar 500
Paleo              400   FODMAP         300   Egg-free       350
Kosher             300   Soy-free       300   DASH/low-sodium 300
Top-1000 "most popular" core fully covered & QA'd first.
```
The audit phase treats these as *minimums*, not a budget — it loops harvest/curation until each is met.

## 3. Architecture — two layers

**Layer A — the Workflow (LLM agents, `catalogue-10k.js`).** Builds the machine
and the guaranteed content: the query matrix, the Edamam harvester, the
checkpointed writer, the per-diet curated sets, the dictionary expansion, and the
verification + audit harnesses.

**Layer B — the Engine (Node on GitHub Actions, runs on a schedule).** Executes
the harvest to 10K across many runs, draining writes within the free quota,
tagging diets, updating facets. This is what produced files run; it needs the keys.

The Workflow *builds and seeds*; the Engine *fills to scale*. The Workflow can
optionally kick off the first backfill batch, but the bulk lands over scheduled runs.

## 4. The query matrix (systematic, dedup-by-URI)

`ingestion/data/diet-matrix.json` (authored in Phase 1) enumerates the harvest plan:

```
for each diet/health label  (≈30)
  for each cuisine           (British, Italian, Indian, Thai, Chinese, Mexican,
                              French, Greek, Middle-Eastern, Japanese, American, …)
    for each mealType         (breakfast, lunch, dinner, snack, teatime)
      Edamam query: { health|diet: label, cuisineType, mealType, random:false }
      paginate via _links.next until tier page-cap or the diet floor is met
      dedup by recipe URI across the whole matrix
```
Plus a **top-1000 pass**: highest-traffic British + global dishes harvested and
QA'd first so the "most popular" sort and home rails are dense from day one.

## 5. Quota-safe backfill (the part that keeps it free)

- `system/backfill_progress { matrixCursor, urisSeen[], recipesWritten, lastRun }`.
- Each GitHub Actions run: resume at `matrixCursor`, harvest + pipeline, then
  **write at most ~4,500 docs** (recipes + new ingredients + facet deltas), persist
  the cursor, exit. Headroom keeps the day under the 20K cap even with re-syncs.
- `contentHash` diffing means steady-state re-runs are nearly free (only changes write).
- ⇒ full 10K lands in ~3–4 runs (hours with manual dispatch; ~1 day at 6-hourly cron).
- New composite indexes (declared, not data): `(healthLabels CONTAINS, popularity desc)`,
  `(cuisine, healthLabels CONTAINS, popularity desc)`, `(course, healthLabels CONTAINS, popularity desc)`,
  `(dietLabels CONTAINS, totalTimeMinutes asc)`. Diet facet docs `facets/diets` so a
  diet filter + counts is 1 read.

## 6. Verification (accuracy is the product)

Allergen/diet correctness is the constrained-eater's entire trust. Phase 5 runs
**adversarial, per-diet verifiers**: each recipe claiming a free-from/diet label is
checked against that diet's *exclusion list* by matching its resolved ingredient
lines (e.g. vegan ⇒ no animal-derived canonical; gluten-free ⇒ no wheat/barley/rye/
spelt; nut-free ⇒ no tree-nut/peanut canonicals). A majority-refute kills or
down-labels the claim. Edamam labels are trusted but spot-audited; curated labels
are fully verified. Mislabels are corrected or the label removed — never guessed.

## 7. The Workflow phases (what `catalogue-10k.js` runs)

| Phase | Agents | Output |
|---|---|---|
| 1 · Plan | 2 | `diet-matrix.json` (matrix + per-diet floors) · sourcing/quota/backfill plan |
| 2 · Engine | 3 | full `sources/edamam.js` · checkpointed backfill writer + `system/backfill_progress` · `ingest.js` matrix mode + diet facets + `firestore.indexes.json` additions |
| 3 · Curated | ~24 (per-diet, loop-until-floor) | ~1.5–2.5k fully-displayable recipes guaranteeing every per-diet floor |
| 4 · Dictionary | loop-until-dry | canonical-ingredient expansion for the new long tail (keeps resolution ≥95%) |
| 5 · Verify | per-diet adversarial panel | corrected/validated diet+allergen labels; refute-rejects removed |
| 6 · Audit | 1 completeness critic | per-diet coverage vs floors; gap list → feeds another harvest round until ≥10K |

Quality patterns used: **loop-until-floor** (per diet), **loop-until-dry**
(dictionary), **adversarial majority-refute** (diet/allergen), **completeness
critic** (coverage audit). Agent count well under the 1000 cap.

## 8. What stays unchanged

The app already serves this scale: paginated/indexed browse, precomputed facets,
client-side `buildShoppingList`, the receipt + pack feature. Adding 10K recipes and
diet facets needs **no app rewrite** — only the new indexes and the diet filter
chips wired to the existing `FilterBar` (a small follow-up, noted, not in this run).

## 9. To run it (later)

1. Add `EDAMAM_ID` / `EDAMAM_KEY` (and ideally `THEMEALDB_KEY`) GitHub secrets.
2. Decide free-spread vs Blaze window for the write burst.
3. `Workflow({ name: "catalogue-10k" })` to build the machine + seed content + verify.
4. Deploy the new `firestore.indexes.json`; enable the matrix harvest in `ingest.yml`.
5. Let the checkpointed backfill drain to ≥10K over the next few scheduled runs.
6. Audit report confirms every per-diet floor is met.
```
