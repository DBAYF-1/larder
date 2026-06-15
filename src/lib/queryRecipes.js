// Larder — Firestore read wrappers (CONTRACTS.md §2).
//
// This is the ONLY file in src/lib that imports firebase/firestore. Everything
// here is a thin, side-effect-free wrapper around a single composite-index
// query so the Browse screen stays on the Spark free tier (one index per query).
//
// Query plan is bound to the declared composite indexes in
// /firestore.indexes.json:
//   recipes (course ASC, popularity DESC)
//   recipes (cuisine ASC, popularity DESC)
//   recipes (course ASC, totalTimeMinutes ASC)
//   recipes (cuisine ASC, totalTimeMinutes ASC)
//   recipes (dietLabels CONTAINS, popularity DESC)
//   recipes (healthLabels CONTAINS, popularity DESC)
//   recipes (course ASC, dietLabels CONTAINS, popularity DESC)
//
// Free-from filters map to healthLabels array-contains (positive PRESENCE of a
// "…-free" label), NOT allergen absence. Default sort is popularity DESC.
//
// If a requested filter combination has no single composite index, we fall back
// gracefully: pick the single most selective filter that DOES have an index,
// run that, and report the dropped filters via `appliedFallback` so the UI can
// finish the narrowing client-side (and tell the user honestly).

import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore'

// Selectivity ranking for fallback: lower index = more selective, tried first.
// Free-from (a specific "…-free" label) is the most selective, then diet, then
// the broad bucket filters cuisine/course.
const FILTER_SELECTIVITY = ['freeFrom', 'diet', 'cuisine', 'course']

/**
 * Decide which composite index a filter set can use, and return the where()
 * clauses plus the orderBy field. Returns the plan together with any filters we
 * had to drop because no single index covers the combination.
 *
 * @param {{cuisine?:string|null, course?:string|null, diet?:string|null,
 *          freeFrom?:string|null, maxTime?:number|null}} filters
 * @param {'popularity'|'time'} sortKey
 * @returns {{wheres:Array, orderField:string, orderDir:'asc'|'desc',
 *            droppedFilters:string[]}}
 */
function planQuery(filters = {}, sortKey = 'popularity') {
  const f = filters || {}
  const has = (k) => f[k] != null && f[k] !== ''

  const active = []
  if (has('freeFrom')) active.push('freeFrom')
  if (has('diet')) active.push('diet')
  if (has('cuisine')) active.push('cuisine')
  if (has('course')) active.push('course')
  const wantsTimeSort = sortKey === 'time'
  const wantsMaxTime = typeof f.maxTime === 'number' && f.maxTime > 0

  // Map a filter key → its equality/array clause.
  const clauseFor = (key) => {
    switch (key) {
      case 'freeFrom':
        return where('healthLabels', 'array-contains', f.freeFrom)
      case 'diet':
        return where('dietLabels', 'array-contains', f.diet)
      case 'cuisine':
        return where('cuisine', '==', f.cuisine)
      case 'course':
        return where('course', '==', f.course)
      default:
        return null
    }
  }

  // ── Time-sorted / time-bounded queries use the *TimeMinutes indexes ─────────
  // Only course+time and cuisine+time composites exist, so a time sort/range is
  // supported alongside at most ONE of course|cuisine.
  if (wantsTimeSort || wantsMaxTime) {
    let leading = null
    if (has('course')) leading = 'course'
    else if (has('cuisine')) leading = 'cuisine'

    const wheres = []
    const dropped = []
    if (leading) wheres.push(clauseFor(leading))
    if (wantsMaxTime) wheres.push(where('totalTimeMinutes', '<=', f.maxTime))

    // Any active filter other than the chosen leading one is unsupported here.
    for (const key of active) {
      if (key !== leading) dropped.push(key)
    }
    return {
      wheres,
      orderField: 'totalTimeMinutes',
      orderDir: 'asc',
      droppedFilters: dropped,
    }
  }

  // ── Popularity-sorted queries (the default) ─────────────────────────────────
  // Supported single composites: course+pop, cuisine+pop, diet+pop, freeFrom+pop.
  // Supported double composite:  course+diet+pop.
  // Anything richer falls back to the most selective single filter.
  const popField = 'popularity'

  // 0 filters → bare popularity order (collection scan within limit; allowed).
  if (active.length === 0) {
    return { wheres: [], orderField: popField, orderDir: 'desc', droppedFilters: [] }
  }

  // 1 filter → always has a dedicated index.
  if (active.length === 1) {
    return {
      wheres: [clauseFor(active[0])],
      orderField: popField,
      orderDir: 'desc',
      droppedFilters: [],
    }
  }

  // 2 filters → only course+diet has a composite index.
  if (active.length === 2 && active.includes('course') && active.includes('diet')) {
    return {
      wheres: [clauseFor('course'), clauseFor('diet')],
      orderField: popField,
      orderDir: 'desc',
      droppedFilters: [],
    }
  }

  // No composite for this combination → fall back to the single most selective
  // filter we can index, drop the rest (caller narrows client-side).
  const ordered = active.slice().sort(
    (a, b) => FILTER_SELECTIVITY.indexOf(a) - FILTER_SELECTIVITY.indexOf(b),
  )
  const keep = ordered[0]
  const dropped = ordered.slice(1)
  return {
    wheres: [clauseFor(keep)],
    orderField: popField,
    orderDir: 'desc',
    droppedFilters: dropped,
  }
}

/**
 * Page through recipes for the Browse screen.
 *
 * @param {import('firebase/firestore').Firestore} db
 * @param {{filters?:object, sort?:'popularity'|'time', cursor?:any, pageSize?:number}} opts
 * @returns {Promise<{recipes:object[], nextCursor:any, appliedFallback:string[]}>}
 *   `recipes`       page of recipe docs (data merged with id)
 *   `nextCursor`    the last QueryDocumentSnapshot for startAfter; null when the
 *                   page was not full (no further pages).
 *   `appliedFallback` filter keys dropped because no single index covered them;
 *                   empty when the query was fully served by one index.
 */
export async function queryRecipes(db, { filters = {}, sort = 'popularity', cursor = null, pageSize = 24 } = {}) {
  const sortKey = sort === 'time' ? 'time' : 'popularity'
  const plan = planQuery(filters, sortKey)

  const constraints = [
    ...plan.wheres,
    orderBy(plan.orderField, plan.orderDir),
  ]
  if (cursor) constraints.push(startAfter(cursor))
  constraints.push(limit(pageSize))

  const q = query(collection(db, 'recipes'), ...constraints)
  const snap = await getDocs(q)

  const docs = snap.docs
  const recipes = docs.map((d) => ({ id: d.id, ...d.data() }))
  const nextCursor = docs.length === pageSize ? docs[docs.length - 1] : null

  return { recipes, nextCursor, appliedFallback: plan.droppedFilters }
}

/**
 * Read the precomputed facet counts for the filter bar.
 * @param {import('firebase/firestore').Firestore} db
 * @returns {Promise<object|null>} the facets/global doc data, or null if absent.
 */
export async function getFacets(db) {
  const ref = doc(db, 'facets', 'global')
  const snap = await getDoc(ref)
  return snap.exists() ? snap.data() : null
}

/**
 * Read a single recipe by id.
 * @param {import('firebase/firestore').Firestore} db
 * @param {string} id
 * @returns {Promise<object|null>} recipe doc (data merged with id), or null.
 */
export async function getRecipe(db, id) {
  const ref = doc(db, 'recipes', id)
  const snap = await getDoc(ref)
  return snap.exists() ? { id: snap.id, ...snap.data() } : null
}

/**
 * Read many canonical ingredient docs by id, batched, for buildShoppingList.
 * De-duplicates ids, fetches in parallel, and returns a map keyed by id (the
 * exact shape buildShoppingList expects for its `ingredients` argument).
 * Missing ids are simply absent from the map.
 *
 * @param {import('firebase/firestore').Firestore} db
 * @param {string[]} ids
 * @returns {Promise<Record<string, object>>}
 */
export async function getIngredients(db, ids) {
  const unique = [...new Set((ids || []).filter(Boolean))]
  if (unique.length === 0) return {}

  // getDoc is the only public Web SDK read for arbitrary id sets; fetch all in
  // parallel. (Firestore batches these onto a few connections under the hood.)
  const snaps = await Promise.all(
    unique.map((id) => getDoc(doc(db, 'ingredients', id))),
  )

  const out = {}
  for (const snap of snaps) {
    if (snap.exists()) {
      out[snap.id] = { id: snap.id, ...snap.data() }
    }
  }
  return out
}
