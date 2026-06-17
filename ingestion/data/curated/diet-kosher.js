// Curated KOSHER recipes for Larder (per-diet floor seed).
//
// Culinary content ONLY — the source/sourceId/imageUrl boilerplate is added by
// sources/curated.js (mapCurated). Each record is:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }
//
// Ingredient rawNames are chosen to resolve cleanly against data/ingredients.js
// (chicken thigh, minced beef, salmon fillet, smoked salmon, matzo via
// breadcrumbs, basmati rice, chickpeas, aubergine, tahini, etc.). Method prose
// is original British-English, written fresh for Larder — no website wording is
// copied.
//
// KOSHER RULES enforced on EVERY record in this file:
//   • NO pork or pork products (no bacon, ham, lard, gammon, chorizo, pancetta).
//   • NO shellfish or other non-kosher seafood (no prawns, crab, lobster,
//     mussels, clams, oysters, squid, scallops; only finned-and-scaled fish).
//   • NO mixing of meat and dairy in the same dish. Each recipe is one of:
//       - "meat" (fleishig): contains poultry/beef/lamb, ZERO dairy. Where a
//         classic uses butter we use olive/vegetable oil or a non-dairy spread;
//         where it uses cream/milk we omit or use a non-dairy alternative.
//       - "dairy" (milchig): contains dairy, ZERO meat/poultry. Fish is allowed
//         alongside dairy in the kashrut tradition followed here.
//       - "pareve": neither meat nor dairy (vegan, or fish-only with no dairy).
//
// dietLabels are tagged HONESTLY: every record carries 'Kosher', plus any other
// diet it genuinely satisfies (e.g. 'Vegetarian', 'Vegan', 'Pescatarian',
// 'Dairy-free', 'Gluten-free', 'High-protein', 'Mediterranean', 'Low-carb',
// 'Low-calorie', 'Diabetic-friendly'). A dish is only tagged 'Gluten-free' when
// no wheat/barley/rye ingredient is present, 'Dairy-free' only when it truly
// contains no dairy, etc.
//
// These recipes seed the Kosher per-diet floor; the Audit phase tops them up.

const recipes = [
  // ─────────────────────── MEAT (fleishig) — poultry ───────────────────────
  {
    title: 'Roast chicken with lemon and thyme',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the whole chicken in a roasting tin and rub all over with olive oil, salt and pepper.\n' +
      '2. Halve the lemon and tuck it inside the cavity with a few sprigs of thyme and a couple of the garlic cloves.\n' +
      '3. Scatter the onion wedges, carrots and remaining garlic around the bird and drizzle with a little more oil.\n' +
      '4. Roast for 1 hour 20 minutes, basting once or twice, until the juices run clear when the thickest part of the thigh is pierced.\n' +
      '5. Lift the chicken onto a board, cover loosely with foil and rest for 15 minutes.\n' +
      '6. Carve and serve with the roasted vegetables and the pan juices spooned over.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1 (1.6kg)' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Thyme', rawMeasure: '1 small bunch' },
      { rawName: 'Garlic', rawMeasure: '1 bulb' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Carrot', rawMeasure: '4' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken soup with matzo balls',
    servingsBase: 6,
    totalTimeMinutes: 150,
    course: 'Lunch',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Dairy-free'],
    instructions:
      '1. Put the chicken pieces in a large pot with the onion, carrots, celery, parsley and a generous pinch of salt. Cover with cold water and bring slowly to a simmer.\n' +
      '2. Skim away any foam that rises, then simmer very gently, partly covered, for about 2 hours until the broth is golden and full of flavour.\n' +
      '3. Meanwhile make the dumplings: beat the eggs with the vegetable oil, stir in the matzo crumbs and a little of the strained broth, season, and chill for 30 minutes.\n' +
      '4. Lift out the chicken, shred the meat and discard the skin and bones. Strain the broth and return it to a clean pan; check the seasoning.\n' +
      '5. With wet hands, roll the chilled mixture into walnut-sized balls and simmer gently in salted water for 25 minutes until light and fluffy.\n' +
      '6. Ladle the hot broth into bowls, add a couple of dumplings and some shredded chicken to each, and scatter with chopped parsley.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '1kg, bone-in' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Celery', rawMeasure: '3 sticks' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Breadcrumbs', rawMeasure: '150g matzo meal' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Honey and mustard roast chicken thighs',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Whisk together the honey, mustard, olive oil, crushed garlic and a good grind of pepper.\n' +
      '2. Put the chicken thighs in a roasting tin, pour over the glaze and turn to coat well.\n' +
      '3. Tuck the lemon wedges and thyme sprigs among the thighs and season with salt.\n' +
      '4. Roast skin-side up for 35–40 minutes, spooning the glaze over halfway, until deep gold and sticky and cooked through.\n' +
      '5. Rest for 5 minutes, then serve with the pan juices and plenty of greens or rice.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Honey', rawMeasure: '3 tbsp' },
      { rawName: 'Mustard', rawMeasure: '2 tbsp wholegrain' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Thyme', rawMeasure: '4 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken schnitzel',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Lay each chicken breast between two sheets of cling film and bash with a rolling pin until evenly thin.\n' +
      '2. Set out three plates: seasoned flour, the beaten eggs, and the breadcrumbs mixed with a little paprika.\n' +
      '3. Coat each escalope first in flour, then egg, then press firmly into the crumbs to cover completely.\n' +
      '4. Heat a generous layer of vegetable oil in a large frying pan over a medium-high heat.\n' +
      '5. Fry the schnitzels for 3–4 minutes each side until deep golden and cooked through, then drain on kitchen paper.\n' +
      '6. Serve at once with lemon wedges to squeeze over.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4' },
      { rawName: 'Plain flour', rawMeasure: '60g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Breadcrumbs', rawMeasure: '150g' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Moroccan chicken and chickpea tagine',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Moroccan',
    dietLabels: ['Kosher', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the olive oil in a heavy pan and brown the chicken thighs all over, then lift out.\n' +
      '2. Soften the onion for 6–8 minutes, then stir in the garlic, cumin, ground coriander, cinnamon and ras el hanout and cook for a minute until fragrant.\n' +
      '3. Return the chicken, add the chopped tomatoes, chickpeas and stock, season, and bring to a simmer.\n' +
      '4. Cover and cook gently for 35–40 minutes until the chicken is tender and the sauce thick.\n' +
      '5. Stir through the dried apricots for the last 10 minutes.\n' +
      '6. Finish with chopped coriander and serve with couscous or rice.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, boneless' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Ras el hanout', rawMeasure: '2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Dried apricots', rawMeasure: '80g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and rice one-pot',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the olive oil in a wide pan with a lid and brown the chicken thighs skin-side down, then set aside.\n' +
      '2. Soften the onion in the same pan for 6–8 minutes, then stir in the garlic and paprika.\n' +
      '3. Add the rice and stir to coat in the oil, then pour in the hot stock and season well.\n' +
      '4. Nestle the chicken back in skin-side up, bring to a simmer, cover and cook gently for 25 minutes.\n' +
      '5. Scatter over the peas, replace the lid and cook for a final 5 minutes until the rice is tender and the chicken cooked through.\n' +
      '6. Rest off the heat for 5 minutes, then fluff up and finish with chopped parsley.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey meatballs in tomato sauce',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Kosher', 'Dairy-free', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Mix the turkey mince with the breadcrumbs, one egg, the grated onion, half the garlic and a good pinch of salt and pepper. Roll into walnut-sized balls.\n' +
      '2. Heat the olive oil in a deep frying pan and brown the meatballs all over, then lift out.\n' +
      '3. Soften the remaining garlic for a minute, stir in the tomato purée, then add the passata, oregano and a splash of water. Season.\n' +
      '4. Return the meatballs, cover and simmer gently for 20 minutes until cooked through and the sauce is rich.\n' +
      '5. Scatter with chopped basil and serve with pasta or rice.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Breadcrumbs', rawMeasure: '50g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken shawarma wraps',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Kosher', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Mix the cumin, paprika, turmeric, cinnamon, crushed garlic, lemon juice and olive oil into a paste. Toss with the sliced chicken thighs and leave to marinate for at least 20 minutes.\n' +
      '2. Heat a large frying pan over a high heat and cook the chicken in batches until charred at the edges and cooked through.\n' +
      '3. Warm the flatbreads briefly in a dry pan.\n' +
      '4. Pile the chicken into the breads with shredded lettuce, sliced tomato and red onion.\n' +
      '5. Drizzle with tahini loosened with a little water and lemon, then roll up tightly to serve.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '700g, boneless' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Pitta bread', rawMeasure: '4 large flatbreads' },
      { rawName: 'Lettuce', rawMeasure: '1/2 head' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sweet and sticky chicken drumsticks',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Whisk together the honey, soy sauce, tomato ketchup, crushed garlic and grated ginger.\n' +
      '2. Slash each drumstick a couple of times and put them in a roasting tin. Pour over the glaze and turn to coat.\n' +
      '3. Roast for 40–45 minutes, turning and basting two or three times, until deep mahogany and sticky.\n' +
      '4. Scatter with spring onions and sesame seeds and serve with rice and steamed greens.',
    rawLines: [
      { rawName: 'Chicken drumstick', rawMeasure: '12' },
      { rawName: 'Honey', rawMeasure: '3 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Tomato ketchup', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemon and herb roast turkey breast',
    servingsBase: 6,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Mix the olive oil with the chopped rosemary, thyme, lemon zest, crushed garlic and plenty of seasoning.\n' +
      '2. Sit the turkey breast in a roasting tin and rub the herb oil all over.\n' +
      '3. Scatter the onion and lemon halves around the joint and pour a splash of stock into the base of the tin.\n' +
      '4. Roast for about 1 hour 15 minutes, basting now and then, until the juices run clear and a thermometer reads 70°C at the centre.\n' +
      '5. Rest the joint under foil for 15 minutes before carving into slices to serve.',
    rawLines: [
      { rawName: 'Turkey', rawMeasure: '1.4kg breast joint' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Thyme', rawMeasure: '4 sprigs' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ─────────────────────── MEAT (fleishig) — beef & lamb ───────────────────────
  {
    title: 'Beef brisket braised in red wine',
    servingsBase: 6,
    totalTimeMinutes: 240,
    course: 'Dinner',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C). Season the brisket all over. Heat the olive oil in a large casserole and brown the joint well on every side, then lift out.\n' +
      '2. Soften the onions, carrots and celery in the same pot for 10 minutes, then stir in the garlic and tomato purée.\n' +
      '3. Pour in the red wine and let it bubble for a couple of minutes, then add the stock and bay leaves.\n' +
      '4. Return the brisket, cover tightly and braise in the oven for about 3 hours 30 minutes, turning once, until meltingly tender.\n' +
      '5. Lift the meat onto a board and rest. Skim the sauce, then reduce on the hob if needed.\n' +
      '6. Slice the brisket against the grain and spoon over the rich gravy.',
    rawLines: [
      { rawName: 'Beef brisket', rawMeasure: '1.5kg' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Red wine', rawMeasure: '300ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef and root vegetable stew',
    servingsBase: 6,
    totalTimeMinutes: 180,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Toss the stewing beef in the seasoned flour. Heat the olive oil in a large casserole and brown the beef in batches, then set aside.\n' +
      '2. Soften the onions for 8 minutes, then stir in the garlic and tomato purée and cook for a minute.\n' +
      '3. Return the beef, pour in the stock, add the bay leaves and bring to a gentle simmer.\n' +
      '4. Cover and cook on a low heat for 1 hour 30 minutes, then add the carrots, parsnips and swede.\n' +
      '5. Continue cooking for a further 45 minutes until the beef is tender and the vegetables soft.\n' +
      '6. Check the seasoning and serve in deep bowls with crusty bread.',
    rawLines: [
      { rawName: 'Stewing beef', rawMeasure: '800g' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Parsnip', rawMeasure: '2' },
      { rawName: 'Swede', rawMeasure: '300g' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 800ml' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed cabbage rolls',
    servingsBase: 4,
    totalTimeMinutes: 100,
    course: 'Dinner',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Bring a large pan of water to the boil and blanch the cabbage leaves for 2–3 minutes until pliable, then drain and pat dry.\n' +
      '2. Mix the minced beef with the cooked rice, grated onion, one egg, parsley and plenty of seasoning.\n' +
      '3. Place a spoonful of filling on each leaf, fold in the sides and roll up into neat parcels.\n' +
      '4. For the sauce, soften the chopped onion in olive oil, then add the passata, a little sugar, lemon juice and a splash of water; season.\n' +
      '5. Heat the oven to 180°C (fan 160°C). Sit the rolls seam-side down in a baking dish, pour over the sauce, cover with foil.\n' +
      '6. Bake for 1 hour until the rolls are tender and the sauce sweet-sour and rich.',
    rawLines: [
      { rawName: 'Cabbage leaves', rawMeasure: '8 large' },
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Rice', rawMeasure: '100g, cooked' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Granulated sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef and barley soup',
    servingsBase: 6,
    totalTimeMinutes: 120,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the olive oil in a large pot and brown the diced beef in batches, then set aside.\n' +
      '2. Soften the onion, carrots and celery for 8–10 minutes, then stir in the garlic.\n' +
      '3. Return the beef, add the pearl barley, bay leaves and stock and bring to a simmer.\n' +
      '4. Skim, then cover and cook gently for about 1 hour 30 minutes until the beef and barley are tender.\n' +
      '5. Season well, stir through the chopped parsley and serve piping hot.',
    rawLines: [
      { rawName: 'Stewing beef', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Bulgur wheat', rawMeasure: '120g pearl barley' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1.5L' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced lamb and aubergine bake',
    servingsBase: 4,
    totalTimeMinutes: 80,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Kosher', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the aubergine slices with olive oil and a little salt, spread on a tray and roast for 20 minutes until softened.\n' +
      '2. Meanwhile brown the minced lamb in a pan, then add the onion and soften for 6–8 minutes.\n' +
      '3. Stir in the garlic, cumin, cinnamon and allspice, then the chopped tomatoes and tomato purée. Season and simmer for 15 minutes.\n' +
      '4. Layer the aubergine and lamb in a baking dish, finishing with a layer of lamb sauce.\n' +
      '5. Bake for 25 minutes until bubbling, then scatter with chopped parsley to serve.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Allspice', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Slow-roast lamb shoulder with garlic and rosemary',
    servingsBase: 6,
    totalTimeMinutes: 270,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Slash the lamb shoulder all over and push slivers of garlic and small sprigs of rosemary into the cuts.\n' +
      '2. Rub all over with olive oil, salt and pepper and sit the joint on a bed of onion wedges in a roasting tin.\n' +
      '3. Pour the stock into the base, cover tightly with foil and roast for 4 hours.\n' +
      '4. Remove the foil and turn the oven up to 200°C (fan 180°C) for a final 20 minutes to brown.\n' +
      '5. Rest under foil for 20 minutes — the meat should pull apart with a fork. Serve with the pan juices.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '2kg' },
      { rawName: 'Garlic', rawMeasure: '1 bulb' },
      { rawName: 'Rosemary', rawMeasure: '4 sprigs' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb and chickpea pilaf',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Kosher', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the olive oil in a wide pan with a lid and brown the diced lamb, then lift out.\n' +
      '2. Soften the onion for 6–8 minutes, then stir in the garlic, cumin, cinnamon and turmeric.\n' +
      '3. Return the lamb, stir in the rice and chickpeas to coat in the spices.\n' +
      '4. Pour in the hot stock, season, bring to a simmer, then cover and cook gently for 20 minutes.\n' +
      '5. Rest off the heat for 5 minutes, fork through and scatter with toasted almonds and chopped coriander.',
    rawLines: [
      { rawName: 'Lamb', rawMeasure: '500g, diced' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Almonds', rawMeasure: '40g, flaked' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef koftas with pomegranate',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Kosher', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Mix the minced beef with the grated onion, garlic, cumin, cinnamon, chopped parsley and plenty of seasoning until well combined.\n' +
      '2. Shape the mixture around skewers into long ovals, pressing firmly so they hold.\n' +
      '3. Brush with olive oil and grill or griddle over a high heat for 3–4 minutes each side until charred and cooked through.\n' +
      '4. Scatter with pomegranate seeds and more parsley and serve with flatbreads and salad.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Pomegranate', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sweet and sour meatballs',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Mix the minced beef with the breadcrumbs, grated onion, one egg and seasoning, then roll into small balls.\n' +
      '2. Heat the olive oil in a deep pan and brown the meatballs all over, then lift out.\n' +
      '3. For the sauce, stir the passata, tomato purée, brown sugar, lemon juice and a splash of water into the pan and bring to a simmer.\n' +
      '4. Return the meatballs, cover and cook gently for 30 minutes, turning now and then, until the sauce is glossy and sweet-sour.\n' +
      '5. Serve over fluffy rice.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Breadcrumbs', rawMeasure: '50g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Brown sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ─────────────────────── FISH (pareve) — no dairy ───────────────────────
  {
    title: 'Baked salmon with lemon and dill',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the salmon fillets on a lined baking tray.\n' +
      '2. Drizzle with olive oil, season well and scatter over the chopped dill.\n' +
      '3. Lay a couple of lemon slices over each fillet and squeeze the juice of the rest on top.\n' +
      '4. Bake for 12–15 minutes until the salmon flakes easily but is still just translucent at the centre.\n' +
      '5. Serve with new potatoes and green vegetables.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Dill', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Gefilte fish patties',
    servingsBase: 6,
    totalTimeMinutes: 90,
    course: 'Lunch',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Pescatarian', 'Dairy-free'],
    instructions:
      '1. Put the white fish fillets in a food processor with the grated onion, eggs, matzo crumbs, a pinch of sugar and plenty of seasoning, and pulse to a coarse paste.\n' +
      '2. With wet hands, shape the mixture into oval patties.\n' +
      '3. Make a light stock by simmering the sliced onion and carrots in salted water for 20 minutes.\n' +
      '4. Lower the patties into the gently simmering stock, cover and poach for 45 minutes.\n' +
      '5. Leave to cool in the liquid, then lift out and chill. Serve cold with a carrot slice on each and horseradish alongside.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '800g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Breadcrumbs', rawMeasure: '60g matzo meal' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Granulated sugar', rawMeasure: '1 tsp' },
      { rawName: 'Horseradish', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked salmon and avocado bagel',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Pescatarian'],
    instructions:
      '1. Split and lightly toast the bagels.\n' +
      '2. Mash the avocado with a squeeze of lemon, a little salt and pepper.\n' +
      '3. Spread the cut sides of the bagels with the avocado.\n' +
      '4. Layer over the smoked salmon, a few thin slices of red onion and some capers.\n' +
      '5. Finish with a grind of black pepper and a little more lemon, then close and serve.',
    rawLines: [
      { rawName: 'Bread', rawMeasure: '2 bagels' },
      { rawName: 'Smoked salmon', rawMeasure: '120g' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mediterranean baked sea bass',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Kosher', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Scatter the cherry tomatoes, sliced olives and garlic in a baking dish and toss with olive oil.\n' +
      '2. Roast for 10 minutes until the tomatoes begin to soften.\n' +
      '3. Sit the sea bass fillets on top, season, drizzle with a little more oil and scatter with thyme.\n' +
      '4. Return to the oven for 12–15 minutes until the fish is just cooked and flakes easily.\n' +
      '5. Finish with a squeeze of lemon and serve with the roasted tomatoes spooned over.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '2 fillets' },
      { rawName: 'Cherry tomato', rawMeasure: '250g' },
      { rawName: 'Olives', rawMeasure: '50g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna and white bean salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Kosher', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Drain and rinse the cannellini beans and tip into a large bowl.\n' +
      '2. Add the drained flaked tuna, halved cherry tomatoes, finely sliced red onion and chopped parsley.\n' +
      '3. Whisk the olive oil with the lemon juice, a little salt and pepper.\n' +
      '4. Pour the dressing over the salad and toss gently so the beans do not break up.\n' +
      '5. Leave to sit for 10 minutes for the flavours to mingle, then serve.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '2 tins (160g each)' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Crispy fishcakes with herbs',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Pescatarian', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Boil the potatoes until tender, drain well and mash, then leave to cool a little.\n' +
      '2. Flake in the cooked salmon and stir through the chopped parsley, dill, spring onions and a good squeeze of lemon. Season.\n' +
      '3. Shape into patties, then coat each one in flour, beaten egg and breadcrumbs.\n' +
      '4. Heat a shallow layer of vegetable oil in a frying pan and cook the fishcakes for 3–4 minutes each side until golden and crisp.\n' +
      '5. Drain on kitchen paper and serve with lemon wedges and a green salad.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '400g, cooked' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Dill', rawMeasure: '1/2 small bunch' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Breadcrumbs', rawMeasure: '100g' },
      { rawName: 'Vegetable oil', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled mackerel with beetroot salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the grill to high. Slash the mackerel fillets, brush with olive oil and season.\n' +
      '2. Grill skin-side up for 4–5 minutes until the skin crisps and the flesh is just cooked.\n' +
      '3. Toss the cooked beetroot wedges with the sliced red onion, chopped dill, lemon juice and a little olive oil.\n' +
      '4. Pile the beetroot salad onto plates and lay the hot mackerel alongside.\n' +
      '5. Finish with a final squeeze of lemon.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '4 fillets' },
      { rawName: 'Beetroot', rawMeasure: '300g, cooked' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Dill', rawMeasure: '1/2 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced fish curry with coconut',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Kosher', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the vegetable oil in a wide pan and soften the onion for 6–8 minutes.\n' +
      '2. Stir in the garlic, ginger, curry powder and turmeric and cook for a minute until fragrant.\n' +
      '3. Pour in the chopped tomatoes and coconut milk, season and simmer for 10 minutes until slightly thickened.\n' +
      '4. Lower in the chunks of white fish, cover and poach gently for 6–8 minutes until just cooked through.\n' +
      '5. Finish with a squeeze of lemon and plenty of chopped coriander, and serve with rice.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Curry powder', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sardines on toast with tomato',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Pescatarian', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Toast the bread until golden and rub the cut garlic clove over each slice.\n' +
      '2. Drizzle with a little olive oil and pile on the sliced tomato; season.\n' +
      '3. Lay the drained sardines over the top and break them open slightly.\n' +
      '4. Squeeze over lemon, scatter with chopped parsley and a grind of pepper, and serve at once.',
    rawLines: [
      { rawName: 'Sardines', rawMeasure: '1 tin (120g)' },
      { rawName: 'Bread', rawMeasure: '2 thick slices' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Herb-crusted baked cod',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Pescatarian', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the white fish fillets on a lined tray and season.\n' +
      '2. Mix the breadcrumbs with the chopped parsley, lemon zest, crushed garlic and olive oil until it clumps loosely.\n' +
      '3. Press the herby crumbs firmly over the top of each fillet.\n' +
      '4. Bake for 15–18 minutes until the crust is golden and the fish flakes easily.\n' +
      '5. Serve with lemon wedges and steamed greens.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4 (cod)' },
      { rawName: 'Breadcrumbs', rawMeasure: '80g' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ─────────────────────── DAIRY (milchig) — no meat ───────────────────────
  {
    title: 'Cheese blintzes',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Breakfast',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Vegetarian'],
    instructions:
      '1. Whisk the flour, eggs, milk and a pinch of salt into a smooth thin batter and rest for 20 minutes.\n' +
      '2. Lightly oil a small frying pan and cook thin pancakes one at a time, browning lightly on one side only. Stack them browned-side up.\n' +
      '3. Beat the cream cheese with the egg yolk, a little sugar and vanilla to make the filling.\n' +
      '4. Spoon filling onto the cooked side of each pancake, fold in the sides and roll into neat parcels.\n' +
      '5. Fry the blintzes in a little butter for 2–3 minutes each side until golden.\n' +
      '6. Serve warm, dusted with icing sugar.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '120g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Cream cheese', rawMeasure: '250g' },
      { rawName: 'Egg yolk', rawMeasure: '1' },
      { rawName: 'Caster sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Icing sugar', rawMeasure: 'to dust' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Potato and cheese latkes',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Vegetarian'],
    instructions:
      '1. Coarsely grate the potatoes and onion, then squeeze out as much liquid as you can in a clean cloth.\n' +
      '2. Tip into a bowl and mix with the beaten eggs, flour, grated cheese and plenty of seasoning.\n' +
      '3. Heat a shallow layer of vegetable oil in a frying pan over a medium-high heat.\n' +
      '4. Drop in spoonfuls of the mixture and flatten gently, frying for 3–4 minutes each side until deep golden and crisp.\n' +
      '5. Drain on kitchen paper and serve hot with soured cream.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Plain flour', rawMeasure: '3 tbsp' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Soured cream', rawMeasure: 'to serve' },
      { rawName: 'Vegetable oil', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spinach and feta filo pie',
    servingsBase: 6,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Kosher', 'Vegetarian', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Wilt the spinach in a dry pan, then squeeze out all the water and chop roughly.\n' +
      '2. Soften the chopped spring onions in a little olive oil, then mix with the spinach, crumbled feta, beaten eggs, dill and nutmeg. Season.\n' +
      '3. Brush a baking dish with olive oil and layer in half the filo sheets, brushing each with oil.\n' +
      '4. Spread over the filling, then top with the remaining filo, again brushing each sheet and scrunching the top layer.\n' +
      '5. Bake for 40–45 minutes until the pastry is crisp and golden. Cool a little before cutting.',
    rawLines: [
      { rawName: 'Spinach', rawMeasure: '500g' },
      { rawName: 'Feta', rawMeasure: '200g' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Dill', rawMeasure: '1/2 small bunch' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Filo pastry', rawMeasure: '270g (1 pack)' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Macaroni cheese',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cook the pasta in salted water until just al dente, then drain.\n' +
      '2. Melt the butter in a pan, stir in the flour and cook for a minute, then gradually whisk in the milk to make a smooth sauce.\n' +
      '3. Simmer for a few minutes until thickened, then stir in most of the grated Cheddar and the mustard. Season.\n' +
      '4. Fold the pasta through the sauce and tip into a baking dish.\n' +
      '5. Scatter over the remaining cheese and the breadcrumbs and bake for 20–25 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '350g macaroni' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '200g' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Breadcrumbs', rawMeasure: '40g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Shakshuka',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'Middle Eastern',
    dietLabels: ['Kosher', 'Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the olive oil in a large frying pan and soften the onion and sliced pepper for 8–10 minutes.\n' +
      '2. Stir in the garlic, cumin, paprika and a pinch of chilli flakes and cook for a minute.\n' +
      '3. Pour in the chopped tomatoes, season and simmer for 10 minutes until thick.\n' +
      '4. Make four wells in the sauce and crack an egg into each. Cover and cook gently for 5–7 minutes until the whites are set but the yolks still soft.\n' +
      '5. Scatter with chopped coriander and serve straight from the pan with bread to mop up.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine parmigiana',
    servingsBase: 4,
    totalTimeMinutes: 80,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Kosher', 'Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Slice the aubergines lengthways, brush with olive oil and griddle or roast until soft and golden.\n' +
      '2. For the sauce, soften the garlic in a little oil, add the passata and basil, season and simmer for 15 minutes.\n' +
      '3. Heat the oven to 190°C (fan 170°C). Layer aubergine, tomato sauce, torn mozzarella and grated Parmesan in a baking dish.\n' +
      '4. Repeat the layers, finishing with sauce and a generous topping of Parmesan.\n' +
      '5. Bake for 30–35 minutes until bubbling and golden. Rest for 10 minutes before serving.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '3' },
      { rawName: 'Passata', rawMeasure: '700g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Mozzarella', rawMeasure: '250g' },
      { rawName: 'Parmesan', rawMeasure: '60g' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cheese and onion potato bake',
    servingsBase: 4,
    totalTimeMinutes: 80,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Thinly slice the potatoes and onions.\n' +
      '2. Layer half the potatoes in a buttered dish, scatter with onion and some grated cheese and season.\n' +
      '3. Repeat with the remaining potatoes and onion, then pour over the milk.\n' +
      '4. Top with the rest of the cheese and dot with butter.\n' +
      '5. Cover with foil and bake for 45 minutes, then uncover and bake for a further 20–25 minutes until golden and tender.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi and roasted vegetable traybake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Kosher', 'Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Tip the chopped peppers, courgette, red onion and cherry tomatoes into a large roasting tin.\n' +
      '2. Toss with olive oil, the crushed garlic, oregano and seasoning, then roast for 20 minutes.\n' +
      '3. Slice the halloumi and nestle it among the vegetables.\n' +
      '4. Return to the oven for 12–15 minutes until the halloumi is golden and the vegetables tender.\n' +
      '5. Squeeze over lemon and scatter with basil to serve.',
    rawLines: [
      { rawName: 'Feta', rawMeasure: '250g halloumi' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Three-cheese vegetable lasagne',
    servingsBase: 6,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Kosher', 'Vegetarian', 'Mediterranean'],
    instructions:
      '1. Soften the onion, courgette and peppers in olive oil for 10 minutes, then stir in the garlic, passata and oregano. Season and simmer for 15 minutes.\n' +
      '2. For the white sauce, melt the butter, stir in the flour, then whisk in the milk and simmer until thickened. Stir in half the grated Cheddar.\n' +
      '3. Heat the oven to 190°C (fan 170°C). Layer the vegetable sauce, lasagne sheets, ricotta and white sauce in a dish, repeating to fill.\n' +
      '4. Finish with white sauce and the remaining Cheddar and Parmesan.\n' +
      '5. Bake for 40–45 minutes until golden and bubbling, then rest before serving.',
    rawLines: [
      { rawName: 'Lasagne sheets', rawMeasure: '12' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Passata', rawMeasure: '700g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Ricotta', rawMeasure: '250g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cheese and herb omelette',
    servingsBase: 1,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Vegetarian', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Beat the eggs with a little salt and pepper and the chopped chives.\n' +
      '2. Melt the butter in a small non-stick pan over a medium heat until foaming.\n' +
      '3. Pour in the eggs and, as they begin to set, draw the edges into the centre, tilting the pan to let the runny egg flow underneath.\n' +
      '4. When almost set, scatter the grated cheese over one half.\n' +
      '5. Fold the omelette over and slide onto a plate to serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Cheddar cheese', rawMeasure: '40g' },
      { rawName: 'Chives', rawMeasure: '1 tbsp' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Creamy mushroom pasta',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Kosher', 'Vegetarian'],
    instructions:
      '1. Cook the pasta in plenty of salted water until al dente, reserving a cupful of the cooking water before draining.\n' +
      '2. Meanwhile, melt the butter in a large pan and fry the sliced mushrooms over a high heat until golden.\n' +
      '3. Add the garlic for a minute, then pour in the double cream and bring to a gentle simmer. Season.\n' +
      '4. Toss the drained pasta through the sauce, loosening with a little reserved water, and stir in most of the Parmesan.\n' +
      '5. Finish with chopped parsley and the remaining Parmesan.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '350g' },
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Double cream', rawMeasure: '200ml' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked cheesecake',
    servingsBase: 10,
    totalTimeMinutes: 90,
    course: 'Dessert',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Crush the digestive biscuits and mix with the melted butter, then press into the base of a lined springform tin.\n' +
      '2. Beat the cream cheese with the sugar until smooth, then beat in the eggs one at a time.\n' +
      '3. Stir in the soured cream, lemon zest and vanilla until just combined.\n' +
      '4. Pour over the biscuit base and smooth the top.\n' +
      '5. Bake for about 50 minutes until set at the edges but with a slight wobble in the centre.\n' +
      '6. Turn off the oven and leave the cheesecake inside to cool slowly, then chill before serving.',
    rawLines: [
      { rawName: 'Digestive biscuits', rawMeasure: '250g' },
      { rawName: 'Butter', rawMeasure: '100g' },
      { rawName: 'Cream cheese', rawMeasure: '600g' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Soured cream', rawMeasure: '150ml' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
    ],
  },

  // ─────────────────────── PAREVE — vegetarian / vegan ───────────────────────
  {
    title: 'Classic hummus',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Middle Eastern',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Drain the chickpeas, reserving a little of the liquid, and tip them into a food processor.\n' +
      '2. Add the tahini, crushed garlic, lemon juice and a good pinch of salt.\n' +
      '3. Blend to a paste, then trickle in cold water (or the reserved liquid) and olive oil until smooth and light.\n' +
      '4. Taste and adjust with more lemon or salt.\n' +
      '5. Spread into a bowl, swirl with olive oil and dust with paprika to serve.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Tahini', rawMeasure: '4 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Paprika', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Falafel with tahini sauce',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Middle Eastern',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Blitz the soaked chickpeas with the onion, garlic, parsley, coriander, cumin and a good pinch of salt to a coarse mixture.\n' +
      '2. Stir in the flour and bicarbonate of soda, then chill for 30 minutes.\n' +
      '3. Shape into small patties. Heat a shallow layer of vegetable oil and fry in batches for 3 minutes each side until deep golden and crisp.\n' +
      '4. Loosen the tahini with lemon juice, a little water and salt to make a pourable sauce.\n' +
      '5. Serve the falafel hot with the tahini sauce and warm flatbreads.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '250g dried, soaked overnight' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1/2 tsp' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Vegetable oil', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted vegetable couscous salad',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the chopped courgette, peppers and red onion with olive oil and seasoning, then roast for 25 minutes until tender and a little charred.\n' +
      '2. Meanwhile put the couscous in a bowl, pour over an equal volume of boiling stock, cover and leave for 10 minutes, then fluff with a fork.\n' +
      '3. Fold the roasted vegetables through the couscous.\n' +
      '4. Stir in the chopped parsley and mint, the lemon juice and a final drizzle of olive oil.\n' +
      '5. Season to taste and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Couscous', rawMeasure: '250g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Mint', rawMeasure: '1/2 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 250ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea and spinach curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the vegetable oil in a large pan and soften the onion for 6–8 minutes.\n' +
      '2. Stir in the garlic, ginger, curry powder, cumin and turmeric and cook for a minute until fragrant.\n' +
      '3. Add the chopped tomatoes and chickpeas, season and simmer for 12–15 minutes until thickened.\n' +
      '4. Stir in the spinach a handful at a time until wilted.\n' +
      '5. Finish with a squeeze of lemon and chopped coriander, and serve with rice.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Curry powder', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed peppers with rice and herbs',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers and remove the seeds, then sit them cut-side up in a baking dish.\n' +
      '2. Soften the onion in olive oil, stir in the garlic, then the rice, chopped tomatoes, parsley and mint. Season and cook for a couple of minutes.\n' +
      '3. Spoon the rice mixture into the pepper halves and pour a little water into the base of the dish.\n' +
      '4. Cover with foil and bake for 35 minutes, then uncover and bake for a further 20 minutes until the peppers are soft and the rice tender.\n' +
      '5. Drizzle with olive oil and scatter with extra herbs to serve.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4 large' },
      { rawName: 'Rice', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Mint', rawMeasure: '1/2 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lentil and vegetable soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the olive oil in a large pot and soften the onion, carrots and celery for 8–10 minutes.\n' +
      '2. Stir in the garlic and cumin and cook for a minute.\n' +
      '3. Add the red lentils, chopped tomatoes and stock, season and bring to a simmer.\n' +
      '4. Cook gently for 25–30 minutes until the lentils are soft and the soup thick.\n' +
      '5. Blend partly for a smoother texture if you like, then check the seasoning and finish with chopped parsley.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g red' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1L' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tabbouleh',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'Middle Eastern',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean', 'Low-calorie'],
    instructions:
      '1. Soak the bulgur wheat in boiling water for 15 minutes until tender, then drain well and squeeze out any excess.\n' +
      '2. Finely chop the parsley and mint and put in a large bowl.\n' +
      '3. Add the diced tomatoes, finely sliced spring onions and the drained bulgur.\n' +
      '4. Dress with the lemon juice, olive oil and plenty of seasoning.\n' +
      '5. Toss well and leave for 10 minutes for the flavours to develop before serving.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '80g' },
      { rawName: 'Parsley', rawMeasure: '2 large bunches' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baba ganoush',
    servingsBase: 6,
    totalTimeMinutes: 50,
    course: 'Snack',
    cuisine: 'Middle Eastern',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Mediterranean', 'Low-calorie'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Prick the aubergines and roast for about 40 minutes until completely collapsed and the skins are charred.\n' +
      '2. Cool a little, then scoop out the soft flesh and discard the skins. Let it drain in a sieve for a few minutes.\n' +
      '3. Mash or briefly blend the flesh with the tahini, crushed garlic and lemon juice.\n' +
      '4. Season to taste and stir in most of the chopped parsley.\n' +
      '5. Spread into a bowl, drizzle with olive oil and finish with the remaining parsley.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '1/2 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and barley risotto',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the olive oil in a wide pan and fry the sliced mushrooms over a high heat until golden, then set half aside.\n' +
      '2. Soften the onion for 6–8 minutes, then stir in the garlic and thyme.\n' +
      '3. Add the pearl barley and stir to coat, then add the hot stock a ladleful at a time, stirring, until each is absorbed.\n' +
      '4. Continue for about 35 minutes until the barley is tender and creamy; season well.\n' +
      '5. Top with the reserved mushrooms and chopped parsley to serve.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '250g pearl barley' },
      { rawName: 'Mushroom', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1.2L' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Israeli chopped salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Middle Eastern',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Mediterranean', 'Low-calorie'],
    instructions:
      '1. Finely dice the cucumber, tomatoes and red onion into small even pieces and put in a bowl.\n' +
      '2. Add the finely sliced pepper and chopped parsley.\n' +
      '3. Dress with the lemon juice, olive oil and plenty of salt and pepper.\n' +
      '4. Toss well and serve straight away while crisp and fresh.',
    rawLines: [
      { rawName: 'Cucumber', rawMeasure: '1' },
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Potato and onion latkes (pareve)',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Coarsely grate the potatoes and onion, then squeeze out as much liquid as possible in a clean cloth.\n' +
      '2. Mix with the beaten eggs, flour and plenty of seasoning.\n' +
      '3. Heat a shallow layer of vegetable oil in a frying pan over a medium-high heat.\n' +
      '4. Drop in spoonfuls and flatten, frying for 3–4 minutes each side until deep golden and crisp.\n' +
      '5. Drain on kitchen paper and serve hot with apple sauce.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '700g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Plain flour', rawMeasure: '3 tbsp' },
      { rawName: 'Apple', rawMeasure: '2, for sauce' },
      { rawName: 'Vegetable oil', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted aubergine with tahini and pomegranate',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'Middle Eastern',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Halve the aubergines lengthways and score the cut sides in a criss-cross.\n' +
      '2. Brush generously with olive oil, season and roast cut-side up for 35–40 minutes until deeply soft and golden.\n' +
      '3. Loosen the tahini with lemon juice, crushed garlic, a little water and salt to a drizzling consistency.\n' +
      '4. Arrange the aubergines on a platter and spoon over the tahini sauce.\n' +
      '5. Scatter with pomegranate seeds and chopped parsley to serve.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Pomegranate', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '1/2 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable and bean cholent',
    servingsBase: 6,
    totalTimeMinutes: 300,
    course: 'Dinner',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 130°C (fan 110°C). Heat the olive oil in a large casserole and soften the onions for 10 minutes.\n' +
      '2. Stir in the garlic, paprika and cumin, then add the drained beans, chunks of potato, carrots and barley.\n' +
      '3. Pour in the stock so everything is just covered, season and bring to a simmer on the hob.\n' +
      '4. Cover tightly and cook in the low oven for about 4 hours 30 minutes until everything is meltingly tender and the liquid rich.\n' +
      '5. Check the seasoning and serve in deep bowls — this traditional slow-cooked stew is made for a long, gentle bake.',
    rawLines: [
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Buckwheat', rawMeasure: '80g (or barley)' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1.2L' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Honey-roasted carrots with cumin',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the carrots into batons and tip into a roasting tin.\n' +
      '2. Toss with the olive oil, honey, cumin and a good pinch of salt.\n' +
      '3. Roast for 30–35 minutes, turning once, until tender and caramelised at the edges.\n' +
      '4. Scatter with chopped parsley and serve.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '600g' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sweet potato and chickpea traybake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Tip the chunks of sweet potato, drained chickpeas and red onion wedges into a large roasting tin.\n' +
      '2. Toss with olive oil, the crushed garlic, cumin, paprika and seasoning.\n' +
      '3. Roast for 30–35 minutes, turning once, until the sweet potato is tender and the chickpeas crisp.\n' +
      '4. Squeeze over lemon and scatter with chopped coriander to serve.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '600g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Matzo brei',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Break the matzo crackers into rough pieces and soak briefly in warm water until just softened, then drain well.\n' +
      '2. Beat the eggs with a little salt and pepper, then stir in the softened matzo.\n' +
      '3. Heat the vegetable oil in a frying pan over a medium heat.\n' +
      '4. Pour in the mixture and cook, stirring gently, until the eggs are set and lightly golden.\n' +
      '5. Serve at once — sweet with a little sugar, or savoury with extra pepper.',
    rawLines: [
      { rawName: 'Bread', rawMeasure: '4 sheets matzo' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Butternut squash and lentil stew',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the onion for 6–8 minutes.\n' +
      '2. Stir in the garlic, cumin and coriander, then add the cubed butternut squash.\n' +
      '3. Add the lentils, chopped tomatoes and stock, season and bring to a simmer.\n' +
      '4. Cook gently for 30 minutes until the squash is tender and the lentils soft.\n' +
      '5. Finish with a squeeze of lemon and chopped coriander, and serve with rice or bread.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '1 (about 800g)' },
      { rawName: 'Lentils', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Charoset',
    servingsBase: 8,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Peel, core and finely chop the apples and put in a bowl.\n' +
      '2. Roughly chop the walnuts and add them in.\n' +
      '3. Stir in the honey, cinnamon and a splash of sweet red wine.\n' +
      '4. Mix well and leave to stand for 10 minutes so the flavours mingle.\n' +
      '5. Serve this traditional Passover relish at room temperature.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '3' },
      { rawName: 'Walnuts', rawMeasure: '100g' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Red wine', rawMeasure: '2 tbsp sweet' },
    ],
  },
  {
    title: 'Honey cake',
    servingsBase: 10,
    totalTimeMinutes: 75,
    course: 'Dessert',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C) and line a loaf tin.\n' +
      '2. Warm the honey with the vegetable oil and brown sugar until smooth, then cool a little.\n' +
      '3. Whisk in the eggs, then the cooled tea.\n' +
      '4. Sift in the flour, baking powder, bicarbonate of soda and the mixed spice and cinnamon, and fold to a smooth batter.\n' +
      '5. Pour into the tin and bake for 50–55 minutes until risen and a skewer comes out clean.\n' +
      '6. Cool in the tin before turning out — the cake keeps and improves over a day or two.',
    rawLines: [
      { rawName: 'Honey', rawMeasure: '250g' },
      { rawName: 'Vegetable oil', rawMeasure: '120ml' },
      { rawName: 'Brown sugar', rawMeasure: '100g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Plain flour', rawMeasure: '280g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1 tsp' },
      { rawName: 'Mixed spice', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Water', rawMeasure: '120ml cold tea' },
    ],
  },
  {
    title: 'Apple and cinnamon kugel',
    servingsBase: 8,
    totalTimeMinutes: 75,
    course: 'Dessert',
    cuisine: 'Jewish',
    dietLabels: ['Kosher', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Cook the wide noodles in boiling water until just tender, then drain.\n' +
      '2. Beat the eggs with the sugar, vegetable oil, cinnamon and a pinch of salt.\n' +
      '3. Peel and grate the apples and fold them through with the sultanas and drained noodles.\n' +
      '4. Tip into an oiled baking dish and level the top.\n' +
      '5. Bake for 50–55 minutes until set and golden on top. Serve warm or at room temperature, cut into squares.',
    rawLines: [
      { rawName: 'Noodles', rawMeasure: '250g wide egg noodles' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Caster sugar', rawMeasure: '80g' },
      { rawName: 'Apple', rawMeasure: '3' },
      { rawName: 'Sultanas', rawMeasure: '60g' },
      { rawName: 'Vegetable oil', rawMeasure: '60ml' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Roasted beetroot and orange salad',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Mediterranean', 'Low-calorie'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Wrap the beetroot in foil and roast for about 40 minutes until tender, then cool, peel and cut into wedges.\n' +
      '2. Peel the oranges and slice into rounds, catching any juice.\n' +
      '3. Whisk the caught juice with the olive oil, a little lemon and seasoning.\n' +
      '4. Arrange the beetroot and orange on a platter and scatter with the rocket.\n' +
      '5. Drizzle with the dressing and finish with chopped walnuts.',
    rawLines: [
      { rawName: 'Beetroot', rawMeasure: '500g raw' },
      { rawName: 'Orange', rawMeasure: '2' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Walnuts', rawMeasure: '40g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable fried rice',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Kosher', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Heat the vegetable oil in a large wok or frying pan over a high heat.\n' +
      '2. Add the chopped onion, peas, sweetcorn and diced carrot and stir-fry for 3–4 minutes.\n' +
      '3. Push the vegetables to one side, pour in the beaten eggs and scramble, then mix through.\n' +
      '4. Tip in the cooked, cooled rice and stir-fry for 4–5 minutes until piping hot.\n' +
      '5. Splash in the soy sauce, scatter with sliced spring onions and toss well before serving.',
    rawLines: [
      { rawName: 'Rice', rawMeasure: '500g, cooked and cooled' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Sweetcorn', rawMeasure: '100g' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Spiced rice with peas and almonds',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Side',
    cuisine: 'Indian',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Rinse the basmati rice until the water runs clear, then drain.\n' +
      '2. Heat the vegetable oil in a pan and gently fry the cumin seeds, cardamom and cinnamon for a minute.\n' +
      '3. Stir in the rice to coat, then pour in the measured water and a good pinch of salt.\n' +
      '4. Bring to the boil, scatter in the peas, then cover and cook on the lowest heat for 10 minutes.\n' +
      '5. Rest off the heat for 5 minutes, then fork through and scatter with toasted flaked almonds.',
    rawLines: [
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Almonds', rawMeasure: '40g, flaked' },
      { rawName: 'Cumin', rawMeasure: '1 tsp seeds' },
      { rawName: 'Cardamom', rawMeasure: '3 pods' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
      { rawName: 'Water', rawMeasure: '600ml' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Minestrone soup',
    servingsBase: 6,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Heat the olive oil in a large pot and soften the onion, carrots and celery for 8–10 minutes.\n' +
      '2. Stir in the garlic, then add the chopped tomatoes, drained beans and stock.\n' +
      '3. Bring to a simmer and cook for 15 minutes.\n' +
      '4. Add the small pasta and cook for a further 10 minutes until tender.\n' +
      '5. Stir through the chopped parsley, season well and serve.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Pasta', rawMeasure: '100g small shapes' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1.2L' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable shakshuka with chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Kosher', 'Vegetarian', 'Gluten-free', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Heat the olive oil in a large frying pan and soften the onion and sliced pepper for 8 minutes.\n' +
      '2. Stir in the garlic, cumin and paprika, then add the chopped tomatoes and drained chickpeas. Season and simmer for 12 minutes.\n' +
      '3. Make wells in the sauce and crack in the eggs.\n' +
      '4. Cover and cook gently for 5–7 minutes until the whites are set.\n' +
      '5. Scatter with coriander and serve with bread.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Carrot and ginger soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-calorie'],
    instructions:
      '1. Heat the olive oil in a large pot and soften the onion for 6–8 minutes.\n' +
      '2. Stir in the garlic and grated ginger, then add the chopped carrots.\n' +
      '3. Pour in the stock, season and bring to a simmer.\n' +
      '4. Cook for 20–25 minutes until the carrots are very soft.\n' +
      '5. Blend until smooth, adjust the seasoning and serve with a swirl of olive oil.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '700g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and spinach frittata',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Kosher', 'Vegetarian', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Fry the sliced mushrooms in olive oil in an ovenproof pan until golden.\n' +
      '2. Add the spinach and wilt, then spread the vegetables evenly in the pan.\n' +
      '3. Beat the eggs with plenty of seasoning and stir in most of the grated cheese.\n' +
      '4. Pour the eggs over the vegetables and cook on the hob for 2–3 minutes until the edges set.\n' +
      '5. Scatter over the remaining cheese and bake for 12–15 minutes until just set and golden. Cut into wedges to serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Mushroom', rawMeasure: '200g' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Cheddar cheese', rawMeasure: '60g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Greek',
    dietLabels: ['Kosher', 'Vegetarian', 'Gluten-free', 'Mediterranean', 'Low-carb'],
    instructions:
      '1. Cut the tomatoes into wedges and the cucumber into thick half-moons and put in a large bowl.\n' +
      '2. Add the sliced red onion, the pepper and the olives.\n' +
      '3. Drizzle with the olive oil and a little red wine, then season with oregano, salt and pepper.\n' +
      '4. Toss gently, then top with a thick slab of feta.\n' +
      '5. Finish with a little more oregano and serve at once.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 green' },
      { rawName: 'Olives', rawMeasure: '80g' },
      { rawName: 'Feta', rawMeasure: '200g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Red wine', rawMeasure: '1 tsp vinegar' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan lentil shepherd-style pie',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the onion, carrots and celery for 8–10 minutes.\n' +
      '2. Stir in the garlic and tomato purée, then add the lentils, chopped tomatoes and stock. Season and simmer for 25 minutes until thick.\n' +
      '3. Meanwhile boil the potatoes until tender, drain and mash with a splash of the cooking water and a little olive oil; season.\n' +
      '4. Heat the oven to 200°C (fan 180°C). Tip the lentil mixture into a baking dish and spoon over the mash, roughing up the top.\n' +
      '5. Bake for 25–30 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g (or 2 tins)' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed vine leaves',
    servingsBase: 6,
    totalTimeMinutes: 90,
    course: 'Snack',
    cuisine: 'Middle Eastern',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Rinse the vine leaves and pat dry. Soften the finely chopped onion in olive oil, then stir in the rice, chopped herbs, lemon zest and seasoning.\n' +
      '2. Lay a vine leaf shiny-side down, place a little filling near the stem end, fold in the sides and roll up tightly.\n' +
      '3. Pack the rolls snugly seam-side down in a wide pan.\n' +
      '4. Pour over enough water mixed with lemon juice and olive oil to just cover, weight down with a plate, and simmer gently for 45 minutes.\n' +
      '5. Cool in the pan, then serve at room temperature with extra lemon.',
    rawLines: [
      { rawName: 'Vine leaves', rawMeasure: '250g (1 jar)' },
      { rawName: 'Rice', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Mint', rawMeasure: '1/2 small bunch' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted tomato and red pepper soup',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-calorie', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Tip the halved tomatoes, quartered peppers, onion wedges and garlic into a roasting tin.\n' +
      '2. Drizzle with olive oil, season and roast for 30 minutes until soft and a little charred.\n' +
      '3. Tip everything into a pot, squeezing the garlic from its skins, and add the stock.\n' +
      '4. Bring to a simmer for 5 minutes, then blend until smooth.\n' +
      '5. Adjust the seasoning, add a little basil and serve.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '800g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2 red' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Couscous-stuffed roasted aubergine',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the aubergines, score the flesh, brush with olive oil and roast cut-side up for 30 minutes until soft.\n' +
      '2. Soak the couscous in an equal volume of boiling stock for 10 minutes, then fluff.\n' +
      '3. Stir the drained chickpeas, chopped tomato, herbs and lemon juice through the couscous; season.\n' +
      '4. Scoop a little flesh from the aubergines, chop and fold into the couscous, then pile the mixture back into the shells.\n' +
      '5. Return to the oven for 10 minutes and finish with a drizzle of olive oil and extra herbs.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Couscous', rawMeasure: '150g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Mint', rawMeasure: '1/2 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Date and walnut flapjacks',
    servingsBase: 12,
    totalTimeMinutes: 45,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a square tin.\n' +
      '2. Gently warm the vegetable oil, honey and brown sugar until smooth.\n' +
      '3. Stir in the oats, chopped dates and walnuts until everything is well coated.\n' +
      '4. Press firmly into the tin and level the top.\n' +
      '5. Bake for 25 minutes until golden at the edges, then cool in the tin before cutting into bars.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '300g' },
      { rawName: 'Dates', rawMeasure: '100g, chopped' },
      { rawName: 'Walnuts', rawMeasure: '60g' },
      { rawName: 'Vegetable oil', rawMeasure: '100ml' },
      { rawName: 'Honey', rawMeasure: '3 tbsp' },
      { rawName: 'Brown sugar', rawMeasure: '80g' },
    ],
  },
  {
    title: 'Pea and mint soup',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-calorie'],
    instructions:
      '1. Heat the olive oil in a pot and soften the onion for 5–6 minutes.\n' +
      '2. Add the garlic for a minute, then pour in the stock and bring to the boil.\n' +
      '3. Tip in the peas and simmer for just 4–5 minutes so they keep their colour.\n' +
      '4. Add most of the mint and blend until smooth.\n' +
      '5. Season well and serve with the remaining mint torn over the top.',
    rawLines: [
      { rawName: 'Peas', rawMeasure: '600g frozen' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Caponata',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Kosher', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the olive oil in a large pan and fry the cubed aubergine in batches until golden, then set aside.\n' +
      '2. Soften the onion and celery in the same pan for 8 minutes, then stir in the garlic.\n' +
      '3. Add the chopped tomatoes, capers, olives, a little sugar and red wine, and simmer for 15 minutes.\n' +
      '4. Return the aubergine and cook for a further 10 minutes until thick and glossy.\n' +
      '5. Season, stir through chopped parsley and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Capers', rawMeasure: '2 tbsp' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Granulated sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Red wine', rawMeasure: '1 tbsp vinegar' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
]

export default recipes
