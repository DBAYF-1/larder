// node --test ingestion/pipeline/verifyDiet.test.js
//
// Proves the safety-critical, "prove-or-omit" diet/free-from verification
// (roadmap #7 + #8) blocks every unsafe case documented in
// docs/audit/data-quality.md (Findings 1–3):
//   • coeliac-unsafe "Gluten-free" (oats, tortillas);
//   • meat in "Vegetarian" (bacon lasagne auto-tagged from the Pasta category);
//   • honey / dairy / yoghurt / butter in "Vegan" (unguarded curated tags);
// while still PROVING genuinely-safe labels and never blocking on plant milks.
//
// Tests run against verifyLabels (the verifier) AND buildRecipeDoc (the real
// pipeline assembly), so the proof covers the integrated path, not just a unit.

import { test } from 'node:test'
import assert from 'node:assert/strict'

import { verifyLabels } from './verifyDiet.js'
import { deriveAllergens, allergensForLine } from './allergens.js'
import { buildRecipeDoc } from './buildRecipe.js'
import { buildIndex } from './resolve.js'

const INDEX = buildIndex()

// Small helper to build an embedded recipe line for the verifier/allergen unit
// tests (mirrors what buildRecipe.js carries on each line).
const L = (canonicalName, raw, foodGroup, status = 'resolved') => ({
  canonicalName,
  raw,
  foodGroup,
  resolutionStatus: status,
})

// Run a set of source rawLines through the REAL pipeline.
function buildDoc(src) {
  return buildRecipeDoc(
    {
      source: 'curated',
      sourceId: `test-${Math.random().toString(36).slice(2)}`,
      title: src.title || 'Test dish',
      imageUrl: src.imageUrl ?? null,
      cuisine: src.cuisine ?? 'British',
      course: src.course ?? 'Dinner',
      dietLabels: src.dietLabels ?? [],
      healthLabels: src.healthLabels ?? [],
      rawLines: src.rawLines ?? [],
    },
    INDEX,
  ).data
}

// ── Allergen table expansion (roadmap #8) ─────────────────────────────────────

test('#8 oats are gluten by default (coeliac safety)', () => {
  assert.ok(
    allergensForLine(L('Oats', '200g oats', 'Grains')).includes('contains-gluten'),
  )
})

test('#8 tortilla / wrap raises gluten even when unresolved', () => {
  assert.ok(
    allergensForLine(L(null, '8 tortilla wrap', null, 'needsReview')).includes(
      'contains-gluten',
    ),
  )
})

test('#8 dairy long-tail: ghee, paneer, mascarpone, crème fraîche, custard', () => {
  for (const raw of ['2 tbsp ghee', '200g paneer', '100g mascarpone', '2 tbsp crème fraîche', '300ml custard']) {
    assert.ok(
      allergensForLine(L(null, raw, null, 'needsReview')).includes('contains-milk'),
      `${raw} should be contains-milk`,
    )
  }
})

test('#8 pine nuts and nut butters raise tree-nut allergen', () => {
  assert.ok(allergensForLine(L('Pine nuts', '50g pine nuts', 'Nuts')).includes('contains-nuts'))
  assert.ok(allergensForLine(L('Almond butter', '2 tbsp almond butter', 'Nuts')).includes('contains-nuts'))
})

test('#8 sesame/soy/celery/mustard/sulphite coverage', () => {
  assert.ok(allergensForLine(L('Tahini', '2 tbsp tahini', null)).includes('contains-sesame'))
  assert.ok(allergensForLine(L('Soy sauce', '1 tbsp soy sauce', null)).includes('contains-soya'))
  assert.ok(allergensForLine(L('Celery', '2 stalks celery', 'Vegetables')).includes('contains-celery'))
  assert.ok(allergensForLine(L('Dijon mustard', '1 tsp dijon', null)).includes('contains-mustard'))
  assert.ok(allergensForLine(L('White wine', '150ml white wine', 'Drinks')).includes('contains-sulphites'))
})

test('#8 NO false positives: butter bean, butternut squash, peanut butter, coconut milk', () => {
  assert.ok(!allergensForLine(L('Butter beans', '1 tin butter beans', 'Pulses')).includes('contains-milk'))
  assert.ok(!allergensForLine(L('Butternut squash', '400g butternut squash', 'Vegetables')).includes('contains-milk'))
  assert.ok(!allergensForLine(L('Peanut butter', '2 tbsp peanut butter', 'Nuts')).includes('contains-milk'))
  assert.ok(!allergensForLine(L('Coconut milk', '400ml coconut milk', 'Plant milk')).includes('contains-milk'))
})

// ── BLOCK: meat in Vegetarian (audit Finding 2) ───────────────────────────────

test('#7 bacon lasagne claimed Vegetarian is BLOCKED', () => {
  const lines = [
    L('Lasagne sheets', '250g lasagne sheets', 'Pasta & Noodles'),
    L('Bacon', '200g bacon', 'Meat'),
    L('Chopped tomatoes', '400g chopped tomatoes', 'Tinned vegetables'),
  ]
  const r = verifyLabels({ lines, allergens: deriveAllergens(lines), claimedLabels: ['Vegetarian'] })
  assert.equal(r.dietLabels.includes('Vegetarian'), false)
  assert.ok(r.blocked.some((b) => b.label === 'Vegetarian'))
})

test('#7 unresolved meat token still blocks Vegetarian (defence in depth)', () => {
  // "Duck" line that fails to resolve must NOT pass as Vegetarian.
  const lines = [
    L('Tagliatelle', '300g tagliatelle', 'Pasta & Noodles'),
    L(null, '2 duck breasts', null, 'needsReview'),
  ]
  const r = verifyLabels({ lines, allergens: deriveAllergens(lines), claimedLabels: ['Vegetarian'] })
  assert.equal(r.dietLabels.includes('Vegetarian'), false)
})

// ── BLOCK: honey / dairy in Vegan (audit Finding 3) ───────────────────────────

test('#7 baked apples with HONEY claimed Vegan is BLOCKED (but stays Vegetarian)', () => {
  const lines = [
    L('Cooking apples', '4 cooking apples', 'Fruit'),
    L('Sultanas', '50g sultanas', 'Dried fruit'),
    L('Honey', '4 tsp honey', 'Sweeteners'),
  ]
  const r = verifyLabels({ lines, allergens: deriveAllergens(lines), claimedLabels: ['Vegan'] })
  assert.equal(r.dietLabels.includes('Vegan'), false)
  assert.equal(r.dietLabels.includes('Vegetarian'), true)
  assert.ok(r.blocked.some((b) => b.label === 'Vegan'))
})

test('#7 red cabbage with BUTTER claimed Vegan + Dairy-free is BLOCKED', () => {
  const lines = [
    L('Red cabbage', '1 red cabbage', 'Vegetables'),
    L('Butter', '40g butter', 'Dairy'),
  ]
  const r = verifyLabels({ lines, allergens: deriveAllergens(lines), claimedLabels: ['Vegan', 'Dairy-free'] })
  assert.equal(r.dietLabels.includes('Vegan'), false)
  assert.equal(r.healthLabels.includes('Dairy-free'), false)
})

test('#7 yoghurt traybake claimed Vegan is BLOCKED', () => {
  const lines = [
    L('Cauliflower', '1 cauliflower', 'Vegetables'),
    L('Chickpeas', '1 tin chickpeas', 'Pulses'),
    L('Natural yoghurt', '4 tbsp natural yoghurt', 'Dairy'),
  ]
  const r = verifyLabels({ lines, allergens: deriveAllergens(lines), claimedLabels: ['Vegan'] })
  assert.equal(r.dietLabels.includes('Vegan'), false)
})

// ── BLOCK: coeliac-unsafe Gluten-free (audit Finding 1) ───────────────────────

test('#7 oat cookies claimed Gluten-free is BLOCKED', () => {
  const lines = [L('Banana', '2 bananas', 'Fruit'), L('Oats', '200g oats', 'Grains')]
  const r = verifyLabels({ lines, allergens: deriveAllergens(lines), claimedLabels: ['Gluten-free'] })
  assert.equal(r.healthLabels.includes('Gluten-free'), false)
  assert.ok(r.blocked.some((b) => b.label === 'Gluten-free'))
})

test('#7 tortilla fajitas claimed Gluten-free is BLOCKED', () => {
  const lines = [
    L('Chicken breast', '2 chicken breasts', 'Meat'),
    L(null, '8 tortilla wrap', null, 'needsReview'),
  ]
  const r = verifyLabels({ lines, allergens: deriveAllergens(lines), claimedLabels: ['Gluten-free'] })
  assert.equal(r.healthLabels.includes('Gluten-free'), false)
})

// ── BLOCK on unresolved lines (the "block, don't gate" rule) ──────────────────

test('#7 any needsReview line blocks every free-from label', () => {
  const lines = [
    L('Onion', '1 onion', 'Vegetables'),
    L(null, '1 sachet mystery seasoning', null, 'needsReview'),
  ]
  const r = verifyLabels({ lines, allergens: deriveAllergens(lines), claimedLabels: ['Gluten-free', 'Nut-free'] })
  assert.deepEqual(r.healthLabels, [])
  assert.deepEqual(r.dietLabels, [])
})

// ── PROVE: genuinely-safe labels still stand ──────────────────────────────────

test('#7 genuine vegan curry PROVES Vegan + Vegetarian + free-froms', () => {
  const lines = [
    L('Chickpeas', '1 tin chickpeas', 'Pulses'),
    L('Coconut milk', '400ml coconut milk', 'Plant milk'),
    L('Onion', '1 onion', 'Vegetables'),
    L('Spinach', '100g spinach', 'Vegetables'),
  ]
  const r = verifyLabels({ lines, allergens: deriveAllergens(lines), claimedLabels: ['Vegan', 'Gluten-free', 'Dairy-free'] })
  assert.ok(r.dietLabels.includes('Vegan'))
  assert.ok(r.dietLabels.includes('Vegetarian'))
  assert.ok(r.healthLabels.includes('Gluten-free'))
  assert.ok(r.healthLabels.includes('Dairy-free'))
  assert.deepEqual(r.blocked, [])
})

test('#7 vegan substitute products do NOT contradict Vegan', () => {
  const lines = [
    L('Vegan sausage', '6 vegan sausages', 'Meat alternatives'),
    L('Butter beans', '1 tin butter beans', 'Pulses'),
  ]
  const r = verifyLabels({ lines, allergens: deriveAllergens(lines), claimedLabels: ['Vegan'] })
  assert.ok(r.dietLabels.includes('Vegan'))
})

test('#7 fish dish PROVES Pescatarian, not Vegetarian/Vegan', () => {
  const lines = [
    L('Salmon', '2 salmon fillets', 'Fish'),
    L('Mixed leaves', '100g mixed leaves', 'Vegetables'),
  ]
  const r = verifyLabels({ lines, allergens: deriveAllergens(lines), claimedLabels: ['Pescatarian'] })
  assert.ok(r.dietLabels.includes('Pescatarian'))
  assert.equal(r.dietLabels.includes('Vegetarian'), false)
  assert.equal(r.dietLabels.includes('Vegan'), false)
})

test('#7 lifestyle labels (High-protein, Keto) pass through unchanged', () => {
  const lines = [L('Chickpeas', '1 tin chickpeas', 'Pulses')]
  const r = verifyLabels({ lines, allergens: deriveAllergens(lines), claimedLabels: ['High-protein', 'Keto', 'Mediterranean'] })
  assert.deepEqual(r.passthroughLabels.sort(), ['High-protein', 'Keto', 'Mediterranean'].sort())
})

// ── Integrated: the REAL pipeline produces safe docs ──────────────────────────

test('#7 buildRecipeDoc: bacon lasagne drops the Vegetarian claim', () => {
  const d = buildDoc({
    title: 'Lasagne',
    dietLabels: ['Vegetarian'],
    rawLines: [
      { rawName: 'Lasagne sheets', rawMeasure: '250g' },
      { rawName: 'Bacon', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
    ],
  })
  assert.equal(d.dietLabels.includes('Vegetarian'), false)
  assert.ok(d.allergens.includes('contains-gluten'))
})

test('#7 buildRecipeDoc: honey "Vegan" claim dropped end-to-end', () => {
  const d = buildDoc({
    title: 'Baked apples',
    dietLabels: ['Vegan'],
    healthLabels: ['Dairy-free'],
    rawLines: [
      { rawName: 'Cooking apples', rawMeasure: '4' },
      { rawName: 'Honey', rawMeasure: '4 tsp' },
    ],
  })
  assert.equal(d.dietLabels.includes('Vegan'), false)
})

// ── Integrated: image precedence + searchTokens + nutritionCompleteness ───────

test('#21 buildRecipeDoc: placeholder source image becomes null', () => {
  const d = buildDoc({ title: 'No photo dish', imageUrl: null, rawLines: [{ rawName: 'Onion', rawMeasure: '1' }] })
  assert.equal(d.imageUrl, null)
})

test('#21 buildRecipeDoc: a real source photo WINS', () => {
  const d = buildDoc({
    title: 'Photo dish',
    imageUrl: 'https://example.com/real.jpg',
    rawLines: [{ rawName: 'Onion', rawMeasure: '1' }],
  })
  assert.equal(d.imageUrl, 'https://example.com/real.jpg')
})

test('#22 buildRecipeDoc: searchTokens include title + canonical names, lowercased', () => {
  const d = buildDoc({
    title: 'Spiced Chickpea Curry',
    rawLines: [{ rawName: 'Chickpeas', rawMeasure: '1 tin' }, { rawName: 'Onion', rawMeasure: '1' }],
  })
  assert.ok(d.searchTokens.includes('chickpea'))
  assert.ok(d.searchTokens.includes('curry'))
  assert.ok(d.searchTokens.every((t) => t === t.toLowerCase()))
  // sorted + unique
  assert.deepEqual(d.searchTokens, [...new Set(d.searchTokens)].sort())
})

test('#30 buildRecipeDoc: nutritionCompleteness is a 0..1 share', () => {
  const d = buildDoc({
    title: 'Partly resolved',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '100g' },
      { rawName: 'Totally made up xyzzy ingredient', rawMeasure: '50g' },
    ],
  })
  assert.equal(typeof d.nutritionCompleteness, 'number')
  assert.ok(d.nutritionCompleteness >= 0 && d.nutritionCompleteness <= 1)
})
