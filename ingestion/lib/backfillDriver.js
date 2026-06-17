// Quota-safe CHECKPOINTED backfill driver (BACKFILL_PLAN §3, CATALOGUE_10K_DESIGN §5).
//
// Goal: grow the catalogue to ≥10,000 unique recipes while staying on the free
// Firestore (Spark) tier, whose 20,000 writes/day cap forbids a single burst.
// The backfill is therefore SPREAD across many scheduled runs. Each invocation:
//
//   1. READS  system/backfill_progress  { matrixCursor, urisSeen,
//      recipesWritten / totalUniqueWritten, perSource/perDiet, lastRun, … }
//      via lib/backfill.js loadProgress (which rehydrates the sharded URI set).
//   2. RESUMES at matrixCursor (and pageCursor within the current matrix entry).
//   3. WRITES AT MOST `cap` (default 4,500) CHANGED docs — recipes + new
//      ingredients + facet/checkpoint deltas — through ONE shared write budget
//      (lib/firestore.js makeWriteBudget / diffAndWriteCapped), so the cap is
//      NEVER exceeded across all collections combined.
//   4. PERSISTS the advanced cursor + counters (lib/backfill.js saveProgress)
//      AFTER the batches commit, then exits cleanly so the NEXT scheduled run
//      continues exactly where this one stopped.
//
// contentHash diffing keeps steady-state re-runs near-free: an unchanged doc is
// neither re-written nor billed against the cap.
//
// Ownership: this module + lib/firestore.js + lib/backfill.js are the
// checkpointed writer. The Edamam matrix walk is INJECTED (`harvestEdamam`) so
// the driver is unit-testable without keys/network and so ingest.js (a different
// agent's file) can wire sources/edamam.js in without this module importing it.

import {
  makeWriteBudget,
  diffAndWriteCapped,
  writeDoc,
  DEFAULT_WRITE_CAP,
} from './firestore.js'
import { loadProgress, saveProgress } from './backfill.js'

// Head-room above the design's 10,000 floor; absorbs dedupe loss + verify-rejects
// so the audit still clears ≥10,000 unique (BACKFILL_PLAN §1).
export const TOTAL_TARGET = 10200

const noop = () => {}

/** Count of distinct Edamam queries the matrix expands to (diet × cuisine × mealType). */
export function matrixQueryCount(matrix) {
  if (!matrix || !Array.isArray(matrix.diets)) return 0
  let n = 0
  for (const diet of matrix.diets) {
    n += (diet.cuisines?.length || 0) * (diet.mealTypes?.length || 0)
  }
  return n
}

function isThrottled(progress, now = Date.now()) {
  const t = progress.edamamThrottledUntil
  if (!t) return false
  const until = typeof t === 'number' ? t : Date.parse(t)
  return Number.isFinite(until) && now < until
}

/**
 * Run ONE checkpointed backfill pass. Resolves cleanly whether the run filled
 * its whole budget (more to do next run) or finished the catalogue. Throws only
 * on a missing/invalid argument — per-stage failures are routed to onError and
 * the run still persists its checkpoint so the next run resumes safely.
 *
 * @param {object} opts
 * @param {FirebaseFirestore.Firestore} opts.db
 * @param {object} opts.matrix                    diet-matrix.json (parsed)
 * @param {object} opts.index                     resolver index (buildIndex output)
 * @param {(src:object, index:object)=>{id:string,data:object}} opts.buildRecipeDoc
 * @param {Array<{id,data}>} [opts.ingredientDocs]      canonical ingredient docs to upsert
 * @param {Array<object>} [opts.displaySourceRecipes]   TheMealDB + curated source recipes (Layer A+B)
 * @param {(args:object)=>Promise<object>} [opts.harvestEdamam]  injected matrix walker.
 *        Receives { matrix, cursor, pageCursor, seen:Set, maxNew, signalStop, log, onError }
 *        and returns { recipes:[], matrixCursor, pageCursor, throttledUntil?, exhaustedMatrix? }.
 *        Omitted ⇒ Edamam layer skipped (no keys).
 * @param {number} [opts.cap=DEFAULT_WRITE_CAP]    per-run write cap (never exceeded)
 * @param {number} [opts.totalTarget=TOTAL_TARGET]
 * @param {(writtenDocs:Array<{id,data}>)=>object} [opts.computeFacets]  when given, writes facets/global once
 * @param {(data:object)=>void|Promise<void>} [opts.writeHeartbeat]      when given, called with a heartbeat payload
 * @param {Function} [opts.log]
 * @param {Function} [opts.onError]
 * @returns {Promise<object>} run summary (mirrors what was checkpointed)
 */
export async function runBackfill({
  db,
  matrix,
  index,
  buildRecipeDoc,
  ingredientDocs = [],
  displaySourceRecipes = [],
  harvestEdamam = null,
  cap = DEFAULT_WRITE_CAP,
  totalTarget = TOTAL_TARGET,
  computeFacets = null,
  writeHeartbeat = null,
  log = noop,
  onError = noop,
} = {}) {
  if (!db) throw new Error('runBackfill: db is required')
  if (typeof buildRecipeDoc !== 'function') {
    throw new Error('runBackfill: buildRecipeDoc is required')
  }

  const startedAt = Date.now()
  const budget = makeWriteBudget(cap)

  // ── 1. Resume: load checkpoint + rehydrate the deduped URI set. ─────────────
  const { progress, seen } = await loadProgress(db)
  progress.writesThisRun = 0 // per-run counter

  log(
    `Backfill resume: cursor=${progress.matrixCursor} ` +
      `urisSeen=${seen.size} total=${progress.totalUniqueWritten}/${totalTarget} ` +
      `cap=${cap}${progress.complete ? ' [complete]' : ''}`,
  )

  const writtenDocs = [] // every committed recipe doc (for the facet recompute)

  // Tally a committed recipe into the per-source / per-diet / total counters.
  const tally = (doc) => {
    const src = doc.data.source
    if (src) progress.perSourceWritten[src] = (progress.perSourceWritten[src] || 0) + 1
    for (const d of doc.data.dietLabels || []) {
      progress.perDietWritten[d] = (progress.perDietWritten[d] || 0) + 1
    }
    progress.totalUniqueWritten = (progress.totalUniqueWritten || 0) + 1
    progress.writesThisRun += 1
    writtenDocs.push(doc)
  }

  const writeRecipes = async (sourceRecipes, label) => {
    if (!sourceRecipes.length || budget.exhausted) return
    const docs = []
    for (const src of sourceRecipes) {
      try {
        docs.push(buildRecipeDoc(src, index))
      } catch (err) {
        onError({ stage: `backfill:pipeline:${label}`, id: src.sourceId, message: err.message })
      }
    }
    try {
      const res = await diffAndWriteCapped(db, 'recipes', docs, budget)
      for (const d of res.writtenDocs) tally(d)
      log(
        `recipes/ (${label}): wrote ${res.written}, skipped ${res.skipped}` +
          (res.deferred ? `, deferred ${res.deferred} (cap)` : ''),
      )
    } catch (err) {
      onError({ stage: `backfill:write:${label}`, message: err.message })
    }
  }

  // ── 2. Ingredients (dictionary growth — tapers fast, ~0 in steady state). ───
  if (ingredientDocs.length && !budget.exhausted) {
    try {
      const res = await diffAndWriteCapped(db, 'ingredients', ingredientDocs, budget)
      progress.writesThisRun += res.written
      log(
        `ingredients/: wrote ${res.written}, skipped ${res.skipped}` +
          (res.deferred ? `, deferred ${res.deferred} (cap)` : ''),
      )
    } catch (err) {
      onError({ stage: 'backfill:ingredients', message: err.message })
    }
  }

  // ── 3. Display spine + floors: TheMealDB + curated (Layer A+B). ─────────────
  // Idempotent + contentHash-diffed: already-written recipes cost 0; only new /
  // changed ones spend from the budget. On the very first run these may consume
  // most of the cap — fine, Edamam resumes next run from the saved cursor.
  await writeRecipes(displaySourceRecipes, 'display')

  // ── 4. Edamam breadth (Layer C) — paginated matrix walk from the cursor. ────
  let exhaustedMatrix = false
  const totalQueries = matrixQueryCount(matrix)
  const reachedTarget = progress.totalUniqueWritten >= totalTarget

  if (
    harvestEdamam &&
    !budget.exhausted &&
    !reachedTarget &&
    !progress.complete &&
    !isThrottled(progress)
  ) {
    try {
      // Ask for at most the remaining budget of NEW recipes, so the write cap
      // binds before the page cap. The harvester also stops on signalStop()
      // (budget exhausted) and on 429-after-backoff (returns throttledUntil).
      const out = await harvestEdamam({
        matrix,
        cursor: progress.matrixCursor,
        pageCursor: progress.pageCursor,
        seen, // shared Set; the harvester dedups + adds into it
        maxNew: budget.remaining,
        signalStop: () => budget.exhausted,
        log,
        onError,
      })

      await writeRecipes(out?.recipes || [], 'edamam')

      // Advance the cursor to where the harvester stopped so the NEXT run
      // resumes there. (On a thrown harvest the catch leaves the cursor put: the
      // current matrix entry re-harvests, already-written docs diff-skip = 0 cost.)
      if (Number.isFinite(out?.matrixCursor)) progress.matrixCursor = out.matrixCursor
      progress.pageCursor = out?.pageCursor ?? null
      if (out?.throttledUntil) progress.edamamThrottledUntil = out.throttledUntil
      exhaustedMatrix = Boolean(out?.exhaustedMatrix)

      log(`edamam cursor → ${progress.matrixCursor}/${totalQueries}`)
    } catch (err) {
      onError({ stage: 'backfill:edamam', message: err.message })
    }
  } else if (!harvestEdamam) {
    log('Edamam layer skipped (no harvester injected / no keys).')
  }

  // ── 5. Completion. "complete" once past the headroom target AND the matrix is
  // drained. Per-diet floor verification is the audit phase's job — we persist
  // the per-diet counts so the audit reads them without scanning the collection.
  const matrixDrained =
    !harvestEdamam || exhaustedMatrix || (totalQueries > 0 && progress.matrixCursor >= totalQueries)
  if (progress.totalUniqueWritten >= totalTarget && matrixDrained) {
    progress.complete = true
  }

  // ── 6. Facets (1 write) — recomputed from this run's written docs if asked. ─
  if (computeFacets && writtenDocs.length) {
    try {
      await writeDoc(db, 'facets/global', computeFacets(writtenDocs))
      log('facets/global updated.')
    } catch (err) {
      onError({ stage: 'backfill:facets', message: err.message })
    }
  }

  // ── 7. Persist checkpoint AFTER the batches committed (crash-safe). ─────────
  let shardWrites = 0
  try {
    const r = await saveProgress(db, progress, seen)
    shardWrites = r.shardWrites
  } catch (err) {
    onError({ stage: 'backfill:checkpoint', message: err.message })
  }

  // ── 8. Optional heartbeat (system/last_ingestion). ─────────────────────────
  const durationMs = Date.now() - startedAt
  if (writeHeartbeat) {
    try {
      await writeHeartbeat({
        mode: 'backfill',
        recipesWritten: progress.writesThisRun,
        totalUniqueWritten: progress.totalUniqueWritten,
        matrixCursor: progress.matrixCursor,
        complete: progress.complete,
        durationMs,
      })
    } catch (err) {
      onError({ stage: 'backfill:heartbeat', message: err.message })
    }
  }

  const summary = {
    matrixCursor: progress.matrixCursor,
    pageCursor: progress.pageCursor,
    urisSeen: seen.size,
    recipesWrittenThisRun: progress.writesThisRun,
    totalUniqueWritten: progress.totalUniqueWritten,
    writeBudgetSpent: budget.spent,
    writeBudgetCap: budget.cap,
    capReached: budget.exhausted,
    complete: progress.complete,
    shardWrites,
    perSourceWritten: { ...progress.perSourceWritten },
    perDietWritten: { ...progress.perDietWritten },
    durationMs,
  }

  log(
    `Backfill run done: +${summary.recipesWrittenThisRun} recipe writes ` +
      `(budget ${budget.spent}/${budget.cap}${budget.exhausted ? ' CAP' : ''}), ` +
      `total ${summary.totalUniqueWritten}/${totalTarget}` +
      `${summary.complete ? ' — COMPLETE' : ''}, next cursor ${summary.matrixCursor}, ` +
      `${(durationMs / 1000).toFixed(1)}s`,
  )

  return summary
}
