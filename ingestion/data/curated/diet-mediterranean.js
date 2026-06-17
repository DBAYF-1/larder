// Curated MEDITERRANEAN-diet recipes for Larder.
//
// Each record is culinary content ONLY — the source/sourceId/imageUrl
// boilerplate is added by sources/curated.js (mapCurated). Ingredient lines use
// vocabulary from data/ingredients.js so they resolve cleanly (olive oil, feta,
// chickpeas, passata, bulgur wheat, sea bass, etc.). Method prose is original,
// written fresh in British English. No website wording is copied.
//
// Every recipe here STRICTLY satisfies the Mediterranean pattern:
//   - NO heavy processed or red meat (no beef, lamb, pork, sausage, bacon,
//     ham, chorizo, salami, mince of any kind). Poultry appears only lightly.
//   - emphasis on vegetables, fish/seafood, olive oil, pulses, wholegrains,
//     nuts, fresh herbs and yoghurt.
// dietLabels are tagged HONESTLY: every dish carries 'Mediterranean'; a dish
// that happens to be meat- and fish-free also carries 'Vegetarian'; a dish with
// no animal products carries 'Vegan'; a dish whose only animal protein is
// fish/seafood carries 'Pescatarian'. Free-from labels (gluten-free, dairy-free,
// nut-free, etc.) are DERIVED downstream by buildRecipe.js from the resolved
// ingredient lines, so they are not hand-set here.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  // ── Soups, stews & pulse mains ─────────────────────────────────────────────
  {
    title: 'Tuscan white bean and kale soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Warm the olive oil in a large pan and soften the onion, carrot and celery gently for 10 minutes until sweet and translucent.\n' +
      '2. Stir in the garlic and rosemary and cook for a minute until fragrant.\n' +
      '3. Add the drained cannellini beans, the chopped tomatoes and the stock, then bring to a gentle simmer.\n' +
      '4. Lift out a ladleful of beans and crush them with a fork, then stir them back in to thicken the broth naturally.\n' +
      '5. Fold through the shredded kale and simmer for 8–10 minutes until tender. Season well.\n' +
      '6. Finish each bowl with a good drizzle of olive oil and serve with crusty bread.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Kale', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Rosemary', rawMeasure: '1 sprig' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea and spinach stew',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a deep pan and soften the onion for 8 minutes until golden at the edges.\n' +
      '2. Stir in the garlic, cumin and smoked paprika and cook for a minute until aromatic.\n' +
      '3. Add the passata and a splash of water, then tip in the drained chickpeas and bring to a simmer.\n' +
      '4. Cook gently for 12–15 minutes until thickened, then wilt in the spinach a handful at a time.\n' +
      '5. Brighten with a squeeze of lemon, season to taste and serve with warm bread.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Passata', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek-style butter bean and tomato bake (gigantes)',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Warm the olive oil in an ovenproof pan and soften the onion for 8 minutes.\n' +
      '2. Add the garlic and oregano, cook for a minute, then stir in the passata, tomato purée and a pinch of sugar.\n' +
      '3. Tip in the drained cannellini beans and a splash of water, season and bring to a gentle simmer.\n' +
      '4. Scatter over the chopped parsley, transfer to the oven and bake uncovered for 35–40 minutes until the sauce is rich and the top is caramelised.\n' +
      '5. Drizzle with more olive oil and serve warm with bread and a wedge of lemon.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Passata', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lentil and vegetable minestrone',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the onion, carrot and celery for 10 minutes.\n' +
      '2. Stir in the garlic, then add the chopped tomatoes, the rinsed brown lentils and the stock.\n' +
      '3. Bring to a simmer and cook for 20 minutes until the lentils are nearly tender.\n' +
      '4. Add the courgette and pasta and cook for a further 10 minutes until everything is tender.\n' +
      '5. Season well, stir through the chopped parsley and finish with grated Parmesan and olive oil.',
    rawLines: [
      { rawName: 'Brown lentils', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pasta', rawMeasure: '100g small shapes' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Parmesan', rawMeasure: '30g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Moroccan chickpea and apricot tagine',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Moroccan',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a heavy pan and soften the onion for 8 minutes.\n' +
      '2. Stir in the garlic, ginger, cumin, cinnamon and ras el hanout and cook for a minute until fragrant.\n' +
      '3. Add the butternut squash, the chopped tomatoes and the stock, then bring to a simmer.\n' +
      '4. Cover and cook for 20 minutes, then stir in the drained chickpeas and the dried apricots and simmer for a further 10 minutes until the squash is tender.\n' +
      '5. Season, scatter with chopped coriander and serve over couscous.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Butternut squash', rawMeasure: '500g' },
      { rawName: 'Dried apricots', rawMeasure: '75g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tsp grated' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Ras el hanout', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Couscous', rawMeasure: '250g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spanish lentil and vegetable stew (lentejas)',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the onion, carrot and pepper for 10 minutes.\n' +
      '2. Stir in the garlic and smoked paprika and cook for a minute.\n' +
      '3. Add the rinsed brown lentils, the chopped tomatoes, the diced potato and the stock with a bay leaf.\n' +
      '4. Simmer gently for 30–35 minutes until the lentils and potato are tender and the stew is thick.\n' +
      '5. Season generously, remove the bay leaf and finish with a drizzle of olive oil and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Brown lentils', rawMeasure: '250g' },
      { rawName: 'Potato', rawMeasure: '2 medium' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Bay leaves', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Split pea and lemon soup',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the onion, carrot and celery for 10 minutes.\n' +
      '2. Stir in the garlic, then add the rinsed split peas and the stock.\n' +
      '3. Bring to a simmer, skim off any foam, then cover and cook gently for 40 minutes until the peas have collapsed into a thick soup.\n' +
      '4. Blend until smooth if you prefer, then season well and sharpen with plenty of lemon juice.\n' +
      '5. Serve drizzled with olive oil and scattered with parsley.',
    rawLines: [
      { rawName: 'Split peas', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1.2 litres' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Butter bean, fennel and tomato braise',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a wide pan and soften the sliced fennel and onion for 12 minutes until sweet.\n' +
      '2. Stir in the garlic and fennel seeds and cook for a minute.\n' +
      '3. Add the chopped tomatoes and a splash of water, then tip in the drained cannellini beans.\n' +
      '4. Simmer gently for 15 minutes until thick, then season and stir through chopped parsley.\n' +
      '5. Finish with olive oil and serve with bread to mop up the sauce.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Fennel', rawMeasure: '1 bulb' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Fennel seeds', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Fish & seafood ─────────────────────────────────────────────────────────
  {
    title: 'Baked sea bass with lemon and herbs',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Lay the sea bass fillets on a lined tray.\n' +
      '2. Scatter over the sliced garlic, lemon slices and thyme, then drizzle generously with olive oil and season.\n' +
      '3. Bake for 12–15 minutes until the flesh is opaque and flakes easily.\n' +
      '4. Spoon over the pan juices, scatter with parsley and serve with a green salad and bread.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '2 fillets' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mediterranean baked salmon with tomatoes and olives',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Scatter the cherry tomatoes, olives and sliced red onion in a roasting tin with the olive oil, oregano and seasoning.\n' +
      '2. Roast for 10 minutes until the tomatoes begin to slump.\n' +
      '3. Nestle the salmon fillets among the vegetables, squeeze over the lemon and return to the oven.\n' +
      '4. Bake for a further 12–15 minutes until the salmon is just cooked through.\n' +
      '5. Scatter with chopped parsley and serve with bulgur wheat or bread.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4 fillets' },
      { rawName: 'Cherry tomato', rawMeasure: '300g' },
      { rawName: 'Olives', rawMeasure: '75g' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sardines on toast with tomato and lemon',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Toast the wholegrain bread and rub each slice with the cut clove of garlic.\n' +
      '2. Drizzle generously with olive oil and pile on the sliced tomato.\n' +
      '3. Arrange the sardines on top, season and finish with a squeeze of lemon.\n' +
      '4. Scatter with parsley and a little chilli flakes and serve at once.',
    rawLines: [
      { rawName: 'Sardines', rawMeasure: '1 tin (120g)' },
      { rawName: 'Wholegrain bread', rawMeasure: '2 slices' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mackerel, beetroot and orange salad',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Whisk the olive oil with the juice of half the orange, season and set the dressing aside.\n' +
      '2. Segment the remaining orange and slice the cooked beetroot into wedges.\n' +
      '3. Toss the rocket with the dressing and pile onto plates.\n' +
      '4. Arrange the beetroot, orange and flaked mackerel over the leaves.\n' +
      '5. Scatter with dill and a drizzle of olive oil to serve.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '2 fillets' },
      { rawName: 'Beetroot', rawMeasure: '250g cooked' },
      { rawName: 'Orange', rawMeasure: '1' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Dill', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn, tomato and feta bake',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Soften the onion in the olive oil for 8 minutes, then add the garlic and chilli flakes.\n' +
      '2. Pour in the passata and a pinch of oregano, season and simmer for 10 minutes until thickened.\n' +
      '3. Stir the prawns through the sauce and tip into a baking dish.\n' +
      '4. Crumble over the feta and bake for 12–15 minutes until the prawns are pink and the feta is golden.\n' +
      '5. Scatter with parsley and serve with bread.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '400g' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Passata', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spanish-style mussels in tomato and white wine',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Scrub the mussels under cold water and discard any that stay open when tapped.\n' +
      '2. Heat the olive oil in a large lidded pan and soften the onion for 6 minutes, then add the garlic and smoked paprika.\n' +
      '3. Pour in the white wine and chopped tomatoes and bring to a brisk simmer.\n' +
      '4. Tip in the mussels, cover and steam for 4–5 minutes, shaking the pan, until the shells open.\n' +
      '5. Discard any that stay shut, scatter with parsley and serve with bread.',
    rawLines: [
      { rawName: 'Mussels', rawMeasure: '1kg' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'White wine', rawMeasure: '150ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna, white bean and red onion salad',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Drain and rinse the cannellini beans and tip into a bowl.\n' +
      '2. Add the flaked tuna, thinly sliced red onion and halved cherry tomatoes.\n' +
      '3. Dress with the olive oil and lemon juice, season well and toss gently.\n' +
      '4. Fold through the parsley and rocket and serve with bread.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '1 tin (160g)' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Rocket', rawMeasure: '50g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled sardines with chermoula',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Moroccan',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Make the chermoula by stirring together the chopped coriander and parsley, the garlic, cumin, smoked paprika, lemon juice and olive oil.\n' +
      '2. Heat the grill to high. Lay the sardines on a lined tray and brush with half the chermoula.\n' +
      '3. Grill for 3–4 minutes each side until the skin blisters and the flesh is cooked through.\n' +
      '4. Spoon over the remaining chermoula and serve with lemon wedges and bread.',
    rawLines: [
      { rawName: 'Sardines', rawMeasure: '6 fresh' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Hake with chickpeas and spinach',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Heat the olive oil in a wide pan and soften the onion for 8 minutes, then add the garlic and smoked paprika.\n' +
      '2. Stir in the drained chickpeas and chopped tomatoes and simmer for 8 minutes until thickened.\n' +
      '3. Wilt in the spinach, then season and nestle the hake fillets into the sauce.\n' +
      '4. Cover and cook gently for 8–10 minutes until the fish is opaque and flakes easily.\n' +
      '5. Finish with a squeeze of lemon and a scatter of parsley.',
    rawLines: [
      { rawName: 'Hake', rawMeasure: '2 fillets' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Monkfish and prawn skewers with lemon',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Cut the monkfish into chunks and toss with the prawns, olive oil, garlic, lemon zest and oregano. Leave to marinate for 15 minutes.\n' +
      '2. Thread the fish, prawns and pepper pieces onto skewers, alternating as you go.\n' +
      '3. Heat a griddle or grill to high and cook the skewers for 3–4 minutes each side until the fish is firm and the prawns are pink.\n' +
      '4. Squeeze over the lemon and serve with bulgur wheat and a green salad.',
    rawLines: [
      { rawName: 'Monkfish', rawMeasure: '400g' },
      { rawName: 'Prawns', rawMeasure: '200g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Bulgur wheat', rawMeasure: '200g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Trout baked in foil with fennel and lemon',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Lay each trout fillet on a large square of foil.\n' +
      '2. Scatter over the finely sliced fennel, lemon slices and dill, drizzle with olive oil and season.\n' +
      '3. Fold the foil into loose parcels and seal the edges well.\n' +
      '4. Bake for 15–18 minutes until the fish is cooked through and the fennel is tender.\n' +
      '5. Open the parcels carefully and serve with new potatoes.',
    rawLines: [
      { rawName: 'Trout', rawMeasure: '2 fillets' },
      { rawName: 'Fennel', rawMeasure: '1/2 bulb' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Dill', rawMeasure: 'small handful' },
      { rawName: 'New potatoes', rawMeasure: '400g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Seafood and saffron rice',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Warm the stock with the saffron and set aside to infuse.\n' +
      '2. Heat the olive oil in a wide pan and soften the onion and pepper for 8 minutes, then add the garlic and smoked paprika.\n' +
      '3. Stir in the paella rice to coat, then pour in the warm saffron stock and the chopped tomatoes. Simmer gently, without stirring, for 15 minutes.\n' +
      '4. Scatter the seafood mix over the top, press it in and cook for a further 8–10 minutes until the rice is tender and the seafood cooked.\n' +
      '5. Rest off the heat for 5 minutes, then serve with lemon wedges and parsley.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '300g' },
      { rawName: 'Frozen seafood mix', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 750ml' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked haddock and butter bean chowder',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the leek and celery for 8 minutes.\n' +
      '2. Add the diced potato and the stock and simmer for 12 minutes until the potato is nearly tender.\n' +
      '3. Stir in the drained cannellini beans and the sweetcorn.\n' +
      '4. Lay the smoked haddock on top, cover and poach for 6–8 minutes until it flakes, then break it gently into the soup.\n' +
      '5. Season, stir through parsley and a squeeze of lemon, and serve with bread.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '300g' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Potato', rawMeasure: '2 medium' },
      { rawName: 'Leek', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Sweetcorn', rawMeasure: '150g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'White fish in tomato and caper sauce (acqua pazza)',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Heat the olive oil in a wide pan and gently soften the garlic and chilli flakes for a minute without colouring.\n' +
      '2. Add the cherry tomatoes and capers and cook for 6–8 minutes until the tomatoes burst and form a light sauce.\n' +
      '3. Pour in a splash of water, season, then slide in the white fish fillets.\n' +
      '4. Cover and simmer gently for 8–10 minutes, spooning the sauce over the fish, until just cooked.\n' +
      '5. Scatter with parsley and serve with bread.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2 fillets' },
      { rawName: 'Cherry tomato', rawMeasure: '300g' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled mackerel with bulgur and herb salad',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Cook the bulgur wheat in plenty of boiling water for 12 minutes until tender, then drain well.\n' +
      '2. Toss the warm bulgur with the chopped parsley, mint, diced cucumber and tomato, the lemon juice and olive oil. Season well.\n' +
      '3. Heat the grill to high and cook the mackerel fillets skin-side up for 4–5 minutes until crisp and cooked through.\n' +
      '4. Pile the bulgur salad onto plates and top with the mackerel.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '2 fillets' },
      { rawName: 'Bulgur wheat', rawMeasure: '150g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Squid and chickpea salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Toss the cleaned squid with a little olive oil, the smoked paprika and seasoning.\n' +
      '2. Heat a griddle pan until very hot and sear the squid for 1–2 minutes until just opaque and lightly charred. Set aside.\n' +
      '3. Combine the drained chickpeas with the sliced red onion, halved cherry tomatoes, parsley and rocket.\n' +
      '4. Dress with the lemon juice and remaining olive oil, season and toss.\n' +
      '5. Pile onto plates and top with the grilled squid.',
    rawLines: [
      { rawName: 'Squid', rawMeasure: '300g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Rocket', rawMeasure: '50g' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Light chicken (used sparingly, Mediterranean-style) ─────────────────────
  {
    title: 'Lemon and oregano chicken with olives',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the chicken thighs with the olive oil, garlic, oregano, lemon zest and seasoning.\n' +
      '2. Arrange in a roasting tin with the lemon wedges and olives.\n' +
      '3. Roast for 30–35 minutes, basting once, until the chicken is golden and cooked through.\n' +
      '4. Scatter with parsley and serve with a Greek salad and bread.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Olives', rawMeasure: '75g' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tbsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken souvlaki with tzatziki',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean'],
    instructions:
      '1. Cut the chicken breast into chunks and toss with the olive oil, garlic, oregano, lemon juice and seasoning. Leave to marinate for 20 minutes.\n' +
      '2. For the tzatziki, grate the cucumber, squeeze out the liquid and stir into the Greek yoghurt with a little garlic, mint and lemon.\n' +
      '3. Thread the chicken onto skewers and grill or griddle for 10–12 minutes, turning, until charred and cooked through.\n' +
      '4. Serve the skewers in warm pitta with the tzatziki, salad and a wedge of lemon.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g' },
      { rawName: 'Greek yoghurt', rawMeasure: '200g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tbsp' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mediterranean chicken and chickpea traybake',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the chicken thighs, drained chickpeas, sliced peppers, red onion and cherry tomatoes in a large roasting tin.\n' +
      '2. Add the olive oil, garlic, smoked paprika and oregano, season and toss to coat.\n' +
      '3. Roast for 35–40 minutes, turning once, until the chicken is golden and the vegetables are tender.\n' +
      '4. Squeeze over the lemon and scatter with parsley to serve.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '250g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Oregano', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Vegetable mains & bakes ────────────────────────────────────────────────
  {
    title: 'Ratatouille',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the onion for 8 minutes, then add the garlic.\n' +
      '2. Add the diced aubergine and courgette and cook over a medium heat for 10 minutes until starting to colour.\n' +
      '3. Stir in the chopped peppers, the chopped tomatoes, tomato purée and oregano, then season.\n' +
      '4. Simmer gently for 25–30 minutes until everything is tender and the sauce is rich.\n' +
      '5. Stir through torn basil and finish with a drizzle of olive oil. Serve with bread or wholegrains.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed peppers with rice, tomato and herbs',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Slice the tops off the peppers and remove the seeds.\n' +
      '2. Soften the onion in the olive oil for 8 minutes, add the garlic, then stir in the rice, chopped tomatoes, parsley, mint and a splash of water. Season.\n' +
      '3. Spoon the mixture into the peppers and sit them snugly in a baking dish with their lids on.\n' +
      '4. Drizzle with olive oil, add a splash of water to the dish and cover with foil.\n' +
      '5. Bake for 40 minutes, then uncover for a final 10 minutes until the rice is tender and the peppers are soft.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4 large' },
      { rawName: 'Rice', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine parmigiana',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Slice the aubergines lengthways, brush with olive oil and roast on trays for 20 minutes until soft and golden.\n' +
      '2. Meanwhile soften the onion in olive oil, add the garlic, then pour in the passata with a pinch of sugar and the basil. Simmer for 15 minutes and season.\n' +
      '3. Layer the aubergine, tomato sauce and grated mozzarella in a baking dish, finishing with sauce and a good dusting of Parmesan.\n' +
      '4. Bake for 25–30 minutes until bubbling and golden. Rest for 5 minutes before serving with a green salad.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '3' },
      { rawName: 'Passata', rawMeasure: '700g' },
      { rawName: 'Mozzarella', rawMeasure: '250g' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Basil', rawMeasure: 'handful' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spanakopita (spinach and feta filo pie)',
    servingsBase: 6,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Wilt the spinach in a dry pan, then squeeze out all the liquid and chop.\n' +
      '2. Soften the spring onions in a little olive oil, then mix with the spinach, crumbled feta, eggs, dill and plenty of black pepper.\n' +
      '3. Brush the filo sheets with olive oil and layer half across a baking dish, letting them overhang.\n' +
      '4. Spread in the filling, fold over the overhang, then top with the remaining oiled filo, tucking in the edges.\n' +
      '5. Score the top, brush with oil and bake for 35–40 minutes until crisp and golden. Cool slightly before slicing.',
    rawLines: [
      { rawName: 'Spinach', rawMeasure: '500g' },
      { rawName: 'Feta', rawMeasure: '200g' },
      { rawName: 'Filo pastry', rawMeasure: '270g (1 pack)' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Dill', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek salad (horiatiki)',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Cut the tomatoes into wedges and the cucumber into thick half-moons.\n' +
      '2. Thinly slice the red onion and tip into a bowl with the tomato, cucumber and olives.\n' +
      '3. Dress with the olive oil, a splash of red wine vinegar and the oregano, then season.\n' +
      '4. Top with a thick slab of feta, drizzle with a little more oil and a final pinch of oregano. Serve at once with bread.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Olives', rawMeasure: '75g' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp red wine' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted Mediterranean vegetable and feta couscous',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the chopped courgette, aubergine, peppers and red onion with the olive oil and seasoning and roast for 25 minutes until tender and caramelised.\n' +
      '2. Meanwhile put the couscous in a bowl, pour over enough boiling stock to cover, then leave covered for 5 minutes and fluff with a fork.\n' +
      '3. Fold the roasted vegetables through the couscous with the lemon juice and chopped parsley and mint.\n' +
      '4. Crumble over the feta and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Couscous', rawMeasure: '250g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Briam (Greek roasted vegetables)',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Thinly slice the potatoes, courgettes, aubergine and tomatoes.\n' +
      '2. Layer the vegetables in a large baking dish with the sliced onion and garlic, seasoning between the layers.\n' +
      '3. Stir the oregano into the olive oil and pour evenly over the top, then add a splash of water.\n' +
      '4. Cover with foil and bake for 45 minutes, then uncover and roast for a further 25–30 minutes until tender and golden.\n' +
      '5. Scatter with parsley and serve warm with bread.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '3 medium' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tbsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Caponata (Sicilian sweet-and-sour aubergine)',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a wide pan and fry the diced aubergine over a medium-high heat until golden and soft. Lift out and set aside.\n' +
      '2. In the same pan soften the onion and celery for 8 minutes, then add the chopped tomatoes, capers and olives.\n' +
      '3. Return the aubergine, add the vinegar and a little sugar and simmer for 15 minutes until thick and glossy.\n' +
      '4. Season, stir through chopped parsley and leave to cool a little. Serve warm or at room temperature with bread.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Olives', rawMeasure: '50g' },
      { rawName: 'Vinegar', rawMeasure: '2 tbsp red wine' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Shakshuka (eggs baked in spiced tomato sauce)',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the olive oil in a wide pan and soften the onion and pepper for 8 minutes.\n' +
      '2. Stir in the garlic, cumin and smoked paprika and cook for a minute until fragrant.\n' +
      '3. Pour in the chopped tomatoes, season and simmer for 10 minutes until thickened.\n' +
      '4. Make wells in the sauce and crack in the eggs. Cover and cook gently for 5–7 minutes until the whites are set but the yolks still soft.\n' +
      '5. Scatter with parsley and serve straight from the pan with bread.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and spinach orzo',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the olive oil in a wide pan and fry the sliced mushrooms over a high heat until golden. Add the onion and soften for 6 minutes.\n' +
      '2. Stir in the garlic, then add the pasta and toast for a minute.\n' +
      '3. Pour in the hot stock a ladle at a time, stirring, until the orzo is tender and creamy, about 12 minutes.\n' +
      '4. Wilt in the spinach, then stir through the grated Parmesan and a squeeze of lemon. Season and serve.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '300g orzo' },
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Courgette and feta fritters',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Coarsely grate the courgettes, toss with a little salt and leave for 10 minutes, then squeeze out as much liquid as you can.\n' +
      '2. Mix the courgette with the crumbled feta, eggs, flour, chopped dill and spring onions. Season with black pepper.\n' +
      '3. Heat a little olive oil in a frying pan and drop in spoonfuls of the mixture, flattening slightly.\n' +
      '4. Fry for 2–3 minutes each side until golden and set. Drain briefly and serve with Greek yoghurt and lemon.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Plain flour', rawMeasure: '60g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Dill', rawMeasure: 'small handful' },
      { rawName: 'Greek yoghurt', rawMeasure: 'to serve' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Giant couscous with roasted squash and chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the diced butternut squash and drained chickpeas with the olive oil, cumin and seasoning and roast for 30 minutes.\n' +
      '2. Cook the couscous in boiling stock for 8–10 minutes until tender, then drain.\n' +
      '3. Fold the roasted squash and chickpeas through the couscous with the rocket, lemon juice and chopped parsley.\n' +
      '4. Scatter over the toasted pine nuts and serve warm.',
    rawLines: [
      { rawName: 'Couscous', rawMeasure: '250g giant' },
      { rawName: 'Butternut squash', rawMeasure: '500g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Rocket', rawMeasure: '50g' },
      { rawName: 'Pine nuts', rawMeasure: '30g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Wholewheat pasta with cherry tomatoes, olives and capers',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Cook the pasta in plenty of salted water until al dente.\n' +
      '2. Meanwhile heat the olive oil in a pan and gently soften the garlic and chilli flakes for a minute.\n' +
      '3. Add the halved cherry tomatoes, olives and capers and cook for 6–8 minutes until the tomatoes collapse into a light sauce.\n' +
      '4. Drain the pasta, reserving a splash of water, and toss through the sauce with the parsley, loosening with the pasta water if needed.\n' +
      '5. Season and serve with a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '400g wholewheat' },
      { rawName: 'Cherry tomato', rawMeasure: '400g' },
      { rawName: 'Olives', rawMeasure: '75g' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pasta alla Norma',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat half the olive oil in a wide pan and fry the diced aubergine until golden and soft. Set aside.\n' +
      '2. Add the rest of the oil and soften the garlic for a minute, then pour in the passata with a pinch of sugar and simmer for 15 minutes.\n' +
      '3. Cook the pasta in salted water until al dente, then drain.\n' +
      '4. Return the aubergine to the sauce, season, then toss through the pasta with torn basil.\n' +
      '5. Serve scattered with grated ricotta or Parmesan.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '400g' },
      { rawName: 'Aubergine', rawMeasure: '2' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Basil', rawMeasure: 'handful' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Wholegrain spaghetti with garlic, olive oil and chilli',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Cook the spaghetti in plenty of salted water until al dente, reserving a cup of the cooking water before draining.\n' +
      '2. Meanwhile warm the olive oil gently with the thinly sliced garlic and chilli flakes until the garlic is pale gold and fragrant — do not let it brown.\n' +
      '3. Add the drained spaghetti and a splash of the cooking water and toss to coat in the silky oil.\n' +
      '4. Stir through the parsley, season and serve at once.',
    rawLines: [
      { rawName: 'Spaghetti', rawMeasure: '250g wholewheat' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked falafel with herbs',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Blitz the drained chickpeas with the onion, garlic, parsley, coriander, cumin and a little flour to a coarse paste. Season well.\n' +
      '2. Shape into small patties and place on a lined tray, then brush generously with olive oil.\n' +
      '3. Bake for 22–25 minutes, turning once, until crisp and golden.\n' +
      '4. Serve in warm pitta with salad, a squeeze of lemon and a spoonful of hummus.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Onion', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Coriander', rawMeasure: 'handful' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Hummus', rawMeasure: '4 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemony lentil and rice pilaf (mujadara)',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a deep pan and fry the sliced onions slowly for 15 minutes until deeply caramelised. Lift out half to garnish.\n' +
      '2. Add the rinsed brown lentils and the stock to the pan and simmer for 15 minutes.\n' +
      '3. Stir in the rice, cumin and a little cinnamon, top up with water to cover, then cover and cook gently for 15 minutes until tender.\n' +
      '4. Season, fluff up and top with the reserved crispy onions, parsley and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Brown lentils', rawMeasure: '200g' },
      { rawName: 'Rice', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed vine leaves (dolmades) with rice and herbs',
    servingsBase: 6,
    totalTimeMinutes: 75,
    course: 'Side',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Soften the finely chopped onion in olive oil, then stir in the rice, parsley, mint, dill and a little lemon zest. Season.\n' +
      '2. Lay a vine leaf shiny-side down, place a little filling near the stem, fold in the sides and roll up firmly.\n' +
      '3. Pack the rolls seam-side down in a snug layer in a pan, drizzle with olive oil and the juice of a lemon, then add enough water to just cover.\n' +
      '4. Weigh down with a plate, cover and simmer very gently for 45 minutes until the rice is tender.\n' +
      '5. Cool in the pan, then serve at room temperature with lemon wedges.',
    rawLines: [
      { rawName: 'Vine leaves', rawMeasure: '1 jar (250g)' },
      { rawName: 'Rice', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Mint', rawMeasure: 'handful' },
      { rawName: 'Dill', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea, tomato and spinach curry-spiced stew',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil and soften the onion for 8 minutes, then add the garlic, cumin, coriander and smoked paprika.\n' +
      '2. Stir in the chopped tomatoes and a splash of water, then tip in the drained chickpeas.\n' +
      '3. Simmer for 15 minutes until thickened, then wilt in the spinach.\n' +
      '4. Season, finish with lemon and serve over wholegrains or with flatbread.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Salads, grains & mezze ─────────────────────────────────────────────────
  {
    title: 'Tabbouleh',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Soak the bulgur wheat in boiling water for 15 minutes until tender, then drain well and cool.\n' +
      '2. Finely chop the parsley and mint and dice the tomatoes and cucumber.\n' +
      '3. Toss everything together with the spring onions, lemon juice and olive oil.\n' +
      '4. Season generously and leave for 10 minutes for the flavours to mingle before serving.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '100g' },
      { rawName: 'Parsley', rawMeasure: 'large bunch' },
      { rawName: 'Mint', rawMeasure: 'handful' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Panzanella (Tuscan bread and tomato salad)',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Tear the crusty bread into chunks, drizzle with a little olive oil and toast in a hot oven for 8 minutes until crisp.\n' +
      '2. Cut the ripe tomatoes into wedges, tip into a bowl with their juices and season.\n' +
      '3. Add the sliced cucumber, red onion and torn basil along with the toasted bread.\n' +
      '4. Dress with the olive oil and red wine vinegar, toss well and leave for 10 minutes so the bread soaks up the juices before serving.',
    rawLines: [
      { rawName: 'Crusty bread', rawMeasure: '200g stale' },
      { rawName: 'Beef tomato', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Basil', rawMeasure: 'handful' },
      { rawName: 'Vinegar', rawMeasure: '2 tbsp red wine' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek chickpea and tomato salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Drain and rinse the chickpeas and tip into a large bowl.\n' +
      '2. Add the halved cherry tomatoes, diced cucumber, sliced red onion and olives.\n' +
      '3. Dress with the olive oil, lemon juice and oregano, then season and toss.\n' +
      '4. Crumble over the feta and scatter with parsley to serve.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Olives', rawMeasure: '50g' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Quinoa tabbouleh with pomegranate',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Side',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Rinse the quinoa and cook in boiling water for 15 minutes until tender, then drain and cool.\n' +
      '2. Toss the quinoa with the chopped parsley, mint, diced cucumber and spring onions.\n' +
      '3. Dress with the lemon juice and olive oil and season well.\n' +
      '4. Scatter over the pomegranate seeds just before serving.',
    rawLines: [
      { rawName: 'Quinoa', rawMeasure: '200g' },
      { rawName: 'Parsley', rawMeasure: 'large bunch' },
      { rawName: 'Mint', rawMeasure: 'handful' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Pomegranate', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted beetroot, lentil and goat’s cheese salad',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Whisk the olive oil with the lemon juice and a little honey to make a dressing.\n' +
      '2. Toss the drained brown lentils and rocket with most of the dressing and pile onto plates.\n' +
      '3. Scatter over the wedges of cooked beetroot and crumble on the goat’s cheese.\n' +
      '4. Finish with the toasted walnuts, a scatter of dill and the rest of the dressing.',
    rawLines: [
      { rawName: 'Brown lentils', rawMeasure: '1 tin (400g)' },
      { rawName: 'Beetroot', rawMeasure: '300g cooked' },
      { rawName: "Goat's cheese", rawMeasure: '100g' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Walnuts', rawMeasure: '40g' },
      { rawName: 'Dill', rawMeasure: 'small handful' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Freekeh salad with herbs and almonds',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Side',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Cook the freekeh in boiling stock for 20 minutes until tender with a little bite, then drain and cool slightly.\n' +
      '2. Toss the warm freekeh with the chopped parsley, mint, spring onions and dried apricots.\n' +
      '3. Dress with the lemon juice, olive oil and a pinch of cinnamon, then season.\n' +
      '4. Scatter over the toasted almonds and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Freekeh', rawMeasure: '200g' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Mint', rawMeasure: 'handful' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Dried apricots', rawMeasure: '50g' },
      { rawName: 'Almonds', rawMeasure: '40g' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'White bean and tuna salad with lemon dressing',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Drain and rinse the cannellini beans and tip into a bowl with the flaked tuna.\n' +
      '2. Add the sliced celery, red onion and parsley.\n' +
      '3. Whisk the olive oil with the lemon juice, season and pour over the salad.\n' +
      '4. Toss gently and serve on a bed of rocket with bread.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tuna', rawMeasure: '1 tin (160g)' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Rocket', rawMeasure: '50g' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Classic hummus',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Drain the chickpeas, reserving a little of the liquid, and tip into a food processor.\n' +
      '2. Add the tahini, garlic, lemon juice and a good pinch of cumin.\n' +
      '3. Blend to a paste, drizzling in the olive oil and a splash of the chickpea liquid until smooth and creamy.\n' +
      '4. Season, spread into a bowl and finish with a swirl of olive oil and a dusting of smoked paprika. Serve with warm pitta.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tahini', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 pinch' },
      { rawName: 'Smoked paprika', rawMeasure: '1 pinch' },
      { rawName: 'Pitta bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baba ganoush (smoky aubergine dip)',
    servingsBase: 6,
    totalTimeMinutes: 40,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the grill to high and char the whole aubergines, turning, for 20 minutes until blackened and collapsing.\n' +
      '2. When cool enough to handle, scoop the soft flesh into a sieve and let it drain for a few minutes.\n' +
      '3. Mash the flesh with the tahini, garlic and lemon juice until smooth.\n' +
      '4. Season, stir through chopped parsley and finish with olive oil and a pinch of smoked paprika. Serve with pitta.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2' },
      { rawName: 'Tahini', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Smoked paprika', rawMeasure: '1 pinch' },
      { rawName: 'Pitta bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Marinated olives and feta',
    servingsBase: 6,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Tip the olives into a bowl and add the cubed feta.\n' +
      '2. Warm the olive oil gently with the sliced garlic, chilli flakes, oregano and strips of lemon zest until just fragrant — do not let it sizzle.\n' +
      '3. Pour the warm oil over the olives and feta and toss gently.\n' +
      '4. Leave to marinate for at least 30 minutes and serve with bread.',
    rawLines: [
      { rawName: 'Olives', rawMeasure: '200g' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
    ],
  },
  {
    title: 'Roasted red pepper and walnut dip (muhammara)',
    servingsBase: 6,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Blitz the drained roasted peppers with the walnuts, garlic, cumin and a little chilli flakes.\n' +
      '2. Add the pomegranate molasses, lemon juice and olive oil and blend to a coarse, spoonable paste.\n' +
      '3. Season to taste, adding a little more pomegranate molasses for sweet-sour balance.\n' +
      '4. Spread into a bowl, drizzle with olive oil and scatter with parsley. Serve with warm flatbread.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '2 roasted red, from a jar' },
      { rawName: 'Walnuts', rawMeasure: '75g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Pomegranate molasses', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Pitta bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bruschetta with tomato and basil',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Dice the ripe tomatoes and toss with the torn basil, a little crushed garlic, olive oil and seasoning. Leave for 10 minutes.\n' +
      '2. Toast or griddle the slices of crusty bread until golden.\n' +
      '3. Rub each slice with the cut clove of garlic and drizzle with olive oil.\n' +
      '4. Spoon the tomatoes over the top and serve at once.',
    rawLines: [
      { rawName: 'Crusty bread', rawMeasure: '8 slices' },
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: 'Basil', rawMeasure: 'handful' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Warm puy-style lentil salad with feta',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Simmer the brown lentils in stock for 20–25 minutes until tender but holding their shape, then drain.\n' +
      '2. Meanwhile soften the diced carrot and celery in olive oil for 8 minutes.\n' +
      '3. Toss the warm lentils with the vegetables, lemon juice, mustard and chopped parsley. Season well.\n' +
      '4. Crumble over the feta and serve warm.',
    rawLines: [
      { rawName: 'Brown lentils', rawMeasure: '250g' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Breakfasts ─────────────────────────────────────────────────────────────
  {
    title: 'Greek yoghurt with honey, walnuts and figs',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Spoon the Greek yoghurt into two bowls.\n' +
      '2. Quarter the figs and arrange over the yoghurt.\n' +
      '3. Scatter with the roughly chopped walnuts.\n' +
      '4. Drizzle generously with honey and serve.',
    rawLines: [
      { rawName: 'Greek yoghurt', rawMeasure: '300g' },
      { rawName: 'Fig', rawMeasure: '4' },
      { rawName: 'Walnuts', rawMeasure: '40g' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Overnight oats with yoghurt and berries',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Stir together the oats, Greek yoghurt and milk in a bowl or jar.\n' +
      '2. Sweeten with a little honey and a pinch of cinnamon.\n' +
      '3. Cover and chill overnight so the oats soften.\n' +
      '4. In the morning top with the mixed berries and a few almonds.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '80g' },
      { rawName: 'Greek yoghurt', rawMeasure: '150g' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Frozen mixed berries', rawMeasure: '100g' },
      { rawName: 'Almonds', rawMeasure: '20g' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Tomato and herb omelette',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Beat the eggs with a little seasoning.\n' +
      '2. Heat the olive oil in a non-stick pan and soften the halved cherry tomatoes for 2 minutes.\n' +
      '3. Pour in the eggs and stir gently, drawing the set edges into the middle, until almost set.\n' +
      '4. Scatter over the chopped parsley and a little feta, fold over and slide onto plates.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Feta', rawMeasure: '50g' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Avocado and white bean smash on toast',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Drain the cannellini beans and mash roughly with the avocado, lemon juice and a little olive oil.\n' +
      '2. Season well with salt, pepper and a pinch of chilli flakes.\n' +
      '3. Toast the wholegrain bread and rub with the cut clove of garlic.\n' +
      '4. Pile the smash onto the toast, drizzle with olive oil and finish with a squeeze of lemon.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Wholegrain bread', rawMeasure: '4 slices' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── More vegetable & pulse mains to round out the set ───────────────────────
  {
    title: 'Imam bayildi (stuffed baked aubergine)',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the aubergines lengthways, score the flesh and brush with olive oil, then roast cut-side up for 20 minutes until soft.\n' +
      '2. Meanwhile soften the sliced onions in olive oil for 12 minutes, add the garlic, then stir in the chopped tomatoes and parsley. Season.\n' +
      '3. Press the soft aubergine flesh to make a hollow and spoon in the tomato and onion filling.\n' +
      '4. Add a splash of water to the dish, drizzle with olive oil and bake for a further 25–30 minutes.\n' +
      '5. Cool slightly and serve warm with a squeeze of lemon and bread.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Courgette, lemon and ricotta pasta',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Cook the pasta in salted water until al dente, reserving a cup of the cooking water.\n' +
      '2. Meanwhile heat the olive oil and gently soften the coarsely grated courgette and garlic for 8 minutes until collapsed and sweet.\n' +
      '3. Stir in the ricotta, lemon zest and juice and a splash of pasta water to make a light sauce.\n' +
      '4. Toss through the drained pasta with the mint, loosening with more pasta water if needed.\n' +
      '5. Season and serve with grated Parmesan.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '400g' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Ricotta', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Parmesan', rawMeasure: '30g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted cauliflower with tahini and pomegranate',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the cauliflower florets with the olive oil, cumin and seasoning and roast for 25–30 minutes until charred and tender.\n' +
      '2. Loosen the tahini with the lemon juice and a little water to a drizzling consistency, then season.\n' +
      '3. Pile the cauliflower onto a platter and spoon over the tahini sauce.\n' +
      '4. Scatter with pomegranate seeds, parsley and toasted almonds to serve.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large' },
      { rawName: 'Tahini', rawMeasure: '2 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Pomegranate', rawMeasure: '1/2' },
      { rawName: 'Almonds', rawMeasure: '30g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek-style baked giant beans with spinach and dill',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Soften the onion and leek in olive oil for 10 minutes, then add the garlic.\n' +
      '2. Stir in the chopped tomatoes, a pinch of sugar and the dill, then tip in the drained butter beans.\n' +
      '3. Wilt in the spinach, season and transfer to a baking dish.\n' +
      '4. Drizzle with olive oil and bake for 25 minutes until bubbling and lightly caramelised.\n' +
      '5. Finish with lemon and more dill and serve with bread.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Leek', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Dill', rawMeasure: 'handful' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Fattoush salad',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Tear the pitta into pieces, toss with a little olive oil and crisp up in a hot oven for 6–8 minutes.\n' +
      '2. Chop the lettuce, tomatoes, cucumber and radish and tip into a large bowl with the spring onions.\n' +
      '3. Whisk the olive oil with the lemon juice, sumac and a little crushed garlic to make the dressing.\n' +
      '4. Toss the salad with the dressing and chopped parsley and mint, then fold through the crisp pitta just before serving.',
    rawLines: [
      { rawName: 'Pitta bread', rawMeasure: '2' },
      { rawName: 'Lettuce', rawMeasure: '1 baby gem' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Radish', rawMeasure: '6' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Sumac', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Saffron and vegetable paella',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Warm the stock with the saffron and set aside to infuse.\n' +
      '2. Heat the olive oil in a wide pan and soften the onion and peppers for 8 minutes, then add the garlic and smoked paprika.\n' +
      '3. Stir in the paella rice to coat, then add the green beans and pour in the warm saffron stock and chopped tomatoes.\n' +
      '4. Simmer gently without stirring for 18–20 minutes until the rice is tender and the liquid absorbed, scattering in the artichoke and chickpeas halfway.\n' +
      '5. Rest for 5 minutes, then finish with lemon and parsley.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '300g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Green beans', rawMeasure: '150g' },
      { rawName: 'Jerusalem artichoke', rawMeasure: '150g' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Broad bean, pea and mint salad with feta',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Blanch the broad beans and peas in boiling water for 2–3 minutes, then drain and refresh under cold water.\n' +
      '2. Slip the broad beans out of their grey skins if you like a brighter green.\n' +
      '3. Toss the beans and peas with the chopped mint, lemon juice and olive oil and season.\n' +
      '4. Pile onto a platter, crumble over the feta and finish with a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Broad beans', rawMeasure: '250g' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Mint', rawMeasure: 'handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Wholewheat pasta with sardines, fennel and lemon',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Cook the pasta in salted water until al dente, reserving a little cooking water.\n' +
      '2. Meanwhile soften the finely sliced fennel and onion in olive oil for 10 minutes, then add the garlic and chilli flakes.\n' +
      '3. Stir in the sardines, breaking them up gently, with the lemon zest and a splash of pasta water.\n' +
      '4. Toss through the drained pasta with the parsley and pine nuts, season and serve with lemon.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '250g wholewheat' },
      { rawName: 'Sardines', rawMeasure: '1 tin (120g)' },
      { rawName: 'Fennel', rawMeasure: '1/2 bulb' },
      { rawName: 'Onion', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Pine nuts', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked cod with olives, tomatoes and capers',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Scatter the cherry tomatoes, olives and capers in a baking dish with the olive oil, garlic and oregano.\n' +
      '2. Roast for 10 minutes until the tomatoes begin to soften.\n' +
      '3. Nestle the white fish fillets into the dish, season and spoon over some of the juices.\n' +
      '4. Bake for a further 12–15 minutes until the fish is opaque and flakes easily.\n' +
      '5. Finish with lemon and parsley and serve with new potatoes.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2 fillets' },
      { rawName: 'Cherry tomato', rawMeasure: '250g' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'New potatoes', rawMeasure: '400g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced carrot and lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the olive oil and soften the onion for 8 minutes, then add the garlic, cumin and a pinch of chilli flakes.\n' +
      '2. Add the grated carrot, the rinsed brown lentils and the stock and bring to a simmer.\n' +
      '3. Cook for 20 minutes until the lentils and carrots are soft.\n' +
      '4. Blend until smooth, season and sharpen with a squeeze of lemon.\n' +
      '5. Serve with a swirl of Greek yoghurt and a scatter of coriander.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '500g' },
      { rawName: 'Brown lentils', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Greek yoghurt', rawMeasure: 'to serve' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted tomato and red pepper soup',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the tomatoes and peppers, scatter in a roasting tin with the onion and garlic, drizzle with olive oil and season.\n' +
      '2. Roast for 30 minutes until soft and lightly charred.\n' +
      '3. Tip the roasted vegetables into a pan with the stock and a pinch of smoked paprika and simmer for 5 minutes.\n' +
      '4. Blend until smooth, season and finish with a swirl of olive oil and torn basil. Serve with bread.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '8' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2 red' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Orzo with prawns, lemon and dill',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Heat the olive oil in a wide pan and soften the onion for 6 minutes, then add the garlic.\n' +
      '2. Stir in the orzo to toast for a minute, then add the chopped tomatoes and hot stock.\n' +
      '3. Simmer, stirring often, for 12–14 minutes until the orzo is tender and creamy.\n' +
      '4. Stir through the prawns and cook for 3–4 minutes until pink.\n' +
      '5. Finish with lemon, dill and seasoning and serve at once.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '300g orzo' },
      { rawName: 'Prawns', rawMeasure: '300g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Dill', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled vegetable and halloumi-style feta skewers',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Cut the courgette, peppers and red onion into chunks and toss with the olive oil, oregano, garlic and seasoning.\n' +
      '2. Thread onto skewers with the cherry tomatoes and cubes of feta.\n' +
      '3. Heat a griddle or grill to high and cook the skewers for 8–10 minutes, turning, until the vegetables are charred and tender.\n' +
      '4. Squeeze over the lemon and serve with bulgur wheat or flatbread.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '12' },
      { rawName: 'Feta', rawMeasure: '200g firm' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Bulgur wheat', rawMeasure: '200g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea and roasted vegetable bulgur bowl',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the chopped courgette, aubergine and peppers with the drained chickpeas, olive oil, cumin and seasoning and roast for 30 minutes.\n' +
      '2. Cook the bulgur wheat in boiling stock for 12 minutes until tender, then drain.\n' +
      '3. Fold the roasted vegetables and chickpeas through the bulgur with the lemon juice and parsley.\n' +
      '4. Top with a spoonful of hummus and a scatter of mint to serve.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '200g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Hummus', rawMeasure: '4 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked feta with cherry tomatoes and olives',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Tip the cherry tomatoes and olives into a baking dish with the garlic, oregano, chilli flakes and olive oil.\n' +
      '2. Nestle the block of feta into the middle and drizzle it with a little more oil.\n' +
      '3. Bake for 25–30 minutes until the tomatoes burst and the feta is soft and golden.\n' +
      '4. Crush everything together lightly, scatter with basil and toss through cooked pasta or serve with bread.',
    rawLines: [
      { rawName: 'Feta', rawMeasure: '200g block' },
      { rawName: 'Cherry tomato', rawMeasure: '400g' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemon, herb and pea wholegrain risotto',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the olive oil in a wide pan and soften the onion for 8 minutes, then add the garlic.\n' +
      '2. Stir in the brown rice to coat, then add the hot stock a ladle at a time, stirring, until the rice is tender and creamy — this takes about 30 minutes for brown rice.\n' +
      '3. Stir in the peas for the final 5 minutes.\n' +
      '4. Finish with the lemon zest and juice, grated Parmesan and chopped parsley. Season and serve.',
    rawLines: [
      { rawName: 'Brown rice', rawMeasure: '300g' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Black-eyed bean and tomato stew with greens',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil and soften the onion, carrot and celery for 10 minutes, then add the garlic.\n' +
      '2. Stir in the chopped tomatoes and a splash of water, then tip in the drained black beans.\n' +
      '3. Simmer for 15 minutes until thickened, then fold through the kale and cook until tender.\n' +
      '4. Season, finish with lemon and a drizzle of olive oil and serve with bread.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Kale', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Salmon, fennel and orange salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Season the salmon fillets, drizzle with a little olive oil and bake for 12–15 minutes until just cooked, then flake.\n' +
      '2. Very thinly slice the fennel and segment the orange.\n' +
      '3. Whisk the olive oil with the juice of half the orange to make a dressing and toss with the rocket.\n' +
      '4. Arrange the fennel, orange and flaked salmon over the leaves, scatter with dill and serve.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2 fillets' },
      { rawName: 'Fennel', rawMeasure: '1 bulb' },
      { rawName: 'Orange', rawMeasure: '1' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Dill', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced chickpea and aubergine tagine',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Moroccan',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a heavy pan and fry the diced aubergine until golden. Lift out and set aside.\n' +
      '2. Soften the onion in the pan for 8 minutes, then add the garlic, ginger, cumin, cinnamon and ras el hanout.\n' +
      '3. Stir in the chopped tomatoes, the drained chickpeas and a splash of water, then return the aubergine.\n' +
      '4. Simmer gently for 20 minutes until rich and thick. Season and stir through coriander.\n' +
      '5. Serve over couscous with a squeeze of lemon.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Aubergine', rawMeasure: '1 large' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tsp grated' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Ras el hanout', rawMeasure: '1 tbsp' },
      { rawName: 'Couscous', rawMeasure: '250g' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
]
