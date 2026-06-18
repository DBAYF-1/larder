// Deterministic, token-free food-image lookup for curated dishes.
//
// Well-known dishes ("Shepherd's pie", "Bangers and mash", "Victoria sponge")
// have a Wikipedia article whose REST summary carries a Wikimedia Commons photo.
// The mapping is fully deterministic: the same dish title resolves to the same
// Wikipedia page, hence the same image — no API key, no token, no randomness.
//
//   GET https://en.wikipedia.org/api/rest_v1/page/summary/<Title_With_Underscores>
//   -> { type, title, thumbnail:{source}, originalimage:{source},
//        content_urls:{ desktop:{ page } } }
//
// To push coverage from ~5% to nearly every recipe, `imageForDish(title)` tries
// a deterministic FALLBACK CHAIN, returning the FIRST hit:
//   1. Hand-alias map for awkward names (exact Wikipedia title).
//   2. Exact sentence-cased title via the REST summary endpoint.
//   3. Wikipedia full-text SEARCH (action=query&list=search, srlimit=1): the top
//      result for a given query is stable, so this stays deterministic. We then
//      fetch that page's REST summary and use its thumbnail.
//   4. Food-TYPE fallback: derive a type keyword from the title (curry, soup,
//      salad, stir-fry, frittata, …) and map it to a canonical Wikipedia page.
//      The LONGEST matching keyword wins, for specificity. This guarantees
//      almost every recipe gets a sensible, on-topic photo.
//
// Wikimedia images are Creative-Commons / public-domain, so we are legally clean
// as long as we keep an attribution string and the page URL. We capture both.
//
// `imageForDish(title)` NEVER throws and returns null when nothing is found, so
// the caller (mapCurated) can fall back to the on-brand SVG placeholder.
//
// The companion JSON cache (data/dish-images.json) is slug-keyed using the SAME
// slugify rule as ../pipeline/resolve.js so a recipe's slug looks the image up
// directly. `loadImageCache()` + `getCachedImage()` read it synchronously and
// defensively (an absent/corrupt file yields {} and a clean miss).

import { existsSync, readFileSync } from 'node:fs'
import { slugify } from '../pipeline/resolve.js'

const SUMMARY_ENDPOINT = 'https://en.wikipedia.org/api/rest_v1/page/summary/'
const SEARCH_ENDPOINT = 'https://en.wikipedia.org/w/api.php'

// Identifying User-Agent — Wikimedia asks API clients to say who they are.
const USER_AGENT = 'Larder/1.0 (larder-dbayft; meal-planning shopping lists)'

const CACHE_URL = new URL('../data/dish-images.json', import.meta.url)

// Attribution line stored alongside every Wikimedia image. Kept short and
// generic on purpose — the page URL carries the precise per-file credit.
const WIKIMEDIA_ATTRIBUTION = 'Image: Wikimedia Commons'

// Hand-mapped aliases for very common dishes whose curated title does not match
// the Wikipedia article verbatim (redirects mostly cover this, but a couple of
// compound names need a deterministic nudge). Keyed by slug -> Wikipedia title.
const TITLE_ALIASES = {
  'victoria-sponge': 'Victoria sponge',
  'full-english-breakfast': 'Full breakfast',
  'bangers-and-mash': 'Bangers and mash',
  'cumberland-sausage-and-mash': 'Cumberland sausage',
  'jacket-potato-with-beans': 'Baked potato',
  'ham-egg-and-chips': 'Ham, egg and chips',
  'roast-chicken-dinner': 'Roast chicken',
  'leek-and-potato-soup': 'Leek soup',
}

// Food-TYPE fallback map: a lower-cased type keyword -> a canonical Wikipedia
// page title (underscored, ready for the REST summary endpoint). When nothing
// more specific matches, we still get a sensible, on-topic photo for the dish.
// Matching prefers the LONGEST keyword found in the title, so "stir-fry" beats
// "fry", "spaghetti" beats nothing generic, etc. All values are real Wikipedia
// article titles carrying a lead image.
const TYPE_PAGES = {
  // pasta family
  spaghetti: 'Pasta',
  tagliatelle: 'Pasta',
  linguine: 'Pasta',
  macaroni: 'Macaroni',
  'mac and cheese': 'Macaroni_and_cheese',
  lasagne: 'Lasagne',
  lasagna: 'Lasagne',
  cannelloni: 'Cannelloni',
  ravioli: 'Ravioli',
  gnocchi: 'Gnocchi',
  carbonara: 'Carbonara',
  bolognese: 'Bolognese_sauce',
  pasta: 'Pasta',
  noodle: 'Noodle',
  noodles: 'Noodle',
  ramen: 'Ramen',
  // rice family
  risotto: 'Risotto',
  paella: 'Paella',
  biryani: 'Biryani',
  pilaf: 'Pilaf',
  pilau: 'Pilaf',
  'fried rice': 'Fried_rice',
  rice: 'Rice',
  porridge: 'Porridge',
  oats: 'Porridge',
  oatmeal: 'Oatmeal',
  // soups / stews / braises
  soup: 'Soup',
  broth: 'Broth',
  chowder: 'Chowder',
  bisque: 'Bisque_(food)',
  stew: 'Stew',
  casserole: 'Casserole',
  braise: 'Braising',
  hotpot: 'Lancashire_hotpot',
  goulash: 'Goulash',
  tagine: 'Tagine',
  // curries / spiced
  curry: 'Curry',
  korma: 'Korma',
  tikka: 'Chicken_tikka_masala',
  masala: 'Chicken_tikka_masala',
  vindaloo: 'Vindaloo',
  rogan: 'Rogan_josh',
  balti: 'Balti_(food)',
  jalfrezi: 'Jalfrezi',
  saag: 'Saag',
  dahl: 'Dal',
  dhal: 'Dal',
  dal: 'Dal',
  dholl: 'Dal',
  keema: 'Keema',
  chilli: 'Chili_con_carne',
  chili: 'Chili_con_carne',
  // baked / pastry / pies
  pie: 'Pie',
  tart: 'Tart',
  quiche: 'Quiche',
  pastry: 'Pastry',
  pasty: 'Pasty',
  flan: 'Flan',
  strudel: 'Strudel',
  pizza: 'Pizza',
  calzone: 'Calzone',
  focaccia: 'Focaccia',
  bread: 'Bread',
  scone: 'Scone',
  muffin: 'Muffin',
  // sweet / puddings
  cake: 'Cake',
  cheesecake: 'Cheesecake',
  brownie: 'Chocolate_brownie',
  cookie: 'Cookie',
  biscuit: 'Biscuit',
  crumble: 'Crumble',
  cobbler: 'Cobbler_(food)',
  torte: 'Torte',
  macaroon: 'Macaroon',
  pavlova: 'Pavlova_(cake)',
  meringue: 'Meringue',
  trifle: 'Trifle',
  mousse: 'Mousse',
  custard: 'Custard',
  pudding: 'Pudding',
  pancake: 'Pancake',
  pancakes: 'Pancake',
  crepe: 'Crêpe',
  waffle: 'Waffle',
  'ice cream': 'Ice_cream',
  sorbet: 'Sorbet',
  compote: 'Compote',
  // egg dishes
  omelette: 'Omelette',
  omelet: 'Omelette',
  frittata: 'Frittata',
  'scrambled eggs': 'Scrambled_eggs',
  scramble: 'Scrambled_eggs',
  scrambled: 'Scrambled_eggs',
  'poached egg': 'Poached_egg',
  'boiled egg': 'Boiled_egg',
  shakshuka: 'Shakshouka',
  // handhelds
  burger: 'Hamburger',
  hamburger: 'Hamburger',
  cheeseburger: 'Cheeseburger',
  sandwich: 'Sandwich',
  toastie: 'Toast_sandwich',
  wrap: 'Wrap_(food)',
  burrito: 'Burrito',
  taco: 'Taco',
  quesadilla: 'Quesadilla',
  fajita: 'Fajita',
  pitta: 'Pita',
  pita: 'Pita',
  falafel: 'Falafel',
  hummus: 'Hummus',
  kebab: 'Kebab',
  skewer: 'Kebab',
  // techniques / formats
  'stir-fry': 'Stir_frying',
  'stir fry': 'Stir_frying',
  stirfry: 'Stir_frying',
  traybake: 'Sheet_pan',
  'sheet pan': 'Sheet_pan',
  'one-pot': 'One-pot_dish',
  'one pot': 'One-pot_dish',
  roast: 'Roasting',
  roasted: 'Roasting',
  grilled: 'Grilling',
  griddled: 'Grilling',
  fried: 'Frying',
  baked: 'Baking',
  bake: 'Baking',
  hash: 'Hash_(food)',
  fritter: 'Fritter',
  fishcake: 'Fish_cake',
  croquette: 'Croquette',
  dumpling: 'Dumpling',
  samosa: 'Samosa',
  'spring roll': 'Spring_roll',
  latke: 'Latke',
  blintz: 'Blini',
  gratin: 'Gratin',
  flatbread: 'Flatbread',
  meatball: 'Meatball',
  meatballs: 'Meatball',
  burrata: 'Burrata',
  // salads / sides
  salad: 'Salad',
  coleslaw: 'Coleslaw',
  slaw: 'Coleslaw',
  tabbouleh: 'Tabbouleh',
  'mash': 'Mashed_potato',
  mashed: 'Mashed_potato',
  chips: 'French_fries',
  fries: 'French_fries',
  quinoa: 'Quinoa',
  couscous: 'Couscous',
  polenta: 'Polenta',
  bulgur: 'Bulgur',
  'grain bowl': 'Buddha_bowl',
  bowl: 'Buddha_bowl',
  // breakfast / spreads / snacks
  toast: 'Toast',
  bruschetta: 'Bruschetta',
  granola: 'Granola',
  muesli: 'Muesli',
  flapjack: 'Flapjack_(oat_bar)',
  flapjacks: 'Flapjack_(oat_bar)',
  loaf: 'Bread',
  yoghurt: 'Yogurt',
  yogurt: 'Yogurt',
  lassi: 'Lassi',
  raita: 'Raita',
  salsa: 'Salsa_(sauce)',
  dip: 'Dipping_sauce',
  guacamole: 'Guacamole',
  pesto: 'Pesto',
  chutney: 'Chutney',
  pickle: 'Pickling',
  // more fish / seafood
  'sea bass': 'European_bass',
  bass: 'European_bass',
  sardine: 'Sardine',
  anchovy: 'Anchovy',
  squid: 'Squid_as_food',
  calamari: 'Squid_as_food',
  mussels: 'Mussel',
  scallop: 'Scallop',
  // proteins (broad guarantee for "<adjective> chicken", etc.)
  prawn: 'Prawn',
  prawns: 'Prawn',
  shrimp: 'Shrimp',
  salmon: 'Salmon_as_food',
  tuna: 'Tuna',
  cod: 'Cod',
  haddock: 'Haddock',
  mackerel: 'Mackerel',
  trout: 'Trout',
  fish: 'Fish_as_food',
  chicken: 'Chicken_as_food',
  turkey: 'Turkey_as_food',
  duck: 'Duck_as_food',
  beef: 'Beef',
  steak: 'Steak',
  lamb: 'Lamb_and_mutton',
  mutton: 'Lamb_and_mutton',
  pork: 'Pork',
  bacon: 'Bacon',
  sausage: 'Sausage',
  ham: 'Ham',
  gammon: 'Gammon_(meat)',
  venison: 'Venison',
  tofu: 'Tofu',
  tempeh: 'Tempeh',
  paneer: 'Paneer',
  halloumi: 'Halloumi',
  // pulses / veg
  lentil: 'Lentil',
  lentils: 'Lentil',
  chickpea: 'Chickpea',
  chickpeas: 'Chickpea',
  bean: 'Bean',
  beans: 'Bean',
  // drinks
  smoothie: 'Smoothie',
  shake: 'Milkshake',
}

// Type keywords sorted longest-first (by character length) so multi-word and
// more specific keywords are tried before generic single words. Computed once.
const TYPE_KEYWORDS = Object.keys(TYPE_PAGES).sort(
  (a, b) => b.length - a.length,
)

// Leading diet / qualifier words that describe a recipe variant rather than the
// dish itself. Stripped before the SEARCH and TYPE fallbacks so a "Dairy-free
// leek soup" searches for "leek soup" (not "Dairy Queen") — these prefixes are
// otherwise the highest-ranked search token and pull in irrelevant pages.
// Order matters only for readability; matching is longest-first below.
const QUALIFIER_PREFIXES = [
  'low-fodmap',
  'low fodmap',
  'low-calorie',
  'low calorie',
  'low-carb',
  'low carb',
  'high-protein',
  'high protein',
  'dairy-free',
  'dairy free',
  'gluten-free',
  'gluten free',
  'egg-free',
  'egg free',
  'nut-free',
  'nut free',
  'soy-free',
  'soy free',
  'soya-free',
  'soya free',
  'sesame-free',
  'sesame free',
  'shellfish-free',
  'shellfish free',
  'sugar-free',
  'sugar free',
  'vegetarian',
  'pescatarian',
  'mediterranean',
  'diabetic',
  'vegan',
  'paleo',
  'keto',
  'halal',
  'kosher',
  'dash',
  'healthy',
  'easy',
  'quick',
  'simple',
  'classic',
  'creamy',
  'spiced',
  'spicy',
].sort((a, b) => b.length - a.length)

/**
 * Strip one or more leading diet/qualifier words ("Vegan ", "Low-FODMAP ",
 * "Paleo ") from a title so the search and type fallbacks key off the actual
 * dish. Repeats until no known prefix remains (handles "Vegan gluten-free …").
 * Deterministic and conservative: only removes from the known list, only at the
 * start, and never strips the whole title away.
 */
function stripQualifiers(title) {
  let s = String(title || '')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  let changed = true
  while (changed) {
    changed = false
    const low = s.toLowerCase()
    for (const p of QUALIFIER_PREFIXES) {
      if (low.startsWith(p + ' ')) {
        const rest = s.slice(p.length).trim()
        if (rest) {
          s = rest
          changed = true
        }
        break
      }
    }
  }
  return s
}

/**
 * Normalise a dish title to a Wikipedia-style page title.
 *   - trim and collapse whitespace
 *   - strip trailing parentheticals, e.g. "Lasagne (vegan)" -> "Lasagne"
 *   - sentence-case: first word capitalised, the rest lower-cased (Wikipedia's
 *     own convention for most dish articles), preserving any apostrophes
 *   - spaces -> underscores for the URL path
 *
 * Returns '' when nothing usable remains.
 */
function toWikiTitle(title) {
  const cleaned = String(title || '')
    .replace(/\([^)]*\)/g, ' ') // drop "(vegan)", "(gf)", etc.
    .replace(/\s+/g, ' ')
    .trim()
  if (!cleaned) return ''
  const words = cleaned.split(' ')
  const sentenceCased = words
    .map((w, i) => (i === 0 ? capitaliseFirst(w) : w.toLowerCase()))
    .join(' ')
  return sentenceCased.replace(/ /g, '_')
}

function capitaliseFirst(word) {
  if (!word) return word
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

/**
 * Lower-cased, punctuation-light form of a title, used for keyword matching in
 * the food-type fallback. Parentheticals are dropped and hyphens kept (so
 * "stir-fry" matches), then spaces normalised.
 */
function normaliseForMatch(title) {
  return String(title || '')
    .replace(/\([^)]*\)/g, ' ')
    .toLowerCase()
    .replace(/[^a-z0-9\- ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Find the most specific food-type page for a title by scanning a longest-first
 * list of type keywords and returning the first that appears as a whole token
 * (or hyphen/space phrase) in the title. Returns the Wikipedia page title
 * (underscored) or '' when no type is recognised.
 */
function typePageForTitle(title) {
  const hay = normaliseForMatch(title)
  if (!hay) return ''
  // Pad with spaces so single-word keywords can match at word boundaries via
  // a simple includes() against " <keyword> "; phrase keywords match directly.
  const padded = ' ' + hay + ' '
  // A second haystack with each token singularised (drop a trailing -s) so
  // "cookies"->"cookie", "fritters"->"fritter", "pears"->"pear" all match their
  // singular keyword without us listing every plural. Conservative: only tokens
  // longer than three letters ending in a non-"ss" "s". Whole-token only.
  const singularPadded =
    ' ' +
    hay
      .split(' ')
      .map((w) => (w.length > 3 && /[^s]s$/.test(w) ? w.slice(0, -1) : w))
      .join(' ') +
    ' '
  for (const kw of TYPE_KEYWORDS) {
    if (kw.includes(' ') || kw.includes('-')) {
      // Multi-word / hyphenated phrase: substring match is already specific.
      if (padded.includes(kw)) return TYPE_PAGES[kw]
    } else if (
      padded.includes(' ' + kw + ' ') ||
      singularPadded.includes(' ' + kw + ' ')
    ) {
      // Single word: require whole-token match to avoid "ham" in "Birmingham".
      return TYPE_PAGES[kw]
    }
  }
  return ''
}

/** One polite GET against the Wikipedia summary endpoint. Never throws. */
async function fetchSummary(wikiTitle) {
  if (!wikiTitle) return null
  try {
    const res = await fetch(SUMMARY_ENDPOINT + encodeURIComponent(wikiTitle), {
      headers: { 'User-Agent': USER_AGENT, accept: 'application/json' },
    })
    if (!res.ok) return null // 404 / 5xx — clean miss, no retry storm
    const json = await res.json()
    if (!json || typeof json !== 'object') return null
    // Disambiguation pages and error stubs carry no usable single image.
    if (json.type && json.type !== 'standard') return null
    const url =
      (json.thumbnail && json.thumbnail.source) ||
      (json.originalimage && json.originalimage.source) ||
      null
    if (!url) return null
    const pageUrl =
      (json.content_urls &&
        json.content_urls.desktop &&
        json.content_urls.desktop.page) ||
      null
    return { url, attribution: WIKIMEDIA_ATTRIBUTION, pageUrl }
  } catch {
    return null // network error — fall back to placeholder, never throw
  }
}

/**
 * Wikipedia full-text search for a title, returning the TOP result's page title
 * (verbatim, with spaces) or '' on any miss. Deterministic: the same srsearch
 * query yields the same ordering, so srlimit=1 is stable across runs.
 *
 *   GET .../w/api.php?action=query&list=search&srsearch=<title>
 *       &srlimit=1&format=json&origin=*
 */
async function searchTopTitle(query) {
  const q = String(query || '')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (!q) return ''
  const params = new URLSearchParams({
    action: 'query',
    list: 'search',
    srsearch: q,
    srlimit: '1',
    srnamespace: '0',
    format: 'json',
    origin: '*',
  })
  try {
    const res = await fetch(SEARCH_ENDPOINT + '?' + params.toString(), {
      headers: { 'User-Agent': USER_AGENT, accept: 'application/json' },
    })
    if (!res.ok) return ''
    const json = await res.json()
    const hit =
      json &&
      json.query &&
      Array.isArray(json.query.search) &&
      json.query.search[0]
    return hit && hit.title ? String(hit.title) : ''
  } catch {
    return '' // network error — caller falls through to the next stage
  }
}

/**
 * Resolve a real photo for a dish. Deterministic and token-free. Tries, in
 * order, returning the FIRST hit (else null): hand alias, exact title, Wikipedia
 * search top result, then a broad food-type page. Never throws.
 *
 * @param {string} title  Dish title, e.g. "Chickpea and spinach stew".
 * @returns {Promise<{url:string, attribution:string, pageUrl:string|null}|null>}
 *          The Wikimedia image + attribution + Wikipedia page URL, or null when
 *          nothing confident is found (the caller uses the SVG placeholder).
 */
export async function imageForDish(title) {
  const slug = slugify(title)

  // 1. Hand-mapped alias wins (deterministic override for awkward names).
  if (slug && TITLE_ALIASES[slug]) {
    const aliased = await fetchSummary(toWikiTitle(TITLE_ALIASES[slug]))
    if (aliased) return aliased
  }

  // 2. Primary: the sentence-cased title verbatim (redirects handle synonyms).
  const primary = await fetchSummary(toWikiTitle(title))
  if (primary) return primary

  // Drop leading diet/qualifier words ("Vegan", "Low-FODMAP", "Paleo") so the
  // search and type fallbacks key off the actual dish, not the variant label.
  const dish = stripQualifiers(title)

  // 3. Wikipedia full-text search → top page → its summary thumbnail.
  const searched = await searchTopTitle(dish)
  if (searched && toWikiTitle(searched) !== toWikiTitle(title)) {
    const fromSearch = await fetchSummary(searched.replace(/ /g, '_'))
    if (fromSearch) return fromSearch
  }

  // 4. Food-TYPE fallback: a canonical page for the dish's broad type. Picks the
  //    longest matching keyword for specificity. Gives nearly everything a photo.
  const typePage = typePageForTitle(dish)
  if (typePage) {
    const fromType = await fetchSummary(typePage)
    if (fromType) return fromType
  }

  return null
}

/**
 * Synchronously read the slug-keyed image cache (data/dish-images.json).
 * Defensive: returns {} when the file is absent or unreadable/corrupt.
 *
 * @returns {Record<string, {url:string, attribution:string, pageUrl:string|null}|null>}
 */
export function loadImageCache() {
  try {
    if (!existsSync(CACHE_URL)) return {}
    const raw = readFileSync(CACHE_URL, 'utf8')
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

/**
 * Look a dish up in an already-loaded cache by its title's slug (same slugify
 * rule as the recipe pipeline). A stored `null` means "checked, none found" and
 * is returned as null — a true miss returns undefined so callers can tell the
 * difference if they care.
 *
 * @param {string} title
 * @param {ReturnType<typeof loadImageCache>} cache
 * @returns {{url:string, attribution:string, pageUrl:string|null}|null|undefined}
 */
export function getCachedImage(title, cache) {
  if (!cache) return undefined
  const slug = slugify(title)
  if (!slug) return undefined
  return cache[slug]
}
