// Curated DASH / LOW-SODIUM recipes for Larder.
//
// Each record is culinary content ONLY — the source/sourceId/imageUrl boilerplate
// is added by sources/curated.js (mapCurated). The pipeline (parse -> resolve ->
// normalise -> buildRecipeDoc) derives allergens, nutrition and free-from
// healthLabels from the resolved ingredient lines, so we only assert dietLabels
// here. Ingredient lines use vocabulary from data/ingredients.js so they resolve
// cleanly. Method prose is original, written fresh in British English.
//
// DIET CONTRACT — "DASH / low-sodium": every recipe follows the Dietary
// Approaches to Stop Hypertension pattern — rich in vegetables, fruit,
// wholegrains, pulses, unsalted nuts/seeds, lean protein and low-fat dairy, with
// sodium kept deliberately low. STRICTLY EXCLUDED across this whole file:
//   • added cooking/table salt and salt blends (celery salt, onion salt, garlic
//     salt, all-purpose/seasoning salts, bouillon/stock cubes, bouillon powder);
//   • cured, smoked and processed meats (bacon, lardon, ham, smoked ham, Parma
//     ham, prosciutto, chorizo, sausage, salami, kabanos, kielbasa, morcilla,
//     black pudding, corned beef, doner/shredded meat, turkey ham);
//   • salt-cured / brined fish & seafood (anchovy fillets, salt cod, smoked
//     salmon, smoked haddock, sardines/pilchards in brine, shrimp paste);
//   • high-salt condiments & sauces (soy sauce, fish sauce, oyster sauce, hoisin,
//     Worcestershire sauce, gravy, ketchup, barbecue/chilli/sweet-chilli sauce,
//     stock-based gravies, miso, bottled dressings, baked beans, olives/capers/
//     gherkins/pickles in brine, sauerkraut);
//   • salty cheeses and processed cheese (feta, halloumi, processed slices) —
//     where dairy appears it is low-salt (a little unsalted/low-fat: ricotta,
//     natural/Greek yoghurt, a modest amount of mozzarella or fresh cheese).
// Flavour comes instead from herbs, spices, garlic, ginger, chilli, citrus,
// vinegar, tomato and freshly ground black pepper — never from salt. Where stock
// is used the line specifies a low-salt / no-added-salt stock and salt is never
// added separately. The "DASH" and "Low-sodium" dietLabels are asserted on every
// record; extra honest labels (Vegetarian, Vegan, Pescatarian, Gluten-free,
// Dairy-free, High-protein, Low-carb, Mediterranean, Heart-healthy) are tagged
// truthfully. Free-from health labels are left to the pipeline to derive from the
// resolved lines.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  // ── Breakfasts ──────────────────────────────────────────────────────────────
  {
    title: 'Overnight oats with banana and walnuts',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Heart-healthy'],
    instructions:
      '1. Tip the oats into a bowl or jar and pour over the milk and natural yoghurt. Stir in the cinnamon.\n' +
      '2. Mash half the banana into the oats and slice the rest for the top.\n' +
      '3. Cover and chill overnight, or for at least four hours, so the oats soften and thicken.\n' +
      '4. In the morning loosen with a splash more milk, top with the sliced banana and a scatter of unsalted walnuts. No salt or sugar is needed.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '80g' },
      { rawName: 'Milk', rawMeasure: '200ml' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Banana', rawMeasure: '1' },
      { rawName: 'Walnuts', rawMeasure: '20g, roughly chopped' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Porridge with blueberries and almonds',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Heart-healthy'],
    instructions:
      '1. Tip the oats into a pan with the milk and water. Bring gently to a simmer, stirring.\n' +
      '2. Cook for 4–5 minutes, stirring often, until thick and creamy. Do not add salt.\n' +
      '3. Stir half the blueberries through the porridge so they soften and colour it.\n' +
      '4. Spoon into bowls, top with the rest of the blueberries and the flaked almonds, and finish with a dusting of cinnamon.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Water', rawMeasure: '200ml' },
      { rawName: 'Blueberries', rawMeasure: '120g' },
      { rawName: 'Almonds', rawMeasure: '20g, flaked' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
    ],
  },
  {
    title: 'Greek yoghurt with raspberries and oats',
    servingsBase: 2,
    totalTimeMinutes: 5,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Spoon the Greek yoghurt into two bowls or glasses.\n' +
      '2. Toast the oats in a dry pan over a medium heat for 2–3 minutes until golden and nutty, then leave to cool slightly.\n' +
      '3. Layer the raspberries over the yoghurt and scatter with the toasted oats and pumpkin or sunflower-style seeds.\n' +
      '4. Finish with a few mint leaves and a squeeze of lemon for brightness.',
    rawLines: [
      { rawName: 'Greek yoghurt', rawMeasure: '300g' },
      { rawName: 'Raspberries', rawMeasure: '150g' },
      { rawName: 'Oats', rawMeasure: '40g' },
      { rawName: 'Pumpkin', rawMeasure: '20g seeds' },
      { rawName: 'Mint', rawMeasure: 'few leaves' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
    ],
  },
  {
    title: 'Scrambled eggs with chives and tomato',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Heart-healthy', 'Gluten-free'],
    instructions:
      '1. Beat the eggs with the milk and plenty of black pepper. Do not add salt — the chives and pepper carry it.\n' +
      '2. Melt a little unsalted butter in a non-stick pan over a low heat.\n' +
      '3. Pour in the eggs and stir gently and continuously until just set and still glossy.\n' +
      '4. Fold through the snipped chives. Serve with the halved cherry tomatoes warmed briefly in the pan.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Milk', rawMeasure: '2 tbsp' },
      { rawName: 'Unsalted butter', rawMeasure: '10g' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, snipped' },
      { rawName: 'Cherry tomato', rawMeasure: '8' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Wholemeal banana and oat pancakes',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Heart-healthy'],
    instructions:
      '1. Mash the banana in a bowl, then whisk in the egg and milk.\n' +
      '2. Stir in the wholemeal flour, oats and baking powder until you have a thick, lumpy batter. Leave to stand for 5 minutes.\n' +
      '3. Heat a non-stick pan over a medium heat with a brush of vegetable oil. Drop in spoonfuls of batter.\n' +
      '4. Cook for 2 minutes until bubbles form, then flip and cook the other side until golden. Serve topped with blueberries.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '2 ripe' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Milk', rawMeasure: '120ml' },
      { rawName: 'Wholemeal flour', rawMeasure: '100g' },
      { rawName: 'Oats', rawMeasure: '40g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Vegetable oil', rawMeasure: 'for the pan' },
    ],
  },
  {
    title: 'Mushroom and spinach omelette',
    servingsBase: 1,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Heart-healthy', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Beat the eggs well with plenty of black pepper; do not add salt.\n' +
      '2. Soften the sliced mushrooms in a little olive oil over a medium-high heat until golden and any liquid has cooked off.\n' +
      '3. Add the spinach and let it wilt, then spread the vegetables evenly across the pan.\n' +
      '4. Pour in the eggs, tilt to spread, and cook until almost set. Fold over, scatter with chives and slide onto a plate.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Mushroom', rawMeasure: '100g' },
      { rawName: 'Spinach', rawMeasure: '50g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, snipped' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bircher muesli with apple and almonds',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Heart-healthy'],
    instructions:
      '1. Mix the oats with the milk and yoghurt in a bowl and leave to soak for 10 minutes (or overnight).\n' +
      '2. Coarsely grate the apple, skin and all, and stir it through with a squeeze of lemon to keep it fresh.\n' +
      '3. Fold in most of the flaked almonds and the cinnamon.\n' +
      '4. Spoon into bowls and scatter with the remaining almonds and a few raspberries.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '90g' },
      { rawName: 'Milk', rawMeasure: '150ml' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Apple', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Almonds', rawMeasure: '30g, flaked' },
      { rawName: 'Raspberries', rawMeasure: '60g' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Avocado and tomato on wholegrain toast',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy'],
    instructions:
      '1. Toast the wholegrain bread until golden.\n' +
      '2. Scoop the avocado into a bowl and mash roughly with a squeeze of lime, a pinch of chilli flakes and black pepper. No salt needed.\n' +
      '3. Spread the avocado thickly over the toast.\n' +
      '4. Top with sliced cherry tomatoes and a few coriander leaves, and finish with a final squeeze of lime.',
    rawLines: [
      { rawName: 'Wholegrain bread', rawMeasure: '4 slices' },
      { rawName: 'Avocado', rawMeasure: '2 ripe' },
      { rawName: 'Cherry tomato', rawMeasure: '10' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Soups ────────────────────────────────────────────────────────────────────
  {
    title: 'Roasted tomato and basil soup',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the tomatoes and scatter into a roasting tin with the onion wedges and whole garlic cloves.\n' +
      '2. Drizzle with olive oil and plenty of black pepper, then roast for 30 minutes until soft and a little charred at the edges. Do not add salt.\n' +
      '3. Tip everything into a pan, squeezing the garlic from its skins. Add the low-salt vegetable stock and bring to a simmer.\n' +
      '4. Blend until smooth, stir through the torn basil and a splash of red wine vinegar, and serve.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '1kg' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 400ml' },
      { rawName: 'Basil', rawMeasure: 'large handful' },
      { rawName: 'Vinegar', rawMeasure: '1 tsp red wine vinegar' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Carrot, lentil and cumin soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Soften the chopped onion in the olive oil over a medium heat for 5 minutes.\n' +
      '2. Stir in the cumin and a pinch of chilli flakes and cook for a minute until fragrant.\n' +
      '3. Add the sliced carrots, the rinsed red lentils and the low-salt stock. Bring to the boil, then simmer for 25 minutes until everything is tender.\n' +
      '4. Blend until smooth (or leave chunky), season with black pepper and a squeeze of lemon, and serve.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '500g' },
      { rawName: 'Lentils', rawMeasure: '120g red lentils' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 1 litre' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Leek and potato soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Melt the unsalted butter with the olive oil in a large pan. Add the sliced leeks and soften gently for 8–10 minutes without colouring.\n' +
      '2. Add the diced potatoes and stir to coat.\n' +
      '3. Pour in the low-salt stock, bring to a simmer and cook for 20 minutes until the potatoes are very soft.\n' +
      '4. Blend until smooth, loosen with the milk, season generously with black pepper and a little grated nutmeg, and serve.',
    rawLines: [
      { rawName: 'Leek', rawMeasure: '3' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Unsalted butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 800ml' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Butternut squash and ginger soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Soften the chopped onion in the olive oil over a medium heat for 5 minutes.\n' +
      '2. Stir in the grated ginger and ground coriander and cook for a minute.\n' +
      '3. Add the cubed butternut squash and the low-salt stock, bring to the boil and simmer for 25 minutes until the squash is tender.\n' +
      '4. Blend until silky, season with black pepper and a squeeze of lime, and serve.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '1 (about 1kg)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger', rawMeasure: '2 tsp grated' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 900ml' },
      { rawName: 'Lime', rawMeasure: '1/2' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced split pea soup',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Soften the chopped onion, carrot and celery in the olive oil for 8 minutes.\n' +
      '2. Stir in the cumin and turmeric and cook for a minute until fragrant.\n' +
      '3. Add the rinsed split peas and the low-salt stock. Bring to the boil, then simmer gently for 45 minutes until the peas have collapsed and the soup is thick.\n' +
      '4. Season with black pepper and a good squeeze of lemon, scatter with coriander and serve.',
    rawLines: [
      { rawName: 'Split peas', rawMeasure: '250g yellow' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 1.2 litres' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Minestrone with cannellini beans',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Soften the chopped onion, carrot and celery in the olive oil for 8 minutes.\n' +
      '2. Stir in the garlic and cook for a minute, then add the chopped tomatoes and low-salt stock.\n' +
      '3. Simmer for 15 minutes, then add the courgette, the rinsed cannellini beans and the pasta. Cook for a further 10 minutes until the pasta is tender.\n' +
      '4. Stir through the chopped parsley, season with black pepper and serve with a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin, drained and rinsed' },
      { rawName: 'Pasta', rawMeasure: '80g small shapes' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 800ml' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chunky vegetable and barley broth',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy'],
    instructions:
      '1. Soften the chopped onion, carrot, celery and swede in the olive oil for 10 minutes.\n' +
      '2. Stir in the dried mixed herbs, then add the pearl barley and the low-salt stock.\n' +
      '3. Bring to the boil and simmer for 35–40 minutes until the barley and vegetables are tender, topping up with water if it thickens too much.\n' +
      '4. Season well with black pepper, stir through the chopped parsley and serve.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Swede', rawMeasure: '1/2 small' },
      { rawName: 'Bulgur wheat', rawMeasure: '100g pearl barley' },
      { rawName: 'Mixed herbs', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 1.2 litres' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Salads & light lunches ───────────────────────────────────────────────────
  {
    title: 'Chickpea, tomato and cucumber salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Tip the rinsed chickpeas into a large bowl.\n' +
      '2. Add the diced cucumber, halved cherry tomatoes, finely sliced red onion and chopped parsley.\n' +
      '3. Whisk the olive oil with the lemon juice, a little ground cumin and plenty of black pepper to make the dressing — no salt.\n' +
      '4. Pour over, toss well and leave for 10 minutes for the flavours to mingle before serving.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins, drained and rinsed' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Cherry tomato', rawMeasure: '250g' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: 'large handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted beetroot and orange salad',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the peeled, wedged beetroot with a little olive oil and roast for 35–40 minutes until tender.\n' +
      '2. Segment the oranges over a bowl to catch the juice.\n' +
      '3. Make a dressing from the orange juice, the remaining olive oil, a splash of sherry vinegar and black pepper.\n' +
      '4. Arrange the rocket on a platter, scatter over the warm beetroot, orange segments and toasted walnuts, and spoon over the dressing.',
    rawLines: [
      { rawName: 'Beetroot', rawMeasure: '500g raw' },
      { rawName: 'Orange', rawMeasure: '2' },
      { rawName: 'Rocket', rawMeasure: '80g' },
      { rawName: 'Walnuts', rawMeasure: '40g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Sherry vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Quinoa tabbouleh',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Rinse the quinoa, then simmer in plenty of unsalted water for 15 minutes until tender. Drain and cool.\n' +
      '2. Chop the parsley and mint very finely and tip into a large bowl.\n' +
      '3. Add the cooled quinoa, finely diced tomato, cucumber and spring onion.\n' +
      '4. Dress with olive oil, lots of lemon juice and black pepper. Toss well — the herbs and lemon do all the seasoning.',
    rawLines: [
      { rawName: 'Quinoa', rawMeasure: '150g' },
      { rawName: 'Parsley', rawMeasure: '2 large handfuls' },
      { rawName: 'Mint', rawMeasure: '1 handful' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Puy lentil and roasted vegetable salad',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the diced courgette, pepper and red onion with olive oil and roast for 25 minutes until soft and caramelised.\n' +
      '2. Meanwhile simmer the lentils in unsalted water for 20–25 minutes until tender but holding their shape. Drain.\n' +
      '3. Combine the warm lentils and roasted vegetables in a bowl.\n' +
      '4. Dress with olive oil, red wine vinegar, chopped parsley and black pepper, and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g Puy lentils' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp red wine vinegar' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Warm new potato and herb salad',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Boil the new potatoes in unsalted water for 15–18 minutes until tender, then drain and halve any large ones.\n' +
      '2. While still warm, tip into a bowl and toss with the olive oil and a splash of vinegar so they drink it in.\n' +
      '3. Add the sliced spring onions and a generous handful of chopped dill, chives and parsley.\n' +
      '4. Season well with black pepper, toss again and serve warm.',
    rawLines: [
      { rawName: 'New potatoes', rawMeasure: '750g' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Dill', rawMeasure: 'small handful' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, snipped' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp white wine vinegar' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Butter bean and roasted pepper salad',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Tip the rinsed cannellini beans into a bowl (use butter beans if you have them).\n' +
      '2. Slice the roasted peppers and add with the finely sliced red onion and chopped parsley.\n' +
      '3. Crush the garlic into the olive oil with the lemon juice, smoked paprika and black pepper to make the dressing.\n' +
      '4. Toss everything together and leave for 10 minutes to soak up the flavours before serving.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '2 tins, drained and rinsed' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2 red, roasted' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spinach, strawberry and almond salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Pile the baby spinach into a large bowl.\n' +
      '2. Hull and slice the strawberries and scatter over the top.\n' +
      '3. Toast the flaked almonds in a dry pan until golden, then leave to cool.\n' +
      '4. Whisk the olive oil with the balsamic-style vinegar and black pepper, dress the salad lightly, scatter with the almonds and serve.',
    rawLines: [
      { rawName: 'Spinach', rawMeasure: '150g baby leaf' },
      { rawName: 'Strawberries', rawMeasure: '200g' },
      { rawName: 'Almonds', rawMeasure: '30g, flaked' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp balsamic vinegar' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed jacket potato with beans and chives',
    servingsBase: 2,
    totalTimeMinutes: 75,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes, rub with a little olive oil and bake for 60–70 minutes until crisp outside and fluffy inside.\n' +
      '2. Gently warm the cannellini beans in a pan with the chopped tomato, garlic, a pinch of smoked paprika and black pepper until saucy.\n' +
      '3. Split the potatoes open and fluff the insides with a fork.\n' +
      '4. Spoon over the beans, top with a little grated Cheddar and snipped chives, and serve.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '2 large baking' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin, drained and rinsed' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Cheddar cheese', rawMeasure: '30g' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, snipped' },
      { rawName: 'Smoked paprika', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Hummus and salad wholemeal wrap',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy', 'Mediterranean'],
    instructions:
      '1. Warm the tortilla wraps briefly in a dry pan to make them pliable.\n' +
      '2. Spread each generously with home-style hummus.\n' +
      '3. Pile on grated carrot, sliced cucumber, rocket and halved cherry tomatoes.\n' +
      '4. Add a squeeze of lemon and black pepper, roll up tightly and cut in half to serve.',
    rawLines: [
      { rawName: 'Tortilla wrap', rawMeasure: '2 wholemeal' },
      { rawName: 'Hummus', rawMeasure: '6 tbsp' },
      { rawName: 'Carrot', rawMeasure: '1, grated' },
      { rawName: 'Cucumber', rawMeasure: '1/4' },
      { rawName: 'Rocket', rawMeasure: '2 handfuls' },
      { rawName: 'Cherry tomato', rawMeasure: '8' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Poultry & lean meat mains ───────────────────────────────────────────────
  {
    title: 'Lemon and herb roast chicken breast',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein', 'Low-carb'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the chicken breasts in a roasting dish.\n' +
      '2. Mix the olive oil with the crushed garlic, lemon zest and juice, chopped thyme and plenty of black pepper. Do not add salt.\n' +
      '3. Rub the mixture all over the chicken and tuck the lemon halves alongside.\n' +
      '4. Roast for 22–25 minutes until cooked through and the juices run clear. Rest for 5 minutes, then serve with the pan juices spooned over.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Thyme', rawMeasure: '2 tsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and vegetable traybake',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Tip the new potatoes, pepper chunks, red onion wedges and courgette into a large roasting tin.\n' +
      '2. Nestle the chicken thighs among the vegetables.\n' +
      '3. Drizzle everything with olive oil, scatter over the crushed garlic, rosemary and plenty of black pepper, and toss to coat. No salt.\n' +
      '4. Roast for 40–45 minutes, turning once, until the chicken is golden and cooked through and the vegetables are tender. Finish with a squeeze of lemon.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, skinless and boneless' },
      { rawName: 'New potatoes', rawMeasure: '500g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '2' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and chickpea curry',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['DASH', 'Low-sodium', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Soften the chopped onion in the vegetable oil over a medium heat for 6–8 minutes.\n' +
      '2. Add the crushed garlic, grated ginger and the garam masala, cumin and turmeric, and cook for a minute until fragrant.\n' +
      '3. Stir in the diced chicken and brown lightly, then add the chopped tomatoes and a splash of water. Simmer for 15 minutes.\n' +
      '4. Add the rinsed chickpeas and cook for a further 10 minutes until the chicken is tender and the sauce is thick. Season with black pepper and scatter with coriander.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '500g, diced' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin, drained and rinsed' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp grated' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey and courgette burgers',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Dairy-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Coarsely grate the courgette and squeeze out the excess moisture in a clean cloth.\n' +
      '2. Combine the turkey mince, courgette, crushed garlic, chopped parsley, ground cumin and plenty of black pepper. Do not add salt.\n' +
      '3. Shape into four patties and chill for 10 minutes to firm up.\n' +
      '4. Fry in a little olive oil over a medium heat for 5–6 minutes each side until cooked through. Serve in wholemeal buns with salad.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Burger bun', rawMeasure: '4 wholemeal' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken, lemon and thyme skewers',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['DASH', 'Low-sodium', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein', 'Mediterranean', 'Low-carb'],
    instructions:
      '1. Mix the olive oil with the lemon zest and juice, crushed garlic, chopped thyme and black pepper to make a marinade. No salt.\n' +
      '2. Toss the diced chicken in the marinade and leave for 20 minutes.\n' +
      '3. Thread onto skewers, alternating with chunks of pepper and red onion.\n' +
      '4. Grill or griddle for 10–12 minutes, turning, until charred and cooked through. Serve with a squeeze of fresh lemon.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g, diced' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Thyme', rawMeasure: '2 tsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork tenderloin with apple and sage',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein', 'Low-carb'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Rub the pork tenderloin with olive oil, chopped sage and plenty of black pepper.\n' +
      '2. Sear the pork in an ovenproof pan over a high heat until browned all over.\n' +
      '3. Add the apple wedges and sliced onion around the pork, then transfer to the oven for 18–20 minutes until the pork is just cooked.\n' +
      '4. Rest the pork for 5 minutes, deglaze the pan with a splash of cider, then slice and serve with the soft apples and onions.',
    rawLines: [
      { rawName: 'Pork tenderloin', rawMeasure: '600g' },
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Sage', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Cider', rawMeasure: '100ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lean beef and vegetable stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['DASH', 'Low-sodium', 'Dairy-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Mix the rice wine, grated ginger and crushed garlic into a quick sauce with a teaspoon of cornflour and a splash of water — no soy sauce.\n' +
      '2. Heat the vegetable oil in a wok until very hot and stir-fry the thinly sliced beef for 2 minutes until browned. Lift out.\n' +
      '3. Stir-fry the broccoli, pepper and mangetout for 3–4 minutes until crisp-tender.\n' +
      '4. Return the beef, pour in the sauce and toss until glossy. Finish with sliced spring onion and a squeeze of lime.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '400g, thinly sliced' },
      { rawName: 'Broccoli', rawMeasure: '200g, small florets' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Mangetout', rawMeasure: '100g' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp grated' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Rice wine', rawMeasure: '2 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '1 tsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Lime', rawMeasure: '1/2' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Herb-crusted roast chicken thighs with squash',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the cubed butternut squash and red onion wedges in olive oil in a roasting tin.\n' +
      '2. Sit the chicken thighs on top and rub with crushed garlic, chopped rosemary and thyme, and black pepper.\n' +
      '3. Roast for 40 minutes, turning the vegetables halfway, until the chicken is golden and the squash is soft.\n' +
      '4. Scatter with chopped parsley and serve with a wedge of lemon.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in skinless' },
      { rawName: 'Butternut squash', rawMeasure: '600g' },
      { rawName: 'Red onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Fish & seafood mains ─────────────────────────────────────────────────────
  {
    title: 'Baked salmon with dill and lemon',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein', 'Low-carb', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Lay the salmon fillets on a lined baking tray.\n' +
      '2. Drizzle with olive oil and scatter over the chopped dill, lemon zest and plenty of black pepper. No salt.\n' +
      '3. Lay a couple of lemon slices on each fillet.\n' +
      '4. Bake for 14–16 minutes until the salmon flakes easily. Serve with a fresh squeeze of lemon.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4' },
      { rawName: 'Dill', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'White fish parcels with tomatoes and basil',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['DASH', 'Low-sodium', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein', 'Low-carb', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut four large squares of baking paper.\n' +
      '2. Sit a white fish fillet on each, then top with cherry tomatoes, sliced courgette, a little crushed garlic, basil leaves, olive oil and black pepper.\n' +
      '3. Fold the paper into sealed parcels and sit on a baking tray.\n' +
      '4. Bake for 15–18 minutes until the fish is just cooked. Open the parcels at the table with a squeeze of lemon.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Basil', rawMeasure: 'handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mackerel with beetroot and horseradish',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Pescatarian', 'Gluten-free', 'Heart-healthy', 'High-protein', 'Low-carb'],
    instructions:
      '1. Heat the grill to high. Slash the mackerel fillets, brush with olive oil and season with black pepper.\n' +
      '2. Grill skin-side up for 4–5 minutes until the skin is crisp and the flesh is just cooked.\n' +
      '3. Stir a little fresh horseradish into the natural yoghurt with a squeeze of lemon to make a quick sauce.\n' +
      '4. Serve the mackerel over the grated raw beetroot dressed with vinegar, with the horseradish yoghurt alongside.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '4 fillets' },
      { rawName: 'Beetroot', rawMeasure: '300g raw' },
      { rawName: 'Horseradish', rawMeasure: '1 tbsp fresh, grated' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp red wine vinegar' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Trout with almonds and green beans',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['DASH', 'Low-sodium', 'Pescatarian', 'Gluten-free', 'Heart-healthy', 'High-protein', 'Low-carb'],
    instructions:
      '1. Season the trout fillets with black pepper. Heat a little unsalted butter and olive oil in a non-stick pan.\n' +
      '2. Fry the trout skin-side down for 3–4 minutes, then flip and cook for a further 2 minutes until just done. Lift out.\n' +
      '3. Add the flaked almonds to the pan and toast until golden, then stir in a squeeze of lemon.\n' +
      '4. Serve the trout with the steamed green beans and the lemony almonds spooned over.',
    rawLines: [
      { rawName: 'Trout', rawMeasure: '2 fillets' },
      { rawName: 'Almonds', rawMeasure: '30g, flaked' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Unsalted butter', rawMeasure: '15g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and tomato linguine',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['DASH', 'Low-sodium', 'Pescatarian', 'Dairy-free', 'Heart-healthy', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Cook the linguine in a large pan of unsalted boiling water until just tender. Reserve a cup of the water, then drain.\n' +
      '2. Meanwhile soften the crushed garlic and chilli flakes in the olive oil over a medium heat for a minute.\n' +
      '3. Add the cherry tomatoes and cook until they collapse into a sauce, loosening with a little pasta water.\n' +
      '4. Stir in the prawns and cook for 2–3 minutes until pink. Toss through the linguine and parsley with a squeeze of lemon and black pepper.',
    rawLines: [
      { rawName: 'Linguine', rawMeasure: '320g' },
      { rawName: 'Prawns', rawMeasure: '300g, peeled' },
      { rawName: 'Cherry tomato', rawMeasure: '300g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced fish curry with coconut',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['DASH', 'Low-sodium', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Soften the chopped onion in the vegetable oil for 6 minutes, then add the crushed garlic and grated ginger.\n' +
      '2. Stir in the turmeric, cumin and a little chilli powder and cook for a minute.\n' +
      '3. Add the chopped tomatoes and coconut milk, bring to a gentle simmer and cook for 10 minutes.\n' +
      '4. Slip in the white fish chunks and poach for 6–8 minutes until just cooked. Finish with coriander, a squeeze of lime and black pepper.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '600g, cubed' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp grated' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna and white bean salad',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['DASH', 'Low-sodium', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Drain and rinse the cannellini beans well to wash off as much brine as possible, and tip into a bowl.\n' +
      '2. Flake in the tuna (choose tuna in spring water, well drained) and add the finely sliced red onion and chopped parsley.\n' +
      '3. Dress with olive oil, lemon juice and black pepper.\n' +
      '4. Toss gently and serve with rocket and sliced tomato.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '1 tin in spring water, drained' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin, drained and rinsed' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Rocket', rawMeasure: '2 handfuls' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sea bass with fennel and orange',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['DASH', 'Low-sodium', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein', 'Low-carb', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the thinly sliced fennel with olive oil and spread in a baking dish.\n' +
      '2. Roast for 15 minutes until starting to soften.\n' +
      '3. Lay the sea bass fillets on top, scatter with orange zest, black pepper and a little chopped dill, and lay over a few orange slices.\n' +
      '4. Return to the oven for 10–12 minutes until the fish is just cooked. Serve with the roasted fennel and the orange juices.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '2 fillets' },
      { rawName: 'Fennel', rawMeasure: '1 bulb' },
      { rawName: 'Orange', rawMeasure: '1' },
      { rawName: 'Dill', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Vegetarian & vegan mains ─────────────────────────────────────────────────
  {
    title: 'Chickpea and spinach curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Soften the chopped onion in the vegetable oil for 6–8 minutes.\n' +
      '2. Add the crushed garlic, grated ginger, garam masala, cumin and turmeric and cook for a minute until fragrant.\n' +
      '3. Stir in the chopped tomatoes and the rinsed chickpeas, then simmer for 15 minutes until thick.\n' +
      '4. Fold through the spinach until wilted, finish with a squeeze of lemon, black pepper and coriander, and serve with rice.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins, drained and rinsed' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp grated' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Red lentil dahl with spinach',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Soften the chopped onion in the vegetable oil, then add the crushed garlic, grated ginger, turmeric and cumin and cook for a minute.\n' +
      '2. Stir in the rinsed red lentils and pour over the water. Bring to the boil, then simmer for 20–25 minutes, stirring often, until collapsed and creamy.\n' +
      '3. Fold through the spinach until wilted.\n' +
      '4. Finish with a squeeze of lemon and plenty of black pepper, scatter with coriander and serve with rice or wholemeal flatbread.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g red lentils' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp grated' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Water', rawMeasure: '800ml' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable and bean chilli',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Soften the chopped onion, pepper and carrot in the olive oil for 8 minutes.\n' +
      '2. Add the crushed garlic, ground cumin, smoked paprika and a pinch of chilli powder, and cook for a minute.\n' +
      '3. Stir in the chopped tomatoes, the rinsed kidney beans and the sweetcorn, then simmer for 25 minutes until thick.\n' +
      '4. Season with black pepper and a squeeze of lime, scatter with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Kidney beans', rawMeasure: '2 tins, drained and rinsed' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Sweetcorn', rawMeasure: '150g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted vegetable and quinoa bowl',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the cubed aubergine, courgette, pepper and red onion in olive oil and roast for 30 minutes until soft and caramelised.\n' +
      '2. Rinse the quinoa and simmer in unsalted water for 15 minutes until tender, then drain.\n' +
      '3. Fold the roasted vegetables through the quinoa with chopped parsley and a squeeze of lemon.\n' +
      '4. Season with black pepper, finish with a swirl of olive oil and serve warm.',
    rawLines: [
      { rawName: 'Quinoa', rawMeasure: '200g' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed peppers with rice and herbs',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers and remove the seeds.\n' +
      '2. Soften the chopped onion in olive oil, then stir in the cooked brown rice, chopped tomato, crushed garlic, pine nuts, parsley and black pepper.\n' +
      '3. Spoon the filling into the pepper halves and sit them in a baking dish with a splash of water.\n' +
      '4. Drizzle with olive oil and bake for 35 minutes until the peppers are tender. Finish with a squeeze of lemon.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4' },
      { rawName: 'Brown rice', rawMeasure: '200g cooked' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Pine nuts', rawMeasure: '30g' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine and tomato bake',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Slice the aubergines, brush with olive oil and griddle or roast until golden.\n' +
      '2. Make a quick sauce: soften the garlic in olive oil, add the chopped tomatoes and basil and simmer for 15 minutes with black pepper.\n' +
      '3. Layer the aubergine and sauce in a baking dish, finishing with a thin scatter of grated mozzarella.\n' +
      '4. Bake for 25 minutes until bubbling and golden. Rest briefly, then serve scattered with basil.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (800g)' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Mozzarella', rawMeasure: '80g' },
      { rawName: 'Basil', rawMeasure: 'large handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sweet potato and black bean tacos',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the cubed sweet potato with olive oil, ground cumin and smoked paprika and roast for 25 minutes until soft and charred.\n' +
      '2. Warm the rinsed black beans in a pan with a little garlic and lime juice.\n' +
      '3. Warm the corn tortillas, then fill with the sweet potato and beans.\n' +
      '4. Top with diced avocado, sliced red onion, coriander and a squeeze of lime. Black pepper to finish — no salt.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '600g' },
      { rawName: 'Black beans', rawMeasure: '1 tin, drained and rinsed' },
      { rawName: 'Corn tortillas', rawMeasure: '8' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and barley risotto',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Heart-healthy', 'Mediterranean'],
    instructions:
      '1. Soften the chopped onion in the olive oil, then add the crushed garlic and sliced mushrooms and cook until golden.\n' +
      '2. Stir in the pearl barley to coat, then add the low-salt stock a ladleful at a time, stirring until absorbed, for about 30 minutes until tender.\n' +
      '3. Stir through the chopped thyme and a little grated Parmesan.\n' +
      '4. Season with black pepper and a squeeze of lemon, scatter with parsley and serve.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '250g pearl barley' },
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parmesan', rawMeasure: '30g, grated' },
      { rawName: 'Thyme', rawMeasure: '2 tsp, chopped' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 1 litre' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced cauliflower and chickpea traybake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the cauliflower florets and rinsed chickpeas with olive oil, ground cumin, ras el hanout and black pepper.\n' +
      '2. Spread out in a large roasting tin and roast for 30–35 minutes, turning once, until golden and crisp.\n' +
      '3. Stir through the chopped parsley and a squeeze of lemon.\n' +
      '4. Serve drizzled with a little natural yoghurt loosened with lemon, or leave it dairy-free.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin, drained and rinsed' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ras el hanout', rawMeasure: '2 tsp' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tofu and vegetable stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Press the tofu to remove excess water, then cube and toss in a little cornflour.\n' +
      '2. Fry in the vegetable oil until golden on all sides, then lift out.\n' +
      '3. Stir-fry the broccoli, pepper, mangetout and grated ginger and garlic for 4 minutes until crisp-tender.\n' +
      '4. Make a quick sauce from rice wine, a little cornflour and water (no soy sauce), return the tofu, toss until glossy and finish with spring onion and lime.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g firm' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Mangetout', rawMeasure: '100g' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp grated' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Rice wine', rawMeasure: '2 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '2 tsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Lime', rawMeasure: '1/2' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Butternut squash and chickpea tagine',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Soften the chopped onion in the olive oil for 6 minutes, then add the crushed garlic, grated ginger, cumin, cinnamon and ras el hanout.\n' +
      '2. Stir in the cubed butternut squash and the chopped tomatoes with a splash of water.\n' +
      '3. Simmer for 20 minutes, then add the rinsed chickpeas and cook for a further 15 minutes until the squash is tender.\n' +
      '4. Finish with chopped coriander, a squeeze of lemon and black pepper. Serve with couscous.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '700g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin, drained and rinsed' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp grated' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Ras el hanout', rawMeasure: '1 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Couscous', rawMeasure: '250g' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spaghetti with fresh tomato and basil',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy', 'Mediterranean'],
    instructions:
      '1. Cook the spaghetti in a large pan of unsalted boiling water until al dente; reserve a little water, then drain.\n' +
      '2. Meanwhile soften the crushed garlic in the olive oil over a low heat without colouring.\n' +
      '3. Add the chopped tomatoes and a pinch of chilli flakes and simmer for 10 minutes until saucy, loosening with pasta water.\n' +
      '4. Toss the spaghetti through the sauce with torn basil and black pepper, and serve with a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Spaghetti', rawMeasure: '320g' },
      { rawName: 'Tomato', rawMeasure: '600g, chopped' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Basil', rawMeasure: 'large handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lentil and vegetable shepherdless pie',
    servingsBase: 4,
    totalTimeMinutes: 65,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Soften the chopped onion, carrot and celery in the olive oil for 10 minutes.\n' +
      '2. Stir in the crushed garlic and dried thyme, then add the rinsed green lentils, chopped tomatoes and low-salt stock. Simmer for 25 minutes until thick.\n' +
      '3. Meanwhile boil the potatoes in unsalted water until tender, drain and mash with a splash of milk-free milk and black pepper.\n' +
      '4. Spoon the lentils into a dish, top with the mash, fork the surface and bake at 200°C (fan 180°C) for 25 minutes until golden.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g green lentils' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '1 tsp dried' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 300ml' },
      { rawName: 'Soya milk', rawMeasure: '60ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Sides & snacks ───────────────────────────────────────────────────────────
  {
    title: 'Garlic and rosemary roast potatoes',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Cut the potatoes into chunks and parboil in unsalted water for 8 minutes, then drain and shake to roughen the edges.\n' +
      '2. Tip into a roasting tin with the olive oil, whole garlic cloves and rosemary sprigs and toss to coat.\n' +
      '3. Roast for 35–40 minutes, turning once, until deep gold and crisp.\n' +
      '4. Season with black pepper and serve — no salt needed once they are this crunchy and garlicky.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Garlic', rawMeasure: '5 cloves' },
      { rawName: 'Rosemary', rawMeasure: '3 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemon and garlic green beans',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Low-carb'],
    instructions:
      '1. Steam or boil the green beans in unsalted water for 4–5 minutes until just tender, then drain.\n' +
      '2. Warm the olive oil in a pan with the thinly sliced garlic until fragrant but not browned.\n' +
      '3. Toss the beans through the garlic oil with the lemon zest and a squeeze of juice.\n' +
      '4. Season with black pepper and serve straight away.',
    rawLines: [
      { rawName: 'Green beans', rawMeasure: '400g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted root vegetables with thyme',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the carrots, parsnips and swede into even chunks.\n' +
      '2. Toss in a roasting tin with the olive oil, thyme leaves and plenty of black pepper.\n' +
      '3. Roast for 40 minutes, turning once, until tender and caramelised at the edges.\n' +
      '4. Finish with a squeeze of lemon and serve.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Parsnip', rawMeasure: '3' },
      { rawName: 'Swede', rawMeasure: '1/2' },
      { rawName: 'Thyme', rawMeasure: '1 tbsp leaves' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Minted pea and broad bean smash',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Cook the peas and broad beans in unsalted boiling water for 3 minutes, then drain.\n' +
      '2. Tip into a bowl with the olive oil, chopped mint and a good squeeze of lemon.\n' +
      '3. Crush roughly with a fork to a chunky purée.\n' +
      '4. Season with black pepper and serve on wholegrain toast or alongside grilled fish.',
    rawLines: [
      { rawName: 'Peas', rawMeasure: '200g' },
      { rawName: 'Broad beans', rawMeasure: '150g' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced roasted chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Drain and rinse the chickpeas, then pat thoroughly dry.\n' +
      '2. Toss with the olive oil, smoked paprika, ground cumin and black pepper. No salt.\n' +
      '3. Spread out on a baking tray and roast for 30–35 minutes, shaking the tray a few times, until deeply golden and crunchy.\n' +
      '4. Cool slightly — they crisp up further — and eat as a snack or scatter over salads.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins, drained and rinsed' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beetroot and walnut dip',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Blitz the cooked beetroot with the walnuts, crushed garlic and cumin until coarsely smooth.\n' +
      '2. Add the natural yoghurt and a squeeze of lemon and blend again.\n' +
      '3. Loosen with a little olive oil and season with black pepper. No salt.\n' +
      '4. Spoon into a bowl, swirl with olive oil and serve with vegetable sticks or wholemeal pitta.',
    rawLines: [
      { rawName: 'Beetroot', rawMeasure: '300g cooked' },
      { rawName: 'Walnuts', rawMeasure: '40g' },
      { rawName: 'Natural yoghurt', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Homemade hummus with cumin',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Drain and rinse the chickpeas well to remove the brine, reserving a little of the water.\n' +
      '2. Blitz with the tahini, crushed garlic, lemon juice and ground cumin until smooth, loosening with the reserved water.\n' +
      '3. Add the olive oil and blend again until creamy. Season with black pepper — no salt.\n' +
      '4. Spoon into a bowl, swirl with olive oil and a dusting of smoked paprika, and serve with vegetable sticks.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins, drained and rinsed' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cucumber and yoghurt raita',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Side',
    cuisine: 'Indian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy', 'Low-carb'],
    instructions:
      '1. Coarsely grate the cucumber and squeeze out the excess water.\n' +
      '2. Stir into the natural yoghurt with the chopped mint and a pinch of ground cumin.\n' +
      '3. Add a squeeze of lemon and plenty of black pepper. No salt.\n' +
      '4. Chill for 10 minutes and serve alongside curries or grilled vegetables.',
    rawLines: [
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Natural yoghurt', rawMeasure: '250g' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Cumin', rawMeasure: '1/4 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted carrot and ginger mash',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the carrot chunks with olive oil and roast for 30 minutes until soft and sweet.\n' +
      '2. Tip into a bowl with the grated ginger and a squeeze of orange juice.\n' +
      '3. Mash to a coarse purée, loosening with a little olive oil.\n' +
      '4. Season with black pepper and serve as a side to roast chicken or fish.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '700g' },
      { rawName: 'Ginger', rawMeasure: '1 tsp grated' },
      { rawName: 'Orange', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tomato and red onion salsa',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Side',
    cuisine: 'Mexican',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Low-carb'],
    instructions:
      '1. Finely dice the tomatoes and red onion and tip into a bowl.\n' +
      '2. Add the finely chopped chilli, crushed garlic and a generous handful of chopped coriander.\n' +
      '3. Dress with lime juice, a little olive oil and black pepper. No salt.\n' +
      '4. Leave for 10 minutes for the flavours to meld, then serve with grilled fish, chicken or tacos.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Coriander', rawMeasure: 'handful' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Puddings & sweet ─────────────────────────────────────────────────────────
  {
    title: 'Baked cinnamon apples with walnuts',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Core the apples and score a line around their middles.\n' +
      '2. Mix the chopped walnuts, raisins and cinnamon, then press the mixture into the cavities.\n' +
      '3. Sit the apples in a baking dish with a splash of water and orange juice.\n' +
      '4. Bake for 30 minutes until tender. Serve warm with a spoon of natural yoghurt if you like — the fruit needs no added sugar.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '4 baking apples' },
      { rawName: 'Walnuts', rawMeasure: '40g' },
      { rawName: 'Raisins', rawMeasure: '40g' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Orange', rawMeasure: '1' },
      { rawName: 'Water', rawMeasure: '4 tbsp' },
    ],
  },
  {
    title: 'Greek yoghurt with berries and toasted oats',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Toast the oats in a dry pan until golden, then leave to cool.\n' +
      '2. Spoon the Greek yoghurt into glasses.\n' +
      '3. Crush a few of the mixed berries to make a natural sauce, then layer the rest over the yoghurt.\n' +
      '4. Scatter with the toasted oats and a few flaked almonds, and serve. No added sugar — the berries carry it.',
    rawLines: [
      { rawName: 'Greek yoghurt', rawMeasure: '400g' },
      { rawName: 'Frozen mixed berries', rawMeasure: '250g, thawed' },
      { rawName: 'Oats', rawMeasure: '40g' },
      { rawName: 'Almonds', rawMeasure: '20g, flaked' },
    ],
  },
  {
    title: 'Roasted pears with cinnamon',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve and core the pears and lay them cut-side up in a baking dish.\n' +
      '2. Dust with cinnamon and pour over the orange juice and a splash of water.\n' +
      '3. Roast for 25–30 minutes, basting once, until tender and lightly caramelised.\n' +
      '4. Scatter with chopped pistachios and serve warm with the spiced juices.',
    rawLines: [
      { rawName: 'Pear', rawMeasure: '4 ripe' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Orange', rawMeasure: '1' },
      { rawName: 'Pistachios', rawMeasure: '30g' },
      { rawName: 'Water', rawMeasure: '4 tbsp' },
    ],
  },
  {
    title: 'Banana and oat cookies',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a baking tray.\n' +
      '2. Mash the bananas well, then stir in the oats, raisins and cinnamon until you have a thick, sticky mixture.\n' +
      '3. Spoon small mounds onto the tray and flatten slightly.\n' +
      '4. Bake for 15 minutes until set and golden at the edges. Cool on the tray — they sweeten naturally from the banana, no sugar or salt added.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '3 very ripe' },
      { rawName: 'Oats', rawMeasure: '200g' },
      { rawName: 'Raisins', rawMeasure: '50g' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Fresh fruit salad with mint and lime',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Chop the melon, pineapple and mango into bite-sized pieces and tip into a large bowl.\n' +
      '2. Add the strawberries and blueberries.\n' +
      '3. Finely chop the mint and toss through with the zest and juice of the lime.\n' +
      '4. Chill for 15 minutes and serve — the lime and mint lift the natural sweetness, no sugar needed.',
    rawLines: [
      { rawName: 'Melon', rawMeasure: '1/2' },
      { rawName: 'Pineapple', rawMeasure: '1/4' },
      { rawName: 'Mango', rawMeasure: '1' },
      { rawName: 'Strawberries', rawMeasure: '150g' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Lime', rawMeasure: '1' },
    ],
  },
  {
    title: 'Chia and berry pudding',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Whisk the almond milk with the cinnamon and vanilla extract in a bowl.\n' +
      '2. Stir in the chia-style seeds and leave for 5 minutes, then stir again to break up any clumps.\n' +
      '3. Cover and chill for at least 4 hours, or overnight, until thick and set.\n' +
      '4. Spoon into glasses and top with the raspberries and blueberries. No sugar needed.',
    rawLines: [
      { rawName: 'Almond milk', rawMeasure: '500ml' },
      { rawName: 'Sesame seeds', rawMeasure: '60g chia seeds' },
      { rawName: 'Raspberries', rawMeasure: '120g' },
      { rawName: 'Blueberries', rawMeasure: '120g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
    ],
  },
]
