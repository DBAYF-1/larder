// Larder — privacy-friendly, device-only personalisation signals (roadmap #39).
//
// We record a tiny, bounded history of the meals a visitor opens (no account, no
// PII, no Firestore writes — purely localStorage on THIS device) and derive two
// cheap signals from it:
//   - recentlyViewed: the most-recent N distinct meals (lightweight refs),
//   - affinities: the visitor's top cuisines / courses by view count.
// Browse uses these to surface a "For you" rail built ONLY from the home/feed
// cards already in memory — it never costs an extra read.
//
// The pure derivations (mergeView / deriveAffinities) are exported separately so
// they are trivially unit-testable without a DOM/localStorage; the localStorage
// wrappers (recordView / getRecentlyViewed / getAffinities) build on them.

const STORAGE_KEY = 'larder.personalize.v1'
// Keep the history bounded: enough to personalise, small enough to stay cheap and
// to bound how much a shared device reveals.
const MAX_VIEWS = 30

// ── Pure derivations (no DOM) ────────────────────────────────────────────────

/** A clean, minimal recipe ref for the history — only the fields the rail needs. */
export function toViewRef(recipe) {
  if (!recipe || typeof recipe !== 'object') return null
  const id = typeof recipe.id === 'string' ? recipe.id : null
  if (!id) return null
  return {
    id,
    title: typeof recipe.title === 'string' ? recipe.title : '',
    imageUrl: typeof recipe.imageUrl === 'string' ? recipe.imageUrl : null,
    cuisine: typeof recipe.cuisine === 'string' ? recipe.cuisine : '',
    course: typeof recipe.course === 'string' ? recipe.course : '',
  }
}

/**
 * Prepend `ref` to `views`, most-recent-first, de-duplicated by id, capped.
 * Re-viewing a meal moves it to the front (and refreshes its stored fields).
 * Pure — returns a new array, never mutates the input.
 *
 * @param {Array} views existing history (most-recent first)
 * @param {object} ref  a view ref (see toViewRef)
 * @param {number} [cap]
 * @returns {Array}
 */
export function mergeView(views, ref, cap = MAX_VIEWS) {
  const clean = toViewRef(ref)
  if (!clean) return Array.isArray(views) ? views.slice(0, cap) : []
  const prior = Array.isArray(views) ? views.filter((v) => v && v.id !== clean.id) : []
  return [clean, ...prior].slice(0, cap)
}

/**
 * Count cuisines and courses across the view history into descending-frequency
 * tallies. Pure.
 *
 * @param {Array} views
 * @returns {{cuisines:Array<{value:string,count:number}>,
 *            courses:Array<{value:string,count:number}>}}
 */
export function deriveAffinities(views) {
  const list = Array.isArray(views) ? views : []
  const cuisineCounts = new Map()
  const courseCounts = new Map()
  for (const v of list) {
    if (v && v.cuisine) cuisineCounts.set(v.cuisine, (cuisineCounts.get(v.cuisine) || 0) + 1)
    if (v && v.course) courseCounts.set(v.course, (courseCounts.get(v.course) || 0) + 1)
  }
  const rank = (m) =>
    [...m.entries()]
      .map(([value, count]) => ({ value, count }))
      .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value))
  return { cuisines: rank(cuisineCounts), courses: rank(courseCounts) }
}

// ── localStorage-backed API (SSR-safe) ───────────────────────────────────────

function readViews() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .map(toViewRef)
      .filter(Boolean)
      .slice(0, MAX_VIEWS)
  } catch {
    return []
  }
}

function writeViews(views) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(views.slice(0, MAX_VIEWS)))
  } catch {
    // Storage unavailable (private mode / quota) — personalisation simply
    // doesn't persist this session. Never load-bearing.
  }
}

/** Record that the visitor opened a meal. No-ops safely without storage. */
export function recordView(recipe) {
  const next = mergeView(readViews(), recipe)
  writeViews(next)
  return next
}

/** The most-recent distinct meals (lightweight refs), newest first. */
export function getRecentlyViewed(limit = 12) {
  return readViews().slice(0, Math.max(0, limit))
}

/** Top cuisines / courses by view count on this device. */
export function getAffinities() {
  return deriveAffinities(readViews())
}

/** Whether there is any history at all (so callers can hide the "For you" rail). */
export function hasHistory() {
  return readViews().length > 0
}

/** Forget everything (offered in the privacy notice). */
export function clearSignals() {
  writeViews([])
}
