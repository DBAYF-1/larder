// Larder — weekly meal planner model (roadmap #43).
//
// A localStorage-backed plan of the week: for each day (Mon–Sun) and meal slot
// (breakfast / lunch / dinner) you can assign a lightweight recipe ref. From the
// finished week you "Build this week's shopping list", which loads every assigned
// meal into the basket and writes one consolidated, aisle-sorted list.
//
// Pure helpers (emptyWeek / setSlot / removeSlot / assignedRecipeIds /
// countAssigned) are exported separately from the localStorage wrappers
// (readWeek / writeWeek / clearWeek) so the model logic is unit-testable without
// a DOM. No Firestore writes — the plan is purely client-side, like the basket.

const STORAGE_KEY = 'larder.planner.v1'

export const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
export const DAY_LABELS = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday',
}
export const SLOTS = ['breakfast', 'lunch', 'dinner']
export const SLOT_LABELS = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner',
}

// ── Pure model helpers ───────────────────────────────────────────────────────

/** A minimal recipe ref for a planned slot. */
export function toPlanRef(recipe) {
  if (!recipe || typeof recipe !== 'object') return null
  const id = typeof recipe.id === 'string' ? recipe.id : null
  if (!id) return null
  return {
    id,
    title: typeof recipe.title === 'string' ? recipe.title : '',
    imageUrl: typeof recipe.imageUrl === 'string' ? recipe.imageUrl : null,
  }
}

/** A fresh, empty week: every day an empty slot map. */
export function emptyWeek() {
  const days = {}
  for (const day of DAYS) days[day] = {}
  return { days }
}

/** Normalise any stored/partial value into a well-formed week. Pure. */
export function normaliseWeek(raw) {
  const week = emptyWeek()
  const days = raw && typeof raw === 'object' ? raw.days : null
  if (!days || typeof days !== 'object') return week
  for (const day of DAYS) {
    const slots = days[day]
    if (!slots || typeof slots !== 'object') continue
    for (const slot of SLOTS) {
      const ref = toPlanRef(slots[slot])
      if (ref) week.days[day][slot] = ref
    }
  }
  return week
}

/** Return a new week with `recipe` assigned to (day, slot). Pure. */
export function setSlot(week, day, slot, recipe) {
  if (!DAYS.includes(day) || !SLOTS.includes(slot)) return week
  const ref = toPlanRef(recipe)
  if (!ref) return week
  const next = normaliseWeek(week)
  next.days[day] = { ...next.days[day], [slot]: ref }
  return next
}

/** Return a new week with (day, slot) cleared. Pure. */
export function removeSlot(week, day, slot) {
  if (!DAYS.includes(day) || !SLOTS.includes(slot)) return week
  const next = normaliseWeek(week)
  const daySlots = { ...next.days[day] }
  delete daySlots[slot]
  next.days[day] = daySlots
  return next
}

/** Every distinct assigned recipe id across the week (insertion order). Pure. */
export function assignedRecipeIds(week) {
  const w = normaliseWeek(week)
  const ids = []
  const seen = new Set()
  for (const day of DAYS) {
    for (const slot of SLOTS) {
      const ref = w.days[day][slot]
      if (ref && !seen.has(ref.id)) {
        seen.add(ref.id)
        ids.push(ref.id)
      }
    }
  }
  return ids
}

/** How many slots are filled (counts repeats — it's a slot count). Pure. */
export function countAssigned(week) {
  const w = normaliseWeek(week)
  let n = 0
  for (const day of DAYS) for (const slot of SLOTS) if (w.days[day][slot]) n += 1
  return n
}

// ── localStorage-backed API (SSR-safe) ───────────────────────────────────────

export function readWeek() {
  if (typeof window === 'undefined') return emptyWeek()
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyWeek()
    return normaliseWeek(JSON.parse(raw))
  } catch {
    return emptyWeek()
  }
}

export function writeWeek(week) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normaliseWeek(week)))
  } catch {
    // Storage unavailable — the plan persists for the session only.
  }
}

export function clearWeek() {
  writeWeek(emptyWeek())
}
