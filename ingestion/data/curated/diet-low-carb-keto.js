// Curated LOW-CARB / KETO recipes for Larder.
//
// Per-diet curated floor for the "Low-carb / Keto" filter (catalogue-10k design
// §2/§3). Each record is culinary content ONLY — sources/curated.js (mapCurated)
// adds the source/sourceId/imageUrl boilerplate and a generated SVG placeholder.
//
// Shape per record (same as data/curated/mains.js):
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     healthLabels?, instructions, rawLines:[{rawName, rawMeasure}] }
//
// HARD KETO RULE — every recipe here STRICTLY EXCLUDES: sugar, flour, bread,
// pasta, rice, potatoes and most fruit (only very-low-net-carb items such as
// lemon/lime zest-and-juice, avocado, olives, tomatoes in modest amounts, and
// berries are permitted). Starch-replacing swaps used throughout: cauliflower
// "rice"/mash, courgetti, almond flour, double cream, cheese.
//
// Labels are tagged HONESTLY. Every recipe carries 'Keto' + 'Low-carb'. Extra
// dietLabels/healthLabels are added only where the ingredient list genuinely
// supports them (e.g. a meat-free dish is 'Vegetarian'; a dish with no
// wheat/barley/rye is 'Gluten-free'; a dish with no dairy is 'Dairy-free').
// Method prose is original British English; no website wording is copied.

export default [
  // ── Poultry ────────────────────────────────────────────────────────────────
  {
    title: 'Keto garlic butter chicken thighs',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Pat the chicken thighs dry and season the skin well with salt and pepper.\n' +
      '2. Heat the olive oil in an ovenproof frying pan over a medium-high heat and lay the thighs in skin-side down. Cook undisturbed for 6–7 minutes until the skin is deep gold and crisp, then turn.\n' +
      '3. Drop in the butter, garlic and thyme. As the butter foams, spoon it over the thighs for a minute.\n' +
      '4. Transfer the pan to the oven and roast for 18–20 minutes until cooked through and the juices run clear.\n' +
      '5. Rest for 5 minutes, then spoon over the garlicky butter from the pan. Serve with buttered greens.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Garlic', rawMeasure: '4 cloves, crushed' },
      { rawName: 'Thyme', rawMeasure: '4 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Creamy Tuscan chicken',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Season the chicken breasts and brown them in the olive oil over a medium-high heat, about 4 minutes each side, then lift out.\n' +
      '2. Lower the heat, add the garlic and sun-dried tomatoes and cook for a minute until fragrant.\n' +
      '3. Pour in the double cream, scatter in the Parmesan and stir until you have a glossy sauce. Wilt in the spinach.\n' +
      '4. Slide the chicken back in with any resting juices and simmer gently for 8–10 minutes until cooked through and the sauce has thickened.\n' +
      '5. Season and serve with cauliflower rice or wilted greens.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4' },
      { rawName: 'Double cream', rawMeasure: '250ml' },
      { rawName: 'Parmesan', rawMeasure: '40g, grated' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Sun-dried tomatoes', rawMeasure: '60g, sliced' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, crushed' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken, bacon and avocado salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Fry the bacon in a dry pan until crisp, then drain on kitchen paper and snap into shards.\n' +
      '2. Season the chicken breasts and pan-fry in the olive oil for 5–6 minutes each side until cooked through. Rest, then slice.\n' +
      '3. Pile the lettuce into bowls and add the halved cherry tomatoes, sliced avocado and spring onion.\n' +
      '4. Top with the warm chicken and bacon. Whisk the remaining olive oil with the lemon juice and mustard, season and drizzle over.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Bacon', rawMeasure: '4 rashers' },
      { rawName: 'Avocado', rawMeasure: '1, sliced' },
      { rawName: 'Lettuce', rawMeasure: '1 head, leaves torn' },
      { rawName: 'Cherry tomato', rawMeasure: '8, halved' },
      { rawName: 'Spring onion', rawMeasure: '2, sliced' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Dijon mustard', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemon and thyme roast chicken',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the chicken in a roasting tin and rub all over with the olive oil, salt and pepper.\n' +
      '2. Halve the lemon and push it into the cavity with the garlic and half the thyme.\n' +
      '3. Scatter the remaining thyme over the bird and roast for 1 hour 20 minutes, basting once or twice, until the juices run clear.\n' +
      '4. Rest the chicken for 15 minutes under loose foil. Spoon over the lemony pan juices to serve, with roast non-starchy veg alongside.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1 (about 1.6kg)' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 bulb, halved' },
      { rawName: 'Thyme', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken tikka skewers with mint yoghurt',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Mix the natural yoghurt with the garam masala, turmeric, cumin, garlic, ginger and a good pinch of salt.\n' +
      '2. Cut the chicken into chunks, fold through the spiced yoghurt and leave to marinate for at least 20 minutes.\n' +
      '3. Thread onto skewers and grill or griddle for 12–15 minutes, turning, until charred at the edges and cooked through.\n' +
      '4. Stir the mint through the remaining yoghurt with a squeeze of lemon. Serve the skewers with the mint yoghurt and a crisp salad.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g' },
      { rawName: 'Natural yoghurt', rawMeasure: '250g' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, crushed' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Buffalo chicken wings',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Snack',
    cuisine: 'American',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Pat the wings dry, toss with the olive oil, salt and pepper and spread on a lined tray.\n' +
      '2. Roast for 35–40 minutes, turning halfway, until deep gold and crisp.\n' +
      '3. Gently melt the butter with the chilli sauce and a splash of vinegar to make a glossy hot sauce.\n' +
      '4. Tip the hot wings into a bowl, pour over the sauce and toss to coat. Serve with celery sticks and a soured-cream dip.',
    rawLines: [
      { rawName: 'Chicken wing', rawMeasure: '1kg' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Chilli sauce', rawMeasure: '4 tbsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tsp' },
      { rawName: 'Celery', rawMeasure: '3 sticks, to serve' },
      { rawName: 'Soured cream', rawMeasure: '4 tbsp, to serve' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and chorizo traybake',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Tip the chicken thighs, chorizo, peppers and red onion into a large roasting tin.\n' +
      '2. Add the garlic, smoked paprika and olive oil, season and toss everything together.\n' +
      '3. Roast for 40–45 minutes, turning once, until the chicken is golden and cooked through and the chorizo has released its oil.\n' +
      '4. Scatter with parsley and serve straight from the tin.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Chorizo', rawMeasure: '150g, sliced' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2, cut into chunks' },
      { rawName: 'Red onion', rawMeasure: '1, cut into wedges' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Coronation chicken (no sultanas)',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Stir the mayonnaise with the natural yoghurt, curry powder and a squeeze of lemon to make a smooth, gently spiced dressing.\n' +
      '2. Fold in the cooked, shredded chicken until well coated. Season to taste.\n' +
      '3. Scatter over the toasted flaked almonds and coriander.\n' +
      '4. Serve over crisp lettuce leaves rather than rice or bread.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '400g, cooked and shredded' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp' },
      { rawName: 'Natural yoghurt', rawMeasure: '3 tbsp' },
      { rawName: 'Curry powder', rawMeasure: '2 tsp' },
      { rawName: 'Almonds', rawMeasure: '20g, flaked and toasted' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Coriander', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Lettuce', rawMeasure: '1 head, to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey and courgette meatballs',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Squeeze the grated courgette in a clean cloth to remove the water, then mix with the turkey mince, egg, garlic, oregano and seasoning.\n' +
      '2. Roll into walnut-sized balls. Brown all over in the olive oil, then lift out.\n' +
      '3. Add the passata to the pan with a splash of water, season and simmer for 5 minutes.\n' +
      '4. Return the meatballs and simmer gently for 15 minutes until cooked through. Scatter with basil and serve over courgetti.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Courgette', rawMeasure: '1, grated' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Passata', rawMeasure: '300g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Basil', rawMeasure: '1 small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Duck breast with buttered greens',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Score the duck skin in a criss-cross, season well and lay skin-side down in a cold, dry frying pan. Bring up to a medium heat.\n' +
      '2. Render gently for 8–10 minutes until the skin is crisp and most of the fat has run off, then turn and cook for 4–5 minutes for pink.\n' +
      '3. Rest the duck on a board while you wilt the greens in the butter with a little of the duck fat and the garlic.\n' +
      '4. Slice the duck and serve over the buttered greens with the pan juices spooned over.',
    rawLines: [
      { rawName: 'Duck', rawMeasure: '2 breasts' },
      { rawName: 'Cabbage', rawMeasure: '1/4, shredded' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Garlic', rawMeasure: '1 clove, sliced' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Beef, lamb & pork ────────────────────────────────────────────────────────
  {
    title: 'Steak with garlic herb butter',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Take the steaks out of the fridge 20 minutes ahead. Pat dry and season generously with salt and pepper.\n' +
      '2. Heat a heavy pan until very hot, add a little olive oil and sear the steaks for 2–3 minutes each side for medium-rare.\n' +
      '3. Add the butter, garlic and thyme and baste the steaks as the butter foams for a minute.\n' +
      '4. Rest the steaks for 5 minutes, then spoon over the garlicky herb butter. Serve with a green salad.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '2 (about 250g each)' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Keto beef and broccoli stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Slice the beef thinly against the grain and toss with the soy sauce and grated ginger.\n' +
      '2. Heat the sesame oil in a wok over a high heat and stir-fry the beef in batches until just browned. Lift out.\n' +
      '3. Add the broccoli and a splash of water, cover and steam-fry for 3–4 minutes until bright and just tender.\n' +
      '4. Return the beef with the garlic and chilli flakes, toss for a minute, then serve over cauliflower rice.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '500g' },
      { rawName: 'Broccoli', rawMeasure: '1 head, in florets' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, sliced' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Bunless bacon cheeseburgers',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Mix the minced beef with the mustard, salt and pepper and shape into four patties.\n' +
      '2. Fry the bacon until crisp, then set aside. In the same pan, cook the burgers for 4 minutes each side.\n' +
      '3. Lay a slice of Cheddar over each patty in the last minute so it melts.\n' +
      '4. Serve each burger wrapped in crisp lettuce leaves, topped with bacon, tomato and red onion.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '600g' },
      { rawName: 'Bacon', rawMeasure: '8 rashers' },
      { rawName: 'Cheddar cheese', rawMeasure: '4 slices' },
      { rawName: 'Lettuce', rawMeasure: '1 head, large leaves' },
      { rawName: 'Tomato', rawMeasure: '2, sliced' },
      { rawName: 'Red onion', rawMeasure: '1/2, sliced' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Keto cottage pie with cauliflower mash',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Brown the minced beef in a large pan over a high heat, then lift out, leaving the fat behind.\n' +
      '2. Soften the onion, carrot and celery for 8 minutes, stir in the tomato purée and cook for a minute.\n' +
      '3. Return the beef, add the stock and Worcestershire sauce, season and simmer for 25 minutes until rich.\n' +
      '4. Meanwhile steam the cauliflower until very soft, drain thoroughly, then mash with the butter and most of the Cheddar; season.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Spoon the beef into a dish, top with the cauliflower mash, scatter the rest of the cheese and bake for 20–25 minutes until golden.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Cauliflower', rawMeasure: '1 large head' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1, diced small' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Cheddar cheese', rawMeasure: '60g, grated' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 250ml' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Slow-braised beef shin',
    servingsBase: 4,
    totalTimeMinutes: 200,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C). Season the beef shin and brown all over in the olive oil in a casserole, then lift out.\n' +
      '2. Soften the onion, carrot and celery for 10 minutes, stir in the tomato purée and cook for a minute.\n' +
      '3. Pour in the red wine and let it bubble for 2 minutes, then add the stock, bay and thyme.\n' +
      '4. Return the beef, cover and braise in the oven for 3 hours until meltingly tender.\n' +
      '5. Skim the sauce, check the seasoning and serve with cauliflower mash.',
    rawLines: [
      { rawName: 'Beef shin', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Red wine', rawMeasure: '250ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb chops with rosemary and garlic',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Season the lamb chops well and rub with a little of the olive oil.\n' +
      '2. Heat a heavy pan until hot and sear the chops for 3–4 minutes each side, plus a minute on the fatty edge to crisp it.\n' +
      '3. Lower the heat, add the butter, garlic and rosemary and baste the chops for a minute.\n' +
      '4. Rest for 5 minutes, then serve with the garlic-rosemary butter spooned over and buttered greens.',
    rawLines: [
      { rawName: 'Lamb chop', rawMeasure: '4' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek lamb kofta with tzatziki',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Mix the minced lamb with the garlic, cumin, oregano, half the mint and plenty of seasoning. Shape around skewers into sausage shapes.\n' +
      '2. Grill or griddle for 10–12 minutes, turning, until charred and cooked through.\n' +
      '3. For the tzatziki, grate the cucumber, squeeze out the water and stir into the natural yoghurt with the remaining mint, garlic and a little lemon.\n' +
      '4. Serve the kofta with the tzatziki and a chopped salad of tomato and red onion.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, crushed' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Slow-roast lamb shoulder',
    servingsBase: 6,
    totalTimeMinutes: 270,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Sit the lamb shoulder in a roasting tin, rub with olive oil, salt and pepper and scatter over the rosemary and garlic.\n' +
      '2. Pour a splash of water into the tin, cover tightly with foil and roast for 4 hours.\n' +
      '3. Remove the foil, turn the oven up to 200°C (fan 180°C) and roast for a final 20–30 minutes to brown.\n' +
      '4. Rest, then pull the meat apart with two forks. Serve with the pan juices and non-starchy veg.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '1.8kg' },
      { rawName: 'Garlic', rawMeasure: '1 bulb, halved' },
      { rawName: 'Rosemary', rawMeasure: '4 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork chops with creamy mustard sauce',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Season the pork chops and brown in the olive oil over a medium-high heat, about 4 minutes each side. Lift out and rest.\n' +
      '2. Lower the heat, add the garlic and cook for a moment, then pour in the double cream and stir in the mustard.\n' +
      '3. Simmer for 2–3 minutes until the sauce coats the back of a spoon, then stir through the tarragon.\n' +
      '4. Return the chops with any juices, warm through and serve with buttered greens.',
    rawLines: [
      { rawName: 'Pork chop', rawMeasure: '2' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Wholegrain mustard', rawMeasure: '2 tsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Tarragon', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Slow-roast pork belly with crackling',
    servingsBase: 4,
    totalTimeMinutes: 210,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Pat the pork belly skin very dry, score it and rub all over with salt and a little olive oil. Chill, uncovered, for an hour if you have time.\n' +
      '2. Heat the oven to 160°C (fan 140°C). Sit the belly on the fennel and onion in a roasting tin and roast for 3 hours.\n' +
      '3. Turn the oven up to 220°C (fan 200°C) and roast for a final 25–30 minutes until the crackling blisters and crisps.\n' +
      '4. Rest for 15 minutes, then carve. Serve with the soft fennel and the pan juices.',
    rawLines: [
      { rawName: 'Pork belly', rawMeasure: '1.2kg' },
      { rawName: 'Fennel', rawMeasure: '1 bulb, sliced' },
      { rawName: 'Onion', rawMeasure: '1, sliced' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 tbsp flaky' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sausage and cabbage one-pan',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Brown the sausages in the olive oil in a large pan until coloured all over, then lift out.\n' +
      '2. Add the onion and soften for 5 minutes, then stir in the shredded cabbage and garlic.\n' +
      '3. Pour in a splash of stock, cover and steam for 8 minutes until the cabbage is tender.\n' +
      '4. Slice the sausages, return to the pan with the wholegrain mustard, season and toss through to serve.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '8' },
      { rawName: 'Cabbage', rawMeasure: '1/2, shredded' },
      { rawName: 'Onion', rawMeasure: '1, sliced' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, sliced' },
      { rawName: 'Wholegrain mustard', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bacon-wrapped meatloaf',
    servingsBase: 6,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Mix the minced beef and pork with the egg, grated onion, garlic, oregano, Parmesan and seasoning.\n' +
      '2. Pack into a loaf shape on a lined tray and drape the bacon rashers over the top, tucking the ends under.\n' +
      '3. Bake for 50–55 minutes until cooked through and the bacon is crisp.\n' +
      '4. Rest for 10 minutes before slicing. Serve with a green salad.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '400g' },
      { rawName: 'Minced pork', rawMeasure: '300g' },
      { rawName: 'Bacon', rawMeasure: '8 rashers' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1, grated' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Parmesan', rawMeasure: '30g, grated' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Keto beef chilli (no beans)',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Brown the minced beef in a large pan over a high heat, then lift out.\n' +
      '2. Soften the onion and pepper for 6–8 minutes, then stir in the garlic, cumin, smoked paprika and chilli powder.\n' +
      '3. Return the beef with the chopped tomatoes and tomato purée, season and simmer gently for 25–30 minutes until thick.\n' +
      '4. Stir through the coriander. Serve over cauliflower rice, topped with sliced avocado.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1, diced' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Avocado', rawMeasure: '1, sliced' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Fish & seafood ───────────────────────────────────────────────────────────
  {
    title: 'Baked salmon with dill and lemon',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the salmon fillets on a lined tray and season.\n' +
      '2. Dot with the butter, scatter over the dill and lay a few lemon slices on top.\n' +
      '3. Bake for 12–15 minutes until the salmon flakes easily.\n' +
      '4. Squeeze over a little extra lemon and serve with buttered greens.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Dill', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Garlic butter prawns',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Melt the butter with the olive oil in a frying pan over a medium heat.\n' +
      '2. Add the garlic and chilli flakes and cook for 30 seconds until fragrant.\n' +
      '3. Tip in the prawns and cook for 2–3 minutes, turning, until pink and just cooked.\n' +
      '4. Squeeze over the lemon, scatter with parsley and serve over courgetti or with a salad.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '300g, peeled' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, sliced' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna and avocado lettuce boats',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Drain the tuna and flake into a bowl.\n' +
      '2. Mash the avocado roughly and fold through the tuna with the mayonnaise, spring onion and a squeeze of lime.\n' +
      '3. Season to taste.\n' +
      '4. Spoon into crisp baby gem lettuce leaves to make boats and serve.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '2 tins, drained' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Mayonnaise', rawMeasure: '2 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2, sliced' },
      { rawName: 'Lime', rawMeasure: 'juice of 1/2' },
      { rawName: 'Lettuce', rawMeasure: '1 head, leaves separated' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked mackerel pâté',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Peel the skin from the smoked mackerel and flake the flesh into a bowl, checking for bones.\n' +
      '2. Add the cream cheese, soured cream, lemon juice and a little black pepper.\n' +
      '3. Mash together with a fork until creamy but still a little chunky.\n' +
      '4. Stir through the chives and serve with cucumber spears and celery sticks for dipping.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '2 smoked fillets' },
      { rawName: 'Cream cheese', rawMeasure: '100g' },
      { rawName: 'Soured cream', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Cucumber', rawMeasure: '1/2, to serve' },
      { rawName: 'Celery', rawMeasure: '2 sticks, to serve' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cod with chorizo and peppers',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Fry the chorizo in a dry pan until it releases its oil, then add the pepper and onion and soften for 6–8 minutes.\n' +
      '2. Stir in the garlic and smoked paprika, then add the chopped tomatoes and simmer for 5 minutes.\n' +
      '3. Nestle the cod fillets into the sauce, cover and cook gently for 8–10 minutes until the fish flakes.\n' +
      '4. Scatter with parsley and serve.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2 cod fillets' },
      { rawName: 'Chorizo', rawMeasure: '80g, diced' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1, sliced' },
      { rawName: 'Onion', rawMeasure: '1, sliced' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Creamy garlic salmon',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Season the salmon and sear skin-side down in the olive oil for 4 minutes, then turn for 2 minutes. Lift out.\n' +
      '2. Lower the heat, add the garlic and cook for a moment, then pour in the double cream.\n' +
      '3. Stir in the Parmesan and wilt the spinach into the sauce. Add a squeeze of lemon.\n' +
      '4. Return the salmon, spoon over the sauce and simmer for 2 minutes to warm through.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Parmesan', rawMeasure: '25g, grated' },
      { rawName: 'Spinach', rawMeasure: '80g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and avocado salad',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Pile the lettuce, cucumber and halved cherry tomatoes into bowls.\n' +
      '2. Add the cooked prawns and sliced avocado.\n' +
      '3. Whisk the mayonnaise with a little tomato purée, lemon juice and a pinch of paprika to make a quick Marie Rose dressing.\n' +
      '4. Spoon over the dressing and serve.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '250g, cooked' },
      { rawName: 'Avocado', rawMeasure: '1, sliced' },
      { rawName: 'Lettuce', rawMeasure: '1 head' },
      { rawName: 'Cucumber', rawMeasure: '1/2, sliced' },
      { rawName: 'Cherry tomato', rawMeasure: '8, halved' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp' },
      { rawName: 'Tomato purée', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Paprika', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Tuna mayo stuffed peppers',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Halve the peppers lengthways and remove the seeds.\n' +
      '2. Mix the drained tuna with the mayonnaise, soured cream, spring onion and a squeeze of lemon; season.\n' +
      '3. Spoon the tuna mixture into the pepper halves.\n' +
      '4. Top with grated Cheddar and grill for 4–5 minutes until bubbling, or serve cold.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Tuna', rawMeasure: '2 tins, drained' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp' },
      { rawName: 'Soured cream', rawMeasure: '1 tbsp' },
      { rawName: 'Cheddar cheese', rawMeasure: '40g, grated' },
      { rawName: 'Spring onion', rawMeasure: '2, sliced' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sardines on griddled courgette',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Slice the courgettes lengthways, brush with olive oil and griddle for 2 minutes each side until charred and tender.\n' +
      '2. Lay the courgette on plates and top with the sardines.\n' +
      '3. Whisk the remaining olive oil with the lemon juice and garlic and spoon over.\n' +
      '4. Scatter with parsley and chilli flakes to serve.',
    rawLines: [
      { rawName: 'Sardines', rawMeasure: '2 tins, drained' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked salmon and cream cheese roll-ups',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Lay the smoked salmon slices flat on a board.\n' +
      '2. Mix the cream cheese with the chives, a little lemon juice and black pepper.\n' +
      '3. Spread a thin layer over each slice, lay a few cucumber batons along one edge and roll up.\n' +
      '4. Slice into bite-sized pinwheels to serve.',
    rawLines: [
      { rawName: 'Smoked salmon', rawMeasure: '150g' },
      { rawName: 'Cream cheese', rawMeasure: '100g' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Cucumber', rawMeasure: '1/2, cut into batons' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/4' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Monkfish wrapped in prosciutto',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Season the monkfish and wrap each piece in slices of bacon.\n' +
      '2. Heat the olive oil in an ovenproof pan and brown the wrapped fish all over for 3–4 minutes.\n' +
      '3. Add the garlic and cherry tomatoes to the pan and transfer to the oven.\n' +
      '4. Roast for 12–15 minutes until the fish is cooked through and the bacon is crisp. Scatter with basil to serve.',
    rawLines: [
      { rawName: 'Monkfish', rawMeasure: '2 fillets' },
      { rawName: 'Bacon', rawMeasure: '4 rashers' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Basil', rawMeasure: '1 small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Eggs & breakfast ─────────────────────────────────────────────────────────
  {
    title: 'Cheese and bacon omelette',
    servingsBase: 1,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Fry the bacon in a non-stick pan until crisp, then snip into pieces and set aside.\n' +
      '2. Beat the eggs with a little salt and pepper. Wipe the pan, add the butter and pour in the eggs.\n' +
      '3. As the edges set, draw them in and let the raw egg run underneath.\n' +
      '4. Scatter over the bacon and Cheddar, fold the omelette in half and slide onto a plate.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Bacon', rawMeasure: '2 rashers' },
      { rawName: 'Cheddar cheese', rawMeasure: '40g, grated' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked eggs with spinach and cream',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Wilt the spinach in the butter with the garlic, then squeeze out excess water.\n' +
      '2. Divide the spinach between two small ovenproof dishes and pour a little double cream over each.\n' +
      '3. Crack two eggs into each dish, season and scatter with Parmesan.\n' +
      '4. Bake for 10–12 minutes until the whites are set but the yolks still soft.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Double cream', rawMeasure: '4 tbsp' },
      { rawName: 'Parmesan', rawMeasure: '20g, grated' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Avocado and bacon breakfast bowl',
    servingsBase: 1,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Fry the bacon until crisp in a non-stick pan, then lift out.\n' +
      '2. In the bacon fat, fry the eggs to your liking.\n' +
      '3. Pile the sliced avocado and halved cherry tomatoes into a bowl.\n' +
      '4. Add the bacon and eggs, season and finish with a squeeze of lemon.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Bacon', rawMeasure: '3 rashers' },
      { rawName: 'Avocado', rawMeasure: '1, sliced' },
      { rawName: 'Cherry tomato', rawMeasure: '6, halved' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/4' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and Gruyère frittata',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'French',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Soften the mushrooms and spring onion in the butter in an ovenproof pan until any liquid has cooked off.\n' +
      '2. Beat the eggs with the double cream and most of the Gruyère; season.\n' +
      '3. Pour over the mushrooms, scatter the remaining cheese on top and cook on the hob for 2 minutes.\n' +
      '4. Transfer to the oven for 12–15 minutes until set and golden. Cut into wedges to serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Mushroom', rawMeasure: '250g, sliced' },
      { rawName: 'Gruyère', rawMeasure: '80g, grated' },
      { rawName: 'Double cream', rawMeasure: '4 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '3, sliced' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Keto breakfast fry-up',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Fry the sausages gently in a little olive oil for 12–15 minutes, turning, until cooked through.\n' +
      '2. Add the bacon and mushrooms and cook until the bacon is crisp and the mushrooms golden.\n' +
      '3. Halve the tomatoes and fry cut-side down until softened.\n' +
      '4. Fry the eggs to finish and serve everything together — no beans or toast needed.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '4' },
      { rawName: 'Bacon', rawMeasure: '4 rashers' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Soft-boiled eggs with asparagus soldiers',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Lower the eggs into boiling water and cook for 6 minutes for a runny yolk, then sit in egg cups.\n' +
      '2. Meanwhile, toss the asparagus in the olive oil and griddle for 3–4 minutes until tender and lightly charred.\n' +
      '3. Season the asparagus and brush with a little melted butter.\n' +
      '4. Crack the tops off the eggs and dip the asparagus soldiers into the yolks.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Asparagus', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Scrambled eggs with smoked salmon',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Beat the eggs with the double cream and a little seasoning.\n' +
      '2. Melt the butter in a non-stick pan over a low heat, pour in the eggs and stir gently and continuously.\n' +
      '3. When the eggs are just set but still soft, fold through most of the smoked salmon and the chives.\n' +
      '4. Serve topped with the rest of the salmon and a grind of pepper.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '5' },
      { rawName: 'Smoked salmon', rawMeasure: '100g' },
      { rawName: 'Double cream', rawMeasure: '2 tbsp' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chorizo and egg breakfast muffins',
    servingsBase: 6,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and grease a 12-hole muffin tin well.\n' +
      '2. Fry the chorizo until it releases its oil, then divide between the muffin holes with the spinach.\n' +
      '3. Beat the eggs with the double cream and seasoning and pour over the filling.\n' +
      '4. Scatter with Cheddar and bake for 18–20 minutes until set and golden. Cool slightly before lifting out.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Chorizo', rawMeasure: '100g, diced' },
      { rawName: 'Spinach', rawMeasure: '60g, chopped' },
      { rawName: 'Cheddar cheese', rawMeasure: '60g, grated' },
      { rawName: 'Double cream', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Vegetarian mains & cheese ────────────────────────────────────────────────
  {
    title: 'Halloumi and courgette traybake',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Tip the courgette, pepper and red onion into a roasting tin with the olive oil, garlic and oregano; season and toss.\n' +
      '2. Roast for 20 minutes until starting to soften and colour.\n' +
      '3. Slice the halloumi, tuck it among the vegetables and roast for a further 10–12 minutes until golden.\n' +
      '4. Squeeze over a little lemon and scatter with basil to serve.',
    rawLines: [
      { rawName: 'Paneer', rawMeasure: '225g halloumi' },
      { rawName: 'Courgette', rawMeasure: '2, sliced' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1, sliced' },
      { rawName: 'Red onion', rawMeasure: '1, wedges' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Basil', rawMeasure: '1 small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cauliflower cheese',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Steam the cauliflower florets for 6–7 minutes until just tender, then drain well.\n' +
      '2. Gently warm the double cream with the garlic, then stir in most of the Cheddar and the mustard until smooth; season.\n' +
      '3. Tip the cauliflower into a baking dish, pour over the cheese sauce and scatter the rest of the Cheddar and Parmesan on top.\n' +
      '4. Bake for 20–25 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large head' },
      { rawName: 'Double cream', rawMeasure: '250ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '120g, grated' },
      { rawName: 'Parmesan', rawMeasure: '20g, grated' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Courgetti with creamy pesto',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Spiralise or peel the courgettes into long ribbons.\n' +
      '2. Warm the olive oil in a pan, add the courgetti and toss for 2–3 minutes until just softened — do not overcook or it weeps.\n' +
      '3. Stir through the cream cheese and a splash of pasta-free cooking water to loosen, then add the basil and Parmesan.\n' +
      '4. Season well and finish with toasted pine nuts.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '3' },
      { rawName: 'Cream cheese', rawMeasure: '80g' },
      { rawName: 'Parmesan', rawMeasure: '30g, grated' },
      { rawName: 'Basil', rawMeasure: '1 large handful' },
      { rawName: 'Pine nuts', rawMeasure: '20g, toasted' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed peppers with feta and spinach',
    servingsBase: 2,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers and remove the seeds.\n' +
      '2. Wilt the spinach with the garlic, squeeze out the water and mix with the crumbled feta, beaten egg and oregano.\n' +
      '3. Spoon the filling into the pepper halves and drizzle with olive oil.\n' +
      '4. Bake for 25–30 minutes until the peppers are soft and the filling is set and golden.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Creamy mushroom stroganoff',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Soften the onion in the butter for 5 minutes, then add the mushrooms and fry over a high heat until golden.\n' +
      '2. Stir in the garlic, paprika and a little mustard and cook for a minute.\n' +
      '3. Pour in the double cream and a splash of stock, then simmer for 5 minutes until glossy.\n' +
      '4. Stir through the soured cream and parsley off the heat. Serve over cauliflower rice.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '500g, sliced' },
      { rawName: 'Onion', rawMeasure: '1, sliced' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Soured cream', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 100ml' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cheesy cauliflower bake with broccoli',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Steam the cauliflower and broccoli florets for 5 minutes until just tender, then drain.\n' +
      '2. Warm the double cream with the garlic and stir in most of the cheeses and the mustard until smooth; season.\n' +
      '3. Tip the vegetables into a dish, pour over the sauce and scatter the remaining cheese on top.\n' +
      '4. Bake for 25 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1/2 head' },
      { rawName: 'Broccoli', rawMeasure: '1 head' },
      { rawName: 'Double cream', rawMeasure: '250ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g, grated' },
      { rawName: 'Parmesan', rawMeasure: '30g, grated' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paneer and spinach curry (saag paneer)',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Fry the paneer cubes in a little olive oil until golden on all sides, then set aside.\n' +
      '2. Soften the onion, then add the garlic, ginger, cumin, turmeric and garam masala and cook for a minute.\n' +
      '3. Add the spinach in handfuls, letting each wilt, then stir in the double cream and a splash of water.\n' +
      '4. Return the paneer, simmer for 5 minutes and season. Serve with cauliflower rice.',
    rawLines: [
      { rawName: 'Paneer', rawMeasure: '250g' },
      { rawName: 'Spinach', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine parmigiana (low-carb)',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Slice the aubergines, brush with olive oil and griddle or roast until soft and golden.\n' +
      '2. Simmer the passata with the garlic and oregano for 10 minutes until thickened; season.\n' +
      '3. Layer the aubergine, tomato sauce and torn mozzarella in a dish, finishing with sauce and a good scatter of Parmesan.\n' +
      '4. Bake for 25–30 minutes until bubbling and golden. Scatter with basil to serve.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Passata', rawMeasure: '400g' },
      { rawName: 'Mozzarella', rawMeasure: '2 balls' },
      { rawName: 'Parmesan', rawMeasure: '40g, grated' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Basil', rawMeasure: '1 small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Broccoli and Stilton soup',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Soften the onion and celery in the butter for 6–8 minutes without colouring.\n' +
      '2. Add the broccoli and stock, bring to a simmer and cook for 8–10 minutes until the broccoli is tender.\n' +
      '3. Blend until smooth, then stir in the double cream and crumbled Stilton until melted.\n' +
      '4. Season carefully (the Stilton is salty) and serve.',
    rawLines: [
      { rawName: 'Broccoli', rawMeasure: '1 large head' },
      { rawName: 'Stilton cheese', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi fries with garlic dip',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Mediterranean',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Cut the halloumi into thick chips and pat dry.\n' +
      '2. Heat the olive oil in a frying pan and fry the halloumi for 2 minutes each side until deep gold and crisp.\n' +
      '3. Stir the crushed garlic and a little lemon into the natural yoghurt to make a quick dip.\n' +
      '4. Sprinkle the fries with paprika and serve hot with the garlic dip.',
    rawLines: [
      { rawName: 'Paneer', rawMeasure: '225g halloumi' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/4' },
      { rawName: 'Paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
    ],
  },

  // ── Salads & sides ───────────────────────────────────────────────────────────
  {
    title: 'Greek salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Greek',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Cut the tomatoes and cucumber into rough chunks and slice the red onion thinly.\n' +
      '2. Tip into a bowl with the olives.\n' +
      '3. Lay a slab of feta on top and scatter with oregano.\n' +
      '4. Whisk the olive oil with a little lemon juice, season and pour over just before serving.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Feta', rawMeasure: '200g' },
      { rawName: 'Olives', rawMeasure: '80g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cauliflower rice',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Break the cauliflower into florets and blitz in a food processor until it resembles rice (or grate by hand).\n' +
      '2. Melt the butter with the olive oil in a large frying pan over a medium heat.\n' +
      '3. Add the cauliflower and a splash of water, cover and steam-fry for 4–5 minutes until tender but not mushy.\n' +
      '4. Season well and finish with a little chopped parsley.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large head' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Parsley', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cauliflower mash',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Steam the cauliflower florets until very soft, about 12 minutes, then drain extremely well.\n' +
      '2. Tip into a blender or use a stick blender with the butter, double cream and garlic.\n' +
      '3. Blend until smooth and silky, adding a little more cream if needed.\n' +
      '4. Season generously and serve in place of mashed potato.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large head' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Double cream', rawMeasure: '60ml' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Creamed spinach',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Melt the butter in a large pan, add the garlic and cook for 30 seconds.\n' +
      '2. Add the spinach in handfuls, letting each wilt before adding more.\n' +
      '3. Pour in the double cream and simmer for 2–3 minutes until thickened.\n' +
      '4. Grate in a little nutmeg, season well and stir through the Parmesan to serve.',
    rawLines: [
      { rawName: 'Spinach', rawMeasure: '500g' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Parmesan', rawMeasure: '30g, grated' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Garlic butter green beans with almonds',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'French',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Blanch the green beans in boiling salted water for 3 minutes, then drain.\n' +
      '2. Melt the butter in a frying pan, add the garlic and flaked almonds and toast for a minute until golden.\n' +
      '3. Toss in the beans and warm through, coating them in the garlic butter.\n' +
      '4. Season and finish with a squeeze of lemon.',
    rawLines: [
      { rawName: 'Green beans', rawMeasure: '400g' },
      { rawName: 'Almonds', rawMeasure: '40g, flaked' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, sliced' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/4' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted Brussels sprouts with bacon',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the sprouts and toss with the olive oil, salt and pepper.\n' +
      '2. Scatter over the chopped bacon and spread out on a roasting tray.\n' +
      '3. Roast for 22–25 minutes, turning once, until the sprouts are charred at the edges and the bacon is crisp.\n' +
      '4. Squeeze over a little lemon and serve.',
    rawLines: [
      { rawName: 'Brussels sprouts', rawMeasure: '500g' },
      { rawName: 'Bacon', rawMeasure: '4 rashers, chopped' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/4' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Avocado, bacon and egg salad',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'American',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Boil the eggs for 8 minutes, then cool, peel and quarter.\n' +
      '2. Fry the bacon until crisp and break into shards.\n' +
      '3. Pile the lettuce, sliced avocado and halved cherry tomatoes into bowls and add the eggs and bacon.\n' +
      '4. Whisk the olive oil, lemon juice and mustard, season and drizzle over.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Bacon', rawMeasure: '4 rashers' },
      { rawName: 'Avocado', rawMeasure: '1, sliced' },
      { rawName: 'Lettuce', rawMeasure: '1 head' },
      { rawName: 'Cherry tomato', rawMeasure: '8, halved' },
      { rawName: 'Dijon mustard', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Caesar-style salad (no croutons)',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'American',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Season the chicken breasts and pan-fry in the olive oil for 5–6 minutes each side until cooked. Rest, then slice.\n' +
      '2. For the dressing, mash the anchovy fillets with the garlic, then whisk into the mayonnaise with the lemon juice and most of the Parmesan.\n' +
      '3. Toss the crisp lettuce with the dressing.\n' +
      '4. Top with the chicken, the remaining Parmesan and plenty of black pepper.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Lettuce', rawMeasure: '2 romaine hearts' },
      { rawName: 'Parmesan', rawMeasure: '40g, grated' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp' },
      { rawName: 'Anchovy fillets', rawMeasure: '3' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Courgette and feta fritters',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Grate the courgettes, salt lightly and leave for 10 minutes, then squeeze out as much water as you can.\n' +
      '2. Mix with the crumbled feta, eggs, spring onion, mint and a little almond flour to bind; season.\n' +
      '3. Heat the olive oil in a pan and drop in spoonfuls, flattening slightly. Fry for 3 minutes each side until golden.\n' +
      '4. Drain and serve warm with a dollop of natural yoghurt.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '3, sliced' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Almonds', rawMeasure: '2 tbsp ground' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp, to serve' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Snacks & extras ──────────────────────────────────────────────────────────
  {
    title: 'Devilled eggs',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Boil the eggs for 9 minutes, then cool in cold water, peel and halve lengthways.\n' +
      '2. Scoop the yolks into a bowl and mash with the mayonnaise, mustard and a pinch of paprika; season.\n' +
      '3. Spoon or pipe the filling back into the whites.\n' +
      '4. Dust with a little more paprika and scatter with chives to serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Parmesan crisps',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C) and line a tray with baking paper.\n' +
      '2. Spoon small mounds of grated Parmesan onto the tray, spreading each into a thin round and leaving space between them.\n' +
      '3. Sprinkle a little black pepper and a pinch of paprika over each.\n' +
      '4. Bake for 5–6 minutes until golden and lacy, then cool on the tray until crisp.',
    rawLines: [
      { rawName: 'Parmesan', rawMeasure: '120g, grated' },
      { rawName: 'Paprika', rawMeasure: '1 pinch' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Guacamole with cucumber dippers',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Mexican',
    dietLabels: ['Keto', 'Low-carb', 'Vegan'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Mash the avocados roughly in a bowl, leaving some texture.\n' +
      '2. Stir in the finely chopped red onion, tomato, chilli and coriander.\n' +
      '3. Season well and sharpen with plenty of lime juice.\n' +
      '4. Serve with cucumber and pepper batons for dipping instead of tortilla chips.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2 ripe' },
      { rawName: 'Tomato', rawMeasure: '1, deseeded and chopped' },
      { rawName: 'Red onion', rawMeasure: '1/4, finely chopped' },
      { rawName: 'Chilli', rawMeasure: '1, finely chopped' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lime', rawMeasure: 'juice of 1' },
      { rawName: 'Cucumber', rawMeasure: '1, cut into batons' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1, cut into batons' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork scratchings (homemade)',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Cut the pork skin into strips and pat very dry.\n' +
      '2. Rub all over with salt and lay on a rack over a roasting tin.\n' +
      '3. Roast for 1 hour 15 minutes until the skin has blistered and crisped, draining off rendered fat as needed.\n' +
      '4. Cool until crunchy, then sprinkle with a little extra salt and a pinch of paprika.',
    rawLines: [
      { rawName: 'Pork belly', rawMeasure: '400g skin' },
      { rawName: 'Paprika', rawMeasure: '1 pinch' },
      { rawName: 'Salt', rawMeasure: '1 tbsp flaky' },
    ],
  },
  {
    title: 'Bacon-wrapped asparagus',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Trim the woody ends from the asparagus.\n' +
      '2. Wrap a rasher of bacon around each spear and lay on a lined tray.\n' +
      '3. Drizzle with a little olive oil and season with black pepper.\n' +
      '4. Roast for 15–18 minutes until the bacon is crisp and the asparagus tender.',
    rawLines: [
      { rawName: 'Asparagus', rawMeasure: '300g' },
      { rawName: 'Bacon', rawMeasure: '8 rashers' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Keto berries with whipped cream',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Whip the double cream with the vanilla until it holds soft peaks.\n' +
      '2. Divide a small handful of mixed berries between two glasses (berries are the lowest-carb fruit, used sparingly).\n' +
      '3. Spoon the whipped cream over the berries.\n' +
      '4. Scatter with toasted flaked almonds and serve.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '200ml' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Almonds', rawMeasure: '20g, flaked and toasted' },
      { rawName: 'Strawberries', rawMeasure: '1 small handful, mixed berries' },
    ],
  },
  {
    title: 'Chocolate avocado mousse',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Scoop the avocados into a blender with the cocoa powder and vanilla.\n' +
      '2. Add a little double cream and a low-carb sweetener to taste, then blend until completely smooth.\n' +
      '3. Spoon into small glasses and chill for at least 30 minutes.\n' +
      '4. Top with a little extra whipped cream and a dusting of cocoa to serve.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2 ripe' },
      { rawName: 'Cocoa powder', rawMeasure: '3 tbsp' },
      { rawName: 'Double cream', rawMeasure: '4 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Coconut fat bombs',
    servingsBase: 12,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Gently melt the coconut oil with the butter and cocoa powder until smooth.\n' +
      '2. Stir in the desiccated coconut, vanilla and a low-carb sweetener to taste.\n' +
      '3. Spoon into a silicone ice-cube tray or mini cases.\n' +
      '4. Chill for at least an hour until firm, then keep in the fridge.',
    rawLines: [
      { rawName: 'Coconut oil', rawMeasure: '100g' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Cocoa powder', rawMeasure: '2 tbsp' },
      { rawName: 'Desiccated coconut', rawMeasure: '40g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Almond and seed keto crackers',
    servingsBase: 8,
    totalTimeMinutes: 35,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C). Mix the ground almonds, sesame seeds and a good pinch of salt.\n' +
      '2. Stir in the beaten egg and olive oil to form a stiff dough.\n' +
      '3. Press the dough thinly between two sheets of baking paper, then score into squares.\n' +
      '4. Bake for 18–22 minutes until golden and crisp. Cool, then snap into crackers. Serve with cheese.',
    rawLines: [
      { rawName: 'Almonds', rawMeasure: '150g ground' },
      { rawName: 'Sesame seeds', rawMeasure: '40g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Keto cheese and herb scones',
    servingsBase: 8,
    totalTimeMinutes: 35,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a tray. Mix the ground almonds with the baking powder, most of the Cheddar, the chives and a pinch of salt.\n' +
      '2. Stir in the beaten eggs and melted butter to form a soft dough.\n' +
      '3. Shape into eight rounds, place on the tray and top with the remaining cheese.\n' +
      '4. Bake for 18–20 minutes until risen and golden. Best eaten warm with butter.',
    rawLines: [
      { rawName: 'Almonds', rawMeasure: '200g ground' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g, grated' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Butter', rawMeasure: '40g, melted' },
      { rawName: 'Baking powder', rawMeasure: '2 tsp' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: '1/2 tsp' },
    ],
  },
]
