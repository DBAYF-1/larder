// Diet / free-from verification — "prove it or omit it" (roadmap #7).
//
// The single fix for the whole class of safety-critical label bugs documented in
// docs/audit/data-quality.md (Findings 1–3):
//   • coeliac-unsafe "Gluten-free" (oats, tortillas);
//   • meat in "Vegetarian" (bacon lasagne auto-tagged from the Pasta category);
//   • honey / dairy / yoghurt in "Vegan" (unguarded hand tags).
//
// Every diet and free-from label is now DERIVED and CROSS-CHECKED against the
// recipe's RESOLVED ingredient lines, and BLOCKED when it cannot be proven:
//
//   A label may stand only if
//     (a) NO ingredient line is `needsReview` — we cannot prove the absence of
//         an allergen / animal product on a line we failed to resolve; and
//     (b) NO resolved ingredient OR raw token contradicts it
//         (meat ⇒ not Vegetarian; milk/butter/cheese/egg/honey/gelatine ⇒ not
//          Vegan; any gluten cereal ⇒ not Gluten-free; …).
//
// This applies equally to TheMealDB category hints AND to hand-authored curated
// diet tags — curated tags get NO free pass; they must also pass verification.
//
// Inputs / outputs are plain data. Pure, deterministic, no Firestore.

import { ALLERGENS } from './allergens.js'

// ── Diet labels we can PROVE from ingredients ─────────────────────────────────
export const VERIFIABLE_DIETS = Object.freeze(['Vegan', 'Vegetarian', 'Pescatarian'])

// ── Allergen → free-from label (a free-from label is the absence of the group) ─
// Order matters only for output stability (we sort at the end).
const FREE_FROM_BY_ALLERGEN = Object.freeze({
  'Gluten-free': [ALLERGENS.GLUTEN],
  'Dairy-free': [ALLERGENS.MILK],
  'Egg-free': [ALLERGENS.EGG],
  'Nut-free': [ALLERGENS.NUTS, ALLERGENS.PEANUTS],
  'Peanut-free': [ALLERGENS.PEANUTS],
  'Fish-free': [ALLERGENS.FISH, ALLERGENS.CRUSTACEANS, ALLERGENS.MOLLUSCS],
  'Shellfish-free': [ALLERGENS.CRUSTACEANS, ALLERGENS.MOLLUSCS],
  'Soy-free': [ALLERGENS.SOYA],
  'Sesame-free': [ALLERGENS.SESAME],
  'Mustard-free': [ALLERGENS.MUSTARD],
  'Celery-free': [ALLERGENS.CELERY],
  'Sulphite-free': [ALLERGENS.SULPHITES],
})

// The complete set of labels this module owns: free-from + verifiable diets.
// Any OTHER label on a recipe (lifestyle tags such as High-protein, Keto,
// Mediterranean, Low-carb, Kosher, Halal, Diabetic-friendly…) is NOT something
// ingredients can prove or disprove, so it is passed through untouched.
const MANAGED_FREE_FROM = new Set(Object.keys(FREE_FROM_BY_ALLERGEN))
const MANAGED_DIETS = new Set(VERIFIABLE_DIETS)

// ── foodGroup signals (authoritative when a line resolved) ────────────────────
const MEAT_FOODGROUPS = new Set(['Meat', 'Offal'])
const FISH_FOODGROUPS = new Set(['Fish'])

// ── Plant-substitute guard ────────────────────────────────────────────────────
// Tokens like "sausage", "cheese", "butter", "mayonnaise" appear in vegan
// products ("vegan sausage", "plant-based cheese", "dairy-free butter"). When a
// line is explicitly a substitute we must NOT treat those tokens as animal
// contradictions. The resolved foodGroup already protects these (they sit under
// "Meat alternatives" / "Dairy alternatives" / "Plant-based"), but we also guard
// the raw-text keyword pass so an unresolved "vegan sausage" line isn't a false
// contradiction.
const SUBSTITUTE_RE =
  /\b(vegan|plant[- ]?based|meat[- ]?free|meatless|dairy[- ]?free|non[- ]?dairy|vegetarian|veggie|mock|faux|imitation|substitute|alternative|quorn|tofu|tempeh|seitan|soya?)\b/i

// ── Animal-product keyword tables (contradict Vegetarian / Vegan) ─────────────
// MEAT/FISH contradict BOTH Vegetarian and Vegan. NON-MEAT animal products
// (dairy, egg, honey, gelatine, …) contradict ONLY Vegan.
const MEAT_RE =
  /\b(beef|steak|mince|minced|veal|pork|bacon|gammon|ham\b|pancetta|prosciutto|salami|chorizo|pepperoni|sausage|saveloy|kielbasa|frankfurter|hot ?dog|lamb|mutton|hogget|goat meat|venison|rabbit|hare|chicken|turkey|duck|goose|pheasant|partridge|quail|guinea fowl|poultry|liver|kidney|offal|tripe|sweetbread|oxtail|trotter|black pudding|haggis|pat[eé]\b|foie gras|lardon|\bspam\b|corned beef|brisket|sirloin|ribeye|tenderloin|rump\b|escalope|cutlet|drumstick)\b/i

const FISH_RE =
  /\b(fish|cod|haddock|tuna|salmon|trout|mackerel|sardine|anchov|herring|kipper|pilchard|sea bass|\bbass\b|snapper|barramundi|monkfish|hake|pollock|plaice|sole\b|halibut|swordfish|tilapia|whitebait|skate\b|\beel\b|caviar|surimi|prawn|shrimp|crab\b|lobster|crayfish|langoustine|scampi|mussel|clam\b|scallop|squid|calamari|octopus|oyster|cockle|whelk|cuttlefish|seafood|fish sauce|fish stock|nam pla|worcestershire)\b/i

// Animal-derived ingredients that are not meat/fish but are NOT vegan.
const NON_VEGAN_ANIMAL_RE = new RegExp(
  '\\b(' +
    'honey|royal jelly|beeswax|propolis|' +
    'gelatine|gelatin|isinglass|carmine|cochineal|shellac|' +
    'lard|suet|dripping|tallow|duck fat|goose fat|' +
    // "milk" but not coconut/almond/oat/soya/etc. plant milks (those are vegan).
    '(?<!coconut )(?<!almond )(?<!\\boat )(?<!soya )(?<!soy )(?<!rice )(?<!cashew )(?<!hemp )(?<!hazelnut )(?<!plant )(?<!nut )(?<!pea )(?<!flax )(?<!macadamia )milk|' +
    'buttermilk|(?<!coconut )(?<!soya )(?<!oat )\\bcream\\b|cr[eè]me fra[iî]che|cr[eè]me anglaise|custard|' +
    '(?<!peanut )(?<!almond )(?<!cashew )(?<!nut )(?<!cocoa )(?<!shea )(?<!apple )' +
    'butter(?!\\s*bean|nut|\\s*squash)|\\bghee\\b|cheese|parmesan|parmigiano|pecorino|' +
    'mozzarella|mascarpone|ricotta|feta|halloumi|paneer|brie|camembert|cheddar|stilton|gouda|' +
    'yoghurt|yogurt|\\bcurd\\b|\\bwhey\\b|casein|lactose|condensed milk|evaporated milk|milk powder|' +
    '\\begg|albumen|mayonnaise|\\bmayo\\b|aioli|hollandaise|meringue' +
    ')\\b',
  'i',
)

/**
 * Classify the animal status of ONE line.
 * @param {object} line  embedded recipe line (has canonicalName, raw, foodGroup)
 * @returns {{ meat:boolean, fish:boolean, nonVeganAnimal:boolean }}
 */
function animalStatusForLine(line) {
  const text = `${line.canonicalName || ''} ${line.raw || ''}`.trim()
  const group = line.foodGroup || ''
  const substitute = SUBSTITUTE_RE.test(text)

  // foodGroup is authoritative for a RESOLVED line (a "Meat alternatives" group
  // never sets these). Keyword hits are guarded by the substitute check so a
  // "vegan sausage" / "dairy-free butter" line doesn't read as an animal line.
  const meat =
    MEAT_FOODGROUPS.has(group) || (!substitute && MEAT_RE.test(text))
  const fish =
    FISH_FOODGROUPS.has(group) || (!substitute && FISH_RE.test(text))
  const nonVeganAnimal = !substitute && NON_VEGAN_ANIMAL_RE.test(text)

  return { meat, fish, nonVeganAnimal }
}

/**
 * Verify diet + free-from + health labels against the recipe's resolved lines.
 *
 * @param {object} args
 * @param {Array<object>} args.lines      embedded recipe lines (with foodGroup carried)
 * @param {string[]}      args.allergens  recipe-level allergens (from deriveAllergens)
 * @param {string[]}      [args.claimedLabels]  union of source dietLabels + healthLabels
 *                                          to consider (curated tags, TheMealDB hints)
 * @returns {{
 *   dietLabels: string[],     // verified Vegan/Vegetarian/Pescatarian only
 *   healthLabels: string[],   // verified free-from labels only
 *   passthroughLabels: string[], // lifestyle labels we can't prove (kept as-is)
 *   blocked: Array<{label:string, reason:string}>, // what we refused + why
 * }}
 */
export function verifyLabels({ lines = [], allergens = [], claimedLabels = [] } = {}) {
  const blocked = []

  // (a) Any unresolved line forbids ANY proven label — we can't prove absence on
  //     a line we couldn't resolve. This is the core "block, don't gate" rule.
  const hasUnresolved = lines.some((l) => l.resolutionStatus === 'needsReview')

  // Scan every line once for animal contradictions (used by the diet checks).
  let anyMeat = false
  let anyFish = false
  let anyNonVeganAnimal = false
  for (const line of lines) {
    const s = animalStatusForLine(line)
    if (s.meat) anyMeat = true
    if (s.fish) anyFish = true
    if (s.nonVeganAnimal) anyNonVeganAnimal = true
  }

  const allergenSet = new Set(allergens)

  // ── Derive the VERIFIABLE diet labels from ingredients ──────────────────────
  // (Independent of what was claimed — we assert the strongest provable diet.)
  const dietLabels = []
  if (!hasUnresolved) {
    // Vegan: no meat, no fish, no other animal product.
    if (!anyMeat && !anyFish && !anyNonVeganAnimal) {
      dietLabels.push('Vegan', 'Vegetarian')
    } else if (!anyMeat && !anyFish) {
      // Vegetarian: no meat, no fish (dairy/egg/honey allowed).
      dietLabels.push('Vegetarian')
    }
    // Pescatarian: no meat (fish allowed). Only meaningful when fish is present;
    // a fully veggie dish is already covered above.
    if (!anyMeat && anyFish) dietLabels.push('Pescatarian')
  }

  // Record blocks for any CLAIMED diet label we could not prove.
  for (const label of claimedLabels) {
    if (!MANAGED_DIETS.has(label)) continue
    if (dietLabels.includes(label)) continue
    blocked.push({ label, reason: dietBlockReason(label, { hasUnresolved, anyMeat, anyFish, anyNonVeganAnimal }) })
  }

  // ── Derive the free-from / health labels from allergen absence ──────────────
  const healthLabels = []
  for (const [label, groups] of Object.entries(FREE_FROM_BY_ALLERGEN)) {
    const present = groups.some((g) => allergenSet.has(g))
    if (present) {
      if (claimedLabels.includes(label)) {
        blocked.push({ label, reason: `contradicted by ${groups.filter((g) => allergenSet.has(g)).join(', ')}` })
      }
      continue
    }
    if (hasUnresolved) {
      // Can't prove absence with an unresolved line present.
      if (claimedLabels.includes(label)) {
        blocked.push({ label, reason: 'unresolved ingredient line — absence unprovable' })
      }
      continue
    }
    healthLabels.push(label)
  }

  // ── Pass-through lifestyle labels (ingredients can't prove or disprove) ──────
  const passthroughLabels = []
  for (const label of claimedLabels) {
    if (MANAGED_DIETS.has(label) || MANAGED_FREE_FROM.has(label)) continue
    if (!passthroughLabels.includes(label)) passthroughLabels.push(label)
  }

  return {
    dietLabels: [...new Set(dietLabels)].sort(),
    healthLabels: [...new Set(healthLabels)].sort(),
    passthroughLabels,
    blocked,
  }
}

function dietBlockReason(label, { hasUnresolved, anyMeat, anyFish, anyNonVeganAnimal }) {
  if (hasUnresolved) return 'unresolved ingredient line — diet unprovable'
  if (label === 'Vegan') {
    if (anyMeat) return 'contains meat'
    if (anyFish) return 'contains fish/seafood'
    if (anyNonVeganAnimal) return 'contains a non-vegan animal product (dairy/egg/honey/gelatine)'
  }
  if (label === 'Vegetarian') {
    if (anyMeat) return 'contains meat'
    if (anyFish) return 'contains fish/seafood'
  }
  if (label === 'Pescatarian' && anyMeat) return 'contains meat'
  return 'not provable from resolved ingredients'
}

export { animalStatusForLine, FREE_FROM_BY_ALLERGEN, MEAT_RE, FISH_RE, NON_VEGAN_ANIMAL_RE }
