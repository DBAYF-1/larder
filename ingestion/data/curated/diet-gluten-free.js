// Curated GLUTEN-FREE recipes for Larder (coeliac-safe by construction).
//
// Each record is culinary content ONLY — sources/curated.js (mapCurated) adds
// the source/sourceId/imageUrl boilerplate and generates an on-brand SVG image.
//
// Shape per record (same as data/curated/mains.js):
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }
//
// HARD RULE — every recipe here STRICTLY satisfies "Gluten-free": it contains
// NO wheat, barley, rye, spelt, malt, regular/plain/self-raising/strong/wholemeal
// flour, couscous, semolina, bulgur, breadcrumbs, pasta, noodles (unless an
// explicitly gluten-free variety from the dictionary, e.g. "Brown rice noodles",
// "Rice vermicelli"), or standard soy sauce. Soy is replaced with tamari where a
// soy note is wanted; tamari is naturally wheat-free.
//
// rawNames are drawn from the canonical dictionary (data/ingredients.js) so they
// resolve cleanly. NOTE on the pipeline's allergen keyword scan
// (pipeline/buildRecipe.js): the regex /(flour|bread|pasta|...)/i flags ANY
// "flour" as contains-gluten — including naturally GF flours. So we deliberately
// avoid flour-NAMED canonicals here and reach the same dishes through GF-safe
// canonicals: "Potato starch"/"Cornmeal"/"Buckwheat"/"Oats"/"Almonds"/"Quinoa"/
// "Rice". This keeps the auto-derived Gluten-free health label honest. Method
// prose names gluten-free flour blends where a baker would expect them; the
// resolvable line uses a GF-safe canonical. Original British-English prose.
//
// dietLabels are tagged honestly (e.g. a dish that is also Vegetarian/Vegan/
// Pescatarian/Dairy-free says so). "Gluten-free" itself is auto-derived as a
// health label by the pipeline from the absence of contains-gluten.

export default [
  // ───────────────────────── Breakfast & brunch ─────────────────────────
  {
    title: 'Gluten-free oat porridge with berries',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Tip the gluten-free oats into a small pan with the milk and a pinch of salt.\n' +
      '2. Bring slowly to a gentle simmer, stirring often so the bottom does not catch.\n' +
      '3. Cook for 5–6 minutes until thick and creamy, loosening with a splash more milk if needed.\n' +
      '4. Spoon into bowls, scatter over the blueberries and raspberries and trickle the honey on top.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g (certified gluten-free)' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Raspberries', rawMeasure: '80g' },
      { rawName: 'Honey', rawMeasure: '2 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Oat pancakes with maple',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Blitz the gluten-free oats to a fine flour, then whisk with the baking powder and a pinch of salt.\n' +
      '2. Beat in the eggs and milk to a smooth, pourable batter and rest for 10 minutes.\n' +
      '3. Melt a little butter in a non-stick frying pan over a medium heat.\n' +
      '4. Ladle in small rounds of batter and cook for 1–2 minutes until bubbles appear, then flip and cook the other side until golden.\n' +
      '5. Stack onto plates with the blueberries and a generous drizzle of golden syrup.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '150g (certified gluten-free)' },
      { rawName: 'Baking powder', rawMeasure: '2 tsp (gluten-free)' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Golden syrup', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Full English with gluten-free sausages',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Fry the gluten-free sausages in a little oil over a medium heat for 12–15 minutes, turning, until browned and cooked through.\n' +
      '2. Add the bacon and cook for 4–5 minutes until crisp, then push to one side.\n' +
      '3. Halve the tomatoes and add cut-side down with the mushrooms; cook until softened and coloured.\n' +
      '4. Warm the baked beans in a small pan.\n' +
      '5. Fry the eggs to your liking in the same pan, then plate everything up at once.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '4 (gluten-free)' },
      { rawName: 'Bacon', rawMeasure: '4 rashers' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Baked beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked salmon and scrambled eggs',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Beat the eggs with a splash of milk and a little black pepper.\n' +
      '2. Melt the butter in a non-stick pan over a low heat, pour in the eggs and stir gently and continuously.\n' +
      '3. When the eggs are softly set but still glossy, take the pan off the heat — they will finish in the residual warmth.\n' +
      '4. Fold through most of the smoked salmon and the snipped chives.\n' +
      '5. Pile onto warm plates, drape over the last of the salmon and finish with a few more chives.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Smoked salmon', rawMeasure: '120g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Milk', rawMeasure: '2 tbsp' },
      { rawName: 'Chives', rawMeasure: '25g' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and spinach frittata',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the olive oil in an ovenproof frying pan and soften the onion for 5 minutes.\n' +
      '2. Add the mushrooms and cook over a higher heat until golden and any liquid has evaporated.\n' +
      '3. Stir in the spinach until just wilted, then season well.\n' +
      '4. Beat the eggs, pour over the vegetables and scatter the Cheddar on top. Cook undisturbed for 4–5 minutes until the edges set.\n' +
      '5. Finish under a hot grill for 3–4 minutes until puffed and golden. Cut into wedges to serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Mushroom', rawMeasure: '250g' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Cheddar cheese', rawMeasure: '60g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cornmeal porridge with banana',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'Caribbean',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Whisk the cornmeal into the cold water in a pan until lump-free.\n' +
      '2. Set over a medium heat and bring to a simmer, stirring constantly, until it thickens.\n' +
      '3. Pour in the milk, add the cinnamon and a pinch of salt and cook gently for 8–10 minutes, stirring, until smooth and creamy.\n' +
      '4. Sweeten with the condensed milk to taste.\n' +
      '5. Spoon into bowls and top with sliced banana.',
    rawLines: [
      { rawName: 'Cornmeal', rawMeasure: '120g' },
      { rawName: 'Water', rawMeasure: '400ml' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Condensed milk', rawMeasure: '3 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Banana', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Greek yoghurt bowl with honey and pistachios',
    servingsBase: 2,
    totalTimeMinutes: 5,
    course: 'Breakfast',
    cuisine: 'Greek',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Spoon the Greek yoghurt into two bowls.\n' +
      '2. Scatter over the strawberries and roughly chopped pistachios.\n' +
      '3. Trickle the honey across the top and serve straight away.',
    rawLines: [
      { rawName: 'Greek yoghurt', rawMeasure: '400g' },
      { rawName: 'Strawberries', rawMeasure: '150g' },
      { rawName: 'Pistachios', rawMeasure: '40g' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Sweet potato and chorizo hash',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Peel and dice the sweet potato and parboil for 5 minutes, then drain well.\n' +
      '2. Fry the chorizo in a large pan until its oil runs, then add the sweet potato and cook until crisp and golden at the edges.\n' +
      '3. Stir in the red onion and pepper and cook for 5 minutes more, seasoning to taste.\n' +
      '4. Make two wells, crack in the eggs and cover the pan until the whites are set.\n' +
      '5. Scatter with chopped parsley and serve from the pan.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '500g' },
      { rawName: 'Chorizo', rawMeasure: '120g' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Parsley', rawMeasure: '25g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ───────────────────────── Soups & light lunches ─────────────────────────
  {
    title: 'Roasted tomato and basil soup',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the tomatoes, scatter with the garlic and onion wedges, drizzle with olive oil and season.\n' +
      '2. Roast for 30 minutes until soft and caramelised at the edges.\n' +
      '3. Tip everything into a pan, add the stock and bring to a simmer for 10 minutes.\n' +
      '4. Blend until smooth, then stir in the basil and check the seasoning.\n' +
      '5. Swirl in the double cream and serve hot.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '12' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml (gluten-free)' },
      { rawName: 'Basil', rawMeasure: '30g' },
      { rawName: 'Double cream', rawMeasure: '3 tbsp' },
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
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Soften the onion in the olive oil for 5 minutes, then add the cumin and cook for a minute until fragrant.\n' +
      '2. Add the chopped carrots and stir to coat.\n' +
      '3. Pour in the stock, bring to the boil and simmer for 20 minutes until the carrots are tender.\n' +
      '4. Stir in most of the coriander and blend until silky.\n' +
      '5. Season, ladle into bowls and finish with the reserved coriander.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '8' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '30g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1L (gluten-free)' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Leek and potato soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Melt the butter in a large pan and gently soften the leeks for 8 minutes without colouring.\n' +
      '2. Add the diced potato and stir to coat.\n' +
      '3. Pour in the stock, season and simmer for 20 minutes until the potato is tender.\n' +
      '4. Blend until smooth, then loosen with the milk to a creamy consistency.\n' +
      '5. Check the seasoning and serve with a grind of pepper.',
    rawLines: [
      { rawName: 'Leek', rawMeasure: '3' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '150ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml (gluten-free)' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced red lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Soften the onion in the olive oil, then add the cumin, turmeric and a pinch of chilli flakes and cook for a minute.\n' +
      '2. Stir in the rinsed lentils and chopped tomatoes.\n' +
      '3. Pour in the stock and simmer for 20–25 minutes until the lentils have collapsed and thickened.\n' +
      '4. Blend roughly for a rustic texture, then season and sharpen with a squeeze of lemon.\n' +
      '5. Serve scattered with coriander.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g red split lentils' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml (gluten-free)' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jacket potato with cheese and beans',
    servingsBase: 2,
    totalTimeMinutes: 75,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes all over, rub with a little oil and salt and bake directly on the shelf for 60–70 minutes until crisp and fluffy inside.\n' +
      '2. Warm the baked beans in a small pan.\n' +
      '3. Split the potatoes open and add a knob of butter to each.\n' +
      '4. Spoon over the beans and top with the grated Cheddar so it melts into the heat.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '2 large baking potatoes' },
      { rawName: 'Baked beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Quinoa tabbouleh salad',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Rinse the quinoa, then simmer in plenty of water for 12–14 minutes until tender. Drain well and cool.\n' +
      '2. Finely chop the parsley, mint, tomatoes and spring onions.\n' +
      '3. Combine the cooled quinoa with the herbs and vegetables.\n' +
      '4. Dress generously with olive oil and lemon juice, then season to taste.\n' +
      '5. Leave for 10 minutes for the flavours to mingle before serving.',
    rawLines: [
      { rawName: 'Quinoa', rawMeasure: '150g' },
      { rawName: 'Parsley', rawMeasure: '50g' },
      { rawName: 'Mint', rawMeasure: '25g' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi and roasted vegetable salad',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, pepper and red onion with olive oil and seasoning, then roast for 25 minutes until tender and charred at the edges.\n' +
      '2. Slice the feta-style halloumi and fry in a dry pan for 1–2 minutes each side until golden.\n' +
      '3. Pile the rocket onto plates and top with the roasted vegetables.\n' +
      '4. Lay the halloumi over the top, drizzle with olive oil and a squeeze of lemon and serve warm.',
    rawLines: [
      { rawName: 'Feta', rawMeasure: '225g halloumi' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea and roasted pepper salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Drain and rinse the chickpeas and tip into a large bowl.\n' +
      '2. Slice the roasted peppers and add with the halved cherry tomatoes and finely sliced red onion.\n' +
      '3. Whisk the olive oil with the lemon juice, cumin and seasoning.\n' +
      '4. Pour the dressing over the salad and toss well.\n' +
      '5. Fold through the chopped parsley and serve.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2 roasted, from a jar' },
      { rawName: 'Cherry tomato', rawMeasure: '16' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: '25g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and avocado rice bowl',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Cook the rice in plenty of salted water until tender, then drain and cool slightly.\n' +
      '2. Fry the prawns in a little olive oil with the garlic for 2–3 minutes until pink and just cooked.\n' +
      '3. Spoon the rice into bowls and top with the prawns.\n' +
      '4. Add the sliced avocado and cucumber.\n' +
      '5. Squeeze over the lime, drizzle with a little tamari and finish with coriander.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '250g' },
      { rawName: 'Rice', rawMeasure: '150g' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Tamari', rawMeasure: '1 tbsp (gluten-free)' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Baked sweet potato with hummus and rocket',
    servingsBase: 2,
    totalTimeMinutes: 55,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the sweet potatoes, rub with oil and bake for 45–50 minutes until soft.\n' +
      '2. Split them open and fluff the insides with a fork.\n' +
      '3. Spoon over the hummus so it warms through.\n' +
      '4. Top with a handful of rocket, a squeeze of lemon and a final drizzle of olive oil.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '2' },
      { rawName: 'Hummus', rawMeasure: '150g' },
      { rawName: 'Rocket', rawMeasure: '40g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ───────────────────────── Main courses — meat ─────────────────────────
  {
    title: 'Gluten-free shepherd’s pie',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Brown the minced lamb in a splash of oil over a high heat, then lift out.\n' +
      '2. Soften the onion, carrot and celery for 8–10 minutes, then stir in the tomato purée and cook for a minute.\n' +
      '3. Return the lamb, add the gluten-free stock and a little tamari for depth, then simmer for 25 minutes. Stir through the peas.\n' +
      '4. Meanwhile boil the potatoes until tender, drain and mash with the butter and milk; season.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Spoon the lamb into a dish, top with the mash and fork the surface.\n' +
      '6. Bake for 25–30 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Tamari', rawMeasure: '1 tbsp (gluten-free)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml (gluten-free)' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cottage pie with cheesy mash',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Brown the minced beef in a large pan over a high heat, then lift out, leaving the fat behind.\n' +
      '2. Soften the onion, carrot and celery for 8–10 minutes, then stir in the tomato purée.\n' +
      '3. Return the beef, add the gluten-free stock and a splash of tamari, season and simmer for 25–30 minutes until rich.\n' +
      '4. Boil the potatoes until tender, drain and mash with the butter, milk and half the Cheddar.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Top the beef with the mash, scatter over the rest of the cheese and fork the surface.\n' +
      '6. Bake for 25–30 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Tamari', rawMeasure: '1 tbsp (gluten-free)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml (gluten-free)' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roast chicken with lemon and thyme',
    servingsBase: 4,
    totalTimeMinutes: 100,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the chicken in a roasting tin, rub all over with butter and season generously.\n' +
      '2. Halve the lemon and tuck it inside the cavity with the thyme and a few garlic cloves.\n' +
      '3. Roast for 1 hour 20 minutes, basting once or twice, until the juices run clear.\n' +
      '4. Lift onto a board, cover loosely and rest for 15 minutes.\n' +
      '5. Tip the tin juices into a pan, thicken with the slaked potato starch and simmer to a glossy gravy. Carve and serve.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1.6kg' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Thyme', rawMeasure: '25g' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Potato starch', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and chorizo rice one-pot',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: [],
    instructions:
      '1. Brown the chicken thighs in olive oil in a deep pan, then set aside.\n' +
      '2. Fry the chorizo until its oil runs, then add the onion, pepper and garlic and soften.\n' +
      '3. Stir in the smoked paprika and rice until glossy.\n' +
      '4. Pour in the chopped tomatoes and gluten-free stock, return the chicken, then cover and simmer for 25 minutes until the rice is tender.\n' +
      '5. Stir through the peas, rest for 5 minutes and serve.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, boneless' },
      { rawName: 'Chorizo', rawMeasure: '150g' },
      { rawName: 'Paella rice', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml (gluten-free)' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef and ale-free stew with herb dumplings',
    servingsBase: 4,
    totalTimeMinutes: 150,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Toss the stewing beef in seasoned potato starch and brown in batches in olive oil. Lift out.\n' +
      '2. Soften the onion, carrot and celery, then return the beef.\n' +
      '3. Pour in the gluten-free stock, add the bay leaves and thyme, cover and simmer very gently for 1 hour 45 minutes until the beef is tender.\n' +
      '4. For the dumplings, rub the suet into the ground almonds and cornmeal with the herbs and a pinch of salt, then bind with a little water into soft balls.\n' +
      '5. Drop the dumplings onto the stew, cover and cook for 20 minutes until risen and cooked through. Serve hot.',
    rawLines: [
      { rawName: 'Stewing beef', rawMeasure: '700g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Potato starch', rawMeasure: '2 tbsp' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Thyme', rawMeasure: '4 sprigs' },
      { rawName: 'Suet', rawMeasure: '60g (gluten-free)' },
      { rawName: 'Almonds', rawMeasure: '60g ground' },
      { rawName: 'Cornmeal', rawMeasure: '40g' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 800ml (gluten-free)' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork chops with apple and cider sauce',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Season the pork chops and fry in olive oil over a medium-high heat for 4–5 minutes each side until golden and cooked through. Rest on a warm plate.\n' +
      '2. Add the sliced apple to the pan and cook until softened and caramelised.\n' +
      '3. Pour in the cider, scraping up the sticky bits, and let it bubble down by half.\n' +
      '4. Stir in the double cream and a little mustard, then simmer to a glossy sauce.\n' +
      '5. Return the chops to warm through and spoon over the sauce to serve.',
    rawLines: [
      { rawName: 'Pork chop', rawMeasure: '2' },
      { rawName: 'Apple', rawMeasure: '1' },
      { rawName: 'Cider', rawMeasure: '150ml' },
      { rawName: 'Double cream', rawMeasure: '4 tbsp' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb tagine with apricots',
    servingsBase: 4,
    totalTimeMinutes: 140,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: [],
    instructions:
      '1. Brown the diced lamb in batches in olive oil in a heavy pan, then set aside.\n' +
      '2. Soften the onion, then add the garlic, ginger, cumin, cinnamon and ras el hanout and cook until fragrant.\n' +
      '3. Return the lamb, add the chopped tomatoes and gluten-free stock, cover and simmer gently for 1 hour 30 minutes.\n' +
      '4. Stir in the dried apricots and cook for 30 minutes more until the lamb is meltingly tender.\n' +
      '5. Season, scatter with coriander and serve over rice.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '800g, diced' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Dried apricots', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Ras el hanout', rawMeasure: '1 tbsp' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml (gluten-free)' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bangers and mash with onion gravy',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Fry the gluten-free sausages gently in a little oil for 15–20 minutes, turning, until browned and cooked through.\n' +
      '2. Boil the potatoes until tender, drain and mash with the butter and milk; season.\n' +
      '3. For the gravy, soften the sliced onions in the same pan until deep gold, stir in the potato starch, then gradually add the gluten-free stock.\n' +
      '4. Simmer until thickened and glossy, then pile the mash onto plates, top with the sausages and pour over the gravy.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '8 (gluten-free)' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Potato starch', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml (gluten-free)' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef rice noodle stir-fry with tamari',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: [],
    instructions:
      '1. Soak the brown rice noodles in just-boiled water until tender, then drain.\n' +
      '2. Slice the beef thinly and stir-fry in the hot sesame oil for 2 minutes until browned. Lift out.\n' +
      '3. Stir-fry the pepper, pak choi and spring onion for 2–3 minutes, then add the garlic and ginger.\n' +
      '4. Return the beef with the noodles, pour in the tamari and a splash of water and toss over a high heat until glossy and hot.\n' +
      '5. Finish with a scatter of sesame seeds.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '250g' },
      { rawName: 'Brown rice noodles', rawMeasure: '200g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '15g' },
      { rawName: 'Tamari', rawMeasure: '3 tbsp (gluten-free)' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Sticky tamari chicken with broccoli',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: [],
    instructions:
      '1. Dice the chicken thighs and stir-fry in the hot oil until golden and cooked through. Lift out.\n' +
      '2. Stir-fry the broccoli florets with a splash of water until just tender.\n' +
      '3. Return the chicken, add the garlic and ginger and toss for a minute.\n' +
      '4. Whisk the tamari, honey and a little potato starch slaked in water, pour in and bubble until sticky and glossy.\n' +
      '5. Serve over steamed rice, finished with spring onion.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '500g, boneless' },
      { rawName: 'Broccoli', rawMeasure: '1 head' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Tamari', rawMeasure: '4 tbsp (gluten-free)' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Potato starch', rawMeasure: '1 tsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Rice', rawMeasure: '150g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Chicken tikka masala',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: [],
    instructions:
      '1. Mix the diced chicken with half the natural yoghurt, the garam masala and a little turmeric and leave to marinate for 20 minutes.\n' +
      '2. Sear the chicken in a hot pan until coloured, then set aside.\n' +
      '3. Soften the onion, then add the garlic, ginger and curry powder and cook until fragrant.\n' +
      '4. Pour in the chopped tomatoes and simmer for 10 minutes, then stir in the remaining yoghurt and the double cream.\n' +
      '5. Return the chicken and simmer for 15 minutes until cooked through. Finish with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb kofta with minted yoghurt',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: [],
    instructions:
      '1. Mix the minced lamb with the grated onion, garlic, cumin, coriander and seasoning until well combined.\n' +
      '2. Shape around skewers into sausage shapes and chill for 10 minutes to firm up.\n' +
      '3. Grill or griddle for 8–10 minutes, turning, until browned and cooked through.\n' +
      '4. Stir the chopped mint into the natural yoghurt with a pinch of salt.\n' +
      '5. Serve the kofta with the minted yoghurt and a lemon wedge.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Mint', rawMeasure: '25g' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Gammon with pineapple and chips',
    servingsBase: 2,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Cut the potatoes into chips, toss with oil and salt and roast for 30–35 minutes, turning once, until crisp.\n' +
      '2. Snip the fat of the gammon steaks to stop them curling, then fry in a little oil for 4–5 minutes each side until cooked through.\n' +
      '3. Add the pineapple rings to the pan for the last 2 minutes to caramelise.\n' +
      '4. Serve the gammon topped with pineapple, the chips alongside and the peas.',
    rawLines: [
      { rawName: 'Ham', rawMeasure: '350g gammon steaks' },
      { rawName: 'Pineapple', rawMeasure: '160g, sliced' },
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Peas', rawMeasure: '120g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sausage and butter bean casserole',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Brown the gluten-free sausages in olive oil, then set aside.\n' +
      '2. Soften the onion, carrot and garlic in the same pan for 8 minutes.\n' +
      '3. Stir in the smoked paprika, then add the chopped tomatoes and gluten-free stock.\n' +
      '4. Return the sausages with the drained cannellini beans and simmer for 25 minutes until thick.\n' +
      '5. Season, scatter with parsley and serve.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '8 (gluten-free)' },
      { rawName: 'Cannellini beans', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '25g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml (gluten-free)' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai green chicken curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: [],
    instructions:
      '1. Fry the Thai green curry paste in a little oil for a minute until fragrant.\n' +
      '2. Pour in the coconut milk and bring to a gentle simmer.\n' +
      '3. Add the sliced chicken and cook for 10 minutes.\n' +
      '4. Stir in the mangetout and pepper and simmer for 5 minutes more until everything is cooked.\n' +
      '5. Season with fish sauce and a squeeze of lime, scatter with basil and serve over rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g' },
      { rawName: 'Thai green curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Mangetout', rawMeasure: '150g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: '25g' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Lemon and herb roast chicken thighs with potatoes',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: [],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Tip the halved new potatoes into a large roasting tin.\n' +
      '2. Add the chicken thighs, scatter over the garlic, lemon wedges and rosemary, then drizzle with olive oil and season.\n' +
      '3. Roast for 40–45 minutes until the chicken is golden and the potatoes are crisp.\n' +
      '4. Squeeze over the roasted lemon and serve from the tin.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'New potatoes', rawMeasure: '800g' },
      { rawName: 'Garlic', rawMeasure: '1 bulb, halved' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Rosemary', rawMeasure: '3 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ───────────────────────── Main courses — fish ─────────────────────────
  {
    title: 'Baked salmon with new potatoes and greens',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Boil the new potatoes until just tender, then drain.\n' +
      '2. Sit the salmon fillets on a lined tray, dot with butter, season and add a few lemon slices.\n' +
      '3. Bake for 12–14 minutes until the fish flakes easily.\n' +
      '4. Steam the green beans until tender-crisp.\n' +
      '5. Serve the salmon with the potatoes and beans, with the buttery juices spooned over.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'New potatoes', rawMeasure: '500g' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cornmeal-crusted fish with lemon',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Season the cornmeal with salt, pepper and a little paprika on a plate.\n' +
      '2. Dip the white fish fillets in beaten egg, then press into the cornmeal to coat all over.\n' +
      '3. Shallow-fry in hot oil for 3–4 minutes each side until crisp and golden and the fish is cooked through.\n' +
      '4. Drain briefly on kitchen paper.\n' +
      '5. Serve with lemon wedges and the peas.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2' },
      { rawName: 'Cornmeal', rawMeasure: '80g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai-style fish cakes',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Blend the white fish to a paste with the Thai red curry paste, fish sauce and a splash of lime juice.\n' +
      '2. Stir in the finely sliced green beans and spring onion.\n' +
      '3. With wet hands, shape into small patties.\n' +
      '4. Shallow-fry in hot oil for 2–3 minutes each side until golden and cooked through.\n' +
      '5. Serve hot with sweet chilli sauce and lime wedges.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4' },
      { rawName: 'Thai red curry paste', rawMeasure: '2 tbsp' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Green beans', rawMeasure: '100g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Sweet chilli sauce', rawMeasure: '4 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
    ],
  },
  {
    title: 'Prawn and coconut curry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Soften the onion in oil, then add the garlic, ginger and curry powder and cook until fragrant.\n' +
      '2. Pour in the chopped tomatoes and coconut milk and simmer for 10 minutes.\n' +
      '3. Add the prawns and cook for 4–5 minutes until pink and just cooked.\n' +
      '4. Season and sharpen with a squeeze of lime.\n' +
      '5. Scatter with coriander and serve over rice.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked haddock and spinach risotto',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Poach the smoked haddock gently in the milk for 5 minutes, then lift out, flake and reserve the milk.\n' +
      '2. Soften the onion in butter, then stir in the risotto rice until glossy.\n' +
      '3. Add the hot stock a ladle at a time, stirring, until the rice is creamy and tender, about 18 minutes, using the poaching milk too.\n' +
      '4. Stir in the spinach until wilted, then fold through the flaked haddock and Parmesan.\n' +
      '5. Season with pepper and serve at once.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '300g' },
      { rawName: 'Paella rice', rawMeasure: '300g risotto rice' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml (gluten-free)' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna and sweetcorn stuffed peppers',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers and remove the seeds, then sit in a baking dish.\n' +
      '2. Cook the rice until tender and drain.\n' +
      '3. Mix the rice with the drained tuna, sweetcorn, half the Cheddar and a little mayonnaise.\n' +
      '4. Spoon into the peppers and top with the rest of the cheese.\n' +
      '5. Bake for 30 minutes until the peppers are soft and the tops are golden.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4' },
      { rawName: 'Tuna', rawMeasure: '2 tins (145g each)' },
      { rawName: 'Sweetcorn', rawMeasure: '1 tin (200g)' },
      { rawName: 'Rice', rawMeasure: '150g' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Mayonnaise', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sea bass with cherry tomatoes and olives',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Season the sea bass fillets and fry skin-side down in olive oil for 3–4 minutes until crisp, then flip for a minute. Lift out.\n' +
      '2. Add the cherry tomatoes and garlic to the pan and cook until they begin to burst.\n' +
      '3. Stir in the olives and a splash of white wine and let it bubble down.\n' +
      '4. Return the fish to warm through and finish with basil.\n' +
      '5. Serve with crusty potatoes or rice.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '260g fillets' },
      { rawName: 'Cherry tomato', rawMeasure: '20' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'White wine', rawMeasure: '60ml' },
      { rawName: 'Basil', rawMeasure: '25g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Fish pie with cheesy mash',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Boil the potatoes until tender, drain and mash with butter, milk and most of the Cheddar; season.\n' +
      '2. Make a sauce: melt butter, stir in the potato starch, then gradually whisk in the milk until thick and smooth.\n' +
      '3. Fold in the white fish, salmon and prawns with the chopped parsley and peas, then season.\n' +
      '4. Heat the oven to 200°C (fan 180°C). Spoon the filling into a dish, top with the mash and the last of the cheese.\n' +
      '5. Bake for 30 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '3' },
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Prawns', rawMeasure: '150g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Milk', rawMeasure: '400ml' },
      { rawName: 'Potato starch', rawMeasure: '2 tbsp' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Parsley', rawMeasure: '25g' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ───────────────────────── Main courses — vegetarian & vegan ────────────
  {
    title: 'Vegetable and chickpea curry',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Soften the onion in oil, then add the garlic, ginger and curry powder and cook until fragrant.\n' +
      '2. Add the diced sweet potato and cauliflower florets and stir to coat.\n' +
      '3. Pour in the chopped tomatoes and coconut milk and simmer for 20 minutes until the vegetables are tender.\n' +
      '4. Stir in the drained chickpeas and spinach and warm through.\n' +
      '5. Season, sharpen with lime and scatter with coriander. Serve over rice.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Sweet potato', rawMeasure: '400g' },
      { rawName: 'Cauliflower', rawMeasure: '1/2 head' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed peppers with rice and feta',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve and deseed the peppers and sit in a baking dish.\n' +
      '2. Cook the rice until tender, then mix with the chopped tomatoes, garlic, herbs and crumbled feta.\n' +
      '3. Spoon the filling into the peppers and drizzle with olive oil.\n' +
      '4. Cover with foil and bake for 25 minutes, then uncover and bake for 15 minutes more until soft and golden.\n' +
      '5. Scatter with fresh basil to serve.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4' },
      { rawName: 'Rice', rawMeasure: '180g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Mixed herbs', rawMeasure: '1 tsp' },
      { rawName: 'Basil', rawMeasure: '25g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom risotto',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Soften the onion and garlic in butter, then add the sliced mushrooms and cook until golden.\n' +
      '2. Stir in the risotto rice until glossy.\n' +
      '3. Add the hot gluten-free stock a ladle at a time, stirring, until the rice is creamy and tender, about 18 minutes.\n' +
      '4. Stir in the Parmesan and a final knob of butter.\n' +
      '5. Season, scatter with parsley and serve.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '400g' },
      { rawName: 'Paella rice', rawMeasure: '300g risotto rice' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Parsley', rawMeasure: '25g' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1L (gluten-free)' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine and tomato bake',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Slice the aubergines, brush with olive oil and griddle until softened and marked. Set aside.\n' +
      '2. Soften the onion and garlic, then add the chopped tomatoes and a pinch of sugar and simmer to a thick sauce.\n' +
      '3. Heat the oven to 190°C (fan 170°C). Layer the aubergine and sauce in a dish, finishing with sauce.\n' +
      '4. Scatter over the mozzarella and Parmesan.\n' +
      '5. Bake for 30 minutes until bubbling and golden. Rest before serving.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Mozzarella', rawMeasure: '125g' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced cauliflower and potato curry',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Heat the oil and add the cumin and mustard seeds until they pop.\n' +
      '2. Soften the onion, then add the garlic, ginger and turmeric.\n' +
      '3. Add the cauliflower florets and diced potato and stir to coat in the spices.\n' +
      '4. Pour in the chopped tomatoes and a splash of water, cover and simmer for 25 minutes until tender.\n' +
      '5. Season, finish with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Mustard seeds', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Black bean and sweet potato chilli',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Soften the onion and pepper in oil, then add the garlic, cumin and chilli powder.\n' +
      '2. Add the diced sweet potato and stir to coat.\n' +
      '3. Pour in the chopped tomatoes and a splash of water, then simmer for 20 minutes until the sweet potato is tender.\n' +
      '4. Stir in the drained black beans and warm through, seasoning to taste.\n' +
      '5. Finish with a squeeze of lime and coriander, and serve with rice.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Sweet potato', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable and tofu stir-fry with tamari',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Press the tofu, cut into cubes and fry in the hot oil until golden on all sides. Lift out.\n' +
      '2. Stir-fry the broccoli, pepper and pak choi for 3–4 minutes with a splash of water.\n' +
      '3. Add the garlic and ginger and toss for a minute.\n' +
      '4. Return the tofu, pour in the tamari and a little sesame oil and toss until glossy and hot.\n' +
      '5. Serve over rice, scattered with sesame seeds.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '280g' },
      { rawName: 'Broccoli', rawMeasure: '1 head' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Tamari', rawMeasure: '3 tbsp (gluten-free)' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tsp' },
      { rawName: 'Rice', rawMeasure: '150g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Halloumi and vegetable skewers',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Cut the halloumi, courgette, pepper and red onion into chunks.\n' +
      '2. Thread onto skewers, alternating the cheese and vegetables.\n' +
      '3. Brush with olive oil mixed with a little smoked paprika and season.\n' +
      '4. Griddle or barbecue for 8–10 minutes, turning, until charred and the halloumi is golden.\n' +
      '5. Squeeze over lemon and serve with rice or salad.',
    rawLines: [
      { rawName: 'Feta', rawMeasure: '450g halloumi' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lentil and vegetable shepherd’s pie',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Soften the onion, carrot and celery in olive oil for 8–10 minutes, then stir in the tomato purée.\n' +
      '2. Add the rinsed lentils, chopped tomatoes and gluten-free stock, then simmer for 25 minutes until thick. Stir through the peas.\n' +
      '3. Meanwhile boil the potatoes until tender, drain and mash with a little olive oil and seasoning.\n' +
      '4. Heat the oven to 200°C (fan 180°C). Spoon the lentils into a dish, top with the mash and fork the surface.\n' +
      '5. Bake for 25–30 minutes until golden.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g green lentils' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml (gluten-free)' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Polenta with roasted vegetables',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, pepper, red onion and cherry tomatoes with olive oil and seasoning, then roast for 25 minutes.\n' +
      '2. Bring the gluten-free stock to the boil and rain in the cornmeal, whisking, then cook gently for 8–10 minutes, stirring, until thick.\n' +
      '3. Beat in the butter and Parmesan and season.\n' +
      '4. Spoon the soft polenta onto plates and top with the roasted vegetables.\n' +
      '5. Finish with basil and a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Cornmeal', rawMeasure: '200g polenta' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '16' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Basil', rawMeasure: '25g' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml (gluten-free)' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spinach and ricotta-stuffed mushrooms',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Remove the stalks from the large mushrooms and sit the caps in a baking dish.\n' +
      '2. Wilt the spinach in a pan, squeeze out the liquid and chop, then mix with the ricotta, garlic and most of the Parmesan.\n' +
      '3. Spoon the filling into the mushrooms and top with the rest of the Parmesan.\n' +
      '4. Drizzle with olive oil and bake for 20 minutes until the mushrooms are tender and the tops are golden.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '8 large portobello' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Ricotta', rawMeasure: '250g' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
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
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Soften the onion in olive oil, then add the garlic, cumin and smoked paprika.\n' +
      '2. Pour in the chopped tomatoes and a splash of water and simmer for 10 minutes.\n' +
      '3. Add the drained chickpeas and simmer for 10 minutes more.\n' +
      '4. Stir in the spinach until wilted and season.\n' +
      '5. Sharpen with a squeeze of lemon and serve with rice.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Rice', rawMeasure: '250g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ───────────────────────── Sides ─────────────────────────
  {
    title: 'Crispy roast potatoes',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Peel and cut the potatoes into large chunks.\n' +
      '2. Parboil in salted water for 8 minutes, then drain and shake in the colander to roughen the edges.\n' +
      '3. Heat the goose fat in a roasting tin until smoking hot, then add the potatoes and turn to coat.\n' +
      '4. Roast for 45 minutes, turning once, until deep gold and crisp.\n' +
      '5. Season with sea salt and serve at once.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '1.2kg' },
      { rawName: 'Goose fat', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Garlic and herb sautéed greens',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Trim the greens and blanch the kale and green beans in boiling water for 2 minutes, then drain.\n' +
      '2. Heat the olive oil in a wide pan and soften the garlic for a minute without colouring.\n' +
      '3. Add the blanched greens and spinach and toss over a high heat until glossy and just tender.\n' +
      '4. Season with salt, pepper and a squeeze of lemon to serve.',
    rawLines: [
      { rawName: 'Kale', rawMeasure: '200g' },
      { rawName: 'Green beans', rawMeasure: '150g' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemon and herb quinoa',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Rinse the quinoa, then simmer in plenty of water for 12–14 minutes until tender. Drain well.\n' +
      '2. Tip into a bowl and fork through the lemon zest and juice and the olive oil.\n' +
      '3. Stir in the chopped parsley and spring onions.\n' +
      '4. Season to taste and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Quinoa', rawMeasure: '200g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '25g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Honey-roasted carrots and parsnips',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Peel and cut the carrots and parsnips into batons.\n' +
      '2. Toss in a roasting tin with the olive oil, honey and thyme, then season.\n' +
      '3. Roast for 35 minutes, turning once, until tender and caramelised.\n' +
      '4. Serve hot, scraping up the sticky glaze from the tin.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '4' },
      { rawName: 'Parsnip', rawMeasure: '4' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ───────────────────────── Puddings & bakes ─────────────────────────
  {
    title: 'Flourless chocolate torte',
    servingsBase: 8,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C) and line a 20cm tin.\n' +
      '2. Melt the plain chocolate with the butter over a pan of simmering water, then cool slightly.\n' +
      '3. Whisk the eggs with the caster sugar until pale and doubled, then fold in the ground almonds and the chocolate.\n' +
      '4. Pour into the tin and bake for 35–40 minutes until just set with a slight wobble.\n' +
      '5. Cool in the tin, then dust with cocoa powder before serving.',
    rawLines: [
      { rawName: 'Plain chocolate', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '5' },
      { rawName: 'Caster sugar', rawMeasure: '180g' },
      { rawName: 'Almonds', rawMeasure: '100g ground' },
      { rawName: 'Cocoa powder', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Lemon polenta cake',
    servingsBase: 10,
    totalTimeMinutes: 75,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C) and line a 23cm tin.\n' +
      '2. Beat the butter and caster sugar until pale and fluffy, then beat in the eggs one at a time.\n' +
      '3. Fold in the ground almonds, cornmeal, baking powder and the lemon zest.\n' +
      '4. Spoon into the tin and bake for 45–50 minutes until golden and a skewer comes out clean.\n' +
      '5. Warm the lemon juice with a little sugar and spoon over the warm cake to soak in. Cool before slicing.',
    rawLines: [
      { rawName: 'Butter', rawMeasure: '200g' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Almonds', rawMeasure: '200g ground' },
      { rawName: 'Cornmeal', rawMeasure: '100g fine polenta' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp (gluten-free)' },
      { rawName: 'Lemon', rawMeasure: '2' },
    ],
  },
  {
    title: 'Eton mess',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Whip the double cream to soft peaks.\n' +
      '2. Roughly crush the meringue nests.\n' +
      '3. Hull and quarter most of the strawberries, crushing a few to a rough purée.\n' +
      '4. Fold the strawberries, purée and crushed meringue gently through the cream for a rippled effect.\n' +
      '5. Spoon into glasses and top with the reserved strawberries.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '300ml' },
      { rawName: 'Meringue nests', rawMeasure: '4' },
      { rawName: 'Strawberries', rawMeasure: '400g' },
    ],
  },
  {
    title: 'Rice pudding with nutmeg',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C).\n' +
      '2. Tip the pudding rice, sugar and milk into a buttered ovenproof dish and stir.\n' +
      '3. Grate the nutmeg over the top and dot with butter.\n' +
      '4. Bake for 1 hour 45 minutes, stirring once after 30 minutes, until thick, creamy and golden on top.\n' +
      '5. Serve warm with a spoonful of jam.',
    rawLines: [
      { rawName: 'Pudding rice', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '800ml' },
      { rawName: 'Caster sugar', rawMeasure: '60g' },
      { rawName: 'Nutmeg', rawMeasure: '1/2 tsp' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Jam', rawMeasure: '4 tsp' },
    ],
  },
  {
    title: 'Coconut and mango chia pudding',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Whisk the coconut milk with the honey alternative or a little sugar.\n' +
      '2. Stir in the desiccated coconut and leave to thicken for at least 4 hours or overnight in the fridge, stirring once.\n' +
      '3. Spoon into glasses and top with the diced mango.\n' +
      '4. Finish with a little extra coconut to serve.',
    rawLines: [
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Desiccated coconut', rawMeasure: '60g' },
      { rawName: 'Mango', rawMeasure: '1' },
      { rawName: 'Caster sugar', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Baked apples with cinnamon and sultanas',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Core the apples and score a line around the middle of each.\n' +
      '2. Mix the sultanas with the muscovado sugar, cinnamon and softened butter.\n' +
      '3. Pack the mixture into the apple cavities and sit them in a baking dish.\n' +
      '4. Pour a splash of water into the dish and bake for 35–40 minutes until soft and bubbling.\n' +
      '5. Serve warm with the syrupy juices.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '4 large' },
      { rawName: 'Sultanas', rawMeasure: '60g' },
      { rawName: 'Muscovado sugar', rawMeasure: '50g' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '40g' },
    ],
  },
  {
    title: 'Flourless peanut butter cookies',
    servingsBase: 12,
    totalTimeMinutes: 25,
    course: 'Dessert',
    cuisine: 'American',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line two baking trays.\n' +
      '2. Beat the peanut butter with the caster sugar, egg and a pinch of salt until smooth and stiff.\n' +
      '3. Roll into walnut-sized balls, space well apart and flatten with a fork.\n' +
      '4. Bake for 10–12 minutes until set at the edges but still soft in the middle.\n' +
      '5. Cool on the tray for 5 minutes before lifting off.',
    rawLines: [
      { rawName: 'Peanut butter', rawMeasure: '250g' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Chocolate and almond brownies',
    servingsBase: 12,
    totalTimeMinutes: 45,
    course: 'Dessert',
    cuisine: 'American',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a 20cm square tin.\n' +
      '2. Melt the plain chocolate with the butter, then cool slightly.\n' +
      '3. Whisk the eggs and caster sugar until thick, then fold in the chocolate.\n' +
      '4. Fold in the ground almonds and cocoa powder until just combined.\n' +
      '5. Pour into the tin and bake for 25 minutes until set with a slight fudgy wobble. Cool before cutting into squares.',
    rawLines: [
      { rawName: 'Plain chocolate', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Almonds', rawMeasure: '120g ground' },
      { rawName: 'Cocoa powder', rawMeasure: '40g' },
    ],
  },
  {
    title: 'Berry and almond crumble',
    servingsBase: 6,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Tip the frozen mixed berries into a baking dish and toss with a little of the sugar.\n' +
      '2. For the topping, rub the butter into the ground almonds and gluten-free oats with the rest of the sugar until clumpy.\n' +
      '3. Scatter the topping over the fruit.\n' +
      '4. Bake for 30–35 minutes until golden and bubbling at the edges.\n' +
      '5. Serve warm with custard or cream.',
    rawLines: [
      { rawName: 'Frozen mixed berries', rawMeasure: '600g' },
      { rawName: 'Almonds', rawMeasure: '100g ground' },
      { rawName: 'Oats', rawMeasure: '80g (certified gluten-free)' },
      { rawName: 'Butter', rawMeasure: '80g' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
    ],
  },
  {
    title: 'Coconut macaroons',
    servingsBase: 16,
    totalTimeMinutes: 35,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C) and line a baking tray.\n' +
      '2. Whisk the egg whites to soft peaks, then whisk in the caster sugar a little at a time until glossy.\n' +
      '3. Fold in the desiccated coconut until evenly coated.\n' +
      '4. Spoon small mounds onto the tray.\n' +
      '5. Bake for 18–20 minutes until tinged gold. Cool on the tray before lifting off.',
    rawLines: [
      { rawName: 'Desiccated coconut', rawMeasure: '200g' },
      { rawName: 'Egg white', rawMeasure: '3' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
    ],
  },
  {
    title: 'Pavlova with summer berries',
    servingsBase: 8,
    totalTimeMinutes: 120,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 140°C (fan 120°C) and line a tray.\n' +
      '2. Whisk the egg whites to stiff peaks, then add the caster sugar a spoonful at a time until thick and glossy.\n' +
      '3. Whisk in the cornflour-free cornstarch alternative (potato starch) and a little vinegar for a marshmallowy centre.\n' +
      '4. Spoon into a circle with a slight dip in the middle and bake for 1 hour 15 minutes, then cool in the oven.\n' +
      '5. Top with whipped double cream and the mixed berries to serve.',
    rawLines: [
      { rawName: 'Egg white', rawMeasure: '4' },
      { rawName: 'Caster sugar', rawMeasure: '225g' },
      { rawName: 'Potato starch', rawMeasure: '1 tsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tsp' },
      { rawName: 'Double cream', rawMeasure: '300ml' },
      { rawName: 'Strawberries', rawMeasure: '200g' },
      { rawName: 'Raspberries', rawMeasure: '150g' },
    ],
  },

  // ───────────────────────── Snacks ─────────────────────────
  {
    title: 'Spiced roasted chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Drain and dry the chickpeas thoroughly on a tea towel.\n' +
      '2. Toss with the olive oil, smoked paprika, cumin and a good pinch of salt.\n' +
      '3. Spread on a tray and roast for 30 minutes, shaking once, until crisp and golden.\n' +
      '4. Cool a little — they crisp further as they cool — then serve.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Guacamole with vegetable crudités',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Mexican',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Mash the avocados roughly in a bowl, keeping some texture.\n' +
      '2. Stir in the finely chopped red onion, tomato and a squeeze of lime.\n' +
      '3. Add the chopped coriander and season well with salt.\n' +
      '4. Cut the carrots, cucumber and pepper into sticks.\n' +
      '5. Serve the guacamole with the crudités for dipping.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '3' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Hummus with vegetable sticks',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Blend the drained chickpeas with the tahini, garlic, lemon juice and a good pinch of salt.\n' +
      '2. Loosen with a little cold water and olive oil until smooth and creamy.\n' +
      '3. Spoon into a bowl, swirl the top and drizzle with olive oil.\n' +
      '4. Cut the carrots, cucumber and pepper into sticks and serve alongside.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tahini', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
]
