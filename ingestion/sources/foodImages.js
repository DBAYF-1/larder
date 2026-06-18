// Deterministic, token-free food-image lookup for curated dishes.
//
// Well-known dishes ("Shepherd's pie", "Bangers and mash", "Victoria sponge")
// have a Wikipedia article whose REST summary carries a Wikimedia Commons photo.
// The mapping is fully deterministic: the same dish title resolves to the same
// Wikipedia page, hence the same image — no API key, no token, no randomness.
//
//   GET https://en.wikipedia.org/api/rest_v1/page/summary/<Title_With_Underscores>
//   -> { type, title, thumbnail:{source}, originalimage:{source},
//        content_urls:{ desktop:{ page } } }
//
// Wikimedia images are Creative-Commons / public-domain, so we are legally clean
// as long as we keep an attribution string and the page URL. We capture both.
//
// `imageForDish(title)` NEVER throws and returns null when nothing is found, so
// the caller (mapCurated) can fall back to the on-brand SVG placeholder.
//
// The companion JSON cache (data/dish-images.json) is slug-keyed using the SAME
// slugify rule as ../pipeline/resolve.js so a recipe's slug looks the image up
// directly. `loadImageCache()` + `getCachedImage()` read it synchronously and
// defensively (an absent/corrupt file yields {} and a clean miss).

import { existsSync, readFileSync } from 'node:fs'
import { slugify } from '../pipeline/resolve.js'

const SUMMARY_ENDPOINT = 'https://en.wikipedia.org/api/rest_v1/page/summary/'

// Identifying User-Agent — Wikimedia asks API clients to say who they are.
const USER_AGENT = 'Larder/1.0 (larder-dbayft; meal-planning shopping lists)'

const CACHE_URL = new URL('../data/dish-images.json', import.meta.url)

// Attribution line stored alongside every Wikimedia image. Kept short and
// generic on purpose — the page URL carries the precise per-file credit.
const WIKIMEDIA_ATTRIBUTION = 'Image: Wikimedia Commons'

// Hand-mapped aliases for very common dishes whose curated title does not match
// the Wikipedia article verbatim (redirects mostly cover this, but a couple of
// compound names need a deterministic nudge). Keyed by slug -> Wikipedia title.
const TITLE_ALIASES = {
  'victoria-sponge': 'Victoria sponge',
  'full-english-breakfast': 'Full breakfast',
  'bangers-and-mash': 'Bangers and mash',
  'cumberland-sausage-and-mash': 'Cumberland sausage',
  'jacket-potato-with-beans': 'Baked potato',
  'ham-egg-and-chips': 'Ham, egg and chips',
  'roast-chicken-dinner': 'Roast chicken',
  'leek-and-potato-soup': 'Leek soup',
}

/**
 * Normalise a dish title to a Wikipedia-style page title.
 *   - trim and collapse whitespace
 *   - strip trailing parentheticals, e.g. "Lasagne (vegan)" -> "Lasagne"
 *   - sentence-case: first word capitalised, the rest lower-cased (Wikipedia's
 *     own convention for most dish articles), preserving any apostrophes
 *   - spaces -> underscores for the URL path
 *
 * Returns '' when nothing usable remains.
 */
function toWikiTitle(title) {
  const cleaned = String(title || '')
    .replace(/\([^)]*\)/g, ' ') // drop "(vegan)", "(gf)", etc.
    .replace(/\s+/g, ' ')
    .trim()
  if (!cleaned) return ''
  const words = cleaned.split(' ')
  const sentenceCased = words
    .map((w, i) => (i === 0 ? capitaliseFirst(w) : w.toLowerCase()))
    .join(' ')
  return sentenceCased.replace(/ /g, '_')
}

function capitaliseFirst(word) {
  if (!word) return word
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

/**
 * Build the ONE deterministic fallback title for a dish: the first 2–3
 * significant words (Wikipedia compound-dish articles usually live there, e.g.
 * "Cumberland sausage and mash" -> "Cumberland sausage"). Returns '' when the
 * fallback would just repeat the primary attempt.
 */
function fallbackWikiTitle(title) {
  const cleaned = String(title || '')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (!cleaned) return ''
  const words = cleaned.split(' ')
  if (words.length <= 2) return '' // nothing shorter to try
  // Prefer the first two words; they carry the dish identity in compound names.
  const head = words.slice(0, 2).join(' ')
  const candidate = toWikiTitle(head)
  return candidate
}

/** One polite GET against the Wikipedia summary endpoint. Never throws. */
async function fetchSummary(wikiTitle) {
  if (!wikiTitle) return null
  try {
    const res = await fetch(SUMMARY_ENDPOINT + encodeURIComponent(wikiTitle), {
      headers: { 'User-Agent': USER_AGENT, accept: 'application/json' },
    })
    if (!res.ok) return null // 404 / 5xx — clean miss, no retry storm
    const json = await res.json()
    if (!json || typeof json !== 'object') return null
    // Disambiguation pages and error stubs carry no usable single image.
    if (json.type && json.type !== 'standard') return null
    const url =
      (json.thumbnail && json.thumbnail.source) ||
      (json.originalimage && json.originalimage.source) ||
      null
    if (!url) return null
    const pageUrl =
      (json.content_urls &&
        json.content_urls.desktop &&
        json.content_urls.desktop.page) ||
      null
    return { url, attribution: WIKIMEDIA_ATTRIBUTION, pageUrl }
  } catch {
    return null // network error — fall back to placeholder, never throw
  }
}

/**
 * Resolve a real photo for a well-known dish. Deterministic and token-free.
 *
 * @param {string} title  Dish title, e.g. "Shepherd's pie".
 * @returns {Promise<{url:string, attribution:string, pageUrl:string|null}|null>}
 *          The Wikimedia image + attribution + Wikipedia page URL, or null when
 *          nothing confident is found (the caller uses the SVG placeholder).
 */
export async function imageForDish(title) {
  const slug = slugify(title)

  // 1. Hand-mapped alias wins (deterministic override for awkward names).
  if (slug && TITLE_ALIASES[slug]) {
    const aliased = await fetchSummary(toWikiTitle(TITLE_ALIASES[slug]))
    if (aliased) return aliased
  }

  // 2. Primary: the sentence-cased title verbatim (redirects handle synonyms).
  const primary = await fetchSummary(toWikiTitle(title))
  if (primary) return primary

  // 3. ONE deterministic fallback: the first two words of the dish name.
  const fallback = fallbackWikiTitle(title)
  if (fallback) {
    const got = await fetchSummary(fallback)
    if (got) return got
  }

  return null
}

/**
 * Synchronously read the slug-keyed image cache (data/dish-images.json).
 * Defensive: returns {} when the file is absent or unreadable/corrupt.
 *
 * @returns {Record<string, {url:string, attribution:string, pageUrl:string|null}|null>}
 */
export function loadImageCache() {
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
 * Look a dish up in an already-loaded cache by its title's slug (same slugify
 * rule as the recipe pipeline). A stored `null` means "checked, none found" and
 * is returned as null — a true miss returns undefined so callers can tell the
 * difference if they care.
 *
 * @param {string} title
 * @param {ReturnType<typeof loadImageCache>} cache
 * @returns {{url:string, attribution:string, pageUrl:string|null}|null|undefined}
 */
export function getCachedImage(title, cache) {
  if (!cache) return undefined
  const slug = slugify(title)
  if (!slug) return undefined
  return cache[slug]
}
