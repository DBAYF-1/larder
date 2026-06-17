// Larder ingestion CLI.
//
//   node ingest.js [--source <mode>] [--limit N] [--dry-run]
//
// Sources (modes):
//   themealdb | curated | edamam | all   single-pass: process the WHOLE corpus
//                                          each run (idempotent via contentHash).
//   edamam-matrix                          checkpointed matrix harvest (Layer C):
//                                          resume at the saved matrix cursor,
//                                          write up to the per-run cap, persist
//                                          the cursor, exit. Next run resumes.
//   mega                                   themealdb + curated (seed-once, while
//                                          their floors are unmet) + edamam-matrix
//                                          checkpointed remainder — the 10K driver.
//
// Flow (CONTRACTS.md §6):
//   1. init Admin SDK
//   2. upsert ingredients/ from data/ingredients.js  (diff by contentHash)
//   3. pull sources (TheMealDB always; Edamam if keys present)
//   4. run pipeline per meal: parse -> resolve -> normalise -> embedded lines
//   5. derive allergens, parseCompleteness, nutritionPerServing
//   6. diff & batch-write recipes/  (matrix/mega: stop at the per-run write cap)
//   7. recompute facets/global AND facets/diets (per-diet counts, 1 client read)
//   8. write system/last_ingestion heartbeat (+ system/backfill_progress in matrix/mega)
//
// Resilience: a per-meal pipeline failure is caught and recorded; the run never
// aborts on one bad recipe or one network error. The checkpointed backfill
// persists its cursor only AFTER batches commit, so a crash re-harvests at worst
// the current matrix cell (contentHash makes the re-write free).

import {
  initFirestore,
  diffAndWrite,
  commitInBatches,
  loadExistingHashes,
  contentHash,
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
import { loadMatrix, harvestEdamamMatrix } from './sources/edamamMatrix.js'
import { loadProgress, saveProgress } from './lib/backfill.js'
import {
  emptyTally,
  tallyRecipe,
  writeFacets,
  scanLiveFacets,
} from './lib/facets.js'

// ── Tuning (BACKFILL_PLAN §2, §6) ─────────────────────────────────────────────
// Per-run recipe-write cap for the checkpointed backfill. Leaves > 15K/day
// head-room under the Spark 20K writes/day cap for re-syncs and facet churn.
const PER_RUN_WRITE_CAP = 4200
const MATRIX_PAGE_CAP = 600 // per-run Edamam page ceiling (safety net)
const TOTAL_TARGET = 10200 // 10K + head-room for verify-rejects / dedupe loss

const MATRIX_MODES = new Set(['edamam-matrix', 'mega'])

// ── CLI args ────────────────────────────────────────────────────────────────
// Default source is 'all'. --limit is OPTIONAL: omitted => full corpus; given =>
// caps the TOTAL number of TheMealDB meals (and, in matrix/mega, the per-run
// recipe-write cap, so a small --limit gives a small smoke-test run).
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
  --source <mode>   themealdb | curated | edamam | all | edamam-matrix | mega
                    (default: all)
                      all           single-pass full corpus + curated + edamam sampler
                      edamam-matrix checkpointed diet×cuisine×mealType harvest (resumes)
                      mega          themealdb + curated + edamam-matrix → the 10K driver
  --limit <N>       single-pass: TOTAL cap on TheMealDB meals (default: full corpus)
                    matrix/mega:  per-run recipe-write cap (default: ${PER_RUN_WRITE_CAP})
  --dry-run         run the pipeline, print stats, write nothing
  -h, --help        show this help

Env:
  FIREBASE_SERVICE_ACCOUNT        raw service-account JSON      (or)
  GOOGLE_APPLICATION_CREDENTIALS  path to service-account JSON
  THEMEALDB_KEY                   TheMealDB key (default "1")
  EDAMAM_ID / EDAMAM_KEY          Edamam credentials (matrix yields nothing without them)
  EDAMAM_TIER                     "free" => 6s request pacing (default: paid, 600ms)
`

const log = (...a) => console.log(...a)

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    log(HELP)
    return
  }
  if (MATRIX_MODES.has(args.source)) {
    return runMatrix(args)
  }
  return runSinglePass(args)
}

// ── Shared: ingredients upsert ────────────────────────────────────────────────
async function upsertIngredients(db, dryRun) {
  const ingredientDocs = buildIngredientDocs(INGREDIENTS)
  log(`Prepared ${ingredientDocs.length} canonical ingredients.`)
  if (dryRun) return { ingredientDocs, written: 0 }
  const res = await diffAndWrite(db, 'ingredients', ingredientDocs)
  log(`ingredients/: wrote ${res.written}, skipped ${res.skipped} (unchanged).`)
  return { ingredientDocs, written: res.written }
}

// ── Single-pass modes (themealdb | curated | edamam | all) ────────────────────
// Unchanged behaviour: pull the whole corpus, build docs, diff-write, recompute
// facets from THIS run's docs (a full pass sees every recipe).
async function runSinglePass(args) {
  const startedAt = Date.now()
  const errors = []
  const onError = (e) => {
    errors.push(e)
    console.warn('  ! error', JSON.stringify(e))
  }

  const limitLabel = args.limitSet ? args.limit : 'full corpus'
  log(`\nLarder ingestion — source=${args.source} limit=${limitLabel}${args.dryRun ? ' (dry run)' : ''}`)

  const index = buildIndex(INGREDIENTS)

  let db = null
  let ingredientsWritten = 0
  let ingredientDocs = []
  if (!args.dryRun) {
    db = await initFirestore()
    const r = await upsertIngredients(db, false)
    ingredientsWritten = r.written
    ingredientDocs = r.ingredientDocs
  } else {
    ingredientDocs = buildIngredientDocs(INGREDIENTS)
    log(`Prepared ${ingredientDocs.length} canonical ingredients.`)
  }

  // ── Pull sources ───────────────────────────────────────────────────────────
  let sourceRecipes = []
  const want = (s) => args.source === 'all' || args.source === s

  if (want('themealdb')) {
    try {
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
      const edamamCap = Number.isFinite(args.limit) ? args.limit * 4 : 120
      const meals = await pullEdamam({ limit: edamamCap, log, onError })
      sourceRecipes = sourceRecipes.concat(meals)
    } catch (err) {
      onError({ stage: 'pullEdamam', message: err.message })
    }
  }

  log(`Pulled ${sourceRecipes.length} source recipes.`)

  // ── Pipeline ─────────────────────────────────────────────────────────────
  const recipeDocs = []
  let resolvedCount = 0
  const tally = emptyTally()

  for (const src of sourceRecipes) {
    try {
      const doc = buildRecipeDoc(src, index)
      recipeDocs.push(doc)
      if (doc.data.parseCompleteness >= 0.5) resolvedCount++
      tallyRecipe(tally, doc.data)
    } catch (err) {
      onError({ stage: 'pipeline', id: src.sourceId, message: err.message })
    }
  }

  log(`Built ${recipeDocs.length} recipe docs (${resolvedCount} >=50% resolved).`)

  if (args.dryRun) {
    printDryRun(recipeDocs)
    return
  }

  const recipeRes = await diffAndWrite(db, 'recipes', recipeDocs)
  log(`recipes/: wrote ${recipeRes.written}, skipped ${recipeRes.skipped} (unchanged).`)

  await writeFacets(db, tally)
  log('facets/global + facets/diets updated.')

  await writeDoc(db, 'system/last_ingestion', {
    finishedAt: serverTimestamp(),
    source: args.source,
    recipesWritten: recipeRes.written,
    recipesTotal: recipeDocs.length,
    recipesResolved: resolvedCount,
    ingredientsTotal: ingredientDocs.length,
    ingredientsWritten,
    durationMs: Date.now() - startedAt,
    errors: errors.slice(0, 50),
  })
  log(`system/last_ingestion written. Done in ${((Date.now() - startedAt) / 1000).toFixed(1)}s.`)
  if (errors.length) log(`Completed with ${errors.length} non-fatal error(s).`)
}

// ── Matrix / mega modes (checkpointed backfill) ───────────────────────────────
async function runMatrix(args) {
  const startedAt = Date.now()
  const errors = []
  const onError = (e) => {
    errors.push(e)
    console.warn('  ! error', JSON.stringify(e))
  }

  const writeCap = args.limitSet ? args.limit : PER_RUN_WRITE_CAP
  log(`\nLarder ingestion — source=${args.source} (checkpointed) writeCap=${writeCap}${args.dryRun ? ' (dry run)' : ''}`)

  const index = buildIndex(INGREDIENTS)
  const matrix = await loadMatrix()

  // Dry-run: harvest a tiny slice through the pipeline and print, write nothing.
  if (args.dryRun) {
    return matrixDryRun({ matrix, index, writeCap: Math.min(writeCap, 12), log, onError })
  }

  const db = await initFirestore()
  const ing = await upsertIngredients(db, false)
  let writesThisRun = ing.written // ingredient writes count against the budget

  // ── Load checkpoint ────────────────────────────────────────────────────────
  const { progress, seen } = await loadProgress(db)
  log(
    `backfill: cursor=${progress.matrixCursor} seen=${seen.size} ` +
      `total=${progress.totalUniqueWritten} complete=${progress.complete}`,
  )

  // ── Seed-once layers (mega only): themealdb + curated, idempotent ───────────
  let seedWritten = 0
  if (args.source === 'mega') {
    const seedDocs = await pullSeedLayers({ index, log, onError })
    if (seedDocs.length) {
      // Diff-write only the ones whose budget fits; respect the per-run cap.
      seedWritten = await writeCappedDocs(db, 'recipes', seedDocs, writeCap - writesThisRun, {
        onWrite: (doc) => {
          const s = doc.data.source
          progress.perSourceWritten[s] = (progress.perSourceWritten[s] || 0) + 1
          for (const d of doc.data.dietLabels || []) {
            progress.perDietWritten[d] = (progress.perDietWritten[d] || 0) + 1
          }
        },
      })
      writesThisRun += seedWritten
      log(`seed layers (themealdb+curated): wrote ${seedWritten} (budget left ${writeCap - writesThisRun}).`)
    }
  }

  // ── Edamam matrix backfill (resumes at cursor) ──────────────────────────────
  let cursor = progress.matrixCursor || 0
  let pageCursor = progress.pageCursor || null
  let complete = Boolean(progress.complete)
  let throttled = false
  let edamamWritten = 0

  if (complete) {
    log('backfill: already complete — steady-state re-sync only (no harvest).')
  } else if (writeCap - writesThisRun <= 0) {
    log('backfill: per-run write budget consumed by seed layers; Edamam resumes next run.')
  } else {
    const pending = [] // buffer of {id,data} flushed in batches under the cap
    const flush = async () => {
      if (!pending.length) return
      const written = await writeCappedDocs(db, 'recipes', pending.splice(0), Infinity)
      edamamWritten += written
      writesThisRun += written
    }

    const gen = harvestEdamamMatrix({
      matrix,
      startCursor: cursor,
      startPage: pageCursor,
      seen,
      maxPages: MATRIX_PAGE_CAP,
      log,
      onError,
    })

    for await (const env of gen) {
      // Control envelopes carry the resume cursor/pageCursor.
      cursor = env.cursor
      pageCursor = env.pageCursor
      if (env.throttled) {
        throttled = true
        break
      }
      if (env.done) {
        complete = true
        break
      }
      if (env.stop) break // page cap hit; resume mid-cell next run
      if (!env.recipe) continue

      try {
        const doc = buildRecipeDoc(env.recipe, index)
        pending.push(doc)
        for (const d of doc.data.dietLabels || []) {
          progress.perDietWritten[d] = (progress.perDietWritten[d] || 0) + 1
        }
      } catch (err) {
        onError({ stage: 'pipeline', id: env.recipe.sourceId, message: err.message })
        continue
      }

      // Flush periodically and enforce the per-run write cap.
      if (pending.length >= 450) await flush()
      if (writesThisRun + pending.length >= writeCap) {
        await flush()
        log(`backfill: per-run write cap (${writeCap}) reached; checkpoint + exit.`)
        break
      }
      // Stop once we've reached the overall target.
      if (progress.totalUniqueWritten + edamamWritten >= TOTAL_TARGET) {
        await flush()
        complete = true
        log(`backfill: total target (${TOTAL_TARGET}) reached.`)
        break
      }
    }
    await flush()
    progress.perSourceWritten.edamam = (progress.perSourceWritten.edamam || 0) + edamamWritten
    if (throttled) {
      // Skip Edamam on runs before quota likely resets (~24h).
      progress.edamamThrottledUntil = Date.now() + 24 * 60 * 60 * 1000
    }
  }

  // ── Persist checkpoint (AFTER writes committed) ─────────────────────────────
  progress.matrixCursor = cursor
  progress.pageCursor = pageCursor
  progress.writesThisRun = writesThisRun
  // New unique recipes written this run = seed-layer writes + edamam writes
  // (ingredient writes are not recipes and don't count toward the recipe target).
  progress.totalUniqueWritten = (progress.totalUniqueWritten || 0) + seedWritten + edamamWritten
  progress.complete = complete
  const saveRes = await saveProgress(db, progress, seen)
  log(`system/backfill_progress saved (cursor=${cursor}, seen=${seen.size}, sharded=${!saveRes.inlined}).`)

  // ── Facets: scan the LIVE collection (this run wrote only a slice) ──────────
  const tally = await scanLiveFacets(db)
  await writeFacets(db, tally)
  log(`facets/global + facets/diets updated from live scan (${tally.total} recipes).`)

  // ── Heartbeat ───────────────────────────────────────────────────────────────
  await writeDoc(db, 'system/last_ingestion', {
    finishedAt: serverTimestamp(),
    source: args.source,
    recipesWritten: writesThisRun - ing.written,
    edamamWritten,
    ingredientsWritten: ing.written,
    matrixCursor: cursor,
    totalUniqueWritten: progress.totalUniqueWritten,
    complete,
    throttled,
    liveRecipeCount: tally.total,
    durationMs: Date.now() - startedAt,
    errors: errors.slice(0, 50),
  })
  log(
    `Done in ${((Date.now() - startedAt) / 1000).toFixed(1)}s — wrote ${writesThisRun} docs this run` +
      ` (live total ${tally.total}).`,
  )
  if (errors.length) log(`Completed with ${errors.length} non-fatal error(s).`)
}

// Pull + build the seed-once layers (themealdb + curated) as recipe docs.
async function pullSeedLayers({ index, log, onError }) {
  const srcs = []
  try {
    srcs.push(...(await pullTheMealDb({ log, onError })))
  } catch (err) {
    onError({ stage: 'pullTheMealDb', message: err.message })
  }
  try {
    srcs.push(...(await fetchCurated({ log, onError })))
  } catch (err) {
    onError({ stage: 'fetchCurated', message: err.message })
  }
  const docs = []
  for (const src of srcs) {
    try {
      docs.push(buildRecipeDoc(src, index))
    } catch (err) {
      onError({ stage: 'pipeline', id: src.sourceId, message: err.message })
    }
  }
  return docs
}

/**
 * Diff a set of docs against the live collection and write at most `budget` of
 * the CHANGED ones (new or contentHash-different), batched under BATCH_LIMIT.
 * Unchanged docs cost nothing. Returns the number actually written.
 */
async function writeCappedDocs(db, collectionPath, docs, budget, { onWrite } = {}) {
  if (budget <= 0 || !docs.length) return 0
  const existing = await loadExistingHashes(db, collectionPath)
  const changed = []
  for (const { id, data } of docs) {
    const hash = contentHash(data)
    if (existing.get(id) === hash) continue
    changed.push({ id, data: { ...data, contentHash: hash, updatedAt: serverTimestamp() }, _doc: { id, data } })
    if (changed.length >= budget) break
  }
  const writes = changed.map(({ id, data }) => ({ id, data }))
  await commitInBatches(db, collectionPath, writes)
  if (onWrite) for (const c of changed) onWrite(c._doc)
  return writes.length
}

// ── Dry-run printers ──────────────────────────────────────────────────────────
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

async function matrixDryRun({ matrix, index, writeCap, log, onError }) {
  const docs = []
  const seen = new Set()
  const gen = harvestEdamamMatrix({ matrix, seen, maxPages: 3, log, onError })
  for await (const env of gen) {
    if (!env.recipe) {
      if (env.throttled || env.done || env.stop) break
      continue
    }
    try {
      docs.push(buildRecipeDoc(env.recipe, index))
    } catch (err) {
      onError({ stage: 'pipeline', id: env.recipe.sourceId, message: err.message })
    }
    if (docs.length >= writeCap) break
  }
  if (!docs.length) {
    log('\nMatrix dry run: 0 recipes (no Edamam keys, or empty pages). Nothing written.')
    return
  }
  printDryRun(docs)
}

main().catch((err) => {
  console.error('Fatal ingestion error:', err)
  process.exitCode = 1
})
