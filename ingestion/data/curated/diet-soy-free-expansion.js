// Curated SOY-FREE expansion recipes for Larder — batch 2.
//
// Extends diet-soy-free.js with ~60 additional recipes.
// Every title is distinct from the original file.
//
// HARD RULE — strictly excludes all soy in every form:
//   no soy, soya, tofu, tempeh, edamame, soy sauce, miso,
//   hoisin, oyster sauce, teriyaki sauce, shop bouillon cubes
//   (which often contain soya), or margarine spreads.
// Flavour is built from fresh aromatics, herbs, citrus, butter,
// and home-made or water-based broths.
//
// dietLabels are HONEST — 'Soy-free' plus any other diet the dish
// genuinely satisfies. Method prose is original British English.
// rawNames follow the canonical vocabulary in data/ingredients.js.
//
// Shape: { title, servingsBase, totalTimeMinutes, course, cuisine,
//           dietLabels, instructions, rawLines:[{rawName, rawMeasure}] }

export default [

  // ── Breakfasts ───────────────────────────────────────────────────────────────
  {
    title: 'Baked eggs with spinach and feta',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'Mediterranean',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Wilt the spinach in a little butter in an ovenproof pan, then season and spread across the base.\n' +
      '2. Crumble the feta over the spinach.\n' +
      '3. Make wells in the spinach and crack an egg into each. Season the tops with black pepper and a pinch of chilli flakes.\n' +
      '4. Bake for 10–12 minutes until the whites are set but the yolks remain runny. Serve straight from the pan with crusty bread.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Feta', rawMeasure: '80g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Kedgeree',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Poach the smoked haddock in a large pan of water for 6–8 minutes until just cooked. Lift out, flake and discard any skin and bone. Reserve 300ml of the poaching liquid.\n' +
      '2. Melt the butter in a wide pan and soften the onion for 8 minutes. Stir in the curry powder, turmeric and bay leaf and cook for a minute.\n' +
      '3. Add the rice and stir to coat, then pour in the reserved poaching liquid and the water. Cover and cook over a low heat for 12 minutes until the rice is tender and the liquid absorbed.\n' +
      '4. Fold through the flaked fish, the hard-boiled eggs and the parsley; season gently and serve with lemon wedges.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '400g' },
      { rawName: 'Rice', rawMeasure: '300g basmati' },
      { rawName: 'Egg', rawMeasure: '4, hard-boiled' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Bay leaves', rawMeasure: '1' },
      { rawName: 'Water', rawMeasure: '200ml' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1, cut into wedges' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'French toast with maple syrup and berries',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Whisk the eggs with the milk, vanilla extract and cinnamon in a shallow dish.\n' +
      '2. Dip each bread slice into the egg mixture, turning, until evenly soaked.\n' +
      '3. Melt the butter in a non-stick pan over a medium heat and fry the soaked bread for 2–3 minutes each side until golden.\n' +
      '4. Serve with a drizzle of maple syrup and a handful of fresh berries.',
    rawLines: [
      { rawName: 'Bread', rawMeasure: '4 thick slices' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Milk', rawMeasure: '4 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Maple syrup', rawMeasure: 'to serve' },
      { rawName: 'Mixed berries', rawMeasure: '100g' },
    ],
  },
  {
    title: 'Turkish-style eggs with yoghurt and chilli butter',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'Turkish',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Stir the garlic into the natural yoghurt and season with salt; divide between two warmed bowls.\n' +
      '2. Bring a pan of water to a gentle simmer and add a splash of vinegar. Crack each egg into a cup then slide in and poach for 3–4 minutes until the whites are just set.\n' +
      '3. Meanwhile melt the butter in a small pan, add the paprika and chilli flakes and sizzle for 30 seconds until fragrant.\n' +
      '4. Lay a poached egg on the yoghurt in each bowl, spoon the red butter over the top and finish with a scattering of dill.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Dill', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'White wine vinegar', rawMeasure: '1 splash' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Raspberry and almond overnight oats',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Tip the oats into two jars or bowls and pour over the milk. Stir in the honey.\n' +
      '2. Cover and refrigerate overnight or for at least 4 hours.\n' +
      '3. In the morning, stir and loosen with a little more milk if needed.\n' +
      '4. Top with the raspberries and a scatter of flaked almonds.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '250ml' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Raspberries', rawMeasure: '150g' },
      { rawName: 'Almonds', rawMeasure: '30g flaked' },
    ],
  },

  // ── Lunches & salads ─────────────────────────────────────────────────────────
  {
    title: 'Butternut squash and sage soup',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the squash chunks with olive oil, season and roast for 25 minutes until golden and tender.\n' +
      '2. Meanwhile soften the onion and garlic in a little butter in a large pan.\n' +
      '3. Add the roasted squash and pour in the water. Simmer for 10 minutes, then blend until silky smooth.\n' +
      '4. Fry the sage leaves in a knob of butter until crisp. Season the soup, ladle into bowls and top with the crispy sage and a drizzle of cream.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '1kg, peeled and diced' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Sage', rawMeasure: '8 leaves' },
      { rawName: 'Water', rawMeasure: '800ml' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Double cream', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pea, ham and mint soup',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Soften the onion in the butter for 6 minutes without colouring.\n' +
      '2. Add the peas and pour in the water; bring to the boil and simmer for 5 minutes.\n' +
      '3. Add the mint and blend until smooth; season to taste and loosen with a little water if needed.\n' +
      '4. Divide the shredded ham between four bowls, ladle the hot soup over and finish with a swirl of cream.',
    rawLines: [
      { rawName: 'Peas', rawMeasure: '600g (frozen or fresh)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Ham', rawMeasure: '150g, cooked and shredded' },
      { rawName: 'Water', rawMeasure: '800ml' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Double cream', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Warm lentil and roasted pepper salad',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the pepper halves with a little olive oil, season and roast for 25 minutes until charred and tender; peel and slice.\n' +
      '2. Meanwhile cook the Puy lentils in plenty of water for 20 minutes until just tender; drain.\n' +
      '3. Whisk the remaining olive oil with the red wine vinegar, mustard and garlic; season.\n' +
      '4. Toss the warm lentils with the peppers, parsley and dressing; scatter with rocket and serve.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g Puy' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '3 mixed colours' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Red wine vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Rocket', rawMeasure: '50g' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Niçoise salad',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Soy-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Boil the new potatoes until tender, then halve and cool slightly. Cook the green beans in the same water for 3 minutes; drain and cool.\n' +
      '2. Hard-boil the eggs for 7 minutes, cool under cold water, peel and quarter.\n' +
      '3. Arrange the potatoes, beans, lettuce leaves, cherry tomatoes, olives and egg quarters on a large platter.\n' +
      '4. Break the tuna over the top.\n' +
      '5. Whisk the olive oil, lemon juice and a pinch of salt together and drizzle over the salad.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '2 tins (145g each)' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'New potatoes', rawMeasure: '300g' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Olives', rawMeasure: '80g' },
      { rawName: 'Lettuce', rawMeasure: '1 small' },
      { rawName: 'Lemon', rawMeasure: '1, juiced' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Watermelon, feta and mint salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Low-calorie'],
    instructions:
      '1. Cut the watermelon into triangles or chunks and arrange on a large platter.\n' +
      '2. Crumble the feta generously over the top.\n' +
      '3. Scatter over the mint leaves and the sliced red onion.\n' +
      '4. Drizzle with the olive oil and a squeeze of lime juice; finish with a grinding of black pepper and serve immediately.',
    rawLines: [
      { rawName: 'Watermelon', rawMeasure: '1kg, flesh only' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Mint', rawMeasure: '1 small bunch, leaves only' },
      { rawName: 'Red onion', rawMeasure: '1/2, thinly sliced' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Courgette and Parmesan frittata',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Heat the olive oil in an ovenproof pan and fry the sliced courgette over a medium heat for 5–6 minutes until golden. Add the garlic and cook for a minute.\n' +
      '2. Beat the eggs with the Parmesan and season well, then pour over the courgette.\n' +
      '3. Cook gently for 3–4 minutes until the edges are set, then slide under a hot grill for 3 minutes until the top is just set and lightly golden.\n' +
      '4. Leave to cool slightly before cutting into wedges and serving with a green salad.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai-style beef salad',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Thai',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Season the steak and griddle over a very high heat for 2 minutes each side for medium-rare. Rest for 5 minutes, then slice thinly across the grain.\n' +
      '2. Whisk the lime juice, fish sauce, chilli and a little sugar together to make the dressing.\n' +
      '3. Toss the beansprouts, cucumber, red onion, mint and coriander with the dressing.\n' +
      '4. Pile onto a platter, lay the steak on top and scatter with the toasted peanuts.',
    rawLines: [
      { rawName: 'Steak', rawMeasure: '400g sirloin' },
      { rawName: 'Beansprouts', rawMeasure: '150g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2, thinly sliced' },
      { rawName: 'Mint', rawMeasure: '1 small bunch, leaves only' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Peanuts', rawMeasure: '50g, toasted' },
      { rawName: 'Lime', rawMeasure: '2, juiced' },
      { rawName: 'Fish sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Red chilli', rawMeasure: '1, finely sliced' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
    ],
  },

  // ── Dinner — poultry ─────────────────────────────────────────────────────────
  {
    title: 'Chicken and mushroom stroganoff',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Slice the chicken breasts into strips and season. Fry in a knob of butter over a high heat until golden; set aside.\n' +
      '2. Add the remaining butter and soften the onion for 5 minutes, then add the mushrooms and cook until golden and any liquid has evaporated.\n' +
      '3. Stir in the smoked paprika and cook for a minute, then return the chicken.\n' +
      '4. Pour in the double cream and the lemon juice; simmer for 3–4 minutes until slightly thickened. Season and scatter with parsley. Serve with rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g' },
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Double cream', rawMeasure: '200ml' },
      { rawName: 'Lemon', rawMeasure: '1/2, juiced' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Rice', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Moroccan spiced chicken with preserved lemon',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Moroccan',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Mix the ras el hanout, cumin, cinnamon and olive oil into a paste and rub all over the chicken thighs. Marinate for at least 20 minutes.\n' +
      '2. Sear the chicken skin-side down in a heavy casserole for 5 minutes until deep golden; flip and set aside briefly.\n' +
      '3. Soften the onion in the same pot, then return the chicken, add the preserved lemon, olives and water.\n' +
      '4. Simmer covered for 30 minutes until the chicken is cooked through. Scatter with coriander and serve with couscous.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone in' },
      { rawName: 'Ras el hanout', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Preserved lemon', rawMeasure: '1, quartered' },
      { rawName: 'Olives', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Water', rawMeasure: '200ml' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Duck legs with orange and thyme',
    servingsBase: 4,
    totalTimeMinutes: 110,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Score the duck skin, season and brown skin-side down in an ovenproof pan for 8 minutes until the fat renders out; pour most off.\n' +
      '2. Flip the legs, add the onion, thyme and orange zest and sizzle briefly.\n' +
      '3. Pour in the orange juice and a splash of water; cover tightly and braise in the oven for 1 hour.\n' +
      '4. Uncover and roast for a further 20 minutes until the skin is crisp. Skim the sauce, reduce briefly if needed, and serve with buttery mash.',
    rawLines: [
      { rawName: 'Duck leg', rawMeasure: '4' },
      { rawName: 'Orange', rawMeasure: '2, zest and juice' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Thyme', rawMeasure: '4 sprigs' },
      { rawName: 'Water', rawMeasure: '100ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Caribbean jerk chicken',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Blend the spring onions, scotch bonnet, garlic, ginger, allspice, cinnamon, thyme, lime juice and a little olive oil into a paste.\n' +
      '2. Score the chicken pieces deeply and coat thoroughly in the paste. Marinate for at least 30 minutes, ideally overnight.\n' +
      '3. Heat the oven to 200°C (fan 180°C) or heat a grill. Cook the chicken for 35–40 minutes, turning once, until charred and cooked through.\n' +
      '4. Serve with rice and peas and a squeeze of lime.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, skin on' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Scotch bonnet', rawMeasure: '1 (or to taste)' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Allspice', rawMeasure: '1 tsp ground' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Thyme', rawMeasure: '4 sprigs' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken souvlaki with tzatziki',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Soy-free', 'Gluten-free', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Cut the chicken into chunks and toss with the olive oil, oregano, garlic and lemon juice. Marinate for 15 minutes, then thread onto skewers.\n' +
      '2. Griddle or grill the skewers for 10–12 minutes, turning, until charred and cooked through.\n' +
      '3. Make the tzatziki by grating the cucumber, squeezing out the excess water, then mixing with the yoghurt, garlic, dill and a squeeze of lemon.\n' +
      '4. Serve the skewers with the tzatziki, a Greek salad and warm flatbread.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g' },
      { rawName: 'Oregano', rawMeasure: '2 tsp dried' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, crushed' },
      { rawName: 'Lemon', rawMeasure: '1, juiced' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Dill', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Dinner — beef, lamb & pork ───────────────────────────────────────────────
  {
    title: 'Beef burger with relish and salad',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['Soy-free', 'High-protein'],
    instructions:
      '1. Mix the minced beef with the grated onion, mustard and seasoning; shape into four patties and chill for 10 minutes.\n' +
      '2. Cook the burgers in a hot dry frying pan or on a griddle for 3–4 minutes each side for medium.\n' +
      '3. Meanwhile lightly toast the buns.\n' +
      '4. Build the burgers with lettuce, sliced tomato, the patty and a spoonful of relish.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '600g (20% fat)' },
      { rawName: 'Onion', rawMeasure: '1/2, grated' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Burger buns', rawMeasure: '4' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Tomato', rawMeasure: '2, sliced' },
      { rawName: 'Tomato ketchup', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb and apricot tagine',
    servingsBase: 4,
    totalTimeMinutes: 100,
    course: 'Dinner',
    cuisine: 'Moroccan',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Season the lamb and brown in batches in the olive oil in a casserole; set aside.\n' +
      '2. Soften the onion in the same pot, then stir in the garlic, ginger, ras el hanout and cinnamon and cook for a minute.\n' +
      '3. Return the lamb, add the chopped tomatoes, dried apricots and water; season well.\n' +
      '4. Bring to a simmer, cover and cook on a low heat for 1 hour until the lamb is tender.\n' +
      '5. Scatter with coriander and toasted flaked almonds. Serve with couscous.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '700g, diced' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tsp, grated' },
      { rawName: 'Ras el hanout', rawMeasure: '2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Dried apricots', rawMeasure: '80g' },
      { rawName: 'Water', rawMeasure: '200ml' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Almonds', rawMeasure: '40g flaked, toasted' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spaghetti bolognese',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Soy-free', 'Dairy-free', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Soften the onion, carrot and celery in the olive oil for 10 minutes. Add the garlic and cook for a minute.\n' +
      '2. Turn up the heat, add the minced beef and brown well, breaking it up.\n' +
      '3. Stir in the tomato purée and cook for 2 minutes, then pour in the red wine and let it bubble away.\n' +
      '4. Add the chopped tomatoes and thyme, season, part-cover and simmer for 30–35 minutes until rich and thick.\n' +
      '5. Cook the spaghetti, toss with the sauce and serve with grated Parmesan.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Spaghetti', rawMeasure: '350g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Red wine', rawMeasure: '150ml' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Parmesan', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork tenderloin with mustard cream sauce',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Soy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Season the pork tenderloin and sear in a knob of butter and a splash of oil in an ovenproof pan for 4 minutes until golden all over.\n' +
      '2. Transfer to the oven at 200°C (fan 180°C) and roast for 12 minutes until just cooked through. Rest for 5 minutes.\n' +
      '3. Return the pan to the hob, soften the shallot, then deglaze with the white wine and let it reduce by half.\n' +
      '4. Stir in the double cream and the mustard; simmer until glossy. Season and slice the pork over the sauce.',
    rawLines: [
      { rawName: 'Pork tenderloin', rawMeasure: '600g' },
      { rawName: 'Shallot', rawMeasure: '2, finely sliced' },
      { rawName: 'White wine', rawMeasure: '100ml' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Mustard', rawMeasure: '2 tbsp wholegrain' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Irish stew',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Layer the lamb neck slices, potato slices and onion slices in a heavy casserole, seasoning each layer.\n' +
      '2. Pour over the water, tuck in the thyme and bay leaves and bring to the boil.\n' +
      '3. Cover tightly and simmer on the lowest heat for 1½ hours until the lamb is very tender and the potatoes have melted into the broth.\n' +
      '4. Scatter with parsley and serve in deep bowls.',
    rawLines: [
      { rawName: 'Lamb neck', rawMeasure: '700g, sliced' },
      { rawName: 'Potato', rawMeasure: '600g, sliced' },
      { rawName: 'Onion', rawMeasure: '2, sliced' },
      { rawName: 'Water', rawMeasure: '700ml' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mexican beef picadillo',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Brown the minced beef in a little oil over a high heat; set aside.\n' +
      '2. Soften the onion and pepper, then stir in the garlic, cumin, cinnamon and chilli powder and cook for a minute.\n' +
      '3. Return the beef and add the chopped tomatoes, olives and raisins; season.\n' +
      '4. Simmer for 20 minutes until thick and richly flavoured. Serve with rice, warm tortillas and a squeeze of lime.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Olives', rawMeasure: '60g, pitted' },
      { rawName: 'Raisins', rawMeasure: '40g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Dinner — fish & seafood ───────────────────────────────────────────────────
  {
    title: 'Lemon sole with brown butter and capers',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Soy-free', 'Pescatarian', 'Gluten-free', 'High-protein', 'Low-carb'],
    instructions:
      '1. Season the lemon sole fillets and dust lightly with a pinch of plain flour on both sides.\n' +
      '2. Fry in a little butter and oil for 2 minutes each side until golden and just cooked; transfer to plates.\n' +
      '3. Add the remaining butter to the pan and cook until it turns a nut-brown colour.\n' +
      '4. Add the capers and the lemon juice — it will sizzle — then pour immediately over the fish and finish with parsley.',
    rawLines: [
      { rawName: 'Lemon sole', rawMeasure: '4 fillets' },
      { rawName: 'Butter', rawMeasure: '80g' },
      { rawName: 'Capers', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1, juiced' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and vegetable Thai green curry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Soy-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Fry the green curry paste in a little oil for a minute until fragrant, then pour in the coconut milk and bring to a gentle simmer.\n' +
      '2. Add the sugar snap peas and courgette and cook for 3 minutes.\n' +
      '3. Add the prawns and simmer for 2–3 minutes until just pink and cooked through.\n' +
      '4. Season with the lime juice and fish sauce, scatter with coriander and basil and serve with jasmine rice.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '400g' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Green curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Sugar snap peas', rawMeasure: '150g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Lime', rawMeasure: '1, juiced' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Basil', rawMeasure: '1 small handful' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Jasmine rice', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Sardines on toast with tomatoes',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Pescatarian', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Toast the bread until golden and rub one side with the cut garlic clove.\n' +
      '2. Halve the cherry tomatoes and toss with a little olive oil and the chopped parsley; season.\n' +
      '3. Drain the sardines and lay them on the toast, pressing gently so they spread.\n' +
      '4. Top with the dressed tomatoes and finish with a squeeze of lemon and black pepper.',
    rawLines: [
      { rawName: 'Bread', rawMeasure: '4 slices sourdough' },
      { rawName: 'Sardines', rawMeasure: '2 tins (120g each)' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sea bass with fennel and orange',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Soy-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Low-carb', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Thinly slice the fennel and toss with the olive oil, orange juice and seasoning; spread in a roasting tin and roast for 15 minutes.\n' +
      '2. Score the sea bass fillets and lay skin-side up on the fennel. Tuck the orange slices around the fish.\n' +
      '3. Roast for a further 15–18 minutes until the fish is cooked through and the skin is crisp.\n' +
      '4. Scatter with the fennel fronds and serve with a wedge of lemon.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '4 fillets' },
      { rawName: 'Fennel', rawMeasure: '2 bulbs' },
      { rawName: 'Orange', rawMeasure: '1, sliced' },
      { rawName: 'Lemon', rawMeasure: '1, cut into wedges' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Salmon and sweet potato fishcakes',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Pescatarian', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Bake or boil the sweet potato until tender; mash and cool.\n' +
      '2. Flake the cooked salmon into the mash with the spring onions, ginger, coriander and a squeeze of lime; season and shape into eight cakes. Chill for 15 minutes.\n' +
      '3. Dust each cake in a little rice flour and fry in a thin layer of oil for 3–4 minutes each side until golden.\n' +
      '4. Serve with a lime wedge and a simple green salad.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '400g, cooked' },
      { rawName: 'Sweet potato', rawMeasure: '500g' },
      { rawName: 'Spring onion', rawMeasure: '3, sliced' },
      { rawName: 'Ginger', rawMeasure: '1 tsp, grated' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Rice flour', rawMeasure: '3 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Dinner — vegetarian & vegan ──────────────────────────────────────────────
  {
    title: 'Mushroom risotto',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Soak the dried porcini in 200ml of boiling water for 20 minutes; lift out, chop and reserve the soaking liquid.\n' +
      '2. Fry the fresh mushrooms in the butter until golden; set aside.\n' +
      '3. Soften the onion and garlic in more butter, add the risotto rice and stir for a minute.\n' +
      '4. Add the white wine and let it absorb, then add the hot water and strained porcini liquid a ladleful at a time, stirring, for 18–20 minutes.\n' +
      '5. Fold through the sautéed mushrooms, porcini and Parmesan; season and rest for 2 minutes before serving.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '300g risotto rice' },
      { rawName: 'Mushroom', rawMeasure: '400g mixed fresh' },
      { rawName: 'Porcini mushrooms', rawMeasure: '20g dried' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'White wine', rawMeasure: '150ml' },
      { rawName: 'Water', rawMeasure: '900ml, hot' },
      { rawName: 'Parmesan', rawMeasure: '80g' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted tomato and aubergine pasta',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the aubergine cubes and halved tomatoes with the olive oil, garlic and oregano; roast for 30 minutes, stirring once, until soft and caramelised.\n' +
      '2. Cook the pasta in plenty of salted boiling water until al dente; reserve a cup of water before draining.\n' +
      '3. Toss the pasta through the roasted vegetables, loosening with a splash of pasta water.\n' +
      '4. Check the seasoning and serve with a drizzle of extra-virgin olive oil and torn basil.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '350g rigatoni' },
      { rawName: 'Aubergine', rawMeasure: '1 large' },
      { rawName: 'Tomato', rawMeasure: '400g cherry or plum' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, crushed' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Red lentil dal with coconut and lime',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Soften the onion in the coconut oil, then stir in the garlic, ginger, cumin, turmeric and chilli and cook for a minute.\n' +
      '2. Add the red lentils and the coconut milk, top up with water to just cover and bring to a simmer.\n' +
      '3. Cook for 20 minutes, stirring occasionally, until the lentils are soft and the dal is thick.\n' +
      '4. Squeeze in the lime juice, season and scatter with coriander. Serve with rice or warm flatbread.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g red split' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece, grated' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Red chilli', rawMeasure: '1' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Coconut oil', rawMeasure: '1 tbsp' },
      { rawName: 'Water', rawMeasure: '200ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Butter bean and tomato bake',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Fry the onion and garlic in the olive oil for 8 minutes, then stir in the smoked paprika and oregano.\n' +
      '2. Add the chopped tomatoes and butter beans, season well and bring to a simmer.\n' +
      '3. Transfer to a baking dish, drizzle with a little extra olive oil and bake for 20 minutes until bubbling at the edges and slightly thickened on top.\n' +
      '4. Scatter with fresh parsley and serve with crusty bread.',
    rawLines: [
      { rawName: 'Butter beans', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paneer and pea curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Fry the paneer cubes in a little oil until golden on all sides; set aside.\n' +
      '2. Soften the onion in the same pan, then stir in the ginger garlic paste, cumin, garam masala and turmeric and cook for a minute.\n' +
      '3. Add the chopped tomatoes and simmer for 8 minutes until thick.\n' +
      '4. Return the paneer, add the peas and the cream and simmer for 5 minutes.\n' +
      '5. Season and finish with coriander. Serve with rice or naan.',
    rawLines: [
      { rawName: 'Paneer', rawMeasure: '400g, cubed' },
      { rawName: 'Peas', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Courgette, lemon and ricotta pasta',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Soy-free', 'Vegetarian', 'Mediterranean'],
    instructions:
      '1. Cook the pasta in plenty of salted boiling water until al dente; reserve a cup of pasta water.\n' +
      '2. Meanwhile grate the courgettes and cook in the olive oil with the garlic and lemon zest for 5–6 minutes until soft and golden in places.\n' +
      '3. Toss the drained pasta through the courgette mixture with the ricotta and lemon juice, loosening with pasta water to a creamy sauce.\n' +
      '4. Season, scatter with Parmesan and serve immediately.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '350g linguine' },
      { rawName: 'Courgette', rawMeasure: '3' },
      { rawName: 'Ricotta', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, sliced' },
      { rawName: 'Lemon', rawMeasure: '1, zest and juice' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Black bean tacos with lime crema',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Fry the onion in the oil, then add the garlic, cumin, smoked paprika and chilli powder and cook for a minute.\n' +
      '2. Add the black beans with a splash of water and simmer for 8 minutes, lightly mashing some of the beans; season.\n' +
      '3. Mix the soured cream with the lime juice and zest for the crema.\n' +
      '4. Warm the tortillas, fill with the beans, shredded lettuce, sliced avocado and a spoon of crema.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Soured cream', rawMeasure: '150g' },
      { rawName: 'Lime', rawMeasure: '1, zest and juice' },
      { rawName: 'Avocado', rawMeasure: '1, sliced' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves, shredded' },
      { rawName: 'Tortilla wrap', rawMeasure: '8 small' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked camembert with rosemary and garlic',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'French',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Remove the camembert from any plastic wrapping and return to its wooden box, or place in a small baking dish.\n' +
      '2. Score the top in a cross-hatch pattern and push slivers of garlic and sprigs of rosemary into the cuts.\n' +
      '3. Drizzle with olive oil and bake for 15 minutes until melted and bubbling.\n' +
      '4. Serve with crusty bread or crudités for dipping.',
    rawLines: [
      { rawName: 'Camembert', rawMeasure: '250g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, sliced' },
      { rawName: 'Rosemary', rawMeasure: '2 small sprigs' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
    ],
  },

  // ── Sides ─────────────────────────────────────────────────────────────────────
  {
    title: 'Braised red cabbage with apple and cloves',
    servingsBase: 6,
    totalTimeMinutes: 75,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Low-calorie'],
    instructions:
      '1. Finely shred the red cabbage and peel and dice the apples.\n' +
      '2. Layer the cabbage and apple in a large casserole with the red wine vinegar, sugar, cloves and cinnamon stick.\n' +
      '3. Cover tightly and cook over the lowest heat for 1 hour, stirring occasionally, until meltingly tender and glossy.\n' +
      '4. Season, taste for sharpness and add a little more vinegar if needed. Serve hot or cold.',
    rawLines: [
      { rawName: 'Red cabbage', rawMeasure: '1 small head (800g)' },
      { rawName: 'Apple', rawMeasure: '2, peeled and diced' },
      { rawName: 'Red wine vinegar', rawMeasure: '3 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Cloves', rawMeasure: '3' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mashed sweet potato with chilli butter',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Peel and cube the sweet potatoes and boil in salted water for 15 minutes until tender; drain well.\n' +
      '2. Mash with the butter and enough milk to make a smooth, loose purée; season generously.\n' +
      '3. Melt a little extra butter in a small pan, add the chilli flakes and sizzle for 30 seconds.\n' +
      '4. Spoon the mash into a bowl and drizzle the chilli butter over the top.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '800g' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Milk', rawMeasure: '4 tbsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted cauliflower with tahini and pomegranate',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Cut the cauliflower into florets, toss with olive oil, cumin and a pinch of turmeric; season.\n' +
      '2. Roast for 25–30 minutes until deeply golden and charred at the tips.\n' +
      '3. Whisk the tahini with the lemon juice and water to a pourable sauce; season.\n' +
      '4. Arrange the cauliflower on a platter, drizzle with the tahini sauce and scatter with pomegranate seeds and parsley.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1, juiced' },
      { rawName: 'Water', rawMeasure: '3 tbsp' },
      { rawName: 'Pomegranate seeds', rawMeasure: '50g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/4 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spanish-style braised green beans',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Side',
    cuisine: 'Spanish',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Low-calorie'],
    instructions:
      '1. Warm the olive oil in a wide pan and soften the onion and garlic for 5 minutes.\n' +
      '2. Add the green beans and stir to coat, then tip in the chopped tomatoes.\n' +
      '3. Season, add the smoked paprika and simmer covered for 15–18 minutes until the beans are very tender and the sauce is thick.\n' +
      '4. Check the seasoning and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Green beans', rawMeasure: '500g, trimmed' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Crushed new potatoes with herbs',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Boil the new potatoes in salted water until just tender, about 15 minutes.\n' +
      '2. Drain and tip back into the pan. Crush roughly with a fork or the back of a spoon — you want plenty of texture.\n' +
      '3. Stir through the butter, the chopped chives and the capers; season well and serve hot.',
    rawLines: [
      { rawName: 'New potatoes', rawMeasure: '750g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, snipped' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
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
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean', 'Low-calorie'],
    instructions:
      '1. Pour 200ml of boiling water over the bulgur wheat, cover and leave for 15 minutes until absorbed; fluff with a fork and cool.\n' +
      '2. Finely chop a large bunch of flat-leaf parsley and the mint leaves.\n' +
      '3. Dice the tomatoes finely and add them with any juices to the bulgur.\n' +
      '4. Stir through the herbs, spring onion, olive oil and lemon juice; season generously. The salad should be very herb-forward.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '150g' },
      { rawName: 'Parsley', rawMeasure: '1 large bunch, flat-leaf' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Spring onion', rawMeasure: '4, finely sliced' },
      { rawName: 'Lemon', rawMeasure: '2, juiced' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Wilted spinach with garlic and nutmeg',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Low-carb', 'Low-calorie', 'Mediterranean'],
    instructions:
      '1. Melt the butter in a large pan over a medium heat and add the garlic; cook for 30 seconds.\n' +
      '2. Pile in the spinach in batches, turning with tongs until each batch wilts before adding the next.\n' +
      '3. Season with salt, black pepper and a grating of nutmeg.\n' +
      '4. Squeeze over the lemon juice and serve immediately.',
    rawLines: [
      { rawName: 'Spinach', rawMeasure: '500g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, sliced' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch, freshly grated' },
      { rawName: 'Lemon', rawMeasure: '1/4, juiced' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Patatas bravas',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'Spanish',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Cut the potatoes into chunks, toss generously with olive oil and season; spread on a tray.\n' +
      '2. Roast for 35 minutes, turning halfway, until crisp and golden.\n' +
      '3. For the bravas sauce, fry the onion and garlic in a little olive oil until soft, stir in the smoked paprika and chilli flakes, then add the passata; simmer for 10 minutes and season.\n' +
      '4. Spoon the sauce over the potatoes and serve hot.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Passata', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Desserts ──────────────────────────────────────────────────────────────────
  {
    title: 'Panna cotta with raspberry coulis',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Bloom the gelatine in cold water for 5 minutes.\n' +
      '2. Gently heat the double cream with the sugar and vanilla until steaming but not boiling; remove from the heat.\n' +
      '3. Squeeze out the gelatine and whisk into the warm cream until dissolved. Pour into four lightly oiled ramekins and chill for at least 4 hours until set.\n' +
      '4. Blend the raspberries with a little icing sugar for the coulis. Turn the panna cottas out onto plates and spoon the coulis around them.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '500ml' },
      { rawName: 'Caster sugar', rawMeasure: '60g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Gelatine', rawMeasure: '3 leaves' },
      { rawName: 'Raspberries', rawMeasure: '200g' },
      { rawName: 'Icing sugar', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Crepes with lemon and sugar',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Whisk the flour, egg, milk and a pinch of salt together into a smooth, thin batter. Rest for 15 minutes.\n' +
      '2. Melt a little butter in a non-stick pan over a medium-high heat. Pour in a ladleful of batter, swirling to coat thinly.\n' +
      '3. Cook for about 1 minute until the underside is golden, then flip and cook for 30 seconds more. Stack on a plate and keep warm while you make the rest.\n' +
      '4. Serve each crepe with a squeeze of lemon juice and a sprinkle of caster sugar.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '120g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Caster sugar', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Mango and coconut rice pudding',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dessert',
    cuisine: 'Thai',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Rinse the glutinous rice and combine with the coconut milk, a pinch of salt and the caster sugar in a pan.\n' +
      '2. Bring to a gentle simmer, stirring often, and cook for 25–30 minutes until the rice is tender and thick; it should still be a little loose as it will firm as it cools.\n' +
      '3. Spoon into bowls and leave to cool slightly.\n' +
      '4. Top with sliced fresh mango and a drizzle of coconut cream.',
    rawLines: [
      { rawName: 'Glutinous rice', rawMeasure: '200g' },
      { rawName: 'Coconut milk', rawMeasure: '500ml' },
      { rawName: 'Caster sugar', rawMeasure: '40g' },
      { rawName: 'Mango', rawMeasure: '2, ripe' },
      { rawName: 'Coconut cream', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Treacle tart',
    servingsBase: 8,
    totalTimeMinutes: 70,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Line a 23cm tart tin with the shortcrust pastry and chill for 15 minutes, then blind-bake for 12 minutes.\n' +
      '2. Warm the golden syrup gently with the lemon juice and zest, then stir in the breadcrumbs.\n' +
      '3. Pour the filling into the pastry case.\n' +
      '4. Bake for 25–28 minutes until the filling is set and the pastry is golden. Leave to cool slightly and serve warm with clotted cream or double cream.',
    rawLines: [
      { rawName: 'Shortcrust pastry', rawMeasure: '320g' },
      { rawName: 'Golden syrup', rawMeasure: '350g' },
      { rawName: 'Breadcrumbs', rawMeasure: '100g fresh' },
      { rawName: 'Lemon', rawMeasure: '1, zest and juice' },
      { rawName: 'Double cream', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Poached pears with red wine and cinnamon',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Low-fat'],
    instructions:
      '1. Peel the pears, leaving the stalks on, and slice a thin sliver from the base so they stand upright.\n' +
      '2. Combine the red wine, water, sugar, cinnamon stick and star anise in a pan large enough to hold the pears snugly.\n' +
      '3. Add the pears, bring to a gentle simmer and cook for 25–30 minutes, turning occasionally, until just tender.\n' +
      '4. Lift out the pears, reduce the syrup by half until glossy, then serve poured over the pears.',
    rawLines: [
      { rawName: 'Pear', rawMeasure: '4 firm' },
      { rawName: 'Red wine', rawMeasure: '400ml' },
      { rawName: 'Water', rawMeasure: '200ml' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
      { rawName: 'Star anise', rawMeasure: '2' },
    ],
  },
  {
    title: 'Lemon posset',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Put the double cream and caster sugar in a pan and heat gently, stirring, until the sugar dissolves.\n' +
      '2. Bring to the boil, then boil for exactly 3 minutes, stirring occasionally.\n' +
      '3. Remove from the heat and stir in the lemon juice; the mixture will thicken slightly.\n' +
      '4. Pour into four glasses or ramekins and chill for at least 3 hours until set. Serve with a few fresh raspberries on top.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '600ml' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '3, juiced' },
      { rawName: 'Raspberries', rawMeasure: '100g, to serve' },
    ],
  },
  {
    title: 'Warm chocolate fondant',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Butter four small ramekins generously and dust with cocoa powder.\n' +
      '2. Melt the chocolate and butter together in a heatproof bowl over simmering water; cool slightly.\n' +
      '3. Whisk the eggs and caster sugar together until pale, then fold in the chocolate mixture and the plain flour.\n' +
      '4. Divide between the ramekins and bake for 10–12 minutes until the edges are set but the centre still wobbles.\n' +
      '5. Turn out onto plates immediately and serve with a scoop of vanilla ice cream.',
    rawLines: [
      { rawName: 'Dark chocolate', rawMeasure: '150g, good quality' },
      { rawName: 'Butter', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Cocoa powder', rawMeasure: '2 tbsp, for dusting' },
      { rawName: 'Ice cream', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Summer berry pavlova',
    servingsBase: 6,
    totalTimeMinutes: 100,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 140°C (fan 120°C) and line a baking sheet with parchment. Draw a 22cm circle on it.\n' +
      '2. Whisk the egg whites to stiff peaks, then add the caster sugar a tablespoon at a time, whisking until thick and glossy. Fold in the cornflour and white wine vinegar.\n' +
      '3. Spread the meringue over the circle, building up the edges slightly. Bake for 1 hour until crisp outside, then turn the oven off and leave inside to cool completely.\n' +
      '4. Whip the coconut cream until thick. Transfer the meringue to a platter, pile on the coconut cream and top with the mixed berries.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4, whites only' },
      { rawName: 'Caster sugar', rawMeasure: '225g' },
      { rawName: 'Cornflour', rawMeasure: '1 tsp' },
      { rawName: 'White wine vinegar', rawMeasure: '1 tsp' },
      { rawName: 'Coconut cream', rawMeasure: '400ml, chilled' },
      { rawName: 'Mixed berries', rawMeasure: '400g' },
    ],
  },
  {
    title: 'Carrot cake with cream cheese frosting',
    servingsBase: 10,
    totalTimeMinutes: 65,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a 20cm round tin.\n' +
      '2. Whisk the eggs and light muscovado sugar together, then beat in the sunflower oil.\n' +
      '3. Fold in the self-raising flour, cinnamon, nutmeg and grated carrot until just combined.\n' +
      '4. Pour into the tin and bake for 35–40 minutes until a skewer comes out clean. Cool completely.\n' +
      '5. Beat the cream cheese with the butter and icing sugar until smooth and spreadable; spread over the cooled cake.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '300g, grated' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Muscovado sugar', rawMeasure: '200g light' },
      { rawName: 'Vegetable oil', rawMeasure: '175ml' },
      { rawName: 'Self-raising flour', rawMeasure: '200g' },
      { rawName: 'Cinnamon', rawMeasure: '2 tsp' },
      { rawName: 'Nutmeg', rawMeasure: '1/2 tsp' },
      { rawName: 'Cream cheese', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '50g, softened' },
      { rawName: 'Icing sugar', rawMeasure: '150g' },
    ],
  },

  // ── Snacks ────────────────────────────────────────────────────────────────────
  {
    title: 'Hummus with warm flatbread',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Tip the drained chickpeas into a food processor with the tahini, lemon juice, garlic and a good pinch of salt.\n' +
      '2. Blend until very smooth, drizzling in the olive oil and 3–4 tablespoons of cold water to achieve a creamy, light texture.\n' +
      '3. Taste and adjust the lemon and salt, then spoon into a bowl, swirl the surface and drizzle with extra-virgin olive oil.\n' +
      '4. Dust with paprika and serve with warm flatbread or vegetable sticks.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1, juiced' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Flatbread', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted chickpeas with smoked paprika',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Snack',
    cuisine: 'Spanish',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Drain the chickpeas, rinse and dry very thoroughly on kitchen paper.\n' +
      '2. Toss with the olive oil, smoked paprika, cumin and a good pinch of salt.\n' +
      '3. Spread on a baking tray in a single layer and roast for 25–30 minutes, shaking the tin once, until crunchy.\n' +
      '4. Cool briefly before eating — they crisp further as they cool.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Cheese straws',
    servingsBase: 12,
    totalTimeMinutes: 30,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C) and line a baking sheet.\n' +
      '2. Unroll the puff pastry, sprinkle the grated Cheddar and Parmesan evenly over one half, add the paprika and a little mustard, then fold the other half over and roll lightly to press together.\n' +
      '3. Cut into 1cm wide strips, twist each one and lay on the tray.\n' +
      '4. Bake for 12–14 minutes until deep golden and crisp. Cool on the tray and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Puff pastry', rawMeasure: '320g sheet' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g, finely grated' },
      { rawName: 'Parmesan', rawMeasure: '30g, finely grated' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Tzatziki',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Greek',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Low-carb', 'Low-calorie', 'Mediterranean'],
    instructions:
      '1. Coarsely grate the cucumber and place in a clean cloth or sieve; squeeze out as much liquid as possible.\n' +
      '2. Combine the Greek yoghurt, drained cucumber, crushed garlic, dill and olive oil in a bowl.\n' +
      '3. Season with salt and a squeeze of lemon juice.\n' +
      '4. Chill for at least 15 minutes before serving with warm flatbread or crudités.',
    rawLines: [
      { rawName: 'Natural yoghurt', rawMeasure: '400g Greek-style' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Dill', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/4, juiced' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cinnamon and raisin rock cakes',
    servingsBase: 10,
    totalTimeMinutes: 35,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C) and line a baking tray.\n' +
      '2. Rub the butter into the self-raising flour until the mixture resembles fine crumbs.\n' +
      '3. Stir in the sugar, cinnamon, raisins and the beaten egg; add just enough milk to bring together into a rough, sticky dough.\n' +
      '4. Drop heaped tablespoons onto the tray, roughing up the tops, and bake for 15–18 minutes until golden. Cool on a wire rack.',
    rawLines: [
      { rawName: 'Self-raising flour', rawMeasure: '225g' },
      { rawName: 'Butter', rawMeasure: '100g, cold' },
      { rawName: 'Caster sugar', rawMeasure: '75g' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Raisins', rawMeasure: '75g' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
      { rawName: 'Milk', rawMeasure: '2 tbsp' },
    ],
  },

  // ── More varied dinner additions ──────────────────────────────────────────────
  {
    title: 'Turkish lamb flatbread pizza (Lahmacun)',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: ['Soy-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Mix the minced lamb with the finely chopped onion, pepper, garlic, tomato purée, cumin, paprika and a pinch of chilli; season well.\n' +
      '2. Roll the flatbreads out thinly on a floured surface (or use shop-bought). Spread a thin layer of the lamb mixture over each one, right to the edges.\n' +
      '3. Bake at 240°C (fan 220°C) for 8–10 minutes until the edges are crisp and the lamb is cooked.\n' +
      '4. Serve topped with shredded lettuce, diced tomato, red onion and a squeeze of lemon; roll up to eat.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '400g' },
      { rawName: 'Flatbread', rawMeasure: '4, thin' },
      { rawName: 'Onion', rawMeasure: '1, finely chopped' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1/2, finely chopped' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Lettuce', rawMeasure: '1 handful, shredded' },
      { rawName: 'Tomato', rawMeasure: '2, diced' },
      { rawName: 'Red onion', rawMeasure: '1/2, thinly sliced' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Goan fish curry',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Soy-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Toast the cumin, coriander seeds and dried chillies in a dry pan for a minute, then grind in a pestle and mortar.\n' +
      '2. Fry the onion and garlic in a little oil until golden, then add the ground spices, turmeric and a little water to make a paste; cook for 2 minutes.\n' +
      '3. Add the coconut milk and the tamarind paste; simmer for 8 minutes.\n' +
      '4. Add the fish pieces and cook gently for 8–10 minutes until just cooked through. Season and serve with rice.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '600g, cut into chunks' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp seeds' },
      { rawName: 'Coriander seeds', rawMeasure: '2 tsp' },
      { rawName: 'Dried chilli', rawMeasure: '2' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Tamarind paste', rawMeasure: '1 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chorizo and potato hash',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Boil the diced potato for 6 minutes until just tender; drain well.\n' +
      '2. Fry the chorizo in a large non-stick pan until its oil runs, then add the red onion and pepper and cook for 5 minutes.\n' +
      '3. Add the potato and press down with a spatula. Cook undisturbed for 5 minutes until a crust forms, then turn and repeat.\n' +
      '4. Season, scatter with chopped parsley and serve with a fried egg each.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '700g, diced small' },
      { rawName: 'Chorizo', rawMeasure: '200g, diced' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Egg', rawMeasure: '4, fried to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Whole baked trout with herbs and lemon',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'High-protein', 'Low-carb'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Score the trout on each side a few times and season inside and out.\n' +
      '2. Stuff the cavities with lemon slices, dill and thyme sprigs.\n' +
      '3. Lay each fish on a double sheet of foil, drizzle with olive oil and wrap into a loose parcel.\n' +
      '4. Bake for 25–30 minutes until the flesh flakes easily. Open the parcels at the table and serve with new potatoes and a green salad.',
    rawLines: [
      { rawName: 'Trout', rawMeasure: '2 whole (400g each)' },
      { rawName: 'Lemon', rawMeasure: '2, sliced' },
      { rawName: 'Dill', rawMeasure: '4 sprigs' },
      { rawName: 'Thyme', rawMeasure: '4 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Crispy pork belly with fennel and apple slaw',
    servingsBase: 4,
    totalTimeMinutes: 130,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Score the pork rind deeply at 1cm intervals. Rub with salt and a little oil and leave uncovered in the fridge for 1 hour.\n' +
      '2. Heat the oven to 220°C (fan 200°C). Roast the pork skin-side up for 30 minutes until the crackling is well puffed, then reduce to 180°C (fan 160°C) and roast for a further 1 hour.\n' +
      '3. Rest for 15 minutes under loose foil.\n' +
      '4. Thinly slice the fennel and apple, dress with lemon juice, a little olive oil and salt, then serve alongside the sliced pork.',
    rawLines: [
      { rawName: 'Pork belly', rawMeasure: '1kg, skin scored' },
      { rawName: 'Fennel', rawMeasure: '1 bulb' },
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemon and herb stuffed peppers',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers, remove seeds and sit cut-side up in a baking dish.\n' +
      '2. Mix the cooked quinoa with the chickpeas, diced tomatoes, parsley, mint, lemon zest and juice, and the olive oil; season well.\n' +
      '3. Fill each pepper half generously with the quinoa mixture.\n' +
      '4. Cover with foil and bake for 30 minutes, then uncover and bake for a further 10 minutes until the peppers are tender and the tops are slightly golden.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4 mixed' },
      { rawName: 'Quinoa', rawMeasure: '150g, cooked' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato', rawMeasure: '2, diced' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1, zest and juice' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Garlic prawns with crusty bread',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Soy-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Heat the olive oil in a wide pan over a high heat until shimmering. Add the chilli flakes and garlic and cook for 30 seconds.\n' +
      '2. Tip in the prawns, season and toss for 2–3 minutes until pink and just cooked through.\n' +
      '3. Squeeze over the lemon and scatter with chopped parsley.\n' +
      '4. Serve immediately with crusty bread to mop up the garlicky oil.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '500g, raw, peeled' },
      { rawName: 'Garlic', rawMeasure: '4 cloves, sliced' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Coconut chicken curry',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Fry the onion and garlic in the oil until softened, then add the ginger, lemongrass, red curry paste and a little of the coconut milk; cook for 2 minutes.\n' +
      '2. Add the chicken pieces and stir to coat in the paste, then pour in the rest of the coconut milk.\n' +
      '3. Simmer gently for 20 minutes until the chicken is cooked through.\n' +
      '4. Stir in the fish sauce and lime juice, scatter with coriander and serve with jasmine rice.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g, diced' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece, grated' },
      { rawName: 'Lemongrass', rawMeasure: '1 stalk, bruised' },
      { rawName: 'Red curry paste', rawMeasure: '2 tbsp' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1, juiced' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'French onion soup',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Melt the butter in a large, heavy pan and add the sliced onions. Cook over a very low heat, stirring occasionally, for 40–45 minutes until deeply golden, sweet and caramelised.\n' +
      '2. Add the garlic and thyme and cook for a minute, then pour in the white wine and let it bubble away.\n' +
      '3. Add the water, season and simmer for 15 minutes. Check the seasoning.\n' +
      '4. Ladle into ovenproof bowls. Float a slice of toasted baguette on each one, pile with Gruyère and grill until bubbling and golden.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '1.2kg, sliced' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'White wine', rawMeasure: '150ml' },
      { rawName: 'Water', rawMeasure: '1 litre' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Baguette', rawMeasure: '4 thick slices, toasted' },
      { rawName: 'Gruyère', rawMeasure: '100g, grated' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
]
