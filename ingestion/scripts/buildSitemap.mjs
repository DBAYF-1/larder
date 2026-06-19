// buildSitemap — generate public/sitemap.xml from Firestore (roadmap #15 / seo F4).
//
// ── What it does ──────────────────────────────────────────────────────────────
// Reads every recipe from Firestore via the Admin SDK and writes one <url> per
// crawlable page to public/sitemap.xml:
//   • the hub routes (/, /sources) — always emitted, even with no DB,
//   • one /meal/{id} per recipe,
// mapping popularity → <priority> and updatedAt → <lastmod>. The transient,
// per-user app states (/basket, /list) are intentionally excluded (they carry no
// stable content and are Disallow-ed in robots.txt).
//
// ── Resilience (this runs in CI, possibly mid-quota-reset) ────────────────────
// If Firestore is unreachable / 429s / the credential is missing, we DO NOT fail
// the build: we emit a valid hub-only sitemap and exit 0 with a warning, so the
// deploy still ships a usable sitemap. Set SITEMAP_STRICT=1 to make a read
// failure a hard error instead (useful for a dedicated, gated CI job).
//
// ── Auth ──────────────────────────────────────────────────────────────────────
// Identical to ingest.js — FIREBASE_SERVICE_ACCOUNT (raw JSON) or
// GOOGLE_APPLICATION_CREDENTIALS (path to JSON), resolved by ingestion/lib/firestore.js.
//
// ── Usage ─────────────────────────────────────────────────────────────────────
//   FIREBASE_SERVICE_ACCOUNT='{...}' node ingestion/scripts/buildSitemap.mjs
//   GOOGLE_APPLICATION_CREDENTIALS=./sa.json node ingestion/scripts/buildSitemap.mjs
// Output: public/sitemap.xml (committed/served as a real .xml, bypassing the SPA rewrite).

import { writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const SITE_ORIGIN = 'https://larder-dbayft.web.app'

// public/ lives at the repo root; this script sits at ingestion/scripts/.
const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = join(__dirname, '..', '..', 'public')
const OUT_PATH = join(PUBLIC_DIR, 'sitemap.xml')

const STRICT = process.env.SITEMAP_STRICT === '1'

// Hub routes that always exist as real, crawlable content.
// changefreq/priority are hints only; modern crawlers largely ignore them, but
// they remain valid sitemap fields and cost nothing.
const HUB_ROUTES = [
  { path: '/', changefreq: 'daily', priority: '1.0' },
  { path: '/sources', changefreq: 'monthly', priority: '0.3' },
]

/** XML-escape the five reserved entities for safe attribute/text content. */
function xmlEscape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/** A recipe's URL is its doc id appended to /meal/ (ids are already URL-safe slugs). */
function mealLoc(id) {
  return `${SITE_ORIGIN}/meal/${encodeURIComponent(id)}`
}

/**
 * Map a recipe's popularity (an unbounded desc-sorted integer) to a sitemap
 * priority in [0.3, 0.9], relative to the most popular recipe in the corpus.
 * Hubs keep their own fixed priorities above this band.
 */
function priorityFor(popularity, maxPopularity) {
  if (!Number.isFinite(popularity) || popularity <= 0 || maxPopularity <= 0) return '0.5'
  const ratio = Math.min(1, popularity / maxPopularity)
  const value = 0.3 + ratio * 0.6 // 0.3 .. 0.9
  return value.toFixed(1)
}

/** Coerce a Firestore Timestamp | Date | ms | ISO string to a YYYY-MM-DD lastmod. */
function lastmodFor(updatedAt) {
  if (!updatedAt) return null
  let date = null
  try {
    if (typeof updatedAt.toDate === 'function') {
      date = updatedAt.toDate() // Firestore Timestamp
    } else if (updatedAt instanceof Date) {
      date = updatedAt
    } else if (typeof updatedAt === 'number') {
      date = new Date(updatedAt)
    } else if (typeof updatedAt === 'string') {
      date = new Date(updatedAt)
    } else if (typeof updatedAt.seconds === 'number') {
      date = new Date(updatedAt.seconds * 1000) // plain {seconds,nanoseconds}
    }
  } catch {
    return null
  }
  if (!date || Number.isNaN(date.getTime())) return null
  return date.toISOString().slice(0, 10)
}

/** Build one <url> block; omit empty optional fields. */
function urlBlock({ loc, lastmod, changefreq, priority }) {
  const lines = [`    <loc>${xmlEscape(loc)}</loc>`]
  if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`)
  if (changefreq) lines.push(`    <changefreq>${changefreq}</changefreq>`)
  if (priority) lines.push(`    <priority>${priority}</priority>`)
  return `  <url>\n${lines.join('\n')}\n  </url>`
}

function renderSitemap(urlBlocks) {
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urlBlocks.join('\n') +
    '\n</urlset>\n'
  )
}

/** Read every recipe (id, popularity, updatedAt) from Firestore. */
async function readRecipes() {
  const { initFirestore } = await import('../lib/firestore.js')
  const db = await initFirestore()
  const snap = await db.collection('recipes').select('popularity', 'updatedAt').get()
  return snap.docs.map((d) => {
    const data = d.data() || {}
    return { id: d.id, popularity: Number(data.popularity) || 0, updatedAt: data.updatedAt }
  })
}

async function main() {
  const hubBlocks = HUB_ROUTES.map((r) =>
    urlBlock({
      loc: `${SITE_ORIGIN}${r.path === '/' ? '/' : r.path}`,
      lastmod: new Date().toISOString().slice(0, 10),
      changefreq: r.changefreq,
      priority: r.priority,
    }),
  )

  let recipes = []
  try {
    recipes = await readRecipes()
    console.log(`Read ${recipes.length} recipes from Firestore.`)
  } catch (err) {
    const msg = `Could not read recipes from Firestore: ${err && err.message ? err.message : err}`
    if (STRICT) {
      console.error(msg)
      process.exitCode = 1
      return
    }
    console.warn(`${msg}\nWriting a hub-only sitemap so the deploy still ships one.`)
  }

  const maxPopularity = recipes.reduce((max, r) => Math.max(max, r.popularity), 0)

  // Stable, deterministic order: most popular first, then by id for ties.
  recipes.sort((a, b) => b.popularity - a.popularity || a.id.localeCompare(b.id))

  const mealBlocks = recipes.map((r) =>
    urlBlock({
      loc: mealLoc(r.id),
      lastmod: lastmodFor(r.updatedAt),
      changefreq: 'weekly',
      priority: priorityFor(r.popularity, maxPopularity),
    }),
  )

  const xml = renderSitemap([...hubBlocks, ...mealBlocks])

  mkdirSync(PUBLIC_DIR, { recursive: true })
  writeFileSync(OUT_PATH, xml, 'utf8')
  console.log(
    `Wrote ${OUT_PATH} with ${hubBlocks.length + mealBlocks.length} URLs ` +
      `(${hubBlocks.length} hub + ${mealBlocks.length} meals).`,
  )
}

main().catch((err) => {
  console.error('Sitemap generation failed:', err)
  process.exitCode = 1
})
