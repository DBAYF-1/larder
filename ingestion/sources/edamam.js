// Edamam Recipe Search source adapter.
//
// Edamam's licence forbids storing instructions, so for every Edamam recipe we
// set instructions=null and instructionsExternal=true; the app links out to the
// publisher's page. Attribution is required.
//
// Auth: EDAMAM_ID + EDAMAM_KEY. If EITHER is unset, pullEdamam() returns [] and
// logs "Edamam skipped (no keys)" — the pipeline carries on with TheMealDB only.

const BASE = 'https://api.edamam.com/api/recipes/v2'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function credentials() {
  const id = process.env.EDAMAM_ID && process.env.EDAMAM_ID.trim()
  const key = process.env.EDAMAM_KEY && process.env.EDAMAM_KEY.trim()
  return id && key ? { id, key } : null
}

async function fetchJson(url, { retries = 2 } = {}) {
  let lastErr
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { headers: { accept: 'application/json' } })
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
      return await res.json()
    } catch (err) {
      lastErr = err
      if (attempt < retries) await sleep(400 * (attempt + 1))
    }
  }
  throw lastErr
}

// Cuisine/diet queries we sweep when keys are present (kept small).
const QUERIES = [
  { cuisineType: 'British' },
  { cuisineType: 'Italian' },
  { cuisineType: 'Indian' },
  { cuisineType: 'Mexican' },
  { healthLabel: 'vegetarian' },
  { healthLabel: 'vegan' },
]

function buildUrl({ id, key }, query, perQuery) {
  const params = new URLSearchParams({
    type: 'public',
    app_id: id,
    app_key: key,
    random: 'true',
  })
  if (query.cuisineType) params.append('cuisineType', query.cuisineType)
  if (query.healthLabel) params.append('health', query.healthLabel)
  if (query.dietLabel) params.append('diet', query.dietLabel)
  // Edamam requires a query keyword; use a broad one.
  params.set('q', query.cuisineType || query.healthLabel || 'dinner')
  params.set('field', 'uri')
  // Edamam paginates; we just take the first page sized to perQuery (<=100).
  return `${BASE}?${params.toString()}`
}

const TITLECASE = (s) =>
  String(s || '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())

/** Map an Edamam hit.recipe into the normalised source-recipe object. */
export function mapRecipe(r) {
  const dietLabels = (r.dietLabels || []).map(TITLECASE)
  const healthLabels = (r.healthLabels || []).map(TITLECASE)
  const rawLines = (r.ingredientLines || []).map((line) => ({
    rawName: line, // Edamam gives a single combined line; parser handles it
    rawMeasure: line,
    combined: true,
  }))

  const cuisine = (r.cuisineType && r.cuisineType[0]) || null
  const meal = (r.mealType && r.mealType[0]) || ''
  const course = /breakfast/i.test(meal)
    ? 'Breakfast'
    : /lunch/i.test(meal)
      ? 'Lunch'
      : /snack/i.test(meal)
        ? 'Snack'
        : /teatime|dessert/i.test(meal)
          ? 'Dessert'
          : 'Dinner'

  return {
    source: 'edamam',
    sourceId: (r.uri || '').split('#recipe_')[1] || r.uri || '',
    title: (r.label || '').trim(),
    imageUrl: r.image || '',
    imageAttribution: r.source ? `Image: ${r.source}` : null,
    sourceUrl: r.url || r.shareAs || '',
    instructions: null, // licence: never store the method
    instructionsExternal: true,
    publisher: r.source || 'Edamam',
    cuisine: cuisine ? TITLECASE(cuisine) : null,
    course,
    category: cuisine ? TITLECASE(cuisine) : 'Edamam',
    dietLabels,
    healthLabels,
    totalTimeMinutes: r.totalTime && r.totalTime > 0 ? Math.round(r.totalTime) : null,
    servingsBase: r.yield && r.yield > 0 ? Math.round(r.yield) : null,
    nutritionPerServing: r.calories && r.yield
      ? { energyKcal: Math.round(r.calories / r.yield) }
      : null,
    tags: [],
    rawLines,
    attributionRequired: true,
  }
}

/**
 * Pull recipes from Edamam. Returns [] (and logs) when keys are unset.
 *
 * @param {object} opts
 * @param {number} [opts.limit=20] approx total recipes to return
 * @param {(msg:string)=>void} [opts.log]
 * @param {(err:object)=>void} [opts.onError]
 * @returns {Promise<Array<object>>}
 */
export async function pullEdamam({ limit = 20, log = () => {}, onError = () => {} } = {}) {
  const creds = credentials()
  if (!creds) {
    log('Edamam skipped (no keys)')
    return []
  }

  const recipes = []
  const seen = new Set()
  const perQuery = Math.max(1, Math.ceil(limit / QUERIES.length))

  for (const query of QUERIES) {
    if (recipes.length >= limit) break
    try {
      const data = await fetchJson(buildUrl(creds, query, perQuery))
      const hits = (data?.hits || []).slice(0, perQuery)
      for (const hit of hits) {
        if (recipes.length >= limit) break
        const mapped = mapRecipe(hit.recipe || {})
        if (!mapped.sourceId || seen.has(mapped.sourceId)) continue
        seen.add(mapped.sourceId)
        recipes.push(mapped)
      }
      log(`  Edamam ${JSON.stringify(query)}: +${hits.length} (total ${recipes.length})`)
    } catch (err) {
      onError({ stage: 'edamam', message: err.message })
    }
    await sleep(250)
  }

  return recipes
}

export { credentials as edamamCredentials }
