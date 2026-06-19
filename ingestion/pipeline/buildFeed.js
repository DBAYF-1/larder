// buildFeed — pre-bake a single `home/feed` Firestore document at ingestion time
// so the Browse/home screen reads ONE doc instead of ~49 (roadmap #5 / #6).
//
// ── Why ───────────────────────────────────────────────────────────────────────
// The client reads Firestore directly on the free (Spark) tier (~50K reads/day).
// A cold home view today costs ~49 reads (one query per rail + a facets read,
// each card a doc), so the catalogue 429s for everyone at ~350–600 sessions/day.
// Pre-baking the home into one document collapses that to a SINGLE read and
// shrinks the payload (~250 KB → ~30 KB). This is pure ingestion work on a path
// that already runs off-Firebase; writes are far under the 20K/day cap.
//
// ── The `home/feed` document shape (READ THIS — the Browse screen reads it) ────
// Browse should `getDoc(doc(db,'home','feed'))` ONCE and render rails + facets
// from it, falling back to live queries (queryRecipes / getFacets) ONLY if the
// doc is absent or `rails` is empty.
//
//   {
//     version: number,                 // schema version of this doc (bump on shape change)
//     generatedAt: <Firestore serverTimestamp>,
//     totalRecipes: number,            // == facets.totalRecipes (corpus size)
//     rails: [                         // ordered; render in array order
//       {
//         key: string,                 // stable id, mirrors Browse RAILS keys ("quick"…)
//         title: string,               // shelf heading ("Quick dinners")
//         blurb: string,               // one-line shelf description
//         apply: {                     // the FilterBar value "See all" switches the grid to.
//           cuisine?: string, course?: string, diet?: string,
//           freeFrom?: string, maxTime?: number, sort?: 'popularity'|'time'
//         },
//         cards: Card[]                // ~12 LIGHTWEIGHT card projections (NOT full recipe docs)
//       }
//     ],
//     facets: {                        // EMBEDDED facets/global summary — home needs NO separate facets read
//       cuisines:   [{ value, count }],
//       courses:    [{ value, count }],
//       dietLabels: [{ value, count }],
//       healthLabels:[{ value, count }],
//       totalRecipes: number
//     }
//   }
//
//   Card (the lightweight projection — keep these names; MealCard renders them):
//   {
//     id: string,
//     title: string,
//     imageUrl: string,                // '' when no image (MealCard/RecipeImage handle empty)
//     course: string,
//     cuisine: string | null,
//     totalTimeMinutes: number | null,
//     dietLabels: string[],
//     kcal: number | null,             // nutritionPerServing.energyKcal, flattened for the card
//     servingsBase: number             // MealCard reads this for "Serves N"
//   }
//
//   MealCard reads `meal.nutritionPerServing?.energyKcal`. The flattened `kcal`
//   is the canonical card field; for drop-in compatibility each card ALSO carries
//   a minimal `nutritionPerServing:{energyKcal}` so an existing <MealCard meal>
//   renders unchanged straight from a feed card.
//
// The whole doc is kept well under Firestore's ~1 MiB document limit: rails are
// capped, cards are tiny projections (no ingredients/instructions), and image
// URLs that are inline data URIs (placeholder SVGs) are dropped to ''.

const SCHEMA_VERSION = 1

// Cards per rail. 12 fills the horizontal shelf with a little overscroll without
// bloating the doc. (4 rails × 12 cards × ~10 small fields ≈ a few KB.)
const CARDS_PER_RAIL = 12

// ── The curated rails ─────────────────────────────────────────────────────────
// These MIRROR src/screens/Browse.jsx RAILS (same key/title/blurb/apply) so the
// home renders identically whether served from this doc or from live queries.
// A few extra high-value shelves are appended; the home renders whatever rails
// are present and non-empty, so adding rails here is safe.
//
// Each rail declares a `match` predicate + a `sort` mirroring queryRecipes:
//   sort 'time'       → totalTimeMinutes ASC (nulls last), then popularity DESC
//   sort 'popularity' → popularity DESC (the default)
const RAILS = [
  {
    key: 'quick',
    title: 'Quick dinners',
    blurb: 'On the table without much fuss.',
    apply: { course: 'Dinner', maxTime: 30, sort: 'time' },
    match: (r) => r.course === 'Dinner' && timeUnder(r, 30),
    sort: 'time',
  },
  {
    key: 'veggie',
    title: 'Veggie',
    blurb: 'Meat-free meals worth making.',
    apply: { diet: 'Vegetarian' },
    match: (r) => hasLabel(r.dietLabels, 'Vegetarian'),
    sort: 'popularity',
  },
  {
    key: 'british',
    title: 'British classics',
    blurb: 'The comforting stuff we grew up on.',
    apply: { cuisine: 'British' },
    match: (r) => r.cuisine === 'British',
    sort: 'popularity',
  },
  {
    key: 'under30',
    title: 'Under 30 min',
    blurb: 'Fast from fridge to fork.',
    apply: { maxTime: 30, sort: 'time' },
    match: (r) => timeUnder(r, 30),
    sort: 'time',
  },
  // ── Extra high-value shelves (additive; the home skips any that come up empty)
  {
    key: 'vegan',
    title: 'Vegan',
    blurb: 'Fully plant-based, no compromises.',
    apply: { diet: 'Vegan' },
    match: (r) => hasLabel(r.dietLabels, 'Vegan'),
    sort: 'popularity',
  },
  {
    key: 'glutenfree',
    title: 'Gluten-free',
    blurb: 'Free-from without the faff.',
    apply: { freeFrom: 'Gluten-free' },
    match: (r) => hasLabel(r.healthLabels, 'Gluten-free'),
    sort: 'popularity',
  },
  {
    key: 'breakfast',
    title: 'Breakfast & brunch',
    blurb: 'Worth getting up for.',
    apply: { course: 'Breakfast' },
    match: (r) => r.course === 'Breakfast',
    sort: 'popularity',
  },
  {
    key: 'dessert',
    title: 'Something sweet',
    blurb: 'Puddings and bakes for afters.',
    apply: { course: 'Dessert' },
    match: (r) => r.course === 'Dessert',
    sort: 'popularity',
  },
  {
    key: 'popular',
    title: 'Most popular',
    blurb: 'What everyone’s cooking right now.',
    apply: { sort: 'popularity' },
    match: () => true,
    sort: 'popularity',
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function hasLabel(labels, value) {
  return Array.isArray(labels) && labels.includes(value)
}

// Mirror queryRecipes' totalTimeMinutes <= maxTime (a recipe with no time is
// never matched by a time-bounded rail, exactly as a Firestore range filter
// would exclude a null/absent field).
function timeUnder(recipe, maxTime) {
  const t = recipe.totalTimeMinutes
  return typeof t === 'number' && t > 0 && t <= maxTime
}

// A recipe's popularity, defaulting to 0 so undefined sorts last.
function pop(recipe) {
  return typeof recipe.popularity === 'number' ? recipe.popularity : 0
}

// Sort comparators mirroring the composite-index orderings queryRecipes uses.
const COMPARATORS = {
  // popularity DESC, then title ASC for a stable tie-break.
  popularity: (a, b) => pop(b) - pop(a) || String(a.title).localeCompare(String(b.title)),
  // totalTimeMinutes ASC (nulls/zeros last), then popularity DESC.
  time: (a, b) => {
    const ta = timeKey(a)
    const tb = timeKey(b)
    return ta - tb || pop(b) - pop(a)
  },
}

// Sort key for a time-ascending rail: real positive minutes first (ascending),
// missing/zero times pushed to the end.
function timeKey(recipe) {
  const t = recipe.totalTimeMinutes
  return typeof t === 'number' && t > 0 ? t : Number.POSITIVE_INFINITY
}

// Drop inline data-URI placeholder images (e.g. inline SVGs) from a card's
// imageUrl — they bloat the doc and the client treats '' as "no image" cleanly.
function cardImageUrl(imageUrl) {
  const u = typeof imageUrl === 'string' ? imageUrl : ''
  if (!u) return ''
  if (u.startsWith('data:')) return ''
  return u
}

/**
 * Project a full recipe doc down to a lightweight home-feed card.
 * @param {object} recipe  the `data` of a recipes/{id} doc (CONTRACTS §1)
 * @returns {object} card
 */
function toCard(recipe) {
  const kcal =
    recipe.nutritionPerServing && Number.isFinite(recipe.nutritionPerServing.energyKcal)
      ? recipe.nutritionPerServing.energyKcal
      : null
  return {
    id: recipe.id,
    title: recipe.title,
    imageUrl: cardImageUrl(recipe.imageUrl),
    course: recipe.course || 'Dinner',
    cuisine: recipe.cuisine ?? null,
    totalTimeMinutes:
      typeof recipe.totalTimeMinutes === 'number' ? recipe.totalTimeMinutes : null,
    dietLabels: Array.isArray(recipe.dietLabels) ? recipe.dietLabels : [],
    kcal,
    servingsBase:
      typeof recipe.servingsBase === 'number' && recipe.servingsBase > 0
        ? recipe.servingsBase
        : 4,
    // Drop-in compatibility with <MealCard meal>, which reads
    // meal.nutritionPerServing?.energyKcal. Carrying only energyKcal keeps the
    // card tiny while letting the existing component render straight from a card.
    nutritionPerServing: kcal != null ? { energyKcal: kcal } : null,
  }
}

/**
 * Build the `home/feed` document body from every recipe doc and a facet tally.
 *
 * Pure: no Firebase, no network, no Date.now() in the returned data (the caller
 * stamps generatedAt with a server timestamp via writeDoc). Same inputs → same
 * output, so contentHash diffing leaves an unchanged corpus' feed un-rewritten.
 *
 * @param {Array<{id:string, data:object}>} recipeDocs  built recipe docs ({id,data})
 * @param {object} [facets]  the facets/global doc body (buildGlobalFacets output);
 *                           embedded so the home needs no separate facets read.
 * @returns {object} the home/feed document body (without generatedAt — see writeFeed)
 */
export function buildFeed(recipeDocs, facets = null) {
  // Accept either {id,data} build-doc envelopes or already-flat recipe objects.
  const recipes = (recipeDocs || [])
    .map((d) => (d && d.data ? { id: d.id, ...d.data } : d))
    .filter((r) => r && r.id && r.title)

  const rails = []
  for (const rail of RAILS) {
    let matched
    try {
      matched = recipes.filter(rail.match)
    } catch {
      matched = []
    }
    if (matched.length === 0) continue // never bake an empty shelf

    const comparator = COMPARATORS[rail.sort] || COMPARATORS.popularity
    const top = matched.slice().sort(comparator).slice(0, CARDS_PER_RAIL)

    rails.push({
      key: rail.key,
      title: rail.title,
      blurb: rail.blurb,
      apply: { ...rail.apply },
      cards: top.map(toCard),
    })
  }

  const facetSummary = buildFacetSummary(facets)

  return {
    version: SCHEMA_VERSION,
    totalRecipes: facetSummary.totalRecipes || recipes.length,
    rails,
    facets: facetSummary,
  }
}

// Normalise an embedded facets summary from a facets/global body. Defensive:
// missing arrays become []; totalRecipes falls back to 0.
function buildFacetSummary(facets) {
  const f = facets || {}
  const arr = (v) => (Array.isArray(v) ? v.map((e) => ({ value: e.value, count: e.count })) : [])
  return {
    cuisines: arr(f.cuisines),
    courses: arr(f.courses),
    dietLabels: arr(f.dietLabels),
    healthLabels: arr(f.healthLabels),
    totalRecipes: typeof f.totalRecipes === 'number' ? f.totalRecipes : 0,
  }
}

/**
 * Build the feed and write it to home/feed, diffed by contentHash so an
 * unchanged corpus rewrites nothing. NEVER throws: a feed-build/write failure is
 * logged and swallowed so it can never abort an ingestion run.
 *
 * @param {object} args
 * @param {FirebaseFirestore.Firestore} args.db
 * @param {Array<{id:string,data:object}>} args.recipeDocs  built recipe docs
 * @param {object} [args.facets]  facets/global body to embed
 * @param {object} args.helpers   { contentHash, serverTimestamp } from lib/firestore.js
 * @param {(...a:any)=>void} [args.log]
 * @returns {Promise<{written:boolean, railCount:number, totalCards:number}>}
 */
export async function writeFeed({ db, recipeDocs, facets = null, helpers, log = () => {} }) {
  try {
    const body = buildFeed(recipeDocs, facets)
    const totalCards = body.rails.reduce((n, r) => n + r.cards.length, 0)

    // Diff against the live doc by contentHash so an unchanged feed costs no
    // write. contentHash ignores the volatile generatedAt/contentHash fields.
    const ref = db.doc('home/feed')
    let existingHash = null
    try {
      const snap = await ref.get()
      if (snap.exists) existingHash = snap.data()?.contentHash || null
    } catch {
      existingHash = null // a read failure just means we (re)write; never fatal
    }

    const hash = helpers.contentHash(body)
    if (existingHash === hash) {
      log(`home/feed: unchanged (${body.rails.length} rails, ${totalCards} cards) — skipped.`)
      return { written: false, railCount: body.rails.length, totalCards }
    }

    await ref.set({
      ...body,
      contentHash: hash,
      generatedAt: helpers.serverTimestamp(),
    })
    log(`home/feed: wrote ${body.rails.length} rails, ${totalCards} cards.`)
    return { written: true, railCount: body.rails.length, totalCards }
  } catch (err) {
    log(`home/feed: build/write FAILED (non-fatal): ${err && err.message ? err.message : err}`)
    return { written: false, railCount: 0, totalCards: 0 }
  }
}

// Fields the feed cards + rail predicates need from a recipe doc. Projected via
// Firestore .select() so a live scan stays cheap (small docs, not whole recipes
// with embedded ingredients/instructions).
const FEED_FIELDS = [
  'title',
  'imageUrl',
  'course',
  'cuisine',
  'totalTimeMinutes',
  'dietLabels',
  'healthLabels',
  'popularity',
  'nutritionPerServing',
  'servingsBase',
]

/**
 * Project the LIVE recipes/ collection down to the lightweight fields the feed
 * needs, returning {id,data} envelopes ready for buildFeed. Used by the
 * checkpointed matrix/mega path, which only builds a SLICE of recipes per run —
 * so the feed must be assembled from the whole live collection, not this run's
 * slice. Reads only FEED_FIELDS per doc, never whole recipes.
 *
 * @param {FirebaseFirestore.Firestore} db
 * @returns {Promise<Array<{id:string, data:object}>>}
 */
export async function scanFeedRecipes(db) {
  const snap = await db.collection('recipes').select(...FEED_FIELDS).get()
  const docs = []
  snap.forEach((d) => {
    docs.push({ id: d.id, data: { id: d.id, ...d.data() } })
  })
  return docs
}

export { RAILS, CARDS_PER_RAIL, SCHEMA_VERSION, FEED_FIELDS, toCard }
