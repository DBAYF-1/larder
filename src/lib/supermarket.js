// Larder — supermarket deep-links (roadmap #45, the feasible search-link form).
//
// Larder has no grocer partnership and no basket API, so we are HONEST about what
// this is: a one-tap deep link into each major UK grocer's own product SEARCH for
// a given item (or each item on the list). It saves the shopper retyping every
// line, sends them to the real store where prices and stock are the grocer's, and
// needs no credentials. If/when a true basket handoff becomes available it can
// slot in behind the same registry.
//
// Every builder is a pure function of (term) so they are unit-testable and carry
// no DOM or network side-effects.

/**
 * The UK grocers we link out to. `search(term)` returns a product-search URL on
 * the grocer's own site with the term URL-encoded. `brandColour` is used only for
 * a small brand dot in the UI (never as text colour, to keep contrast safe).
 */
export const GROCERS = [
  {
    id: 'tesco',
    name: 'Tesco',
    brandColour: '#00539f',
    search: (term) =>
      `https://www.tesco.com/groceries/en-GB/search?query=${encodeURIComponent(term)}`,
  },
  {
    id: 'sainsburys',
    name: "Sainsbury's",
    brandColour: '#f06c00',
    search: (term) =>
      `https://www.sainsburys.co.uk/gol-ui/SearchResults/${encodeURIComponent(term)}`,
  },
  {
    id: 'asda',
    name: 'ASDA',
    brandColour: '#68a51c',
    search: (term) =>
      `https://groceries.asda.com/search/${encodeURIComponent(term)}`,
  },
  {
    id: 'morrisons',
    name: 'Morrisons',
    brandColour: '#0a6938',
    search: (term) =>
      `https://groceries.morrisons.com/search?entry=${encodeURIComponent(term)}`,
  },
  {
    id: 'ocado',
    name: 'Ocado',
    brandColour: '#7e3f98',
    search: (term) =>
      `https://www.ocado.com/search?entry=${encodeURIComponent(term)}`,
  },
  {
    id: 'waitrose',
    name: 'Waitrose',
    brandColour: '#5a8100',
    search: (term) =>
      `https://www.waitrose.com/ecom/shop/search?&searchTerm=${encodeURIComponent(term)}`,
  },
]

const BY_ID = new Map(GROCERS.map((g) => [g.id, g]))

/** Look up a grocer by id; null when unknown. */
export function getGrocer(id) {
  return BY_ID.get(id) || null
}

/**
 * Reduce a shopping-list item name to a clean grocery search term: drop
 * parenthetical notes, trailing prep notes after a comma ("onion, finely
 * chopped" → "onion"), surrounding punctuation and quantity-ish leaders, and
 * collapse whitespace. Keeps it short so the grocer's search matches a product.
 *
 * @param {string} name
 * @returns {string}
 */
export function cleanTerm(name) {
  let s = String(name || '')
  s = s.replace(/\([^)]*\)/g, ' ') // remove (notes)
  s = s.split(',')[0] // drop ", finely chopped" etc.
  // Strip a leading quantity/unit run like "2 x", "500 g", "1 tbsp".
  s = s.replace(/^\s*[\d.,/¼½¾\s]+(?:x\b|g\b|kg\b|ml\b|l\b|tbsp\b|tsp\b|oz\b|lb\b)?/i, ' ')
  s = s.replace(/[^\p{L}\p{N}\s'&-]/gu, ' ') // keep letters/numbers/simple punct
  s = s.replace(/\s+/g, ' ').trim()
  return s
}

/**
 * Build a grocer search URL for an item name (cleaned first). Returns null when
 * the grocer is unknown or the cleaned term is empty.
 *
 * @param {string} grocerId
 * @param {string} name
 * @returns {string|null}
 */
export function searchUrl(grocerId, name) {
  const grocer = getGrocer(grocerId)
  if (!grocer) return null
  const term = cleanTerm(name)
  if (!term) return null
  return grocer.search(term)
}
