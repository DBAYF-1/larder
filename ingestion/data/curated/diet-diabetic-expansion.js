// Curated DIABETIC / LOW-SUGAR recipes — EXPANSION BATCH for Larder.
//
// All titles are distinct from diet-diabetic.js. Same diet contract applies:
// STRICTLY EXCLUDED: added sugar of any kind, syrups, high-GI refined carbs.
// Carbohydrate comes from low-GI sources: pulses, wholegrains, non-starchy veg.
// Method prose is original, written fresh in British English. No URLs or images.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  // ── Breakfasts ────────────────────────────────────────────────────────────
  {
    title: 'Courgette and feta frittata with cherry tomatoes',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Heat the olive oil in a 22 cm ovenproof frying pan and soften the courgette over a medium heat for 5 minutes until just golden. Season.\n' +
      '2. Scatter over the cherry tomatoes and crumble over the feta.\n' +
      '3. Beat the eggs with a pinch of salt and black pepper and pour evenly into the pan.\n' +
      '4. Cook on the hob for 3 minutes until the base sets, then transfer to a hot grill set to medium-high for 4–5 minutes until the top is puffed and lightly golden.\n' +
      '5. Leave to rest for two minutes, then cut into wedges and serve. No added sugar; the tomatoes and feta carry all the flavour.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Courgette', rawMeasure: '1, thinly sliced' },
      { rawName: 'Cherry tomato', rawMeasure: '100g, halved' },
      { rawName: 'Feta', rawMeasure: '60g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked haddock and leek breakfast hash',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Cook the diced sweet potato in lightly salted boiling water for 6 minutes until just tender, then drain well.\n' +
      '2. Meanwhile poach the smoked haddock in a shallow pan of simmering water for 5 minutes, then lift out, remove the skin and flake into large pieces.\n' +
      '3. Heat the oil in a large frying pan and fry the sweet potato and leek over a medium-high heat for 8 minutes until the potato is crisp at the edges.\n' +
      '4. Fold in the flaked fish, season with pepper and finish with a scatter of parsley. Serve with a poached egg on top if liked.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '250g, undyed fillet' },
      { rawName: 'Sweet potato', rawMeasure: '250g, diced small' },
      { rawName: 'Leek', rawMeasure: '1, sliced' },
      { rawName: 'Egg', rawMeasure: '2 (optional, poached)' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Walnut and oat porridge with stewed plums',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian'],
    instructions:
      '1. Quarter the plums and simmer with a splash of water and the cinnamon in a small pan for 8 minutes until softened. No sugar is added; the plums soften to a compote with their own natural juice.\n' +
      '2. Meanwhile simmer the oats with the milk and a pinch of salt, stirring, for 5–6 minutes until thick and creamy.\n' +
      '3. Spoon the porridge into bowls, top with the warm plums and their juices and scatter over the walnuts.\n' +
      '4. Serve at once. Oats have a lower GI than most breakfast cereals; walnuts add slow-release fats.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '80g' },
      { rawName: 'Milk', rawMeasure: '350ml' },
      { rawName: 'Plum', rawMeasure: '4, stoned' },
      { rawName: 'Walnuts', rawMeasure: '25g, roughly chopped' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Pepper and onion egg white omelette',
    servingsBase: 1,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb', 'High-protein', 'Dairy-free'],
    instructions:
      '1. Whisk the egg whites with a pinch of salt and black pepper until frothy but not stiff.\n' +
      '2. Heat the olive oil in a non-stick pan over a medium heat and soften the pepper and onion for 5 minutes until lightly golden.\n' +
      '3. Pour in the egg whites, swirl to cover the vegetables and draw the edges in gently as they set.\n' +
      '4. When the surface is just set, fold in half and slide onto a plate. A high-protein, zero-fat-added breakfast with no sugar.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4 whites only' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1/2 red, finely diced' },
      { rawName: 'Onion', rawMeasure: '1/2, finely diced' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced turkey and vegetable breakfast patties',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'Gluten-free', 'High-protein', 'Low-carb'],
    instructions:
      '1. Combine the turkey mince with the grated courgette, spring onion, garlic, cumin, smoked paprika and a good seasoning of salt and pepper. Mix well.\n' +
      '2. Shape into eight small patties using damp hands.\n' +
      '3. Heat the oil in a frying pan over a medium heat and cook the patties for 4–5 minutes a side until golden and cooked through.\n' +
      '4. Serve with a handful of watercress and a wedge of lemon. No breadcrumbs, no sauces — just seasoned meat and vegetable.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '400g' },
      { rawName: 'Courgette', rawMeasure: '1/2, grated' },
      { rawName: 'Spring onion', rawMeasure: '3, sliced' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Watercress', rawMeasure: '50g' },
      { rawName: 'Lemon', rawMeasure: '1 wedge' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Soups & Light Lunches ─────────────────────────────────────────────────
  {
    title: 'Miso and tofu soup with pak choi',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Bring the water or dashi to a gentle simmer — do not boil, as boiling destroys the good bacteria in miso.\n' +
      '2. Add the pak choi, spring onion and silken tofu cubes and warm through for 3 minutes.\n' +
      '3. Remove from the heat, stir in the miso paste until fully dissolved and add the soy sauce.\n' +
      '4. Ladle into bowls, scatter over the sesame seeds and serve at once. A warming, low-carb broth with no added sugar.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '200g, silken' },
      { rawName: 'Pak choi', rawMeasure: '2 small heads, quartered' },
      { rawName: 'Miso paste', rawMeasure: '2 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '3, sliced' },
      { rawName: 'Soy sauce', rawMeasure: '1 tsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tsp' },
      { rawName: 'Water', rawMeasure: '700ml' },
    ],
  },
  {
    title: 'Roasted celeriac and white bean soup',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the celeriac cubes with olive oil, season and roast for 25 minutes until golden and tender.\n' +
      '2. Meanwhile soften the onion and garlic in a pan for 10 minutes.\n' +
      '3. Add the roasted celeriac, cannellini beans and stock, bring to a simmer and cook for 10 minutes.\n' +
      '4. Blitz until smooth, season and serve with a drizzle of olive oil and a scatter of thyme. Beans and celeriac keep this genuinely low-GI.',
    rawLines: [
      { rawName: 'Celeriac', rawMeasure: '600g, diced' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Thyme', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cucumber, mint and yoghurt cold soup',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Roughly chop the cucumber and blend with the Greek yoghurt, garlic, mint, lemon juice and olive oil until smooth.\n' +
      '2. Season with salt and a little white pepper, then taste and adjust the lemon.\n' +
      '3. Chill for at least 15 minutes until cold.\n' +
      '4. Pour into bowls, drizzle with a little extra olive oil and finish with a few mint leaves and crushed walnuts. No added sugar — the yoghurt and cucumber carry this entirely.',
    rawLines: [
      { rawName: 'Cucumber', rawMeasure: '1 large' },
      { rawName: 'Greek yoghurt', rawMeasure: '250g' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Walnuts', rawMeasure: '20g, lightly crushed' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Broccoli and stilton soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Soften the onion and celery in the butter for 8 minutes over a medium heat.\n' +
      '2. Add the broccoli florets and stock, bring to the boil and simmer for 12 minutes until the broccoli is very tender.\n' +
      '3. Blitz until smooth, then crumble in most of the Stilton and stir until melted. Do not boil again.\n' +
      '4. Season carefully — the Stilton carries plenty of salt — and serve with a crumble of the remaining cheese on top.',
    rawLines: [
      { rawName: 'Broccoli', rawMeasure: '600g, florets' },
      { rawName: 'Stilton', rawMeasure: '80g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkish red lentil and spinach soup with paprika oil',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Turkish',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat one tablespoon of oil and soften the onion and carrot for 10 minutes, then stir in the garlic, cumin and tomato purée.\n' +
      '2. Add the rinsed red lentils and stock and simmer for 25 minutes until the lentils are soft and collapsing.\n' +
      '3. Stir in the spinach to wilt and blitz the soup until smooth. Season with salt and a squeeze of lemon.\n' +
      '4. For the topping, warm the remaining oil, stir in the smoked paprika and a pinch of chilli flakes off the heat, then drizzle over each bowl.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g, red' },
      { rawName: 'Spinach', rawMeasure: '80g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Salads ────────────────────────────────────────────────────────────────
  {
    title: 'Warm puy lentil salad with roasted beetroot and goat\'s cheese',
    servingsBase: 2,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the beetroot wedges with a little olive oil and roast for 30 minutes until tender. Season.\n' +
      '2. Meanwhile simmer the lentils in fresh water for 20–22 minutes until just cooked but still holding their shape. Drain.\n' +
      '3. Whisk the sherry vinegar with the Dijon mustard and remaining olive oil, season and toss through the warm lentils.\n' +
      '4. Pile the lentils onto plates with the roasted beetroot and watercress, crumble over the goat\'s cheese and serve warm.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '150g, dried Puy or green' },
      { rawName: 'Beetroot', rawMeasure: '250g, raw, peeled, in wedges' },
      { rawName: 'Goat\'s cheese', rawMeasure: '80g' },
      { rawName: 'Watercress', rawMeasure: '50g' },
      { rawName: 'Mustard', rawMeasure: '1 tsp Dijon' },
      { rawName: 'Sherry vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai-style prawn and glass noodle salad',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Thai',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Soak the glass noodles in boiling water for 5 minutes until tender, then drain and rinse under cold water.\n' +
      '2. Cook the prawns in a pan with a little oil until pink and curled, then leave to cool.\n' +
      '3. Whisk together the fish sauce, lime juice, chilli flakes and a little sesame oil for the dressing — no added sugar, the lime balances the fish sauce naturally.\n' +
      '4. Toss the noodles, prawns, cucumber, spring onion, mint and coriander in the dressing and serve scattered with crushed peanuts.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '250g, cooked, peeled' },
      { rawName: 'Glass noodles', rawMeasure: '80g (mung bean noodles)' },
      { rawName: 'Cucumber', rawMeasure: '1/2, thinly sliced' },
      { rawName: 'Spring onion', rawMeasure: '3, sliced' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Peanuts', rawMeasure: '25g, lightly crushed' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Griddled halloumi and lentil salad with pomegranate',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Drain and rinse the lentils, then toss with the olive oil, lemon juice, garlic, cumin and seasoning.\n' +
      '2. Heat a griddle pan over a high heat. Slice the halloumi about 1 cm thick and griddle for 1–2 minutes a side until charred lines appear and the cheese is soft inside.\n' +
      '3. Pile the lentils on a plate with the rocket and top with the halloumi.\n' +
      '4. Scatter over the pomegranate seeds and mint and serve immediately. Lentils give low-GI carbohydrate; pomegranate seeds provide natural sweetness with no added sugar.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Feta', rawMeasure: '225g halloumi' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Pomegranate', rawMeasure: '4 tbsp seeds' },
      { rawName: 'Mint', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Crab and avocado salad with lime',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Pick through the crab meat to remove any fragments of shell, then season with the lime juice and a little salt.\n' +
      '2. Halve, stone and peel the avocados, then fan out the flesh onto plates.\n' +
      '3. Pile the crab over the avocado and scatter with the spring onion, cucumber strips and chilli flakes.\n' +
      '4. Finish with a final squeeze of lime and a drizzle of olive oil. A clean, low-carb, sugar-free starter or light lunch.',
    rawLines: [
      { rawName: 'Crabmeat', rawMeasure: '200g, white and brown, mixed' },
      { rawName: 'Avocado', rawMeasure: '2' },
      { rawName: 'Cucumber', rawMeasure: '1/4, cut into matchsticks' },
      { rawName: 'Spring onion', rawMeasure: '2, sliced' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Brown rice, edamame and miso dressing bowl',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Cook the brown rice in salted water for 25–28 minutes until tender, then drain and cool slightly.\n' +
      '2. Blanch the edamame in boiling water for 3 minutes, then drain and cool.\n' +
      '3. Whisk the miso paste with the rice vinegar, sesame oil and a little water to make a dressing.\n' +
      '4. Divide the rice between bowls and top with the edamame, grated carrot, sliced cucumber and spring onion. Drizzle over the miso dressing and scatter with sesame seeds.',
    rawLines: [
      { rawName: 'Brown rice', rawMeasure: '150g' },
      { rawName: 'Edamame beans', rawMeasure: '150g, frozen, shelled' },
      { rawName: 'Carrot', rawMeasure: '1, grated' },
      { rawName: 'Cucumber', rawMeasure: '1/3, thinly sliced' },
      { rawName: 'Spring onion', rawMeasure: '3, sliced' },
      { rawName: 'Miso paste', rawMeasure: '1 tbsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp rice vinegar' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Chicken & Turkey Mains ────────────────────────────────────────────────
  {
    title: 'Roasted chicken thighs with cavolo nero and white beans',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Season the chicken thighs all over and place skin-side up in a roasting tin with the garlic cloves and rosemary.\n' +
      '2. Roast for 35–40 minutes until the skin is golden and the juices run clear.\n' +
      '3. While the chicken rests, tip the fat from the tin into a pan. Soften the onion for 5 minutes, then add the white beans and a splash of stock and warm through for 5 minutes.\n' +
      '4. Stir in the cavolo nero and cook until wilted, season and serve alongside the chicken. A simple, sugar-free Italian-style supper.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Cavolo nero', rawMeasure: '200g, shredded' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '4 cloves, whole' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Stock cube', rawMeasure: '1/2, made up to 100ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and mushroom barley risotto',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oil and brown the diced chicken over a high heat, then lift out. In the same pan soften the onion for 8 minutes.\n' +
      '2. Add the sliced mushrooms and cook until any liquid has evaporated.\n' +
      '3. Stir in the pearl barley and the garlic, then pour in the stock ladle by ladle, stirring and waiting for each addition to be absorbed before adding the next, over 30–35 minutes.\n' +
      '4. Return the chicken, season, stir through the parsley and serve. Pearl barley is slower to digest than risotto rice, making this genuinely gentler on blood sugar.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '400g, diced' },
      { rawName: 'Mushroom', rawMeasure: '250g, sliced' },
      { rawName: 'Bulgur wheat', rawMeasure: '200g pearl barley' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1.2 litres' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spanish-style chicken with peppers and olives',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oil in a wide casserole and brown the chicken thighs on both sides, then lift out.\n' +
      '2. Soften the peppers and onion for 10 minutes, then add the garlic, smoked paprika and a bay leaf.\n' +
      '3. Pour in the chopped tomatoes and stock, return the chicken, cover and simmer gently for 30 minutes until cooked through.\n' +
      '4. Scatter in the olives, season and finish with parsley. No sugar — the peppers and slow-cooked tomatoes provide natural sweetness.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, boneless' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2, mixed colours, sliced' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Olives', rawMeasure: '80g, pitted' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Bay leaves', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1/2, made up to 150ml' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai green turkey curry with courgette and spinach',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oil in a wok or wide pan and fry the green curry paste for 2 minutes until fragrant.\n' +
      '2. Add the diced turkey and stir-fry for 5 minutes over a high heat until lightly coloured.\n' +
      '3. Pour in the coconut milk and stock, add the courgette batons and simmer for 12 minutes until the turkey is cooked through.\n' +
      '4. Stir in the spinach to wilt, squeeze over the lime and season with fish sauce. Serve with a small portion of brown rice. No sugar added — lime and fish sauce balance the coconut.',
    rawLines: [
      { rawName: 'Turkey breast', rawMeasure: '500g, diced' },
      { rawName: 'Coconut milk', rawMeasure: '1 x 400ml tin, reduced fat' },
      { rawName: 'Courgette', rawMeasure: '2, cut into batons' },
      { rawName: 'Spinach', rawMeasure: '80g' },
      { rawName: 'Green curry paste', rawMeasure: '2 tbsp' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1/2, made up to 150ml' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Cajun chicken with black-eyed beans and greens',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Rub the chicken breasts all over with the Cajun seasoning, smoked paprika and a little oil. Leave to sit for 10 minutes.\n' +
      '2. Grill or griddle for 6–7 minutes a side until cooked through and charred at the edges. Rest for 5 minutes.\n' +
      '3. Meanwhile warm the black-eyed beans in a pan with the garlic, a splash of stock and the spring onions for 5 minutes.\n' +
      '4. Stir in the shredded kale and cook until wilted, season and serve alongside the sliced chicken. Pulses keep the GI low with no added sugar.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4' },
      { rawName: 'Black beans', rawMeasure: '1 x 400g tin black-eyed beans, drained' },
      { rawName: 'Kale', rawMeasure: '150g, shredded' },
      { rawName: 'Spring onion', rawMeasure: '4, sliced' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cayenne pepper', rawMeasure: '1/2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1/2, made up to 100ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken shawarma bowls with bulgur wheat and tzatziki',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Diabetic-friendly', 'High-protein'],
    instructions:
      '1. Combine the olive oil, lemon juice, garlic, cumin, coriander, turmeric, cinnamon and black pepper in a bowl and coat the chicken thighs. Leave for at least 20 minutes.\n' +
      '2. Cook the bulgur wheat in salted water for 10–12 minutes until tender, drain and fluff with a fork.\n' +
      '3. Grill or pan-fry the chicken for 6–7 minutes a side until cooked through and charred, then slice.\n' +
      '4. For the tzatziki, stir the grated cucumber and chopped mint into the yoghurt and season. Serve the sliced chicken over the bulgur with the tzatziki alongside.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, boneless' },
      { rawName: 'Bulgur wheat', rawMeasure: '200g' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g' },
      { rawName: 'Cucumber', rawMeasure: '1/2, grated' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Fish & Seafood Mains ──────────────────────────────────────────────────
  {
    title: 'Ginger-soy poached salmon with pak choi',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Bring a shallow pan of water to a simmer and add the sliced ginger, soy sauce and a splash of rice vinegar.\n' +
      '2. Lower in the salmon fillets, cover and poach gently for 8–10 minutes until the fish is just cooked through. Lift out carefully.\n' +
      '3. Blanch the pak choi in the poaching liquid for 2 minutes until just wilted, then drain.\n' +
      '4. Serve the salmon on the pak choi, spoon over a little of the poaching broth and scatter with the spring onion and sesame seeds. No sugar in the broth — ginger and soy carry it.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Pak choi', rawMeasure: '2 heads, halved' },
      { rawName: 'Ginger', rawMeasure: '30g, sliced' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp rice vinegar' },
      { rawName: 'Spring onion', rawMeasure: '2, finely sliced' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Seared tuna steak with avocado and tomato salsa',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Dice the avocado, tomatoes and red onion, toss with the lime juice, coriander and a little olive oil and season. Set aside.\n' +
      '2. Brush the tuna steaks with oil and season generously.\n' +
      '3. Heat a griddle pan until smoking, sear the tuna for 90 seconds a side for pink in the centre, or 2–3 minutes for cooked through.\n' +
      '4. Plate the tuna and spoon the salsa alongside. Fresh and sugar-free with healthy omega-3 fats.',
    rawLines: [
      { rawName: 'Tuna steak', rawMeasure: '2, about 150g each' },
      { rawName: 'Avocado', rawMeasure: '1, diced' },
      { rawName: 'Tomato', rawMeasure: '2, deseeded and diced' },
      { rawName: 'Red onion', rawMeasure: '1/4, finely diced' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Keralan-spiced fish curry with spinach',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oil in a wide pan and gently fry the mustard seeds until they pop. Add the onion, garlic and ginger and soften for 8 minutes.\n' +
      '2. Stir in the curry powder, turmeric and tomatoes and cook for 5 minutes until the sauce reduces.\n' +
      '3. Pour in the coconut milk and simmer for 5 minutes.\n' +
      '4. Nestle in the fish pieces, cover and cook gently for 7–8 minutes until just done. Stir in the spinach to wilt, season with salt and a squeeze of lime and serve with a small portion of brown rice.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '600g, cut into chunks' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Coconut milk', rawMeasure: '1 x 400ml tin, reduced fat' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '25g' },
      { rawName: 'Tomato', rawMeasure: '2, chopped' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Mustard seeds', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '1/2' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled sardines with lemon and herbs',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Score the sardines on both sides, rub with olive oil, season inside and out and stuff with slices of lemon and sprigs of parsley.\n' +
      '2. Grill under a high grill for 3–4 minutes a side until the skin chars and the flesh is opaque.\n' +
      '3. Serve immediately with a simple tomato and herb salad — tomatoes halved and tossed with olive oil, red onion and fresh herbs.\n' +
      '4. Squeeze over the remaining lemon. Sardines are one of the richest sources of omega-3 fats; no added sugar required.',
    rawLines: [
      { rawName: 'Sardines', rawMeasure: '6, fresh or tinned in brine, drained' },
      { rawName: 'Tomato', rawMeasure: '3, halved' },
      { rawName: 'Red onion', rawMeasure: '1/4, sliced' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mussels in tomato and white wine broth',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Scrub the mussels under cold water and discard any that do not close when tapped.\n' +
      '2. Heat the olive oil in a large pot and soften the shallots and garlic for 5 minutes.\n' +
      '3. Add the cherry tomatoes and cook for 3 minutes, then pour in the white wine and stock. Bring to a rapid simmer.\n' +
      '4. Tip in the mussels, cover and steam for 4–5 minutes until they open. Discard any that remain closed. Scatter with parsley and serve. No sugar — the wine reduces to a clean, bright sauce.',
    rawLines: [
      { rawName: 'Mussels', rawMeasure: '800g, cleaned' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Shallot', rawMeasure: '2, sliced' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'White wine', rawMeasure: '100ml, dry' },
      { rawName: 'Stock cube', rawMeasure: '1/2, made up to 100ml fish stock' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jamaican-spiced prawns with black beans and coriander',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Toss the prawns with the allspice, smoked paprika, thyme, garlic, chilli flakes and a little oil and leave for 10 minutes.\n' +
      '2. Warm the black beans in a pan with the spring onion, garlic and a splash of stock for 5 minutes; season.\n' +
      '3. Heat a frying pan over a high heat and cook the marinated prawns for 2–3 minutes until pink and charred at the edges.\n' +
      '4. Serve the prawns over the beans, scattered with fresh coriander and a wedge of lime. Caribbean spices carry the dish; no sugar needed.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '300g, raw, peeled' },
      { rawName: 'Black beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Spring onion', rawMeasure: '3, sliced' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Allspice', rawMeasure: '1/2 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Thyme', rawMeasure: '1/2 tsp dried' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1/2, made up to 100ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Beef, Pork & Lamb Mains ───────────────────────────────────────────────
  {
    title: 'Beef and vegetable stuffed aubergines',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: ['Diabetic-friendly', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the aubergines, score the flesh and brush with oil. Roast cut-side down for 20 minutes until soft, then scoop out most of the flesh leaving a 1 cm shell.\n' +
      '2. Chop the aubergine flesh and fry with the minced beef, onion and garlic until browned. Stir in the tomato purée, cumin and cinnamon.\n' +
      '3. Add the chopped tomatoes, season and simmer for 10 minutes until thick.\n' +
      '4. Fill the aubergine shells with the meat mixture, place in a baking dish and roast for a further 15 minutes. Finish with parsley and a little yoghurt. Traditional karnıyarık, adapted without any added sugar.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '4 medium' },
      { rawName: 'Minced beef', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1, finely diced' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp, to serve' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Irish lamb stew with turnip and savoy cabbage',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Brown the lamb pieces in batches in the oil in a large casserole, then lift out. Soften the onion and leek for 8 minutes.\n' +
      '2. Return the lamb with the turnip, carrot and stock. Bring to the boil, skim off any foam, then cover and simmer for 1 hour 15 minutes until the lamb is very tender.\n' +
      '3. Stir in the shredded cabbage and simmer for a further 5 minutes until wilted.\n' +
      '4. Season well, scatter over the parsley and serve. Turnip and cabbage stand in for potato to keep the GI low; no thickener or sugar is needed.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '700g, cut into pieces' },
      { rawName: 'Turnip', rawMeasure: '400g, diced' },
      { rawName: 'Carrot', rawMeasure: '3, sliced' },
      { rawName: 'Leek', rawMeasure: '2, sliced' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Savoy cabbage', rawMeasure: '200g, shredded' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1 litre' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork and butter bean cassoulet-style stew',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Brown the diced pork shoulder in batches in the oil, then lift out. Soften the onion, carrot and celery for 10 minutes in the same pan.\n' +
      '2. Stir in the garlic, thyme and tomato purée, then pour in the chopped tomatoes and stock. Return the pork.\n' +
      '3. Cover and simmer gently for 45 minutes, then stir in the butter beans and cook uncovered for a further 15 minutes until the sauce thickens and the beans are heated through.\n' +
      '4. Season, scatter with parsley and serve. Butter beans take the place of bread-crumbed potato; no sugar added.',
    rawLines: [
      { rawName: 'Pork shoulder', rawMeasure: '600g, diced' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin butter beans, drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Thyme', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek-style baked lamb with tomatoes and chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Heat the oil in a casserole and brown the lamb chops or leg pieces on both sides.\n' +
      '2. Scatter over the onion, garlic and chickpeas, pour in the chopped tomatoes and stock and tuck in the rosemary and bay.\n' +
      '3. Cover tightly and bake for 1 hour 30 minutes until the lamb is falling off the bone and the chickpeas are tender and silky.\n' +
      '4. Season, remove the bay and rosemary and serve with a crisp green salad. Low-GI chickpeas replace potatoes; no sugar needed.',
    rawLines: [
      { rawName: 'Lamb', rawMeasure: '800g, chops or shoulder pieces' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Onion', rawMeasure: '2, sliced' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jerk pork tenderloin with mango and black bean salsa',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['Diabetic-friendly', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Rub the pork tenderloin with the jerk spice blend, garlic, olive oil and a little salt. Allow to sit for 15 minutes.\n' +
      '2. Sear in a hot oven-proof frying pan for 5 minutes, turning, then transfer to the oven at 200°C (fan 180°C) for 15–18 minutes until cooked through. Rest for 5 minutes.\n' +
      '3. While the pork rests, combine the diced mango (a measured amount keeps sugar controlled), black beans, red onion, lime juice, coriander and chilli flakes for the salsa.\n' +
      '4. Slice the pork and serve with the salsa. Mango is used in a modest quantity for natural sweetness; no added sugar.',
    rawLines: [
      { rawName: 'Pork tenderloin', rawMeasure: '600g' },
      { rawName: 'Black beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Mango', rawMeasure: '1/2, finely diced' },
      { rawName: 'Red onion', rawMeasure: '1/2, finely diced' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Allspice', rawMeasure: '1 tsp' },
      { rawName: 'Thyme', rawMeasure: '1 tsp dried' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Vegetarian & Vegan Mains ──────────────────────────────────────────────
  {
    title: 'Moroccan-spiced vegetable and chickpea stew',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oil and soften the onion for 8 minutes, then stir in the garlic, ras el hanout, cumin and paprika.\n' +
      '2. Add the diced sweet potato, courgette, chopped tomatoes, chickpeas and stock. Bring to the boil.\n' +
      '3. Simmer for 25 minutes until the sweet potato is tender and the sauce rich.\n' +
      '4. Squeeze over the lemon and scatter with coriander. No added sugar — the spice blend and tomatoes balance beautifully. Serve with bulgur wheat.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Sweet potato', rawMeasure: '400g, diced' },
      { rawName: 'Courgette', rawMeasure: '2, sliced' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Ras el hanout', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Italian baked eggs with borlotti beans and cavolo nero',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the olive oil in an ovenproof pan, soften the onion and garlic for 8 minutes, then stir in the tomato purée and chopped tomatoes.\n' +
      '2. Add the drained borlotti beans and shredded cavolo nero and simmer for 10 minutes until the greens are tender.\n' +
      '3. Make four wells in the sauce, crack an egg into each, season and transfer to the oven at 180°C (fan 160°C).\n' +
      '4. Bake for 10–12 minutes until the whites are just set. Scatter with basil and serve directly from the pan. Borlotti beans provide low-GI carbohydrate with no added sugar.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Kidney beans', rawMeasure: '1 x 400g tin borlotti beans, drained' },
      { rawName: 'Cavolo nero', rawMeasure: '150g, shredded' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Basil', rawMeasure: '2 tbsp, torn' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mexican black bean and sweet potato burritos in lettuce wraps',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Steam or roast the diced sweet potato for 15 minutes until tender.\n' +
      '2. Heat the oil, soften the onion and pepper for 8 minutes, then stir in the garlic, cumin, smoked paprika and chilli powder.\n' +
      '3. Add the black beans and sweet potato, stir together and heat through. Season and squeeze over the lime.\n' +
      '4. Spoon the filling into large iceberg lettuce leaves (which replace flour tortillas, cutting refined carbs) and scatter with coriander and sliced avocado.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Sweet potato', rawMeasure: '400g, diced small' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red, diced' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Avocado', rawMeasure: '1, sliced' },
      { rawName: 'Iceberg lettuce', rawMeasure: '1 head, leaves separated' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mujaddara-style lentils and caramelised onions with brown rice',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Simmer the brown rice in salted water for 25 minutes until tender, then drain and set aside.\n' +
      '2. Meanwhile, heat three tablespoons of the oil in a pan and cook the onions very slowly over a low heat for 25–30 minutes, stirring occasionally, until deeply golden. No sugar is added — the long cooking coaxes out the onions\' natural sweetness.\n' +
      '3. In a separate pan, simmer the lentils in water with the cumin and cinnamon for 20 minutes until tender; season.\n' +
      '4. Stir the rice through the lentils, pile into a serving dish and top with the caramelised onions. Finish with a spoon of natural yoghurt if liked.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g, green or Puy, rinsed' },
      { rawName: 'Brown rice', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '3 large, thinly sliced' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp, optional' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paneer and pea bhurji with wholemeal chapattis',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Diabetic-friendly', 'Vegetarian'],
    instructions:
      '1. Heat the oil in a wide pan and fry the onion for 8 minutes until golden, then add the garlic, ginger, cumin, turmeric and garam masala and fry for another minute.\n' +
      '2. Stir in the chopped tomatoes and cook for 5 minutes until the sauce thickens.\n' +
      '3. Add the crumbled paneer and frozen peas and heat through for 5 minutes, stirring well. Season.\n' +
      '4. Finish with the coriander. Serve with wholemeal chapattis (made from wholemeal flour, which is slower-digesting than white). No added sugar anywhere.',
    rawLines: [
      { rawName: 'Paneer', rawMeasure: '250g, crumbled' },
      { rawName: 'Peas', rawMeasure: '200g, frozen' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Wholemeal flour', rawMeasure: '200g for chapattis' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek-style lemon and herb baked courgettes with feta',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Slice the courgettes lengthways, brush with olive oil, season and roast cut-side down for 20 minutes until golden.\n' +
      '2. Flip the courgettes, crumble over the feta, scatter with oregano and drizzle with a little more oil.\n' +
      '3. Return to the oven for 10 minutes until the feta is softened and lightly golden.\n' +
      '4. Squeeze over the lemon and scatter with mint leaves to serve. Simple, low-carb and entirely sugar-free.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '4 medium' },
      { rawName: 'Feta', rawMeasure: '120g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Mint', rawMeasure: '1 tbsp, torn' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pad Thai-style courgette noodles with tofu and peanuts',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Use a spiraliser or peeler to make courgette noodles. Pat dry with kitchen paper.\n' +
      '2. Press the tofu dry, cut into cubes and fry in the oil until golden on all sides. Lift out.\n' +
      '3. In the same pan, stir-fry the spring onion and garlic for 1 minute, then add the courgette noodles and toss for 2–3 minutes.\n' +
      '4. Return the tofu, add the lime juice, fish sauce or soy sauce, toss and serve scattered with peanuts, bean sprouts and coriander. Traditional Pad Thai uses palm sugar; this version uses lime to balance the umami with no added sugar.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '300g, firm' },
      { rawName: 'Courgette', rawMeasure: '3, spiralised' },
      { rawName: 'Spring onion', rawMeasure: '4, sliced' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Peanuts', rawMeasure: '30g, lightly crushed' },
      { rawName: 'Bean sprouts', rawMeasure: '80g' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },

  // ── Sides ────────────────────────────────────────────────────────────────
  {
    title: 'Spiced roasted carrots with harissa yoghurt',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the carrots with the olive oil, cumin, coriander and a pinch of salt.\n' +
      '2. Spread on a baking tray and roast for 30 minutes until tender and caramelised at the edges.\n' +
      '3. Stir the harissa through the yoghurt and spread onto a serving plate.\n' +
      '4. Pile the roasted carrots on top, squeeze over the lemon and scatter with fresh herbs. Natural sweetness from the roasted carrot; no added sugar.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '600g, halved lengthways' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Harissa paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sautéed kale with garlic, pine nuts and lemon',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Toast the pine nuts in a dry pan until golden, then tip out.\n' +
      '2. Heat the olive oil in the pan, add the garlic and fry gently for 1 minute without colouring.\n' +
      '3. Add the shredded kale and a splash of water, cover and cook for 4–5 minutes until wilted. Remove the lid and cook off any liquid.\n' +
      '4. Season, squeeze over the lemon, scatter over the pine nuts and serve. No sugar; the lemon lifts the bitterness of the kale.',
    rawLines: [
      { rawName: 'Kale', rawMeasure: '400g, shredded' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, sliced' },
      { rawName: 'Pine nuts', rawMeasure: '30g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted fennel with olives and parsley',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Quarter the fennel bulbs through the root so they hold together.\n' +
      '2. Toss with olive oil, season and roast for 30 minutes until tender and golden at the edges.\n' +
      '3. Scatter over the olives in the last 5 minutes of cooking.\n' +
      '4. Finish with the parsley, a squeeze of lemon and the reserved fennel fronds. A sugar-free, low-carb side with delicate anise flavour.',
    rawLines: [
      { rawName: 'Fennel', rawMeasure: '2 large bulbs, fronds reserved' },
      { rawName: 'Olives', rawMeasure: '60g, pitted' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Black bean and avocado smash',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Side',
    cuisine: 'Mexican',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Drain the black beans and warm briefly in a pan, then roughly mash with the back of a fork, keeping some texture.\n' +
      '2. Halve, stone and mash the avocado into the beans.\n' +
      '3. Stir in the lime juice, garlic, cumin and chilli flakes and season generously.\n' +
      '4. Scatter with coriander and serve as a side dish or with vegetable crudités. Avocado and beans are both low-GI; no added sugar.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Avocado', rawMeasure: '1 ripe' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Wilted spinach with sesame and soy dressing',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Side',
    cuisine: 'Japanese',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Blanch the spinach in a large pan of boiling water for 30 seconds until just wilted. Drain and squeeze out the excess water.\n' +
      '2. Mix the soy sauce, sesame oil and rice vinegar together to make a simple dressing.\n' +
      '3. Toss the spinach in the dressing and arrange in a small dish.\n' +
      '4. Scatter over the sesame seeds and serve. A classic Japanese ohitashi-style side — no added sugar, just pure umami.',
    rawLines: [
      { rawName: 'Spinach', rawMeasure: '400g, baby leaf' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tsp rice vinegar' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Roasted red cabbage with caraway and apple vinegar',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the red cabbage into wedges through the core so the leaves hold together.\n' +
      '2. Toss with olive oil, caraway seeds and season, then roast for 30–35 minutes until the edges are crisp and charred.\n' +
      '3. Splash over the apple cider vinegar in the last 5 minutes of cooking.\n' +
      '4. Serve warm. Traditional braised red cabbage uses sugar; roasting with vinegar produces a tangy, caramelised result with no sugar at all.',
    rawLines: [
      { rawName: 'Red cabbage', rawMeasure: '1 small head, in wedges' },
      { rawName: 'Caraway seeds', rawMeasure: '1 tsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp apple cider vinegar' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Snacks ────────────────────────────────────────────────────────────────
  {
    title: 'Baba ganoush with vegetable crudités',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Prick the aubergines all over and roast directly over a gas flame or under a very high grill, turning occasionally, for 15–20 minutes until the skin is charred and the flesh very soft.\n' +
      '2. Leave to cool, then scoop out the flesh and drain off any bitter liquid.\n' +
      '3. Mash or blitz with the tahini, lemon juice, garlic and a little salt until smooth and smoky.\n' +
      '4. Spoon into a bowl, drizzle with olive oil and serve with cucumber, carrot and celery sticks. A low-carb, sugar-free dip rich in fibre.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Tahini', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced mixed nuts',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Line a small baking tray.\n' +
      '2. Toss the mixed nuts with the olive oil, smoked paprika, cumin, cayenne and a generous pinch of salt.\n' +
      '3. Spread on the tray and bake for 10–12 minutes, shaking once, until toasted and fragrant.\n' +
      '4. Cool before eating — they crisp further as they cool. A handful of spiced nuts keeps blood sugar steady; no added sugar or coatings.',
    rawLines: [
      { rawName: 'Mixed nuts', rawMeasure: '250g (almonds, cashews, walnuts)' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Cayenne pepper', rawMeasure: '1/4 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Edamame with sea salt and chilli',
    servingsBase: 2,
    totalTimeMinutes: 8,
    course: 'Snack',
    cuisine: 'Japanese',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Bring a pan of salted water to the boil. Tip in the edamame still in their pods and cook for 4–5 minutes until bright green and tender.\n' +
      '2. Drain and pile into a bowl.\n' +
      '3. Sprinkle over flaky sea salt and the chilli flakes while still warm.\n' +
      '4. Eat by squeezing the beans directly from the pods. A protein-rich, low-GI snack with no added sugar.',
    rawLines: [
      { rawName: 'Edamame beans', rawMeasure: '300g, in pods, frozen' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Salt', rawMeasure: '1 tsp flaky sea salt' },
    ],
  },
  {
    title: 'Celery with almond butter and cinnamon',
    servingsBase: 1,
    totalTimeMinutes: 5,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Trim the celery sticks and arrange on a plate.\n' +
      '2. Stir a pinch of cinnamon into the almond butter — it adds warmth and helps slow gastric emptying.\n' +
      '3. Dollop the spiced almond butter into each celery groove.\n' +
      '4. Serve immediately. Celery is virtually carbohydrate-free; almond butter provides protein and healthy fats. No sugar added.',
    rawLines: [
      { rawName: 'Celery', rawMeasure: '3 sticks' },
      { rawName: 'Almond butter', rawMeasure: '2 tbsp, no added sugar' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Smoked salmon and cream cheese cucumber rounds',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Pescatarian', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Slice the cucumber into rounds about 1 cm thick — these act as the base in place of crackers or bread, eliminating refined carbs entirely.\n' +
      '2. Spread each round with a little cream cheese and season with black pepper.\n' +
      '3. Lay a small piece of smoked salmon on top and finish with a few capers and a tiny squeeze of lemon.\n' +
      '4. Arrange on a plate and serve at once. A protein-rich, zero-sugar snack.',
    rawLines: [
      { rawName: 'Cucumber', rawMeasure: '1/2, thickly sliced' },
      { rawName: 'Smoked salmon', rawMeasure: '80g' },
      { rawName: 'Cream cheese', rawMeasure: '2 tbsp' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/4' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Desserts ──────────────────────────────────────────────────────────────
  {
    title: 'Almond flour and raspberry flourless cake',
    servingsBase: 8,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C) and grease and line a 20 cm round cake tin.\n' +
      '2. Beat the eggs until pale and thick, then fold in the ground almonds, vanilla extract and lemon zest. No added sugar is used; the whole raspberries will provide natural sweetness as they collapse during baking.\n' +
      '3. Fold through half the raspberries gently, then pour the batter into the tin.\n' +
      '4. Scatter the remaining raspberries on top and bake for 30–35 minutes until a skewer comes out clean. Cool in the tin before serving with a spoonful of natural yoghurt.',
    rawLines: [
      { rawName: 'Ground almonds', rawMeasure: '200g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Raspberries', rawMeasure: '200g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1, zest only' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp, to serve' },
    ],
  },
  {
    title: 'Stewed rhubarb with ginger and Greek yoghurt',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Trim the rhubarb and cut into 3 cm pieces. Place in a pan with the grated ginger and a splash of water.\n' +
      '2. Cook over a low heat, covered, for 8–10 minutes until the rhubarb has collapsed to a thick compote. No sugar is added — rhubarb is naturally tart, and a small amount of vanilla extract lends a hint of sweetness.\n' +
      '3. Stir through the vanilla extract and leave to cool slightly.\n' +
      '4. Serve the warm rhubarb over the Greek yoghurt. Rhubarb is very low in natural sugar; Greek yoghurt provides protein.',
    rawLines: [
      { rawName: 'Rhubarb', rawMeasure: '400g, trimmed' },
      { rawName: 'Greek yoghurt', rawMeasure: '400g' },
      { rawName: 'Ginger', rawMeasure: '15g, grated' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Chilled berry and coconut chia pot',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Whisk the chia seeds into the coconut milk with the vanilla extract and a tiny pinch of salt. Beat vigorously to prevent clumping.\n' +
      '2. Leave at room temperature for 10 minutes, whisk again, then cover and refrigerate overnight until set.\n' +
      '3. Muddle or lightly warm the mixed berries in a small pan for 3 minutes until they release their juices — no sugar added.\n' +
      '4. Spoon the chia pudding into glasses, top with the berry compote and serve chilled.',
    rawLines: [
      { rawName: 'Chia seeds', rawMeasure: '6 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 x 400ml tin, reduced fat' },
      { rawName: 'Frozen mixed berries', rawMeasure: '200g' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'No-added-sugar lemon and almond ricotta cake',
    servingsBase: 8,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C) and grease and line a 20 cm springform tin.\n' +
      '2. Whisk the ricotta until smooth, then beat in the eggs, lemon zest, lemon juice and vanilla extract.\n' +
      '3. Fold in the ground almonds and baking powder. The natural fat and protein of the almonds and ricotta give structure with no added sugar and no flour.\n' +
      '4. Pour into the tin and bake for 35–40 minutes until just set and lightly golden. Leave to cool fully in the tin before releasing and serving with a dusting of cocoa powder and a few fresh raspberries.',
    rawLines: [
      { rawName: 'Ricotta', rawMeasure: '250g' },
      { rawName: 'Ground almonds', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Lemon', rawMeasure: '2, zest and juice' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Cocoa powder', rawMeasure: '1 tsp, to dust' },
      { rawName: 'Raspberries', rawMeasure: '80g, to serve' },
    ],
  },
  {
    title: 'Frozen berry and yoghurt bark',
    servingsBase: 6,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Line a small baking tray or shallow dish with baking parchment.\n' +
      '2. Stir the vanilla extract through the Greek yoghurt and spread in a thin, even layer over the parchment.\n' +
      '3. Scatter over the blueberries, raspberries and the chopped nuts and press them gently into the yoghurt.\n' +
      '4. Freeze for at least two hours until completely solid. Break into shards and serve straight from the freezer. All the sweetness comes from the whole berries; no added sugar.',
    rawLines: [
      { rawName: 'Greek yoghurt', rawMeasure: '400g' },
      { rawName: 'Blueberries', rawMeasure: '80g' },
      { rawName: 'Raspberries', rawMeasure: '80g' },
      { rawName: 'Almonds', rawMeasure: '30g, roughly chopped' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Cardamom-spiced poached pears with pistachios',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dessert',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Diabetic-friendly', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Peel the pears, leaving the stalks on. Bring enough water to cover the pears to a gentle simmer in a wide pan with the cardamom pods, cinnamon stick and lemon zest.\n' +
      '2. Lower in the pears and poach gently for 15–18 minutes, turning occasionally, until just tender when pierced with a skewer. No sugar is added to the poaching liquid — the warm spices create an aromatic, fragrant broth.\n' +
      '3. Lift out the pears and reduce the liquid over a high heat for 5 minutes to a thin, glossy syrup.\n' +
      '4. Serve the pears drizzled with the syrup and scattered with the chopped pistachios.',
    rawLines: [
      { rawName: 'Pear', rawMeasure: '4, firm' },
      { rawName: 'Cardamom pods', rawMeasure: '6, bruised' },
      { rawName: 'Cinnamon stick', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1, zest only' },
      { rawName: 'Pistachio nuts', rawMeasure: '30g, roughly chopped' },
    ],
  },
  {
    title: 'Warm dark chocolate and hazelnut cups',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['Diabetic-friendly', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Break the dark chocolate (at least 85% cocoa solids, which is low in sugar) into a heatproof bowl and melt over a pan of barely simmering water.\n' +
      '2. Remove from the heat and stir in the double cream, vanilla extract and the toasted hazelnuts.\n' +
      '3. Divide between four small espresso cups or ramekins and leave to cool slightly.\n' +
      '4. Serve warm with a pinch of sea salt flakes on top. The very high cocoa content keeps the sugar content low; no additional sweetener is used.',
    rawLines: [
      { rawName: 'Plain chocolate', rawMeasure: '120g, 85% cocoa' },
      { rawName: 'Double cream', rawMeasure: '80ml' },
      { rawName: 'Hazelnuts', rawMeasure: '40g, toasted and roughly chopped' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch flaky sea salt' },
    ],
  },
]
