// Stage 1 — tokenise a raw ingredient line into a structured measure.
//
// Output shape (per spec Section 4 / 7):
//   {
//     quantity,     // number | null  — the parsed amount (range midpoint when a range)
//     unit,         // string | null  — display unit token ("g","ml","clove","tbsp","")
//     descriptor,   // string | null  — leading adjective stripped off the core ("fresh", "large")
//     core,         // string         — the ingredient phrase used for resolution
//     prepNote,     // string | null  — preparation note ("finely chopped")
//     rangeLow,     // number | null  — low end of a range
//     rangeHigh,    // number | null  — high end of a range
//     count,        // number | null  — count multiplier from "1 (12 oz.)" style ("1" here)
//     soft,         // boolean        — true for "to taste"/"a pinch"/"a knob" etc (no firm qty)
//     optional,     // boolean        — line marked optional
//   }
//
// TheMealDB gives the amount in strMeasureN and the name in strIngredientN, but
// amounts are messy free text ("1 1/2 cups", "2-3", "1 (400g) tin", "to taste"),
// so this parser accepts either the measure alone OR a full "measure + name" line.

import { isKnownUnit, lookupUnit } from './units.js'

// Vulgar fractions → decimal.
const VULGAR = {
  '½': 0.5,
  '⅓': 1 / 3,
  '⅔': 2 / 3,
  '¼': 0.25,
  '¾': 0.75,
  '⅕': 0.2,
  '⅖': 0.4,
  '⅗': 0.6,
  '⅘': 0.8,
  '⅙': 1 / 6,
  '⅚': 5 / 6,
  '⅛': 0.125,
  '⅜': 0.375,
  '⅝': 0.625,
  '⅞': 0.875,
}

// Word-number amounts seen in measures ("half", "a", "couple").
const WORD_NUMBERS = {
  a: 1,
  an: 1,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  half: 0.5,
  quarter: 0.25,
  couple: 2,
  dozen: 12,
}

// "soft" amount phrases that carry no firm quantity.
const SOFT_PHRASES = [
  'to taste',
  'as needed',
  'as required',
  'for garnish',
  'for serving',
  'for frying',
  'for greasing',
  'for dusting',
  'to serve',
  'optional',
]

// Preparation-note keywords. When found after a comma OR as trailing words they
// move into prepNote rather than the resolvable core.
const PREP_WORDS = [
  'chopped',
  'finely chopped',
  'roughly chopped',
  'diced',
  'minced',
  'grated',
  'sliced',
  'thinly sliced',
  'crushed',
  'peeled',
  'deseeded',
  'seeded',
  'shredded',
  'cubed',
  'halved',
  'quartered',
  'beaten',
  'melted',
  'softened',
  'cooked',
  'drained',
  'rinsed',
  'trimmed',
  'cored',
  'zested',
  'juiced',
  'toasted',
  'roasted',
  'cut into chunks',
  'cut into wedges',
  'at room temperature',
  'room temperature',
  'plus extra',
  'plus extra to serve',
  'plus more',
  'divided',
]

// Leading descriptors that should be stripped to a `descriptor` field but kept
// out of the core where they would hurt resolution.
const DESCRIPTORS = [
  'fresh',
  'dried',
  'frozen',
  'large',
  'small',
  'medium',
  'ripe',
  'free-range',
  'free range',
  'organic',
  'lean',
  'boneless',
  'skinless',
  'ground',
  'whole',
  'extra',
  'good quality',
  'good-quality',
]

/**
 * Convert a numeric word/symbol fragment into a Number, or NaN if not numeric.
 */
function parseNumberFragment(frag) {
  if (frag == null) return NaN
  const s = String(frag).trim()
  if (!s) return NaN

  if (s in VULGAR) return VULGAR[s]
  if (s.toLowerCase() in WORD_NUMBERS) return WORD_NUMBERS[s.toLowerCase()]

  // ascii fraction a/b
  const frac = s.match(/^(\d+)\s*\/\s*(\d+)$/)
  if (frac) {
    const d = Number(frac[2])
    return d === 0 ? NaN : Number(frac[1]) / d
  }

  // mixed: "1 1/2" or "1½"
  const mixed = s.match(/^(\d+)\s+(\d+)\s*\/\s*(\d+)$/)
  if (mixed) {
    const d = Number(mixed[3])
    return d === 0 ? NaN : Number(mixed[1]) + Number(mixed[2]) / d
  }

  // plain integer / decimal (also "1.5", ".5", "1,5" euro decimal)
  const num = Number(s.replace(',', '.'))
  return Number.isFinite(num) ? num : NaN
}

/**
 * Pull a leading quantity (handles vulgar fractions glued to digits, mixed
 * numbers, ranges) from the front of a string. Returns
 *   { quantity, rangeLow, rangeHigh, rest }  or  null if no number leads.
 */
function extractLeadingQuantity(input) {
  let s = input.trim()

  // Normalise vulgar fractions: insert a space so "1½" -> "1 ½", "½" stays.
  s = s.replace(/(\d)([½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞])/g, '$1 $2')
  // Replace standalone vulgar with decimal token for matching, but keep mixed.
  // We handle vulgar directly in the regex paths below.

  // RANGE: "2-3", "2 to 3", "2 – 3" (en/em dash). Only when both ends numeric.
  const rangeMatch = s.match(
    /^(\d+(?:\.\d+)?(?:\s*\/\s*\d+)?)\s*(?:-|–|—|\bto\b)\s*(\d+(?:\.\d+)?(?:\s*\/\s*\d+)?)(.*)$/i,
  )
  if (rangeMatch) {
    const low = parseNumberFragment(rangeMatch[1])
    const high = parseNumberFragment(rangeMatch[2])
    if (Number.isFinite(low) && Number.isFinite(high)) {
      return {
        quantity: (low + high) / 2, // midpoint
        rangeLow: low,
        rangeHigh: high,
        rest: rangeMatch[3].trim(),
      }
    }
  }

  // MIXED NUMBER "1 1/2" or "1 ½"
  const mixedAscii = s.match(/^(\d+)\s+(\d+\s*\/\s*\d+)\b(.*)$/)
  if (mixedAscii) {
    const q = Number(mixedAscii[1]) + parseNumberFragment(mixedAscii[2])
    if (Number.isFinite(q)) {
      return { quantity: q, rangeLow: null, rangeHigh: null, rest: mixedAscii[3].trim() }
    }
  }
  const mixedVulgar = s.match(/^(\d+)\s+([½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞])(.*)$/)
  if (mixedVulgar) {
    const q = Number(mixedVulgar[1]) + (VULGAR[mixedVulgar[2]] || 0)
    return { quantity: q, rangeLow: null, rangeHigh: null, rest: mixedVulgar[3].trim() }
  }

  // STANDALONE VULGAR "½"
  const vulgarOnly = s.match(/^([½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞])(.*)$/)
  if (vulgarOnly) {
    return {
      quantity: VULGAR[vulgarOnly[1]],
      rangeLow: null,
      rangeHigh: null,
      rest: vulgarOnly[2].trim(),
    }
  }

  // ASCII FRACTION "3/4" (no \b — a unit may be glued, e.g. "3/4cup")
  const fracOnly = s.match(/^(\d+\s*\/\s*\d+)(.*)$/)
  if (fracOnly) {
    const q = parseNumberFragment(fracOnly[1])
    if (Number.isFinite(q)) {
      return { quantity: q, rangeLow: null, rangeHigh: null, rest: fracOnly[2].trim() }
    }
  }

  // PLAIN integer/decimal "400" / "1.5" / "0.5". No \b so a glued unit like
  // "400g" or "12oz" splits cleanly (digit→letter is not a JS word boundary).
  const numOnly = s.match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (numOnly) {
    return {
      quantity: Number(numOnly[1]),
      rangeLow: null,
      rangeHigh: null,
      rest: numOnly[2].trim(),
    }
  }

  // WORD number "half a", "a", "couple of"
  const wordMatch = s.match(/^([a-z]+)\b(.*)$/i)
  if (wordMatch && wordMatch[1].toLowerCase() in WORD_NUMBERS) {
    return {
      quantity: WORD_NUMBERS[wordMatch[1].toLowerCase()],
      rangeLow: null,
      rangeHigh: null,
      rest: wordMatch[2].trim(),
    }
  }

  return null
}

/**
 * Detect the "1 (12 oz.) tin" pattern: a leading count, then a parenthesised
 * measure that is the real amount. Returns the embedded measure or null.
 */
function extractParenMeasure(rest) {
  const m = rest.match(/^\(([^)]*)\)\s*(.*)$/)
  if (!m) return null
  const inner = m[1].trim()
  // The inner part is itself a measure ("12 oz.", "400 g")
  const innerQ = extractLeadingQuantity(inner)
  if (!innerQ) return null
  const innerRest = innerQ.rest.replace(/\.$/, '').trim()
  if (innerRest && isKnownUnit(innerRest.split(/\s+/)[0])) {
    const unitTok = innerRest.split(/\s+/)[0].toLowerCase().replace(/\.$/, '')
    return {
      quantity: innerQ.quantity,
      unit: lookupUnit(unitTok)?.display ?? unitTok,
      after: m[2].trim(),
    }
  }
  return null
}

function stripDescriptors(core) {
  let descriptor = null
  let words = core.split(/\s+/)
  // Strip leading descriptors greedily but keep at least one core word.
  while (words.length > 1) {
    const lead = words[0].toLowerCase().replace(/[.,]/g, '')
    const twoWord = (words[0] + ' ' + (words[1] || '')).toLowerCase()
    if (DESCRIPTORS.includes(twoWord)) {
      descriptor = (descriptor ? descriptor + ' ' : '') + twoWord
      words = words.slice(2)
    } else if (DESCRIPTORS.includes(lead)) {
      descriptor = (descriptor ? descriptor + ' ' : '') + lead
      words = words.slice(1)
    } else {
      break
    }
  }
  return { descriptor, core: words.join(' ').trim() }
}

function extractPrepNote(text) {
  let prep = null
  let core = text

  // After-comma clause is usually a prep note: "tomatoes, finely chopped"
  const commaIdx = core.indexOf(',')
  if (commaIdx !== -1) {
    const tail = core.slice(commaIdx + 1).trim()
    core = core.slice(0, commaIdx).trim()
    if (tail) prep = tail
  }

  // "plus extra"/"plus more" — ignored for quantity, recorded as prep.
  const plusMatch = core.match(/\b(plus (?:extra|more)[^,]*)/i)
  if (plusMatch) {
    prep = (prep ? prep + '; ' : '') + plusMatch[1].trim()
    core = core.replace(plusMatch[0], '').trim()
  }

  // Trailing prep words without a comma: "garlic crushed"
  for (const p of PREP_WORDS) {
    const re = new RegExp('\\b' + p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i')
    if (re.test(core)) {
      const matched = core.match(re)
      if (matched) {
        prep = (prep ? prep + '; ' : '') + matched[0].toLowerCase()
        core = core.replace(re, '').trim()
      }
    }
  }

  core = core.replace(/\s{2,}/g, ' ').replace(/^[\s,]+|[\s,]+$/g, '').trim()
  return { prepNote: prep || null, core }
}

/**
 * Parse a raw measure (and optional ingredient name) into a structured line.
 *
 * @param {string} rawMeasure   strMeasureN ("1 (400g) tin", "2-3", "to taste")
 * @param {string} [rawName]    strIngredientN ("chopped tomatoes") — appended to core
 * @returns {object} parsed measure (shape above)
 */
export function parseLine(rawMeasure, rawName = '') {
  const measure = (rawMeasure || '').toString().trim()
  const name = (rawName || '').toString().trim()

  const result = {
    quantity: null,
    unit: null,
    descriptor: null,
    core: name,
    prepNote: null,
    rangeLow: null,
    rangeHigh: null,
    count: null,
    soft: false,
    optional: false,
  }

  let text = measure
  // If no separate name was supplied, the measure string itself holds the name.
  if (!name) text = measure
  else text = measure // name handled at the end

  const lower = text.toLowerCase()

  // SOFT phrases ("to taste", "as needed", "a knob", "pinch", "handful")
  if (SOFT_PHRASES.some((p) => lower.includes(p))) {
    result.soft = true
  }
  if (/\boptional\b/.test(lower)) result.optional = true

  // "a knob of", "a pinch of", "a handful of", "a dash of"
  const knobMatch = lower.match(/\b(knob|pinch|handful|dash|splash|drizzle)\b/)
  if (knobMatch && !extractLeadingQuantity(text)) {
    result.soft = true
    result.quantity = 1
    result.unit = knobMatch[1]
  }

  if (text) {
    // 1) leading quantity
    const lead = extractLeadingQuantity(text)
    if (lead) {
      result.quantity = lead.quantity
      result.rangeLow = lead.rangeLow
      result.rangeHigh = lead.rangeHigh
      let rest = lead.rest

      // 2) "1 (12 oz.)" parenthesised real measure
      const paren = extractParenMeasure(rest)
      if (paren) {
        result.count = lead.quantity // the leading "1" becomes the count
        result.quantity = paren.quantity
        result.unit = paren.unit
        rest = paren.after
      } else {
        // 3) a unit token may lead the remainder
        const firstTok = rest.split(/\s+/)[0]?.replace(/\.$/, '') ?? ''
        if (firstTok && isKnownUnit(firstTok)) {
          const u = lookupUnit(firstTok)
          result.unit = u.display
          if (u.soft) result.soft = true
          rest = rest.slice(rest.indexOf(rest.split(/\s+/)[0]) + rest.split(/\s+/)[0].length).trim()
          // handle "of": "2 cups of flour"
          rest = rest.replace(/^of\s+/i, '').trim()
        } else {
          // multi-word unit like "fl oz"
          const twoTok = rest.split(/\s+/).slice(0, 2).join(' ').toLowerCase()
          if (isKnownUnit(twoTok)) {
            const u = lookupUnit(twoTok)
            result.unit = u.display
            rest = rest.split(/\s+/).slice(2).join(' ').trim().replace(/^of\s+/i, '')
          } else {
            // unitless count: "2 eggs" — unit stays null/"" (count)
            result.unit = result.unit || ''
            rest = rest.replace(/^of\s+/i, '').trim()
          }
        }
      }

      // If the name came in a separate field, the remainder is prep/extra info.
      if (name) {
        if (rest) result.prepNote = rest
        result.core = name
      } else {
        result.core = rest
      }
    } else {
      // No leading number. If a soft unit/knob set above we keep it; otherwise
      // the whole measure is descriptive text and the name field is the core.
      if (name) {
        result.core = name
        if (text && !result.soft && !SOFT_PHRASES.some((p) => lower.includes(p))) {
          // measure text is something like "Topping" / "Garnish" — keep as prep
          if (text) result.prepNote = text
        }
      } else {
        result.core = text
      }
    }
  } else if (name) {
    result.core = name
  }

  // Clean core: strip descriptors and prep notes, normalise whitespace.
  const prepped = extractPrepNote(result.core || '')
  result.core = prepped.core
  if (prepped.prepNote) {
    result.prepNote = result.prepNote
      ? result.prepNote + '; ' + prepped.prepNote
      : prepped.prepNote
  }

  const desc = stripDescriptors(result.core || '')
  result.descriptor = desc.descriptor
  result.core = desc.core

  // Final tidy
  result.core = (result.core || '')
    .replace(/[()]/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .toLowerCase()

  // Drop a prepNote that is only a connective/filler word ("of", "the").
  if (result.prepNote) {
    const cleaned = result.prepNote
      .replace(/\b(of|the|a|an)\b/gi, '')
      .replace(/\s{2,}/g, ' ')
      .replace(/^[\s,;]+|[\s,;]+$/g, '')
      .trim()
    result.prepNote = cleaned || null
  }

  if (result.unit === '') result.unit = ''
  if (result.quantity != null && !Number.isFinite(result.quantity)) result.quantity = null

  return result
}
