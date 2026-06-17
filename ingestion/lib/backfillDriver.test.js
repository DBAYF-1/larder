// Tests for the quota-safe checkpointed backfill driver + the firestore.js cap
// primitives. No real Firestore: a tiny in-memory fake records every write so we
// can assert the per-run cap is NEVER exceeded across collections, that runs
// resume from the saved cursor, and that steady-state re-runs are free.
//
// Run: node --test ingestion/lib/backfillDriver.test.js   (node:test, no deps)

import { test } from 'node:test'
import assert from 'node:assert/strict'

import {
  makeWriteBudget,
  diffAndWriteCapped,
  DEFAULT_WRITE_CAP,
} from './firestore.js'
import { runBackfill, matrixQueryCount, TOTAL_TARGET } from './backfillDriver.js'

// ── In-memory Firestore fake ─────────────────────────────────────────────────
// Models only what the writer touches: collections of docs, doc get/set, the
// .collection().select('contentHash').get() used by loadExistingHashes, and
// db.doc(path) for the system/progress docs.

function makeFakeDb() {
  const store = new Map() // 'collection/id' -> data
  let writes = 0 // total set() calls (a write each)

  const docRef = (path) => ({
    async get() {
      const data = store.get(path)
      return {
        exists: store.has(path),
        id: path.split('/').pop(),
        data: () => data,
      }
    },
    async set(data) {
      store.set(path, data)
      writes++
    },
  })

  const collectionRef = (name) => ({
    doc: (id) => docRef(`${name}/${id}`),
    select() {
      return {
        async get() {
          const docs = []
          for (const [path, data] of store) {
            const slash = path.indexOf('/')
            if (path.slice(0, slash) !== name) continue
            docs.push({ id: path.slice(slash + 1), data: () => data })
          }
          return { forEach: (fn) => docs.forEach(fn) }
        },
      }
    },
  })

  return {
    collection: (name) => collectionRef(name),
    doc: (path) => docRef(path),
    batch() {
      const ops = []
      return {
        set(ref, data) {
          ops.push([ref, data])
        },
        async commit() {
          for (const [ref, data] of ops) await ref.set(data)
        },
      }
    },
    // test introspection
    _store: store,
    get _writes() {
      return writes
    },
    _reset() {
      writes = 0
    },
    _count(name) {
      let n = 0
      for (const path of store.keys()) if (path.startsWith(name + '/')) n++
      return n
    },
  }
}

// The writer stamps updatedAt via serverTimestamp(), which needs firebase-admin's
// field sentinels. ensureFieldSentinels() resolves them WITHOUT credentials or a
// live db (see firestore.js), so the write-touching tests run against the fake.
import { ensureFieldSentinels } from './firestore.js'

let SENTINELS_OK = false
try {
  await ensureFieldSentinels()
  SENTINELS_OK = true
} catch {
  SENTINELS_OK = false // firebase-admin not installed → skip write tests
}

// A diet-matrix stub: 2 diets, small cartesian product.
const MATRIX = {
  diets: [
    { key: 'vegan', label: 'Vegan', cuisines: ['British', 'Italian'], mealTypes: ['Dinner', 'Lunch'] },
    { key: 'vegetarian', label: 'Vegetarian', cuisines: ['British'], mealTypes: ['Dinner'] },
  ],
}

// A trivial buildRecipeDoc: turns a source recipe into a diff-ready doc.
const buildRecipeDoc = (src) => ({
  id: `${src.source}-${src.sourceId}`,
  data: {
    id: `${src.source}-${src.sourceId}`,
    title: src.title || src.sourceId,
    source: src.source,
    dietLabels: src.dietLabels || [],
    ingredients: src.rawLines || [],
  },
})

const mkSrc = (source, n, dietLabels = []) =>
  Array.from({ length: n }, (_, i) => ({
    source,
    sourceId: `${i}`,
    title: `${source} ${i}`,
    dietLabels,
  }))

test('matrixQueryCount sums diet × cuisine × mealType', () => {
  // vegan: 2×2=4, vegetarian: 1×1=1  => 5
  assert.equal(matrixQueryCount(MATRIX), 5)
  assert.equal(matrixQueryCount({}), 0)
  assert.equal(matrixQueryCount(null), 0)
})

test('makeWriteBudget tracks spend / remaining / exhausted', () => {
  const b = makeWriteBudget(10)
  assert.equal(b.cap, 10)
  assert.equal(b.remaining, 10)
  assert.equal(b.exhausted, false)
  b.spend(7)
  assert.equal(b.remaining, 3)
  assert.equal(b.exhausted, false)
  b.spend(3)
  assert.equal(b.remaining, 0)
  assert.equal(b.exhausted, true)
  b.spend(5) // over-spend is clamped on remaining, still exhausted
  assert.equal(b.remaining, 0)
  assert.equal(b.exhausted, true)
})

test('DEFAULT_WRITE_CAP is the documented 4500', () => {
  assert.equal(DEFAULT_WRITE_CAP, 4500)
})

// The write-touching tests need the field sentinels; skip cleanly if absent so
// the file still runs (and reports) without firebase-admin initialised.
const writeTest = SENTINELS_OK ? test : test.skip

writeTest('diffAndWriteCapped never exceeds the budget and reports deferred', async () => {
  const db = makeFakeDb()
  const budget = makeWriteBudget(3)
  const docs = mkSrc('x', 5).map(buildRecipeDoc)
  const res = await diffAndWriteCapped(db, 'recipes', docs, budget)
  assert.equal(res.written, 3)
  assert.equal(res.deferred, 2)
  assert.equal(res.writtenDocs.length, 3)
  assert.equal(budget.exhausted, true)
  assert.equal(db._count('recipes'), 3)
})

writeTest('steady-state re-run writes nothing (contentHash diff)', async () => {
  const db = makeFakeDb()
  const docs = mkSrc('x', 4).map(buildRecipeDoc)
  const b1 = makeWriteBudget(100)
  await diffAndWriteCapped(db, 'recipes', docs, b1)
  assert.equal(b1.spent, 4)

  const b2 = makeWriteBudget(100)
  const res2 = await diffAndWriteCapped(db, 'recipes', docs, b2)
  assert.equal(res2.written, 0)
  assert.equal(res2.skipped, 4)
  assert.equal(b2.spent, 0) // free re-run
})

writeTest('runBackfill never exceeds the cap across collections in one run', async () => {
  const db = makeFakeDb()
  const cap = 10
  // 4 ingredient docs + 8 display recipes + an Edamam harvester offering 20.
  const ingredientDocs = mkSrc('ing', 4).map((s) => ({
    id: `ing-${s.sourceId}`,
    data: { id: `ing-${s.sourceId}`, canonicalName: `Ing ${s.sourceId}` },
  }))
  const displaySourceRecipes = mkSrc('themealdb', 8, ['Vegan'])
  const harvestEdamam = async ({ seen, maxNew }) => {
    const recipes = mkSrc('edamam', 20, ['Vegan'])
    for (const r of recipes) seen.add(`uri-${r.sourceId}`)
    return { recipes: recipes.slice(0, maxNew + 5), matrixCursor: 5, pageCursor: null, exhaustedMatrix: true }
  }

  const summary = await runBackfill({
    db,
    matrix: MATRIX,
    index: {},
    buildRecipeDoc,
    ingredientDocs,
    displaySourceRecipes,
    harvestEdamam,
    cap,
  })

  // The cap is 10. ingredients(4) + recipes(6) = 10 exactly; nothing beyond.
  assert.equal(summary.writeBudgetSpent, cap)
  assert.equal(summary.capReached, true)
  assert.ok(db._count('ingredients') + db._count('recipes') <= cap)
})

writeTest('runBackfill resumes from the saved cursor on the next run', async () => {
  const db = makeFakeDb()
  let lastCursorSeen = null
  const harvestEdamam = async ({ cursor, seen }) => {
    lastCursorSeen = cursor
    // Each run harvests 2 fresh recipes and advances the cursor by 1.
    const recipes = mkSrc('edamam', 2, ['Vegan']).map((r) => ({
      ...r,
      sourceId: `${cursor}-${r.sourceId}`,
    }))
    for (const r of recipes) seen.add(`uri-${r.sourceId}`)
    return { recipes, matrixCursor: cursor + 1, pageCursor: null }
  }

  const run = () =>
    runBackfill({ db, matrix: MATRIX, index: {}, buildRecipeDoc, harvestEdamam, cap: 100 })

  const s1 = await run()
  assert.equal(lastCursorSeen, 0)
  assert.equal(s1.matrixCursor, 1)

  const s2 = await run()
  assert.equal(lastCursorSeen, 1) // resumed at the saved cursor
  assert.equal(s2.matrixCursor, 2)
  assert.equal(s2.totalUniqueWritten, 4) // counters accumulate across runs
})

writeTest('runBackfill marks complete once past target and matrix drained', async () => {
  const db = makeFakeDb()
  const harvestEdamam = async ({ seen }) => {
    const recipes = mkSrc('edamam', 3, ['Vegan'])
    for (const r of recipes) seen.add(`uri-${r.sourceId}`)
    return { recipes, matrixCursor: 5, pageCursor: null, exhaustedMatrix: true }
  }
  const summary = await runBackfill({
    db,
    matrix: MATRIX,
    index: {},
    buildRecipeDoc,
    harvestEdamam,
    cap: 100,
    totalTarget: 2, // tiny target so 3 written clears it
  })
  assert.equal(summary.complete, true)
})

writeTest('per-diet counters reflect only committed docs', async () => {
  const db = makeFakeDb()
  const displaySourceRecipes = [
    ...mkSrc('a', 2, ['Vegan', 'Gluten-free']),
    ...mkSrc('b', 1, ['Vegetarian']),
  ]
  const summary = await runBackfill({
    db,
    matrix: MATRIX,
    index: {},
    buildRecipeDoc,
    displaySourceRecipes,
    cap: 100,
  })
  assert.equal(summary.perDietWritten.Vegan, 2)
  assert.equal(summary.perDietWritten['Gluten-free'], 2)
  assert.equal(summary.perDietWritten.Vegetarian, 1)
})
