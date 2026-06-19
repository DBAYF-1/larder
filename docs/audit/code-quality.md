# Larder audit — Code quality, testing & reliability

Auditor dimension: **Code quality, testing & reliability**
Scope: test coverage beyond `buildShoppingList`; error handling & edge cases; type-safety;
lint/format/CI; dead code; consistency; the build; ingestion-script resilience.
Date: 2026-06-19. Method: static read + `npm test` + `npm run build` + grep/usage tracing.
Constraint baseline: Firebase **Spark** (no Cloud Functions outbound, no Storage/Blaze,
~50K reads / 20K writes per day, Hosting only). All recommendations respect this unless flagged.

## Snapshot (measured)

| Metric | Value | Evidence |
|---|---|---|
| `npm test` result | **65 passed (2 files)** | all in `src/lib/format.test.js` (22) + `buildShoppingList.test.js` (43) |
| `npm run build` result | **OK, 723 ms**, 4 chunks | `firebase` chunk 429.88 kB (107 kB gzip), app 226.92 kB (72 kB gzip) |
| Test files in repo | 3 | `src/lib/*.test.js` ×2 + `ingestion/lib/backfillDriver.test.js` ×1 |
| Test files actually executed by any command | **2** | vitest `include: ['src/**/*.test.{js,jsx}']` excludes ingestion; ingestion has no test script |
| App source LOC | ~5,646 | `find src -name '*.js*' | xargs wc -l` |
| Ingestion source LOC (excl. tests/node_modules) | ~58,757 (incl. ~11k data dict, ~36k JSON-ish data) | `find ingestion ...` |
| Untested critical pipeline LOC | ~1,980 | `ingestion/pipeline/*.js` (parse/resolve/normalise/units/synonyms/buildRecipe/ingredientsDoc) |
| ESLint / Prettier config | **none** | no `.eslintrc*`, `eslint.config.*`, `.prettierrc`; not in either `package.json` |
| TypeScript | **none** (0 `.ts`/`.tsx`) | JS + JSDoc only |
| CI that runs tests/lint/build | **none** | `.github/workflows/*` run only `npm install` + node scripts |

The pure-logic core (`buildShoppingList` + `format`) is genuinely well tested and deterministic
(no Firebase/Date.now in the algorithm — see CONTRACTS.md §2). That is the project's strength.
Everything **around** it — the query planner, all 5 screens, all 20+ components, and the entire
~2k-line ingestion pipeline — has **zero automated coverage**, and there is no lint/format/CI/type
safety net. The findings below are ranked by leverage.

---

## Findings (ranked)

### 1. `appliedFallback` is computed but never consumed → filters silently dropped, wrong results shown
- **Severity: P1** · **Impact: 5** · **Effort: S**
- **Evidence:** `src/lib/queryRecipes.js:139-149,182` returns `appliedFallback` whenever a filter
  combination has no composite index (e.g. `cuisine`+`diet`, `freeFrom`+`course`, any 3-filter set).
  It keeps the single most-selective filter and **drops the rest**. CONTRACTS.md §2 / the file header
  (lines 19-23) state the explicit contract: *"report the dropped filters via `appliedFallback` so the
  UI can finish the narrowing client-side (and tell the user honestly)."* But a grep shows the only
  references to `appliedFallback` / `droppedFilters` are inside `queryRecipes.js` itself — **no screen
  reads it.** `src/screens/Browse.jsx:380-383` computes `visibleGrid = searching ? gridRecipes.filter(matchesSearch) : gridRecipes`,
  and `matchesSearch` (lines 293-303) only matches **title + cuisine**, never `diet`/`freeFrom`/`course`.
- **Impact:** A user who picks, say, *Vegetarian + Italian* or *Gluten-free + Dinner* sees a grid that
  silently includes meals violating one of their selected filters, with no notice — a correctness and
  trust bug, and it directly undermines the app's core "honest filtering" promise. Worse for the
  free-from (allergen-adjacent) filters: a coeliac selecting Gluten-free + a course could be shown
  non-gluten-free meals.
- **Recommendation:** Either (a) in `Browse.jsx`, when `res.appliedFallback.length > 0`, re-apply the
  dropped predicates client-side on the loaded page (`dietLabels.includes`, `healthLabels.includes`,
  `cuisine ===`, `course ===`) AND surface a one-line "showing closest matches" note; or (b) add the
  missing composite indexes for the common pairs (cuisine+diet, freeFrom+course) to
  `firestore.indexes.json` (free on Spark) so fewer combinations fall back. Do both: index the common
  pairs, client-narrow the long tail, and tell the user. Add a `queryRecipes` planner test (see #2)
  asserting `droppedFilters` for each combination so the contract can't silently rot again.

### 2. The query planner (`planQuery`) — pure, branchy, index-coupled — has zero tests
- **Severity: P1** · **Impact: 4** · **Effort: S**
- **Evidence:** `src/lib/queryRecipes.js:53-150` is a pure function with ~10 branches mapping filter
  combinations to composite indexes, plus a selectivity-ranked fallback. No `queryRecipes.test.js`
  exists (`ls` confirms). It is exactly the kind of pure, high-branch logic vitest excels at — and a
  wrong branch produces a Firestore "missing index" runtime error (hard failure) or silently wrong
  results (finding #1).
- **Impact:** Every index decision is unverified; a refactor or an index removal in
  `firestore.indexes.json` would not be caught until a real user hits the broken combination in
  production (no error tracking — see #9).
- **Recommendation:** Factor `planQuery` into its own export (it currently isn't exported) and write a
  table-driven test: for each of the 7 declared indexes plus the no-filter and fallback cases, assert
  `{wheres, orderField, orderDir, droppedFilters}`. Add an assertion that every `(wheres, orderBy)`
  combination the planner can emit corresponds to an index present in `firestore.indexes.json` (parse
  the JSON in the test) — this turns "planner vs declared indexes" drift into a failing test. ~2 hours,
  pure, no Firebase needed.

### 3. The entire ingestion pipeline (~2k LOC) is untested; the *only* ingestion test covers dead code
- **Severity: P1** · **Impact: 4** · **Effort: M**
- **Evidence:** `ingestion/pipeline/` has no `*.test.js` (parse.js 482 LOC, synonyms.js 357,
  ingredientsDoc.js 295, buildRecipe.js 292, normalise.js 191, resolve.js 174, units.js 174). These do
  fraction/range parsing, imperial→metric conversion, UK↔US synonym mapping, canonical resolution, and
  allergen/nutrition derivation — the correctness of *every recipe document* depends on them, and they
  feed the (well-tested) `buildShoppingList`. The single ingestion test,
  `ingestion/lib/backfillDriver.test.js`, exercises `backfillDriver.js` — which (see #4) **is never
  imported by `ingest.js`** and is dead. So the test suite's ingestion coverage is exactly the one
  module that production never runs.
- **Impact:** A parsing/units/synonyms regression corrupts quantities, units, or aisle placement
  across the catalogue with nothing to catch it; the shopping-list maths is only as correct as its
  (untested) inputs.
- **Recommendation:** Add vitest (or keep `node:test`) coverage for the pure pipeline stages — start
  with `units.js` (conversion table is the highest-leverage, lowest-effort) and `parse.js`
  (fractions/ranges/"1 (12 oz.)" from CONTRACTS.md §6), then `resolve.js` exact→synonym→fuzzy. These
  are pure and need no network. Wire them into a runnable command (see #5).

### 4. Dead parallel implementation: `backfillDriver.js` + its tested helpers are never used by `ingest.js`
- **Severity: P2** · **Impact: 3** · **Effort: S**
- **Evidence:** `ingest.js:48` imports `loadProgress`/`saveProgress` from `./lib/backfill.js` and uses
  a **local** `writeCappedDocs` (ingest.js:436-450) for the capped backfill. Meanwhile
  `ingestion/lib/backfillDriver.js` exports `runBackfill`/`matrixQueryCount` and uses
  `makeWriteBudget`/`diffAndWriteCapped` from `firestore.js` — a **second, independent** capped-write
  implementation. Grep confirms `runBackfill`/`matrixQueryCount`/`backfillDriver` are imported nowhere
  outside `backfillDriver.test.js`. Likewise `firestore.js` exports `makeWriteBudget`,
  `diffAndWriteCapped`, `DEFAULT_WRITE_CAP`, `getTimestampClass`, `ensureFieldSentinels` — all used
  only by the dead driver and its test.
- **Impact:** Two divergent quota-budget code paths invite confusion and bit-rot; the per-run write
  cap is enforced in `ingest.js` (`PER_RUN_WRITE_CAP=4200`) by code that has **no test**, while the
  tested cap logic (`DEFAULT_WRITE_CAP=4500`) is dead. The caps even disagree (4200 vs 4500). Anyone
  trusting the green ingestion test is testing the wrong thing.
- **Recommendation:** Pick one. Either (a) migrate `ingest.js` to call the tested
  `runBackfill`/`diffAndWriteCapped` path and delete the inline `writeCappedDocs`, gaining test
  coverage of the *real* path; or (b) delete `backfillDriver.js`, its test, and the unused
  `firestore.js` exports, then write a test for the inline `writeCappedDocs`. Option (a) is preferred —
  it converts dead test value into live coverage of the quota-critical path.

### 5. No test command runs the ingestion suite; `npm test` silently skips it
- **Severity: P1** · **Impact: 4** · **Effort: S**
- **Evidence:** Root `vite.config.js:17-20` sets `test.include: ['src/**/*.test.{js,jsx}']`, so
  `npx vitest run ingestion/lib/backfillDriver.test.js` prints *"No test files found, exiting with
  code 1."* `ingestion/package.json` has **no `test` script and no vitest/test-runner dependency**
  (only `firebase-admin`). The ingestion test uses `node:test`/`node:assert` (verified: 3 hits for
  `node:test|node:assert`), runnable only via `node --test`, which nothing invokes. Net: the test
  exists but is never executed by any command, CI or local.
- **Impact:** Ingestion has the *appearance* of coverage (a `.test.js` in the tree) but zero of it
  actually runs — a false sense of safety, and the dimension's stated "65 vitest tests" overstates
  protection of anything outside `src/lib`.
- **Recommendation:** Add an ingestion test command and run it. Cheapest: add
  `"test": "node --test"` to `ingestion/package.json`. Cleaner: standardise on vitest, broaden the
  root `include` to `['src/**/*.test.{js,jsx}', 'ingestion/**/*.test.js']`, and convert the one
  `node:test` file. Then wire `npm test` (+ ingestion test) into CI (#6).

### 6. No CI gate: nothing runs tests, lint, or the build before deploy
- **Severity: P1** · **Impact: 4** · **Effort: M**
- **Evidence:** `.github/workflows/` has only `ingest.yml`, `generate-images.yml`, `keepalive.yml`.
  None run `npm test`, `npm run build`, or any linter (grep for `npm test|vitest|lint|build`). Deploys
  to Hosting are manual (`firebase deploy`, per MEMORY's "CLI login drifts to a work account and breaks
  deploys"). So a commit that breaks the build or the 65 tests can be deployed with nothing to stop it;
  even the well-tested core has no enforcement.
- **Impact:** The one real safety net (65 passing tests + a working build) is purely advisory. Combined
  with no lint/types and no error tracking, regressions reach production unobserved.
- **Recommendation:** Add a `ci.yml` on push/PR: `npm ci` → `npm test` → `npm run build` (and the
  ingestion test once it runs, #5). All free on GitHub-hosted runners. Optionally add a
  preview/deploy-on-green job using the existing Firebase token (MEMORY: reuse the Firebase CLI token)
  to also fix the manual-deploy/account-drift pain. This is the single highest-leverage reliability
  move — it makes every other test in the repo actually load-bearing.

### 7. No linter or formatter despite `eslint-disable` directives in the code
- **Severity: P2** · **Impact: 3** · **Effort: S**
- **Evidence:** No ESLint/Prettier config anywhere. Yet the code carries directives that imply one was
  expected: `src/components/ErrorBoundary.jsx:18` (`eslint-disable-next-line no-console`),
  `src/screens/Basket.jsx:113` and `src/screens/ShoppingList.jsx:171`
  (`eslint-disable react-hooks/exhaustive-deps`). Those `exhaustive-deps` suppressions are exactly the
  bug-prone spots a real `eslint-plugin-react-hooks` would police (intentional dependency omissions
  that can stale-close over state). With no linter installed, the suppressions are no-ops and the rule
  never runs.
- **Impact:** No automated guard against unused vars, accidental globals, missing hook deps, or the
  no-hardcoded-hex rule from CONTRACTS.md (line 24 — currently only enforced by code review). Style
  drift and a class of React hook bugs go uncaught.
- **Recommendation:** Add ESLint flat config with `@eslint/js`, `eslint-plugin-react`,
  `eslint-plugin-react-hooks`, and a custom/no-restricted rule (or `stylelint`) banning hex colours per
  CONTRACTS.md. Add Prettier for format consistency. Add `npm run lint` and run it in CI (#6). Audit
  the three `exhaustive-deps` suppressions: confirm each is genuinely safe (the `recipeIdsKey`/
  `routeKey` patterns look deliberate, but `Browse.jsx` deps should be re-verified).

### 8. No type safety: contract-shape mismatches survive as defensive dead code
- **Severity: P2** · **Impact: 3** · **Effort: L (if migrating) / S (if checkJs)**
- **Evidence:** Pure JS + JSDoc, no TypeScript (0 `.ts`/`.tsx`). The cost is visible:
  `getIngredients` (queryRecipes.js:218-235) is documented and implemented to return a
  `Record<string,object>` (a map), but **both** call sites defensively handle it as if it might be an
  array — `ShoppingList.jsx:149-155` (`if (Array.isArray(docs)) … else …`) and the comparable handling
  there. The array branch is unreachable dead code that exists only because there is no type to assert
  the contract. A `tsc --checkJs` would flag this and the prop contracts in CONTRACTS.md §4 are
  otherwise unenforced.
- **Impact:** Shape drift between the Firestore contract (CONTRACTS.md §1), the lib wrappers, and the
  components is caught only at runtime (or not at all); defensive `?.`/`Array.isArray` guards
  proliferate and obscure real intent.
- **Recommendation:** Lowest-cost win: add `// @ts-check` / a `jsconfig.json` with
  `"checkJs": true, "strict": true` and run `tsc --noEmit` in CI — it leverages the *existing* JSDoc
  (CONTRACTS.md and queryRecipes are already richly annotated) with no migration. It will immediately
  flag the `getIngredients`-as-array dead branches. Full `.ts` migration is a larger investment; checkJs
  captures most of the value at S effort. After it's green, remove the unreachable array branches in
  `ShoppingList.jsx`.

### 9. No error tracking / monitoring; failures are invisible in production
- **Severity: P2** · **Impact: 4** · **Effort: M**
- **Evidence:** `ErrorBoundary.jsx:17-22` only `console.error`s — there is no Sentry/logging sink (and
  MEMORY confirms "no analytics/monitoring/error-tracking"). Screens swallow fetch failures into
  generic UI states (e.g. `Browse.jsx:135-137,336-338` `.catch(() => setError(true))`,
  `ShoppingList.jsx:157-162` `catch { setIngredients({}); setStatus('ready') }`). The ingestion cron's
  only failure signal is a red GitHub run (MEMORY: "no failure alerting beyond a red run");
  `ingest.yml` has no failure notification (grep: none).
- **Impact:** A Firestore-rules change, an index removal (#2), a quota exhaustion, or a corrupt recipe
  produces a silent empty state for users and a silent partial-write for ingestion. There is no way to
  know it happened. Note `ShoppingList.jsx:157-162` swallowing the ingredients fetch error sets
  `status:'ready'` with `{}` ingredients — the list then renders with everything in the
  "Check these yourself" appendix, looking like a data bug rather than a transient failure, with no log.
- **Recommendation:** Add a free client error sink (Sentry free tier, or a tiny Firestore
  `system/client_errors` collection write from `componentDidCatch` — note: Firestore rules are
  read-only for clients, so a writeable error path would need a rules carve-out or an external sink;
  prefer Sentry free tier to stay within Spark). For ingestion, add a failure step to `ingest.yml`
  (`if: failure()`) that posts to a webhook/email — free on Actions. Distinguish "empty" from "failed"
  in the swallow-all catches so users (and you) can tell the difference.

### 10. Pollinations image-generator: a worker crash silently drops dishes; failures only counted
- **Severity: P2** · **Impact: 3** · **Effort: S**
- **Evidence:** `ingestion/scripts/generateDishImages.mjs:104-122`: `worker()` wraps each dish in
  `try/catch (e) { failed += 1 }` — the error object `e` is captured but never logged, so a systematic
  failure (bad key, API change, all-429) is indistinguishable from sporadic ones; you only see a
  rising `failed` count. The map is persisted every 5 successes (line 116) but **not** in a `finally`,
  so if a worker throws *outside* `generate()` (e.g. `writeFileSync` ENOSPC at line 93/116) the
  in-flight map progress since the last flush is lost. `generate()` validates `buf.length < 1500`
  (line 92) but does not validate content-type, so an HTML error page ≥1500 bytes could be written as a
  `.jpg`. There are no tests for any of this (it's a one-shot `.mjs`, hard to test as written).
- **Impact:** Image coverage is already the project's known weak spot (~132 of top 500 ungenerated per
  MEMORY); a silent failure mode in the generator makes diagnosing *why* coverage stalls harder, and a
  bad-content write would ship a broken `.jpg` that only `RecipeImage`'s onError fallback masks.
- **Recommendation:** Log the first N failure reasons (status/message), not just a count; verify
  `res.headers.get('content-type')` starts with `image/` before writing; flush the map in a `finally`
  per worker (or atomically via temp-file rename). These are S-effort and make the CI-driven generator
  observably resilient. The retry/backoff logic itself (lines 78-96) is sound.

### 11. `Promise.all` fan-out reads have no concurrency cap → quota-burst risk on the read budget
- **Severity: P3** · **Impact: 2** · **Effort: S**
- **Evidence:** `getIngredients` (queryRecipes.js:224-226) fires one `getDoc` per unique ingredient id
  **in parallel** via `Promise.all`. `ShoppingList.jsx:125-131` also `Promise.all`s one `getRecipe` per
  basketed recipe. A large basket (up to many recipes) referencing dozens of unique ingredients issues
  dozens of simultaneous document reads against the ~50K reads/day Spark cap. Offline persistence
  (firebase.js:27-31) mitigates repeat reads, but a first-time large list still bursts.
- **Impact:** Low for typical baskets, but no upper bound exists; combined with no monitoring (#9) a
  power user could quietly chew through the daily read quota and degrade the app for everyone with no
  signal. (Genuinely uncertain how large real baskets get — flagging as bounded risk, not a known
  incident.)
- **Recommendation:** Cap fan-out concurrency (a small p-limit-style helper, ~10 LB lines, no
  dependency) and/or batch ingredient reads. Cheap insurance against an unbounded read pattern. Low
  priority given persistence + small expected baskets.

### 12. Mixed test frameworks and minor consistency drift across the codebase
- **Severity: P3** · **Impact: 2** · **Effort: S**
- **Evidence:** `src/lib/*.test.js` use **vitest**; `ingestion/lib/backfillDriver.test.js` uses
  **node:test/assert** — two frameworks, neither wired to run the other's tests (#5). File-extension
  convention is inconsistent-by-design but undocumented for newcomers: `basket.js` is `.js` and uses
  `createElement` to avoid a JSX loader (good, and commented), while components are `.jsx`. The
  `mealdbIngredientUrl` title-casing logic (ShoppingList.jsx:24-33) duplicates concerns also handled in
  ingestion; image-URL/optimize logic lives in `RecipeImage.optimize` but ingredient-URL derivation is
  inline in the screen. Inline SVGs are repeated across `Browse.jsx` rather than shared.
- **Impact:** Friction for contributors and minor duplication; no correctness impact.
- **Recommendation:** Standardise on one test runner (vitest, per #5). Extract repeated inline SVGs to
  a tiny `Icon` component. Move `mealdbIngredientUrl` next to `optimize` (both are image-URL helpers).
  Document the `.js`-vs-`.jsx` rule in CONTRACTS.md. All cosmetic — bundle with the lint/format work
  (#7).

---

## Highest-leverage move for this dimension

**Add a CI gate (`ci.yml`: `npm ci` → `npm test` → `npm run build`) and make the existing tests
actually load-bearing — then immediately fix #1 (consume `appliedFallback`) and #5 (run the ingestion
test).** The project already has a strong, deterministic test core (65 green) and a clean build; today
nothing enforces them and the *one* ingestion test runs nowhere while exercising dead code. CI is free
on GitHub runners (within Spark constraints — no Firebase resources needed), converts every existing
test into a real guardrail, and creates the hook into which the planner tests (#2), pipeline tests
(#3), lint (#7), and `tsc --checkJs` (#8) can all be added incrementally. Pair it with the
`appliedFallback` fix because that is the one finding here that is actively producing **wrong,
trust-eroding results in production** (filters silently violated) and costs only S effort.

## Notes on uncertainty / what is genuinely good

- **Genuinely solid:** the pure algorithm core (`buildShoppingList` + `format`) is well isolated and
  well tested (CONTRACTS.md §2 purity discipline holds); `basket.js` has careful localStorage error
  handling, dedup, clamping, and cross-tab sync; `RecipeImage` has thoughtful failure handling
  (observer-stall safety timer, onError fallback, never-blank guarantee); `firestore.js` contentHash
  diffing is clean and the ingestion entry's per-meal try/catch resilience (ingest.js:200-209) is real.
  The defensive `if (live)`/cancellation patterns in the screens' effects are consistently applied.
- **Uncertain / flagged:** #11's real-world severity depends on actual basket sizes (unmeasured); the
  exact production behaviour of the dropped-filter bug (#1) was reasoned from code, not reproduced live
  against Firestore (the missing composite indexes would need confirming against
  `firestore.indexes.json` vs the planner's emitted combinations — itself the test proposed in #2).
