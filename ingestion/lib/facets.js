// Facet computation — facets/global and facets/diets.
//
// Two modes:
//   • In-run tally  — used by single-pass modes (themealdb/curated/edamam/all)
//     that process the WHOLE corpus each run; counts come straight from the
//     recipe docs built this run.
//   • Live scan     — used by the checkpointed matrix/mega backfill, which only
//     processes a SLICE per run. Facets must reflect the whole live collection,
//     so we project (cuisine, course, dietLabels, healthLabels) off recipes/ and
//     tally that.
//
// facets/global keeps the CONTRACTS §1 shape. facets/diets is the new per-diet
// counts doc so a diet filter + its count is a single client read (DESIGN §5).

import { writeDoc, serverTimestamp } from './firestore.js'

function bump(map, value) {
  if (!value) return
  map.set(value, (map.get(value) || 0) + 1)
}

export function emptyTally() {
  return {
    cuisines: new Map(),
    courses: new Map(),
    dietLabels: new Map(),
    healthLabels: new Map(),
    total: 0,
  }
}

/** Fold one recipe's facet-bearing fields into a tally. */
export function tallyRecipe(tally, recipe) {
  tally.total++
  bump(tally.cuisines, recipe.cuisine)
  bump(tally.courses, recipe.course)
  for (const d of recipe.dietLabels || []) bump(tally.dietLabels, d)
  for (const h of recipe.healthLabels || []) bump(tally.healthLabels, h)
}

function toSortedFacet(map) {
  return [...map.entries()]
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value))
}

/** facets/global doc (CONTRACTS §1). */
export function buildGlobalFacets(tally) {
  return {
    cuisines: toSortedFacet(tally.cuisines),
    courses: toSortedFacet(tally.courses),
    dietLabels: toSortedFacet(tally.dietLabels),
    healthLabels: toSortedFacet(tally.healthLabels),
    totalRecipes: tally.total,
    updatedAt: serverTimestamp(),
  }
}

/**
 * facets/diets doc — one read gives every diet/free-from filter + its count.
 * `diets` and `freeFrom` mirror the matrix labels (dietLabels[] / healthLabels[])
 * so the FilterBar can render counted chips without a count() per chip.
 */
export function buildDietsFacets(tally) {
  return {
    diets: toSortedFacet(tally.dietLabels),
    freeFrom: toSortedFacet(tally.healthLabels),
    totalRecipes: tally.total,
    updatedAt: serverTimestamp(),
  }
}

/**
 * Project the live recipes/ collection and tally facets across the WHOLE
 * collection (used after a checkpointed slice write). Reads only the four
 * facet-bearing fields per doc, not whole recipes.
 *
 * @param {FirebaseFirestore.Firestore} db
 * @returns {Promise<object>} tally
 */
export async function scanLiveFacets(db) {
  const snap = await db
    .collection('recipes')
    .select('cuisine', 'course', 'dietLabels', 'healthLabels')
    .get()
  const tally = emptyTally()
  snap.forEach((d) => tallyRecipe(tally, d.data()))
  return tally
}

/** Write both facet docs from a tally. Returns the doc-write count (2). */
export async function writeFacets(db, tally) {
  await writeDoc(db, 'facets/global', buildGlobalFacets(tally))
  await writeDoc(db, 'facets/diets', buildDietsFacets(tally))
  return 2
}
