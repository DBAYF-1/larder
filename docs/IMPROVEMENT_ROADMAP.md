# Larder — Improvement Roadmap

**The single source of truth for "what to do next to significantly improve the entire project."**

**Date:** 2026-06-19 · **Branch:** `main` · **Author:** Synthesiser (over the 10-dimension audit panel
+ the gaps/critique meta-review in `docs/audit/*.md`).
**Constraint baseline:** Firebase **Spark (free)** — Hosting + Firestore (~50K reads / 20K writes per
day) only; **no** Cloud Functions outbound, **no** Cloud Storage/Blaze; v1 has **no accounts/auth, no
payments**. Every "Now/Next" item below is feasible on Spark; paid unlocks are isolated in §5.

> Method note: the load-bearing live claims were independently re-verified for this synthesis on
> 2026-06-19 — Firestore `facets/global` and `system/last_ingestion` **both return HTTP 429
> RESOURCE_EXHAUSTED right now**; `public/` contains only `favicon.svg` + `dishes/` (no robots/sitemap/
> manifest); `.github/workflows/` is `ingest.yml`, `generate-images.yml`, `keepalive.yml` only (no
> deploy/CI). These three facts anchor the priorities below.

---

## 1. Executive summary

### Current state, honestly

Larder is a **genuinely well-engineered tool that is, right now, intermittently unusable and invisible.**
The craft is real: a pure, 65-test shopping-list engine (scale → dedupe → minimum-purchase → aisle-sort →
pack-round) that the whole panel agrees is a true differentiator; a robust image primitive; an idempotent,
off-Firebase ingestion pipeline; an unusually a11y-aware UI for a v1. But three structural facts override
the polish:

1. **The front door is bolted shut.** Every Firestore read returns **429 RESOURCE_EXHAUSTED** (verified
   live, twice, today). Because the client reads Firestore directly, the catalogue does not load for
   *anyone* once the ~50K/day read quota is burnt — and nothing anywhere alerts on it. A bare home view
   costs ~49 reads, so the ceiling is **~350–600 sessions/day** before the site fails for everyone. This
   is not a future scaling wall; it is a **present, recurring, unmonitored outage.** Larder cannot survive
   its own launch-day traffic on the current read architecture.

2. **The differentiating data is wrong in exactly the place the product wants to win.** Coeliac-unsafe
   "Gluten-free" labels (oats, tortillas), meat in "Vegetarian" dishes (bacon lasagne), dairy/honey in
   "Vegan" dishes — all shipping live. Labels are *asserted optimistically* (from absence, from TheMealDB
   category, from hand tags) rather than *proven from resolved ingredients*. The recommended go-to-market
   wedge (allergen/free-from safety) depends on this exact data being trustworthy, and it is not — which is
   a trust, a safety, and a UK-advertising-liability problem at once.

3. **There is no way in and no way back.** Every URL serves an empty `<div id="root">` shell — no
   per-page meta, no Open Graph, no `Recipe` JSON-LD, no real robots.txt/sitemap/manifest (the panel's
   product audit even mis-reported these as shipped; they are not). The shopping list — the product's whole
   output — exists only as transient state in one tab: not in the URL, not shareable, not recoverable.
   Browse filters and receipt tick-state are thrown away on every navigation. Acquisition (SEO/social) and
   retention (save/return/share) are each ~0% built.

Beneath these sit operational fragility (no CI/deploy automation; deploys ride a single drift-prone human
Google login; **composite indexes are committed but undeployed**, so filters silently drop and show wrong
results), zero observability (no analytics, error tracking, or alerting), and a missing legal baseline
(no privacy policy, attribution treatment possibly illegible, AI photos that override real ones).

### The 3 highest-leverage initiatives

These are the initiatives that pay off across the most dimensions per day of effort, sequenced by
dependency:

1. **Survive traffic: pre-bake a one-read home feed + cross-screen doc caching + a watched uptime/freshness
   check.** Five independent audits (performance, architecture, ops, feature-depth, data) converge on this
   exact mechanism — the highest-confidence action in the entire panel. It collapses the cold home load
   from ~49 reads to ~1–2, multiplies the users Larder can serve on Spark by ~10×, and is the prerequisite
   for *every* growth effort (otherwise traffic just accelerates the outage). **This is the gate.**

2. **Make the data trustworthy: a "prove it or don't claim it" verification stage.** Derive Vegetarian/
   Vegan and all free-from labels from resolved ingredients, block any label contradicted by an ingredient
   or sitting on an unresolved line, expand the allergen keyword tables, and normalise the cuisine/course
   taxonomy. This must *precede* the SEO publish (so we don't broadcast wrong labels as structured data) and
   the allergen re-positioning. The verifier logic is already scoped in the `catalogue-10k` skill — run it
   against the *existing* corpus now.

3. **Open the two ends + harden ops in one coherent push:** SEO quick-wins (real robots.txt, default OG
   block, per-route titles) + build-time SSG of the home + top-N meals with `Recipe` JSON-LD + a generated
   sitemap; a URL-encoded basket/list (`/list?meals=…&n=4`) that makes the artefact shareable, persistent,
   and deep-linkable in one change; and a CI/deploy workflow (token-based deploy + test/build gate +
   `if: failure()` alerting) that takes the human off every critical path and finally deploys those
   indexes.

Everything else — accounts, the weekly planner, the 10K catalogue, the supermarket hand-off — is downstream
of first **surviving traffic, telling the truth, and being findable.**

---

## 2. Prioritised, de-duplicated backlog

Severity: **P0** blocker / **P1** major / **P2** worthwhile / **P3** nice-to-have.
Impact: 1–5 (product/quota/trust value). Effort: **S** (<~1 day) / **M** (~2–5 days) / **L** (>1 week).
Score = Impact ÷ Effort (S=1, M=3, L=6), rounded — a ruthless impact-per-effort ranking; ties broken by
severity then by how many dimensions converge on the item. "Dims" abbreviations: perf, arch, ops, sec, seo,
a11y, ux, data, code, prod, feat, gaps.

| # | Item (de-duplicated across audits) | Sev | Impact | Effort | Score | Dimension(s) | One-line action |
|---|---|---|---|---|---|---|---|
| 1 | **Watched uptime + data-freshness check** (cold-user can-it-load probe; alert on 429/empty/stale) | P0 | 5 | S | **5.0** | ops F1/F3, gaps G1/B1 | Scheduled Action curls `facets/global`; alert on non-200 or `finishedAt` >36h to a free webhook |
| 2 | **Define `.sr-only`; pass `priority` to LCP cards; preconnect wsrv+Firestore; fix index.html cache header** | P1 | 4 | S | **4.0** | a11y A1, perf 4/5/9 | Five one-line fixes: add CSS class, `priority` on first 6 cards, two `<link preconnect>`, header rule |
| 3 | **Consume `appliedFallback` — stop silently dropping filters** (client-narrow dropped predicates + honest note) | P1 | 5 | S | **5.0** | code #1, arch F7, data, gaps C1 | In Browse, re-apply dropped diet/freeFrom/cuisine/course predicates on the loaded page + show "closest matches" |
| 4 | **Deploy the committed composite indexes** (incl. cuisine×diet) | P1 | 4 | S | **4.0** | arch F5/F7, ops F2, code #1 | Ship `firestore.indexes.json` (blocked on a deploy path — item 9); add the missing common pairs |
| 5 | **Pre-bake `home/feed` doc (1 read) + lightweight card projection** | P0 | 5 | M | **1.7** | perf 3, arch F2/F3, ops F1, feat F12, gaps C2/B1 | Ingestion writes one doc with 4 rails × 12 card fields; home reads it once instead of ~49 |
| 6 | **Hand recipe docs Browse→Basket→List; cache facets in localStorage; cap fan-out** | P1 | 4 | S | **4.0** | perf 3, arch F2, feat F12, ux 10, code #11 | Forward in-memory docs instead of re-`getRecipe`; TTL-cache facets; p-limit ingredient reads |
| 7 | **Verify diet/allergen labels from ingredients** ("prove it or don't claim it"; block on contradiction/unresolved) | P0 | 5 | M | **1.7** | data 1/2/3, prod F2, seo F3, gaps C1/B2 | Ingestion stage: derive Veg/Vegan + free-from from resolved lines; refuse on contradiction or `needsReview` |
| 8 | **Expand allergen keyword tables** (oats, tortilla, spelt, ghee, paneer, pine nut, …) | P0 | 5 | S | **5.0** | data 1, prod F2, gaps B2 | Extend gluten/dairy/nut keyword sets; mark oats gluten by default |
| 9 | **CI + token-based deploy workflow** (`npm ci`→test→build; `firebase deploy` via SA/token; `if: failure()` alert) | P1 | 4 | M | **1.3** | ops F2/F3, code #5/#6, arch F5, gaps G4/B4 | `ci.yml` + `deploy.yml`; removes human login from every critical path; ships indexes+rules+hosting |
| 10 | **SEO quick-wins: real robots.txt + default OG/Twitter block + 1200×630 card + `useDocumentTitle`** | P1 | 5 | S | **5.0** | seo F2/F4/F6, prod F8, gaps B3 | Static files in `public/` (bypass the `**` rewrite) + per-route titles |
| 11 | **URL-encoded basket/list** (`/list?meals=…&n=4`): shareable, persistent, deep-linkable, recoverable | P1 | 5 | M | **1.7** | seo F8, ux 1, feat F1, prod F12, gaps G2/B3 | Encode basket in URL; rehydrate on load; include URL in `navigator.share({url})` |
| 12 | **Persist receipt tick-state + Browse filter/scroll state across navigation** | P1 | 5 | S/M | **3.3** | ux 1/2, feat F1, a11y, gaps G2 | Wire `checkedIds`/`onToggleItem` to localStorage; filters→URL via `useSearchParams`; scroll→sessionStorage |
| 13 | **Normalise cuisine + course taxonomy** (merge France/French, India/Indian, Middle-Eastern; map Starter/Pudding) | P1 | 3 | S | **3.0** | data 6/7, prod F6 | Canonical mapping table in source adapters + CI assertion every value ∈ enum |
| 14 | **Build-time SSG: home + top-N meals + hubs, with per-page meta + `Recipe` JSON-LD** | P1 | 5 | M-L | **1.0** | seo F1/F2/F3/F7, prod F8, gaps B3/C4 | Puppeteer/Vike in CI via Admin SDK; bake meta+JSON-LD; hydrate; **gate on item 7 (correct labels)** |
| 15 | **Generated `sitemap.xml`** from Firestore in CI (popularity→priority, updatedAt→lastmod) | P1 | 4 | S | **4.0** | seo F4, gaps B3 | One `<url>` per meal+hub; write to `public/`/`dist/` as real `.xml` |
| 16 | **Fix the duplicated/nested Filters sheet** (stale CSS selectors render a second filter UI) | P1 | 4 | S | **4.0** | ux 3 | Render only the FacetGroup body in Browse's sheet, or let FilterBar own it; fix stale `Browse.css` selectors |
| 17 | **Analytics + error tracking** (privacy-friendly RUM + Sentry-free + `web-vitals` beacon) | P1 | 4 | M | **1.3** | prod F5/F9, ops F4, perf "measure", code #9 | Cloudflare Web Analytics (no cookie banner) + Sentry free in ErrorBoundary; instrument the funnel |
| 18 | **AA contrast tokens** (`--larder-stall-strong` for white-on-red CTAs; darken slate + interactive borders) | P1 | 4 | M | **1.3** | a11y A2/A7/A8 | Two token edits fix every primary CTA + caption + control border at once |
| 19 | **Skip link + route-change focus/scroll/title management** | P1 | 4 | M | **1.3** | a11y A3/A4, seo F6 | Skip-to-main link; `useEffect` on pathname → focus `<main>`, scroll top, set title |
| 20 | **Security headers + move ingestion `errors[]` off the public doc + `npm ci` in CI** | P2 | 2-3 | S | **2.5** | ops F6/F10/F12 | `headers` block (CSP report-only, nosniff, frame-ancestors); separate non-readable errors doc; pin installs |
| 21 | **Don't store inline SVG in `imageUrl`; never let generated photos override real source photos** | P1 | 4 | M | **1.3** | data 4/5, arch F3, perf 3 | Emit `imageUrl: null` for placeholders; flip precedence to `src.imageUrl || GENERATED[id]` |
| 22 | **Real search: `searchTokens[]` field (title + ingredient names) + array-contains index** | P1 | 4 | M | **1.3** | feat F3, ux 6, seo | Ingest a token field; query `array-contains` for true whole-catalogue + ingredient search |
| 23 | **Surface "leftovers / use it up"** (the `spare` the engine already computes) | P1 | 4 | S | **4.0** | feat F2 | Aggregate `spare` into a "Leftovers from this shop" panel linking to recipes using that ingredient |
| 24 | **Saved lists (localStorage) + "shop again from last week"** | P1 | 5 | S/M | **3.3** | feat F1, prod F4, gaps G2 | Snapshot `{recipeIds, householdSize, builtAt, checked[]}`; `/saved` route; no backend |
| 25 | **Tests for `planQuery` + pure ingestion stages; wire ingestion test into a runnable CI command** | P1 | 4 | M | **1.3** | code #2/#3/#5 | Export+table-test `planQuery` vs indexes; cover units/parse/resolve; `node --test` in CI |
| 26 | **Cap basket size + fan-out concurrency** (unbounded `recipeIds`; unbounded parallel reads) | P2 | 3 | S | **3.0** | code #11, gaps W6 | Clamp `recipeIds` length; p-limit concurrent `getDoc`/`getRecipe` |
| 27 | **Legal/compliance baseline** (privacy policy + cookie notice + compliant attribution + "AI-generated/approx" labels) | P1 | 4 | M | **1.3** | gaps G3/B5, ux 13, data 5 | Add privacy/terms pages; scrim+legible attribution; honest AI/nutrition labelling — **before analytics ships** |
| 28 | **Per-meal / per-portion servings** (one global household size is too blunt) | P2 | 4 | M | **1.3** | feat F4 | `portions?: Record<recipeId,number>` on basket; per-recipe `factor`; extend vitest |
| 29 | **App Check (reCAPTCHA v3) before any client write surface opens** | P2 | 3 | M | **1.0** | ops F5, gaps G6/C3/W5 | Enforce App Check on Firestore (monitor→enforce); restrict the browser API key in console |
| 30 | **Nutrition completeness** (count-based ingredients contribute 0 kcal; emit `nutritionCompleteness`; label "approximate") | P2 | 3 | M | **1.0** | data 8 | Add `perItemGrams` to count items; show "based on N of M ingredients" or hide below threshold |
| 31 | **Resolution-rate work** (~13% lines unresolved; fix `cleanName` patterns; track as CI metric) | P2 | 3 | M | **1.0** | data 9 | Add missing canonicals/synonyms; wire `measureGap.mjs` into CI; fail on regression |
| 32 | **Manifest + PWA service worker** (installable; offline shell; repeat-visit read relief) | P2/P3 | 3 | S/M | **2.0** | seo F5/F9 | `public/manifest.webmanifest` + PNG icons; `vite-plugin-pwa` stale-while-revalidate |
| 33 | **Route-level code-splitting + lazy Firestore init** | P1 | 4 | S-M | **2.0** | perf 1/2, code | `React.lazy` per screen; async `getDb()` so Firestore loads only on querying routes |
| 34 | **Trim Google Font weights; self-host woff2; intrinsic img width/height** | P2/P3 | 2-3 | S | **2.5** | perf 7/11/12, a11y | Cut to 2–3 weights/family; preload above-fold; add `width`/`height` for CSS-independent CLS |
| 35 | **Cron cost hygiene** (drop cadence to daily; gate the full-collection diff by source-hash; decouple facet rescan) | P2 | 4 | M | **1.3** | arch F1/F9 | Source-payload hash short-circuits the ~2,640-read diff; protects the read quota at 10K |
| 36 | **Free-from / favourites first-class in UI; "why this is safe" on the meal page** | P2 | 4 | M | **1.3** | prod F2, feat F7 | Persistent free-from chips; show matched/excluded ingredients; localStorage favourites + heart |
| 37 | **Firestore backup snapshot** (weekly Admin-SDK export to a branch/artifact) | P2 | 3 | M | **1.0** | ops F7 | Free PITR substitute without Blaze; document the idempotent regeneration runbook |
| 38 | **Clear-basket affordance; Meal "Back" uses `navigate(-1)`; collapse "signature" animation wired or retired** | P2/P3 | 3 | S | **3.0** | ux 4/5/8 | Wire existing `clear()`; history-aware back; use or delete the dead `larder-collapse-*` keyframes |
| 39 | **Related-meals rail + diet-aware home** (remembered diet pref reorders rails) | P2 | 3 | M | **1.0** | feat F8, prod | One extra cuisine/diet query on Meal/Basket; localStorage diet preference |
| 40 | **ESLint/Prettier + `tsc --checkJs` via jsconfig** (leverage existing JSDoc; kill dead defensive branches) | P2 | 3 | S/L | **2.0** | code #7/#8/#12 | Flat ESLint config + checkJs in CI; remove `getIngredients`-as-array dead code |
| 41 | **Forced-colors / high-contrast support; ingredient-thumb alt tidy-ups; grid list semantics** | P3 | 2 | S/M | **1.0** | a11y A11/A12/A13 | `@media (forced-colors: active)` block; unconditional `aria-hidden` on decorative thumbs |
| 42 | **Ingredient `imageUrl` derivation** (TheMealDB ingredient photos — data gap behind the thumbnail feature) | P3 | 2 | S | **2.0** | data 12, ux | Derive `.../{Name}.png` per canonical; guard 404 via existing onError fallback |
| 43 | **Weekly planner (days × meal slots)** | P2 | 4 | L | **0.7** | feat F5, prod | `plan: {day:{slot:recipeId}}` over basket; localStorage; the canonical planner shape |
| 44 | **Accounts (Firebase Auth) + per-user saved plans** — *only after App Check (29) and demand is proven* | P2 | 4 | M-L | **0.7** | feat F6, prod F4, gaps C3 | Anonymous/Google auth + `users/{uid}/lists/*`; rules `request.auth.uid==userId`; debounce writes |
| 45 | **Supermarket affiliate basket hand-off** — the last mile & first revenue (deep-link tier is free) | P1/P3 | 5 | M-L | **0.8** | prod F3/F10, feat F10 | Map list → retailer search/prefill URL + affiliate (Awin); surface OFF pack/brand you already store |
| 46 | **10K per-diet catalogue expansion** — *strategic, gated on Edamam paid keys + demand* | P2 | 4 | L | **0.7** | feat F11, prod F11, arch F9, data | Smoke-test the checkpointed backfill on `--limit` first; fill free TheMealDB+curated floors before paying |
| 47 | **Near-duplicate / tombstone reconcile** (no deletion; same dish across sources; double-prefix id hazard) | P3 | 2 | M | **0.7** | data 11, arch F10/F11 | Build-time dup report + precedence; `retired:true` reconcile pass; normalise curated id derivation |
| 48 | **Cook mode** (full-screen step-by-step + wake-lock + on-page serving rescale) | P3 | 3 | M | **1.0** | feat F9, ux | Overlay from Meal for `instructionsExternal===false` recipes; `navigator.wakeLock` |

---

## 3. Phased plan

Effort grouping reflects sequencing and dependencies, not just size. Within each phase, items are listed in
execution order.

### NOW — quick wins (days). "Stop the bleeding + cheapest high-leverage fixes."

**Goal: the site reliably loads for a cold stranger, stops lying in its filters, and we can finally see and
ship.** These are almost all S-effort and unblock everything after.

1. **#1 Watched uptime/freshness check** — *do first.* You cannot fix an outage you can't see. One free
   scheduled Action. (Depends on nothing.)
2. **#3 Consume `appliedFallback`** + **#8 expand allergen keywords** + **#13 normalise taxonomy** — the
   correctness quick-wins; #3 is the one finding actively serving *wrong* results in production today.
3. **#2 a11y/perf one-liners** (`.sr-only`, LCP `priority`, preconnect, cache header) + **#6 cross-screen
   doc caching/facet cache** — immediate LCP + read-quota relief at near-zero effort.
4. **#9 CI + token deploy** — the enabler. Once this lands, **#4 deploy the committed indexes** (which makes
   #3 even better) and every future fix ships without the drift-prone human login.
5. **#10 SEO quick-wins** (robots.txt, default OG, per-route titles) + **#16 fix the duplicated Filters
   sheet** + **#38 clear-basket / history-back / animation** — visible polish + the first discovery surface.
6. **#23 surface leftovers** + **#24 saved lists (local)** + **#12 persist tick/filter/scroll state** — the
   cheapest retention wins; all client-side, no backend.

**Rationale & sequencing:** #1 must precede everything (visibility). #9 is the linchpin of the phase — it
deploys #4 and unblocks safe iteration. #3/#8/#13 are correctness fixes that also make the upcoming SEO
publish safe to broadcast. The retention quick-wins (#23/#24/#12) need no infra and start building the
return loop while the structural work proceeds.

### NEXT — weeks. "Survive real traffic, tell the truth at scale, open both ends."

**Goal: an order-of-magnitude more users on Spark, a corpus whose labels are provably correct, and a real
acquisition + retention loop.**

1. **#5 Pre-bake `home/feed` + card projection** + **#21 kill inline-SVG / fix photo precedence** — the
   convergent #1 architectural move; collapses ~49 reads → ~1–2 and shrinks payloads. **This is the gate to
   safely driving any traffic.**
2. **#7 Verify diet/allergen labels from ingredients** — the data-correctness foundation. **Must complete
   before #14 (SSG) ships**, so we never publish wrong labels as `Recipe` structured data.
3. **#11 URL-encoded basket/list** + **#14 SSG + #15 sitemap** — the two ends. #11 makes the artefact
   shareable/persistent/deep-linkable in one change; #14/#15 make the catalogue findable with rich results.
   #14 depends on #7 (correct labels) and benefits from #5 (baked data).
4. **#17 analytics + error tracking** — but **after #27 the legal baseline** (privacy policy + cookie
   notice), because analytics on a UK site triggers GDPR/PECR paperwork. With #17 live, F9's destination-vs-
   tool question (#45 dependency) becomes measurable.
5. **#18 AA contrast tokens** + **#19 skip link / route focus** + **#33 code-split / lazy Firestore** +
   **#34 fonts/CLS** — the accessibility-clean, fast-loading core flow.
6. **#22 real search** + **#36 free-from first-class + "why safe"** — discovery and the wedge UI, now that
   the labels are trustworthy.
7. **#25 planner+pipeline tests** + **#20 security headers / errors-doc / npm ci** + **#26 cap basket/fan-
   out** + **#35 cron hygiene** + **#40 lint/checkJs** + **#37 backups** — the reliability/ops hardening that
   makes Larder a *service*, sequenced behind the CI gate (#9) that runs them.

**Rationale & sequencing:** #5 → (#7 → #14) is the critical chain: survive traffic, then correct the data,
then publish it. #27 gates #17. The wedge UI (#36) and search (#22) wait for correct labels (#7). The ops
hardening cluster all hangs off the CI gate from the Now phase.

### LATER — strategic bets (weeks→quarters). "Become a returnable, monetisable product."

These cost money, write-quota, or a strategic decision, and should be validated with the analytics from
Next before investing.

1. **#28 per-portion servings** + **#43 weekly planner** — the destination-grade product shape; free on
   Spark but L-effort. Build once the retention loop (saved lists) shows people return.
2. **#29 App Check** → **#44 accounts + per-user saved plans** — **strict order: App Check before any client
   write.** Opening writes without it turns the 20K/day write cap into an attacker-exhaustible resource (the
   security posture and the growth roadmap are the same project). Only pursue accounts if device-local
   saving (Now phase) proves demand.
3. **#45 supermarket affiliate hand-off** — the last mile and the first realistic revenue. The deep-link/
   affiliate tier is free and client-side; pursue it once analytics show users reach the list. True basket
   APIs need partnerships (paid/commercial — §5).
4. **#46 10K per-diet catalogue** — fill the free TheMealDB+curated floors first; only buy Edamam keys once
   a chosen wedge diet proves demand. Smoke-test the (unproven) checkpointed backfill on `--limit` before
   trusting it. Pairs with #35 (cron cost) and #47 (dedup/tombstoning) which become necessary at 10K.
5. **#32 PWA** + **#39 personalisation** + **#48 cook mode** + **#41/#42 a11y/data polish** + **#30/#31
   nutrition/resolution depth** — depth and engagement, after the core funnel converts.

**Rationale & sequencing:** every Later item is demand-gated. The riskiest product assumption (per
product-strategy F9) is whether "a better static list" is something users *return* to. Resolve that with the
cheap analytics + local-save + affiliate-CTR signals from Now/Next **before** spending on accounts (#44) or
the paid 10K expansion (#46).

---

## 4. The single highest-leverage thing to do next

**Pre-bake a single `home/feed` Firestore document at ingestion time and read it once on the home screen,
paired with cross-screen recipe-doc caching (item #5 + #6).**

**Why this one, above all:**

- **It is the only item that is simultaneously a P0 outage fix and a 10× scaling unlock.** The binding
  constraint on Larder is not catalogue size or features — it is **client reads × users vs 50K/day**. A bare
  home view costs ~49 reads; the site is at the quota *right now*. Collapsing that to ~1–2 reads moves the
  ceiling from ~350–600 sessions/day to several thousand, on the free tier, with no new infra.
- **Five of ten independent auditors converged on this exact mechanism** (performance, architecture, ops,
  feature-depth, data) from five different angles. When five reviewers triangulate one fix, it is the
  highest-confidence action in the panel.
- **It pays off in every dimension at once:** cheaper reads (ops/cost), faster LCP and smaller payloads
  (performance — ~250 KB → ~30 KB on the home load), more users per quota (architecture), headroom for every
  new feature that adds reads (feature-depth), and it naturally carries the kill-the-inline-SVG fix (data).
- **It is pure ingestion work on a path that already runs off-Firebase** — the cron writes the doc; writes
  are far under the 20K/day cap; no Blaze, no Cloud Functions, no risk to the read path.
- **It is the prerequisite for everything else.** Every other high-value initiative — SEO traffic, social
  sharing, the allergen wedge — *drives traffic into the site*. Until the site can absorb that traffic
  without 429-ing, those initiatives actively make the outage worse. You must be able to keep the lights on
  before you invite anyone in.

The one item that must ship *alongside* it is **#1 (the watched uptime/freshness check)** — so that the next
time reads spike, someone is paged instead of a stranger silently hitting a bolted door. Do #1 first (it's
an hour), then #5/#6.

---

## 5. Free-tier feasibility & where paid unlocks more

**Everything in the Now and Next phases is feasible on Spark.** The free tier comfortably covers: the
pre-baked feed (ingestion writes), CI/deploy (GitHub Actions on a public repo + a free deploy service
account or `FIREBASE_TOKEN`), SSG prerender (Puppeteer/Vike runs in the free runner via the Admin SDK,
output is static), robots/sitemap/manifest (static files), URL-encoded sharing (client-side), analytics
(Cloudflare Web Analytics is genuinely free, no cookie banner), error tracking (Sentry free tier), App Check
(reCAPTCHA v3 is free), backups (Admin-SDK export committed to a branch/artifact), and all UX/a11y/data work
(static edits + ingestion).

**A caution the panel under-weighted:** "free on Spark" is not "free of effort or risk." SSG carries React
18 hydration-bug risk (budget #14 as M–L, not M); per-user writes carry an abuse surface (gate #44 behind
#29); analytics carries GDPR/PECR paperwork (gate #17 behind #27). The constraint that bites next is
**owner-time and compliance, not Firebase billing.**

**Where Blaze/paid genuinely unlocks more (costs are small for this workload):**

| Unlock | Spark ceiling it removes | Rough cost | Verdict |
|---|---|---|---|
| **Cloud Storage + image-resize extension / CDN for dish photos** (item #46/images at 10K) | Git repo bloat (already 21 MB; ~500 MB at 10K) + 10 GB Hosting storage / 360 MB-day egress | ~£0.02/GB-mo storage + ~£0.10/GB egress → **pennies–£1/mo** at low traffic | **The first thing Blaze should unlock.** The committed-binaries approach is a documented Spark workaround that is untenable at 10K. |
| **Pay-as-you-go Firestore reads** (removes the 50K/day cap) | ~350–600 sessions/day ceiling (after #5 mitigates it for free) | **~£0.036 per 100K reads**; even 1M reads/day ≈ ~£0.36/day | Cheap, but #5 buys an order of magnitude for free first. **Danger:** the open REST endpoint becomes a *billable* DoS without App Check (#29) + a hard budget cap. |
| **SSR/edge prerender via Hosting→Functions/Cloud Run** | Static SSG only covers a chosen top-N; SSR covers all 1,955 with fresh data | Functions free tier is large; **cents/mo** | Not needed for v1 — SSG of the top-N is strictly better than today and stays free. |
| **Stripe webhooks for premium entitlement** (item #44/monetisation tier 3) | Stripe Checkout redirect works on Spark, but entitlement webhooks want a function | Stripe fees only; function cost negligible | Only if a premium tier is pursued after accounts prove out. |
| **Edamam paid keys for the 10K catalogue** (item #46) | ~3–4K recipe free ceiling without Edamam | Edamam plan cost (verify current tier) | **Strategic, demand-gated.** Fill free floors first; buy keys only once a wedge diet proves demand. |
| **Live retailer prices / true basket API** (item #45 tier 2) | OFF carries packaging, not reliable UK prices; no open basket APIs | Paid feed + commercial partnership | Out of scope for v1; the free affiliate deep-link tier captures the value without it. |

**If Blaze is ever enabled, set a billing budget + hard cap + alert on day one (free)** — the runaway-bill
risk from the open read endpoint, not the cost, is the real objection to leaving Spark.

---

## 6. Definition of market-ready (checklist)

Larder is "market-ready" when **all** of the following are true. (Today, 0 of the availability/data/discovery
gates pass.)

**Availability & reliability**
- [ ] A cold first-time visitor on a clean device can reliably complete **Browse → Basket → Shopping list**
      without hitting a 429/empty state (item #5 + #1 proven by the synthetic check).
- [ ] An uptime + data-freshness check runs and pages a human on outage or stale catalogue (#1).
- [ ] Deploys are automated and reproducible; no critical path depends on one human's interactive login;
      committed indexes are deployed (#9 + #4).
- [ ] CI runs tests + build on every change; ingestion failures alert (#9 + #25).
- [ ] Errors and basic funnel analytics are observable in production (#17).

**Correctness & trust (the wedge)**
- [ ] Every diet/free-from label is **derived from resolved ingredients and blocked on contradiction or
      unresolved lines** — no coeliac-unsafe "Gluten-free", no meat in "Vegetarian", no honey/dairy in
      "Vegan" (#7 + #8).
- [ ] Filters never silently drop a predicate; the user is told when results are narrowed (#3 + #4).
- [ ] Cuisine/course taxonomy is canonical and de-duplicated (#13).
- [ ] AI images never override a real source photo; AI/nutrition data is honestly labelled "approximate /
      AI-generated" (#21 + #27 + #30).

**Discovery & shareability (the way in / way back)**
- [ ] Real `robots.txt` + generated `sitemap.xml`; meal pages are crawlable with per-page meta + `Recipe`
      JSON-LD; social shares unfurl a rich card (#10 + #14 + #15).
- [ ] The shopping list is a real artefact: shareable as a URL, persistent, recoverable on another device
      (#11); receipt tick-state and Browse state survive navigation (#12).
- [ ] At least one retention hook exists (saved lists / "shop again"; #24) and one growth/share loop (#11
      share button).

**Quality & compliance baseline**
- [ ] Core flows pass WCAG 2.2 AA on contrast and SPA navigation (#18 + #19).
- [ ] LCP/CLS/INP are healthy on mobile; the home load is network-bound on a single fast read (#5 + #33 +
      #2 + #34).
- [ ] A privacy policy, cookie notice, compliant/legible source attribution, and terms are published — in
      place **before** analytics ships (#27).
- [ ] App Check is enforced (or scheduled to enforce) before any client-write feature opens (#29).

**Strategic (product, not gate-but-target)**
- [ ] A single target user/wedge is chosen and the front door is re-positioned around it (product F1/F2).
- [ ] The funnel is measured: % of sessions reaching the list, wedge-filter usage, share/hand-off CTR, and a
      return-visit signal — the data that resolves the destination-vs-tool question before investing in
      accounts or the paid 10K expansion (product F7/F9).

---

## Appendix — how this consolidates the panel (traceability)

- **The single P0 reframing** (the panel rated read-economics "P1" in five silos; the gaps/critique
  meta-review correctly elevates it to the P0 that keeps the lights on) is adopted: items #5/#6/#1 lead.
- **Corrected the panel's own error (gaps W1):** product-strategy F8 claimed robots/sitemap/manifest "now
  return HTTP 200, so some SEO groundwork shipped" — **false** (verified again today: `public/` has only
  `favicon.svg` + `dishes/`; the 200s are the catch-all serving the HTML shell). The SEO audit is correct;
  no SEO groundwork has shipped. Item #10 treats this as greenfield.
- **De-duplication examples:** the "pre-bake home feed" appears as perf-3, arch-F2, ops-F1, feat-F12 →
  one item (#5). "Save the artefact / share the list / URL state" appears as seo-F8, ux-1, feat-F1,
  prod-F12, gaps-G2 → one item (#11). "Persist tick-state" appears as ux-2, feat-F1, gaps-G2 → one item
  (#12). "CI/deploy/alerting/indexes" spans ops-F2/F3, code-#5/#6, arch-F5 → items #9/#4/#25.
- **Severity upgrades from the meta-review:** code-#11 (unbounded basket/fan-out) bumped toward P2 (#26),
  corroborated by the live outage; the legal lane (no auditor owned it) added as #27; the "no availability
  owner" gap added as #1.
- **Strengths preserved (do not regress):** the pure `buildShoppingList` engine + its 65 tests; the
  never-fabricate-density discipline; the `needsReview` appendix; contentHash idempotency; off-Firebase
  ingestion; `RecipeImage` robustness; the focus-visible / reduced-motion a11y foundation; the till-style
  receipt artefact.
