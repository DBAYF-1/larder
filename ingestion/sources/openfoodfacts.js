// Open Food Facts (Layer C) — pack-size / barcode enrichment interface.
//
// WHAT THIS LAYER DOES (spec 3.2 / 7.3)
// -------------------------------------
// Our curated dictionary (data/ingredients.js) owns the canonical pack sizes via
// `typicalPacks`. Layer C overlays a REAL UK retail barcode + brand onto each
// ingredient's defaultPack, and — only where we have no curated pack at all —
// supplies a representative pack size so the shopping-list maths still have a
// real-world rounding target. Curated SIZES always win; OFF only adds
// barcode/brand or fills genuine gaps.
//
// PRODUCTION ENRICHMENT USES THE OFF UK DATA DUMP, NOT THE LIVE API.
// -----------------------------------------------------------------
// Open Food Facts publishes a full database export (the "data dump"). For bulk
// enrichment of the whole dictionary we process that dump offline — it has no
// rate limit and gives reproducible results. The live search API is capped at
// ~15 requests/min and is only suitable for spot-checks. Either way the result
// is materialised into a cache file (data/off-packs.json) that the ingest run
// reads. scripts/fetchOffPacks.mjs is the cache populator (it currently spot-
// fetches via the rate-limited live API; the production path swaps in the dump
// parser and writes the same cache shape).
//
// THERE IS NO EXTERNAL FETCH AT INGEST TIME. buildIngredientDocs() and the
// helpers below only read the pre-built cache. If the cache is absent the
// pipeline degrades gracefully to curated-only packs.
//
// Cache file shape — data/off-packs.json — keyed by slugify(canonicalName):
//   "<slug>": {
//     canonicalName: string,
//     suggestedSize: number|null,   // representative UK pack size in `unit`
//     unit: 'g'|'ml',               // base unit the size is expressed in
//     offBarcode: string|null,      // a representative UK product barcode (EAN)
//     brand: string|null,
//     productName?: string,
//     samples?: number,
//     error?: string                // present instead of pack data when a lookup failed
//   }
// A "parsed pack" entry is one with a numeric `suggestedSize` and no `error`.
//
// No external dependencies: Node 18+ built-ins only (fs). No network here.

import { existsSync, readFileSync } from 'node:fs'
import { slugify } from '../pipeline/resolve.js'

const CACHE_URL = new URL('../data/off-packs.json', import.meta.url)

/**
 * Load the OFF pack cache.
 *
 * Reads data/off-packs.json if present and returns the keyed map (keyed by
 * slugify(canonicalName)). Returns {} when the file is absent or unreadable —
 * never throws, so a missing/partial cache simply means "no OFF enrichment".
 *
 * @returns {Promise<Record<string, object>>}
 */
export async function loadOffPacks() {
  return readOffPacksSync()
}

/**
 * Synchronous cache read (used by both loadOffPacks and ingredientsDoc, where
 * doc building is synchronous). Defensive: any I/O or parse error yields {}.
 *
 * @returns {Record<string, object>}
 */
export function readOffPacksSync() {
  try {
    if (!existsSync(CACHE_URL)) return {}
    const raw = readFileSync(CACHE_URL, 'utf8')
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

/**
 * Whether an OFF cache entry carries a usable parsed pack (numeric size, no error).
 *
 * @param {object|null|undefined} entry
 * @returns {boolean}
 */
export function hasParsedPack(entry) {
  return Boolean(
    entry &&
      !entry.error &&
      typeof entry.suggestedSize === 'number' &&
      Number.isFinite(entry.suggestedSize) &&
      entry.suggestedSize > 0,
  )
}

/**
 * Look up the OFF entry for an ingredient by canonical name (or slug).
 *
 * @param {string} nameOrSlug  canonical name or an already-slugified id
 * @param {Record<string, object>} [packs]  a map from loadOffPacks() (re-reads if omitted)
 * @returns {object|null}
 */
export function getOffPack(nameOrSlug, packs = readOffPacksSync()) {
  if (!nameOrSlug) return null
  // Accept either a canonical name or a pre-slugified key.
  const direct = packs[nameOrSlug]
  if (direct) return direct
  const slug = slugify(nameOrSlug)
  return packs[slug] || null
}

export { CACHE_URL as OFF_PACKS_CACHE_URL }
