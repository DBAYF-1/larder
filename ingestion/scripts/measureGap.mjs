// One-off measurement: TheMealDB's full ingredient universe + reachable meal
// corpus, and how much our current canonical dictionary already covers.
import { INGREDIENTS } from '../data/ingredients.js'
import { writeFileSync, mkdirSync } from 'node:fs'

const KEY = process.env.THEMEALDB_KEY || '1'
const BASE = `https://www.themealdb.com/api/json/v1/${KEY}`
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const get = async (u) => { await sleep(220); const r = await fetch(u); return r.json() }
const norm = (s) => (s || '').toLowerCase().trim().replace(/\s+/g, ' ')

// 1. Full ingredient universe
const ingRes = await get(`${BASE}/list.php?i=list`)
const tmdbIngredients = (ingRes.meals || [])
  .map((m) => ({ name: m.strIngredient, type: m.strType || null, description: m.strDescription || null }))
  .filter((x) => x.name && x.name.trim())
console.log(`TheMealDB ingredient universe: ${tmdbIngredients.length}`)

// 2. Coverage by our current dictionary (canonicalName + synonyms)
const covered = new Set()
for (const ing of INGREDIENTS) {
  covered.add(norm(ing.canonicalName))
  for (const s of ing.synonyms || []) covered.add(norm(s))
  // singular/plural cheap variants
  covered.add(norm(ing.canonicalName).replace(/s$/, ''))
}
const isCovered = (name) => {
  const n = norm(name)
  return covered.has(n) || covered.has(n.replace(/s$/, '')) || covered.has(n + 's')
}
const uncovered = tmdbIngredients.filter((i) => !isCovered(i.name))
console.log(`Current dictionary: ${INGREDIENTS.length} canonical ingredients`)
console.log(`Already covered (approx): ${tmdbIngredients.length - uncovered.length}`)
console.log(`UNCOVERED TheMealDB ingredients: ${uncovered.length}`)

// Persist target files FIRST (before the slow meal crawl), so agents have them.
mkdirSync(new URL('../data/', import.meta.url), { recursive: true })
writeFileSync(
  new URL('../data/themealdb-ingredients.json', import.meta.url),
  JSON.stringify(tmdbIngredients, null, 2),
)
writeFileSync(
  new URL('../data/_uncovered-ingredients.json', import.meta.url),
  JSON.stringify(uncovered.map((u) => ({ name: u.name, type: u.type })), null, 2),
)
console.log(`Wrote data/themealdb-ingredients.json (${tmdbIngredients.length}) and data/_uncovered-ingredients.json (${uncovered.length}).`)

// 3. Reachable meal corpus: union over categories + areas (throttled)
const cats = (await get(`${BASE}/list.php?c=list`)).meals.map((m) => m.strCategory)
const areas = (await get(`${BASE}/list.php?a=list`)).meals.map((m) => m.strArea)
const ids = new Set()
const byCat = {}
for (const c of cats) {
  const r = await get(`${BASE}/filter.php?c=${encodeURIComponent(c)}`)
  const n = (r.meals || []).length
  byCat[c] = n
  for (const m of r.meals || []) ids.add(m.idMeal)
}
const beforeAreas = ids.size
for (const a of areas) {
  const r = await get(`${BASE}/filter.php?a=${encodeURIComponent(a)}`)
  for (const m of r.meals || []) ids.add(m.idMeal)
}
console.log(`\nCategories: ${cats.length} | Areas: ${areas.length}`)
console.log(`Unique meal IDs via categories: ${beforeAreas}`)
console.log(`Unique meal IDs via categories + areas: ${ids.size}`)
console.log(`Per-category counts:`, byCat)

writeFileSync(
  new URL('../data/_meal-ids.json', import.meta.url),
  JSON.stringify([...ids].sort(), null, 2),
)
console.log(`Wrote data/_meal-ids.json (${ids.size} unique meal IDs).`)
