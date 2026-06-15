// THE acceptance gate — tests for the pure shopping-list algorithm.
// (src/lib/buildShoppingList.js, CONTRACTS.md §2, spec Section 5.)
//
// All fixtures are INLINE plain objects — NO Firebase. Every expected value is
// hand-verified in the test body. Run with: npx vitest run

import { describe, it, expect } from 'vitest'
import { buildShoppingList } from './buildShoppingList.js'
import { APPENDIX_SECTIONS, SECTION_ORDER } from './shopWalk.js'

// ── Small helpers to read the output ────────────────────────────────────────
function section(list, aisle) {
  return list.sections.find((s) => s.aisle === aisle)
}
function item(list, aisle, name) {
  const sec = section(list, aisle)
  return sec ? sec.items.find((i) => i.name === name) : undefined
}

// ── Canonical ingredient fixtures (shape: CONTRACTS.md §1 ingredients/) ──────
const ING = {
  onion: {
    id: 'onion',
    canonicalName: 'Onion',
    aisle: 'Produce',
    baseUnit: 'count',
    minimumPurchase: { number: null, weight: null, unit: 'count', note: '' },
    alternatives: [],
    displayRules: { preferUnit: null, roundUpTo: null },
  },
  garlic: {
    id: 'garlic',
    canonicalName: 'Garlic',
    aisle: 'Produce',
    baseUnit: 'count',
    minimumPurchase: { number: null, weight: null, unit: 'count', note: '' },
    alternatives: [],
    displayRules: { preferUnit: null, roundUpTo: null },
  },
  egg: {
    id: 'egg',
    canonicalName: 'Egg',
    aisle: 'Dairy & Eggs',
    baseUnit: 'count',
    minimumPurchase: { number: null, weight: null, unit: 'count', note: '' },
    alternatives: [],
    displayRules: { preferUnit: null, roundUpTo: null },
  },
  // Tinned tomatoes sold by the 400 g tin — preferUnit aside, min 400 g.
  choppedTomatoes: {
    id: 'choppedTomatoes',
    canonicalName: 'Chopped tomatoes',
    aisle: 'Tinned & Jarred',
    baseUnit: 'g',
    minimumPurchase: { number: null, weight: 400, unit: 'g', note: '1 tin' },
    alternatives: [],
    displayRules: { preferUnit: 'about 1 tin', roundUpTo: null },
  },
  // Ground ginger — sold in a 250 g min jar; below-min lines bump to 250 g.
  groundGinger: {
    id: 'groundGinger',
    canonicalName: 'Ground ginger',
    aisle: 'Herbs & Spices',
    baseUnit: 'g',
    minimumPurchase: { number: null, weight: 250, unit: 'g', note: 'jar' },
    alternatives: [],
    displayRules: { preferUnit: null, roundUpTo: null },
  },
  // Fresh stir-fry vegetables — carries an alternative ("frozen veg").
  stirFryVeg: {
    id: 'stirFryVeg',
    canonicalName: 'Stir-fry vegetables',
    aisle: 'Produce',
    baseUnit: 'g',
    minimumPurchase: { number: null, weight: null, unit: 'g', note: '' },
    alternatives: [{ ingredientId: null, label: 'frozen veg', note: '', ratio: 1 }],
    displayRules: { preferUnit: null, roundUpTo: null },
  },
  // Plain flour — sold in 50 g display steps to exercise roundUpTo.
  plainFlour: {
    id: 'plainFlour',
    canonicalName: 'Plain flour',
    aisle: 'Dry & Baking',
    baseUnit: 'g',
    minimumPurchase: { number: null, weight: null, unit: 'g', note: '' },
    alternatives: [],
    displayRules: { preferUnit: null, roundUpTo: 50 },
  },
  // A staple — salt; excluded from quantity maths, listed under Store-cupboard.
  salt: {
    id: 'salt',
    canonicalName: 'Salt',
    aisle: 'Herbs & Spices',
    baseUnit: 'g',
    staple: true,
    minimumPurchase: { number: null, weight: null, unit: 'g', note: '' },
    alternatives: [],
    displayRules: { preferUnit: null, roundUpTo: null },
  },
  // Soy sauce — optional extra in a recipe.
  soySauce: {
    id: 'soySauce',
    canonicalName: 'Soy sauce',
    aisle: 'Tinned & Jarred',
    baseUnit: 'ml',
    minimumPurchase: { number: null, weight: null, unit: 'ml', note: '' },
    alternatives: [],
    displayRules: { preferUnit: null, roundUpTo: null },
  },
  milk: {
    id: 'milk',
    canonicalName: 'Milk',
    aisle: 'Dairy & Eggs',
    baseUnit: 'ml',
    minimumPurchase: { number: null, weight: null, unit: 'ml', note: '' },
    alternatives: [],
    displayRules: { preferUnit: null, roundUpTo: null },
  },
}

// ── Spec 4.2 edge cases ──────────────────────────────────────────────────────

describe('staple line "salt and pepper to taste"', () => {
  it('lands under Store-cupboard with no quantity', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Test stew',
        servingsBase: 2,
        ingredients: [
          {
            raw: 'salt and pepper to taste',
            ingredientId: 'salt',
            quantityInBaseUnit: null,
            baseUnit: 'g',
            resolutionStatus: 'resolved',
            optional: false,
            staple: true,
            displayOrder: 0,
          },
        ],
      },
    }
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ING)

    const sc = section(list, APPENDIX_SECTIONS.STORE_CUPBOARD)
    expect(sc).toBeDefined()
    const it0 = sc.items.find((i) => i.name === 'Salt')
    expect(it0).toBeDefined()
    expect(it0.displayQuantity).toBe('') // no quantity for staples
    expect(it0.note).toBeNull()
    expect(it0.optional).toBe(false)
  })
})

describe('ingested mass line "1 (12 oz.) bag stir-fry vegetables" => 340 g', () => {
  // The ingestion pipeline converts 12 oz -> 340 g (12 * 28.35 = 340.2, rounded
  // to 340 by the parser) and stores quantityInBaseUnit: 340. We verify the
  // algorithm carries that mass and humanises it at household == servingsBase.
  it('shows 340 g and the alternative', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Quick stir-fry',
        servingsBase: 2,
        ingredients: [
          {
            raw: '1 (12 oz.) bag stir-fry vegetables',
            ingredientId: 'stirFryVeg',
            quantity: 1,
            unit: 'bag',
            quantityInBaseUnit: 340,
            baseUnit: 'g',
            resolutionStatus: 'resolved',
            optional: false,
            staple: false,
            displayOrder: 0,
          },
        ],
      },
    }
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ING)
    const veg = item(list, 'Produce', 'Stir-fry vegetables')
    expect(veg).toBeDefined()
    expect(veg.displayQuantity).toBe('340 g')
    expect(veg.alternative).toBe('or use frozen veg')
  })
})

describe('range "2-3 cloves garlic" => midpoint 2.5 then round UP to 3 (counts)', () => {
  it('a single garlic line ingested as quantityInBaseUnit 2.5 displays as 3', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Garlic bread',
        servingsBase: 2,
        ingredients: [
          {
            raw: '2-3 cloves garlic',
            ingredientId: 'garlic',
            quantity: null,
            unit: 'clove',
            quantityInBaseUnit: 2.5, // midpoint of 2..3 from the parser
            baseUnit: 'count',
            rangeLow: 2,
            rangeHigh: 3,
            resolutionStatus: 'resolved',
            optional: false,
            staple: false,
            displayOrder: 0,
          },
        ],
      },
    }
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ING)
    const g = item(list, 'Produce', 'Garlic')
    expect(g).toBeDefined()
    expect(g.displayQuantity).toBe('3') // 2.5 rounds UP to 3
  })
})

describe('"1 onion ... plus extra to serve" — core onion only', () => {
  // The ingestion pipeline splits the "plus extra to serve" garnish into its
  // own ignored/needsReview-free line; the basket only ever sees the core
  // quantity. Here we assert the algorithm keeps just the core onion.
  it('counts the core onion and ignores the extra', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Soup',
        servingsBase: 2,
        ingredients: [
          {
            raw: '1 onion, finely chopped, plus extra to serve',
            ingredientId: 'onion',
            quantity: 1,
            unit: '',
            quantityInBaseUnit: 1, // only the core "1 onion"
            baseUnit: 'count',
            resolutionStatus: 'resolved',
            optional: false,
            staple: false,
            displayOrder: 0,
          },
        ],
      },
    }
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ING)
    const o = item(list, 'Produce', 'Onion')
    expect(o.displayQuantity).toBe('1')
  })
})

describe('unitless count "2" eggs => count 2', () => {
  it('carries a bare count through', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Omelette',
        servingsBase: 2,
        ingredients: [
          {
            raw: '2 eggs',
            ingredientId: 'egg',
            quantity: 2,
            unit: '',
            quantityInBaseUnit: 2,
            baseUnit: 'count',
            resolutionStatus: 'resolved',
            optional: false,
            staple: false,
            displayOrder: 0,
          },
        ],
      },
    }
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ING)
    const e = item(list, 'Dairy & Eggs', 'Egg')
    expect(e.displayQuantity).toBe('2')
  })
})

describe('density-unknown volume->mass => kept + needsReview (not fabricated)', () => {
  // When the pipeline cannot convert a volume to mass (no density) it marks the
  // line needsReview and clears the ingredientId. The algorithm must keep the
  // raw text verbatim under "Check these yourself" and never invent a number.
  it('keeps the raw line under Check these yourself, never merged', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Mystery sauce',
        servingsBase: 2,
        ingredients: [
          {
            raw: '1 cup chopped fresh coriander',
            ingredientId: null,
            quantity: 1,
            unit: 'cup',
            quantityInBaseUnit: null,
            baseUnit: null,
            resolutionStatus: 'needsReview',
            optional: false,
            staple: false,
            displayOrder: 0,
          },
        ],
      },
    }
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ING)
    const nr = section(list, APPENDIX_SECTIONS.NEEDS_REVIEW)
    expect(nr).toBeDefined()
    expect(nr.items).toHaveLength(1)
    expect(nr.items[0].raw).toBe('1 cup chopped fresh coriander')
    expect(nr.items[0].name).toBe('1 cup chopped fresh coriander')
    expect(nr.items[0].displayQuantity).toBe('') // nothing fabricated
    expect(nr.items[0].ingredientId).toBeNull()
  })

  it('never merges two needsReview lines even when identical', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Sauce A',
        servingsBase: 2,
        ingredients: [
          { raw: '1 cup coriander', ingredientId: null, quantityInBaseUnit: null, baseUnit: null, resolutionStatus: 'needsReview', optional: false, staple: false, displayOrder: 0 },
        ],
      },
      r2: {
        id: 'r2',
        title: 'Sauce B',
        servingsBase: 2,
        ingredients: [
          { raw: '1 cup coriander', ingredientId: null, quantityInBaseUnit: null, baseUnit: null, resolutionStatus: 'needsReview', optional: false, staple: false, displayOrder: 0 },
        ],
      },
    }
    const list = buildShoppingList({ recipeIds: ['r1', 'r2'], householdSize: 2 }, recipes, ING)
    const nr = section(list, APPENDIX_SECTIONS.NEEDS_REVIEW)
    expect(nr.items).toHaveLength(2) // kept separate, never merged
  })
})

describe('duplicate ingredient within one recipe summed before cross-recipe dedupe', () => {
  it('sums two onion lines in the same recipe', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Double onion bhaji',
        servingsBase: 2,
        ingredients: [
          { raw: '1 onion, sliced', ingredientId: 'onion', quantityInBaseUnit: 1, baseUnit: 'count', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 },
          { raw: '2 onions, diced', ingredientId: 'onion', quantityInBaseUnit: 2, baseUnit: 'count', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 1 },
        ],
      },
    }
    // household 2 == servingsBase 2 => factor 1 => 1 + 2 = 3 onions.
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ING)
    const o = item(list, 'Produce', 'Onion')
    expect(o.displayQuantity).toBe('3')
    expect(o.contributingRecipes).toEqual([{ id: 'r1', title: 'Double onion bhaji' }])
  })
})

describe('optional line => Optional extras, left unchecked', () => {
  it('routes an optional ingredient to the Optional extras appendix', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Fried rice',
        servingsBase: 2,
        ingredients: [
          { raw: '15 ml soy sauce (optional)', ingredientId: 'soySauce', quantityInBaseUnit: 15, baseUnit: 'ml', resolutionStatus: 'resolved', optional: true, staple: false, displayOrder: 0 },
        ],
      },
    }
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ING)
    const opt = section(list, APPENDIX_SECTIONS.OPTIONAL)
    expect(opt).toBeDefined()
    const soy = opt.items.find((i) => i.name === 'Soy sauce')
    expect(soy).toBeDefined()
    expect(soy.optional).toBe(true)
    expect(soy.displayQuantity).toBe('15 ml')
    // It must NOT appear in the Tinned & Jarred main aisle.
    expect(section(list, 'Tinned & Jarred')).toBeUndefined()
  })
})

describe('minimumPurchase bump annotated "(min 250 g)"', () => {
  it('raises a below-minimum total and annotates the bump', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Spiced cake',
        servingsBase: 2,
        ingredients: [
          { raw: '2 tsp ground ginger', ingredientId: 'groundGinger', quantityInBaseUnit: 4, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 },
        ],
      },
    }
    // 4 g needed, min 250 g => bump to 250 g, note "(min 250 g)".
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ING)
    const gg = item(list, 'Herbs & Spices', 'Ground ginger')
    expect(gg.displayQuantity).toBe('250 g')
    expect(gg.note).toBe('(min 250 g)')
  })

  it('does NOT annotate when the total already meets the minimum', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Ginger overdose',
        servingsBase: 2,
        ingredients: [
          { raw: '300 g ground ginger', ingredientId: 'groundGinger', quantityInBaseUnit: 300, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 },
        ],
      },
    }
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ING)
    const gg = item(list, 'Herbs & Spices', 'Ground ginger')
    expect(gg.displayQuantity).toBe('300 g')
    expect(gg.note).toBeNull()
  })
})

describe('displayRules.roundUpTo display step', () => {
  it('rounds a mass up to the nearest 50 g step', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Pancakes',
        servingsBase: 2,
        ingredients: [
          { raw: '210 g plain flour', ingredientId: 'plainFlour', quantityInBaseUnit: 210, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 },
        ],
      },
    }
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ING)
    const flour = item(list, 'Dry & Baking', 'Plain flour')
    expect(flour.displayQuantity).toBe('250 g') // 210 -> next 50 g step
    expect(flour.note).toBeNull()
  })
})

describe('preferUnit aside on a tinned item', () => {
  it('shows "400 g (about 1 tin)"', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Tomato pasta',
        servingsBase: 2,
        ingredients: [
          { raw: '1 tin chopped tomatoes', ingredientId: 'choppedTomatoes', quantityInBaseUnit: 400, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 },
        ],
      },
    }
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ING)
    const tom = item(list, 'Tinned & Jarred', 'Chopped tomatoes')
    expect(tom.displayQuantity).toBe('400 g (about 1 tin)')
  })
})

// ── Spec 15.3 worked example ─────────────────────────────────────────────────
// Teriyaki (serves 4) + tomato pasta (serves 2), household == 4.
//   factors: teriyaki 4/4 = 1 ; tomato pasta 4/2 = 2
//
//   Onion           teriyaki 1 onion *1  + pasta 1 onion *2          = 3 onions
//   Ground ginger   teriyaki 5 g *1                                  = 5 g  -> bump 250 g
//   Stir-fry veg    teriyaki 300 g *1                                = 300 g, alt "frozen veg"
//   Chopped toms    pasta 400 g *2                                   = 800 g (about 1 tin)
//   Salt (staple)   both -> Store-cupboard, no qty
describe('spec 15.3 worked example — two recipes, different scale factors', () => {
  const teriyaki = {
    id: 'teriyaki',
    title: 'Chicken teriyaki',
    servingsBase: 4,
    ingredients: [
      { raw: '1 onion, sliced', ingredientId: 'onion', quantityInBaseUnit: 1, baseUnit: 'count', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 },
      { raw: '1 tsp ground ginger', ingredientId: 'groundGinger', quantityInBaseUnit: 5, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 1 },
      { raw: '300 g stir-fry vegetables', ingredientId: 'stirFryVeg', quantityInBaseUnit: 300, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 2 },
      { raw: 'salt to taste', ingredientId: 'salt', quantityInBaseUnit: null, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: true, displayOrder: 3 },
    ],
  }
  const tomatoPasta = {
    id: 'tomatoPasta',
    title: 'Tomato pasta',
    servingsBase: 2,
    ingredients: [
      { raw: '1 onion, diced', ingredientId: 'onion', quantityInBaseUnit: 1, baseUnit: 'count', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 },
      { raw: '1 tin chopped tomatoes', ingredientId: 'choppedTomatoes', quantityInBaseUnit: 400, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 1 },
      { raw: 'salt to taste', ingredientId: 'salt', quantityInBaseUnit: null, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: true, displayOrder: 2 },
    ],
  }
  const recipes = { teriyaki, tomatoPasta }
  const list = buildShoppingList(
    { recipeIds: ['teriyaki', 'tomatoPasta'], householdSize: 4 },
    recipes,
    ING,
  )

  it('sums onion across recipes at different factors (1*1 + 1*2 = 3)', () => {
    const o = item(list, 'Produce', 'Onion')
    expect(o.displayQuantity).toBe('3')
    // contributing recipes recorded for both meals.
    expect(o.contributingRecipes).toEqual([
      { id: 'teriyaki', title: 'Chicken teriyaki' },
      { id: 'tomatoPasta', title: 'Tomato pasta' },
    ])
  })

  it('bumps below-min ground ginger to the 250 g minimum with a note', () => {
    const gg = item(list, 'Herbs & Spices', 'Ground ginger')
    expect(gg.displayQuantity).toBe('250 g') // 5 g need, bumped
    expect(gg.note).toBe('(min 250 g)')
  })

  it('shows the stir-fry veg alternative', () => {
    const veg = item(list, 'Produce', 'Stir-fry vegetables')
    expect(veg.displayQuantity).toBe('300 g') // 300 g *1
    expect(veg.alternative).toBe('or use frozen veg')
  })

  it('scales chopped tomatoes by factor 2 with the preferUnit aside', () => {
    const tom = item(list, 'Tinned & Jarred', 'Chopped tomatoes')
    expect(tom.displayQuantity).toBe('800 g (about 1 tin)') // 400 g *2
  })

  it('puts salt under Store-cupboard with no quantity, merged across recipes', () => {
    const sc = section(list, APPENDIX_SECTIONS.STORE_CUPBOARD)
    const salt = sc.items.find((i) => i.name === 'Salt')
    expect(salt.displayQuantity).toBe('')
    expect(salt.contributingRecipes).toHaveLength(2) // both meals
  })

  it('reports correct totals', () => {
    // Items: Onion, Stir-fry vegetables (Produce), Chopped tomatoes (Tinned),
    // Ground ginger (Herbs & Spices), Salt (Store-cupboard) = 5 items.
    expect(list.totals.itemCount).toBe(5)
    expect(list.totals.recipeCount).toBe(2)
    expect(list.totals.householdSize).toBe(4)
  })
})

// ── Aisle ordering & appendix placement ──────────────────────────────────────
describe('aisle ordering follows SHOP_WALK; appendices come last', () => {
  it('orders sections by SHOP_WALK then appendices', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Everything bowl',
        servingsBase: 2,
        ingredients: [
          // Deliberately out of shop order in the source line list:
          { raw: '250 g ground ginger', ingredientId: 'groundGinger', quantityInBaseUnit: 250, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 }, // Herbs & Spices
          { raw: '1 onion', ingredientId: 'onion', quantityInBaseUnit: 1, baseUnit: 'count', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 1 }, // Produce
          { raw: '1 tin chopped tomatoes', ingredientId: 'choppedTomatoes', quantityInBaseUnit: 400, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 2 }, // Tinned & Jarred
          { raw: '2 eggs', ingredientId: 'egg', quantityInBaseUnit: 2, baseUnit: 'count', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 3 }, // Dairy & Eggs
          { raw: '15 ml soy sauce', ingredientId: 'soySauce', quantityInBaseUnit: 15, baseUnit: 'ml', resolutionStatus: 'resolved', optional: true, staple: false, displayOrder: 4 }, // Optional
          { raw: 'salt to taste', ingredientId: 'salt', quantityInBaseUnit: null, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: true, displayOrder: 5 }, // Store-cupboard
          { raw: '1 cup coriander', ingredientId: null, quantityInBaseUnit: null, baseUnit: null, resolutionStatus: 'needsReview', optional: false, staple: false, displayOrder: 6 }, // Check these yourself
        ],
      },
    }
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ING)
    const order = list.sections.map((s) => s.aisle)
    expect(order).toEqual([
      'Produce',
      'Dairy & Eggs',
      'Tinned & Jarred',
      'Herbs & Spices',
      APPENDIX_SECTIONS.STORE_CUPBOARD,
      APPENDIX_SECTIONS.OPTIONAL,
      APPENDIX_SECTIONS.NEEDS_REVIEW,
    ])

    // Every section name must be a known SECTION_ORDER entry, and the order must
    // be a subsequence of SECTION_ORDER (monotonic by rank).
    const ranks = order.map((a) => SECTION_ORDER.indexOf(a))
    for (let i = 1; i < ranks.length; i++) {
      expect(ranks[i]).toBeGreaterThan(ranks[i - 1])
    }
  })

  it('sorts alphabetically within an aisle', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Produce pile',
        servingsBase: 2,
        ingredients: [
          { raw: '1 onion', ingredientId: 'onion', quantityInBaseUnit: 1, baseUnit: 'count', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 }, // "Onion"
          { raw: '1 garlic', ingredientId: 'garlic', quantityInBaseUnit: 1, baseUnit: 'count', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 1 }, // "Garlic"
          { raw: '300 g stir-fry veg', ingredientId: 'stirFryVeg', quantityInBaseUnit: 300, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 2 }, // "Stir-fry vegetables"
        ],
      },
    }
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ING)
    const produce = section(list, 'Produce')
    expect(produce.items.map((i) => i.name)).toEqual([
      'Garlic',
      'Onion',
      'Stir-fry vegetables',
    ])
  })
})

describe('unknown aisle falls back to "Other"', () => {
  it('places an ingredient with no aisle under Other', () => {
    const ingredients = {
      mystery: {
        id: 'mystery',
        canonicalName: 'Mystery powder',
        // no aisle field at all
        baseUnit: 'g',
        minimumPurchase: { number: null, weight: null, unit: 'g', note: '' },
        alternatives: [],
        displayRules: { preferUnit: null, roundUpTo: null },
      },
    }
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Mystery dish',
        servingsBase: 2,
        ingredients: [
          { raw: '10 g mystery powder', ingredientId: 'mystery', quantityInBaseUnit: 10, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 },
        ],
      },
    }
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 2 }, recipes, ingredients)
    const other = section(list, 'Other')
    expect(other).toBeDefined()
    expect(other.items[0].name).toBe('Mystery powder')
  })
})

// ── Scaling & purity ─────────────────────────────────────────────────────────
describe('scaling by household size', () => {
  it('scales mass linearly with householdSize/servingsBase', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Tomato base',
        servingsBase: 2,
        ingredients: [
          { raw: '400 g chopped tomatoes', ingredientId: 'choppedTomatoes', quantityInBaseUnit: 400, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 },
        ],
      },
    }
    // household 6, base 2 => factor 3 => 1200 g => "1.2 kg (about 1 tin)".
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 6 }, recipes, ING)
    const tom = item(list, 'Tinned & Jarred', 'Chopped tomatoes')
    expect(tom.displayQuantity).toBe('1.2 kg (about 1 tin)')
  })

  it('rounds scaled counts UP to whole', () => {
    const recipes = {
      r1: {
        id: 'r1',
        title: 'Eggy thing',
        servingsBase: 4,
        ingredients: [
          { raw: '3 eggs', ingredientId: 'egg', quantityInBaseUnit: 3, baseUnit: 'count', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 },
        ],
      },
    }
    // household 3, base 4 => factor 0.75 => 2.25 eggs => round UP to 3.
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 3 }, recipes, ING)
    const e = item(list, 'Dairy & Eggs', 'Egg')
    expect(e.displayQuantity).toBe('3')
  })
})

describe('purity & determinism', () => {
  const recipes = {
    r1: {
      id: 'r1',
      title: 'Repeatable',
      servingsBase: 2,
      ingredients: [
        { raw: '400 g chopped tomatoes', ingredientId: 'choppedTomatoes', quantityInBaseUnit: 400, baseUnit: 'g', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 },
        { raw: '1 onion', ingredientId: 'onion', quantityInBaseUnit: 1, baseUnit: 'count', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 1 },
      ],
    },
  }

  it('returns identical output for identical input', () => {
    const a = buildShoppingList({ recipeIds: ['r1'], householdSize: 4 }, recipes, ING)
    const b = buildShoppingList({ recipeIds: ['r1'], householdSize: 4 }, recipes, ING)
    expect(a).toEqual(b)
  })

  it('does not mutate the input fixtures', () => {
    const snapshot = JSON.stringify(recipes)
    buildShoppingList({ recipeIds: ['r1'], householdSize: 4 }, recipes, ING)
    expect(JSON.stringify(recipes)).toBe(snapshot)
  })
})

describe('edge cases & defaults', () => {
  it('handles an empty basket', () => {
    const list = buildShoppingList({ recipeIds: [], householdSize: 2 }, {}, ING)
    expect(list.sections).toEqual([])
    expect(list.totals).toEqual({ itemCount: 0, recipeCount: 0, householdSize: 2 })
  })

  it('skips unknown recipe ids gracefully', () => {
    const recipes = {
      r1: { id: 'r1', title: 'Known', servingsBase: 2, ingredients: [
        { raw: '1 onion', ingredientId: 'onion', quantityInBaseUnit: 1, baseUnit: 'count', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 },
      ] },
    }
    const list = buildShoppingList({ recipeIds: ['r1', 'ghost'], householdSize: 2 }, recipes, ING)
    expect(list.totals.recipeCount).toBe(1)
    expect(item(list, 'Produce', 'Onion').displayQuantity).toBe('1')
  })

  it('defaults householdSize to 1 when missing or invalid', () => {
    const recipes = {
      r1: { id: 'r1', title: 'Solo', servingsBase: 2, ingredients: [
        { raw: '2 onions', ingredientId: 'onion', quantityInBaseUnit: 2, baseUnit: 'count', resolutionStatus: 'resolved', optional: false, staple: false, displayOrder: 0 },
      ] },
    }
    // factor 1/2 => 1 onion.
    const list = buildShoppingList({ recipeIds: ['r1'], householdSize: 0 }, recipes, ING)
    expect(list.totals.householdSize).toBe(1)
    expect(item(list, 'Produce', 'Onion').displayQuantity).toBe('1')
  })
})
