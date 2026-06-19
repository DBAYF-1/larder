// Tests for Stage 2 — core→canonical ingredient resolution
// (ingestion/pipeline/resolve.js).
//
// The resolver maps a cleaned ingredient phrase to a canonical ingredient via an
// exact → synonym → stemmed → fuzzy ladder, falling back to needsReview when no
// confident match exists. We test the ladder against a small INLINE ingredient
// index (not the 685-row seed) so the assertions stay deterministic and readable,
// plus a couple of smoke tests against the real seed index.
//
// Run: node --test ingestion/pipeline/resolve.test.js   (node:test, no deps)

import { test } from 'node:test'
import assert from 'node:assert/strict'

import {
  slugify,
  tokenSetRatio,
  buildIndex,
  resolveCore,
  FUZZY_THRESHOLD,
} from './resolve.js'

// A tiny, fully-controlled ingredient set for the ladder tests.
const TEST_INGREDIENTS = [
  {
    canonicalName: 'Plain flour',
    baseUnit: 'g',
    densityGperMl: 0.53,
    synonyms: ['all-purpose flour', 'all purpose flour'],
  },
  {
    canonicalName: 'Onion',
    baseUnit: 'count',
    densityGperMl: null,
    synonyms: ['brown onion', 'yellow onion'],
  },
  {
    canonicalName: 'Aubergine',
    baseUnit: 'count',
    densityGperMl: null,
    synonyms: ['eggplant'],
  },
]

const INDEX = buildIndex(TEST_INGREDIENTS)

test('slugify produces a stable lower-case hyphenated id', () => {
  assert.equal(slugify('Plain flour'), 'plain-flour')
  assert.equal(slugify("Confectioner's sugar"), 'confectioners-sugar')
  assert.equal(slugify('Crème fraîche'), 'creme-fraiche')
})

test('tokenSetRatio: identical phrases score 1', () => {
  assert.equal(tokenSetRatio('plain flour', 'plain flour'), 1)
})

test('tokenSetRatio: a subset scores high but below 1', () => {
  const score = tokenSetRatio('flour', 'plain flour')
  assert.ok(score > 0.4 && score < 1)
})

test('tokenSetRatio: disjoint phrases score 0', () => {
  assert.equal(tokenSetRatio('onion', 'flour'), 0)
})

test('EXACT match resolves on the canonical name', () => {
  const r = resolveCore('plain flour', INDEX)
  assert.equal(r.resolutionStatus, 'resolved')
  assert.equal(r.method, 'exact')
  assert.equal(r.ingredientId, 'plain-flour')
  assert.equal(r.canonicalName, 'Plain flour')
  assert.equal(r.score, 1)
})

test('SYNONYM match resolves via the synonym key (US→UK)', () => {
  const r = resolveCore('eggplant', INDEX)
  assert.equal(r.resolutionStatus, 'resolved')
  assert.equal(r.ingredientId, 'aubergine')
  // matched on a synonym, not the canonical phrase itself
  assert.notEqual(r.method, 'none')
})

test('STEMMED/plural match resolves "onions" → Onion', () => {
  const r = resolveCore('onions', INDEX)
  assert.equal(r.resolutionStatus, 'resolved')
  assert.equal(r.ingredientId, 'onion')
})

test('FUZZY match resolves a near phrase above the threshold', () => {
  const r = resolveCore('all purpose flour sifted', INDEX)
  assert.equal(r.resolutionStatus, 'resolved')
  assert.equal(r.ingredientId, 'plain-flour')
  assert.ok(r.score >= FUZZY_THRESHOLD)
})

test('NO confident match → needsReview, null id', () => {
  const r = resolveCore('dragon fruit', INDEX)
  assert.equal(r.resolutionStatus, 'needsReview')
  assert.equal(r.ingredientId, null)
  assert.equal(r.canonicalName, null)
  assert.equal(r.method, 'none')
})

test('empty / whitespace core → needsReview', () => {
  assert.equal(resolveCore('', INDEX).resolutionStatus, 'needsReview')
  assert.equal(resolveCore('   ', INDEX).resolutionStatus, 'needsReview')
})

test('FUZZY_THRESHOLD is a sane ratio in (0,1)', () => {
  assert.ok(FUZZY_THRESHOLD > 0 && FUZZY_THRESHOLD < 1)
})

// ── Smoke tests against the real curated seed index (default index) ───────────
test('default index resolves a very common ingredient ("onion")', () => {
  const r = resolveCore('onion')
  assert.equal(r.resolutionStatus, 'resolved')
  assert.ok(r.ingredientId)
})

test('default index resolves "garlic"', () => {
  const r = resolveCore('garlic')
  assert.equal(r.resolutionStatus, 'resolved')
  assert.ok(r.ingredientId)
})
