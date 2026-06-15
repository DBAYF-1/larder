// Larder ingestion CLI.
//
//   node ingest.js [--source themealdb|curated|edamam|all] [--limit N] [--dry-run]
//
// Flow (CONTRACTS.md §6):
//   1. init Admin SDK
//   2. upsert ingredients/ from data/ingredients.js  (diff by contentHash)
//   3. pull sources (TheMealDB always; Edamam if keys present)
//   4. run pipeline per meal: parse -> resolve -> normalise -> embedded lines
//   5. derive allergens, parseCompleteness, nutritionPerServing
//   6. diff & batch-write recipes/
//   7. recompute facets/global
//   8. write system/last_ingestion heartbeat
//
// Resilience: a per-meal pipeline failure is caught and recorded; the run never
// aborts on one bad recipe or one network error.

import {
  initFirestore,
  diffAndWrite,
  writeDoc,
  serverTimestamp,
} from './lib/firestore.js'
import { INGREDIENTS } from './data/ingredients.js'
import { buildIngredientDocs } from './pipeline/ingredientsDoc.js'
import { buildRecipeDoc } from './pipeline/buildRecipe.js'
import { buildIndex } from './pipeline/resolve.js'
import { pullTheMealDb } from './sources/themealdb.js'
import { fetchCurated } from './sources/curated.js'
import { pullEdamam } from './sources/edamam.js'

// ── CLI args ────────────────────────────────────────────────────────────────
// Default source is 'all' (full corpus + curated + Edamam-if-keyed). --limit is
// OPTIONAL now: when omitted, TheMealDB pulls its full corpus; when given, it
// caps the TOTAL number of TheMealDB meals.
function parseArgs(argv) {
  const args = { source: 'all', limit: Infinity, limitSet: false, dryRun: false }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--source') args.source = argv[++i]
    else if (a === '--limit') {
      args.limit = Number(argv[++i])
      args.limitSet = true
    } else if (a === '--dry-run' || a === '--dryRun') args.dryRun = true
    else if (a === '--help' || a === '-h') args.help = true
  }
  if (args.limitSet && (!Number.isFinite(args.limit) || args.limit <= 0)) {
    args.limit = Infinity
    args.limitSet = false
  }
  return args
}

const HELP = `Larder ingestion

Usage: node ingest.js [options]

Options:
  --source <themealdb|curated|edamam|all>  source(s) to pull (default: all)
  --limit <N>                      TOTAL cap on TheMealDB meals (default: full corpus)
  --dry-run                        run the pipeline, print stats, write nothing
  -h, --help                       show this help

Env:
  FIREBASE_SERVICE_ACCOUNT   raw service-account JSON      (or)
  GOOGLE_APPLICATION_CREDENTIALS  path to service-account JSON
  THEMEALDB_KEY              TheMealDB key (default "1")
  EDAMAM_ID / EDAMAM_KEY     Edamam credentials (optional)
`

const log = (...a) => console.log(...a)

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    log(HELP)
    return
  }

  const startedAt = Date.now()
  const errors = []
  const onError = (e) => {
    errors.push(e)
    console.warn('  ! error', JSON.stringify(e))
  }

  const limitLabel = args.limitSet ? args.limit : 'full corpus'
  log(`\nLarder ingestion — source=${args.source} limit=${limitLabel}${args.dryRun ? ' (dry run)' : ''}`)

  // Build the resolver index once (shared by every recipe).
  const index = buildIndex(INGREDIENTS)

  // ── 1+2. Ingredients ──────────────────────────────────────────────────────
  const ingredientDocs = buildIngredientDocs(INGREDIENTS)
  log(`Prepared ${ingredientDocs.length} canonical ingredients.`)

  let db = null
  if (!args.dryRun) {
    db = await initFirestore()
    const res = await diffAndWrite(db, 'ingredients', ingredientDocs)
    log(`ingredients/: wrote ${res.written}, skipped ${res.skipped} (unchanged).`)
  }

  // ── 3. Pull sources ───────────────────────────────────────────────────────
  let sourceRecipes = []
  const want = (s) => args.source === 'all' || args.source === s

  if (want('themealdb')) {
    try {
      // --limit caps the TheMealDB TOTAL; omitted => full corpus (Infinity).
      const meals = await pullTheMealDb({ limit: args.limit, log, onError })
      sourceRecipes = sourceRecipes.concat(meals)
    } catch (err) {
      onError({ stage: 'pullTheMealDb', message: err.message })
    }
  }
  if (want('curated')) {
    try {
      const meals = await fetchCurated({ log, onError })
      sourceRecipes = sourceRecipes.concat(meals)
    } catch (err) {
      onError({ stage: 'fetchCurated', message: err.message })
    }
  }
  if (want('edamam')) {
    try {
      // Edamam stays wired but only runs when EDAMAM_ID/KEY are set (it returns
      // [] and logs "Edamam skipped (no keys)" otherwise — exactly as before).
      const edamamCap = Number.isFinite(args.limit) ? args.limit * 4 : 120
      const meals = await pullEdamam({ limit: edamamCap, log, onError })
      sourceRecipes = sourceRecipes.concat(meals)
    } catch (err) {
      onError({ stage: 'pullEdamam', message: err.message })
    }
  }

  log(`Pulled ${sourceRecipes.length} source recipes.`)

  // ── 4+5. Pipeline ─────────────────────────────────────────────────────────
  const recipeDocs = []
  let resolvedCount = 0
  const facetTally = {
    cuisines: new Map(),
    courses: new Map(),
    dietLabels: new Map(),
    healthLabels: new Map(),
  }

  for (const src of sourceRecipes) {
    try {
      const doc = buildRecipeDoc(src, index)
      recipeDocs.push(doc)
      if (doc.data.parseCompleteness >= 0.5) resolvedCount++
      tallyFacets(facetTally, doc.data)
    } catch (err) {
      onError({ stage: 'pipeline', id: src.sourceId, message: err.message })
    }
  }

  log(`Built ${recipeDocs.length} recipe docs (${resolvedCount} >=50% resolved).`)

  if (args.dryRun) {
    printDryRun(recipeDocs)
    return
  }

  // ── 6. Write recipes ──────────────────────────────────────────────────────
  const recipeRes = await diffAndWrite(db, 'recipes', recipeDocs)
  log(`recipes/: wrote ${recipeRes.written}, skipped ${recipeRes.skipped} (unchanged).`)

  // ── 7. Facets ─────────────────────────────────────────────────────────────
  const facets = buildFacetsDoc(facetTally, recipeDocs.length)
  await writeDoc(db, 'facets/global', facets)
  log('facets/global updated.')

  // ── 8. Heartbeat ──────────────────────────────────────────────────────────
  await writeDoc(db, 'system/last_ingestion', {
    finishedAt: serverTimestamp(),
    source: args.source,
    recipesWritten: recipeRes.written,
    recipesTotal: recipeDocs.length,
    recipesResolved: resolvedCount,
    ingredientsTotal: ingredientDocs.length,
    durationMs: Date.now() - startedAt,
    errors: errors.slice(0, 50), // cap so the doc stays small
  })
  log(`system/last_ingestion written. Done in ${((Date.now() - startedAt) / 1000).toFixed(1)}s.`)
  if (errors.length) log(`Completed with ${errors.length} non-fatal error(s).`)
}

// ── Facet helpers ─────────────────────────────────────────────────────────
function bump(map, value) {
  if (!value) return
  map.set(value, (map.get(value) || 0) + 1)
}

function tallyFacets(tally, recipe) {
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

function buildFacetsDoc(tally, totalRecipes) {
  return {
    cuisines: toSortedFacet(tally.cuisines),
    courses: toSortedFacet(tally.courses),
    dietLabels: toSortedFacet(tally.dietLabels),
    healthLabels: toSortedFacet(tally.healthLabels),
    totalRecipes,
    updatedAt: serverTimestamp(),
  }
}

function printDryRun(recipeDocs) {
  const sample = recipeDocs.slice(0, 3)
  for (const { id, data } of sample) {
    log(`\n── ${data.title} (${id})`)
    log(`   completeness ${(data.parseCompleteness * 100).toFixed(0)}% | allergens: ${data.allergens.join(', ') || 'none'}`)
    for (const line of data.ingredients.slice(0, 8)) {
      log(
        `   • ${line.raw}  ->  ${line.canonicalName || '[review]'} ` +
          `${line.quantityInBaseUnit ?? '?'}${line.baseUnit || ''} (${line.resolutionStatus})`,
      )
    }
  }
  const avg =
    recipeDocs.reduce((s, d) => s + d.data.parseCompleteness, 0) /
    (recipeDocs.length || 1)
  log(`\nDry run: ${recipeDocs.length} recipes, mean completeness ${(avg * 100).toFixed(1)}%. Nothing written.`)
}

main().catch((err) => {
  console.error('Fatal ingestion error:', err)
  process.exitCode = 1
})
