// Diet long-tail canonical ingredients — batch 1.
//
// Purpose: absorb ingredient cores from the curated diet sets (including the
// diet-*-expansion.js files) that do NOT resolve against the canonical
// dictionary, so shopping-list normalisation and nutrition estimates work.
//
// Status: as of this batch, a full scan of all 35 curated diet files
// (2,455 recipes / 22,837 raw lines / 656 distinct ingredient names) found
// ZERO genuinely-unresolved cores — every name already resolves via an
// existing canonical record (core.js + the batch files, notably the prior
// diet-longtail-0.js long-tail batch). There is therefore nothing meaningful
// to add in this batch without duplicating names already covered elsewhere.
//
// Record shape matches core.js (canonicalName, description, foodGroup, aisle,
// baseUnit, densityGperMl, minimumPurchase, typicalPacks, alternatives,
// synonyms, staple, displayRules, nutrientProfilePer100). Spelling variants
// would be folded into each record's `synonyms`. Left empty intentionally.

export default []
