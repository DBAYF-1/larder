// Tests for the Browse-screen query planner inside src/lib/queryRecipes.js
// (roadmap #25; audit code-quality §2).
//
// queryRecipes() is the public entry point; its private planQuery() decides
// which single Firestore composite index a filter+sort combination can use, and
// reports any predicates it had to drop via `appliedFallback`. The planner is
// branchy and TIGHTLY coupled to the indexes declared in
// /firestore.indexes.json — if those two drift apart the Browse screen silently
// 500s in production (no index) or silently returns wrong results.
//
// We exercise the planner THROUGH the public API by mocking firebase/firestore:
// the mocked where()/orderBy() record exactly what the planner asked for, so we
// can reconstruct the (field-equality + array-contains + orderBy) shape of the
// query and assert a matching composite index EXISTS in the committed file. This
// keeps the test honest about the real contract without depending on a private
// export or a live Firestore (the quota is exhausted — verify by code only).
//
// Run with: npx vitest run src/lib/queryRecipes.test.js

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { describe, it, expect, vi, beforeEach } from 'vitest'

// ── Mock firebase/firestore ──────────────────────────────────────────────────
// Each constraint factory returns a tagged descriptor object. getDocs returns an
// empty page so queryRecipes resolves; the *ordered list of constraints* passed
// to query() is captured for assertions.

let lastConstraints = []

vi.mock('firebase/firestore', () => {
  return {
    collection: (_db, name) => ({ __collection: name }),
    doc: (_db, ...path) => ({ __doc: path.join('/') }),
    getDoc: vi.fn(async () => ({ exists: () => false })),
    getDocs: vi.fn(async () => ({ docs: [] })),
    query: (_coll, ...constraints) => {
      lastConstraints = constraints
      return { __query: true, constraints }
    },
    where: (fieldPath, op, value) => ({ type: 'where', fieldPath, op, value }),
    orderBy: (fieldPath, dir = 'asc') => ({ type: 'orderBy', fieldPath, dir }),
    limit: (n) => ({ type: 'limit', n }),
    startAfter: (cursor) => ({ type: 'startAfter', cursor }),
  }
})

const { queryRecipes } = await import('./queryRecipes.js')

// ── Load the committed composite indexes ─────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url))
const indexesPath = resolve(__dirname, '../../firestore.indexes.json')
const indexFile = JSON.parse(readFileSync(indexesPath, 'utf8'))

// A "signature" describes the shape Firestore needs an index for: the set of
// constrained fields with their kind (equality / array-contains / range), plus
// the trailing orderBy field+direction. Single-field equality+single-orderBy is
// always automatically indexed by Firestore, so we only REQUIRE a composite when
// there are 2+ constrained/ordered fields beyond the trivial case.

/** Normalise a committed index entry into a comparable signature.
 *
 * In a Firestore composite index the field list is ordered: the leading fields
 * are equality / array-contains constraints, and ONLY the final ordered field is
 * the effective orderBy (the sort key the query reads in index order). We mark
 * the last non-array field as the `order` field and any earlier scalar field as
 * an `equality` field. (A trailing array field is unusual but is kept as
 * array-contains.) */
function indexSignature(idx) {
  const lastOrderIdx = idx.fields.reduce(
    (acc, f, i) => (f.arrayConfig ? acc : i),
    -1,
  )
  return idx.fields.map((f, i) => {
    if (f.arrayConfig) return { field: f.fieldPath, kind: 'array-contains' }
    if (i === lastOrderIdx) {
      return { field: f.fieldPath, kind: 'order', dir: f.order === 'DESCENDING' ? 'desc' : 'asc' }
    }
    return { field: f.fieldPath, kind: 'equality' }
  })
}

const COMPOSITE_INDEXES = indexFile.indexes
  .filter((i) => i.collectionGroup === 'recipes')
  .map(indexSignature)

/** Pull the where()/orderBy() constraints captured from the last query() call. */
function planFromConstraints() {
  const wheres = lastConstraints.filter((c) => c.type === 'where')
  const order = lastConstraints.find((c) => c.type === 'orderBy')
  return { wheres, order }
}

/**
 * Does a committed composite index cover the captured query plan?
 * Firestore matches a query to an index when every equality/array-contains
 * field is present and the orderBy field follows them with the same direction.
 * Range filters (`<=`) on the orderBy field are served by the same index. We
 * treat a single equality/array + single orderBy that is NOT the default
 * collection scan as needing a composite; a bare orderBy needs none.
 */
function isCoveredByIndex({ wheres, order }) {
  // Bare popularity/time order with no filters: automatic single-field index.
  if (wheres.length === 0) return true

  // Build the required signature: array-contains + equality fields, then order.
  const required = []
  for (const w of wheres) {
    if (w.fieldPath === order.fieldPath) continue // range on the sort field
    if (w.op === 'array-contains') {
      required.push({ field: w.fieldPath, kind: 'array-contains' })
    } else if (w.op === '==') {
      required.push({ field: w.fieldPath, kind: 'equality' })
    } else {
      // range filter on a non-order field is not expressible — should never plan
      return false
    }
  }
  required.push({ field: order.fieldPath, kind: 'order', dir: order.dir })

  // A single equality + a single order on different fields still needs a
  // composite in Firestore. Compare against committed indexes order-sensitively
  // for the array/order positions but treat equality position flexibly.
  return COMPOSITE_INDEXES.some((sig) => indexMatches(sig, required))
}

/** Order-aware match: the committed index must contain exactly the required
 * fields, equality fields may appear in any order before the array/order tail,
 * the array-contains and orderBy positions must line up. */
function indexMatches(sig, required) {
  if (sig.length !== required.length) return false

  const sigOrder = sig.find((f) => f.kind === 'order')
  const reqOrder = required.find((f) => f.kind === 'order')
  if (!sigOrder || !reqOrder) return false
  if (sigOrder.field !== reqOrder.field || sigOrder.dir !== reqOrder.dir) return false

  const sigArray = sig.filter((f) => f.kind === 'array-contains').map((f) => f.field).sort()
  const reqArray = required.filter((f) => f.kind === 'array-contains').map((f) => f.field).sort()
  if (sigArray.join('|') !== reqArray.join('|')) return false

  // Equality fields in the committed index are everything that is not the order
  // field and not an array field.
  const sigEq = sig
    .filter((f) => f.kind !== 'order' && f.kind !== 'array-contains')
    .map((f) => f.field)
    .sort()
  const reqEq = required.filter((f) => f.kind === 'equality').map((f) => f.field).sort()
  return sigEq.join('|') === reqEq.join('|')
}

const fakeDb = { __db: true }

async function plan(filters, sort = 'popularity') {
  lastConstraints = []
  const res = await queryRecipes(fakeDb, { filters, sort })
  return { ...planFromConstraints(), appliedFallback: res.appliedFallback }
}

beforeEach(() => {
  lastConstraints = []
})

// ── The committed file actually parses and contains the recipes indexes ───────
describe('firestore.indexes.json', () => {
  it('parses and declares recipes composite indexes', () => {
    expect(Array.isArray(indexFile.indexes)).toBe(true)
    expect(COMPOSITE_INDEXES.length).toBeGreaterThan(0)
  })
})

// ── Supported combinations map to a real composite index, no fallback ─────────
// These are the combinations the CURRENT planner serves with a single index and
// zero dropped predicates. Each is independently verified to match a committed
// composite index, so adding/removing an index without updating the planner (or
// vice versa) breaks exactly one of these table rows.
describe('queryRecipes planner — fully-served filter combinations', () => {
  const supported = [
    { name: 'no filters, popularity sort', filters: {}, sort: 'popularity' },
    { name: 'course only', filters: { course: 'Dinner' } },
    { name: 'cuisine only', filters: { cuisine: 'Italian' } },
    { name: 'diet only', filters: { diet: 'Vegan' } },
    { name: 'freeFrom only', filters: { freeFrom: 'Gluten-free' } },
    { name: 'course + diet', filters: { course: 'Dinner', diet: 'Vegan' } },
  ]

  for (const c of supported) {
    it(`${c.name} → matches a committed index with no fallback`, async () => {
      const p = await plan(c.filters, c.sort || 'popularity')
      expect(p.order.fieldPath).toBe('popularity')
      expect(p.order.dir).toBe('desc')
      expect(p.appliedFallback).toEqual([])
      expect(isCoveredByIndex(p)).toBe(true)
    })
  }
})

// ── Combinations the planner CURRENTLY narrows via fallback ───────────────────
// firestore.indexes.json now declares composite indexes for these pairs
// (cuisine+diet, course+freeFrom, cuisine+freeFrom, diet+freeFrom,
// course+cuisine), but planQuery only special-cases course+diet, so it still
// drops a predicate here and reports it via appliedFallback. This is the
// correct, honest contract today: the surviving single-filter plan is always
// index-covered, and the dropped filter is reported (never silently lost). If
// the planner is later taught to use these indexes, move the row up to the
// fully-served table above.
describe('queryRecipes planner — combos that fall back to one indexed filter', () => {
  const fallbackPairs = [
    { name: 'cuisine + diet', filters: { cuisine: 'Italian', diet: 'Vegan' } },
    { name: 'course + freeFrom', filters: { course: 'Dinner', freeFrom: 'Gluten-free' } },
    { name: 'cuisine + freeFrom', filters: { cuisine: 'Italian', freeFrom: 'Dairy-free' } },
    { name: 'diet + freeFrom', filters: { diet: 'Vegan', freeFrom: 'Gluten-free' } },
    { name: 'course + cuisine', filters: { course: 'Dinner', cuisine: 'Italian' } },
  ]

  for (const c of fallbackPairs) {
    it(`${c.name} → keeps one indexed filter, reports the dropped one`, async () => {
      const p = await plan(c.filters)
      expect(p.appliedFallback.length).toBe(1)
      expect(p.wheres).toHaveLength(1)
      // Whatever survived must still be served by a committed single index.
      expect(isCoveredByIndex(p)).toBe(true)
      // The dropped key is one of the two requested filter keys.
      expect(Object.keys(c.filters)).toContain(p.appliedFallback[0])
    })
  }
})

// ── Time-sorted / time-bounded combinations ───────────────────────────────────
describe('queryRecipes planner — time sort / max-time', () => {
  const timeCases = [
    { name: 'time sort, no filter', filters: {}, sort: 'time' },
    { name: 'time sort + course', filters: { course: 'Dinner' }, sort: 'time' },
    { name: 'time sort + cuisine', filters: { cuisine: 'Italian' }, sort: 'time' },
    { name: 'maxTime + course (pop sort)', filters: { course: 'Dinner', maxTime: 30 } },
    { name: 'maxTime + cuisine (pop sort)', filters: { cuisine: 'Italian', maxTime: 45 } },
  ]

  for (const c of timeCases) {
    it(`${c.name} → orders by totalTimeMinutes and is index-covered`, async () => {
      const p = await plan(c.filters, c.sort || 'popularity')
      expect(p.order.fieldPath).toBe('totalTimeMinutes')
      expect(p.order.dir).toBe('asc')
      expect(isCoveredByIndex(p)).toBe(true)
    })
  }
})

// ── Unsupported combinations fall back and REPORT the dropped predicates ───────
describe('queryRecipes planner — unsupported combinations report appliedFallback', () => {
  it('three filters (course + cuisine + diet): keeps one, reports the rest', async () => {
    const p = await plan({ course: 'Dinner', cuisine: 'Italian', diet: 'Vegan' })
    expect(p.appliedFallback.length).toBeGreaterThan(0)
    // The surviving single-filter plan must still be index-covered.
    expect(isCoveredByIndex(p)).toBe(true)
    // Dropped keys are a subset of the requested filter keys.
    for (const k of p.appliedFallback) {
      expect(['course', 'cuisine', 'diet', 'freeFrom']).toContain(k)
    }
  })

  it('four filters: keeps the single most selective, drops three', async () => {
    const p = await plan({
      course: 'Dinner',
      cuisine: 'Italian',
      diet: 'Vegan',
      freeFrom: 'Gluten-free',
    })
    expect(p.appliedFallback.length).toBe(3)
    expect(isCoveredByIndex(p)).toBe(true)
    // freeFrom is the most selective → it should be the one KEPT, not dropped.
    expect(p.appliedFallback).not.toContain('freeFrom')
    expect(p.wheres).toHaveLength(1)
    expect(p.wheres[0].fieldPath).toBe('healthLabels')
  })

  it('time sort with two leading filters drops the non-leading one', async () => {
    const p = await plan({ course: 'Dinner', cuisine: 'Italian', diet: 'Vegan' }, 'time')
    // Only course|cuisine can lead a time query; everything else is dropped.
    expect(p.appliedFallback.length).toBeGreaterThan(0)
    expect(p.order.fieldPath).toBe('totalTimeMinutes')
    expect(isCoveredByIndex(p)).toBe(true)
  })

  it('a fully-served query reports an EMPTY fallback (no silent drops)', async () => {
    const p = await plan({ course: 'Dinner', diet: 'Vegan' })
    expect(p.appliedFallback).toEqual([])
  })
})

// ── Pagination plumbing (limit + startAfter) ──────────────────────────────────
describe('queryRecipes — pagination + cursor', () => {
  it('applies the page limit and surfaces a nextCursor only on a full page', async () => {
    lastConstraints = []
    const res = await queryRecipes(fakeDb, { filters: {}, pageSize: 24 })
    const lim = lastConstraints.find((c) => c.type === 'limit')
    expect(lim.n).toBe(24)
    // empty page (mock returns []) → no next cursor
    expect(res.nextCursor).toBeNull()
  })

  it('passes the cursor to startAfter when provided', async () => {
    lastConstraints = []
    const cursor = { __snapshot: 'last' }
    await queryRecipes(fakeDb, { filters: { course: 'Dinner' }, cursor })
    const sa = lastConstraints.find((c) => c.type === 'startAfter')
    expect(sa).toBeTruthy()
    expect(sa.cursor).toBe(cursor)
  })
})
