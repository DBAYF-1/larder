// Precise gap: run the REAL parse->resolve pipeline over every TheMealDB
// ingredient name; the ones that come back needsReview are the genuine
// dictionary gaps (prep-variants like "Chopped Onion" resolve already and are
// excluded). Bucket the genuine gaps into aisle-coherent batches for agents.
import { readFileSync, writeFileSync } from 'node:fs'
import { parseLine } from '../pipeline/parse.js'
import { buildIndex, resolveCore } from '../pipeline/resolve.js'

const universe = JSON.parse(readFileSync(new URL('../data/themealdb-ingredients.json', import.meta.url)))
const index = buildIndex()

const unresolved = []
for (const { name, type } of universe) {
  const parsed = parseLine('1', name) // pretend "1 {name}" so the core is the name
  const core = parsed.core || name
  const r = resolveCore(core, index)
  if (r.resolutionStatus !== 'resolved') unresolved.push({ name, core, type: type || null })
}
console.log(`Universe: ${universe.length} | genuinely unresolved: ${unresolved.length}`)

// Map TheMealDB type -> one of 10 aisle-coherent batches.
const BATCH_OF = (type, name) => {
  const t = (type || '').toLowerCase()
  const n = name.toLowerCase()
  if (/(spice|seasoning|herb)/.test(t)) return 'spices'
  if (/(sauce|dressing|stock|preserve|condiment|paste)/.test(t)) return 'pantry'
  if (/(meat|poultry)/.test(t)) return 'meat'
  if (/(fish|seafood)/.test(t)) return 'seafood'
  if (/(dairy|cheese|curd|fat)/.test(t)) return 'dairy'
  if (/(fruit|juice)/.test(t)) return 'fruit'
  if (/(vegetable|mushroom|sedge)/.test(t)) return 'produce'
  if (/(grain|rice|pasta|cereal|bread|pastry|flour)/.test(t)) return 'baking'
  if (/(legume|bean|pulse|nut)/.test(t)) return 'pantry'
  if (/(drink|spirit|wine|liqueur|beverage|alcohol)/.test(t)) return 'drinks'
  if (/(confection|sugar|chocolate|syrup|treacle)/.test(t)) return 'baking'
  // type (none): heuristic on the name
  if (/(salt|pepper|powder|seed|masala|cumin|paprika|chilli|chili|spice|cinnamon|nutmeg|clove|cardamom|saffron|turmeric|oregano|thyme|basil|rosemary|sage|bay)/.test(n)) return 'spices'
  if (/(sauce|ketchup|mustard|mayo|vinegar|oil|paste|chutney|jam|honey|stock|gravy)/.test(n)) return 'pantry'
  if (/(beef|pork|lamb|chicken|bacon|sausage|ham|steak|mince|chorizo|veal|duck|turkey|gammon|brisket|fillet)/.test(n)) return 'meat'
  if (/(fish|salmon|tuna|prawn|shrimp|cod|haddock|crab|squid|mussel|anchov|mackerel|sardine|trout)/.test(n)) return 'seafood'
  if (/(cheese|cream|milk|yogurt|yoghurt|butter|curd)/.test(n)) return 'dairy'
  if (/(apple|berry|lemon|lime|orange|mango|banana|peach|plum|cherry|grape|melon|pear|fruit|pineapple|coconut)/.test(n)) return 'fruit'
  if (/(rice|pasta|noodle|flour|bread|oat|dough|pastry|cake|biscuit|sugar|chocolate|treacle|syrup)/.test(n)) return 'baking'
  if (/(wine|beer|brandy|rum|whisky|vodka|gin|liqueur|juice|cola|coffee|tea|water|stock)/.test(n)) return 'drinks'
  if (/(onion|potato|carrot|tomato|pepper|garlic|cabbage|spinach|lettuce|bean|pea|leek|celery|broccoli|courgette|aubergine|squash|pumpkin|mushroom|chilli|ginger|herb|parsley|coriander|veg)/.test(n)) return 'produce'
  return 'other'
}

const AISLE_OF = {
  produce: 'Produce', fruit: 'Produce', meat: 'Meat & Fish', seafood: 'Meat & Fish',
  dairy: 'Dairy & Eggs', spices: 'Herbs & Spices', baking: 'Dry & Baking',
  pantry: 'Tinned & Jarred', drinks: 'Drinks', other: 'Other',
}
const groups = { produce: [], fruit: [], meat: [], seafood: [], dairy: [], spices: [], baking: [], pantry: [], drinks: [], other: [] }
for (const u of unresolved) groups[BATCH_OF(u.type, u.name)].push(u.name)
for (const k of Object.keys(groups)) groups[k].sort()

// Split each group into sub-batches of <= 50 for uniform agent quality.
const MAX = 50
const batches = {}
for (const [g, names] of Object.entries(groups)) {
  const parts = Math.max(1, Math.ceil(names.length / MAX))
  const per = Math.ceil(names.length / parts)
  for (let i = 0; i < parts; i++) {
    const slice = names.slice(i * per, (i + 1) * per)
    if (!slice.length) continue
    const key = parts === 1 ? g : `${g}-${i + 1}`
    batches[key] = { aisle: AISLE_OF[g], names: slice }
  }
}
writeFileSync(new URL('../data/_batches.json', import.meta.url), JSON.stringify(batches, null, 2))
const keys = Object.entries(batches).map(([k, v]) => ({ key: k, aisle: v.aisle, count: v.names.length }))
console.log(`Final batches (${keys.length}):`)
for (const k of keys) console.log(`  ${k.key} [${k.aisle}]: ${k.count}`)
console.log('\nargs JSON for the workflow:')
console.log(JSON.stringify(keys))
console.log('\nWrote data/_batches.json')
