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
import { deriveAllergens } from './allergens.js'
import { verifyLabels } from './verifyDiet.js'

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

// ── Nutrition ───────────────────────────────────────────────────────────────
// Sum CoFID-style per-100 profiles weighted by each resolved line's base
// quantity, then divide by servings. We never fabricate nutrition.
//
// Roadmap #30 — COMPLETENESS:
//   • count-based ingredients no longer silently contribute 0. When a count line
//     has a KNOWN typical item weight (`perItemGrams`, the same declared constant
//     normalise.js uses) we convert items→grams so eggs/apples/chicken-breasts
//     count toward the total. This stops the systematic UNDER-statement called
//     out in the data-quality audit (Finding 8).
//   • we also return `completeness` = share of the recipe's "real" (non-staple)
//     ingredient lines that actually contributed a nutrient profile, so the UI
//     can label nutrition "approximate — based on N of M ingredients" or hide it
//     below a threshold rather than showing a confidently-wrong low total.
//
// Returns { nutrition: {energyKcal,…}|null, completeness: number }.
function deriveNutrition(lines, servings) {
  const totals = { energyKcal: 0, proteinG: 0, fatG: 0, carbsG: 0 }
  let contributing = 0
  let realLines = 0
  for (const line of lines) {
    if (line.staple) continue // staples are excluded from the maths by contract
    realLines++
    if (line.resolutionStatus !== 'resolved') continue
    const profile = line.nutrientProfilePer100
    const qty = line.quantityInBaseUnit
    if (!profile || qty == null || !(qty > 0)) continue

    // Convert the base quantity into GRAMS-equivalent for the per-100 maths.
    // g/ml are already per-100 compatible; a count is converted via the declared
    // perItemGrams (a known constant — NOT a fabricated density), else skipped.
    let grams = null
    if (line.baseUnit === 'g' || line.baseUnit === 'ml') {
      grams = qty
    } else if (line.baseUnit === 'count' && line.perItemGrams > 0) {
      grams = qty * line.perItemGrams
    }
    if (grams == null || !(grams > 0)) continue

    const factor = grams / 100
    totals.energyKcal += (profile.energyKcal || 0) * factor
    totals.proteinG += (profile.proteinG || 0) * factor
    totals.fatG += (profile.fatG || 0) * factor
    totals.carbsG += (profile.carbsG || 0) * factor
    contributing++
  }

  const completeness = realLines > 0 ? round2(contributing / realLines) : 0
  if (contributing === 0) return { nutrition: null, completeness }

  const s = servings && servings > 0 ? servings : 1
  return {
    nutrition: {
      energyKcal: Math.round(totals.energyKcal / s),
      proteinG: Math.round((totals.proteinG / s) * 10) / 10,
      fatG: Math.round((totals.fatG / s) * 10) / 10,
      carbsG: Math.round((totals.carbsG / s) * 10) / 10,
    },
    completeness,
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
      // carried for allergen/diet/nutrition derivation, then stripped from the doc
      foodGroup: ingredient?.foodGroup || null,
      nutrientProfilePer100: ingredient?.nutrientProfilePer100 || null,
      perItemGrams: ingredient?.perItemGrams || null,
    })
  }

  const parseCompleteness = resolvable > 0 ? round2(resolved / resolvable) : 0

  // ── Allergens (roadmap #8) ──────────────────────────────────────────────────
  const allergens = deriveAllergens(lines)

  // ── Diet + free-from verification (roadmap #7) ──────────────────────────────
  // PROVE-OR-OMIT: derive Vegetarian/Vegan/Pescatarian and every free-from label
  // from the resolved lines and BLOCK any label that is (a) sitting on an
  // unresolved line or (b) contradicted by an ingredient. The source-provided
  // dietLabels + healthLabels are treated only as CLAIMS the verifier must prove;
  // curated hand tags get no free pass. Lifestyle labels we can't prove from
  // ingredients (High-protein, Keto, Mediterranean, Low-carb, Kosher…) pass
  // through unchanged.
  const claimedLabels = [
    ...new Set([...(src.dietLabels || []), ...(src.healthLabels || [])]),
  ]
  const verified = verifyLabels({ lines, allergens, claimedLabels })

  const dietLabels = verified.dietLabels
  // Free-from health labels are the proven ones; lifestyle pass-through labels
  // ride alongside in healthLabels (the field the free-from filters read).
  const healthLabels = [
    ...new Set([...verified.healthLabels, ...verified.passthroughLabels]),
  ].sort()

  // ── Nutrition + completeness (roadmap #30) ──────────────────────────────────
  const sourceNutrition =
    src.nutritionPerServing && Number.isFinite(src.nutritionPerServing.energyKcal)
      ? src.nutritionPerServing
      : null
  const derived = deriveNutrition(lines, servingsBase)
  const nutritionPerServing = sourceNutrition || derived.nutrition
  // Source nutrition (e.g. Edamam) is treated as fully complete; otherwise expose
  // the derived share so the UI can label "approximate" or hide below a threshold.
  const nutritionCompleteness = sourceNutrition ? 1 : derived.completeness

  // ── Search tokens (roadmap #22-data) ────────────────────────────────────────
  // Lowercased unique tokens from the title PLUS the resolved canonical names,
  // for a cheap array-contains client search.
  const searchTokens = buildSearchTokens(src.title, lines)

  // ── Image precedence (roadmap #21) ──────────────────────────────────────────
  // A REAL source photo must WIN over a generated one; emit null (not an inline
  // SVG data-URI) for placeholders so the client renders its own fallback at zero
  // Firestore byte-cost. Precedence: source photo → generated → null.
  const id = recipeId(src)
  const imageUrl = src.imageUrl || GENERATED_IMAGES[id] || null

  // Strip the helper fields off the stored lines.
  const storedLines = lines.map(
    ({ foodGroup, nutrientProfilePer100, perItemGrams, ...keep }) => keep,
  )

  const data = {
    id,
    title: src.title,
    source: src.source,
    sourceId: String(src.sourceId),
    sourceUrl: src.sourceUrl || '',
    imageUrl,
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
    nutritionCompleteness,
    searchTokens,
    attributionRequired: src.attributionRequired ?? src.source === 'edamam',
    popularity: seedPopularity(src, parseCompleteness),
    parseCompleteness,
    ingredients: storedLines,
  }

  return { id, data }
}

// Build the searchTokens array: lowercased, de-accented, unique tokens from the
// title plus every resolved line's canonicalName. Deterministic + sorted so the
// contentHash is stable across runs. Stop-words and pure-number tokens dropped.
const SEARCH_STOPWORDS = new Set([
  'and', 'the', 'with', 'of', 'a', 'an', 'in', 'on', 'to', 'for', 'or',
])

function buildSearchTokens(title, lines) {
  const set = new Set()
  const add = (text) => {
    for (const tok of tokenise(text)) {
      if (tok.length < 2) continue
      if (SEARCH_STOPWORDS.has(tok)) continue
      if (/^\d+$/.test(tok)) continue
      set.add(tok)
    }
  }
  add(title)
  for (const line of lines) {
    if (line.resolutionStatus === 'resolved' && line.canonicalName) {
      add(line.canonicalName)
    }
  }
  return [...set].sort()
}

function tokenise(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '') // strip accents
    .replace(/['’]/g, '')
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
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

export { deriveAllergens, deriveNutrition, buildSearchTokens }
