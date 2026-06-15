// Larder — pure humanise/round helpers (spec Section 5, step 4 "HUMANISE").
//
// These functions are PURE and DETERMINISTIC: no Firebase, no network, no
// Date.now(), no randomness. Given the same inputs they always return the same
// output. They are consumed by buildShoppingList.js and covered by format.test.js.
//
// British English in all user-facing copy. Quantities read like a market ledger:
//   counts → whole numbers ("6")
//   mass   → grams, switching to kilograms above 1000 g ("1.4 kg")
//   volume → millilitres, switching to litres above 1000 ml ("1.5 L")

/**
 * Round a number UP to the next whole integer.
 * Used for COUNT base units — you cannot buy 2.3 eggs, you buy 3.
 * @param {number} n
 * @returns {number}
 */
export function roundUpToWhole(n) {
  return Math.ceil(n)
}

/**
 * Round a number UP to the next multiple of `step`.
 * Honours an ingredient's `displayRules.roundUpTo` (e.g. sold in 50 g steps).
 * A null/zero/negative step is a no-op (returns the value unchanged).
 * @param {number} n
 * @param {number|null|undefined} step
 * @returns {number}
 */
export function roundUpTo(n, step) {
  if (step == null || step <= 0) return n
  return Math.ceil(n / step) * step
}

/**
 * Round a mass/volume figure to at most one decimal place, dropping a trailing
 * ".0" so whole numbers read cleanly ("400 g", not "400.0 g"). Avoids binary
 * floating-point dust (e.g. 0.30000000000000004) by rounding then re-parsing.
 * @param {number} n
 * @returns {number}
 */
export function roundTo1dp(n) {
  return Math.round(n * 10) / 10
}

/**
 * Format a numeric value for display, trimming a redundant ".0".
 *   12   -> "12"
 *   1.4  -> "1.4"
 *   1.0  -> "1"
 * @param {number} n
 * @returns {string}
 */
export function trimNumber(n) {
  const rounded = roundTo1dp(n)
  return Number.isInteger(rounded) ? String(rounded) : String(rounded)
}

/**
 * Humanise a needed quantity into the string shown on the receipt.
 *
 * Rules (spec Section 5, step 4):
 *  - baseUnit 'count'      → round UP to a whole number, no unit suffix ("6").
 *  - baseUnit 'g' (mass)   → 1 dp; switch to "kg" above 1000 g.
 *  - baseUnit 'ml'(volume) → 1 dp; switch to "L"  above 1000 ml.
 *  - displayRules.preferUnit, when set, is appended as a friendly aside,
 *    e.g. "400 g (about 1 tin)".
 *
 * The numeric value passed in is the POST min-purchase / post-roundUpTo figure
 * computed by buildShoppingList; this function only formats it.
 *
 * @param {number} value             quantity in the ingredient's base unit
 * @param {'g'|'ml'|'count'|null} baseUnit
 * @param {{preferUnit?:string|null, roundUpTo?:number|null}} [displayRules]
 * @returns {string}
 */
export function friendly(value, baseUnit, displayRules = {}) {
  const preferUnit = displayRules && displayRules.preferUnit ? displayRules.preferUnit : null

  let core
  if (baseUnit === 'count') {
    core = String(roundUpToWhole(value))
  } else if (baseUnit === 'g') {
    if (value >= 1000) {
      core = `${trimNumber(value / 1000)} kg`
    } else {
      core = `${trimNumber(value)} g`
    }
  } else if (baseUnit === 'ml') {
    if (value >= 1000) {
      core = `${trimNumber(value / 1000)} L`
    } else {
      core = `${trimNumber(value)} ml`
    }
  } else {
    // Unknown base unit — show the bare number rather than fabricate a unit.
    core = trimNumber(value)
  }

  if (preferUnit) {
    return `${core} (${preferUnit})`
  }
  return core
}

/**
 * Build the "(min …)" bump note appended when a needed quantity was raised to a
 * minimum purchase. British English; mirrors `friendly` unit switching so the
 * note reads consistently with the quantity.
 *
 *   minNote(250, 'g')  -> "(min 250 g)"
 *   minNote(1000,'ml') -> "(min 1 L)"
 *   minNote(2, 'count')-> "(min 2)"
 *
 * @param {number} minValue   the minimum in the base unit
 * @param {'g'|'ml'|'count'|null} baseUnit
 * @returns {string}
 */
export function minNote(minValue, baseUnit) {
  let inner
  if (baseUnit === 'count') {
    inner = String(roundUpToWhole(minValue))
  } else if (baseUnit === 'g') {
    inner = minValue >= 1000 ? `${trimNumber(minValue / 1000)} kg` : `${trimNumber(minValue)} g`
  } else if (baseUnit === 'ml') {
    inner = minValue >= 1000 ? `${trimNumber(minValue / 1000)} L` : `${trimNumber(minValue)} ml`
  } else {
    inner = trimNumber(minValue)
  }
  return `(min ${inner})`
}
