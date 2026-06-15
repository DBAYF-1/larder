// Transform the curated seed array (data/ingredients.js) into Firestore
// ingredients/{id} documents matching CONTRACTS.md §1 exactly.
//
// The seed is authoring-friendly; this adds the contract fields (id, variants,
// defaultPack, cofidCode, nutrientProfilePer100) and validates the aisle.

import { slugify } from './resolve.js'
import { isValidAisle } from '../lib/shopWalk.js'
import { readOffPacksSync, hasParsedPack } from '../sources/openfoodfacts.js'

/**
 * Pick the smallest sensible curated pack for an ingredient (minimise waste):
 * the typicalPack with the smallest size whose unit === baseUnit; otherwise the
 * first typicalPack; null when there are no packs at all.
 *
 * @param {object} ing
 * @returns {{size:number, unit:string, label?:string}|null}
 */
function pickCuratedPack(ing) {
  const packs = Array.isArray(ing.typicalPacks) ? ing.typicalPacks : []
  if (!packs.length) return null
  const matching = packs.filter((p) => p && p.unit === ing.baseUnit && typeof p.size === 'number')
  if (matching.length) {
    return matching.reduce((min, p) => (p.size < min.size ? p : min))
  }
  return packs[0] || null
}

/**
 * Build the contract `defaultPack` for one ingredient.
 *
 * Curated pack SIZES always win when present. Open Food Facts (Layer C, read
 * from the data/off-packs.json cache) only adds a representative UK barcode +
 * brand, and — ONLY when the ingredient has NO curated typicalPacks at all —
 * supplies the pack size from OFF's parsed suggestion.
 *
 * @param {object} ing
 * @param {Record<string, object>} offPacks  cache map keyed by slug
 * @returns {{size:number, unit:string, label:string, offBarcode:string|null, brand:string|null}|null}
 */
function buildDefaultPack(ing, offPacks) {
  const curated = pickCuratedPack(ing)
  const offEntry = offPacks[slugify(ing.canonicalName)]
  const off = hasParsedPack(offEntry) ? offEntry : null

  let size = null
  let unit = null
  let label = ''

  if (curated) {
    size = curated.size
    unit = curated.unit
    label = curated.label || `${curated.size} ${curated.unit}`
  } else if (off) {
    // No curated packs — let OFF fill the size gap.
    size = off.suggestedSize
    unit = off.unit
    label = `${off.suggestedSize} ${off.unit}`
  } else {
    return null
  }

  return {
    size,
    unit,
    label,
    offBarcode: off ? off.offBarcode ?? null : null,
    brand: off ? off.brand ?? null : null,
  }
}

/**
 * Reconcile minimumPurchase with the ingredient's baseUnit. A COUNT ingredient
 * (sold by the piece — carrots, bacon rashers, fish fillets) sometimes carries a
 * minimum authored as a WEIGHT (e.g. "min 500 g"). Left as-is, the client's
 * min-purchase bump reads "500" as 500 pieces and explodes the quantity. Convert
 * grams->count via perItemGrams when known, else fall back to a sane minimum of 1.
 */
function reconcileMinPurchase(ing) {
  const mp = ing.minimumPurchase || {}
  if (ing.baseUnit === 'count') {
    let n = mp.number ?? mp.weight ?? null
    const looksLikeWeight = (mp.unit && mp.unit !== 'count') || (n != null && n > 24)
    if (n != null && looksLikeWeight) {
      n = ing.perItemGrams > 0 ? Math.max(1, Math.round(n / ing.perItemGrams)) : 1
    }
    return { number: n, weight: null, unit: 'count', note: mp.note || '' }
  }
  // Mass/volume: keep the minimum in 'weight' aligned to the base unit.
  const weight = mp.weight ?? (mp.unit && mp.unit !== 'count' ? mp.number : null) ?? null
  return {
    number: ing.baseUnit === 'count' ? mp.number ?? null : null,
    weight,
    unit: mp.unit && mp.unit !== 'count' ? mp.unit : ing.baseUnit,
    note: mp.note || '',
  }
}

/**
 * @param {Array<object>} seed  the INGREDIENTS array
 * @returns {Array<{id:string, data:object}>}  diff-ready docs (no contentHash/updatedAt)
 */
export function buildIngredientDocs(seed) {
  const seenIds = new Set()
  const docs = []

  // Read the OFF enrichment cache once. Defensive: {} when absent/partial.
  const offPacks = readOffPacksSync()

  for (const ing of seed) {
    const id = slugify(ing.canonicalName)
    if (seenIds.has(id)) {
      throw new Error(`Duplicate ingredient slug "${id}" from "${ing.canonicalName}"`)
    }
    seenIds.add(id)

    if (!isValidAisle(ing.aisle)) {
      throw new Error(
        `Ingredient "${ing.canonicalName}" has aisle "${ing.aisle}" not in SHOP_WALK`,
      )
    }
    if (!['g', 'ml', 'count'].includes(ing.baseUnit)) {
      throw new Error(`Ingredient "${ing.canonicalName}" has invalid baseUnit "${ing.baseUnit}"`)
    }

    const defaultPack = buildDefaultPack(ing, offPacks)

    const data = {
      id,
      canonicalName: ing.canonicalName,
      description: ing.description || '',
      foodGroup: ing.foodGroup || 'Other',
      aisle: ing.aisle,
      variants: Array.isArray(ing.variants) ? ing.variants : [],
      alternatives: (ing.alternatives || []).map((a) => ({
        ingredientId: a.ingredientId ?? null,
        label: a.label,
        note: a.note || '',
        ratio: typeof a.ratio === 'number' ? a.ratio : 1,
      })),
      baseUnit: ing.baseUnit,
      densityGperMl: ing.densityGperMl ?? null,
      perItemGrams: ing.perItemGrams ?? null,
      minimumPurchase: reconcileMinPurchase(ing),
      typicalPacks: (ing.typicalPacks || []).map((p) => ({
        size: p.size,
        unit: p.unit,
        label: p.label || '',
      })),
      nutrientProfilePer100: ing.nutrientProfilePer100 ?? null,
      synonyms: ing.synonyms || [],
      staple: Boolean(ing.staple),
      cofidCode: ing.cofidCode ?? null,
      defaultPack,
      displayRules: {
        preferUnit: ing.displayRules?.preferUnit ?? null,
        roundUpTo: ing.displayRules?.roundUpTo ?? null,
      },
    }

    docs.push({ id, data })
  }

  return docs
}
