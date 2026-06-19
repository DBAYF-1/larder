// Diet long-tail canonical ingredients — batch 2.
//
// Purpose: raise ingredient-resolution QUALITY for the expanded curated diet
// corpus (the diet-*.js and diet-*-expansion.js sets). A full scan of all 35
// curated diet files (22,837 raw lines / 640 distinct cores) finds ZERO cores
// that fail to resolve outright — every name passes the resolver. However, a
// handful of genuinely-distinct ingredients only "resolve" via a low-score
// (0.67) fuzzy match onto the WRONG canonical food: e.g. "Coconut ice cream"
// landing on coconut-milk, "Black bean sauce" on black-beans (a pulse, not a
// condiment), "Lamb rump steak" on beef-steak (wrong animal), "Vegan cream
// cheese" on dairy cream-cheese (wrong for vegan/dairy-free recipes). Those are
// effectively unresolved — they map to a different food. This batch gives each
// its own canonical record so it resolves EXACTLY to the correct ingredient,
// folding spelling variants into `synonyms`.
//
// Names already covered by another ingredients file are NOT duplicated here.
// Record shape matches core.js exactly.

const N = (energyKcal, proteinG, fatG, carbsG) => ({ energyKcal, proteinG, fatG, carbsG })

/** @type {Array<object>} */
export default [
  // ── Frozen dessert: was mis-matched to coconut-milk ────────────────────────
  {
    canonicalName: 'Coconut ice cream',
    description: 'Dairy-free coconut-milk ice cream',
    foodGroup: 'Desserts',
    aisle: 'Frozen',
    baseUnit: 'ml',
    densityGperMl: 0.55,
    minimumPurchase: { number: null, weight: null, unit: 'ml', note: 'small tub (≈500 ml)' },
    typicalPacks: [{ size: 500, unit: 'ml', label: 'tub' }],
    alternatives: [{ ingredientId: null, label: 'vanilla dairy-free ice cream', note: 'milder flavour', ratio: 1 }],
    synonyms: ['dairy-free coconut ice cream', 'vegan coconut ice cream', 'coconut milk ice cream', 'coconut gelato'],
    staple: false,
    displayRules: { preferUnit: null, roundUpTo: null },
    nutrientProfilePer100: N(210, 1.5, 13, 22),
  },
  // ── Chinese condiment: was mis-matched to black-beans (a pulse) ────────────
  {
    canonicalName: 'Black bean sauce',
    description: 'Savoury Chinese fermented black-bean sauce',
    foodGroup: 'Condiments',
    aisle: 'Tinned & Jarred',
    baseUnit: 'g',
    densityGperMl: 1.2,
    minimumPurchase: { number: null, weight: 150, unit: 'g', note: 'jar' },
    typicalPacks: [{ size: 180, unit: 'g', label: 'jar' }],
    alternatives: [{ ingredientId: 'hoisin-sauce', label: 'hoisin sauce', note: 'sweeter, less salty', ratio: 1 }],
    synonyms: ['black bean garlic sauce', 'chinese black bean sauce', 'fermented black bean sauce'],
    staple: false,
    displayRules: { preferUnit: null, roundUpTo: null },
    nutrientProfilePer100: N(150, 5, 4, 22),
  },
  // ── Distinct vinegar: was mis-matched to generic vinegar ───────────────────
  {
    canonicalName: 'Rice wine vinegar',
    description: 'Mild, slightly sweet rice vinegar for dressings and stir-fries',
    foodGroup: 'Condiments',
    aisle: 'Tinned & Jarred',
    baseUnit: 'ml',
    densityGperMl: 1.01,
    minimumPurchase: { number: null, weight: null, unit: 'ml', note: 'bottle (≈250 ml)' },
    typicalPacks: [{ size: 250, unit: 'ml', label: 'bottle' }],
    alternatives: [{ ingredientId: null, label: 'cider vinegar', note: 'sharper; add a pinch of sugar', ratio: 1 }],
    synonyms: ['rice vinegar', 'seasoned rice vinegar', 'japanese rice vinegar', 'rice-wine vinegar'],
    staple: false,
    displayRules: { preferUnit: null, roundUpTo: null },
    nutrientProfilePer100: N(18, 0.3, 0, 4.5),
  },
  // ── Lamb cut: was mis-matched to BEEF steak (wrong animal) ─────────────────
  {
    canonicalName: 'Lamb rump steak',
    description: 'Tender boneless lamb rump steak',
    foodGroup: 'Meat',
    aisle: 'Meat & Fish',
    baseUnit: 'g',
    densityGperMl: null,
    perItemGrams: 150,
    minimumPurchase: { number: null, weight: 300, unit: 'g', note: 'pack of 2 steaks' },
    typicalPacks: [{ size: 300, unit: 'g', label: 'pack (2 steaks)' }],
    alternatives: [{ ingredientId: null, label: 'lamb leg steak', note: 'leaner; similar size', ratio: 1 }],
    synonyms: ['lamb rump', 'lamb rump steaks', 'rump of lamb', 'lamb chump steak'],
    staple: false,
    displayRules: { preferUnit: null, roundUpTo: null },
    nutrientProfilePer100: N(196, 20, 13, 0),
  },
  // ── Fermented condiment (douchi): was mis-matched to tinned black-beans ────
  {
    canonicalName: 'Fermented black beans',
    description: 'Salted, fermented black soybeans (douchi) for Chinese cooking',
    foodGroup: 'Condiments',
    aisle: 'Tinned & Jarred',
    baseUnit: 'g',
    densityGperMl: null,
    minimumPurchase: { number: null, weight: 100, unit: 'g', note: 'small pack or tub' },
    typicalPacks: [{ size: 113, unit: 'g', label: 'pack' }],
    alternatives: [{ ingredientId: 'black-bean-sauce', label: 'black bean sauce', note: 'use a little less; already seasoned', ratio: 1 }],
    synonyms: ['salted black beans', 'douchi', 'chinese fermented black beans', 'fermented soybeans'],
    staple: false,
    displayRules: { preferUnit: null, roundUpTo: null },
    nutrientProfilePer100: N(150, 12, 5, 14),
  },
  // ── Vegan cheese: was mis-matched to DAIRY cream cheese (wrong for vegans) ─
  {
    canonicalName: 'Vegan cream cheese',
    description: 'Dairy-free soft cheese-style spread',
    foodGroup: 'Dairy alternatives',
    aisle: 'Dairy & Eggs',
    baseUnit: 'g',
    densityGperMl: null,
    minimumPurchase: { number: null, weight: 200, unit: 'g', note: 'tub' },
    typicalPacks: [{ size: 200, unit: 'g', label: 'tub' }],
    alternatives: [{ ingredientId: null, label: 'cashew cream cheese', note: 'richer; similar texture', ratio: 1 }],
    synonyms: ['dairy-free cream cheese', 'plant-based cream cheese', 'vegan soft cheese', 'dairy free cream cheese'],
    staple: false,
    displayRules: { preferUnit: null, roundUpTo: null },
    nutrientProfilePer100: N(240, 2, 23, 5),
  },
  // ── Pasta: was mis-matched to squid-ink (the ink itself) ───────────────────
  {
    canonicalName: 'Squid ink pasta',
    description: 'Black, squid-ink-coloured dried pasta',
    foodGroup: 'Pasta',
    aisle: 'Dry & Baking',
    baseUnit: 'g',
    densityGperMl: null,
    minimumPurchase: { number: null, weight: 250, unit: 'g', note: 'pack' },
    typicalPacks: [{ size: 250, unit: 'g', label: 'pack' }, { size: 500, unit: 'g', label: 'large pack' }],
    alternatives: [{ ingredientId: null, label: 'linguine', note: 'plain; lacks the colour', ratio: 1 }],
    synonyms: ['nero pasta', 'black pasta', 'squid ink linguine', 'squid ink spaghetti', 'squid-ink pasta'],
    staple: false,
    displayRules: { preferUnit: null, roundUpTo: null },
    nutrientProfilePer100: N(355, 13, 2.5, 70),
  },
  // ── Distinct veg: was mis-matched to mangetout ─────────────────────────────
  {
    canonicalName: 'Sugar snap peas',
    description: 'Sweet, crisp whole edible-pod peas',
    foodGroup: 'Vegetables',
    aisle: 'Produce',
    baseUnit: 'g',
    densityGperMl: null,
    minimumPurchase: { number: null, weight: 150, unit: 'g', note: 'pack' },
    typicalPacks: [{ size: 150, unit: 'g', label: 'pack' }, { size: 200, unit: 'g', label: 'large pack' }],
    alternatives: [{ ingredientId: 'mangetout', label: 'mangetout', note: 'flatter pod; similar use', ratio: 1 }],
    synonyms: ['snap peas', 'sugar snaps', 'sugarsnap peas', 'snap pea'],
    staple: false,
    displayRules: { preferUnit: null, roundUpTo: null },
    nutrientProfilePer100: N(42, 2.8, 0.2, 7.5),
  },
]
