// Curated LOW-FODMAP expansion recipes for Larder (second batch).
//
// Each record is culinary content ONLY — the source/sourceId/imageUrl
// boilerplate is added by sources/curated.js (mapCurated). Method prose is
// original, written fresh in British English. No website wording is copied.
//
// LOW-FODMAP DISCIPLINE — every recipe strictly excludes:
//   • Alliums — onion, garlic, shallot, the bulb of leek/spring onion
//     (chives and green herb tops used for flavour instead).
//   • Wheat — no plain/self-raising flour, bread, pasta, breadcrumbs,
//     couscous, standard pastry; rice flour, oats, cornmeal, buckwheat,
//     and polenta used where a binder or base is required.
//   • Lactose — no ordinary milk, cream, yoghurt, or soft cheese in
//     quantity; butter (negligible lactose) and aged hard cheeses (Cheddar,
//     Parmesan, feta in small servings) are low-FODMAP and used sparingly.
//   • Certain pulses — no chickpeas, lentils, kidney/cannellini/black/pinto/
//     baked beans, broad beans or soya beans.
//   • High-fructose fruit — no apple, pear, mango, watermelon, cherries or
//     honey; lemon, lime, orange, strawberries, firm banana, pineapple and
//     grapes are within safe low-FODMAP serving sizes.
//   • Onion/garlic-laden condiments — no standard stock cubes or
//     Worcestershire sauce.
//
// Titles are DISTINCT from diet-fodmap.js; no recipe from that file is
// repeated here, even with minor wording changes.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  // ── BREAKFAST ────────────────────────────────────────────────────────────
  {
    title: 'Low-FODMAP oat and blueberry bake',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and lightly grease a medium baking dish with butter.\n' +
      '2. Stir together the oats, brown sugar, baking powder and cinnamon in a large bowl.\n' +
      '3. Beat the eggs with the almond milk and vanilla extract, then pour over the oat mixture and stir well.\n' +
      '4. Fold in the blueberries and the sliced banana, then pour into the prepared dish.\n' +
      '5. Scatter extra blueberries on top and bake for 25–30 minutes until set and golden at the edges.\n' +
      '6. Leave to cool for a few minutes, then scoop into bowls and serve warm.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '200g' },
      { rawName: 'Blueberries', rawMeasure: '150g' },
      { rawName: 'Banana', rawMeasure: '1 firm' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Almond milk', rawMeasure: '400ml' },
      { rawName: 'Brown sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '10g' },
    ],
  },
  {
    title: 'Low-FODMAP sweetcorn and chive fritters',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Drain the sweetcorn and tip into a bowl with the rice flour, beaten eggs, chives, a pinch of salt and plenty of black pepper. Stir to a thick batter.\n' +
      '2. Heat the olive oil in a non-stick frying pan over a medium heat.\n' +
      '3. Drop heaped spoonfuls of the batter into the pan, flatten slightly and cook for 3 minutes until the underside is golden.\n' +
      '4. Flip and cook for a further 2–3 minutes until cooked through.\n' +
      '5. Drain briefly on kitchen paper and serve with a fried egg on top and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Sweetcorn', rawMeasure: '1 tin (198g)' },
      { rawName: 'Rice flour', rawMeasure: '60g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP chia seed pudding with kiwi',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Whisk the chia seeds into the almond milk with the maple syrup and vanilla extract until well combined.\n' +
      '2. Cover and refrigerate overnight, or for at least 4 hours, until the seeds have swollen and the pudding is thick and creamy.\n' +
      '3. Stir well before serving to break up any clumps.\n' +
      '4. Peel and slice the kiwi fruit.\n' +
      '5. Spoon the pudding into two glasses, top with the kiwi slices and a scattering of pumpkin seeds and serve.',
    rawLines: [
      { rawName: 'Chia seeds', rawMeasure: '60g' },
      { rawName: 'Almond milk', rawMeasure: '400ml' },
      { rawName: 'Maple syrup', rawMeasure: '1 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
      { rawName: 'Kiwi fruit', rawMeasure: '2' },
      { rawName: 'Pumpkin seeds', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP smoked mackerel and potato rösti',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Coarsely grate the potatoes and squeeze out as much moisture as possible in a clean tea towel. Season with salt and pepper.\n' +
      '2. Heat the butter and a little olive oil in a non-stick pan over a medium heat. Press the grated potato into the pan in two flat rounds.\n' +
      '3. Cook for 6–8 minutes until the underside is golden and crisp, then carefully flip and cook for a further 6 minutes.\n' +
      '4. Meanwhile flake the smoked mackerel into large pieces and warm through gently in a small pan.\n' +
      '5. Sit the rösti on warm plates, pile the mackerel on top and finish with chives and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Smoked mackerel', rawMeasure: '150g' },
      { rawName: 'Chives', rawMeasure: '15g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP rice flour pancakes with strawberries',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Whisk the rice flour, baking powder and a pinch of salt together in a bowl.\n' +
      '2. Beat in the eggs and almond milk until smooth. Rest for 5 minutes.\n' +
      '3. Melt a little butter in a non-stick frying pan over a medium heat and pour in small ladlefuls of batter.\n' +
      '4. Cook for 2 minutes until bubbles appear on the surface, then flip and cook for 1 minute more. Keep warm while you repeat with the remaining batter.\n' +
      '5. Hull and halve the strawberries and serve piled on the warm pancakes with a dusting of icing sugar.',
    rawLines: [
      { rawName: 'Rice flour', rawMeasure: '120g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Almond milk', rawMeasure: '200ml' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Strawberries', rawMeasure: '150g' },
      { rawName: 'Icing sugar', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Low-FODMAP poached eggs on wilted spinach',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Bring a pan of water to a gentle simmer and add a splash of white wine vinegar.\n' +
      '2. Wilt the spinach in a separate pan with a splash of water, squeeze out the excess liquid and season with salt, pepper and a knob of butter.\n' +
      '3. Swirl the simmering water and carefully slide in two eggs. Poach for 3 minutes for a runny yolk, then lift out with a slotted spoon and drain on kitchen paper. Repeat.\n' +
      '4. Pile the spinach onto plates, top each with two poached eggs and scatter with chives.\n' +
      '5. Finish with black pepper and serve straight away.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Spinach', rawMeasure: '250g' },
      { rawName: 'Chives', rawMeasure: '15g' },
      { rawName: 'White wine vinegar', rawMeasure: '1 splash' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── LUNCH ────────────────────────────────────────────────────────────────
  {
    title: 'Low-FODMAP smoked salmon and cucumber rice bowl',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Cook the sushi rice according to the packet, then season while warm with the rice vinegar, a pinch of caster sugar and salt.\n' +
      '2. Cut the cucumber into thin ribbons using a peeler and the avocado into thin slices.\n' +
      '3. Divide the warm rice between two bowls.\n' +
      '4. Arrange the smoked salmon slices, cucumber ribbons and avocado over the rice.\n' +
      '5. Drizzle with a little soy sauce and sesame oil, scatter with sesame seeds and chives and serve.',
    rawLines: [
      { rawName: 'Sushi rice', rawMeasure: '150g' },
      { rawName: 'Smoked salmon', rawMeasure: '100g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP roasted red pepper soup',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the peppers, remove the seeds and place cut-side down on a tray. Roast for 25–30 minutes until the skins are charred and blistered.\n' +
      '2. Transfer to a bowl, cover with cling film and leave for 10 minutes, then peel away the skins.\n' +
      '3. Heat the olive oil in a large pan. Add the sliced carrot and cook for 5 minutes, then stir in the smoked paprika for a minute.\n' +
      '4. Add the peeled peppers, chopped tomatoes and water. Season and bring to a simmer.\n' +
      '5. Cook for 10 minutes, then blend until silky smooth. Adjust seasoning and serve with a swirl of olive oil.',
    rawLines: [
      { rawName: 'Red pepper', rawMeasure: '4' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Water', rawMeasure: '500ml' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP Thai-style beef salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Thai',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Season the beef steak and cook in a hot griddle pan for 2–3 minutes each side for medium-rare. Rest for 5 minutes, then slice thinly.\n' +
      '2. Whisk together the lime juice, fish sauce, a pinch of sugar and the grated ginger to make a dressing.\n' +
      '3. Arrange the lettuce leaves, cucumber ribbons, shredded carrot and cherry tomatoes on a platter.\n' +
      '4. Lay the sliced beef over the salad and drizzle with the dressing.\n' +
      '5. Scatter with mint, chives and the roasted peanuts and serve.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '300g' },
      { rawName: 'Lettuce', rawMeasure: '1 small' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '10' },
      { rawName: 'Peanuts', rawMeasure: '30g' },
      { rawName: 'Mint', rawMeasure: '15g' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Ginger', rawMeasure: '15g' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Low-FODMAP sweetcorn chowder',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'American',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Melt the butter in a large pan and cook the diced potato for 5 minutes, stirring.\n' +
      '2. Stir in the smoked paprika and a pinch of salt, then add the water and bring to the boil.\n' +
      '3. Simmer for 10 minutes until the potato is just tender.\n' +
      '4. Add the sweetcorn kernels and the almond milk and simmer gently for 8 minutes.\n' +
      '5. Ladle out half the soup, blend it until smooth, then return to the pan. Stir to combine, adjust the seasoning and serve scattered with chives and a crack of black pepper.',
    rawLines: [
      { rawName: 'Sweetcorn', rawMeasure: '2 tins (396g total)' },
      { rawName: 'Potato', rawMeasure: '300g' },
      { rawName: 'Almond milk', rawMeasure: '400ml' },
      { rawName: 'Water', rawMeasure: '400ml' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP turkey lettuce wraps',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'American',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Heat the sesame oil in a frying pan over a medium-high heat. Add the turkey mince and cook for 6–8 minutes, breaking it up, until browned and cooked through.\n' +
      '2. Stir in the grated ginger, soy sauce and a splash of lime juice and cook for a further minute.\n' +
      '3. Remove from the heat and stir through the grated carrot and half the chives.\n' +
      '4. Separate the lettuce leaves into cups and arrange on a plate.\n' +
      '5. Spoon the turkey filling into the lettuce cups, scatter with the remaining chives and serve with lime wedges.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '300g' },
      { rawName: 'Lettuce', rawMeasure: '1 iceberg' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Ginger', rawMeasure: '15g' },
      { rawName: 'Chives', rawMeasure: '15g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP buckwheat and roasted vegetable bowl',
    servingsBase: 2,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the courgette, aubergine and red pepper into chunks, toss with olive oil, salt and the dried thyme and roast for 25–30 minutes until caramelised.\n' +
      '2. Meanwhile cook the buckwheat in boiling salted water for 12 minutes, then drain and toss with a little olive oil.\n' +
      '3. Whisk together the lemon juice, the remaining olive oil and a pinch of salt for a dressing.\n' +
      '4. Divide the buckwheat between two bowls and top with the roasted vegetables.\n' +
      '5. Drizzle with the dressing, scatter with pine nuts and fresh parsley and serve.',
    rawLines: [
      { rawName: 'Buckwheat', rawMeasure: '150g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Aubergine', rawMeasure: '1 small' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Pine nuts', rawMeasure: '25g' },
      { rawName: 'Parsley', rawMeasure: '15g' },
      { rawName: 'Thyme', rawMeasure: '1 tsp dried' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP crab and cucumber noodle salad',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Soak the rice vermicelli in just-boiled water for 4 minutes until soft, then drain and refresh under cold water.\n' +
      '2. Shred the white crab meat and check for any shell fragments.\n' +
      '3. Cut the cucumber into thin ribbons with a peeler.\n' +
      '4. Whisk the rice vinegar with the soy sauce, sesame oil and a little fresh grated ginger for a dressing.\n' +
      '5. Toss the noodles with the cucumber, crab and dressing. Scatter with sesame seeds and chives and serve cold.',
    rawLines: [
      { rawName: 'Rice vermicelli', rawMeasure: '150g' },
      { rawName: 'Crab meat', rawMeasure: '150g white' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Ginger', rawMeasure: '10g' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Low-FODMAP warm potato and egg salad',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Boil the new potatoes for 15 minutes until tender, then drain and halve while still warm.\n' +
      '2. Hard-boil the eggs for 9 minutes, then cool under running water, peel and quarter.\n' +
      '3. Whisk together the olive oil, the Dijon mustard, lemon juice, salt and pepper to make a dressing.\n' +
      '4. Toss the warm potatoes with the dressing, then gently fold in the quartered eggs.\n' +
      '5. Scatter with chives and the rocket and serve immediately.',
    rawLines: [
      { rawName: 'New potatoes', rawMeasure: '400g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Rocket', rawMeasure: '40g' },
      { rawName: 'Dijon mustard', rawMeasure: '1 tsp' },
      { rawName: 'Chives', rawMeasure: '15g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP Greek-style chicken salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Season the chicken breast and pan-fry in olive oil for 5–6 minutes each side until golden and cooked through. Rest for 5 minutes, then slice.\n' +
      '2. Dice the cucumber and tomatoes and roughly chop the olives.\n' +
      '3. Whisk together the olive oil, lemon juice, dried oregano, salt and pepper for a dressing.\n' +
      '4. Toss the cucumber, tomatoes and olives with the dressing and pile onto plates.\n' +
      '5. Top with the sliced chicken and crumble over the feta. Scatter with mint and serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Olives', rawMeasure: '40g' },
      { rawName: 'Feta', rawMeasure: '60g' },
      { rawName: 'Mint', rawMeasure: '10g' },
      { rawName: 'Oregano', rawMeasure: '1/2 tsp dried' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP carrot, orange and ginger soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a large pan over a medium heat. Add the sliced carrots and grated ginger and stir for 2 minutes.\n' +
      '2. Pour in the water, season with salt and bring to the boil.\n' +
      '3. Simmer for 25 minutes until the carrots are completely tender.\n' +
      '4. Remove from the heat, squeeze in the orange juice and blend until silky smooth.\n' +
      '5. Return to the pan, adjust the seasoning and serve with a scatter of pumpkin seeds and a swirl of olive oil.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '700g' },
      { rawName: 'Ginger', rawMeasure: '25g' },
      { rawName: 'Orange', rawMeasure: '1' },
      { rawName: 'Water', rawMeasure: '1 litre' },
      { rawName: 'Pumpkin seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP Niçoise-style tuna salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Hard-boil the eggs for 9 minutes, then cool, peel and halve. Boil the new potatoes for 15 minutes until tender; drain and halve.\n' +
      '2. Blanch the green beans in boiling water for 3 minutes, then drain and refresh under cold water.\n' +
      '3. Drain and flake the tuna into large pieces.\n' +
      '4. Arrange the lettuce leaves on a platter and add the potatoes, green beans, eggs, tuna, tomatoes and olives.\n' +
      '5. Whisk the olive oil with the lemon juice, Dijon mustard, salt and pepper and drizzle over the salad. Serve immediately.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '1 tin (160g) in spring water' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'New potatoes', rawMeasure: '250g' },
      { rawName: 'Green beans', rawMeasure: '100g' },
      { rawName: 'Cherry tomato', rawMeasure: '10' },
      { rawName: 'Olives', rawMeasure: '30g' },
      { rawName: 'Lettuce', rawMeasure: '1 small' },
      { rawName: 'Dijon mustard', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── DINNER ────────────────────────────────────────────────────────────────
  {
    title: 'Low-FODMAP pan-fried duck breast with orange',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Score the skin of the duck breasts in a crosshatch pattern without cutting into the flesh. Season generously with salt and pepper.\n' +
      '2. Place skin-side down in a cold frying pan, then set over a medium heat. Cook for 10–12 minutes, pouring off the fat as it renders, until the skin is golden and crisp.\n' +
      '3. Flip and cook for a further 4–5 minutes for medium. Rest for 5 minutes.\n' +
      '4. Pour off most of the fat, add the orange juice and let it bubble into a glaze, scraping up the residue. Stir in the butter.\n' +
      '5. Slice the duck, drizzle with the orange glaze and serve with steamed green beans and new potatoes.',
    rawLines: [
      { rawName: 'Duck breast', rawMeasure: '2' },
      { rawName: 'Orange', rawMeasure: '1' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'New potatoes', rawMeasure: '300g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP Mexican-style rice with chicken',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Heat the olive oil in a wide, deep pan over a medium-high heat and brown the chicken thighs all over for about 8 minutes. Lift out.\n' +
      '2. Add the sliced peppers and cook for 4 minutes until softened. Stir in the cumin, smoked paprika, and a pinch of chilli flakes.\n' +
      '3. Add the rice, chopped tomatoes and water. Season well and stir to combine.\n' +
      '4. Nestle the chicken thighs into the rice mixture, skin-side up. Bring to a simmer, then cover and cook on a low heat for 25–30 minutes until the rice is cooked and the chicken is cooked through.\n' +
      '5. Squeeze over the lime, scatter with chives and fresh coriander and serve.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Basmati rice', rawMeasure: '250g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Water', rawMeasure: '400ml' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Coriander', rawMeasure: '20g' },
      { rawName: 'Chives', rawMeasure: '15g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP Thai green curry with chicken',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Check your green curry paste is free from shallot and garlic, or make a quick paste by blending fresh ginger, lemongrass (white stem only — FODMAP-safe), chilli, lime zest, coriander and a little fish sauce.\n' +
      '2. Heat the oil in a wok and stir-fry the paste for 1–2 minutes until fragrant.\n' +
      '3. Stir in the coconut milk and bring to a gentle simmer. Add the sliced chicken breast and cook for 8–10 minutes until cooked through.\n' +
      '4. Add the sliced courgette and pak choi and simmer for 3 minutes until just tender.\n' +
      '5. Finish with a squeeze of lime and fresh coriander and serve over jasmine rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Lemongrass', rawMeasure: '1 stalk' },
      { rawName: 'Green chilli', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Jasmine rice', rawMeasure: '250g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP lamb kofta with rice and salad',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Mix the minced lamb with the ground cumin, coriander, cinnamon, chilli flakes, chives, salt and pepper until well combined.\n' +
      '2. Shape into long, finger-thick sausages around soaked wooden skewers, pressing firmly.\n' +
      '3. Cook under a hot grill or on a griddle for 12–15 minutes, turning, until charred and cooked through.\n' +
      '4. Meanwhile cook the basmati rice and toss the diced tomato and cucumber with lemon juice, olive oil, mint and a pinch of salt.\n' +
      '5. Serve the kofta over the rice with the salad and lemon wedges.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Basmati rice', rawMeasure: '250g' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Chives', rawMeasure: '15g' },
      { rawName: 'Mint', rawMeasure: '15g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP Indian-style chicken with turmeric rice',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Score the chicken thighs deeply and toss with the cumin, ground coriander, turmeric, ginger, a little oil and salt. Leave to marinate for 15 minutes.\n' +
      '2. Heat the oil in a large frying pan and brown the chicken thighs for 4–5 minutes each side, then add the chopped tomatoes and a splash of water.\n' +
      '3. Cover and simmer gently for 20 minutes until the chicken is cooked through and the sauce thickened.\n' +
      '4. Meanwhile cook the rice with a pinch of turmeric in the cooking water for colour.\n' +
      '5. Stir through the fresh coriander, season and serve with the turmeric rice and lime wedges.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8 bone-in skinless' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Basmati rice', rawMeasure: '250g' },
      { rawName: 'Ginger', rawMeasure: '25g' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP baked trout with dill and new potatoes',
    servingsBase: 2,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Boil the new potatoes for 12 minutes until just tender, then drain and halve.\n' +
      '2. Place the potatoes in a roasting dish and season. Place the trout fillets on top, skin-side down, brush with olive oil and scatter generously with dill.\n' +
      '3. Lay lemon slices over the fish and season.\n' +
      '4. Roast for 15–18 minutes until the trout is just cooked through and flakes easily.\n' +
      '5. Serve the trout on the potatoes with the roasting juices spooned over and steamed spinach alongside.',
    rawLines: [
      { rawName: 'Trout', rawMeasure: '2 fillets' },
      { rawName: 'New potatoes', rawMeasure: '350g' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Dill', rawMeasure: '25g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP Caribbean-style jerk chicken',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Blend the allspice, thyme, smoked paprika, chilli flakes, ginger, lime juice, brown sugar, soy sauce and a little oil to a smooth jerk paste.\n' +
      '2. Score the chicken thighs deeply and rub all over with the paste. Marinate for at least 20 minutes, or overnight.\n' +
      '3. Heat the oven to 200°C (fan 180°C). Spread the chicken on a tray and roast for 35–40 minutes, basting once, until charred at the edges and cooked through.\n' +
      '4. Serve with plain rice and a simple tomato and coriander salsa made from diced tomatoes, lime juice and fresh coriander.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Jasmine rice', rawMeasure: '250g' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Coriander', rawMeasure: '20g' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Allspice', rawMeasure: '1 tsp' },
      { rawName: 'Thyme', rawMeasure: '1 tsp dried' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Brown sugar', rawMeasure: '1 tsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP Chinese-style steamed ginger fish',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Score the fish fillets on both sides and place in a heatproof dish that fits inside a steamer or wok.\n' +
      '2. Lay the ginger matchsticks and sliced red chilli over the fish.\n' +
      '3. Steam over high heat for 8–10 minutes until the fish is just cooked through and opaque.\n' +
      '4. Heat the sesame oil in a small pan until just smoking and pour over the fish — it will sizzle dramatically.\n' +
      '5. Drizzle with the soy sauce, scatter with chives and serve immediately with steamed jasmine rice.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2 large' },
      { rawName: 'Ginger', rawMeasure: '30g' },
      { rawName: 'Red chilli', rawMeasure: '1' },
      { rawName: 'Chives', rawMeasure: '15g' },
      { rawName: 'Jasmine rice', rawMeasure: '150g' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP Moroccan-spiced lamb with roasted squash',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Peel and cube the butternut squash, toss with olive oil, cumin, cinnamon and salt and roast for 25 minutes.\n' +
      '2. Meanwhile mix the minced lamb with the ras el hanout, salt and chives and shape into small patties.\n' +
      '3. Heat a griddle pan and cook the patties for 4 minutes each side until nicely charred and cooked through.\n' +
      '4. Add the spinach to the squash tray and return to the oven for 3 minutes until wilted.\n' +
      '5. Serve the lamb patties on the roasted squash and spinach with lemon wedges and fresh mint.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Butternut squash', rawMeasure: '1 small' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Chives', rawMeasure: '15g' },
      { rawName: 'Mint', rawMeasure: '15g' },
      { rawName: 'Ras el hanout', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP Korean-style beef bulgogi with rice',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Slice the beef steak very thinly across the grain and marinate for 15 minutes in the soy sauce, sesame oil, grated ginger, brown sugar and a pinch of black pepper.\n' +
      '2. Cook the rice in plenty of salted water until tender, then drain.\n' +
      '3. Heat a large frying pan or wok over a very high heat and cook the beef in batches for 1–2 minutes until caramelised and cooked through.\n' +
      '4. Stir-fry the sliced pepper and carrot for 3 minutes in the same pan.\n' +
      '5. Serve the beef and vegetables over the rice, scattered with sesame seeds and chives.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '300g' },
      { rawName: 'Basmati rice', rawMeasure: '150g' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Chives', rawMeasure: '15g' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Brown sugar', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP crispy-skin salmon with roast tomatoes',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the cherry tomatoes with olive oil and salt and roast for 15 minutes until bursting.\n' +
      '2. Pat the salmon fillets very dry and season the skin generously with salt.\n' +
      '3. Heat the olive oil in an ovenproof frying pan over a high heat. Place the salmon skin-side down and press gently with a spatula. Cook for 4–5 minutes without moving, until the skin is crisp.\n' +
      '4. Flip and cook for 1–2 minutes more, then transfer to the oven for 3 minutes.\n' +
      '5. Serve the salmon on the burst tomatoes with basil and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Cherry tomato', rawMeasure: '300g' },
      { rawName: 'Basil', rawMeasure: '15g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP Spanish-style pork with peppers',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Cut the pork shoulder into large chunks and season with salt, pepper and smoked paprika.\n' +
      '2. Heat the olive oil in a heavy casserole and brown the pork in batches over a high heat. Lift out.\n' +
      '3. Add the sliced peppers to the pan and cook for 5 minutes, then return the pork with the chopped tomatoes, water and bay leaf.\n' +
      '4. Bring to a simmer, cover and cook gently for 35–40 minutes until the pork is tender.\n' +
      '5. Stir through the chopped parsley, season and serve with rice or jacket potatoes.',
    rawLines: [
      { rawName: 'Pork shoulder', rawMeasure: '700g' },
      { rawName: 'Mixed peppers', rawMeasure: '3' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Water', rawMeasure: '100ml' },
      { rawName: 'Bay leaves', rawMeasure: '1' },
      { rawName: 'Smoked paprika', rawMeasure: '1.5 tsp' },
      { rawName: 'Parsley', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP prawn pad Thai',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Soak the rice noodles in just-boiled water for 5 minutes until soft, then drain.\n' +
      '2. Whisk together the fish sauce, lime juice, brown sugar and a little chilli flakes to make the sauce.\n' +
      '3. Heat the oil in a wok over a high heat. Add the prawns and cook for 2–3 minutes until pink, then push to one side.\n' +
      '4. Pour in the beaten eggs and scramble them lightly, then toss through the noodles, sauce, bean sprouts and carrot matchsticks.\n' +
      '5. Stir-fry for 2 minutes until everything is well coated. Scatter with peanuts, chives and lime wedges and serve.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '200g' },
      { rawName: 'Rice noodles', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Bean sprouts', rawMeasure: '80g' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Peanuts', rawMeasure: '30g' },
      { rawName: 'Chives', rawMeasure: '15g' },
      { rawName: 'Fish sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Brown sugar', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP Greek-style baked sea bream',
    servingsBase: 2,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Slice the tomatoes and lay half in the base of a baking dish.\n' +
      '2. Scatter the olives and capers over the tomatoes and lay the sea bream fillets on top.\n' +
      '3. Arrange the remaining tomato slices over the fish, drizzle generously with olive oil and scatter with the dried oregano.\n' +
      '4. Season with salt and pepper, add a splash of water to the dish and bake for 20–25 minutes until the fish is just cooked.\n' +
      '5. Squeeze over the lemon, scatter with parsley and serve with crusty gluten-free bread or rice.',
    rawLines: [
      { rawName: 'Sea bream', rawMeasure: '2 fillets' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Olives', rawMeasure: '40g' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Parsley', rawMeasure: '15g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP beef rendang-style',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Blend the ginger, lemongrass, chilli, turmeric and a little water to a smooth paste.\n' +
      '2. Heat the oil in a heavy pan and fry the paste for 3 minutes until fragrant. Add the diced beef and stir to coat.\n' +
      '3. Pour in the coconut milk, add the kaffir lime leaves and season. Bring to a simmer.\n' +
      '4. Cook uncovered on a very low heat for 60–70 minutes, stirring occasionally, until the sauce has reduced and the beef is tender and coated in a rich, dark paste.\n' +
      '5. Adjust the seasoning with lime juice and serve over jasmine rice with fresh coriander.',
    rawLines: [
      { rawName: 'Braising beef', rawMeasure: '700g' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Ginger', rawMeasure: '30g' },
      { rawName: 'Lemongrass', rawMeasure: '2 stalks' },
      { rawName: 'Red chilli', rawMeasure: '2' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Kaffir lime leaves', rawMeasure: '3' },
      { rawName: 'Coriander', rawMeasure: '20g' },
      { rawName: 'Jasmine rice', rawMeasure: '250g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP chicken piccata with rice',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Lay the chicken breasts between two sheets of baking paper and bash to an even 1cm thickness. Season and dust lightly with rice flour.\n' +
      '2. Heat the olive oil in a large frying pan and cook the chicken for 3–4 minutes each side until golden. Lift out.\n' +
      '3. Add the water, lemon juice and capers to the pan and bubble for 2 minutes, scraping up the residue. Whisk in the butter.\n' +
      '4. Return the chicken to the pan and simmer for 1 minute to heat through.\n' +
      '5. Serve over plain rice with the pan sauce spooned over and scattered with parsley.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Basmati rice', rawMeasure: '150g' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '15g' },
      { rawName: 'Rice flour', rawMeasure: '2 tbsp' },
      { rawName: 'Water', rawMeasure: '80ml' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP aubergine parmigiana',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Slice the aubergines into 1cm rounds, brush with olive oil, season and roast on trays for 20 minutes until golden.\n' +
      '2. Meanwhile simmer the chopped tomatoes with the dried oregano, basil, sugar and seasoning for 15 minutes until thickened.\n' +
      '3. Spread a little sauce in the base of a baking dish, then layer with roasted aubergine slices, more sauce and a little grated Parmesan. Repeat, finishing with sauce and a generous topping of Parmesan.\n' +
      '4. Bake for 25–30 minutes until golden and bubbling.\n' +
      '5. Rest for 5 minutes, scatter with fresh basil and serve.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '3' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (800g)' },
      { rawName: 'Parmesan', rawMeasure: '80g' },
      { rawName: 'Basil', rawMeasure: '30g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP teriyaki salmon',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Mix the soy sauce, mirin, brown sugar and grated ginger together in a small bowl to make the teriyaki sauce.\n' +
      '2. Place the salmon fillets in a shallow dish and pour over the sauce. Leave to marinate for 10 minutes.\n' +
      '3. Cook the jasmine rice in plenty of salted water until tender, then drain.\n' +
      '4. Heat a frying pan over a medium-high heat. Cook the salmon fillets for 3 minutes each side, spooning over the marinade, until caramelised and just cooked through.\n' +
      '5. Serve the salmon over the rice, scatter with sesame seeds and chives, and serve with the steamed pak choi.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Jasmine rice', rawMeasure: '150g' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Ginger', rawMeasure: '15g' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Mirin', rawMeasure: '2 tbsp' },
      { rawName: 'Brown sugar', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Low-FODMAP seared tuna steak with sesame crust',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Mix together the sesame seeds, salt and a little black pepper on a plate.\n' +
      '2. Press the tuna steaks into the sesame mixture to coat all sides.\n' +
      '3. Heat the sesame oil in a frying pan over a very high heat and sear the tuna for 1 minute each side — the outside should be golden and the centre still pink.\n' +
      '4. Rest for 2 minutes, then slice thickly.\n' +
      '5. Serve over jasmine rice with the cucumber and avocado, drizzled with a mixture of soy sauce and lime juice.',
    rawLines: [
      { rawName: 'Tuna steak', rawMeasure: '2' },
      { rawName: 'Jasmine rice', rawMeasure: '150g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Sesame seeds', rawMeasure: '4 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP slow-roast lamb shoulder with herbs',
    servingsBase: 6,
    totalTimeMinutes: 240,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Make slits all over the lamb shoulder and tuck in the rosemary sprigs.\n' +
      '2. Rub the surface all over with the olive oil, salt, pepper and dried thyme.\n' +
      '3. Sit the lamb on a bed of the carrot and parsnip chunks in a deep roasting tin and add the water to the base.\n' +
      '4. Cover tightly with foil and roast for 3 hours 30 minutes until the meat is falling from the bone.\n' +
      '5. Rest for 20 minutes, shred the lamb and serve with the soft vegetables and cooking juices, and mashed potato alongside.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '1.8kg' },
      { rawName: 'Carrot', rawMeasure: '4' },
      { rawName: 'Parsnip', rawMeasure: '3' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Rosemary', rawMeasure: '4 sprigs' },
      { rawName: 'Thyme', rawMeasure: '1 tsp dried' },
      { rawName: 'Water', rawMeasure: '200ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP mushroom and thyme risotto',
    servingsBase: 2,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Bring 800ml of water to a gentle simmer with a pinch of salt to act as your simple stock.\n' +
      '2. Heat the olive oil in a wide pan and fry the sliced chestnut mushrooms over a high heat for 6–8 minutes until golden and most of the moisture has evaporated. Add the thyme and season. Lift out.\n' +
      '3. Add a little more oil and toast the risotto rice for a minute. Add the warm water a ladleful at a time, stirring continuously, until absorbed — about 18 minutes total.\n' +
      '4. When the rice is creamy and just tender, return the mushrooms and beat in the butter and Parmesan.\n' +
      '5. Finish with chives and black pepper and serve immediately.',
    rawLines: [
      { rawName: 'Chestnut mushrooms', rawMeasure: '300g' },
      { rawName: 'Paella rice', rawMeasure: '180g' },
      { rawName: 'Water', rawMeasure: '800ml' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Chives', rawMeasure: '15g' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP coconut and ginger chicken curry',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Low-FODMAP'],
    instructions:
      '1. Heat the oil in a large pan. Fry the grated ginger for 1 minute, then add the turmeric, cumin and ground coriander and stir for 30 seconds.\n' +
      '2. Add the diced chicken and stir to coat in the spices. Cook for 5 minutes until lightly coloured.\n' +
      '3. Pour in the coconut milk and add the diced red pepper. Season with salt.\n' +
      '4. Simmer gently for 20 minutes until the chicken is cooked through and the sauce is thick and fragrant.\n' +
      '5. Stir through the fresh coriander and a squeeze of lime and serve over basmati rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Ginger', rawMeasure: '25g' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Basmati rice', rawMeasure: '250g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP miso-glazed cod',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Mix together the miso paste, mirin, brown sugar and a dash of soy sauce to make the glaze.\n' +
      '2. Pat the cod fillets dry and spread the miso glaze over the top of each fillet.\n' +
      '3. Leave to marinate for 10 minutes while you cook the rice.\n' +
      '4. Heat the grill to high and grill the fillets for 6–8 minutes until the glaze is caramelised and the fish just cooked through.\n' +
      '5. Serve the glazed cod over rice with steamed broccoli and a garnish of sesame seeds and chives.',
    rawLines: [
      { rawName: 'Cod fillet', rawMeasure: '2' },
      { rawName: 'Jasmine rice', rawMeasure: '150g' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Miso paste', rawMeasure: '2 tbsp' },
      { rawName: 'Mirin', rawMeasure: '1 tbsp' },
      { rawName: 'Brown sugar', rawMeasure: '1 tsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Chives', rawMeasure: '10g' },
    ],
  },
  // ── SIDE ─────────────────────────────────────────────────────────────────
  {
    title: 'Low-FODMAP roasted tenderstem broccoli with lemon',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Spread the tenderstem broccoli on a large tray, drizzle generously with olive oil and season with salt and pepper.\n' +
      '2. Toss to coat, ensuring the florets are in a single layer.\n' +
      '3. Roast for 12–15 minutes until the tips are crisp and a little charred.\n' +
      '4. Grate over the lemon zest and squeeze over the juice.\n' +
      '5. Scatter with chilli flakes and serve immediately as a side.',
    rawLines: [
      { rawName: 'Tenderstem broccoli', rawMeasure: '300g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP sautéed kale with sesame',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Japanese',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Strip the kale leaves from their tough stems and tear into pieces. Wash and shake off the excess water.\n' +
      '2. Heat the sesame oil in a large wok or pan over a high heat. Add the kale and stir-fry for 3–4 minutes until wilted and starting to crisp at the edges.\n' +
      '3. Add the grated ginger and stir for a further 30 seconds.\n' +
      '4. Splash in the soy sauce and toss to coat.\n' +
      '5. Tip onto a serving dish, scatter with sesame seeds and serve.',
    rawLines: [
      { rawName: 'Kale', rawMeasure: '300g' },
      { rawName: 'Ginger', rawMeasure: '10g' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Low-FODMAP roasted parsnips with maple and rosemary',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Peel the parsnips, halve or quarter lengthways and tip into a roasting tin.\n' +
      '2. Drizzle with the olive oil and maple syrup, scatter over the rosemary needles and season with salt.\n' +
      '3. Toss everything together until well coated and arrange in a single layer.\n' +
      '4. Roast for 25–30 minutes, turning once halfway, until golden, caramelised and tender.\n' +
      '5. Serve hot as a side with roast meat or as part of a vegetarian spread.',
    rawLines: [
      { rawName: 'Parsnip', rawMeasure: '600g' },
      { rawName: 'Maple syrup', rawMeasure: '1 tbsp' },
      { rawName: 'Rosemary', rawMeasure: '1 sprig' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP garlic-infused oil potatoes',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. To make garlic-infused oil, gently heat the olive oil with the whole peeled garlic cloves over a very low heat for 15 minutes — the FODMAP compounds do not transfer to the oil. Remove and discard the cloves.\n' +
      '2. Parboil the potatoes in salted water for 8 minutes, then drain and shake in the pan to rough up the edges.\n' +
      '3. Heat the garlic-infused oil in a roasting tin in the oven at 220°C (fan 200°C) for a few minutes until hot.\n' +
      '4. Tip in the potatoes, turning to coat, and roast for 30–35 minutes, turning once, until crisp and golden.\n' +
      '5. Season generously with salt and scatter with chives to serve.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves (for infusing only — removed before eating)' },
      { rawName: 'Chives', rawMeasure: '15g' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP steamed rice with chive butter',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Rinse the basmati rice until the water runs clear.\n' +
      '2. Put the rice in a pan with the measured cold water and a good pinch of salt.\n' +
      '3. Bring to the boil, then reduce the heat to its lowest setting, cover tightly and cook for 12 minutes.\n' +
      '4. Remove from the heat and leave to steam, still covered, for a further 5 minutes.\n' +
      '5. Fork through the butter and chives, season to taste and serve.',
    rawLines: [
      { rawName: 'Basmati rice', rawMeasure: '250g' },
      { rawName: 'Water', rawMeasure: '375ml' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP roasted courgette with feta and mint',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Slice the courgettes into thick rounds and spread on a baking tray.\n' +
      '2. Drizzle with olive oil, season and roast for 15–18 minutes until golden at the edges.\n' +
      '3. Transfer the warm courgettes to a serving plate.\n' +
      '4. Crumble over the feta, scatter with torn mint leaves and a pinch of chilli flakes.\n' +
      '5. Finish with a squeeze of lemon and a drizzle of extra olive oil and serve.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '3' },
      { rawName: 'Feta', rawMeasure: '60g' },
      { rawName: 'Mint', rawMeasure: '15g' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── SNACK ─────────────────────────────────────────────────────────────────
  {
    title: 'Low-FODMAP peanut butter and banana rice cakes',
    servingsBase: 1,
    totalTimeMinutes: 5,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Lay the rice cakes out on a small plate.\n' +
      '2. Spread each rice cake generously with peanut butter.\n' +
      '3. Slice the firm banana and arrange the slices over the peanut butter.\n' +
      '4. Drizzle with a tiny drop of maple syrup if you like a touch of extra sweetness.\n' +
      '5. Eat immediately before the rice cakes soften.',
    rawLines: [
      { rawName: 'Rice cakes', rawMeasure: '3' },
      { rawName: 'Peanut butter', rawMeasure: '2 tbsp' },
      { rawName: 'Banana', rawMeasure: '1 small firm' },
      { rawName: 'Maple syrup', rawMeasure: '1 tsp (optional)' },
    ],
  },
  {
    title: 'Low-FODMAP cucumber and smoked salmon bites',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Pescatarian'],
    instructions:
      '1. Cut the cucumber into thick rounds, about 1cm each.\n' +
      '2. Pat the smoked salmon dry and cut into small pieces, one per cucumber round.\n' +
      '3. Arrange the cucumber rounds on a platter and top each with a piece of smoked salmon.\n' +
      '4. Finish each with a small pinch of black pepper and a few snipped chives.\n' +
      '5. Squeeze a little lemon juice over just before serving.',
    rawLines: [
      { rawName: 'Cucumber', rawMeasure: '1' },
      { rawName: 'Smoked salmon', rawMeasure: '80g' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Lemon', rawMeasure: '1/4' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Low-FODMAP oat energy balls',
    servingsBase: 12,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Combine the oats, peanut butter, maple syrup and vanilla extract in a bowl and mix until the mixture comes together — add a teaspoon of water if it is too dry.\n' +
      '2. Stir in the dark chocolate chips if using.\n' +
      '3. With slightly damp hands, roll heaped tablespoons of the mixture into balls.\n' +
      '4. Place on a lined tray and refrigerate for at least 30 minutes until firm.\n' +
      '5. Store in an airtight container in the fridge for up to five days.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '200g' },
      { rawName: 'Peanut butter', rawMeasure: '80g' },
      { rawName: 'Maple syrup', rawMeasure: '3 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Dark chocolate chips', rawMeasure: '40g' },
    ],
  },
  {
    title: 'Low-FODMAP roasted pumpkin seeds with paprika',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Rinse and dry the pumpkin seeds thoroughly.\n' +
      '2. Toss with the olive oil, smoked paprika, a pinch of cumin and salt.\n' +
      '3. Spread in a single layer on a baking tray.\n' +
      '4. Roast for 12–15 minutes, shaking once, until golden and crisp.\n' +
      '5. Cool completely before serving or storing in an airtight jar.',
    rawLines: [
      { rawName: 'Pumpkin seeds', rawMeasure: '200g' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Low-FODMAP avocado and tomato rice cake toppers',
    servingsBase: 2,
    totalTimeMinutes: 8,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Halve the avocado, remove the stone and scoop the flesh into a bowl. Mash with a fork and season with lemon juice, salt and black pepper.\n' +
      '2. Dice the tomato finely.\n' +
      '3. Spread the mashed avocado generously over the rice cakes.\n' +
      '4. Scatter the diced tomato over the top.\n' +
      '5. Finish with chilli flakes and chives and serve immediately.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Rice cakes', rawMeasure: '4' },
      { rawName: 'Chives', rawMeasure: '10g' },
      { rawName: 'Lemon', rawMeasure: '1/4' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── DESSERT ───────────────────────────────────────────────────────────────
  {
    title: 'Low-FODMAP strawberry and almond tart',
    servingsBase: 8,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). For the case, mix the rice flour, ground almonds, icing sugar and cold butter to a crumb, then add the egg yolk and press into a 23cm tart tin. Bake blind for 15 minutes.\n' +
      '2. Meanwhile beat together the softened butter, caster sugar, ground almonds, egg and almond extract until smooth to make the frangipane.\n' +
      '3. Spread the frangipane over the pre-baked case.\n' +
      '4. Press the halved strawberries cut-side down into the frangipane.\n' +
      '5. Bake for 25–30 minutes until the frangipane is set and golden. Cool before dusting with icing sugar and serving.',
    rawLines: [
      { rawName: 'Strawberries', rawMeasure: '300g' },
      { rawName: 'Ground almonds', rawMeasure: '200g' },
      { rawName: 'Rice flour', rawMeasure: '80g' },
      { rawName: 'Butter', rawMeasure: '150g' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
      { rawName: 'Icing sugar', rawMeasure: '40g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Almond extract', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Low-FODMAP baked bananas with dark chocolate',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Place the unpeeled bananas on a baking tray.\n' +
      '2. Bake for 15 minutes until the skins are completely black and the flesh is soft.\n' +
      '3. Meanwhile break the dark chocolate into pieces and melt in a small heatproof bowl set over a pan of barely simmering water.\n' +
      '4. Slit the baked bananas open along the top and drizzle the melted chocolate inside.\n' +
      '5. Scatter with toasted flaked almonds and serve straight away.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '2 firm-ripe' },
      { rawName: 'Dark chocolate', rawMeasure: '50g' },
      { rawName: 'Almonds', rawMeasure: '20g flaked' },
    ],
  },
  {
    title: 'Low-FODMAP orange and almond cake',
    servingsBase: 10,
    totalTimeMinutes: 90,
    course: 'Dessert',
    cuisine: 'Spanish',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Simmer the whole oranges in water for 1 hour until completely soft. Drain, cool and blitz to a smooth purée, skin and all.\n' +
      '2. Heat the oven to 170°C (fan 150°C) and line a 23cm tin.\n' +
      '3. Beat the eggs with the caster sugar until pale and thick. Fold in the ground almonds and baking powder, then the orange purée.\n' +
      '4. Pour into the tin and bake for 40–45 minutes until set in the centre.\n' +
      '5. Cool in the tin, dust with icing sugar, and serve in slices with strawberries.',
    rawLines: [
      { rawName: 'Orange', rawMeasure: '2' },
      { rawName: 'Ground almonds', rawMeasure: '250g' },
      { rawName: 'Egg', rawMeasure: '5' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Icing sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Strawberries', rawMeasure: '200g' },
    ],
  },
  {
    title: 'Low-FODMAP coconut rice pudding',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dessert',
    cuisine: 'Caribbean',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Tip the pudding rice into a pan with the coconut milk, water, caster sugar and a pinch of salt.\n' +
      '2. Bring slowly to a gentle simmer, stirring, then cook on the lowest heat for 35–40 minutes, stirring regularly, until thick and creamy.\n' +
      '3. Stir in the vanilla extract and the lime zest.\n' +
      '4. Spoon into bowls and top with pineapple chunks.\n' +
      '5. Scatter with toasted coconut flakes and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Pudding rice', rawMeasure: '120g' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Water', rawMeasure: '200ml' },
      { rawName: 'Pineapple', rawMeasure: '200g' },
      { rawName: 'Caster sugar', rawMeasure: '50g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '1 zest' },
      { rawName: 'Desiccated coconut', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Low-FODMAP lemon posset',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Pour the coconut cream into a pan with the caster sugar and bring to a rolling boil, stirring to dissolve the sugar.\n' +
      '2. Boil for exactly 3 minutes, stirring to prevent catching.\n' +
      '3. Remove from the heat and stir in the lemon juice and lemon zest. The mixture should thicken noticeably.\n' +
      '4. Pour into four small glasses or ramekins and leave to cool, then cover and refrigerate for at least 2 hours until set.\n' +
      '5. Serve topped with a few sliced strawberries.',
    rawLines: [
      { rawName: 'Coconut cream', rawMeasure: '400ml' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Strawberries', rawMeasure: '80g' },
    ],
  },
  {
    title: 'Low-FODMAP pineapple upside-down cake',
    servingsBase: 8,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Melt 30g butter with 2 tbsp brown sugar in the base of a round 20cm cake tin and swirl to coat.\n' +
      '2. Arrange pineapple rings over the caramel base.\n' +
      '3. Beat the remaining butter and sugar together until pale. Beat in the eggs one at a time, then fold in the ground almonds, rice flour and baking powder. Stir in the vanilla and a little pineapple juice to loosen.\n' +
      '4. Spoon the batter over the pineapple and smooth the top.\n' +
      '5. Bake for 30–35 minutes until golden and a skewer comes out clean. Cool for 5 minutes then invert onto a plate.',
    rawLines: [
      { rawName: 'Pineapple', rawMeasure: '6 rings in juice' },
      { rawName: 'Ground almonds', rawMeasure: '150g' },
      { rawName: 'Rice flour', rawMeasure: '60g' },
      { rawName: 'Butter', rawMeasure: '150g' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
      { rawName: 'Brown sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Low-FODMAP frozen strawberry yoghurt bark',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegetarian'],
    instructions:
      '1. Line a baking sheet with baking paper.\n' +
      '2. Mix the lactose-free yoghurt with the maple syrup and vanilla extract until smooth.\n' +
      '3. Spread the mixture in a rough rectangle about 1cm thick on the lined tray.\n' +
      '4. Scatter the sliced strawberries over the surface and sprinkle with pumpkin seeds.\n' +
      '5. Freeze for at least 3 hours until solid, then break into shards and serve straight from the freezer.',
    rawLines: [
      { rawName: 'Lactose-free yoghurt', rawMeasure: '400g' },
      { rawName: 'Strawberries', rawMeasure: '150g' },
      { rawName: 'Pumpkin seeds', rawMeasure: '2 tbsp' },
      { rawName: 'Maple syrup', rawMeasure: '2 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Low-FODMAP chocolate and peanut butter oat bars',
    servingsBase: 12,
    totalTimeMinutes: 35,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Low-FODMAP', 'Vegan'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C) and line a 20cm square tin.\n' +
      '2. Melt the peanut butter, maple syrup and coconut oil together in a pan over a low heat, stirring until smooth.\n' +
      '3. Remove from the heat and stir in the oats until fully coated.\n' +
      '4. Press evenly into the lined tin and bake for 18–20 minutes until golden.\n' +
      '5. While still warm, scatter over the dark chocolate chips and let them melt, then spread gently. Cool completely before cutting into 12 bars.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '250g' },
      { rawName: 'Peanut butter', rawMeasure: '100g' },
      { rawName: 'Maple syrup', rawMeasure: '80ml' },
      { rawName: 'Coconut oil', rawMeasure: '3 tbsp' },
      { rawName: 'Dark chocolate chips', rawMeasure: '80g' },
    ],
  },
]
