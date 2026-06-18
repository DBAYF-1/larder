// One-off / resumable CLI to populate data/dish-images.json with real Wikimedia
// photos for the curated dishes. Token-free, deterministic, and a good Wikipedia
// citizen: ~1 request/second, single-threaded, identifying User-Agent.
//
// Usage:
//   node scripts/fetchDishImages.mjs            # fetch every uncached title
//   node scripts/fetchDishImages.mjs --limit 5  # small test run (5 new fetches)
//
// It loads ALL curated recipe titles by importing every data/curated/*.js
// (each `export default` array). For each title NOT already present in
// data/dish-images.json it calls imageForDish() and writes the result back
// incrementally — a found image as { url, attribution, pageUrl } or `null` to
// record "checked, none found" so the title is never re-fetched. Re-running the
// script therefore only ever fetches the still-uncached titles.

import { readdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'
import { imageForDish } from '../sources/foodImages.js'
import { slugify } from '../pipeline/resolve.js'

const HERE = dirname(fileURLToPath(import.meta.url))
const CURATED_DIR = join(HERE, '..', 'data', 'curated')
const CACHE_PATH = join(HERE, '..', 'data', 'dish-images.json')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// ~1 request/second. imageForDish may make up to ~3 sub-requests for a single
// title (alias + primary + fallback); spacing per title keeps us well-behaved.
const THROTTLE_MS = 1100

function parseLimit() {
  const i = process.argv.indexOf('--limit')
  if (i === -1) return Infinity
  const n = Number(process.argv[i + 1])
  return Number.isFinite(n) && n > 0 ? n : Infinity
}

function loadCache() {
  try {
    if (!existsSync(CACHE_PATH)) return {}
    const parsed = JSON.parse(readFileSync(CACHE_PATH, 'utf8'))
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

function saveCache(cache) {
  writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2) + '\n')
}

// Collect every curated recipe title, de-duplicated by slug (the cache key).
async function loadCuratedTitles() {
  const files = readdirSync(CURATED_DIR)
    .filter((f) => f.endsWith('.js'))
    .sort()
  const bySlug = new Map() // slug -> title (first-seen wins; titles are equal anyway)
  for (const f of files) {
    const mod = await import(pathToFileURL(join(CURATED_DIR, f)).href)
    const recipes = mod.default || mod.recipes || []
    for (const r of recipes) {
      const title = r && r.title ? String(r.title).trim() : ''
      if (!title) continue
      const slug = slugify(title)
      if (slug && !bySlug.has(slug)) bySlug.set(slug, title)
    }
  }
  return { titles: [...bySlug.values()], fileCount: files.length }
}

async function main() {
  const limit = parseLimit()
  const cache = loadCache()
  const { titles, fileCount } = await loadCuratedTitles()

  // Only the titles not yet recorded in the cache (present key => done, even null).
  const pending = titles.filter((t) => !(slugify(t) in cache))

  console.log(
    `Curated titles: ${titles.length} unique from ${fileCount} sets. ` +
      `Already cached: ${titles.length - pending.length}. To fetch: ${pending.length}` +
      (limit === Infinity ? '' : ` (capped at ${limit})`) +
      '.',
  )

  let fetched = 0
  let found = 0
  for (const title of pending) {
    if (fetched >= limit) break
    const slug = slugify(title)
    const result = await imageForDish(title) // null when nothing found
    cache[slug] = result // store the image or null ("checked, none found")
    saveCache(cache) // incremental — a partial run is still useful + resumable
    fetched++
    if (result) found++

    if (fetched % 25 === 0) {
      console.log(`  …${fetched}/${Math.min(pending.length, limit)} fetched, ${found} with images`)
    }

    await sleep(THROTTLE_MS) // be a good Wikipedia citizen
  }

  saveCache(cache)
  console.log(
    `Done: fetched ${fetched} this run, ${found} with images. ` +
      `Cache now holds ${Object.keys(cache).length} entries -> data/dish-images.json`,
  )
}

main().catch((err) => {
  console.error('fetchDishImages failed:', err.message)
  process.exitCode = 1
})
