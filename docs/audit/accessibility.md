# Accessibility audit — WCAG 2.2 AA

**Project:** Larder (`larder-dbayft`) · UK meal-planning SPA · React 18 + Vite on Firebase Spark
**Scope of this audit:** keyboard operability (filter sheet / cards / stepper / checkable list),
screen-reader semantics & ARIA, colour contrast against the token palette, focus management on route
change, reduced-motion, image alt text, form labels.
**Method:** static source review of `src/**` + measured contrast ratios computed from the design tokens
in `src/styles/tokens.css` (sRGB relative-luminance per WCAG 2.x). No automated axe run was possible from
this environment (the live site is a client-rendered shell), so DOM-runtime findings are flagged as such.

**Headline:** the codebase is unusually a11y-aware for a v1 — there is a real focus-visible strategy
(`global.css:142-158`), a global reduced-motion kill-switch (`global.css:581-600`), `aria-pressed` toggle
chips, a proper `role="spinbutton"` stepper with arrow keys, 44px tap targets, and `aria-label`s on every
icon button. That foundation means the remaining defects are concentrated and fixable. The two that
genuinely break AA today are (1) a **missing `.sr-only` CSS class** that prints SR-only loading hints as
visible text, and (2) **white-on-tomato-red primary buttons at 3.63:1**, below the 4.5:1 text minimum —
and these recur on every key CTA.

---

## Findings (ranked)

### A11Y-1 — `.sr-only` class is never defined; SR-only loading text renders visibly · P1 · Impact 4 · Effort S
**Evidence.** `src/screens/ShoppingList.jsx:90` renders `<span className="sr-only">Building your shopping
list…</span>` and `src/screens/Meal.jsx:43` renders `<span className="sr-only">Loading meal…</span>`. A repo-wide
search for a `.sr-only` rule (`grep -rn "\.sr-only" src --include=*.css`) returns **nothing** — only
`.u-visually-hidden` is defined (`global.css:413-424`). The class string is therefore inert: the spans
inherit normal flow and paint as visible body text inside the skeleton.
**Why it matters.** Two bugs in one: (a) sighted users briefly see stray "Loading meal…" / "Building your
shopping list…" text overlapping the shimmer (a visual defect), and (b) the intent — a hidden status string
for AT — is half-broken because the container is a plain `<span>`, not a live region, so SR users may get the
visible-but-unannounced text instead of a polite announcement. Note the skeleton wrappers do carry
`aria-busy`/`aria-live` (`ShoppingList.jsx:82`, `Meal.jsx:34`), which partly covers (b), but the visible
leak (a) remains a clear regression.
**Recommendation.** Either (i) add an `.sr-only` alias to `global.css` identical to `.u-visually-hidden`, or
(ii) rename the two JSX usages to `u-visually-hidden`. Prefer (i) (one CSS block) so future use of the
conventional name keeps working. Zero risk, no Blaze needed.

### A11Y-2 — Primary CTAs are white-on-tomato at 3.63:1 — below AA for normal text · P1 · Impact 4 · Effort M
**Evidence (measured).** `--larder-stall #e8534e` with `--larder-stall-ink #ffffff` = **3.63:1**. WCAG 1.4.3
requires 4.5:1 for normal text. This pairing is the label colour on, at minimum:
- Meal screen "Add to basket" — `Meal.css:116-128` (`color: --larder-stall-ink; background: …--larder-stall…`), font `--fs-card` = 16.8px bold → **not** large text (large = 18.66px bold), so 4.5:1 applies.
- Basket "Make my shopping list" — `Basket.css:182-196`.
- ShoppingList "Share" — `ShoppingList.css:55-59` (`.list-action--primary`).
- The reusable primary button `.u-btn--primary` — `global.css:451-455` (used by `EmptyState` action, ErrorBoundary).
- The card add (+) glyph — `MealCard.css:136-137` (white stroke on stall red). As an **icon-only** control this is judged against 1.4.11 (3:1 for UI components), which it **passes** at 3.63:1 — so the card add is fine; the text buttons are not.

**Why it matters.** These are the most important actions in the product, and they fail the most-cited success
criterion. The brand red is fixed, but the text colour isn't.
**Recommendation (token-level, fixes everywhere at once).** Darken the CTA red used *behind white text* to
~`#c8413c` or darker (`--larder-stall-press #d8443f` is itself only 4.17:1 on white — still short). A red of
about `#c2392f` gives ≈4.6:1 with white. Cleanest: introduce a `--larder-stall-strong` token for white-on-red
surfaces and point `.u-btn--primary`, `.meal-add`, `.basket-make`, `.list-action--primary` at it; keep the
brighter `--larder-stall` for the icon-only card add and the count badges (which pass 3:1). Alternatively keep
the red and use a near-black ink label, but that loses the brand look. Effort M because several rules + a token
change + a visual sign-off.

### A11Y-3 — No "skip to main content" link · P1 · Impact 3 · Effort S
**Evidence.** `index.html` has no skip link; `App.jsx` (the shell, lines 29-95) renders a sticky `<header>`
with wordmark + basket button, then `<main className="larder-main">` — with nothing focusable that jumps a
keyboard user past the header. `grep -rn "skip" src index.html` finds only unrelated comments.
**Why it matters.** WCAG 2.4.1 (Bypass Blocks). On the Browse page the header plus the flickable quick-chip
rail plus the search box mean a keyboard user tabs through many controls before reaching the meal grid on
every navigation.
**Recommendation.** Add a visually-hidden-until-focused `<a href="#main" class="skip-link">Skip to content</a>`
as the first child of `.larder-app`, give `<main>` `id="main"` and `tabindex="-1"`. Standard pattern; pairs
well with A11Y-4. Effort S.

### A11Y-4 — No focus or scroll management on client-side route change · P1 · Impact 4 · Effort M
**Evidence.** `App.jsx` uses `<Routes>`/`<Outlet>` (lines 80-89) with **no** scroll-reset or focus-reset on
`location.pathname` change. `useLocation()` is read (line 73) only to key the `ErrorBoundary`. Navigations are
SPA pushes (`navigate('/list')`, `<Link>` cards, `navigate('/basket')`), so after activating a meal card or
"Make my shopping list", focus stays on the now-unmounted trigger / falls to `<body>`, and the viewport keeps
its old scroll position (`html { scroll-behavior: smooth }`, `global.css:21`, only affects in-page anchors).
**Why it matters.** WCAG 2.4.3 (Focus Order). SR and keyboard users get no signal that the page changed and
must tab from the top again; sighted users may land mid-page on the new screen. This is the single most
common SPA a11y gap.
**Recommendation.** On `pathname` change: move focus to a heading or to `<main tabindex="-1">` (`main.focus()`),
and `window.scrollTo(0,0)` (respecting reduced-motion). A small `useEffect` in `App` keyed on
`location.pathname`, or a `<RouteAnnouncer>` that also writes the new page title into an `aria-live="polite"`
region for SR users. Title updates are absent too — `document.title` is the static index `<title>` on every
route (`index.html` `<title>`), so consider setting it per screen as part of this fix. Effort M.

### A11Y-5 — Filter panel uses `role="dialog"` without a focus trap or `aria-modal` semantics · P2 · Impact 3 · Effort M
**Evidence.** `FilterBar.jsx:280-289` marks the panel `role="dialog" aria-modal="false"` and focuses it on open
(`useEffect`, line 174-176). It handles Escape and outside-click and restores focus to the trigger
(lines 150-171, 295-298) — good. But with `aria-modal="false"` and **no focus containment**, Tab from the last
control (Apply) moves into the page *behind* the open panel, even though on mobile the panel is a fixed
bottom-sheet over a scrim (`FilterBar.css:447-462`, `.larder-filterbar__scrim` `FilterBar.css:197-203`). The
scrim is `aria-hidden` and click-dismisses but does not block keyboard reach to the cards underneath.
**Why it matters.** WCAG 2.4.3 / 2.1.2 (No Keyboard Trap is satisfied — you can leave — but the *containment*
expected of a modal sheet is missing). A keyboard user can silently tab out of a visually-modal sheet onto
hidden-behind content, with focus invisible.
**Recommendation.** Decide: if it should behave modally on mobile, set `aria-modal="true"` and add a focus trap
(cycle Tab/Shift+Tab within the panel, and `inert`/`aria-hidden` the rest of the app while open). If it is
intentionally non-modal (desktop popover), that's acceptable but then drop the full-screen scrim on desktop so
the visual and interaction models agree. Cheap interim: when open on the mobile breakpoint, set the
`.browse`/page container `inert`. Effort M.

### A11Y-6 — Disclosure ("Needed for N meals") and route-change content not announced; toast OK · P2 · Impact 3 · Effort S
**Evidence.** Good: `Toast.jsx:8` is a `role="status" aria-live="polite"` region — the "Added to basket"
confirmation announces correctly, and Basket's live item count uses `aria-live="polite"` (`Basket.jsx:240`).
Gap: the per-row disclosure in `ReceiptList.jsx:195-209` toggles `aria-expanded` and `aria-controls` correctly
(well done), but the **expanded `<p id={detailId}>` is conditionally mounted** (`{open && …}`, line 204), so
on first expand AT must re-read the controlled node; with a live region absent that's usually fine, but the
"Hide meals"/"Needed for…" label change is the only state cue. This is minor. The larger announcement gap is
covered by A11Y-4 (route changes).
**Why it matters.** WCAG 4.1.2 — mostly already met; this is a polish item.
**Recommendation.** Keep as-is functionally; optionally render the detail paragraph always-present and toggle
with `hidden` rather than unmounting, so `aria-controls` always resolves to a real node. Effort S. (Flagged
mainly to record that the toast/live-region work is correct and should be the model for A11Y-4.)

### A11Y-7 — Secondary/quiet text on tinted surfaces drops below 4.5:1 · P2 · Impact 3 · Effort S
**Evidence (measured).** `--larder-slate #6b7066` is the workhorse muted colour. Ratios:
- on `--larder-paper #fbfaf6`: **4.86:1** (pass, but thin margin).
- on `--larder-mist #ece9e0`: **4.18:1** → **FAIL**. The footer is `color: --larder-slate; background: --larder-mist` (`global.css:296-297`) at `--fs-meta` (13px) — small *and* below 4.5:1.
- Slate is also used for `.larder-receipt__alt/.note` (`ReceiptList.css:168-172`), `.basket-row__meta`, optional-line text (`ReceiptList.css:212-215`), the "needed for" link (`ReceiptList.css:236-245` at `--fs-micro` 11px) — all on near-paper backgrounds (~4.8:1, marginal) except where they sit on mist/`paper-2`.
- The receipt **checkbox box border** is `1.5px solid --larder-slate` on `--larder-paper` (`ReceiptList.css:139`) = 4.86:1 — passes the 3:1 control-boundary rule, fine.
**Why it matters.** WCAG 1.4.3. The footer text and any slate-on-mist instance fail; the slate-on-paper cases
are passing but fragile (sub-pixel antialiasing at 11-13px erodes perceived contrast).
**Recommendation.** Darken `--larder-slate` slightly (e.g. `#5d625a` ≈ 5.6:1 on paper, ≈ 4.8:1 on mist) — one
token edit lifts every caption. Verify the footer specifically. Effort S.

### A11Y-8 — Borders/hairlines below the 3:1 non-text contrast floor · P2 · Impact 2 · Effort S
**Evidence (measured).** `--larder-hairline #e4e0d5` on `--larder-paper #fbfaf6` = **1.26:1**. It is the visible
border of chips (`FilterBar.css:167`), the Filters trigger (`FilterBar.css:99`), the sort `<select>`
(`FilterBar.css:333`), receipt rows/leaders, cards, and the header/footer rules.
**Why it matters.** WCAG 1.4.11 requires 3:1 for the visual boundary of *active UI components* where that
boundary is needed to identify the control. The chip and the `<select>` rely on their hairline border as the
only affordance edge — at 1.26:1 a low-vision user cannot perceive the control boundary. (Where a chip also
sits on a card shadow the edge is helped, but the standalone sort `<select>` on paper is the clearest failure.)
**Recommendation.** Use a darker border token for *interactive* elements (the active state already swaps to
`--larder-ink`/`--larder-slate` on hover, which is the right idea — just apply ≥3:1 in the resting state too,
e.g. a `--larder-control-border` ≈ `#b9b3a4` (~2.0:1, still short) → better `#9a948554`… aim for `#8d887b`
≈ 3.0:1). Keep the ultra-subtle hairline for purely decorative dividers. Effort S.

### A11Y-9 — Stepper spinbutton is keyboard-OK but the +/- buttons can't be reached by SR rotor as a group label; value not in a labelled group · P2 · Impact 2 · Effort S
**Evidence.** `HouseholdStepper.jsx` implements `role="spinbutton"` with `aria-valuemin/max/now/valuetext` and
arrow/Home/End handling (lines 16-39, 68-80) — genuinely good and AA-compliant for the value itself. The two
buttons have `aria-label="One fewer person"/"One more person"` (lines 52, 87). Minor gaps: (1) the visible
"Cooking for" label (`id="larder-stepper-label"`) labels the spinbutton via `aria-labelledby` but the **+/-
buttons are not associated with it**, so in a rotor list they read only "One more person" with no context of
*what* it steps (acceptable, but "Add one person" / value context would be clearer); (2) the disabled buttons
at min/max set `disabled` (lines 52, 86) which removes them from tab order silently — fine, but the spinbutton
gives no boundary feedback when arrowing past min/max (it just no-ops in `set()`, line 12-14). Both are polish,
not violations.
**Why it matters.** WCAG 4.1.2 — already substantially met. Recording for completeness; the stepper is one of
the better components.
**Recommendation.** Leave the spinbutton as-is. Optionally add `aria-keyshortcuts` or a brief sr-only hint, and
keep min/max as the silent clamp. Effort S / could skip.

### A11Y-10 — Checkable shopping-list rows are operable but lack a programmatic "checked count / progress" cue · P3 · Impact 2 · Effort S
**Evidence.** `ReceiptList.jsx:146-167`: a real `<input type="checkbox">` wrapped in a `<label>` (correct,
clickable, keyboard-toggleable), visually hidden (`ReceiptList.css:124-129`) with a styled `.box` carrying its
own `:focus-visible` ring (`ReceiptList.css:154-157`) — solid. The accessible *name* of each checkbox is the
label text (item name + qty), which is good. Gap: ticking items off changes nothing announced — no
"3 of 17 collected" live region — and the strike-through styling on checked rows
(`ReceiptList.css:199-204`) is purely visual.
**Why it matters.** Not a violation (state is conveyed by the native checkbox `checked`), but a usability win
for the core "shop the list" task, especially for SR users who otherwise lose their place.
**Recommendation.** Add an `aria-live="polite"` "N of M collected" summary above the list. Effort S. Optional.

### A11Y-11 — Decorative vs informative image alt is mostly right, with two soft spots · P3 · Impact 2 · Effort S
**Evidence.** The shared `RecipeImage` (`RecipeImage.jsx`) is well-built: real `<img alt={alt}>` (line 167),
and its error fallback is `role="img" aria-label={alt}` (lines 150-156) — so a failed photo still has an
accessible name. MealCard passes the dish title as alt (`MealCard.jsx:69`) — correct, informative. Ingredient
thumbnails are deliberately `alt=""` with the wrapper `aria-hidden` (`IngredientLine.jsx:46-54`) because the
text line carries the name — correct decorative treatment. Two soft spots:
1. `IngredientLine.jsx:46` sets `aria-hidden={needsReview ? undefined : 'true'}` on the thumb wrapper — when
   `needsReview` is true the wrapper is **not** hidden but the inner image still has `alt=""`, so a
   needs-review line exposes an empty-named decorative image to AT (a no-op node). Harmless but inconsistent;
   just always hide it.
2. The ShoppingList meal-strip images use `alt=""` (`ShoppingList.jsx:354`) with the title in an adjacent
   `<span>` — correct. The receipt thumbnails (`ReceiptThumb`, `ReceiptList.jsx:96-117`) use `alt=""` and a
   decorative dot — correct.
**Why it matters.** WCAG 1.1.1 — essentially met. These are tidy-ups.
**Recommendation.** Make the ingredient thumb wrapper unconditionally `aria-hidden="true"`. Effort S.

### A11Y-12 — Form labels are present; the `role="list"` reset workaround and chip-rail group need a check · P3 · Impact 2 · Effort S
**Evidence.** Labels are handled well: the search input has a visually-hidden `<span>Search meals</span>` inside
its `<label>` (`Browse.jsx:515-516`) plus a placeholder; the sort `<select>` is tied to a `<label htmlFor>` via
`useId` (`FilterBar.jsx:54-64`); facet groups use `<fieldset><legend>` (`FilterBar.jsx:96-97`). Note: because
`global.css:116-120` sets `ul,ol { list-style:none }`, Safari/VoiceOver strips list semantics — the code
correctly re-adds `role="list"`/`role="listitem"` on the rails (`Browse.jsx:176-187`, `598-630`) and FilterBar
rail uses `role="group"` (`FilterBar.jsx:192-196`). One inconsistency: the **meal grid** itself
(`Browse.jsx:711` `.browse-grid`) is a plain `<div>` of `<article>` cards with no list role, while the rails are
lists — so SR users get "list of N" on rails but an unstructured run of articles on the grid.
**Why it matters.** WCAG 1.3.1 — minor structural inconsistency, not a failure (each card is an `<article>`
with `aria-label`, `MealCard.jsx:63`).
**Recommendation.** Either wrap the grid as `role="list"` with `role="listitem"` items for parity, or accept the
article-landmark approach consistently and drop the rail list roles. Pick one model. Effort S.

### A11Y-13 — No high-contrast / forced-colors or `prefers-contrast` support · P3 · Impact 2 · Effort M
**Evidence.** `grep -rn "prefers-contrast\|forced-colors" src` → none. The UI leans on subtle tints, soft
shadows (`--shadow-card` etc.) and hairlines that vanish in Windows High Contrast Mode / forced-colors, where
backgrounds and borders are replaced by system colours and `box-shadow` is dropped. Controls that rely on
shadow or 1.26:1 hairline for their edge (chips, sort select, cards) will lose definition.
**Why it matters.** WCAG 1.4.3/1.4.11 interplay and real-world Windows HCM usage. Not a strict AA failure but a
meaningful exclusion.
**Recommendation.** Add a `@media (forced-colors: active)` block giving interactive controls a
`border: 1px solid ButtonText` / `outline` and using system colour keywords; ensure the bespoke checkbox box
and chip active state remain distinguishable. Pairs naturally with the contrast fixes (A11Y-2, A11Y-8). Effort M.

---

## What is already correct (so it isn't regressed)
- **focus-visible strategy** — ring shown for keyboard, hidden for pointer (`global.css:142-158`), with a
  paper-coloured variant on red/green surfaces.
- **Reduced motion** — global `prefers-reduced-motion` kill-switch zeroes durations and the signature collapse
  animation (`global.css:581-600`; tokens also zero `--dur-*` at `tokens.css:98-104`); FilterBar and the
  ShoppingList collapse both honour it.
- **Toggle semantics** — `aria-pressed` on chips (`FilterBar.jsx:45`), card add (`MealCard.jsx:92`), meal add
  (`Meal.jsx:238`); `aria-expanded`/`aria-controls` on every disclosure (Filters trigger, browse sheet, "Needed
  for" rows).
- **Icon-button names** — every icon-only control has an `aria-label` (basket, close, clear search, stepper +/-,
  card add) and every decorative SVG is `aria-hidden`.
- **Tap targets** — explicit ≥44px on card add (`MealCard.css:130-131`), receipt row (`ReceiptList.css:75-76`),
  trigger/close/sort (`FilterBar.css:90,253,329`).
- **Live regions** — toast `role="status"` (`Toast.jsx:8`), basket count `aria-live` (`Basket.jsx:240`),
  skeletons `aria-busy`.
- **Document language** — `<html lang="en-GB">` (`index.html:2`).

## Quick contrast reference (measured, sRGB)
| Pair | Ratio | AA text (4.5) | UI/large (3.0) |
|---|---|---|---|
| ink `#1f2421` on paper `#fbfaf6` | 15.09 | PASS | PASS |
| ink-soft `#4b504a` on paper | 7.90 | PASS | PASS |
| leaf `#2e6f40` on paper | 5.80 | PASS | PASS |
| white on leaf green | 6.06 | PASS | PASS |
| slate `#6b7066` on paper | 4.86 | PASS (thin) | PASS |
| slate on mist `#ece9e0` | **4.18** | **FAIL** | PASS |
| **white on stall red `#e8534e`** | **3.63** | **FAIL** | PASS |
| stall red on paper (links/Clear) | **3.48** | **FAIL** | PASS |
| stall-press `#d8443f` on paper | **4.17** | **FAIL** | PASS |
| hairline `#e4e0d5` on paper (borders) | **1.26** | FAIL | **FAIL** |

---

## Highest-leverage move
**Two token edits clear most of the AA contrast debt at once.** (1) Add a `--larder-stall-strong` (~`#c2392f`,
≈4.6:1 with white) and point the four primary-CTA rules at it (`.u-btn--primary` `global.css:451`, `.meal-add`
`Meal.css:116`, `.basket-make` `Basket.css:182`, `.list-action--primary` `ShoppingList.css:55`), keeping the
brighter `--larder-stall` only for icon-only/badge use that already passes 3:1 (A11Y-2). (2) Darken
`--larder-slate` to ~`#5d625a` and add a darker interactive-border token to satisfy 1.4.11 (A11Y-7, A11Y-8).
Then ship the **non-CSS quick wins** — define `.sr-only` (A11Y-1), add the skip link (A11Y-3) and a
route-change focus/scroll/title effect in `App.jsx` (A11Y-4). That sequence — palette tokens, then four small
JSX/CSS additions — moves Larder from "a11y-aware but failing AA on contrast and SPA navigation" to
"AA-clean on the core flows" without any paid tier or backend change. All recommendations are static-file
edits, fully compatible with Firebase Spark.
