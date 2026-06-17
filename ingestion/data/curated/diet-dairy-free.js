// Curated DAIRY-FREE recipes for Larder (per-diet floor seed).
//
// Each record is culinary content ONLY — sources/curated.js (mapCurated) adds
// the source/sourceId/imageUrl boilerplate and generates an on-brand SVG image.
// The shape mirrors data/curated/mains.js and the sibling diet sets:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }
//
// HARD RULE — every recipe here STRICTLY satisfies "Dairy-free": it contains NO
// cow's/goat's/sheep's milk dairy whatsoever — none of: milk, butter, ghee,
// buttermilk, cream (single/double/clotted/soured), cream cheese, crème
// fraîche, yoghurt (dairy), cheese of any kind, whey, casein, condensed/
// evaporated milk, or custard set with milk. Where a classic leans on dairy we
// rebuild it with plant alternatives that the dictionary carries: soya/oat/
// almond milk, vegan butter, vegan cheese, coconut milk and coconut yoghurt,
// nutritional yeast for a savoury-cheesy note, and cashews/tahini blended for
// richness. Plant milks/butters/cheeses and coconut cream are all dairy-free.
//
// Meat, poultry, fish, eggs and honey are NOT excluded by this diet, so the set
// is deliberately mixed — meaty, fishy and plant dishes alike — to read like a
// real dairy-free repertoire rather than a vegan one.
//
// dietLabels are tagged HONESTLY: every record carries 'Dairy-free' (the floor
// this file seeds), plus any other label the dish genuinely satisfies (Vegan,
// Vegetarian, Pescatarian) based on its actual ingredient list. Free-from
// health labels (Gluten-free, Nut-free, Egg-free, Fish-free, etc.) are DERIVED
// downstream by the pipeline from the resolved ingredient lines — we do not
// hand-assert them here.
//
// rawName values use the canonical dictionary vocabulary (data/ingredients.js)
// so the lines resolve cleanly. Method prose is original, written fresh in
// British English; no website wording is copied.

const DF = ['Dairy-free']
const DF_VEG = ['Dairy-free', 'Vegetarian']
const DF_VEGAN = ['Dairy-free', 'Vegan', 'Vegetarian']
const DF_PESC = ['Dairy-free', 'Pescatarian']

export default [
  // ── Breakfast & brunch ─────────────────────────────────────────────────────
  {
    title: 'Overnight oats with almond milk and berries',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Tip the oats into a bowl or jar and pour over the almond milk, then stir in the chia seeds and a trickle of maple syrup.\n' +
      '2. Stir well, cover and leave in the fridge overnight so the oats soften and the chia thickens the mixture.\n' +
      '3. In the morning loosen with a splash more almond milk if needed and give it a good stir.\n' +
      '4. Spoon into bowls, top with the frozen mixed berries and a scatter of flaked almonds, and serve cold.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Almond milk', rawMeasure: '250ml' },
      { rawName: 'Chia seeds', rawMeasure: '2 tbsp' },
      { rawName: 'Frozen mixed berries', rawMeasure: '150g' },
      { rawName: 'Almonds', rawMeasure: '20g, flaked' },
      { rawName: 'Maple syrup', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Porridge with oat milk and banana',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Tip the oats into a small pan with the oat milk and a pinch of salt.\n' +
      '2. Bring slowly to a gentle simmer, stirring often so the bottom does not catch.\n' +
      '3. Cook for 5–6 minutes until thick and creamy, loosening with a splash more oat milk if needed.\n' +
      '4. Spoon into bowls, top with sliced banana and a trickle of maple syrup, and serve hot.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Oat milk', rawMeasure: '500ml' },
      { rawName: 'Banana', rawMeasure: '2' },
      { rawName: 'Maple syrup', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Smashed avocado on toast',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Toast the bread on both sides until crisp and golden.\n' +
      '2. Scoop the avocado flesh into a bowl, add a squeeze of lemon, the chilli flakes and a good pinch of salt, and crush roughly with a fork.\n' +
      '3. Drizzle the toast with a little olive oil, then pile the smashed avocado on top.\n' +
      '4. Scatter the halved cherry tomatoes over, finish with black pepper and a last squeeze of lemon, and serve at once.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2 ripe' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Dairy-free full English breakfast',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: DF,
    instructions:
      '1. Grill or fry the sausages first, turning, as they take the longest — about 15 minutes.\n' +
      '2. Fry the bacon until done to your liking and keep warm. Halve the tomatoes and fry cut-side down with the mushrooms in a little oil.\n' +
      '3. Tip the baked beans into a small pan and warm through gently.\n' +
      '4. Fry the eggs in the bacon pan, basting the tops with the hot fat until set.\n' +
      '5. Toast the bread, spread with a little vegan butter, and serve everything together while hot.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '4' },
      { rawName: 'Bacon', rawMeasure: '4 rashers' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Baked beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Vegan butter', rawMeasure: 'for spreading' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Mushroom and spinach scramble',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: DF_VEG,
    instructions:
      '1. Beat the eggs in a bowl with a splash of oat milk and season well.\n' +
      '2. Fry the sliced mushrooms in the olive oil over a high heat until golden, then add the garlic for a minute.\n' +
      '3. Stir through the spinach until just wilted, then lower the heat and pour in the eggs.\n' +
      '4. Stir gently and continuously until softly set but still creamy.\n' +
      '5. Pile onto toasted bread and serve at once with a grind of black pepper.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Mushroom', rawMeasure: '200g' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Oat milk', rawMeasure: '2 tbsp' },
      { rawName: 'Bread', rawMeasure: '2 slices' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Banana and oat breakfast pancakes',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: DF_VEG,
    instructions:
      '1. Mash the bananas to a smooth purée, then beat in the eggs.\n' +
      '2. Stir in the oats, baking powder and a pinch of cinnamon and salt to a thick, spoonable batter; leave to stand for 5 minutes.\n' +
      '3. Heat a little oil in a non-stick pan and drop in spoonfuls of batter, spreading lightly.\n' +
      '4. Cook for 2 minutes until bubbles form and the underside is golden, then flip and cook for a further minute.\n' +
      '5. Stack the pancakes and serve with maple syrup and a few extra banana slices.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '2 ripe' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Oats', rawMeasure: '80g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Maple syrup', rawMeasure: 'to serve' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Coconut yoghurt and granola breakfast bowl',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Spoon the coconut yoghurt into two bowls and smooth the tops.\n' +
      '2. Scatter over the oats toasted with a few crushed almonds, or shop-bought granola if you prefer.\n' +
      '3. Pile on the blueberries and raspberries and a few banana slices.\n' +
      '4. Finish with a scatter of pumpkin seeds and a trickle of maple syrup, and serve straight away.',
    rawLines: [
      { rawName: 'Coconut yoghurt', rawMeasure: '300g' },
      { rawName: 'Oats', rawMeasure: '60g' },
      { rawName: 'Almonds', rawMeasure: '20g' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Raspberries', rawMeasure: '100g' },
      { rawName: 'Banana', rawMeasure: '1' },
      { rawName: 'Pumpkin seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Maple syrup', rawMeasure: '1 tbsp' },
    ],
  },

  // ── Soups & light lunches ──────────────────────────────────────────────────
  {
    title: 'Dairy-free leek and potato soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Melt the vegan butter in a large pan and gently soften the sliced leeks and onion for 8–10 minutes without colouring.\n' +
      '2. Add the diced potato, stir to coat, then pour in the stock. Bring to the boil and simmer for 15–20 minutes until the potato is soft.\n' +
      '3. Blend until smooth, then stir through the oat milk and season generously.\n' +
      '4. Reheat gently without boiling, scatter with chives and serve with crusty bread.',
    rawLines: [
      { rawName: 'Leek', rawMeasure: '3' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Oat milk', rawMeasure: '100ml' },
      { rawName: 'Vegan butter', rawMeasure: '30g' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced carrot and lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Warm the olive oil in a large pan and soften the chopped onion and carrot over a medium heat for 8–10 minutes until sweet.\n' +
      '2. Stir in the garlic, cumin and turmeric and cook for a minute until fragrant.\n' +
      '3. Add the rinsed lentils and the chopped tomatoes, then pour in the stock. Bring to the boil.\n' +
      '4. Lower the heat and simmer for 20–25 minutes until the lentils have collapsed and the carrot is soft.\n' +
      '5. Blend until smooth, season well and finish with a squeeze of lemon and a scatter of coriander.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g red lentils' },
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
    title: 'Roasted tomato and basil soup',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
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
    dietLabels: DF_VEGAN,
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
    title: 'Butternut squash and coconut soup',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
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
    title: 'Chicken and sweetcorn soup',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Chinese',
    dietLabels: DF,
    instructions:
      '1. Bring the stock to a gentle simmer in a large pan with the grated ginger and sliced garlic.\n' +
      '2. Add the shredded chicken breast and the sweetcorn and simmer for 6–8 minutes until the chicken is cooked through.\n' +
      '3. Stir in the soy sauce, then trickle in the slaked cornflour, stirring, until the soup thickens slightly.\n' +
      '4. Pour in the beaten egg in a thin stream while stirring to form fine ribbons.\n' +
      '5. Finish with sliced spring onion and a few drops of sesame oil, and serve hot.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Sweetcorn', rawMeasure: '1 tin (325g)' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1.2 litres' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Pea and mint soup',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
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
    title: 'Hummus and roasted vegetable wrap',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Toss the sliced courgette, pepper and red onion with olive oil and smoked paprika, then roast for 20–25 minutes until tender and lightly charred.\n' +
      '2. Warm the tortilla wraps briefly in the oven or a dry pan to make them pliable.\n' +
      '3. Spread each wrap generously with hummus.\n' +
      '4. Pile the roasted vegetables down the middle, add a handful of rocket and a squeeze of lemon.\n' +
      '5. Roll up tightly, cut in half and serve.',
    rawLines: [
      { rawName: 'Tortilla wrap', rawMeasure: '2 large' },
      { rawName: 'Hummus', rawMeasure: '4 tbsp' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Rocket', rawMeasure: '1 handful' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jacket potato with beans (dairy-free)',
    servingsBase: 2,
    totalTimeMinutes: 90,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes all over, rub with a little oil and salt.\n' +
      '2. Bake directly on the oven shelf for about 1 hour 15 minutes until the skins are crisp and the insides fluffy.\n' +
      '3. Towards the end, warm the baked beans through gently in a small pan.\n' +
      '4. Split each potato open, add a knob of vegan butter and fluff the inside with a fork.\n' +
      '5. Spoon over the hot beans and scatter with grated vegan cheese.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '2 large baking potatoes' },
      { rawName: 'Baked beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Vegan cheese', rawMeasure: '60g' },
      { rawName: 'Vegan butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna and sweetcorn jacket potato',
    servingsBase: 2,
    totalTimeMinutes: 85,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: DF_PESC,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes, rub with oil and salt and bake on the shelf for about 1 hour 15 minutes until fluffy.\n' +
      '2. Drain the tuna and mix in a bowl with the sweetcorn and the dairy-free mayonnaise.\n' +
      '3. Stir in the sliced spring onion and season with black pepper and a squeeze of lemon.\n' +
      '4. Split the baked potatoes open and fluff the insides with a fork.\n' +
      '5. Pile the tuna mayonnaise on top and serve with a few salad leaves.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '2 large baking potatoes' },
      { rawName: 'Tuna', rawMeasure: '1 tin (160g)' },
      { rawName: 'Sweetcorn', rawMeasure: '100g' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp dairy-free' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Curries, dals & stews ──────────────────────────────────────────────────
  {
    title: 'Chicken tikka masala (dairy-free)',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: DF,
    instructions:
      '1. Mix the coconut yoghurt with half the ginger garlic paste, the garam masala and a little salt, then toss in the diced chicken and leave to marinate for 20 minutes.\n' +
      '2. Thread the chicken onto skewers or spread on a tray and grill on high for 8–10 minutes until charred at the edges.\n' +
      '3. Meanwhile soften the chopped onion in the vegetable oil for 8 minutes, then stir in the remaining ginger garlic paste, the cumin, turmeric and chilli powder.\n' +
      '4. Add the chopped tomatoes and cook down for 8 minutes, then pour in the coconut milk and simmer to a rich sauce.\n' +
      '5. Stir in the grilled chicken, simmer for 5 minutes, season and finish with coriander. Serve with rice or naan.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g, diced' },
      { rawName: 'Coconut yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chana masala',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: DF_VEGAN,
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
    dietLabels: DF_VEGAN,
    instructions:
      '1. Rinse the lentils well, then tip into a pan with the turmeric and plenty of water. Bring to the boil, skim, and simmer for 25–30 minutes until soft and soupy, stirring now and then.\n' +
      '2. Season the dal with salt and beat smooth, loosening with a little water to a thick pouring consistency.\n' +
      '3. For the tarka, heat the vegetable oil in a small pan and fry the cumin and mustard seeds until they pop.\n' +
      '4. Add the sliced garlic and chilli and fry until the garlic turns golden, then stir in the garam masala off the heat.\n' +
      '5. Pour the sizzling tarka over the dal, scatter with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g red lentils' },
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
    title: 'Thai green chicken curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: DF,
    instructions:
      '1. Fry the Thai green curry paste in the vegetable oil for a minute until fragrant.\n' +
      '2. Add the sliced chicken thigh and stir to coat, cooking for 3–4 minutes until sealed.\n' +
      '3. Pour in the coconut milk, add the lime leaves and bring to a gentle simmer.\n' +
      '4. Add the sliced aubergine and green beans and simmer for 12–15 minutes until the chicken is cooked and the vegetables tender.\n' +
      '5. Season with fish sauce and a squeeze of lime, scatter with basil and serve with rice.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g, sliced' },
      { rawName: 'Thai green curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Green beans', rawMeasure: '150g' },
      { rawName: 'Lime leaves', rawMeasure: '3' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Thai green vegetable curry with tofu',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: DF_VEGAN,
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
    title: 'Thai red prawn curry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: DF_PESC,
    instructions:
      '1. Fry the Thai red curry paste in the vegetable oil for a minute until fragrant.\n' +
      '2. Pour in the coconut milk, add the lime leaves and bring to a gentle simmer.\n' +
      '3. Add the sliced pepper and the sugar snap peas and simmer for 5 minutes until just tender.\n' +
      '4. Stir in the prawns and cook for 3–4 minutes until pink and just cooked through.\n' +
      '5. Season with fish sauce and lime juice, scatter with coriander and serve with jasmine rice.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '400g raw' },
      { rawName: 'Thai red curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Mangetout', rawMeasure: '100g' },
      { rawName: 'Lime leaves', rawMeasure: '3' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Aubergine and chickpea curry',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: DF_VEGAN,
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
    title: 'Sweet potato and spinach curry',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: DF_VEGAN,
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
    title: 'Beef and coconut rendang',
    servingsBase: 4,
    totalTimeMinutes: 150,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: DF,
    instructions:
      '1. Blend the onion, garlic, ginger and chilli to a rough paste with a splash of water.\n' +
      '2. Fry the paste in the vegetable oil for 5 minutes until fragrant, then stir in the curry powder and cinnamon.\n' +
      '3. Add the diced beef steak and turn to coat, then pour in the coconut milk and add the lemongrass and lime leaves.\n' +
      '4. Simmer gently, uncovered, for about 2 hours, stirring now and then, until the beef is meltingly tender and the sauce dark and thick.\n' +
      '5. Season well and serve with steamed rice.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '700g, diced' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Chilli', rawMeasure: '2' },
      { rawName: 'Lemongrass', rawMeasure: '2 stalks' },
      { rawName: 'Lime leaves', rawMeasure: '4' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
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
    dietLabels: DF_VEGAN,
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
    title: 'Beef chilli con carne (dairy-free)',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: DF,
    instructions:
      '1. Brown the minced beef in a large pan over a high heat, breaking it up, then lift out, leaving the fat behind.\n' +
      '2. Soften the chopped onion and pepper for 8 minutes, then stir in the garlic, cumin, smoked paprika and chilli powder.\n' +
      '3. Return the beef, add the tomato purée and chopped tomatoes and pour in a splash of stock.\n' +
      '4. Tip in the drained kidney beans and simmer gently for 25–30 minutes until rich and thick.\n' +
      '5. Season well, stir through coriander and serve with rice and a spoonful of dairy-free yoghurt.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Coconut yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Moroccan chicken and apricot tagine',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: DF,
    instructions:
      '1. Brown the chicken thighs in the olive oil in a wide pan, then lift out and set aside.\n' +
      '2. Soften the chopped onion in the same pan for 8 minutes, then stir in the garlic and ras el hanout and cook for a minute.\n' +
      '3. Return the chicken, pour in the chopped tomatoes and stock, and add the dried apricots.\n' +
      '4. Cover and simmer gently for 35–40 minutes until the chicken is tender and the sauce thickened.\n' +
      '5. Season, finish with a squeeze of lemon and coriander, and serve with couscous.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
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
    title: 'Butternut squash and chickpea tagine',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: DF_VEGAN,
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
    title: 'Lentil and vegetable stew',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
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
    title: 'Sausage and butter bean casserole',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: DF,
    instructions:
      '1. Brown the sausages in the olive oil in a wide pan, then lift out and set aside.\n' +
      '2. Soften the chopped onion and pepper in the same pan for 8 minutes, then stir in the garlic and smoked paprika.\n' +
      '3. Add the tomato purée and chopped tomatoes and pour in the stock, then return the sausages.\n' +
      '4. Tip in the drained cannellini beans and simmer gently for 25 minutes until thick and the sausages are cooked through.\n' +
      '5. Season well, scatter with parsley and serve with crusty bread.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '8' },
      { rawName: 'Cannellini beans', rawMeasure: '2 tins (800g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
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
    dietLabels: DF_VEGAN,
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
    dietLabels: DF_VEGAN,
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
    title: 'Beef and root vegetable casserole',
    servingsBase: 4,
    totalTimeMinutes: 150,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: DF,
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Toss the diced beef steak in the seasoned flour and brown in batches in the olive oil in a casserole, then set aside.\n' +
      '2. Soften the chopped onion, carrot and swede in the same pan for 10 minutes, then stir in the garlic and tomato purée.\n' +
      '3. Pour in the ale and stock, stirring, and return the beef with the thyme and bay leaves.\n' +
      '4. Cover and braise in the oven for about 2 hours until the beef is meltingly tender and the sauce rich.\n' +
      '5. Season well and serve with mash or crusty bread.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '700g, diced' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Swede', rawMeasure: '300g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Ale', rawMeasure: '300ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Black bean and sweetcorn stew',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: DF_VEGAN,
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
    dietLabels: DF_VEGAN,
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
    title: 'Spaghetti with fresh tomato and basil sauce',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Soften the chopped onion in the olive oil for 6–8 minutes, then add the garlic for a minute.\n' +
      '2. Tip in the chopped tomatoes and tomato purée, season, and simmer gently for 15 minutes until thick and rich.\n' +
      '3. Meanwhile cook the spaghetti in well-salted boiling water until al dente, reserving a little cooking water.\n' +
      '4. Tear most of the basil into the sauce, then toss the drained pasta through, loosening with pasta water.\n' +
      '5. Serve scattered with the remaining basil and a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (800g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spaghetti bolognese (dairy-free)',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: DF,
    instructions:
      '1. Brown the minced beef in a large pan over a high heat, breaking it up, then lift out, leaving the fat behind.\n' +
      '2. Soften the finely chopped onion, carrot and celery in the olive oil for 10 minutes, then add the garlic.\n' +
      '3. Return the beef, stir in the tomato purée, then pour in the chopped tomatoes and a splash of stock.\n' +
      '4. Simmer gently for 30–40 minutes, stirring now and then, until rich and thick; season well.\n' +
      '5. Meanwhile cook the spaghetti until al dente, drain and toss through the sauce. Serve with torn basil.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
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
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Toss the diced courgette, pepper, red onion and aubergine with olive oil and season, then roast for 25–30 minutes until soft and caramelised.\n' +
      '2. Meanwhile warm the passata in a pan with the garlic and a pinch of chilli flakes, and simmer for 10 minutes.\n' +
      '3. Cook the penne until al dente and drain, keeping a little cooking water.\n' +
      '4. Fold the roasted vegetables and pasta through the tomato sauce, loosening with a splash of pasta water.\n' +
      '5. Season, tear over basil and serve.',
    rawLines: [
      { rawName: 'Penne pasta', rawMeasure: '400g' },
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
    title: 'Creamy dairy-free mushroom pasta',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Cook the pasta in well-salted boiling water until al dente, reserving a little cooking water before draining.\n' +
      '2. Meanwhile fry the sliced mushrooms in the olive oil over a high heat until golden and any moisture has gone.\n' +
      '3. Add the garlic and thyme and cook for a minute, then pour in the oat milk and let it bubble and reduce slightly.\n' +
      '4. Stir in a spoonful of cashew butter and the nutritional yeast to enrich the sauce, loosening with pasta water until silky.\n' +
      '5. Fold the drained pasta through, season well and finish with chopped parsley.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '400g' },
      { rawName: 'Mushroom', rawMeasure: '400g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oat milk', rawMeasure: '300ml' },
      { rawName: 'Cashews', rawMeasure: '50g' },
      { rawName: 'Nutritional yeast', rawMeasure: '2 tbsp' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and chilli linguine',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: DF_PESC,
    instructions:
      '1. Cook the linguine in well-salted boiling water until al dente, reserving a little cooking water before draining.\n' +
      '2. Meanwhile warm the olive oil in a wide pan with the sliced garlic and chilli flakes until fragrant.\n' +
      '3. Add the prawns and cook for 2–3 minutes until just pink, then pour in a splash of white wine and let it bubble.\n' +
      '4. Toss the drained linguine through with the cherry tomatoes and a splash of pasta water.\n' +
      '5. Stir through the chopped parsley, season with a squeeze of lemon and serve.',
    rawLines: [
      { rawName: 'Linguine', rawMeasure: '400g' },
      { rawName: 'Prawns', rawMeasure: '300g raw' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1 tsp' },
      { rawName: 'White wine', rawMeasure: '75ml' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable and chickpea pilaf',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: DF_VEGAN,
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
    title: 'Mushroom and pea risotto (dairy-free)',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Fry the sliced mushrooms in a little olive oil over a high heat until golden, then set aside.\n' +
      '2. Soften the chopped onion in the vegan butter and remaining oil for 6–8 minutes, then stir in the garlic.\n' +
      '3. Add the arborio rice and stir for a minute, then pour in the white wine and let it bubble away.\n' +
      '4. Add the hot stock a ladleful at a time, stirring, until the rice is creamy and just tender — about 18 minutes.\n' +
      '5. Stir through the mushrooms, peas and nutritional yeast, season, and finish with a knob of vegan butter and chopped parsley.',
    rawLines: [
      { rawName: 'Arborio rice', rawMeasure: '300g' },
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'White wine', rawMeasure: '100ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Nutritional yeast', rawMeasure: '2 tbsp' },
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
    dietLabels: DF_VEGAN,
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
    dietLabels: DF_VEGAN,
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
    title: 'Egg fried rice with vegetables',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: DF_VEG,
    instructions:
      '1. Beat the eggs and cook in a little sesame oil in a hot wok to a loose scramble, then lift out and set aside.\n' +
      '2. Stir-fry the chopped onion, diced carrot and pepper over a high heat for 3–4 minutes.\n' +
      '3. Add the garlic and ginger and cook for a minute, then tip in the cooked, cold rice and toss over the heat to separate and warm through.\n' +
      '4. Return the egg with the peas and sweetcorn and stir-fry for 2–3 minutes.\n' +
      '5. Season with soy sauce, scatter with sliced spring onion and serve.',
    rawLines: [
      { rawName: 'Rice', rawMeasure: '300g cooked' },
      { rawName: 'Egg', rawMeasure: '3' },
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
    title: 'Singapore-style noodles with prawns',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: DF_PESC,
    instructions:
      '1. Soak the rice vermicelli in just-boiled water until soft, then drain well.\n' +
      '2. Stir-fry the sliced pepper, carrot and pak choi in the sesame oil over a high heat for 3 minutes.\n' +
      '3. Add the garlic, ginger and curry powder and cook for a minute until fragrant, then add the prawns and cook for 2–3 minutes until pink.\n' +
      '4. Tip in the drained noodles and the bean sprouts, then toss with the soy sauce until everything is coated and hot.\n' +
      '5. Finish with sliced spring onion and a squeeze of lime.',
    rawLines: [
      { rawName: 'Rice vermicelli', rawMeasure: '250g' },
      { rawName: 'Prawns', rawMeasure: '200g' },
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
    dietLabels: DF_VEGAN,
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
    title: 'Chicken chow mein',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: DF,
    instructions:
      '1. Cook the noodles to packet instructions, drain and toss with a little sesame oil to stop them sticking.\n' +
      '2. Stir-fry the sliced chicken breast in the sesame oil over a high heat for 4–5 minutes until cooked through, then lift out.\n' +
      '3. Stir-fry the sliced pepper, carrot and cabbage for 3 minutes, then add the garlic and ginger.\n' +
      '4. Return the chicken and noodles, pour over the soy sauce and hoisin sauce, and toss until everything is coated and hot.\n' +
      '5. Finish with sliced spring onion and a few bean sprouts, and serve straight away.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '400g, sliced' },
      { rawName: 'Noodles', rawMeasure: '250g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Cabbage', rawMeasure: '150g' },
      { rawName: 'Bean sprouts', rawMeasure: '100g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Hoisin sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Pad Thai-style rice noodles with prawns',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: DF_PESC,
    instructions:
      '1. Soak the rice vermicelli in just-boiled water until pliable, then drain.\n' +
      '2. Whisk the tamarind paste, fish sauce and a little sugar into a sauce.\n' +
      '3. Fry the garlic and sliced spring onion briefly in the vegetable oil, then add the prawns and cook for 2 minutes until pink.\n' +
      '4. Push to one side and scramble the beaten egg, then add the drained noodles and the sauce and toss over a high heat until coated.\n' +
      '5. Toss through the bean sprouts and serve with crushed peanuts and lime wedges.',
    rawLines: [
      { rawName: 'Rice vermicelli', rawMeasure: '250g flat rice noodles' },
      { rawName: 'Prawns', rawMeasure: '250g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Bean sprouts', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Tamarind paste', rawMeasure: '2 tbsp' },
      { rawName: 'Peanuts', rawMeasure: '40g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Fish sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sugar', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },

  // ── Mains: meat, fish & roasts ─────────────────────────────────────────────
  {
    title: 'Roast chicken with herb-rubbed skin',
    servingsBase: 4,
    totalTimeMinutes: 110,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: DF,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the chicken in a roasting tin, rub all over with olive oil and the chopped rosemary and thyme, and season well. Tuck the lemon halves inside.\n' +
      '2. Roast for about 1 hour 20 minutes, basting once or twice, until the juices run clear. Rest, loosely covered, for 15 minutes.\n' +
      '3. Meanwhile parboil the potatoes for 8 minutes, drain and rough up, then roast in hot oil for 45–50 minutes until crisp.\n' +
      '4. Boil the carrots and peas until just tender.\n' +
      '5. For the gravy, stir the flour into the chicken pan juices, then whisk in the stock and simmer until thickened. Carve the chicken and serve with the potatoes, vegetables and gravy.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1 (about 1.5kg)' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Carrot', rawMeasure: '4' },
      { rawName: 'Peas', rawMeasure: '200g' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemon and garlic roast chicken thighs',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: DF,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the chicken thighs in a roasting tin with the lemon wedges, whole garlic cloves and halved new potatoes.\n' +
      '2. Drizzle generously with olive oil, scatter over the oregano and season well, turning everything to coat.\n' +
      '3. Roast for 40–45 minutes, turning once, until the chicken skin is crisp and golden and the potatoes are tender.\n' +
      '4. Scatter the cherry tomatoes in for the last 10 minutes until softened and blistered.\n' +
      '5. Squeeze over the roasted lemon, scatter with parsley and serve.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Potato', rawMeasure: '600g new potatoes' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '6 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: "Shepherd's pie with dairy-free mash",
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: DF,
    instructions:
      '1. Heat a splash of olive oil in a large pan and brown the minced lamb over a high heat, breaking it up. Lift out and set aside.\n' +
      '2. Lower the heat, add the onion, carrot and celery and soften for 8–10 minutes. Stir in the tomato purée and cook for a minute.\n' +
      '3. Return the lamb, pour in the stock and Worcestershire sauce, season, then simmer gently for 25 minutes until thick. Stir through the peas.\n' +
      '4. Meanwhile boil the potatoes until tender, drain well, then mash with the vegan butter and a splash of oat milk; season.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Tip the lamb into a baking dish, spoon over the mash, fork the top and bake for 25–30 minutes until golden.',
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
      { rawName: 'Vegan butter', rawMeasure: '40g' },
      { rawName: 'Oat milk', rawMeasure: '60ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bangers and dairy-free mash with onion gravy',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: DF,
    instructions:
      '1. Fry the sausages gently in a little vegetable oil for 15–20 minutes, turning, until browned all over and cooked through.\n' +
      '2. Meanwhile boil the potatoes in salted water until tender, drain well, then mash with the vegan butter and oat milk and season.\n' +
      '3. For the gravy, soften the sliced onions in the same pan until deep gold, stir in the flour, then gradually add the stock. Simmer until thickened and glossy.\n' +
      '4. Pile the mash onto plates, top with the sausages and pour over plenty of onion gravy.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '8' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Vegan butter', rawMeasure: '40g' },
      { rawName: 'Oat milk', rawMeasure: '60ml' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pan-fried salmon with crushed new potatoes',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: DF_PESC,
    instructions:
      '1. Boil the new potatoes until tender, drain, then crush roughly with a little olive oil, chopped chives and seasoning.\n' +
      '2. Pat the salmon fillets dry and season well.\n' +
      '3. Heat a little olive oil in a non-stick pan and fry the salmon skin-side down for 4 minutes until crisp, then turn and cook for 2 minutes more.\n' +
      '4. Steam or boil the green beans until just tender.\n' +
      '5. Serve the salmon over the crushed potatoes with the beans and a wedge of lemon.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4' },
      { rawName: 'Potato', rawMeasure: '600g new potatoes' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked cod with tomatoes and olives',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: DF_PESC,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Soften the sliced onion and garlic in the olive oil for 6 minutes in an ovenproof pan.\n' +
      '2. Add the cherry tomatoes, olives and a pinch of chilli flakes and cook for a few minutes until the tomatoes begin to slump.\n' +
      '3. Nestle the white fish fillets into the sauce and spoon a little over the top.\n' +
      '4. Bake for 12–15 minutes until the fish is opaque and flakes easily.\n' +
      '5. Scatter with parsley, finish with a squeeze of lemon and serve with crusty bread.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4' },
      { rawName: 'Cherry tomato', rawMeasure: '300g' },
      { rawName: 'Olives', rawMeasure: '75g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Honey and mustard glazed gammon',
    servingsBase: 6,
    totalTimeMinutes: 130,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: DF,
    instructions:
      '1. Sit the gammon joint in a large pan with the onion, bay leaves and peppercorns, cover with cold water and bring to the boil.\n' +
      '2. Lower the heat and simmer gently for about 1 hour 30 minutes, topping up with water as needed. Lift out and let it cool a little.\n' +
      '3. Heat the oven to 200°C (fan 180°C). Snip off the skin, leaving a layer of fat, and score it into diamonds.\n' +
      '4. Mix the honey and mustard and brush thickly over the fat, then stud with cloves.\n' +
      '5. Roast for 20–25 minutes, basting once, until sticky and deep gold. Rest before carving.',
    rawLines: [
      { rawName: 'Gammon steak', rawMeasure: '1.5kg joint' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Black pepper', rawMeasure: '1 tsp peppercorns' },
      { rawName: 'Honey', rawMeasure: '3 tbsp' },
      { rawName: 'Mustard', rawMeasure: '2 tbsp' },
      { rawName: 'Cloves', rawMeasure: '12' },
    ],
  },
  {
    title: 'Pork and apple traybake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: DF,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the halved new potatoes and red onion wedges with olive oil and season in a large roasting tin, and roast for 15 minutes.\n' +
      '2. Add the pork chops and apple wedges to the tin, scatter over the sage and a drizzle more oil, and season.\n' +
      '3. Roast for a further 25 minutes, turning the chops once, until the pork is cooked through and the potatoes golden.\n' +
      '4. Stir the wholegrain mustard through the pan juices.\n' +
      '5. Serve straight from the tin with the mustardy juices spooned over.',
    rawLines: [
      { rawName: 'Pork chop', rawMeasure: '4' },
      { rawName: 'Potato', rawMeasure: '600g new potatoes' },
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Sage', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Mustard', rawMeasure: '1 tbsp wholegrain' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef and black bean stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: DF,
    instructions:
      '1. Toss the sliced beef steak in a little cornflour and a splash of soy sauce.\n' +
      '2. Stir-fry the beef in the sesame oil over a high heat for 2–3 minutes until browned, then lift out.\n' +
      '3. Stir-fry the sliced pepper and onion for 3 minutes, then add the garlic and ginger.\n' +
      '4. Return the beef, stir in the black bean sauce and a splash of water, and toss until everything is glossy and hot.\n' +
      '5. Finish with sliced spring onion and serve with steamed rice.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '500g, sliced' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 green' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Black bean sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Sticky hoisin chicken with rice',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: DF,
    instructions:
      '1. Toss the diced chicken thigh in the cornflour.\n' +
      '2. Fry in the sesame oil over a high heat until golden and cooked through, then lift out.\n' +
      '3. Stir-fry the broccoli and pepper for 3 minutes, then add the garlic and ginger.\n' +
      '4. Whisk the hoisin sauce and soy sauce with a splash of water, return the chicken and pour in the sauce, tossing to a sticky glaze.\n' +
      '5. Scatter with sesame seeds and spring onion and serve with steamed rice.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g, diced' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Cornflour', rawMeasure: '2 tbsp' },
      { rawName: 'Hoisin sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Chicken fajitas with guacamole',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: DF,
    instructions:
      '1. Toss the sliced chicken breast with the smoked paprika, cumin, a squeeze of lime and a little oil.\n' +
      '2. Fry the chicken in a hot pan for 5–6 minutes until cooked through and lightly charred, then lift out.\n' +
      '3. Stir-fry the sliced peppers and onion in the same pan for 4–5 minutes until softened and caught at the edges, then return the chicken.\n' +
      '4. For the guacamole, mash the avocado with lime juice, a little chopped red onion and salt.\n' +
      '5. Warm the tortilla wraps and serve with the chicken, peppers and guacamole to fill at the table.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4, sliced' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2 (mixed colours)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Avocado', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Tortilla wrap', rawMeasure: '8' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb koftas with flatbreads',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: DF,
    instructions:
      '1. Mix the minced lamb with the grated onion, garlic, cumin, ground coriander and chopped mint, and season well.\n' +
      '2. Shape the mixture firmly around skewers into long koftas and chill for 10 minutes.\n' +
      '3. Grill or griddle the koftas for 8–10 minutes, turning, until browned and cooked through.\n' +
      '4. Mix the coconut yoghurt with a little lemon and mint for a cooling dip.\n' +
      '5. Serve the koftas in warm pitta with salad leaves, sliced tomato and the yoghurt dip.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Coconut yoghurt', rawMeasure: '150g' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Fish tacos with lime slaw',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: DF_PESC,
    instructions:
      '1. Toss the white fish fillets with the smoked paprika, cumin, a little oil and seasoning, then fry for 3–4 minutes each side until just cooked, and flake into chunks.\n' +
      '2. For the slaw, shred the cabbage and carrot and toss with lime juice, the dairy-free mayonnaise and a pinch of salt.\n' +
      '3. Mash the avocado roughly with a squeeze of lime.\n' +
      '4. Warm the corn tortillas in a dry pan.\n' +
      '5. Fill each tortilla with slaw, fish and avocado, and finish with coriander and a wedge of lime.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4' },
      { rawName: 'Corn tortillas', rawMeasure: '8' },
      { rawName: 'Cabbage', rawMeasure: '200g' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp dairy-free' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tofu and vegetable traybake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Press the tofu, cut into cubes and toss with the cornflour, soy sauce and a little oil.\n' +
      '2. Tip the diced sweet potato, pepper and red onion into a large roasting tin, drizzle with oil and season.\n' +
      '3. Roast for 15 minutes, then add the tofu and roast for a further 20–25 minutes, turning once, until everything is golden and crisp at the edges.\n' +
      '4. Drizzle with a little more soy sauce and a squeeze of lime.\n' +
      '5. Scatter with sesame seeds and spring onion and serve with rice.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g firm' },
      { rawName: 'Sweet potato', rawMeasure: '400g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cornflour', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey burgers with sweet potato wedges',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: DF,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Cut the sweet potatoes into wedges, toss with olive oil, smoked paprika and salt, and roast for 30–35 minutes, turning once.\n' +
      '2. Mix the turkey mince with the grated onion, garlic, breadcrumbs and a beaten egg, season well, and shape into four patties.\n' +
      '3. Fry the burgers in a little oil for 5–6 minutes each side until golden and cooked through.\n' +
      '4. Split the burger buns and spread with a little dairy-free mayonnaise.\n' +
      '5. Build the burgers with lettuce, tomato and the patties, and serve with the wedges.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Sweet potato', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Breadcrumbs', rawMeasure: '50g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Burger bun', rawMeasure: '4' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Mayonnaise', rawMeasure: '2 tbsp dairy-free' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Salads & sides ─────────────────────────────────────────────────────────
  {
    title: 'Dairy-free coleslaw',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: DF_VEG,
    instructions:
      '1. Finely shred the white cabbage and carrot and tip into a large bowl.\n' +
      '2. Add the thinly sliced onion and stir to combine.\n' +
      '3. Mix the dairy-free mayonnaise with a little mustard, a squeeze of lemon and seasoning.\n' +
      '4. Fold the dressing through the vegetables until evenly coated.\n' +
      '5. Chill for 15 minutes before serving so the flavours mingle.',
    rawLines: [
      { rawName: 'Cabbage', rawMeasure: '1/2 white cabbage' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1/2' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp dairy-free' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted vegetable and chickpea salad',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'Mediterranean',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Toss the diced aubergine, courgette, pepper and red onion with olive oil and season, then roast for 25–30 minutes until tender.\n' +
      '2. Add the drained chickpeas for the last 10 minutes to warm and crisp slightly.\n' +
      '3. Whisk the olive oil with the lemon juice and a little garlic for a dressing.\n' +
      '4. Tip the warm vegetables into a bowl with the rocket and pour over the dressing.\n' +
      '5. Toss gently, scatter with parsley and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Rocket', rawMeasure: '50g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tabbouleh',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'Middle-Eastern',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Pour boiling water over the bulgur wheat to just cover, then leave to soak for 15 minutes until tender, and drain off any excess.\n' +
      '2. Chop the parsley and mint very finely and tip into a large bowl.\n' +
      '3. Add the finely diced tomato, cucumber and spring onion.\n' +
      '4. Fork through the soaked bulgur, then dress with olive oil and plenty of lemon juice.\n' +
      '5. Season well and serve at room temperature.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '100g' },
      { rawName: 'Parsley', rawMeasure: '2 large bunches' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Crispy roast potatoes in olive oil',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Side',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Peel and cut the potatoes into large chunks.\n' +
      '2. Parboil in salted water for 8–10 minutes until the edges soften, then drain and shake in the pan to rough up the surfaces.\n' +
      '3. Pour the olive oil into a roasting tin and heat in the oven until very hot.\n' +
      '4. Tip in the potatoes, turn to coat in the hot oil, add the rosemary and season.\n' +
      '5. Roast for 45–50 minutes, turning once, until deep golden and crisp. Season with salt and serve.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '1kg' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Garlic and herb sautéed greens',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Trim and roughly chop the kale and cabbage.\n' +
      '2. Blanch the greens in boiling salted water for 2 minutes, then drain well.\n' +
      '3. Warm the olive oil in a wide pan and soften the sliced garlic and chilli flakes for a minute.\n' +
      '4. Add the drained greens and toss over a high heat for 2–3 minutes until glossy and just tender.\n' +
      '5. Season, finish with a squeeze of lemon and serve.',
    rawLines: [
      { rawName: 'Kale', rawMeasure: '200g' },
      { rawName: 'Cabbage', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Dairy-free mashed potato',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Side',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Peel and chop the potatoes into even chunks and boil in salted water for 15–18 minutes until very tender.\n' +
      '2. Drain well and leave to steam-dry in the colander for a couple of minutes.\n' +
      '3. Return to the pan and mash thoroughly with the vegan butter.\n' +
      '4. Beat in the warm oat milk a little at a time until smooth and creamy.\n' +
      '5. Season generously with salt and pepper and serve hot.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Vegan butter', rawMeasure: '50g' },
      { rawName: 'Oat milk', rawMeasure: '100ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek-style salad with no feta',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Greek',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Cut the tomatoes into chunks and the cucumber into thick half-moons, and tip into a large bowl.\n' +
      '2. Add the sliced red onion, the olives and the pepper cut into strips.\n' +
      '3. Whisk the olive oil with the lemon juice and dried oregano.\n' +
      '4. Pour the dressing over and toss gently to coat.\n' +
      '5. Season with black pepper and serve with warm pitta.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 green' },
      { rawName: 'Olives', rawMeasure: '100g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Snacks & small plates ──────────────────────────────────────────────────
  {
    title: 'Classic hummus',
    servingsBase: 6,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Drain the chickpeas, reserving a little of the liquid, and tip into a food processor.\n' +
      '2. Add the tahini, garlic, lemon juice and a good pinch of salt.\n' +
      '3. Blend to a thick paste, then trickle in the olive oil and enough chickpea liquid to loosen to a smooth, creamy dip.\n' +
      '4. Taste and adjust with more lemon or salt.\n' +
      '5. Spread into a bowl, swirl the top, drizzle with olive oil and dust with paprika to serve.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (800g)' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Paprika', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Guacamole with corn chips',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Mexican',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Scoop the avocado flesh into a bowl and mash roughly with a fork, leaving some texture.\n' +
      '2. Stir in the finely diced red onion, tomato and chilli.\n' +
      '3. Add plenty of lime juice, the chopped coriander and a good pinch of salt.\n' +
      '4. Mix gently and taste, adding more lime or salt as needed.\n' +
      '5. Serve straight away with corn tortillas cut into triangles and baked until crisp.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '3 ripe' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Corn tortillas', rawMeasure: '4' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced roasted chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Drain and rinse the chickpeas, then pat thoroughly dry with a tea towel.\n' +
      '2. Toss in a bowl with the olive oil, smoked paprika, cumin and a good pinch of salt.\n' +
      '3. Spread out in a single layer on a baking tray.\n' +
      '4. Roast for 30–35 minutes, shaking once or twice, until deep golden and crunchy.\n' +
      '5. Cool a little — they crisp further as they sit — and serve as a snack or salad topper.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (800g)' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bruschetta with tomato and basil',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Italian',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Dice the tomatoes and tip into a bowl with the finely sliced garlic and torn basil.\n' +
      '2. Dress with olive oil and a pinch of salt and leave to sit for 10 minutes.\n' +
      '3. Toast or griddle thick slices of bread until charred and crisp.\n' +
      '4. Rub the warm toast with a cut clove of garlic and drizzle with olive oil.\n' +
      '5. Spoon the tomato mixture on top, finish with black pepper and serve at once.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4 ripe' },
      { rawName: 'Bread', rawMeasure: '8 slices ciabatta' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Desserts & bakes ───────────────────────────────────────────────────────
  {
    title: 'Dairy-free chocolate sponge cake',
    servingsBase: 8,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a 20cm tin. Whisk the flour, cocoa powder, sugar, baking powder and a pinch of salt in a bowl.\n' +
      '2. In a jug mix the soya milk, vegetable oil and vanilla, then stir in a little vinegar so it curdles slightly.\n' +
      '3. Beat the wet ingredients into the dry until smooth, then pour into the tin.\n' +
      '4. Bake for 30–35 minutes until risen and a skewer comes out clean. Cool in the tin for 10 minutes, then turn out.\n' +
      '5. Beat the vegan butter with the icing sugar and a little cocoa for a frosting, and spread over the cooled cake.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '225g' },
      { rawName: 'Cocoa powder', rawMeasure: '40g' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Soya milk', rawMeasure: '250ml' },
      { rawName: 'Vegetable oil', rawMeasure: '90ml' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Baking powder', rawMeasure: '2 tsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Vegan butter', rawMeasure: '100g' },
      { rawName: 'Icing sugar', rawMeasure: '200g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Coconut rice pudding',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Tip the pudding rice into a pan with the coconut milk and an equal amount of water.\n' +
      '2. Add the sugar and a pinch of cinnamon and bring slowly to a gentle simmer.\n' +
      '3. Cook over a low heat for 30–35 minutes, stirring often, until the rice is soft and creamy, loosening with a little more water if needed.\n' +
      '4. Stir in the vanilla.\n' +
      '5. Spoon into bowls and serve warm with a spoonful of jam or fresh berries.',
    rawLines: [
      { rawName: 'Pudding rice', rawMeasure: '150g' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Caster sugar', rawMeasure: '50g' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Raspberries', rawMeasure: '100g, to serve' },
    ],
  },
  {
    title: 'Apple and blackberry crumble (dairy-free)',
    servingsBase: 6,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Peel, core and slice the apples and tip into a baking dish with the blackberries, a little sugar and a squeeze of lemon.\n' +
      '2. For the crumble, rub the vegan butter into the flour until it resembles breadcrumbs.\n' +
      '3. Stir in the sugar and the oats for a little crunch.\n' +
      '4. Scatter the crumble evenly over the fruit, pressing lightly.\n' +
      '5. Bake for 35–40 minutes until the top is golden and the fruit bubbles at the edges. Serve with dairy-free custard or coconut yoghurt.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '4 (Bramley)' },
      { rawName: 'Blackberries', rawMeasure: '200g' },
      { rawName: 'Plain flour', rawMeasure: '150g' },
      { rawName: 'Vegan butter', rawMeasure: '80g' },
      { rawName: 'Oats', rawMeasure: '50g' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coconut yoghurt', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Vegan banana bread',
    servingsBase: 8,
    totalTimeMinutes: 70,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a loaf tin. Mash the bananas to a smooth purée.\n' +
      '2. Stir in the sugar, vegetable oil and almond milk until combined.\n' +
      '3. Fold in the flour, baking powder, bicarbonate of soda and cinnamon to a thick batter; do not overmix.\n' +
      '4. Pour into the tin and scatter over a few walnut pieces.\n' +
      '5. Bake for 50–55 minutes until risen and a skewer comes out clean. Cool in the tin before slicing.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '3 very ripe' },
      { rawName: 'Plain flour', rawMeasure: '250g' },
      { rawName: 'Caster sugar', rawMeasure: '120g' },
      { rawName: 'Almond milk', rawMeasure: '80ml' },
      { rawName: 'Vegetable oil', rawMeasure: '80ml' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1/2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Walnuts', rawMeasure: '50g' },
    ],
  },
  {
    title: 'Dark chocolate and avocado mousse',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Melt the plain chocolate gently in a heatproof bowl set over barely simmering water, then leave to cool slightly.\n' +
      '2. Scoop the ripe avocado flesh into a food processor with the cocoa powder, maple syrup and vanilla.\n' +
      '3. Add the melted chocolate and a small splash of almond milk and blend until completely smooth and glossy.\n' +
      '4. Taste and add a little more maple syrup if needed, then spoon into glasses.\n' +
      '5. Chill for at least an hour and serve topped with raspberries.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2 ripe' },
      { rawName: 'Plain chocolate', rawMeasure: '100g' },
      { rawName: 'Cocoa powder', rawMeasure: '2 tbsp' },
      { rawName: 'Maple syrup', rawMeasure: '3 tbsp' },
      { rawName: 'Almond milk', rawMeasure: '2 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Raspberries', rawMeasure: '100g' },
    ],
  },
  {
    title: 'Coconut and mango sorbet',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Blend the frozen mango chunks with the coconut milk in a food processor until thick and smooth.\n' +
      '2. Add a little maple syrup and a squeeze of lime and blend again to balance.\n' +
      '3. For a soft-serve texture, serve straight away.\n' +
      '4. For a firmer sorbet, spoon into a tub and freeze for 2–3 hours.\n' +
      '5. Scoop into bowls and serve with a wedge of lime.',
    rawLines: [
      { rawName: 'Mango', rawMeasure: '500g, frozen chunks' },
      { rawName: 'Coconut milk', rawMeasure: '150ml' },
      { rawName: 'Maple syrup', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
    ],
  },
  {
    title: 'Dairy-free flapjacks',
    servingsBase: 12,
    totalTimeMinutes: 40,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a square tin. Gently melt the vegan butter with the golden syrup and sugar in a pan until smooth.\n' +
      '2. Stir in the oats until thoroughly coated.\n' +
      '3. Press the mixture firmly and evenly into the lined tin.\n' +
      '4. Bake for 20–25 minutes until golden at the edges but still a little soft in the centre.\n' +
      '5. Cool in the tin, then cut into bars while still slightly warm.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '300g' },
      { rawName: 'Vegan butter', rawMeasure: '150g' },
      { rawName: 'Golden syrup', rawMeasure: '3 tbsp' },
      { rawName: 'Brown sugar', rawMeasure: '100g' },
    ],
  },
  {
    title: 'Lemon and almond drizzle cake',
    servingsBase: 8,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: DF_VEG,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a loaf tin. Beat the vegan butter and sugar until pale and fluffy.\n' +
      '2. Beat in the eggs one at a time, then fold in the flour, ground almonds and the zest of the lemons.\n' +
      '3. Loosen with a splash of almond milk to a soft dropping consistency, then spoon into the tin.\n' +
      '4. Bake for 40–45 minutes until risen and golden and a skewer comes out clean.\n' +
      '5. Mix the lemon juice with a little sugar and spoon over the warm cake so it soaks in. Cool before slicing.',
    rawLines: [
      { rawName: 'Vegan butter', rawMeasure: '180g' },
      { rawName: 'Caster sugar', rawMeasure: '180g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Self-raising flour', rawMeasure: '150g' },
      { rawName: 'Almonds', rawMeasure: '50g, ground' },
      { rawName: 'Almond milk', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '2' },
    ],
  },
  {
    title: 'Mixed berry coconut yoghurt pots',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Gently warm the frozen mixed berries in a small pan with a little sugar until they release their juices and form a loose compote, then cool.\n' +
      '2. Spoon a layer of coconut yoghurt into the bottom of four glasses.\n' +
      '3. Add a spoonful of the berry compote, then repeat the layers.\n' +
      '4. Top with a scatter of crushed almonds and a few fresh berries.\n' +
      '5. Chill briefly and serve cool.',
    rawLines: [
      { rawName: 'Coconut yoghurt', rawMeasure: '400g' },
      { rawName: 'Frozen mixed berries', rawMeasure: '250g' },
      { rawName: 'Blueberries', rawMeasure: '50g, fresh' },
      { rawName: 'Almonds', rawMeasure: '30g' },
      { rawName: 'Caster sugar', rawMeasure: '1 tbsp' },
    ],
  },
]
