// TheMealDB source adapter.
//
// Flow (FULL corpus):
//   1. list.php?c=list           -> all category names
//   2. list.php?a=list           -> all area (cuisine) names
//   3. filter.php?c={category}   -> meal stubs per category
//      filter.php?a={area}       -> meal stubs per area
//      => union + dedupe meal IDs across BOTH axes (~669 distinct meals)
//   4. lookup.php?i={id}         -> full meal (instructions, 20 ingredient slots)
//
// We map strIngredient1..20 / strMeasure1..20 into raw ingredient lines. The
// free test key "1" works for every endpoint; pass THEMEALDB_KEY to override.
//
// Throttle: TheMealDB allows 60 requests / 10 s. We pace at ~210 ms between
// requests (<= ~5 req/s) and, on a 429, back off and retry — so a full-corpus
// pull stays well inside the rate limit.
//
// Network is resilient: a failed category/area or lookup is logged and skipped,
// never aborting the run. Per-meal failures are surfaced to the caller via
// onError.

const BASE = (key) => `https://www.themealdb.com/api/json/v1/${key}/`

// Minimum spacing between any two requests: ~5 req/s, inside the 60/10s budget.
const REQUEST_SPACING_MS = 210

function apiKey() {
  return process.env.THEMEALDB_KEY && process.env.THEMEALDB_KEY.trim()
    ? process.env.THEMEALDB_KEY.trim()
    : '1'
}

// Polite throttle so a seed run doesn't hammer the free endpoint.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Single shared pacer: every fetch awaits its turn so the whole adapter — across
// categories, areas and lookups — never exceeds REQUEST_SPACING_MS spacing.
let _nextSlot = 0
async function pace() {
  const now = Date.now()
  const wait = Math.max(0, _nextSlot - now)
  _nextSlot = Math.max(now, _nextSlot) + REQUEST_SPACING_MS
  if (wait > 0) await sleep(wait)
}

async function fetchJson(url, { retries = 3 } = {}) {
  let lastErr
  for (let attempt = 0; attempt <= retries; attempt++) {
    await pace()
    try {
      const res = await fetch(url, {
        headers: { accept: 'application/json' },
      })
      if (res.status === 429) {
        // Rate limited: back off harder (the 60/10s window is ~10s wide) and
        // retry. Push the shared pacer forward so concurrent calls wait too.
        const backoff = 1500 * (attempt + 1)
        _nextSlot = Date.now() + backoff
        lastErr = new Error(`HTTP 429 (rate limited) for ${url}`)
        if (attempt < retries) {
          await sleep(backoff)
          continue
        }
        throw lastErr
      }
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
      return await res.json()
    } catch (err) {
      lastErr = err
      if (attempt < retries) await sleep(300 * (attempt + 1))
    }
  }
  throw lastErr
}

/** List all category names (list.php?c=list). */
export async function listCategories(key = apiKey()) {
  const data = await fetchJson(`${BASE(key)}list.php?c=list`)
  return (data?.meals || []).map((m) => m.strCategory).filter(Boolean)
}

/** List all area (cuisine) names (list.php?a=list). */
export async function listAreas(key = apiKey()) {
  const data = await fetchJson(`${BASE(key)}list.php?a=list`)
  return (data?.meals || []).map((m) => m.strArea).filter(Boolean)
}

/** Meal stubs for a category (filter.php?c=). */
export async function listMealsInCategory(category, key = apiKey()) {
  const data = await fetchJson(
    `${BASE(key)}filter.php?c=${encodeURIComponent(category)}`,
  )
  return (data?.meals || []).map((m) => ({
    sourceId: m.idMeal,
    title: m.strMeal,
    imageUrl: m.strMealThumb,
    category,
  }))
}

/** Meal stubs for an area (filter.php?a=). */
export async function listMealsInArea(area, key = apiKey()) {
  const data = await fetchJson(
    `${BASE(key)}filter.php?a=${encodeURIComponent(area)}`,
  )
  return (data?.meals || []).map((m) => ({
    sourceId: m.idMeal,
    title: m.strMeal,
    imageUrl: m.strMealThumb,
    area,
  }))
}

/** Full meal by id (lookup.php?i=). Returns the raw TheMealDB meal object. */
export async function lookupMeal(id, key = apiKey()) {
  const data = await fetchJson(`${BASE(key)}lookup.php?i=${encodeURIComponent(id)}`)
  return data?.meals?.[0] || null
}

/** Extract the strIngredient/strMeasure 1..20 pairs into raw lines. */
export function extractIngredientLines(meal) {
  const lines = []
  for (let i = 1; i <= 20; i++) {
    const name = (meal[`strIngredient${i}`] || '').trim()
    const measure = (meal[`strMeasure${i}`] || '').trim()
    if (!name) continue
    lines.push({ rawName: name, rawMeasure: measure })
  }
  return lines
}

// TheMealDB course is loosely derived from category; map common ones.
const COURSE_BY_CATEGORY = {
  Breakfast: 'Breakfast',
  Dessert: 'Dessert',
  Side: 'Side',
  Starter: 'Starter',
  Vegan: 'Dinner',
  Vegetarian: 'Dinner',
  Beef: 'Dinner',
  Chicken: 'Dinner',
  Lamb: 'Dinner',
  Pork: 'Dinner',
  Seafood: 'Dinner',
  Pasta: 'Dinner',
  Goat: 'Dinner',
  Miscellaneous: 'Dinner',
}

const VEGETARIAN_CATEGORIES = new Set(['Vegetarian', 'Vegan', 'Dessert', 'Pasta', 'Side', 'Starter'])
const VEGAN_CATEGORIES = new Set(['Vegan'])

/**
 * Shape a looked-up TheMealDB meal into the normalised source-recipe object the
 * pipeline consumes (NOT the final Firestore shape — that's assembled in ingest).
 */
export function mapMeal(meal) {
  const category = meal.strCategory || 'Miscellaneous'
  const area = (meal.strArea || '').trim()
  const tags = (meal.strTags || '')
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)

  const dietLabels = []
  if (VEGAN_CATEGORIES.has(category) || tags.includes('Vegan')) dietLabels.push('Vegan')
  if (VEGETARIAN_CATEGORIES.has(category) || tags.includes('Vegetarian')) {
    if (!dietLabels.includes('Vegan')) dietLabels.push('Vegetarian')
  }

  return {
    source: 'themealdb',
    sourceId: meal.idMeal,
    title: (meal.strMeal || '').trim(),
    imageUrl: meal.strMealThumb || '',
    imageAttribution: null,
    sourceUrl: meal.strSource || `https://www.themealdb.com/meal/${meal.idMeal}`,
    instructions: (meal.strInstructions || '').trim() || null,
    instructionsExternal: false,
    publisher: 'TheMealDB',
    cuisine: area || null,
    course: COURSE_BY_CATEGORY[category] || 'Dinner',
    category,
    dietLabels,
    tags,
    youtubeUrl: meal.strYoutube || null,
    rawLines: extractIngredientLines(meal),
  }
}

/**
 * Pull the FULL TheMealDB corpus.
 *
 * IDs are gathered from ALL categories (filter.php?c=) AND ALL areas
 * (filter.php?a=), then deduped — the union covers every meal the free API
 * exposes (~669). Each distinct meal is looked up once. Requests are paced at
 * <= ~5/s (see pace()) with 429 back-off, so a full enumeration stays inside
 * the 60-requests-per-10-seconds limit.
 *
 * @param {object} opts
 * @param {number} [opts.limit=Infinity]  TOTAL cap on meals returned (default:
 *   unlimited = full corpus). Caps the number of lookups, not per-category.
 * @param {number} [opts.maxCategories]    cap categories enumerated (default all)
 * @param {(msg:string)=>void} [opts.log]
 * @param {(err:{stage:string,id?:string,message:string})=>void} [opts.onError]
 * @returns {Promise<Array<object>>} mapped source recipes
 */
export async function pullTheMealDb({
  limit = Infinity,
  maxCategories,
  log = () => {},
  onError = () => {},
} = {}) {
  const key = apiKey()
  const recipes = []
  const totalCap = Number.isFinite(limit) && limit > 0 ? limit : Infinity

  // ── 1. Enumerate categories + areas ───────────────────────────────────────
  let categories = []
  try {
    categories = await listCategories(key)
  } catch (err) {
    onError({ stage: 'listCategories', message: err.message })
    return recipes
  }
  if (maxCategories) categories = categories.slice(0, maxCategories)

  let areas = []
  try {
    areas = await listAreas(key)
  } catch (err) {
    // Areas are a bonus axis; if the listing fails we still pull by category.
    onError({ stage: 'listAreas', message: err.message })
  }

  log(
    `TheMealDB: ${categories.length} categories + ${areas.length} areas ` +
      `(key "${key}", cap ${totalCap === Infinity ? 'all' : totalCap})`,
  )

  // ── 2. Gather + dedupe meal IDs across both axes ───────────────────────────
  // Map id -> {sourceId, category?} so we keep a category hint for the meal
  // (the lookup carries the authoritative strCategory anyway).
  const idMap = new Map()

  for (const category of categories) {
    if (idMap.size >= totalCap) break
    try {
      const stubs = await listMealsInCategory(category, key)
      for (const stub of stubs) {
        if (!stub.sourceId) continue
        if (!idMap.has(stub.sourceId)) idMap.set(stub.sourceId, stub)
      }
      log(`  cat ${category}: ${stubs.length} stubs (${idMap.size} unique so far)`)
    } catch (err) {
      onError({ stage: 'filterCategory', id: category, message: err.message })
    }
  }

  for (const area of areas) {
    if (idMap.size >= totalCap) break
    try {
      const stubs = await listMealsInArea(area, key)
      for (const stub of stubs) {
        if (!stub.sourceId) continue
        if (!idMap.has(stub.sourceId)) idMap.set(stub.sourceId, stub)
      }
      log(`  area ${area}: ${stubs.length} stubs (${idMap.size} unique so far)`)
    } catch (err) {
      onError({ stage: 'filterArea', id: area, message: err.message })
    }
  }

  // Apply the TOTAL cap to the deduped id set before we start looking up.
  let ids = [...idMap.keys()]
  if (Number.isFinite(totalCap)) ids = ids.slice(0, totalCap)
  log(`TheMealDB: ${ids.length} distinct meals to look up.`)

  // ── 3. Look up each distinct meal ──────────────────────────────────────────
  let n = 0
  for (const id of ids) {
    n++
    try {
      const meal = await lookupMeal(id, key)
      if (!meal) {
        onError({ stage: 'lookup', id, message: 'empty meal' })
        continue
      }
      recipes.push(mapMeal(meal))
    } catch (err) {
      onError({ stage: 'lookup', id, message: err.message })
    }
    if (n % 50 === 0) log(`  looked up ${n}/${ids.length} (${recipes.length} mapped)`)
  }

  log(`TheMealDB: pulled ${recipes.length} meals.`)
  return recipes
}

export { apiKey as themealdbKey }
