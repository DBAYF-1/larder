// Curated DIABETIC / LOW-SUGAR recipes for Larder.
//
// Each record is culinary content ONLY — the source/sourceId/imageUrl boilerplate
// is added by sources/curated.js (mapCurated). The pipeline (parse -> resolve ->
// normalise -> buildRecipeDoc) derives allergens, nutrition and free-from
// healthLabels from the resolved ingredient lines, so we only assert dietLabels
// here. Ingredient lines use vocabulary from data/ingredients.js so they resolve
// cleanly. Method prose is original, written fresh in British English.
//
// DIET CONTRACT — "Diabetic / low-sugar": every recipe is built for blood-sugar
// control. STRICTLY EXCLUDED across this whole file:
//   • added sugar of any kind (caster, granulated, brown, icing, muscovado,
//     coconut sugar, pearl sugar, vanilla/brown sugar) and confectionery;
//   • syrups & concentrated sweeteners (golden syrup, maple/sugar syrup, honey,
//     black treacle, molasses, date molasses, agave, dulce de leche, condensed
//     milk, caramel, jams/marmalade, glacé/candied fruit, dried fruit used as
//     a sweetener);
//   • high-GI refined carbs as the dish's carbohydrate base (white rice, white
//     bread, plain/self-raising white flour bases, instant potato, sugary cereal).
// Carbohydrate, where present, comes from low-GI, high-fibre sources eaten in
// controlled portions: pulses, wholegrains (oats, quinoa, bulgur, brown rice,
// buckwheat, freekeh, wholemeal), and non-starchy vegetables. Naturally sweet
// notes come from whole fruit (berries, lemon, a little tomato) in modest
// amounts, never from added sugar. The "Diabetic-friendly" dietLabel is asserted
// on every record; extra honest labels (Vegetarian, Vegan, Pescatarian,
// Gluten-free, Dairy-free, High-protein, Low-carb, Mediterranean) are tagged
// truthfully. Free-from health labels are left to the pipeline to derive from the
// resolved lines.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  // ── Breakfasts ────────────────────────────────────────────────────────────
  {
    title: 'Diabetic-friendly overnight oats with berries',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian'],
    instructions:
      '1. Tip the oats into a bowl or jar and pour over the milk and natural yoghurt. Stir in the cinnamon.\n' +
      '2. Fold through most of the raspberries and blueberries, crushing a few against the side so they bleed colour through the oats.\n' +
      '3. Cover and chill overnight, or for at least four hours, so the oats soften and thicken.\n' +
      '4. In the morning stir loose, top with the reserved berries and a scatter of walnuts, and serve. No sugar is needed — the berries carry it.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '80g' },
      { rawName: 'Milk', rawMeasure: '200ml' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Raspberries', rawMeasure: '80g' },
      { rawName: 'Blueberries', rawMeasure: '60g' },
      { rawName: 'Walnuts', rawMeasure: '20g, roughly chopped' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Savoury porridge with egg and spinach',
    servingsBase: 1,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian'],
    instructions:
      '1. Simmer the oats with the milk and a pinch of salt for 4–5 minutes, stirring, until thick and creamy.\n' +
      '2. Stir the spinach through the hot porridge so it wilts, then season with black pepper.\n' +
      '3. Meanwhile fry or poach the egg to your liking.\n' +
      '4. Spoon the porridge into a bowl, top with the egg and a scatter of chives, and serve at once. The savoury route keeps it low-sugar and steady.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '50g' },
      { rawName: 'Milk', rawMeasure: '200ml' },
      { rawName: 'Spinach', rawMeasure: '40g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, snipped' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and spinach breakfast omelette',
    servingsBase: 1,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Heat the olive oil in a non-stick pan and soften the sliced mushrooms over a high heat until golden and any liquid has cooked off.\n' +
      '2. Add the spinach and let it wilt, then season and tip onto a plate.\n' +
      '3. Beat the eggs with salt and pepper, pour into the pan and swirl to coat. Draw the edges in as it sets.\n' +
      '4. While the top is still a little soft, spoon the mushrooms and spinach over one half, scatter with grated Cheddar, fold over and slide onto a plate.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Mushroom', rawMeasure: '100g' },
      { rawName: 'Spinach', rawMeasure: '50g' },
      { rawName: 'Cheddar cheese', rawMeasure: '30g, grated' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek yoghurt with toasted seeds and raspberries',
    servingsBase: 1,
    totalTimeMinutes: 5,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Toast the sunflower-style seed mix — here pumpkin seeds and flaked almonds — in a dry pan until fragrant and lightly coloured. Tip out to cool.\n' +
      '2. Spoon the Greek yoghurt into a bowl.\n' +
      '3. Top with the raspberries, the toasted almonds and a dusting of cinnamon. The unsweetened yoghurt and whole berries keep the sugar low while the protein keeps you full.',
    rawLines: [
      { rawName: 'Greek yoghurt', rawMeasure: '200g' },
      { rawName: 'Raspberries', rawMeasure: '80g' },
      { rawName: 'Almonds', rawMeasure: '20g, flaked' },
      { rawName: 'Pumpkin', rawMeasure: '1 tbsp seeds' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Smoked salmon and scrambled eggs on rye',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'High-protein'],
    instructions:
      '1. Toast the rye bread — a dense, low-GI loaf that suits diabetic eating far better than white toast.\n' +
      '2. Beat the eggs with a splash of milk, salt and pepper.\n' +
      '3. Melt the butter in a non-stick pan over a low heat, pour in the eggs and stir gently with a spatula until softly set and creamy.\n' +
      '4. Pile the eggs onto the rye, drape over the smoked salmon and finish with chives and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Smoked salmon', rawMeasure: '100g' },
      { rawName: 'Rye bread', rawMeasure: '2 slices' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Milk', rawMeasure: '1 tbsp' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, snipped' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chia and almond milk pudding with blueberries',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Whisk the chia seeds into the almond milk with the vanilla extract and cinnamon, beating well so they do not clump.\n' +
      '2. Leave to stand for ten minutes, whisk again to break up any pockets, then cover and chill overnight until set to a soft pudding.\n' +
      '3. Spoon into glasses, top with the blueberries and a few flaked almonds. There is no added sugar — vanilla and whole berries do the sweetening.',
    rawLines: [
      { rawName: 'Chia seeds', rawMeasure: '4 tbsp' },
      { rawName: 'Almond milk', rawMeasure: '300ml, unsweetened' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Almonds', rawMeasure: '15g, flaked' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
    ],
  },
  {
    title: 'Avocado and poached egg on wholegrain toast',
    servingsBase: 1,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian'],
    instructions:
      '1. Toast the wholegrain bread, which releases its carbohydrate slowly and keeps blood sugar even.\n' +
      '2. Bring a pan of water to a bare simmer, slip in the cracked egg and poach for three minutes until the white is set and the yolk soft.\n' +
      '3. Mash the avocado with lemon juice, salt, pepper and the chilli flakes, then spread thickly over the toast.\n' +
      '4. Top with the poached egg, a little more chilli and serve.',
    rawLines: [
      { rawName: 'Wholegrain bread', rawMeasure: '1 slice' },
      { rawName: 'Avocado', rawMeasure: '1/2' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tomato and feta baked eggs',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'Mediterranean',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb', 'Mediterranean'],
    instructions:
      '1. Heat the olive oil in an ovenproof pan and soften the onion and pepper for 8 minutes until sweet.\n' +
      '2. Stir in the garlic, paprika and chopped tomatoes, season and simmer for 10 minutes until thick.\n' +
      '3. Make four wells in the sauce, crack an egg into each and crumble over the feta.\n' +
      '4. Cover and cook gently for 6–8 minutes until the whites are set but the yolks still soft. Scatter with parsley and serve with a little wholegrain bread if you like.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Feta', rawMeasure: '60g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Buckwheat pancakes with yoghurt and berries',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Whisk the buckwheat flour with the baking powder, egg and milk into a smooth, pourable batter. There is no sugar in the batter — the topping carries the sweetness.\n' +
      '2. Heat a little butter in a non-stick pan and drop in small ladlefuls. Cook for 2 minutes until bubbles appear, then flip and cook the other side.\n' +
      '3. Keep the pancakes warm while you cook the rest.\n' +
      '4. Serve stacked, topped with natural yoghurt and a generous handful of mixed berries.',
    rawLines: [
      { rawName: 'Buckwheat flour', rawMeasure: '120g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Milk', rawMeasure: '200ml' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Frozen mixed berries', rawMeasure: '150g, thawed' },
      { rawName: 'Butter', rawMeasure: '15g' },
    ],
  },

  // ── Soups ─────────────────────────────────────────────────────────────────
  {
    title: 'Lentil and vegetable soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Heat the olive oil and soften the onion, carrot and celery for 10 minutes until sweet but not coloured.\n' +
      '2. Stir in the garlic, cumin and the rinsed lentils.\n' +
      '3. Pour in the chopped tomatoes and stock, bring to the boil then simmer for 25 minutes until the lentils are soft and the soup thick.\n' +
      '4. Season well, stir through the parsley and serve. The lentils give slow-release energy with no added sugar.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g, dried' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced butternut squash and lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the olive oil and soften the onion for 8 minutes, then stir in the garlic, ginger and curry powder and cook for a minute.\n' +
      '2. Add the diced squash, red lentils and stock, bring to the boil and simmer for 25 minutes until everything is tender.\n' +
      '3. Blitz until smooth, loosening with a little water if needed, and season well.\n' +
      '4. Serve with a swirl of natural yoghurt and a scatter of coriander.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '700g, diced' },
      { rawName: 'Lentils', rawMeasure: '100g, red' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chunky minestrone with cannellini beans',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Mediterranean'],
    instructions:
      '1. Heat the olive oil and soften the onion, carrot and celery for 10 minutes.\n' +
      '2. Stir in the garlic, then add the chopped tomatoes and stock and bring to a simmer.\n' +
      '3. Add the cannellini beans, cabbage and a small handful of wholemeal pasta and cook for 12 minutes until the pasta and greens are tender.\n' +
      '4. Season, stir through the basil and serve topped with a little grated Parmesan. The beans and wholemeal pasta keep the GI low.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Cabbage', rawMeasure: '150g, shredded' },
      { rawName: 'Wholemeal flour', rawMeasure: '60g pasta (wholemeal)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Parmesan', rawMeasure: '20g, grated' },
      { rawName: 'Basil', rawMeasure: '2 tbsp, torn' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and vegetable broth with barley',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the olive oil and soften the onion, carrot, celery and leek for 10 minutes.\n' +
      '2. Add the chicken thighs, pearl barley and stock, bring to the boil and simmer gently for 30 minutes until the barley is tender and the chicken cooked.\n' +
      '3. Lift out the chicken, shred the meat and return it to the pan.\n' +
      '4. Season, stir through the parsley and serve. Barley is a low-GI grain that keeps this broth gentle on blood sugar.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '4, boneless' },
      { rawName: 'Bulgur wheat', rawMeasure: '80g pearl barley' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Leek', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1.2 litres' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
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
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Spread the tomatoes, peppers, onion and garlic on a tray, drizzle with the olive oil and season.\n' +
      '2. Roast for 30 minutes until soft and lightly charred at the edges, which builds a natural sweetness with no added sugar.\n' +
      '3. Tip into a pan with the stock and smoked paprika and simmer for 5 minutes.\n' +
      '4. Blitz until smooth, season to taste and serve with a scatter of basil.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '800g, halved' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2 red' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Basil', rawMeasure: '2 tbsp, torn' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Split pea and ham soup',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the olive oil and soften the onion, carrot and celery for 10 minutes.\n' +
      '2. Add the rinsed split peas, the ham and the stock, bring to the boil and skim.\n' +
      '3. Simmer gently for 50 minutes until the peas have collapsed into a thick soup.\n' +
      '4. Season with pepper — the ham brings the salt — and serve. Split peas are a low-GI pulse that keeps energy steady.',
    rawLines: [
      { rawName: 'Split peas', rawMeasure: '250g, dried' },
      { rawName: 'Ham', rawMeasure: '150g, diced' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1.2 litres' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Salads & light lunches ─────────────────────────────────────────────────
  {
    title: 'Chickpea, cucumber and tomato salad',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Tip the drained chickpeas into a bowl with the diced cucumber, halved cherry tomatoes and red onion.\n' +
      '2. Whisk the olive oil with the lemon juice, season and pour over.\n' +
      '3. Toss through the parsley and mint and leave to sit for five minutes so the flavours mingle.\n' +
      '4. Serve as a light lunch — the chickpeas provide low-GI carbohydrate and plenty of fibre.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Mint', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Quinoa tabbouleh with herbs and lemon',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Rinse the quinoa, then simmer in salted water for 12–15 minutes until tender. Drain well and cool.\n' +
      '2. Combine the cooled quinoa with the chopped parsley, mint, cucumber, tomato and spring onion.\n' +
      '3. Dress generously with olive oil and lemon juice, season and toss.\n' +
      '4. Serve at room temperature. Quinoa swaps in for high-GI bulgur to keep this tabbouleh diabetic-friendly.',
    rawLines: [
      { rawName: 'Quinoa', rawMeasure: '150g' },
      { rawName: 'Parsley', rawMeasure: '40g, chopped' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna, bean and red onion salad',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Drain the cannellini beans and the tuna and tip into a bowl.\n' +
      '2. Add the finely sliced red onion, halved cherry tomatoes and rocket.\n' +
      '3. Whisk the olive oil with the lemon juice, season and pour over.\n' +
      '4. Toss gently and serve. The beans and tuna make a high-protein, low-GI lunch that holds blood sugar steady.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '1 x 145g tin, in spring water' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Rocket', rawMeasure: '50g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted vegetable and feta grain bowl',
    servingsBase: 2,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, pepper, red onion and cherry tomatoes with the olive oil and oregano, season and roast for 25 minutes.\n' +
      '2. Meanwhile cook the freekeh in salted water for 18 minutes until tender, then drain.\n' +
      '3. Fold the roasted vegetables through the warm freekeh and squeeze over the lemon.\n' +
      '4. Crumble over the feta and scatter with parsley. Freekeh is a low-GI wholegrain that suits diabetic eating.',
    rawLines: [
      { rawName: 'Freekeh', rawMeasure: '150g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Feta', rawMeasure: '80g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Egg and avocado salad with mixed leaves',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Lower the eggs into simmering water and cook for 8 minutes, then cool under cold water, peel and quarter.\n' +
      '2. Arrange the salad leaves on plates with the sliced avocado and cherry tomatoes.\n' +
      '3. Top with the eggs.\n' +
      '4. Whisk the olive oil with the lemon juice and mustard, season and drizzle over. A satisfying low-carb lunch with no sugar.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Baby leaf salad', rawMeasure: '80g' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lentil and roasted beetroot salad with goat’s cheese',
    servingsBase: 2,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the beetroot wedges with a little olive oil, season and roast for 30 minutes until tender.\n' +
      '2. Meanwhile drain and warm the cooked lentils.\n' +
      '3. Toss the lentils with the rocket, the roasted beetroot and a dressing of olive oil and sherry vinegar.\n' +
      '4. Crumble over the goat’s cheese and scatter with walnuts. The lentils and beetroot keep the GI gentle.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Beetroot', rawMeasure: '300g, raw, peeled' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Goat’s cheese', rawMeasure: '60g' },
      { rawName: 'Walnuts', rawMeasure: '30g' },
      { rawName: 'Sherry vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked mackerel and butter bean salad',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Flake the smoked mackerel into a bowl, discarding any skin.\n' +
      '2. Add the drained butter beans, the sliced spring onion and the rocket.\n' +
      '3. Whisk the olive oil with the lemon juice and a little mustard, season and pour over.\n' +
      '4. Toss gently and serve. Oily fish and beans make a heart-healthy, low-GI plate.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '2 smoked fillets' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin butter beans, drained' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Chicken & turkey mains ─────────────────────────────────────────────────
  {
    title: 'Lemon and herb roast chicken with green vegetables',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Rub the chicken breasts with olive oil, the lemon zest, thyme, garlic, salt and pepper.\n' +
      '2. Roast for 22–25 minutes until cooked through and the juices run clear. Rest briefly.\n' +
      '3. Meanwhile steam the broccoli and green beans until just tender.\n' +
      '4. Slice the chicken, squeeze over the lemon and serve with the greens. A clean, sugar-free plate that keeps blood glucose level.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4' },
      { rawName: 'Broccoli', rawMeasure: '300g' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Thyme', rawMeasure: '1 tbsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and chickpea curry (no added sugar)',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oil and soften the onion for 8 minutes, then stir in the garlic, ginger, curry powder and turmeric for a minute.\n' +
      '2. Add the diced chicken and brown lightly, then stir in the chopped tomatoes and chickpeas.\n' +
      '3. Simmer for 20 minutes until the chicken is cooked and the sauce thick — no sugar is added; the onion and tomato carry the balance.\n' +
      '4. Stir through the spinach to wilt, season and finish with coriander. Serve with a small portion of brown rice.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g, diced' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Spinach', rawMeasure: '80g' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled chicken with cauliflower mash and greens',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Steam or boil the cauliflower florets until very soft, then drain well and mash with the butter and a splash of milk. Season.\n' +
      '2. Season the chicken breasts and grill or griddle for 5–6 minutes a side until cooked through. Rest briefly.\n' +
      '3. Steam the cabbage until just tender.\n' +
      '4. Serve the chicken over the cauliflower mash with the greens alongside. Cauliflower swaps in for potato to keep this a low-carb plate.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Cauliflower', rawMeasure: '1 medium head' },
      { rawName: 'Cabbage', rawMeasure: '200g, shredded' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Milk', rawMeasure: '2 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey and vegetable stir-fry with tamari',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat half the oil in a wok and stir-fry the turkey mince over a high heat until browned and cooked through. Lift out.\n' +
      '2. Add the rest of the oil and stir-fry the broccoli, pepper and mangetout for 3–4 minutes until crisp-tender.\n' +
      '3. Return the turkey, add the garlic, ginger and soy sauce and toss for a minute. No sugary sauces here — the aromatics do the work.\n' +
      '4. Serve over a small portion of brown rice or on its own for a low-carb plate.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '400g' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Mangetout', rawMeasure: '100g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Chicken, leek and butter bean traybake',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Scatter the leeks, butter beans and cherry tomatoes in a roasting tin with the olive oil, garlic and thyme.\n' +
      '2. Nestle the chicken thighs on top, skin-side up, and season well.\n' +
      '3. Roast for 35–40 minutes until the chicken is golden and cooked and the beans have soaked up the juices.\n' +
      '4. Squeeze over the lemon and serve. The beans give low-GI carbohydrate without any added sugar.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin butter beans, drained' },
      { rawName: 'Leek', rawMeasure: '2' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Thyme', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tandoori-spiced chicken with cucumber raita',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Diabetic-friendly', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Mix the natural yoghurt with the garlic, ginger, garam masala, paprika and lemon juice, then coat the chicken and leave to marinate for at least 20 minutes.\n' +
      '2. Heat the grill to high and cook the chicken for 6–7 minutes a side until charred and cooked through.\n' +
      '3. For the raita, stir the grated cucumber and mint through the remaining yoghurt and season.\n' +
      '4. Serve the chicken with the raita and a green salad. The yoghurt marinade keeps it moist and sugar-free.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, boneless' },
      { rawName: 'Natural yoghurt', rawMeasure: '250g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Garam masala', rawMeasure: '1 tbsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Beef, lamb & pork mains ────────────────────────────────────────────────
  {
    title: 'Beef and vegetable chilli with kidney beans',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Brown the minced beef in a large pan over a high heat, then lift out leaving the fat behind.\n' +
      '2. Soften the onion and pepper for 8 minutes, then stir in the garlic, cumin, paprika and chilli powder.\n' +
      '3. Return the beef, add the chopped tomatoes and kidney beans and simmer for 25 minutes until rich and thick. No sugar is needed — the long simmer mellows the tomatoes.\n' +
      '4. Season and serve with a small portion of brown rice or a baked sweet potato.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Kidney beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Cumin', rawMeasure: '1 tbsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef and broccoli stir-fry with ginger',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Slice the beef thinly against the grain and toss with a little soy sauce and cornflour.\n' +
      '2. Heat half the oil in a wok and sear the beef in batches over a high heat. Lift out.\n' +
      '3. Add the rest of the oil and stir-fry the broccoli for 3 minutes, then add the garlic and ginger.\n' +
      '4. Return the beef with the remaining soy sauce and toss to coat. No sugar or hoisin — the ginger and garlic carry it. Serve with brown rice.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '350g' },
      { rawName: 'Broccoli', rawMeasure: '300g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '25g' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '1 tsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Slow-cooked beef and root vegetable stew',
    servingsBase: 4,
    totalTimeMinutes: 150,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oil and brown the diced stewing beef in batches, then lift out.\n' +
      '2. Soften the onion, carrot, celery and swede for 10 minutes, then stir in the garlic and tomato purée.\n' +
      '3. Return the beef, pour in the stock, add the thyme and bay, then cover and simmer very gently for 2 hours until the beef is meltingly tender.\n' +
      '4. Season and serve. Swede and carrot stand in for potato to lower the GI; no flour or sugar thickens this — reduction does.',
    rawLines: [
      { rawName: 'Stewing beef', rawMeasure: '700g, diced' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Swede', rawMeasure: '400g, diced' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 800ml' },
      { rawName: 'Thyme', rawMeasure: '1 tbsp' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb and aubergine tagine (no added sugar)',
    servingsBase: 4,
    totalTimeMinutes: 110,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oil and brown the diced lamb in batches, then lift out.\n' +
      '2. Soften the onion for 8 minutes, then stir in the garlic, ras el hanout and cinnamon.\n' +
      '3. Return the lamb with the chopped tomatoes, aubergine and stock, then cover and simmer for 90 minutes until the lamb is tender. Traditional tagines add dried fruit; we leave it out to keep the sugar low.\n' +
      '4. Stir through the chickpeas to warm, season and finish with coriander. Serve with bulgur wheat.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '700g, diced' },
      { rawName: 'Aubergine', rawMeasure: '1, diced' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ras el hanout', rawMeasure: '1 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork loin with apple and mustard sauce',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Season the pork chops and sear in the olive oil for 4–5 minutes a side until golden and cooked through. Rest on a warm plate.\n' +
      '2. In the same pan soften the sliced apple for 3 minutes — the fruit’s own sweetness is enough, with no added sugar.\n' +
      '3. Stir in the mustard, crème fraîche and a splash of stock and simmer to a glossy sauce. Season.\n' +
      '4. Spoon the sauce over the pork and serve with steamed greens.',
    rawLines: [
      { rawName: 'Pork chop', rawMeasure: '2' },
      { rawName: 'Apple', rawMeasure: '1, sliced' },
      { rawName: 'Mustard', rawMeasure: '1 tbsp' },
      { rawName: 'Crème fraîche', rawMeasure: '3 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1/2, made up to 100ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb kofta with minted yoghurt',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Diabetic-friendly', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Mix the minced lamb with the grated onion, garlic, cumin, coriander and a good pinch of salt, then shape around skewers into koftas.\n' +
      '2. Grill or griddle for 10–12 minutes, turning, until browned and cooked through.\n' +
      '3. Stir the chopped mint through the natural yoghurt with a squeeze of lemon and season.\n' +
      '4. Serve the koftas with the minted yoghurt and a crisp salad. No breadcrumbs or sugar — just spiced lamb.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1/2, grated' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Fish & seafood mains ───────────────────────────────────────────────────
  {
    title: 'Baked salmon with lemon and dill',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the salmon fillets on a lined tray, drizzle with olive oil and season.\n' +
      '2. Scatter over the dill and lay lemon slices on top.\n' +
      '3. Bake for 12–15 minutes until the salmon flakes easily.\n' +
      '4. Serve with steamed broccoli and green beans for a clean, low-carb, sugar-free plate rich in healthy fats.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Broccoli', rawMeasure: '250g' },
      { rawName: 'Green beans', rawMeasure: '150g' },
      { rawName: 'Dill', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cod with butter beans, tomato and spinach',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Heat the olive oil and soften the onion for 6 minutes, then stir in the garlic and paprika.\n' +
      '2. Add the chopped tomatoes and butter beans and simmer for 8 minutes until thick. Season.\n' +
      '3. Nestle the cod fillets into the sauce, cover and cook gently for 8–10 minutes until the fish flakes.\n' +
      '4. Stir the spinach through to wilt and finish with parsley. The beans give low-GI body without any sugar.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2 cod' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin butter beans, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Spinach', rawMeasure: '80g' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled mackerel with tomato and herb salad',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Heat the grill to high. Slash the mackerel skin, rub with olive oil and season.\n' +
      '2. Grill for 4–5 minutes a side until the skin crisps and the flesh flakes.\n' +
      '3. Toss the tomatoes, cucumber and red onion with the parsley, lemon juice and a little olive oil.\n' +
      '4. Serve the mackerel on the salad. Oily fish and a sharp salad make a heart-healthy, low-carb plate.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '2 whole, gutted' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and courgette stir-fry',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Heat the oil in a wok and stir-fry the courgette and pepper over a high heat for 3 minutes.\n' +
      '2. Add the garlic and ginger, then the prawns, and stir-fry for 3 minutes until pink and cooked.\n' +
      '3. Splash in the soy sauce and a squeeze of lime and toss. No sweet sauce — the lime and aromatics balance it.\n' +
      '4. Serve as is for a low-carb dinner, or with a small portion of brown rice.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '300g, raw, peeled' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Baked trout with almonds and green beans',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the trout fillets on a lined tray, dot with butter, season and lay over lemon slices.\n' +
      '2. Bake for 12–15 minutes until the fish flakes.\n' +
      '3. Meanwhile toast the flaked almonds in a dry pan and steam the green beans.\n' +
      '4. Scatter the almonds over the trout and serve with the beans. A simple, sugar-free, low-carb dinner.',
    rawLines: [
      { rawName: 'Trout', rawMeasure: '2 fillets' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Almonds', rawMeasure: '30g, flaked' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sea bass with fennel and lemon',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'Low-carb', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the finely sliced fennel and red onion with olive oil, season and roast for 15 minutes.\n' +
      '2. Sit the sea bass fillets on top, drizzle with a little more oil and lay over lemon slices.\n' +
      '3. Roast for a further 10 minutes until the fish flakes and the fennel is tender.\n' +
      '4. Scatter with the fennel fronds or parsley and serve. Fennel and lemon keep it bright and sugar-free.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '2 fillets' },
      { rawName: 'Fennel', rawMeasure: '1 bulb' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Fish and bean cioppino-style stew',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Heat the olive oil and soften the onion and fennel for 8 minutes, then stir in the garlic and chilli flakes.\n' +
      '2. Add the chopped tomatoes, stock and cannellini beans and simmer for 10 minutes.\n' +
      '3. Nestle in the white fish and prawns, cover and cook gently for 6–8 minutes until just done.\n' +
      '4. Season, stir through the parsley and serve. The beans give low-GI heft without any sugar.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '400g, in chunks' },
      { rawName: 'Prawns', rawMeasure: '150g, raw, peeled' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Fennel', rawMeasure: '1 bulb' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml fish stock' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Vegetarian & vegan mains ───────────────────────────────────────────────
  {
    title: 'Chickpea and spinach curry with brown rice',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Cook the brown rice in plenty of salted water for 25 minutes until tender, then drain.\n' +
      '2. Meanwhile heat the oil and soften the onion for 8 minutes, then stir in the garlic, ginger, curry powder and turmeric.\n' +
      '3. Add the chopped tomatoes and chickpeas and simmer for 12 minutes until thick.\n' +
      '4. Stir the spinach through to wilt, season and finish with coriander. Serve over the brown rice — a low-GI grain that keeps glucose steady.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Brown rice', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Black bean and pepper stew',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oil and soften the onion and peppers for 8 minutes, then stir in the garlic, cumin and smoked paprika.\n' +
      '2. Add the chopped tomatoes and black beans and simmer for 15 minutes until thick.\n' +
      '3. Season and squeeze over the lime — no sugar is added, the smoked paprika and lime do the balancing.\n' +
      '4. Finish with coriander and serve with a small portion of brown rice or a baked sweet potato.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Cumin', rawMeasure: '1 tbsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lentil and vegetable shepherd’s pie with cauliflower mash',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oil and soften the onion, carrot and celery for 10 minutes, then stir in the garlic and tomato purée.\n' +
      '2. Add the cooked lentils, chopped tomatoes and stock and simmer for 15 minutes until thick. Stir in the peas and season.\n' +
      '3. Meanwhile boil the cauliflower until very soft, drain well and mash with the butter; season.\n' +
      '4. Heat the oven to 200°C (fan 180°C). Spoon the lentils into a dish, top with the cauliflower mash and bake for 25 minutes until golden. Cauliflower keeps the topping low-carb.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Cauliflower', rawMeasure: '1 large head' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tofu and vegetable stir-fry with tamari',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Press the tofu, cut into cubes and toss with a little cornflour. Fry in the oil until golden on all sides, then lift out.\n' +
      '2. Stir-fry the broccoli, pepper and pak choi over a high heat for 4 minutes.\n' +
      '3. Add the garlic and ginger, return the tofu and splash in the soy sauce. No sweet glaze — the aromatics carry it.\n' +
      '4. Finish with sesame oil and serve over a small portion of brown rice or on its own.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g, firm' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Stuffed peppers with quinoa and feta',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers, remove the seeds and sit them in a roasting dish.\n' +
      '2. Cook the quinoa in salted water for 12–15 minutes, then drain. Mix with the chopped tomatoes, garlic, oregano and most of the feta.\n' +
      '3. Spoon the filling into the peppers, scatter over the remaining feta and drizzle with olive oil.\n' +
      '4. Bake for 30 minutes until the peppers are soft and the tops golden. Quinoa keeps the filling low-GI.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4' },
      { rawName: 'Quinoa', rawMeasure: '120g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine and chickpea bake',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the aubergine cubes with olive oil, season and roast for 20 minutes until soft.\n' +
      '2. Meanwhile soften the onion in a pan, add the garlic, cumin and chopped tomatoes and simmer for 10 minutes.\n' +
      '3. Stir in the chickpeas and the roasted aubergine and tip into a baking dish.\n' +
      '4. Bake for 20 minutes, then finish with parsley. A hearty, sugar-free, plant-based dinner with low-GI pulses.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cauliflower and chickpea curry-spiced traybake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the cauliflower florets and chickpeas with the oil, curry powder, turmeric and salt.\n' +
      '2. Spread on a tray and roast for 30 minutes, turning once, until the cauliflower is tender and golden.\n' +
      '3. Stir the spinach through the hot tray to wilt and squeeze over the lemon.\n' +
      '4. Serve with a spoonful of natural yoghurt. Roasting concentrates flavour with no need for any sugar.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large head' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and lentil ragù with wholemeal pasta',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Heat the oil and soften the onion, carrot and celery for 10 minutes, then add the chopped mushrooms and cook until any liquid has gone.\n' +
      '2. Stir in the garlic and tomato purée, then add the cooked lentils, chopped tomatoes and a little stock.\n' +
      '3. Simmer for 20 minutes until rich and thick. No sugar is needed — a long simmer rounds off the tomatoes.\n' +
      '4. Meanwhile cook the wholemeal pasta until al dente, drain and toss through the ragù. Serve with basil.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Lentils', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Wholemeal flour', rawMeasure: '300g pasta (wholemeal)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1/2, made up to 150ml' },
      { rawName: 'Basil', rawMeasure: '2 tbsp, torn' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi and roasted vegetable bowl',
    servingsBase: 2,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, pepper, red onion and cherry tomatoes with olive oil and oregano, season and roast for 25 minutes.\n' +
      '2. Meanwhile cook the quinoa in salted water for 12–15 minutes, then drain.\n' +
      '3. Griddle the sliced halloumi for a minute a side until golden.\n' +
      '4. Pile the quinoa and roasted vegetables into bowls, top with the halloumi and squeeze over the lemon. Quinoa keeps the GI low.',
    rawLines: [
      { rawName: 'Feta', rawMeasure: '225g halloumi' },
      { rawName: 'Quinoa', rawMeasure: '120g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced red lentil dal',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oil and soften the onion for 8 minutes, then stir in the garlic, ginger, cumin, turmeric and a pinch of chilli flakes.\n' +
      '2. Add the rinsed red lentils and stock, bring to the boil and simmer for 25 minutes, stirring, until collapsed and thick.\n' +
      '3. Stir in the chopped tomatoes and cook for 5 more minutes, then season well.\n' +
      '4. Finish with coriander and a squeeze of lemon. Lentils are a low-GI staple — no sugar anywhere. Serve with a little brown rice.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g, red' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Sides & low-carb swaps ─────────────────────────────────────────────────
  {
    title: 'Cauliflower rice with herbs',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Blitz the cauliflower in a food processor in short pulses until it resembles rice grains.\n' +
      '2. Heat the olive oil in a large pan and add the cauliflower with a pinch of salt.\n' +
      '3. Stir-fry over a medium heat for 5–6 minutes until just tender but still with a little bite.\n' +
      '4. Stir through the parsley and a squeeze of lemon. A low-carb stand-in for rice that suits diabetic eating.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large head' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted Mediterranean vegetables',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'Mediterranean',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, aubergine, peppers and red onion with the olive oil, garlic and oregano. Season well.\n' +
      '2. Spread in a single layer on a large tray.\n' +
      '3. Roast for 30 minutes, turning once, until tender and caramelised at the edges — natural sweetness with no added sugar.\n' +
      '4. Finish with a splash of sherry vinegar and serve.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Sherry vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Garlic butter green beans with almonds',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Steam or boil the green beans for 4 minutes until just tender, then drain.\n' +
      '2. Melt the butter in a pan, add the garlic and cook gently for a minute without colouring.\n' +
      '3. Toss the beans through the garlic butter and season.\n' +
      '4. Scatter over the toasted flaked almonds and serve. A low-carb side with no sugar.',
    rawLines: [
      { rawName: 'Green beans', rawMeasure: '400g' },
      { rawName: 'Almonds', rawMeasure: '30g, flaked' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Braised Puy-style lentils with herbs',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the olive oil and soften the onion, carrot and celery for 10 minutes.\n' +
      '2. Add the garlic and the rinsed lentils, then pour in the stock.\n' +
      '3. Simmer gently for 20–25 minutes until the lentils are tender but holding their shape.\n' +
      '4. Season, stir through the parsley and a splash of sherry vinegar. A low-GI side that goes with almost anything.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g, dried (Puy or green)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
      { rawName: 'Sherry vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Celeriac and swede mash',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Peel and dice the celeriac and swede and boil in salted water until very tender, about 20 minutes.\n' +
      '2. Drain extremely well and return to the pan to steam-dry for a minute.\n' +
      '3. Mash with the butter and a splash of milk until smooth, then season generously.\n' +
      '4. Serve in place of mashed potato — celeriac and swede are far lower in carbohydrate, making this a diabetic-friendly swap.',
    rawLines: [
      { rawName: 'Celeriac', rawMeasure: '1 medium' },
      { rawName: 'Swede', rawMeasure: '1 medium' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Milk', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek-style chopped salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Greek',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb', 'Mediterranean'],
    instructions:
      '1. Chop the cucumber, tomatoes, pepper and red onion into bite-sized pieces and tip into a bowl.\n' +
      '2. Add the olives and crumble over the feta.\n' +
      '3. Whisk the olive oil with the red wine vinegar and oregano, season and pour over.\n' +
      '4. Toss gently and serve. A fresh, sugar-free, low-carb side.',
    rawLines: [
      { rawName: 'Cucumber', rawMeasure: '1' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 green' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp red wine vinegar' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Snacks & low-sugar sweet treats ────────────────────────────────────────
  {
    title: 'Spiced roasted chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Drain and thoroughly dry the chickpeas on a tea towel.\n' +
      '2. Toss with the olive oil, smoked paprika, cumin and a good pinch of salt.\n' +
      '3. Spread on a tray and roast for 30–35 minutes, shaking once or twice, until crisp.\n' +
      '4. Cool a little before eating. A high-fibre, sugar-free snack with a low GI.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Classic hummus with vegetable crudités',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Blitz the chickpeas with the tahini, garlic, lemon juice and a good pinch of salt, loosening with cold water until smooth and creamy.\n' +
      '2. Taste and adjust the lemon and salt.\n' +
      '3. Spoon into a bowl, drizzle with olive oil and dust with paprika.\n' +
      '4. Serve with cucumber, carrot and pepper sticks. The crudités and chickpeas keep the GI low and the sugar negligible.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Tahini', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Paprika', rawMeasure: '1 pinch' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked apple with cinnamon and walnuts',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Core the apples and score a line around the middle of each.\n' +
      '2. Mix the chopped walnuts with the cinnamon and a small knob of butter, then press into the cavities.\n' +
      '3. Sit the apples in a dish with a splash of water and bake for 25–30 minutes until soft.\n' +
      '4. Serve warm with a spoonful of natural yoghurt. The apple’s own sweetness means no sugar is needed.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '2 large' },
      { rawName: 'Walnuts', rawMeasure: '30g' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp' },
    ],
  },
  {
    title: 'Greek yoghurt and berry pots',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Lightly crush half the berries with a fork to release their juice — no sugar required.\n' +
      '2. Fold the vanilla extract through the Greek yoghurt.\n' +
      '3. Layer the yoghurt and crushed berries into small glasses.\n' +
      '4. Top with the whole berries and a few flaked almonds. A protein-rich, low-sugar pudding.',
    rawLines: [
      { rawName: 'Greek yoghurt', rawMeasure: '400g' },
      { rawName: 'Frozen mixed berries', rawMeasure: '200g, thawed' },
      { rawName: 'Almonds', rawMeasure: '20g, flaked' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Dark chocolate and avocado mousse',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Melt the plain dark chocolate (at least 85% cocoa, which is low in sugar) gently over a pan of simmering water, then leave to cool slightly.\n' +
      '2. Blitz the ripe avocado flesh with the cocoa powder, vanilla and a splash of milk until completely smooth.\n' +
      '3. Fold in the melted chocolate until glossy and even.\n' +
      '4. Spoon into glasses and chill for 30 minutes. Avocado gives a silky mousse with no added sugar.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2 ripe' },
      { rawName: 'Plain chocolate', rawMeasure: '60g, 85% cocoa' },
      { rawName: 'Cocoa powder', rawMeasure: '2 tbsp' },
      { rawName: 'Milk', rawMeasure: '3 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Cinnamon-baked pears with walnuts',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Halve and core the pears and sit them cut-side up in a dish.\n' +
      '2. Dust with the cinnamon and scatter over the walnuts, then add a splash of water to the dish.\n' +
      '3. Bake for 25 minutes until the pears are tender and fragrant — their own sweetness is plenty.\n' +
      '4. Serve warm with a spoonful of Greek yoghurt.',
    rawLines: [
      { rawName: 'Pear', rawMeasure: '4' },
      { rawName: 'Walnuts', rawMeasure: '40g' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Greek yoghurt', rawMeasure: '4 tbsp' },
    ],
  },
  {
    title: 'No-added-sugar oat and seed flapjack-style bars',
    servingsBase: 8,
    totalTimeMinutes: 35,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C) and line a small tin. Mash the banana to a smooth purée — this binds and sweetens the bars without any added sugar or syrup.\n' +
      '2. Mix the mashed banana with the oats, chopped walnuts, pumpkin seeds, cinnamon and melted butter until well combined.\n' +
      '3. Press firmly into the tin and bake for 20–25 minutes until set and golden at the edges.\n' +
      '4. Cool completely in the tin before cutting into bars. The banana and oats give a low-GI, syrup-free treat.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '200g' },
      { rawName: 'Banana', rawMeasure: '2 ripe' },
      { rawName: 'Walnuts', rawMeasure: '50g' },
      { rawName: 'Pumpkin', rawMeasure: '2 tbsp seeds' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '50g, melted' },
    ],
  },
]
