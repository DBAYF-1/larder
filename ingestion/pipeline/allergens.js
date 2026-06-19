// Allergen derivation (roadmap #8).
//
// Maps each resolved/unresolved ingredient line to the 14 UK FIC major
// allergens (plus the common free-from groups Larder filters on). Detection is
// belt-and-braces:
//
//   1. STRUCTURED — the resolved canonical ingredient's `foodGroup` (reliable
//      when a line resolved: Fish/Dairy/Eggs/Nuts/Pulses → the right allergen).
//   2. KEYWORD    — a regex pass over `canonicalName || raw` so that even an
//      UNRESOLVED (needsReview) line, or an animal/gluten token hiding inside a
//      compound name, still raises its allergen. This is what keeps a coeliac
//      safe when a line like "200g Oats" fails to resolve.
//
// The keyword tables were deliberately widened over the original buildRecipe.js
// regex to close the documented gaps (data-quality audit Finding 1): oats
// (gluten by default — standard oats are cross-contaminated), tortilla/wrap,
// spelt, semolina, naan, gnocchi, couscous, malt, bulgur, farro for gluten;
// ghee, paneer, mascarpone, crème fraîche, custard for dairy; pine nut and the
// nut-butters for nuts; and fuller sesame/soy/egg/fish/shellfish/celery/mustard/
// sulphite coverage.
//
// Pure module: no Firestore, no Date.now(), deterministic. The verifier
// (verifyDiet.js) and buildRecipe.js both consume `deriveAllergens`.

// ── Canonical allergen tokens (the strings stored on recipe.allergens) ────────
export const ALLERGENS = Object.freeze({
  GLUTEN: 'contains-gluten',
  MILK: 'contains-milk',
  EGG: 'contains-egg',
  FISH: 'contains-fish',
  CRUSTACEANS: 'contains-crustaceans',
  MOLLUSCS: 'contains-molluscs',
  NUTS: 'contains-nuts',
  PEANUTS: 'contains-peanuts',
  SOYA: 'contains-soya',
  SESAME: 'contains-sesame',
  MUSTARD: 'contains-mustard',
  CELERY: 'contains-celery',
  SULPHITES: 'contains-sulphites',
  LUPIN: 'contains-lupin',
})

// ── foodGroup → allergen (structured signal from a resolved canonical) ────────
// Keys must match the `foodGroup` strings used in ingestion/data/ingredients/*.
const ALLERGEN_BY_FOODGROUP = {
  Fish: ALLERGENS.FISH,
  Eggs: ALLERGENS.EGG,
  Dairy: ALLERGENS.MILK,
  Nuts: ALLERGENS.NUTS,
}

// ── Keyword tables (ordered; first-match per group is enough) ──────────────────
// Each entry: { allergen, test:RegExp }. Word boundaries are used where a short
// token could appear inside an unrelated word (e.g. \begg, \bnut\b). Negative
// lookaheads exclude the obvious "free-from" decoys ("gluten-free", "egg-free",
// "dairy-free", "nut-free", "non-dairy", "dairy-free spread", "plant-based").
const FREE_FROM_GUARD = '(?!\\s*[- ]?free)'

// Plant-milk negative lookbehind: "coconut/almond/oat/soya/rice/cashew/hemp/
// hazelnut milk" and "plant milk" are NOT dairy. Used before the dairy `milk`
// token so they don't raise contains-milk.
const NOT_PLANT_MILK =
  '(?<!coconut )(?<!almond )(?<!\\boat )(?<!soya )(?<!soy )(?<!rice )(?<!cashew )(?<!hemp )(?<!hazelnut )(?<!plant )(?<!nut )(?<!pea )(?<!flax )(?<!macadamia )'

const KEYWORD_RULES = [
  // ── GLUTEN ─────────────────────────────────────────────────────────────────
  // Cereals containing gluten (wheat/barley/rye/spelt/oats…) and their products.
  // Oats are GLUTEN BY DEFAULT (standard oats are cross-contaminated); only a
  // line explicitly stating "gluten-free oats" escapes (handled by the guard).
  {
    allergen: ALLERGENS.GLUTEN,
    test: new RegExp(
      '(' +
        'wheat|wholemeal|wholewheat|\\bplain flour|\\bself[- ]?raising|\\bstrong flour|\\bbread flour|' +
        '\\bflour\\b|barley|\\brye\\b|spelt|semolina|durum|farro|emmer|einkorn|kamut|triticale|bulgur|burghul|freekeh|' +
        'couscous|\\boat\\b|\\boats\\b|oatmeal|porridge|granola|muesli|flapjack|' +
        'bread|\\bbun\\b|\\bbuns\\b|baguette|brioche|ciabatta|focaccia|sourdough|bagel|crumpet|muffin|' +
        'tortilla|\\bwrap\\b|\\bwraps\\b|chapati|chapatti|roti|naan|paratha|pitta|pita|flatbread|' +
        'pasta|spaghetti|tagliatelle|fettuccine|linguine|penne|macaroni|lasagne|lasagna|cannelloni|' +
        'ravioli|tortellini|gnocchi|orzo|vermicelli|\\bnoodle|udon|ramen|soba|' +
        'breadcrumb|panko|crouton|\\bcracker|biscuit|cookie|pastry|\\bfilo\\b|\\bphyllo|puff pastry|shortcrust|' +
        'pretzel|\\bpie crust|pizza|\\broux\\b|\\bmalt\\b|malted|\\bseitan\\b|matzo|matzah|\\brusk\\b|' +
        'pearl barley|\\bbran\\b|wheatgerm|stuffing|yorkshire pudding|dumpling' +
        ')' +
        FREE_FROM_GUARD,
      'i',
    ),
  },
  // ── MILK / DAIRY ───────────────────────────────────────────────────────────
  {
    allergen: ALLERGENS.MILK,
    test: new RegExp(
      '(' +
        NOT_PLANT_MILK + '\\bmilk' + FREE_FROM_GUARD + '|' +
        // "butter" alone is dairy, but NOT in peanut/almond/cashew/nut/cocoa/
        // shea/apple/fruit butter, butter bean(s), butternut/butternut squash.
        '(?<!peanut |almond |cashew |hazelnut |nut |cocoa |shea |apple |fruit )' +
        'butter(?!\\s*bean|nut|milk|\\s*squash)|\\bghee\\b|buttermilk|' +
        '\\bcream\\b|double cream|single cream|soured cream|sour cream|clotted cream|whipping cream|' +
        'cr[eè]me fra[iî]che|cr[eè]me anglaise|custard|' +
        'cheese|cheddar|parmesan|parmigiano|pecorino|mozzarella|mascarpone|ricotta|' +
        'feta|halloumi|paneer|brie|camembert|gouda|emmental|gruy[eè]re|stilton|' +
        '\\bgo?at[\\s-]?cheese|cream cheese|cottage cheese|\\bquark\\b|' +
        'yoghurt|yogurt|\\bcurd\\b|\\bwhey\\b|casein|lactose|condensed milk|evaporated milk|milk powder|' +
        'ice cream|gelato|cr[eè]me caramel|panna cotta|b[eé]chamel' +
        ')',
      'i',
    ),
  },
  // ── EGG ──────────────────────────────────────────────────────────────────────
  {
    allergen: ALLERGENS.EGG,
    test: new RegExp(
      '(' +
        '\\begg' + FREE_FROM_GUARD + '|' +
        '\\beggs|egg white|egg yolk|albumen|mayonnaise|\\bmayo\\b|aioli|hollandaise|meringue|' +
        'frittata|omelette|omelet|quiche|custard|\\bzabaglione' +
        ')',
      'i',
    ),
  },
  // ── PEANUTS (legume — kept distinct from tree nuts) ──────────────────────────
  {
    allergen: ALLERGENS.PEANUTS,
    test: /(peanut|groundnut|monkey nut|\bsatay\b|peanut butter)/i,
  },
  // ── TREE NUTS ────────────────────────────────────────────────────────────────
  {
    allergen: ALLERGENS.NUTS,
    test: new RegExp(
      '(' +
        'almond|walnut|cashew|pecan|hazelnut|pistachio|macadamia|brazil nut|pine ?nut|pinenut|' +
        'chestnut|\\bnut butter|almond butter|cashew butter|hazelnut butter|nutella|praline|marzipan|' +
        'frangipane|amaretti|nibbed nut|ground almond|flaked almond|\\bnuts?\\b' + FREE_FROM_GUARD +
        ')',
      'i',
    ),
  },
  // ── SOYA ──────────────────────────────────────────────────────────────────────
  {
    allergen: ALLERGENS.SOYA,
    test: /(\bsoy\b|\bsoya\b|soy sauce|soya bean|soybean|tofu|edamame|tamari|miso|tempeh|\bdoenjang\b|textured vegetable protein|\btvp\b)/i,
  },
  // ── FISH ──────────────────────────────────────────────────────────────────────
  {
    allergen: ALLERGENS.FISH,
    test: new RegExp(
      '(' +
        '\\bfish\\b|fish sauce|fish stock|\\bcod\\b|haddock|\\btuna|salmon|trout|mackerel|sardine|' +
        'anchov|herring|kipper|pilchard|\\bbass\\b|sea bass|snapper|barramundi|monkfish|\\bhake\\b|' +
        'pollock|plaice|\\bsole\\b|halibut|swordfish|tilapia|whitebait|\\bskate\\b|\\beel\\b|' +
        'caviar|\\broe\\b|surimi|nam pla|worcestershire' +
        ')',
      'i',
    ),
  },
  // ── CRUSTACEANS ──────────────────────────────────────────────────────────────
  {
    allergen: ALLERGENS.CRUSTACEANS,
    test: /(prawn|shrimp|\bcrab\b|lobster|crayfish|crawfish|langoustine|scampi|\bkrill\b)/i,
  },
  // ── MOLLUSCS ──────────────────────────────────────────────────────────────────
  {
    allergen: ALLERGENS.MOLLUSCS,
    test: /(mussel|\bclam\b|scallop|squid|calamari|octopus|oyster|cockle|whelk|winkle|cuttlefish|abalone|snail|escargot)/i,
  },
  // ── SESAME ────────────────────────────────────────────────────────────────────
  {
    allergen: ALLERGENS.SESAME,
    test: /(sesame|tahini|\bhalva\b|halvah|gomashio|za'?atar|benne seed)/i,
  },
  // ── MUSTARD ────────────────────────────────────────────────────────────────────
  {
    allergen: ALLERGENS.MUSTARD,
    test: /(mustard|dijon|wholegrain mustard|english mustard|mustard seed|\bwasabi\b)/i,
  },
  // ── CELERY ──────────────────────────────────────────────────────────────────────
  {
    allergen: ALLERGENS.CELERY,
    test: /(celery|celeriac|celery salt|celery seed)/i,
  },
  // ── SULPHITES (wine/dried-fruit/vinegar; the regex is intentionally specific) ──
  {
    allergen: ALLERGENS.SULPHITES,
    test: /(white wine|red wine|\bwine\b|sherry|port\b|marsala|vermouth|brandy|\brum\b|\bbeer\b|lager|\bale\b|cider|sulphite|sulfite|sulphur dioxide|dried apricot|balsamic)/i,
  },
  // ── LUPIN ──────────────────────────────────────────────────────────────────────
  {
    allergen: ALLERGENS.LUPIN,
    test: /(\blupin\b|\blupini\b|lupin flour)/i,
  },
]

/**
 * The text a line contributes to keyword detection: prefer the resolved
 * canonical name (clean), always also include the raw line so an UNRESOLVED
 * token is still caught.
 * @param {object} line  embedded recipe line (or {canonicalName, raw, foodGroup})
 * @returns {string}
 */
function lineText(line) {
  const canonical = line.canonicalName || ''
  const raw = line.raw || ''
  return `${canonical} ${raw}`.trim()
}

/**
 * Test one ingredient line against the allergen tables.
 * @param {object} line
 * @returns {string[]} sorted allergen tokens raised by this single line
 */
export function allergensForLine(line) {
  const set = new Set()
  const text = lineText(line)
  for (const { allergen, test } of KEYWORD_RULES) {
    if (text && test.test(text)) set.add(allergen)
  }
  // Structured signal from the resolved canonical's foodGroup. The seed data
  // groups prawns/mussels/squid etc. under the 'Fish' foodGroup, so only honour
  // foodGroup→fish when the keyword pass did NOT already classify the line more
  // specifically as a crustacean or mollusc (those aren't finfish).
  const group = line.foodGroup || ''
  const groupAllergen = ALLERGEN_BY_FOODGROUP[group]
  if (groupAllergen) {
    const moreSpecificSeafood =
      groupAllergen === ALLERGENS.FISH &&
      (set.has(ALLERGENS.CRUSTACEANS) || set.has(ALLERGENS.MOLLUSCS)) &&
      !set.has(ALLERGENS.FISH)
    if (!moreSpecificSeafood) set.add(groupAllergen)
  }
  return [...set].sort()
}

/**
 * Derive the recipe-level allergen set from its resolved/unresolved lines.
 * @param {Array<object>} lines  embedded recipe lines
 * @returns {string[]} sorted, unique allergen tokens
 */
export function deriveAllergens(lines) {
  const set = new Set()
  for (const line of lines || []) {
    for (const a of allergensForLine(line)) set.add(a)
  }
  return [...set].sort()
}

export { ALLERGEN_BY_FOODGROUP, KEYWORD_RULES }
