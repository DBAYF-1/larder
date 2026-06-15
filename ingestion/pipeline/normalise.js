// Stage 3 — normalise a resolved line to its canonical base unit.
//
// Produces the maths-ready numbers stored on the embedded recipe line:
//   quantityInBaseUnit  — number in g / ml / count, ready for buildShoppingList
//   baseUnit            — 'g' | 'ml' | 'count'
// while preserving the as-written quantity/unit for display.
//
// The hard rule (spec 7): if a volume measure must become mass (or vice versa)
// to match the canonical baseUnit but the canonical has NO density, we DO NOT
// fabricate one. We keep the original quantity/unit, leave quantityInBaseUnit
// null, and flag the line needsReview so a human can resolve it.

import { toBaseMeasure, convertWithDensity, DIMENSION, BASE_UNIT } from './units.js'

/**
 * @param {object} parsed     output of parseLine (quantity, unit, ...)
 * @param {object|null} ingredient  resolved canonical ingredient (has baseUnit, densityGperMl)
 * @returns {{
 *   quantity: number|null,        // as written (post-parse)
 *   unit: string|null,            // display unit token
 *   baseUnit: 'g'|'ml'|'count'|null,
 *   quantityInBaseUnit: number|null,
 *   rangeLow: number|null,
 *   rangeHigh: number|null,
 *   needsReview: boolean,         // true => couldn't normalise safely
 *   reviewReason: string|null,
 *   soft: boolean
 * }}
 */
export function normaliseLine(parsed, ingredient) {
  const out = {
    quantity: parsed.quantity ?? null,
    unit: parsed.unit ?? null,
    baseUnit: ingredient ? ingredient.baseUnit : null,
    quantityInBaseUnit: null,
    rangeLow: parsed.rangeLow ?? null,
    rangeHigh: parsed.rangeHigh ?? null,
    needsReview: false,
    reviewReason: null,
    soft: Boolean(parsed.soft),
  }

  // No canonical ingredient => nothing to normalise against.
  if (!ingredient) {
    out.needsReview = true
    out.reviewReason = 'unresolved ingredient'
    return out
  }

  const targetBase = ingredient.baseUnit // 'g' | 'ml' | 'count'
  const targetDimension =
    targetBase === 'g'
      ? DIMENSION.MASS
      : targetBase === 'ml'
        ? DIMENSION.VOLUME
        : DIMENSION.COUNT

  // Soft amounts ("to taste", "a pinch") carry no firm quantity for the maths.
  if (parsed.soft && parsed.quantity == null) {
    out.baseUnit = targetBase
    out.quantityInBaseUnit = null
    return out
  }

  const qty = parsed.quantity
  if (qty == null || !Number.isFinite(qty)) {
    // Quantity unknown but ingredient resolved (e.g. "1 onion" with no unit and
    // a count base unit gets 1 below; otherwise leave null but not review — the
    // shopping list will fall back to minimum purchase).
    out.baseUnit = targetBase
    out.quantityInBaseUnit = null
    return out
  }

  // ── No explicit unit (unitless) ──────────────────────────────────────────
  // "2 eggs", "1 onion": the number is a count. If the canonical base unit is
  // count, store it directly; otherwise this is genuinely ambiguous (e.g.
  // "2 flour") and we keep it but flag for review.
  if (!parsed.unit) {
    if (targetBase === 'count') {
      out.baseUnit = 'count'
      out.quantityInBaseUnit = qty
      return out
    }
    // "2 chicken breasts": a unitless count against a g-ingredient that is also
    // bought by the piece. Multiply by the KNOWN typical item weight — this is a
    // declared constant, not a fabricated density, so it is safe.
    if (targetBase === 'g' && ingredient.perItemGrams > 0) {
      out.baseUnit = 'g'
      out.quantityInBaseUnit = round4(qty * ingredient.perItemGrams)
      return out
    }
    // Otherwise genuinely ambiguous ("2 flour"): keep, flag for review.
    out.baseUnit = targetBase
    out.quantityInBaseUnit = null
    out.needsReview = true
    out.reviewReason = `unitless "${qty}" for ${targetBase}-based ${ingredient.canonicalName}`
    return out
  }

  // ── Convert the written unit into its own base measure ───────────────────
  const measured = toBaseMeasure(qty, parsed.unit)
  if (!measured) {
    // Unknown unit token entirely. Keep as written, review it.
    out.baseUnit = targetBase
    out.quantityInBaseUnit = null
    out.needsReview = true
    out.reviewReason = `unknown unit "${parsed.unit}"`
    return out
  }

  // Soft units like "pinch"/"knob" — keep them count-y but don't let them drive
  // the quantity maths; they're handled as staples/optional downstream.
  if (measured.soft) {
    out.baseUnit = measured.baseUnit
    out.quantityInBaseUnit = null
    out.soft = true
    return out
  }

  // Same dimension as the canonical: store directly.
  if (measured.dimension === targetDimension) {
    out.baseUnit = targetBase
    out.quantityInBaseUnit = round4(measured.value)
    return out
  }

  // Pack-container units ("tin", "can", "jar", "packet", "pack") against a
  // mass/volume ingredient: multiply the count by the known contents size. We
  // use displayRules.roundUpTo (the canonical contents weight, e.g. 400 for a
  // tin of tomatoes) or the first typicalPack size. This is a KNOWN size, not a
  // fabricated density, so it is safe.
  const packUnits = new Set(['tin', 'can', 'jar', 'packet', 'pack'])
  if (
    measured.dimension === DIMENSION.COUNT &&
    targetDimension !== DIMENSION.COUNT &&
    packUnits.has(String(parsed.unit).toLowerCase())
  ) {
    const packSize =
      ingredient.displayRules?.roundUpTo ??
      ingredient.typicalPacks?.[0]?.size ??
      null
    if (packSize && packSize > 0) {
      out.baseUnit = targetBase
      out.quantityInBaseUnit = round4(qty * packSize)
      return out
    }
    out.baseUnit = targetBase
    out.quantityInBaseUnit = null
    out.needsReview = true
    out.reviewReason = `pack size unknown for ${parsed.unit} of ${ingredient.canonicalName}`
    return out
  }

  // Cross-dimension: count never converts to/from mass or volume.
  if (
    measured.dimension === DIMENSION.COUNT ||
    targetDimension === DIMENSION.COUNT
  ) {
    out.baseUnit = targetBase
    out.quantityInBaseUnit = null
    out.needsReview = true
    out.reviewReason = `cannot convert ${measured.dimension} to ${targetDimension}`
    return out
  }

  // Mass <-> volume: requires a density. NEVER fabricate one.
  const converted = convertWithDensity(
    measured.value,
    measured.dimension,
    targetDimension,
    ingredient.densityGperMl,
  )
  if (converted == null) {
    out.baseUnit = targetBase
    out.quantityInBaseUnit = null
    out.needsReview = true
    out.reviewReason = `density unknown: cannot convert ${parsed.unit} of ${ingredient.canonicalName} to ${targetBase}`
    return out
  }

  out.baseUnit = targetBase
  out.quantityInBaseUnit = round4(converted)
  return out
}

function round4(n) {
  return Math.round(n * 10000) / 10000
}

export { BASE_UNIT }
