# Larder — build contracts (READ FIRST)

This file is the binding interface contract shared by all build agents. Shapes,
signatures, and props here are **fixed**. Do not invent alternatives; if a field
is missing, follow the spec (the master specification) but keep these names.

Working tree layout:

```
/                      app config (package.json, vite.config.js, firebase.json, firestore.*, index.html)
/src/firebase.js       Web SDK init + exported `db`        (already written — import from here)
/src/styles/tokens.css design tokens (CSS vars)            (already written — the ONLY colour source)
/src/lib/shopWalk.js   SHOP_WALK aisle order + sections    (already written — import from here)
/src/lib/              pure logic + tests  ............ OWNED BY: lib agent
/src/state/            basket context ................. OWNED BY: frontend agent
/src/components/       reusable components ............ OWNED BY: frontend agent
/src/screens/          5 screens + App + main ......... OWNED BY: frontend agent
/src/styles/global.css base + layout styles ........... OWNED BY: frontend agent
/ingestion/            ingestion engine ............... OWNED BY: ingestion agent
```

Rules for all agents:
- ES modules everywhere. App code = browser/React. `/ingestion` = Node (Admin SDK).
- **No hard-coded hex colours anywhere.** Use `var(--larder-*)` from tokens.css.
- British English in all user-facing copy. Active voice. Buttons say what happens.
- Import shared constants from `src/lib/shopWalk.js`; never redefine the aisle list.

---

## 1. Firestore document shapes (the data contract)

### `recipes/{recipeId}`
```js
{
  id,                          // == doc id (also stored in field for convenience)
  title: string,
  source: 'themealdb' | 'edamam' | 'curated',
  sourceId: string,
  sourceUrl: string,
  imageUrl: string,
  imageAttribution: string | null,
  instructions: string | null,        // ONLY themealdb/curated; null for edamam
  instructionsExternal: boolean,       // true => render "View full method on {publisher}" link-out
  publisher: string | null,            // for edamam attribution + link-out
  servingsBase: number,                // base serving count the quantities are written for
  totalTimeMinutes: number | null,
  cuisine: string | null,              // "British", "Italian", "Thai", ...
  course: string,                      // Breakfast|Lunch|Dinner|Side|Dessert|Snack|Drink
  dietLabels: string[],                // "Vegetarian","Vegan","Pescatarian",...
  healthLabels: string[],              // "Gluten-free","Dairy-free","Nut-free",... (FREE-FROM filters use these)
  allergens: string[],                 // derived: "contains-milk","contains-gluten",...
  nutritionPerServing: { energyKcal, proteinG, fatG, carbsG, ... } | null,
  attributionRequired: boolean,
  popularity: number,                  // default sort key (desc)
  parseCompleteness: number,           // 0..1 share of ingredient lines resolved
  updatedAt: <Firestore Timestamp>,
  contentHash: string,
  ingredients: [                       // EMBEDDED resolved lines (denormalised)
    {
      raw: string,                     // original line, always kept & displayed
      ingredientId: string | null,     // FK to ingredients/ ; null when needsReview
      variantId: string | null,
      canonicalName: string | null,    // copied for display without a second read
      quantity: number | null,         // as written, post-parse
      unit: string | null,             // display unit token ("g","ml","clove","tbsp","")
      quantityInBaseUnit: number | null,// normalised number used by the maths
      baseUnit: 'g' | 'ml' | 'count' | null,
      rangeLow: number | null,
      rangeHigh: number | null,
      preparationNote: string | null,  // "finely chopped"
      resolutionStatus: 'resolved' | 'needsReview',
      optional: boolean,
      staple: boolean,                 // salt/pepper/oil/etc — excluded from quantity maths
      displayOrder: number
    }
  ]
}
```

### `ingredients/{ingredientId}` (the canonical spine — spec 6.1)
```js
{
  id,
  canonicalName: string,               // UK English ("Plain flour")
  description: string,
  foodGroup: string,
  aisle: string,                       // one of SHOP_WALK
  variants: [{ variantId, label, description, synonyms:string[], isDefault:boolean }],
  alternatives: [{ ingredientId:string|null, label:string, note:string, ratio:number }],
  baseUnit: 'g' | 'ml' | 'count',
  densityGperMl: number | null,
  minimumPurchase: { number:number|null, weight:number|null, unit:'g'|'ml'|'count', note:string },
  typicalPacks: [{ size:number, unit:string, label:string }],
  nutrientProfilePer100: { energyKcal, proteinG, fatG, carbsG, ... } | null,
  synonyms: string[],
  staple: boolean,
  cofidCode: string | null,
  defaultPack: { size, unit, offBarcode } | null,
  displayRules: { preferUnit:string|null, roundUpTo:number|null },
  updatedAt, contentHash
}
```

### `facets/global`
```js
{ cuisines:[{value,count}], courses:[{value,count}], dietLabels:[{value,count}],
  healthLabels:[{value,count}], totalRecipes:number, updatedAt }
```

### `system/last_ingestion`
```js
{ finishedAt, source, recipesWritten, recipesResolved, errors:[...] }
```

---

## 2. The pure algorithm — `src/lib/buildShoppingList.js`  (lib agent)

```js
/**
 * Pure, deterministic. No Firebase, no network, no Date.now(). Same inputs => same output.
 * @param {{recipeIds:string[], householdSize:number}} basket
 * @param {Record<string, Recipe>} recipes        keyed by recipe id (basketed recipe docs)
 * @param {Record<string, Ingredient>} ingredients keyed by ingredient id (referenced canon docs)
 * @returns {ShoppingList}
 */
export function buildShoppingList(basket, recipes, ingredients) { ... }
```

`ShoppingList` output shape (the UI renders this exactly):
```js
{
  sections: [                          // ordered per SECTION_ORDER (shopWalk.js)
    {
      aisle: string,                   // "Produce" ... or appendix section name
      items: [
        {
          ingredientId: string | null,
          name: string,                // canonicalName (or raw text for needsReview)
          displayQuantity: string,     // humanised: "1.4 L", "6", "400 g (about 1 tin)"
          note: string | null,         // "(min 250 g)" bump, or "or use frozen veg"
          alternative: string | null,  // "or use {label}"
          contributingRecipes: [{ id, title }],  // for "needed for: {meals}"
          optional: boolean,
          raw: string | null           // present for needsReview items (shown verbatim)
        }
      ]
    }
  ],
  totals: { itemCount:number, recipeCount:number, householdSize:number }
}
```

Algorithm (spec Section 5) — implement exactly, including:
1. SCALE: `factor = householdSize / recipe.servingsBase`; accumulate `quantityInBaseUnit * factor`
   per `ingredientId`, only for lines with `resolutionStatus==='resolved' && staple===false`.
   Sum duplicate ingredient within one recipe first (keyed accumulation does this).
2. DEDUPE: keyed accumulation across recipes.
3. MIN PURCHASE: `need = max(total, minimumPurchase.weight ?? minimumPurchase.number ?? 0)`;
   then `displayRules.roundUpTo` → round up. If total was below the minimum, set the bump note.
4. HUMANISE: `friendly(need, baseUnit, displayRules)` →
   counts round UP to whole; mass/volume keep 1 dp, switch g→kg and ml→L above 1000;
   honour `displayRules.preferUnit` ("400 g (about 1 tin)").
5. ALTERNATIVES: if `alternatives[0]` exists, set `alternative = "or use " + alternatives[0].label`.
6. AISLE SORT: group by `ingredient.aisle`; order aisles by SHOP_WALK; within an aisle sort by name.
7. APPENDICES: staple lines → "Store-cupboard" (no quantity); optional lines → "Optional extras"
   (optional:true, the UI leaves them unchecked); needsReview lines → "Check these yourself"
   (raw text, never merged).

Helpers live in `src/lib/format.js` (humanise quantity, round rules) — also pure & tested.

**Test suite `src/lib/buildShoppingList.test.js` is the acceptance gate.** Cover every
spec 4.2 edge case and the spec 15.3 worked example with hand-verified expected output.
Tests use inline fixture objects — NO Firebase. Run with `npm test` (vitest).

Also provide `src/lib/queryRecipes.js`:
```js
export async function queryRecipes(db, { filters, sort, cursor, pageSize=24 }) {
  // returns { recipes: Recipe[], nextCursor }
  // builds where()+orderBy()+limit()+startAfter() against the declared composite indexes.
}
export async function getFacets(db) { ... }      // reads facets/global
export async function getRecipe(db, id) { ... }  // single doc
export async function getIngredients(db, ids) { ... } // batched getDoc for buildShoppingList
```

---

## 3. Basket state — `src/state/basket.js`  (frontend agent)

React context + `localStorage` persistence (key `larder.basket`). No Firestore write.
```js
{ recipeIds: string[], householdSize: number }   // default householdSize 2
// hook API:
useBasket() => { recipeIds, householdSize, add(id), remove(id), clear(),
                 setHouseholdSize(n), has(id), count }
```

---

## 4. Component prop contracts  (frontend agent owns components AND screens)

Build once, reuse. Props (keep these names):
- `<MealCard meal variant="grid|rail" inBasket onToggle />`
- `<MealBadgeRow timeMinutes servings dietLabels kcal />`
- `<FilterBar facets value onChange />` where value = `{ cuisine, course, diet, freeFrom, maxTime, sort }`
- `<FilterChip label active onClick />`  `<SortSelect value onChange />`
- `<IngredientLine line />`  (line = an embedded recipe ingredient; shows raw + canonical tooltip)
- `<BasketButton count onClick />`  (count badge in --larder-stall)
- `<HouseholdStepper value onChange min=1 max=12 />`
- `<ReceiptList list />` (list = buildShoppingList output) with `<ReceiptAisleHeader>`,
  `<ReceiptItem item checked onToggle />` (dotted leader, right-aligned mono qty), `<ReceiptFooter totals />`
- `<SourceCredit variant="footer|inline" sources?  recipe? />`
- `<EmptyState title body actionLabel onAction />`
- `<Toast message show />`  (single "Added" confirmation, --larder-leaf)

---

## 5. Screens & routes  (frontend agent)

react-router-dom v6. Routes:
- `/`            Browse  (hero, category rails, filter bar, meal grid w/ pagination)
- `/meal/:id`    Meal    (hero+attribution, badges, ingredient list, method OR edamam link-out, Add to basket)
- `/basket`      Basket  (chosen meals, HouseholdStepper, unique-item preview, "Make my shopping list")
- `/list`        ShoppingList (the receipt; computed client-side via buildShoppingList; export print/copy/share)
- `/sources`     Sources & credits (TheMealDB, Edamam, Open Food Facts, CoFID — licences + links)

`App.jsx` = layout (header with BasketButton + logo, footer with SourceCredit, <Outlet/>).
`main.jsx` imports `./styles/tokens.css` then `./styles/global.css`, mounts <App/> in BrowserRouter.

Signature moment: on "Make my shopping list", meal rows collapse into receipt lines
(spec 11.4); under `prefers-reduced-motion` it is an instant cross-fade.

---

## 6. Ingestion engine — `/ingestion`  (ingestion agent)

Node + `firebase-admin`. Own `ingestion/package.json` (`"type":"module"`). Auth via
`GOOGLE_APPLICATION_CREDENTIALS` (a service-account JSON path) OR
`FIREBASE_SERVICE_ACCOUNT` env (raw JSON). Project id `larder-dbayft`.

Files:
- `ingestion/ingest.js`            entry: pull sources → pipeline → diff/write → facets + heartbeat
- `ingestion/sources/themealdb.js` enumerate categories/areas + lookup.php; map strIngredient/strMeasure 1..20
- `ingestion/sources/edamam.js`    query by cuisine/diet; instructions=null, instructionsExternal=true (skips cleanly if EDAMAM_ID/KEY unset)
- `ingestion/pipeline/parse.js`    Stage 1 tokenise: {quantity,unit,descriptor,core,prepNote}; fractions, ranges, "1 (12 oz.)"
- `ingestion/pipeline/units.js`    unit vocab + imperial→metric (oz 28.35, lb 453.6, cup/tbsp/tsp→ml), density use
- `ingestion/pipeline/synonyms.js` UK↔US synonym table (spec 15.2) + helpers
- `ingestion/pipeline/resolve.js`  Stage 2 core→canonical ingredient (exact→synonym→fuzzy→needsReview)
- `ingestion/pipeline/normalise.js`Stage 3 to base unit; density-unknown volume→mass => keep + needsReview
- `ingestion/data/ingredients.js`  curated canonical ingredient seed (CoFID-style): identity, aisle,
                                    minimumPurchase, alternatives, staple flags, densities, synonyms.
                                    Must cover the common TheMealDB ingredients so resolution works.
- `ingestion/lib/firestore.js`     Admin init + contentHash diff + batched writes (only changed docs)

The shared aisle list for ingestion lives in `ingestion/lib/shopWalk.js` (copy of the values
in `src/lib/shopWalk.js` — keep them identical).

Pipeline writes embedded ingredient lines into recipes (shape §1) and canonical docs into
ingredients (shape §1). Compute allergens, parseCompleteness, nutritionPerServing.
Diff by contentHash; batch writes (<= 450/batch); write facets/global and system/last_ingestion.

CLI: `node ingest.js --source themealdb --limit N` (default limit keeps the seed run small).
Must run with the free TheMealDB test key "1" when THEMEALDB_KEY is unset.
```
