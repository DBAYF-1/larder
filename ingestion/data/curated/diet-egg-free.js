// Curated EGG-FREE recipes for Larder (egg-allergy-safe by construction).
//
// Each record is culinary content ONLY — sources/curated.js (mapCurated) adds
// the source/sourceId/imageUrl boilerplate and generates an on-brand SVG image.
//
// Shape per record (same as data/curated/mains.js):
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }
//
// HARD RULE — every recipe here STRICTLY satisfies "Egg-free": it contains NO
// eggs and NO egg-derived ingredients. That means none of: Egg, Egg white,
// Egg yolk, Egg wash, Egg roll wrappers/rolls, Mayonnaise, Aioli, Vinaigrette
// (egg-emulsified), Custard / Custard powder (egg-set), Meringue nests,
// Marzipan made to egg, fresh egg pasta, or any batter/binder relying on egg.
// Where a dish would normally lean on egg (cakes, batters, binding, glaze,
// mayo dressings) it is rebuilt egg-free: mashed banana / bicarbonate-of-soda +
// acid for cake lift and bind, breadcrumbs + water to bind meatballs and
// koftas, dairy or plant milk for richness, tahini/oil/lemon dressings instead
// of mayonnaise, and dried-pasta canonicals (Spaghetti, Penne, Linguine,
// Lasagne sheets, Rice vermicelli, etc. — the dictionary's dried pastas, which
// are flour-and-water, not fresh egg pasta).
//
// NOTE: we deliberately do NOT use the "Flax egg" canonical even though it is a
// genuine vegan egg replacer — the pipeline's allergen scan matches /\begg/i on
// the canonical NAME, so "Flax egg" would be wrongly flagged contains-egg and
// the recipe would lose its auto-derived "Egg-free" health label. We reach the
// same bakes through egg-free binders that do not trip that scan.
//
// rawNames are drawn from the canonical dictionary (data/ingredients.js) so
// they resolve cleanly. NOTE on the pipeline's allergen keyword scan
// (pipeline/buildRecipe.js): the regex /\begg/i flags any canonical whose name
// STARTS a word with "egg" as contains-egg. So we never use an egg-named
// canonical here; "Egg-free" is then auto-derived as a health label from the
// absence of contains-egg. ("Aubergine" has no word boundary before "egg" and
// is safe.)
//
// dietLabels are tagged honestly — a dish that is also Vegetarian/Vegan/
// Pescatarian/Gluten-free/Dairy-free/Mediterranean/High-protein says so. The
// "Egg-free" + "Dairy-free"/"Gluten-free" health labels are auto-derived by
// the pipeline from the resolved ingredient lines; we author the recipes so
// that derivation is honest. Original British-English prose throughout.

export default [
  // ───────────────────────── Breakfast & brunch ─────────────────────────
  {
    title: 'Creamy porridge with banana and honey',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Tip the oats into a pan with the milk and a pinch of salt.\n' +
      '2. Bring slowly to a gentle simmer, stirring often so the base does not catch.\n' +
      '3. Cook for 5–6 minutes until thick and creamy, loosening with a splash more milk if needed.\n' +
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
      '1. Stir the oats, almond milk, chia-free thickening from the oats themselves, and a drizzle of honey-substitute maple together in a jar or bowl.\n' +
      '2. Fold in half the blueberries, cover and chill overnight (or at least 4 hours).\n' +
      '3. In the morning, loosen with a little more almond milk if you like it looser.\n' +
      '4. Top with the remaining berries and the raspberries and serve cold.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '120g' },
      { rawName: 'Almond milk', rawMeasure: '300ml' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Raspberries', rawMeasure: '80g' },
      { rawName: 'Golden syrup', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Beans on toast',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Warm the baked beans gently in a small pan, stirring now and then, until piping hot.\n' +
      '2. Toast the bread to your liking and spread lightly with butter.\n' +
      '3. Pile the beans onto the toast, season with black pepper and serve at once.',
    rawLines: [
      { rawName: 'Baked beans', rawMeasure: '400g' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled mushrooms and tomatoes on sourdough',
    servingsBase: 2,
    totalTimeMinutes: 18,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the olive oil in a frying pan and cook the mushrooms over a medium-high heat until golden and any liquid has cooked away.\n' +
      '2. Add the halved cherry tomatoes and the garlic and fry for 2–3 minutes until the tomatoes start to collapse.\n' +
      '3. Toast the crusty bread and rub lightly with the cut garlic if you like a sharper note.\n' +
      '4. Pile the mushrooms and tomatoes over the toast, scatter with parsley and season well.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '250g' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Crusty bread', rawMeasure: '4 slices' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Parsley', rawMeasure: '1 small handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Banana and oat breakfast muffins',
    servingsBase: 6,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a muffin tin with cases. There is no egg here — well-mashed ripe banana binds the crumb instead.\n' +
      '2. Mash the bananas to a smooth purée in a bowl, then beat in the milk, melted butter and sugar.\n' +
      '3. Fold in the flour, oats, baking powder and bicarbonate of soda until just combined; do not overmix.\n' +
      '4. Divide between the cases and bake for 20–22 minutes until risen and a skewer comes out clean.\n' +
      '5. Cool on a wire rack before eating.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '4 ripe' },
      { rawName: 'Plain flour', rawMeasure: '200g' },
      { rawName: 'Oats', rawMeasure: '60g' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '140ml' },
      { rawName: 'Butter', rawMeasure: '70g' },
      { rawName: 'Baking powder', rawMeasure: '2 tsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Smashed avocado on toast with lime',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Scoop the avocado flesh into a bowl and mash roughly with a fork.\n' +
      '2. Squeeze in the lime juice, add the chilli flakes and a good pinch of salt, and mix.\n' +
      '3. Toast the sourdough and trickle with a little olive oil.\n' +
      '4. Spread the avocado thickly over the toast and finish with extra chilli flakes and black pepper.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2 ripe' },
      { rawName: 'Crusty bread', rawMeasure: '4 slices' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Coconut and mango breakfast bowl',
    servingsBase: 2,
    totalTimeMinutes: 8,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Spoon the Greek yoghurt into two bowls.\n' +
      '2. Peel and dice the mango and scatter over the top.\n' +
      '3. Sprinkle with the desiccated coconut and the oats for crunch.\n' +
      '4. Finish with a trickle of honey and serve straight away.',
    rawLines: [
      { rawName: 'Greek yoghurt', rawMeasure: '300g' },
      { rawName: 'Mango', rawMeasure: '1' },
      { rawName: 'Desiccated coconut', rawMeasure: '2 tbsp' },
      { rawName: 'Oats', rawMeasure: '30g' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
    ],
  },

  // ───────────────────────── Lunch & light meals ─────────────────────────
  {
    title: 'Tomato and basil soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Soften the onion and garlic in the olive oil over a medium heat for 8 minutes until translucent.\n' +
      '2. Tip in the chopped tomatoes and passata, add the stock and bring to a simmer.\n' +
      '3. Cook gently for 20 minutes, then stir in most of the basil.\n' +
      '4. Blend until smooth, season to taste and loosen with a little water if needed.\n' +
      '5. Ladle into bowls, swirl through the double cream and scatter with the remaining basil.',
    rawLines: [
      { rawName: 'Chopped tomatoes', rawMeasure: '2 x 400g tins' },
      { rawName: 'Passata', rawMeasure: '200ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Basil', rawMeasure: '1 large handful' },
      { rawName: 'Double cream', rawMeasure: '3 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lentil and vegetable soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Soften the onion, carrot and celery in the olive oil for 10 minutes until sweet.\n' +
      '2. Stir in the cumin and cook for a minute, then add the lentils, chopped tomatoes and stock.\n' +
      '3. Bring to the boil, then simmer for 25–30 minutes until the lentils are tender.\n' +
      '4. Season well, stir through the parsley and serve with crusty bread.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1 litre' },
      { rawName: 'Parsley', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Hummus and roasted vegetable wrap',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegan', 'Vegetarian', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, pepper and red onion with the olive oil and a little salt on a tray.\n' +
      '2. Roast for 20–25 minutes until soft and lightly charred at the edges.\n' +
      '3. Warm the tortilla wraps briefly so they fold easily.\n' +
      '4. Spread each with a generous layer of hummus, pile in the roasted vegetables and scatter with rocket.\n' +
      '5. Roll up tightly, cut in half and serve.',
    rawLines: [
      { rawName: 'Tortilla wrap', rawMeasure: '2 large' },
      { rawName: 'Hummus', rawMeasure: '150g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Rocket', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jacket potato with beans and cheese',
    servingsBase: 2,
    totalTimeMinutes: 75,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes all over, rub with a little oil and salt, and bake directly on the shelf for about an hour until crisp outside and fluffy within.\n' +
      '2. Towards the end, warm the baked beans gently in a pan.\n' +
      '3. Split the potatoes open, add a knob of butter and fluff the insides with a fork.\n' +
      '4. Spoon over the hot beans, top with grated Cheddar and season with black pepper.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '2 large baking' },
      { rawName: 'Baked beans', rawMeasure: '400g' },
      { rawName: 'Cheddar cheese', rawMeasure: '60g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea and avocado salad',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Drain and rinse the chickpeas and tip into a bowl.\n' +
      '2. Add the diced avocado, halved cherry tomatoes, finely sliced red onion and chopped cucumber.\n' +
      '3. Whisk the olive oil with the lemon juice and a pinch of salt to make a quick dressing (no egg — just oil and citrus).\n' +
      '4. Pour over the salad, fold gently to coat and scatter with parsley.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Parsley', rawMeasure: '1 handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek salad with feta',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Cut the tomatoes into wedges and the cucumber into thick half-moons; tip into a large bowl.\n' +
      '2. Add the sliced red onion, olives and chunks of feta.\n' +
      '3. Trickle over the olive oil, add the oregano and a squeeze of lemon, then season with black pepper.\n' +
      '4. Toss very gently so the feta keeps its shape and serve at once.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Feta', rawMeasure: '200g' },
      { rawName: 'Olives', rawMeasure: '100g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced carrot and red lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Soften the onion in the olive oil for 8 minutes, then stir in the cumin and a pinch of chilli flakes.\n' +
      '2. Add the chopped carrots and the lentils, then pour in the stock.\n' +
      '3. Simmer for 25 minutes until the carrots and lentils are completely soft.\n' +
      '4. Blend until smooth, season and finish with a squeeze of lemon. Serve hot.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '500g' },
      { rawName: 'Lentils', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1 litre' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna and white bean salad',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Pescatarian', 'Gluten-free', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Drain and rinse the cannellini beans and tip into a bowl.\n' +
      '2. Flake in the drained tuna and add the sliced red onion and halved cherry tomatoes.\n' +
      '3. Dress with the olive oil, lemon juice and a pinch of salt — an oil-and-lemon dressing, no mayonnaise.\n' +
      '4. Fold through the parsley and serve with crusty bread.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '1 x 160g tin' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Parsley', rawMeasure: '1 handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Falafel and salad pitta',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Mediterranean'],
    instructions:
      '1. Make up the falafel mix with water as the packet directs and shape into small patties.\n' +
      '2. Shallow-fry in the vegetable oil over a medium heat for 3–4 minutes each side until deep gold and crisp.\n' +
      '3. Warm the pitta breads and split them open.\n' +
      '4. Stuff with shredded lettuce, sliced tomato and the falafel, then drizzle generously with tahini loosened with a little lemon and water.',
    rawLines: [
      { rawName: 'Falafel mix', rawMeasure: '200g' },
      { rawName: 'Pitta bread', rawMeasure: '2' },
      { rawName: 'Lettuce', rawMeasure: '1/2 head' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Tahini', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
    ],
  },
  {
    title: 'Caprese salad',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Slice the beef tomatoes and the mozzarella into rounds of similar thickness.\n' +
      '2. Arrange them overlapping on a plate, alternating tomato and cheese.\n' +
      '3. Tuck the basil leaves between the slices.\n' +
      '4. Trickle over the olive oil, season with salt and black pepper and serve.',
    rawLines: [
      { rawName: 'Beef tomato', rawMeasure: '3' },
      { rawName: 'Mozzarella', rawMeasure: '250g' },
      { rawName: 'Basil', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ───────────────────────── Dinner / mains ─────────────────────────
  {
    title: 'Spaghetti with tomato and garlic sauce',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegan', 'Vegetarian', 'Mediterranean'],
    instructions:
      '1. Bring a large pan of salted water to the boil and cook the spaghetti until al dente. (Dried spaghetti is flour and water — not fresh egg pasta — so the dish stays egg-free.)\n' +
      '2. Meanwhile, soften the garlic in the olive oil over a gentle heat for a minute until fragrant but not coloured.\n' +
      '3. Add the chopped tomatoes and a pinch of chilli flakes, then simmer for 12–15 minutes until thickened.\n' +
      '4. Drain the pasta, reserving a splash of the water, and toss through the sauce, loosening with the reserved water.\n' +
      '5. Season, stir through the basil and serve.',
    rawLines: [
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 x 400g tins' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Basil', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and vegetable stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Slice the chicken breast into thin strips and toss with a little cornflour.\n' +
      '2. Heat the vegetable oil in a wok over a high heat and stir-fry the chicken until golden and cooked through; lift out.\n' +
      '3. Add the peppers, broccoli and spring onion and stir-fry for 3–4 minutes until just tender.\n' +
      '4. Return the chicken, pour in the soy sauce and add the ginger and garlic; toss for a minute.\n' +
      '5. Serve over steamed rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Beef and vegetable chilli',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Brown the minced beef in a large pan over a high heat, breaking it up, then lift out.\n' +
      '2. Soften the onion, garlic and peppers in the pan for 8 minutes.\n' +
      '3. Stir in the cumin, chilli powder and smoked paprika and cook for a minute.\n' +
      '4. Return the beef, add the chopped tomatoes, kidney beans and stock, then simmer for 30 minutes until rich.\n' +
      '5. Season and serve with rice.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Kidney beans', rawMeasure: '1 x 400g tin' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 x 400g tins' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea and spinach curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the onion in the vegetable oil for 8 minutes, then add the garlic and ginger and cook for a minute.\n' +
      '2. Stir in the curry powder and cook until fragrant.\n' +
      '3. Add the chopped tomatoes and chickpeas, then simmer for 15 minutes.\n' +
      '4. Stir through the spinach until wilted and pour in the coconut milk; warm through.\n' +
      '5. Season and serve with rice or naan.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 x 400g tins' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked salmon with lemon and herbs',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian', 'Gluten-free', 'High-protein', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the salmon fillets on a lined tray.\n' +
      '2. Trickle with olive oil, scatter over the dill and lay lemon slices on top.\n' +
      '3. Season well and bake for 12–15 minutes until the fish flakes easily.\n' +
      '4. Serve with new potatoes and green beans.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Dill', rawMeasure: '1 small handful' },
      { rawName: 'New potatoes', rawMeasure: '400g' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sausage and bean casserole',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Dairy-free'],
    instructions:
      '1. Brown the sausages in the olive oil in a flameproof casserole, then lift out.\n' +
      '2. Soften the onion, carrot and garlic in the same pan for 8 minutes.\n' +
      '3. Stir in the smoked paprika, then add the chopped tomatoes, cannellini beans and stock.\n' +
      '4. Return the sausages, cover and simmer for 25–30 minutes until thick.\n' +
      '5. Season, scatter with parsley and serve with crusty bread.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '8' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Parsley', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roast chicken with vegetables',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the chicken in a roasting tin, rub with olive oil and season inside and out.\n' +
      '2. Tuck the lemon halves and a few sprigs of thyme into the cavity.\n' +
      '3. Scatter the chopped potatoes, carrots and onion around the bird and toss in a little more oil.\n' +
      '4. Roast for 1 hour 20 minutes, basting once, until the juices run clear.\n' +
      '5. Rest the chicken for 10 minutes before carving and serve with the roast vegetables.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1.5kg' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Carrot', rawMeasure: '4' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Thyme', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable and coconut Thai green curry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Fry the Thai green curry paste in the vegetable oil for a minute until fragrant.\n' +
      '2. Pour in the coconut milk and bring to a gentle simmer.\n' +
      '3. Add the butternut squash and cook for 10 minutes, then add the broccoli and mangetout.\n' +
      '4. Simmer for a further 6–8 minutes until everything is tender.\n' +
      '5. Finish with a squeeze of lime and serve with rice.',
    rawLines: [
      { rawName: 'Thai green curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Butternut squash', rawMeasure: '500g' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Mangetout', rawMeasure: '100g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Penne with roasted vegetables',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, aubergine, peppers and red onion with olive oil on a tray and roast for 25 minutes.\n' +
      '2. Cook the penne in salted boiling water until al dente, then drain, keeping a splash of the water.\n' +
      '3. Stir the roasted vegetables and the passata through the pasta, loosening with the reserved water.\n' +
      '4. Season, scatter with basil and grated Parmesan and serve.',
    rawLines: [
      { rawName: 'Penne', rawMeasure: '400g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Passata', rawMeasure: '300ml' },
      { rawName: 'Basil', rawMeasure: '1 handful' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cod with crushed potatoes and peas',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Boil the new potatoes until tender, then drain and crush roughly with a fork and a little butter.\n' +
      '2. Meanwhile season the white fish fillets and pan-fry in olive oil for 3–4 minutes each side until just cooked.\n' +
      '3. Cook the peas in boiling water for 3 minutes, then drain.\n' +
      '4. Pile the crushed potatoes and peas onto plates, sit the fish on top and finish with a squeeze of lemon.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2' },
      { rawName: 'New potatoes', rawMeasure: '400g' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb and apricot tagine',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Brown the diced lamb in the olive oil in a heavy pan, then lift out.\n' +
      '2. Soften the onion and garlic, then stir in the ras el hanout and cinnamon and cook for a minute.\n' +
      '3. Return the lamb, add the chopped tomatoes, dried apricots and stock, then cover and simmer very gently for 1½ hours until meltingly tender.\n' +
      '4. Season, scatter with coriander and serve with couscous-free quinoa or rice.',
    rawLines: [
      { rawName: 'Lamb', rawMeasure: '700g diced' },
      { rawName: 'Dried apricots', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ras el hanout', rawMeasure: '2 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Coriander', rawMeasure: '1 handful' },
      { rawName: 'Quinoa', rawMeasure: '250g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and garlic linguine',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Pescatarian', 'High-protein', 'Mediterranean', 'Dairy-free'],
    instructions:
      '1. Cook the linguine in salted boiling water until al dente.\n' +
      '2. Meanwhile, gently warm the garlic and chilli flakes in the olive oil until fragrant.\n' +
      '3. Add the prawns and cook for 2–3 minutes until pink and just cooked.\n' +
      '4. Drain the pasta, reserving a splash of water, and toss through the prawns with a squeeze of lemon and the parsley. Loosen with the pasta water and serve.',
    rawLines: [
      { rawName: 'Linguine', rawMeasure: '200g' },
      { rawName: 'Prawns', rawMeasure: '250g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable paella',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Soften the onion, garlic and peppers in the olive oil in a wide pan for 8 minutes.\n' +
      '2. Stir in the smoked paprika and saffron, then add the paella rice and turn to coat.\n' +
      '3. Pour in the hot stock and the chopped tomatoes, then simmer without stirring for 18–20 minutes until the rice is tender and the liquid absorbed.\n' +
      '4. Scatter over the peas in the last 5 minutes, season and finish with lemon wedges.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '300g' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 800ml' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork and apple traybake',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the pork chops on a large tray.\n' +
      '2. Scatter around the wedged apples, the chunky potatoes and the red onion.\n' +
      '3. Trickle with olive oil, season and scatter over the thyme.\n' +
      '4. Roast for 35–40 minutes, turning once, until the pork is cooked and the potatoes are golden.',
    rawLines: [
      { rawName: 'Pork chop', rawMeasure: '4' },
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Potato', rawMeasure: '700g' },
      { rawName: 'Red onion', rawMeasure: '2' },
      { rawName: 'Thyme', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Black bean and sweet potato chilli',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the onion, garlic and pepper in the olive oil for 8 minutes.\n' +
      '2. Stir in the cumin, smoked paprika and chilli powder, then add the diced sweet potato.\n' +
      '3. Pour in the chopped tomatoes and black beans, add the stock and simmer for 25–30 minutes until the sweet potato is tender and the sauce thick.\n' +
      '4. Season, finish with a squeeze of lime and serve with rice.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '2 x 400g tins' },
      { rawName: 'Sweet potato', rawMeasure: '500g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Beef and ale stew with dumplings',
    servingsBase: 4,
    totalTimeMinutes: 150,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Toss the stewing beef in a little flour, then brown in batches in the vegetable oil in a casserole; lift out.\n' +
      '2. Soften the onion, carrot and celery, then return the beef and pour in the stout and stock.\n' +
      '3. Cover and simmer very gently for 1¾ hours until the beef is tender.\n' +
      '4. Rub the suet into the flour with a pinch of salt and enough cold water to make a soft dough; shape into small dumplings (no egg needed — suet pastry binds with water).\n' +
      '5. Sit the dumplings on top, cover and cook for 20 minutes more until risen and fluffy. Season and serve.',
    rawLines: [
      { rawName: 'Stewing beef', rawMeasure: '700g' },
      { rawName: 'Stout', rawMeasure: '330ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Plain flour', rawMeasure: '150g' },
      { rawName: 'Suet', rawMeasure: '75g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tofu and vegetable noodle stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Press the tofu, cut into cubes and toss with cornflour.\n' +
      '2. Fry in the vegetable oil over a high heat until golden on all sides, then lift out.\n' +
      '3. Stir-fry the pak choi, peppers and spring onion for 3 minutes, then add the cooked noodles.\n' +
      '4. Return the tofu, pour in the soy sauce and sweet chilli sauce, and toss to coat. Serve hot.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g' },
      { rawName: 'Noodles', rawMeasure: '300g' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Sweet chilli sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Chicken and chorizo rice',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Brown the chicken thighs in a wide pan, then lift out.\n' +
      '2. Fry the sliced chorizo until its oil runs, then soften the onion, garlic and pepper.\n' +
      '3. Stir in the smoked paprika and the rice, turning to coat in the oil.\n' +
      '4. Return the chicken, pour in the chopped tomatoes and stock, then cover and simmer for 20–25 minutes until the rice is tender.\n' +
      '5. Season and scatter with parsley.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Chorizo', rawMeasure: '150g' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Parsley', rawMeasure: '1 handful' },
    ],
  },
  {
    title: 'Aubergine and tomato bake',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Slice the aubergines, brush with olive oil and roast for 20 minutes until soft.\n' +
      '2. Meanwhile soften the garlic in olive oil, add the passata and simmer for 10 minutes; season and stir through basil.\n' +
      '3. Layer the aubergine and tomato sauce in a dish, finishing with sauce.\n' +
      '4. Scatter over the mozzarella and Parmesan and bake for 25 minutes until bubbling and golden.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '3' },
      { rawName: 'Passata', rawMeasure: '500ml' },
      { rawName: 'Mozzarella', rawMeasure: '125g' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Basil', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked haddock and leek risotto',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Soften the leek in the butter until silky, then stir in the rice and turn to coat.\n' +
      '2. Add the hot stock a ladleful at a time, stirring, until the rice is creamy and just tender (about 18 minutes).\n' +
      '3. Lay the smoked haddock on top for the last 6 minutes to poach in the steam, then flake it through.\n' +
      '4. Stir in the Parmesan and a squeeze of lemon, season and scatter with chives.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '350g' },
      { rawName: 'Paella rice', rawMeasure: '300g' },
      { rawName: 'Leek', rawMeasure: '2' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Chives', rawMeasure: '1 small handful' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1 litre' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey and vegetable meatballs in tomato sauce',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['High-protein', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Mix the turkey mince with the breadcrumbs, grated onion, garlic and oregano; the breadcrumbs and a splash of water bind the mixture without egg.\n' +
      '2. Roll into walnut-sized balls and brown in the olive oil; lift out.\n' +
      '3. Add the passata to the pan with a splash of water and simmer for 5 minutes.\n' +
      '4. Return the meatballs, cover and simmer for 15 minutes until cooked through.\n' +
      '5. Season, scatter with basil and serve over spaghetti.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Breadcrumbs', rawMeasure: '50g' },
      { rawName: 'Passata', rawMeasure: '500ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Basil', rawMeasure: '1 handful' },
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and spinach risotto',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Fry the mushrooms in a little olive oil until golden, then set aside.\n' +
      '2. Soften the onion and garlic in the butter, stir in the rice and turn to coat.\n' +
      '3. Add the hot stock a ladleful at a time, stirring, until the rice is creamy and tender.\n' +
      '4. Stir through the mushrooms and the spinach until wilted, then finish with Parmesan. Season and serve.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '300g' },
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1 litre' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb kofta with flatbread',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Mix the minced lamb with the grated onion, garlic, cumin and a little salt; squeeze and knead so the mixture binds without egg.\n' +
      '2. Shape around skewers or into ovals and chill for 10 minutes.\n' +
      '3. Grill or griddle for 8–10 minutes, turning, until browned and cooked through.\n' +
      '4. Serve in warm pitta with sliced tomato, red onion and a drizzle of tahini.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Tahini', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sweet potato and chickpea traybake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the diced sweet potato, chickpeas and red onion with olive oil, cumin and smoked paprika on a tray.\n' +
      '2. Roast for 30–35 minutes, turning once, until the sweet potato is soft and the chickpeas crisp.\n' +
      '3. Loosen the tahini with lemon juice and water to a pourable dressing.\n' +
      '4. Pile the roasted vegetables onto plates, drizzle with the tahini dressing and scatter with coriander.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '600g' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Tahini', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Fish pie with mashed potato',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Boil the potatoes until tender, then drain and mash with the butter and milk; season.\n' +
      '2. Gently poach the white fish and salmon in milk for 5 minutes, then lift out and flake, keeping the milk.\n' +
      '3. Make a quick sauce: melt butter, stir in cornflour slaked with a little of the poaching milk, then whisk in the rest until thickened.\n' +
      '4. Fold the fish, prawns and peas through the sauce and tip into a dish.\n' +
      '5. Top with the mash, fork the surface and bake at 200°C (fan 180°C) for 25–30 minutes until golden.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '300g' },
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Prawns', rawMeasure: '150g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Cornflour', rawMeasure: '2 tbsp' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cauliflower and chickpea curry',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the onion in vegetable oil, then add the garlic, ginger and curry powder and cook for a minute.\n' +
      '2. Add the cauliflower florets and turn to coat in the spices.\n' +
      '3. Pour in the chopped tomatoes and chickpeas, then simmer for 20 minutes until the cauliflower is tender.\n' +
      '4. Stir in the coconut milk, warm through, season and finish with coriander. Serve with rice.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Coriander', rawMeasure: '1 handful' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Sea bass with cherry tomatoes and olives',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Pescatarian', 'Gluten-free', 'High-protein', 'Mediterranean', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Scatter the cherry tomatoes, olives and garlic on a tray, trickle with olive oil and roast for 10 minutes.\n' +
      '2. Sit the sea bass fillets on top, season and add a squeeze of lemon.\n' +
      '3. Return to the oven for 8–10 minutes until the fish is just cooked and the tomatoes are bursting.\n' +
      '4. Scatter with basil and serve with crusty bread.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '2 fillets' },
      { rawName: 'Cherry tomato', rawMeasure: '250g' },
      { rawName: 'Olives', rawMeasure: '80g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: '1 small handful' },
      { rawName: 'Crusty bread', rawMeasure: '2 slices' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable and lentil cottage pie',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Soften the onion, carrot and celery in olive oil for 10 minutes.\n' +
      '2. Add the lentils, chopped tomatoes, stock and a dash of Worcestershire sauce, then simmer for 25 minutes until thick.\n' +
      '3. Meanwhile boil the potatoes until tender, drain and mash with butter and milk; season.\n' +
      '4. Tip the lentil mixture into a dish, top with the mash, fork the surface and bake at 200°C (fan 180°C) for 25 minutes until golden.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork and vegetable noodle soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Slice the pork tenderloin thinly and stir-fry in the sesame oil until coloured; lift out.\n' +
      '2. Soften the ginger and garlic in the pan, then pour in the stock and soy sauce and bring to a simmer.\n' +
      '3. Add the pak choi and the rice vermicelli and cook for 4–5 minutes until the noodles are tender.\n' +
      '4. Return the pork, scatter with spring onion and serve in deep bowls.',
    rawLines: [
      { rawName: 'Pork tenderloin', rawMeasure: '400g' },
      { rawName: 'Rice vermicelli', rawMeasure: '200g' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1.2 litres' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Stuffed peppers with rice and feta',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers and remove the seeds.\n' +
      '2. Mix the cooked rice with the chopped tomatoes, crumbled feta, olives, oregano and a little olive oil.\n' +
      '3. Spoon the filling into the pepper halves and sit them in a baking dish.\n' +
      '4. Cover with foil and bake for 30 minutes, then uncover and bake 10 minutes more until the peppers are soft. Scatter with parsley.',
    rawLines: [
      { rawName: 'Mixed peppers', rawMeasure: '4' },
      { rawName: 'Rice', rawMeasure: '200g cooked' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lasagne with rich tomato and beef ragu',
    servingsBase: 6,
    totalTimeMinutes: 100,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: [],
    instructions:
      '1. Brown the minced beef, then soften the onion, carrot, celery and garlic in the same pan.\n' +
      '2. Return the beef, add the chopped tomatoes, passata and a splash of stock, then simmer for 40 minutes until rich.\n' +
      '3. Make a white sauce: melt butter, stir in flour, then whisk in the milk until smooth and thickened; season.\n' +
      '4. Layer ragu, dried lasagne sheets (flour-and-water, not fresh egg pasta) and white sauce in a dish, finishing with sauce and grated Cheddar.\n' +
      '5. Bake at 190°C (fan 170°C) for 35–40 minutes until golden and bubbling. Rest before serving.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '600g' },
      { rawName: 'Lasagne sheets', rawMeasure: '250g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 x 400g tins' },
      { rawName: 'Passata', rawMeasure: '300ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi-free Mediterranean grain bowl',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Cook the bulgur wheat in plenty of boiling water until tender, then drain.\n' +
      '2. Roast the courgette and pepper with olive oil at 200°C (fan 180°C) for 20 minutes.\n' +
      '3. Toss the warm grains with the roasted vegetables, the chickpeas and chopped parsley.\n' +
      '4. Dress with olive oil, lemon and a pinch of sumac, then serve.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '200g' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Sumac', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ───────────────────────── Sides ─────────────────────────
  {
    title: 'Garlic and herb roast potatoes',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Parboil the chopped potatoes in salted water for 8 minutes, then drain and shake to roughen the edges.\n' +
      '2. Tip into a roasting tin with the hot vegetable oil and turn to coat.\n' +
      '3. Roast for 35–40 minutes, turning once, until crisp and golden.\n' +
      '4. Toss with the crushed garlic and rosemary in the last 5 minutes, then season and serve.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '1kg' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Minted pea and broad bean smash',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Cook the peas and broad beans in boiling water for 3 minutes, then drain.\n' +
      '2. Tip into a bowl with the butter, mint and a squeeze of lemon.\n' +
      '3. Crush roughly with a fork or potato masher to a coarse texture.\n' +
      '4. Season well and serve warm alongside fish or chicken.',
    rawLines: [
      { rawName: 'Peas', rawMeasure: '300g' },
      { rawName: 'Broad beans', rawMeasure: '200g' },
      { rawName: 'Mint', rawMeasure: '1 small handful' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted Mediterranean vegetables',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Chop the courgette, aubergine, peppers and red onion into chunks.\n' +
      '2. Toss on a large tray with the olive oil, garlic and oregano.\n' +
      '3. Roast for 30 minutes, turning once, until soft and caramelised at the edges.\n' +
      '4. Season and finish with a squeeze of lemon.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tomato, red onion and basil salad',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Side',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Slice the tomatoes and arrange on a platter.\n' +
      '2. Scatter over the thinly sliced red onion and the basil.\n' +
      '3. Whisk the olive oil with a little vinegar and salt and spoon over (an oil-and-vinegar dressing, no egg).\n' +
      '4. Season with black pepper and serve at room temperature.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '6' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Basil', rawMeasure: '1 handful' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemon and garlic green beans',
    servingsBase: 4,
    totalTimeMinutes: 12,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Cook the green beans in boiling salted water for 4 minutes until just tender, then drain.\n' +
      '2. Warm the olive oil with the sliced garlic until fragrant but not coloured.\n' +
      '3. Toss the beans through the garlic oil and add a squeeze of lemon.\n' +
      '4. Season and serve at once.',
    rawLines: [
      { rawName: 'Green beans', rawMeasure: '400g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Creamy mashed potato',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Boil the peeled, chopped potatoes in salted water until completely tender.\n' +
      '2. Drain well and leave to steam-dry for a minute.\n' +
      '3. Mash with the butter and warmed milk until smooth and creamy.\n' +
      '4. Season generously and serve.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '1kg' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced roasted cauliflower',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Side',
    cuisine: 'Indian',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Break the cauliflower into florets and toss with the olive oil, cumin, turmeric and a pinch of salt.\n' +
      '2. Spread on a tray and roast for 25–30 minutes until tender and charred at the tips.\n' +
      '3. Finish with a squeeze of lemon and a scattering of coriander.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ───────────────────────── Desserts & puddings ─────────────────────────
  {
    title: 'Vegan chocolate sponge cake',
    servingsBase: 8,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a cake tin. This sponge needs no egg — the rise comes from bicarbonate of soda reacting with a little vinegar.\n' +
      '2. Whisk the flour, sugar, cocoa, baking powder and bicarbonate of soda together in a bowl.\n' +
      '3. Stir in the soya milk, vegetable oil and a splash of vinegar until just smooth.\n' +
      '4. Pour into the tin and bake for 30–35 minutes until a skewer comes out clean.\n' +
      '5. Cool completely, then dust with a little extra cocoa to serve.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '250g' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Cocoa powder', rawMeasure: '40g' },
      { rawName: 'Soya milk', rawMeasure: '300ml' },
      { rawName: 'Vegetable oil', rawMeasure: '120ml' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Baking powder', rawMeasure: '2 tsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Apple and blackberry crumble',
    servingsBase: 6,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Peel, core and slice the apples and tip into a baking dish with the blackberries and a little of the sugar.\n' +
      '2. Rub the butter into the flour with your fingertips until it looks like breadcrumbs (no egg in a crumble topping).\n' +
      '3. Stir in the remaining sugar and the oats.\n' +
      '4. Scatter the crumble over the fruit and bake for 35–40 minutes until golden and bubbling at the edges.\n' +
      '5. Serve warm.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '4' },
      { rawName: 'Blackberries', rawMeasure: '200g' },
      { rawName: 'Plain flour', rawMeasure: '150g' },
      { rawName: 'Oats', rawMeasure: '50g' },
      { rawName: 'Caster sugar', rawMeasure: '120g' },
      { rawName: 'Butter', rawMeasure: '100g' },
    ],
  },
  {
    title: 'Rice pudding with cinnamon',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C). Tip the pudding rice into a buttered dish.\n' +
      '2. Stir in the milk, sugar and a pinch of cinnamon.\n' +
      '3. Dot the top with a little butter and bake for 1½ hours, stirring once after 30 minutes, until thick and creamy with a golden skin.\n' +
      '4. Serve warm with a spoonful of jam.',
    rawLines: [
      { rawName: 'Pudding rice', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '800ml' },
      { rawName: 'Caster sugar', rawMeasure: '60g' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Jam', rawMeasure: '4 tsp' },
    ],
  },
  {
    title: 'Banana and date loaf',
    servingsBase: 8,
    totalTimeMinutes: 70,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C) and line a loaf tin. No egg is needed — generously mashed ripe banana holds the loaf together.\n' +
      '2. Mash the bananas to a smooth purée, then beat in the melted butter, sugar and milk.\n' +
      '3. Fold in the flour, baking powder, bicarbonate of soda and chopped dates until just combined.\n' +
      '4. Spoon into the tin and bake for 50–55 minutes until risen and a skewer comes out clean.\n' +
      '5. Cool in the tin for 10 minutes, then turn out.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '4 ripe' },
      { rawName: 'Dates', rawMeasure: '100g' },
      { rawName: 'Plain flour', rawMeasure: '250g' },
      { rawName: 'Caster sugar', rawMeasure: '120g' },
      { rawName: 'Butter', rawMeasure: '80g' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Baking powder', rawMeasure: '2 tsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Coconut and mango chia-free pudding',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'Thai',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Cook the pudding rice in the coconut milk with a little water and the sugar over a low heat, stirring, for about 25 minutes until thick and creamy.\n' +
      '2. Sweeten to taste and let it cool a little.\n' +
      '3. Spoon into glasses and chill.\n' +
      '4. Top with diced mango and a scattering of desiccated coconut to serve.',
    rawLines: [
      { rawName: 'Pudding rice', rawMeasure: '120g' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Mango', rawMeasure: '1' },
      { rawName: 'Caster sugar', rawMeasure: '50g' },
      { rawName: 'Desiccated coconut', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Strawberry and banana sorbet',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Freeze the sliced banana and strawberries on a tray until solid (do this ahead).\n' +
      '2. Tip the frozen fruit into a food processor with a squeeze of lime and a little sugar.\n' +
      '3. Blitz until smooth and scoopable, scraping down the sides as needed.\n' +
      '4. Serve straight away as a soft sorbet, or freeze for an hour for a firmer scoop.',
    rawLines: [
      { rawName: 'Strawberries', rawMeasure: '300g' },
      { rawName: 'Banana', rawMeasure: '2' },
      { rawName: 'Lime', rawMeasure: '1/2' },
      { rawName: 'Caster sugar', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Chocolate and avocado mousse',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Scoop the ripe avocado flesh into a blender (it gives a silky, egg-free mousse).\n' +
      '2. Add the cocoa powder, golden syrup and a splash of almond milk.\n' +
      '3. Blitz until completely smooth and glossy, adding a little more almond milk if needed.\n' +
      '4. Spoon into glasses and chill for at least an hour before serving.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2 ripe' },
      { rawName: 'Cocoa powder', rawMeasure: '40g' },
      { rawName: 'Golden syrup', rawMeasure: '4 tbsp' },
      { rawName: 'Almond milk', rawMeasure: '60ml' },
    ],
  },
  {
    title: 'Poached pears in spiced syrup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Peel the pears, keeping them whole with the stalks on.\n' +
      '2. Dissolve the sugar in the water in a pan with the cinnamon, star anise and a strip of orange peel.\n' +
      '3. Sit the pears in the syrup and poach gently for 20–25 minutes, turning, until tender.\n' +
      '4. Lift out the pears and reduce the syrup until glossy. Serve the pears with the spiced syrup spooned over.',
    rawLines: [
      { rawName: 'Pear', rawMeasure: '4' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Water', rawMeasure: '600ml' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
      { rawName: 'Star anise', rawMeasure: '2' },
      { rawName: 'Orange', rawMeasure: '1' },
    ],
  },
  {
    title: 'Lemon and blueberry drizzle cake',
    servingsBase: 8,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a loaf tin. No egg is needed — bicarbonate of soda and the acidity of the lemon give the lift.\n' +
      '2. Whisk the flour, sugar, baking powder and bicarbonate of soda in a bowl.\n' +
      '3. Stir in the soya milk, vegetable oil and the zest and juice of one lemon until just smooth, then fold in the blueberries.\n' +
      '4. Pour into the tin and bake for 40–45 minutes until golden and a skewer comes out clean.\n' +
      '5. Mix the remaining lemon juice with a little sugar and spoon over the warm cake to drizzle.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '250g' },
      { rawName: 'Caster sugar', rawMeasure: '180g' },
      { rawName: 'Blueberries', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Soya milk', rawMeasure: '250ml' },
      { rawName: 'Vegetable oil', rawMeasure: '100ml' },
      { rawName: 'Baking powder', rawMeasure: '2 tsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1/2 tsp' },
    ],
  },

  // ───────────────────────── Snacks & drinks ─────────────────────────
  {
    title: 'Spiced roasted chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Drain, rinse and pat the chickpeas thoroughly dry.\n' +
      '2. Toss with the olive oil, smoked paprika, cumin and a pinch of salt.\n' +
      '3. Spread on a tray and roast for 25–30 minutes, shaking once, until crisp.\n' +
      '4. Cool a little — they crisp further as they sit — then serve.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 x 400g tins' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Classic hummus with crudités',
    servingsBase: 4,
    totalTimeMinutes: 12,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Tip the drained chickpeas into a food processor with the tahini, garlic, lemon juice and a pinch of salt.\n' +
      '2. Blitz, trickling in cold water and the olive oil, until smooth and light.\n' +
      '3. Taste and adjust with more lemon or salt.\n' +
      '4. Spoon into a bowl, swirl with olive oil and a dusting of paprika, and serve with carrot and cucumber sticks.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Paprika', rawMeasure: '1 pinch' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Guacamole with tortilla chips',
    servingsBase: 4,
    totalTimeMinutes: 12,
    course: 'Snack',
    cuisine: 'Mexican',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Mash the avocado flesh in a bowl, leaving a little texture.\n' +
      '2. Stir in the finely chopped red onion, tomato, chilli and a good squeeze of lime.\n' +
      '3. Season with salt and fold through the coriander.\n' +
      '4. Serve with corn tortilla chips for dipping.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '3 ripe' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 handful' },
      { rawName: 'Corn tortillas', rawMeasure: '4, for chips' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Banana and berry smoothie',
    servingsBase: 2,
    totalTimeMinutes: 5,
    course: 'Drink',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Peel the banana and break into a blender.\n' +
      '2. Add the frozen mixed berries, the almond milk and a little honey-substitute syrup if you like it sweeter.\n' +
      '3. Blitz until smooth and thick.\n' +
      '4. Pour into glasses and serve cold.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '2' },
      { rawName: 'Frozen mixed berries', rawMeasure: '200g' },
      { rawName: 'Almond milk', rawMeasure: '400ml' },
      { rawName: 'Golden syrup', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Mango and coconut lassi',
    servingsBase: 2,
    totalTimeMinutes: 5,
    course: 'Drink',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Peel and roughly chop the mango.\n' +
      '2. Tip into a blender with the natural yoghurt, coconut milk and a little sugar.\n' +
      '3. Blitz until smooth and frothy.\n' +
      '4. Pour over ice and serve.',
    rawLines: [
      { rawName: 'Mango', rawMeasure: '1' },
      { rawName: 'Natural yoghurt', rawMeasure: '250g' },
      { rawName: 'Coconut milk', rawMeasure: '100ml' },
      { rawName: 'Caster sugar', rawMeasure: '1 tbsp' },
    ],
  },
]
