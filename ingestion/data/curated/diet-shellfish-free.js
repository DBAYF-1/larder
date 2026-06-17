// Curated SHELLFISH-FREE recipes for Larder (crustacean- and mollusc-free by
// construction).
//
// Each record is culinary content ONLY — sources/curated.js (mapCurated) adds
// the source/sourceId/imageUrl boilerplate and generates an on-brand SVG image.
//
// Shape per record (same as data/curated/mains.js):
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }
//
// HARD RULE — every recipe here STRICTLY satisfies "Shellfish-free": it
// contains NO crustaceans and NO molluscs, and nothing derived from them.
// That means NONE of: Prawns, Tiger prawns, Shrimp / Shrimp paste, Crab,
// Lobster, Crayfish, Langoustine, Mussels, Clams, Cockles, Oysters, Oyster
// sauce, Scallops, Squid, Octopus, Whelks, Seafood stock, or any "seafood"
// mixed bag. Finned fish IS permitted (salmon, cod, haddock, mackerel, tuna,
// sardines, anchovy, trout, sea bass) because it is not shellfish — those
// recipes are tagged Pescatarian, not Shellfish-free-only, and the eater can
// still rely on the absence of crustaceans/molluscs.
//
// NOTE on the pipeline's allergen keyword scan (pipeline/buildRecipe.js): the
// regex /(prawn|shrimp|crab|lobster|mussel|clam|scallop|squid|oyster)/i flags
// ANY canonical whose name contains those substrings as contains-crustaceans.
// So we deliberately never use shellfish canonicals AND we also avoid otherwise
// innocent names that contain those substrings (e.g. "Oyster mushrooms",
// "Oyster sauce") so the derivation stays honest — these recipes never trigger
// contains-crustaceans, and the catalogue can present them as a clean
// shellfish-free shelf.
//
// dietLabels are tagged honestly — a dish that is also Vegetarian / Vegan /
// Pescatarian / Gluten-free / Dairy-free / Mediterranean / High-protein /
// Low-carb / Keto / Low-calorie / Nut-free says so. rawNames are drawn from the
// canonical dictionary (data/ingredients.js) so they resolve cleanly. Original
// British-English prose throughout.

export default [
  // ───────────────────────── Breakfast & brunch ─────────────────────────
  {
    title: 'Creamy porridge with banana and honey',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Nut-free'],
    instructions:
      '1. Tip the oats into a pan with the milk and a small pinch of salt.\n' +
      '2. Bring slowly to a gentle simmer, stirring often so the base does not catch.\n' +
      '3. Cook for 5–6 minutes until thick and creamy, loosening with a splash more milk if you like it looser.\n' +
      '4. Spoon into bowls, slice the banana over the top and trickle on the honey.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Banana', rawMeasure: '1' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Overnight oats with berries and almond milk',
    servingsBase: 2,
    totalTimeMinutes: 5,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Stir the oats, almond milk and a drizzle of maple syrup together in a jar or bowl.\n' +
      '2. Fold in half the blueberries, cover and chill overnight (or at least four hours).\n' +
      '3. In the morning, loosen with a little more almond milk if needed.\n' +
      '4. Top with the remaining blueberries and the raspberries and serve cold.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Almond milk', rawMeasure: '250ml' },
      { rawName: 'Maple syrup', rawMeasure: '1 tbsp' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Raspberries', rawMeasure: '60g' },
    ],
  },
  {
    title: 'Full English breakfast',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Nut-free'],
    instructions:
      '1. Fry the sausages gently in a little vegetable oil for 12–15 minutes, turning, until browned and cooked through.\n' +
      '2. Add the bacon and cook for 4–5 minutes until crisp at the edges, then add the halved tomatoes and mushrooms.\n' +
      '3. Warm the baked beans in a small pan.\n' +
      '4. Fry or poach the eggs to your liking.\n' +
      '5. Pile everything onto warm plates with toast and serve at once.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '4' },
      { rawName: 'Bacon', rawMeasure: '4 rashers' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Mushroom', rawMeasure: '100g' },
      { rawName: 'Baked beans', rawMeasure: '200g' },
      { rawName: 'Bread', rawMeasure: '2 slices' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Smashed avocado on toast with chilli',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Toast the bread until deep gold and crisp.\n' +
      '2. Scoop the avocado into a bowl, add a squeeze of lemon, a pinch of salt and the chilli flakes, then mash to a rough, chunky paste.\n' +
      '3. Pile generously onto the toast.\n' +
      '4. Finish with a grind of black pepper and a thread of olive oil.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '1 ripe' },
      { rawName: 'Bread', rawMeasure: '2 slices' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and spinach scrambled eggs',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Melt the butter in a non-stick pan and fry the sliced mushrooms over a brisk heat until golden and dry.\n' +
      '2. Add the spinach and let it wilt down, then push to one side.\n' +
      '3. Beat the eggs with a splash of milk and a little salt, pour into the pan and stir gently over a low heat until just set and softly creamy.\n' +
      '4. Fold the mushrooms and spinach through, season and serve straight away.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Spinach', rawMeasure: '60g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Milk', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Banana and blueberry pancakes',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Nut-free'],
    instructions:
      '1. Mash the banana in a bowl, then whisk in the egg and milk.\n' +
      '2. Stir in the flour and baking powder to a thick, smooth batter and fold through most of the blueberries.\n' +
      '3. Heat a little butter in a non-stick pan and drop in spoonfuls of batter.\n' +
      '4. Cook for 2 minutes until bubbles rise, flip and cook for 1–2 minutes more until golden.\n' +
      '5. Stack up, scatter with the remaining blueberries and drizzle with maple syrup.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '1 large' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Milk', rawMeasure: '150ml' },
      { rawName: 'Plain flour', rawMeasure: '125g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Maple syrup', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Cinnamon French toast',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Nut-free'],
    instructions:
      '1. Whisk the eggs, milk, cinnamon and a little caster sugar together in a wide dish.\n' +
      '2. Soak each slice of bread in the mixture for 30 seconds a side until well coated.\n' +
      '3. Melt the butter in a frying pan and cook the bread for 2–3 minutes each side until golden and set.\n' +
      '4. Serve hot, dusted with a touch more cinnamon and a drizzle of maple syrup.',
    rawLines: [
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Milk', rawMeasure: '120ml' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Maple syrup', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Apple and cinnamon Bircher muesli',
    servingsBase: 2,
    totalTimeMinutes: 5,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Coarsely grate the apple into a bowl.\n' +
      '2. Stir in the oats, yoghurt, milk, cinnamon and honey.\n' +
      '3. Cover and chill overnight so the oats soften and swell.\n' +
      '4. Loosen with a little extra milk in the morning and scatter with the raisins.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '80g' },
      { rawName: 'Apple', rawMeasure: '1' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Raisins', rawMeasure: '2 tbsp' },
    ],
  },

  // ───────────────────────── Soups & light lunches ─────────────────────────
  {
    title: 'Leek and potato soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Melt the butter in a large pan and soften the sliced leeks and onion gently for 10 minutes without colouring.\n' +
      '2. Add the diced potato and the stock, bring to a simmer and cook for 20 minutes until the potato is tender.\n' +
      '3. Blend until smooth, then stir through the cream and season well.\n' +
      '4. Reheat gently and serve with crusty bread.',
    rawLines: [
      { rawName: 'Leek', rawMeasure: '3' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Double cream', rawMeasure: '60ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tomato and basil soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Soften the onion and garlic in olive oil for 8 minutes until sweet.\n' +
      '2. Add the chopped tomatoes, tomato purée and stock, then simmer for 20 minutes.\n' +
      '3. Tear in most of the basil and blend until smooth.\n' +
      '4. Season, swirl in a little cream if you like and finish with the remaining basil.',
    rawLines: [
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Double cream', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Spiced carrot and lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Warm the olive oil and fry the cumin and chilli flakes for 30 seconds until fragrant.\n' +
      '2. Add the grated carrot, red lentils and stock, bring to the boil and simmer for 15 minutes until the lentils are soft.\n' +
      '3. Blend roughly so it keeps some texture.\n' +
      '4. Season and serve with a spoon of yoghurt-free coconut milk swirled through, if you like.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '500g' },
      { rawName: 'Red lentils', rawMeasure: '120g' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Butternut squash and sage soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Toss the diced squash with olive oil, salt and the sage and roast at 200°C (fan 180°C) for 25 minutes until caramelised.\n' +
      '2. Meanwhile soften the onion and garlic in a large pan for 8 minutes.\n' +
      '3. Add the roasted squash and the stock, simmer for 10 minutes, then blend until silky.\n' +
      '4. Season and serve.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '1 medium' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Sage', rawMeasure: '6 leaves' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
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
    dietLabels: ['Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes all over, rub with a little oil and salt and bake directly on the shelf for 60–70 minutes until crisp and fluffy.\n' +
      '2. Warm the baked beans in a small pan.\n' +
      '3. Split the potatoes, add a knob of butter and spoon the beans over.\n' +
      '4. Scatter with grated Cheddar and serve.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '2 large baking' },
      { rawName: 'Baked beans', rawMeasure: '400g' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cheese and pickle ploughman’s sandwich',
    servingsBase: 1,
    totalTimeMinutes: 8,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Nut-free'],
    instructions:
      '1. Butter the bread on both inner sides.\n' +
      '2. Layer on thick slices of Cheddar, the lettuce and sliced tomato.\n' +
      '3. Spread the pickle over the second slice.\n' +
      '4. Press together, cut in half and serve.',
    rawLines: [
      { rawName: 'Bread', rawMeasure: '2 thick slices' },
      { rawName: 'Cheddar cheese', rawMeasure: '60g' },
      { rawName: 'Lettuce', rawMeasure: '2 leaves' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '10g' },
      { rawName: 'Branston pickle', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Halloumi and roasted vegetable wrap',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian', 'Mediterranean', 'Nut-free'],
    instructions:
      '1. Toss the sliced courgette and pepper with olive oil and roast at 220°C (fan 200°C) for 15 minutes until charred at the edges.\n' +
      '2. Fry the halloumi slices in a dry pan for 1–2 minutes a side until golden.\n' +
      '3. Warm the tortilla wraps briefly.\n' +
      '4. Fill with the roasted vegetables, halloumi and rocket, squeeze over a little lemon and roll up.',
    rawLines: [
      { rawName: 'Halloumi', rawMeasure: '225g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Tortilla wrap', rawMeasure: '2' },
      { rawName: 'Rocket', rawMeasure: '1 handful' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Greek salad with feta',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: ['Vegetarian', 'Mediterranean', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Cut the cucumber and tomatoes into chunks and tip into a bowl with the sliced red onion and olives.\n' +
      '2. Dress with olive oil, a squeeze of lemon and a pinch of oregano, then toss.\n' +
      '3. Break the feta over the top in rough pieces.\n' +
      '4. Grind over black pepper and serve at once.',
    rawLines: [
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Oregano', rawMeasure: '1 pinch' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea and roasted pepper salad',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegan', 'Vegetarian', 'Mediterranean', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Drain and rinse the chickpeas and tip into a bowl.\n' +
      '2. Add the chopped roasted peppers, halved cherry tomatoes and sliced spring onions.\n' +
      '3. Whisk olive oil with lemon juice, salt and the cumin, then pour over and toss.\n' +
      '4. Fold through the parsley and serve.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 tin' },
      { rawName: 'Red pepper', rawMeasure: '2 roasted' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jacket sweet potato with smoky black beans',
    servingsBase: 2,
    totalTimeMinutes: 55,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the sweet potatoes, rub with oil and bake for 45 minutes until soft.\n' +
      '2. Soften the onion and garlic in olive oil, stir in the smoked paprika and cumin and cook for a minute.\n' +
      '3. Add the black beans and chopped tomatoes and simmer for 10 minutes until thick.\n' +
      '4. Split the potatoes and spoon over the beans, finishing with coriander.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '2' },
      { rawName: 'Black beans', rawMeasure: '1 tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Egg mayonnaise sandwich with cress',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Nut-free'],
    instructions:
      '1. Boil the eggs for 9 minutes, then cool under cold water, peel and roughly chop.\n' +
      '2. Mix with the mayonnaise and a little salt and pepper.\n' +
      '3. Butter the bread and spoon the egg over four slices.\n' +
      '4. Scatter with cress, top with the remaining bread, cut and serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Cress', rawMeasure: '1 punnet' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Minestrone soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian', 'Mediterranean', 'Nut-free'],
    instructions:
      '1. Soften the onion, carrot and celery in olive oil for 10 minutes.\n' +
      '2. Stir in the garlic, then add the chopped tomatoes, stock and cannellini beans.\n' +
      '3. Simmer for 15 minutes, add the small pasta and cook for a further 10 minutes until tender.\n' +
      '4. Stir through the chopped parsley, season and serve with grated Parmesan.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin' },
      { rawName: 'Penne pasta', rawMeasure: '100g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1L' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
    ],
  },

  // ───────────────────────── Chicken & poultry mains ─────────────────────────
  {
    title: 'Roast chicken with lemon and thyme',
    servingsBase: 4,
    totalTimeMinutes: 100,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Gluten-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the chicken in a roasting tin, rub all over with olive oil, salt and pepper and the thyme leaves.\n' +
      '2. Halve the lemon and tuck it inside the cavity with a few thyme sprigs.\n' +
      '3. Roast for 1 hour 20 minutes, basting once, until the juices run clear.\n' +
      '4. Rest under foil for 15 minutes before carving.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1.6kg' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Thyme', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and mushroom pie',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free'],
    instructions:
      '1. Fry the diced chicken in a little oil until golden, then lift out.\n' +
      '2. Soften the onion and mushrooms in the same pan, stir in the flour and cook for a minute.\n' +
      '3. Gradually add the stock and cream, return the chicken and simmer until thick. Stir in the parsley and cool slightly.\n' +
      '4. Tip into a pie dish, lay the pastry over, trim and brush with beaten egg.\n' +
      '5. Bake at 200°C (fan 180°C) for 30 minutes until golden.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g' },
      { rawName: 'Mushroom', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp' },
      { rawName: 'Puff pastry', rawMeasure: '320g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Chicken tikka masala',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Gluten-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Toss the diced chicken with the yoghurt, half the garam masala and a little salt and leave 20 minutes.\n' +
      '2. Fry the marinated chicken in oil until coloured, then lift out.\n' +
      '3. Soften the onion, garlic and ginger, add the remaining garam masala and the chopped tomatoes and simmer 10 minutes.\n' +
      '4. Return the chicken, pour in the cream and simmer 10 minutes more. Finish with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g' },
      { rawName: 'Natural yoghurt', rawMeasure: '100g' },
      { rawName: 'Garam masala', rawMeasure: '2 tbsp' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Lemon and herb roast chicken thighs',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Gluten-free', 'Dairy-free', 'High-protein', 'Low-carb', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the chicken thighs with olive oil, lemon zest and juice, the garlic and the rosemary.\n' +
      '2. Arrange skin-side up in a roasting tin and season well.\n' +
      '3. Roast for 35–40 minutes until the skin is crisp and the juices run clear.\n' +
      '4. Rest briefly, then spoon the pan juices over to serve.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken fajitas',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Slice the chicken and toss with the smoked paprika, cumin, a little oil and salt.\n' +
      '2. Fry over a high heat until coloured and cooked through, then lift out.\n' +
      '3. Fry the sliced peppers and onion in the same pan until softened and charred.\n' +
      '4. Return the chicken, squeeze over lime and pile into warm tortillas with coriander.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g' },
      { rawName: 'Red pepper', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Tortilla wrap', rawMeasure: '8' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Coronation chicken',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Gluten-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Poach the chicken breasts in simmering water for 15 minutes until cooked, then cool and shred.\n' +
      '2. Mix the mayonnaise, curry powder, a little mango chutney and a squeeze of lemon in a bowl.\n' +
      '3. Fold in the shredded chicken and the sultanas.\n' +
      '4. Season and serve over rice or with crisp lettuce.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Mango chutney', rawMeasure: '2 tbsp' },
      { rawName: 'Sultanas', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Lettuce', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Turkey and vegetable stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Slice the turkey thinly and toss with a little soy sauce.\n' +
      '2. Heat oil in a wok until smoking and stir-fry the turkey until just cooked, then lift out.\n' +
      '3. Stir-fry the broccoli, pepper and spring onions for 3 minutes, adding the garlic and ginger near the end.\n' +
      '4. Return the turkey, splash in soy sauce and a little honey, toss and serve with rice.',
    rawLines: [
      { rawName: 'Turkey breast', rawMeasure: '500g' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Chicken Caesar-style salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Nut-free'],
    instructions:
      '1. Season the chicken breasts and fry in a little oil for 6–7 minutes a side until cooked through, then rest and slice.\n' +
      '2. Toss the cos lettuce with the mayonnaise loosened with lemon juice and a little grated Parmesan.\n' +
      '3. Pile onto plates, top with the sliced chicken and scatter with croutons.\n' +
      '4. Finish with a final grating of Parmesan and a grind of pepper.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Lettuce', rawMeasure: '1 cos' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Bread', rawMeasure: '2 slices' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ───────────────────────── Beef, lamb & pork mains ─────────────────────────
  {
    title: 'Shepherd’s pie',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Gluten-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Heat a splash of olive oil and brown the minced lamb over a high heat, breaking it up. Lift out.\n' +
      '2. Soften the onion, carrot and celery for 8–10 minutes, stir in the tomato purée and cook for a minute.\n' +
      '3. Return the lamb, add the stock and Worcestershire sauce, season and simmer 25 minutes. Stir in the peas.\n' +
      '4. Boil the potatoes until tender, drain and mash with butter and milk.\n' +
      '5. Tip the lamb into a dish, spoon the mash over, fork the top and bake at 200°C (fan 180°C) for 25–30 minutes.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Spaghetti bolognese',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Nut-free'],
    instructions:
      '1. Brown the minced beef in olive oil over a high heat, then lift out.\n' +
      '2. Soften the onion, carrot and celery, stir in the garlic and tomato purée and cook for a minute.\n' +
      '3. Return the beef, add the chopped tomatoes, stock and oregano and simmer gently for 30–40 minutes until rich.\n' +
      '4. Meanwhile cook the spaghetti until al dente, drain and toss with the sauce.\n' +
      '5. Serve topped with grated Parmesan.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Spaghetti', rawMeasure: '350g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Beef and ale stew with dumplings',
    servingsBase: 4,
    totalTimeMinutes: 165,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free'],
    instructions:
      '1. Toss the diced beef in seasoned flour and brown in batches in oil, then set aside.\n' +
      '2. Soften the onion and carrot, return the beef, pour in the ale and stock and add the thyme.\n' +
      '3. Cover and simmer very gently for 2 hours until the beef is meltingly tender.\n' +
      '4. Rub the suet into the self-raising flour with a little water to make soft dumplings, drop on top and simmer 20 minutes more with the lid on.',
    rawLines: [
      { rawName: 'Beef shin', rawMeasure: '700g' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Ale', rawMeasure: '330ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Self-raising flour', rawMeasure: '150g' },
      { rawName: 'Suet', rawMeasure: '75g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Lamb rogan josh',
    servingsBase: 4,
    totalTimeMinutes: 110,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Gluten-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Brown the diced lamb in oil in batches, then set aside.\n' +
      '2. Soften the onion, then add the garlic, ginger, garam masala and a little chilli powder and cook until fragrant.\n' +
      '3. Return the lamb, add the chopped tomatoes and stock, cover and simmer gently for 1½ hours until tender.\n' +
      '4. Stir through the coriander and serve with rice.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '700g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Garam masala', rawMeasure: '2 tbsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Pork sausage and bean casserole',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Dairy-free', 'Nut-free'],
    instructions:
      '1. Brown the sausages in a little oil in a casserole, then lift out and slice thickly.\n' +
      '2. Soften the onion and pepper, stir in the smoked paprika and cook for a minute.\n' +
      '3. Return the sausages, add the chopped tomatoes, cannellini beans and stock, then simmer for 25 minutes until thick.\n' +
      '4. Season and serve with crusty bread.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '8' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Cottage pie',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Gluten-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Brown the minced beef in a large pan over a high heat, then lift out.\n' +
      '2. Soften the onion, carrot and celery for 8–10 minutes, stir in the tomato purée and cook for a minute.\n' +
      '3. Return the beef, add the stock and Worcestershire sauce, season and simmer 25–30 minutes.\n' +
      '4. Boil the potatoes until tender, drain and mash with butter and milk.\n' +
      '5. Spoon the beef into a dish, top with mash, scatter with Cheddar and bake at 200°C (fan 180°C) for 25–30 minutes.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '50g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
    ],
  },
  {
    title: 'Sticky honey and mustard pork chops',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Gluten-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Mix the honey, mustard and a squeeze of lemon together.\n' +
      '2. Season the pork chops and sear in a hot pan with a little oil for 3 minutes a side.\n' +
      '3. Brush over the honey-mustard glaze and cook for 2 minutes more each side until sticky and cooked through.\n' +
      '4. Rest briefly and spoon over the pan juices.',
    rawLines: [
      { rawName: 'Pork chop', rawMeasure: '2' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Mustard', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chilli con carne',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Gluten-free', 'Dairy-free', 'High-protein', 'Nut-free'],
    instructions:
      '1. Brown the minced beef in oil over a high heat, then lift out.\n' +
      '2. Soften the onion and pepper, stir in the garlic, cumin, smoked paprika and chilli powder.\n' +
      '3. Return the beef, add the chopped tomatoes, kidney beans and stock and simmer for 35 minutes until thick.\n' +
      '4. Season and serve with rice.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Slow-roast lamb shoulder with rosemary',
    servingsBase: 6,
    totalTimeMinutes: 270,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Gluten-free', 'Dairy-free', 'High-protein', 'Low-carb', 'Nut-free'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Sit the lamb shoulder on the onion halves in a roasting tin.\n' +
      '2. Stud with slivers of garlic and rosemary, rub with olive oil and season generously.\n' +
      '3. Pour a little stock into the tin, cover tightly with foil and roast for 4 hours until the meat pulls apart.\n' +
      '4. Uncover for the last 20 minutes to brown, then rest before shredding.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '2kg' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '1 bulb' },
      { rawName: 'Rosemary', rawMeasure: '4 sprigs' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 250ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bacon and leek pasta',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free'],
    instructions:
      '1. Cook the pasta until al dente, reserving a little cooking water.\n' +
      '2. Meanwhile fry the bacon until crisp, then add the sliced leeks and soften for 6–8 minutes.\n' +
      '3. Stir in the cream and a splash of pasta water and warm through.\n' +
      '4. Toss the drained pasta through the sauce with the Parmesan, season and serve.',
    rawLines: [
      { rawName: 'Penne pasta', rawMeasure: '350g' },
      { rawName: 'Bacon', rawMeasure: '150g' },
      { rawName: 'Leek', rawMeasure: '2' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ───────────────────────── Fish mains (shellfish-free) ─────────────────────────
  {
    title: 'Beer-battered cod and chips',
    servingsBase: 2,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Cut the potatoes into thick chips, parboil for 5 minutes, drain and dry well.\n' +
      '2. Whisk the flour with the cold beer and a pinch of salt to a thick batter.\n' +
      '3. Heat the oil to 180°C and fry the chips until golden, then drain.\n' +
      '4. Dip the cod in the batter and fry for 5–6 minutes until crisp and deep gold.\n' +
      '5. Drain, season and serve with the chips, peas and lemon.',
    rawLines: [
      { rawName: 'Cod', rawMeasure: '2 fillets' },
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Plain flour', rawMeasure: '150g' },
      { rawName: 'Beer', rawMeasure: '200ml' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked salmon with dill and lemon',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian', 'Gluten-free', 'Dairy-free', 'High-protein', 'Low-carb', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the salmon fillets on a lined tray.\n' +
      '2. Drizzle with olive oil, scatter with chopped dill and lay lemon slices on top.\n' +
      '3. Season and bake for 12–14 minutes until the salmon flakes easily.\n' +
      '4. Serve with a squeeze of the roasted lemon.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Dill', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked haddock fishcakes',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian', 'Nut-free'],
    instructions:
      '1. Boil the potatoes until tender, drain and mash, then cool a little.\n' +
      '2. Poach the smoked haddock in the milk for 5 minutes, then flake, discarding any skin.\n' +
      '3. Fold the fish into the mash with the parsley and a little of the poaching milk, then shape into cakes.\n' +
      '4. Coat in flour then beaten egg then breadcrumbs and fry for 3–4 minutes a side until golden.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '400g' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp' },
      { rawName: 'Plain flour', rawMeasure: '3 tbsp' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Breadcrumbs', rawMeasure: '80g' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
    ],
  },
  {
    title: 'Tuna pasta bake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian', 'Nut-free'],
    instructions:
      '1. Cook the pasta until just shy of al dente and drain.\n' +
      '2. Melt the butter, stir in the flour, then gradually whisk in the milk to a smooth sauce. Stir in most of the cheese.\n' +
      '3. Fold in the drained tuna, sweetcorn and the pasta, then tip into a baking dish.\n' +
      '4. Scatter with the remaining cheese and bake at 200°C (fan 180°C) for 20 minutes until golden.',
    rawLines: [
      { rawName: 'Penne pasta', rawMeasure: '350g' },
      { rawName: 'Tuna', rawMeasure: '2 tins' },
      { rawName: 'Sweetcorn', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '120g' },
    ],
  },
  {
    title: 'Pan-fried mackerel with gooseberry-free lemon butter',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian', 'Gluten-free', 'High-protein', 'Low-carb', 'Nut-free'],
    instructions:
      '1. Score the mackerel fillets and season well.\n' +
      '2. Fry skin-side down in a little oil for 3 minutes until the skin is crisp, then flip for 1 minute more.\n' +
      '3. Lift out, add the butter and lemon juice to the pan and swirl to a glossy sauce.\n' +
      '4. Spoon the lemon butter over the fish and scatter with parsley.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '4 fillets' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Fish pie',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian', 'Nut-free'],
    instructions:
      '1. Boil the potatoes until tender, drain and mash with butter and a splash of milk.\n' +
      '2. Poach the cod and smoked haddock in the milk for 4 minutes, then lift out and flake.\n' +
      '3. Make a sauce with the butter, flour and the poaching milk, stir in the peas and parsley, then fold in the fish and the eggs.\n' +
      '4. Tip into a dish, top with mash and bake at 200°C (fan 180°C) for 30 minutes until golden.',
    rawLines: [
      { rawName: 'Cod', rawMeasure: '300g' },
      { rawName: 'Smoked haddock', rawMeasure: '300g' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Roasted sea bass with cherry tomatoes',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Pescatarian', 'Mediterranean', 'Gluten-free', 'Dairy-free', 'High-protein', 'Low-carb', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Scatter the cherry tomatoes, garlic and olives in a roasting tin and drizzle with olive oil.\n' +
      '2. Roast for 10 minutes until the tomatoes begin to burst.\n' +
      '3. Sit the sea bass fillets on top, season and add lemon slices, then roast 10–12 minutes more until just cooked.\n' +
      '4. Finish with torn basil.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '2 fillets' },
      { rawName: 'Cherry tomato', rawMeasure: '250g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Olives', rawMeasure: '50g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
    ],
  },
  {
    title: 'Kedgeree',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Pescatarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Poach the smoked haddock in the milk for 5 minutes, then flake.\n' +
      '2. Soften the onion in butter, stir in the curry powder and cook for a minute.\n' +
      '3. Add the rice and stock, cover and simmer for 12 minutes until the rice is tender.\n' +
      '4. Fold in the flaked fish, the quartered boiled eggs and the parsley and serve with lemon.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '400g' },
      { rawName: 'Basmati rice', rawMeasure: '250g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
    ],
  },

  // ───────────────────────── Vegetarian & vegan mains ─────────────────────────
  {
    title: 'Vegetable lasagne',
    servingsBase: 6,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian', 'Mediterranean', 'Nut-free'],
    instructions:
      '1. Roast the diced courgette, aubergine and pepper with olive oil at 220°C (fan 200°C) for 20 minutes.\n' +
      '2. Simmer the chopped tomatoes with garlic, tomato purée and oregano for 15 minutes, then stir in the roasted vegetables.\n' +
      '3. Make a white sauce with butter, flour and milk and stir in half the cheese.\n' +
      '4. Layer the vegetable sauce, lasagne sheets and white sauce in a dish, finishing with white sauce and the rest of the cheese.\n' +
      '5. Bake at 190°C (fan 170°C) for 40 minutes until golden.',
    rawLines: [
      { rawName: 'Lasagne sheets', rawMeasure: '12' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Chickpea and spinach curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Soften the onion in oil, then add the garlic, ginger and garam masala and cook until fragrant.\n' +
      '2. Stir in the chopped tomatoes and chickpeas and simmer for 10 minutes.\n' +
      '3. Add the spinach and let it wilt down, then pour in the coconut milk and warm through.\n' +
      '4. Season and serve with rice.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Garam masala', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Mushroom risotto',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian', 'Mediterranean', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Soften the onion and garlic in butter, then add the sliced mushrooms and cook until golden.\n' +
      '2. Stir in the risotto rice for a minute, then add the hot stock a ladle at a time, stirring until absorbed.\n' +
      '3. Continue for about 18 minutes until the rice is creamy and just tender.\n' +
      '4. Beat in the Parmesan and a knob of butter, season and rest for a minute before serving.',
    rawLines: [
      { rawName: 'Risotto rice', rawMeasure: '300g' },
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1L' },
      { rawName: 'Parmesan', rawMeasure: '60g' },
      { rawName: 'Butter', rawMeasure: '50g' },
    ],
  },
  {
    title: 'Margherita pizza',
    servingsBase: 2,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian', 'Mediterranean', 'Nut-free'],
    instructions:
      '1. Mix the flour, yeast and salt with the warm water and olive oil, knead for 10 minutes and prove for an hour until doubled.\n' +
      '2. Simmer the passata with garlic and a pinch of oregano for 10 minutes to a thick sauce.\n' +
      '3. Stretch the dough thin, spread with sauce and scatter with torn mozzarella.\n' +
      '4. Bake at the hottest oven setting for 8–10 minutes, then finish with fresh basil.',
    rawLines: [
      { rawName: 'Strong white bread flour', rawMeasure: '300g' },
      { rawName: 'Yeast', rawMeasure: '7g' },
      { rawName: 'Passata', rawMeasure: '150ml' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Oregano', rawMeasure: '1 pinch' },
      { rawName: 'Mozzarella', rawMeasure: '125g' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Vegan shepherd’s pie with lentils',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Soften the onion, carrot and celery in olive oil for 10 minutes.\n' +
      '2. Stir in the tomato purée, add the green lentils, chopped tomatoes and stock and simmer for 20 minutes.\n' +
      '3. Boil the potatoes until tender, drain and mash with a little olive oil and salt.\n' +
      '4. Spoon the lentils into a dish, top with the mash, fork the surface and bake at 200°C (fan 180°C) for 25 minutes.',
    rawLines: [
      { rawName: 'Green lentils', rawMeasure: '250g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine parmigiana',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian', 'Mediterranean', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Slice the aubergines, brush with olive oil and griddle or roast until soft and golden.\n' +
      '2. Simmer the chopped tomatoes with garlic and basil for 15 minutes to a thick sauce.\n' +
      '3. Layer aubergine, tomato sauce and torn mozzarella in a dish, repeating and finishing with Parmesan.\n' +
      '4. Bake at 190°C (fan 170°C) for 30 minutes until bubbling and golden.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '3' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Mozzarella', rawMeasure: '250g' },
      { rawName: 'Parmesan', rawMeasure: '60g' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
    ],
  },
  {
    title: 'Vegetable and chickpea tagine',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Soften the onion in olive oil, then add the garlic, cumin, cinnamon and a little chilli.\n' +
      '2. Add the diced squash, carrots, chopped tomatoes, chickpeas and stock, then simmer for 25 minutes.\n' +
      '3. Stir in the dried apricots and cook 5 minutes more until everything is tender.\n' +
      '4. Finish with coriander and serve with couscous.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '1/2' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Dried apricots', rawMeasure: '80g' },
      { rawName: 'Couscous', rawMeasure: '250g' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Paneer and pea curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Fry the cubed paneer in oil until golden on all sides, then lift out.\n' +
      '2. Soften the onion, then add the garlic, ginger and garam masala and cook until fragrant.\n' +
      '3. Stir in the chopped tomatoes and simmer 10 minutes, then add the peas and the paneer.\n' +
      '4. Swirl through the cream, season and serve with rice.',
    rawLines: [
      { rawName: 'Paneer', rawMeasure: '400g' },
      { rawName: 'Peas', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Garam masala', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Double cream', rawMeasure: '60ml' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Tofu and vegetable noodle stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Press and cube the tofu, then fry in oil until golden and crisp. Lift out.\n' +
      '2. Cook the noodles, drain and set aside.\n' +
      '3. Stir-fry the broccoli, pepper and spring onions over a high heat, adding the garlic and ginger near the end.\n' +
      '4. Return the tofu and noodles, splash in the soy sauce and toss until glossy and hot.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g' },
      { rawName: 'Noodles', rawMeasure: '250g' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Soy sauce', rawMeasure: '4 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
    ],
  },
  {
    title: 'Stuffed peppers with rice and feta',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian', 'Mediterranean', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers and remove the seeds.\n' +
      '2. Soften the onion and garlic in olive oil, stir in the cooked rice, chopped tomatoes and oregano.\n' +
      '3. Spoon the filling into the peppers, crumble over the feta and drizzle with oil.\n' +
      '4. Bake for 35–40 minutes until the peppers are soft and the tops are golden.',
    rawLines: [
      { rawName: 'Red pepper', rawMeasure: '4' },
      { rawName: 'Cooked rice', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Cauliflower cheese',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Boil the cauliflower florets for 5 minutes until just tender, then drain well.\n' +
      '2. Melt the butter, stir in the cornflour, then gradually whisk in the milk to a smooth sauce.\n' +
      '3. Stir in most of the cheese and a pinch of mustard powder, then pour over the cauliflower in a dish.\n' +
      '4. Scatter with the remaining cheese and bake at 200°C (fan 180°C) for 25 minutes until golden.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Cornflour', rawMeasure: '30g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Mustard powder', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Vegan chilli with three beans',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Soften the onion and pepper in olive oil, then add the garlic, cumin, smoked paprika and chilli powder.\n' +
      '2. Stir in the chopped tomatoes, kidney beans, black beans and cannellini beans with a little stock.\n' +
      '3. Simmer for 25 minutes until thick and rich.\n' +
      '4. Season and serve with rice and coriander.',
    rawLines: [
      { rawName: 'Kidney beans', rawMeasure: '1 tin' },
      { rawName: 'Black beans', rawMeasure: '1 tin' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Halloumi and chickpea traybake',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian', 'Mediterranean', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Toss the chickpeas, pepper, courgette and red onion with olive oil, cumin and smoked paprika in a roasting tin.\n' +
      '2. Roast for 20 minutes until starting to char.\n' +
      '3. Tuck cubes of halloumi among the vegetables and roast 10 minutes more until golden.\n' +
      '4. Squeeze over lemon and scatter with parsley to serve.',
    rawLines: [
      { rawName: 'Halloumi', rawMeasure: '225g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
    ],
  },

  // ───────────────────────── Sides & salads ─────────────────────────
  {
    title: 'Garlic and rosemary roast potatoes',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Parboil the potatoes for 8 minutes, then drain and shake to roughen the edges.\n' +
      '2. Tip into a roasting tin with hot oil, the garlic cloves and rosemary and toss to coat.\n' +
      '3. Roast for 45 minutes, turning once, until deep gold and crisp.\n' +
      '4. Season with salt and serve.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '1kg' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Rosemary', rawMeasure: '3 sprigs' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Honey-roasted carrots and parsnips',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the carrots and parsnips into batons.\n' +
      '2. Toss with olive oil, honey and thyme in a roasting tin and season.\n' +
      '3. Roast for 35 minutes, turning once, until caramelised and tender.\n' +
      '4. Serve hot.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '400g' },
      { rawName: 'Parsnip', rawMeasure: '400g' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tabbouleh',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Mediterranean', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Soak the bulgur wheat in boiling water for 15 minutes, then drain and fluff.\n' +
      '2. Finely chop the parsley, mint, tomatoes and spring onions.\n' +
      '3. Toss everything together with olive oil, plenty of lemon juice and salt.\n' +
      '4. Rest for 10 minutes for the flavours to mingle before serving.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '100g' },
      { rawName: 'Parsley', rawMeasure: '2 large bunches' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Coleslaw',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Finely shred the cabbage and carrot and thinly slice the onion.\n' +
      '2. Mix the mayonnaise with a little lemon juice, salt and pepper.\n' +
      '3. Fold the dressing through the vegetables until well coated.\n' +
      '4. Chill for 30 minutes before serving.',
    rawLines: [
      { rawName: 'Cabbage', rawMeasure: '1/2 small' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1/2' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mediterranean roasted vegetables',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegan', 'Vegetarian', 'Mediterranean', 'Gluten-free', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Chop the courgette, peppers, red onion and aubergine into chunks.\n' +
      '2. Toss in a roasting tin with olive oil, garlic and oregano and season.\n' +
      '3. Roast for 30 minutes, turning once, until soft and charred at the edges.\n' +
      '4. Finish with torn basil and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Red pepper', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
    ],
  },

  // ───────────────────────── Puddings & bakes ─────────────────────────
  {
    title: 'Victoria sponge',
    servingsBase: 8,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line two sandwich tins.\n' +
      '2. Beat the butter and caster sugar until pale, then beat in the eggs one at a time.\n' +
      '3. Fold in the self-raising flour and divide between the tins.\n' +
      '4. Bake for 22–25 minutes until risen and springy, then cool.\n' +
      '5. Sandwich with raspberry jam and dust the top with icing sugar.',
    rawLines: [
      { rawName: 'Butter', rawMeasure: '200g' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Self-raising flour', rawMeasure: '200g' },
      { rawName: 'Raspberry jam', rawMeasure: '4 tbsp' },
      { rawName: 'Icing sugar', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Apple crumble',
    servingsBase: 6,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Peel, core and slice the apples and toss with a little sugar and cinnamon in a baking dish.\n' +
      '2. Rub the butter into the flour until it resembles breadcrumbs, then stir in the remaining sugar.\n' +
      '3. Scatter the crumble over the apples.\n' +
      '4. Bake for 35–40 minutes until golden and bubbling. Serve with custard or cream.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '6' },
      { rawName: 'Plain flour', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '100g' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Sticky toffee pudding',
    servingsBase: 6,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Nut-free'],
    instructions:
      '1. Soak the chopped dates in boiling water for 10 minutes, then mash to a purée.\n' +
      '2. Beat the butter and sugar, add the eggs, then fold in the flour and the date purée.\n' +
      '3. Bake at 180°C (fan 160°C) for 30 minutes until risen and firm.\n' +
      '4. For the sauce, melt the brown sugar, butter and cream together and simmer to glossy. Pour over the warm pudding.',
    rawLines: [
      { rawName: 'Dates', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '100g' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Self-raising flour', rawMeasure: '200g' },
      { rawName: 'Brown sugar', rawMeasure: '150g' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
    ],
  },
  {
    title: 'Chocolate brownies',
    servingsBase: 12,
    totalTimeMinutes: 45,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a tin.\n' +
      '2. Melt the chocolate and butter together gently, then stir in the sugar.\n' +
      '3. Beat in the eggs, then fold in the flour and cocoa.\n' +
      '4. Pour into the tin and bake for 25 minutes until set with a slight wobble. Cool before cutting into squares.',
    rawLines: [
      { rawName: 'Plain chocolate', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '150g' },
      { rawName: 'Caster sugar', rawMeasure: '250g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Plain flour', rawMeasure: '100g' },
      { rawName: 'Cocoa powder', rawMeasure: '40g' },
    ],
  },
  {
    title: 'Eton mess',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Whip the double cream to soft peaks.\n' +
      '2. Roughly crush the meringue nests.\n' +
      '3. Gently fold the strawberries and crushed meringue through the cream, leaving ripples.\n' +
      '4. Spoon into glasses and serve at once.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '300ml' },
      { rawName: 'Meringue nests', rawMeasure: '4' },
      { rawName: 'Strawberries', rawMeasure: '300g' },
    ],
  },
  {
    title: 'Lemon drizzle cake',
    servingsBase: 10,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a loaf tin.\n' +
      '2. Beat the butter and caster sugar until pale, add the eggs, then fold in the flour and lemon zest.\n' +
      '3. Bake for 45 minutes until golden and a skewer comes out clean.\n' +
      '4. Mix the lemon juice with icing sugar and spoon over the warm cake so it soaks in.',
    rawLines: [
      { rawName: 'Butter', rawMeasure: '200g' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Self-raising flour', rawMeasure: '200g' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Icing sugar', rawMeasure: '100g' },
    ],
  },
  {
    title: 'Rice pudding',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C).\n' +
      '2. Tip the pudding rice, milk and sugar into a buttered dish and stir.\n' +
      '3. Grate a little nutmeg over the surface and dot with butter.\n' +
      '4. Bake for 1¾ hours until a golden skin forms and the rice is creamy.',
    rawLines: [
      { rawName: 'Pudding rice', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '800ml' },
      { rawName: 'Caster sugar', rawMeasure: '60g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Vegan chocolate and banana loaf',
    servingsBase: 10,
    totalTimeMinutes: 70,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a loaf tin.\n' +
      '2. Mash the bananas, then stir in the sugar, oil and coconut milk.\n' +
      '3. Fold in the flour, baking powder and cocoa to a smooth batter.\n' +
      '4. Bake for 50 minutes until risen and a skewer comes out clean. Cool before slicing.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '3 ripe' },
      { rawName: 'Caster sugar', rawMeasure: '120g' },
      { rawName: 'Vegetable oil', rawMeasure: '80ml' },
      { rawName: 'Coconut milk', rawMeasure: '120ml' },
      { rawName: 'Self-raising flour', rawMeasure: '250g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Cocoa powder', rawMeasure: '30g' },
    ],
  },
  {
    title: 'Berry and oat flapjack',
    servingsBase: 12,
    totalTimeMinutes: 40,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a tin.\n' +
      '2. Melt the butter, sugar and golden syrup together in a pan.\n' +
      '3. Stir in the oats and the dried cranberries until well coated.\n' +
      '4. Press into the tin and bake for 22–25 minutes until golden at the edges. Cool before cutting.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '300g' },
      { rawName: 'Butter', rawMeasure: '150g' },
      { rawName: 'Brown sugar', rawMeasure: '100g' },
      { rawName: 'Golden syrup', rawMeasure: '2 tbsp' },
      { rawName: 'Dried cranberries', rawMeasure: '60g' },
    ],
  },
]
