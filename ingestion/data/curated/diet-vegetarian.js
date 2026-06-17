// Curated VEGETARIAN recipes for Larder (per-diet floor seed).
//
// Each record is culinary content ONLY — source/sourceId/imageUrl boilerplate is
// added by sources/curated.js (mapCurated). Method prose is original, written
// fresh in British English; no website wording is copied. Ingredient lines use
// vocabulary from data/ingredients.js so they resolve cleanly.
//
// STRICT VEGETARIAN GUARANTEE — every recipe here EXCLUDES:
//   meat, poultry, fish, shellfish, gelatine, animal rennet, lard, suet.
// Deliberate substitutions made to keep the guarantee honest:
//   • No Worcestershire sauce (contains anchovy) — soy sauce / mushroom ketchup
//     style seasonings or plain stock used instead.
//   • No Parmesan / Parmigiano-Reggiano / Pecorino / Manchego (animal rennet) —
//     Cheddar, feta, paneer, mozzarella, goat's cheese used; "vegetarian hard
//     cheese" called out in prose where a parmesan-style finish is wanted.
//   • "Stock cube" is always vegetable stock (called out in the measure).
//   • Pastry is butter-based (no lard/suet); puff/filo are the dairy kinds.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     healthLabels, instructions, rawLines:[{rawName, rawMeasure}] }
//
// dietLabels/healthLabels are tagged honestly: a dish may also be Vegan and/or
// Gluten-free etc. healthLabels is an extra field (mapCurated reads dietLabels);
// it records the free-from facts the Verify phase can trust for curated records.

export default [
  // ── Soups & light lunches ────────────────────────────────────────────────
  {
    title: 'Roasted tomato and basil soup',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the tomatoes and tip into a roasting tin with the onion wedges and garlic cloves. Drizzle with olive oil, season and roast for 30 minutes until soft and lightly charred.\n' +
      '2. Squeeze the garlic from its skins and scrape everything into a pan. Pour in the vegetable stock and add most of the basil.\n' +
      '3. Simmer for 5 minutes, then blend until smooth. Stir through the double cream and season to taste.\n' +
      '4. Reheat gently without boiling, scatter with the remaining basil and serve with crusty bread.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '1kg' },
      { rawName: 'Onion', rawMeasure: '1, cut into wedges' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Stock cube', rawMeasure: '1 vegetable, made up to 400ml' },
      { rawName: 'Double cream', rawMeasure: '75ml' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced carrot and coriander soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the chopped onion in the olive oil for 5 minutes. Add the sliced carrots and ground coriander and stir for a minute.\n' +
      '2. Pour in the vegetable stock, bring to the boil and simmer for 20 minutes until the carrots are very tender.\n' +
      '3. Stir in most of the fresh coriander, then blend until completely smooth.\n' +
      '4. Season to taste, loosen with a little water if needed and serve scattered with the remaining coriander.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Stock cube', rawMeasure: '1 vegetable, made up to 900ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced parsnip and apple soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the onion in the olive oil for 5 minutes. Stir in the curry powder and cook for a minute until fragrant.\n' +
      '2. Add the diced parsnip and apple, stir to coat, then pour in the vegetable stock.\n' +
      '3. Simmer for 20–25 minutes until the parsnips are soft, then blend until silky.\n' +
      '4. Season well and serve, swirled with a little coconut milk if you like.',
    rawLines: [
      { rawName: 'Parsnip', rawMeasure: '600g' },
      { rawName: 'Apple', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Curry powder', rawMeasure: '2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1 vegetable, made up to 1 litre' },
      { rawName: 'Coconut milk', rawMeasure: '4 tbsp (optional)' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Minestrone with cannellini beans',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the onion, carrot and celery in the olive oil for 8–10 minutes. Add the garlic and cook for a minute.\n' +
      '2. Stir in the chopped tomatoes and vegetable stock, bring to the boil and add the cannellini beans.\n' +
      '3. Simmer for 15 minutes, then add the small pasta and the courgette and cook for a further 10 minutes until tender.\n' +
      '4. Season generously, stir through the parsley and serve with a little grated vegetarian hard cheese if you wish.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pasta', rawMeasure: '100g small shapes' },
      { rawName: 'Stock cube', rawMeasure: '1 vegetable, made up to 1 litre' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced red lentil and tomato soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the onion in the olive oil for 5 minutes. Stir in the cumin and turmeric and cook for a minute.\n' +
      '2. Add the rinsed lentils, chopped tomatoes and vegetable stock. Bring to the boil and simmer for 25 minutes until the lentils have collapsed.\n' +
      '3. Blend roughly for a rustic texture, or leave whole. Season well and sharpen with a squeeze of lemon.\n' +
      '4. Serve scattered with coriander and warm naan or bread on the side.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g red split lentils' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1 vegetable, made up to 900ml' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Curries, dals & rice ─────────────────────────────────────────────────
  {
    title: 'Chickpea and spinach curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the onion in the vegetable oil for 6–8 minutes. Add the garlic, ginger and garam masala and cook for a minute until fragrant.\n' +
      '2. Stir in the chopped tomatoes and simmer for 5 minutes until thickened.\n' +
      '3. Add the drained chickpeas and a splash of water, then simmer for 10 minutes.\n' +
      '4. Stir through the spinach in handfuls until wilted, season to taste and finish with a squeeze of lemon. Serve with rice.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each), drained' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paneer butter masala',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free'],
    instructions:
      '1. Cut the paneer into cubes and fry gently in a little butter until lightly golden on all sides. Lift out and set aside.\n' +
      '2. Soften the onion in the same pan, then add the garlic, ginger and garam masala and cook for a minute.\n' +
      '3. Stir in the chopped tomatoes and tomato purée and simmer for 10 minutes, then blend to a smooth sauce and return to the pan.\n' +
      '4. Stir in the double cream, return the paneer and warm through for 5 minutes. Season and finish with coriander. Serve with rice or naan.',
    rawLines: [
      { rawName: 'Paneer', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Saag paneer',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Cut the paneer into cubes and fry in the ghee until golden; lift out and set aside.\n' +
      '2. Soften the onion in the same pan, then add the garlic, ginger and cumin and cook for a minute.\n' +
      '3. Wilt the spinach in handfuls, then blitz to a coarse purée and return to the pan.\n' +
      '4. Stir in the garam masala and a splash of water, return the paneer and warm through. Season and serve with rice.',
    rawLines: [
      { rawName: 'Paneer', rawMeasure: '400g' },
      { rawName: 'Spinach', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Ghee', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tarka dal',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Rinse the lentils and tip into a pan with the turmeric and plenty of water. Simmer for 25–30 minutes, skimming, until soft and soupy.\n' +
      '2. For the tarka, heat the vegetable oil in a small pan and fry the cumin seeds until they crackle.\n' +
      '3. Add the sliced garlic and chilli and fry until the garlic is golden, then stir in the chilli powder.\n' +
      '4. Pour the sizzling tarka over the dal, season with salt and finish with coriander. Serve with rice.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g red split lentils' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp seeds' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable biryani',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Rinse the basmati rice and parboil in salted water for 6 minutes, then drain.\n' +
      '2. Soften the onion in the vegetable oil, then add the garlic, ginger and biryani masala and cook for a minute.\n' +
      '3. Stir in the diced carrot, cauliflower and peas with a splash of water and cook for 8 minutes until almost tender.\n' +
      '4. Layer the rice over the vegetables, scatter with the saffron soaked in a little hot water, cover tightly and steam over a low heat for 12–15 minutes.\n' +
      '5. Fork through gently, season and finish with coriander.',
    rawLines: [
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Cauliflower', rawMeasure: '1/2 head' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Biryani masala', rawMeasure: '2 tbsp' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai green vegetable curry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Fry the Thai green curry paste in a little vegetable oil for a minute until fragrant.\n' +
      '2. Pour in the coconut milk and bring to a gentle simmer.\n' +
      '3. Add the aubergine, pepper and mangetout and simmer for 8–10 minutes until tender.\n' +
      '4. Season with soy sauce and a squeeze of lime, stir through the basil and serve with rice. (Use a fish-free, vegetarian curry paste.)',
    rawLines: [
      { rawName: 'Thai green curry paste', rawMeasure: '3 tbsp (vegetarian)' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1, sliced' },
      { rawName: 'Mangetout', rawMeasure: '150g' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Sweet potato and chickpea tagine',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the onion in the olive oil for 6–8 minutes. Add the garlic and ras el hanout and cook for a minute.\n' +
      '2. Stir in the diced sweet potato, chopped tomatoes and vegetable stock. Bring to the boil.\n' +
      '3. Add the drained chickpeas and dried apricots, then simmer for 25 minutes until the sweet potato is tender and the sauce thick.\n' +
      '4. Season, scatter with coriander and serve with couscous.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '600g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ras el hanout', rawMeasure: '2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Dried apricots', rawMeasure: '75g' },
      { rawName: 'Stock cube', rawMeasure: '1 vegetable, made up to 300ml' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Egg fried rice with vegetables',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Dairy-free', 'Nut-free'],
    instructions:
      '1. Heat the sesame oil and a little vegetable oil in a wok over a high heat. Add the spring onions, peas and sweetcorn and stir-fry for 2 minutes.\n' +
      '2. Push the vegetables to one side, pour in the beaten eggs and scramble until just set.\n' +
      '3. Tip in the cooked, cold rice and toss everything together over a high heat for 3–4 minutes.\n' +
      '4. Season with soy sauce, scatter with extra spring onion and serve at once.',
    rawLines: [
      { rawName: 'Rice', rawMeasure: '300g cooked and cooled' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Peas', rawMeasure: '80g' },
      { rawName: 'Sweetcorn', rawMeasure: '80g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },

  // ── Pasta & gnocchi ──────────────────────────────────────────────────────
  {
    title: 'Spaghetti with tomato and basil sauce',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the garlic gently in the olive oil for a minute without colouring.\n' +
      '2. Add the passata and a pinch of sugar, season and simmer for 15 minutes until rich and thickened.\n' +
      '3. Meanwhile cook the spaghetti in plenty of salted boiling water until al dente, then drain, saving a little water.\n' +
      '4. Toss the pasta through the sauce with a splash of the reserved water, stir through the basil and serve.',
    rawLines: [
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Penne arrabbiata',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Gently fry the garlic and chilli flakes in the olive oil for a minute until fragrant.\n' +
      '2. Pour in the chopped tomatoes, season and simmer for 12–15 minutes until thick and glossy.\n' +
      '3. Cook the penne in salted boiling water until al dente, then drain.\n' +
      '4. Toss the pasta through the spicy sauce, stir in the parsley and serve.',
    rawLines: [
      { rawName: 'Penne', rawMeasure: '400g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Three-cheese macaroni bake',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Egg-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cook the macaroni in salted boiling water until just al dente, then drain.\n' +
      '2. Melt the butter in a pan, stir in the flour and cook for a minute. Gradually whisk in the milk to a smooth sauce and simmer until thickened.\n' +
      '3. Off the heat stir in the cream cheese, most of the grated Cheddar and the mustard; season well.\n' +
      '4. Fold the macaroni through the sauce, tip into a baking dish and scatter with the remaining Cheddar, the torn mozzarella and the breadcrumbs.\n' +
      '5. Bake for 20–25 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '350g macaroni' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Mozzarella', rawMeasure: '100g' },
      { rawName: 'Cream cheese', rawMeasure: '100g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Breadcrumbs', rawMeasure: '30g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted vegetable lasagne',
    servingsBase: 6,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Egg-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, aubergine and peppers in olive oil and roast for 25 minutes until soft and lightly charred.\n' +
      '2. Simmer the passata with the garlic and basil for 10 minutes to a thick sauce; season. Fold the roasted vegetables through.\n' +
      '3. For the white sauce, melt the butter, stir in the flour, then whisk in the milk and simmer until thickened. Season.\n' +
      '4. Layer the vegetable sauce, lasagne sheets and white sauce in a dish, finishing with white sauce and the grated mozzarella and Cheddar.\n' +
      '5. Bake for 35–40 minutes until golden and bubbling. Rest for 10 minutes before serving.',
    rawLines: [
      { rawName: 'Lasagne sheets', rawMeasure: '12 sheets' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Passata', rawMeasure: '700g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Milk', rawMeasure: '700ml' },
      { rawName: 'Mozzarella', rawMeasure: '125g' },
      { rawName: 'Cheddar cheese', rawMeasure: '75g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Creamy mushroom and spinach pasta',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Egg-free', 'Nut-free'],
    instructions:
      '1. Cook the pasta in salted boiling water until al dente, then drain, saving a little water.\n' +
      '2. Meanwhile fry the sliced mushrooms in the butter over a high heat until golden. Add the garlic and cook for a minute.\n' +
      '3. Pour in the double cream and simmer for 2–3 minutes, then wilt in the spinach.\n' +
      '4. Toss the pasta through the sauce with a splash of the reserved water, season and finish with a little grated vegetarian hard cheese.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '400g' },
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Double cream', rawMeasure: '200ml' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spinach and ricotta cannelloni',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Wilt the spinach in a dry pan, then squeeze out the excess water and chop. Mix with the ricotta, half the grated mozzarella, the egg and a grating of nutmeg; season.\n' +
      '2. Spoon the filling into fresh lasagne sheets and roll up, or pipe into cannelloni tubes. Sit seam-side down in a baking dish.\n' +
      '3. Simmer the passata with the garlic for 10 minutes, season, and pour over the rolls.\n' +
      '4. Heat the oven to 190°C (fan 170°C). Scatter with the remaining mozzarella and bake for 30–35 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Lasagne sheets', rawMeasure: '8 fresh sheets' },
      { rawName: 'Spinach', rawMeasure: '400g' },
      { rawName: 'Ricotta', rawMeasure: '250g' },
      { rawName: 'Mozzarella', rawMeasure: '125g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Gnocchi with sage butter',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Boil the potatoes in their skins until tender, then peel while warm and mash or rice until smooth.\n' +
      '2. Mix in the flour and egg yolk with a little salt to a soft dough. Roll into ropes and cut into small pillows, marking each with a fork.\n' +
      '3. Cook the gnocchi in batches in salted boiling water; they are ready when they bob to the surface. Lift out.\n' +
      '4. Melt the butter in a pan until foaming, add the sage and fry until crisp. Toss the gnocchi through and finish with grated vegetarian hard cheese.',
    rawLines: [
      { rawName: 'Floury potatoes', rawMeasure: '800g' },
      { rawName: 'Plain flour', rawMeasure: '200g' },
      { rawName: 'Egg yolk', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Sage', rawMeasure: '8 leaves' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Bakes, gratins & roasts ──────────────────────────────────────────────
  {
    title: 'Vegetable cottage pie with lentils',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the onion, carrot and celery in the olive oil for 8–10 minutes. Stir in the tomato purée and cook for a minute.\n' +
      '2. Add the green lentils, chopped tomatoes and vegetable stock. Simmer for 25 minutes until thick, then stir through the peas.\n' +
      '3. Meanwhile boil the potatoes until tender, drain and mash with a splash of olive oil (or butter if not keeping it vegan); season.\n' +
      '4. Heat the oven to 200°C (fan 180°C). Spoon the lentils into a dish, top with the mash, fork the surface and bake for 25–30 minutes until golden.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g green lentils' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1 vegetable, made up to 300ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine parmigiana',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Slice the aubergines lengthways, brush with olive oil and griddle or roast until soft and golden.\n' +
      '2. Simmer the passata with the garlic and basil for 15 minutes to a thick sauce; season.\n' +
      '3. Heat the oven to 190°C (fan 170°C). Layer the aubergine, tomato sauce and torn mozzarella in a dish, finishing with sauce and a layer of grated vegetarian hard cheese.\n' +
      '4. Bake for 30–35 minutes until bubbling and golden. Rest for 10 minutes before serving.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '3' },
      { rawName: 'Passata', rawMeasure: '700g' },
      { rawName: 'Mozzarella', rawMeasure: '250g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed peppers with rice and feta',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers and remove the seeds, then sit them cut-side up in a baking dish.\n' +
      '2. Soften the onion in the olive oil, add the garlic, then stir in the cooked rice, chopped tomatoes and oregano. Season and warm through.\n' +
      '3. Spoon the filling into the pepper halves and crumble over the feta.\n' +
      '4. Cover with foil and bake for 25 minutes, then uncover and bake for a further 15 minutes until the peppers are tender. Finish with parsley.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4' },
      { rawName: 'Rice', rawMeasure: '250g cooked' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1/2 tin (200g)' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Butternut squash and sage risotto',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the diced butternut squash in olive oil and roast for 25 minutes until soft and caramelised.\n' +
      '2. Soften the onion in the butter, stir in the risotto rice and coat for a minute.\n' +
      '3. Add the hot vegetable stock a ladleful at a time, stirring, until the rice is creamy and tender, about 18 minutes.\n' +
      '4. Stir through the roasted squash, the crisped sage and a little grated vegetarian hard cheese. Season and serve.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '600g' },
      { rawName: 'Paella rice', rawMeasure: '300g risotto rice' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Sage', rawMeasure: '8 leaves' },
      { rawName: 'Stock cube', rawMeasure: '2 vegetable, made up to 1 litre' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and ale pie',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Egg-free', 'Nut-free'],
    instructions:
      '1. Fry the sliced mushrooms in the butter over a high heat until golden. Add the onion and soften for 5 minutes.\n' +
      '2. Stir in the flour, then gradually add the ale and vegetable stock and simmer until thick and glossy. Season well.\n' +
      '3. Heat the oven to 200°C (fan 180°C). Tip the filling into a pie dish and leave to cool a little.\n' +
      '4. Roll out the puff pastry, lay it over the dish, trim and crimp, then cut a steam hole and brush with milk.\n' +
      '5. Bake for 30–35 minutes until the pastry is deep golden and crisp.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ale', rawMeasure: '200ml' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1 vegetable, made up to 200ml' },
      { rawName: 'Puff pastry', rawMeasure: '320g' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Milk', rawMeasure: '1 tbsp, to glaze' },
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
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Wilt the spinach in a dry pan, then squeeze out the water and chop. Mix with the crumbled feta, beaten eggs, spring onions and dill; season.\n' +
      '2. Heat the oven to 190°C (fan 170°C). Brush each filo sheet with melted butter and layer half of them into a tin, letting them overhang.\n' +
      '3. Spread the filling over, then layer the remaining buttered filo on top, tucking in the edges.\n' +
      '4. Brush the top with butter and bake for 35–40 minutes until deep golden and crisp.',
    rawLines: [
      { rawName: 'Filo pastry', rawMeasure: '270g (1 packet)' },
      { rawName: 'Spinach', rawMeasure: '500g' },
      { rawName: 'Feta', rawMeasure: '200g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Dill', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Butter', rawMeasure: '75g, melted' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cheese, onion and potato pasty',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Rub the butter into the flour with a pinch of salt, then bring together with cold water into a firm dough. Wrap and chill for 30 minutes.\n' +
      '2. Boil the diced potato until just tender, drain and cool. Mix with the grated Cheddar, finely chopped onion and mustard; season well.\n' +
      '3. Heat the oven to 200°C (fan 180°C). Roll the pastry and cut four circles. Pile the filling onto one half of each.\n' +
      '4. Brush the edges with beaten egg, fold over and crimp into a seal. Brush all over with egg.\n' +
      '5. Bake for 30–35 minutes until deep golden. Cool a little before eating.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '350g' },
      { rawName: 'Butter', rawMeasure: '175g' },
      { rawName: 'Potato', rawMeasure: '250g' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Potato, leek and cheese gratin',
    servingsBase: 4,
    totalTimeMinutes: 80,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Soften the sliced leeks in the butter for 8 minutes until tender.\n' +
      '2. Warm the milk and double cream together with the garlic; season generously.\n' +
      '3. Layer the thinly sliced potatoes and leeks in a buttered dish, pouring over the creamy milk as you go.\n' +
      '4. Scatter with the grated Cheddar and bake for 55–60 minutes until the potatoes are tender and the top is golden.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Leek', rawMeasure: '2' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Double cream', rawMeasure: '200ml' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed butternut squash',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the squashes lengthways, scoop out the seeds, brush with olive oil and roast cut-side down for 35 minutes.\n' +
      '2. Meanwhile soften the onion in olive oil, add the garlic, then stir in the cooked quinoa, dried cranberries and toasted pine nuts. Season.\n' +
      '3. Turn the squash over, scoop a little flesh into the stuffing, then pile the mixture into the halves.\n' +
      '4. Crumble over the feta and return to the oven for 15 minutes until hot and golden. Finish with parsley.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '2 small' },
      { rawName: 'Quinoa', rawMeasure: '200g cooked' },
      { rawName: 'Dried cranberries', rawMeasure: '50g' },
      { rawName: 'Pine nuts', rawMeasure: '30g' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Burgers, fritters & beans ────────────────────────────────────────────
  {
    title: 'Halloumi-style chickpea burgers',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Mash the drained chickpeas roughly with a fork, leaving some texture. Mix in the grated Cheddar, breadcrumbs, egg, spring onions and cumin; season.\n' +
      '2. Shape into four patties and chill for 15 minutes to firm up.\n' +
      '3. Fry in a little olive oil for 4–5 minutes each side until golden and hot through.\n' +
      '4. Serve in toasted buns with lettuce, sliced tomato and a spoonful of mayonnaise.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each), drained' },
      { rawName: 'Cheddar cheese', rawMeasure: '75g, grated' },
      { rawName: 'Breadcrumbs', rawMeasure: '60g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Burger bun', rawMeasure: '4' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Tomato', rawMeasure: '1, sliced' },
      { rawName: 'Mayonnaise', rawMeasure: '2 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Falafel with tahini sauce',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Blitz the drained chickpeas with the onion, garlic, cumin, coriander and parsley to a coarse paste. Stir in the gram flour and season.\n' +
      '2. Shape into small patties and chill for 20 minutes.\n' +
      '3. Shallow-fry in hot vegetable oil for 3–4 minutes each side until deep golden and crisp; drain.\n' +
      '4. Loosen the tahini with lemon juice and a little water to a pourable sauce. Serve the falafel in warm pitta with salad and the tahini sauce.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each), drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Gram flour', rawMeasure: '3 tbsp' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Vegetable oil', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sweetcorn fritters',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Whisk the flour, eggs and milk into a thick batter, then stir in the sweetcorn, spring onions and chilli. Season.\n' +
      '2. Heat a little vegetable oil in a frying pan over a medium heat.\n' +
      '3. Drop spoonfuls of the batter into the pan and flatten slightly. Fry for 2–3 minutes each side until golden.\n' +
      '4. Serve hot, stacked, with a poached egg or a dollop of soured cream.',
    rawLines: [
      { rawName: 'Sweetcorn', rawMeasure: '300g' },
      { rawName: 'Plain flour', rawMeasure: '100g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Milk', rawMeasure: '80ml' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spicy bean burritos',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the onion in the vegetable oil, add the garlic and cumin and cook for a minute.\n' +
      '2. Stir in the kidney beans, black beans and chopped tomatoes, then simmer for 10 minutes until thick. Mash a little to bind. Season.\n' +
      '3. Warm the tortillas. Spoon the beans down the centre with the cooked rice and a little salsa.\n' +
      '4. Fold in the ends and roll up tightly. Serve with extra salsa. (Top with cheese and soured cream if not keeping it vegan.)',
    rawLines: [
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Black beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Rice', rawMeasure: '200g cooked' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Tortilla wrap', rawMeasure: '4 large' },
      { rawName: 'Salsa', rawMeasure: '4 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable chilli with kidney beans',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the onion and peppers in the olive oil for 8 minutes. Add the garlic, cumin and chilli powder and cook for a minute.\n' +
      '2. Stir in the chopped tomatoes, kidney beans and sweetcorn with a splash of water.\n' +
      '3. Simmer for 25 minutes until rich and thick, stirring now and then. Season to taste.\n' +
      '4. Serve over rice with a squeeze of lime and a scattering of coriander.',
    rawLines: [
      { rawName: 'Kidney beans', rawMeasure: '2 tins (400g each), drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Sweetcorn', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bean and vegetable enchiladas',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the onion and pepper in the vegetable oil, add the garlic and cumin and cook for a minute. Stir in the black beans and sweetcorn; season.\n' +
      '2. Heat the oven to 190°C (fan 170°C). Spoon a little enchilada sauce over the base of a dish.\n' +
      '3. Fill each tortilla with the bean mixture, roll up and sit seam-side down in the dish.\n' +
      '4. Pour over the remaining enchilada sauce and scatter with grated Cheddar.\n' +
      '5. Bake for 20–25 minutes until bubbling and golden. Finish with coriander.',
    rawLines: [
      { rawName: 'Tortilla wrap', rawMeasure: '8 small' },
      { rawName: 'Black beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Sweetcorn', rawMeasure: '150g' },
      { rawName: 'Mixed peppers', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Enchilada sauce', rawMeasure: '1 jar (400g)' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Eggs & brunch ────────────────────────────────────────────────────────
  {
    title: 'Spanish-style vegetable omelette',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Slice the potatoes thinly and soften gently in the olive oil with the sliced onion for 15 minutes until tender but not coloured. Drain off most of the oil.\n' +
      '2. Beat the eggs in a bowl, season, then fold in the warm potatoes and onion.\n' +
      '3. Return to the pan over a low heat and cook for 8–10 minutes until set around the edges.\n' +
      '4. Slide onto a plate, flip back into the pan and cook the other side for 4–5 minutes until just set. Rest before cutting into wedges.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Shakshuka',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Soften the onion and pepper in the olive oil for 8 minutes. Add the garlic, cumin and paprika and cook for a minute.\n' +
      '2. Stir in the chopped tomatoes and simmer for 10 minutes until thick. Season.\n' +
      '3. Make four wells in the sauce and crack an egg into each. Cover and cook gently for 6–8 minutes until the whites are set but the yolks still soft.\n' +
      '4. Scatter with coriander and serve straight from the pan with crusty bread.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cheese and tomato frittata',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the grill to medium. Beat the eggs with the milk, season, and stir in most of the grated Cheddar.\n' +
      '2. Soften the spring onions in the butter in an ovenproof frying pan, then scatter in the halved cherry tomatoes.\n' +
      '3. Pour in the egg mixture and cook gently for 6–8 minutes until almost set.\n' +
      '4. Scatter with the remaining cheese and slide under the grill for 3–4 minutes until puffed and golden. Cut into wedges.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Milk', rawMeasure: '3 tbsp' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Eggs Florentine',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Wilt the spinach in the butter, season with a little nutmeg and keep warm.\n' +
      '2. Poach the eggs in barely simmering water with a splash of vinegar for 3 minutes until the whites are set.\n' +
      '3. For a quick hollandaise, whisk the egg yolks with lemon juice over a pan of gentle heat, then slowly whisk in the melted butter until thick. Season.\n' +
      '4. Toast and butter the muffins, top with the spinach and poached eggs and spoon over the hollandaise.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4 (plus 2 yolks for the sauce)' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'English muffins', rawMeasure: '2' },
      { rawName: 'Butter', rawMeasure: '120g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and cheese omelette',
    servingsBase: 1,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Nut-free'],
    instructions:
      '1. Fry the sliced mushrooms in a little butter until golden; set aside.\n' +
      '2. Beat the eggs with a pinch of salt. Melt the remaining butter in a non-stick pan over a medium heat.\n' +
      '3. Pour in the eggs and, as they set, draw the edges into the centre, tilting the pan to fill the gaps.\n' +
      '4. While still slightly soft, scatter over the mushrooms and grated Cheddar, fold in half and slide onto a plate.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Mushroom', rawMeasure: '80g' },
      { rawName: 'Cheddar cheese', rawMeasure: '40g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },

  // ── Stir-fries, noodles & tofu ───────────────────────────────────────────
  {
    title: 'Tofu and vegetable stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Press the tofu to remove excess water, cut into cubes and fry in the vegetable oil until golden on all sides. Lift out.\n' +
      '2. Stir-fry the broccoli, pepper and mangetout over a high heat for 3–4 minutes until just tender.\n' +
      '3. Add the garlic and ginger and cook for a minute, then return the tofu.\n' +
      '4. Pour in the soy sauce and sweet chilli sauce, toss to coat and finish with sesame oil. Serve with rice or noodles.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g firm' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Mangetout', rawMeasure: '100g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sweet chilli sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Vegetable pad thai',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Soak the rice noodles in hot water until pliable, then drain.\n' +
      '2. Heat the vegetable oil in a wok and scramble the eggs briefly, then push to one side.\n' +
      '3. Add the tofu, beansprouts and spring onions and stir-fry for 2 minutes.\n' +
      '4. Toss in the noodles with the soy sauce, tamarind and a pinch of sugar, stir-frying until coated and hot.\n' +
      '5. Serve scattered with crushed peanuts and lime wedges. (Use a fish-free, vegetarian sauce.)',
    rawLines: [
      { rawName: 'Rice vermicelli', rawMeasure: '250g flat rice noodles' },
      { rawName: 'Tofu', rawMeasure: '200g firm' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Bean sprouts', rawMeasure: '150g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Tamarind paste', rawMeasure: '1 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Peanuts', rawMeasure: '40g, crushed' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Singapore-style vegetable noodles',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soak the rice noodles in hot water until pliable, then drain.\n' +
      '2. Stir-fry the pepper, carrot and pak choi in the vegetable oil over a high heat for 3 minutes.\n' +
      '3. Add the garlic, ginger and curry powder and cook for a minute until fragrant.\n' +
      '4. Toss in the noodles and beansprouts with the soy sauce, stir-frying until hot and evenly coated. Finish with sesame oil and spring onion.',
    rawLines: [
      { rawName: 'Rice vermicelli', rawMeasure: '250g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Bean sprouts', rawMeasure: '100g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Curry powder', rawMeasure: '2 tsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Sweet and sour tofu',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Press and cube the tofu, toss in the cornflour and fry in the vegetable oil until golden and crisp. Lift out.\n' +
      '2. Stir-fry the pepper and onion for 3 minutes, then add the pineapple chunks.\n' +
      '3. Stir together the tomato ketchup, vinegar, soy sauce and sugar with a splash of water, pour in and bubble until glossy.\n' +
      '4. Return the tofu, toss to coat and serve with rice.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g firm' },
      { rawName: 'Cornflour', rawMeasure: '3 tbsp' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pineapple', rawMeasure: '200g chunks' },
      { rawName: 'Tomato ketchup', rawMeasure: '3 tbsp' },
      { rawName: 'Vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
    ],
  },

  // ── Salads & grain bowls ─────────────────────────────────────────────────
  {
    title: 'Greek salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Greek',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Cut the tomatoes into wedges and the cucumber into chunks. Slice the red onion thinly and tip everything into a bowl.\n' +
      '2. Add the olives and the feta, broken into large pieces.\n' +
      '3. Whisk the olive oil with the red wine vinegar and oregano, season, and pour over the salad.\n' +
      '4. Toss gently and serve at room temperature with bread.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Olives', rawMeasure: '100g' },
      { rawName: 'Feta', rawMeasure: '200g' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Red wine', rawMeasure: '1 tbsp vinegar' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi and roasted vegetable couscous',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Egg-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, pepper and red onion in olive oil and roast for 25 minutes.\n' +
      '2. Pour boiling vegetable stock over the couscous, cover and leave for 5 minutes, then fluff with a fork.\n' +
      '3. Fry slices of halloumi in a dry pan until golden on both sides.\n' +
      '4. Fold the roasted vegetables and most of the parsley through the couscous, top with the halloumi and finish with lemon and the remaining parsley.',
    rawLines: [
      { rawName: 'Couscous', rawMeasure: '250g' },
      { rawName: 'Feta', rawMeasure: '250g halloumi' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1 vegetable, made up to 300ml' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Quinoa and roasted vegetable salad',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Rinse the quinoa and simmer in plenty of water for 15 minutes until tender, then drain and cool.\n' +
      '2. Heat the oven to 200°C (fan 180°C). Toss the courgette, pepper and red onion in olive oil and roast for 25 minutes.\n' +
      '3. Fold the roasted vegetables, drained chickpeas and chopped parsley through the quinoa.\n' +
      '4. Dress with olive oil and lemon juice, season well and serve warm or cold.',
    rawLines: [
      { rawName: 'Quinoa', rawMeasure: '200g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beetroot, orange and goat’s cheese salad',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free'],
    instructions:
      '1. Cut the cooked beetroot into wedges and segment the oranges over a bowl to catch the juice.\n' +
      '2. Arrange the rocket on a platter and scatter over the beetroot and orange segments.\n' +
      '3. Crumble over the goat’s cheese and scatter with the toasted walnuts.\n' +
      '4. Whisk the olive oil with the reserved orange juice, season and drizzle over the salad.',
    rawLines: [
      { rawName: 'Beetroot', rawMeasure: '400g cooked' },
      { rawName: 'Orange', rawMeasure: '2' },
      { rawName: "Goat's cheese", rawMeasure: '120g' },
      { rawName: 'Rocket', rawMeasure: '100g' },
      { rawName: 'Walnuts', rawMeasure: '50g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Caprese salad',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Slice the tomatoes and the mozzarella into rounds of similar thickness.\n' +
      '2. Arrange them overlapping on a plate, alternating tomato and cheese.\n' +
      '3. Tuck the basil leaves between the slices.\n' +
      '4. Drizzle generously with olive oil, season with salt and black pepper and serve at once.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4 ripe' },
      { rawName: 'Mozzarella', rawMeasure: '250g' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi, chickpea and spinach bowl',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Warm the drained chickpeas in a pan with the cumin and a little olive oil; season.\n' +
      '2. Fry slices of halloumi in a dry pan until golden on both sides.\n' +
      '3. Pile the spinach into bowls, spoon over the warm chickpeas and top with the halloumi.\n' +
      '4. Loosen the tahini with lemon juice and water and drizzle over. Finish with parsley.',
    rawLines: [
      { rawName: 'Feta', rawMeasure: '225g halloumi' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Tahini', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Tarts, savoury bakes & light bites ───────────────────────────────────
  {
    title: 'Cheese and onion quiche',
    servingsBase: 6,
    totalTimeMinutes: 75,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Line a tart tin with the shortcrust pastry, prick the base and blind-bake for 15 minutes.\n' +
      '2. Soften the sliced onions slowly in the butter until sweet and golden, then spread over the pastry base with the grated Cheddar.\n' +
      '3. Beat the eggs with the milk and double cream, season, and pour into the case.\n' +
      '4. Bake for 30–35 minutes until just set with a slight wobble. Cool a little before serving.',
    rawLines: [
      { rawName: 'Shortcrust pastry', rawMeasure: '375g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Milk', rawMeasure: '150ml' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tomato and goat’s cheese tart',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Unroll the puff pastry onto a lined tray and score a border 2cm from the edge.\n' +
      '2. Spread the inner rectangle thinly with the pesto, keeping within the border.\n' +
      '3. Arrange the sliced tomatoes over the pesto and dot with the goat’s cheese. Drizzle with olive oil and season.\n' +
      '4. Bake for 22–25 minutes until the pastry is puffed and golden. Scatter with basil before serving.',
    rawLines: [
      { rawName: 'Puff pastry', rawMeasure: '320g' },
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: "Goat's cheese", rawMeasure: '120g' },
      { rawName: 'Basil', rawMeasure: '1 small bunch (for pesto and to finish)' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Caramelised onion and Cheddar tart',
    servingsBase: 6,
    totalTimeMinutes: 70,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Soften the sliced onions very slowly in the butter for 25–30 minutes with a pinch of sugar until deeply caramelised.\n' +
      '2. Heat the oven to 190°C (fan 170°C). Line a tart tin with the shortcrust pastry, prick and blind-bake for 15 minutes.\n' +
      '3. Spread the onions over the base and scatter with the grated Cheddar and thyme.\n' +
      '4. Beat the eggs with the double cream, season and pour over. Bake for 30 minutes until set and golden.',
    rawLines: [
      { rawName: 'Shortcrust pastry', rawMeasure: '375g' },
      { rawName: 'Onion', rawMeasure: '4' },
      { rawName: 'Cheddar cheese', rawMeasure: '120g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Double cream', rawMeasure: '200ml' },
      { rawName: 'Thyme', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Welsh leek and Caerphilly tart',
    servingsBase: 6,
    totalTimeMinutes: 75,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Line a tart tin with the shortcrust pastry, prick the base and blind-bake for 15 minutes.\n' +
      '2. Soften the sliced leeks gently in the butter for 10 minutes until tender, then spread over the pastry base.\n' +
      '3. Crumble over the cheese (a vegetarian Caerphilly or Cheddar works well).\n' +
      '4. Beat the eggs with the milk and double cream, season with nutmeg and pepper, and pour over. Bake for 30–35 minutes until just set.',
    rawLines: [
      { rawName: 'Shortcrust pastry', rawMeasure: '375g' },
      { rawName: 'Leek', rawMeasure: '3' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g (or Caerphilly)' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Milk', rawMeasure: '150ml' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Comforting plates & sides ────────────────────────────────────────────
  {
    title: 'Vegetable and bean hotpot',
    servingsBase: 4,
    totalTimeMinutes: 80,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Soften the onion, carrot and celery in the olive oil for 8 minutes. Add the garlic and cook for a minute.\n' +
      '2. Stir in the chopped tomatoes, butter beans and vegetable stock, then season well.\n' +
      '3. Tip into a casserole and arrange the thinly sliced potatoes over the top in overlapping layers. Brush with olive oil.\n' +
      '4. Cover and bake for 45 minutes, then uncover and bake for a further 25 minutes until the potatoes are golden.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g) butter beans, drained' },
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1 vegetable, made up to 400ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bubble and squeak cakes with poached egg',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Crush the cooked potatoes and mix with the shredded cooked cabbage and softened onion. Season well and shape into four cakes.\n' +
      '2. Dust lightly in flour and fry in the butter for 4–5 minutes each side until crisp and golden.\n' +
      '3. Poach the eggs in barely simmering water with a splash of vinegar for 3 minutes.\n' +
      '4. Top each cake with a poached egg and serve at once.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '500g, cooked' },
      { rawName: 'Cabbage', rawMeasure: '250g, cooked' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom risotto',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Fry the sliced mushrooms in a little butter over a high heat until golden; set aside.\n' +
      '2. Soften the onion in the remaining butter, stir in the risotto rice and coat for a minute.\n' +
      '3. Add the hot vegetable stock a ladleful at a time, stirring, until the rice is creamy and tender, about 18 minutes.\n' +
      '4. Stir through the mushrooms, the parsley and a little grated vegetarian hard cheese. Season and serve.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '300g risotto rice' },
      { rawName: 'Mushroom', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '2 vegetable, made up to 1 litre' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pea and mint risotto',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the onion in the butter, stir in the risotto rice and coat for a minute.\n' +
      '2. Add the hot vegetable stock a ladleful at a time, stirring, until the rice is almost tender, about 16 minutes.\n' +
      '3. Stir in the peas and cook for a further 3 minutes until bright and tender.\n' +
      '4. Off the heat stir through the chopped mint, lemon zest and a little grated vegetarian hard cheese. Season and serve.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '300g risotto rice' },
      { rawName: 'Peas', rawMeasure: '250g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '2 vegetable, made up to 1 litre' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi fajitas',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Egg-free', 'Nut-free'],
    instructions:
      '1. Cut the halloumi into thick batons. Slice the peppers and onion.\n' +
      '2. Fry the peppers and onion in the vegetable oil over a high heat with the fajita seasoning for 6–8 minutes until softened and charred.\n' +
      '3. Add the halloumi and fry for a few minutes until golden.\n' +
      '4. Warm the tortillas and fill with the halloumi and vegetables, a squeeze of lime and a spoonful of salsa.',
    rawLines: [
      { rawName: 'Feta', rawMeasure: '450g halloumi' },
      { rawName: 'Mixed peppers', rawMeasure: '3' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Fajita seasoning', rawMeasure: '2 tbsp' },
      { rawName: 'Tortilla wrap', rawMeasure: '8 small' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Salsa', rawMeasure: '4 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Vegetable samosas',
    servingsBase: 6,
    totalTimeMinutes: 60,
    course: 'Snack',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Boil the diced potato until tender, then drain. Soften the onion in the vegetable oil, add the garam masala, cumin and turmeric and cook for a minute.\n' +
      '2. Stir in the potato and peas, mash a little to bind, season and leave to cool.\n' +
      '3. Cut the filo into strips, brush with oil, spoon a little filling at one end and fold into triangles.\n' +
      '4. Shallow-fry in hot vegetable oil until golden and crisp, or bake at 200°C for 20 minutes. Serve with mango chutney.',
    rawLines: [
      { rawName: 'Filo pastry', rawMeasure: '270g (1 packet)' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Mango chutney', rawMeasure: 'to serve' },
      { rawName: 'Vegetable oil', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Onion bhajis',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Snack',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Slice the onions thinly and toss with the gram flour, cumin, turmeric, chilli powder and a good pinch of salt.\n' +
      '2. Add just enough cold water to bring the mixture into a thick, clinging batter.\n' +
      '3. Heat the vegetable oil to 180°C. Drop in small clumps of the mixture and fry for 3–4 minutes until deep golden and crisp.\n' +
      '4. Drain on kitchen paper and serve hot with mango chutney.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '3' },
      { rawName: 'Gram flour', rawMeasure: '150g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Mango chutney', rawMeasure: 'to serve' },
      { rawName: 'Vegetable oil', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted ratatouille',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Side',
    cuisine: 'French',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the aubergine, courgettes and peppers into chunks and tip into a large roasting tin with the onion wedges.\n' +
      '2. Add the garlic, drizzle with olive oil, season and roast for 25 minutes, turning once.\n' +
      '3. Stir in the chopped tomatoes and the herbs and return to the oven for 20 minutes until rich and soft.\n' +
      '4. Season to taste and serve warm with bread, rice or as a side.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Mixed herbs', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cheese and vegetable pasta bake',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Egg-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cook the pasta until just al dente, then drain.\n' +
      '2. Soften the onion and pepper in the olive oil, add the garlic, then stir in the passata and simmer for 10 minutes. Season.\n' +
      '3. Fold the pasta and broccoli through the sauce and tip into a baking dish.\n' +
      '4. Scatter with the grated Cheddar and bake for 20–25 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '350g' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Mixed peppers', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi and vegetable skewers',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Cut the halloumi, peppers, courgette and red onion into chunks of similar size.\n' +
      '2. Thread alternately onto skewers and brush all over with olive oil mixed with the oregano. Season.\n' +
      '3. Griddle or barbecue, turning, for 8–10 minutes until the halloumi is golden and the vegetables are charred and tender.\n' +
      '4. Finish with a squeeze of lemon and serve with flatbreads or couscous.',
    rawLines: [
      { rawName: 'Feta', rawMeasure: '450g halloumi' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
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
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the onion in the vegetable oil, then add the garlic, ginger and curry powder and cook for a minute.\n' +
      '2. Stir in the diced potato and cauliflower florets to coat in the spices.\n' +
      '3. Add the chopped tomatoes and a splash of water, then simmer covered for 20–25 minutes until the vegetables are tender.\n' +
      '4. Stir through the peas, season and finish with coriander. Serve with rice or naan.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi and mushroom breakfast hash',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Boil the diced potatoes for 6 minutes until just tender, then drain well.\n' +
      '2. Fry the potatoes in the olive oil over a high heat until crisp and golden, about 10 minutes.\n' +
      '3. Add the mushrooms and pepper and fry for 5 minutes, then add the cubed halloumi and fry until golden.\n' +
      '4. Stir through the spring onions, season with smoked paprika and black pepper and serve hot.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Feta', rawMeasure: '225g halloumi' },
      { rawName: 'Mushroom', rawMeasure: '200g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spinach and chickpea coconut curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Gluten-free', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the onion in the vegetable oil, then add the garlic, ginger and garam masala and cook for a minute.\n' +
      '2. Pour in the coconut milk and bring to a gentle simmer.\n' +
      '3. Add the drained chickpeas and simmer for 10 minutes until the sauce thickens.\n' +
      '4. Wilt in the spinach, season and sharpen with lime. Serve with rice.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each), drained' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Leek and Cheddar mash-topped pie',
    servingsBase: 4,
    totalTimeMinutes: 65,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the sliced leeks and onion in the butter for 10 minutes. Stir in the cornflour, then gradually add the milk and simmer to a thick sauce.\n' +
      '2. Stir in the drained cannellini beans and most of the grated Cheddar; season and tip into a baking dish.\n' +
      '3. Boil the potatoes until tender, drain and mash with a little butter and milk; season.\n' +
      '4. Heat the oven to 200°C (fan 180°C). Spread the mash over the filling, scatter with the remaining cheese and bake for 25–30 minutes until golden.',
    rawLines: [
      { rawName: 'Leek', rawMeasure: '3' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Cheddar cheese', rawMeasure: '120g' },
      { rawName: 'Cornflour', rawMeasure: '2 tbsp' },
      { rawName: 'Milk', rawMeasure: '400ml' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tomato and lentil bolognese',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian', 'Vegan'],
    healthLabels: ['Vegan', 'Dairy-free', 'Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the onion, carrot and celery in the olive oil for 8–10 minutes. Add the garlic and cook for a minute.\n' +
      '2. Stir in the tomato purée, then add the green lentils, chopped tomatoes and vegetable stock.\n' +
      '3. Simmer for 25–30 minutes until the lentils are tender and the sauce is rich and thick. Season well.\n' +
      '4. Cook the spaghetti until al dente, drain, and serve topped with the lentil ragù.',
    rawLines: [
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Lentils', rawMeasure: '200g green lentils' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1 vegetable, made up to 300ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi and pea fritters',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Lightly crush the cooked peas and mix with the grated halloumi, flour, eggs, spring onions and mint. Season.\n' +
      '2. Heat a little olive oil in a frying pan over a medium heat.\n' +
      '3. Drop spoonfuls of the mixture into the pan, flatten slightly, and fry for 2–3 minutes each side until golden.\n' +
      '4. Serve warm with a dollop of natural yoghurt and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Feta', rawMeasure: '225g halloumi, grated' },
      { rawName: 'Peas', rawMeasure: '250g, cooked' },
      { rawName: 'Plain flour', rawMeasure: '80g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked eggs with spinach and tomato',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Soften the onion in a little olive oil, add the garlic, then stir in the chopped tomatoes and wilt in the spinach. Season.\n' +
      '2. Divide the sauce between two small ovenproof dishes.\n' +
      '3. Make two wells in each and crack an egg into each well. Spoon a little double cream over the top.\n' +
      '4. Bake for 10–12 minutes until the whites are set but the yolks still soft. Serve with toast.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1/2 tin (200g)' },
      { rawName: 'Onion', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Double cream', rawMeasure: '2 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable korma',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Gluten-free', 'Egg-free'],
    instructions:
      '1. Soften the onion in the vegetable oil, then add the garlic, ginger and garam masala and cook for a minute.\n' +
      '2. Stir in the diced carrot, cauliflower and potato to coat in the spices.\n' +
      '3. Pour in the coconut milk and a splash of water, then simmer covered for 25 minutes until the vegetables are tender.\n' +
      '4. Stir in the ground almonds to thicken and the peas to warm through. Season and finish with coriander.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1/2 head' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Potato', rawMeasure: '300g' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Almonds', rawMeasure: '40g, ground' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cheese and spring onion potato cakes',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Mash the cooked potatoes until smooth and mix in the grated Cheddar, spring onions and one egg. Season well.\n' +
      '2. Shape into eight small cakes and dust lightly in flour.\n' +
      '3. Fry in a little butter and olive oil for 3–4 minutes each side until crisp and golden.\n' +
      '4. Serve hot as a side or with a fried egg and beans for a light meal.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '700g, cooked' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g, grated' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Plain flour', rawMeasure: '3 tbsp' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mediterranean vegetable orzo',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Egg-free', 'Nut-free'],
    instructions:
      '1. Soften the onion in the olive oil, add the garlic and courgette and cook for 5 minutes.\n' +
      '2. Stir in the orzo pasta and coat in the oil for a minute.\n' +
      '3. Add the chopped tomatoes and vegetable stock, then simmer for 12–15 minutes, stirring, until the orzo is tender and creamy.\n' +
      '4. Stir through the olives and crumble over the feta. Season and finish with basil.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '300g orzo' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1 vegetable, made up to 400ml' },
      { rawName: 'Olives', rawMeasure: '75g' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Courgette and feta fritters',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: ['Vegetarian'],
    healthLabels: ['Nut-free'],
    instructions:
      '1. Grate the courgettes, toss with a little salt and leave for 10 minutes, then squeeze out the excess water.\n' +
      '2. Mix the courgette with the crumbled feta, flour, eggs, spring onions and dill. Season with black pepper.\n' +
      '3. Heat a little olive oil in a frying pan over a medium heat.\n' +
      '4. Fry spoonfuls of the mixture for 2–3 minutes each side until golden. Serve warm with yoghurt and lemon.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '3' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Plain flour', rawMeasure: '80g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Dill', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
]
