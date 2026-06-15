// SHOP_WALK — the fixed aisle order used to sort a shopping list (spec 15.1).
// Shared by buildShoppingList (logic) and the ShoppingList receipt (UI).

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
