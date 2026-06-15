// Transform the curated seed array (data/ingredients.js) into Firestore
// ingredients/{id} documents matching CONTRACTS.md §1 exactly.
//
// The seed is authoring-friendly; this adds the contract fields (id, variants,
// defaultPack, cofidCode, nutrientProfilePer100) and validates the aisle.

import { slugify } from './resolve.js'
import { isValidAisle } from '../lib/shopWalk.js'

/**
 * @param {Array<object>} seed  the INGREDIENTS array
 * @returns {Array<{id:string, data:object}>}  diff-ready docs (no contentHash/updatedAt)
 */
export function buildIngredientDocs(seed) {
  const seenIds = new Set()
  const docs = []

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

    const defaultPack = (ing.typicalPacks && ing.typicalPacks[0]) || null

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
      minimumPurchase: {
        number: ing.minimumPurchase?.number ?? null,
        weight: ing.minimumPurchase?.weight ?? null,
        unit: ing.minimumPurchase?.unit || ing.baseUnit,
        note: ing.minimumPurchase?.note || '',
      },
      typicalPacks: (ing.typicalPacks || []).map((p) => ({
        size: p.size,
        unit: p.unit,
        label: p.label || '',
      })),
      nutrientProfilePer100: ing.nutrientProfilePer100 ?? null,
      synonyms: ing.synonyms || [],
      staple: Boolean(ing.staple),
      cofidCode: ing.cofidCode ?? null,
      defaultPack: defaultPack
        ? { size: defaultPack.size, unit: defaultPack.unit, offBarcode: null }
        : null,
      displayRules: {
        preferUnit: ing.displayRules?.preferUnit ?? null,
        roundUpTo: ing.displayRules?.roundUpTo ?? null,
      },
    }

    docs.push({ id, data })
  }

  return docs
}
