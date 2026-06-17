// Curated VEGAN recipes for Larder — fully displayable, original British-English
// method prose.
//
// Each record is culinary content ONLY — sources/curated.js (mapCurated) adds the
// source/sourceId/imageUrl boilerplate and a generated on-brand placeholder. The
// shape mirrors data/curated/mains.js:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }
//
// HARD RULE — every recipe here STRICTLY satisfies "Vegan": NO animal products
// whatsoever — no meat, fish, shellfish, dairy (milk/butter/cream/cheese/yoghurt),
// eggs, honey or gelatine. Where a classic uses butter/milk/eggs we use vegan
// butter, soya/almond/coconut milk and a flax egg instead. "Vegan" is also
// vegetarian, so both labels are carried honestly. Free-from labels (Gluten-free,
// Dairy-free, Nut-free, Egg-free, Fish-free) are DERIVED downstream by the
// pipeline from the resolved ingredient lines — we do not hand-assert them here.
//
// rawName values use the canonical dictionary vocabulary (data/ingredients.js) so
// the lines resolve cleanly. Method prose is written fresh; no website wording is
// copied.

const VEGAN = ['Vegan', 'Vegetarian']

export default [
  // ── Soups & broths ─────────────────────────────────────────────────────────
  {
    title: 'Spiced red lentil and carrot soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Warm the olive oil in a large pan and soften the chopped onion and carrot over a medium heat for 8–10 minutes until sweet.\n' +
      '2. Stir in the garlic, cumin and turmeric and cook for a minute until fragrant.\n' +
      '3. Add the rinsed red lentils and the chopped tomatoes, then pour in the stock. Bring to the boil.\n' +
      '4. Lower the heat and simmer for 20–25 minutes until the lentils have collapsed and the carrot is soft.\n' +
      '5. Blend until smooth, loosen with a little water if needed, then season well and finish with a squeeze of lemon. Scatter with coriander to serve.',
    rawLines: [
      { rawName: 'Red lentils', rawMeasure: '200g' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Leek and potato soup (vegan)',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Melt the vegan butter in a large pan and gently soften the sliced leeks and onion for 8–10 minutes without colouring.\n' +
      '2. Add the diced potato, stir to coat, then pour in the stock. Bring to the boil and simmer for 15–20 minutes until the potato is soft.\n' +
      '3. Blend until smooth, then stir through the soya milk and season generously.\n' +
      '4. Reheat gently without boiling, scatter with chives and serve with crusty bread.',
    rawLines: [
      { rawName: 'Leek', rawMeasure: '3' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Soya milk', rawMeasure: '100ml' },
      { rawName: 'Vegan butter', rawMeasure: '30g' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted tomato and basil soup',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the tomatoes and scatter in a roasting tin with the red onion wedges and whole garlic cloves.\n' +
      '2. Drizzle with olive oil, season, and roast for 30–35 minutes until soft and lightly charred at the edges.\n' +
      '3. Squeeze the garlic from its skins and tip everything into a pan with the chopped tomatoes and stock. Bring to a simmer for 10 minutes.\n' +
      '4. Blend until smooth, stir through most of the torn basil and season well.\n' +
      '5. Serve scattered with the remaining basil and a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '8 ripe' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Basil', rawMeasure: '1 large bunch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Minestrone with cannellini beans',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion, carrot and celery in the olive oil over a medium heat for 10 minutes.\n' +
      '2. Stir in the garlic and tomato purée, cook for a minute, then add the chopped tomatoes and stock.\n' +
      '3. Simmer for 15 minutes, then add the drained cannellini beans and the small pasta.\n' +
      '4. Cook for a further 8–10 minutes until the pasta is tender, stirring in the shredded cabbage for the last few minutes.\n' +
      '5. Season well, scatter with parsley and serve with crusty bread.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Pasta', rawMeasure: '100g small shapes' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Cabbage', rawMeasure: '150g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Carrot and coriander soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Warm the olive oil in a large pan and soften the chopped onion for 6–8 minutes.\n' +
      '2. Add the sliced carrot and ground coriander and stir to coat, cooking for a couple of minutes.\n' +
      '3. Pour in the stock, bring to the boil and simmer for 20 minutes until the carrot is very soft.\n' +
      '4. Blend until smooth with most of the fresh coriander, then season to taste.\n' +
      '5. Serve topped with the remaining coriander and a swirl of soya milk.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 bunch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml' },
      { rawName: 'Soya milk', rawMeasure: '50ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Butternut squash and sage soup',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the diced butternut squash with olive oil and season, then roast for 25–30 minutes until soft and caramelised.\n' +
      '2. Meanwhile soften the chopped onion in a little oil in a large pan with the chopped sage for 8 minutes.\n' +
      '3. Add the roasted squash and the stock, bring to a simmer and cook for 10 minutes.\n' +
      '4. Blend until silky, stir through the coconut milk and season well.\n' +
      '5. Serve with a grind of black pepper and a few crisped sage leaves.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '1 (about 1kg)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Sage', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Coconut milk', rawMeasure: '100ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pea and mint soup',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion in the olive oil over a medium heat for 6–8 minutes until translucent.\n' +
      '2. Pour in the stock and bring to the boil, then tip in the peas and simmer for just 4–5 minutes to keep the colour bright.\n' +
      '3. Add most of the mint leaves and blend until smooth.\n' +
      '4. Season to taste and loosen with a little water if needed.\n' +
      '5. Serve scattered with the remaining shredded mint.',
    rawLines: [
      { rawName: 'Peas', rawMeasure: '500g frozen' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Scotch broth with pearl barley and split peas',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion, carrot, celery and swede in the olive oil in a large pan for 10 minutes.\n' +
      '2. Stir in the rinsed split peas and pearl barley until coated.\n' +
      '3. Pour in the stock, bring to the boil, then lower the heat and simmer gently for 45–50 minutes, stirring now and then, until the barley and peas are tender.\n' +
      '4. Stir through the shredded cabbage for the last 10 minutes.\n' +
      '5. Season well, scatter with parsley and serve in deep bowls.',
    rawLines: [
      { rawName: 'Split peas', rawMeasure: '100g' },
      { rawName: 'Barley', rawMeasure: '75g pearl barley' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Swede', rawMeasure: '200g' },
      { rawName: 'Cabbage', rawMeasure: '150g' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1.2 litres' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Curries, dals & stews ──────────────────────────────────────────────────
  {
    title: 'Chana masala',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: VEGAN,
    instructions:
      '1. Warm the vegetable oil in a wide pan and soften the chopped onion over a medium heat for 8–10 minutes until deep gold.\n' +
      '2. Stir in the ginger garlic paste and cook for a minute, then add the garam masala, cumin, turmeric and chilli powder and fry for 30 seconds.\n' +
      '3. Tip in the chopped tomatoes and cook down for 5 minutes until thick and glossy.\n' +
      '4. Add the drained chickpeas and a splash of water, then simmer for 12–15 minutes, lightly crushing a few chickpeas to thicken the sauce.\n' +
      '5. Season, finish with a squeeze of lemon and a scatter of coriander, and serve with rice or naan.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (800g)' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tarka dal',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: VEGAN,
    instructions:
      '1. Rinse the red lentils well, then tip into a pan with the turmeric and plenty of water. Bring to the boil, skim, and simmer for 25–30 minutes until soft and soupy, stirring now and then.\n' +
      '2. Season the dal with salt and beat smooth, loosening with a little water to a thick pouring consistency.\n' +
      '3. For the tarka, heat the vegetable oil in a small pan and fry the cumin and mustard seeds until they pop.\n' +
      '4. Add the sliced garlic and chilli and fry until the garlic turns golden, then stir in the garam masala off the heat.\n' +
      '5. Pour the sizzling tarka over the dal, scatter with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Red lentils', rawMeasure: '250g' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp seeds' },
      { rawName: 'Mustard seeds', rawMeasure: '1/2 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Saag aloo',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'Indian',
    dietLabels: VEGAN,
    instructions:
      '1. Parboil the diced potato in salted water for 6–7 minutes until almost tender, then drain.\n' +
      '2. Warm the vegetable oil in a wide pan and fry the cumin and mustard seeds until they crackle.\n' +
      '3. Add the chopped onion and soften for 6–8 minutes, then stir in the ginger garlic paste, turmeric and chilli powder.\n' +
      '4. Add the potatoes and fry for 8–10 minutes until golden at the edges, then stir through the spinach in handfuls until wilted.\n' +
      '5. Season well and serve hot as a side or with rice.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Spinach', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp seeds' },
      { rawName: 'Mustard seeds', rawMeasure: '1/2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine and chickpea curry',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: VEGAN,
    instructions:
      '1. Toss the diced aubergine with a little oil and salt and roast at 220°C (fan 200°C) for 20 minutes until soft and golden.\n' +
      '2. Meanwhile soften the chopped onion in the remaining oil for 8 minutes, then stir in the ginger garlic paste, curry powder and turmeric.\n' +
      '3. Add the chopped tomatoes and cook down for 5 minutes, then pour in the coconut milk.\n' +
      '4. Stir in the roasted aubergine and the drained chickpeas and simmer for 12–15 minutes until thick.\n' +
      '5. Season, finish with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai green vegetable curry with tofu',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: VEGAN,
    instructions:
      '1. Press the tofu to remove excess water, cut into cubes and fry in a little oil until golden on all sides. Lift out and set aside.\n' +
      '2. Fry the Thai green curry paste in the same pan for a minute until fragrant, then pour in the coconut milk and bring to a gentle simmer.\n' +
      '3. Add the sliced aubergine and green beans and simmer for 8 minutes until almost tender.\n' +
      '4. Return the tofu with the mangetout and lime leaves and cook for a further 3–4 minutes.\n' +
      '5. Season with soy sauce and a squeeze of lime, scatter with basil and serve with rice.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '300g firm' },
      { rawName: 'Thai green curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Green beans', rawMeasure: '150g' },
      { rawName: 'Mangetout', rawMeasure: '100g' },
      { rawName: 'Lime leaves', rawMeasure: '3' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Sweet potato and spinach curry',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion in the vegetable oil for 8 minutes, then stir in the ginger garlic paste and curry powder.\n' +
      '2. Add the diced sweet potato and stir to coat, then pour in the chopped tomatoes and coconut milk.\n' +
      '3. Simmer gently for 18–20 minutes until the sweet potato is tender.\n' +
      '4. Stir through the spinach in handfuls until wilted and add the drained chickpeas to warm through.\n' +
      '5. Season, finish with a squeeze of lime and coriander, and serve with rice.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '600g' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Three-bean chilli',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion, pepper and carrot in the olive oil for 10 minutes over a medium heat.\n' +
      '2. Stir in the garlic, cumin, smoked paprika and chilli powder and cook for a minute until fragrant.\n' +
      '3. Add the tomato purée and chopped tomatoes and bring to a simmer.\n' +
      '4. Tip in the drained kidney beans, black beans and pinto beans, then simmer gently for 20–25 minutes until rich and thick.\n' +
      '5. Season well, stir through chopped coriander and serve with rice or in jacket potatoes.',
    rawLines: [
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Black beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Pinto beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lentil and vegetable stew',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion, carrot and celery in the olive oil for 10 minutes over a medium heat.\n' +
      '2. Stir in the garlic and thyme, then add the rinsed brown lentils and the diced potato.\n' +
      '3. Pour in the chopped tomatoes and stock, bring to the boil and simmer for 30–35 minutes until the lentils and potato are tender.\n' +
      '4. Stir through the kale for the last 5 minutes until wilted.\n' +
      '5. Season generously and serve with crusty bread.',
    rawLines: [
      { rawName: 'Brown lentils', rawMeasure: '200g' },
      { rawName: 'Potato', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Kale', rawMeasure: '100g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea and spinach stew',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion in the olive oil for 8 minutes, then stir in the garlic, cumin and smoked paprika.\n' +
      '2. Add the tomato purée and chopped tomatoes and cook down for 5 minutes.\n' +
      '3. Tip in the drained chickpeas with a splash of water and simmer for 12–15 minutes until thick.\n' +
      '4. Stir through the spinach in handfuls until wilted.\n' +
      '5. Season, finish with a squeeze of lemon and serve with crusty bread.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (800g)' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and ale stew with herb dumplings',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Brown the quartered mushrooms in the olive oil over a high heat in batches, then set aside.\n' +
      '2. Soften the chopped onion, carrot and celery in the same pan for 10 minutes, then stir in the garlic and tomato purée.\n' +
      '3. Sprinkle in 1 tbsp of the flour, then pour in the ale and stock, stirring until smooth. Return the mushrooms, add the thyme and simmer for 25 minutes.\n' +
      '4. For the dumplings, rub the vegan butter into the remaining flour with the baking powder and mixed herbs, then bring together with a little cold water into a soft dough and shape into eight balls.\n' +
      '5. Sit the dumplings on the stew, cover and simmer gently for 20 minutes until risen and fluffy. Season and serve.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ale', rawMeasure: '300ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Plain flour', rawMeasure: '150g' },
      { rawName: 'Vegan butter', rawMeasure: '60g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Mixed herbs', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Butternut squash and chickpea tagine',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion in the olive oil for 8 minutes, then stir in the garlic and ras el hanout and cook for a minute.\n' +
      '2. Add the diced butternut squash and stir to coat, then pour in the chopped tomatoes and stock.\n' +
      '3. Add the dried apricots and the drained chickpeas, bring to a simmer and cook for 25–30 minutes until the squash is tender and the sauce thickened.\n' +
      '4. Season well and finish with a squeeze of lemon.\n' +
      '5. Scatter with coriander and serve with couscous.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '700g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ras el hanout', rawMeasure: '1 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Dried apricots', rawMeasure: '75g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Couscous', rawMeasure: '250g' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Black bean and sweetcorn stew',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion and pepper in the olive oil for 8 minutes.\n' +
      '2. Stir in the garlic, cumin and smoked paprika and cook for a minute.\n' +
      '3. Add the chopped tomatoes and a splash of water, then tip in the drained black beans and sweetcorn.\n' +
      '4. Simmer for 15 minutes until thick and rich.\n' +
      '5. Season, finish with lime and coriander, and serve with rice or warm tortilla wraps.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '2 tins (800g)' },
      { rawName: 'Sweetcorn', rawMeasure: '1 tin (325g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Pasta, rice & grains ───────────────────────────────────────────────────
  {
    title: 'Spaghetti with garlic, chilli and olive oil',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Cook the spaghetti in plenty of well-salted boiling water until al dente, reserving a cup of the cooking water before draining.\n' +
      '2. Meanwhile warm the olive oil gently in a wide pan and add the thinly sliced garlic and chilli flakes. Cook slowly until the garlic is pale gold — do not let it burn.\n' +
      '3. Tip the drained pasta into the pan with a splash of the reserved water and toss to coat in the fragrant oil.\n' +
      '4. Stir through most of the chopped parsley and season.\n' +
      '5. Serve at once with the remaining parsley scattered over.',
    rawLines: [
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan bolognese with lentils',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the finely chopped onion, carrot and celery in the olive oil over a medium heat for 10 minutes.\n' +
      '2. Stir in the garlic and the finely chopped mushrooms and cook until any moisture has cooked away.\n' +
      '3. Add the tomato purée and cook for a minute, then tip in the rinsed brown lentils, chopped tomatoes and stock.\n' +
      '4. Simmer gently for 30 minutes, stirring now and then, until the lentils are tender and the sauce rich; season well.\n' +
      '5. Meanwhile cook the spaghetti until al dente, drain and toss through the sauce. Serve with torn basil.',
    rawLines: [
      { rawName: 'Brown lentils', rawMeasure: '150g' },
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Mushroom', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Penne with roasted vegetables and tomato',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Toss the diced courgette, pepper, red onion and aubergine with olive oil and season, then roast for 25–30 minutes until soft and caramelised.\n' +
      '2. Meanwhile warm the passata in a pan with the garlic and a pinch of chilli flakes, and simmer for 10 minutes.\n' +
      '3. Cook the penne until al dente and drain, keeping a little cooking water.\n' +
      '4. Fold the roasted vegetables and pasta through the tomato sauce, loosening with a splash of pasta water.\n' +
      '5. Season, tear over basil and serve.',
    rawLines: [
      { rawName: 'Penne', rawMeasure: '400g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Creamy vegan mushroom pasta',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Cook the pasta in well-salted boiling water until al dente, reserving a little cooking water before draining.\n' +
      '2. Meanwhile fry the sliced mushrooms in the olive oil over a high heat until golden and any moisture has gone.\n' +
      '3. Add the garlic and thyme and cook for a minute, then pour in the soya milk and let it bubble and reduce slightly.\n' +
      '4. Stir through a spoonful of the cashew butter (or finely ground cashews) to enrich the sauce, loosening with pasta water until silky.\n' +
      '5. Fold the drained pasta through, season well and finish with chopped parsley.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '400g' },
      { rawName: 'Mushroom', rawMeasure: '400g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Soya milk', rawMeasure: '300ml' },
      { rawName: 'Cashews', rawMeasure: '50g' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable and chickpea pilaf',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion in the olive oil for 6–8 minutes, then stir in the garlic, cumin and turmeric.\n' +
      '2. Add the rinsed basmati rice and stir to coat in the spiced oil.\n' +
      '3. Tip in the drained chickpeas and the diced carrot, then pour in the stock. Bring to the boil.\n' +
      '4. Cover, lower the heat and cook gently for 12–15 minutes until the rice is tender and the liquid absorbed. Rest, covered, for 5 minutes.\n' +
      '5. Fork through the peas and chopped coriander, season and serve.',
    rawLines: [
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and pea risotto',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Fry the sliced mushrooms in a little olive oil over a high heat until golden, then set aside.\n' +
      '2. Soften the chopped onion in the vegan butter and remaining oil for 6–8 minutes, then stir in the garlic.\n' +
      '3. Add the risotto rice and stir for a minute, then pour in the white wine and let it bubble away.\n' +
      '4. Add the hot stock a ladleful at a time, stirring, until the rice is creamy and just tender — about 18 minutes.\n' +
      '5. Stir through the mushrooms and peas, season, and finish with a knob of vegan butter and chopped parsley.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '300g risotto rice' },
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'White wine', rawMeasure: '100ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Vegan butter', rawMeasure: '40g' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemon and herb couscous salad',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Tip the couscous into a bowl, pour over the same volume of boiling stock, cover and leave for 5 minutes.\n' +
      '2. Fluff up with a fork and stir through the olive oil and lemon juice.\n' +
      '3. Fold in the diced cucumber, halved cherry tomatoes and finely sliced spring onion.\n' +
      '4. Stir through plenty of chopped parsley and mint.\n' +
      '5. Season well and serve at room temperature.',
    rawLines: [
      { rawName: 'Couscous', rawMeasure: '250g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Quinoa, roasted vegetable and chickpea bowl',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Toss the diced courgette, pepper and red onion with the drained chickpeas, olive oil and smoked paprika, then roast for 25 minutes until tender and golden.\n' +
      '2. Meanwhile rinse the quinoa and cook in the stock for 15 minutes until the grains are tender and the liquid absorbed; rest, covered, for 5 minutes.\n' +
      '3. Fork the quinoa through and fold in the roasted vegetables and chickpeas.\n' +
      '4. Dress with lemon juice and a little extra olive oil, and stir through chopped parsley.\n' +
      '5. Season and serve warm or cold.',
    rawLines: [
      { rawName: 'Quinoa', rawMeasure: '200g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable fried rice with tofu',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: VEGAN,
    instructions:
      '1. Press the tofu, cut into small cubes and fry in the sesame oil until golden, then set aside.\n' +
      '2. Stir-fry the chopped onion, diced carrot and pepper over a high heat for 3–4 minutes.\n' +
      '3. Add the garlic and ginger and cook for a minute, then tip in the cooked, cold rice and toss over the heat to separate and warm through.\n' +
      '4. Return the tofu with the peas and sweetcorn and stir-fry for 2–3 minutes.\n' +
      '5. Season with soy sauce, scatter with sliced spring onion and serve.',
    rawLines: [
      { rawName: 'Rice', rawMeasure: '300g cooked' },
      { rawName: 'Tofu', rawMeasure: '250g firm' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Sweetcorn', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Singapore-style noodles with vegetables',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: VEGAN,
    instructions:
      '1. Soak the rice vermicelli in just-boiled water until soft, then drain well.\n' +
      '2. Stir-fry the sliced pepper, carrot and pak choi in the sesame oil over a high heat for 3 minutes.\n' +
      '3. Add the garlic, ginger and curry powder and cook for a minute until fragrant.\n' +
      '4. Tip in the drained noodles and the bean sprouts, then toss with the soy sauce until everything is coated and hot.\n' +
      '5. Finish with sliced spring onion and a squeeze of lime.',
    rawLines: [
      { rawName: 'Rice vermicelli', rawMeasure: '250g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Bean sprouts', rawMeasure: '100g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Sticky tofu noodle stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: VEGAN,
    instructions:
      '1. Press the tofu, cut into cubes and toss in the cornflour. Fry in the sesame oil until crisp and golden on all sides, then set aside.\n' +
      '2. Cook the noodles to packet instructions, drain and set aside.\n' +
      '3. Stir-fry the broccoli and pepper over a high heat for 3 minutes, then add the garlic and ginger.\n' +
      '4. Whisk the soy sauce, hoisin sauce and a splash of water, pour into the pan and let it bubble to a glaze.\n' +
      '5. Return the tofu and noodles, toss to coat, and finish with sesame seeds and spring onion.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '300g firm' },
      { rawName: 'Noodles', rawMeasure: '250g' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Cornflour', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Hoisin sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Pad Thai-style rice noodles with tofu',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: VEGAN,
    instructions:
      '1. Soak the rice noodles in just-boiled water until pliable, then drain.\n' +
      '2. Press and cube the tofu, then fry in the vegetable oil until golden; set aside.\n' +
      '3. Whisk the tamarind paste, soy sauce and a little sugar into a sauce.\n' +
      '4. Stir-fry the garlic and sliced spring onion briefly, add the drained noodles and the sauce and toss over a high heat until coated.\n' +
      '5. Return the tofu with the bean sprouts, toss through, and serve with crushed peanuts and lime wedges.',
    rawLines: [
      { rawName: 'Rice vermicelli', rawMeasure: '250g flat rice noodles' },
      { rawName: 'Tofu', rawMeasure: '250g firm' },
      { rawName: 'Bean sprouts', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Tamarind paste', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Peanuts', rawMeasure: '50g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },

  // ── Bakes, traybakes & roasts ──────────────────────────────────────────────
  {
    title: 'Vegan shepherdless pie',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion, carrot and celery in the olive oil for 10 minutes over a medium heat.\n' +
      '2. Stir in the garlic and the finely chopped mushrooms and cook until any moisture has gone.\n' +
      '3. Add the tomato purée, rinsed green lentils, chopped tomatoes and stock, then simmer for 25 minutes until thick. Stir in the peas.\n' +
      '4. Meanwhile boil the potatoes until tender, drain and mash with the vegan butter and a splash of soya milk; season.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Spoon the lentils into a baking dish, top with the mash, fork the surface and bake for 25–30 minutes until golden.',
    rawLines: [
      { rawName: 'Brown lentils', rawMeasure: '250g green or brown' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Mushroom', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Vegan butter', rawMeasure: '40g' },
      { rawName: 'Soya milk', rawMeasure: '60ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted vegetable and lentil bake',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the diced courgette, pepper, aubergine and red onion with olive oil and season, then roast for 25 minutes.\n' +
      '2. Meanwhile simmer the rinsed brown lentils in the stock with the garlic and thyme for 20 minutes until tender.\n' +
      '3. Combine the roasted vegetables, lentils and chopped tomatoes in a baking dish and stir well.\n' +
      '4. Scatter over the breadcrumbs mixed with a little olive oil.\n' +
      '5. Bake for 15–20 minutes until bubbling and the topping is golden.',
    rawLines: [
      { rawName: 'Brown lentils', rawMeasure: '200g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Breadcrumbs', rawMeasure: '60g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed peppers with rice and beans',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers, remove the seeds and sit them cut-side up in a baking dish.\n' +
      '2. Soften the chopped onion in the olive oil, then stir in the garlic, cumin and smoked paprika.\n' +
      '3. Add the cooked rice, drained black beans, sweetcorn and chopped tomatoes and warm through; season well.\n' +
      '4. Spoon the filling into the pepper halves and drizzle with a little oil.\n' +
      '5. Cover with foil and bake for 30 minutes, then uncover and bake for 10 more until the peppers are tender. Scatter with coriander.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4 large' },
      { rawName: 'Rice', rawMeasure: '200g, cooked' },
      { rawName: 'Black beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Sweetcorn', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan sausage and bean casserole',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Brown the vegan sausages in the olive oil in a large pan, then lift out and slice thickly.\n' +
      '2. Soften the chopped onion and pepper in the same pan for 8 minutes, then stir in the garlic and smoked paprika.\n' +
      '3. Add the chopped tomatoes, tomato purée and stock and bring to a simmer.\n' +
      '4. Return the sausages with the drained cannellini beans and butter beans and simmer for 15–20 minutes until rich and thick.\n' +
      '5. Season well, scatter with parsley and serve with crusty bread or mash.',
    rawLines: [
      { rawName: 'Vegan sausage', rawMeasure: '6' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan toad in the hole',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Whisk the flour with the soya milk, an equal splash of water and a pinch of salt into a smooth batter and rest for 30 minutes.\n' +
      '2. Heat the oven to 220°C (fan 200°C). Put the vegetable oil and vegan sausages into a roasting tin and roast for 10 minutes until the sausages colour and the oil is smoking hot.\n' +
      '3. Quickly pour the batter around the sausages and return to the oven at once.\n' +
      '4. Bake for 25–30 minutes without opening the door until risen, deep gold and crisp.\n' +
      '5. Serve straight away with onion gravy and greens.',
    rawLines: [
      { rawName: 'Vegan sausage', rawMeasure: '8' },
      { rawName: 'Plain flour', rawMeasure: '140g' },
      { rawName: 'Soya milk', rawMeasure: '250ml' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Roasted ratatouille',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Side',
    cuisine: 'French',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Spread the diced aubergine, courgette, pepper and red onion in a large roasting tin.\n' +
      '2. Drizzle with olive oil, season and roast for 25 minutes, turning once, until starting to soften and colour.\n' +
      '3. Stir in the garlic, chopped tomatoes and tomato purée and the thyme leaves.\n' +
      '4. Return to the oven for a further 20–25 minutes until everything is meltingly soft and the sauce has reduced.\n' +
      '5. Tear over basil, season and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bombay roast potatoes',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Side',
    cuisine: 'Indian',
    dietLabels: VEGAN,
    instructions:
      '1. Parboil the potato chunks in salted water for 8 minutes, then drain and rough up the edges in the colander.\n' +
      '2. Heat the oven to 220°C (fan 200°C). Toss the potatoes with the vegetable oil, turmeric, cumin and mustard seeds and tip into a roasting tin.\n' +
      '3. Roast for 35–40 minutes, turning once, until crisp and deeply golden.\n' +
      '4. Toss with the chilli powder and plenty of salt.\n' +
      '5. Scatter with chopped coriander and serve hot.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp seeds' },
      { rawName: 'Mustard seeds', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan cottage pie with mushrooms and lentils',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion, carrot and celery in the olive oil for 10 minutes.\n' +
      '2. Add the garlic and finely chopped mushrooms and cook until any moisture has gone, then stir in the tomato purée.\n' +
      '3. Add the rinsed brown lentils, chopped tomatoes, stock and a dash of soy sauce, then simmer for 25–30 minutes until thick.\n' +
      '4. Meanwhile boil the potatoes and swede until tender, drain and mash with the vegan butter and a splash of soya milk; season.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Spoon the lentils into a dish, top with the mash, fork the surface and bake for 25–30 minutes until golden.',
    rawLines: [
      { rawName: 'Brown lentils', rawMeasure: '250g' },
      { rawName: 'Mushroom', rawMeasure: '250g' },
      { rawName: 'Potato', rawMeasure: '700g' },
      { rawName: 'Swede', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Vegan butter', rawMeasure: '40g' },
      { rawName: 'Soya milk', rawMeasure: '60ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cauliflower and chickpea traybake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Toss the cauliflower florets and drained chickpeas with the olive oil, ras el hanout and ground cumin.\n' +
      '2. Spread in a large roasting tin with the red onion wedges and roast for 30–35 minutes, turning once, until golden and tender.\n' +
      '3. Whisk the tahini with lemon juice and enough water to make a drizzling sauce; season.\n' +
      '4. Pile the roasted vegetables onto a platter and drizzle with the tahini sauce.\n' +
      '5. Scatter with chopped parsley and pomegranate, if you have it, and serve.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Ras el hanout', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan mac and cheese',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Cook the macaroni until just al dente, then drain.\n' +
      '2. For the sauce, melt the vegan butter, stir in the flour and cook for a minute. Gradually whisk in the soya milk to a smooth sauce and simmer until thickened.\n' +
      '3. Stir in the ground cashews, mustard and a pinch of turmeric for colour, then season well; the sauce should taste savoury and rich.\n' +
      '4. Fold the macaroni through the sauce and tip into a baking dish.\n' +
      '5. Scatter over the breadcrumbs and bake at 200°C (fan 180°C) for 20 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '350g macaroni' },
      { rawName: 'Soya milk', rawMeasure: '600ml' },
      { rawName: 'Cashews', rawMeasure: '75g' },
      { rawName: 'Vegan butter', rawMeasure: '50g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 pinch' },
      { rawName: 'Breadcrumbs', rawMeasure: '60g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan lasagne with roasted vegetables',
    servingsBase: 6,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Roast the diced courgette, aubergine and pepper with olive oil for 25 minutes.\n' +
      '2. For the ragu, simmer the rinsed green lentils with the chopped tomatoes, garlic, tomato purée and stock for 25 minutes until thick. Stir in the roasted vegetables.\n' +
      '3. For the white sauce, melt the vegan butter, stir in the flour, then whisk in the soya milk to a smooth sauce; season with nutmeg.\n' +
      '4. Layer the ragu, lasagne sheets and white sauce in a baking dish, finishing with white sauce and the breadcrumbs.\n' +
      '5. Bake for 35–40 minutes until golden and bubbling. Rest for 10 minutes before serving.',
    rawLines: [
      { rawName: 'Lasagne sheets', rawMeasure: '250g' },
      { rawName: 'Brown lentils', rawMeasure: '200g green or brown' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (800g)' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Soya milk', rawMeasure: '700ml' },
      { rawName: 'Vegan butter', rawMeasure: '50g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Breadcrumbs', rawMeasure: '50g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jacket potato with chilli',
    servingsBase: 2,
    totalTimeMinutes: 90,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes, rub with a little oil and salt and bake directly on the shelf for about 1 hour 15 minutes until crisp and fluffy.\n' +
      '2. Meanwhile soften the chopped onion in the olive oil, then stir in the garlic, cumin and smoked paprika.\n' +
      '3. Add the chopped tomatoes and the drained kidney beans and simmer for 20 minutes until thick. Season.\n' +
      '4. Split the baked potatoes open and fluff the insides.\n' +
      '5. Spoon over the chilli and finish with sliced spring onion.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '2 large baking potatoes' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Burgers, fritters & light bites ────────────────────────────────────────
  {
    title: 'Falafel',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Blitz the drained chickpeas with the onion, garlic, parsley, coriander, cumin and ground coriander to a coarse paste — do not over-process.\n' +
      '2. Stir in the gram flour, season well and chill the mixture for 20 minutes to firm up.\n' +
      '3. Shape into small patties or balls with damp hands.\n' +
      '4. Shallow-fry in the vegetable oil for 3–4 minutes each side until deep golden and crisp.\n' +
      '5. Drain on kitchen paper and serve in warm pitta with salad and a drizzle of tahini.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (800g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Gram flour', rawMeasure: '3 tbsp' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Black bean burgers',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: VEGAN,
    instructions:
      '1. Mash the drained black beans coarsely in a bowl, leaving some texture.\n' +
      '2. Soften the chopped onion in a little oil, then add to the beans with the garlic, cumin and smoked paprika.\n' +
      '3. Stir in the breadcrumbs and gram flour to bind, season well and chill for 15 minutes.\n' +
      '4. Shape into four patties and fry in the vegetable oil for 4–5 minutes each side until crisp and heated through.\n' +
      '5. Serve in toasted burger buns with lettuce, tomato and your favourite relish.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '2 tins (800g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Breadcrumbs', rawMeasure: '60g' },
      { rawName: 'Gram flour', rawMeasure: '2 tbsp' },
      { rawName: 'Burger bun', rawMeasure: '4' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sweetcorn fritters',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Whisk the gram flour with cold water into a thick, smooth batter and season.\n' +
      '2. Stir in the drained sweetcorn, sliced spring onion, chopped coriander and a pinch of chilli flakes.\n' +
      '3. Heat a little vegetable oil in a frying pan over a medium heat.\n' +
      '4. Drop in spoonfuls of the batter and fry for 2–3 minutes each side until golden and set.\n' +
      '5. Drain on kitchen paper and serve warm with a squeeze of lime.',
    rawLines: [
      { rawName: 'Sweetcorn', rawMeasure: '1 tin (325g)' },
      { rawName: 'Gram flour', rawMeasure: '120g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Hummus',
    servingsBase: 6,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Drain the chickpeas, reserving a little of the liquid.\n' +
      '2. Blitz the chickpeas with the tahini, garlic, lemon juice and olive oil until smooth.\n' +
      '3. Loosen with the reserved chickpea liquid or a little cold water until silky.\n' +
      '4. Season with salt and a pinch of cumin, tasting as you go.\n' +
      '5. Spoon into a bowl, drizzle with olive oil and dust with paprika; serve with warm pitta.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 pinch' },
      { rawName: 'Paprika', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Guacamole',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Mexican',
    dietLabels: VEGAN,
    instructions:
      '1. Halve the avocados, remove the stones and scoop the flesh into a bowl.\n' +
      '2. Mash roughly with a fork, leaving some texture.\n' +
      '3. Stir in the finely chopped red onion, chilli, tomato and plenty of chopped coriander.\n' +
      '4. Add lime juice and salt to taste, mixing well.\n' +
      '5. Serve at once with tortilla chips or in wraps.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '3 ripe' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan sausage rolls',
    servingsBase: 6,
    totalTimeMinutes: 45,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Squeeze the vegan sausage meat from its skins (or use a plant-based mince) and mix with the mustard, mixed herbs and black pepper.\n' +
      '2. Roll out the vegan puff pastry and cut into two long strips. Spoon the filling down the centre of each.\n' +
      '3. Brush one long edge with soya milk, fold the pastry over the filling and press to seal along the base.\n' +
      '4. Cut into short rolls, sit on a lined tray, brush with soya milk and snip a couple of vents in each.\n' +
      '5. Bake for 22–25 minutes until puffed and deep golden. Cool slightly before serving.',
    rawLines: [
      { rawName: 'Vegan sausage', rawMeasure: '6 (about 400g)' },
      { rawName: 'Puff pastry', rawMeasure: '320g (check vegan)' },
      { rawName: 'Soya milk', rawMeasure: '2 tbsp' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Mixed herbs', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced potato and pea samosas',
    servingsBase: 6,
    totalTimeMinutes: 60,
    course: 'Snack',
    cuisine: 'Indian',
    dietLabels: VEGAN,
    instructions:
      '1. Boil the diced potato until tender, then drain and lightly crush.\n' +
      '2. Fry the cumin and mustard seeds in the vegetable oil until they pop, then add the chopped onion and ginger garlic paste and soften.\n' +
      '3. Stir in the garam masala and turmeric, then fold through the potato and peas; season and cool.\n' +
      '4. Cut the filo pastry into strips, spoon filling onto each and fold into triangles, sealing with a dab of water.\n' +
      '5. Brush with oil and bake at 200°C (fan 180°C) for 20–25 minutes until crisp and golden.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp seeds' },
      { rawName: 'Mustard seeds', rawMeasure: '1/2 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Filo pastry', rawMeasure: '270g' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Onion bhajis',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Snack',
    cuisine: 'Indian',
    dietLabels: VEGAN,
    instructions:
      '1. Toss the thinly sliced onions with salt and leave for 10 minutes to soften, then squeeze out excess moisture.\n' +
      '2. Mix the gram flour with the turmeric, cumin, chilli powder and just enough cold water to make a thick, clinging batter.\n' +
      '3. Fold the onions through the batter with the chopped coriander.\n' +
      '4. Heat the vegetable oil and fry small clusters for 3–4 minutes, turning, until deep golden and crisp.\n' +
      '5. Drain on kitchen paper and serve hot with mango chutney.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '3' },
      { rawName: 'Gram flour', rawMeasure: '150g' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Mango chutney', rawMeasure: 'to serve' },
      { rawName: 'Vegetable oil', rawMeasure: '500ml, for frying' },
      { rawName: 'Salt', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Vegan Buddha bowl with tahini dressing',
    servingsBase: 2,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Roast the diced sweet potato and drained chickpeas with olive oil and smoked paprika for 25 minutes.\n' +
      '2. Cook the quinoa in the stock for 15 minutes, then fluff up.\n' +
      '3. Whisk the tahini with lemon juice, a little garlic and enough water to make a pourable dressing.\n' +
      '4. Arrange the quinoa, roasted sweet potato and chickpeas, shredded kale and sliced avocado in bowls.\n' +
      '5. Drizzle generously with the tahini dressing and scatter with sesame seeds.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '1 large' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Quinoa', rawMeasure: '150g' },
      { rawName: 'Kale', rawMeasure: '100g' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan Caesar-style salad with crispy chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'American',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Toss the drained chickpeas with olive oil, smoked paprika and salt, then roast for 25 minutes until crisp.\n' +
      '2. For the dressing, blend the cashews with the garlic, mustard, lemon juice, a little capers and enough water to make a creamy dressing.\n' +
      '3. Tear the lettuce into a large bowl and toss with the dressing.\n' +
      '4. Add the toasted bread croutons and most of the crispy chickpeas.\n' +
      '5. Season with black pepper, scatter the remaining chickpeas over and serve.',
    rawLines: [
      { rawName: 'Lettuce', rawMeasure: '2 romaine hearts' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cashews', rawMeasure: '60g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Bread', rawMeasure: '2 slices' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Breakfast & brunch ─────────────────────────────────────────────────────
  {
    title: 'Tofu scramble on toast',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Drain and crumble the tofu into a bowl, breaking it into curds with a fork.\n' +
      '2. Warm the olive oil in a pan and soften the sliced spring onion for a minute.\n' +
      '3. Add the crumbled tofu with the turmeric and a pinch of salt, and stir-fry for 4–5 minutes until hot and golden.\n' +
      '4. Stir through the chopped tomato and wilt for a minute.\n' +
      '5. Pile onto buttered toast and finish with black pepper and chives.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '300g firm' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Vegan butter', rawMeasure: 'for spreading' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan banana pancakes',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: VEGAN,
    instructions:
      '1. Mash the bananas in a bowl until smooth.\n' +
      '2. Whisk in the soya milk, then fold in the flour, baking powder and a pinch of salt to a thick batter.\n' +
      '3. Heat a little vegan butter in a non-stick pan over a medium heat.\n' +
      '4. Drop in spoonfuls of batter and cook for 2 minutes until bubbles form, then flip and cook for a further minute until golden.\n' +
      '5. Stack up and serve with golden syrup and fresh berries.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '2 ripe' },
      { rawName: 'Plain flour', rawMeasure: '200g' },
      { rawName: 'Soya milk', rawMeasure: '250ml' },
      { rawName: 'Baking powder', rawMeasure: '2 tsp' },
      { rawName: 'Golden syrup', rawMeasure: 'to serve' },
      { rawName: 'Blueberries', rawMeasure: '150g' },
      { rawName: 'Vegan butter', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Overnight oats with berries',
    servingsBase: 2,
    totalTimeMinutes: 5,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Stir the oats together with the almond milk in a bowl or jar.\n' +
      '2. Add the chia seeds and a little golden syrup, and mix well.\n' +
      '3. Cover and chill overnight, or for at least 4 hours, until thick and creamy.\n' +
      '4. In the morning, loosen with a splash more milk if needed.\n' +
      '5. Top with fresh berries and a scattering of flaked almonds to serve.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Almond milk', rawMeasure: '250ml' },
      { rawName: 'Chia seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Golden syrup', rawMeasure: '1 tbsp' },
      { rawName: 'Raspberries', rawMeasure: '100g' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Almonds', rawMeasure: '20g' },
    ],
  },
  {
    title: 'Porridge with banana and cinnamon',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Tip the oats into a pan with the soya milk and a pinch of salt.\n' +
      '2. Bring to a gentle simmer over a medium heat, stirring constantly.\n' +
      '3. Cook for 4–5 minutes until thick and creamy, loosening with a little water if needed.\n' +
      '4. Spoon into bowls and top with sliced banana.\n' +
      '5. Dust with cinnamon and drizzle with golden syrup to serve.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Soya milk', rawMeasure: '500ml' },
      { rawName: 'Banana', rawMeasure: '1' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Golden syrup', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Vegan baked beans on toast',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the finely chopped onion in the olive oil for 5 minutes.\n' +
      '2. Stir in the garlic and smoked paprika, then add the passata and a pinch of sugar.\n' +
      '3. Tip in the drained cannellini beans (or use tinned baked beans for speed) and simmer for 8–10 minutes until thick. Season.\n' +
      '4. Toast the bread and spread with a little vegan butter.\n' +
      '5. Spoon the beans over the toast and serve hot.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Passata', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Vegan butter', rawMeasure: 'for spreading' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Puddings & bakes ───────────────────────────────────────────────────────
  {
    title: 'Vegan chocolate cake',
    servingsBase: 8,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line two round tins. Whisk the soya milk with the vinegar and leave for 5 minutes to curdle into a buttermilk.\n' +
      '2. Sift the flour, cocoa powder, sugar, bicarbonate of soda and a pinch of salt into a bowl.\n' +
      '3. Whisk the vegetable oil and vanilla into the soya milk, then stir into the dry ingredients until just smooth.\n' +
      '4. Divide between the tins and bake for 25–30 minutes until risen and a skewer comes out clean. Cool completely.\n' +
      '5. Beat the icing sugar with the vegan butter and a little cocoa into a fluffy icing, then sandwich and cover the cake.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '300g' },
      { rawName: 'Cocoa powder', rawMeasure: '60g' },
      { rawName: 'Caster sugar', rawMeasure: '300g' },
      { rawName: 'Soya milk', rawMeasure: '350ml' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1.5 tsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '150ml' },
      { rawName: 'Icing sugar', rawMeasure: '300g' },
      { rawName: 'Vegan butter', rawMeasure: '150g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Apple and blackberry crumble (vegan)',
    servingsBase: 6,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Peel, core and slice the apples and tip into a baking dish with the blackberries and most of the sugar.\n' +
      '2. For the crumble, rub the vegan butter into the flour until it resembles breadcrumbs, then stir in the oats and the remaining sugar.\n' +
      '3. Scatter the crumble evenly over the fruit.\n' +
      '4. Bake for 35–40 minutes until the topping is golden and the fruit bubbles at the edges.\n' +
      '5. Serve warm with vegan custard or a scoop of dairy-free ice cream.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '4 (about 600g)' },
      { rawName: 'Blackberries', rawMeasure: '200g' },
      { rawName: 'Plain flour', rawMeasure: '150g' },
      { rawName: 'Oats', rawMeasure: '50g' },
      { rawName: 'Caster sugar', rawMeasure: '120g' },
      { rawName: 'Vegan butter', rawMeasure: '100g' },
    ],
  },
  {
    title: 'Vegan flapjacks',
    servingsBase: 12,
    totalTimeMinutes: 35,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a square tin.\n' +
      '2. Gently melt the vegan butter, golden syrup and sugar together in a pan, stirring until smooth.\n' +
      '3. Stir in the oats until fully coated.\n' +
      '4. Press firmly into the tin and bake for 20–25 minutes until golden at the edges.\n' +
      '5. Cool in the tin before cutting into squares, while still slightly soft in the middle.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '300g' },
      { rawName: 'Vegan butter', rawMeasure: '150g' },
      { rawName: 'Golden syrup', rawMeasure: '3 tbsp' },
      { rawName: 'Brown sugar', rawMeasure: '100g' },
    ],
  },
  {
    title: 'Vegan banana bread',
    servingsBase: 8,
    totalTimeMinutes: 70,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a loaf tin. Mash the bananas in a large bowl until smooth.\n' +
      '2. Stir in the sugar, vegetable oil and soya milk until combined.\n' +
      '3. Fold in the flour, baking powder, bicarbonate of soda, cinnamon and a pinch of salt until just mixed.\n' +
      '4. Pour into the tin and scatter over the chopped walnuts.\n' +
      '5. Bake for 50–55 minutes until risen and a skewer comes out clean. Cool in the tin before slicing.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '3 very ripe' },
      { rawName: 'Plain flour', rawMeasure: '250g' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Soya milk', rawMeasure: '100ml' },
      { rawName: 'Vegetable oil', rawMeasure: '100ml' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1/2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Walnuts', rawMeasure: '60g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Chocolate avocado mousse',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Halve the avocados, remove the stones and scoop the flesh into a food processor.\n' +
      '2. Add the cocoa powder, golden syrup, vanilla and a pinch of salt.\n' +
      '3. Blend until completely smooth, scraping down the sides, loosening with a little almond milk.\n' +
      '4. Taste and add more syrup if you like it sweeter.\n' +
      '5. Spoon into glasses and chill for an hour, then top with fresh raspberries to serve.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2 ripe' },
      { rawName: 'Cocoa powder', rawMeasure: '4 tbsp' },
      { rawName: 'Golden syrup', rawMeasure: '4 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Almond milk', rawMeasure: '3 tbsp' },
      { rawName: 'Raspberries', rawMeasure: '100g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Vegan rice pudding',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 150°C (fan 130°C). Tip the pudding rice and sugar into an ovenproof dish.\n' +
      '2. Pour over the coconut milk and almond milk and stir well.\n' +
      '3. Dot the top with a little vegan butter and grate over some nutmeg.\n' +
      '4. Bake for about 1 hour 30 minutes, stirring once after 30 minutes, until thick and creamy with a golden skin.\n' +
      '5. Serve warm with a spoonful of jam.',
    rawLines: [
      { rawName: 'Pudding rice', rawMeasure: '120g' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Almond milk', rawMeasure: '400ml' },
      { rawName: 'Caster sugar', rawMeasure: '60g' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Vegan butter', rawMeasure: '15g' },
      { rawName: 'Jam', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Vegan chocolate chip cookies',
    servingsBase: 12,
    totalTimeMinutes: 30,
    course: 'Dessert',
    cuisine: 'American',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line two baking trays.\n' +
      '2. Beat the vegan butter with both sugars until light and fluffy, then beat in the soya milk and vanilla.\n' +
      '3. Fold in the flour, bicarbonate of soda and a pinch of salt, then stir through the chopped plain chocolate.\n' +
      '4. Roll the dough into balls, space well apart on the trays and flatten slightly.\n' +
      '5. Bake for 11–13 minutes until golden at the edges but still soft in the middle. Cool on the tray to firm up.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '250g' },
      { rawName: 'Plain chocolate', rawMeasure: '150g' },
      { rawName: 'Vegan butter', rawMeasure: '120g' },
      { rawName: 'Brown sugar', rawMeasure: '100g' },
      { rawName: 'Caster sugar', rawMeasure: '50g' },
      { rawName: 'Soya milk', rawMeasure: '2 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1/2 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Coconut and mango chia pudding',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Whisk the coconut milk with the chia seeds and golden syrup in a bowl.\n' +
      '2. Leave to stand for 10 minutes, then whisk again to break up any clumps.\n' +
      '3. Cover and chill for at least 3 hours, or overnight, until set and thick.\n' +
      '4. Stir well and spoon into glasses.\n' +
      '5. Top with diced fresh mango and a scattering of desiccated coconut to serve.',
    rawLines: [
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Chia seeds', rawMeasure: '6 tbsp' },
      { rawName: 'Golden syrup', rawMeasure: '2 tbsp' },
      { rawName: 'Mango', rawMeasure: '1' },
      { rawName: 'Desiccated coconut', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Vegan scones with jam',
    servingsBase: 8,
    totalTimeMinutes: 30,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C) and line a tray. Whisk the soya milk with the lemon juice and leave to curdle for 5 minutes.\n' +
      '2. Rub the vegan butter into the flour, baking powder and sugar until it resembles breadcrumbs.\n' +
      '3. Stir in most of the soya milk mixture and bring together quickly into a soft dough — do not overwork.\n' +
      '4. Pat out to 2cm thick, cut out rounds and sit on the tray. Brush the tops with the remaining soya milk.\n' +
      '5. Bake for 12–14 minutes until risen and golden. Cool a little and serve split with jam.',
    rawLines: [
      { rawName: 'Self-raising flour', rawMeasure: '350g' },
      { rawName: 'Vegan butter', rawMeasure: '85g' },
      { rawName: 'Caster sugar', rawMeasure: '40g' },
      { rawName: 'Soya milk', rawMeasure: '180ml' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Jam', rawMeasure: 'to serve' },
    ],
  },

  // ── More mains for breadth ─────────────────────────────────────────────────
  {
    title: 'Mujadara — spiced lentils and rice with crispy onions',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Rinse the brown lentils and simmer in plenty of water for 15 minutes until almost tender, then drain.\n' +
      '2. Meanwhile fry the thinly sliced onions slowly in the olive oil until deep brown and crisp; lift half out to drain.\n' +
      '3. Add the cumin and the rinsed rice to the remaining onions in the pan and stir to coat.\n' +
      '4. Add the lentils and the stock, bring to the boil, then cover and cook gently for 15 minutes until tender. Rest, covered, for 10 minutes.\n' +
      '5. Fork through, season, and serve topped with the crispy onions and chopped parsley.',
    rawLines: [
      { rawName: 'Brown lentils', rawMeasure: '200g' },
      { rawName: 'Basmati rice', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '3' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan shakshuka with chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion and pepper in the olive oil for 8 minutes over a medium heat.\n' +
      '2. Stir in the garlic, cumin and smoked paprika and cook for a minute.\n' +
      '3. Add the chopped tomatoes and the drained chickpeas and simmer for 12–15 minutes until thick and rich.\n' +
      '4. Make a few wells and spoon in crumbled tofu seasoned with a pinch of turmeric, warming through for a couple of minutes.\n' +
      '5. Season, scatter with coriander and serve with warm flatbread.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tofu', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (800g)' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 pinch' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan dauphinoise-style potatoes',
    servingsBase: 4,
    totalTimeMinutes: 80,
    course: 'Side',
    cuisine: 'French',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and rub a baking dish with a cut clove of garlic.\n' +
      '2. Warm the soya milk and coconut milk in a pan with the crushed garlic and thyme; season well.\n' +
      '3. Layer the thinly sliced potatoes in the dish, pouring over a little of the infused milk between layers.\n' +
      '4. Pour over the remaining milk, dot with vegan butter and cover with foil.\n' +
      '5. Bake covered for 50 minutes, then uncover and bake for 20–25 minutes until tender and golden on top.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '1kg' },
      { rawName: 'Soya milk', rawMeasure: '300ml' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Vegan butter', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan bangers and mash with onion gravy',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Fry the vegan sausages gently in a little vegetable oil, turning, for 12–15 minutes until browned all over.\n' +
      '2. Meanwhile boil the potatoes until tender, drain and mash with the vegan butter and a splash of soya milk; season.\n' +
      '3. For the gravy, soften the sliced onions in the same pan until deep gold, stir in the flour, then gradually add the stock and a dash of soy sauce.\n' +
      '4. Simmer until thickened and glossy, then season.\n' +
      '5. Pile the mash onto plates, top with the sausages and pour over plenty of onion gravy.',
    rawLines: [
      { rawName: 'Vegan sausage', rawMeasure: '8' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Vegan butter', rawMeasure: '40g' },
      { rawName: 'Soya milk', rawMeasure: '60ml' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Crispy tofu katsu curry',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: VEGAN,
    instructions:
      '1. For the sauce, soften the chopped onion and carrot in a little oil, then stir in the garlic, ginger and curry powder.\n' +
      '2. Sprinkle in the flour, then gradually add the stock and coconut milk and simmer for 15 minutes; blend smooth and season with soy sauce.\n' +
      '3. Press the tofu and cut into thick slabs. Dust in flour, dip in a little soya milk, then coat in breadcrumbs.\n' +
      '4. Shallow-fry the tofu in vegetable oil for 2–3 minutes each side until deep golden and crisp.\n' +
      '5. Serve the tofu sliced over rice with the katsu sauce poured around.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g firm' },
      { rawName: 'Breadcrumbs', rawMeasure: '100g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Soya milk', rawMeasure: '100ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mapo-style tofu',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: VEGAN,
    instructions:
      '1. Cut the silken tofu into cubes and set aside gently.\n' +
      '2. Fry the finely chopped mushrooms in the sesame oil over a high heat until browned and dry — they stand in for the usual mince.\n' +
      '3. Add the garlic, ginger and chilli bean paste and stir-fry for a minute until fragrant and deep red.\n' +
      '4. Pour in the stock and soy sauce, slip in the tofu and simmer gently for 5 minutes, shaking the pan rather than stirring.\n' +
      '5. Thicken with the cornflour slaked in water, scatter with spring onion and serve with rice.',
    rawLines: [
      { rawName: 'Silken tofu', rawMeasure: '400g' },
      { rawName: 'Mushroom', rawMeasure: '200g' },
      { rawName: 'Chilli bean paste', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 250ml' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Smoky tempeh and vegetable skewers',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Cut the tempeh into cubes and steam or simmer for 5 minutes to soften, then drain.\n' +
      '2. Whisk the soy sauce, smoked paprika, garlic and olive oil into a marinade and toss the tempeh through it for 15 minutes.\n' +
      '3. Thread the tempeh onto skewers with the pepper, courgette and red onion chunks.\n' +
      '4. Grill or griddle, turning, for 10–12 minutes until charred and tender, brushing with any leftover marinade.\n' +
      '5. Serve with rice or flatbread and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Tempeh', rawMeasure: '300g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan coronation chickpea salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Lightly crush the drained chickpeas in a bowl, leaving plenty whole.\n' +
      '2. Mix the vegan mayonnaise with the curry powder, mango chutney and a squeeze of lemon.\n' +
      '3. Fold the dressing through the chickpeas with the sultanas until well coated.\n' +
      '4. Stir through the sliced spring onion and season to taste.\n' +
      '5. Scatter with toasted flaked almonds and serve on salad leaves or in a sandwich.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (800g)' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp vegan' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Mango chutney', rawMeasure: '2 tbsp' },
      { rawName: 'Sultanas', rawMeasure: '40g' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Almonds', rawMeasure: '30g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan cauliflower cheese',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Break the cauliflower into florets and boil for 5–6 minutes until just tender; drain well.\n' +
      '2. Melt the vegan butter in a pan, stir in the flour and cook for a minute, then gradually whisk in the soya milk to a smooth sauce.\n' +
      '3. Off the heat, stir in the ground cashews, mustard and a pinch of turmeric for colour; season until savoury and rich.\n' +
      '4. Tip the cauliflower into a baking dish, pour over the sauce and scatter with breadcrumbs.\n' +
      '5. Bake for 20–25 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large' },
      { rawName: 'Soya milk', rawMeasure: '500ml' },
      { rawName: 'Cashews', rawMeasure: '60g' },
      { rawName: 'Vegan butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 pinch' },
      { rawName: 'Breadcrumbs', rawMeasure: '40g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan Greek-style salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: VEGAN,
    instructions:
      '1. Cut the tomatoes into chunks and the cucumber into thick half-moons, and tip into a large bowl.\n' +
      '2. Add the sliced red onion, the olives and the pepper cut into strips.\n' +
      '3. Crumble over cubes of marinated tofu in place of the usual feta.\n' +
      '4. Whisk the olive oil with the lemon juice and dried oregano, then pour over and toss gently.\n' +
      '5. Season with black pepper and serve with warm pitta.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 green' },
      { rawName: 'Olives', rawMeasure: '100g' },
      { rawName: 'Marinated tofu', rawMeasure: '200g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan vegetable korma',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion in the vegetable oil for 8 minutes, then stir in the ginger garlic paste and garam masala.\n' +
      '2. Add the diced potato, cauliflower florets and carrot and stir to coat in the spices.\n' +
      '3. Pour in the coconut milk and a splash of water, bring to a simmer and cook for 20 minutes until the vegetables are tender.\n' +
      '4. Stir in the ground almonds and the peas and simmer for a further 5 minutes until the sauce is creamy.\n' +
      '5. Season, finish with coriander and serve with rice or naan.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '300g' },
      { rawName: 'Cauliflower', rawMeasure: '1/2 head' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Almonds', rawMeasure: '50g' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan fish-free fingers with mushy peas',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Press the tofu well and cut into thick fingers. For a seaside flavour, toss them with a little crumbled nori or seasoning if you have it.\n' +
      '2. Dust the tofu fingers in flour, dip in a little soya milk, then coat thoroughly in breadcrumbs.\n' +
      '3. Shallow-fry in the vegetable oil for 2–3 minutes each side until crisp and golden; drain and salt.\n' +
      '4. Meanwhile simmer the peas until tender, then crush roughly with a little vegan butter, mint and seasoning.\n' +
      '5. Serve the crispy fingers with the mushy peas and a wedge of lemon.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g firm' },
      { rawName: 'Breadcrumbs', rawMeasure: '120g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Soya milk', rawMeasure: '100ml' },
      { rawName: 'Peas', rawMeasure: '300g' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Vegan butter', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
]
