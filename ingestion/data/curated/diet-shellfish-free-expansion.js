// Shellfish-free expansion batch for Larder — additional recipes to grow the
// shellfish-free catalogue shelf.  Every recipe is crustacean- and
// mollusc-free by construction (no prawns, crab, lobster, mussels, clams,
// cockles, whelks, scallops, squid, octopus, or any shellfish derivative).
// Finned fish (salmon, cod, haddock, mackerel, tuna, sardines, trout,
// sea bass, anchovies) is permitted; such recipes carry "Pescatarian".
//
// IMPORTANT: avoid the substring triggers that pipeline/buildRecipe.js scans
// for: "oyster" (including oyster mushrooms / oyster sauce), "mussel",
// "prawn", "shrimp", "crab", "lobster", "clam", "scallop", "squid".
//
// dietLabels are honest — every recipe carries "Shellfish-free" plus any
// further applicable labels (Vegetarian, Vegan, Pescatarian, Gluten-free,
// Dairy-free, Mediterranean, High-protein, Low-carb, Keto, Low-calorie,
// Nut-free).
//
// Shape: { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//           instructions, rawLines:[{rawName, rawMeasure}] }
// British English throughout; no source/sourceId/imageUrl.

export default [
  // ─────────────────────── Breakfast & Brunch ───────────────────────
  {
    title: 'Shakshuka with feta',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Gluten-free', 'Mediterranean', 'Nut-free'],
    instructions:
      '1. Warm the olive oil in a wide frying pan and soften the sliced onion and pepper over a medium heat for 8 minutes.\n' +
      '2. Add the garlic, smoked paprika and cumin and stir for a minute until fragrant.\n' +
      '3. Tip in the chopped tomatoes, season and simmer for 10 minutes until slightly thickened.\n' +
      '4. Make four wells in the sauce with a spoon and crack an egg into each one.\n' +
      '5. Cover the pan and cook over a low heat for 5–6 minutes until the whites are set but the yolks remain runny.\n' +
      '6. Crumble the feta over the top, scatter with parsley and serve straight from the pan.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Feta', rawMeasure: '80g' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Ricotta and lemon hotcakes',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Beat the ricotta, eggs, lemon zest and a pinch of salt together in a bowl until smooth.\n' +
      '2. Sift in the self-raising flour and fold to a thick, loose batter; do not over-mix.\n' +
      '3. Melt a little butter in a non-stick pan over a medium heat.\n' +
      '4. Drop in heaped spoonfuls of batter and cook for 2–3 minutes until bubbles appear and the edges look set, then flip and cook 1 minute more.\n' +
      '5. Serve stacked with a drizzle of honey and a scattering of blueberries.',
    rawLines: [
      { rawName: 'Ricotta', rawMeasure: '250g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Lemon', rawMeasure: '1, zest only' },
      { rawName: 'Self-raising flour', rawMeasure: '80g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Breakfast burritos with black beans and salsa',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'Mexican',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Warm the tortilla wraps in a dry pan for 30 seconds each side.\n' +
      '2. Fry the sliced spring onions in a little oil, add the black beans and smoked paprika and stir for 2 minutes.\n' +
      '3. Whisk the eggs with salt and pepper, pour into the pan and scramble gently until just set.\n' +
      '4. Lay the wraps flat and spoon the egg mixture down the centre.\n' +
      '5. Top with the salsa and soured cream, fold up the ends and roll tightly to serve.',
    rawLines: [
      { rawName: 'Tortilla wrap', rawMeasure: '2 large' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Black beans', rawMeasure: '1 tin, drained' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Salsa', rawMeasure: '4 tbsp' },
      { rawName: 'Soured cream', rawMeasure: '3 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Warm spiced porridge with poached pear',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Place the halved pear in a small pan with the sugar, cinnamon stick and enough water to just cover. Poach gently for 8 minutes until tender, then lift out.\n' +
      '2. Meanwhile bring the milk to a gentle simmer in a separate pan, stir in the oats and a pinch of salt.\n' +
      '3. Cook for 5–6 minutes, stirring, until thick and creamy.\n' +
      '4. Spoon the porridge into bowls, lay a pear half on top and drizzle over a little of the poaching syrup.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Pear', rawMeasure: '1 ripe' },
      { rawName: 'Caster sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },

  // ─────────────────────── Soups & Light Lunches ───────────────────────
  {
    title: 'French onion soup',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Melt the butter with the olive oil in a large heavy pan and add the thinly sliced onions.\n' +
      '2. Cook over a low-medium heat for 40–45 minutes, stirring occasionally, until the onions are deeply caramelised and golden.\n' +
      '3. Add the thyme, a splash of brandy (optional) and the stock, then simmer for 15 minutes. Season well.\n' +
      '4. Ladle into oven-proof bowls. Float a toasted baguette slice on top of each, pile on grated Gruyere and grill for 3–4 minutes until bubbling and golden.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '1kg' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1L' },
      { rawName: 'Baguette', rawMeasure: '4 slices' },
      { rawName: 'Gruyere', rawMeasure: '120g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted red pepper and tomato soup',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Mediterranean', 'Nut-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Halve the peppers and tomatoes and lay cut-side up in a roasting tin with the onion halves and garlic cloves. Drizzle generously with olive oil and season.\n' +
      '2. Roast for 30 minutes until softened and lightly charred.\n' +
      '3. Tip everything into a blender with the stock, add the smoked paprika and blend until smooth.\n' +
      '4. Pass through a sieve for a silky finish if you like, reheat gently and season to taste.',
    rawLines: [
      { rawName: 'Red pepper', rawMeasure: '4' },
      { rawName: 'Tomato', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lentil and cumin soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Turkish',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the onion and carrot for 8 minutes.\n' +
      '2. Add the garlic, cumin and a pinch of chilli flakes and cook for 1 minute until fragrant.\n' +
      '3. Stir in the red lentils, pour in the stock and bring to the boil. Simmer for 20 minutes until the lentils are completely soft.\n' +
      '4. Blend until smooth, adjust the seasoning and serve with a squeeze of lemon and a drizzle of chilli oil if you like.',
    rawLines: [
      { rawName: 'Red lentils', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1L' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Caprese salad with balsamic glaze',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Mediterranean', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Slice the tomatoes and mozzarella into rounds roughly the same thickness.\n' +
      '2. Arrange alternating slices on a plate and tuck basil leaves between them.\n' +
      '3. Drizzle generously with extra virgin olive oil and season with salt and a good grind of black pepper.\n' +
      '4. Finish with a thread of balsamic glaze and serve immediately.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '3 large' },
      { rawName: 'Mozzarella', rawMeasure: '125g' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Balsamic vinegar', rawMeasure: '2 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Nicoise-style tuna and egg salad',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Shellfish-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Mediterranean', 'High-protein', 'Nut-free'],
    instructions:
      '1. Boil the eggs for 7 minutes, cool under cold water, then peel and halve.\n' +
      '2. Blanch the green beans in boiling salted water for 3 minutes, then refresh in cold water.\n' +
      '3. Arrange the lettuce, green beans, cherry tomatoes, olives and egg halves on two plates.\n' +
      '4. Flake the tuna over the top.\n' +
      '5. Whisk together the olive oil, lemon juice, mustard and a pinch of salt, then drizzle over the salad.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '1 tin in oil' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Green beans', rawMeasure: '100g' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Olives', rawMeasure: '40g' },
      { rawName: 'Lettuce', rawMeasure: '1 small' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Avocado and black bean tacos',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Mexican',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Warm the corn tortillas in a dry frying pan for 30 seconds each side.\n' +
      '2. Heat the black beans in a small pan with the cumin and a pinch of salt until warmed through.\n' +
      '3. Mash the avocado roughly with lime juice and salt.\n' +
      '4. Spread the avocado over each tortilla, spoon on the beans and top with diced tomato, sliced spring onion and coriander leaves.',
    rawLines: [
      { rawName: 'Corn tortilla', rawMeasure: '4' },
      { rawName: 'Black beans', rawMeasure: '1 tin, drained' },
      { rawName: 'Avocado', rawMeasure: '1 ripe' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Hummus and roasted vegetable flatbreads',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean', 'Nut-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Toss the courgette, pepper and red onion with olive oil and season. Roast for 20 minutes until tender and charred.\n' +
      '2. Warm the flatbreads under a grill for 1 minute each side.\n' +
      '3. Spread each flatbread generously with hummus.\n' +
      '4. Pile on the roasted vegetables, scatter with parsley and a drizzle of extra olive oil.',
    rawLines: [
      { rawName: 'Flatbread', rawMeasure: '2' },
      { rawName: 'Hummus', rawMeasure: '6 tbsp' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Carrot and ginger soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Soften the onion in the oil for 6 minutes, then add the grated ginger and garlic and cook for a further 2 minutes.\n' +
      '2. Add the sliced carrots, pour in the stock and bring to the boil.\n' +
      '3. Reduce the heat and simmer for 20 minutes until the carrots are very tender.\n' +
      '4. Blend until completely smooth, season and serve with a swirl of coconut milk.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger', rawMeasure: '30g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml' },
      { rawName: 'Coconut milk', rawMeasure: '4 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ─────────────────────── Chicken & Poultry Dinners ───────────────────────
  {
    title: 'Jerk chicken thighs with rice and peas',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['Shellfish-free', 'Gluten-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Mix the allspice, thyme, chilli powder, garlic, brown sugar and a splash of lime juice into a paste.\n' +
      '2. Score the chicken thighs deeply, rub the jerk paste all over, cover and marinate for at least 30 minutes (or overnight).\n' +
      '3. Heat the oven to 200°C (fan 180°C). Roast the chicken for 35–40 minutes until charred and cooked through.\n' +
      '4. Meanwhile rinse the rice and simmer with the coconut milk, kidney beans, spring onions and seasoning for 15 minutes until the liquid is absorbed.\n' +
      '5. Serve the jerk chicken on the rice with a wedge of lime.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8 bone-in' },
      { rawName: 'Allspice', rawMeasure: '2 tsp' },
      { rawName: 'Thyme', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Brown sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Long-grain rice', rawMeasure: '300g' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin, drained' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken cacciatore',
    servingsBase: 4,
    totalTimeMinutes: 80,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Shellfish-free', 'Gluten-free', 'Dairy-free', 'Mediterranean', 'High-protein', 'Nut-free'],
    instructions:
      '1. Season the chicken pieces and brown all over in olive oil in a deep casserole. Lift out.\n' +
      '2. Fry the onion, pepper and garlic in the same pan for 8 minutes until soft.\n' +
      '3. Return the chicken, pour in the chopped tomatoes and stock, add the olives, capers and rosemary and season well.\n' +
      '4. Cover and simmer gently for 45 minutes, or until the chicken is tender and the sauce has thickened.\n' +
      '5. Scatter with basil and serve with crusty bread or polenta.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8 bone-in' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Olives', rawMeasure: '80g' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
    ],
  },
  {
    title: 'Thai green chicken curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Shellfish-free', 'Gluten-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Heat the oil in a wok and fry the green curry paste for 1 minute until it smells aromatic.\n' +
      '2. Add the diced chicken and stir-fry for 3 minutes until sealed.\n' +
      '3. Pour in the coconut milk and bring to a gentle simmer.\n' +
      '4. Add the sliced courgette, kaffir lime leaves and fish sauce, then simmer for 12 minutes until the chicken is cooked through.\n' +
      '5. Stir through the spinach to wilt, squeeze in the lime juice and serve with jasmine rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g' },
      { rawName: 'Green curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Spinach', rawMeasure: '80g' },
      { rawName: 'Fish sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Kaffir lime leaves', rawMeasure: '3' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Chicken souvlaki with tzatziki',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Shellfish-free', 'Gluten-free', 'Mediterranean', 'High-protein', 'Nut-free'],
    instructions:
      '1. Cut the chicken into chunks and marinate for 20 minutes in olive oil, lemon juice, garlic, oregano and seasoning.\n' +
      '2. Thread onto skewers and grill or griddle for 10–12 minutes, turning, until golden and cooked through.\n' +
      '3. For the tzatziki, grate and squeeze dry the cucumber, then mix with the yoghurt, garlic, dill and a little salt.\n' +
      '4. Serve the skewers with the tzatziki, lemon wedges and warm flatbreads or pitta.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g' },
      { rawName: 'Dill', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and leek pie with shortcrust pastry',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Shellfish-free', 'Nut-free'],
    instructions:
      '1. Poach the chicken thighs in the stock for 20 minutes until cooked, then lift out and shred. Reserve the stock.\n' +
      '2. Melt the butter, cook the sliced leeks gently for 8 minutes, then stir in the flour and cook for a minute.\n' +
      '3. Gradually whisk in the reserved stock and cream to a thick, smooth sauce. Season and fold in the shredded chicken and tarragon.\n' +
      '4. Heat the oven to 200°C (fan 180°C). Roll out the pastry and line a deep pie dish, add the filling and lay the pastry lid on top, sealing and crimping the edges. Brush with beaten egg.\n' +
      '5. Bake for 35–40 minutes until the pastry is deep golden.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g' },
      { rawName: 'Leek', rawMeasure: '2' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Tarragon', rawMeasure: '1 tbsp' },
      { rawName: 'Shortcrust pastry', rawMeasure: '500g' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ─────────────────────── Beef, Lamb & Pork ───────────────────────
  {
    title: 'Beef massaman curry',
    servingsBase: 4,
    totalTimeMinutes: 130,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Shellfish-free', 'Gluten-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Heat the oil in a casserole and fry the massaman paste for 2 minutes until fragrant.\n' +
      '2. Add the diced beef and brown on all sides, then pour in the coconut milk and stock.\n' +
      '3. Add the potatoes, cinnamon stick and brown sugar and bring to a gentle simmer.\n' +
      '4. Cover and cook over a very low heat for 1 hour 30 minutes until the beef is meltingly tender.\n' +
      '5. Season with fish sauce and lime juice, scatter with coriander and serve with jasmine rice.',
    rawLines: [
      { rawName: 'Beef shin', rawMeasure: '600g' },
      { rawName: 'Massaman curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
      { rawName: 'Brown sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Fish sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Beef kofta with flatbreads and salad',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: ['Shellfish-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Combine the minced beef with the grated onion, garlic, cumin, coriander, smoked paprika, parsley and a generous pinch of salt.\n' +
      '2. Shape the mixture around metal skewers, forming fat sausage shapes, then chill for 10 minutes.\n' +
      '3. Grill or griddle over a high heat for 10–12 minutes, turning, until charred and cooked through.\n' +
      '4. Serve tucked into warm flatbreads with sliced tomato, red onion and a drizzle of tahini.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1/2, grated' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 tsp ground' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp' },
      { rawName: 'Flatbread', rawMeasure: '4' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork belly slices with apple sauce',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Shellfish-free', 'Gluten-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Score the pork belly skin in a fine crosshatch pattern and rub thoroughly with salt.\n' +
      '2. Heat the oven to 220°C (fan 200°C). Roast the pork on a rack for 30 minutes to crisp the skin, then reduce to 180°C (fan 160°C) and cook a further 15 minutes.\n' +
      '3. Meanwhile peel, core and slice the apples, place in a pan with a splash of water and the sugar and cook until collapsed into a smooth sauce.\n' +
      '4. Rest the pork for 5 minutes, slice and serve with the apple sauce and roasted vegetables.',
    rawLines: [
      { rawName: 'Pork belly', rawMeasure: '800g' },
      { rawName: 'Apple', rawMeasure: '3' },
      { rawName: 'Caster sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Lamb chops with herbed couscous',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Shellfish-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Rub the lamb chops all over with the olive oil, garlic, cumin and coriander, season and leave for 10 minutes.\n' +
      '2. Griddle or grill the chops over a high heat for 3–4 minutes each side for medium, then rest.\n' +
      '3. Meanwhile pour boiling stock over the couscous, cover and leave for 5 minutes. Fluff with a fork and toss through the parsley, mint, lemon zest and a drizzle of olive oil.\n' +
      '4. Serve the chops alongside the herbed couscous with lemon wedges.',
    rawLines: [
      { rawName: 'Lamb chop', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 tsp ground' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Couscous', rawMeasure: '180g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 220ml' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp' },
      { rawName: 'Mint', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Slow-cooked beef brisket with root vegetables',
    servingsBase: 6,
    totalTimeMinutes: 240,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Shellfish-free', 'Gluten-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Season the brisket generously all over.\n' +
      '2. Sear in oil in a large casserole until well browned on all sides, then lift out.\n' +
      '3. Soften the onion, carrot and celery for 5 minutes, then stir in the tomato purée and cook for 1 minute.\n' +
      '4. Return the brisket, pour in the stock and tuck in the thyme and bay leaves.\n' +
      '5. Cover tightly and braise in the oven for 3 hours 30 minutes until the meat is pull-apart tender.\n' +
      '6. Rest for 20 minutes before slicing or shredding, and serve with the braising liquor.',
    rawLines: [
      { rawName: 'Beef brisket', rawMeasure: '1.5kg' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Thyme', rawMeasure: '4 sprigs' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork and apple traybake',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Shellfish-free', 'Gluten-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Arrange the pork chops in a roasting tin.\n' +
      '2. Scatter the apple wedges, red onion, thyme and garlic around the pork.\n' +
      '3. Drizzle everything with olive oil, season and roast for 35–40 minutes until the pork is cooked and caramelised.\n' +
      '4. Rest for a few minutes before serving.',
    rawLines: [
      { rawName: 'Pork chop', rawMeasure: '4' },
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Thyme', rawMeasure: '4 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ─────────────────────── Fish & Seafood (Shellfish-free) ───────────────────────
  {
    title: 'Baked cod with tomato and olive crust',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Shellfish-free', 'Pescatarian', 'Mediterranean', 'Gluten-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the cod fillets in a lightly oiled baking dish.\n' +
      '2. Mix together the chopped cherry tomatoes, sliced olives, capers, garlic, lemon zest and olive oil.\n' +
      '3. Spoon the mixture over the fish and season.\n' +
      '4. Bake for 15–18 minutes until the fish is just cooked and flakes easily. Finish with a squeeze of lemon and torn basil.',
    rawLines: [
      { rawName: 'Cod', rawMeasure: '2 fillets' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled mackerel with mustard and herb crust',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Shellfish-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Heat the grill to high. Line a grill tray with foil and lay the mackerel fillets skin-side down.\n' +
      '2. Mix together the mustard, lemon zest, chopped parsley, a little oil and seasoning to form a paste.\n' +
      '3. Spread the paste evenly over the flesh of each fillet.\n' +
      '4. Grill for 6–8 minutes until the topping is golden and the fish is cooked through. Serve with a lemon wedge.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '4 fillets' },
      { rawName: 'Mustard', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Miso-glazed salmon with sesame pak choi',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Shellfish-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Whisk together the white miso paste, soy sauce, sesame oil, honey and a little water to form a loose glaze.\n' +
      '2. Sit the salmon fillets on a lined baking tray and spoon the glaze over the top.\n' +
      '3. Grill under a medium-high grill for 8–10 minutes until the glaze is sticky and the salmon is just cooked through.\n' +
      '4. Meanwhile halve the pak choi and stir-fry in a little sesame oil with garlic for 3 minutes.\n' +
      '5. Serve the salmon on a bed of pak choi with steamed rice and a sprinkle of sesame seeds.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'White miso paste', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tsp' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Pak choi', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Trout with almonds and brown butter',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Shellfish-free', 'Pescatarian', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Season the trout fillets. Heat a splash of oil in a frying pan and cook the trout skin-side down for 4 minutes, pressing lightly, until the skin is crisp.\n' +
      '2. Flip and cook for 1 minute more, then transfer to plates.\n' +
      '3. Wipe the pan clean, add the butter and cook over a medium heat until it turns golden and smells nutty.\n' +
      '4. Add the flaked almonds and toast briefly in the butter, then squeeze in the lemon juice.\n' +
      '5. Spoon the brown butter and almonds over the fish and serve with a scatter of parsley.',
    rawLines: [
      { rawName: 'Trout', rawMeasure: '2 fillets' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Flaked almonds', rawMeasure: '40g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sardines on sourdough toast with tomato',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: ['Shellfish-free', 'Pescatarian', 'Mediterranean', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Toast the sourdough slices until deep golden and crisp.\n' +
      '2. Rub the surface of each slice with the cut side of the garlic clove.\n' +
      '3. Halve the tomato and rub it firmly over the toast so the flesh and juice soak in; season with salt.\n' +
      '4. Drain the sardines and lay them over the toast, pressing lightly.\n' +
      '5. Drizzle with olive oil, squeeze over a little lemon and finish with a pinch of chilli flakes.',
    rawLines: [
      { rawName: 'Sardines', rawMeasure: '1 tin in oil' },
      { rawName: 'Sourdough bread', rawMeasure: '2 slices' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1/4' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ─────────────────────── Vegetarian & Vegan Mains ───────────────────────
  {
    title: 'Black bean and sweet potato enchiladas',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Roast the diced sweet potato with olive oil and smoked paprika for 20 minutes until tender.\n' +
      '2. Mix with the drained black beans, half the cheese and the cumin.\n' +
      '3. Warm the tortillas briefly so they are pliable. Divide the filling between them, roll up and nestle seam-side down in a baking dish.\n' +
      '4. Pour the passata over the enchiladas, scatter with the remaining cheese and bake for 25 minutes until bubbling and golden.\n' +
      '5. Serve with a spoon of soured cream and a sprinkle of coriander.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '400g' },
      { rawName: 'Black beans', rawMeasure: '1 tin, drained' },
      { rawName: 'Tortilla wrap', rawMeasure: '6' },
      { rawName: 'Passata', rawMeasure: '400ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '120g' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Soured cream', rawMeasure: '4 tbsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Butternut squash and sage risotto',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Mediterranean', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Roast the diced butternut squash with olive oil at 200°C (fan 180°C) for 25 minutes until golden and tender.\n' +
      '2. Soften the onion and garlic in butter in a large pan, then stir in the risotto rice for a minute.\n' +
      '3. Add the hot stock a ladleful at a time, stirring constantly for 18–20 minutes until the rice is creamy and al dente.\n' +
      '4. Fold in the roasted squash and the Parmesan, season and rest for a minute.\n' +
      '5. Fry the sage leaves in a little butter until crisp and scatter over to serve.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '1/2' },
      { rawName: 'Risotto rice', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1.2L' },
      { rawName: 'Parmesan', rawMeasure: '60g' },
      { rawName: 'Sage', rawMeasure: '10 leaves' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Dal makhani',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Cook the black lentils and kidney beans in plenty of water for 25 minutes until tender, then drain.\n' +
      '2. Heat the butter and oil together, add the onion and cook until dark golden — about 15 minutes.\n' +
      '3. Add the garlic, ginger, garam masala, cumin and chopped tomatoes and cook for 8 minutes until thickened.\n' +
      '4. Stir in the lentils and beans with the cream and a good pinch of salt, then simmer very gently for 15 minutes to develop the flavour.\n' +
      '5. Serve with naan and a scatter of chopped coriander.',
    rawLines: [
      { rawName: 'Black lentils', rawMeasure: '200g' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin, drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Double cream', rawMeasure: '80ml' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pea and mint frittata',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Gluten-free', 'Mediterranean', 'Nut-free'],
    instructions:
      '1. Heat the grill to high. Soften the spring onions in butter in an oven-proof frying pan.\n' +
      '2. Add the peas and cook for 2 minutes, then spread evenly in the pan.\n' +
      '3. Beat the eggs with the mint, Parmesan, salt and pepper and pour into the pan.\n' +
      '4. Cook over a medium-low heat for 4–5 minutes until the base is set but the top is still wobbly.\n' +
      '5. Transfer to the grill for 2–3 minutes until the top is just golden. Slide onto a board and cut into wedges.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Peas', rawMeasure: '200g' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Mint', rawMeasure: '2 tbsp' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted courgette and feta pasta',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Mediterranean', 'Nut-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Slice the courgettes, toss with olive oil, garlic and seasoning in a roasting tin and roast for 20 minutes until golden.\n' +
      '2. Cook the pasta in plenty of salted boiling water until al dente, reserving a cupful of the cooking water.\n' +
      '3. Toss the drained pasta with the roasted courgette, crumbled feta, lemon zest and a splash of cooking water.\n' +
      '4. Finish with torn basil, a crack of pepper and a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Penne pasta', rawMeasure: '350g' },
      { rawName: 'Courgette', rawMeasure: '3' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1, zest only' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sweet potato and spinach dhal',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Heat the oil in a large pan, add the onion and cook gently for 8 minutes until soft.\n' +
      '2. Stir in the garlic, ginger, cumin, coriander and turmeric and cook for 1–2 minutes.\n' +
      '3. Add the red lentils, diced sweet potato and the stock. Bring to the boil, cover and simmer for 20 minutes until everything is tender.\n' +
      '4. Stir through the spinach to wilt and season generously.\n' +
      '5. Serve with rice or naan and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Red lentils', rawMeasure: '200g' },
      { rawName: 'Sweet potato', rawMeasure: '400g' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 tsp ground' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Mapo tofu',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Heat the oil in a wok and fry the doubanjiang for 1 minute until it releases its red colour.\n' +
      '2. Add the garlic and ginger and cook for 30 seconds, then pour in the stock.\n' +
      '3. Gently slide in the cubed tofu and simmer for 5 minutes without stirring too much.\n' +
      '4. Mix the cornflour with a little cold water and stir into the sauce to thicken slightly.\n' +
      '5. Finish with the soy sauce, sesame oil and a good scatter of spring onions. Serve over rice.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g firm' },
      { rawName: 'Doubanjiang', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '15g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Cornflour', rawMeasure: '1 tsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Greek spinach and feta pie (spanakopita)',
    servingsBase: 6,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Mediterranean', 'Nut-free'],
    instructions:
      '1. Wilt the spinach in a pan with a splash of water, then drain well and squeeze out as much liquid as possible.\n' +
      '2. Chop roughly and mix with the crumbled feta, beaten eggs, spring onions, nutmeg and plenty of black pepper.\n' +
      '3. Heat the oven to 190°C (fan 170°C). Brush a baking tin with olive oil and layer in half the filo sheets, brushing each with oil as you go.\n' +
      '4. Spread the spinach filling evenly over the pastry, then layer the remaining filo on top, brushing each sheet.\n' +
      '5. Score the top into portions and bake for 40–45 minutes until deep golden and crisp.',
    rawLines: [
      { rawName: 'Spinach', rawMeasure: '500g' },
      { rawName: 'Feta', rawMeasure: '300g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Filo pastry', rawMeasure: '270g' },
      { rawName: 'Olive oil', rawMeasure: '60ml' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable and lentil Moroccan soup',
    servingsBase: 6,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Warm the oil in a large pot and soften the onion, celery and carrot for 8 minutes.\n' +
      '2. Stir in the garlic, cumin, coriander, cinnamon and a pinch of chilli flakes.\n' +
      '3. Add the chopped tomatoes, lentils, stock and chickpeas, bring to the boil and simmer for 25 minutes.\n' +
      '4. Add the diced courgette and cook for 8 more minutes until tender.\n' +
      '5. Season well, squeeze over lemon juice and serve with coriander.',
    rawLines: [
      { rawName: 'Green lentils', rawMeasure: '150g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin, drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 tsp ground' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1.2L' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Ratatouille',
    servingsBase: 4,
    totalTimeMinutes: 65,
    course: 'Side',
    cuisine: 'French',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Mediterranean', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Simmer the chopped tomatoes with the garlic, onion, tomato purée, thyme and a pinch of sugar for 15 minutes to a thick sauce. Season and spread in a wide baking dish.\n' +
      '2. Slice the courgette, aubergine and tomatoes into rounds of similar thickness.\n' +
      '3. Arrange the slices in overlapping concentric circles on top of the sauce, alternating the vegetables.\n' +
      '4. Drizzle with olive oil, season and cover with foil. Bake for 30 minutes, then uncover and bake 15 minutes more until tender and lightly caramelised.\n' +
      '5. Finish with fresh thyme leaves.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Thyme', rawMeasure: '4 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Korean-style bibimbap with egg',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Cook the jasmine rice according to the packet instructions, then keep warm.\n' +
      '2. Separately stir-fry the spinach, grated carrot and sliced mushrooms in sesame oil with a little soy sauce until just cooked.\n' +
      '3. Fry the eggs sunny-side up.\n' +
      '4. Divide the rice between bowls and arrange the vegetables in sections around the edge.\n' +
      '5. Place a fried egg in the centre, drizzle with gochujang mixed with a little sesame oil and honey, and scatter with sesame seeds.',
    rawLines: [
      { rawName: 'Jasmine rice', rawMeasure: '200g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Gochujang', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
    ],
  },

  // ─────────────────────── American & Caribbean ───────────────────────
  {
    title: 'BBQ pulled pork burgers',
    servingsBase: 6,
    totalTimeMinutes: 270,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['Shellfish-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C). Mix the smoked paprika, cumin, garlic powder, brown sugar and salt and rub all over the pork shoulder.\n' +
      '2. Sit the pork in a roasting tin with a splash of apple juice, cover tightly with foil and roast for 4 hours.\n' +
      '3. Remove the foil and roast for a further 30 minutes until the exterior is caramelised.\n' +
      '4. Pull the meat apart with two forks and mix through the BBQ sauce.\n' +
      '5. Pile into toasted burger buns with coleslaw.',
    rawLines: [
      { rawName: 'Pork shoulder', rawMeasure: '1.5kg' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garlic powder', rawMeasure: '1 tsp' },
      { rawName: 'Brown sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Apple juice', rawMeasure: '100ml' },
      { rawName: 'BBQ sauce', rawMeasure: '150ml' },
      { rawName: 'Burger bun', rawMeasure: '6' },
      { rawName: 'Salt', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Classic beef burgers with cheese',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['Shellfish-free', 'Nut-free'],
    instructions:
      '1. Divide the minced beef into four patties, season generously on both sides and press a slight indent in the centre with your thumb.\n' +
      '2. Heat a griddle pan until very hot. Cook the patties for 3–4 minutes on each side for medium-done without pressing them down.\n' +
      '3. Lay a slice of cheese on each patty and cover for 30 seconds to melt.\n' +
      '4. Toast the buns briefly on the griddle, then build the burgers with lettuce, tomato, red onion and your choice of sauce.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '600g' },
      { rawName: 'Cheddar cheese', rawMeasure: '4 slices' },
      { rawName: 'Burger bun', rawMeasure: '4' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Mustard', rawMeasure: '2 tbsp' },
      { rawName: 'Ketchup', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Caribbean jerk vegetable rice bowl',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Mix the allspice, thyme, brown sugar, lime juice, garlic and a drizzle of oil into a jerk paste.\n' +
      '2. Toss the plantain slices, red pepper and courgette in the paste, spread on a lined tray and roast for 25 minutes.\n' +
      '3. Rinse the rice and cook with the coconut milk and kidney beans for 15 minutes, covered, until the liquid is absorbed.\n' +
      '4. Fluff the rice, divide into bowls and top with the roasted vegetables. Finish with a squeeze of lime.',
    rawLines: [
      { rawName: 'Plantain', rawMeasure: '1 ripe' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Allspice', rawMeasure: '1 tsp' },
      { rawName: 'Thyme', rawMeasure: '1 tsp' },
      { rawName: 'Brown sugar', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Long-grain rice', rawMeasure: '280g' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin, drained' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },

  // ─────────────────────── Sides & Snacks ───────────────────────
  {
    title: 'Roasted broccoli with lemon and chilli',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Low-carb', 'Nut-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Break the broccoli into florets.\n' +
      '2. Toss generously with olive oil, chilli flakes and a pinch of salt.\n' +
      '3. Spread on a roasting tray in a single layer and roast for 18–20 minutes, turning once, until the edges are lightly charred.\n' +
      '4. Squeeze over the lemon juice, grate over a little garlic and serve immediately.',
    rawLines: [
      { rawName: 'Broccoli', rawMeasure: '1 large head' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Crispy smashed potatoes with herb dip',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Side',
    cuisine: 'American',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Boil the baby potatoes in salted water for 15 minutes until tender, then drain and cool slightly.\n' +
      '2. Spread on a large oiled baking tray. Use the flat of a glass to gently smash each potato so it flattens.\n' +
      '3. Drizzle generously with olive oil, season and roast at 220°C (fan 200°C) for 30 minutes until crisp and golden.\n' +
      '4. Mix the soured cream with chopped chives and a pinch of garlic salt to make the dip. Serve alongside.',
    rawLines: [
      { rawName: 'Baby potato', rawMeasure: '600g' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Soured cream', rawMeasure: '150g' },
      { rawName: 'Chives', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Patatas bravas',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'Spanish',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 210°C (fan 190°C). Cut the potatoes into chunks, parboil for 5 minutes, drain and let the steam dry off.\n' +
      '2. Toss in plenty of olive oil and roast for 30 minutes until crisp and golden.\n' +
      '3. Meanwhile fry the garlic and smoked paprika in a little olive oil for 30 seconds, add the chopped tomatoes and a pinch of chilli flakes and simmer for 10 minutes to a thick brava sauce.\n' +
      '4. Pour the sauce over the potatoes and serve at once.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Guacamole with crudites',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Mexican',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free', 'Low-carb'],
    instructions:
      '1. Halve and stone the avocados, scoop the flesh into a bowl.\n' +
      '2. Add the lime juice, finely diced red onion, deseeded and chopped tomato, coriander and a pinch of salt.\n' +
      '3. Mash together with a fork to your preferred texture — some like it smooth, others like it chunky.\n' +
      '4. Taste and adjust the lime and salt, then serve with the vegetable crudites for dipping.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2 ripe' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1/4' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp' },
      { rawName: 'Carrot', rawMeasure: '2, cut into sticks' },
      { rawName: 'Cucumber', rawMeasure: '1/2, cut into sticks' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced roasted chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Drain and thoroughly dry the chickpeas — blot with kitchen paper to remove as much moisture as possible.\n' +
      '2. Toss with olive oil, smoked paprika, cumin, garlic powder and salt until evenly coated.\n' +
      '3. Spread on a baking tray in a single layer and roast for 25–30 minutes, shaking once, until crisp and golden.\n' +
      '4. Cool on the tray — they will crisp further as they cool. Eat within a day for maximum crunch.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins, drained' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garlic powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Cheese and herb scones',
    servingsBase: 8,
    totalTimeMinutes: 30,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C) and lightly grease a baking tray.\n' +
      '2. Sift the flour, baking powder and a pinch of salt into a bowl. Rub in the butter until the mixture resembles breadcrumbs.\n' +
      '3. Stir through most of the cheese and the chopped chives, then add enough milk to bring it together to a soft, slightly sticky dough.\n' +
      '4. Pat out to 2cm thickness, cut into rounds with a pastry cutter and place on the tray.\n' +
      '5. Brush with milk, scatter over the remaining cheese and bake for 12–15 minutes until risen and golden.',
    rawLines: [
      { rawName: 'Self-raising flour', rawMeasure: '250g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g' },
      { rawName: 'Chives', rawMeasure: '2 tbsp' },
      { rawName: 'Milk', rawMeasure: '120ml' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Sauteed green beans with garlic and lemon',
    servingsBase: 4,
    totalTimeMinutes: 12,
    course: 'Side',
    cuisine: 'French',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Low-carb', 'Nut-free'],
    instructions:
      '1. Bring a large pan of salted water to the boil. Add the green beans and blanch for 3 minutes until bright green and just tender, then drain.\n' +
      '2. Heat the olive oil in a wide frying pan over a medium-high heat and add the sliced garlic.\n' +
      '3. Toss the beans in the oil for 2–3 minutes until they catch a little colour.\n' +
      '4. Remove from the heat, squeeze over the lemon juice, season and serve.',
    rawLines: [
      { rawName: 'Green beans', rawMeasure: '400g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked camembert with rosemary and garlic',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'French',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Unwrap the camembert and place it back in the base of its box (or a small baking dish).\n' +
      '2. Score the top in a diamond pattern, push slivers of garlic and small sprigs of rosemary into the cuts.\n' +
      '3. Drizzle with a little olive oil and bake for 15 minutes until the cheese is molten and starting to bubble.\n' +
      '4. Serve immediately with crusty bread or breadsticks for dipping.',
    rawLines: [
      { rawName: 'Camembert', rawMeasure: '1 whole' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Bread', rawMeasure: 'to serve' },
    ],
  },

  // ─────────────────────── Desserts & Bakes ───────────────────────
  {
    title: 'Salted caramel brownies',
    servingsBase: 12,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a 20cm square tin.\n' +
      '2. Melt the chocolate and butter together in a bowl over simmering water, then stir in the sugar.\n' +
      '3. Beat in the eggs one at a time, then fold in the flour and cocoa.\n' +
      '4. Pour the batter into the tin. Drizzle over the caramel sauce and use a skewer to swirl it through. Scatter with a pinch of flaked salt.\n' +
      '5. Bake for 22–25 minutes until set at the edges but with a slight wobble. Cool completely before cutting.',
    rawLines: [
      { rawName: 'Plain chocolate', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '150g' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Plain flour', rawMeasure: '80g' },
      { rawName: 'Cocoa powder', rawMeasure: '40g' },
      { rawName: 'Caramel sauce', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch flaked' },
    ],
  },
  {
    title: 'Lemon posset',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Pour the cream and sugar into a saucepan and bring to a rolling boil, stirring to dissolve the sugar.\n' +
      '2. Boil for exactly 3 minutes, then remove from the heat.\n' +
      '3. Stir in the lemon juice and zest, then pour into four small glasses or ramekins.\n' +
      '4. Refrigerate for at least 2 hours until set to a delicate, spoonable cream. Serve with a few raspberries.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '600ml' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '3' },
      { rawName: 'Raspberries', rawMeasure: '100g' },
    ],
  },
  {
    title: 'Tiramisu',
    servingsBase: 6,
    totalTimeMinutes: 30,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Whisk the egg yolks and sugar together until thick and pale. Beat in the mascarpone until smooth.\n' +
      '2. In a separate bowl, whisk the egg whites to stiff peaks, then fold gently into the mascarpone mixture in two batches.\n' +
      '3. Mix the espresso with a splash of brandy or rum and pour into a shallow dish.\n' +
      '4. Dip the sponge fingers briefly into the coffee mixture — a second each side — and lay half in a dish.\n' +
      '5. Spread half the mascarpone cream on top, repeat the layer, then dust thickly with cocoa powder. Chill for at least 4 hours before serving.',
    rawLines: [
      { rawName: 'Mascarpone', rawMeasure: '500g' },
      { rawName: 'Egg', rawMeasure: '3, separated' },
      { rawName: 'Caster sugar', rawMeasure: '80g' },
      { rawName: 'Sponge fingers', rawMeasure: '200g' },
      { rawName: 'Espresso coffee', rawMeasure: '250ml' },
      { rawName: 'Brandy', rawMeasure: '2 tbsp' },
      { rawName: 'Cocoa powder', rawMeasure: '3 tbsp' },
    ],
  },
  {
    title: 'Panna cotta with berry compote',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Soak the gelatine sheets in cold water for 5 minutes.\n' +
      '2. Warm the cream and sugar in a pan over a gentle heat, stirring until the sugar dissolves — do not boil.\n' +
      '3. Squeeze the water from the gelatine and stir into the warm cream along with the vanilla extract until dissolved.\n' +
      '4. Pour into four lightly oiled ramekins and chill for 4 hours until set.\n' +
      '5. Simmer the mixed berries with icing sugar and a squeeze of lemon for 5 minutes to a loose compote. Unmould the panna cottas and spoon the compote alongside.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '500ml' },
      { rawName: 'Caster sugar', rawMeasure: '60g' },
      { rawName: 'Gelatine sheets', rawMeasure: '3' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Mixed berries', rawMeasure: '250g' },
      { rawName: 'Icing sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/4' },
    ],
  },
  {
    title: 'Banana tarte tatin',
    servingsBase: 6,
    totalTimeMinutes: 40,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Melt the butter and sugar together in an oven-proof frying pan over a medium heat, stirring until the sugar starts to caramelise to a deep amber.\n' +
      '2. Arrange the halved bananas cut-side down in the caramel, pressing them in snugly.\n' +
      '3. Lay the pastry over the bananas, tucking the edges down around the fruit inside the pan.\n' +
      '4. Bake for 20–22 minutes until the pastry is deep golden.\n' +
      '5. Leave to rest for 5 minutes, then carefully invert onto a plate. Serve with cream or ice cream.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '4, slightly firm' },
      { rawName: 'Butter', rawMeasure: '80g' },
      { rawName: 'Caster sugar', rawMeasure: '120g' },
      { rawName: 'Puff pastry', rawMeasure: '320g' },
      { rawName: 'Double cream', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Churros with dark chocolate sauce',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dessert',
    cuisine: 'Spanish',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Bring the water, butter and a pinch of salt to the boil in a pan. Remove from the heat and beat in the flour vigorously until a smooth dough forms that pulls away from the sides.\n' +
      '2. Transfer to a piping bag fitted with a large star nozzle.\n' +
      '3. Heat the oil to 180°C. Pipe 10cm lengths of dough directly into the oil, snipping with scissors. Fry in batches for 3–4 minutes until deep golden, then drain and roll in caster sugar mixed with cinnamon.\n' +
      '4. Melt the chocolate with the cream and a pinch of salt to make the dipping sauce, and serve alongside.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '150g' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Caster sugar', rawMeasure: '60g' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Plain chocolate', rawMeasure: '150g' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Vegetable oil', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Cardamom and pistachio semolina cake',
    servingsBase: 10,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Shellfish-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and grease a 23cm round tin.\n' +
      '2. Beat the butter and sugar until pale and fluffy, then beat in the eggs one at a time.\n' +
      '3. Fold in the semolina, ground pistachios, baking powder, cardamom and a pinch of salt.\n' +
      '4. Pour into the tin and bake for 30–35 minutes until golden and a skewer comes out clean.\n' +
      '5. Meanwhile simmer the honey with a little water, orange zest and a dash of orange blossom water for 3 minutes. Pour over the warm cake and cool before slicing.',
    rawLines: [
      { rawName: 'Butter', rawMeasure: '150g' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Semolina', rawMeasure: '120g' },
      { rawName: 'Pistachio nuts', rawMeasure: '100g, ground' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Cardamom', rawMeasure: '1 tsp ground' },
      { rawName: 'Honey', rawMeasure: '4 tbsp' },
      { rawName: 'Orange', rawMeasure: '1, zest only' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Baked cheesecake with strawberries',
    servingsBase: 10,
    totalTimeMinutes: 90,
    course: 'Dessert',
    cuisine: 'American',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Blitz the digestive biscuits to fine crumbs and mix with the melted butter. Press firmly into the base of a lined 23cm springform tin and chill for 20 minutes.\n' +
      '2. Heat the oven to 160°C (fan 140°C). Beat the cream cheese, sugar and vanilla until smooth. Beat in the eggs one at a time, then fold in the soured cream.\n' +
      '3. Pour over the base and bake for 50–55 minutes until the edges are set but the centre has a slight wobble.\n' +
      '4. Turn off the oven and leave the cheesecake inside for 1 hour to cool slowly. Chill overnight.\n' +
      '5. Top with sliced strawberries and serve.',
    rawLines: [
      { rawName: 'Digestive biscuits', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '80g' },
      { rawName: 'Cream cheese', rawMeasure: '600g' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Soured cream', rawMeasure: '200g' },
      { rawName: 'Strawberries', rawMeasure: '300g' },
    ],
  },
  {
    title: 'Creme brulee',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C). Whisk the egg yolks with the sugar until pale and thick.\n' +
      '2. Warm the cream with the vanilla pod and seeds until just below a simmer, then gradually pour onto the yolks, whisking constantly.\n' +
      '3. Strain through a fine sieve into a jug and pour into four ramekins.\n' +
      '4. Set the ramekins in a deep baking dish, pour in boiling water to come halfway up the sides and bake for 30–35 minutes until just set with a gentle wobble in the centre.\n' +
      '5. Cool, then chill for 2 hours. Sprinkle each with a thin, even layer of caster sugar and blowtorch to a deep amber caramel.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '500ml' },
      { rawName: 'Egg', rawMeasure: '5, yolks only' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
      { rawName: 'Vanilla pod', rawMeasure: '1' },
    ],
  },
  {
    title: 'Treacle tart',
    servingsBase: 8,
    totalTimeMinutes: 65,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Line a 23cm loose-bottomed tart tin with the shortcrust pastry, trim and chill for 10 minutes.\n' +
      '2. Blind bake for 15 minutes with baking beans, then remove the beans and bake for a further 5 minutes.\n' +
      '3. Warm the golden syrup gently in a pan to loosen it, then stir in the breadcrumbs, lemon zest and cream.\n' +
      '4. Pour the filling into the pastry case and bake for 25–30 minutes until the filling is set with a very slight wobble.\n' +
      '5. Cool to warm and serve with clotted cream or vanilla ice cream.',
    rawLines: [
      { rawName: 'Shortcrust pastry', rawMeasure: '350g' },
      { rawName: 'Golden syrup', rawMeasure: '450g' },
      { rawName: 'Breadcrumbs', rawMeasure: '100g' },
      { rawName: 'Lemon', rawMeasure: '1, zest only' },
      { rawName: 'Double cream', rawMeasure: '3 tbsp' },
    ],
  },
  {
    title: 'Mango and coconut chia pudding',
    servingsBase: 2,
    totalTimeMinutes: 5,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Shellfish-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Stir the chia seeds, coconut milk and maple syrup together in a bowl until well combined.\n' +
      '2. Cover and refrigerate overnight or for at least 4 hours until the seeds have swelled and the mixture is thick and set.\n' +
      '3. Peel the mango and slice the flesh, discarding the stone.\n' +
      '4. Spoon the chia pudding into glasses, top with the mango slices and a final drizzle of coconut milk.',
    rawLines: [
      { rawName: 'Chia seeds', rawMeasure: '60g' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Maple syrup', rawMeasure: '2 tbsp' },
      { rawName: 'Mango', rawMeasure: '1 ripe' },
    ],
  },
  {
    title: 'Olive oil cake with orange',
    servingsBase: 10,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'Spanish',
    dietLabels: ['Shellfish-free', 'Vegetarian', 'Dairy-free', 'Mediterranean', 'Nut-free'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C) and oil and line a 23cm round cake tin.\n' +
      '2. Whisk the eggs and sugar together for 3–4 minutes until pale and slightly thickened.\n' +
      '3. Slowly whisk in the olive oil, then fold in the flour, baking powder, orange zest and juice.\n' +
      '4. Pour into the tin and bake for 40–45 minutes until golden and a skewer comes out clean.\n' +
      '5. Cool in the tin for 10 minutes, then turn out. Dust with icing sugar to serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Olive oil', rawMeasure: '180ml' },
      { rawName: 'Plain flour', rawMeasure: '250g' },
      { rawName: 'Baking powder', rawMeasure: '1.5 tsp' },
      { rawName: 'Orange', rawMeasure: '1, zest and juice' },
      { rawName: 'Icing sugar', rawMeasure: '1 tbsp' },
    ],
  },
]
