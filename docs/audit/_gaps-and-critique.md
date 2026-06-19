# Larder audit — Gaps, Cross-cutting Themes & Critique

**Role:** Completeness critic (meta-reviewer over the 10-dimension panel).
**Date:** 2026-06-19 · **Branch:** `main` · **Method:** read all of `docs/audit/*.md`, skimmed
`src/`, `ingestion/`, configs; **independently re-verified** the load-bearing live claims (Firestore
REST, served HTML, `firebase.json`, key source files). Every claim below cites a file/line or a live
probe I ran myself.

This document does **not** re-list the panel's findings. It covers four things the brief asked for:
(1) important problems **no auditor surfaced**; (2) panel findings that are **wrong, overstated, or
infeasible**; (3) **cross-cutting themes** that connect dimensions; (4) the **3–5 issues most likely
to actually block "market-ready"**.

---

## 0. The single most important meta-finding

**The site is, as of this audit, effectively down — and the panel disagrees with itself about it.**

I re-ran the probes. Every Firestore REST read returns **HTTP 429 `RESOURCE_EXHAUSTED`** right now
(verified 2026-06-19 against `facets/global` and `system/last_ingestion`). Because the client reads
Firestore directly, the catalogue does not load for anyone until the daily quota resets. The
ops-security audit (F1) and data-quality (cross-cutting) and feature-depth (F12) all hit this 429.
**But three other audits — product-strategy, architecture-scale, performance — quietly assumed the
quota was a *future* scaling wall ("~350–600 sessions/day", "~1,020 cold loads/day") while it is in
fact a *present, recurring outage*.** That gap matters: the panel's collective tone ("well-built tool
searching for a wedge", "comfortably inside Spark at 1,955 recipes") undersells that the product is
currently failing the most basic market-ready test — *can a stranger load it?* The honest headline is
not "needs a wedge"; it is **"the front door is intermittently bolted shut and nobody is paged."**

No auditor connected this to the most likely *cause*: it is not organic traffic (the site has no
discovery surface — every SEO probe confirms zero crawlable content), so ~50K reads/day is almost
certainly being burned by **(a)** the audit panel itself + the owner's own dev/StrictMode double-reads
(performance F10), and/or **(b)** the unmetered ~49-reads-per-home-load pattern under even a trickle of
real or bot traffic, and/or **(c)** scraping of the open REST endpoint (ops F5). The implication is
stark and *new*: **Larder cannot survive its own launch-day traffic on the current read architecture.**
The pre-baked-home-doc fix (architecture F2, performance F3) is therefore not an optimisation — it is a
**prerequisite for the site being usable at all**, and should be reframed from P1 to P0.

---

## 1. Important problems NO auditor surfaced

### G1 — Nobody owns "is the site up?" — the panel has 10 dimensions and no availability owner (NEW, P0)
The panel covers performance, architecture, ops, security, SEO, a11y, UX, data, code, product. **None
of them states the obvious end-to-end fact:** a first-time visitor today, on a clean device, gets an
error/empty state because of F1. Ops-security flags the quota; performance flags the read fan-out;
architecture flags the per-user math — but each treats it as *their* slice. The missing artefact is a
**single uptime/SLA statement and a synthetic "can a cold user complete Browse→Basket→List?" check.**
Recommendation: one free scheduled GitHub Action that loads the site as a real user would (fetch the
home feed read path) and alerts on 429/empty — this is the *integration* test the per-dimension
recommendations don't add up to on their own. Free on Spark.

### G2 — The shopping list cannot be reconstructed, so the product has no shareable/persistable artefact at all (NEW framing, P1)
Several audits note "no saved lists" (feature F1), "share is plain text" (SEO F8), "tick state lost"
(UX 2). **What none of them states as a single problem:** the *output* of the entire app — the
aisle-sorted list, the thing that is supposedly the differentiator — **exists only as transient
component state in one browser tab.** It is not in the URL, not in `localStorage` as a list (only the
raw basket is), not shareable as a link, not crawlable, not recoverable after a tab crash. The basket
itself has **no maximum size** (verified: `basket.js` clamps `householdSize` to 12 but never caps
`recipeIds`), so the one persisted thing is also unbounded. The artefact the brand is built on is the
most ephemeral object in the system. Encoding the basket into a URL (`/list?meals=…&n=4`) fixes
sharing, persistence, SEO-deep-linking, *and* the "reconstruct on another device" gap **in one
client-side change** — yet it's split across three audits as three separate medium items. It should be
treated as one high-leverage fix.

### G3 — No legal / compliance / content-licensing review (NEW, P1 — a real launch blocker)
**Not one of the 10 dimensions covers law.** For a UK consumer site that is about to "go to market"
this is a genuine gap, and at least three concrete exposures exist:
- **Attribution as a licence condition, not a nicety.** TheMealDB/Edamam/Open Food Facts/CoFID
  attribution is repeatedly described as a "first-class UI requirement" — but it is actually a
  *licensing obligation*. The UX audit (13) even flags the Meal-hero attribution overlay may be
  low-contrast/illegible — i.e. potentially **non-compliant**, not just ugly.
- **AI-generated dish photos misrepresenting food.** Data-quality F5 notes generated images may not
  match the dish and (verified: `buildRecipe.js:255`, `imageUrl: GENERATED_IMAGES[id] || src.imageUrl`)
  **override the real source photo**. For a site that will carry affiliate/commercial intent, showing
  an AI image of a dish that isn't the dish edges toward misleading-advertising territory under UK CAP
  rules. No auditor framed it as a compliance risk.
- **GDPR/PECR the moment analytics or accounts land.** Every audit recommends analytics (product F5,
  ops F4, code #9, performance "what to measure"). For a UK site that means a **cookie/consent and
  privacy-policy obligation** — there is no privacy policy, no cookie notice, no terms. The audits
  recommend the tracking without flagging the legal paperwork it triggers.
- **Allergen labelling liability.** Data-quality P0s (gluten-free served to coeliacs, "Vegetarian"
  lasagne with bacon) are framed as *trust* issues. For a site positioning on allergen safety
  (product-strategy's recommended wedge!), a wrong "gluten-free" label is closer to a **safety/liability**
  issue. The product audit recommends *leaning into* allergen-safety as the moat while the data audit
  shows the labels are currently unsafe — nobody connected "the recommended wedge depends on the exact
  data that is currently wrong **and** carries legal risk if wrong." (See cross-cutting theme C1.)

### G4 — Bus-factor / single-human-owner operational fragility (NEW, P2)
Ops covers auth-drift (F2) and the service-account key (F8) individually. The *systemic* observation
none make: **every privileged path depends on one person's interactive Google login and one person
reading red CI runs.** Deploys need `dbayft@gmail.com` (drifts to a work account); alerting is "a red
run on a page nobody opens"; the keepalive is an unwatched empty commit. There is no runbook, no second
maintainer, no documented recovery. For "market-ready" this is the difference between a hobby and a
service. The fix (token-based CI deploy + a watched heartbeat) is recommended piecemeal in ops F2/F3
but should be elevated as **"remove the human from every critical path"** — it's one coherent
half-day's work that de-risks deploys, alerting, and the undeployed-indexes problem at once.

### G5 — Cost of *neglect*, not just cost of scale (NEW, P3)
The architecture audit's Blaze analysis (F8) is excellent on the cost of *success*. Nobody costed the
**cost of doing nothing**: the committed-image approach grows `.git` linearly forever (already 21 MB),
and the 60-day workflow auto-disable (mitigated only by an unwatched keepalive) means the catalogue can
**silently freeze** with zero signal. The slow-moving failure mode — repo bloat + a frozen catalogue
nobody notices for months — is a more likely death than a runaway Blaze bill.

### G6 — No abuse/rate-limit story for the one write path that's coming (NEW, P2)
Every "retention" recommendation (accounts, saved plans, ratings — feature F6/F7, product F4) requires
client *writes*, against a 20K/day cap, on a public app with **no App Check** (ops F5). The audits note
write-quota *budget* but not **write *abuse***: the first time Larder lets a client write, an attacker
can exhaust the 20K/day write quota as trivially as they can already exhaust reads. The retention
roadmap and the security posture are on a collision course that no single audit owns.

---

## 2. Panel findings that are WRONG, overstated, or infeasible

### W1 — Product-strategy F8 is factually wrong about SEO "groundwork shipped" (CORRECTION)
Product-strategy F8 states: *"`robots.txt`, `sitemap.xml`, and `manifest.webmanifest` now return HTTP
200 live, so some SEO groundwork has shipped."* **This is incorrect and the inverse of true.** I
verified: `public/` contains only `favicon.svg` and `dishes/` — there is **no** robots.txt, sitemap,
or manifest anywhere in the repo. Those URLs return HTTP 200 **only because the `**` catch-all rewrite
in `firebase.json` serves the HTML shell with `content-type: text/html`** (I confirmed all three return
`text/html`). The SEO audit (F4) gets this exactly right and calls it *"worse than missing."* The
product auditor was misled by the 200 status code into reporting progress that doesn't exist. **Net:
trust the SEO audit, not product-strategy F8, on this point.** No SEO groundwork has shipped.

### W2 — "Comfortably inside Spark at 1,955 recipes" is contradicted by the live 429 (OVERSTATED)
Architecture-scale's headline ("at 1,955 recipes the architecture is comfortably inside Spark") and its
framing of read-quota exhaustion as a *future* event are overstated given the **live, present 429** that
the same panel's ops/data/feature audits hit. The architecture is comfortably inside Spark *on writes
and catalogue size*; it is **already over the line on reads under real conditions**. The word
"comfortably" should be struck. (The underlying technical analysis is sound; only the reassurance is
wrong.)

### W3 — The Blaze cost figures are credible but the "pennies" framing understates the real objection (NUANCE)
Architecture F8 and ops F1 both note Blaze reads cost ~£0.04/100K and conclude cost is "single-digit
£/month". The *arithmetic* is right, but two things are under-weighted: (a) the real objection is
explicitly a **hard product constraint (no card on file)**, which no amount of "it's only pennies"
overrides — so the cost analysis, while correct, is somewhat moot for v1; and (b) the genuine danger is
the **unbounded-read DoS** (ops F5): on Blaze, the same open REST endpoint that today returns 429
would instead bill real money with no upper bound until a budget alert fires hours later. So "Blaze is
cheap" is true for honest traffic and **dangerous for adversarial traffic** — the audits should not
leave "just enable Blaze" looking as safe as the cost table implies. (Not wrong, but the risk framing
needs the asterisk.)

### W4 — SEO prerender (F1) is feasible but its effort/complexity is understated relative to the stack (CAUTION)
The SEO audit rates build-time SSG as "feasible on Spark" (true — static output) at effort "M". For a
**client-only SPA with no SSR story today**, standing up Vike/react-snap/puppeteer prerender *plus a
React 18 `hydrateRoot` path* that doesn't double-fetch or mismatch is realistically **M–L and carries
hydration-bug risk** (the meal page fetches its data client-side from Firestore — `Meal.jsx` — so a
prerendered shell still needs the data baked in at build time via the Admin SDK, which the audit notes
but folds into "M"). It is the right move, but "M" is optimistic; budget for hydration debugging. The
audit's own *quick-win* tier (static robots.txt + default OG block + `useDocumentTitle`) is correctly
S and should ship first — that part of the recommendation is solid.

### W5 — "Accounts are free on Spark" is true but the panel under-weights the write-abuse surface (NUANCE)
Product F4 and feature F6 both reassure that Firebase Auth + per-user docs are "free on Spark / the
constraint is scope, not platform." Technically correct. But this pairs with ops F5 (no App Check, open
write surface) to create a real hazard the optimistic framing glosses: **the first client-write feature
turns the 20K/day write cap into an attacker-exhaustible resource** (see G6). "Feasible on Spark" ≠
"safe on Spark without App Check." Not wrong, but the two audits should not be read as a green light to
ship writes without the security work ops F5 recommends.

### W6 — Code-quality #11 (unbounded `Promise.all` reads) is rated P3/"uncertain" but is corroborated by the live outage (UNDER-RATED)
Code-quality #11 hedges that basket-size severity is "genuinely uncertain... bounded risk, not a known
incident." I verified there is **no cap on `recipeIds`** in `basket.js`, and the live 429 *is* a known
read-exhaustion incident. While baskets are probably small in practice, the combination of
unbounded-basket × duplicate-fetch (Basket and ShoppingList both re-read every id) × unbounded REST
access means the "uncertain" risk is closer to **realised** than the P3 implies. Recommend bumping to
P2 and capping both basket length and fan-out concurrency.

### W7 — Two audits over-claim the panel's own test coverage as protection (CONSISTENCY)
Several audits lean on "65 vitest tests" / "well-tested core" as reassurance. Code-quality #3/#5
correctly punctures this: the tests cover only `buildShoppingList` + `format`; **the entire ~2K-line
ingestion pipeline that produces the data those tests assume is correct has zero coverage**, and the
one ingestion test runs nowhere and exercises dead code. Any audit that cites "65 tests" as evidence of
reliability (it recurs in feature-depth, data-quality intros) is **overstating the safety net** — the
*inputs* to the trusted algorithm are untrusted. This is consistent with code-quality's own finding;
I'm flagging that the rest of the panel should not have leaned on "tested" as broadly as it did.

---

## 3. Cross-cutting themes (issues that connect multiple dimensions)

### C1 — "Trust the data" is the load-bearing assumption under the *entire* go-to-market plan, and it is currently false
This is the most important cross-cutting theme. Trace it:
- **Product-strategy** recommends the wedge be **allergen/free-from safety** ("the real moat").
- **Data-quality** proves the free-from labels are **unsafe** (P0: gluten-free served to coeliacs;
  "Vegetarian" bacon lasagne; "Vegan" honey dishes) — verified in `buildRecipe.js:111-120, 234-237`
  and the curated files.
- **SEO** wants to publish those recipes as `Recipe` rich results with `healthLabels` baked into
  structured data — i.e. **broadcast the wrong labels to Google**.
- **Code-quality** shows the pipeline that derives those labels is **untested**, and the filter that
  serves them **silently drops filters** (`appliedFallback` consumed nowhere — verified).
- **Architecture** shows the labels can't even be reliably *queried* (missing cuisine+diet composite;
  10 indexes, no cuisine×diet pair — verified).

So the chain is: *position on trust → publish for SEO → serve via filters → all four layers are
individually broken, and the breakage compounds.* **The market-ready plan is built on a data-correctness
foundation that does not yet exist.** The fix is the data-quality "prove it or don't claim it"
verification stage — and it must precede the product re-positioning and the SEO publish, not run in
parallel. This is the theme the panel most needs to hear as one sentence: **you cannot market the moat
until the moat is real, and right now it is mislabelled.**

### C2 — Read economics are the spine connecting performance, architecture, ops, feature-depth, and data
Five separate audits independently arrive at the same physical bottleneck — **client reads × users vs
50K/day** — from five directions (perf F3, arch F2, ops F1, feature F12, data cross-cutting). They all
recommend variants of the same two fixes: **(1) pre-bake a one-read home feed, (2) stop re-fetching
recipe docs across Browse→Basket→List.** When five independent reviewers converge on one mechanism,
that mechanism is the highest-confidence action item in the entire panel. It is currently rated P1 in
each silo; **collectively it is the P0 that keeps the lights on** (see §0). It also has the rare
property of *paying off in every dimension at once*: cheaper reads (ops), faster LCP (perf), more users
per quota (arch), headroom for new features (feature), and smaller payloads that drop the inline-SVG
blob (data). Do this first.

### C3 — Everything the product needs to *retain* users requires a write/auth surface the security posture isn't ready for
Product (retention loop, accounts), feature (saved plans, favourites, ratings), and ops/security
(public-read, no App Check, no abuse control) are on a collision course. The retention strategy's
"add accounts + per-user writes" depends on a 20K/day write cap that is **un-App-Check-protected and
trivially exhaustible** the moment writes open (G6). Theme: **the growth roadmap and the security
hardening are the same project and must be sequenced together** — App Check before writes, not after.

### C4 — The panel optimises the funnel's *middle* while both *ends* are missing
UX, performance, and a11y deeply polish Browse→Meal→Basket→List (the middle). But the **entry** (SEO:
zero discovery surface — verified empty shell on every URL) and the **exit** (product/feature: no
supermarket hand-off, no shareable artefact, no return loop) are absent. A beautifully polished middle
with no way in and no way back is a demo, not a product. Theme: **before more middle-polish, build one
real entrance (deep-linkable/crawlable meal pages) and one real exit (shareable list URL +
affiliate/utility hand-off).** This reframes the brief's "delivery-app UX" north star (product F7 is
right to challenge it): the gap isn't chrome, it's the two ends.

### C5 — "Feasible on Spark" is doing a lot of quiet work across the panel
Nearly every audit tags its recommendations "free on Spark." True item-by-item. But the **aggregate**
is not free of *effort or risk*: SSG prerender (hydration risk), App Check (integration), per-user
writes (abuse surface), CI deploy (token/IAM), analytics (GDPR). "Free on the free tier" has been
conflated with "cheap to do safely." Theme for the reader: filter the panel's recommendations by
*implementation risk and legal overhead*, not just *infra cost* — the constraint that bites next is
**owner-time and compliance**, not Firebase billing.

---

## 4. The 3–5 issues most likely to actually block "market-ready"

Ranked by "if unfixed, would a reasonable observer say this isn't ready to launch?"

### B1 — The site is intermittently unusable due to read-quota exhaustion (availability) — **P0, blocks everything**
A product that returns errors to cold visitors is not market-ready by any definition. This is **live
right now** (verified 429). It must be fixed before *any* growth work, because every other improvement
(SEO traffic, sharing, the wedge) drives traffic *into a closed door* and accelerates the outage. Fix =
C2's pre-baked one-read home feed + cross-screen doc caching + a watched uptime check (the convergent
recommendation of five audits). Until a cold user can reliably complete Browse→Basket→List, nothing
else is "ready." **This is the gate.**

### B2 — The differentiating data is wrong, and the chosen wedge depends on it being right (correctness + trust + liability) — **P0 for the allergen positioning, P1 otherwise**
Coeliac-unsafe "gluten-free" labels, meat in "vegetarian" dishes, dairy in "vegan" dishes — all
shipping live, all in the layer the product strategy wants to market as the moat (C1). You cannot launch
a "safe meal planner for people who can't eat X" on labels that are unsafe; and publishing them via SEO
structured data broadcasts the errors. The data-quality "prove it or don't claim it" verification stage
is a launch prerequisite for the recommended positioning, and a trust/liability prerequisite regardless.

### B3 — Zero discovery surface + no shareable artefact (no way in, no way back) — **P1, blocks growth**
Every meal URL serves an empty shell; robots/sitemap/manifest are absent (verified — W1 corrects the
panel's own error here); the list can't be shared as a link or rebuilt. With no accounts and no SEO,
there is **no acquisition channel and no retention loop at all** — the cheapest growth channels for a
no-budget app are exactly the ones that are 0% built. Minimum viable: ship the SEO quick-wins (static
robots.txt, default OG, per-route titles), the URL-encoded basket/list (G2), and a meal-share button.
Without these, "market" has no meaning — there's no path to or from the market.

### B4 — No CI, no deploy automation, no alerting, no error tracking — operationally not a service yet — **P1, blocks "ready"**
Deploys ride a single drift-prone human login; **committed composite indexes are undeployed**, so
filters silently fall back (verified: 10 indexes, no cuisine×diet pair, and `appliedFallback` consumed
nowhere); nothing tests/builds before ship; nothing alerts when the cron, the quota, or the site fails.
A thing you can't reliably deploy, can't tell is broken, and whose filters are silently wrong is not a
service. The fix is one coherent half-day: token-based CI deploy + `ci.yml` (test/build) + an
`if: failure()` notify + a watched freshness/uptime heartbeat (G1/G4).

### B5 — No legal/compliance baseline (attribution, privacy, allergen liability, AI-image honesty) — **P1, a genuine launch blocker the panel omitted**
Going "to market" in the UK without a privacy policy/cookie consent (triggered the moment the
universally-recommended analytics lands), without verifiable source attribution (a licence condition,
flagged as possibly illegible), with allergen labels that are wrong (liability), and with AI images that
may misrepresent the dish, is not launch-ready. No dimension owned this (G3). It need not be heavy —
a privacy policy, a cookie notice, a compliant attribution treatment, and honest "AI-generated /
approximate" labelling — but it is non-optional for a public commercial launch.

---

## 5. What the panel got right (so the critique is calibrated)

The panel is, overall, strong, evidence-based, and admirably honest about its own uncertainty. Specific
credit:
- **Data-quality** correctly inverts the central bug ("labels asserted optimistically vs proven from
  ingredients") — the most important single insight in the panel; I verified its P0s in source.
- **The read-economics convergence** (C2) across five audits is exactly what a good panel should
  produce: independent reviewers triangulating the real bottleneck.
- **Code-quality** correctly punctures the "65 tests = safe" comfort and finds the dead
  `backfillDriver` + the unconsumed `appliedFallback` — both verified.
- **Product-strategy F7/F9** rightly challenges the brief's "be like Just Eat" framing and names the
  riskiest assumption (one-shot tool vs returnable product) — the correct *strategic* doubt.
- **Ops-security** is the only audit that led with the live outage and named the human-login SPOF.
- **A11y** is precise and measured (computed contrast ratios), and fairly credits what's already good.
- **Architecture** Blaze cost-modelling and idempotency analysis are genuinely useful and correct.

The gaps above are not failures of rigour within each lane — they are the **seams between lanes** (no
availability owner, no legal lane, no one connecting "the wedge needs the data that's broken") and a
handful of factual/severity slips (W1 most importantly). The panel's own recommendations, **resequenced
by the cross-cutting themes** — *fix reads (B1) → fix data (B2) → open the two ends + ship ops/CI
(B3/B4) → add the legal baseline (B5) → then re-position and add retention* — are a credible path to
market-ready. The missing word throughout is **sequencing**: almost everything is "P1, free on Spark,"
which is exactly the situation where a critic's job is to say *which P1 keeps the lights on first.*
That P1 is B1.

---

## Appendix — claims I independently re-verified (2026-06-19)
- Firestore `facets/global` and `system/last_ingestion` → **live HTTP 429 RESOURCE_EXHAUSTED** (the
  outage is present, not hypothetical).
- Served root (`-A Googlebot`) → only `<title>Larder — browse meals…</title>`; **no** og/twitter/
  canonical/manifest/ld+json (SEO empty-shell confirmed).
- `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest` → all **HTTP 200 `text/html`** (the shell);
  `public/` contains only `favicon.svg` + `dishes/` → **W1 confirmed: product-strategy F8 is wrong.**
- `ShoppingList.jsx:366` → `<ReceiptList list={list} imageFor={imageFor} />` — **no** `checkedIds`/
  `onToggleItem` (tick-state-lost confirmed; ReceiptList implements the controlled path but it's unwired).
- No `home/shelves`/`home/feed`/pre-baked feed doc in `ingestion/` (the convergent C2 fix is unbuilt).
- `.github/workflows/` = `ingest.yml`, `generate-images.yml`, `keepalive.yml` only — **no** deploy/test/
  build workflow (B4 confirmed).
- `firestore.indexes.json` → 10 composites; `cuisine` and `dietLabels` never co-occur (filter-drop
  confirmed).
- `buildRecipe.js:234-237` → curated `healthLabels` discarded at `parseCompleteness >= 0.7`;
  `:255` → `imageUrl: GENERATED_IMAGES[id] || src.imageUrl` (generated overrides real photo — data F5
  confirmed).
- `basket.js` → clamps `householdSize` (max 12) but **no cap on `recipeIds`** (G2/W6 confirmed).
