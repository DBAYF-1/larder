// Transform the curated seed array (data/ingredients.js) into Firestore
// ingredients/{id} documents matching CONTRACTS.md §1 exactly.
//
// The seed is authoring-friendly; this adds the contract fields (id, variants,
// defaultPack, cofidCode, nutrientProfilePer100) and validates the aisle.

import { existsSync, readFileSync } from 'node:fs'
import { slugify } from './resolve.js'
import { isValidAisle } from '../lib/shopWalk.js'
import { readOffPacksSync, hasParsedPack } from '../sources/openfoodfacts.js'

// ---------------------------------------------------------------------------
// Ingredient photos — TheMealDB ingredient image CDN (free, no key).
//
//   https://www.themealdb.com/images/ingredients/{Name}.png
//
// Reliability note (verified against the live CDN): the CDN ONLY serves a photo
// for an ingredient name that appears in TheMealDB's own `list.php?i=list` set.
// Plausible-but-absent names (Cauliflower, Halloumi, Okra, Nori, Bagel, …) all
// 404. So we match a canonical ingredient ONLY against that authoritative name
// set — cached locally in data/themealdb-ingredients.json (927 names) — and set
// imageUrl=null on a miss so the UI (RecipeImage) falls back cleanly. We never
// fabricate a URL from a name TheMealDB does not actually have an image for.
// ---------------------------------------------------------------------------

const MEALDB_IMG_BASE = 'https://www.themealdb.com/images/ingredients/'
const MEALDB_NAMES_URL = new URL('../data/themealdb-ingredients.json', import.meta.url)

/** Normalise a name for matching: lower-case, strip accents/punctuation, squash spaces. */
function normName(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’.()]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Singularise only the LAST word of a normalised phrase ("seeds"->"seed"). */
function singulariseLast(s) {
  const words = s.split(' ')
  let last = words[words.length - 1]
  if (/ies$/.test(last)) last = last.replace(/ies$/, 'y')
  else if (/(ch|sh|ss|x)es$/.test(last)) last = last.replace(/es$/, '')
  else if (/[^s]s$/.test(last) && last.length > 3) last = last.slice(0, -1)
  words[words.length - 1] = last
  return words.join(' ')
}

// Curated aliases: canonical name (slug) -> a TheMealDB name that BOTH exists in
// the list set AND is a faithful photo for the ingredient. Conservative on
// purpose — only where the photo genuinely depicts the thing (no misleading
// stand-ins). Keyed by slug so spelling/casing of the canonical name can vary.
const IMAGE_ALIASES = {
  'sesame-oil': 'Sesame Seed Oil',
  'wholemeal-flour': 'Strong Wholemeal Flour',
  'sage-and-onion-stuffing-mix': 'Sage',
  'blanched-almonds': 'Almonds',
  'almond-butter': 'Almonds',
  'arborio-rice': 'Rice',
  'cauliflower-rice': 'Rice',
  'beluga-lentils': 'Lentils',
  'mango-chutney': 'Mango',
  'sourdough-bread': 'Bread',
  'lamb-liver': 'Lamb',
}

/**
 * Load the authoritative TheMealDB ingredient-name set and index it by several
 * normalised forms (exact, singular-last). Built once. Defensive: an absent or
 * corrupt cache yields an empty index (every ingredient then resolves to null).
 *
 * @returns {{ byNorm: Map<string,string> }}
 */
function loadMealDbNameIndex() {
  const byNorm = new Map()
  try {
    if (!existsSync(MEALDB_NAMES_URL)) return { byNorm }
    const raw = JSON.parse(readFileSync(MEALDB_NAMES_URL, 'utf8'))
    const names = Array.isArray(raw) ? raw.map((x) => x && x.name).filter(Boolean) : []
    for (const name of names) {
      const k = normName(name)
      if (k && !byNorm.has(k)) byNorm.set(k, name)
      const sk = singulariseLast(k)
      if (sk && !byNorm.has(sk)) byNorm.set(sk, name)
    }
  } catch {
    // leave byNorm empty — clean misses, never throw during a build
  }
  return { byNorm }
}

const MEALDB_INDEX = loadMealDbNameIndex()

/** Build the CDN URL for a (verified) TheMealDB ingredient name. */
function mealDbImageUrl(mealDbName) {
  // Spaces -> %20 etc.; the CDN expects the exact name, percent-encoded.
  return MEALDB_IMG_BASE + encodeURIComponent(mealDbName) + '.png'
}

/**
 * Resolve a TheMealDB ingredient photo URL for a canonical ingredient.
 *
 * Match ladder (first hit wins), all against the authoritative list set:
 *   1. curated slug ALIAS  -> faithful in-list TheMealDB name
 *   2. EXACT (canonicalName then each synonym), normalised
 *   3. SINGULAR-LAST of canonicalName / synonyms
 * No confident, in-list match => null (UI falls back to a placeholder).
 *
 * @param {object} ing  a seed ingredient ({ canonicalName, synonyms? })
 * @param {{ byNorm: Map<string,string> }} [index]  defaults to the cached index
 * @returns {string|null}  a CDN PNG URL, or null when TheMealDB has no photo
 */
export function ingredientImageUrl(ing, index = MEALDB_INDEX) {
  if (!ing || !ing.canonicalName) return null
  const { byNorm } = index

  // 1) Curated alias by slug.
  const slug = slugify(ing.canonicalName)
  const aliasName = IMAGE_ALIASES[slug]
  if (aliasName) return mealDbImageUrl(aliasName)

  // 2) + 3) Exact then singular-last across canonicalName + synonyms.
  const candidates = [ing.canonicalName, ...(Array.isArray(ing.synonyms) ? ing.synonyms : [])]
  for (const cand of candidates) {
    const k = normName(cand)
    const exact = byNorm.get(k)
    if (exact) return mealDbImageUrl(exact)
    const sing = byNorm.get(singulariseLast(k))
    if (sing) return mealDbImageUrl(sing)
  }

  return null
}

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
      // TheMealDB ingredient photo (free CDN), or null where TheMealDB has none.
      // Rendered as a small thumbnail by the UI; null falls back to a placeholder.
      imageUrl: ingredientImageUrl(ing),
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
