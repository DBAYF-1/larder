// Assemble a single recipes/{id} document (CONTRACTS.md §1) from a normalised
// source recipe, running the parse -> resolve -> normalise pipeline per line and
// deriving allergens, parseCompleteness, healthLabels and nutritionPerServing.

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { parseLine } from './parse.js'
import { resolveCore, slugify } from './resolve.js'
import { normaliseLine } from './normalise.js'
import { isKnownUnit } from './units.js'

// Generated dish photos (Pollinations, hosted on Firebase Hosting) keyed by
// recipe id. These OVERRIDE the source imageUrl so a re-ingest never reverts a
// dish to its old loosely-matched photo. Defensive: {} if the file is absent.
let GENERATED_IMAGES = {}
try {
  GENERATED_IMAGES = JSON.parse(
    readFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', 'data', 'generated-images.json'), 'utf8'),
  )
} catch {
  GENERATED_IMAGES = {}
}

// Unit-like leading words that occasionally bleed into TheMealDB's name field
// ("tsp parsley", "cup onion"). Stripped before resolution.
const LEADING_UNIT_WORDS = new Set([
  'tsp', 'tsps', 'teaspoon', 'teaspoons',
  'tbsp', 'tbsps', 'tbl', 'tbls', 'tblsp', 'tablespoon', 'tablespoons',
  'cup', 'cups', 'g', 'gram', 'grams', 'kg', 'ml', 'l', 'oz', 'lb', 'lbs',
  'pinch', 'dash', 'scoop', 'handful', 'knob', 'clove', 'cloves', 'sprig', 'sprigs',
])

// Lightly clean a raw ingredient name for resolution: drop a trailing prep
// clause after a comma, leading filler/unit words ("can of", "tsp"), but KEEP
// multi-word ingredient names intact ("chopped tomatoes").
function cleanName(name) {
  let s = String(name || '').toLowerCase().trim()
  s = s.split(',')[0].trim() // drop ", finely chopped"
  // Strip a leading quantity (combined source lines carry it in the name):
  // "2 cups chopped tomatoes" -> "cups chopped tomatoes".
  s = s.replace(/^[\d.,/¼½¾⅓⅔⅛\s-]+/, '').trim()
  s = s.replace(/^(a |an |the )/, '')
  s = s.replace(/^(can|tin|jar|packet|pack|bottle|bunch)\s+of\s+/, '')
  // Strip leading unit words if more words follow (so "cups chopped tomatoes"
  // -> "chopped tomatoes", "tsp parsley" -> "parsley") but leave a genuine
  // single-word ingredient that happens to be a unit name ("clove") alone.
  let words = s.split(/\s+/)
  while (words.length > 1 && (LEADING_UNIT_WORDS.has(words[0]) || isKnownUnit(words[0]))) {
    words = words.slice(1)
  }
  s = words.join(' ')
  s = s.replace(/\b(fresh|dried|frozen|cooked|raw)\b/g, '').trim()
  return s.replace(/\s{2,}/g, ' ').trim()
}

// Try candidate phrases best-first; return the first confident resolution, else
// the best (last) miss so the line is recorded as needsReview.
function resolveName(candidates, index) {
  let lastMiss = null
  for (const cand of candidates) {
    if (!cand) continue
    const r = resolveCore(cand, index)
    if (r.resolutionStatus === 'resolved') return r
    lastMiss = r
  }
  return lastMiss || resolveCore('', index)
}

// ── Allergen derivation ─────────────────────────────────────────────────────
// Map canonical ingredient ids / foodGroups / name keywords to UK allergens.
const ALLERGEN_BY_FOODGROUP = {
  Fish: 'contains-fish',
  Eggs: 'contains-egg',
  Dairy: 'contains-milk',
  Nuts: 'contains-nuts',
}

const ALLERGEN_KEYWORDS = [
  { test: /(prawn|shrimp|crab|lobster|mussel|clam|scallop|squid|oyster)/i, allergen: 'contains-crustaceans' },
  { test: /(milk|butter|cream|cheese|yoghurt|yogurt|parmesan|mozzarella)/i, allergen: 'contains-milk' },
  { test: /\begg/i, allergen: 'contains-egg' },
  { test: /(flour|bread|pasta|spaghetti|couscous|breadcrumb|wheat|barley|rye|cracker|pastry)/i, allergen: 'contains-gluten' },
  { test: /(almond|walnut|cashew|pecan|hazelnut|pistachio|macadamia|brazil nut)/i, allergen: 'contains-nuts' },
  { test: /(peanut)/i, allergen: 'contains-peanuts' },
  { test: /(soy|soya|tofu|edamame|tamari)/i, allergen: 'contains-soya' },
  { test: /(fish|salmon|cod|haddock|tuna|anchovy|anchovies|mackerel|sardine)/i, allergen: 'contains-fish' },
  { test: /(sesame|tahini)/i, allergen: 'contains-sesame' },
  { test: /(mustard)/i, allergen: 'contains-mustard' },
  { test: /(celery)/i, allergen: 'contains-celery' },
  { test: /(white wine|red wine|sherry|brandy|rum|beer|cider|lager)/i, allergen: 'contains-sulphites' },
]

function deriveAllergens(lines) {
  const set = new Set()
  for (const line of lines) {
    const name = line.canonicalName || line.raw || ''
    const group = line.foodGroup || ''
    if (ALLERGEN_BY_FOODGROUP[group]) set.add(ALLERGEN_BY_FOODGROUP[group])
    for (const { test, allergen } of ALLERGEN_KEYWORDS) {
      if (test.test(name)) set.add(allergen)
    }
  }
  return [...set].sort()
}

// ── Health (free-from) labels ───────────────────────────────────────────────
// Derived from absence of an allergen group across the recipe. Conservative:
// only assert a free-from label when we resolved enough of the recipe to trust
// it (parseCompleteness gate applied by the caller via minResolvedForHealth).
function deriveHealthLabels(allergens, dietLabels) {
  const labels = new Set(dietLabels || [])
  const has = (a) => allergens.includes(a)
  if (!has('contains-gluten')) labels.add('Gluten-free')
  if (!has('contains-milk')) labels.add('Dairy-free')
  if (!has('contains-nuts') && !has('contains-peanuts')) labels.add('Nut-free')
  if (!has('contains-egg')) labels.add('Egg-free')
  if (!has('contains-fish') && !has('contains-crustaceans')) labels.add('Fish-free')
  return [...labels].sort()
}

// ── Nutrition ───────────────────────────────────────────────────────────────
// Sum CoFID-style per-100 profiles weighted by each resolved line's base
// quantity, then divide by servings. Returns null if nothing resolved with a
// profile (we never fabricate nutrition).
function deriveNutrition(lines, servings) {
  const totals = { energyKcal: 0, proteinG: 0, fatG: 0, carbsG: 0 }
  let any = false
  for (const line of lines) {
    if (line.resolutionStatus !== 'resolved') continue
    if (line.staple) continue
    const profile = line.nutrientProfilePer100
    const qty = line.quantityInBaseUnit
    if (!profile || qty == null || !(qty > 0)) continue
    if (line.baseUnit === 'count') continue // profiles are per-100g/ml, not per item
    const factor = qty / 100
    totals.energyKcal += (profile.energyKcal || 0) * factor
    totals.proteinG += (profile.proteinG || 0) * factor
    totals.fatG += (profile.fatG || 0) * factor
    totals.carbsG += (profile.carbsG || 0) * factor
    any = true
  }
  if (!any) return null
  const s = servings && servings > 0 ? servings : 1
  return {
    energyKcal: Math.round(totals.energyKcal / s),
    proteinG: Math.round((totals.proteinG / s) * 10) / 10,
    fatG: Math.round((totals.fatG / s) * 10) / 10,
    carbsG: Math.round((totals.carbsG / s) * 10) / 10,
  }
}

// Crude popularity seed: shorter, well-resolved, time-stamped recipes rank a
// little higher. Deterministic so re-runs don't churn the contentHash.
function seedPopularity(src, parseCompleteness) {
  let p = 100
  p += Math.round(parseCompleteness * 50)
  if (src.youtubeUrl) p += 10
  if (src.source === 'curated') p += 25
  return p
}

/**
 * @param {object} src    normalised source recipe (from a source adapter)
 * @param {object} index  resolver index (buildIndex output)
 * @returns {{id:string, data:object}}  diff-ready recipe doc
 */
export function buildRecipeDoc(src, index) {
  const servingsBase = src.servingsBase && src.servingsBase > 0 ? src.servingsBase : 4
  const lines = []
  let displayOrder = 0
  let resolvable = 0
  let resolved = 0

  for (const rawLine of src.rawLines || []) {
    const raw = buildRawText(rawLine)
    const parsed = parseLine(rawLine.rawMeasure, rawLine.combined ? '' : rawLine.rawName)

    // Resolve against the fullest phrase first so multi-word canonicals
    // ("chopped tomatoes", "minced beef") aren't lost when the parser strips a
    // prep/descriptor word. cleanName strips a leading quantity/unit but keeps
    // the full ingredient phrase; parsed.core is the prep-stripped fallback.
    const resolution = resolveName(
      [cleanName(rawLine.rawName), parsed.core],
      index,
    )
    const ingredient = resolution.ingredient
    const normalised = normaliseLine(parsed, ingredient)

    const staple = Boolean(ingredient?.staple)
    const optional = Boolean(parsed.optional)

    // Count this line toward completeness only if it's a "real" ingredient
    // (not a soft store-cupboard staple with no quantity).
    if (!staple) {
      resolvable++
      if (resolution.resolutionStatus === 'resolved' && !normalised.needsReview) {
        resolved++
      }
    }

    const status =
      resolution.resolutionStatus === 'resolved' && !normalised.needsReview
        ? 'resolved'
        : 'needsReview'

    lines.push({
      raw,
      ingredientId: resolution.ingredientId,
      variantId: null,
      canonicalName: resolution.canonicalName,
      quantity: parsed.quantity ?? null,
      unit: parsed.unit ?? null,
      quantityInBaseUnit: normalised.quantityInBaseUnit,
      baseUnit: normalised.baseUnit,
      rangeLow: parsed.rangeLow ?? null,
      rangeHigh: parsed.rangeHigh ?? null,
      preparationNote: parsed.prepNote ?? null,
      resolutionStatus: status,
      optional,
      staple,
      displayOrder: displayOrder++,
      // carried for allergen/nutrition derivation, then stripped from the doc
      foodGroup: ingredient?.foodGroup || null,
      nutrientProfilePer100: ingredient?.nutrientProfilePer100 || null,
    })
  }

  const parseCompleteness = resolvable > 0 ? round2(resolved / resolvable) : 0
  const allergens = deriveAllergens(lines)

  const dietLabels = src.dietLabels || []
  // Only trust derived free-from labels for well-resolved recipes.
  const healthLabels =
    parseCompleteness >= 0.7
      ? deriveHealthLabels(allergens, [])
      : (src.healthLabels || [])

  const nutritionPerServing =
    src.nutritionPerServing && Number.isFinite(src.nutritionPerServing.energyKcal)
      ? src.nutritionPerServing
      : deriveNutrition(lines, servingsBase)

  // Strip the helper fields off the stored lines.
  const storedLines = lines.map(({ foodGroup, nutrientProfilePer100, ...keep }) => keep)

  const id = recipeId(src)

  const data = {
    id,
    title: src.title,
    source: src.source,
    sourceId: String(src.sourceId),
    sourceUrl: src.sourceUrl || '',
    imageUrl: GENERATED_IMAGES[id] || src.imageUrl || '',
    imageAttribution: src.imageAttribution ?? null,
    instructions: src.instructions ?? null,
    instructionsExternal: Boolean(src.instructionsExternal),
    publisher: src.publisher ?? null,
    servingsBase,
    totalTimeMinutes: src.totalTimeMinutes ?? null,
    cuisine: src.cuisine ?? null,
    course: src.course || 'Dinner',
    dietLabels,
    healthLabels,
    allergens,
    nutritionPerServing,
    attributionRequired: src.attributionRequired ?? src.source === 'edamam',
    popularity: seedPopularity(src, parseCompleteness),
    parseCompleteness,
    ingredients: storedLines,
  }

  return { id, data }
}

function recipeId(src) {
  return `${src.source}-${slugify(String(src.sourceId))}`
}

function buildRawText(rawLine) {
  if (rawLine.combined) return rawLine.rawName.trim()
  const measure = (rawLine.rawMeasure || '').trim()
  const name = (rawLine.rawName || '').trim()
  return [measure, name].filter(Boolean).join(' ').trim()
}

function round2(n) {
  return Math.round(n * 100) / 100
}

export { deriveAllergens, deriveHealthLabels, deriveNutrition }
