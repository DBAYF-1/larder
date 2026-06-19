# Larder — Product Strategy & Market Positioning Audit

**Auditor dimension:** Product strategy & market positioning
**Date:** 2026-06-19 · Branch: `main` · Method: READ-ONLY analysis (no app/source changes)
**Evidence base:** repo source under `/Users/danielb/meals/{src,ingestion,docs}`, the live site
`https://larder-dbayft.web.app`, and the live Firestore facets doc
(`facets/global` via the REST API). All claims cite a file, a live observation, or a measured number.

---

## 0. The one-paragraph thesis

Larder is a **well-built tool searching for a wedge**. The engineering is genuinely strong (a pure,
tested shopping-list engine; aisle-sorted receipts; a free-tier architecture that scales to ~2K
recipes today and is designed for 10K). But as a *product* it sits in the most crowded, lowest-moat
corner of the food space — "browse recipes, get a list" — where it competes against Mealime, Whisk/
Samsung Food, Pinch of Nom and the supermarket apps themselves, and it currently has **no account, no
personalisation, no monetisation surface, and no retention loop**. The differentiator that could win —
the *aisle-sorted, quantity-scaled, pack-rounded* shopping list — is real but under-positioned and the
last-mile (actually buying the food) is missing. The riskiest assumption is that "a better static
shopping list" is a product people return to, rather than a feature inside an app they already use.

**Highest-leverage move:** pick ONE constrained-eater wedge (the strongest candidate: **coeliac /
allergen-safe meal planning for the UK**, where Larder's verified `healthLabels` + accuracy discipline
is a genuine moat) and re-position the whole front door around it, *plus* close the last mile with a
supermarket basket hand-off (affiliate). Generic "meal planner" loses to incumbents; "the safe meal
planner for people who can't eat X" is defensible and monetisable on this exact stack.

---

## 1. Findings (ranked by leverage)

Severity = P0 blocker / P1 major / P2 worthwhile / P3 nice-to-have. Impact 1–5. Effort S/M/L.

---

### F1 — No defined target user; positioning is generic "meal planner" (P1, Impact 5, Effort M)

**Evidence.** The product is described everywhere as a generic browse-meals-get-a-list app:
`README.md:1-5` ("browse and 'order' meals like a food-delivery app"); the live `<title>` is
"Larger — browse meals, build your shopping list" and the meta description is "browse meals like a
takeaway, check out a tidy, aisle-sorted UK shopping list"
(`https://larder-dbayft.web.app/` index head). Nothing in the copy names a *who*. The home hero is
text-only value-prop (`OVERHAUL_AUDIT.md` §4.4). The catalogue is breadth-first (1,955 recipes across
48 cuisines, live `facets/global`), which is the strategy of a *general* recipe site.

**Why it matters.** "Meal planner" is a red-ocean category. Mealime, Whisk/Samsung Food (free, owned
by Samsung, huge catalogue + auto shopping list + supermarket integrations), Pinch of Nom (brand +
slimming community), BBC Good Food, and every supermarket app already own it. A new entrant with no
distribution and no account cannot win "general meal planner". Without a sharp target user, every
later decision (which diets to deepen, what copy, what to build next) has no compass.

**Recommendation.** Choose a beachhead and rewrite the front door for it. Strongest candidate given the
existing assets: **UK constrained eaters — coeliac/gluten-free, multi-allergen households, and "free-
from" shoppers** (see F2). Concretely: change the hero, title/meta, and default filters to lead with
the wedge; make the home page default to the wedge's curated rails. This is copy + IA, not a rewrite.

---

### F2 — The real moat (verified allergen/free-from accuracy) is buried, not the headline (P1, Impact 5, Effort M)

**Evidence.** Larder carries `healthLabels[]` and `allergens[]` per recipe (`CONTRACTS.md:50-51`) and
the 10K design treats free-from correctness as *"the whole relationship"* with an adversarial per-diet
verifier (`CATALOGUE_10K_DESIGN.md:59-62, 125-133`). Live data already supports meaningful free-from
filtering: `healthLabels` counts are Nut-free 1,473, Fish-free 1,364, Egg-free 1,247, Gluten-free
1,028, Dairy-free 809 (live `facets/global`). The aisle-sorted, pack-rounded list
(`src/lib/buildShoppingList.js`, `src/lib/shopWalk.js`) is a second genuine differentiator
(`OVERHAUL_AUDIT.md` §8.1, §8.3). Yet none of this is the positioning — the site sells "browse meals
like a takeaway".

**Why it matters.** Generic recipe discovery has no moat; *trusted allergen safety* does. For a coeliac
or a parent of a child with a nut allergy, "I can filter to genuinely safe recipes and get a shopping
list that won't trip me up" is a high-value, high-retention, emotionally sticky job. Incumbents treat
free-from as one filter among many and are notoriously unreliable about it. Larder has already invested
in verification machinery competitors don't bother with — that is the story.

**Recommendation.** Promote free-from from "a filter" to "the product". Lead with it in copy; make the
free-from chips first-class and persistent; show *why a recipe is safe* (the matched/excluded
ingredients) on the meal page; add a visible "verified" treatment for curated/audited labels. This
turns the existing `healthLabels` + verifier work into the marketing.

---

### F3 — The last mile is missing: no supermarket hand-off, the obvious monetisation + utility step (P1, Impact 5, Effort M–L)

**Evidence.** The shopping-list screen offers only Print / Copy to clipboard / Share
(`src/screens/ShoppingList.jsx:316-337`). There is **no supermarket basket hand-off and no affiliate
link anywhere** in the app — a repo-wide grep for `supermarket|affiliate|tesco|sainsbur|ocado|asda`
returns only token/comment references, not features (`grep -rliE` over `src/` → only
`tokens.css`, `global.css`, a comment in `ReceiptList.jsx`). `OVERHAUL_AUDIT.md` §7.5 explicitly flags
"Order from a supermarket" as "the missing delivery-app move" and the "natural monetisation/utility
step", deferred.

**Why it matters.** The user's job isn't "have a list", it's "get the food". Whisk/Samsung Food's
whole value prop is one-tap-to-basket at multiple retailers; that's also how it monetises. Stopping at
a text list (a) caps the value Larder delivers and (b) leaves the only realistic free-tier revenue
source untapped. A "Send to Tesco/Sainsbury's basket" hand-off is *feasible on Spark* because it is a
client-side redirect/affiliate link — no Cloud Functions, no Blaze.

**Recommendation.** Add a "Add these to your basket" step that maps the consolidated list to a
supermarket and hands off. Two feasible tiers:
1. **Affiliate deep-link / search-prefill (S–M, free):** for each item, open the retailer's search or a
   prefilled basket URL; join an affiliate network (e.g. Awin hosts Sainsbury's/Tesco programmes) and
   earn commission on resulting baskets. Pure client redirect — Spark-safe.
2. **Retailer basket API (L, may need a partner/key, still client-callable):** true one-tap basket
   build where an API exists. Note partner approval/cost as a gate.
   Start with (1); it converts the differentiator (a clean, scaled list) into the action that pays.

---

### F4 — No accounts/personalisation → no save, no return reason, no retention loop (P1, Impact 5, Effort L)

**Evidence.** v1 is explicitly *"No accounts / no payment / no courier — basket is client-side only"*
(`README.md:71-72`); basket lives in `localStorage` with no Firestore write
(`CONTRACTS.md:189-191`). `package.json` carries no auth, no analytics, no payments deps (only
`firebase`). There is therefore no saved plan, no favourites, no history, no "your usuals", no email,
no push, no way to bring a user back.

**Why it matters.** Meal planning is inherently *weekly and recurring* — the value compounds with
memory ("re-make last week's plan", "your saved safe recipes", "Sunday planning reminder"). With zero
persistence beyond a device's localStorage, every visit starts cold and there is no growth/retention
loop at all. This is the single biggest structural cap on becoming a *product* vs a *utility page*.
The HARD CONSTRAINT (Spark, no auth in v1) is real but **Firebase Auth + Firestore per-user docs are
free on Spark** (anonymous/email auth + a modest per-user write budget) — so accounts are feasible
without Blaze; the constraint is scope, not platform.

**Recommendation.** Add lightweight accounts (Firebase Auth, free tier) and per-user saved plans/
favourites once the wedge is chosen. Minimum loop: save a plan → email/notify a weekly planning nudge
→ re-open and re-list. Budget the writes (saved plans are tiny and infrequent vs the 20K/day cap).
Sequence this *after* F1/F2/F3 — a retention loop on an undifferentiated product just retains nobody.

---

### F5 — No analytics or funnel instrumentation → flying blind on every product decision (P1, Impact 4, Effort S)

**Evidence.** No analytics/telemetry dependency in `package.json`; errors only `console.error` in the
ErrorBoundary (`OVERHAUL_AUDIT.md` §14.1). MEMORY/known-issues confirm "no analytics/monitoring/
error-tracking". There is no way to measure the browse → meal → basket → list → (share) funnel.

**Why it matters.** Every finding in this document is a hypothesis. Without funnel data you cannot tell
whether people reach the list, whether free-from filters are used, whether Share is clicked, or where
they drop. You will optimise blind and cannot prove product-market fit or measure whether a re-position
worked. This is cheap to fix and gates the value of everything else.

**Recommendation.** Add a privacy-respecting, free analytics beacon (Plausible/Umami self-host, or
Firebase's free GA4 integration, or a tiny custom event ping to Firestore — mindful of write quota).
Instrument the core funnel + filter usage + Share/export. Spark-safe; do it first so F1–F4 can be
measured.

---

### F6 — Catalogue data hygiene undermines the "trustworthy" positioning (P2, Impact 4, Effort S–M)

**Evidence (live `facets/global`).** The cuisine facet has **48 values including obvious duplicates and
country-not-cuisine labels**: `Middle Eastern` (48) AND `Middle-Eastern` (44); `France` (28) AND
`French` (17); `India` (14) AND `Indian` (72); `United States` (34) AND `American` (28); plus raw
country names like `Norway`, `Argentina`, `Venezuela`, `Uruguayan`, `Netherlands`, `Slovakia`. The
diet facet shows `Low-fat` with count **1** (a near-empty, misleading filter) and **`Halal` entirely
ABSENT** despite the 10K design naming Halal a UK-emphasis diet with a 600-recipe floor
(`CATALOGUE_10K_DESIGN.md:66-78`); meanwhile Kosher is present (76).

**Why it matters.** A user who picks "Middle Eastern" gets one of two split buckets and assumes the
catalogue is thin; a Muslim user looking for Halal finds nothing. For a product whose pitch is
trust/accuracy (F2), visibly messy taxonomy and a missing major-religion diet directly contradict the
positioning and erode credibility on first contact.

**Recommendation.** Normalise cuisine values at ingestion (canonical map: collapse `France→French`,
`Middle-Eastern→Middle Eastern`, `India→Indian`, `United States→American`, map raw country names to
cuisines). Suppress facet values below a minimum count (e.g. hide `Low-fat` at count 1) or backfill
them. Add Halal coverage (curated floor) before claiming "every dietary variation". Analysis only here;
the fix lives in the ingestion normalisation layer + a curated Halal set.

---

### F7 — "Market-ready" is undefined; the brief conflates UX polish with product readiness (P2, Impact 4, Effort M)

**Evidence.** `OVERHAUL_AUDIT.md` defines the goal as *"delivery-app-grade product whose benchmark UX
is Just Eat / Uber Eats / Deliveroo"* (lines 3-6) and its entire backlog is presentation-layer (images,
filter bar, SEO). "Market-ready" is framed almost entirely as *looking like a delivery app*. But a
delivery app's job (order food now) is fundamentally different from Larder's (plan + shop later) — and
none of the audit's success criteria are product/business metrics (acquisition, activation = reached a
list, retention = returned next week, any revenue).

**Why it matters.** Benchmarking UX against Just Eat is a *visual* north star, not a *product* one.
Larder will never out-Just-Eat Just Eat, and it shouldn't try — Just Eat delivers cooked food; Larder
helps you cook. Copying delivery-app chrome without a delivery-app job risks a polished product nobody
needs. "Market-ready" should mean: a defined user, a job done end-to-end (incl. the buy, F3), a measured
funnel (F5), and at least one retention or revenue signal.

**Recommendation.** Define market-ready as explicit, measurable gates, e.g.: (1) ≥X% of sessions reach
the shopping list; (2) the chosen-wedge filter is used in ≥Y% of sessions; (3) a working supermarket
hand-off with measured click-through; (4) a return-visit signal. Keep the delivery-app *UX bar* (it's a
good craft target) but stop treating it as the product strategy.

---

### F8 — Differentiation is real but invisible to first-time visitors and crawlers (P2, Impact 4, Effort S–M)

**Evidence.** The two true differentiators — aisle-sorted/pack-rounded list and free-from accuracy —
are only experienced *after* you build a basket and reach `/list`. The home page leads with text copy
and rails (`OVERHAUL_AUDIT.md` §4.4). Worse, the differentiator is invisible to acquisition channels:
the live meal deep-link `https://larder-dbayft.web.app/meal/52772` returns **zero** `og:`/`twitter:`/
`canonical`/JSON-LD tags (confirmed by grep on the fetched HTML); crawlers and social shares see an
empty shell. (Note: `robots.txt`, `sitemap.xml`, and `manifest.webmanifest` now return HTTP 200 live,
so some SEO groundwork has shipped since `OVERHAUL_AUDIT.md` §13 was written — but per-page meta/
structured data is still absent.)

**Why it matters.** If the unique value is only visible deep in the funnel, most visitors bounce before
seeing it, and the product can't earn organic discovery or shareable link previews — the cheapest
growth channels for a no-budget Spark app. The differentiator must show up *above the fold* and *in the
link preview*.

**Recommendation.** (1) Surface a one-line "why Larder" proof above the fold (e.g. a mini aisle-sorted
list snippet, or "Filtered to genuinely gluten-free · sorted by supermarket aisle"). (2) Add per-meal
OG/Twitter + `Recipe` JSON-LD (needs prerender or a tiny SSR/edge step — the one SEO item that may
justify a small Blaze function or a build-time prerender; note the cost). This converts the moat into
acquisition.

---

### F9 — Riskiest assumption: "a better static list" is a returnable product, not a one-shot tool (P1, Impact 5, Effort — diagnostic)

**Evidence.** The entire v1 thesis is a single-session, accountless flow ending in a text list
(`README.md:70-79`, `src/screens/ShoppingList.jsx` Print/Copy/Share). There is no mechanism that would
make a user come *back* (no save, no nudge, no account — F4) and no measurement of whether they do
(F5). The catalogue strategy (10K, every diet) assumes breadth drives the product, but breadth is
exactly what incumbents already have for free.

**Why it matters.** This is the assumption that, if wrong, sinks the product regardless of polish.
Two competing hypotheses: (A) Larder is a *destination* (people plan their week here weekly) → needs
accounts, retention, the wedge; (B) Larder is a *tool/feature* (a one-shot list generator) → then its
realistic future is being a feature inside something else, or a thin affiliate funnel, not a standalone
brand. The current build is neither: it has destination ambitions (10K catalogue) with tool-grade
retention (none).

**Recommendation.** Treat this as the top thing to *validate*, not assume. Cheapest test: ship F5
(analytics) + F3 (a hand-off) + F2 (wedge framing) to a small audience and measure return-visit and
hand-off click-through. If returns are near-zero, pivot to the affiliate-funnel model (lean, monetise
the one-shot) rather than building accounts. Decide A vs B with data before investing in F4's account
system.

---

### F10 — Monetisation has no path on the current build; the only feasible models are unbuilt (P2, Impact 4, Effort M)

**Evidence.** No payments/subscription/affiliate code anywhere (`package.json` has only `firebase`;
grep for `premium|subscription|stripe` finds only token names). HARD CONSTRAINTS rule out Blaze/Cloud
Functions and there are no accounts (so no paywall surface). The 10K design and README are silent on
revenue.

**Why it matters.** A free-tier hobby can stay free, but "market-ready" implies a business question.
The realistic free-stack-compatible options are narrow and all currently at zero.

**Recommendation — feasible models on Spark, ranked:**
1. **Affiliate supermarket hand-off (F3)** — best fit; client-side links; no auth needed; aligns with
   the core job. *Most feasible, do first.*
2. **Recipe/ingredient affiliate + content** — affiliate links to specialist free-from products
   (high-margin niche if the coeliac wedge is chosen). Client-side.
3. **Premium plan** — saved plans, advanced filters, ad-free, meal-plan PDFs. *Requires accounts (F4)
   and a payment processor (Stripe Checkout is a hosted redirect → works without Cloud Functions, but
   webhooks for entitlement ideally want a function → may need Blaze; note the cost/complexity).*
4. **Sponsored/recipe placement** — only credible at scale; premature.
   Avoid display ads (kills the premium feel and the trust positioning). Lead with (1).

---

### F11 — Catalogue depth is uneven per diet; "every diet is a full app" is not yet true live (P2, Impact 3, Effort M)

**Evidence (live vs the 10K floors in `CATALOGUE_10K_DESIGN.md:70-78`).** Live diet counts: Vegetarian
972 (floor 2000), Vegan 376 (floor 1500), Gluten-free 432 in `dietLabels` / 1,028 in `healthLabels`
(floor 1400), Dairy-free 481/809 (floor 1000), High-protein 332 (floor 900), Keto 71, Low-carb 114,
Halal **0** (floor 600). So the live catalogue is at roughly **20% of the design's flagship floors**,
and several "UK-emphasis" diets (Halal, Flexitarian, Whole-food) are absent from live facets entirely.
The 10K expansion is explicitly *DESIGN ONLY — not yet run* and gated on Edamam paid keys + TheMealDB
supporter key (`CATALOGUE_10K_DESIGN.md:1-6, 38-46`).

**Why it matters.** If the positioning becomes "the safe meal planner for diet X" (F1/F2), the catalogue
for X must feel deep on day one or the wedge falls flat. Going wide (all diets shallow) is worse for a
wedge than going deep on one. The 10K plan also reaches breadth mostly via Edamam *link-outs*
(`CATALOGUE_10K_DESIGN.md:30-36`), which are weaker product surfaces (no in-app method) — fine for SEO/
breadth, weak for the core "plan + cook" job.

**Recommendation.** Don't chase 10K-everything. Pick the wedge diet and fund *its* curated floor to
density first (curated = fully displayable, the strongest surface), so that one diet genuinely "feels
like its own complete app". Defer the broad Edamam link-out expansion (and its paid-key cost) until the
wedge is validated (F9). This also conserves the Firestore write budget.

---

### F12 — No habit/growth loop; share is the only built-in loop and it's weak (P3, Impact 3, Effort M)

**Evidence.** The only outbound/viral surface is the Web Share / Copy on the list
(`src/screens/ShoppingList.jsx:262-337`). No referral, no shareable plan link, no email capture, no
public recipe URLs optimised for social (F8). No notifications/PWA push (PWA is deferred,
`OVERHAUL_AUDIT.md` §14.2). The product is install-able (manifest now live, HTTP 200) but there's no
re-engagement hook.

**Why it matters.** On a zero-budget Spark stack, organic + viral loops are the only affordable growth.
Sharing a plain-text list to WhatsApp is low-virality (it doesn't pull the recipient back into Larder).

**Recommendation.** Make sharing a growth loop: share a *link to a recreatable plan/list* (URL-encoded
basket → reopens in Larder), with an OG image preview (F8). Add PWA install prompts + (later) push for
the weekly-planning nudge (PWA push is free on Spark). Capture email at the list step ("email me this
list") as a cheap re-engagement channel. Sequence after the wedge + analytics.

---

## 2. Competitive positioning summary (where Larder can/can't win)

| Competitor | Their job | Larder's standing | Larder's angle |
|---|---|---|---|
| **Whisk / Samsung Food** | Save any recipe, auto list, 1-tap to retailer basket | Behind on breadth, accounts, retailer integration | Don't fight breadth; win on *verified free-from* + *aisle/pack-rounded list quality* |
| **Mealime** | Quick personalised weeknight plans + list | Behind on personalisation/accounts | Win on free-from trust + UK aisle hand-off |
| **Pinch of Nom** | Slimming brand + community + books | No brand/community | Different wedge (allergen, not slimming) to avoid head-to-head |
| **Supermarket apps (Tesco/Sainsbury's)** | Buy groceries; some recipe inspiration | They own the basket; Larder owns planning | Hand *off* to them (F3) rather than compete — turns them into the rail, not the rival |
| **Just Eat / Uber Eats / Deliveroo** | Deliver cooked food now | Different job entirely | Not a competitor; a *UX benchmark* only (see F7) |

**Defensible space:** the intersection of (a) **trusted free-from/allergen accuracy** (verifier-backed),
(b) a **best-in-class consolidated, aisle-sorted, pack-rounded list**, and (c) a **frictionless UK
supermarket hand-off**. No single incumbent does all three well. That triangle is the position.

---

## 3. Highest-leverage move (for this dimension)

**Re-position around one constrained-eater wedge (recommended: UK gluten-free/allergen-safe), and close
the last mile with a supermarket affiliate hand-off — then instrument and measure.**

Concrete first sprint, all Spark-feasible:
1. **F5 (S):** add free analytics + funnel events — so the rest is measurable.
2. **F2 + F1 (M):** re-skin the front door around the wedge; make free-from first-class and show *why a
   recipe is safe*.
3. **F3 (S–M):** ship an affiliate "add to supermarket basket" hand-off from the list — the missing
   last mile and the first revenue.
4. **F9 (diagnostic):** measure return-visits and hand-off CTR to decide destination (build accounts,
   F4) vs tool/affiliate-funnel.

This converts assets Larder *already has* (verified labels, the list engine) into a defensible position
and a revenue path, without needing Blaze, accounts, or the unrun 10K expansion. Breadth, accounts, and
the full catalogue come *after* the wedge is proven — not before.

---

## 4. Open questions / uncertainty flags

- **A vs B (destination vs tool):** unresolved and not yet measurable (F9). The biggest single product
  bet; resolve with data, not opinion.
- **Affiliate availability for UK grocers:** Sainsbury's/Tesco/Ocado affiliate or basket-deep-link terms
  need verification (programme membership, link format, commission). Flagged as a dependency for F3 —
  not confirmed in this audit.
- **Wedge choice:** gluten-free/allergen is the strongest *given current assets*, but Halal (large UK
  market, currently 0 coverage) or slimming/calorie-controlled are alternatives — the right pick depends
  on where the team can build curated depth fastest (F11) and on F5 data.
- **SEO/structured-data fix (F8):** per-page OG/JSON-LD likely needs prerender or a small SSR/edge step,
  the one item that may touch Blaze costs; needs an architecture decision.
