// Edamam matrix harvester — the link-out breadth layer (Layer C).
//
// Walks the diet × cuisine × mealType matrix declared in data/diet-matrix.json,
// issuing one paginated Edamam Recipe Search query per cell. Recipes are mapped
// with the SAME mapRecipe() the legacy sampler uses (so they stay link-out:
// instructions=null, instructionsExternal=true, publisher set, "Powered by
// Edamam", attributionRequired=true). Dedup is by recipe URI across the whole
// matrix, supplied by the caller (the checkpointed backfill writer) so dedup
// survives across runs.
//
// This module does NOT edit sources/edamam.js — it imports its exported helpers
// (mapRecipe, edamamCredentials) and adds the matrix/pagination machinery the
// quota-safe backfill needs (BACKFILL_PLAN §4).
//
// Auth: EDAMAM_ID + EDAMAM_KEY. If EITHER is unset, harvestEdamamMatrix() yields
// nothing and logs "Edamam matrix skipped (no keys)" — exactly like the sampler.

import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { mapRecipe, edamamCredentials } from './edamam.js'

const BASE = 'https://api.edamam.com/api/recipes/v2'
const __dirname = dirname(fileURLToPath(import.meta.url))
const MATRIX_PATH = join(__dirname, '..', 'data', 'diet-matrix.json')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Per-request pacing (BACKFILL_PLAN §6): 600 ms (~100/min) on paid, 6 s on free.
// EDAMAM_TIER=free forces the slow pace; default assumes a paid plan.
function requestSpacingMs() {
  return (process.env.EDAMAM_TIER || '').trim().toLowerCase() === 'free' ? 6000 : 600
}

let _nextSlot = 0
async function pace() {
  const now = Date.now()
  const wait = Math.max(0, _nextSlot - now)
  _nextSlot = Math.max(now, _nextSlot) + requestSpacingMs()
  if (wait > 0) await sleep(wait)
}

/**
 * GET JSON with 429/5xx handling per BACKFILL_PLAN §4.
 * @returns {Promise<{ok:true, data:object} | {ok:false, throttled:boolean, status:number, message:string}>}
 */
async function fetchPage(url, { onError = () => {} } = {}) {
  const maxAttempts = 5
  let backoff = 2000 // 429 backoff starts at 2s, ×2
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    await pace()
    let res
    try {
      res = await fetch(url, { headers: { accept: 'application/json' } })
    } catch (err) {
      // Network error: short retry, then give up on this query (5xx-style).
      if (attempt < 3) {
        await sleep(1000 * attempt)
        continue
      }
      onError({ stage: 'edamam-matrix', message: `network: ${err.message}` })
      return { ok: false, throttled: false, status: 0, message: err.message }
    }

    if (res.status === 429) {
      const retryAfter = Number(res.headers.get('retry-after'))
      const waitMs = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : backoff
      if (attempt < maxAttempts) {
        await sleep(waitMs)
        backoff *= 2
        continue
      }
      // Sustained 429 after backoff: signal the caller to pause the run.
      return { ok: false, throttled: true, status: 429, message: 'rate limited (429)' }
    }

    if (res.status >= 500) {
      // 5xx: 3 retries with 1s/2s/4s, then skip the query.
      if (attempt <= 3) {
        await sleep(1000 * 2 ** (attempt - 1))
        continue
      }
      onError({ stage: 'edamam-matrix', message: `HTTP ${res.status}` })
      return { ok: false, throttled: false, status: res.status, message: `HTTP ${res.status}` }
    }

    if (!res.ok) {
      onError({ stage: 'edamam-matrix', message: `HTTP ${res.status}` })
      return { ok: false, throttled: false, status: res.status, message: `HTTP ${res.status}` }
    }

    try {
      return { ok: true, data: await res.json() }
    } catch (err) {
      onError({ stage: 'edamam-matrix', message: `bad json: ${err.message}` })
      return { ok: false, throttled: false, status: res.status, message: err.message }
    }
  }
  return { ok: false, throttled: true, status: 429, message: 'exhausted retries' }
}

/** Load + parse the matrix plan (data/diet-matrix.json). */
export async function loadMatrix(path = MATRIX_PATH) {
  const raw = await readFile(path, 'utf8')
  return JSON.parse(raw)
}

// Edamam wants the full recipe fields so mapRecipe can build the doc.
const FIELDS = [
  'uri', 'label', 'image', 'source', 'url', 'shareAs', 'dietLabels',
  'healthLabels', 'cautions', 'ingredientLines', 'cuisineType', 'mealType',
  'dishType', 'totalTime', 'yield', 'calories', 'totalNutrients',
]

/**
 * Build the ordered list of matrix QUERY CELLS from the plan. One cell per
 * (diet × cuisine × mealType). The cursor in system/backfill_progress indexes
 * into THIS list, so the order must be stable across runs.
 *
 * @param {object} matrix  parsed diet-matrix.json
 * @returns {Array<{dietKey,dietLabel,cuisine,mealType,health:string[],diet:string[],calorieCap?:number,estPerQuery:number,floor:number}>}
 */
export function buildQueryCells(matrix) {
  const cells = []
  const cuisineMap = matrix.meta?.edamamCuisineTypeMap || {}
  const mealMap = matrix.meta?.edamamMealTypeMap || {}
  const dishHint = matrix.meta?.edamamDishTypeHint || {}
  for (const diet of matrix.diets || []) {
    for (const cuisine of diet.cuisines || []) {
      for (const mealType of diet.mealTypes || []) {
        if (diet.estPerQuery === 0) continue
        cells.push({
          dietKey: diet.key,
          dietLabel: diet.label,
          cuisine,
          mealType,
          edamamCuisine: cuisineMap[cuisine] || cuisine.toLowerCase(),
          edamamMeal: mealMap[mealType] || 'lunch/dinner',
          dishHint: dishHint[mealType] || null,
          health: diet.edamamHealth || [],
          diet: diet.edamamDiet || [],
          calorieCap: diet.calorieCap || null,
          estPerQuery: diet.estPerQuery || 20,
          floor: diet.floor || 0,
        })
      }
    }
  }
  return cells
}

/** Build the first-page URL for a query cell (random:false for deterministic paging). */
function buildCellUrl(creds, cell) {
  const params = new URLSearchParams({
    type: 'public',
    app_id: creds.id,
    app_key: creds.key,
    random: 'false',
    q: `${cell.cuisine} ${cell.mealType}`.trim(),
  })
  if (cell.edamamCuisine) params.append('cuisineType', cell.edamamCuisine)
  if (cell.edamamMeal) params.append('mealType', cell.edamamMeal)
  if (cell.dishHint) params.append('dishType', cell.dishHint)
  for (const h of cell.health) params.append('health', h)
  for (const d of cell.diet) params.append('diet', d)
  if (cell.calorieCap) params.set('calories', `0-${cell.calorieCap}`)
  for (const f of FIELDS) params.append('field', f)
  return `${BASE}?${params.toString()}`
}

/**
 * Harvest the matrix as an async generator of mapped source recipes, resuming
 * from a cursor. The caller (backfill writer) controls all stop conditions
 * (write cap, total floor) by simply stopping iteration; we surface the cursor
 * via the yielded envelope so it can be persisted.
 *
 * Each yield: { recipe, uri, cell, cursor, pageCursor }
 *   - recipe:     mapped source recipe (mapRecipe output) — or null on a throttle/stop signal
 *   - throttled:  true once a sustained 429 forces the run to pause
 *
 * @param {object} opts
 * @param {object} opts.matrix              parsed diet-matrix.json
 * @param {number} [opts.startCursor=0]     resume index into buildQueryCells()
 * @param {string|null} [opts.startPage]    resume _links.next URL within the start cell
 * @param {Set<string>} [opts.seen]         URIs already harvested (cross-run dedup)
 * @param {number} [opts.maxPages=600]      per-run page cap (safety ceiling)
 * @param {(msg:string)=>void} [opts.log]
 * @param {(err:object)=>void} [opts.onError]
 */
export async function* harvestEdamamMatrix({
  matrix,
  startCursor = 0,
  startPage = null,
  seen = new Set(),
  maxPages = 600,
  log = () => {},
  onError = () => {},
} = {}) {
  const creds = edamamCredentials()
  if (!creds) {
    log('Edamam matrix skipped (no keys)')
    return
  }

  const cells = buildQueryCells(matrix)
  let pagesFetched = 0

  for (let cursor = startCursor; cursor < cells.length; cursor++) {
    const cell = cells[cursor]
    let pageUrl = cursor === startCursor && startPage ? startPage : buildCellUrl(creds, cell)
    let yieldedThisCell = 0

    // Paginate this cell until estPerQuery met, no next link, or page cap.
    while (pageUrl) {
      if (pagesFetched >= maxPages) {
        log(`Edamam matrix: hit per-run page cap (${maxPages}); pausing at cursor ${cursor}.`)
        // Resume mid-cell next run.
        yield { recipe: null, stop: true, cursor, pageCursor: pageUrl }
        return
      }

      const result = await fetchPage(pageUrl, { onError })
      pagesFetched++

      if (!result.ok) {
        if (result.throttled) {
          log(`Edamam matrix: throttled at cursor ${cursor}; checkpoint + exit.`)
          yield { recipe: null, throttled: true, cursor, pageCursor: pageUrl }
          return
        }
        // 5xx/other: skip this cell, advance the cursor.
        break
      }

      const hits = result.data?.hits || []
      for (const hit of hits) {
        const r = hit.recipe || {}
        const uri = r.uri || ''
        if (!uri || seen.has(uri)) continue
        seen.add(uri)
        const recipe = mapRecipe(r)
        if (!recipe.sourceId) continue
        yieldedThisCell++
        // Next cell starts fresh; report this cell's page link for resume.
        const nextPage = result.data?._links?.next?.href || null
        yield { recipe, uri, cell, cursor, pageCursor: nextPage }
      }

      const nextHref = result.data?._links?.next?.href || null
      if (!nextHref || yieldedThisCell >= cell.estPerQuery) {
        pageUrl = null // move to next cell
      } else {
        pageUrl = nextHref
      }
    }

    if ((cursor + 1) % 25 === 0) {
      log(`  Edamam matrix: ${cursor + 1}/${cells.length} cells swept (${pagesFetched} pages).`)
    }
  }

  log(`Edamam matrix: full sweep complete (${cells.length} cells, ${pagesFetched} pages).`)
  // Signal completion: cursor past the end.
  yield { recipe: null, done: true, cursor: cells.length, pageCursor: null }
}
