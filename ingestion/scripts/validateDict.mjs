// Validate the assembled dictionary and re-measure resolution lift.
import { readFileSync } from 'node:fs'
import { INGREDIENTS, DICTIONARY_SOURCES } from '../data/ingredients.js'
import { SHOP_WALK } from '../lib/shopWalk.js'
import { slugify, buildIndex, resolveCore } from '../pipeline/resolve.js'
import { parseLine } from '../pipeline/parse.js'

console.log('Dictionary sources:', JSON.stringify(DICTIONARY_SOURCES.batches))
console.log(`core ${DICTIONARY_SOURCES.core} + batches -> TOTAL ${DICTIONARY_SOURCES.total} canonical ingredients\n`)

const aisles = new Set(SHOP_WALK)
const slugs = new Map()
let dupSlugs = 0
let badAisle = 0
let missingFields = 0
const REQUIRED = ['canonicalName', 'aisle', 'baseUnit', 'minimumPurchase', 'foodGroup', 'synonyms']
for (const ing of INGREDIENTS) {
  const s = slugify(ing.canonicalName)
  if (slugs.has(s)) { dupSlugs++; console.log('  DUP SLUG:', s, '<-', ing.canonicalName, '&', slugs.get(s)) }
  else slugs.set(s, ing.canonicalName)
  if (!aisles.has(ing.aisle)) { badAisle++; if (badAisle <= 12) console.log('  BAD AISLE:', ing.aisle, '<-', ing.canonicalName) }
  for (const f of REQUIRED) if (ing[f] === undefined || ing[f] === null) { missingFields++; if (missingFields <= 12) console.log('  MISSING', f, '<-', ing.canonicalName); break }
}
console.log(`\nValidation: ${dupSlugs} dup slugs, ${badAisle} bad aisles, ${missingFields} records missing required fields.`)

// Re-measure resolution over the full TheMealDB universe.
const universe = JSON.parse(readFileSync(new URL('../data/themealdb-ingredients.json', import.meta.url)))
const index = buildIndex()
let resolved = 0
const stillMissing = []
for (const { name } of universe) {
  const parsed = parseLine('1', name)
  const r = resolveCore(parsed.core || name, index)
  if (r.resolutionStatus === 'resolved') resolved++
  else stillMissing.push(name)
}
const pct = ((resolved / universe.length) * 100).toFixed(1)
console.log(`\nResolution over ${universe.length} TheMealDB ingredients:`)
console.log(`  BEFORE expansion: 347/927 resolved (37.4%), 580 unresolved`)
console.log(`  AFTER  expansion: ${resolved}/${universe.length} resolved (${pct}%), ${stillMissing.length} unresolved`)
console.log(`\nSample still-unresolved (${stillMissing.length}):`, stillMissing.slice(0, 30).join(', '))
