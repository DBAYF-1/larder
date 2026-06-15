// Controlled unit vocabulary + imperial→metric conversion (spec Section 7).
//
// Three base dimensions:
//   - mass   -> grams  (g)
//   - volume -> millilitres (ml)
//   - count  -> count  (whole things: eggs, cloves, tins, ...)
//
// Every recognised unit token maps to a base dimension and a factor that
// converts ONE of that unit into the base measure. Mass→volume (and back)
// requires a density; that lives in normalise.js so we never fabricate one here.

export const DIMENSION = {
  MASS: 'mass',
  VOLUME: 'volume',
  COUNT: 'count',
}

export const BASE_UNIT = {
  mass: 'g',
  volume: 'ml',
  count: 'count',
}

// Imperial→metric anchors required by the spec:
//   oz   = 28.35 g
//   lb   = 453.6 g
//   cup  = 240 ml
//   tbsp = 15 ml
//   tsp  = 5 ml
const UNIT_TABLE = {
  // ── Mass → grams ────────────────────────────────────────────────────────
  g: { dimension: DIMENSION.MASS, toBase: 1, display: 'g' },
  gram: { dimension: DIMENSION.MASS, toBase: 1, display: 'g' },
  grams: { dimension: DIMENSION.MASS, toBase: 1, display: 'g' },
  gramme: { dimension: DIMENSION.MASS, toBase: 1, display: 'g' },
  grammes: { dimension: DIMENSION.MASS, toBase: 1, display: 'g' },
  kg: { dimension: DIMENSION.MASS, toBase: 1000, display: 'kg' },
  kilo: { dimension: DIMENSION.MASS, toBase: 1000, display: 'kg' },
  kilos: { dimension: DIMENSION.MASS, toBase: 1000, display: 'kg' },
  kilogram: { dimension: DIMENSION.MASS, toBase: 1000, display: 'kg' },
  kilograms: { dimension: DIMENSION.MASS, toBase: 1000, display: 'kg' },
  mg: { dimension: DIMENSION.MASS, toBase: 0.001, display: 'mg' },
  oz: { dimension: DIMENSION.MASS, toBase: 28.35, display: 'oz' },
  ounce: { dimension: DIMENSION.MASS, toBase: 28.35, display: 'oz' },
  ounces: { dimension: DIMENSION.MASS, toBase: 28.35, display: 'oz' },
  lb: { dimension: DIMENSION.MASS, toBase: 453.6, display: 'lb' },
  lbs: { dimension: DIMENSION.MASS, toBase: 453.6, display: 'lb' },
  pound: { dimension: DIMENSION.MASS, toBase: 453.6, display: 'lb' },
  pounds: { dimension: DIMENSION.MASS, toBase: 453.6, display: 'lb' },

  // ── Volume → millilitres ────────────────────────────────────────────────
  ml: { dimension: DIMENSION.VOLUME, toBase: 1, display: 'ml' },
  millilitre: { dimension: DIMENSION.VOLUME, toBase: 1, display: 'ml' },
  millilitres: { dimension: DIMENSION.VOLUME, toBase: 1, display: 'ml' },
  milliliter: { dimension: DIMENSION.VOLUME, toBase: 1, display: 'ml' },
  milliliters: { dimension: DIMENSION.VOLUME, toBase: 1, display: 'ml' },
  cl: { dimension: DIMENSION.VOLUME, toBase: 10, display: 'cl' },
  l: { dimension: DIMENSION.VOLUME, toBase: 1000, display: 'l' },
  litre: { dimension: DIMENSION.VOLUME, toBase: 1000, display: 'l' },
  litres: { dimension: DIMENSION.VOLUME, toBase: 1000, display: 'l' },
  liter: { dimension: DIMENSION.VOLUME, toBase: 1000, display: 'l' },
  liters: { dimension: DIMENSION.VOLUME, toBase: 1000, display: 'l' },
  tsp: { dimension: DIMENSION.VOLUME, toBase: 5, display: 'tsp' },
  tsps: { dimension: DIMENSION.VOLUME, toBase: 5, display: 'tsp' },
  tspn: { dimension: DIMENSION.VOLUME, toBase: 5, display: 'tsp' },
  teaspoon: { dimension: DIMENSION.VOLUME, toBase: 5, display: 'tsp' },
  teaspoons: { dimension: DIMENSION.VOLUME, toBase: 5, display: 'tsp' },
  tbsp: { dimension: DIMENSION.VOLUME, toBase: 15, display: 'tbsp' },
  tbsps: { dimension: DIMENSION.VOLUME, toBase: 15, display: 'tbsp' },
  tbl: { dimension: DIMENSION.VOLUME, toBase: 15, display: 'tbsp' },
  tbls: { dimension: DIMENSION.VOLUME, toBase: 15, display: 'tbsp' },
  tblsp: { dimension: DIMENSION.VOLUME, toBase: 15, display: 'tbsp' },
  tablespoon: { dimension: DIMENSION.VOLUME, toBase: 15, display: 'tbsp' },
  tablespoons: { dimension: DIMENSION.VOLUME, toBase: 15, display: 'tbsp' },
  dsp: { dimension: DIMENSION.VOLUME, toBase: 10, display: 'dsp' },
  dessertspoon: { dimension: DIMENSION.VOLUME, toBase: 10, display: 'dsp' },
  dessertspoons: { dimension: DIMENSION.VOLUME, toBase: 10, display: 'dsp' },
  cup: { dimension: DIMENSION.VOLUME, toBase: 240, display: 'cup' },
  cups: { dimension: DIMENSION.VOLUME, toBase: 240, display: 'cup' },
  'fl oz': { dimension: DIMENSION.VOLUME, toBase: 28.41, display: 'fl oz' },
  floz: { dimension: DIMENSION.VOLUME, toBase: 28.41, display: 'fl oz' },
  'fluid ounce': { dimension: DIMENSION.VOLUME, toBase: 28.41, display: 'fl oz' },
  'fluid ounces': { dimension: DIMENSION.VOLUME, toBase: 28.41, display: 'fl oz' },
  pint: { dimension: DIMENSION.VOLUME, toBase: 568, display: 'pint' }, // UK pint
  pints: { dimension: DIMENSION.VOLUME, toBase: 568, display: 'pint' },
  quart: { dimension: DIMENSION.VOLUME, toBase: 946, display: 'quart' },
  quarts: { dimension: DIMENSION.VOLUME, toBase: 946, display: 'quart' },
  gallon: { dimension: DIMENSION.VOLUME, toBase: 3785, display: 'gallon' },

  // ── Count → count (countable, qty stays as written) ─────────────────────
  clove: { dimension: DIMENSION.COUNT, toBase: 1, display: 'clove' },
  cloves: { dimension: DIMENSION.COUNT, toBase: 1, display: 'clove' },
  slice: { dimension: DIMENSION.COUNT, toBase: 1, display: 'slice' },
  slices: { dimension: DIMENSION.COUNT, toBase: 1, display: 'slice' },
  rasher: { dimension: DIMENSION.COUNT, toBase: 1, display: 'rasher' },
  rashers: { dimension: DIMENSION.COUNT, toBase: 1, display: 'rasher' },
  sprig: { dimension: DIMENSION.COUNT, toBase: 1, display: 'sprig' },
  sprigs: { dimension: DIMENSION.COUNT, toBase: 1, display: 'sprig' },
  stick: { dimension: DIMENSION.COUNT, toBase: 1, display: 'stick' },
  sticks: { dimension: DIMENSION.COUNT, toBase: 1, display: 'stick' },
  stalk: { dimension: DIMENSION.COUNT, toBase: 1, display: 'stalk' },
  stalks: { dimension: DIMENSION.COUNT, toBase: 1, display: 'stalk' },
  head: { dimension: DIMENSION.COUNT, toBase: 1, display: 'head' },
  heads: { dimension: DIMENSION.COUNT, toBase: 1, display: 'head' },
  bunch: { dimension: DIMENSION.COUNT, toBase: 1, display: 'bunch' },
  bunches: { dimension: DIMENSION.COUNT, toBase: 1, display: 'bunch' },
  tin: { dimension: DIMENSION.COUNT, toBase: 1, display: 'tin' },
  tins: { dimension: DIMENSION.COUNT, toBase: 1, display: 'tin' },
  can: { dimension: DIMENSION.COUNT, toBase: 1, display: 'tin' },
  cans: { dimension: DIMENSION.COUNT, toBase: 1, display: 'tin' },
  jar: { dimension: DIMENSION.COUNT, toBase: 1, display: 'jar' },
  jars: { dimension: DIMENSION.COUNT, toBase: 1, display: 'jar' },
  packet: { dimension: DIMENSION.COUNT, toBase: 1, display: 'packet' },
  packets: { dimension: DIMENSION.COUNT, toBase: 1, display: 'packet' },
  pack: { dimension: DIMENSION.COUNT, toBase: 1, display: 'pack' },
  packs: { dimension: DIMENSION.COUNT, toBase: 1, display: 'pack' },
  sheet: { dimension: DIMENSION.COUNT, toBase: 1, display: 'sheet' },
  sheets: { dimension: DIMENSION.COUNT, toBase: 1, display: 'sheet' },
  fillet: { dimension: DIMENSION.COUNT, toBase: 1, display: 'fillet' },
  fillets: { dimension: DIMENSION.COUNT, toBase: 1, display: 'fillet' },
  // Imprecise "soft" units — kept as count so the maths does not over-claim.
  pinch: { dimension: DIMENSION.COUNT, toBase: 1, display: 'pinch', soft: true },
  pinches: { dimension: DIMENSION.COUNT, toBase: 1, display: 'pinch', soft: true },
  handful: { dimension: DIMENSION.COUNT, toBase: 1, display: 'handful', soft: true },
  handfuls: { dimension: DIMENSION.COUNT, toBase: 1, display: 'handful', soft: true },
  knob: { dimension: DIMENSION.COUNT, toBase: 1, display: 'knob', soft: true },
  knobs: { dimension: DIMENSION.COUNT, toBase: 1, display: 'knob', soft: true },
  dash: { dimension: DIMENSION.COUNT, toBase: 1, display: 'dash', soft: true },
  dashes: { dimension: DIMENSION.COUNT, toBase: 1, display: 'dash', soft: true },
  splash: { dimension: DIMENSION.COUNT, toBase: 1, display: 'splash', soft: true },
  drizzle: { dimension: DIMENSION.COUNT, toBase: 1, display: 'drizzle', soft: true },
}

/**
 * Look up a unit token. Returns the table entry or null if unrecognised.
 * @param {string|null} token
 * @returns {{dimension:string,toBase:number,display:string,soft?:boolean}|null}
 */
export function lookupUnit(token) {
  if (!token) return null
  const key = String(token).trim().toLowerCase().replace(/\.$/, '')
  return UNIT_TABLE[key] || UNIT_TABLE[key.replace(/\s+/g, ' ')] || null
}

export function isKnownUnit(token) {
  return lookupUnit(token) !== null
}

/**
 * Convert a quantity expressed in `token` into its base measure.
 * @param {number} quantity
 * @param {string} token
 * @returns {{value:number, baseUnit:'g'|'ml'|'count', dimension:string, soft:boolean}|null}
 */
export function toBaseMeasure(quantity, token) {
  const u = lookupUnit(token)
  if (!u) return null
  return {
    value: quantity * u.toBase,
    baseUnit: BASE_UNIT[u.dimension],
    dimension: u.dimension,
    soft: Boolean(u.soft),
  }
}

/**
 * Convert a value across dimensions using a density (g per ml).
 *   mass(g)   = volume(ml) * density
 *   volume(ml)= mass(g)   / density
 * Returns null when density is missing/invalid — NEVER fabricate a density.
 * @param {number} value
 * @param {string} fromDimension
 * @param {string} toDimension
 * @param {number|null} densityGperMl
 * @returns {number|null}
 */
export function convertWithDensity(value, fromDimension, toDimension, densityGperMl) {
  if (fromDimension === toDimension) return value
  if (!densityGperMl || !(densityGperMl > 0)) return null
  if (fromDimension === DIMENSION.VOLUME && toDimension === DIMENSION.MASS) {
    return value * densityGperMl
  }
  if (fromDimension === DIMENSION.MASS && toDimension === DIMENSION.VOLUME) {
    return value / densityGperMl
  }
  return null // count never converts to/from mass or volume
}

export { UNIT_TABLE }
