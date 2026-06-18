// Curated recipe source adapter.
//
// Hand-written, public-domain Larder recipes live in data/curated/*.js as
// `export default` arrays of:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }
//
// fetchCurated() maps each onto the SAME normalised source-recipe shape as
// TheMealDB's mapMeal, so the rest of the pipeline (parse -> resolve ->
// normalise -> buildRecipeDoc) treats them identically. Because we own these
// recipes outright there's no external image to scrape: we GENERATE an on-brand
// SVG placeholder per dish as a data: URI (no network, no attribution).

import { readdirSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'
import { slugify } from '../pipeline/resolve.js'
import { loadImageCache, getCachedImage } from './foodImages.js'

// Every .js in data/curated/ is a recipe set (mains, puddings, dinners, regional,
// and the per-diet sets). Auto-discovered so new sets ingest with no extra wiring.
const CURATED_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'data', 'curated')

// Deterministic dish-image cache (real Wikipedia photos, token-free). Read once;
// a cached real photo wins over the generated SVG placeholder. A cached `null`
// means "checked, none found" → keep the placeholder. See scripts/fetchDishImages.mjs.
const IMAGE_CACHE = loadImageCache()

// ── Larder brand palette (mirrors src/styles/tokens.css) ─────────────────────
const LARDER = {
  paper: '#FBFAF6', // warm off-white base
  stall: '#E8534E', // tomato/market red
  leaf: '#2E6F40', // allotment green
  ink: '#1F2421', // near-black green-grey
}

/** XML-escape text destined for an SVG text node / attribute. */
function escapeXml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Wrap a title onto at most `maxLines` lines of ~`maxChars` each, for the SVG.
function wrapTitle(title, maxChars = 18, maxLines = 3) {
  const words = String(title || 'Larder recipe').trim().split(/\s+/)
  const lines = []
  let current = ''
  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (next.length > maxChars && current) {
      lines.push(current)
      current = word
    } else {
      current = next
    }
    if (lines.length >= maxLines) break
  }
  if (current && lines.length < maxLines) lines.push(current)
  if (lines.length === maxLines && current && !lines.includes(current)) {
    // Truncate the overflow with an ellipsis on the final line.
    lines[maxLines - 1] = `${lines[maxLines - 1]}…`
  }
  return lines.length ? lines : ['Larder recipe']
}

/**
 * Render an on-brand market-stall SVG placeholder for a dish and return it as a
 * `data:image/svg+xml,<utf8>` URI. Pure string work — no network, no files.
 */
export function placeholderImage(title) {
  const lines = wrapTitle(title)
  const lineHeight = 46
  const startY = 220 - ((lines.length - 1) * lineHeight) / 2
  const tspans = lines
    .map(
      (line, i) =>
        `<tspan x="320" y="${startY + i * lineHeight}">${escapeXml(line)}</tspan>`,
    )
    .join('')

  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="426" viewBox="0 0 640 426" role="img" aria-label="${escapeXml(title)}">` +
    `<defs>` +
    `<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="${LARDER.stall}"/>` +
    `<stop offset="0.55" stop-color="${LARDER.leaf}"/>` +
    `<stop offset="1" stop-color="${LARDER.ink}"/>` +
    `</linearGradient>` +
    `</defs>` +
    `<rect width="640" height="426" fill="url(#g)"/>` +
    // Market-stall awning stripes across the top.
    `<g opacity="0.18" fill="${LARDER.paper}">` +
    `<rect x="0" y="0" width="80" height="60"/>` +
    `<rect x="160" y="0" width="80" height="60"/>` +
    `<rect x="320" y="0" width="80" height="60"/>` +
    `<rect x="480" y="0" width="80" height="60"/>` +
    `</g>` +
    // Paper plate behind the title.
    `<rect x="60" y="110" width="520" height="206" rx="18" fill="${LARDER.paper}" opacity="0.10"/>` +
    `<text x="320" y="86" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="26" letter-spacing="3" fill="${LARDER.paper}" opacity="0.85">LARDER</text>` +
    `<text text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-weight="700" fill="${LARDER.paper}">${tspans}</text>` +
    `</svg>`

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

/**
 * Map one curated recipe object onto the normalised source-recipe shape (the
 * same shape TheMealDB's mapMeal produces, plus servingsBase/totalTimeMinutes
 * which buildRecipeDoc also reads).
 */
export function mapCurated(recipe) {
  const title = (recipe.title || '').trim()
  const course = recipe.course || 'Dinner'
  const dietLabels = Array.isArray(recipe.dietLabels) ? recipe.dietLabels.slice() : []
  const rawLines = (recipe.rawLines || []).map((l) => ({
    rawName: (l.rawName || '').trim(),
    rawMeasure: (l.rawMeasure || '').trim(),
  }))

  // Prefer a real (deterministic, cached) Wikipedia photo; fall back to the
  // on-brand SVG placeholder. A cached entry with a url => real photo + attribution.
  const cached = getCachedImage(title, IMAGE_CACHE)
  const realImage = cached && cached.url ? cached : null

  return {
    source: 'curated',
    sourceId: `curated-${slugify(title)}`,
    title,
    imageUrl: realImage ? realImage.url : placeholderImage(title),
    imageAttribution: realImage ? realImage.attribution || null : null,
    attributionRequired: Boolean(realImage),
    sourceUrl: realImage?.pageUrl || '',
    instructions: (recipe.instructions || '').trim() || null,
    instructionsExternal: false,
    publisher: null,
    cuisine: recipe.cuisine || 'British',
    course,
    category: course,
    dietLabels,
    tags: [],
    youtubeUrl: null,
    // Extra fields the pipeline reads when present.
    servingsBase: recipe.servingsBase && recipe.servingsBase > 0 ? recipe.servingsBase : null,
    totalTimeMinutes:
      recipe.totalTimeMinutes && recipe.totalTimeMinutes > 0
        ? Math.round(recipe.totalTimeMinutes)
        : null,
    rawLines,
  }
}

/**
 * Return all curated recipes mapped to the normalised source-recipe shape.
 *
 * @param {object} [opts]
 * @param {(msg:string)=>void} [opts.log]
 * @param {(err:object)=>void} [opts.onError]
 * @returns {Promise<Array<object>>}
 */
export async function fetchCurated({ log = () => {}, onError = () => {} } = {}) {
  const files = readdirSync(CURATED_DIR).filter((f) => f.endsWith('.js')).sort()
  const source = []
  for (const f of files) {
    try {
      const mod = await import(pathToFileURL(join(CURATED_DIR, f)).href)
      for (const r of mod.default || mod.recipes || []) source.push(r)
    } catch (err) {
      onError({ stage: 'curated-load', id: f, message: err.message })
    }
  }
  // De-dup by sourceId across sets; when the same dish appears in several diet
  // files, MERGE their dietLabels so a vegan + gluten-free dish keeps both.
  const bySourceId = new Map()
  for (const recipe of source) {
    try {
      if (!recipe || !recipe.title) {
        onError({ stage: 'curated', message: 'recipe missing title' })
        continue
      }
      const mapped = mapCurated(recipe)
      const existing = bySourceId.get(mapped.sourceId)
      if (existing) {
        existing.dietLabels = [...new Set([...existing.dietLabels, ...mapped.dietLabels])]
      } else {
        bySourceId.set(mapped.sourceId, mapped)
      }
    } catch (err) {
      onError({ stage: 'curated', id: recipe?.title, message: err.message })
    }
  }
  const recipes = [...bySourceId.values()]
  log(`Curated: ${recipes.length} recipes from ${files.length} sets`)
  return recipes
}
