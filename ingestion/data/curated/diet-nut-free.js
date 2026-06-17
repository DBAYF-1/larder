// Curated NUT-FREE recipes for Larder (per-diet floor seed).
//
// Each record is culinary content ONLY — the source/sourceId/imageUrl
// boilerplate is added by sources/curated.js (mapCurated). Ingredient lines
// use vocabulary from data/ingredients.js so they resolve cleanly. Method prose
// is original, written fresh in British English. No website wording is copied.
//
// HARD GUARANTEE — every recipe here STRICTLY satisfies "Nut-free":
//   • NO peanuts and NO peanut-derived items (peanut butter, peanut oil,
//     peanut brittle/cookies, groundnut oil).
//   • NO tree nuts of any kind: almond, cashew, walnut, hazelnut, pecan,
//     pistachio, chestnut, pine nut, macadamia, brazil, etc. — and none of
//     their derivatives (almond milk/essence/extract/paste, marzipan,
//     nougatine, pistachio paste, chocolate hazelnut spread, pesto with
//     pine nuts). Coconut is botanically a drupe, not a tree nut, and is
//     used sparingly here; UK FSA lists it separately from tree nuts.
//
// dietLabels/healthLabels are tagged HONESTLY: every record carries the
// 'Nut-free' label (the floor this file seeds), plus any other label the dish
// genuinely satisfies (Vegetarian, Vegan, Gluten-free, Dairy-free, Pescatarian,
// etc.) based on its actual ingredient list.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  // ── Soups & light lunches ────────────────────────────────────────────────
  {
    title: 'Leek and potato soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Melt the butter in a large pan and soften the leeks and onion gently for 8–10 minutes, stirring, until collapsed but not coloured.\n' +
      '2. Add the diced potato and stir to coat, then pour in the stock and bring to a simmer.\n' +
      '3. Cook for 20 minutes until the potato is completely tender.\n' +
      '4. Blitz smooth with a stick blender, then stir through the milk and season generously with salt and pepper.\n' +
      '5. Warm through without boiling and serve with crusty bread.',
    rawLines: [
      { rawName: 'Leek', rawMeasure: '3' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Carrot and coriander soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the onion for 6–8 minutes.\n' +
      '2. Stir in the ground coriander and cook for a minute, then add the sliced carrots and stir to coat.\n' +
      '3. Pour in the stock, bring to the boil and simmer for 25 minutes until the carrots are very soft.\n' +
      '4. Blend until silky, then stir through most of the fresh coriander and season well.\n' +
      '5. Ladle into bowls and scatter over the remaining coriander.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tomato and basil soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the olive oil and soften the onion, carrot and celery for 8 minutes.\n' +
      '2. Stir in the garlic for a minute, then add the chopped tomatoes, passata and stock.\n' +
      '3. Drop in the sugar and a few basil stalks, then simmer for 25 minutes.\n' +
      '4. Blend smooth, stir through the cream and most of the torn basil, and season to taste.\n' +
      '5. Serve scattered with the last of the basil.',
    rawLines: [
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (800g)' },
      { rawName: 'Passata', rawMeasure: '200ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Basil', rawMeasure: 'small bunch' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Double cream', rawMeasure: '4 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced red lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the olive oil and soften the onion and carrot for 8 minutes.\n' +
      '2. Stir in the garlic, cumin and turmeric and cook for a minute until fragrant.\n' +
      '3. Tip in the rinsed lentils, chopped tomatoes and stock, then simmer for 25 minutes until the lentils have collapsed.\n' +
      '4. Blitz roughly for a hearty texture, squeeze in the lemon and season well.\n' +
      '5. Serve hot with warm pitta bread.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g red' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Pitta bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pea and mint soup',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Melt the butter and soften the spring onions gently for 3–4 minutes.\n' +
      '2. Pour in the stock and bring to the boil, then add the peas and simmer for 4 minutes.\n' +
      '3. Add most of the mint and blend until smooth and bright green.\n' +
      '4. Stir through the cream, season and reheat gently.\n' +
      '5. Serve with the remaining mint torn over the top.',
    rawLines: [
      { rawName: 'Peas', rawMeasure: '600g frozen' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Mint', rawMeasure: 'small bunch' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Single cream', rawMeasure: '4 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chunky minestrone',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Heat the olive oil and soften the onion, carrot and celery for 10 minutes.\n' +
      '2. Stir in the garlic, then add the chopped tomatoes, stock and drained cannellini beans.\n' +
      '3. Simmer for 15 minutes, then add the pasta and cook until al dente.\n' +
      '4. Stir through the shredded cabbage for the last few minutes until just wilted.\n' +
      '5. Season well and serve with grated Parmesan.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Pasta', rawMeasure: '100g small shapes' },
      { rawName: 'Cabbage', rawMeasure: '1/4, shredded' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Parmesan', rawMeasure: '30g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jacket potato with cheese and beans',
    servingsBase: 2,
    totalTimeMinutes: 80,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes all over, rub with a little olive oil and salt.\n' +
      '2. Bake directly on the shelf for 60–75 minutes until the skins are crisp and the insides fluffy.\n' +
      '3. Warm the baked beans in a small pan.\n' +
      '4. Split each potato, fork in a knob of butter, then spoon over the beans and top with grated Cheddar.\n' +
      '5. Season with black pepper and serve at once.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '2 large baking' },
      { rawName: 'Baked beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cheese and tomato toastie',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Butter the bread on the outside of each slice.\n' +
      '2. Lay grated Cheddar and sliced tomato onto the unbuttered sides and sandwich together, buttered sides out.\n' +
      '3. Warm a frying pan over a medium heat and cook the sandwiches for 3–4 minutes each side, pressing down, until golden and the cheese has melted.\n' +
      '4. Season the tomato layer with a little black pepper, cut in half and serve hot.',
    rawLines: [
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna mayo jacket',
    servingsBase: 2,
    totalTimeMinutes: 75,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Pescatarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes, rub with oil and salt, and bake for 60–75 minutes until fluffy.\n' +
      '2. Drain the tuna and mix with the mayonnaise and finely chopped spring onion. Season.\n' +
      '3. Split the cooked potatoes, fluff the insides with a fork and pile in the tuna mayo.\n' +
      '4. Finish with a grind of black pepper and serve with a green salad.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '2 large baking' },
      { rawName: 'Tuna', rawMeasure: '1 tin (145g)' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Lettuce', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Cut the tomatoes into wedges and the cucumber into thick half-moons, and tip into a wide bowl.\n' +
      '2. Add the sliced red onion, olives and chunks of feta.\n' +
      '3. Whisk the olive oil with the red wine vinegar and dried oregano, then season.\n' +
      '4. Pour the dressing over and toss very gently so the feta stays in pieces. Serve at room temperature.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Olives', rawMeasure: '100g' },
      { rawName: 'Feta', rawMeasure: '200g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Red wine', rawMeasure: '1 tbsp vinegar' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea and feta salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Drain and rinse the chickpeas and tip into a large bowl.\n' +
      '2. Add the halved cherry tomatoes, diced cucumber, sliced red onion and chopped parsley.\n' +
      '3. Crumble in the feta.\n' +
      '4. Whisk the olive oil with the lemon juice, season, then toss everything together and serve.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (800g)' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Egg mayonnaise sandwich',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Lower the eggs into boiling water and cook for 9 minutes, then cool under cold running water and peel.\n' +
      '2. Roughly mash the eggs with the mayonnaise and finely sliced chives. Season well.\n' +
      '3. Spread the filling generously over two slices of bread, top with the cress and close the sandwiches.\n' +
      '4. Press gently, cut into triangles and serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp' },
      { rawName: 'Chives', rawMeasure: '1 tbsp' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Lettuce', rawMeasure: 'a handful of cress' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Chicken & poultry mains ──────────────────────────────────────────────
  {
    title: 'Lemon and herb roast chicken',
    servingsBase: 4,
    totalTimeMinutes: 95,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the chicken in a roasting tin and rub all over with olive oil, salt and pepper.\n' +
      '2. Halve the lemon and push it inside the cavity with the thyme and a couple of garlic cloves.\n' +
      '3. Scatter the remaining garlic around the tin and roast for 1 hour 20 minutes, basting once, until the juices run clear.\n' +
      '4. Rest the chicken under foil for 15 minutes.\n' +
      '5. Carve and serve with the pan juices spooned over.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1 (about 1.6kg)' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Thyme', rawMeasure: 'small bunch' },
      { rawName: 'Garlic', rawMeasure: '1 bulb' },
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
      '1. Heat the oven to 200°C (fan 180°C). Fry the diced chicken in a little olive oil until golden, then lift out.\n' +
      '2. Soften the onion and mushrooms in the same pan for 8 minutes.\n' +
      '3. Stir in the flour for a minute, then gradually add the stock and milk, stirring to a smooth sauce.\n' +
      '4. Return the chicken, add the thyme, season and simmer for 5 minutes, then tip into a pie dish.\n' +
      '5. Roll the puff pastry over the top, trim, brush with beaten egg and bake for 30–35 minutes until golden.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g, boneless' },
      { rawName: 'Mushroom', rawMeasure: '250g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Thyme', rawMeasure: '1 tsp' },
      { rawName: 'Puff pastry', rawMeasure: '1 sheet' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken tikka masala',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Nut-free', 'Gluten-free'],
    instructions:
      '1. Mix the chicken with the yoghurt, half the garam masala and a little of the ginger garlic paste, and leave to marinate for 20 minutes.\n' +
      '2. Heat the oil and soften the onion for 8 minutes, then stir in the remaining ginger garlic paste, garam masala, paprika and cumin.\n' +
      '3. Add the chopped tomatoes and simmer for 10 minutes until thick.\n' +
      '4. Stir in the marinated chicken and cook for 15 minutes until cooked through.\n' +
      '5. Pour in the cream, simmer for 5 minutes, then scatter with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g, diced' },
      { rawName: 'Natural yoghurt', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken fajitas',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Nut-free', 'Dairy-free'],
    instructions:
      '1. Slice the chicken into strips and toss with the fajita seasoning and a little oil.\n' +
      '2. Heat a large frying pan over a high heat and cook the chicken for 6–8 minutes until charred and cooked through, then lift out.\n' +
      '3. Add the sliced peppers and onion to the pan and fry hard for 5–6 minutes until softened and smoky.\n' +
      '4. Return the chicken, squeeze over the lime and warm through.\n' +
      '5. Pile into warm tortilla wraps with salsa and serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g' },
      { rawName: 'Mixed peppers', rawMeasure: '3' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Fajita seasoning', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Tortilla wrap', rawMeasure: '8' },
      { rawName: 'Salsa', rawMeasure: 'to serve' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Coq au vin',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Nut-free'],
    instructions:
      '1. Fry the bacon lardons in a heavy pan until crisp, then lift out. Brown the chicken thighs in the fat and set aside.\n' +
      '2. Soften the onion and mushrooms, stir in the garlic, then sprinkle over the flour and cook for a minute.\n' +
      '3. Pour in the red wine and stock, return the chicken and bacon, add the bay and thyme, and bring to a simmer.\n' +
      '4. Cover and cook gently for 50 minutes until the chicken is tender and the sauce glossy.\n' +
      '5. Season, scatter with parsley and serve with mash.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Bacon lardon', rawMeasure: '150g' },
      { rawName: 'Mushroom', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Red wine', rawMeasure: '400ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Thyme', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: 'to garnish' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Honey and mustard chicken thighs',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Whisk the honey, mustard, olive oil and a little crushed garlic together.\n' +
      '2. Sit the chicken thighs in a roasting tin and pour over the glaze, turning to coat.\n' +
      '3. Season and roast skin-side up for 35–40 minutes, basting once, until sticky and cooked through.\n' +
      '4. Rest for 5 minutes and serve with the pan juices and a green vegetable.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Honey', rawMeasure: '3 tbsp' },
      { rawName: 'Mustard', rawMeasure: '2 tbsp wholegrain' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and vegetable stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Nut-free', 'Dairy-free'],
    instructions:
      '1. Slice the chicken thinly and toss with a splash of soy sauce.\n' +
      '2. Heat the oil in a wok over a high heat and stir-fry the chicken for 4–5 minutes until golden, then lift out.\n' +
      '3. Add the peppers, mangetout and spring onions and stir-fry for 3 minutes.\n' +
      '4. Return the chicken with the garlic and ginger, then add the remaining soy and oyster sauce.\n' +
      '5. Toss for a minute until glossy and serve over rice or noodles.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Mangetout', rawMeasure: '150g' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Oyster sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Noodles', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Roast turkey breast with gravy',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Rub the turkey breast with butter, salt and pepper and sit it in a roasting tin.\n' +
      '2. Roast for 50–60 minutes until the juices run clear, basting halfway.\n' +
      '3. Lift the turkey onto a board and rest under foil.\n' +
      '4. Set the tin over a low heat, stir in the flour, then gradually whisk in the stock to a smooth gravy and simmer until thickened.\n' +
      '5. Carve the turkey and serve with the gravy.',
    rawLines: [
      { rawName: 'Turkey', rawMeasure: '1 breast joint (1.2kg)' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Beef, lamb & pork mains ─────────────────────────────────────────────
  {
    title: 'Classic beef stew',
    servingsBase: 4,
    totalTimeMinutes: 150,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Toss the stewing beef in seasoned flour, then brown in batches in a little oil in a casserole. Lift out.\n' +
      '2. Soften the onion, carrot and celery for 8 minutes, then return the beef.\n' +
      '3. Pour in the stock, add the tomato purée, bay and thyme, and bring to a simmer.\n' +
      '4. Cover and cook in the oven for 2 hours until the beef is meltingly tender.\n' +
      '5. Season and serve with mash or crusty bread.',
    rawLines: [
      { rawName: 'Stewing beef', rawMeasure: '700g' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 800ml' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Thyme', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef and ale pie',
    servingsBase: 4,
    totalTimeMinutes: 180,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free'],
    instructions:
      '1. Toss the beef in seasoned flour and brown in batches in a little oil in a casserole, then set aside.\n' +
      '2. Soften the onion and carrot for 8 minutes, return the beef, pour in the ale and stock, and add the thyme.\n' +
      '3. Cover and simmer gently for 2 hours until tender, then leave to cool a little. Heat the oven to 200°C (fan 180°C).\n' +
      '4. Tip the filling into a pie dish, lay the puff pastry over the top, trim and brush with beaten egg.\n' +
      '5. Bake for 30–35 minutes until the pastry is deep gold and crisp.',
    rawLines: [
      { rawName: 'Stewing beef', rawMeasure: '700g' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Beer', rawMeasure: '330ml ale' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Thyme', rawMeasure: '1 tsp' },
      { rawName: 'Puff pastry', rawMeasure: '1 sheet' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Steak and chips with peppercorn sauce',
    servingsBase: 2,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Cut the potatoes into chips, toss with oil and salt and roast for 30 minutes, turning once, until crisp.\n' +
      '2. Rub the steaks with oil and season. Heat a heavy pan until smoking and cook 2–3 minutes each side for medium-rare. Rest.\n' +
      '3. In the same pan, soften the shallot, add the crushed peppercorns, then pour in the stock and cream.\n' +
      '4. Simmer until glossy, season, and spoon over the rested steaks. Serve with the chips.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '2 sirloin' },
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Shallot', rawMeasure: '1' },
      { rawName: 'Black peppercorns', rawMeasure: '1 tbsp' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 100ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef lasagne',
    servingsBase: 6,
    totalTimeMinutes: 105,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Nut-free'],
    instructions:
      '1. Brown the minced beef in a large pan, then soften the onion, carrot and celery and stir in the garlic.\n' +
      '2. Add the chopped tomatoes, passata, tomato purée and oregano, season, and simmer for 30 minutes.\n' +
      '3. For the white sauce, melt the butter, stir in the flour, then gradually whisk in the milk and simmer until thick. Stir in half the Cheddar.\n' +
      '4. Heat the oven to 190°C (fan 170°C). Layer ragù, lasagne sheets and white sauce, finishing with sauce and the rest of the cheese.\n' +
      '5. Bake for 40 minutes until golden and bubbling, then rest for 10 minutes.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Passata', rawMeasure: '300ml' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Lasagne sheets', rawMeasure: '250g' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Slow-roast lamb shoulder',
    servingsBase: 6,
    totalTimeMinutes: 270,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Sit the lamb on a bed of onion and garlic in a deep roasting tin.\n' +
      '2. Rub the meat with olive oil, rosemary, salt and pepper, then pour the stock into the base.\n' +
      '3. Cover tightly with foil and roast for 4 hours until the meat pulls apart easily.\n' +
      '4. Remove the foil and roast for a final 20 minutes to colour the top.\n' +
      '5. Rest for 15 minutes, then shred and serve with the pan juices.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '1.8kg' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '1 bulb' },
      { rawName: 'Rosemary', rawMeasure: '3 sprigs' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb rogan josh',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Nut-free', 'Gluten-free'],
    instructions:
      '1. Brown the diced lamb in batches in a little oil, then set aside.\n' +
      '2. Soften the onion for 8 minutes, then stir in the ginger garlic paste, garam masala, paprika, cumin and turmeric.\n' +
      '3. Return the lamb, add the chopped tomatoes and yoghurt, and stir well.\n' +
      '4. Pour in enough water to cover, then simmer gently for 90 minutes until the lamb is tender and the sauce rich.\n' +
      '5. Season, scatter with coriander and serve with basmati rice.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '700g, diced' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Paprika', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Natural yoghurt', rawMeasure: '100g' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork and apple casserole',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C). Brown the diced pork shoulder in a little oil in a casserole, then lift out.\n' +
      '2. Soften the onion and leek for 8 minutes, stir in the flour, then gradually add the cider and stock.\n' +
      '3. Return the pork with the apple wedges, mustard and sage, and bring to a simmer.\n' +
      '4. Cover and cook in the oven for 1 hour 15 minutes until the pork is tender.\n' +
      '5. Season and serve with mash.',
    rawLines: [
      { rawName: 'Pork shoulder', rawMeasure: '700g, diced' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Leek', rawMeasure: '1' },
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Cider', rawMeasure: '300ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Mustard', rawMeasure: '1 tbsp' },
      { rawName: 'Sage', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sticky pork ribs',
    servingsBase: 4,
    totalTimeMinutes: 150,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Sit the ribs in a roasting tin, season, add a splash of water and cover tightly with foil.\n' +
      '2. Roast for 1 hour 45 minutes until the meat is tender.\n' +
      '3. Mix the tomato ketchup, honey, soy sauce, smoked paprika and crushed garlic into a glaze.\n' +
      '4. Drain the ribs, brush all over with the glaze and turn the oven up to 200°C (fan 180°C).\n' +
      '5. Roast uncovered for 20–25 minutes, basting twice, until sticky and dark. Serve with napkins.',
    rawLines: [
      { rawName: 'Pork ribs', rawMeasure: '1.2kg' },
      { rawName: 'Tomato ketchup', rawMeasure: '4 tbsp' },
      { rawName: 'Honey', rawMeasure: '3 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
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
    dietLabels: ['Nut-free', 'Dairy-free'],
    instructions:
      '1. Brown the sausages in a little oil in a casserole, then lift out and slice into chunks.\n' +
      '2. Soften the onion and pepper for 8 minutes, then stir in the garlic and smoked paprika.\n' +
      '3. Add the chopped tomatoes, drained butter beans and stock, and return the sausages.\n' +
      '4. Simmer for 25 minutes until thick and rich, then season.\n' +
      '5. Serve with crusty bread to mop up the sauce.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '8' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Meatballs in tomato sauce',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Nut-free'],
    instructions:
      '1. Mix the minced beef with the breadcrumbs, egg, half the garlic and plenty of seasoning, then roll into 20 balls.\n' +
      '2. Brown the meatballs in olive oil in batches, then set aside.\n' +
      '3. Soften the onion in the same pan, add the remaining garlic, then pour in the chopped tomatoes and passata with the oregano.\n' +
      '4. Return the meatballs and simmer gently for 25 minutes until cooked through and the sauce thickened.\n' +
      '5. Season and serve over spaghetti with grated Parmesan.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Breadcrumbs', rawMeasure: '50g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Passata', rawMeasure: '300ml' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Fish & seafood mains ────────────────────────────────────────────────
  {
    title: 'Classic fish and chips',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Pescatarian', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Cut the potatoes into thick chips, toss with oil and salt and roast for 35 minutes, turning, until golden.\n' +
      '2. Whisk the flour with the cold beer to a smooth batter, seasoned with salt.\n' +
      '3. Heat a deep pan of vegetable oil to 180°C. Dip the fish fillets into the batter and fry for 6–7 minutes until crisp and golden.\n' +
      '4. Drain on kitchen paper and season.\n' +
      '5. Serve the fish with the chips, peas and lemon wedges.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4 (cod or haddock)' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Plain flour', rawMeasure: '150g' },
      { rawName: 'Beer', rawMeasure: '200ml cold' },
      { rawName: 'Peas', rawMeasure: '200g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Salmon fishcakes',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Pescatarian'],
    instructions:
      '1. Boil the potatoes until tender, drain and mash, then leave to cool a little.\n' +
      '2. Flake the cooked salmon and fold into the mash with the spring onion, parsley, mustard and a little lemon zest. Season.\n' +
      '3. Shape into 8 cakes, coat in the breadcrumbs and chill for 15 minutes.\n' +
      '4. Fry in a little oil for 3–4 minutes each side until crisp and golden.\n' +
      '5. Serve with lemon wedges and a green salad.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '400g, cooked' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Breadcrumbs', rawMeasure: '100g' },
      { rawName: 'Lettuce', rawMeasure: 'to serve' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked salmon with dill',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Pescatarian', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the salmon fillets on a lined tray.\n' +
      '2. Drizzle with olive oil, scatter over the chopped dill and lemon slices, and season.\n' +
      '3. Bake for 12–15 minutes until just cooked and flaking.\n' +
      '4. Stir the remaining dill into the soured cream with a squeeze of lemon.\n' +
      '5. Serve the salmon with the dill cream and new potatoes.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4' },
      { rawName: 'Dill', rawMeasure: 'small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Soured cream', rawMeasure: '150ml' },
      { rawName: 'New potatoes', rawMeasure: '600g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Creamy fish pie',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Pescatarian'],
    instructions:
      '1. Boil the potatoes until tender, drain and mash with the butter and a splash of milk. Season.\n' +
      '2. Poach the fish and prawns gently in the remaining milk for 4 minutes, then lift out and flake into a baking dish, reserving the milk.\n' +
      '3. Melt the butter, stir in the flour, then whisk in the poaching milk to a smooth sauce. Stir in the parsley.\n' +
      '4. Pour the sauce over the fish, top with the mash and fork the surface.\n' +
      '5. Bake at 200°C (fan 180°C) for 25–30 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '400g' },
      { rawName: 'Smoked haddock', rawMeasure: '200g' },
      { rawName: 'Prawns', rawMeasure: '150g' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Butter', rawMeasure: '70g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and tomato linguine',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Nut-free', 'Pescatarian', 'Dairy-free'],
    instructions:
      '1. Cook the linguine in plenty of salted water until al dente.\n' +
      '2. Meanwhile, heat the olive oil and soften the garlic and chilli flakes for a minute.\n' +
      '3. Add the cherry tomatoes and cook until they begin to burst, then add the prawns and cook for 3 minutes until pink.\n' +
      '4. Toss the drained linguine through the sauce with a splash of pasta water and the parsley.\n' +
      '5. Season, squeeze over the lemon and serve.',
    rawLines: [
      { rawName: 'Linguine', rawMeasure: '400g' },
      { rawName: 'Prawns', rawMeasure: '300g' },
      { rawName: 'Cherry tomato', rawMeasure: '250g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked mackerel pâté',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Starter',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Pescatarian', 'Gluten-free'],
    instructions:
      '1. Peel the skin from the mackerel and flake the flesh into a bowl, checking for bones.\n' +
      '2. Add the cream cheese, soured cream, lemon juice and a little horseradish.\n' +
      '3. Mash together to a rough, spreadable pâté and season with black pepper.\n' +
      '4. Spoon into a dish, scatter with chives and serve with toast or oatcakes.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '200g smoked' },
      { rawName: 'Cream cheese', rawMeasure: '150g' },
      { rawName: 'Soured cream', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Horseradish', rawMeasure: '1 tsp' },
      { rawName: 'Chives', rawMeasure: '1 tbsp' },
      { rawName: 'Bread', rawMeasure: 'to serve' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Vegetarian & vegan mains ────────────────────────────────────────────
  {
    title: 'Vegetable curry',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oil and soften the onion for 8 minutes, then stir in the garlic, ginger and curry powder.\n' +
      '2. Add the cauliflower, potato and carrot and stir to coat in the spices.\n' +
      '3. Pour in the chopped tomatoes and stock, then simmer for 20 minutes until the vegetables are tender.\n' +
      '4. Stir in the spinach and chickpeas and cook for 5 minutes more.\n' +
      '5. Season, scatter with coriander and serve with basmati rice.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1/2, in florets' },
      { rawName: 'Potato', rawMeasure: '2' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Margherita pizza',
    servingsBase: 2,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Mix the bread flour, yeast and salt, then stir in the warm water and a little olive oil to a soft dough. Knead for 10 minutes and prove for 1 hour.\n' +
      '2. Heat the oven to its highest setting with a baking tray inside. Knock back the dough and roll into two thin bases.\n' +
      '3. Spread each with passata, season and scatter over torn mozzarella.\n' +
      '4. Slide onto the hot tray and bake for 8–10 minutes until the crust is blistered.\n' +
      '5. Tear over fresh basil and drizzle with olive oil before serving.',
    rawLines: [
      { rawName: 'Strong white bread flour', rawMeasure: '300g' },
      { rawName: 'Fast-action yeast', rawMeasure: '1 tsp' },
      { rawName: 'Water', rawMeasure: '180ml warm' },
      { rawName: 'Passata', rawMeasure: '150ml' },
      { rawName: 'Mozzarella', rawMeasure: '1 ball (125g)' },
      { rawName: 'Basil', rawMeasure: 'small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Macaroni cheese',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Cook the macaroni in salted water until just tender, then drain.\n' +
      '2. Melt the butter, stir in the flour and cook for a minute, then gradually whisk in the milk to a smooth sauce.\n' +
      '3. Simmer until thickened, then stir in most of the Cheddar and the mustard. Season.\n' +
      '4. Fold the macaroni through the sauce and tip into a baking dish.\n' +
      '5. Scatter with the remaining cheese and breadcrumbs and bake at 200°C (fan 180°C) for 20 minutes until golden.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '350g macaroni' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '200g' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Breadcrumbs', rawMeasure: '40g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetarian chilli',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oil and soften the onion and pepper for 8 minutes, then stir in the garlic, cumin, paprika and chilli powder.\n' +
      '2. Add the chopped tomatoes, drained kidney beans and black beans, and the stock.\n' +
      '3. Simmer for 25 minutes until thick and rich, stirring now and then.\n' +
      '4. Season, squeeze in the lime and stir through the coriander.\n' +
      '5. Serve with rice.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Black beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom risotto',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Soften the onion in butter and a little oil for 6 minutes, then add the sliced mushrooms and cook until golden.\n' +
      '2. Stir in the garlic and rice and toast for a minute, then pour in the white wine and let it bubble away.\n' +
      '3. Add the hot stock a ladleful at a time, stirring, until the rice is creamy and just tender, around 20 minutes.\n' +
      '4. Stir in the Parmesan and a knob of butter, then season.\n' +
      '5. Rest for a minute and serve scattered with parsley.',
    rawLines: [
      { rawName: 'Rice', rawMeasure: '300g risotto' },
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'White wine', rawMeasure: '100ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Parsley', rawMeasure: 'to garnish' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spinach and ricotta cannelloni',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Wilt the spinach, squeeze out the water and chop, then mix with the ricotta, half the Parmesan, a little nutmeg and seasoning.\n' +
      '2. Spoon the mixture into the cannelloni tubes and lay them in a baking dish.\n' +
      '3. Stir the garlic into the passata, season, and pour over the tubes.\n' +
      '4. Scatter with the remaining Parmesan and the torn mozzarella.\n' +
      '5. Bake at 190°C (fan 170°C) for 35–40 minutes until bubbling and golden.',
    rawLines: [
      { rawName: 'Spinach', rawMeasure: '400g' },
      { rawName: 'Ricotta', rawMeasure: '250g' },
      { rawName: 'Parmesan', rawMeasure: '60g' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Pasta', rawMeasure: '12 cannelloni tubes' },
      { rawName: 'Passata', rawMeasure: '500ml' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Mozzarella', rawMeasure: '1 ball (125g)' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed peppers with rice',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers and sit them cut-side up in a baking dish.\n' +
      '2. Soften the onion in oil, add the garlic, then stir in the cooked rice, chopped tomatoes and herbs. Season well.\n' +
      '3. Spoon the filling into the pepper halves and drizzle with a little oil.\n' +
      '4. Cover with foil and bake for 30 minutes, then uncover and bake for 15 minutes more until the peppers are tender.\n' +
      '5. Scatter with parsley and serve.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4' },
      { rawName: 'Rice', rawMeasure: '200g, cooked' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Mixed herbs', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: 'to garnish' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Falafel wraps',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Mix the falafel mix with water as directed and shape into small patties.\n' +
      '2. Shallow-fry in a little oil for 3 minutes each side until crisp and golden, then drain.\n' +
      '3. Loosen the hummus with a little water and lemon juice.\n' +
      '4. Warm the tortilla wraps, spread with hummus, then add shredded lettuce, sliced tomato and the falafel.\n' +
      '5. Drizzle with a little more lemon, roll up tightly and serve.',
    rawLines: [
      { rawName: 'Falafel mix', rawMeasure: '200g' },
      { rawName: 'Hummus', rawMeasure: '150g' },
      { rawName: 'Tortilla wrap', rawMeasure: '4' },
      { rawName: 'Lettuce', rawMeasure: '1/2, shredded' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lentil and vegetable shepherdless pie',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oil and soften the onion, carrot and celery for 10 minutes, then stir in the garlic.\n' +
      '2. Add the lentils, chopped tomatoes, tomato purée, stock and thyme, and simmer for 25 minutes until thick. Stir in the peas.\n' +
      '3. Meanwhile, boil the potatoes until tender, drain and mash with the vegan butter. Season.\n' +
      '4. Heat the oven to 200°C (fan 180°C). Tip the lentil mixture into a dish, top with mash and fork the surface.\n' +
      '5. Bake for 25–30 minutes until golden at the edges.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g green' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Thyme', rawMeasure: '1 tsp' },
      { rawName: 'Vegan butter', rawMeasure: '40g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cauliflower cheese',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Boil the cauliflower florets for 5 minutes until just tender, then drain well.\n' +
      '2. Melt the butter, stir in the cornflour, then gradually whisk in the milk to a smooth sauce.\n' +
      '3. Simmer until thickened, then stir in most of the Cheddar and the mustard. Season.\n' +
      '4. Tip the cauliflower into a baking dish, pour over the sauce and scatter with the remaining cheese.\n' +
      '5. Bake for 20–25 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Cornflour', rawMeasure: '2 tbsp' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable frittata',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Soften the onion and pepper in an ovenproof pan for 6 minutes.\n' +
      '2. Add the halved cherry tomatoes and wilt the spinach, then spread the vegetables evenly.\n' +
      '3. Beat the eggs with seasoning and pour into the pan, then scatter over the crumbled feta.\n' +
      '4. Cook on the hob for 3 minutes until the edges set, then transfer to the oven for 12–15 minutes until just firm.\n' +
      '5. Cool a little, slice into wedges and serve warm or cold.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Spinach', rawMeasure: '80g' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tomato and chickpea stew',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oil and soften the onion for 8 minutes, then stir in the garlic, cumin and smoked paprika.\n' +
      '2. Add the chopped tomatoes and drained chickpeas, then simmer for 15 minutes until thick.\n' +
      '3. Stir in the spinach until wilted and squeeze in the lemon.\n' +
      '4. Season well and scatter with coriander.\n' +
      '5. Serve with warm flatbread or rice.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (800g)' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Pitta bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bubble and squeak',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Mash the leftover potatoes roughly and mix with the shredded cooked cabbage and greens.\n' +
      '2. Fold in the softened onion and season generously.\n' +
      '3. Heat the butter in a large frying pan and press the mixture in to form a thick cake.\n' +
      '4. Fry over a medium heat for 6–8 minutes until the base is crisp and golden, then turn in sections and crisp the other side.\n' +
      '5. Serve hot, topped with a fried egg if you like.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '500g cooked' },
      { rawName: 'Cabbage', rawMeasure: '300g cooked' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Egg', rawMeasure: '4 (optional)' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Breakfast & brunch ──────────────────────────────────────────────────
  {
    title: 'Full English breakfast',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Nut-free'],
    instructions:
      '1. Grill the sausages and bacon, turning, until cooked and golden.\n' +
      '2. Warm the baked beans in a small pan and halve and fry the tomatoes cut-side down.\n' +
      '3. Fry the mushrooms in a little oil until softened.\n' +
      '4. Fry the eggs to your liking and toast the bread.\n' +
      '5. Pile everything onto warm plates and serve at once with the buttered toast.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '4' },
      { rawName: 'Bacon', rawMeasure: '4 rashers' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Baked beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Butter', rawMeasure: 'for the toast' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Scrambled eggs on toast',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Beat the eggs with a splash of milk and a little seasoning.\n' +
      '2. Melt the butter in a non-stick pan over a low heat.\n' +
      '3. Pour in the eggs and stir gently and constantly until just set but still soft and creamy.\n' +
      '4. Meanwhile, toast and butter the bread.\n' +
      '5. Pile the eggs onto the toast, finish with black pepper and serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '5' },
      { rawName: 'Milk', rawMeasure: '2 tbsp' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Porridge with banana and honey',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Tip the oats into a pan with the milk and a pinch of salt.\n' +
      '2. Bring to a gentle simmer, stirring, and cook for 4–5 minutes until thick and creamy.\n' +
      '3. Spoon into bowls and top with sliced banana.\n' +
      '4. Drizzle over the honey and serve straight away.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Banana', rawMeasure: '1' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Blueberry pancakes',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Whisk the self-raising flour, baking powder and sugar together, then beat in the eggs and milk to a smooth, thick batter.\n' +
      '2. Fold in most of the blueberries.\n' +
      '3. Heat a little butter in a non-stick pan and drop in spoonfuls of batter.\n' +
      '4. Cook for 2 minutes until bubbles appear, then flip and cook for a minute more.\n' +
      '5. Stack up, scatter with the remaining blueberries and drizzle with honey.',
    rawLines: [
      { rawName: 'Self-raising flour', rawMeasure: '200g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Caster sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Milk', rawMeasure: '250ml' },
      { rawName: 'Blueberries', rawMeasure: '150g' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Butter', rawMeasure: 'for frying' },
    ],
  },
  {
    title: 'Cheese and ham omelette',
    servingsBase: 1,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Beat the eggs with a little seasoning.\n' +
      '2. Melt the butter in a non-stick pan over a medium heat and swirl to coat.\n' +
      '3. Pour in the eggs and, as they begin to set, draw the edges into the centre, tilting the pan.\n' +
      '4. When almost set, scatter the chopped ham and grated Cheddar over one half.\n' +
      '5. Fold the omelette over the filling, slide onto a plate and serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Ham', rawMeasure: '50g' },
      { rawName: 'Cheddar cheese', rawMeasure: '40g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beans on toast',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Warm the baked beans in a small pan over a gentle heat, stirring now and then.\n' +
      '2. Toast the bread and butter it generously.\n' +
      '3. Spoon the hot beans over the toast.\n' +
      '4. Top with grated Cheddar if you like, season with black pepper and serve.',
    rawLines: [
      { rawName: 'Baked beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Butter', rawMeasure: 'for the toast' },
      { rawName: 'Cheddar cheese', rawMeasure: '40g (optional)' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Sides & salads ──────────────────────────────────────────────────────
  {
    title: 'Roast potatoes',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Peel and cut the potatoes into large chunks.\n' +
      '2. Boil in salted water for 8 minutes, then drain and shake in the pan to roughen the edges.\n' +
      '3. Heat the vegetable oil in a roasting tin until very hot, then add the potatoes and turn to coat.\n' +
      '4. Roast for 45–50 minutes, turning once, until deep gold and crisp.\n' +
      '5. Season with salt and serve at once.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '1kg' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Coleslaw',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Finely shred the cabbage and carrot and thinly slice the onion.\n' +
      '2. Tip into a large bowl.\n' +
      '3. Stir the mayonnaise with the mustard, a squeeze of lemon and seasoning.\n' +
      '4. Fold the dressing through the vegetables until evenly coated.\n' +
      '5. Chill for 30 minutes before serving.',
    rawLines: [
      { rawName: 'Cabbage', rawMeasure: '1/2 white' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1/2' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Potato salad',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Boil the new potatoes in salted water until just tender, then drain and leave to cool a little.\n' +
      '2. Cut any larger potatoes in half.\n' +
      '3. Mix the mayonnaise with the wholegrain mustard and chopped chives.\n' +
      '4. Fold the dressing through the warm potatoes with the sliced spring onions.\n' +
      '5. Season and serve at room temperature.',
    rawLines: [
      { rawName: 'New potatoes', rawMeasure: '700g' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp' },
      { rawName: 'Mustard', rawMeasure: '1 tbsp wholegrain' },
      { rawName: 'Chives', rawMeasure: '2 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Garlic bread',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Beat the softened butter with the crushed garlic and chopped parsley.\n' +
      '2. Cut the bread into thick slices, not all the way through, to keep the loaf together.\n' +
      '3. Spread the garlic butter generously into each cut.\n' +
      '4. Wrap the loaf in foil and bake for 12–15 minutes, opening the foil for the last 3 minutes to crisp the top.\n' +
      '5. Pull apart and serve warm.',
    rawLines: [
      { rawName: 'Crusty bread', rawMeasure: '1 baguette' },
      { rawName: 'Butter', rawMeasure: '100g, softened' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
    ],
  },
  {
    title: 'Honey-roasted carrots and parsnips',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the carrots and parsnips into even batons.\n' +
      '2. Toss in a roasting tin with the olive oil, salt and pepper.\n' +
      '3. Roast for 25 minutes until starting to colour.\n' +
      '4. Drizzle over the honey, toss well and roast for a final 10–15 minutes until caramelised and tender.\n' +
      '5. Scatter with thyme and serve.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '4' },
      { rawName: 'Parsnip', rawMeasure: '4' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Thyme', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Puddings & bakes ────────────────────────────────────────────────────
  {
    title: 'Victoria sponge',
    servingsBase: 8,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line two sandwich tins.\n' +
      '2. Beat the butter and caster sugar until pale and fluffy, then beat in the eggs one at a time.\n' +
      '3. Fold in the self-raising flour and baking powder until smooth, then divide between the tins.\n' +
      '4. Bake for 20–25 minutes until risen and golden, then cool on a rack.\n' +
      '5. Sandwich with raspberry jam and whipped cream, and dust the top with icing sugar.',
    rawLines: [
      { rawName: 'Butter', rawMeasure: '200g, softened' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Self-raising flour', rawMeasure: '200g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Raspberry jam', rawMeasure: '4 tbsp' },
      { rawName: 'Double cream', rawMeasure: '200ml' },
      { rawName: 'Icing sugar', rawMeasure: 'to dust' },
    ],
  },
  {
    title: 'Sticky toffee pudding',
    servingsBase: 6,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Pour boiling water over the chopped dates and leave to soften for 10 minutes, then mash to a purée.\n' +
      '2. Heat the oven to 180°C (fan 160°C). Cream the butter and muscovado sugar, beat in the eggs, then fold in the flour and the date purée.\n' +
      '3. Spoon into a baking dish and bake for 30–35 minutes until risen and springy.\n' +
      '4. For the sauce, melt the butter, muscovado sugar and double cream together and simmer for 3 minutes.\n' +
      '5. Pour half the sauce over the warm pudding and serve the rest alongside.',
    rawLines: [
      { rawName: 'Dates', rawMeasure: '200g, stoned' },
      { rawName: 'Butter', rawMeasure: '175g' },
      { rawName: 'Muscovado sugar', rawMeasure: '250g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Self-raising flour', rawMeasure: '200g' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Water', rawMeasure: '250ml boiling' },
    ],
  },
  {
    title: 'Apple crumble',
    servingsBase: 6,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Peel, core and slice the apples and toss with half the sugar and a little cinnamon.\n' +
      '2. Tip into a baking dish.\n' +
      '3. Rub the butter into the flour until it resembles breadcrumbs, then stir in the remaining sugar and the oats.\n' +
      '4. Scatter the crumble evenly over the apples.\n' +
      '5. Bake for 35–40 minutes until golden and bubbling. Serve with custard.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '6 cooking' },
      { rawName: 'Plain flour', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '100g, cold' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Oats', rawMeasure: '50g' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Custard', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Chocolate brownies',
    servingsBase: 12,
    totalTimeMinutes: 45,
    course: 'Dessert',
    cuisine: 'American',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a square tin.\n' +
      '2. Melt the plain chocolate and butter together, then leave to cool a little.\n' +
      '3. Whisk the eggs and caster sugar until thick and pale, then fold in the chocolate mixture.\n' +
      '4. Sift in the flour and cocoa powder and fold until just combined, then pour into the tin.\n' +
      '5. Bake for 22–25 minutes until set with a slight wobble, then cool before cutting into squares.',
    rawLines: [
      { rawName: 'Plain chocolate', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '175g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Caster sugar', rawMeasure: '250g' },
      { rawName: 'Plain flour', rawMeasure: '100g' },
      { rawName: 'Cocoa powder', rawMeasure: '40g' },
    ],
  },
  {
    title: 'Lemon drizzle cake',
    servingsBase: 10,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a loaf tin.\n' +
      '2. Cream the butter and caster sugar, beat in the eggs, then fold in the flour and the zest of the lemons.\n' +
      '3. Spoon into the tin and bake for 45–50 minutes until risen and a skewer comes out clean.\n' +
      '4. Mix the lemon juice with the icing sugar and prick the warm cake all over.\n' +
      '5. Spoon the drizzle over so it soaks in, then leave to cool before slicing.',
    rawLines: [
      { rawName: 'Butter', rawMeasure: '175g, softened' },
      { rawName: 'Caster sugar', rawMeasure: '175g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Self-raising flour', rawMeasure: '175g' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Icing sugar', rawMeasure: '85g' },
    ],
  },
  {
    title: 'Rice pudding',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C). Butter an ovenproof dish.\n' +
      '2. Tip in the pudding rice and sugar, then pour over the milk and stir.\n' +
      '3. Dot the surface with butter and grate over a little nutmeg.\n' +
      '4. Bake for 1 hour 45 minutes, stirring after the first 30 minutes, until thick and creamy with a golden skin.\n' +
      '5. Serve warm, with a spoonful of jam if you like.',
    rawLines: [
      { rawName: 'Pudding rice', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '800ml' },
      { rawName: 'Caster sugar', rawMeasure: '50g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Jam', rawMeasure: 'to serve (optional)' },
    ],
  },
  {
    title: 'Eton mess',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Hull and roughly chop the strawberries, setting a few aside for the top.\n' +
      '2. Crush a third of the strawberries to a rough purée with a little icing sugar.\n' +
      '3. Whip the double cream to soft peaks.\n' +
      '4. Gently fold the chopped strawberries, broken meringue and purée through the cream for a rippled effect.\n' +
      '5. Spoon into glasses, top with the reserved strawberries and serve at once.',
    rawLines: [
      { rawName: 'Strawberries', rawMeasure: '400g' },
      { rawName: 'Double cream', rawMeasure: '300ml' },
      { rawName: 'Meringue nests', rawMeasure: '4' },
      { rawName: 'Icing sugar', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Flapjacks',
    servingsBase: 12,
    totalTimeMinutes: 40,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a square tin.\n' +
      '2. Melt the butter, golden syrup and muscovado sugar together in a pan over a low heat.\n' +
      '3. Stir in the oats until evenly coated.\n' +
      '4. Press firmly into the tin and bake for 20–25 minutes until golden at the edges.\n' +
      '5. Mark into bars while warm, then leave to cool completely before cutting.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '350g' },
      { rawName: 'Butter', rawMeasure: '200g' },
      { rawName: 'Golden syrup', rawMeasure: '3 tbsp' },
      { rawName: 'Muscovado sugar', rawMeasure: '100g' },
    ],
  },
  {
    title: 'Scones with jam and cream',
    servingsBase: 8,
    totalTimeMinutes: 30,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Rub the cold butter into the flour and baking powder until like fine breadcrumbs, then stir in the sugar.\n' +
      '2. Make a well, pour in most of the milk and bring together to a soft dough, adding the rest if needed.\n' +
      '3. Pat out to 2cm thick and stamp out rounds with a cutter.\n' +
      '4. Brush the tops with a little milk and bake for 10–12 minutes until risen and golden.\n' +
      '5. Cool a little, then split and serve with clotted cream and jam.',
    rawLines: [
      { rawName: 'Self-raising flour', rawMeasure: '350g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '85g, cold' },
      { rawName: 'Caster sugar', rawMeasure: '30g' },
      { rawName: 'Milk', rawMeasure: '175ml' },
      { rawName: 'Clotted cream', rawMeasure: 'to serve' },
      { rawName: 'Jam', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Banana bread',
    servingsBase: 10,
    totalTimeMinutes: 70,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a loaf tin.\n' +
      '2. Mash the ripe bananas to a purée.\n' +
      '3. Cream the butter and sugar, beat in the eggs, then fold in the mashed banana.\n' +
      '4. Fold in the flour and baking powder until just combined, then spoon into the tin.\n' +
      '5. Bake for 50–55 minutes until a skewer comes out clean, then cool before slicing.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '3 ripe' },
      { rawName: 'Butter', rawMeasure: '125g' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Plain flour', rawMeasure: '225g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
    ],
  },
]
