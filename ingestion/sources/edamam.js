// Edamam Recipe Search source adapter (FULL matrix harvester).
//
// This is the only realistic path to 10K (DESIGN §1): Edamam exposes health +
// diet filters and returns dietLabels, healthLabels, cautions (allergens) and
// 25+ nutrients per recipe. We harvest the diet x cuisine x mealType matrix in
// ingestion/data/diet-matrix.json, paginating each cell via _links.next up to a
// per-query page cap, and dedupe by recipe URI across the WHOLE matrix so the
// returned set is unique even though recipes are multi-labelled.
//
// LEGAL (DESIGN §0): Edamam is LINK-OUT only. We NEVER store the method —
// instructions=null, instructionsExternal=true, publisher set, attribution
// required ("Powered by Edamam"). We store metadata + ingredient *lines* +
// nutrition + labels + the publisher link; the Meal screen renders the
// "View full method on {publisher}" link-out. No scraping anywhere.
//
// Auth: EDAMAM_ID + EDAMAM_KEY (query-string app_id/app_key on v2 type=public).
// If EITHER is unset, pullEdamam() returns [] and logs "Edamam skipped (no
// keys)" — same contract as before; the pipeline carries on with TheMealDB.
//
// Rate limits: we pace requests and back off on HTTP 429 (Edamam's rate-limit
// status), honouring tier page caps so a sweep stays inside the plan's budget.

import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const BASE = 'https://api.edamam.com/api/recipes/v2'

const MATRIX_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'data',
  'diet-matrix.json',
)

// ── Tier / pacing knobs ───────────────────────────────────────────────────────
// Edamam returns 20 hits/page. PAGE_CAP bounds how deep we paginate a single
// matrix cell (diet x cuisine x mealType) via _links.next before moving on —
// this is the "tier page-cap" the matrix references. REQUEST_SPACING_MS is the
// polite floor between any two requests; 429s push it out further (see pace()).
const HITS_PER_PAGE = 20
const DEFAULT_PAGE_CAP = 10 // <= 200 hits per cell before we move on
const REQUEST_SPACING_MS = 350
const MAX_RETRIES = 4

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function credentials() {
  const id = process.env.EDAMAM_ID && process.env.EDAMAM_ID.trim()
  const key = process.env.EDAMAM_KEY && process.env.EDAMAM_KEY.trim()
  return id && key ? { id, key } : null
}

// ── Shared request pacer ──────────────────────────────────────────────────────
// One pacer for the whole adapter so the matrix sweep never exceeds the spacing
// floor. A 429 pushes _nextSlot forward (set inside fetchJson) so subsequent
// calls wait out the cool-down too.
let _nextSlot = 0
async function pace() {
  const now = Date.now()
  const wait = Math.max(0, _nextSlot - now)
  _nextSlot = Math.max(now, _nextSlot) + REQUEST_SPACING_MS
  if (wait > 0) await sleep(wait)
}

/**
 * Fetch JSON with paced requests, 429 back-off and transient-error retry.
 * Returns null (after exhausting retries) rather than throwing, so a single bad
 * cell never aborts the whole sweep — the caller logs via onError and carries on.
 */
async function fetchJson(url, { onError = () => {} } = {}) {
  let lastErr
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    await pace()
    try {
      const res = await fetch(url, { headers: { accept: 'application/json' } })
      if (res.status === 429) {
        // Rate limited: respect Retry-After if present, else exponential back-off.
        const retryAfter = Number(res.headers.get('retry-after'))
        const backoff = Number.isFinite(retryAfter) && retryAfter > 0
          ? retryAfter * 1000
          : 2000 * (attempt + 1)
        _nextSlot = Date.now() + backoff // make concurrent/next calls wait too
        lastErr = new Error(`HTTP 429 (rate limited)`)
        if (attempt < MAX_RETRIES) {
          await sleep(backoff)
          continue
        }
        onError({ stage: 'edamam:429', message: `gave up after ${MAX_RETRIES} retries` })
        return null
      }
      if (res.status === 400) {
        // A malformed cell (e.g. an unsupported filter combo) — skip, don't retry.
        onError({ stage: 'edamam:400', message: `bad request for ${url}` })
        return null
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return await res.json()
    } catch (err) {
      lastErr = err
      if (attempt < MAX_RETRIES) await sleep(500 * (attempt + 1))
    }
  }
  onError({ stage: 'edamam:fetch', message: lastErr ? lastErr.message : 'unknown error' })
  return null
}

// ── Matrix loading ────────────────────────────────────────────────────────────
let _matrixCache = null
async function loadMatrix() {
  if (_matrixCache) return _matrixCache
  const raw = await readFile(MATRIX_PATH, 'utf8')
  _matrixCache = JSON.parse(raw)
  return _matrixCache
}

// ── URL building ──────────────────────────────────────────────────────────────
// We request only the fields we store (smaller payloads, faster pages). The
// `field` param repeats once per field on Edamam v2.
const RETURN_FIELDS = [
  'uri', 'label', 'image', 'images', 'source', 'url', 'shareAs',
  'yield', 'calories', 'totalTime', 'dietLabels', 'healthLabels', 'cautions',
  'ingredientLines', 'cuisineType', 'mealType', 'dishType', 'totalNutrients',
]

/**
 * Build the FIRST-page URL for one matrix cell. Subsequent pages come from
 * `_links.next.href` verbatim (it already carries credentials + the cursor), so
 * we only ever construct page 1 here.
 *
 * @param {{id:string,key:string}} creds
 * @param {object} cell { q, health[], diet[], cuisineType?, mealType?, dishType?, calorieCap? }
 */
function buildFirstPageUrl(creds, cell) {
  const params = new URLSearchParams()
  params.set('type', 'public')
  params.set('app_id', creds.id)
  params.set('app_key', creds.key)
  // Edamam v2 requires a query keyword; the matrix supplies a sensible one.
  params.set('q', cell.q || 'recipe')
  params.set('random', 'false') // stable pagination for dedup-by-URI
  for (const h of cell.health || []) params.append('health', h)
  for (const d of cell.diet || []) params.append('diet', d)
  if (cell.cuisineType) params.append('cuisineType', cell.cuisineType)
  if (cell.mealType) params.append('mealType', cell.mealType)
  if (cell.dishType) params.append('dishType', cell.dishType)
  if (cell.calorieCap) params.set('calories', `0-${cell.calorieCap}`)
  for (const f of RETURN_FIELDS) params.append('field', f)
  return `${BASE}?${params.toString()}`
}

// ── Mapping helpers ───────────────────────────────────────────────────────────
const TITLECASE = (s) =>
  String(s || '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

// Edamam cautions -> the contract's "contains-*" allergen tokens (CONTRACTS §1).
// Anything we don't recognise is kept as a lower-cased "contains-<token>" so the
// verify phase still sees it; buildRecipe re-derives allergens from ingredient
// lines regardless, so this is belt-and-braces metadata.
const CAUTION_TO_ALLERGEN = {
  Gluten: 'contains-gluten',
  Wheat: 'contains-gluten',
  Dairy: 'contains-milk',
  Milk: 'contains-milk',
  Eggs: 'contains-egg',
  Egg: 'contains-egg',
  'Tree-Nuts': 'contains-nuts',
  'Tree Nuts': 'contains-nuts',
  Peanuts: 'contains-peanuts',
  Soy: 'contains-soya',
  Soybeans: 'contains-soya',
  Fish: 'contains-fish',
  Shellfish: 'contains-crustaceans',
  Crustaceans: 'contains-crustaceans',
  Sesame: 'contains-sesame',
  Mustard: 'contains-mustard',
  Celery: 'contains-celery',
  Sulfites: 'contains-sulphites',
  Sulphites: 'contains-sulphites',
}

function mapCautions(cautions) {
  const set = new Set()
  for (const c of cautions || []) {
    set.add(
      CAUTION_TO_ALLERGEN[c] ||
        `contains-${String(c).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`,
    )
  }
  return [...set].sort()
}

const COURSE_BY_MEALTYPE = (mealType, dishType) => {
  const m = (Array.isArray(mealType) ? mealType[0] : mealType) || ''
  const d = (Array.isArray(dishType) ? dishType.join(' ') : dishType) || ''
  if (/breakfast|brunch/i.test(m)) return 'Breakfast'
  if (/dessert/i.test(d)) return 'Dessert'
  if (/side/i.test(d)) return 'Side'
  if (/snack|appetiz|teatime/i.test(m) || /snack|appetiz/i.test(d)) return 'Snack'
  if (/lunch/i.test(m)) return 'Lunch'
  return 'Dinner'
}

// Pull the per-serving nutrition the API gives us (DESIGN §1: nutrition FROM the
// API). totalNutrients is per-recipe; divide by yield (servings). Returns null
// rather than fabricating when the numbers aren't there.
function mapNutrition(r) {
  const servings = r.yield && r.yield > 0 ? r.yield : null
  const tn = r.totalNutrients || {}
  const per = (key) => {
    const node = tn[key]
    if (!node || !Number.isFinite(node.quantity) || !servings) return null
    return node.quantity / servings
  }
  const energyKcal =
    per('ENERC_KCAL') ??
    (r.calories && servings ? r.calories / servings : null)
  if (!Number.isFinite(energyKcal)) return null
  const out = { energyKcal: Math.round(energyKcal) }
  const proteinG = per('PROCNT')
  const fatG = per('FAT')
  const carbsG = per('CHOCDF')
  const sugarsG = per('SUGAR')
  const fibreG = per('FIBTG')
  const sodiumMg = per('NA')
  if (Number.isFinite(proteinG)) out.proteinG = Math.round(proteinG * 10) / 10
  if (Number.isFinite(fatG)) out.fatG = Math.round(fatG * 10) / 10
  if (Number.isFinite(carbsG)) out.carbsG = Math.round(carbsG * 10) / 10
  if (Number.isFinite(sugarsG)) out.sugarsG = Math.round(sugarsG * 10) / 10
  if (Number.isFinite(fibreG)) out.fibreG = Math.round(fibreG * 10) / 10
  if (Number.isFinite(sodiumMg)) out.sodiumMg = Math.round(sodiumMg)
  return out
}

// Best image: prefer a stable medium thumb (REGULAR/SMALL/THUMBNAIL) over the
// raw `image` which can be a large hero.
function pickImage(r) {
  const imgs = r.images || {}
  return (
    (imgs.REGULAR && imgs.REGULAR.url) ||
    (imgs.SMALL && imgs.SMALL.url) ||
    (imgs.THUMBNAIL && imgs.THUMBNAIL.url) ||
    r.image ||
    ''
  )
}

// Extract a stable sourceId from the Edamam URI
// ("http://www.edamam.com/.../recipe_<hash>") so re-runs map to the same doc id.
function sourceIdFromUri(uri) {
  if (!uri) return ''
  const m = String(uri).match(/recipe_([a-z0-9]+)/i)
  return m ? m[1] : String(uri)
}

/**
 * Map an Edamam hit.recipe into the SAME normalised source-recipe shape that
 * mapMeal (themealdb) and mapCurated emit. Edamam-specific invariants:
 *   - instructions: null, instructionsExternal: true (LINK-OUT only)
 *   - publisher + sourceUrl from the publisher link; attributionRequired: true
 *   - imageUrl from the Edamam thumb; dietLabels/healthLabels/allergens(cautions)
 *     and nutrition come FROM the API; rawLines from ingredientLines (combined).
 */
export function mapRecipe(r) {
  const dietLabels = (r.dietLabels || []).map(TITLECASE)
  const healthLabels = (r.healthLabels || []).map(TITLECASE)
  const allergens = mapCautions(r.cautions)

  // Edamam gives one combined ingredient string per line; flag combined:true so
  // buildRecipe parses the whole line and keeps it as the raw text verbatim.
  const rawLines = (r.ingredientLines || [])
    .map((line) => String(line || '').trim())
    .filter(Boolean)
    .map((line) => ({ rawName: line, rawMeasure: '', combined: true }))

  const cuisine = (r.cuisineType && r.cuisineType[0]) || null

  return {
    source: 'edamam',
    sourceId: sourceIdFromUri(r.uri),
    title: (r.label || '').trim(),
    imageUrl: pickImage(r),
    imageAttribution: r.source ? `Image: ${r.source}` : null,
    // The publisher link IS the source/link-out target.
    sourceUrl: r.url || r.shareAs || '',
    instructions: null, // licence: never store the method
    instructionsExternal: true,
    publisher: r.source || 'Edamam',
    cuisine: cuisine ? TITLECASE(cuisine) : null,
    course: COURSE_BY_MEALTYPE(r.mealType, r.dishType),
    category: cuisine ? TITLECASE(cuisine) : 'Edamam',
    dietLabels,
    healthLabels,
    allergens, // mapped from cautions (buildRecipe also re-derives from lines)
    tags: [],
    totalTimeMinutes: r.totalTime && r.totalTime > 0 ? Math.round(r.totalTime) : null,
    servingsBase: r.yield && r.yield > 0 ? Math.round(r.yield) : null,
    nutritionPerServing: mapNutrition(r),
    rawLines,
    attributionRequired: true,
  }
}

// ── Cell enumeration (the matrix) ─────────────────────────────────────────────
// Yields one query cell per (diet x cuisine x mealType), honouring the matrix's
// per-diet param maps and skip rules. The diet's edamamHealth/edamamDiet become
// repeated health=/diet= params; cuisine/mealType are mapped to Edamam's
// vocabularies; an optional dishType hint and calorie cap are applied.
function* enumerateCells(matrix) {
  const cuisineMap = matrix.meta?.edamamCuisineTypeMap || {}
  const mealMap = matrix.meta?.edamamMealTypeMap || {}
  const dishHint = matrix.meta?.edamamDishTypeHint || {}

  for (const diet of matrix.diets || []) {
    const cuisines = diet.cuisines || []
    const mealTypes = diet.mealTypes || []
    for (const cuisine of cuisines) {
      const cuisineType = cuisineMap[cuisine]
      for (const mealType of mealTypes) {
        yield {
          dietKey: diet.key,
          dietLabel: diet.label,
          floor: diet.floor || 0,
          // Keyword: the cuisine name keeps Edamam's required q= meaningful and
          // on-cuisine without over-narrowing.
          q: cuisine,
          health: diet.edamamHealth || [],
          diet: diet.edamamDiet || [],
          cuisineType, // may be undefined for an unmapped cuisine -> omitted
          mealType: mealMap[mealType],
          dishType: dishHint[mealType],
          calorieCap: diet.calorieCap || null,
        }
      }
    }
  }
}

// ── Pagination of one cell ────────────────────────────────────────────────────
// Walk a cell: page 1 from buildFirstPageUrl, then follow _links.next.href up to
// pageCap pages or until the cell stops yielding NEW (un-seen) URIs. Pushes
// mapped recipes into `recipes`, recording each URI in `seen` for whole-matrix
// dedup. Returns the count of NEW recipes added by this cell.
async function harvestCell(creds, cell, { recipes, seen, limit, pageCap, log, onError }) {
  let url = buildFirstPageUrl(creds, cell)
  let added = 0
  for (let page = 0; page < pageCap; page++) {
    if (recipes.length >= limit) break
    const data = await fetchJson(url, { onError })
    if (!data) break
    const hits = data.hits || []
    if (hits.length === 0) break
    for (const hit of hits) {
      if (recipes.length >= limit) break
      const recipe = hit.recipe || {}
      const uri = recipe.uri
      if (!uri || seen.has(uri)) continue // dedup by URI across the WHOLE matrix
      const mapped = mapRecipe(recipe)
      if (!mapped.sourceId || !mapped.title) continue
      seen.add(uri)
      recipes.push(mapped)
      added++
    }
    const next = data._links && data._links.next && data._links.next.href
    if (!next) break
    url = next // verbatim: already carries creds + cursor
  }
  if (added > 0) {
    log(
      `  Edamam [${cell.dietKey}] ${cell.q}/${cell.mealType || 'any'}: +${added}` +
        ` (total ${recipes.length})`,
    )
  }
  return added
}

// ── Top-1000 keyword pass ─────────────────────────────────────────────────────
// Runs FIRST (DESIGN §4): the highest-traffic dishes via the keyword q= endpoint
// so the "Most popular" sort + home rails are dense and QA-able from day one.
// One page per dish (the top hit per dish is plenty); deduped into the same set.
async function harvestTopPriority(creds, dishes, { recipes, seen, limit, log, onError }) {
  let added = 0
  for (const dish of dishes || []) {
    if (recipes.length >= limit) break
    const cell = { q: dish, health: [], diet: [] }
    const url = buildFirstPageUrl(creds, cell)
    const data = await fetchJson(url, { onError })
    if (!data) continue
    for (const hit of data.hits || []) {
      const recipe = hit.recipe || {}
      const uri = recipe.uri
      if (!uri || seen.has(uri)) continue
      const mapped = mapRecipe(recipe)
      if (!mapped.sourceId || !mapped.title) continue
      seen.add(uri)
      recipes.push(mapped)
      added++
      break // one strong hit per priority dish is enough for the rails
    }
  }
  if (added > 0) log(`Edamam top-priority pass: +${added} dishes (total ${recipes.length})`)
  return added
}

/**
 * Pull recipes from Edamam by sweeping the diet x cuisine x mealType matrix in
 * diet-matrix.json, paginating each cell via _links.next up to `pageCap` pages,
 * deduping by recipe URI across the whole sweep. Returns [] (and logs "Edamam
 * skipped (no keys)") when EDAMAM_ID/EDAMAM_KEY are unset — unchanged contract.
 *
 * @param {object}   [opts]
 * @param {number}   [opts.limit=Infinity]   total cap on recipes returned
 * @param {number}   [opts.pageCap]          max pages per matrix cell (tier cap)
 * @param {boolean}  [opts.topPriority=true] run the top-1000 keyword pass first
 * @param {string[]} [opts.diets]            restrict to these diet keys (optional)
 * @param {(msg:string)=>void}   [opts.log]
 * @param {(err:object)=>void}   [opts.onError]
 * @returns {Promise<Array<object>>}  mapped source recipes (unique by URI)
 */
export async function pullEdamam({
  limit = Infinity,
  pageCap = DEFAULT_PAGE_CAP,
  topPriority = true,
  diets = null,
  log = () => {},
  onError = () => {},
} = {}) {
  const creds = credentials()
  if (!creds) {
    log('Edamam skipped (no keys)')
    return []
  }

  const totalCap = Number.isFinite(limit) && limit > 0 ? limit : Infinity

  let matrix
  try {
    matrix = await loadMatrix()
  } catch (err) {
    onError({ stage: 'edamam:matrix', message: `failed to load diet-matrix.json: ${err.message}` })
    return []
  }

  const recipes = []
  const seen = new Set() // recipe URIs, the whole-matrix dedup key

  log(
    `Edamam: sweeping matrix (${(matrix.diets || []).length} diets, ` +
      `pageCap ${pageCap}, cap ${totalCap === Infinity ? 'all' : totalCap})`,
  )

  // 1) Top-priority keyword pass first (dense, QA-able rails).
  if (topPriority && recipes.length < totalCap) {
    try {
      await harvestTopPriority(creds, matrix.topPriorityDishes, {
        recipes,
        seen,
        limit: totalCap,
        log,
        onError,
      })
    } catch (err) {
      onError({ stage: 'edamam:topPriority', message: err.message })
    }
  }

  // 2) The full diet x cuisine x mealType sweep.
  const restrict = diets ? new Set(diets) : null
  // Track per-diet new-recipe counts so a cell that adds nothing for many pages
  // doesn't keep us from honouring the floor across the diet's other cells.
  const perDiet = new Map()
  for (const cell of enumerateCells(matrix)) {
    if (recipes.length >= totalCap) break
    if (restrict && !restrict.has(cell.dietKey)) continue
    try {
      const added = await harvestCell(creds, cell, {
        recipes,
        seen,
        limit: totalCap,
        pageCap,
        log,
        onError,
      })
      perDiet.set(cell.dietKey, (perDiet.get(cell.dietKey) || 0) + added)
    } catch (err) {
      onError({ stage: `edamam:cell:${cell.dietKey}`, message: err.message })
    }
  }

  log(`Edamam: pulled ${recipes.length} unique recipes across the matrix.`)
  return recipes
}

export {
  credentials as edamamCredentials,
  mapCautions,
  mapNutrition,
  enumerateCells,
  loadMatrix as loadDietMatrix,
}
