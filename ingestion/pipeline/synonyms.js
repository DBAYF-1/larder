// UK ↔ US synonym map (spec 15.2) plus plural/singular helpers.
//
// The canonical names in data/ingredients.js are UK English. This table lets
// the resolver recognise US spellings/terms (and a few common variants) and
// fold them onto the UK canonical term BEFORE the canonical lookup runs.
//
// Direction: every key (any spelling) maps to the UK canonical phrase.

// Pairs from spec 15.2 — written UK-canonical: [list of equivalent US/variant terms].
const UK_TO_US = {
  aubergine: ['eggplant'],
  courgette: ['zucchini'],
  coriander: ['cilantro'], // leaf sense; ground coriander handled separately by resolver
  'spring onion': ['scallion', 'scallions', 'green onion', 'green onions'],
  rocket: ['arugula'],
  prawns: ['shrimp', 'shrimps'],
  prawn: ['shrimp'],
  'plain flour': ['all-purpose flour', 'all purpose flour', 'ap flour'],
  'bicarbonate of soda': ['baking soda', 'sodium bicarbonate'],
  'caster sugar': ['superfine sugar', 'castor sugar'],
  'minced beef': ['ground beef', 'beef mince', 'hamburger meat'],
  chickpeas: ['garbanzo beans', 'garbanzos', 'garbanzo'],
  chickpea: ['garbanzo bean'],
  beetroot: ['beets', 'beet'],
  swede: ['rutabaga'],
}

// A handful of extra everyday UK↔US equivalences that recur across TheMealDB
// data. Kept separate from the spec list but used by the same helpers.
const UK_TO_US_EXTRA = {
  'cornflour': ['cornstarch', 'corn starch'],
  'double cream': ['heavy cream', 'heavy whipping cream', 'whipping cream'],
  'single cream': ['light cream', 'half and half', 'half-and-half'],
  'natural yoghurt': ['plain yogurt', 'natural yogurt', 'plain yoghurt'],
  'tomato purée': ['tomato paste', 'tomato puree'],
  'sultanas': ['golden raisins'],
  'desiccated coconut': ['shredded coconut', 'dried coconut'],
  'icing sugar': ['confectioners sugar', "confectioner's sugar", 'powdered sugar'],
  'demerara sugar': ['turbinado sugar', 'raw sugar'],
  'wholemeal flour': ['whole wheat flour', 'wholewheat flour'],
  'streaky bacon': ['bacon strips', 'side bacon'],
  'gammon': ['ham steak'],
  'mangetout': ['snow peas', 'snow pea'],
  'bell pepper': ['capsicum', 'bell peppers', 'sweet pepper'],
  'chips': ['fries', 'french fries'],
  'crisps': ['potato chips'],
  'aubergines': ['eggplants'],
  'courgettes': ['zucchinis'],
}

// Build the reverse index: any spelling -> UK canonical phrase (lower-cased).
function buildIndex() {
  const idx = new Map()
  for (const source of [UK_TO_US, UK_TO_US_EXTRA]) {
    for (const [uk, others] of Object.entries(source)) {
      const ukKey = uk.toLowerCase()
      idx.set(ukKey, ukKey) // UK term maps to itself
      for (const other of others) {
        idx.set(other.toLowerCase(), ukKey)
      }
    }
  }
  return idx
}

const SYNONYM_INDEX = buildIndex()

/**
 * Map any UK/US spelling of a whole phrase to its UK-canonical phrase.
 * Returns the input unchanged (lower-cased & trimmed) when not in the table.
 * @param {string} term
 * @returns {string}
 */
export function toUkCanonical(term) {
  const key = (term || '').trim().toLowerCase()
  return SYNONYM_INDEX.get(key) || key
}

/**
 * Has this exact phrase a UK-canonical synonym in the table?
 * @param {string} term
 * @returns {boolean}
 */
export function hasSynonym(term) {
  return SYNONYM_INDEX.has((term || '').trim().toLowerCase())
}

// Irregular plurals seen in ingredient names. Maps plural -> singular.
const IRREGULAR_PLURALS = {
  leaves: 'leaf',
  loaves: 'loaf',
  halves: 'half',
  potatoes: 'potato',
  tomatoes: 'tomato',
  chillies: 'chilli',
  cherries: 'cherry',
  berries: 'berry',
  anchovies: 'anchovy',
  peas: 'pea',
  feet: 'foot',
  geese: 'goose',
  knives: 'knife',
}

// Words that look plural but are singular ingredients — never singularise these.
const PLURAL_INVARIANT = new Set([
  'molasses',
  'oats',
  'greens',
  'grits',
  'couscous',
  'hummus',
  'asparagus',
  'watercress',
])

/**
 * Best-effort singularise an ingredient core token/phrase. Operates on the LAST
 * word of a multi-word phrase ("spring onions" -> "spring onion").
 * @param {string} phrase
 * @returns {string}
 */
export function singularise(phrase) {
  const words = (phrase || '').trim().split(/\s+/)
  if (!words.length) return ''
  const last = words[words.length - 1].toLowerCase()

  if (PLURAL_INVARIANT.has(last)) return phrase.trim().toLowerCase()
  if (IRREGULAR_PLURALS[last]) {
    words[words.length - 1] = IRREGULAR_PLURALS[last]
    return words.join(' ').toLowerCase()
  }

  let sing = last
  if (/(s|sh|ch|x|z)es$/.test(last)) {
    sing = last.slice(0, -2) // "boxes" -> "box"
  } else if (/[^aeiou]ies$/.test(last)) {
    sing = last.slice(0, -3) + 'y' // "pastries" -> "pastry"
  } else if (/ses$/.test(last) || /sses$/.test(last)) {
    sing = last.slice(0, -2)
  } else if (last.endsWith('s') && !last.endsWith('ss') && last.length > 3) {
    sing = last.slice(0, -1) // "carrots" -> "carrot"
  }

  words[words.length - 1] = sing
  return words.join(' ').toLowerCase()
}

/**
 * Best-effort pluralise the last word of a phrase. Used to build lookup keys.
 * @param {string} phrase
 * @returns {string}
 */
export function pluralise(phrase) {
  const words = (phrase || '').trim().split(/\s+/)
  if (!words.length) return ''
  const last = words[words.length - 1].toLowerCase()

  if (PLURAL_INVARIANT.has(last)) return phrase.trim().toLowerCase()

  let plur
  if (/[^aeiou]y$/.test(last)) {
    plur = last.slice(0, -1) + 'ies' // "berry" -> "berries"
  } else if (/(s|sh|ch|x|z)$/.test(last)) {
    plur = last + 'es'
  } else if (last.endsWith('o') && !/[aeiou]o$/.test(last)) {
    plur = last + 'es' // "potato" -> "potatoes" (best effort)
  } else {
    plur = last + 's'
  }

  words[words.length - 1] = plur
  return words.join(' ').toLowerCase()
}

/**
 * Generate the candidate keys we should try for a core phrase: the phrase as-is,
 * its UK-canonical synonym, and singular/plural forms of both. De-duplicated,
 * order preserved (most-specific first).
 * @param {string} core
 * @returns {string[]}
 */
export function candidateKeys(core) {
  const base = (core || '').trim().toLowerCase()
  const out = []
  const push = (v) => {
    if (v && !out.includes(v)) out.push(v)
  }

  push(base)
  push(toUkCanonical(base))
  push(singularise(base))
  push(toUkCanonical(singularise(base)))
  push(pluralise(base))
  push(toUkCanonical(pluralise(base)))
  return out
}
