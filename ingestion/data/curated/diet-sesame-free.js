// Curated SESAME-FREE recipes for Larder (per-diet floor seed).
//
// Each record is culinary content ONLY — the source/sourceId/imageUrl
// boilerplate is added by sources/curated.js (mapCurated). Ingredient lines
// use vocabulary from data/ingredients.js so they resolve cleanly. Method prose
// is original, written fresh in British English. No website wording is copied.
//
// HARD GUARANTEE — every recipe here STRICTLY satisfies "Sesame-free":
//   • NO sesame seeds (whole, hulled, black or toasted), and nothing coated or
//     finished with them (no sesame-seeded buns, no seeded crackers).
//   • NO tahini (sesame paste) — and therefore no classic hummus, halva, or
//     baba ghanoush, which lean on it.
//   • NO sesame oil (toasted or plain) and no sesame sauce. Where an Asian
//     dish would normally finish with sesame oil, a neutral oil or a splash of
//     groundnut/vegetable oil is used instead.
//   Sesame is one of the 14 UK FSA major allergens, so cross-checking the lines
//   against these three exclusions is the whole job of this file.
//
// dietLabels/healthLabels are tagged HONESTLY: every record carries the
// 'Sesame-free' label (the floor this file seeds), plus any other label the
// dish genuinely satisfies (Vegetarian, Vegan, Gluten-free, Dairy-free,
// Pescatarian, Nut-free, etc.) based on its actual ingredient list.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  // ── Soups & light lunches ──────────────────────────────────────────────────
  {
    title: 'Roast tomato and basil soup',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Tip the tomatoes, onion and garlic into a roasting tin, trickle over the olive oil and season well.\n' +
      '2. Roast for 30 minutes, turning once, until the tomatoes have slumped and caught a little colour at the edges.\n' +
      '3. Scrape everything into a pan, add the passata and stock and bring to a gentle simmer for 10 minutes.\n' +
      '4. Blitz smooth with a stick blender, then stir through the torn basil and check the seasoning.\n' +
      '5. Serve hot with crusty bread.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '800g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Passata', rawMeasure: '200ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Basil', rawMeasure: 'a handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Carrot and lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Warm the olive oil in a large pan and soften the onion for 5 minutes. Stir in the cumin and cook for a minute until fragrant.\n' +
      '2. Add the carrots and lentils, stir to coat, then pour in the stock.\n' +
      '3. Simmer for 25 minutes until the lentils are soft and the carrots tender.\n' +
      '4. Blitz to a rough purée, loosen with a little water if needed and season generously.\n' +
      '5. Serve scattered with chopped coriander.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '500g' },
      { rawName: 'Lentils', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Coriander', rawMeasure: 'a small bunch' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Leek and potato soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Melt the butter in a large pan and soften the leeks and onion gently for 8–10 minutes, stirring, until collapsed but not coloured.\n' +
      '2. Add the diced potato and stir to coat, then pour in the stock and bring to a simmer.\n' +
      '3. Cook for 20 minutes until the potato is completely tender.\n' +
      '4. Blitz smooth with a stick blender, then stir through the milk and season generously.\n' +
      '5. Warm through without boiling and serve.',
    rawLines: [
      { rawName: 'Leek', rawMeasure: '3' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced butternut squash soup',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the squash with the olive oil and roast for 30 minutes until tender and golden.\n' +
      '2. Meanwhile soften the onion and garlic in a large pan for 6 minutes, then stir in the curry powder and cook for a minute.\n' +
      '3. Tip in the roasted squash, pour over the stock and simmer for 10 minutes.\n' +
      '4. Blitz smooth, stir through the coconut milk and season.\n' +
      '5. Serve hot, swirled with a little extra coconut milk.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '1 large, peeled and cubed' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Curry powder', rawMeasure: '1 tsp' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Minestrone',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Sesame-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the onion, carrot and celery for 8 minutes.\n' +
      '2. Stir in the garlic and tomato purée and cook for a minute, then add the chopped tomatoes and stock.\n' +
      '3. Simmer for 15 minutes, then add the cannellini beans and pasta.\n' +
      '4. Cook for a further 10 minutes until the pasta is tender, stirring now and then.\n' +
      '5. Season well, stir through the parsley and serve.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Pasta', rawMeasure: '100g small shapes' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Parsley', rawMeasure: 'a handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
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
    dietLabels: ['Sesame-free', 'Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Melt the butter in a pan and soften the onion for 5 minutes without colouring.\n' +
      '2. Add the peas and stock, bring to the boil and simmer for 5 minutes until the peas are bright and tender.\n' +
      '3. Add the mint leaves, then blitz smooth.\n' +
      '4. Stir through the cream, season to taste and warm gently.\n' +
      '5. Serve at once.',
    rawLines: [
      { rawName: 'Peas', rawMeasure: '500g frozen' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Mint', rawMeasure: 'a small bunch' },
      { rawName: 'Double cream', rawMeasure: '50ml' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jacket potato with cheese and beans',
    servingsBase: 2,
    totalTimeMinutes: 75,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes all over, rub with a little olive oil and salt, and bake directly on the shelf for 60–70 minutes until crisp outside and fluffy within.\n' +
      '2. Warm the baked beans in a small pan.\n' +
      '3. Split the potatoes open, fork through a knob of butter and season.\n' +
      '4. Spoon over the beans, scatter with the grated Cheddar and serve straight away.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '2 large baking' },
      { rawName: 'Baked beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cheddar cheese', rawMeasure: '60g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cheese and tomato omelette',
    servingsBase: 1,
    totalTimeMinutes: 12,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Gluten-free', 'Nut-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Beat the eggs with a little salt and pepper.\n' +
      '2. Melt the butter in a non-stick pan over a medium heat until foaming.\n' +
      '3. Pour in the eggs and, as they set at the edges, draw them into the centre and tilt the pan so the runny egg flows out.\n' +
      '4. When almost set, scatter over the halved cherry tomatoes and grated cheese.\n' +
      '5. Fold over and slide onto a plate. Serve immediately.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Cheddar cheese', rawMeasure: '40g' },
      { rawName: 'Cherry tomato', rawMeasure: '6' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna mayo jacket filling',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Pescatarian', 'Gluten-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Drain the tuna well and flake it into a bowl.\n' +
      '2. Stir through the mayonnaise, sliced spring onion and sweetcorn.\n' +
      '3. Squeeze in a little lemon juice and season with salt and pepper.\n' +
      '4. Pile into split baked potatoes or onto toast.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '2 tins (160g each), drained' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Sweetcorn', rawMeasure: '100g' },
      { rawName: 'Lemon', rawMeasure: '0.5' },
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
    dietLabels: ['Sesame-free', 'Vegetarian', 'Gluten-free', 'Nut-free', 'Mediterranean', 'Low-carb'],
    instructions:
      '1. Cut the tomatoes into wedges and the cucumber into thick half-moons, then tip into a large bowl.\n' +
      '2. Add the sliced red onion, olives and chunks of feta.\n' +
      '3. Whisk the olive oil with the dried oregano and a squeeze of lemon, then pour over.\n' +
      '4. Toss gently, season with black pepper and serve.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '0.5' },
      { rawName: 'Red onion', rawMeasure: '0.5' },
      { rawName: 'Olives', rawMeasure: '100g' },
      { rawName: 'Feta', rawMeasure: '200g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Lemon', rawMeasure: '0.5' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Chicken & poultry mains ────────────────────────────────────────────────
  {
    title: 'Roast chicken with lemon and thyme',
    servingsBase: 4,
    totalTimeMinutes: 100,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Gluten-free', 'Dairy-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the chicken in a roasting tin and rub all over with olive oil, salt and pepper.\n' +
      '2. Halve the lemon and tuck it inside the cavity with the thyme sprigs.\n' +
      '3. Roast for 1 hour 20 minutes, basting once or twice, until the juices run clear when the thickest part of the thigh is pierced.\n' +
      '4. Rest, loosely covered, for 15 minutes before carving.\n' +
      '5. Serve with the pan juices spooned over.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1 (about 1.6kg)' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Thyme', rawMeasure: 'a few sprigs' },
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
    dietLabels: ['Sesame-free', 'Nut-free'],
    instructions:
      '1. Brown the diced chicken in a little olive oil, then lift out. Soften the onion and mushrooms in the same pan for 8 minutes.\n' +
      '2. Stir in the flour and cook for a minute, then gradually add the stock and milk, stirring until thick.\n' +
      '3. Return the chicken, season and simmer for 10 minutes. Stir through the parsley and tip into a pie dish.\n' +
      '4. Roll out the pastry, lay it over the filling, trim and crimp the edges, then brush with beaten egg.\n' +
      '5. Bake at 200°C (fan 180°C) for 30 minutes until deep golden. Rest briefly before serving.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g, diced' },
      { rawName: 'Mushroom', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Milk', rawMeasure: '150ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 250ml' },
      { rawName: 'Puff pastry', rawMeasure: '1 sheet' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
      { rawName: 'Parsley', rawMeasure: 'a handful' },
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
    dietLabels: ['Sesame-free', 'Gluten-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Mix the diced chicken with the yoghurt, half the garam masala and a little salt, then leave to marinate for 20 minutes.\n' +
      '2. Sear the chicken in a little oil until browned, then set aside.\n' +
      '3. Soften the onion, garlic and ginger, stir in the remaining garam masala, turmeric and curry powder and cook for a minute.\n' +
      '4. Add the chopped tomatoes and simmer for 10 minutes, then return the chicken and pour in the cream.\n' +
      '5. Simmer for 10 minutes until thick, season and scatter with coriander. Serve with rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g, diced' },
      { rawName: 'Natural yoghurt', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '0.5 tsp' },
      { rawName: 'Curry powder', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Coriander', rawMeasure: 'a handful' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g, to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemon and herb roast chicken thighs',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Gluten-free', 'Dairy-free', 'Nut-free', 'High-protein', 'Low-carb'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Put the chicken thighs in a roasting tin.\n' +
      '2. Mix the olive oil, lemon juice, crushed garlic, oregano and thyme, then rub all over the chicken and season.\n' +
      '3. Roast skin-side up for 35–40 minutes until golden and cooked through.\n' +
      '4. Spoon the pan juices over and serve with a green salad or new potatoes.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Thyme', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
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
    dietLabels: ['Sesame-free', 'Dairy-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Slice the chicken into strips and toss with the fajita seasoning and a little oil.\n' +
      '2. Heat a large frying pan until hot and cook the chicken for 5–6 minutes until coloured and cooked through. Lift out.\n' +
      '3. Add the sliced peppers and onion and fry for 5 minutes until softened and charred at the edges.\n' +
      '4. Return the chicken, squeeze over the lime and toss together.\n' +
      '5. Pile into warm tortilla wraps with a spoonful of salsa.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g' },
      { rawName: 'Mixed peppers', rawMeasure: '3' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Fajita seasoning', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Tortilla wrap', rawMeasure: '8' },
      { rawName: 'Salsa', rawMeasure: '4 tbsp' },
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
    dietLabels: ['Sesame-free', 'Gluten-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Brown the chicken thighs in a little butter in a heavy casserole, then lift out.\n' +
      '2. Fry the bacon lardons, onion and mushrooms until golden, then stir in the garlic.\n' +
      '3. Return the chicken, pour in the red wine and stock and tuck in the bay and thyme.\n' +
      '4. Cover and simmer gently for 1 hour until the chicken is tender and the sauce rich.\n' +
      '5. Season and serve with mash or crusty bread.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Bacon lardon', rawMeasure: '150g' },
      { rawName: 'Mushroom', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Red wine', rawMeasure: '300ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Thyme', rawMeasure: 'a few sprigs' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Honey mustard roast chicken drumsticks',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Gluten-free', 'Dairy-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Whisk the honey, mustard, olive oil and a squeeze of lemon in a large bowl.\n' +
      '2. Add the drumsticks and turn to coat thoroughly.\n' +
      '3. Tip into a roasting tin, season and roast for 40 minutes, turning halfway, until sticky and cooked through.\n' +
      '4. Rest for a few minutes, then serve with the pan juices.',
    rawLines: [
      { rawName: 'Chicken drumstick', rawMeasure: '8' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Mustard', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '0.5' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and chorizo rice',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Sesame-free', 'Gluten-free', 'Dairy-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Brown the diced chicken in a little olive oil in a wide pan, then lift out.\n' +
      '2. Fry the sliced chorizo until its oil runs, then add the onion, pepper and garlic and soften for 6 minutes.\n' +
      '3. Stir in the paprika and rice, coating the grains, then return the chicken.\n' +
      '4. Pour in the stock, bring to a simmer, cover and cook for 20 minutes until the rice is tender and the liquid absorbed.\n' +
      '5. Season, rest for 5 minutes and serve with lemon wedges.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '500g, diced' },
      { rawName: 'Chorizo', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey meatballs in tomato sauce',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Sesame-free', 'Dairy-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Mix the turkey mince with the breadcrumbs, half the garlic, the oregano and seasoning, then roll into small balls.\n' +
      '2. Brown the meatballs in a little olive oil, turning, then lift out.\n' +
      '3. Soften the onion and remaining garlic in the pan, add the chopped tomatoes and tomato purée and simmer for 10 minutes.\n' +
      '4. Return the meatballs and simmer for 12 minutes until cooked through.\n' +
      '5. Season, scatter with basil and serve with pasta.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Breadcrumbs', rawMeasure: '50g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Basil', rawMeasure: 'a handful' },
      { rawName: 'Pasta', rawMeasure: '300g, to serve' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken Caesar-style salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['Sesame-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Season the chicken breasts and pan-fry in a little olive oil for 6–7 minutes each side until golden and cooked. Rest, then slice.\n' +
      '2. Whisk the mayonnaise with the Parmesan, lemon juice, crushed garlic and a splash of water to make a creamy dressing.\n' +
      '3. Toss the lettuce with most of the dressing and pile onto plates.\n' +
      '4. Top with the sliced chicken, scatter with croutons made from toasted bread and shave over extra Parmesan.\n' +
      '5. Drizzle with the rest of the dressing and serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Lettuce', rawMeasure: '1 cos/romaine' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '0.5' },
      { rawName: 'Bread', rawMeasure: '2 slices' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Beef, lamb & pork mains ────────────────────────────────────────────────
  {
    title: "Shepherd's pie",
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Gluten-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Brown the minced lamb in a large pan over a high heat, breaking it up, then lift out and set aside.\n' +
      '2. Soften the onion, carrot and celery for 8–10 minutes, then stir in the tomato purée and cook for a minute.\n' +
      '3. Return the lamb, add the stock and Worcestershire sauce, season and simmer for 25 minutes until thick. Stir in the peas.\n' +
      '4. Boil the potatoes until tender, drain and mash with the butter and milk; season.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Spoon the lamb into a dish, top with the mash and fork the surface.\n' +
      '6. Bake for 25–30 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef and ale stew',
    servingsBase: 4,
    totalTimeMinutes: 150,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Dairy-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Toss the stewing beef in seasoned flour. Brown in batches in a little oil in a casserole, then lift out.\n' +
      '2. Soften the onion, carrot and celery for 8 minutes, then stir in the tomato purée.\n' +
      '3. Return the beef, pour in the ale and stock, add the bay and thyme and bring to a simmer.\n' +
      '4. Cover and cook gently for 2 hours until the beef is meltingly tender and the gravy thick.\n' +
      '5. Season and serve with mash or crusty bread.',
    rawLines: [
      { rawName: 'Stewing beef', rawMeasure: '700g' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Beer', rawMeasure: '330ml ale' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Thyme', rawMeasure: 'a few sprigs' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spaghetti bolognese',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Sesame-free', 'Dairy-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Brown the minced beef in a little olive oil, breaking it up, then lift out.\n' +
      '2. Soften the onion, carrot and celery for 8 minutes, then stir in the garlic and tomato purée.\n' +
      '3. Return the beef, add the chopped tomatoes, stock and oregano, and simmer gently for 35 minutes until rich.\n' +
      '4. Meanwhile cook the spaghetti in plenty of salted boiling water until al dente, then drain.\n' +
      '5. Season the sauce, toss with the pasta and serve.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cottage pie',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Gluten-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Brown the minced beef in a large pan over a high heat, then lift out, leaving the fat behind.\n' +
      '2. Soften the onion, carrot and celery for 8–10 minutes, then stir in the tomato purée and cook for a minute.\n' +
      '3. Return the beef, add the stock and Worcestershire sauce, season and simmer for 25–30 minutes until thick.\n' +
      '4. Boil the potatoes until tender, drain and mash with the butter and milk.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Spoon the beef into a dish, top with mash and the grated Cheddar, then bake for 25–30 minutes until golden.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '50g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
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
    dietLabels: ['Sesame-free', 'Gluten-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Brown the diced lamb in a little oil in a heavy pan, then lift out.\n' +
      '2. Soften the onion, garlic and ginger, then stir in the garam masala, paprika, turmeric and a little chilli powder and cook for a minute.\n' +
      '3. Return the lamb, add the chopped tomatoes and yoghurt and bring to a simmer.\n' +
      '4. Cover and cook gently for 1 hour 30 minutes until the lamb is tender and the sauce deep red.\n' +
      '5. Season, scatter with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '700g, diced' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '0.5 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '0.5 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Natural yoghurt', rawMeasure: '100g' },
      { rawName: 'Coriander', rawMeasure: 'a handful' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g, to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork chops with apple sauce',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Gluten-free', 'Dairy-free', 'Nut-free', 'High-protein', 'Low-carb'],
    instructions:
      '1. Peel and chop the apples, then simmer with a splash of water and a pinch of sugar until collapsed into a rough sauce. Keep warm.\n' +
      '2. Season the pork chops well. Heat a little oil in a frying pan and cook for 5–6 minutes each side until golden and just cooked through.\n' +
      '3. Rest the chops for a few minutes.\n' +
      '4. Serve with the warm apple sauce and a pile of greens.',
    rawLines: [
      { rawName: 'Pork chop', rawMeasure: '4' },
      { rawName: 'Apple', rawMeasure: '2 Bramley' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sausage and bean casserole',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Dairy-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Brown the sausages in a little oil in a casserole, then lift out and slice into chunks.\n' +
      '2. Soften the onion and pepper for 6 minutes, then stir in the garlic and paprika.\n' +
      '3. Add the chopped tomatoes, cannellini beans and stock, then return the sausages.\n' +
      '4. Simmer gently for 25 minutes until thick and rich.\n' +
      '5. Season and serve with crusty bread.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '8' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Slow-roast pork shoulder',
    servingsBase: 6,
    totalTimeMinutes: 300,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Gluten-free', 'Dairy-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Score the skin of the pork, rub all over with oil and plenty of salt and sit on a bed of sliced onion.\n' +
      '2. Roast for 30 minutes to start the crackling, then lower to 160°C (fan 140°C).\n' +
      '3. Pour the stock into the tin and roast for a further 4 hours until the meat pulls apart easily.\n' +
      '4. If the crackling needs more crunch, blast under a hot grill for a few minutes.\n' +
      '5. Rest for 20 minutes, then pull the meat and serve with the pan juices.',
    rawLines: [
      { rawName: 'Pork shoulder', rawMeasure: '2kg, bone-in' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '2 tbsp flaky' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef chilli con carne',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Sesame-free', 'Gluten-free', 'Dairy-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Brown the minced beef in a little oil, breaking it up, then lift out.\n' +
      '2. Soften the onion and pepper for 6 minutes, then stir in the garlic, cumin, paprika and chilli powder.\n' +
      '3. Return the beef, add the chopped tomatoes, kidney beans and stock, and simmer for 35 minutes until thick.\n' +
      '4. Season well and serve with rice.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Rice', rawMeasure: '300g, to serve' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb hotpot',
    servingsBase: 4,
    totalTimeMinutes: 150,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Gluten-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Brown the lamb in a little oil in a casserole, then lift out.\n' +
      '2. Soften the onion and carrot for 6 minutes, stir in the flour, then gradually add the stock and Worcestershire sauce.\n' +
      '3. Return the lamb, season and bring to a simmer.\n' +
      '4. Layer the thinly sliced potatoes over the top, brush with melted butter and season.\n' +
      '5. Cover and bake for 1 hour 30 minutes, then uncover and bake for 30 minutes more until the potatoes are golden.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '600g, diced' },
      { rawName: 'Potato', rawMeasure: '700g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bangers and mash with onion gravy',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Fry the sausages gently in a little oil for 15–20 minutes, turning, until browned and cooked through.\n' +
      '2. Boil the potatoes until tender, drain and mash with the butter and milk; season.\n' +
      '3. For the gravy, soften the sliced onions in the same pan until deep gold, stir in the flour, then gradually add the stock.\n' +
      '4. Simmer until thick and glossy, then season.\n' +
      '5. Pile the mash onto plates, top with the sausages and pour over the gravy.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '8' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Fish & seafood mains ───────────────────────────────────────────────────
  {
    title: 'Classic fish and chips',
    servingsBase: 2,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Pescatarian', 'Dairy-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Cut the potatoes into thick chips and parboil for 5 minutes, then drain and steam-dry.\n' +
      '2. Heat a deep pan of vegetable oil to 180°C. Fry the chips until pale and tender, then lift out.\n' +
      '3. Whisk the flour with cold sparkling water and a pinch of salt to a thick batter.\n' +
      '4. Dip the fish fillets in the batter and fry for 6–7 minutes until crisp and golden.\n' +
      '5. Return the chips to the hot oil to crisp, then drain everything on kitchen paper, season and serve with lemon.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2 (about 180g each)' },
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Plain flour', rawMeasure: '150g' },
      { rawName: 'Soda water', rawMeasure: '200ml' },
      { rawName: 'Vegetable oil', rawMeasure: 'for deep-frying' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked salmon with lemon and dill',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Nut-free', 'High-protein', 'Low-carb'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the salmon fillets on a lined tray.\n' +
      '2. Trickle over the olive oil, squeeze on the lemon and scatter with chopped dill, salt and pepper.\n' +
      '3. Bake for 12–14 minutes until the salmon flakes easily.\n' +
      '4. Serve with lemon wedges and new potatoes or greens.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Dill', rawMeasure: 'a few sprigs' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn linguine with garlic and chilli',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Sesame-free', 'Pescatarian', 'Dairy-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Cook the linguine in plenty of salted boiling water until al dente.\n' +
      '2. Meanwhile gently warm the olive oil with the sliced garlic and chilli flakes until fragrant, not browned.\n' +
      '3. Add the prawns and cook for 2–3 minutes until pink and just cooked.\n' +
      '4. Drain the pasta, reserving a little water, and toss into the pan with the parsley and a squeeze of lemon.\n' +
      '5. Loosen with pasta water, season and serve.',
    rawLines: [
      { rawName: 'Linguine', rawMeasure: '200g' },
      { rawName: 'Prawns', rawMeasure: '250g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '0.5 tsp' },
      { rawName: 'Parsley', rawMeasure: 'a handful' },
      { rawName: 'Lemon', rawMeasure: '0.5' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Fish pie',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Pescatarian', 'Nut-free', 'High-protein'],
    instructions:
      '1. Boil the potatoes until tender, drain and mash with a little butter and milk; season.\n' +
      '2. Poach the fish fillets and prawns gently in the milk for 5 minutes, then lift out and flake, reserving the milk.\n' +
      '3. Melt the butter, stir in the flour, then gradually whisk in the warm milk to make a smooth sauce. Stir in the parsley.\n' +
      '4. Fold the fish and peas into the sauce, tip into a dish and top with the mash.\n' +
      '5. Bake at 200°C (fan 180°C) for 25–30 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '400g' },
      { rawName: 'Prawns', rawMeasure: '150g' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Parsley', rawMeasure: 'a handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked haddock with poached egg',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Pescatarian', 'Gluten-free', 'Nut-free', 'High-protein', 'Low-carb'],
    instructions:
      '1. Bring the milk to a gentle simmer in a wide pan with a knob of butter.\n' +
      '2. Slide in the smoked haddock and poach for 6–8 minutes until it flakes.\n' +
      '3. Meanwhile poach the eggs in a pan of barely simmering water with a splash of vinegar for 3 minutes.\n' +
      '4. Lift the fish onto plates, top each with a poached egg, season with black pepper and scatter with chives.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '2 fillets' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Vinegar', rawMeasure: '1 tsp' },
      { rawName: 'Chives', rawMeasure: 'a few, snipped' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna pasta bake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Pescatarian', 'Nut-free', 'High-protein'],
    instructions:
      '1. Cook the pasta until just tender, then drain.\n' +
      '2. Melt the butter, stir in the flour, then gradually whisk in the milk to a smooth sauce. Stir in most of the Cheddar until melted.\n' +
      '3. Fold the drained tuna, sweetcorn and pasta into the sauce and season.\n' +
      '4. Tip into a baking dish, scatter with the remaining cheese and bake at 200°C (fan 180°C) for 20 minutes until golden.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '300g' },
      { rawName: 'Tuna', rawMeasure: '2 tins (160g each), drained' },
      { rawName: 'Sweetcorn', rawMeasure: '150g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cod in tomato and olive sauce',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Sesame-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Nut-free', 'Mediterranean', 'High-protein', 'Low-carb'],
    instructions:
      '1. Soften the onion and garlic in the olive oil for 6 minutes.\n' +
      '2. Add the chopped tomatoes and olives and simmer for 10 minutes until thickened.\n' +
      '3. Nestle the cod fillets into the sauce, cover and cook gently for 8–10 minutes until the fish flakes.\n' +
      '4. Season, scatter with parsley and serve with crusty bread or rice.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2 cod' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Parsley', rawMeasure: 'a handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Salmon and broccoli traybake',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Nut-free', 'High-protein', 'Low-carb'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the broccoli and cherry tomatoes with olive oil and seasoning on a large tray and roast for 10 minutes.\n' +
      '2. Make space and add the salmon fillets, squeeze over the lemon and season.\n' +
      '3. Roast for a further 12–14 minutes until the salmon flakes and the vegetables are tender.\n' +
      '4. Serve straight from the tray.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Broccoli', rawMeasure: '1 head, in florets' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Vegetarian & vegan mains ───────────────────────────────────────────────
  {
    title: 'Macaroni cheese',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Cook the macaroni until just tender, then drain.\n' +
      '2. Melt the butter, stir in the flour and cook for a minute, then gradually whisk in the milk to a smooth sauce.\n' +
      '3. Stir in the mustard and most of the Cheddar until melted and glossy; season.\n' +
      '4. Fold in the pasta, tip into a dish, scatter with the remaining cheese.\n' +
      '5. Bake at 200°C (fan 180°C) for 20 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '300g macaroni' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Cheddar cheese', rawMeasure: '200g' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable curry with chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Sesame-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Soften the onion, garlic and ginger in the oil for 6 minutes, then stir in the curry powder, cumin and turmeric and cook for a minute.\n' +
      '2. Add the cauliflower, sweet potato and chopped tomatoes and stir to coat.\n' +
      '3. Pour in the coconut milk, bring to a simmer and cook for 20 minutes until the vegetables are tender.\n' +
      '4. Stir in the chickpeas and spinach and cook for 5 minutes more.\n' +
      '5. Season, scatter with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '0.5 head, in florets' },
      { rawName: 'Sweet potato', rawMeasure: '1 large, diced' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '0.5 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Coriander', rawMeasure: 'a handful' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g, to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Margherita pizza',
    servingsBase: 2,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Mix the flour, yeast and salt, add the warm water and olive oil and bring together into a dough. Knead for 10 minutes until smooth, then prove for 1 hour.\n' +
      '2. Heat the oven as hot as it will go with a baking tray inside.\n' +
      '3. Stretch the dough into rounds and spread thinly with passata.\n' +
      '4. Tear over the mozzarella, season and slide onto the hot tray.\n' +
      '5. Bake for 8–10 minutes until the base is crisp and the cheese bubbling. Scatter with basil and serve.',
    rawLines: [
      { rawName: 'Strong white bread flour', rawMeasure: '300g' },
      { rawName: 'Fast-action yeast', rawMeasure: '1 tsp' },
      { rawName: 'Water', rawMeasure: '190ml warm' },
      { rawName: 'Passata', rawMeasure: '150ml' },
      { rawName: 'Mozzarella', rawMeasure: '1 ball' },
      { rawName: 'Basil', rawMeasure: 'a handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Mushroom risotto',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Warm the stock and keep it on a low simmer.\n' +
      '2. Soften the onion in butter and a little olive oil, then add the sliced mushrooms and cook until golden.\n' +
      '3. Stir in the rice for a minute, then add the white wine and let it bubble away.\n' +
      '4. Add the stock a ladle at a time, stirring, until each is absorbed and the rice is creamy and tender, about 20 minutes.\n' +
      '5. Stir in the Parmesan and a knob of butter, season and serve with parsley.',
    rawLines: [
      { rawName: 'Rice', rawMeasure: '300g risotto' },
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'White wine', rawMeasure: '100ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Parsley', rawMeasure: 'a handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable lasagne',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Soften the onion, courgette, pepper and mushrooms in olive oil for 10 minutes, then add the garlic, chopped tomatoes and oregano and simmer for 15 minutes.\n' +
      '2. For the white sauce, melt the butter, stir in the flour, then whisk in the milk until smooth and thick. Stir in half the cheese.\n' +
      '3. Layer the vegetable sauce, lasagne sheets and white sauce in a dish, finishing with white sauce.\n' +
      '4. Scatter over the remaining cheese.\n' +
      '5. Bake at 190°C (fan 170°C) for 40 minutes until golden and bubbling. Rest before serving.',
    rawLines: [
      { rawName: 'Lasagne sheets', rawMeasure: '12' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced lentil dahl',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Sesame-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Soften the onion, garlic and ginger in the oil for 6 minutes, then stir in the cumin, turmeric and garam masala.\n' +
      '2. Add the lentils and stir to coat, then pour in the stock.\n' +
      '3. Simmer for 25–30 minutes, stirring now and then, until the lentils are soft and the dahl thick.\n' +
      '4. Stir through the spinach until wilted, season and finish with a squeeze of lemon.\n' +
      '5. Scatter with coriander and serve with rice or naan.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g red' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '0.5 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Lemon', rawMeasure: '0.5' },
      { rawName: 'Coriander', rawMeasure: 'a handful' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed peppers with rice and feta',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Gluten-free', 'Nut-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve and deseed the peppers and sit them in a baking dish.\n' +
      '2. Soften the onion and garlic in olive oil, stir in the cooked rice, chopped tomatoes and oregano and warm through.\n' +
      '3. Crumble in most of the feta and season.\n' +
      '4. Spoon the filling into the peppers, scatter with the remaining feta and trickle with oil.\n' +
      '5. Bake for 35–40 minutes until the peppers are tender and the tops golden.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4' },
      { rawName: 'Rice', rawMeasure: '200g, cooked' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '200g' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sweet potato and black bean chilli',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Sesame-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Soften the onion and pepper in the oil for 6 minutes, then stir in the garlic, cumin, paprika and chilli powder.\n' +
      '2. Add the diced sweet potato, chopped tomatoes and stock and simmer for 20 minutes until the sweet potato is tender.\n' +
      '3. Stir in the black beans and cook for 5 minutes more.\n' +
      '4. Season, squeeze in a little lime and scatter with coriander.\n' +
      '5. Serve with rice.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '2, diced' },
      { rawName: 'Black beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'a handful' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Rice', rawMeasure: '300g, to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cauliflower cheese',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Gluten-free', 'Nut-free', 'Low-carb'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Boil the cauliflower florets for 5 minutes until just tender, then drain well.\n' +
      '2. Melt the butter, stir in the cornflour, then gradually whisk in the milk to a smooth sauce.\n' +
      '3. Stir in the mustard and most of the Cheddar until melted; season.\n' +
      '4. Tip the cauliflower into a dish, pour over the sauce and scatter with the remaining cheese.\n' +
      '5. Bake for 25 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large head' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Cornflour', rawMeasure: '2 tbsp' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Falafel-style chickpea patties',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Sesame-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Blitz the chickpeas with the onion, garlic, cumin, ground coriander and parsley to a coarse paste, then stir in the flour and season.\n' +
      '2. Shape into small patties and chill for 10 minutes.\n' +
      '3. Heat a little oil in a frying pan and cook the patties for 3–4 minutes each side until crisp and golden.\n' +
      '4. Serve in warm pitta with salad and a squeeze of lemon, finished simply with a trickle of olive oil rather than a seed-paste dressing.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each), drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: 'a handful' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tomato and basil pasta',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Sesame-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Nut-free'],
    instructions:
      '1. Cook the pasta in plenty of salted boiling water until al dente.\n' +
      '2. Meanwhile gently soften the garlic in the olive oil, then add the chopped tomatoes and a pinch of sugar and simmer for 10 minutes.\n' +
      '3. Drain the pasta, reserving a little water, and toss into the sauce with the torn basil.\n' +
      '4. Loosen with pasta water, season and serve.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '400g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Basil', rawMeasure: 'a large handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi and vegetable traybake',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Gluten-free', 'Nut-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, pepper, red onion and cherry tomatoes with olive oil, oregano and seasoning on a large tray.\n' +
      '2. Roast for 20 minutes until starting to soften and colour.\n' +
      '3. Scatter over the cubed halloumi and roast for a further 12–15 minutes until the cheese is golden.\n' +
      '4. Squeeze over lemon and serve.',
    rawLines: [
      { rawName: 'Feta', rawMeasure: '250g halloumi' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan shepherd-style pie with lentils',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Soften the onion, carrot and celery in olive oil for 8 minutes, then stir in the garlic and tomato purée.\n' +
      '2. Add the lentils, chopped tomatoes and stock and simmer for 25 minutes until thick. Stir in the peas.\n' +
      '3. Boil the potatoes until tender, drain and mash with a splash of the plant milk and a little olive oil; season.\n' +
      '4. Heat the oven to 200°C (fan 180°C). Spoon the lentils into a dish, top with the mash and fork the surface.\n' +
      '5. Bake for 25–30 minutes until golden.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g brown' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Soya milk', rawMeasure: '60ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Salads & sides ─────────────────────────────────────────────────────────
  {
    title: 'Coleslaw',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Gluten-free', 'Nut-free', 'Low-carb'],
    instructions:
      '1. Finely shred the cabbage and carrot and slice the onion thinly.\n' +
      '2. Tip into a large bowl and add the mayonnaise.\n' +
      '3. Squeeze in a little lemon, season and toss thoroughly to coat.\n' +
      '4. Chill for 30 minutes before serving.',
    rawLines: [
      { rawName: 'Cabbage', rawMeasure: '0.5 white' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '0.5' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp' },
      { rawName: 'Lemon', rawMeasure: '0.5' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roast potatoes',
    servingsBase: 6,
    totalTimeMinutes: 70,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Peel and cut the potatoes into large chunks.\n' +
      '2. Parboil in salted water for 8 minutes, then drain and shake in the colander to roughen the edges.\n' +
      '3. Heat the oil in a roasting tin until hot, then tip in the potatoes and turn to coat.\n' +
      '4. Roast for 50 minutes, turning once, until deeply golden and crisp. Season and serve.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '1.2kg' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Garlic bread',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Beat the softened butter with the crushed garlic and chopped parsley.\n' +
      '2. Cut the bread into thick slices, not all the way through.\n' +
      '3. Spread the garlic butter into each cut.\n' +
      '4. Wrap in foil and bake for 12–15 minutes until soft and fragrant, opening the foil for the last few minutes to crisp the top.',
    rawLines: [
      { rawName: 'Crusty bread', rawMeasure: '1 baguette' },
      { rawName: 'Butter', rawMeasure: '80g, softened' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Parsley', rawMeasure: 'a handful' },
    ],
  },
  {
    title: 'Tomato and red onion salad',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Side',
    cuisine: 'Mediterranean',
    dietLabels: ['Sesame-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Nut-free', 'Mediterranean', 'Low-carb'],
    instructions:
      '1. Slice the tomatoes and arrange on a platter.\n' +
      '2. Scatter over the thinly sliced red onion.\n' +
      '3. Whisk the olive oil with the vinegar, season and spoon over.\n' +
      '4. Tear over the basil and serve.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '6' },
      { rawName: 'Red onion', rawMeasure: '0.5' },
      { rawName: 'Basil', rawMeasure: 'a handful' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Buttered new potatoes with mint',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Scrub the new potatoes and halve any large ones.\n' +
      '2. Boil in salted water for 15–18 minutes until tender, then drain.\n' +
      '3. Return to the pan with the butter and toss to coat.\n' +
      '4. Stir through the chopped mint, season and serve.',
    rawLines: [
      { rawName: 'New potatoes', rawMeasure: '800g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Mint', rawMeasure: 'a small bunch' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Honey-roast carrots and parsnips',
    servingsBase: 6,
    totalTimeMinutes: 50,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the carrots and parsnips into batons and tip into a roasting tin.\n' +
      '2. Trickle over the olive oil and honey, season and toss to coat.\n' +
      '3. Roast for 40 minutes, turning once, until caramelised and tender.\n' +
      '4. Serve straight from the tin.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '4' },
      { rawName: 'Parsnip', rawMeasure: '4' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Breakfast & brunch ─────────────────────────────────────────────────────
  {
    title: 'Full English breakfast',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Nut-free', 'High-protein'],
    instructions:
      '1. Fry the sausages gently in a little oil for 12–15 minutes, adding the bacon halfway through.\n' +
      '2. Halve the tomatoes and add to the pan, cut-side down, with the mushrooms.\n' +
      '3. Warm the baked beans in a small pan.\n' +
      '4. Fry the eggs to your liking in the same pan.\n' +
      '5. Serve everything together with buttered toast.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '4' },
      { rawName: 'Bacon', rawMeasure: '4 rashers' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Mushroom', rawMeasure: '100g' },
      { rawName: 'Baked beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Bread', rawMeasure: '2 slices' },
      { rawName: 'Butter', rawMeasure: 'for spreading' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Porridge with banana and honey',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Tip the oats and milk into a pan with a pinch of salt.\n' +
      '2. Bring to a gentle simmer, stirring, and cook for 5 minutes until thick and creamy.\n' +
      '3. Spoon into bowls and top with sliced banana.\n' +
      '4. Drizzle with honey and serve.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Banana', rawMeasure: '1' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Scrambled eggs on toast',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free', 'High-protein'],
    instructions:
      '1. Beat the eggs with a splash of milk and a little salt and pepper.\n' +
      '2. Melt the butter in a non-stick pan over a low heat.\n' +
      '3. Pour in the eggs and stir gently and continuously until softly set and creamy.\n' +
      '4. Pile onto buttered toast and serve at once.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Milk', rawMeasure: '2 tbsp' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Bread', rawMeasure: '2 slices' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Banana and blueberry pancakes',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Whisk the flour, baking powder and a pinch of salt with the egg, milk and mashed banana to a thick batter.\n' +
      '2. Stir in most of the blueberries.\n' +
      '3. Heat a little butter in a non-stick pan and drop in spoonfuls of batter.\n' +
      '4. Cook for 2 minutes until bubbles appear, then flip and cook for a minute more.\n' +
      '5. Stack up and serve with the remaining blueberries and a drizzle of honey.',
    rawLines: [
      { rawName: 'Self-raising flour', rawMeasure: '150g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Milk', rawMeasure: '180ml' },
      { rawName: 'Banana', rawMeasure: '1, mashed' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Butter', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Mushrooms on toast',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Melt the butter in a frying pan and add the sliced mushrooms.\n' +
      '2. Fry over a high heat for 6–8 minutes until golden and any liquid has cooked off.\n' +
      '3. Stir in the garlic and parsley and cook for a minute, then season.\n' +
      '4. Pile onto buttered toast and serve.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Parsley', rawMeasure: 'a handful' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Bread', rawMeasure: '2 slices' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Puddings & bakes ───────────────────────────────────────────────────────
  {
    title: 'Victoria sponge',
    servingsBase: 8,
    totalTimeMinutes: 50,
    course: 'Pudding',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line two sandwich tins.\n' +
      '2. Beat the butter and sugar until pale and fluffy, then beat in the eggs one at a time.\n' +
      '3. Fold in the flour and a little milk to a soft dropping consistency.\n' +
      '4. Divide between the tins and bake for 22–25 minutes until risen and golden.\n' +
      '5. Cool, then sandwich with the jam and a dusting of icing sugar.',
    rawLines: [
      { rawName: 'Self-raising flour', rawMeasure: '200g' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '200g, softened' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Milk', rawMeasure: '1 tbsp' },
      { rawName: 'Jam', rawMeasure: '4 tbsp raspberry' },
      { rawName: 'Icing sugar', rawMeasure: 'to dust' },
    ],
  },
  {
    title: 'Apple crumble',
    servingsBase: 6,
    totalTimeMinutes: 60,
    course: 'Pudding',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Peel, core and slice the apples and toss with half the sugar and a little water, then tip into a baking dish.\n' +
      '2. Rub the butter into the flour until it resembles breadcrumbs, then stir in the remaining sugar.\n' +
      '3. Scatter the crumble evenly over the apples.\n' +
      '4. Bake for 40 minutes until golden and bubbling.\n' +
      '5. Serve hot with custard or cream.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '6 Bramley' },
      { rawName: 'Plain flour', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '100g, cold' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Custard', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Sticky toffee pudding',
    servingsBase: 6,
    totalTimeMinutes: 60,
    course: 'Pudding',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Cover the chopped dates with boiling water and the bicarbonate of soda and leave to soften.\n' +
      '2. Beat the butter and sugar until creamy, then beat in the eggs. Fold in the flour, then the date mixture.\n' +
      '3. Pour into a lined tin and bake for 30–35 minutes until risen and springy.\n' +
      '4. For the sauce, melt the butter, sugar and cream together and simmer until glossy.\n' +
      '5. Pour some sauce over the warm pudding and serve the rest alongside.',
    rawLines: [
      { rawName: 'Dates', rawMeasure: '200g, chopped' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1 tsp' },
      { rawName: 'Self-raising flour', rawMeasure: '175g' },
      { rawName: 'Butter', rawMeasure: '75g, softened' },
      { rawName: 'Brown sugar', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Black treacle', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Chocolate brownies',
    servingsBase: 12,
    totalTimeMinutes: 45,
    course: 'Pudding',
    cuisine: 'American',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a brownie tin.\n' +
      '2. Melt the chocolate and butter together gently, then leave to cool a little.\n' +
      '3. Whisk the eggs and sugar until thick and pale, then fold in the melted chocolate.\n' +
      '4. Fold in the flour and cocoa until just combined.\n' +
      '5. Pour into the tin and bake for 22–25 minutes until set with a slight wobble. Cool before cutting into squares.',
    rawLines: [
      { rawName: 'Plain chocolate', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '175g' },
      { rawName: 'Caster sugar', rawMeasure: '250g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Plain flour', rawMeasure: '100g' },
      { rawName: 'Cocoa powder', rawMeasure: '40g' },
    ],
  },
  {
    title: 'Lemon drizzle cake',
    servingsBase: 10,
    totalTimeMinutes: 60,
    course: 'Pudding',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a loaf tin.\n' +
      '2. Beat the butter and sugar until pale, then beat in the eggs one at a time.\n' +
      '3. Fold in the flour and the lemon zest with a splash of milk.\n' +
      '4. Spoon into the tin and bake for 45 minutes until a skewer comes out clean.\n' +
      '5. Mix the lemon juice with the icing sugar, prick the warm cake all over and spoon the drizzle on top.',
    rawLines: [
      { rawName: 'Self-raising flour', rawMeasure: '200g' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '200g, softened' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Icing sugar', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Rice pudding',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Pudding',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C). Butter an ovenproof dish.\n' +
      '2. Tip in the pudding rice and sugar, pour over the milk and stir.\n' +
      '3. Dot with butter and grate over a little nutmeg.\n' +
      '4. Bake for 1 hour 45 minutes, stirring once after 30 minutes, until thick and creamy with a golden skin.\n' +
      '5. Serve warm, with jam if you like.',
    rawLines: [
      { rawName: 'Pudding rice', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '800ml' },
      { rawName: 'Caster sugar', rawMeasure: '50g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Nutmeg', rawMeasure: 'a grating' },
    ],
  },
  {
    title: 'Eton mess',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Pudding',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Gluten-free', 'Nut-free'],
    instructions:
      '1. Lightly crush the strawberries with a fork, leaving some chunks, and stir in a little sugar.\n' +
      '2. Whip the double cream to soft peaks.\n' +
      '3. Roughly break the meringue nests into pieces.\n' +
      '4. Fold the cream, strawberries and meringue together loosely for a marbled effect.\n' +
      '5. Spoon into glasses and serve straight away.',
    rawLines: [
      { rawName: 'Strawberries', rawMeasure: '400g' },
      { rawName: 'Double cream', rawMeasure: '300ml' },
      { rawName: 'Meringue nests', rawMeasure: '4' },
      { rawName: 'Caster sugar', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Bread and butter pudding',
    servingsBase: 6,
    totalTimeMinutes: 60,
    course: 'Pudding',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Butter the bread, cut into triangles and layer in a dish, scattering sultanas between the layers.\n' +
      '2. Whisk the eggs, milk, cream and sugar together with a little nutmeg.\n' +
      '3. Pour over the bread and leave to soak for 15 minutes.\n' +
      '4. Bake for 35–40 minutes until set and golden on top.\n' +
      '5. Serve warm.',
    rawLines: [
      { rawName: 'Bread', rawMeasure: '8 slices' },
      { rawName: 'Butter', rawMeasure: '50g, softened' },
      { rawName: 'Sultanas', rawMeasure: '75g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Milk', rawMeasure: '400ml' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Caster sugar', rawMeasure: '75g' },
      { rawName: 'Nutmeg', rawMeasure: 'a grating' },
    ],
  },
  {
    title: 'Flapjacks',
    servingsBase: 12,
    totalTimeMinutes: 35,
    course: 'Pudding',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a tin.\n' +
      '2. Melt the butter, sugar and golden syrup together gently until smooth.\n' +
      '3. Stir in the oats until thoroughly coated.\n' +
      '4. Press into the tin and bake for 20–25 minutes until golden at the edges.\n' +
      '5. Mark into bars while warm, then cool in the tin before cutting.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '300g' },
      { rawName: 'Butter', rawMeasure: '150g' },
      { rawName: 'Brown sugar', rawMeasure: '100g' },
      { rawName: 'Golden syrup', rawMeasure: '3 tbsp' },
    ],
  },
  {
    title: 'Scones with jam and cream',
    servingsBase: 8,
    totalTimeMinutes: 30,
    course: 'Pudding',
    cuisine: 'British',
    dietLabels: ['Sesame-free', 'Vegetarian', 'Nut-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Rub the butter into the flour until it resembles breadcrumbs, then stir in the sugar.\n' +
      '2. Add the milk and bring together quickly into a soft dough; do not overwork.\n' +
      '3. Pat out to about 2cm thick and cut into rounds.\n' +
      '4. Brush the tops with a little milk and bake for 12 minutes until risen and golden.\n' +
      '5. Serve warm, split, with jam and clotted cream.',
    rawLines: [
      { rawName: 'Self-raising flour', rawMeasure: '350g' },
      { rawName: 'Butter', rawMeasure: '85g, cold' },
      { rawName: 'Caster sugar', rawMeasure: '3 tbsp' },
      { rawName: 'Milk', rawMeasure: '175ml' },
      { rawName: 'Jam', rawMeasure: 'to serve' },
      { rawName: 'Clotted cream', rawMeasure: 'to serve' },
    ],
  },
]
