// SHOP_WALK — the fixed aisle order used to sort a shopping list (spec 15.1).
//
// THIS IS A VERBATIM COPY of the VALUES in /src/lib/shopWalk.js. The app bundle
// imports the browser copy; the Node ingestion engine cannot reach across the
// /src boundary cleanly, so the aisle vocabulary is duplicated here. The two
// files MUST stay identical — if you change one, change the other.

export const SHOP_WALK = [
  'Produce',
  'Meat & Fish',
  'Dairy & Eggs',
  'Bakery',
  'Tinned & Jarred',
  'Dry & Baking',
  'Herbs & Spices',
  'Frozen',
  'Drinks',
  'Household',
  'Other',
]

// Non-aisle appendix sections, always rendered after the main aisles in this order.
export const APPENDIX_SECTIONS = {
  STORE_CUPBOARD: 'Store-cupboard',
  OPTIONAL: 'Optional extras',
  NEEDS_REVIEW: 'Check these yourself',
}

// Full render order for the receipt.
export const SECTION_ORDER = [
  ...SHOP_WALK,
  APPENDIX_SECTIONS.STORE_CUPBOARD,
  APPENDIX_SECTIONS.OPTIONAL,
  APPENDIX_SECTIONS.NEEDS_REVIEW,
]

// Rank lookup for stable sorting; unknown aisles fall to "Other".
export const AISLE_RANK = Object.fromEntries(SECTION_ORDER.map((a, i) => [a, i]))

export function aisleRank(aisle) {
  return aisle in AISLE_RANK ? AISLE_RANK[aisle] : AISLE_RANK['Other']
}

// Convenience set for validating that a curated ingredient's aisle is legal.
export const SHOP_WALK_SET = new Set(SHOP_WALK)

export function isValidAisle(aisle) {
  return SHOP_WALK_SET.has(aisle)
}
