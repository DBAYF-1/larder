// Aggregated canonical ingredient dictionary (the spine — spec 6.1).
//
// Assembled from the curated core (ingredients/core.js) plus the systematically
// authored expansion batches (ingredients/<group>.js). Deduped by slug with the
// CORE winning, so a batch never shadows a curated record and ingredientsDoc.js
// (which throws on duplicate slugs) never sees a collision.
//
// Node-only module (ingestion): uses fs to discover batch files. The browser app
// never imports this — it reads canonical ingredients from Firestore.
import { readdirSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

// Must match slugify() in pipeline/resolve.js exactly (dedup keys align with the
// ids ingredientsDoc.js derives).
function slugify(name) {
  return String(name)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’.]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const dir = join(dirname(fileURLToPath(import.meta.url)), 'ingredients')
const batchFiles = readdirSync(dir)
  .filter((f) => f.endsWith('.js') && f !== 'core.js' && !f.startsWith('_'))
  .sort()

const core = (await import('./ingredients/core.js')).INGREDIENTS
const batches = await Promise.all(
  batchFiles.map((f) =>
    import(pathToFileURL(join(dir, f)).href).then((m) => m.default || m.INGREDIENTS || []),
  ),
)

// Core first → core wins any slug collision.
const bySlug = new Map()
for (const ing of [...core, ...batches.flat()]) {
  if (!ing || !ing.canonicalName) continue
  const slug = slugify(ing.canonicalName)
  if (!bySlug.has(slug)) bySlug.set(slug, ing)
}

/** @type {Array<object>} */
export const INGREDIENTS = [...bySlug.values()]

export const DICTIONARY_SOURCES = {
  core: core.length,
  batches: Object.fromEntries(batchFiles.map((f, i) => [f.replace('.js', ''), batches[i].length])),
  total: INGREDIENTS.length,
}
