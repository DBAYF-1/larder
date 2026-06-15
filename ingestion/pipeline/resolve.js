// Stage 2 — resolve a parsed core phrase to a canonical ingredient.
//
// Resolution ladder (first hit wins):
//   1. EXACT       core (or a candidate key) equals a canonicalName/synonym.
//   2. SYNONYM     core mapped through the UK↔US table then matched.
//   3. STEMMED     singular/plural normalised match.
//   4. FUZZY       token-set ratio >= threshold against name/synonyms.
//   5. needsReview no confident match — ingredientId stays null.
//
// The resolver builds an in-memory index once from data/ingredients.js. Every
// canonical ingredient's id is the slug of its canonicalName (stable).

import { INGREDIENTS } from '../data/ingredients.js'
import { candidateKeys, toUkCanonical, singularise, pluralise } from './synonyms.js'

export const FUZZY_THRESHOLD = 0.62 // token-set ratio in [0,1]

/** Stable slug from a canonical name: lower-case, hyphenate, strip punctuation. */
export function slugify(name) {
  return String(name)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '') // strip accents
    .replace(/['’.]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Normalise a phrase for keying: lower, collapse spaces, drop punctuation. */
function norm(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/['’.,()]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function tokenSet(s) {
  return new Set(norm(s).split(' ').filter(Boolean))
}

/**
 * Token-set ratio in [0,1]: |intersection| / |union| of word sets, with a small
 * bonus when one phrase's tokens are a subset of the other ("chopped tomatoes"
 * vs "tomatoes"). Cheap, deterministic, good enough for ingredient matching.
 */
export function tokenSetRatio(a, b) {
  const sa = tokenSet(a)
  const sb = tokenSet(b)
  if (!sa.size || !sb.size) return 0
  let inter = 0
  for (const t of sa) if (sb.has(t)) inter++
  const union = sa.size + sb.size - inter
  const jaccard = inter / union
  // Subset bonus: if all of the smaller set is contained in the larger.
  const smaller = sa.size <= sb.size ? sa : sb
  const larger = sa.size <= sb.size ? sb : sa
  let contained = true
  for (const t of smaller) if (!larger.has(t)) { contained = false; break }
  const subsetScore = contained ? smaller.size / larger.size : 0
  return Math.max(jaccard, subsetScore * 0.95)
}

/**
 * Build the lookup index. Returns { byId, exact (Map key->id), records }.
 * `exact` keys cover canonicalName, synonyms, and their singular/plural forms.
 */
export function buildIndex(ingredients = INGREDIENTS) {
  const byId = new Map()
  const exact = new Map()
  const records = []

  const addKey = (key, id) => {
    const k = norm(key)
    if (k && !exact.has(k)) exact.set(k, id)
  }

  for (const ing of ingredients) {
    const id = slugify(ing.canonicalName)
    const rec = { id, ...ing }
    byId.set(id, rec)
    records.push(rec)

    const names = [ing.canonicalName, ...(ing.synonyms || [])]
    for (const name of names) {
      addKey(name, id)
      addKey(singularise(name), id)
      addKey(pluralise(name), id)
      // Synonym table folds US→UK; index the UK-canonical form too.
      addKey(toUkCanonical(name), id)
    }
  }

  return { byId, exact, records }
}

const DEFAULT_INDEX = buildIndex()

/**
 * Resolve a parsed line's core to a canonical ingredient.
 *
 * @param {string} core   the cleaned ingredient phrase from parse.js
 * @param {object} [index] optional prebuilt index (defaults to the seed index)
 * @returns {{
 *   ingredientId: string|null,
 *   canonicalName: string|null,
 *   ingredient: object|null,
 *   resolutionStatus: 'resolved'|'needsReview',
 *   method: 'exact'|'synonym'|'stemmed'|'fuzzy'|'none',
 *   score: number
 * }}
 */
export function resolveCore(core, index = DEFAULT_INDEX) {
  const phrase = norm(core)
  const miss = {
    ingredientId: null,
    canonicalName: null,
    ingredient: null,
    resolutionStatus: 'needsReview',
    method: 'none',
    score: 0,
  }
  if (!phrase) return miss

  // 1) EXACT (and synonym/stem candidate keys)
  const keys = candidateKeys(phrase)
  for (const key of keys) {
    const id = index.exact.get(norm(key))
    if (id) {
      const rec = index.byId.get(id)
      const method = key === phrase ? 'exact' : 'synonym'
      return hit(rec, method, 1)
    }
  }

  // 2) STEMMED — try a per-token singularisation of the whole phrase.
  const stemmed = norm(phrase.split(' ').map((w) => singularise(w)).join(' '))
  if (stemmed !== phrase) {
    const id = index.exact.get(stemmed)
    if (id) return hit(index.byId.get(id), 'stemmed', 1)
  }

  // 3) FUZZY — token-set ratio against every canonical name + synonym.
  let best = null
  let bestScore = 0
  for (const rec of index.records) {
    const candidates = [rec.canonicalName, ...(rec.synonyms || [])]
    for (const cand of candidates) {
      const score = tokenSetRatio(phrase, cand)
      if (score > bestScore) {
        bestScore = score
        best = rec
      }
    }
  }
  if (best && bestScore >= FUZZY_THRESHOLD) {
    return hit(best, 'fuzzy', bestScore)
  }

  return miss
}

function hit(rec, method, score) {
  return {
    ingredientId: rec.id,
    canonicalName: rec.canonicalName,
    ingredient: rec,
    resolutionStatus: 'resolved',
    method,
    score,
  }
}

export { DEFAULT_INDEX }
