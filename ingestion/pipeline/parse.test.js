// Tests for Stage 1 — the ingredient-line tokeniser (ingestion/pipeline/parse.js).
//
// parseLine() turns TheMealDB's messy free-text measures + names into a
// structured { quantity, unit, core, prepNote, range*, count, soft, optional }.
// It is pure and deterministic, so we assert exact values. Every expected number
// is hand-verified against the parser's documented behaviour (spec Section 4/7).
//
// Run: node --test ingestion/pipeline/parse.test.js   (node:test, no deps)

import { test } from 'node:test'
import assert from 'node:assert/strict'

import { parseLine } from './parse.js'

test('plain metric measure: "400g" + name → quantity, unit, lowercased core', () => {
  const p = parseLine('400g', 'Plain flour')
  assert.equal(p.quantity, 400)
  assert.equal(p.unit, 'g')
  assert.equal(p.core, 'plain flour')
  assert.equal(p.soft, false)
})

test('a prep word in the name is moved to prepNote, not the core', () => {
  // "chopped" is a recognised preparation word → pulled out of the resolvable
  // core ("tomatoes") into prepNote so it never hurts ingredient resolution.
  const p = parseLine('400g', 'Chopped tomatoes')
  assert.equal(p.core, 'tomatoes')
  assert.ok(p.prepNote && /chopped/.test(p.prepNote))
})

test('separate metric unit: "2 cups" + flour → 2, cup', () => {
  const p = parseLine('2 cups', 'flour')
  assert.equal(p.quantity, 2)
  assert.equal(p.unit, 'cup')
  assert.equal(p.core, 'flour')
})

test('"of" is dropped after a unit: "2 cups of flour" (no name)', () => {
  const p = parseLine('2 cups of flour')
  assert.equal(p.quantity, 2)
  assert.equal(p.unit, 'cup')
  assert.equal(p.core, 'flour')
})

test('ascii fraction "1/2" parses to 0.5', () => {
  const p = parseLine('1/2 tsp', 'salt')
  assert.equal(p.quantity, 0.5)
  assert.equal(p.unit, 'tsp')
})

test('mixed number "1 1/2 cups" → 1.5', () => {
  const p = parseLine('1 1/2 cups', 'sugar')
  assert.equal(p.quantity, 1.5)
  assert.equal(p.unit, 'cup')
})

test('vulgar fraction "½" → 0.5', () => {
  const p = parseLine('½ tsp', 'cinnamon')
  assert.equal(p.quantity, 0.5)
  assert.equal(p.unit, 'tsp')
})

test('glued vulgar "1½" → 1.5', () => {
  const p = parseLine('1½ tbsp', 'oil')
  assert.equal(p.quantity, 1.5)
  assert.equal(p.unit, 'tbsp')
})

test('range "2-3" stores midpoint and both ends', () => {
  const p = parseLine('2-3', 'eggs')
  assert.equal(p.quantity, 2.5)
  assert.equal(p.rangeLow, 2)
  assert.equal(p.rangeHigh, 3)
  assert.equal(p.core, 'eggs')
})

test('range with word "2 to 4" → midpoint 3', () => {
  const p = parseLine('2 to 4', 'onions')
  assert.equal(p.quantity, 3)
  assert.equal(p.rangeLow, 2)
  assert.equal(p.rangeHigh, 4)
})

test('parenthesised real measure "1 (400g) tin" → count 1, qty 400 g', () => {
  const p = parseLine('1 (400g) tin', 'kidney beans')
  assert.equal(p.count, 1)
  assert.equal(p.quantity, 400)
  assert.equal(p.unit, 'g')
  assert.equal(p.core, 'kidney beans')
})

test('unitless count "2" + eggs → quantity 2, empty unit', () => {
  const p = parseLine('2', 'eggs')
  assert.equal(p.quantity, 2)
  assert.equal(p.unit, '')
  assert.equal(p.core, 'eggs')
})

test('"to taste" is soft with no firm quantity', () => {
  const p = parseLine('to taste', 'black pepper')
  assert.equal(p.soft, true)
  assert.equal(p.quantity, null)
  assert.equal(p.core, 'black pepper')
})

test('"a pinch of" salt → soft, quantity 1, unit pinch', () => {
  const p = parseLine('a pinch', 'salt')
  assert.equal(p.soft, true)
  assert.equal(p.quantity, 1)
  assert.equal(p.unit, 'pinch')
})

test('optional flag is detected', () => {
  const p = parseLine('1 tsp (optional)', 'chilli flakes')
  assert.equal(p.optional, true)
})

test('leading descriptor is stripped into descriptor field', () => {
  const p = parseLine('2', 'large onions')
  assert.equal(p.descriptor, 'large')
  assert.equal(p.core, 'onions')
})

test('after-comma clause becomes a prep note', () => {
  const p = parseLine('2', 'tomatoes, finely chopped')
  assert.equal(p.core, 'tomatoes')
  assert.ok(p.prepNote && /finely chopped/.test(p.prepNote))
})

test('empty inputs yield an empty core and no quantity', () => {
  const p = parseLine('', '')
  assert.equal(p.core, '')
  assert.equal(p.quantity, null)
  assert.equal(p.unit, null)
})

test('measure-only line (no name) keeps the core from the measure text', () => {
  const p = parseLine('1 onion')
  assert.equal(p.quantity, 1)
  assert.equal(p.core, 'onion')
})

test('imperial unit token is preserved as display unit ("12 oz")', () => {
  const p = parseLine('12 oz', 'beef mince')
  assert.equal(p.quantity, 12)
  assert.equal(p.unit, 'oz')
  assert.equal(p.core, 'beef mince')
})

test('non-finite quantity is normalised to null', () => {
  // A core-only descriptive measure with no number leaves quantity null.
  const p = parseLine('handful', 'spinach')
  assert.equal(p.quantity, 1) // "handful" is a soft knob unit → qty 1
  assert.equal(p.soft, true)
  assert.equal(p.unit, 'handful')
})
