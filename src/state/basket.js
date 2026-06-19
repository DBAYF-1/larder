// Larder — basket state (CONTRACTS.md §3) + retention helpers (roadmap #11, #24, #28).
//
// React context + localStorage persistence (key 'larder.basket'). No Firestore
// writes ever happen here: the basket is purely client-side. The shopping list
// is computed from these recipe ids on the ShoppingList screen.
//
//   stored shape: { recipeIds: string[], householdSize: number,
//                   portions: Record<recipeId, number> }
//   default householdSize: 2
//
// Hook API (keep these names — they are the contract):
//   useBasket() => { recipeIds, householdSize, portions, add, remove, clear,
//                    setHouseholdSize, setPortion, clearPortion, has, count,
//                    effectiveHousehold(id), replaceBasket(state) }
//
// `portions` (roadmap #28) is a per-recipe serving override: when a recipe id
// has an entry, the shopping list scales THAT recipe to its own people count
// instead of the global household size. buildShoppingList's signature is
// unchanged — callers pass the right per-recipe factor inputs it already accepts
// (we expose `effectiveHousehold(id)` so a screen can build the per-recipe
// shopping list correctly).
//
// This module also exports two retention helpers used by the ShoppingList and
// Saved screens but kept here so the basket is the single source of truth:
//   - URL codec (roadmap #11): encodeBasketParams / decodeBasketParams so a list
//     is shareable, persistent, deep-linkable and recoverable via the URL.
//   - Saved lists (roadmap #24): listSavedLists / saveList / removeSavedList /
//     clearSavedLists — localStorage snapshots, no auth, no backend.

// Note: this file is named `basket.js` (per the contract), not `.jsx`. It uses
// React.createElement instead of JSX so it stays valid plain JavaScript and does
// not depend on a JSX loader being configured for `.js` files.
import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

const STORAGE_KEY = 'larder.basket'
const SAVED_KEY = 'larder.savedLists'
const DEFAULT_HOUSEHOLD_SIZE = 2
const HOUSEHOLD_MIN = 1
const HOUSEHOLD_MAX = 12
// A hard cap on the basket (roadmap #26 hygiene): keeps the fan-out of recipe /
// ingredient reads bounded and the shareable URL a sane length.
const BASKET_MAX = 50
const SAVED_MAX = 50

const BasketContext = createContext(null)

/** Clamp the household / portion size to the supported range, coerced to whole. */
function clampHousehold(n) {
  const value = Number(n)
  if (!Number.isFinite(value)) return DEFAULT_HOUSEHOLD_SIZE
  return Math.min(HOUSEHOLD_MAX, Math.max(HOUSEHOLD_MIN, Math.round(value)))
}

/** Coerce a stored/URL portions object into a clean {id:cleanInt} map. */
function cleanPortions(raw, allowedIds) {
  if (!raw || typeof raw !== 'object') return {}
  const allow = allowedIds ? new Set(allowedIds) : null
  const out = {}
  for (const [id, value] of Object.entries(raw)) {
    if (typeof id !== 'string' || !id) continue
    if (allow && !allow.has(id)) continue
    const n = Number(value)
    if (!Number.isFinite(n)) continue
    out[id] = clampHousehold(n)
  }
  return out
}

/** Read the persisted basket from localStorage, tolerating absent/malformed data. */
function readStored() {
  if (typeof window === 'undefined') {
    return { recipeIds: [], householdSize: DEFAULT_HOUSEHOLD_SIZE, portions: {} }
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return { recipeIds: [], householdSize: DEFAULT_HOUSEHOLD_SIZE, portions: {} }
    }
    const parsed = JSON.parse(raw)
    const recipeIds = Array.isArray(parsed?.recipeIds)
      ? parsed.recipeIds.filter((id) => typeof id === 'string')
      : []
    // Deduplicate defensively in case storage was hand-edited; honour the cap.
    const unique = Array.from(new Set(recipeIds)).slice(0, BASKET_MAX)
    return {
      recipeIds: unique,
      householdSize: clampHousehold(parsed?.householdSize ?? DEFAULT_HOUSEHOLD_SIZE),
      // Only keep portion overrides for ids actually in the basket.
      portions: cleanPortions(parsed?.portions, unique),
    }
  } catch {
    return { recipeIds: [], householdSize: DEFAULT_HOUSEHOLD_SIZE, portions: {} }
  }
}

export function BasketProvider({ children }) {
  const initial = useRef(null)
  if (initial.current === null) {
    initial.current = readStored()
  }

  const [recipeIds, setRecipeIds] = useState(initial.current.recipeIds)
  const [householdSize, setHouseholdSizeState] = useState(
    initial.current.householdSize
  )
  const [portions, setPortionsState] = useState(initial.current.portions)

  // Persist on every change.
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ recipeIds, householdSize, portions })
      )
    } catch {
      // Storage may be unavailable (private mode / quota). The basket still
      // works for the session; we simply skip persistence.
    }
  }, [recipeIds, householdSize, portions])

  // Keep multiple tabs in sync: react to writes made in another tab.
  useEffect(() => {
    if (typeof window === 'undefined') return
    function onStorage(event) {
      if (event.key !== STORAGE_KEY) return
      const next = readStored()
      setRecipeIds(next.recipeIds)
      setHouseholdSizeState(next.householdSize)
      setPortionsState(next.portions)
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const add = useCallback((id) => {
    if (typeof id !== 'string' || !id) return
    setRecipeIds((prev) => {
      if (prev.includes(id)) return prev
      if (prev.length >= BASKET_MAX) return prev
      return [...prev, id]
    })
  }, [])

  const remove = useCallback((id) => {
    setRecipeIds((prev) => prev.filter((existing) => existing !== id))
    // Drop any portion override for a removed recipe so it can't go stale.
    setPortionsState((prev) => {
      if (!(id in prev)) return prev
      const next = { ...prev }
      delete next[id]
      return next
    })
  }, [])

  const clear = useCallback(() => {
    setRecipeIds([])
    setPortionsState({})
  }, [])

  const setHouseholdSize = useCallback((n) => {
    setHouseholdSizeState(clampHousehold(n))
  }, [])

  // Per-recipe portion override (roadmap #28). Setting a portion equal to the
  // current household size clears the override (it adds nothing); this keeps the
  // stored shape tidy and the shopping-list signature unchanged.
  const setPortion = useCallback(
    (id, n) => {
      if (typeof id !== 'string' || !id) return
      setPortionsState((prev) => {
        const value = clampHousehold(n)
        const next = { ...prev }
        next[id] = value
        return next
      })
    },
    []
  )

  const clearPortion = useCallback((id) => {
    setPortionsState((prev) => {
      if (!(id in prev)) return prev
      const next = { ...prev }
      delete next[id]
      return next
    })
  }, [])

  const has = useCallback((id) => recipeIds.includes(id), [recipeIds])

  // The serving count a given recipe should scale to: its own override if set,
  // else the global household size. Screens pass this into buildShoppingList as
  // the per-recipe householdSize (the engine already scales per recipe).
  const effectiveHousehold = useCallback(
    (id) => {
      const override = portions[id]
      return typeof override === 'number' ? override : householdSize
    },
    [portions, householdSize]
  )

  // Replace the whole basket atomically — used to rehydrate from a shared URL
  // (roadmap #11) and to "shop again" from a saved list (roadmap #24).
  const replaceBasket = useCallback((state) => {
    const ids = Array.isArray(state?.recipeIds)
      ? Array.from(
          new Set(state.recipeIds.filter((id) => typeof id === 'string' && id))
        ).slice(0, BASKET_MAX)
      : []
    setRecipeIds(ids)
    setHouseholdSizeState(clampHousehold(state?.householdSize ?? DEFAULT_HOUSEHOLD_SIZE))
    setPortionsState(cleanPortions(state?.portions, ids))
  }, [])

  const value = useMemo(
    () => ({
      recipeIds,
      householdSize,
      portions,
      add,
      remove,
      clear,
      setHouseholdSize,
      setPortion,
      clearPortion,
      has,
      effectiveHousehold,
      replaceBasket,
      count: recipeIds.length,
    }),
    [
      recipeIds,
      householdSize,
      portions,
      add,
      remove,
      clear,
      setHouseholdSize,
      setPortion,
      clearPortion,
      has,
      effectiveHousehold,
      replaceBasket,
    ]
  )

  return createElement(BasketContext.Provider, { value }, children)
}

export function useBasket() {
  const ctx = useContext(BasketContext)
  if (ctx === null) {
    throw new Error('useBasket must be used within a <BasketProvider>')
  }
  return ctx
}

// ── URL codec (roadmap #11) ───────────────────────────────────────────────────
// Encode a basket into URL search params so the shopping list is shareable,
// persistent, deep-linkable and recoverable on any device:
//   /list?meals=<id>,<id>&n=<household>&portions=<id>:<n>,<id>:<n>
// Recipe ids are comma-joined (Firestore ids are URL-safe word/dash/underscore
// tokens); only portion overrides that differ from the household size are
// emitted, keeping the link short.

/**
 * @param {{recipeIds:string[], householdSize:number, portions?:Record<string,number>}} basket
 * @returns {URLSearchParams}
 */
export function encodeBasketParams(basket) {
  const params = new URLSearchParams()
  const ids = Array.isArray(basket?.recipeIds)
    ? basket.recipeIds.filter((id) => typeof id === 'string' && id)
    : []
  if (ids.length > 0) params.set('meals', ids.join(','))

  const household = clampHousehold(basket?.householdSize ?? DEFAULT_HOUSEHOLD_SIZE)
  params.set('n', String(household))

  const portions = basket?.portions || {}
  const pairs = []
  for (const id of ids) {
    const value = portions[id]
    if (typeof value === 'number' && value !== household) {
      pairs.push(`${id}:${clampHousehold(value)}`)
    }
  }
  if (pairs.length > 0) params.set('portions', pairs.join(','))

  return params
}

/**
 * Decode basket state from URL search params. Returns null when there are no
 * meals to rehydrate (so callers can fall back to the persisted basket).
 *
 * @param {URLSearchParams|string} input
 * @returns {{recipeIds:string[], householdSize:number, portions:Record<string,number>}|null}
 */
export function decodeBasketParams(input) {
  const params =
    typeof input === 'string' ? new URLSearchParams(input) : input
  if (!params || typeof params.get !== 'function') return null

  const mealsRaw = params.get('meals')
  if (!mealsRaw) return null
  const recipeIds = Array.from(
    new Set(
      mealsRaw
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    )
  ).slice(0, BASKET_MAX)
  if (recipeIds.length === 0) return null

  const householdSize = clampHousehold(params.get('n') ?? DEFAULT_HOUSEHOLD_SIZE)

  const allowed = new Set(recipeIds)
  const portions = {}
  const portionsRaw = params.get('portions')
  if (portionsRaw) {
    for (const pair of portionsRaw.split(',')) {
      const idx = pair.lastIndexOf(':')
      if (idx <= 0) continue
      const id = pair.slice(0, idx).trim()
      const n = Number(pair.slice(idx + 1))
      if (!id || !allowed.has(id) || !Number.isFinite(n)) continue
      portions[id] = clampHousehold(n)
    }
  }

  return { recipeIds, householdSize, portions }
}

// ── Saved lists (roadmap #24) ─────────────────────────────────────────────────
// localStorage snapshots of a built list, so a shopper can "shop again from last
// week". No auth, no backend. Each snapshot:
//   { id, title, recipeIds:string[], householdSize:number,
//     portions:Record<string,number>, checked:string[], builtAt:number }
// `checked` is the set of ticked item keys (so a re-opened list remembers what
// you already had). `builtAt` is supplied by the caller (the screen has the
// clock; this module stays free of Date.now so its codec helpers stay pure).

function readSaved() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(SAVED_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (s) => s && typeof s.id === 'string' && Array.isArray(s.recipeIds)
    )
  } catch {
    return []
  }
}

function writeSaved(list) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(SAVED_KEY, JSON.stringify(list.slice(0, SAVED_MAX)))
  } catch {
    // Storage unavailable — saving simply no-ops this session.
  }
}

/** All saved lists, newest first. */
export function listSavedLists() {
  return readSaved().sort((a, b) => (b.builtAt || 0) - (a.builtAt || 0))
}

/**
 * Snapshot the current list. The caller supplies builtAt (and an optional id);
 * an existing snapshot with the same id is replaced (so re-saving updates the
 * tick state in place rather than piling up duplicates).
 *
 * @param {{id?:string, title?:string, recipeIds:string[], householdSize:number,
 *          portions?:Record<string,number>, checked?:string[], builtAt:number}} snapshot
 * @returns {object} the stored snapshot (with its resolved id)
 */
export function saveList(snapshot) {
  const recipeIds = Array.isArray(snapshot?.recipeIds)
    ? Array.from(new Set(snapshot.recipeIds.filter((id) => typeof id === 'string' && id)))
    : []
  const builtAt =
    typeof snapshot?.builtAt === 'number' ? snapshot.builtAt : 0
  const id =
    typeof snapshot?.id === 'string' && snapshot.id
      ? snapshot.id
      : `list_${builtAt}_${Math.abs(hashIds(recipeIds))}`

  const record = {
    id,
    title:
      typeof snapshot?.title === 'string' && snapshot.title.trim()
        ? snapshot.title.trim()
        : defaultTitle(recipeIds.length),
    recipeIds,
    householdSize: clampHousehold(snapshot?.householdSize ?? DEFAULT_HOUSEHOLD_SIZE),
    portions: cleanPortions(snapshot?.portions, recipeIds),
    checked: Array.isArray(snapshot?.checked)
      ? snapshot.checked.filter((k) => typeof k === 'string')
      : [],
    builtAt,
  }

  const existing = readSaved().filter((s) => s.id !== id)
  writeSaved([record, ...existing])
  return record
}

/** Remove a saved list by id. */
export function removeSavedList(id) {
  writeSaved(readSaved().filter((s) => s.id !== id))
}

/** Remove every saved list. */
export function clearSavedLists() {
  writeSaved([])
}

/** A stable default title from the meal count. */
function defaultTitle(count) {
  if (count <= 0) return 'Saved list'
  return `${count} ${count === 1 ? 'meal' : 'meals'} list`
}

/** Cheap deterministic hash for a default snapshot id. */
function hashIds(ids) {
  const str = ids.join('|')
  let h = 0
  for (let i = 0; i < str.length; i += 1) h = (h * 31 + str.charCodeAt(i)) | 0
  return h
}
