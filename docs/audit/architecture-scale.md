# Larder — Architecture, Scalability & Cost Audit

**Dimension:** Architecture, scalability & cost · **Date:** 2026-06-19 · **Branch:** `main`
**Reviewer scope:** Spark quota vs growth, ingestion robustness/idempotency, data model & denormalisation,
image-generation pipeline, when/if Blaze is justified, auth-drift fragility, multi-batch backfill, failure modes.

Analysis only — no app/source code changed. Every finding cites file:line, a live observation, or a measured number.

---

## 0. Context measured live (the numbers this audit rests on)

- **Live catalogue:** `facets/global.totalRecipes = 1955` (Firestore REST, 2026-06-19). 48 cuisines, 9 courses,
  21 dietLabels, 5 healthLabels.
- **Last cron run:** `system/last_ingestion` — `source: "all"`, `durationMs: 193022` (3m13s), `recipesTotal: 1955`,
  `recipesWritten: 246`, `recipesResolved: 1908`, `ingredientsWritten: 0`, `ingredientsTotal: 685`,
  `errors: []`, finished `2026-06-19T00:25:21Z`.
- **Backfill checkpoint:** `system/backfill_progress` exists but is at zero (`matrixCursor: 0`, `complete: false`,
  all counters 0) — the 10K Edamam driver has **never run** (no keys).
- **Cron cadence:** `.github/workflows/ingest.yml` L11 → `cron: '17 */6 * * *'` = **4 runs/day**, `--source all`.
- **Recipe doc sizes (live sample):** "Aloo gobi" 11,230 B JSON (12 ingredients), "Almond and seed keto crackers"
  6,960 B, "Anchovy… spaghetti" 6,500 B. Curated docs carry an **inline `data:image/svg+xml,…` URI** as `imageUrl`
  (`ingestion/sources/curated.js` L108) — these ship on every query.
- **Images:** 368 generated dish photos on disk (`public/dishes/`, **19 MB**) and in `generated-images.json` (368).
  368/1955 = **18.8%** recipe-photo coverage. `.git` is **21 MB** (the committed binaries dominate it).
- **Matrix size:** `diet-matrix.json` = 20 diets → **930 query cells**; sum of per-diet floors = 14,300 (target ≥10,000 unique).

**Headline:** at 1,955 recipes the architecture is comfortably inside Spark. The risks are (a) the cron's
read/write cost grows **linearly with catalogue size** because every run re-diffs the whole collection, (b) the
client home screen's read fan-out multiplied by users, and (c) operational fragility (auth drift, committed binaries,
no alerting) rather than raw quota. Below, ranked by leverage.

---

## Findings (ranked)

### F1 — Cron read/write cost scales linearly with catalogue size; at 10K it nears the daily caps (P1, Impact 4, Effort M)

**Evidence.** The live cron is `--source all` → `runSinglePass` (`ingest.js` L137). Each run:
- `diffAndWrite(db,'ingredients',…)` → `loadExistingHashes` does `db.collection('ingredients').select('contentHash').get()`
  (`firestore.js` L141) = **~685 doc reads**.
- `diffAndWrite(db,'recipes',…)` → **~1,955 doc reads** (one read per doc even with `.select()` — Firestore bills a
  read per document returned, projection only cuts bandwidth, not read count).
- Writes only the changed docs (`recipesWritten: 246` last run; steady state trends to 0 via contentHash).

So today: **~2,640 reads + ≤246 writes per run × 4 runs/day ≈ 10,560 reads/day, ~1,000 writes/day** from the cron
alone. Against Spark's ~50K reads / 20K writes per day that is fine *now*.

**At the 10K target it changes character.** The diff read is `O(N recipes)`:
`10,000 recipe-diff + ~1,500 ingredient-diff = 11,500 reads/run × 4 = 46,000 reads/day` — **92% of the 50K read quota
consumed by the cron before a single user loads the site.** Worse, `--source mega` (the committed 10K driver,
`ingest.js` L381) adds `scanLiveFacets` = a **second full-collection scan** every run (`facets.js` L81–88), pushing it
to `~21,500 reads/run × 4 = 86,000/day` → **over quota**, which surfaces as failed reads (and a broken site) for the
rest of the day.

**Recommendation (free-tier feasible).**
1. **Drop cron cadence as the catalogue grows.** Once steady-state writes hit ~0, 6-hourly is wasteful. Move to
   `0 4 * * *` (once daily) — cuts cron reads 4×. The data changes at most when *you* push curated sets or run a
   backfill, not 4×/day from upstream.
2. **Gate the recipe diff.** Skip the full-collection diff when the source corpus is unchanged: hash the *source
   payload* (TheMealDB id set + curated file mtimes/contentHash) and short-circuit the whole pass if it matches the
   last run's stored source-hash in `system/last_ingestion`. Steady-state runs then cost ~2 reads, not 2,640.
3. **Don't use `scanLiveFacets` in steady state.** In `mega`/matrix mode, only rescan facets on runs that actually
   wrote recipes; otherwise reuse the existing `facets/global`. Avoids the second full scan.

Uncertainty: the 50K/20K figures are the commonly-cited Spark daily caps; Google has historically not hard-failed the
instant you cross them, but you must not architect on grace. Treat the caps as hard.

---

### F2 — Client home-screen read fan-out multiplies per user and is the real user-facing quota risk (P1, Impact 4, Effort M)

**Evidence.** A single home load fires, in parallel:
- 4 curated rails, each `queryRecipes(…, pageSize: 12)` (`Browse.jsx` L31–64, L130) = **48 reads**.
- 1 `getFacets` (`Browse.jsx` L241) = **1 read**.
- The grid query the moment any filter/search is active: `pageSize = searching ? 48 : 24` (`Browse.jsx` L322) = up to
  **48 reads** per page, more on infinite scroll.

So **~49 reads for a bare home view**, ~97+ once a user filters and scrolls one page. The Basket and ShoppingList
screens then **re-read the same recipe docs twice**: `Basket.jsx` L45–47 `Promise.all(ids.map(getRecipe))` and again
`ShoppingList.jsx` L125–127 — plus `getIngredients` per screen. A 6-meal basket = 6 reads on Basket + 6 on List +
ingredient reads on both.

**Scale math.** 50K reads/day ÷ ~49 reads/home-view ≈ **~1,000 home views/day** before the free read quota is gone —
and that is *with no filtering, no basket, no second page*. Realistic per-session reads of 80–150 put the ceiling at
**~350–600 sessions/day**. That is the true scaling wall, not the catalogue size. When the quota is hit, Firestore
reads start failing and the site shows error/empty states for everyone until the daily reset.

**Recommendation (free-tier feasible).**
1. **Precompute a `home/shelves` doc** (one document holding the 4 rails × 12 cards' display fields). One read replaces
   48. Write it at ingestion time (it changes only when the catalogue does). Biggest single win.
2. **Cache `facets/global` in `localStorage`** with a short TTL (it changes ~daily). Saves 1 read/session and makes the
   filter bar instant.
3. **Hand recipe docs forward** from Browse → Basket → ShoppingList instead of re-fetching by id (the docs are already
   in memory after a click). Eliminates the double-read called out in `OVERHAUL_AUDIT §6.2/§7.2`.
4. **Trim the rail card payload.** Rails only need title/image/badges, but `queryRecipes` returns the *whole* recipe
   doc incl. the embedded `ingredients[]` array (6–11 KB). That is bandwidth, not read-count, but at 48 cards it is
   ~400 KB of JSON per home load — see F4.

This is the highest-leverage area for "more users" and is **entirely free-tier**.

---

### F3 — Recipe docs are heavily denormalised AND carry inline SVG image blobs, inflating every query (P1, Impact 4, Effort M)

**Evidence.** Recipe docs embed the full resolved `ingredients[]` array (CONTRACTS §1) — correct for the meal page and
for `buildShoppingList`, but it means **every list/rail/grid query ships 6–11 KB/doc** even though cards render only
title + image + a few badges. Measured live: Aloo gobi 11.2 KB, keto crackers 6.96 KB.

Worse, curated recipes without a real photo store a **`data:image/svg+xml,…` placeholder inline in `imageUrl`**
(`curated.js` L72/L108). That blob lives *inside the recipe doc* and is downloaded on every query that returns it.
With 1,587 recipes lacking a generated photo (1955 − 368), a large fraction of the catalogue carries an inline SVG in
the hot read path. `OVERHAUL_AUDIT §1.4` flagged this for UX; architecturally it is **read-bandwidth and
doc-size bloat**.

**Recommendation (free-tier feasible).**
1. **Add a lightweight card projection.** Either (a) maintain a parallel `cards/{id}` collection / the `home/shelves`
   doc from F2 with only display fields, or (b) keep one collection but move `ingredients[]` into a subdocument
   (`recipes/{id}/detail/full`) read only on the meal page. Option (a) is simpler and pairs with F2.
2. **Stop storing inline SVG in `imageUrl`.** Emit `imageUrl: null` (or a single shared static placeholder URL) and let
   `RecipeImage`'s onError gradient handle the missing case — it already does (memory: "onError→branded gradient").
   This shrinks ~1,500 docs and removes a per-query blob. Pure ingestion change.
3. Document the denormalisation contract explicitly: "embedded ingredients are for detail + list maths only; never
   read the full doc for a card."

---

### F4 — The image pipeline is a dead end at scale: binaries committed to git, Spark blocks the real fix (P1, Impact 4, Effort M)

**Evidence.** `generateDishImages.mjs` writes JPGs to `public/dishes/{id}.jpg` (L93) and the CI workflow **commits them
to the repo** (`generate-images.yml` L64–70: `git add public/dishes … git push`). On disk: 368 files, **19 MB**;
`.git` is already **21 MB**. The script's own header (L7–9) states the reason: *"Cloud Storage needs Blaze
(unavailable on Spark), so images are saved to public/dishes/ and served keyless by Firebase Hosting."*

This works at 368 images but does not scale:
- **Linear repo bloat.** Full top-500 ≈ 26 MB; 1,955 ≈ ~100 MB; 10K ≈ ~500 MB of binaries in git history forever.
  Every clone/CI checkout pays it; git history can never be slimmed without a rewrite.
- **Firebase Hosting free quota is 10 GB storage / 360 MB-per-day transfer.** 10K images served as full JPGs (even
  WebP-transcoded via wsrv.nl at the edge) can exhaust the **360 MB/day egress** quickly once traffic grows — and wsrv
  fetches the *origin* JPG from Hosting on a cache miss, so origin egress still counts.
- **Generation throughput is the binding constraint.** The script paces to ~7–8 generations/min (`--interval 8000`,
  `generate-images.yml` L24) with a 350-min CI timeout (L36) → **~2,800 images per CI run max**, and the rate-limit
  gotcha (memory) means it is fragile. 10K images = several multi-hour CI runs.

**Recommendation.**
1. **Free-tier:** keep committing images **but stop letting it grow unbounded** — cap at the top-N most-popular
   (e.g. 500–800) that drive the rails/home, and let the long tail fall back to the `RecipeImage` gradient. Track
   coverage as a metric. Consider a separate `larder-images` git repo or git-LFS so the app repo stays lean.
2. **If/when Blaze (see F8):** move images to Cloud Storage + the Firebase image-resize extension or a real CDN; the
   per-image storage cost is ~£0.02/GB/month — **a few pence/month for 10K images**. This is the cleanest fix and the
   *first* thing Blaze unlocks. Until then, the committed-binaries approach is a deliberate, documented Spark
   workaround — acceptable short-term, untenable at 10K.
3. **Idempotency is good** (the script skips already-generated ids, L101; `generated-images.json` is the resumable map
   applied at `buildRecipe.js` L255) — keep that.

---

### F5 — Deploy auth-drift is an unmonitored single point of failure (P1, Impact 4, Effort S)

**Evidence.** Memory `larder-gcloud-firebase-token.md`: the Firebase CLI active account **drifts** from
`dbayft@gmail.com` to the work account `daniel.bracher@areyoufaster.com`, which has no access to `larder-dbayft`, so
`firebase deploy` 403s (hosting + `firestore:indexes`). The service account **cannot** substitute (it only has
`datastore.user`). This means: **rules and index changes, and every hosting deploy, depend on one human-interactive
Google login that silently breaks.** Concretely, the project README/memory note that **diet composite indexes are
committed but were blocked from deploying** by this drift, and the `mega` cron switch sits unmerged on a branch because
push-to-main was blocked in an unattended run.

**Why it is architecturally serious.** The *data path* is robust (service account, CI). The *deploy path* is not, and
it is the path that ships index changes — without which the new diet filters silently drop filters (`queryRecipes.js`
L137–149 fallback). A scaling event (10K recipes needing new indexes) collides with the most fragile link.

**Recommendation (free-tier feasible).**
1. **Move deploys into CI with a non-drifting credential.** Use a **Google service account with the
   `firebasehosting.admin` + `firebaserules.admin` + `datastore.indexAdmin` roles** and `firebase deploy` via
   `--token`/`GOOGLE_APPLICATION_CREDENTIALS` in a GitHub Action. CI never "drifts." This removes the human login from
   the critical path entirely. (Granting those roles is free; it is an IAM change, not Blaze.)
2. Until then, add a **pre-deploy guard** script: `firebase login:list` / assert active account == `dbayft@gmail.com`
   and fail loudly with the fix command. Cheap insurance.
3. Deploy the **already-committed composite indexes** ASAP — they are the difference between honest and silently-wrong
   filters at scale (see F7).

---

### F6 — No failure alerting on the cron, the backfill, or quota exhaustion (P1, Impact 4, Effort S)

**Evidence.** `keepalive.yml` exists precisely because *"GitHub… never emails you when a scheduled run fails"* (L3–4).
The cron records errors into `system/last_ingestion.errors` (capped 50, `ingest.js` L233) but **nothing reads or alerts
on it**. There is no monitoring of: a failed run, a stale `finishedAt` (cron silently disabled after 60 days inactivity —
the keepalive only *mitigates*, doesn't *detect*), Firestore quota exhaustion (reads start failing site-wide), or the
backfill stalling on a throttle (`edamamThrottledUntil`, `backfill.js` L33). Known issue list confirms: *"the cron has
no failure alerting beyond a red run."*

**Failure modes that go silent today:**
- Cron disabled / not running → catalogue silently frozen; `finishedAt` goes stale, nobody knows.
- Read quota hit → every client read fails → site looks broken to all users until midnight PT reset.
- Backfill throttled → `complete` never reaches true; progress silently stalls.

**Recommendation (free-tier feasible).**
1. **Add a freshness check.** A tiny scheduled Action (or the client itself) reads `system/last_ingestion.finishedAt`;
   if older than, say, 36h, post to a free webhook (Slack/Discord/email-via-Action). ~free.
2. **Alert on non-empty `errors[]`** at the end of each cron run (the array is already populated).
3. **Client-side quota signal:** when reads start failing with `resource-exhausted`, show an honest banner and beacon
   it (ties to the "no analytics" known issue). At minimum log it.

---

### F7 — Index coverage will not survive 10K filtering; missing composites silently drop filters (P1, Impact 4, Effort M)

**Evidence.** `firestore.indexes.json` declares 10 composites: single-filter + `course+diet`, `cuisine+health`,
`course+health`, `diet+time` etc. But `queryRecipes.planQuery` (L127–149) has **no composite for cuisine+diet,
freeFrom+anything-but-pop, or any 3-filter combo**, so it **drops filters** and reports them via `appliedFallback` —
which `OVERHAUL_AUDIT §2.2` confirms the Browse screen *ignores*. At 1,955 recipes a dropped filter returns a
plausible-looking (wrong) page. At 10K, "Vegan + Gluten-free + Italian" returning Italian-only is a **trust break for
the constrained-eater audience the 10K plan explicitly targets** (`CATALOGUE_10K_DESIGN §6`: "accuracy is the whole
relationship").

The 10K design (§5) *names* the needed new indexes (`healthLabels CONTAINS + popularity`, `cuisine + healthLabels +
popularity`, etc.) — they are designed but **the file does not yet contain all of them, and even committed ones may be
undeployed** (F5). Each composite index also has a small ongoing storage cost and **slows writes** (every write updates
every matching index) — relevant to the backfill write budget.

**Recommendation (free-tier feasible).**
1. **Add the high-value composites** the real filter UI offers (cap at the combinations actually selectable; don't
   index the full cartesian product — index storage + write amplification grow with it).
2. **Finish client-side narrowing** for the long-tail combos: over-fetch the most selective single-index page, then
   filter in memory on the dropped keys (`queryRecipes` already exposes `appliedFallback`). Free, and handles the tail
   that indexes can't.
3. **Deploy them** (blocked on F5).

---

### F8 — When is Blaze justified, and what does it actually cost? (P2, Impact 3, Effort S — decision)

**Evidence & analysis.** The whole architecture is a set of clever Spark workarounds: ingestion off-Firebase (Functions
can't do outbound), images committed to git (no Cloud Storage), client-side maths (no server). These hold to ~a few
thousand recipes and ~hundreds of sessions/day. Blaze becomes justified at the **intersection of three triggers**:

| Trigger | Spark ceiling hit | What Blaze unlocks | Rough cost |
|---|---|---|---|
| Image hosting at 10K | 10 GB storage / 360 MB-day egress; git bloat | Cloud Storage + resize extension / CDN | **~£0.02/GB-mo storage** + egress ~£0.10/GB; 10K images ≈ pennies–£1/mo at low traffic |
| Read quota at scale | 50K reads/day (~350–600 sessions, F2) | pay-as-you-go reads | Firestore reads **~£0.04 per 100K**; even 1M reads/day ≈ **~£0.36/day** |
| Server-side SEO/OG/prerender | no Functions outbound | Cloud Functions / Cloud Run prerender | Functions free tier huge; cents/mo |

**The cost of Blaze is genuinely small** for this workload — Firestore reads at £0.04/100K and Storage at £0.02/GB/mo
mean a successful Larder (say 5K sessions/day, 10K images) costs **single-digit £/month**, not hundreds. The real
reasons to stay on Spark are (a) no card on file is a hard product constraint stated upfront, and (b) avoiding a
runaway-bill foot-gun (a scrape/loop hammering reads). 

**Recommendation.**
1. **Stay Spark for v1** — correct given the constraint and current scale. The free-tier mitigations (F1–F3) buy a lot
   of headroom.
2. **Pre-write the Blaze migration runbook now** (storage move for images, budget alert + hard cap, the IAM for CI
   deploy). The single most valuable thing Blaze unlocks first is **image hosting** (F4), then **read headroom** (F2).
3. **If Blaze is ever enabled, set a billing budget + alert immediately** (free) to neutralise the runaway-bill risk —
   that risk, not the cost, is the real objection.

---

### F9 — The 10K backfill is well-designed but unproven and front-loads write-quota risk (P2, Impact 3, Effort M)

**Evidence.** The checkpointed driver is genuinely good engineering: cursor + sharded `seen[]` set
(`backfill.js` L70–108, shards past 6,000 URIs), per-run write cap (`PER_RUN_WRITE_CAP = 4200`, `ingest.js` L59),
contentHash makes re-syncs near-free, checkpoint persisted *after* commit (L369–377), throttle handling sets a 24h
cooldown (L363–366), and there is a `backfillDriver.test.js`. **But it has never run** (`backfill_progress` all-zero,
live) and several scaling assumptions are untested against reality:

- **Per-run write budget vs the facet rescan.** Matrix mode calls `scanLiveFacets` (full read of all recipes) *every
  run* on top of the diff — at 10K that's ~20K reads/run (F1), independent of the 4,200 *write* cap.
- **Write amplification from indexes.** Every recipe write also writes each matching composite index entry; the 4,200
  cap counts document writes, but Firestore bills index writes too — the effective write count per recipe is higher,
  so "4,200 leaves >15K head-room" (`ingest.js` L57) may be optimistic at full index coverage.
- **The `seen[]` set is loaded entirely into memory and re-written** each run (`backfill.js` L44–57, L70–107). At
  ~10K+ URIs across 4 shards this is fine, but it's 4 extra reads + up to 4 writes/run, and the sharding threshold
  (6,000) is a guess at the 1 MiB doc limit.

**Recommendation.**
1. **Smoke-test the backfill on a tiny `--limit`** before trusting it at scale (the CLI supports it, `ingest.js`
   L97/L248) — verify cursor resume, dedup across runs, and the real per-run *billed* write count (docs + index
   entries) against the cap.
2. **Decouple the facet rescan from every run** (F1.3) so matrix runs don't pay a full read scan when they wrote nothing
   new.
3. **Measure index-write amplification** once the new composites are deployed and adjust `PER_RUN_WRITE_CAP` down if a
   recipe write fans out to many index writes.

---

### F10 — Idempotency is strong; two correctness edges to watch (P2, Impact 3, Effort S)

**Evidence.** Idempotency is a genuine strength: `contentHash` excludes volatile fields (`firestore.js` L108–111),
`stableStringify` sorts keys recursively (L115–130), so a re-run with identical data writes nothing — confirmed live
(`ingredientsWritten: 0` last run; steady-state recipe writes trend down). `set(merge:false)` fully replaces docs
(L187), avoiding orphan fields. This is the right model.

**Two edges:**
1. **`serverTimestamp()` inside the hashed payload would break idempotency** — it doesn't (it's stamped *outside* the
   hash, L165), but the pattern is fragile: any future field that uses `Date.now()`/`serverTimestamp()` *inside* `data`
   would make every run rewrite every doc and silently blow the write quota. Add a test/assert that `contentHash` is
   stable across two builds of the same source.
2. **No deletion / tombstoning.** `diffAndWrite` only upserts (L156–176). A recipe removed upstream (TheMealDB delist,
   curated file deleted) **stays in Firestore forever** — the catalogue can only grow, and stale/duplicate docs
   accumulate. At 10K with churn this matters. Recommend a reconcile pass: docs whose id isn't in the current desired
   set get a `retired: true` flag (filtered out client-side) or deletion, run occasionally, not every cron.

---

### F11 — Curated recipe doc-id double-prefix is a latent dedup/cost hazard (P3, Impact 2, Effort S)

**Evidence.** Memory: *"Curated recipe doc-ids double-prefix (`curated-curated-<slug>`) — cosmetic, never
user-visible."* It is cosmetic for display, but doc-ids are the **dedup and diff key** (`diffAndWrite` keys on id).
If any code path ever computes the id with a single prefix, it will create a *duplicate* doc instead of updating the
existing one — doubling that recipe and spending a write. With dedup across sources merging dietLabels
(`sources/curated.js` auto-discovery, per memory), an id-derivation inconsistency is exactly the kind of bug that
silently inflates the catalogue and write count.

**Recommendation.** Normalise the id derivation in one helper, assert the prefix is applied exactly once, and add a
one-off scan for any `curated-<slug>` (single-prefix) docs already live. Low effort, removes a class of duplicate-write
bugs before 10K.

---

### F12 — Hosting/transfer and bundle weight are an under-tracked cost axis (P3, Impact 2, Effort S)

**Evidence.** `OVERHAUL_AUDIT §11.1`: `firebase-*.js` 420 KB + `index-*.js` 210 KB + 42 KB CSS = ~672 KB JS/CSS
uncompressed, plus three font families. Firebase Hosting free transfer is **360 MB/day**. At ~700 KB+fonts+images per
fresh visit, **~500 cold visits/day can approach the transfer cap** before counting the 19 MB of dish images (cached
hard via `firebase.json` immutable headers, good — but first views pay). This is a *cost/quota* axis, not just perf.

**Recommendation (free-tier feasible).** Lazy-load route chunks (`React.lazy` for Meal/Basket/List/Sources), trim font
weights / self-host woff2 (already immutably cached per `firebase.json`), and confirm Brotli is served. Each cuts
per-visit transfer and extends the free-tier session ceiling. Pairs with F2's read reductions.

---

## Highest-leverage move (this dimension)

**Precompute a single `home/shelves` document at ingestion time and read it once on the home screen, and add a
lightweight card projection so list/rail/grid queries stop shipping full 6–11 KB recipe docs (F2 + F3).**

Rationale: the binding scaling constraint is not catalogue size — it is **client reads × users** (F2: ~350–600
sessions/day before the 50K read quota is exhausted, with a bare home view already costing ~49 reads). Collapsing the
home read fan-out from ~49 to ~1–2 and shrinking the per-card payload is **pure free-tier work**, requires no Blaze, no
new infra, and multiplies the number of users Larder can serve on Spark by an order of magnitude. It also directly
mitigates the transfer-quota axis (F12) and pairs naturally with killing the inline-SVG blob (F3.2). Everything else
(backfill, images, Blaze) is downstream of first surviving real traffic on the free tier.

---

## Strengths to preserve (do not regress)

- **contentHash idempotency** (`firestore.js` L108–130) — re-runs are near-free; verified `ingredientsWritten: 0` live.
- **Ingestion off-Firebase via Admin SDK in CI** — the correct response to the Spark outbound block; the *data* path is
  robust and account-drift-immune.
- **Checkpointed, sharded, throttle-aware backfill design** (`backfill.js`, `ingest.js` runMatrix) — genuinely
  well-engineered; just unproven and read-heavy on facets.
- **Per-meal error isolation** — one bad recipe/network error never aborts the run (`ingest.js` L200–209, L243–246).
- **Public-read/deny-write rules** (`firestore.rules`) with a future auth-gated `meal_plans` path already scoped.
- **Resumable, idempotent image generator** with a committed id→url map surviving re-ingestion (`buildRecipe.js` L255).
