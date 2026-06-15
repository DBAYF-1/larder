// Larder — the pure shopping-list algorithm (CONTRACTS.md §2, spec Section 5).
//
// PURE & DETERMINISTIC. No Firebase, no network, no Date.now(), no randomness.
// Same inputs always produce identical output. The UI renders the returned
// ShoppingList shape exactly (see CONTRACTS.md §2).
//
// Pipeline:
//   1. SCALE   factor = householdSize / servingsBase; accumulate
//              quantityInBaseUnit * factor per ingredientId, only for lines that
//              are resolved && !staple. Duplicate lines within a recipe sum via
//              the same keyed accumulation.
//   2. DEDUPE  keyed accumulation across recipes.
//   3. MIN     raise to minimumPurchase (weight ?? number), then roundUpTo;
//              annotate "(min …)" when the total was below the minimum.
//   4. HUMANISE friendly(need, baseUnit, displayRules).
//   5. ALT     "or use {alternatives[0].label}".
//   6. SORT    group by ingredient.aisle, aisle order by SHOP_WALK, alpha within.
//   7. APPENDICES staple → Store-cupboard (no qty); optional → Optional extras;
//                 needsReview → Check these yourself (raw text, never merged).

import {
  SHOP_WALK,
  APPENDIX_SECTIONS,
  SECTION_ORDER,
  aisleRank,
} from './shopWalk.js'
import { friendly, roundUpTo, minNote, friendlyPackLabel } from './format.js'

/**
 * @param {{recipeIds:string[], householdSize:number}} basket
 * @param {Record<string, object>} recipes      keyed by recipe id
 * @param {Record<string, object>} ingredients  keyed by ingredient id
 * @returns {object} ShoppingList — see CONTRACTS.md §2
 */
export function buildShoppingList(basket, recipes, ingredients) {
  const recipeIds = (basket && Array.isArray(basket.recipeIds)) ? basket.recipeIds : []
  const householdSize = (basket && typeof basket.householdSize === 'number' && basket.householdSize > 0)
    ? basket.householdSize
    : 1

  // The basketed recipe docs, in basket order, skipping any unknown ids.
  const basketRecipes = recipeIds
    .map((id) => recipes && recipes[id])
    .filter((r) => r && Array.isArray(r.ingredients))

  // ── Accumulators ──────────────────────────────────────────────────────────
  // Quantity-bearing, resolved, non-staple lines keyed by ingredientId.
  /** @type {Map<string, {ingredientId:string, total:number, recipes:Map<string,string>}>} */
  const resolvedAcc = new Map()

  // Optional resolved lines, keyed by ingredientId (kept separate; the receipt
  // shows them unchecked under "Optional extras").
  /** @type {Map<string, {ingredientId:string, total:number, recipes:Map<string,string>}>} */
  const optionalAcc = new Map()

  // Staple lines (salt, pepper, oil…) keyed by ingredientId — no quantity maths.
  /** @type {Map<string, {ingredientId:string, recipes:Map<string,string>}>} */
  const stapleAcc = new Map()

  // needsReview lines are NEVER merged — each keeps its raw text verbatim.
  /** @type {Array<{raw:string, recipeId:string, recipeTitle:string}>} */
  const needsReviewLines = []

  for (const recipe of basketRecipes) {
    const servingsBase = (typeof recipe.servingsBase === 'number' && recipe.servingsBase > 0)
      ? recipe.servingsBase
      : 1
    const factor = householdSize / servingsBase
    const recipeId = recipe.id
    const recipeTitle = recipe.title

    for (const line of recipe.ingredients) {
      // needsReview → kept raw, never merged, surfaced in its own appendix.
      if (line.resolutionStatus === 'needsReview' || !line.ingredientId) {
        needsReviewLines.push({
          raw: line.raw,
          recipeId,
          recipeTitle,
        })
        continue
      }

      const ingredientId = line.ingredientId

      // Staple → store-cupboard appendix, no quantity maths.
      if (line.staple === true) {
        if (!stapleAcc.has(ingredientId)) {
          stapleAcc.set(ingredientId, { ingredientId, recipes: new Map() })
        }
        stapleAcc.get(ingredientId).recipes.set(recipeId, recipeTitle)
        continue
      }

      // Scale the quantity. Lines lacking a numeric base quantity contribute 0
      // to the running total but still register the contributing recipe so the
      // "needed for" list is complete.
      const base = typeof line.quantityInBaseUnit === 'number' ? line.quantityInBaseUnit : 0
      const scaled = base * factor

      const target = line.optional === true ? optionalAcc : resolvedAcc
      if (!target.has(ingredientId)) {
        target.set(ingredientId, { ingredientId, total: 0, recipes: new Map() })
      }
      const entry = target.get(ingredientId)
      entry.total += scaled
      entry.recipes.set(recipeId, recipeTitle)
    }
  }

  // ── Build receipt items per aisle ──────────────────────────────────────────
  // sectionsByName: aisle/appendix name → array of item objects.
  /** @type {Map<string, object[]>} */
  const sectionsByName = new Map()

  function pushItem(sectionName, item) {
    if (!sectionsByName.has(sectionName)) sectionsByName.set(sectionName, [])
    sectionsByName.get(sectionName).push(item)
  }

  // Turn a contributing-recipes Map into the contract array shape.
  function contributingRecipesFrom(recipesMap) {
    return [...recipesMap.entries()].map(([id, title]) => ({ id, title }))
  }

  // Resolved, quantity-bearing items.
  for (const entry of resolvedAcc.values()) {
    const ingredient = ingredients && ingredients[entry.ingredientId]
    const item = buildQuantityItem(entry, ingredient, false)
    const aisle = (ingredient && ingredient.aisle) ? ingredient.aisle : 'Other'
    pushItem(aisle, item)
  }

  // Optional items → "Optional extras" appendix, flagged optional:true.
  for (const entry of optionalAcc.values()) {
    const ingredient = ingredients && ingredients[entry.ingredientId]
    const item = buildQuantityItem(entry, ingredient, true)
    pushItem(APPENDIX_SECTIONS.OPTIONAL, item)
  }

  // Staples → "Store-cupboard" appendix, no quantity.
  for (const entry of stapleAcc.values()) {
    const ingredient = ingredients && ingredients[entry.ingredientId]
    const name = (ingredient && ingredient.canonicalName) ? ingredient.canonicalName : entry.ingredientId
    pushItem(APPENDIX_SECTIONS.STORE_CUPBOARD, {
      ingredientId: entry.ingredientId,
      name,
      displayQuantity: '',
      note: null,
      alternative: null,
      contributingRecipes: contributingRecipesFrom(entry.recipes),
      optional: false,
      raw: null,
      pack: null,
    })
  }

  // needsReview → "Check these yourself" appendix, raw text, never merged.
  for (const line of needsReviewLines) {
    pushItem(APPENDIX_SECTIONS.NEEDS_REVIEW, {
      ingredientId: null,
      name: line.raw,
      displayQuantity: '',
      note: null,
      alternative: null,
      contributingRecipes: [{ id: line.recipeId, title: line.recipeTitle }],
      optional: false,
      raw: line.raw,
      pack: null,
    })
  }

  // ── Sort & assemble sections in SHOP_WALK / appendix order ──────────────────
  const sections = []
  for (const sectionName of SECTION_ORDER) {
    const items = sectionsByName.get(sectionName)
    if (!items || items.length === 0) continue
    // Alpha within aisle by display name (case-insensitive, locale-aware).
    items.sort((a, b) => a.name.localeCompare(b.name, 'en-GB', { sensitivity: 'base' }))
    sections.push({ aisle: sectionName, items })
  }
  // Defensive: any section name not in SECTION_ORDER (should not happen, as
  // unknown aisles map to 'Other') is appended via its rank — kept for safety.
  for (const [sectionName, items] of sectionsByName.entries()) {
    if (SECTION_ORDER.includes(sectionName)) continue
    items.sort((a, b) => a.name.localeCompare(b.name, 'en-GB', { sensitivity: 'base' }))
    sections.push({ aisle: sectionName, items })
  }
  // Keep any defensive extras ordered by aisle rank too.
  sections.sort((a, b) => aisleRank(a.aisle) - aisleRank(b.aisle))

  // ── Totals ──────────────────────────────────────────────────────────────────
  let itemCount = 0
  for (const section of sections) itemCount += section.items.length

  return {
    sections,
    totals: {
      itemCount,
      recipeCount: basketRecipes.length,
      householdSize,
    },
  }

  // ── Local helper: build a quantity-bearing receipt item ─────────────────────
  function buildQuantityItem(entry, ingredient, optional) {
    const baseUnit = ingredient && ingredient.baseUnit ? ingredient.baseUnit : null
    const displayRules = (ingredient && ingredient.displayRules) ? ingredient.displayRules : {}
    const name = (ingredient && ingredient.canonicalName) ? ingredient.canonicalName : entry.ingredientId

    const total = entry.total

    // MIN PURCHASE: prefer weight, then number; volume minimums also live under
    // `weight` per the seed convention (minimumPurchase.unit disambiguates).
    let minimum = 0
    const mp = ingredient && ingredient.minimumPurchase
    if (mp) {
      if (typeof mp.weight === 'number') minimum = mp.weight
      else if (typeof mp.number === 'number') minimum = mp.number
    }

    let need = total
    let bumped = false
    if (minimum > 0 && total < minimum) {
      need = minimum
      bumped = true
    }

    // Round UP to the display step (e.g. sold in 50 g increments).
    const step = displayRules && displayRules.roundUpTo
    need = roundUpTo(need, step)

    const displayQuantity = friendly(need, baseUnit, displayRules)

    // PACK ROUNDING (spec §5.1): whole-pack buy guidance + spare, computed from
    // the FINAL `need` (post min-purchase bump and post roundUpTo). Pure: no
    // unit guessing — only when a pack's unit matches the item's base unit.
    const pack = computePack(ingredient, need, baseUnit)

    // Bump note "(min …)" — annotated only when we raised to the minimum.
    const note = bumped ? minNote(minimum, baseUnit) : null

    // Alternative line "or use {label}".
    let alternative = null
    if (
      ingredient &&
      Array.isArray(ingredient.alternatives) &&
      ingredient.alternatives.length > 0 &&
      ingredient.alternatives[0] &&
      ingredient.alternatives[0].label
    ) {
      alternative = `or use ${ingredient.alternatives[0].label}`
    }

    return {
      ingredientId: entry.ingredientId,
      name,
      displayQuantity,
      note,
      alternative,
      contributingRecipes: contributingRecipesFrom(entry.recipes),
      optional,
      raw: null,
      pack,
    }
  }

  // ── Local helper: pack-rounding (spec §5.1) ─────────────────────────────────
  // Given the canonical ingredient, the FINAL needed quantity (already bumped to
  // minimumPurchase and rounded by displayRules.roundUpTo) and the item's base
  // unit, return the pack object or null. Never guesses unit conversions.
  function computePack(ingredient, need, baseUnit) {
    if (!ingredient) return null

    // Choose a pack: prefer defaultPack, else the first typicalPack.
    const def = ingredient.defaultPack
    const typical = Array.isArray(ingredient.typicalPacks) ? ingredient.typicalPacks[0] : null
    const pick = (def && typeof def.size === 'number') ? def : (typical || null)
    if (!pick || typeof pick.size !== 'number') return null

    // No usable pack when the pack unit doesn't match the unit `need` is in,
    // or the size is non-positive — do NOT fabricate a conversion.
    if (pick.unit !== baseUnit) return null
    if (!(pick.size > 0)) return null

    // A single-unit count pack ("1 loose onion", "pack of rashers" sized 1) adds
    // nothing the item quantity already says, and yields nonsense like
    // "25 × pack of rashers". Only show count packs that bundle (size > 1).
    if (pick.unit === 'count' && pick.size <= 1) return null

    const count = Math.ceil(need / pick.size)
    const total = count * pick.size
    const spareAmt = total - need

    // Human label for one pack: explicit label wins, else a friendly fallback.
    // A bare weight/volume label ("pack", "block", "bag") reads better with the
    // size prefixed ("500 g pack"); count labels ("pack of rashers", "box of 6")
    // are left as written.
    let packLabel
    if (typeof pick.label === 'string' && pick.label.length > 0) {
      const sizeless = !/\d/.test(pick.label) && (pick.unit === 'g' || pick.unit === 'ml')
      packLabel = sizeless ? `${friendlyPackLabel(pick.size, pick.unit)} ${pick.label}` : pick.label
    } else {
      packLabel = friendlyPackLabel(pick.size, pick.unit)
    }

    const buyLabel = `${count} × ${packLabel}`

    // Spare is shown only when meaningful: a whole spare unit for counts,
    // 5 g/ml for mass/volume. Otherwise null (exact fill or negligible).
    let spare = null
    const meaningful = baseUnit === 'count' ? spareAmt >= 1 : spareAmt >= 5
    if (meaningful) {
      spare = `${friendly(spareAmt, baseUnit, {})} spare`
    }

    return { packLabel, count, buyLabel, spare }
  }
}
