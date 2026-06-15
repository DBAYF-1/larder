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

// ── UK↔US spelling pairs that appear inside ingredient cores (mostly the -our /
// -or, -re / -er and -ise / -ize families, plus a few lexical swaps). Written
// UK-canonical: [US/variant spellings]. These fold whole-phrase spellings onto
// the British form the dictionary uses.
const UK_US_SPELLING = {
  'yoghurt': ['yogurt'],
  'greek yoghurt': ['greek yogurt'],
  'natural yoghurt': ['natural yogurt'],
  'soya': ['soy'],
  'soya sauce': ['soy sauce'],
  'soya milk': ['soy milk'],
  'wholemeal': ['whole wheat', 'wholewheat', 'whole-wheat'],
  'savoury': ['savory'],
  'doughnut': ['donut', 'donuts', 'doughnuts'],
  'courgette': ['zucchini'],
  'aubergine': ['eggplant'],
  'beef escalope': ['beef cutlet'],
  'chilli': ['chili', 'chile'],
  'chilli powder': ['chili powder'],
  'chilli flakes': ['chili flakes', 'red pepper flakes', 'crushed red pepper'],
  'cooking apple': ['baking apple'],
}

// ── Common plural ↔ singular pairs the morphological pluralise/singularise rules
// don't catch cleanly, or where the recipe text routinely uses one form and the
// canonical the other. Written canonical-form: [other forms seen in the wild].
const PLURAL_SINGULAR = {
  // canonical is plural in the dictionary
  prawns: ['prawn'],
  chickpeas: ['chickpea'],
  'kidney beans': ['kidney bean'],
  'black beans': ['black bean'],
  'cannellini beans': ['cannellini bean'],
  'green beans': ['green bean'],
  almonds: ['almond'],
  walnuts: ['walnut'],
  cashews: ['cashew'],
  olives: ['olive'],
  lentils: ['lentil'],
  oats: ['oat'],
  peas: ['pea'],
  sultanas: ['sultana'],
  'bay leaves': ['bay leaf'],
  noodles: ['noodle'],
  'mixed herbs': ['mixed herb'],
  breadcrumbs: ['breadcrumb', 'bread crumb', 'bread crumbs'],
  // canonical is singular in the dictionary
  onion: ['onions'],
  'red onion': ['red onions'],
  carrot: ['carrots'],
  tomato: ['tomatoes'],
  potato: ['potatoes'],
  'sweet potato': ['sweet potatoes'],
  mushroom: ['mushrooms'],
  leek: ['leeks'],
  courgette: ['courgettes'],
  aubergine: ['aubergines'],
  chilli: ['chillies', 'chilis', 'chiles'],
  lemon: ['lemons'],
  lime: ['limes'],
  orange: ['oranges'],
  apple: ['apples'],
  banana: ['bananas'],
  avocado: ['avocados', 'avocadoes'],
  egg: ['eggs'],
  sausage: ['sausages'],
  'pork chop': ['pork chops'],
  'chicken breast': ['chicken breasts'],
  'chicken thigh': ['chicken thighs'],
  'tortilla wrap': ['tortilla wraps', 'tortillas', 'wraps'],
  'pitta bread': ['pitta breads', 'pittas'],
  cucumber: ['cucumbers'],
}

// ── Brand → generic. UK supermarket brands that recipes name directly; folded
// onto the generic store-cupboard canonical so they resolve and aggregate.
const BRAND_TO_GENERIC = {
  'stock cube': ['oxo', 'oxo cube', 'oxo cubes', 'knorr stock cube', 'knorr stock pot', 'kallo stock cube'],
  'tomato ketchup': ['heinz ketchup'],
  'worcestershire sauce': ['lea & perrins', 'lea and perrins'],
  'cream cheese': ['philadelphia'],
  'soy sauce': ['kikkoman', 'kikkoman soy sauce'],
  'golden syrup': ['lyle’s golden syrup', "lyle's golden syrup"],
  'mixed herbs': ['schwartz mixed herbs'],
  'plain chocolate': ['bournville'],
  'cocoa powder': ['bournville cocoa'],
  'bicarbonate of soda': ['arm & hammer'],
  'gravy granules': ['bisto'],
  'yeast extract': ['marmite'],
  mayonnaise: ['hellmann’s', "hellmann's", 'hellmanns'],
  custard: ['birds custard'],
}

// ── Frequent recipe phrasings → canonical. Long-form descriptors, qualifiers and
// alternate names that recipes use but which all resolve to one canonical term.
const RECIPE_PHRASINGS = {
  'plain flour': ['plain white flour', 'plain wheat flour'],
  'self-raising flour': ['self raising flour', 'self-rising flour', 'self rising flour', 'self raising white flour'],
  'caster sugar': ['superfine sugar', 'caster', 'fine sugar'],
  'granulated sugar': ['white granulated sugar', 'granulated white sugar'],
  'brown sugar': ['soft brown sugar', 'light brown sugar', 'dark brown sugar', 'light muscovado', 'dark muscovado', 'muscovado sugar', 'soft light brown sugar', 'soft dark brown sugar'],
  'double cream': ['thick cream', 'pouring cream', 'extra thick cream'],
  passata: ['sieved tomatoes', 'tomato passata', 'creamed tomatoes'],
  'chopped tomatoes': ['tin of tomatoes', 'tinned chopped tomatoes', 'can of tomatoes', 'plum tomatoes in juice'],
  'tomato purée': ['tomato concentrate', 'double concentrate tomato', 'concentrated tomato paste'],
  'peanut oil': ['groundnut oil', 'arachis oil'],
  'vegetable oil': ['neutral oil', 'flavourless oil', 'cooking oil'],
  'olive oil': ['extra-virgin olive oil', 'extra virgin olive oil', 'light olive oil'],
  'spring onion': ['salad onion', 'salad onions'],
  garlic: ['garlic clove', 'garlic cloves', 'cloves garlic', 'clove of garlic', 'minced garlic', 'crushed garlic', 'garlic paste'],
  ginger: ['fresh ginger', 'root ginger', 'ginger root', 'fresh root ginger'],
  'plain chocolate': ['dark chocolate', 'cooking chocolate', 'chocolate chips', 'plain dark chocolate', '70% dark chocolate'],
  'cocoa powder': ['unsweetened cocoa', 'cacao powder', 'dutch cocoa'],
  'bicarbonate of soda': ['bicarb', 'bicarb of soda'],
  'stock cube': ['stock pot', 'chicken stock', 'beef stock', 'vegetable stock', 'veg stock', 'bouillon', 'bouillon cube', 'broth'],
  'natural yoghurt': ['plain yoghurt', 'greek yoghurt', 'greek-style yoghurt', 'plain greek yoghurt'],
  'soured cream': ['sour cream', 'crème fraîche', 'creme fraiche'],
  'cheddar cheese': ['mature cheddar', 'grated cheddar', 'strong cheddar'],
  'minced beef': ['lean beef mince', 'steak mince', 'minced steak'],
  'chicken breast': ['skinless chicken breast', 'boneless chicken breast', 'chicken fillet', 'chicken fillets'],
  'white fish fillet': ['cod fillet', 'cod fillets', 'haddock fillet', 'pollock fillet', 'white fish', 'firm white fish'],
  'salmon fillet': ['salmon fillets', 'fresh salmon'],
  'desiccated coconut': ['shredded coconut', 'flaked coconut', 'dried coconut'],
  vanilla: ['vanilla extract', 'vanilla essence', 'vanilla bean paste', 'vanilla pod'],
  'baking powder': ['raising agent'],
  'mixed herbs': ['italian herbs', 'herbes de provence', 'dried mixed herbs', 'mixed dried herbs'],
  honey: ['runny honey', 'clear honey'],
  'golden syrup': ['light treacle'],
  rice: ['long grain rice', 'long-grain rice', 'white rice'],
  'basmati rice': ['basmati'],
  pasta: ['dried pasta', 'pasta shapes'],
  spaghetti: ['dried spaghetti'],
  bread: ['white bread', 'sliced bread', 'crusty bread'],
  butter: ['salted butter', 'unsalted butter'],
  'black pepper': ['freshly ground black pepper', 'ground black pepper', 'cracked black pepper'],
  salt: ['sea salt', 'table salt', 'flaky sea salt', 'kosher salt', 'fine salt'],
}

// Build the reverse index: any spelling -> UK canonical phrase (lower-cased).
function buildIndex() {
  const idx = new Map()
  for (const source of [
    UK_TO_US,
    UK_TO_US_EXTRA,
    UK_US_SPELLING,
    PLURAL_SINGULAR,
    BRAND_TO_GENERIC,
    RECIPE_PHRASINGS,
  ]) {
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
  // recurring TheMealDB vocabulary
  avocadoes: 'avocado',
  mangoes: 'mango',
  scallions: 'scallion',
  raspberries: 'raspberry',
  strawberries: 'strawberry',
  blueberries: 'blueberry',
  cranberries: 'cranberry',
  pastries: 'pastry',
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
  // more mass/uncountable nouns that end in -s
  'treacle',
  'bicarbonate of soda',
  'cress',
  'swiss chard',
  'chard',
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
