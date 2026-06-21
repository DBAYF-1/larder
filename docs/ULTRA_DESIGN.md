# Larder — Ultra Design: the full meal-life loop

> **North star.** Larder takes a household from _"what shall we eat?"_ to _"that was
> delicious, let's have it again"_ — one continuous loop: **discover → plan → list →
> shop → stock → cook → repeat** — and gets quietly smarter at every turn. Everything
> below is the map from what we have today to the perfect version of that loop, built
> so the long-term goal (hyper-personalised household profiles) is _possible from the
> ground up_ without us over-building now.

This document is the single source of product truth. It supersedes nothing in
[`IMPROVEMENT_ROADMAP.md`](IMPROVEMENT_ROADMAP.md) (that remains the near-term
engineering backlog); it sits _above_ it and gives the backlog its destination.

---

## 0. How your brief maps to this design (nothing dropped)

| You asked for | Where it lives |
|---|---|
| Interactive list — take things off | §2.3, §5 (Interactive List v2), §6.1 |
| Request **substitute** when unavailable | §3.5 Substitution graph, §5, §6.1 |
| Request **alternative** when "not to taste" | §3.5 (taste-swap), §6.1 |
| **Smart learning** that remembers → profiles / hyper-personalisation | §3.2 Preference & Learning engine, §7 |
| Follow-up: **confirm receipt** of goods — OCR a full receipt _or_ tick manually | §2.4, §3.6 Receipt ingestion |
| **Calendar menu** → pick the planned meal → pull recipe **scoped to what was bought** | §2.6, §6.4 |
| **Specialist items separated** & flagged at **browse _and_ shopping** if not in a normal supermarket | §3.4 Availability taxonomy, §6.1, §6.5 |
| **Pantry** of owned/specialist items the user manages; unlocks future recipes | §3.3 Pantry, §6.2 |
| The loop: order → list → ordered → recipes → favourite → repeat | §1 The Loop |
| _"Autonomously identify further improvements, don't widen scope endlessly"_ | §2/§3 (my additions, marked ✚), §9 phasing, **§10 scope guard** |

---

## 1. The Loop (the spine everything hangs from)

```
        ┌─────────────────────────────────────────────────────────────┐
        │                      LEARNING ENGINE (§3.2)                   │
        │   every action becomes a signal → preference model → applied │
        └───▲────────▲────────▲────────▲────────▲────────▲────────▲────┘
            │        │        │        │        │        │        │
   ┌────────┴──┐ ┌───┴────┐ ┌─┴─────┐ ┌┴──────┐ ┌┴─────┐ ┌┴────┐ ┌─┴──────┐
   │ 1 DISCOVER│→│ 2 PLAN │→│ 3 LIST│→│ 4 SHOP│→│5 STOCK│→│6 COOK│→│7 REPEAT│
   │  browse   │ │calendar│ │aisle  │ │tick / │ │pantry │ │cook  │ │favourite│
   │  order    │ │week    │ │interact│ │OCR    │ │inv.   │ │mode  │ │ re-shop │
   └───────────┘ └────────┘ └───────┘ └───────┘ └───────┘ └──────┘ └────┬────┘
        ▲                                                                 │
        └─────────────────────────  repeat  ─────────────────────────────┘
```

Each stage has a **current state**, a **target**, and a **gap** (§2). Three
**cross-cutting systems** (§3) are the connective tissue: the **pantry** (what you
own), the **preference model** (what you like), and the **ingredient knowledge**
(availability + substitutions). The loop only closes when stages 4→5→6 exist —
**that closure is the half of the product that is missing today.**

---

## 2. The lifecycle, stage by stage

### 2.1 Discover (order)
- **Now:** delivery-app browse, rails, search, "For you" rail, add-to-basket, meal page with JSON-LD. _(Phases A–C, shipped.)_
- **Target:** discovery is **preference-aware** (boost liked cuisines/ingredients, demote disliked), **pantry-aware** ("you already have most of this"), and **honest about specialist needs** before you commit (§6.5).
- **Gap:** ranking ignores the preference model; no specialist badge on cards/meal; no "cook from what I have" entry.

### 2.2 Plan (calendar)
- **Now:** weekly planner (Mon–Sun × breakfast/lunch/dinner), localStorage, "build this week's list". _(Phase C.)_
- **Target:** a true **calendar/agenda** that is the home of stages 2→6: each planned slot carries its lifecycle state (`planned → listed → shopped → cooked`), can open the recipe, and reflects what's bought.
- **Gap:** planner is write-once into the basket; it has no memory of state, no link forward to cooking, no per-slot status.

### 2.3 List (interactive) — _your #1 ask_
- **Now:** consolidated, aisle-sorted, quantity-scaled, pack-rounded list; tick-off persisted; leftovers panel; share/save; supermarket deep-links. _(Phases A–C.)_
- **Target — Interactive List v2 (§5, §6.1):** every line can be
  - **removed / restored** (with undo) — "I don't want this",
  - **substituted** — "not available" → ranked alternatives from the substitution graph, quantity re-scaled,
  - **taste-swapped** — "not to my taste" → swap the ingredient _or_ swap the whole meal,
  - **marked "I already have this"** → moves to pantry, drops off the buy-list,
  - **split by availability** — a separate **Specialist** section for things a normal supermarket won't stock (§6.5).
  - Every one of these actions is a **learning signal** (§7).
- **Gap:** the list is currently read-only except for ticking; no remove, no substitute, no pantry-deduction, no specialist split.

### 2.4 Shop (acquire & confirm) — _the missing follow-up_
- **Now:** tick items as you buy; deep-links to grocer search.
- **Target:** **"Confirm your shop"** closes the buy step two ways:
  1. **Manual** — tick as you go (exists) → on _Done_, bought items flow into the **pantry**.
  2. **Receipt OCR (§3.6)** — photograph the receipt; on-device OCR parses line-items, fuzzy-matches them to the list, you confirm, matched items tick off **and** populate the pantry with quantities. The image never leaves the device.
- **Gap:** ticking is terminal — it doesn't feed anything forward; no receipt capture; no "did you get everything?" reconciliation.

### 2.5 Stock (pantry) — _the keystone that unlocks the back half_
- **Now:** nothing. Leftovers are _shown_ but not _kept_.
- **Target — Pantry (§3.3, §6.2):** a persistent inventory of what the household owns —
  from receipts, manual adds, "already have" on the list, and **pack leftovers** (the
  engine already computes the spare). Specialist staples (the obscure Chinese black
  vinegar) live here permanently and **enable future recipes without re-flagging or
  re-buying**. The pantry feeds back into stages 1 (cook-from-pantry), 3 (don't buy
  what you own), and 6 (consume on cook).
- **Gap:** the entire pantry system.

### 2.6 Cook (calendar → recipe scoped to what you bought)
- **Now:** cook mode — full-screen step-by-step, wake-lock, timers. _(Phase C.)_
- **Target:** from a **planned calendar day**, open the meal and cook it with the recipe
  **scoped to reality** — each ingredient shows _have it (pantry/receipt) / need it_,
  any substitutions you chose are applied, and finishing the cook optionally **deducts**
  consumed ingredients from the pantry. A **"what can I cook now?"** view suggests meals
  makeable from current stock.
- **Gap:** cook mode is decoupled from plan, pantry, and the substitutions made at list time.

### 2.7 Repeat (favourite & habit)
- **Now:** saved lists ("shop again"); "For you" recency rail.
- **Target:** **favourite** a meal (heart), **rate** after cooking, **"cook again"**, **"repeat last shop"**; repeats surface on the home and calendar; the learning loop makes each repeat easier than the last.
- **Gap:** no favourites, no post-cook rating, no first-class repeat surfaces.

---

## 3. Cross-cutting systems (the connective tissue)

### 3.1 Identity & profiles ✚
The substrate for everything personal. **Phased so we never block on a backend:**
1. **Anonymous-first (now → near):** all personal state (pantry, prefs, plans, history)
   in `localStorage`, behind clean versioned modules. No account required to use the
   whole loop on one device.
2. **Accounts (free on Spark via Firebase Auth):** anonymous → email/Google upgrade.
   On sign-in, local state **migrates** into `users/{uid}/…` Firestore docs and syncs
   across devices. _Firebase Auth is free on the Spark tier — accounts do **not** force
   Blaze._
3. **Household profiles (long-term):** one account, several eaters, each with diet /
   allergens / dislikes; the list and ranking satisfy the **union** of constraints.
   _We design the data model for this now (a `members[]` array) and ship single-profile
   first._

> **Design rule:** write every personal feature against a small **storage interface**
> (`get/set/subscribe`) with a localStorage implementation today and a Firestore
> implementation later. No screen talks to storage directly. This is the single most
> important "build from the ground up" decision — it makes accounts a swap, not a rewrite.

### 3.2 Preference & Learning engine ✚ — _your "smart learning process"_
Two layers, both built from day one even while simple:

- **Event log** (`history`): an append-only stream of typed events —
  `view, add_to_basket, remove_from_list, substitute(from→to), already_owned,
  bought(via tick|ocr), cooked(recipeId), rated(recipeId,score), favourited`. This is
  the **raw substrate**; capturing it now means future smarter models can learn
  _retroactively_. (`personalize.js` is the seed — extend it to a typed log.)
- **Preference model** (derived, versioned): `dislikedIngredients`, `preferredSubstitutes`
  (ingredient → chosen swap), `pantryStaples`, `householdSize`, `preferredGrocer`,
  `cuisine/courseAffinity` (exists), `freeFrom/diet defaults`, `unitSystem`.

**Application points** (where the model earns its keep):
| Signal learned | Applied at |
|---|---|
| disliked ingredient | Discover ranking demote; List taste-swap default; "hide meals with X" |
| chosen substitute (A→B) | List auto-applies known swap; substitute picker ranks B first |
| pantry staples | List auto-omits owned staples ("you always have olive oil") |
| preferred grocer | Shop panel defaults; aisle order tuned to that store (future) |
| favourites + ratings | Repeat surfaces; "For you"; re-plan suggestions |

**Privacy:** the model is the user's. Device-only until they opt into an account;
exportable and deletable (ties to the existing Privacy/Terms pages). No third-party
profiling. This is consistent with Larder's **prove-or-omit** ethos.

### 3.3 Pantry / inventory ✚
A keyed store of owned items: `pantry/{ingredientId}` → `{ qty, unit, location
(fridge|freezer|cupboard), specialist, source (receipt|manual|leftover|already-owned),
addedAt, expiresAt? }`. It **deducts** from new lists, **enables** recipes (esp.
specialist), and is **replenished** by the shop step and pack leftovers. Management UI
in §6.2.

### 3.4 Availability taxonomy ✚ — _specialist vs. conventional_
Ingredient-level metadata (ingestion-side, computed once):
- `availability: 'common' | 'specialist'` — derived from a **curated specialist list**
  (gochujang, doubanjiang, Chinese black/Chinkiang vinegar, tamarind paste, dashi,
  kaffir lime leaves, gochugaru, asafoetida, pomegranate molasses, sumac, miso, …)
  plus keyword heuristics, with a manual override file (same pattern as the existing
  ingredient resolution-fixes).
- `specialistNote` — where to get it ("East-Asian grocer or online").
- `pantryStaple: boolean` — salt, pepper, oils, common spices: usually owned, eligible
  for auto-omit.
- `shelfLifeDays?` — drives pantry expiry hints.

This single field powers **both** specialist touchpoints (browse badge + list section)
and the pantry's "specialist owned → unlock recipe" behaviour.

### 3.5 Substitution graph ✚
Ingredient → ranked acceptable substitutes: `{ ingredientId, ratio, note,
dietImpact }` (e.g., _black vinegar → rice vinegar + pinch sugar, 1:1, note, no diet
change_). Authored as a curated dataset (seed the top ~150 high-frequency ingredients;
expand over time). Powers the List's **substitute** action (unavailable) and informs
the **taste-swap** (not-to-taste, which may also offer whole-meal alternatives via the
existing search over `searchTokens`). Substitutions chosen feed the preference model.

### 3.6 Receipt ingestion (OCR) ✚
**On-device, free, private.** Pipeline:
`capture/upload → client OCR (Tesseract.js WASM) → line-item parse (price-pattern
heuristics) → fuzzy-match to active list (token overlap + edit distance) → user confirms
→ tick + pantry write → discard image`. Corrections ("TES BEEF MINCE 500G" = beef mince)
are **learning signals** that improve matching. _No server, no Cloud Storage, no
image leaves the device_ — which is exactly why it fits the Spark tier and the privacy
stance. Cloud OCR (Google Vision/Textract, higher accuracy) is a **deferred Blaze
upgrade**, not a dependency.

---

## 4. Data model (concrete, free-tier-budgeted)

**Existing (ingestion-owned, public-read):** `recipes`, `ingredients`, `facets/global`,
`home/feed`, `meta/last_ingestion`.

**Ingredient doc additions** (ingestion): `availability`, `specialistNote`,
`pantryStaple`, `shelfLifeDays`, `substitutes[]`.

**Recipe doc additions** (ingestion, precomputed for browse-time flags):
`specialistIngredientIds[]`, `pantryStapleShare` (0–1, how much a typical pantry covers).

**Per-user (auth-gated; localStorage mirror while anonymous):**
```
users/{uid}                      profile: householdSize, members[], diet/freeFrom
                                 defaults, allergens[], dislikedIngredientIds[],
                                 preferredGrocer, unitSystem, prefsVersion, updatedAt
users/{uid}/pantry/{ingId}       {qty, unit, location, specialist, source, addedAt, expiresAt?}
users/{uid}/plans/{weekId}       calendar: days{slot:{recipeId, status}}
users/{uid}/lists/{listId}       items[]{ingId, state: needed|removed|owned|bought|substituted, sub?{to,ratio}}
users/{uid}/history/{eventId}    typed event log (the learning substrate)
users/{uid}/favourites/{recipeId}{addedAt, rating?, timesCooked}
```

**Security rules:** `match /users/{uid}/{document=**} { allow read, write: if
request.auth != null && request.auth.uid == uid; }`. Public catalogue stays read-only.

**Free-tier budget (Spark: 50K reads / 20K writes / 1 GiB / day):** a returning
signed-in session reads a handful of docs (profile + pantry + active plan + the
**one** `home/feed` doc — the read-economy win already shipped), and writes only on
explicit actions (tick, substitute, cook, receipt). Even generous per-user activity
keeps thousands of DAUs inside Spark. **The model is free-tier-native; Blaze is only
ever needed for server OCR, FCM push at scale, and large ingestion** (§8).

---

## 5. Engine upgrade — `buildShoppingList` v2 (keep it pure)

The pure engine is the crown jewel; **do not regress it**. Extend by _adding inputs_,
not changing semantics:

```
buildShoppingList(basket, recipes, ingredients, {
  pantry,            // owned items → deduct / strike-through "from your pantry"
  substitutions,     // user/preference swaps applied before consolidation
  removedIngredientIds, // soft-removed lines
  splitSpecialist,   // emit a separate "specialist" section
}) → { sections[], specialistSection, totals, leftovers, pantryApplied[] }
```
- Deduction is **transparent**: show what was covered by the pantry and why (honesty).
- Substitutions are applied _before_ consolidation so quantities merge correctly.
- Output stays a pure function of inputs → fully unit-testable (extend the existing
  43-test suite). State (what's removed/owned/substituted) lives in the list doc /
  store, never in the engine.

---

## 6. UX surfaces (the new/changed screens)

### 6.1 Interactive List v2
Per row: a kebab/long-press menu → **Remove** (undo toast) · **Substitute** (sheet of
ranked alternatives, qty re-scaled) · **Swap for taste** (alternative ingredient _or_
"find meals without this") · **I already have this** (→ pantry). A pinned **Specialist**
section at the top with where-to-buy notes and per-item "I own it". Running summary:
"_3 from your pantry · 2 specialist · 14 to buy_".

### 6.2 Pantry screen
Grouped by location; add/edit/remove; "running low" and "use it up" (ties to leftovers +
"what can I cook now?"). Specialist items badged. Bulk "add my staples" on first run.

### 6.3 Confirm-shop / receipt
After shopping: **"Tick as you bought / Scan receipt."** Scan → on-device OCR →
match-confirm UI (proposed ticks, editable) → pantry populated. Manual → on _Done_,
"add bought items to pantry?".

### 6.4 Calendar cook
Agenda/calendar of the plan with per-slot status chips (`planned/listed/shopped/cooked`).
Open a day → recipe **scoped to reality** (have/need per ingredient, substitutions
applied) → cook mode → on finish, optional pantry deduction + "rate this meal".

### 6.5 Specialist flagging (two touchpoints, one source)
Driven by `availability:specialist` (minus what's in the pantry):
- **Browse/meal:** a quiet badge — _"Needs a specialist ingredient (black vinegar) —
  Asian grocer or online"_ — so the choice is informed _before_ committing.
- **List:** the separated Specialist section. Owned specialist items (pantry) are
  silently satisfied — no nag, recipe enabled.

### 6.6 Favourite & repeat
Heart on cards/meal; post-cook rating; home "Cook again" + "Repeat last shop"; calendar
"re-plan this week".

---

## 7. The learning loop, concretely
`action → event logged → model updated → next experience changed`. Examples:
- Remove "coriander" twice → offer _"hide meals heavy on coriander?"_ and pre-tick the
  taste-swap next time.
- Substitute black vinegar → rice vinegar once → next list auto-applies it (reversible,
  shown).
- Buy olive oil three shops running → suggest marking it a **pantry staple** → auto-omit
  thereafter.
- Cook + 5-star a recipe → surfaces in "For you" and "Cook again"; its cuisine gains
  affinity weight.

All reversible, all visible, all the user's data. Start with **rules over the event
log** (cheap, explainable); the log makes a learned model possible later without
re-instrumenting.

---

## 8. Architecture & the free/paid line

| Capability | Spark (free) approach | Blaze (later, only if needed) |
|---|---|---|
| Accounts | Firebase Auth (email/Google/anon) — **free** | — |
| Per-user data | Firestore `users/{uid}/…` within quota | scale beyond Spark quotas |
| Receipt OCR | **Tesseract.js on-device** | Google Vision/Textract for accuracy |
| Sync/offline | Firestore offline persistence (shipped) + PWA | — |
| Notifications | in-app only | FCM push ("cook tonight?") |
| Ingestion/scale | GitHub Actions + Admin SDK (shipped) | bigger pipelines |

**Principle:** every loop-closing feature ships **free-tier-native**; Blaze is an
_accuracy/scale upgrade_, never a gate. Offline-first is mandatory (kitchens and shops
have bad signal): pantry, active list, plan, and cook mode must all work offline.

---

## 9. Phased roadmap (natural upgrades, dependency-ordered)

Each phase is **independently shippable, testable, and free-tier**. Scope guard in §10.

- **P0 — Foundations of "personal" (substrate).** Storage interface (§3.1); typed
  **event log** + extended preference model (extend `personalize.js`); favourites +
  post-cook rating. _No backend; unlocks everything._
  _Done when:_ every personal action is logged; favourites persist; tests green.

- **P1 — Interactive List v2.** Remove/restore, substitute (needs P2 graph or a stub),
  taste-swap, "already have". `buildShoppingList` v2 inputs (§5). _Your #1 ask._
  _Done when:_ list is fully editable, engine still pure + tested, actions logged.

- **P2 — Ingredient knowledge (ingestion).** Availability taxonomy + specialist list +
  substitution graph + pantry-staple/shelf-life. Runs in parallel with P1 (different
  files). _Done when:_ recipes carry `specialistIngredientIds`, substitutes seeded.

- **P3 — Pantry.** Inventory store + screen; list deduction; leftovers → pantry;
  specialist-owned → recipe enablement.
  _Done when:_ owning an item removes it from buy-lists and unlocks its recipes.

- **P4 — Shop & confirm.** Manual confirm → pantry; **receipt OCR** (on-device) →
  match-confirm → tick + pantry.
  _Done when:_ a real receipt photo ticks the list and stocks the pantry.

- **P5 — Calendar cook.** Plan↔cook link, per-slot lifecycle status, recipe scoped to
  pantry/receipt, consume-on-cook, "what can I cook now?".
  _Done when:_ a planned week flows plan→list→shop→cook with state intact.

- **P6 — Learning v2 + Repeat surfaces.** Apply the model to ranking + list + substitute
  ranking; "cook again", "repeat last shop", gentle habit nudges (in-app).

- **P7 — Accounts & sync (free).** Firebase Auth; migrate local→`users/{uid}`; cross-device.
  _Sequenced after the local loop is proven, so we sync something that already works._

- **P8 — Households & hyper-personalisation (long-term).** Multi-member profiles
  (union constraints), deeper learned model, optional cloud OCR/push (Blaze).

```
P0 ─┬─ P1 ─┐
    └─ P2 ─┴─ P3 ─ P4 ─ P5 ─ P6 ─ P7 ─ P8
```

---

## 10. Scope guard — what we deliberately do **not** build now
To keep this "the perfect version of the loop", not an everything-app:
- ❌ Real-time grocer **prices/stock** or true basket-API checkout (needs partnerships;
  deep-link search is the honest stand-in, shipped). Revisit only with a price source.
- ❌ Social feed / sharing network / UGC recipes. (Share-a-list exists; that's enough.)
- ❌ Native mobile apps (the PWA is the delivery vehicle).
- ❌ Nutrition/macro **tracking** as a goal-setting product (we _show_ per-serving facts;
  we don't become a diet tracker).
- ❌ Server-side OCR / push **until** Blaze is justified by accuracy or scale.
- ❌ Speculative AI chat/agent layer over the catalogue (the loop is the product).
Anything not advancing _discover→…→repeat_ is out until the loop is excellent.

---

## 11. Open decisions (genuine forks — my recommendation in **bold**)
1. **When to introduce accounts?** **Recommend P7** (after the local loop works) — sync
   something proven, and never block first-use behind sign-up. (Alt: earlier, if
   cross-device is a launch requirement.)
2. **OCR engine first cut?** **Recommend Tesseract.js on-device** (free, private,
   Spark-compatible). (Alt: cloud OCR for accuracy → requires Blaze.)
3. **Substitution graph source?** **Recommend curated seed (~150 ingredients) + manual
   override file**, expand over time. (Alt: derive from an external food API → keys/quota.)
4. **Specialist classification?** **Recommend curated list + heuristics + override file**
   (mirrors the existing ingredient-resolution approach). (Alt: crowd/learned later.)

---

## 12. Success metrics (does the loop actually close?)
- **Loop-completion rate:** % of started baskets that reach a _cooked_ meal.
- **Repeat rate:** % of users who run a second shop / cook a favourite again.
- **Substitution acceptance** and **pantry-omit acceptance** (the learning is useful).
- **Receipt-confirm usage** and OCR match precision.
- **Reads/writes per active user/day** stays well inside Spark (operational health).

---

### Appendix A — module map (where each upgrade attaches in the codebase)
| Upgrade | Attaches to / new |
|---|---|
| Storage interface, event log, prefs | extend `src/lib/personalize.js` → `src/lib/profile.js` + `src/lib/events.js` |
| Interactive list actions | `src/components/ReceiptList.jsx`, `src/screens/ShoppingList.jsx` |
| Engine v2 (pantry/subs) | `src/lib/buildShoppingList.js` (new inputs, pure) + tests |
| Pantry | new `src/state/pantry.js` + `src/screens/Pantry.jsx` |
| Availability + substitutes + staples | ingestion: `ingestion/pipeline/*`, new curated data files |
| Specialist flags | `MealCard`, `Meal.jsx` badge; `ShoppingList.jsx` section |
| Receipt OCR | new `src/lib/ocr.js` (Tesseract.js) + `src/screens/ConfirmShop.jsx` |
| Calendar cook | extend `src/state/planner.js` + new `src/screens/Calendar.jsx`; link `CookMode.jsx` |
| Favourites/repeat | new `src/state/favourites.js`; surfaces in `Browse.jsx`, `Saved.jsx` |
| Accounts/sync | new `src/lib/auth.js` + Firestore impl of the storage interface; `firestore.rules` |
