// ============================================================================
// Larder — 10,000-recipe, every-diet catalogue expansion.
//
// DESIGN ARTEFACT — do NOT auto-run. Launch deliberately with:
//     Workflow({ name: "catalogue-10k" })
// Full design + sourcing/quota/legal rationale: docs/CATALOGUE_10K_DESIGN.md
//
// Prerequisites before running (see design §1.x):
//   - EDAMAM_ID / EDAMAM_KEY GitHub secrets (paid Recipe Search tier) — the only
//     realistic path to 10K; without them the ceiling is ~3–4k.
//   - THEMEALDB_KEY supporter key (lifts the 100-item list cap).
//   - A decision on free-spread vs a Blaze window for the write burst.
//
// Two-layer model: this Workflow (LLM agents) BUILDS the machine + the guaranteed
// curated content + the verification/audit harness. The produced Engine (Node on
// GitHub Actions, checkpointed, across scheduled runs) FILLS the catalogue to 10K.
// ============================================================================

export const meta = {
  name: 'catalogue-10k',
  description: 'Expand Larder to 10,000+ recipes covering every dietary variation: build the Edamam matrix harvester + quota-safe checkpointed writer, author per-diet curated floors, expand the ingredient dictionary, adversarially verify diet/allergen labels, and audit coverage.',
  whenToUse: 'Only when scaling the recipe catalogue to ~10k with full per-diet coverage, after Edamam keys are in place. Large and long-running.',
  phases: [
    { title: 'Plan' },
    { title: 'Engine' },
    { title: 'Curated' },
    { title: 'Dictionary' },
    { title: 'Verify' },
    { title: 'Audit' },
  ],
}

const ROOT = '/Users/danielb/meals'
const ING = `${ROOT}/ingestion`

// Per-label recipe floors. Recipes are multi-labelled, so the unique total is
// ~10k while these are the per-diet minimums the Audit phase enforces. `exclude`
// drives the adversarial Verify phase (the diet's forbidden ingredient classes).
const DIETS = [
  { key: 'vegetarian', label: 'Vegetarian', floor: 2000, exclude: 'meat, poultry, fish, shellfish, gelatine, animal rennet, lard, suet' },
  { key: 'vegan', label: 'Vegan', floor: 1500, exclude: 'all animal products: meat, fish, dairy, eggs, honey, gelatine' },
  { key: 'pescatarian', label: 'Pescatarian', floor: 800, exclude: 'meat and poultry (fish/seafood allowed)' },
  { key: 'gluten-free', label: 'Gluten-free', floor: 1400, exclude: 'wheat, barley, rye, spelt, malt, regular flour, couscous, semolina, most soy sauce' },
  { key: 'dairy-free', label: 'Dairy-free', floor: 1000, exclude: 'milk, butter, cheese, cream, yoghurt, ghee, whey, casein' },
  { key: 'low-carb-keto', label: 'Low-carb / Keto', floor: 1100, exclude: 'sugar, flour, bread, pasta, rice, potatoes, most fruit (very low net carbs)' },
  { key: 'high-protein', label: 'High-protein', floor: 900, exclude: 'nothing forbidden — must be protein-dense (≥ ~25 g/serving)' },
  { key: 'mediterranean', label: 'Mediterranean', floor: 700, exclude: 'heavy processed/red meat; emphasises veg, fish, olive oil, pulses, wholegrains' },
  { key: 'low-calorie', label: 'Low-calorie (Slimming)', floor: 700, exclude: 'nothing forbidden — must be ≤ ~500 kcal/serving' },
  { key: 'halal', label: 'Halal', floor: 600, exclude: 'pork, lard, gelatine of non-halal origin, alcohol' },
  { key: 'nut-free', label: 'Nut-free', floor: 600, exclude: 'peanuts and all tree nuts (almond, cashew, walnut, hazelnut, pecan, pistachio, etc.)' },
  { key: 'diabetic', label: 'Diabetic / low-sugar', floor: 500, exclude: 'added sugar, syrups, high-GI refined carbs' },
  { key: 'paleo', label: 'Paleo', floor: 400, exclude: 'grains, legumes, dairy, refined sugar, processed foods' },
  { key: 'egg-free', label: 'Egg-free', floor: 350, exclude: 'eggs and egg-derived ingredients (mayonnaise, some pasta)' },
  { key: 'soy-free', label: 'Soy-free', floor: 300, exclude: 'soy, soya, tofu, tempeh, edamame, soy sauce, miso' },
  { key: 'fodmap', label: 'Low-FODMAP', floor: 300, exclude: 'onion, garlic, wheat, certain pulses, lactose, high-fructose fruit' },
  { key: 'dash', label: 'DASH / low-sodium', floor: 300, exclude: 'high-salt and processed/cured ingredients' },
  { key: 'kosher', label: 'Kosher', floor: 300, exclude: 'pork, shellfish, mixing meat and dairy' },
  { key: 'shellfish-free', label: 'Shellfish-free', floor: 300, exclude: 'crustaceans and molluscs (prawns, crab, mussels, etc.)' },
  { key: 'sesame-free', label: 'Sesame-free', floor: 250, exclude: 'sesame seeds, tahini, sesame oil' },
]

const CUISINES = ['British', 'Italian', 'Indian', 'Thai', 'Chinese', 'Mexican', 'French', 'Greek', 'Middle Eastern', 'Japanese', 'American', 'Spanish', 'Caribbean', 'Turkish']
const COURSES = ['Breakfast', 'Lunch', 'Dinner', 'Side', 'Dessert', 'Snack']

const MANIFEST = {
  type: 'object',
  properties: {
    summary: { type: 'string' },
    filesWritten: { type: 'array', items: { type: 'string' } },
    recordCount: { type: 'number' },
    notes: { type: 'array', items: { type: 'string' } },
  },
  required: ['summary'],
  additionalProperties: false,
}

const DIET_LIST = DIETS.map((d) => `${d.label} (floor ${d.floor})`).join('; ')
const COMMON = `
You are scaling the "Larder" UK meal-planning catalogue to 10,000+ recipes at ${ROOT}.
Read for context FIRST: ${ROOT}/docs/CATALOGUE_10K_DESIGN.md, ${ROOT}/CONTRACTS.md (§1 doc shapes),
${ING}/sources/themealdb.js + ${ING}/sources/curated.js (the source-recipe shape every source must emit),
${ING}/data/ingredients.js (the canonical dictionary).
Hard rules: ES modules; British English; LEGALLY CLEAN (no scraping; full method only for TheMealDB/curated;
Edamam is link-out: instructions=null, instructionsExternal=true, "Powered by Edamam"); colours via tokens only.
Only create the files YOU own; do not edit another agent's files. Do not run git. Return a concise manifest.
`

// ── Phase 1 · Plan ───────────────────────────────────────────────────────────
// Barrier: the Engine phase needs the matrix file before it can build the harvester.
phase('Plan')
await parallel([
  () => agent(`${COMMON}

Author the harvest plan. WRITE ${ING}/data/diet-matrix.json — a structured plan that, when executed by the
Engine, yields ≥10,000 UNIQUE recipes with these per-label floors: ${DIET_LIST}.
For each diet, map it to Edamam \`health\`/\`diet\` query params, the cuisines (${CUISINES.join(', ')}) and
meal types (${COURSES.join(', ')}) to sweep, an estimated yield, and a dedup key (recipe URI). Include a
"top1000" pass listing the highest-traffic British + global dishes to harvest and QA first so "Most popular"
and the home rails are dense from day one. Output valid JSON: { topPriorityDishes:[...], diets:[{key,label,
floor,edamamHealth,edamamDiet,cuisines,mealTypes,estPerQuery}], dedup:"uri", totalFloor:10000 }.`,
    { label: 'plan:matrix', phase: 'Plan', schema: MANIFEST }),
  () => agent(`${COMMON}

Author the sourcing + quota + backfill plan as ${ING}/data/BACKFILL_PLAN.md: how 10K splits across TheMealDB
(supporter, full), curated (per-diet floors), and Edamam (link-out remainder); the Firestore write-budget
spread (≤ ~4,500 writes/run under the 20K/day free cap, checkpointed via system/backfill_progress, resuming
each scheduled run); Edamam rate-limit/tier handling (backoff, page caps); and the composite-index additions
needed for diet filtering. Be concrete with numbers.`,
    { label: 'plan:quota', phase: 'Plan', schema: MANIFEST }),
])

// ── Phase 2 · Engine ─────────────────────────────────────────────────────────
phase('Engine')
const engine = await parallel([
  () => agent(`${COMMON}

Implement the full Edamam harvester: ${ING}/sources/edamam.js. Read ${ING}/data/diet-matrix.json and sweep the
matrix via the Edamam Recipe Search API (EDAMAM_ID/EDAMAM_KEY env), paginating through _links.next up to a
per-query page cap, deduping by recipe URI across the whole matrix. Map each hit to the SAME source-recipe shape
mapMeal/mapCurated emit, with: source:'edamam', instructions:null, instructionsExternal:true, publisher + sourceUrl
(the publisher link), imageUrl (Edamam thumb), dietLabels/healthLabels/cautions(->allergens) and nutrition FROM
the API, rawLines from ingredientLines. Respect rate limits (backoff on 429, tier page caps). If keys are unset,
export a function that returns [] and logs "Edamam skipped (no keys)" (same contract as today). NO method text is
ever stored for Edamam recipes.`,
    { label: 'engine:edamam', phase: 'Engine', schema: MANIFEST }),
  () => agent(`${COMMON}

Implement the quota-safe CHECKPOINTED backfill writer in ${ING}/lib/firestore.js (extend, do not break existing
diffAndWrite). Add a backfill driver that: reads/writes system/backfill_progress { matrixCursor, urisSeen,
recipesWritten, lastRunFinished }; on each invocation resumes at matrixCursor; writes AT MOST a configurable
cap (default 4500) of changed docs (recipes + new ingredients + facet deltas) per run via batched writes; then
persists the cursor and exits cleanly so the next scheduled run continues. contentHash diffing must keep
steady-state re-runs near-free. Never exceed the cap in one run.`,
    { label: 'engine:writer', phase: 'Engine', schema: MANIFEST }),
  () => agent(`${COMMON}

Upgrade ${ING}/ingest.js to a matrix-driven harvest: add --source edamam-matrix and --source mega (themealdb +
curated + edamam-matrix), driving the checkpointed writer so a run stops at the write cap and resumes next time.
Recompute facets/global AND a new facets/diets doc (per-diet counts) so a diet filter + counts is one client read.
Add the diet composite indexes to ${ROOT}/firestore.indexes.json: (healthLabels CONTAINS, popularity desc),
(cuisine, healthLabels CONTAINS, popularity desc), (course, healthLabels CONTAINS, popularity desc),
(dietLabels CONTAINS, totalTimeMinutes asc). Keep all existing flags (--source all/themealdb/curated, --limit,
--dry-run) working. Update ${ROOT}/.github/workflows/ingest.yml to run --source mega (still idempotent).`,
    { label: 'engine:ingest', phase: 'Engine', schema: MANIFEST }),
])

// ── Phase 3 · Curated (per-diet floors, fully displayable) ──────────────────
// One agent per diet authors a large fully-displayable set so every floor is met
// even before Edamam. (To go further, wrap each in a loop-until-floor — see Audit.)
phase('Curated')
const curated = await parallel(
  DIETS.map((d) => () =>
    agent(`${COMMON}

Author a large CURATED, FULLY-DISPLAYABLE recipe set for the "${d.label}" diet. WRITE
${ING}/data/curated/diet-${d.key}.js -> \`export default [ ...recipes ]\` (the culinary-content shape from
${ING}/data/curated/mains.js; sources/curated.js adds boilerplate + generated images). Author ~60 genuine,
varied UK-friendly recipes that STRICTLY satisfy "${d.label}" — every recipe must EXCLUDE: ${d.exclude}. Tag
dietLabels/healthLabels honestly (a dish may also be e.g. gluten-free). Original British-English method prose,
realistic rawLines using the canonical dictionary vocabulary. Validate it loads and report recordCount. These
seed the per-diet floor that the Audit phase tops up.`,
      { label: `curated:${d.key}`, phase: 'Curated', schema: MANIFEST }),
  ),
)

// ── Phase 4 · Dictionary (loop-until-dry on the new long tail) ──────────────
phase('Dictionary')
const dictBatches = []
let dryRounds = 0
for (let round = 0; round < 5 && dryRounds < 2; round++) {
  const r = await agent(`${COMMON}

Raise ingredient resolution for the EXPANDED corpus. Run ${ING}/scripts/validateDict.mjs (or the resolver over
the curated diet sets + diet-matrix anticipated ingredients) to list still-unresolved cores. Author canonical
records (full schema, see ${ING}/data/ingredients/core.js) for a fresh batch of ~50 of them into a NEW file
${ING}/data/ingredients/diet-longtail-${round}.js (\`export default [...]\`), folding variants into synonyms.
Report recordCount as newRecords. If nothing meaningful remains unresolved, write an empty array and report
newRecords 0.`,
    { label: `dict:round-${round}`, phase: 'Dictionary', schema: { type: 'object', properties: { summary: { type: 'string' }, newRecords: { type: 'number' } }, required: ['summary', 'newRecords'], additionalProperties: false } })
  dictBatches.push(r)
  if (!r || !r.newRecords) dryRounds++
  else dryRounds = 0
}

// ── Phase 5 · Verify (adversarial diet / allergen accuracy) ─────────────────
// Accuracy is the constrained-eater's entire trust (spec persona). Each diet gets
// a skeptic that REFUTES mislabels by matching ingredient lines to the exclusion list.
phase('Verify')
const verdicts = await parallel(
  DIETS.map((d) => () =>
    agent(`${COMMON}

Adversarially VERIFY the "${d.label}" labelling. The diet FORBIDS: ${d.exclude}. Inspect every recipe tagged
"${d.label}" in the curated diet sets (and a sample plan for the Edamam-harvested ones) by matching their
resolved ingredient lines against that exclusion list. DEFAULT TO REJECT when uncertain. For each violation,
either correct the recipe or REMOVE the "${d.label}" label — never guess a clean label onto a dirty recipe.
Write your corrections to ${ING}/data/curated/diet-${d.key}.js (only that file) and report how many you
rejected/relabelled. This gate protects allergy-sensitive users; be ruthless.`,
      { label: `verify:${d.key}`, phase: 'Verify', schema: MANIFEST }),
  ),
)

// ── Phase 6 · Audit (completeness critic vs the floors) ─────────────────────
phase('Audit')
const audit = await agent(`${COMMON}

Completeness audit. Compute, per diet, how many verified curated recipes now exist vs the floor
(${DIET_LIST}), plus the projected Edamam yield from diet-matrix.json, and the projected UNIQUE total.
Produce ${ING}/data/COVERAGE_REPORT.md: a per-diet table (floor / curated / projected / gap), the top-1000
coverage status, the Firestore write-budget schedule to land it all under the free cap, and a prioritised
GAP LIST (which diets need another curated round or a wider Edamam sweep). Flag anything below floor. State
clearly that the actual 10K fill happens via the Engine on scheduled GitHub Actions runs (this Workflow built
the machine + the verified floors).`,
  { label: 'audit:coverage', phase: 'Audit', schema: MANIFEST })

return {
  diets: DIETS.length,
  engineFiles: engine,
  curatedSets: curated.filter(Boolean).length,
  dictionaryRounds: dictBatches.length,
  verified: verdicts.filter(Boolean).length,
  audit,
}
