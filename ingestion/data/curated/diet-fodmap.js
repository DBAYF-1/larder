// Curated LOW-FODMAP recipes for Larder (per-diet floor seed).
//
// Each record is culinary content ONLY — the source/sourceId/imageUrl
// boilerplate is added by sources/curated.js (mapCurated). Method prose is
// original, written fresh in British English. No website wording is copied.
//
// LOW-FODMAP DISCIPLINE (the whole point of this set). Every recipe STRICTLY
// excludes the high-FODMAP triggers an IBS eater must avoid:
//   • Alliums — onion, garlic, shallot, the white/bulb of leek and spring onion
//     (we use chives and the green spice-cupboard route for savour instead).
//   • Wheat — no plain/self-raising flour, bread, pasta, breadcrumbs, couscous,
//     puff/shortcrust pastry (so these are coeliac-friendly too).
//   • Lactose — no milk, cream, yoghurt, buttermilk, soft cheese in quantity.
//     Butter (negligible lactose) and aged hard cheeses (Cheddar, Parmesan,
//     feta in small servings) are low-FODMAP and used sparingly.
//   • Certain pulses — no chickpeas, lentils, kidney/cannellini/black/pinto/
//     baked beans, broad beans or soya beans.
//   • High-fructose fruit — no apple, pear, mango, watermelon, cherries or
//     honey; we lean on lemon, lime, orange, strawberries, firm banana,
//     pineapple and grapes (all within low-FODMAP serving sizes).
//   • Onion/garlic-laden staples — no Worcestershire sauce or standard stock
//     cubes; flavour comes from herbs, spices, ginger, chilli and a splash of
//     soy or tamari.
//
// dietLabels are tagged HONESTLY: every dish carries 'Low-FODMAP'; many are
// also genuinely Vegetarian / Vegan / Pescatarian and tagged so. The pipeline
// derives free-from (Gluten-free, Dairy-free, etc.) from the resolved lines, so
// the rawLines below use canonical dictionary vocabulary that resolves cleanly.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  {
    title: 'Low-FODMAP chicken and rice bowl',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Rinse the rice well, then simmer in plenty of salted water for 12–15 minutes until tender. Drain.\n' +
      '2. Meanwhile, toss the diced chicken with the smoked paprika, a pinch of salt and a little of the olive oil.\n' +
      '3. Heat a frying pan over a medium-high heat and cook the chicken for 8–10 minutes, turning, until golden and cooked through.\n' +
      '4. Add the diced courgette and pepper to the pan and fry for a further 4–5 minutes until just tender.\n' +
      '5. Fold the rice through the pan with a squeeze of lemon and most of the chives. Season, scatter with the remaining chives and serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Basmati rice', rawMeasure: '150g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled salmon with lemon and dill',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Heat the grill to high and line a tray with foil. Sit the salmon fillets on the tray skin-side down.\n' +
      '2. Brush the fillets with a little olive oil and season with salt and pepper. Scatter over half the dill.\n' +
      '3. Grill for 8–10 minutes until the salmon is just cooked through and flakes easily.\n' +
      '4. Meanwhile boil the new potatoes for 15 minutes until tender, then drain and toss with the butter and remaining dill.\n' +
      '5. Serve the salmon with the buttered potatoes and a generous squeeze of lemon.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'New potatoes', rawMeasure: '400g' },
      { rawName: 'Dill', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP herb omelette',
    servingsBase: 1,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Beat the eggs in a bowl with a pinch of salt, a little black pepper and most of the chopped chives.\n' +
      '2. Melt the butter in a small non-stick frying pan over a medium heat until foaming.\n' +
      '3. Pour in the eggs and, as they begin to set, draw the edges into the centre and tilt to let the runny egg flow underneath.\n' +
      '4. When almost set, scatter over the grated Cheddar and remaining chives, then fold the omelette in half.\n' +
      '5. Slide onto a warm plate and serve straight away.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Cheddar cheese', rawMeasure: '30g' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP porridge with strawberries',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Tip the oats into a pan with the water and a pinch of salt.\n' +
      '2. Bring to a gentle simmer, stirring often, and cook for 4–5 minutes until thick and creamy.\n' +
      '3. Hull and slice the strawberries.\n' +
      '4. Spoon the porridge into bowls, top with the strawberries and a scattering of sunflower seeds, and finish with a little maple-free drizzle of brown sugar.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '80g' },
      { rawName: 'Water', rawMeasure: '500ml' },
      { rawName: 'Strawberries', rawMeasure: '150g' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Brown sugar', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Low-FODMAP beef and ginger stir-fry',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Slice the beef steak thinly across the grain and toss with the cornflour and a splash of the soy sauce.\n' +
      '2. Soak the rice noodles in just-boiled water for 5 minutes until soft, then drain.\n' +
      '3. Heat the sesame oil in a wok over a high heat and stir-fry the beef for 2 minutes until browned. Lift out.\n' +
      '4. Add the sliced pepper and grated ginger and stir-fry for 2–3 minutes, then return the beef with the remaining soy sauce.\n' +
      '5. Toss through the drained noodles and the chives, heat through for a minute and serve.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '300g' },
      { rawName: 'Brown rice noodles', rawMeasure: '150g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '1 tsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Roast chicken thighs with potatoes and rosemary',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the potatoes into chunks and tip into a large roasting tin.\n' +
      '2. Sit the chicken thighs among the potatoes, drizzle everything with olive oil and scatter over the chopped rosemary.\n' +
      '3. Season well with salt and pepper and toss to coat.\n' +
      '4. Roast for 40–45 minutes, turning the potatoes once, until the chicken is golden and cooked through and the potatoes are crisp.\n' +
      '5. Squeeze over the lemon and serve with steamed green beans.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP tomato and basil rice',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a pan over a medium heat and add the rice, stirring to coat the grains.\n' +
      '2. Stir in the chopped tomatoes and the same volume of water, then season with salt and pepper.\n' +
      '3. Bring to a simmer, cover and cook gently for 18–20 minutes until the rice is tender and the liquid absorbed.\n' +
      '4. Stir through the diced courgette for the last 5 minutes of cooking.\n' +
      '5. Tear in the basil leaves, fork through and serve.',
    rawLines: [
      { rawName: 'Basmati rice', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: '15g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP cod with crushed potatoes',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Boil the new potatoes for 15 minutes until tender, then drain.\n' +
      '2. Sit the white fish fillets on a lined tray, brush with olive oil and season. Scatter over the parsley and lemon zest.\n' +
      '3. Bake the fish for 12–15 minutes until just opaque and flaking.\n' +
      '4. Lightly crush the warm potatoes with the butter, a little olive oil and salt.\n' +
      '5. Serve the fish on the crushed potatoes with a wedge of lemon and the spinach wilted alongside.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2' },
      { rawName: 'New potatoes', rawMeasure: '400g' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Parsley', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP quinoa salad with feta',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Rinse the quinoa, then simmer in salted water for 12–15 minutes until tender and the grains uncurl. Drain and cool slightly.\n' +
      '2. Dice the cucumber and pepper and halve the cherry tomatoes.\n' +
      '3. Toss the quinoa with the vegetables, olive oil and a squeeze of lemon. Season to taste.\n' +
      '4. Crumble over the feta, scatter with chives and mint, and serve.',
    rawLines: [
      { rawName: 'Quinoa', rawMeasure: '120g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '12' },
      { rawName: 'Feta', rawMeasure: '60g' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Mint', rawMeasure: '10g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP prawn and rice noodle bowl',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Soak the rice vermicelli in just-boiled water for 4 minutes until soft, then drain and refresh under cold water.\n' +
      '2. Heat the sesame oil in a wok and stir-fry the prawns with the grated ginger for 2–3 minutes until pink.\n' +
      '3. Add the sliced pepper and pak choi and stir-fry for a further 2 minutes.\n' +
      '4. Toss in the noodles, the soy sauce and the lime juice and heat through.\n' +
      '5. Scatter with chives and serve with lime wedges.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '200g' },
      { rawName: 'Rice vermicelli', rawMeasure: '150g' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP baked potato with cheese and chives',
    servingsBase: 2,
    totalTimeMinutes: 80,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes all over, rub with a little olive oil and salt.\n' +
      '2. Bake directly on the oven shelf for about 1 hour 10 minutes until the skins are crisp and the insides fluffy.\n' +
      '3. Split each potato open and add a knob of butter, fluffing the inside with a fork.\n' +
      '4. Top with grated Cheddar and let it melt into the heat.\n' +
      '5. Scatter generously with chives, season and serve.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Cheddar cheese', rawMeasure: '60g' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP turkey and courgette meatballs',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Coarsely grate the courgette and squeeze out the excess moisture. Mix with the minced turkey, oats, egg, oregano and seasoning.\n' +
      '2. Shape the mixture into walnut-sized balls.\n' +
      '3. Heat the olive oil in a frying pan and brown the meatballs all over, then lift out.\n' +
      '4. Pour the chopped tomatoes into the pan, season and simmer for 10 minutes, then return the meatballs and cook for a further 10 minutes until cooked through.\n' +
      '5. Scatter with basil and serve with rice.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Oats', rawMeasure: '40g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Basil', rawMeasure: '15g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP Spanish omelette',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Peel and thinly slice the potatoes. Heat most of the olive oil in a non-stick pan and cook the potatoes gently for 15 minutes until soft but not coloured, turning often.\n' +
      '2. Beat the eggs in a large bowl with plenty of salt and pepper, then stir in the cooked potatoes and chives.\n' +
      '3. Wipe the pan, add the remaining oil and pour in the egg and potato mixture. Cook over a low heat for 8–10 minutes until almost set.\n' +
      '4. Invert onto a plate and slide back into the pan to cook the other side for 3–4 minutes.\n' +
      '5. Cool a little, then cut into wedges and serve warm or cold.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP lemon chicken with green beans',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Flatten the chicken breasts slightly between two sheets of baking paper. Season with salt and pepper.\n' +
      '2. Heat the olive oil in a frying pan and cook the chicken for 5–6 minutes each side until golden and cooked through. Lift out and rest.\n' +
      '3. Add the lemon juice and a splash of water to the pan, scraping up the residue, and let it bubble into a light sauce. Whisk in the butter.\n' +
      '4. Meanwhile steam the green beans until just tender.\n' +
      '5. Slice the chicken, spoon over the lemon sauce and serve with the beans and a scattering of parsley.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '10g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP polenta with roasted vegetables',
    servingsBase: 2,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Chop the courgette, pepper and aubergine into chunks, toss with olive oil and salt and spread on a tray.\n' +
      '2. Roast for 25–30 minutes, turning once, until soft and caramelised at the edges.\n' +
      '3. Meanwhile bring the water to the boil with a good pinch of salt and rain in the cornmeal, whisking constantly.\n' +
      '4. Cook the polenta over a low heat for 8–10 minutes, stirring, until thick. Beat in the butter and grated Parmesan.\n' +
      '5. Spoon the soft polenta into bowls, top with the roasted vegetables and scatter with basil.',
    rawLines: [
      { rawName: 'Cornmeal', rawMeasure: '150g' },
      { rawName: 'Water', rawMeasure: '750ml' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Aubergine', rawMeasure: '1 small' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Basil', rawMeasure: '15g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP scrambled eggs on rice cakes',
    servingsBase: 1,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Beat the eggs with a pinch of salt and a little black pepper.\n' +
      '2. Melt the butter in a small non-stick pan over a low heat.\n' +
      '3. Pour in the eggs and stir gently and continuously until softly set and creamy. Take off the heat while still a touch loose.\n' +
      '4. Pile the scrambled eggs onto the rice cakes, scatter with chives and serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Rice cakes', rawMeasure: '2' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP carrot and ginger soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a large pan over a medium heat. Add the sliced carrots and grated ginger and stir for 2 minutes.\n' +
      '2. Pour in the water, add a good pinch of salt and bring to the boil.\n' +
      '3. Simmer for 25 minutes until the carrots are completely soft.\n' +
      '4. Blend until silky smooth, loosening with a little extra water if needed. Season to taste.\n' +
      '5. Ladle into bowls, scatter with chives and finish with a swirl of olive oil.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '8' },
      { rawName: 'Ginger', rawMeasure: '25g' },
      { rawName: 'Water', rawMeasure: '1 litre' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP tuna and rice salad',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Rinse the rice and simmer in salted water for 12–15 minutes until tender. Drain and cool.\n' +
      '2. Drain the tuna and flake it into a bowl.\n' +
      '3. Dice the cucumber and pepper and halve the cherry tomatoes.\n' +
      '4. Toss the rice with the tuna, vegetables, olive oil and lemon juice. Season to taste.\n' +
      '5. Fold through the chives and serve.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '1 tin (160g)' },
      { rawName: 'Basmati rice', rawMeasure: '120g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '12' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP pork and pepper skewers',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Cut the pork into bite-sized cubes and toss with the smoked paprika, soy sauce and a little olive oil. Leave to marinate for 15 minutes.\n' +
      '2. Cut the peppers and courgette into chunks.\n' +
      '3. Thread the pork and vegetables alternately onto skewers.\n' +
      '4. Cook under a hot grill or on a griddle for 12–15 minutes, turning, until the pork is cooked through and charred at the edges.\n' +
      '5. Squeeze over the lemon and serve with rice.',
    rawLines: [
      { rawName: 'Pork shoulder', rawMeasure: '600g' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP banana and oat pancakes',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Mash the firm banana in a bowl until smooth.\n' +
      '2. Blitz the oats to a flour, then beat into the banana with the eggs and a pinch of salt to a thick batter.\n' +
      '3. Melt a little butter in a non-stick frying pan over a medium heat.\n' +
      '4. Spoon in small rounds of batter and cook for 1–2 minutes each side until golden and set.\n' +
      '5. Stack the pancakes and serve topped with strawberries.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '1 firm' },
      { rawName: 'Oats', rawMeasure: '80g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Strawberries', rawMeasure: '100g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Low-FODMAP fish cakes',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Boil the potatoes until tender, drain and mash, then leave to cool slightly.\n' +
      '2. Poach the white fish in a little water for 5 minutes until it flakes, then drain and flake into the mash.\n' +
      '3. Stir in the chives, parsley, lemon zest and plenty of seasoning, then shape into eight cakes.\n' +
      '4. Coat each cake in the polenta to give a crisp crust and chill for 15 minutes.\n' +
      '5. Fry in the olive oil for 3–4 minutes each side until golden. Serve with lemon wedges.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '400g' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Cornmeal', rawMeasure: '60g' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Parsley', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP roasted aubergine with feta',
    servingsBase: 2,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the aubergines and score the cut faces in a criss-cross.\n' +
      '2. Brush generously with olive oil, season and roast cut-side up for 30 minutes until soft and golden.\n' +
      '3. Crumble the feta over the hot aubergines and return to the oven for 5 minutes.\n' +
      '4. Scatter with mint and chives, squeeze over the lemon and serve with rice.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2' },
      { rawName: 'Feta', rawMeasure: '80g' },
      { rawName: 'Mint', rawMeasure: '10g' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP chicken and rice soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Put the chicken thighs in a large pan with the water, a good pinch of salt, the sliced carrots and a bay leaf.\n' +
      '2. Bring to a gentle simmer and cook for 25 minutes until the chicken is cooked through.\n' +
      '3. Lift out the chicken, shred the meat and discard the bones and bay leaf.\n' +
      '4. Add the rice to the broth and simmer for 12–15 minutes until tender.\n' +
      '5. Return the shredded chicken, season, stir through the chives and serve.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '4' },
      { rawName: 'Basmati rice', rawMeasure: '120g' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Bay leaves', rawMeasure: '1' },
      { rawName: 'Water', rawMeasure: '1.2 litres' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP courgette and Parmesan frittata',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Heat the grill to medium. Slice the courgettes into thin rounds.\n' +
      '2. Heat the olive oil in an ovenproof frying pan and cook the courgettes for 6–8 minutes until soft and lightly golden.\n' +
      '3. Beat the eggs with the grated Parmesan, chives and seasoning, then pour over the courgettes.\n' +
      '4. Cook over a low heat for 6–8 minutes until almost set, then finish under the grill for 3–4 minutes until puffed and golden.\n' +
      '5. Cut into wedges and serve warm or cold.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP beef and potato hash',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Cut the potatoes into small dice and parboil for 6 minutes, then drain well.\n' +
      '2. Heat the olive oil in a large frying pan and fry the potatoes for 8–10 minutes until crisp and golden.\n' +
      '3. Push to one side, add the minced beef and brown for 5–6 minutes, breaking it up, then season with smoked paprika, salt and pepper.\n' +
      '4. Stir everything together and press down to crisp the base.\n' +
      '5. Top each portion with a fried egg, scatter with chives and serve.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '250g' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP grilled halloumi salad',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Slice the halloumi into thick slabs and pat dry.\n' +
      '2. Heat a griddle pan and cook the halloumi for 2 minutes each side until golden and bar-marked.\n' +
      '3. Toss the lettuce, cucumber and cherry tomatoes with the olive oil and lemon juice. Season.\n' +
      '4. Pile the salad onto plates, top with the warm halloumi and scatter with mint.',
    rawLines: [
      { rawName: 'Halloumi', rawMeasure: '225g' },
      { rawName: 'Lettuce', rawMeasure: '1 small' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Cherry tomato', rawMeasure: '12' },
      { rawName: 'Mint', rawMeasure: '10g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP mackerel with potato salad',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Boil the new potatoes for 15 minutes until tender, then drain and halve while warm.\n' +
      '2. Toss the potatoes with the olive oil, lemon juice, chives and seasoning and leave to cool a little.\n' +
      '3. Heat the grill and cook the mackerel fillets skin-side up for 4–5 minutes until just cooked.\n' +
      '4. Serve the mackerel on the warm potato salad with extra lemon and a handful of rocket.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '2 fillets' },
      { rawName: 'New potatoes', rawMeasure: '400g' },
      { rawName: 'Rocket', rawMeasure: '50g' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP rice paper rolls',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Snack',
    cuisine: 'Vietnamese',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Soak the rice vermicelli in just-boiled water for 4 minutes, then drain and cool.\n' +
      '2. Cut the cucumber, carrot and pepper into fine matchsticks.\n' +
      '3. Soften a rice paper sheet in warm water for a few seconds until pliable, then lay flat.\n' +
      '4. Place a little noodle, some vegetables, a few prawns and some mint near one edge, fold in the sides and roll up tightly. Repeat.\n' +
      '5. Mix the soy sauce with the lime juice for dipping and serve.',
    rawLines: [
      { rawName: 'Rice paper', rawMeasure: '8 sheets' },
      { rawName: 'Rice vermicelli', rawMeasure: '80g' },
      { rawName: 'Prawns', rawMeasure: '120g cooked' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Mint', rawMeasure: '15g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP roast pork with parsnips',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Rub the pork tenderloin with olive oil, the chopped rosemary, salt and pepper.\n' +
      '2. Cut the parsnips and potatoes into chunks, toss with olive oil and salt and tip into a roasting tin.\n' +
      '3. Sit the pork on top and roast for 25–30 minutes until the pork is cooked through; rest the meat while the vegetables finish.\n' +
      '4. Continue roasting the vegetables for a further 15–20 minutes until golden and tender.\n' +
      '5. Slice the pork and serve with the roasted roots and steamed greens.',
    rawLines: [
      { rawName: 'Pork tenderloin', rawMeasure: '600g' },
      { rawName: 'Parsnip', rawMeasure: '4' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Kale', rawMeasure: '150g' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP egg fried rice',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Cook the rice ahead and cool completely (day-old rice works best).\n' +
      '2. Heat the sesame oil in a wok over a high heat. Add the grated ginger and diced carrot and stir-fry for 2 minutes.\n' +
      '3. Push the vegetables aside, pour in the beaten eggs and scramble until just set.\n' +
      '4. Add the rice and peas and toss everything together over a high heat for 3–4 minutes.\n' +
      '5. Season with the soy sauce, fold through the chives and serve.',
    rawLines: [
      { rawName: 'Basmati rice', rawMeasure: '150g (cooked weight 400g)' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Peas', rawMeasure: '80g' },
      { rawName: 'Ginger', rawMeasure: '15g' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP tomato and pepper shakshuka',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'Middle Eastern',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Heat the olive oil in a frying pan and soften the sliced pepper for 6–8 minutes.\n' +
      '2. Stir in the cumin and smoked paprika and cook for a minute until fragrant.\n' +
      '3. Pour in the chopped tomatoes, season and simmer for 8–10 minutes until thick.\n' +
      '4. Make four wells in the sauce and crack an egg into each. Cover and cook gently for 5–6 minutes until the whites are set but the yolks soft.\n' +
      '5. Scatter with parsley and serve with rice cakes or gluten-free toast.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP sea bass with new potatoes',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Boil the new potatoes for 15 minutes until tender, then drain and keep warm.\n' +
      '2. Pat the sea bass fillets dry and season the skin with salt.\n' +
      '3. Heat the olive oil in a frying pan and cook the fillets skin-side down for 3–4 minutes until crisp, then flip and cook for 1 minute more.\n' +
      '4. Toss the potatoes with the butter, chives and parsley.\n' +
      '5. Serve the sea bass on the potatoes with a squeeze of lemon and the steamed spinach alongside.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '2 fillets' },
      { rawName: 'New potatoes', rawMeasure: '400g' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Parsley', rawMeasure: '10g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP chicken caesar-style salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Season the chicken breasts, then pan-fry in a little olive oil for 5–6 minutes each side until golden and cooked through. Rest, then slice.\n' +
      '2. Whisk the mayonnaise with the lemon juice, a little grated Parmesan and a splash of water to make a dressing.\n' +
      '3. Tear the lettuce into a bowl and toss with most of the dressing.\n' +
      '4. Top with the sliced chicken, drizzle over the remaining dressing and finish with shavings of Parmesan and black pepper.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Lettuce', rawMeasure: '1 cos' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP vegetable buckwheat noodles',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Cook the buckwheat noodles in boiling water according to the packet, then drain and refresh under cold water.\n' +
      '2. Heat the sesame oil in a wok and stir-fry the grated ginger for 30 seconds.\n' +
      '3. Add the sliced carrot, pepper and pak choi and stir-fry for 3–4 minutes until just tender.\n' +
      '4. Toss in the noodles and the soy sauce and heat through.\n' +
      '5. Scatter with sesame seeds and chives and serve.',
    rawLines: [
      { rawName: 'Noodles', rawMeasure: '150g buckwheat' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Ginger', rawMeasure: '15g' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP lamb chops with minted potatoes',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Boil the new potatoes for 15 minutes until tender, then drain and toss with the butter and chopped mint.\n' +
      '2. Season the lamb chops well with salt and pepper.\n' +
      '3. Heat the olive oil in a frying pan and cook the chops for 3–4 minutes each side for medium, or to your liking. Rest for 5 minutes.\n' +
      '4. Steam the green beans until just tender.\n' +
      '5. Serve the chops with the minted potatoes and beans.',
    rawLines: [
      { rawName: 'Lamb chop', rawMeasure: '4' },
      { rawName: 'New potatoes', rawMeasure: '400g' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Mint', rawMeasure: '20g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP cheese and chive rice cakes',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Cook the rice until soft and sticky, then cool slightly.\n' +
      '2. Mix the rice with the grated Cheddar, beaten egg, chives and seasoning.\n' +
      '3. Shape into small patties and coat in the polenta.\n' +
      '4. Heat the olive oil in a frying pan and fry the cakes for 3 minutes each side until golden and crisp.\n' +
      '5. Serve warm with a wedge of lemon.',
    rawLines: [
      { rawName: 'Basmati rice', rawMeasure: '120g' },
      { rawName: 'Cheddar cheese', rawMeasure: '60g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Cornmeal', rawMeasure: '40g' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP prawn and courgette risotto',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Bring the water to a gentle simmer in a pan and keep it warm with a good pinch of salt.\n' +
      '2. Heat the olive oil in a wide pan and toast the risotto rice for a minute, stirring.\n' +
      '3. Add the warm water a ladleful at a time, stirring, until each addition is absorbed — about 18 minutes — until the rice is creamy and just tender.\n' +
      '4. Halfway through, stir in the diced courgette. In the last 3 minutes add the prawns and cook until pink.\n' +
      '5. Beat in the butter and grated Parmesan, finish with lemon and chives and serve.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '180g' },
      { rawName: 'Prawns', rawMeasure: '200g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Water', rawMeasure: '800ml' },
      { rawName: 'Parmesan', rawMeasure: '30g' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP roasted carrot and feta salad',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the carrots into batons, toss with olive oil, cumin and salt and spread on a tray.\n' +
      '2. Roast for 25–30 minutes until tender and caramelised.\n' +
      '3. Arrange the rocket on plates and top with the warm carrots.\n' +
      '4. Crumble over the feta, scatter with pumpkin seeds and finish with a squeeze of lemon.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '6' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Feta', rawMeasure: '60g' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP chicken skewers with rice',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Cut the chicken into cubes and toss with the smoked paprika, lemon juice, a little olive oil and salt. Marinate for 15 minutes.\n' +
      '2. Rinse the rice and simmer in salted water for 12–15 minutes until tender. Drain.\n' +
      '3. Thread the chicken onto skewers and grill or griddle for 12–15 minutes, turning, until golden and cooked through.\n' +
      '4. Fork the chives through the rice.\n' +
      '5. Serve the skewers on the rice with cucumber and a wedge of lemon.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4' },
      { rawName: 'Basmati rice', rawMeasure: '250g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP smoked salmon scrambled eggs',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Beat the eggs with a little salt and plenty of black pepper.\n' +
      '2. Melt the butter in a non-stick pan over a low heat.\n' +
      '3. Pour in the eggs and stir gently and continuously until softly set and creamy.\n' +
      '4. Off the heat, fold through the smoked salmon strips and most of the chives.\n' +
      '5. Pile onto warm rice cakes or gluten-free toast, scatter with the remaining chives and serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Smoked salmon', rawMeasure: '80g' },
      { rawName: 'Rice cakes', rawMeasure: '4' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP stuffed peppers with rice',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers and remove the seeds, then sit them cut-side up in a baking dish.\n' +
      '2. Cook the rice until just tender, then mix with the chopped tomatoes, half the grated Cheddar, the chives and oregano. Season well.\n' +
      '3. Spoon the filling into the pepper halves and drizzle with olive oil.\n' +
      '4. Cover with foil and bake for 25 minutes, then uncover, scatter over the remaining cheese and bake for 15 minutes more until golden.\n' +
      '5. Serve hot with a green salad.',
    rawLines: [
      { rawName: 'Mixed peppers', rawMeasure: '4' },
      { rawName: 'Basmati rice', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP beef and rice noodle soup',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Vietnamese',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Bring the water to a simmer with the grated ginger, a splash of soy sauce and a good pinch of salt to make a fragrant broth. Simmer for 10 minutes.\n' +
      '2. Soak the rice noodles in just-boiled water for 5 minutes, then drain and divide between two bowls.\n' +
      '3. Slice the beef steak very thinly and lay it raw over the noodles.\n' +
      '4. Ladle the boiling broth over the beef so it cooks in the heat.\n' +
      '5. Top with bean sprouts, chives and a squeeze of lime and serve.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '250g' },
      { rawName: 'Brown rice noodles', rawMeasure: '150g' },
      { rawName: 'Bean sprouts', rawMeasure: '80g' },
      { rawName: 'Ginger', rawMeasure: '25g' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Water', rawMeasure: '1 litre' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP roasted squash with quinoa',
    servingsBase: 2,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Peel and cube the butternut squash, toss with olive oil, cumin and salt and roast for 30 minutes until soft and caramelised.\n' +
      '2. Meanwhile rinse the quinoa and simmer in salted water for 12–15 minutes until tender. Drain.\n' +
      '3. Fold the roasted squash through the quinoa with the spinach so it gently wilts.\n' +
      '4. Stir in the pumpkin seeds and a squeeze of lemon, season and serve.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '1 small' },
      { rawName: 'Quinoa', rawMeasure: '120g' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Sesame seeds', rawMeasure: '2 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP tomato and basil soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a large pan over a medium heat. Add the diced carrot and cook for 5 minutes to sweeten the base.\n' +
      '2. Tip in the chopped tomatoes and the water, season and bring to a simmer.\n' +
      '3. Simmer gently for 20 minutes, then add most of the basil.\n' +
      '4. Blend until smooth, adjust the seasoning and add a pinch of sugar to balance.\n' +
      '5. Serve scattered with the remaining basil and a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (800g)' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: '30g' },
      { rawName: 'Water', rawMeasure: '400ml' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP chicken and quinoa bowl',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Rinse the quinoa and simmer in salted water for 12–15 minutes until tender. Drain and cool slightly.\n' +
      '2. Season the chicken breasts and pan-fry in a little olive oil for 5–6 minutes each side until cooked through. Rest, then slice.\n' +
      '3. Dice the cucumber and halve the cherry tomatoes.\n' +
      '4. Toss the quinoa with the vegetables, spinach, lemon juice and olive oil. Season.\n' +
      '5. Top with the sliced chicken and a scattering of chives.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Quinoa', rawMeasure: '120g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Cherry tomato', rawMeasure: '12' },
      { rawName: 'Spinach', rawMeasure: '60g' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP haddock with crushed potatoes and spinach',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Boil the potatoes until tender, then drain and crush roughly with the butter and seasoning.\n' +
      '2. Sit the white fish fillets on a lined tray, brush with olive oil and season. Bake at 200°C (fan 180°C) for 12–15 minutes until flaking.\n' +
      '3. Wilt the spinach in a pan with a splash of water, then drain and season.\n' +
      '4. Pile the crushed potatoes and spinach onto plates and top with the fish.\n' +
      '5. Finish with chives and a squeeze of lemon.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP peanut rice noodle salad',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Thai',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Soak the rice noodles in just-boiled water for 5 minutes, then drain and refresh under cold water.\n' +
      '2. Cut the cucumber, carrot and pepper into fine matchsticks.\n' +
      '3. Whisk the peanut butter with the lime juice, soy sauce and a little warm water to a pourable dressing.\n' +
      '4. Toss the noodles with the vegetables and dressing.\n' +
      '5. Scatter with chopped peanuts and mint and serve.',
    rawLines: [
      { rawName: 'Brown rice noodles', rawMeasure: '150g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Peanut butter', rawMeasure: '40g' },
      { rawName: 'Peanuts', rawMeasure: '30g' },
      { rawName: 'Mint', rawMeasure: '10g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP roast turkey breast with vegetables',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Rub the turkey breast with olive oil, salt, pepper and the chopped thyme.\n' +
      '2. Cut the potatoes, carrots and parsnips into chunks, toss with olive oil and salt and spread in a roasting tin.\n' +
      '3. Sit the turkey on top and roast for 45–55 minutes until the turkey is cooked through and the vegetables tender.\n' +
      '4. Rest the turkey for 10 minutes while the vegetables crisp in the oven.\n' +
      '5. Carve the turkey and serve with the roasted vegetables and steamed greens.',
    rawLines: [
      { rawName: 'Turkey', rawMeasure: '700g breast' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Parsnip', rawMeasure: '3' },
      { rawName: 'Kale', rawMeasure: '150g' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP cheese and tomato rice bake',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Cook the rice until just tender, then drain.\n' +
      '2. Stir the rice into the chopped tomatoes with the oregano, half the grated Cheddar and plenty of seasoning.\n' +
      '3. Fold through the diced courgette.\n' +
      '4. Tip into a baking dish, scatter over the remaining cheese and drizzle with olive oil.\n' +
      '5. Bake for 25–30 minutes until golden and bubbling. Scatter with basil and serve.',
    rawLines: [
      { rawName: 'Basmati rice', rawMeasure: '200g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Basil', rawMeasure: '15g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP ginger and lime chicken',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Cut the chicken into strips and toss with the grated ginger, lime juice, soy sauce and a little sesame oil. Marinate for 15 minutes.\n' +
      '2. Soak the rice noodles in just-boiled water for 5 minutes, then drain.\n' +
      '3. Heat a wok over a high heat and stir-fry the chicken for 5–6 minutes until golden and cooked through.\n' +
      '4. Add the sliced pepper and pak choi and stir-fry for 2–3 minutes.\n' +
      '5. Toss through the noodles and chives, heat through and serve with lime wedges.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Brown rice noodles', rawMeasure: '150g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP courgette fritters',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Snack',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Coarsely grate the courgettes, sprinkle with a little salt and leave for 10 minutes, then squeeze out as much moisture as you can.\n' +
      '2. Mix the courgette with the rice flour, eggs, crumbled feta, chives and seasoning to a thick batter.\n' +
      '3. Heat the olive oil in a frying pan over a medium heat.\n' +
      '4. Drop in spoonfuls of the mixture, flatten slightly and fry for 2–3 minutes each side until golden and set.\n' +
      '5. Drain briefly and serve with lemon wedges.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Rice flour', rawMeasure: '60g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Feta', rawMeasure: '60g' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP baked eggs with spinach',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Wilt the spinach in a pan with a splash of water, then drain well and squeeze out the moisture.\n' +
      '2. Divide the spinach between two small ovenproof dishes and season.\n' +
      '3. Crack two eggs into each dish and scatter over the grated Cheddar.\n' +
      '4. Bake for 10–12 minutes until the whites are just set but the yolks still soft.\n' +
      '5. Scatter with chives and serve with rice cakes.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Cheddar cheese', rawMeasure: '40g' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Rice cakes', rawMeasure: '4' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP trout with almonds',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Season the trout fillets with salt and pepper.\n' +
      '2. Melt half the butter with the olive oil in a frying pan and cook the trout skin-side down for 3–4 minutes, then flip and cook for 1–2 minutes more. Lift out and keep warm.\n' +
      '3. Add the remaining butter and the flaked almonds to the pan and toast until golden.\n' +
      '4. Stir in a squeeze of lemon and the parsley.\n' +
      '5. Spoon the buttered almonds over the trout and serve with new potatoes.',
    rawLines: [
      { rawName: 'Trout', rawMeasure: '2 fillets' },
      { rawName: 'Almonds', rawMeasure: '40g flaked' },
      { rawName: 'New potatoes', rawMeasure: '300g' },
      { rawName: 'Parsley', rawMeasure: '10g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP roasted vegetable quinoa salad',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Chop the courgette, pepper and aubergine into chunks, toss with olive oil and salt and roast for 25–30 minutes.\n' +
      '2. Rinse the quinoa and simmer in salted water for 12–15 minutes until tender. Drain and cool slightly.\n' +
      '3. Toss the warm quinoa with the roasted vegetables, lemon juice and a little extra olive oil.\n' +
      '4. Fold through the rocket and pine nuts, season and serve.',
    rawLines: [
      { rawName: 'Quinoa', rawMeasure: '200g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Pine nuts', rawMeasure: '30g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP chicken and courgette traybake',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the courgettes and peppers into chunks and tip into a large roasting tin with the cherry tomatoes.\n' +
      '2. Sit the chicken thighs among the vegetables, drizzle everything with olive oil and scatter over the oregano.\n' +
      '3. Season well and toss to coat.\n' +
      '4. Roast for 40–45 minutes until the chicken is golden and cooked through and the vegetables soft.\n' +
      '5. Squeeze over the lemon, scatter with basil and serve with rice.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Cherry tomato', rawMeasure: '16' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Basil', rawMeasure: '15g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP rice pudding with strawberries',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Tip the pudding rice into a pan with the almond milk, water, sugar and a pinch of salt.\n' +
      '2. Bring slowly to a gentle simmer, stirring often to stop it catching.\n' +
      '3. Cook very gently for 35–40 minutes, stirring regularly, until the rice is soft and creamy.\n' +
      '4. Stir in the vanilla and loosen with a little extra almond milk if needed.\n' +
      '5. Spoon into bowls and top with sliced strawberries.',
    rawLines: [
      { rawName: 'Pudding rice', rawMeasure: '120g' },
      { rawName: 'Almond milk', rawMeasure: '600ml' },
      { rawName: 'Water', rawMeasure: '200ml' },
      { rawName: 'Caster sugar', rawMeasure: '50g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Strawberries', rawMeasure: '150g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Low-FODMAP banana oat cookies',
    servingsBase: 12,
    totalTimeMinutes: 25,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a tray with baking paper.\n' +
      '2. Mash the firm bananas in a bowl until smooth.\n' +
      '3. Stir in the oats, peanut butter and a pinch of salt until well combined.\n' +
      '4. Spoon small mounds onto the tray and flatten slightly.\n' +
      '5. Bake for 12–15 minutes until set and lightly golden. Cool on the tray before serving.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '2 firm' },
      { rawName: 'Oats', rawMeasure: '150g' },
      { rawName: 'Peanut butter', rawMeasure: '40g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Low-FODMAP pineapple and lime sorbet',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Peel and core the pineapple and cut the flesh into chunks. Freeze on a tray until solid.\n' +
      '2. Tip the frozen pineapple into a food processor with the lime juice and sugar.\n' +
      '3. Blitz to a smooth, scoopable sorbet, scraping down the sides as you go.\n' +
      '4. Serve straight away as a soft sorbet, or transfer to a tub and freeze until firm.',
    rawLines: [
      { rawName: 'Pineapple', rawMeasure: '400g' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Caster sugar', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP cheese and herb polenta chips',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Snack',
    cuisine: 'Italian',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Bring the water to the boil with a good pinch of salt and rain in the cornmeal, whisking constantly.\n' +
      '2. Cook over a low heat for 8–10 minutes, stirring, until very thick. Beat in the grated Parmesan and chives.\n' +
      '3. Spread the polenta about 2cm thick on a lined tray and chill for 30 minutes until firm.\n' +
      '4. Heat the oven to 220°C (fan 200°C). Cut the set polenta into chips, toss with olive oil and spread on a tray.\n' +
      '5. Bake for 25–30 minutes, turning once, until crisp and golden. Serve hot.',
    rawLines: [
      { rawName: 'Cornmeal', rawMeasure: '200g' },
      { rawName: 'Water', rawMeasure: '900ml' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP prawn and tomato rice',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Heat the olive oil in a wide pan and stir in the smoked paprika for a few seconds.\n' +
      '2. Add the rice and stir to coat, then pour in the chopped tomatoes and the same volume of water. Season.\n' +
      '3. Bring to a simmer, cover and cook for 15 minutes until the rice is almost tender.\n' +
      '4. Nestle the prawns into the rice, cover and cook for a further 4–5 minutes until pink and the rice is tender.\n' +
      '5. Squeeze over the lemon, scatter with parsley and serve.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '200g' },
      { rawName: 'Paella rice', rawMeasure: '180g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP roast beef with horseradish potatoes',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Rub the beef with olive oil, salt, pepper and the chopped thyme.\n' +
      '2. Roast for about 45 minutes for medium-rare, then rest for 15 minutes loosely covered.\n' +
      '3. Meanwhile parboil the potatoes for 8 minutes, drain and rough up, then roast in hot oil for 40–45 minutes until crisp.\n' +
      '4. Stir the horseradish through the warm crushed roast potatoes for a peppery kick.\n' +
      '5. Carve the beef thinly and serve with the potatoes and steamed carrots.',
    rawLines: [
      { rawName: 'Beef brisket', rawMeasure: '900g' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Carrot', rawMeasure: '4' },
      { rawName: 'Horseradish', rawMeasure: '1 tbsp' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP tofu and vegetable stir-fry',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Press the firm tofu to remove excess water, then cut into cubes and toss with the cornflour.\n' +
      '2. Heat the sesame oil in a wok and fry the tofu for 6–8 minutes, turning, until golden and crisp. Lift out.\n' +
      '3. Add the grated ginger, sliced carrot and pepper and stir-fry for 3 minutes.\n' +
      '4. Add the pak choi and bean sprouts and stir-fry for a further 2 minutes.\n' +
      '5. Return the tofu, add the soy sauce, toss to coat and serve over rice with chives.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '280g firm' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Bean sprouts', rawMeasure: '80g' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP lemon and herb roast chicken',
    servingsBase: 4,
    totalTimeMinutes: 100,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the chicken in a roasting tin, rub all over with softened butter and season generously.\n' +
      '2. Halve the lemon and tuck it inside the cavity with the thyme and rosemary.\n' +
      '3. Roast for about 1 hour 20 minutes, basting once or twice, until the juices run clear.\n' +
      '4. Rest the chicken, loosely covered, for 15 minutes.\n' +
      '5. Carve and serve with roast potatoes and steamed green beans.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1.5kg' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Rosemary', rawMeasure: '1 sprig' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP spinach and feta rice',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Rinse the rice and simmer in salted water for 12–15 minutes until tender. Drain.\n' +
      '2. Heat the olive oil in a pan and wilt the spinach with a splash of water, then season.\n' +
      '3. Fold the spinach through the warm rice with a squeeze of lemon.\n' +
      '4. Crumble over the feta and scatter with chives and the toasted pine nuts.\n' +
      '5. Serve warm as a light supper or side.',
    rawLines: [
      { rawName: 'Basmati rice', rawMeasure: '150g' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Feta', rawMeasure: '60g' },
      { rawName: 'Pine nuts', rawMeasure: '20g' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP grilled chicken with quinoa tabbouleh',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Middle Eastern',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Rinse the quinoa and simmer in salted water for 12–15 minutes until tender. Drain and cool.\n' +
      '2. Season the chicken breasts and griddle for 5–6 minutes each side until cooked through. Rest, then slice.\n' +
      '3. Finely chop the parsley and mint and dice the cucumber and tomato.\n' +
      '4. Toss the quinoa with the herbs, vegetables, lemon juice and olive oil. Season generously.\n' +
      '5. Top with the sliced chicken and serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Quinoa', rawMeasure: '120g' },
      { rawName: 'Parsley', rawMeasure: '30g' },
      { rawName: 'Mint', rawMeasure: '15g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP courgette and potato soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a large pan and add the diced potato, stirring to coat.\n' +
      '2. Pour in the water, add a good pinch of salt and bring to the boil.\n' +
      '3. Simmer for 10 minutes, then add the sliced courgettes and cook for a further 10 minutes until everything is soft.\n' +
      '4. Blend until smooth, season to taste and stir through the chives.\n' +
      '5. Ladle into bowls and finish with a drizzle of olive oil and black pepper.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '3' },
      { rawName: 'Potato', rawMeasure: '300g' },
      { rawName: 'Water', rawMeasure: '1 litre' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP salmon and rice noodle salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Soak the rice noodles in just-boiled water for 5 minutes, then drain and refresh under cold water.\n' +
      '2. Season the salmon fillets and pan-fry in a little sesame oil for 3–4 minutes each side until just cooked. Flake into large pieces.\n' +
      '3. Cut the cucumber and carrot into fine matchsticks.\n' +
      '4. Whisk the soy sauce with the lime juice and a little sesame oil for a dressing.\n' +
      '5. Toss the noodles with the vegetables and dressing, top with the salmon and scatter with sesame seeds and chives.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Brown rice noodles', rawMeasure: '150g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP cheesy polenta with greens',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Bring the water to the boil with a good pinch of salt and rain in the cornmeal, whisking constantly.\n' +
      '2. Cook the polenta over a low heat for 8–10 minutes, stirring, until thick and smooth. Beat in the butter and grated Parmesan.\n' +
      '3. Meanwhile wilt the kale in a pan with a splash of water and a little olive oil until tender; season.\n' +
      '4. Spoon the soft polenta into bowls and top with the greens.\n' +
      '5. Finish with extra Parmesan, chives and black pepper.',
    rawLines: [
      { rawName: 'Cornmeal', rawMeasure: '150g' },
      { rawName: 'Water', rawMeasure: '750ml' },
      { rawName: 'Kale', rawMeasure: '200g' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP egg and rice breakfast bowl',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'Japanese',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Cook the rice until tender, then divide between two bowls.\n' +
      '2. Soft-boil the eggs for 6 minutes, then cool briefly, peel and halve.\n' +
      '3. Warm the spinach in a pan with a splash of water until just wilted, then season.\n' +
      '4. Top the rice with the spinach and the halved eggs.\n' +
      '5. Drizzle with a little soy sauce and sesame oil, scatter with sesame seeds and chives and serve.',
    rawLines: [
      { rawName: 'Basmati rice', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
    ],
  },
]
