# Larder — sourcing, quota & backfill plan (10K catalogue)

> Status: **PLAN ONLY.** This document is the concrete, numeric contract for how
> the catalogue reaches ≥10,000 unique recipes while staying on the free
> Firestore (Spark) tier and legally clean. It specifies what the Engine
> (`ingestion/ingest.js` + `sources/edamam.js` + the checkpointed writer)
> must do; it does not itself write anything. Numbers below are the budget the
> Engine is built and tuned against.
>
> Owns: this file only. Referenced files (`ingest.js`, `sources/edamam.js`,
> `lib/firestore.js`, `firestore.indexes.json`, `.github/workflows/ingest.yml`)
> are authored/edited by their owning agents per CONTRACTS.md §6.

---

## 1. The 10,000 split across sources

10K is reached by **three layers** with different method-display rights
(CATALOGUE_10K_DESIGN §1). Fully-displayable method is scarce; the long tail is
Edamam link-out. The displayable spine + curated floors are seeded first; Edamam
fills the remainder over scheduled runs.

| Layer | Source | Method | Target docs | Cumulative |
|---|---|---|---|---|
| A — display spine | TheMealDB (supporter key) | full | **1,800** | 1,800 |
| B — display floors | Curated (we author) | full, original | **2,200** | 4,000 |
| C — breadth | Edamam Recipe Search | link-out | **6,200** | **10,200** |

A 200-recipe head-room (10,200 target) absorbs dedupe loss and verify-rejects so
the audit still clears ≥10,000 unique after rejections.

### Layer A — TheMealDB (supporter key), target 1,800
- Free test key `"1"` exposes ~669 distinct meals (category ∪ area, deduped in
  `pullTheMealDb`). That is the floor **without** a supporter key.
- `THEMEALDB_KEY` (supporter) lifts the 100-item list cap and unlocks the full
  DB (~1,800+ meals) plus ingredient artwork. Target **1,800**; if the supporter
  key is absent the layer delivers ~669 and Edamam's target rises by the
  shortfall (see §1 reconciliation note).
- All TheMealDB recipes keep `instructions` (full method, `instructionsExternal:false`).
- No pagination work needed — the adapter already enumerates the full id set.

### Layer B — Curated, target 2,200 (guarantees per-diet floors)
- Authored in `ingestion/data/curated/*.js`; fully displayable, original method.
- Curated is the **only** layer we can force to hit a specific diet, so it
  back-fills any per-diet floor Edamam + TheMealDB miss. Allocation:

  | Diet floor (design §70) | Floor | Curated commitment |
  |---|---|---|
  | Vegan | 1500 | ≥ 350 curated (rest via Edamam `health=vegan`) |
  | Vegetarian | 2000 | ≥ 300 curated |
  | Gluten-free | 1400 | ≥ 250 curated |
  | Dairy-free | 1000 | ≥ 200 curated |
  | Low-carb / Keto | 1100 | ≥ 200 curated |
  | High-protein | 900 | ≥ 150 curated |
  | Halal | 600 | ≥ 200 curated (Edamam has no Halal filter — curated-heavy) |
  | Kosher | 300 | ≥ 150 curated (no Edamam filter — curated-heavy) |
  | Low-calorie (Slimming) | 700 | ≥ 150 curated |
  | Pescatarian | 800 | ≥ 100 curated |
  | Nut-free / Egg-free / Soy-free / FODMAP / DASH / Paleo / Diabetic | per design | ≥ 100 curated each |

  Halal and Kosher are **curated-floor-critical**: Edamam exposes no Halal/Kosher
  filter, so those floors are met almost entirely by curated + label-verified
  TheMealDB. The Phase-3 loop-until-floor pattern keeps authoring per diet until
  each commitment above is met.

### Layer C — Edamam, target 6,200 (link-out remainder)
- `instructions:null`, `instructionsExternal:true`, `publisher` set, "Powered by
  Edamam", `attributionRequired:true` — already enforced in `mapRecipe`.
- Harvested via the **diet × cuisine × mealType matrix** (`diet-matrix.json`,
  Phase 1), deduped by recipe URI across the whole matrix.
- This is the only layer that scales to thousands; its target floats to cover any
  TheMealDB/curated shortfall (reconciliation: `edamamTarget = 10200 −
  themealdbActual − curatedActual`).

**Reconciliation rule the Engine applies each run:** before harvesting Edamam,
read current `recipesWritten` per source from `system/backfill_progress`;
`edamamRemaining = max(0, 10200 − totalUniqueWritten)`. Harvest stops early once
`totalUniqueWritten ≥ 10200` **and** every per-diet floor is met.

---

## 2. Firestore write budget (stay under the free 20K writes/day cap)

Spark free tier = **20,000 document writes / day**. Hard rule: **≤ ~4,500 writes
per run**, leaving > 15K/day head-room for re-syncs, facet churn, and a second
manual dispatch on the same day.

### What counts as a write
A run writes: changed `recipes/{id}` docs + new/changed `ingredients/{id}` docs +
`facets/global` (1) + `system/last_ingestion` (1) + `system/backfill_progress`
(1). `contentHash` diffing (`lib/firestore.js` `diffAndWrite`) means **unchanged
docs cost 0 writes** — only first-write and genuine changes are billed.

### Per-run budget (the 4,500 cap, itemised)
| Bucket | Budget / run | Notes |
|---|---|---|
| New recipe docs | **4,200** | the backfill body |
| New/changed ingredient docs | **~250** | dictionary growth tapers fast; ~0 in steady state |
| `facets/global` | 1 | recomputed once per run |
| `system/last_ingestion` | 1 | heartbeat |
| `system/backfill_progress` | 1 (≤ a few) | checkpoint, see §3 |
| Re-sync head-room | ~46 | slack under 4,500 |
| **Total** | **≤ ~4,500** | < 23% of the 20K/day cap |

Each recipe is a **single document write** (ingredient lines are embedded per
CONTRACTS §1, not sub-docs), so 4,200 new recipes = 4,200 writes. Batches stay
under `BATCH_LIMIT = 450` (`commitInBatches`): 4,200 recipes = 10 batch commits.

### Days to fill
- 10,200 recipes ÷ 4,200 new/run ≈ **3 runs** to seed the bulk (plus the ~250
  ingredient writes/run early on).
- Manual `workflow_dispatch` back-to-back: **same day** (3 runs × ≤4,500 =
  ≤13,500 writes, still under 20K).
- Scheduled cron (`17 */6 * * *`, 4 runs/day): **< 1 day** to ≥10K, but pace one
  backfill run per day if also doing other writes — never exceed 20K/day total.
- Steady state: re-runs write only changed docs (≈ tens of writes) — effectively
  free.

---

## 3. Checkpointing & resume (`system/backfill_progress`)

A new system doc the backfill writer reads at start and writes at end of every
run. Shape (extends CATALOGUE_10K_DESIGN §5):

```js
// system/backfill_progress
{
  matrixCursor: number,        // index into diet-matrix.json query list (resume point)
  pageCursor: string | null,   // Edamam _links.next URL within the current matrix entry
  urisSeen: string[],          // deduped Edamam recipe URIs across all runs (capped, see below)
  perSourceWritten: { themealdb: number, curated: number, edamam: number },
  perDietWritten: { Vegan: number, Vegetarian: number, ... },  // counts vs §1 floors
  totalUniqueWritten: number,
  writesThisRun: number,       // reset each run; the writer stops at the 4,500 cap
  lastRun: <Firestore Timestamp>,
  complete: boolean            // set true once ≥10,200 AND all floors met
}
```

### Run loop (the Engine's `--mode backfill`)
1. **Load** `system/backfill_progress` (defaults if absent: cursor 0, empty sets).
2. If `complete === true` → run a cheap steady-state re-sync only (contentHash
   diff, near-zero writes) and exit.
3. **Seed-once layers** (only while their floors are unmet):
   - TheMealDB full pull (Layer A) — idempotent, contentHash-diffed.
   - Curated (Layer B) — idempotent, contentHash-diffed.
   These run first; their writes count against the 4,500 budget. On the very
   first run they may consume most of the budget — that is fine, Edamam resumes
   next run from `matrixCursor`.
4. **Edamam backfill** from `matrixCursor`/`pageCursor`:
   - For each matrix entry, paginate via `_links.next` (see §4).
   - Dedupe each URI against `urisSeen`; map → pipeline → recipe doc.
   - **Stop conditions (whichever first):** `writesThisRun` would exceed the
     4,500 cap; the per-tier Edamam page cap is hit (§4); or `totalUniqueWritten
     ≥ 10,200` and all floors met.
5. **Persist** the cursor, `urisSeen`, counters, and `writesThisRun` back to
   `system/backfill_progress`; recompute `facets/global`; write
   `system/last_ingestion`. Exit.
6. Next scheduled run resumes at the saved cursor — no recipe is re-harvested,
   no write budget is wasted re-writing unchanged docs.

### Cap on `urisSeen` growth
`urisSeen` can reach ~10K strings (≈ 0.5–1 MB) — under Firestore's 1 MiB doc
limit but close. **Mitigation:** store `urisSeen` as a content-hashed set
sharded across `system/backfill_seen_{0..3}` (≤ ~2,600 uris each) once it exceeds
6,000 entries; the progress doc keeps only counters + cursors. Each shard is one
write/run only when it changes. This keeps the checkpoint comfortably under the
doc-size limit for the full 10K.

### Atomicity / crash safety
- The cursor is persisted **after** the batch commits succeed, so a crash
  mid-run re-harvests at worst the current matrix entry's page — recipes already
  written are contentHash-skipped (0 extra writes), only dedupe work repeats.
- `concurrency.group: ingest, cancel-in-progress: false` (ingest.yml) already
  serialises runs, so two runs never race the checkpoint.

---

## 4. Edamam rate-limit / tier handling

The current `sources/edamam.js` is a **first-page-only, `random:true`** sampler
(6 fixed queries, `limit≈20`). The Engine upgrades it to a paginated,
matrix-driven, backoff-aware harvester. Required behaviour:

### Tiers & page caps
| Tier | Calls/min | Calls/month | Per-run page cap (this plan) |
|---|---|---|---|
| Free (Developer) | ~10/min | ~10,000/month | 50 pages/run (prototyping only — cannot reach 10K) |
| Paid (Production) | tier-dependent, ≥ ~100/min typical | contractual | **600 pages/run** |

- Edamam returns **≤ 20 hits/page** (`_links.next` paginates, hard cap ~100
  results / 5 pages per *query* on many plans). The matrix's breadth (≈ 30 diets
  × ~11 cuisines × ~5 mealTypes ≈ **1,650 distinct queries**) is what supplies
  volume, not deep pagination of any single query.
- **Per-run page cap = 600** (paid): 600 pages × ~18 usable hits ≈ ~10,800 raw
  hits/run, more than enough raw material to net 4,200 *new* unique writes after
  dedupe. The 4,500 **write** cap (§2) binds first, so the page cap is a safety
  ceiling, not the usual stop.
- `random:false` for the backfill (deterministic pagination); `random:true` is
  only for the legacy sampler.

### Backoff & retries
- On HTTP **429** (rate limit): exponential backoff starting at 2s, ×2 per
  attempt, max 5 attempts, then **pause the run** — persist the cursor and exit
  cleanly so the next scheduled run resumes (never burn the whole budget retrying).
- On HTTP **5xx**: 3 retries with 1s/2s/4s backoff, then skip that query (record
  in `onError`), advance cursor.
- Honour `Retry-After` header when present (use it instead of the computed backoff).
- Pace requests to stay under the tier's calls/min: **min 600 ms between Edamam
  requests** (≤ ~100/min) on paid; **6 s** on free. (Current adapter sleeps 250 ms
  between *queries* only — insufficient; raise to per-request pacing.)
- Monthly-quota guard: if a run sees sustained 429s after backoff, set a
  `system/backfill_progress.edamamThrottledUntil` timestamp and skip Edamam on
  runs before it — the daily cron then only re-syncs cheaply until quota resets.

### Free-tier fallback
Without `EDAMAM_ID`/`EDAMAM_KEY`, `pullEdamam` returns `[]` (already implemented).
Ceiling is then **Layer A + B ≈ 3,000–4,000** (supporter key) or ~2,900 (test
key). The plan's 10K explicitly **requires the paid Edamam tier** — this is
stated as a prerequisite in CATALOGUE_10K_DESIGN §1.

---

## 5. Composite-index additions for diet filtering

`firestore.indexes.json` already declares the single-array-membership indexes
(`dietLabels CONTAINS + popularity`, `healthLabels CONTAINS + popularity`,
`course + dietLabels CONTAINS + popularity`). The 10K diet-filtering UX needs the
following **additions** (Firestore caps a composite index at one array field, so
each free-from/diet filter combination needs its own index):

```jsonc
// ADD to firestore.indexes.json "indexes":

// 1. Free-from filter + popularity (healthLabels are the free-from filters)
{ "collectionGroup": "recipes", "queryScope": "COLLECTION", "fields": [
  { "fieldPath": "healthLabels", "arrayConfig": "CONTAINS" },
  { "fieldPath": "course", "order": "ASCENDING" },
  { "fieldPath": "popularity", "order": "DESCENDING" } ] },

// 2. Cuisine + free-from + popularity
{ "collectionGroup": "recipes", "queryScope": "COLLECTION", "fields": [
  { "fieldPath": "cuisine", "order": "ASCENDING" },
  { "fieldPath": "healthLabels", "arrayConfig": "CONTAINS" },
  { "fieldPath": "popularity", "order": "DESCENDING" } ] },

// 3. Cuisine + diet + popularity
{ "collectionGroup": "recipes", "queryScope": "COLLECTION", "fields": [
  { "fieldPath": "cuisine", "order": "ASCENDING" },
  { "fieldPath": "dietLabels", "arrayConfig": "CONTAINS" },
  { "fieldPath": "popularity", "order": "DESCENDING" } ] },

// 4. Diet + total-time sort (design §121: "(dietLabels CONTAINS, totalTimeMinutes asc)")
{ "collectionGroup": "recipes", "queryScope": "COLLECTION", "fields": [
  { "fieldPath": "dietLabels", "arrayConfig": "CONTAINS" },
  { "fieldPath": "totalTimeMinutes", "order": "ASCENDING" } ] },

// 5. Free-from + total-time sort
{ "collectionGroup": "recipes", "queryScope": "COLLECTION", "fields": [
  { "fieldPath": "healthLabels", "arrayConfig": "CONTAINS" },
  { "fieldPath": "totalTimeMinutes", "order": "ASCENDING" } ] },

// 6. Course + free-from + total-time sort
{ "collectionGroup": "recipes", "queryScope": "COLLECTION", "fields": [
  { "fieldPath": "course", "order": "ASCENDING" },
  { "fieldPath": "healthLabels", "arrayConfig": "CONTAINS" },
  { "fieldPath": "totalTimeMinutes", "order": "ASCENDING" } ] }
```

Notes / constraints:
- **One array field per composite index** is a Firestore hard limit — you cannot
  index `dietLabels CONTAINS` and `healthLabels CONTAINS` together. The UI
  therefore applies **one** array filter server-side (the primary chip) and
  filters the secondary diet/free-from chip **client-side** on the returned page,
  or issues the second as a separate query. `queryRecipes` (CONTRACTS §2) must
  pick the most-selective array filter for the `where()` and post-filter the rest.
- **Index count:** these 6 additions bring the total to **13** composite indexes,
  well under Firestore's 200-per-database limit. No single-field exemptions
  needed (`dietLabels`/`healthLabels` use array-contains, auto-indexed for
  single-clause queries).
- **Facet doc** `facets/diets` (1 read) holds `{ label: count }` for every diet
  in §1 so the filter bar shows counts without a `count()` aggregation per chip.
  Recomputed in the same facet pass as `facets/global` — 1 extra write/run.
- Deploy with `firebase deploy --only firestore:indexes` **before** enabling the
  matrix harvest; index builds on an empty/small collection are instant, on 10K
  they take minutes — build them early.

---

## 6. Run cadence summary (numbers in one place)

| Quantity | Value |
|---|---|
| Total unique target | 10,200 (nets ≥10,000 after verify-rejects) |
| TheMealDB / Curated / Edamam | 1,800 / 2,200 / 6,200 |
| Firestore free cap | 20,000 writes/day |
| Per-run write cap | ≤ ~4,500 |
| New recipes per run | ≤ 4,200 |
| Runs to seed bulk | ~3 |
| Edamam per-run page cap (paid) | 600 |
| Edamam per-request pacing (paid / free) | 600 ms / 6 s |
| 429 backoff | 2s ×2, max 5, then checkpoint-and-exit |
| Matrix size | ~1,650 queries (≈30 diets × ~11 cuisines × ~5 mealTypes) |
| New composite indexes | 6 (total 13) |
| Checkpoint doc | `system/backfill_progress` (+ `backfill_seen_{0..3}` shards) |
| Schedule | `17 */6 * * *` (existing cron); ≤ 1 backfill run/day to respect 20K |
```
