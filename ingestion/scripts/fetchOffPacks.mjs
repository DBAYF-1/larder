// Open Food Facts (Layer C) enrichment — fetch real UK pack sizes + barcodes for
// our canonical ingredients. Respectful: single-threaded, ~5s spacing, UK-filtered,
// identifying User-Agent. Resilient + incremental (writes the cache after each hit,
// so a partial run is still useful). Curated typicalPacks remain the source of truth
// for sizes; this adds a representative UK barcode/brand and fills gaps.
import { writeFileSync, existsSync, readFileSync } from 'node:fs'
import { INGREDIENTS } from '../data/ingredients.js'
import { slugify } from '../pipeline/resolve.js'

const OUT = new URL('../data/off-packs.json', import.meta.url)
const UA = 'Larder/1.0 (larder-dbayft; meal-planning shopping lists)'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Parse an OFF `quantity` string ("500 g", "1kg", "1 L", "6 x 400g") to a base
// amount + unit. Returns {grams|ml}. Takes the LAST number+unit (the per-pack size).
function parseQuantity(q) {
  if (!q) return null
  const re = /(\d+(?:[.,]\d+)?)\s*(kg|g|gr|grams?|ml|cl|l|litres?|liters?)\b/gi
  let m, last = null
  while ((m = re.exec(q)) !== null) last = m
  if (!last) return null
  let n = parseFloat(last[1].replace(',', '.'))
  const u = last[2].toLowerCase()
  if (u === 'kg') return { v: n * 1000, unit: 'g' }
  if (/^(g|gr|gram|grams)$/.test(u)) return { v: n, unit: 'g' }
  if (u === 'cl') return { v: n * 10, unit: 'ml' }
  if (/^(l|litre|litres|liter|liters)$/.test(u)) return { v: n * 1000, unit: 'ml' }
  if (u === 'ml') return { v: n, unit: 'ml' }
  return null
}

async function searchOff(term) {
  const url =
    'https://world.openfoodfacts.org/cgi/search.pl?action=process' +
    `&search_terms=${encodeURIComponent(term)}` +
    '&tagtype_0=countries&tag_contains_0=contains&tag_0=united-kingdom' +
    '&sort_by=unique_scans_n&page_size=12&json=1' +
    '&fields=product_name,quantity,brands,code'
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const j = await res.json()
  return j.products || []
}

// Candidates: weighed/poured items where pack rounding matters (not count, not staple).
const candidates = INGREDIENTS.filter(
  (i) => (i.baseUnit === 'g' || i.baseUnit === 'ml') && !i.staple,
)
const LIMIT = Number(process.env.OFF_LIMIT || 220)
const targets = candidates.slice(0, LIMIT)

const cache = existsSync(OUT) ? JSON.parse(readFileSync(OUT)) : {}
console.log(`OFF enrichment: ${targets.length} target ingredients (of ${candidates.length} g/ml non-staple).`)

let hits = 0
for (let i = 0; i < targets.length; i++) {
  const ing = targets[i]
  const slug = slugify(ing.canonicalName)
  if (cache[slug]) continue
  try {
    const products = await searchOff(ing.canonicalName)
    const tally = new Map() // size(base unit) -> {count, sample}
    for (const p of products) {
      const parsed = parseQuantity(p.quantity)
      if (!parsed || parsed.unit !== ing.baseUnit) continue
      if (parsed.v < 5 || parsed.v > 20000) continue
      const key = Math.round(parsed.v)
      const t = tally.get(key) || { count: 0, sample: p }
      t.count++
      tally.set(key, t)
    }
    if (tally.size) {
      const [size, info] = [...tally.entries()].sort((a, b) => b[1].count - a[1].count)[0]
      cache[slug] = {
        canonicalName: ing.canonicalName,
        suggestedSize: size,
        unit: ing.baseUnit,
        offBarcode: info.sample.code || null,
        brand: (info.sample.brands || '').split(',')[0].trim() || null,
        productName: info.sample.product_name || null,
        samples: products.length,
      }
      hits++
    } else {
      cache[slug] = { canonicalName: ing.canonicalName, suggestedSize: null, unit: ing.baseUnit, offBarcode: null, samples: products.length }
    }
  } catch (err) {
    cache[slug] = { canonicalName: ing.canonicalName, error: err.message }
  }
  if (i % 10 === 0 || i === targets.length - 1) {
    writeFileSync(OUT, JSON.stringify(cache, null, 2))
    console.log(`  ${i + 1}/${targets.length} done, ${hits} with pack data (last: ${slug})`)
  }
  await sleep(5200) // ~11.5 req/min — under OFF's limits
}
writeFileSync(OUT, JSON.stringify(cache, null, 2))
console.log(`OFF enrichment complete: ${hits} ingredients enriched with UK pack data -> data/off-packs.json`)
