// Generate accurate dish photos with Pollinations (zimage), most-popular first.
//
// Why this exists: the Wikipedia search/type-fallback photos were loosely related
// and often wrong. This generates a bespoke, on-topic food photo per dish.
//
// Hosting: Cloud Storage needs Blaze (unavailable on Spark), so images are saved
// to public/dishes/{id}.jpg and served KEYLESS by Firebase Hosting. The API key
// is used server-side only (POLLINATIONS_KEY env / GitHub secret) — never stored
// in a public URL. RecipeImage's wsrv layer converts to WebP + resizes at render.
//
// Output:
//   public/dishes/{recipeId}.jpg          the generated photos (committed, deployed)
//   ingestion/data/generated-images.json  { recipeId: "https://<host>/dishes/{id}.jpg" }
// The ingest pipeline applies this map so the photos survive re-ingestion.
//
// Usage: POLLINATIONS_KEY=sk_... GOOGLE_APPLICATION_CREDENTIALS=../.secrets/serviceAccount.json \
//        node scripts/generateDishImages.mjs [--limit 500] [--concurrency 5]
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import admin from 'firebase-admin'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = join(HERE, '..', '..')
const DISH_DIR = join(ROOT, 'public', 'dishes')
const MAP_PATH = join(HERE, '..', 'data', 'generated-images.json')
const HOST = 'https://larder-dbayft.web.app'

const KEY = process.env.POLLINATIONS_KEY
if (!KEY) { console.error('POLLINATIONS_KEY is required'); process.exit(1) }

const args = process.argv.slice(2)
const getArg = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d }
const LIMIT = parseInt(getArg('--limit', '500'), 10)
const CONCURRENCY = parseInt(getArg('--concurrency', '8'), 10)
// The authenticated tier allows ~1 request START every ~7s, with several
// generations (each ~40s) running concurrently. So we STAGGER starts by a global
// interval and let workers overlap — throughput ≈ 1/interval (~8/min at 7.5s).
const INTERVAL = parseInt(getArg('--interval', '7500'), 10)

mkdirSync(DISH_DIR, { recursive: true })
const map = existsSync(MAP_PATH) ? JSON.parse(readFileSync(MAP_PATH, 'utf8')) : {}

admin.initializeApp({ credential: admin.credential.applicationDefault(), projectId: 'larder-dbayft' })
const db = admin.firestore()

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Global start-gate: guarantees >= INTERVAL ms between any two request starts,
// even across concurrent workers (the synchronous reserve is race-free in JS).
let nextSlot = 0
async function gate() {
  const now = Date.now()
  const start = Math.max(now, nextSlot)
  nextSlot = start + INTERVAL
  const wait = start - now
  if (wait > 0) await sleep(wait)
}
const stableSeed = (s) => { let h = 0; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) | 0; return Math.abs(h) % 1_000_000 }

function buildPrompt(r) {
  const cuisine = r.cuisine && r.cuisine !== 'Unknown' ? `${r.cuisine} ` : ''
  const course = (r.course || '').toLowerCase()
  const vessel = /dessert|pudding|cake|snack/.test(course) ? 'plated on a dish'
    : /soup|broth/.test((r.title || '').toLowerCase()) ? 'in a bowl' : 'freshly plated'
  return `${r.title}, ${cuisine}food, professional food photography, ${vessel}, appetising and freshly cooked, ` +
    `natural soft light, shallow depth of field, 45-degree angle, high detail, realistic, no text, no watermark`
}

async function generate(r) {
  const prompt = buildPrompt(r)
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}` +
    `?model=zimage&width=512&height=512&nologo=true&seed=${stableSeed(r.id)}`
  // Retry on 429 (rate limit) / 5xx with exponential backoff.
  // zimage/sana generates in ~40 s and the key allows only 1 request at a time
  // per IP, so we run STRICTLY sequential, wait out each generation fully
  // (180 s ceiling), and on 429 (slot busy) wait a full generation cycle.
  for (let attempt = 0; attempt < 6; attempt += 1) {
    let res
    try {
      res = await fetch(url, { headers: { Authorization: `Bearer ${KEY}` }, signal: AbortSignal.timeout(180_000) })
    } catch (e) {
      if (attempt === 5) throw e
      await sleep(20_000); continue
    }
    if (res.status === 429 || res.status >= 500) {
      if (attempt === 5) throw new Error(`pollinations ${res.status}`)
      await sleep(30_000); continue
    }
    if (!res.ok) throw new Error(`pollinations ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    if (buf.length < 1500) throw new Error('suspiciously small image')
    writeFileSync(join(DISH_DIR, `${r.id}.jpg`), buf)
    return buf.length
  }
  throw new Error('exhausted retries')
}

const snap = await db.collection('recipes').orderBy('popularity', 'desc').limit(LIMIT).get()
const recipes = snap.docs.map((d) => ({ id: d.id, title: d.data().title, cuisine: d.data().cuisine, course: d.data().course }))
const todo = recipes.filter((r) => !(existsSync(join(DISH_DIR, `${r.id}.jpg`)) && map[r.id]))
console.log(`Top ${recipes.length} by popularity; ${recipes.length - todo.length} already done; generating ${todo.length} (concurrency ${CONCURRENCY}).`)

let done = 0, failed = 0
async function worker(queue) {
  for (;;) {
    const r = queue.shift()
    if (!r) return
    await gate() // stagger this request's START by the global interval
    try {
      const bytes = await generate(r)
      map[r.id] = `${HOST}/dishes/${r.id}.jpg`
      done += 1
      if (done % 10 === 0) { writeFileSync(MAP_PATH, JSON.stringify(map, null, 2)); console.log(`  ${done}/${todo.length} done (${bytes} B) ${r.title}`) }
    } catch (e) {
      failed += 1
      console.log(`  FAIL ${r.title}: ${e.message}`)
    }
  }
}
const queue = todo.slice()
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)))
writeFileSync(MAP_PATH, JSON.stringify(map, null, 2))
console.log(`Done. generated ${done}, failed ${failed}. Map has ${Object.keys(map).length} entries.`)
process.exit(0)
