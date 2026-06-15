// Larder — basket state (CONTRACTS.md §3).
//
// React context + localStorage persistence (key 'larder.basket'). No Firestore
// writes ever happen here: the basket is purely client-side. The shopping list
// is computed from these recipe ids on the ShoppingList screen.
//
//   stored shape: { recipeIds: string[], householdSize: number }
//   default householdSize: 2
//
// Hook API (keep these names — they are the contract):
//   useBasket() => { recipeIds, householdSize, add, remove, clear,
//                    setHouseholdSize, has, count }

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
const DEFAULT_HOUSEHOLD_SIZE = 2
const HOUSEHOLD_MIN = 1
const HOUSEHOLD_MAX = 12

const BasketContext = createContext(null)

/** Clamp the household size to the supported range and coerce to a whole number. */
function clampHousehold(n) {
  const value = Number(n)
  if (!Number.isFinite(value)) return DEFAULT_HOUSEHOLD_SIZE
  return Math.min(HOUSEHOLD_MAX, Math.max(HOUSEHOLD_MIN, Math.round(value)))
}

/** Read the persisted basket from localStorage, tolerating absent or malformed data. */
function readStored() {
  if (typeof window === 'undefined') {
    return { recipeIds: [], householdSize: DEFAULT_HOUSEHOLD_SIZE }
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { recipeIds: [], householdSize: DEFAULT_HOUSEHOLD_SIZE }
    const parsed = JSON.parse(raw)
    const recipeIds = Array.isArray(parsed?.recipeIds)
      ? parsed.recipeIds.filter((id) => typeof id === 'string')
      : []
    // Deduplicate defensively in case storage was hand-edited.
    const unique = Array.from(new Set(recipeIds))
    return {
      recipeIds: unique,
      householdSize: clampHousehold(parsed?.householdSize ?? DEFAULT_HOUSEHOLD_SIZE),
    }
  } catch {
    return { recipeIds: [], householdSize: DEFAULT_HOUSEHOLD_SIZE }
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

  // Persist on every change.
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ recipeIds, householdSize })
      )
    } catch {
      // Storage may be unavailable (private mode / quota). The basket still
      // works for the session; we simply skip persistence.
    }
  }, [recipeIds, householdSize])

  // Keep multiple tabs in sync: react to writes made in another tab.
  useEffect(() => {
    if (typeof window === 'undefined') return
    function onStorage(event) {
      if (event.key !== STORAGE_KEY) return
      const next = readStored()
      setRecipeIds(next.recipeIds)
      setHouseholdSizeState(next.householdSize)
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const add = useCallback((id) => {
    if (typeof id !== 'string' || !id) return
    setRecipeIds((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }, [])

  const remove = useCallback((id) => {
    setRecipeIds((prev) => prev.filter((existing) => existing !== id))
  }, [])

  const clear = useCallback(() => {
    setRecipeIds([])
  }, [])

  const setHouseholdSize = useCallback((n) => {
    setHouseholdSizeState(clampHousehold(n))
  }, [])

  const has = useCallback((id) => recipeIds.includes(id), [recipeIds])

  const value = useMemo(
    () => ({
      recipeIds,
      householdSize,
      add,
      remove,
      clear,
      setHouseholdSize,
      has,
      count: recipeIds.length,
    }),
    [recipeIds, householdSize, add, remove, clear, setHouseholdSize, has]
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
