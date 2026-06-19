// Tests for Stage 3 — normalise a resolved line to its canonical base unit
// (ingestion/pipeline/normalise.js).
//
// normaliseLine() produces the maths-ready quantityInBaseUnit (g | ml | count)
// that buildShoppingList consumes, while preserving the as-written quantity/unit
// for display. The HARD rule under test: a mass↔volume conversion that needs a
// density is NEVER fabricated — when the canonical has no density the line is
// kept verbatim and flagged needsReview.
//
// Inline ingredient stubs keep the conversions hand-verifiable. Run:
//   node --test ingestion/pipeline/normalise.test.js   (node:test, no deps)

import { test } from 'node:test'
import assert from 'node:assert/strict'

import { normaliseLine } from './normalise.js'

// ── Canonical ingredient stubs (only the fields normalise.js reads) ──────────
const FLOUR = { canonicalName: 'Plain flour', baseUnit: 'g', densityGperMl: 0.53 }
const MILK = { canonicalName: 'Milk', baseUnit: 'ml', densityGperMl: 1.03 }
const ONION = { canonicalName: 'Onion', baseUnit: 'count', densityGperMl: null }
const SUGAR_NO_DENSITY = { canonicalName: 'Mystery powder', baseUnit: 'g', densityGperMl: null }
const TINNED_TOMATOES = {
  canonicalName: 'Chopped tomatoes',
  baseUnit: 'g',
  densityGperMl: null,
  displayRules: { roundUpTo: 400 },
}

const parsed = (over = {}) => ({
  quantity: null,
  unit: null,
  rangeLow: null,
  rangeHigh: null,
  soft: false,
  ...over,
})

test('unresolved ingredient (null) → needsReview, no base quantity', () => {
  const n = normaliseLine(parsed({ quantity: 2, unit: 'g' }), null)
  assert.equal(n.needsReview, true)
  assert.equal(n.quantityInBaseUnit, null)
  assert.equal(n.reviewReason, 'unresolved ingredient')
})

test('same-dimension mass: "400 g" of flour → 400 g', () => {
  const n = normaliseLine(parsed({ quantity: 400, unit: 'g' }), FLOUR)
  assert.equal(n.baseUnit, 'g')
  assert.equal(n.quantityInBaseUnit, 400)
  assert.equal(n.needsReview, false)
})

test('mass unit conversion: "1 kg" of flour → 1000 g', () => {
  const n = normaliseLine(parsed({ quantity: 1, unit: 'kg' }), FLOUR)
  assert.equal(n.quantityInBaseUnit, 1000)
})

test('imperial mass: "1 oz" of flour → 28.35 g', () => {
  const n = normaliseLine(parsed({ quantity: 1, unit: 'oz' }), FLOUR)
  assert.equal(n.quantityInBaseUnit, 28.35)
})

test('same-dimension volume: "500 ml" milk → 500 ml', () => {
  const n = normaliseLine(parsed({ quantity: 500, unit: 'ml' }), MILK)
  assert.equal(n.baseUnit, 'ml')
  assert.equal(n.quantityInBaseUnit, 500)
})

test('unitless count for a count ingredient: "2" onions → 2 count', () => {
  const n = normaliseLine(parsed({ quantity: 2, unit: '' }), ONION)
  assert.equal(n.baseUnit, 'count')
  assert.equal(n.quantityInBaseUnit, 2)
  assert.equal(n.needsReview, false)
})

test('mass→volume WITH density: "1 cup" milk (240 ml × 1.03 = 247.2 g→ml stays ml)', () => {
  // milk baseUnit is ml, a cup is already volume → straight 240 ml, no density.
  const n = normaliseLine(parsed({ quantity: 1, unit: 'cup' }), MILK)
  assert.equal(n.baseUnit, 'ml')
  assert.equal(n.quantityInBaseUnit, 240)
})

test('volume→mass WITH density: "1 cup" flour → 240 ml × 0.53 = 127.2 g', () => {
  const n = normaliseLine(parsed({ quantity: 1, unit: 'cup' }), FLOUR)
  assert.equal(n.baseUnit, 'g')
  assert.equal(n.quantityInBaseUnit, 127.2)
  assert.equal(n.needsReview, false)
})

test('volume→mass WITHOUT density → kept, flagged needsReview (never fabricated)', () => {
  const n = normaliseLine(parsed({ quantity: 1, unit: 'cup' }), SUGAR_NO_DENSITY)
  assert.equal(n.quantityInBaseUnit, null)
  assert.equal(n.needsReview, true)
  assert.ok(/density unknown/i.test(n.reviewReason))
})

test('unitless count against a g-ingredient with no per-item weight → needsReview', () => {
  const n = normaliseLine(parsed({ quantity: 2, unit: '' }), FLOUR)
  assert.equal(n.quantityInBaseUnit, null)
  assert.equal(n.needsReview, true)
})

test('unknown unit token → kept, flagged needsReview', () => {
  const n = normaliseLine(parsed({ quantity: 2, unit: 'glug' }), FLOUR)
  assert.equal(n.quantityInBaseUnit, null)
  assert.equal(n.needsReview, true)
  assert.ok(/unknown unit/i.test(n.reviewReason))
})

test('pack unit "tin" against a g-ingredient uses the known pack size', () => {
  const n = normaliseLine(parsed({ quantity: 2, unit: 'tin' }), TINNED_TOMATOES)
  assert.equal(n.baseUnit, 'g')
  assert.equal(n.quantityInBaseUnit, 800) // 2 × 400 g
  assert.equal(n.needsReview, false)
})

test('soft amount ("to taste") carries no firm base quantity', () => {
  const n = normaliseLine(parsed({ quantity: null, unit: null, soft: true }), FLOUR)
  assert.equal(n.quantityInBaseUnit, null)
  assert.equal(n.baseUnit, 'g')
  assert.equal(n.needsReview, false)
})

test('resolved ingredient but unknown quantity → null base, not a review', () => {
  const n = normaliseLine(parsed({ quantity: null, unit: 'g' }), FLOUR)
  assert.equal(n.quantityInBaseUnit, null)
  assert.equal(n.needsReview, false)
})

test('range is carried through to the normalised line', () => {
  const n = normaliseLine(parsed({ quantity: 2.5, unit: '', rangeLow: 2, rangeHigh: 3 }), ONION)
  assert.equal(n.rangeLow, 2)
  assert.equal(n.rangeHigh, 3)
  assert.equal(n.quantityInBaseUnit, 2.5)
})
