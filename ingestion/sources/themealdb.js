// TheMealDB source adapter.
//
// Flow:
//   1. list.php?c=list           -> all category names
//   2. filter.php?c={category}   -> meal stubs (id, name, thumb) per category
//   3. lookup.php?i={id}         -> full meal (instructions, 20 ingredient slots)
//
// We map strIngredient1..20 / strMeasure1..20 into raw ingredient lines. The
// free test key "1" works for every endpoint; pass THEMEALDB_KEY to override.
//
// Network is resilient: a failed category or lookup is logged and skipped, never
// aborting the run. Per-meal failures are surfaced to the caller via onError.

const BASE = (key) => `https://www.themealdb.com/api/json/v1/${key}/`

function apiKey() {
  return process.env.THEMEALDB_KEY && process.env.THEMEALDB_KEY.trim()
    ? process.env.THEMEALDB_KEY.trim()
    : '1'
}

// Polite throttle so a seed run doesn't hammer the free endpoint.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function fetchJson(url, { retries = 2 } = {}) {
  let lastErr
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { accept: 'application/json' },
      })
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
 * Pull meals from TheMealDB.
 *
 * @param {object} opts
 * @param {number} [opts.limit=8]   max meals PER CATEGORY (keeps seed runs small)
 * @param {number} [opts.maxCategories]  cap categories (default all)
 * @param {(msg:string)=>void} [opts.log]
 * @param {(err:{stage:string,id?:string,message:string})=>void} [opts.onError]
 * @returns {Promise<Array<object>>} mapped source recipes
 */
export async function pullTheMealDb({
  limit = 8,
  maxCategories,
  log = () => {},
  onError = () => {},
} = {}) {
  const key = apiKey()
  const recipes = []
  const seen = new Set()

  let categories = []
  try {
    categories = await listCategories(key)
  } catch (err) {
    onError({ stage: 'listCategories', message: err.message })
    return recipes
  }
  if (maxCategories) categories = categories.slice(0, maxCategories)
  log(`TheMealDB: ${categories.length} categories (key "${key}", limit ${limit}/category)`)

  for (const category of categories) {
    let stubs = []
    try {
      stubs = await listMealsInCategory(category, key)
    } catch (err) {
      onError({ stage: 'filter', id: category, message: err.message })
      continue
    }

    const take = stubs.slice(0, limit)
    for (const stub of take) {
      if (seen.has(stub.sourceId)) continue
      seen.add(stub.sourceId)
      try {
        const meal = await lookupMeal(stub.sourceId, key)
        if (!meal) {
          onError({ stage: 'lookup', id: stub.sourceId, message: 'empty meal' })
          continue
        }
        recipes.push(mapMeal(meal))
      } catch (err) {
        onError({ stage: 'lookup', id: stub.sourceId, message: err.message })
      }
      await sleep(120) // gentle pacing
    }
    log(`  ${category}: +${take.length} meals (total ${recipes.length})`)
  }

  return recipes
}

export { apiKey as themealdbKey }
