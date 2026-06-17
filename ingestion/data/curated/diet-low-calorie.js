// Curated LOW-CALORIE (Slimming) recipes for Larder.
//
// Authored to seed the per-diet floor for "Low-calorie (Slimming)" — the
// Slimming-World / 5:2 / calorie-controlled view. Every recipe is built to come
// in at roughly 500 kcal per serving or under: lean proteins, plenty of
// vegetables, minimal added fat (oil measured by the teaspoon or sprayed),
// low-fat dairy, and big-volume, low-energy-density bulk so portions stay
// satisfying. Nothing is forbidden for this diet — the only constraint is the
// calorie ceiling — so labels here are tagged honestly per dish (many are also
// gluten-free, dairy-free, high-protein, vegetarian, etc.).
//
// Culinary content ONLY — sources/curated.js (mapCurated) adds the
// source/sourceId/imageUrl boilerplate and the generated placeholder image.
// Ingredient lines use vocabulary from data/ingredients.js so they resolve
// cleanly. Method prose is original, written fresh in British English; no
// website wording is copied.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     healthLabels, instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  // ── Soups (very low energy density, big volume) ──────────────────────────
  {
    title: 'Spiced carrot and lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Low-fat'],
    instructions:
      '1. Warm the olive oil in a large pan and toast the cumin and chilli flakes for a few seconds until fragrant.\n' +
      '2. Tip in the carrots and red lentils, stir to coat, then pour in the hot stock. Bring to the boil.\n' +
      '3. Simmer briskly for 15 minutes until the lentils are soft and the carrots collapse easily.\n' +
      '4. Blitz to a rough purée with a stick blender, loosening with a splash of water if it is too thick.\n' +
      '5. Season well, stir through the chopped coriander and serve piping hot.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '600g' },
      { rawName: 'Lentils', rawMeasure: '125g red split' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1 litre' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted tomato and basil soup',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Gluten-free', 'Low-fat'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the tomatoes and scatter into a roasting tin with the onion wedges and whole garlic cloves.\n' +
      '2. Spray with a little oil, season and roast for 30 minutes until soft and lightly charred at the edges.\n' +
      '3. Tip everything into a pan, squeezing the garlic from its skins, and add the hot stock and tomato purée.\n' +
      '4. Simmer for 5 minutes, then blitz smooth with a stick blender.\n' +
      '5. Stir through the torn basil, check the seasoning and serve.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '900g ripe' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Basil', rawMeasure: 'large handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp, sprayed' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chunky minestrone',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Low-fat'],
    instructions:
      '1. Soften the onion, carrot and celery in the olive oil over a medium heat for 8 minutes.\n' +
      '2. Stir in the garlic and tomato purée and cook for a minute, then add the chopped tomatoes and stock.\n' +
      '3. Bring to a simmer and cook for 10 minutes, then add the cannellini beans and small pasta.\n' +
      '4. Simmer for a further 10 minutes until the pasta is tender, adding the green beans for the last 4 minutes.\n' +
      '5. Season generously, stir through the parsley and serve in deep bowls.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Pasta', rawMeasure: '80g small shapes' },
      { rawName: 'Green beans', rawMeasure: '100g' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1 litre' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Leek and potato soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'Vegetarian'],
    healthLabels: ['Vegetarian', 'Gluten-free', 'Egg-free', 'Low-fat'],
    instructions:
      '1. Melt the butter in a large pan and sweat the sliced leeks gently for 8 minutes until soft but not coloured.\n' +
      '2. Add the diced potato and pour in the stock. Bring to the boil, then simmer for 15 minutes until the potato is tender.\n' +
      '3. Blitz until smooth with a stick blender, then stir in the milk to loosen.\n' +
      '4. Season well with salt and plenty of white pepper and warm through without boiling.\n' +
      '5. Ladle into bowls and finish with a scattering of chopped chives.',
    rawLines: [
      { rawName: 'Leek', rawMeasure: '3' },
      { rawName: 'Potato', rawMeasure: '350g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Milk', rawMeasure: '150ml semi-skimmed' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 800ml' },
      { rawName: 'Spring onion', rawMeasure: '2, snipped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai-style chicken noodle broth',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Thai',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Dairy-free', 'Egg-free'],
    instructions:
      '1. Bring the stock to a gentle simmer with the ginger, lemongrass, lime leaves and chilli, and cook for 5 minutes to infuse.\n' +
      '2. Slip in the sliced chicken breast and poach for 6 minutes until cooked through.\n' +
      '3. Add the rice vermicelli and pak choi and simmer for 3 minutes until the noodles are soft and the greens wilt.\n' +
      '4. Season with the soy sauce and a squeeze of lime, then taste and adjust.\n' +
      '5. Divide between two deep bowls and scatter over the spring onion and coriander.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '1 (about 150g), sliced' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 800ml' },
      { rawName: 'Ginger', rawMeasure: '20g, sliced' },
      { rawName: 'Lemongrass', rawMeasure: '1 stalk, bruised' },
      { rawName: 'Lime leaves', rawMeasure: '2' },
      { rawName: 'Chilli', rawMeasure: '1, sliced' },
      { rawName: 'Rice vermicelli', rawMeasure: '80g' },
      { rawName: 'Pak choi', rawMeasure: '2, halved' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
    ],
  },
  {
    title: 'Spicy black bean soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Mexican',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Gluten-free', 'Low-fat'],
    instructions:
      '1. Soften the onion and pepper in the olive oil for 6 minutes, then stir in the garlic, cumin and smoked paprika.\n' +
      '2. Add the black beans and stock, bring to the boil and simmer for 12 minutes.\n' +
      '3. Blitz about half the soup to thicken it, then stir back together for a hearty, part-smooth texture.\n' +
      '4. Squeeze in the lime, season and warm through.\n' +
      '5. Serve scattered with chopped coriander and extra chilli for those who like it hot.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '2 tins (800g), drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 800ml' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Salads (high volume, light dressings) ────────────────────────────────
  {
    title: 'Griddled chicken and rocket salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Flatten the chicken breasts slightly, rub with a little olive oil and season well.\n' +
      '2. Griddle over a high heat for 5–6 minutes a side until charred and cooked through, then rest and slice.\n' +
      '3. Toss the rocket, cherry tomatoes and cucumber in a bowl with the lemon juice and remaining oil.\n' +
      '4. Pile the salad onto plates and arrange the sliced chicken on top.\n' +
      '5. Finish with a grind of black pepper and a scattering of torn basil.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2 (about 300g)' },
      { rawName: 'Rocket', rawMeasure: '80g' },
      { rawName: 'Cherry tomato', rawMeasure: '200g, halved' },
      { rawName: 'Cucumber', rawMeasure: '1/2, sliced' },
      { rawName: 'Lemon', rawMeasure: '1, juiced' },
      { rawName: 'Olive oil', rawMeasure: '2 tsp' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna and cannellini bean salad',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Low-calorie', 'High-protein', 'Pescatarian'],
    healthLabels: ['Pescatarian', 'Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Drain the tuna and the cannellini beans and tip both into a roomy bowl.\n' +
      '2. Add the thinly sliced red onion, halved cherry tomatoes and chopped parsley.\n' +
      '3. Whisk the lemon juice with the olive oil and a little seasoning, then pour over.\n' +
      '4. Fold everything together gently so the beans keep their shape.\n' +
      '5. Pile onto a bed of rocket and serve at once, or chill briefly to let the flavours mingle.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '1 tin (145g), in spring water' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Red onion', rawMeasure: '1/2, finely sliced' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1, juiced' },
      { rawName: 'Olive oil', rawMeasure: '2 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek-style salad with feta',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: ['Low-calorie', 'Vegetarian'],
    healthLabels: ['Vegetarian', 'Gluten-free', 'Egg-free'],
    instructions:
      '1. Cut the tomatoes into chunks and the cucumber into thick half-moons and tip into a wide bowl.\n' +
      '2. Add the sliced red onion, the olives and a good pinch of dried oregano.\n' +
      '3. Crumble over the feta, keeping a few larger pieces for the top.\n' +
      '4. Dress with the olive oil and a squeeze of lemon, then season lightly (the feta and olives are salty).\n' +
      '5. Turn through once and serve straight away.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '3 large' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Olives', rawMeasure: '40g' },
      { rawName: 'Feta', rawMeasure: '80g' },
      { rawName: 'Oregano', rawMeasure: '1/2 tsp dried' },
      { rawName: 'Olive oil', rawMeasure: '2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2, juiced' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and avocado salad',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'High-protein', 'Pescatarian'],
    healthLabels: ['Pescatarian', 'Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Pat the prawns dry and arrange over a bed of baby leaf salad on two plates.\n' +
      '2. Fan the sliced avocado alongside and scatter over the cherry tomatoes and cucumber.\n' +
      '3. Whisk the lime juice with a teaspoon of olive oil and a pinch of chilli flakes for a light dressing.\n' +
      '4. Spoon the dressing over the salad and season with a little salt and pepper.\n' +
      '5. Finish with torn coriander and serve cool.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '180g cooked' },
      { rawName: 'Avocado', rawMeasure: '1, sliced' },
      { rawName: 'Baby leaf salad', rawMeasure: '80g' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Lime', rawMeasure: '1, juiced' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Warm puy lentil and roasted vegetable salad',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Low-fat'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, peppers and red onion with a teaspoon of oil and roast for 25 minutes.\n' +
      '2. Meanwhile simmer the lentils in plenty of water for 20 minutes until tender, then drain well.\n' +
      '3. Tip the warm lentils into a bowl and fold through the roasted vegetables.\n' +
      '4. Whisk the remaining oil with the lemon juice and a little mustard, then dress the salad while warm.\n' +
      '5. Season, stir through the parsley and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g puy or green' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1, juiced' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken, quinoa and pomegranate salad',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Middle Eastern',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Rinse the quinoa, then simmer in the stock for 15 minutes until the grains uncurl. Drain and fluff up.\n' +
      '2. Poach or griddle the chicken breast until cooked through, then slice.\n' +
      '3. Fold the cucumber, spring onion, mint and parsley through the cooled quinoa.\n' +
      '4. Dress with the lemon juice and olive oil and season to taste.\n' +
      '5. Top with the sliced chicken and scatter over the pomegranate seeds.',
    rawLines: [
      { rawName: 'Quinoa', rawMeasure: '120g' },
      { rawName: 'Chicken breast', rawMeasure: '2 (about 300g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 350ml' },
      { rawName: 'Cucumber', rawMeasure: '1/2, diced' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Pomegranate', rawMeasure: '1/2, seeds only' },
      { rawName: 'Lemon', rawMeasure: '1, juiced' },
      { rawName: 'Olive oil', rawMeasure: '2 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Chicken & turkey mains ───────────────────────────────────────────────
  {
    title: 'Lemon and herb roast chicken breast with greens',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the chicken breasts in a small roasting tin.\n' +
      '2. Rub with a teaspoon of oil, the lemon zest, thyme and seasoning, then squeeze over half the lemon.\n' +
      '3. Roast for 20–22 minutes until the juices run clear, then rest for 5 minutes.\n' +
      '4. Meanwhile steam the broccoli and green beans for 4–5 minutes until just tender.\n' +
      '5. Serve the chicken on the greens with the resting juices and the remaining lemon to squeeze over.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2 (about 300g)' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Green beans', rawMeasure: '150g' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken tikka skewers with cucumber raita',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Gluten-free', 'Egg-free'],
    instructions:
      '1. Mix the natural yoghurt with the garam masala, turmeric, garlic, ginger and a little salt.\n' +
      '2. Toss the cubed chicken through the marinade and leave for at least 20 minutes.\n' +
      '3. Thread onto skewers and grill or griddle over a high heat for 12–14 minutes, turning, until charred and cooked through.\n' +
      '4. For the raita, stir the grated cucumber and chopped mint into the remaining yoghurt.\n' +
      '5. Serve the skewers with the raita, lemon wedges and a crisp side salad.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g, cubed' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g low-fat' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Cucumber', rawMeasure: '1/2, grated' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey and courgette burgers',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Squeeze the excess moisture from the grated courgette in a clean cloth.\n' +
      '2. Mix into the turkey mince with the spring onion, garlic, egg and a good pinch of seasoning.\n' +
      '3. Shape into four patties and chill for 10 minutes to firm up.\n' +
      '4. Brush a non-stick pan with a little oil and cook the burgers for 5–6 minutes a side until golden and cooked through.\n' +
      '5. Serve in toasted wholemeal buns or lettuce wraps with sliced tomato and a smear of mustard.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Courgette', rawMeasure: '1, grated' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Tomato', rawMeasure: '2, sliced' },
      { rawName: 'Mustard', rawMeasure: '2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
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
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Dairy-free', 'Egg-free'],
    instructions:
      '1. Heat a wok until very hot, add half the sesame oil and stir-fry the sliced chicken for 4 minutes until golden. Lift out.\n' +
      '2. Add the rest of the oil and stir-fry the peppers, broccoli, mangetout and carrot for 4 minutes, keeping them crisp.\n' +
      '3. Toss in the garlic and ginger for 30 seconds, then return the chicken.\n' +
      '4. Pour in the soy sauce and a splash of water and toss for a minute until everything is glossy and hot.\n' +
      '5. Scatter with spring onion and serve straight from the wok.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g, sliced' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Broccoli', rawMeasure: '200g, small florets' },
      { rawName: 'Mangetout', rawMeasure: '120g' },
      { rawName: 'Carrot', rawMeasure: '1, matchsticked' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
    ],
  },
  {
    title: 'Piri-piri grilled chicken with slaw',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Blitz the chilli, garlic, paprika, lemon juice and a teaspoon of oil to a rough paste.\n' +
      '2. Slash the chicken thighs, rub the paste in and leave to marinate for 15 minutes.\n' +
      '3. Grill or griddle over a medium-high heat for 14–16 minutes, turning, until charred and cooked through.\n' +
      '4. For the slaw, toss the shredded cabbage, carrot and red onion with the natural yoghurt and a squeeze of lemon.\n' +
      '5. Serve the chicken with the crunchy slaw alongside.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8 skinless, boneless' },
      { rawName: 'Chilli', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Paprika', rawMeasure: '2 tsp smoked' },
      { rawName: 'Cabbage', rawMeasure: '200g, shredded' },
      { rawName: 'Carrot', rawMeasure: '1, grated' },
      { rawName: 'Red onion', rawMeasure: '1/2, sliced' },
      { rawName: 'Natural yoghurt', rawMeasure: '3 tbsp low-fat' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and chickpea curry',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Soften the onion in a teaspoon of oil for 6 minutes, then stir in the garlic, ginger, curry powder and turmeric.\n' +
      '2. Add the diced chicken and brown lightly for a few minutes.\n' +
      '3. Tip in the chopped tomatoes, chickpeas and a splash of stock, then simmer for 20 minutes until thickened.\n' +
      '4. Stir through the spinach until wilted and season to taste.\n' +
      '5. Finish with chopped coriander and serve with a small portion of basmati rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g, diced' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey chilli with kidney beans',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Brown the turkey mince in a teaspoon of oil over a high heat, breaking it up well.\n' +
      '2. Add the onion and pepper and soften for 6 minutes, then stir in the garlic, cumin, chilli powder and smoked paprika.\n' +
      '3. Pour in the chopped tomatoes and a splash of stock, then simmer for 20 minutes.\n' +
      '4. Stir in the kidney beans and cook for a further 5 minutes until rich and thick.\n' +
      '5. Season, finish with coriander and serve with rice or a baked potato.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken cacciatore',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Brown the chicken thighs in a teaspoon of oil over a medium-high heat, then lift out.\n' +
      '2. Soften the onion, pepper and mushrooms in the same pan for 8 minutes, then add the garlic.\n' +
      '3. Pour in the chopped tomatoes and stock, stir in the oregano and return the chicken.\n' +
      '4. Simmer gently for 30 minutes until the chicken is tender and the sauce has reduced.\n' +
      '5. Scatter with parsley and serve with a green vegetable.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8 skinless, boneless' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Mushroom', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemongrass turkey lettuce cups',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Dairy-free', 'Egg-free'],
    instructions:
      '1. Stir-fry the turkey mince in the sesame oil over a high heat until browned and crumbly.\n' +
      '2. Add the lemongrass, garlic, ginger and chilli and cook for a minute until fragrant.\n' +
      '3. Splash in the soy sauce and lime juice and toss to coat, then stir through the chopped spring onion.\n' +
      '4. Spoon the hot turkey into crisp lettuce leaves.\n' +
      '5. Top with grated carrot, coriander and an extra squeeze of lime.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Lemongrass', rawMeasure: '1 stalk, finely chopped' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Lettuce', rawMeasure: '1 head, leaves separated' },
      { rawName: 'Carrot', rawMeasure: '1, grated' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Sesame oil', rawMeasure: '2 tsp' },
    ],
  },

  // ── Fish & seafood mains ─────────────────────────────────────────────────
  {
    title: 'Baked cod with tomato and olives',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-calorie', 'High-protein', 'Pescatarian'],
    healthLabels: ['Pescatarian', 'Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Soften the onion in a teaspoon of oil for 5 minutes, then add the garlic.\n' +
      '2. Stir in the chopped tomatoes and olives and simmer for 8 minutes until thickened.\n' +
      '3. Spoon the sauce into a baking dish and nestle the white fish fillets on top.\n' +
      '4. Bake for 15 minutes until the fish flakes easily.\n' +
      '5. Scatter with parsley and serve with steamed greens or a small portion of new potatoes.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4 (about 600g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Olives', rawMeasure: '40g' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Salmon and asparagus traybake',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'High-protein', 'Pescatarian'],
    healthLabels: ['Pescatarian', 'Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Spread the asparagus and cherry tomatoes in a roasting tin.\n' +
      '2. Spray with a little oil, season and roast for 8 minutes.\n' +
      '3. Make space for the salmon fillets, season them and squeeze over half the lemon.\n' +
      '4. Return to the oven for 12 minutes until the salmon is just cooked and the asparagus is tender.\n' +
      '5. Serve with the remaining lemon to squeeze over and a scattering of dill or parsley.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2 (about 240g)' },
      { rawName: 'Asparagus', rawMeasure: '200g' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp, sprayed' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked haddock with poached egg and spinach',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'High-protein', 'Pescatarian'],
    healthLabels: ['Pescatarian', 'Gluten-free'],
    instructions:
      '1. Lay the smoked haddock in a wide pan, pour over the milk and a splash of water, and poach gently for 8 minutes.\n' +
      '2. Lift the fish out and keep warm. Wilt the spinach in the same pan, then drain well.\n' +
      '3. Poach the eggs in a separate pan of barely simmering water for 3 minutes until the whites set.\n' +
      '4. Pile the spinach onto plates, sit the haddock on top and crown each with a poached egg.\n' +
      '5. Season with black pepper and serve at once.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '2 fillets (about 280g)' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Milk', rawMeasure: '150ml semi-skimmed' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and courgette stir-fry',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Low-calorie', 'High-protein', 'Pescatarian'],
    healthLabels: ['Pescatarian', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Heat a wok until hot, add the sesame oil and stir-fry the garlic and ginger for 30 seconds.\n' +
      '2. Add the courgette ribbons, pepper and mangetout and stir-fry for 3 minutes until just tender.\n' +
      '3. Tip in the prawns and toss for 2 minutes until they turn pink and hot through.\n' +
      '4. Splash in the soy sauce and a squeeze of lime and toss to coat.\n' +
      '5. Finish with spring onion and serve straight away.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '250g raw' },
      { rawName: 'Courgette', rawMeasure: '1, ribboned' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Mangetout', rawMeasure: '100g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '15g' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1/2' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Sesame oil', rawMeasure: '2 tsp' },
    ],
  },
  {
    title: 'Tuna steak with salsa and green beans',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-calorie', 'High-protein', 'Pescatarian'],
    healthLabels: ['Pescatarian', 'Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Make the salsa by mixing the diced tomato, red onion, chilli, coriander and lime juice. Season and set aside.\n' +
      '2. Rub the tuna steaks with a little oil and season well.\n' +
      '3. Griddle over a very high heat for 1–2 minutes a side so the centre stays just pink.\n' +
      '4. Meanwhile steam the green beans for 4 minutes until tender-crisp.\n' +
      '5. Serve the tuna topped with the fresh salsa and the green beans alongside.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '2 fresh steaks (about 280g)' },
      { rawName: 'Tomato', rawMeasure: '2, diced' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai green fish curry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Low-calorie', 'High-protein', 'Pescatarian'],
    healthLabels: ['Pescatarian', 'Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Fry the garlic, ginger, lemongrass and chilli in the sesame oil for a minute until fragrant.\n' +
      '2. Pour in the light coconut milk and a little stock, then bring to a gentle simmer.\n' +
      '3. Add the green beans and pepper and cook for 4 minutes.\n' +
      '4. Slip in the chunks of white fish and poach gently for 6 minutes until just cooked.\n' +
      '5. Finish with lime juice, soy sauce and torn coriander, and serve with a small portion of rice.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '600g, chunked' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml) light' },
      { rawName: 'Green beans', rawMeasure: '150g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Lemongrass', rawMeasure: '1 stalk' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 100ml' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Spiced fish tacos with lime slaw',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Low-calorie', 'High-protein', 'Pescatarian'],
    healthLabels: ['Pescatarian', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Rub the white fish fillets with the smoked paprika, cumin and a little oil, then season.\n' +
      '2. Pan-fry over a medium-high heat for 3–4 minutes a side until golden and just cooked, then flake.\n' +
      '3. Toss the shredded cabbage, carrot and red onion with the lime juice for a quick slaw.\n' +
      '4. Warm the corn tortillas in a dry pan.\n' +
      '5. Pile the slaw and flaked fish into the tortillas and finish with coriander and an extra squeeze of lime.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '500g' },
      { rawName: 'Corn tortillas', rawMeasure: '8 small' },
      { rawName: 'Cabbage', rawMeasure: '200g, shredded' },
      { rawName: 'Carrot', rawMeasure: '1, grated' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Garlic and chilli prawns with courgetti',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-calorie', 'High-protein', 'Pescatarian'],
    healthLabels: ['Pescatarian', 'Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Spiralise or julienne the courgettes into noodles and set aside.\n' +
      '2. Warm the olive oil in a pan with the garlic and chilli flakes until just fragrant.\n' +
      '3. Add the prawns and cook for 3 minutes until pink, then stir in the cherry tomatoes for a minute.\n' +
      '4. Toss the courgetti through the pan for 2 minutes until just softened but still with bite.\n' +
      '5. Squeeze over the lemon, season and scatter with parsley to serve.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '250g raw' },
      { rawName: 'Courgette', rawMeasure: '3' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Lean beef & pork mains ───────────────────────────────────────────────
  {
    title: 'Lean beef and broccoli stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Dairy-free', 'Egg-free'],
    instructions:
      '1. Heat a wok until very hot, add half the sesame oil and sear the sliced beef in batches for 2 minutes. Lift out.\n' +
      '2. Add the rest of the oil and stir-fry the broccoli and pepper for 4 minutes, splashing in a little water to steam.\n' +
      '3. Add the garlic and ginger for 30 seconds, then return the beef.\n' +
      '4. Pour in the soy sauce and toss for a minute until everything is coated and glossy.\n' +
      '5. Scatter with spring onion and serve with a small portion of rice.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '400g lean, sliced' },
      { rawName: 'Broccoli', rawMeasure: '300g florets' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
    ],
  },
  {
    title: 'Lean cottage pie with celeriac mash',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Gluten-free', 'Egg-free'],
    instructions:
      '1. Brown the lean minced beef in a dry non-stick pan over a high heat, then drain off any fat.\n' +
      '2. Add the onion, carrot and celery and soften for 8 minutes, then stir in the tomato purée.\n' +
      '3. Pour in the stock and Worcestershire sauce, season and simmer for 25 minutes until thick. Stir in the peas.\n' +
      '4. Meanwhile boil the celeriac and potato until tender, drain and mash with a splash of milk and seasoning.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Spoon the mince into a dish, top with the mash and bake for 25 minutes until golden.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g 5% fat' },
      { rawName: 'Celeriac', rawMeasure: '500g' },
      { rawName: 'Potato', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Milk', rawMeasure: '40ml semi-skimmed' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef and vegetable kebabs',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Toss the cubed beef with the garlic, paprika, cumin, a teaspoon of oil and seasoning. Leave for 15 minutes.\n' +
      '2. Thread the beef onto skewers, alternating with chunks of pepper, red onion and courgette.\n' +
      '3. Grill or griddle over a high heat for 10–12 minutes, turning, until the beef is browned and the vegetables are charred.\n' +
      '4. Squeeze over the lemon and scatter with parsley.\n' +
      '5. Serve with a crisp salad and a spoonful of low-fat yoghurt.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '500g lean, cubed' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '2' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork and pepper stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Dairy-free', 'Egg-free'],
    instructions:
      '1. Heat a wok until hot, add half the sesame oil and stir-fry the strips of lean pork for 4 minutes. Lift out.\n' +
      '2. Add the rest of the oil and stir-fry the peppers, mangetout and bean sprouts for 3 minutes.\n' +
      '3. Add the garlic and ginger for 30 seconds, then return the pork.\n' +
      '4. Splash in the soy sauce and a little rice wine and toss until hot and glossy.\n' +
      '5. Scatter with spring onion and serve straight away.',
    rawLines: [
      { rawName: 'Pork chop', rawMeasure: '400g lean, cut into strips' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Mangetout', rawMeasure: '100g' },
      { rawName: 'Bean sprouts', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Rice wine', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
    ],
  },
  {
    title: 'Gammon steak with grilled tomatoes and greens',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Snip the fat edge of the gammon steaks to stop them curling, then brush lightly with oil.\n' +
      '2. Grill the gammon for 4–5 minutes a side until cooked through and lightly charred.\n' +
      '3. Halve the tomatoes, season and grill alongside for the last 5 minutes.\n' +
      '4. Steam the broccoli and green beans until just tender.\n' +
      '5. Serve the gammon with the grilled tomatoes and greens, with a wedge of lemon.',
    rawLines: [
      { rawName: 'Ham', rawMeasure: '2 gammon steaks (about 300g)' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Green beans', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Vegetarian & vegan mains ─────────────────────────────────────────────
  {
    title: 'Vegetable and chickpea tagine',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Gluten-free', 'Low-fat'],
    instructions:
      '1. Soften the onion in a teaspoon of oil for 6 minutes, then stir in the garlic, cumin, cinnamon and turmeric.\n' +
      '2. Add the butternut squash, carrot and pepper and stir to coat in the spices.\n' +
      '3. Tip in the chopped tomatoes, chickpeas and stock, then simmer for 25 minutes until the vegetables are tender.\n' +
      '4. Season well and stir through the spinach until wilted.\n' +
      '5. Scatter with coriander and serve with couscous or on its own.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '400g, cubed' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 250ml' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted vegetable and bean chilli',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Gluten-free', 'Low-fat'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Roast the courgette, pepper and red onion with a teaspoon of oil for 25 minutes.\n' +
      '2. Meanwhile soften the garlic with the cumin, chilli powder and smoked paprika in a pan for a minute.\n' +
      '3. Add the chopped tomatoes, kidney beans, black beans and a splash of stock and simmer for 15 minutes.\n' +
      '4. Stir in the roasted vegetables and warm through, then season and add a squeeze of lime.\n' +
      '5. Finish with coriander and serve with rice or a baked potato.',
    rawLines: [
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Black beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced cauliflower and chickpea bowl',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Gluten-free', 'Low-fat'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the cauliflower florets and chickpeas with the curry powder, turmeric and a teaspoon of oil.\n' +
      '2. Spread on a tray and roast for 25 minutes until the cauliflower is tender and golden.\n' +
      '3. Meanwhile cook the basmati rice and keep warm.\n' +
      '4. Pile the rice into bowls, top with the spiced cauliflower and chickpeas and add a handful of spinach.\n' +
      '5. Spoon over the natural yoghurt, scatter with coriander and finish with a squeeze of lemon.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 head, florets' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Basmati rice', rawMeasure: '200g' },
      { rawName: 'Spinach', rawMeasure: '80g' },
      { rawName: 'Curry powder', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp dairy-free' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed peppers with quinoa and feta',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-calorie', 'Vegetarian'],
    healthLabels: ['Vegetarian', 'Gluten-free', 'Egg-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers and remove the seeds, then sit them in a baking dish.\n' +
      '2. Rinse the quinoa and simmer in the stock for 15 minutes until tender, then drain.\n' +
      '3. Fold the cherry tomatoes, spring onion, parsley and half the feta through the quinoa and season.\n' +
      '4. Spoon the filling into the pepper halves and crumble over the remaining feta.\n' +
      '5. Bake for 25 minutes until the peppers are soft and the tops are golden.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4 large' },
      { rawName: 'Quinoa', rawMeasure: '150g' },
      { rawName: 'Cherry tomato', rawMeasure: '150g, halved' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tofu and vegetable noodle stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Press the tofu to remove excess water, cut into cubes, then pan-fry in half the sesame oil until golden. Lift out.\n' +
      '2. Cook the brown rice noodles according to the packet, then drain.\n' +
      '3. Stir-fry the peppers, broccoli and pak choi in the rest of the oil for 4 minutes, then add the garlic and ginger.\n' +
      '4. Return the tofu, add the noodles and pour over the soy sauce, tossing until hot.\n' +
      '5. Finish with spring onion and a squeeze of lime.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '300g firm' },
      { rawName: 'Brown rice noodles', rawMeasure: '200g' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Broccoli', rawMeasure: '150g' },
      { rawName: 'Pak choi', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Sesame oil', rawMeasure: '2 tsp' },
    ],
  },
  {
    title: 'Mushroom and spinach frittata',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Low-calorie', 'Vegetarian'],
    healthLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the grill. Soften the onion and mushrooms in a non-stick ovenproof pan with a teaspoon of oil for 8 minutes.\n' +
      '2. Add the spinach and let it wilt, then spread the vegetables evenly across the pan.\n' +
      '3. Beat the eggs with seasoning and pour over, tilting to fill the gaps.\n' +
      '4. Cook gently for 5 minutes until the base is set, then scatter over the Parmesan.\n' +
      '5. Slide under the grill for 3–4 minutes until puffed and golden, then cut into wedges.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Mushroom', rawMeasure: '250g' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Parmesan', rawMeasure: '30g, grated' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Courgette and pea risotto-style orzo',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-calorie', 'Vegetarian'],
    healthLabels: ['Vegetarian', 'Egg-free'],
    instructions:
      '1. Soften the onion in a teaspoon of oil for 6 minutes, then add the garlic.\n' +
      '2. Stir in the orzo pasta to coat, then add the hot stock a ladleful at a time, stirring until absorbed.\n' +
      '3. After about 8 minutes, fold in the grated courgette and the peas.\n' +
      '4. Continue cooking for 4–5 minutes until the orzo is tender and creamy.\n' +
      '5. Stir through the Parmesan and lemon zest, season and serve at once.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '250g orzo' },
      { rawName: 'Courgette', rawMeasure: '2, grated' },
      { rawName: 'Peas', rawMeasure: '120g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parmesan', rawMeasure: '30g, grated' },
      { rawName: 'Lemon', rawMeasure: '1, zested' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 800ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lentil and vegetable shepherdless pie',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Low-fat'],
    instructions:
      '1. Soften the onion, carrot and celery in a teaspoon of oil for 8 minutes, then add the garlic and mushrooms.\n' +
      '2. Stir in the tomato purée, then add the lentils, chopped tomatoes and stock and simmer for 25 minutes.\n' +
      '3. Season well and stir in the peas.\n' +
      '4. Meanwhile boil the potato and sweet potato until tender, drain and mash with a splash of milk.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Top the lentils with the mash and bake for 25 minutes until golden.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Sweet potato', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Soya milk', rawMeasure: '40ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi and roasted vegetable traybake',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Low-calorie', 'Vegetarian'],
    healthLabels: ['Vegetarian', 'Gluten-free', 'Egg-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Spread the courgette, pepper, red onion and cherry tomatoes in a roasting tin.\n' +
      '2. Spray with a little oil, season and roast for 20 minutes.\n' +
      '3. Cut the halloumi into slices and tuck among the vegetables.\n' +
      '4. Return to the oven for 12 minutes until the halloumi is golden and the vegetables are soft.\n' +
      '5. Squeeze over the lemon and scatter with torn basil to serve.',
    rawLines: [
      { rawName: 'Mozzarella', rawMeasure: '225g halloumi' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp, sprayed' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable and bean burrito bowl',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Mexican',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Gluten-free'],
    instructions:
      '1. Cook the brown rice and keep warm.\n' +
      '2. Soften the pepper and red onion in a teaspoon of oil for 6 minutes, then add the garlic, cumin and smoked paprika.\n' +
      '3. Stir in the black beans and sweetcorn and warm through for 5 minutes, then season and add lime juice.\n' +
      '4. Divide the rice between bowls and top with the spiced beans.\n' +
      '5. Add sliced avocado, cherry tomatoes and a scattering of coriander.',
    rawLines: [
      { rawName: 'Brown rice', rawMeasure: '200g' },
      { rawName: 'Black beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Sweetcorn', rawMeasure: '150g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine and tomato bake',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-calorie', 'Vegetarian'],
    healthLabels: ['Vegetarian', 'Gluten-free', 'Egg-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Slice the aubergines, spray with a little oil and roast for 20 minutes.\n' +
      '2. Meanwhile soften the onion and garlic in a teaspoon of oil, then add the passata and oregano and simmer for 10 minutes.\n' +
      '3. Layer the roasted aubergine and tomato sauce in a baking dish.\n' +
      '4. Scatter over the mozzarella and a little Parmesan.\n' +
      '5. Bake for 20 minutes until bubbling and golden, then rest before serving with a green salad.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Mozzarella', rawMeasure: '125g, torn' },
      { rawName: 'Parmesan', rawMeasure: '20g, grated' },
      { rawName: 'Olive oil', rawMeasure: '2 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced red lentil dahl',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Gluten-free', 'Low-fat'],
    instructions:
      '1. Soften the onion in a teaspoon of oil for 6 minutes, then stir in the garlic, ginger, cumin, turmeric and garam masala.\n' +
      '2. Add the red lentils and stir to coat, then pour in the stock.\n' +
      '3. Simmer for 20 minutes, stirring now and then, until the lentils are soft and the dahl is thick.\n' +
      '4. Stir through the spinach until wilted and add a squeeze of lemon.\n' +
      '5. Season and finish with coriander, served with a small portion of rice.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g red split' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 900ml' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cauliflower rice egg-fried style',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Low-calorie', 'Vegetarian'],
    healthLabels: ['Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Blitz the cauliflower in a food processor to a rice-like texture.\n' +
      '2. Heat a wok with a teaspoon of sesame oil and stir-fry the carrot, peas and spring onion for 3 minutes.\n' +
      '3. Add the garlic and the cauliflower rice and stir-fry for 5 minutes until tender.\n' +
      '4. Push to one side, pour the beaten eggs into the gap and scramble, then toss through.\n' +
      '5. Splash in the soy sauce, toss to coat and serve hot.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large head' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Carrot', rawMeasure: '1, diced' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
    ],
  },

  // ── Breakfasts ───────────────────────────────────────────────────────────
  {
    title: 'Overnight oats with berries',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'Vegetarian'],
    healthLabels: ['Vegetarian', 'Egg-free'],
    instructions:
      '1. Tip the oats into a bowl or jar and stir in the natural yoghurt and milk.\n' +
      '2. Add a drizzle of honey and a pinch of cinnamon and mix well.\n' +
      '3. Cover and chill overnight so the oats soften and thicken.\n' +
      '4. In the morning, loosen with a splash more milk if needed.\n' +
      '5. Top with the mixed berries and serve cold.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '80g' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g low-fat' },
      { rawName: 'Milk', rawMeasure: '150ml semi-skimmed' },
      { rawName: 'Frozen mixed berries', rawMeasure: '150g' },
      { rawName: 'Honey', rawMeasure: '2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Spinach and tomato scrambled eggs',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'Vegetarian', 'High-protein'],
    healthLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Warm a non-stick pan with a teaspoon of oil and soften the cherry tomatoes for 2 minutes.\n' +
      '2. Add the spinach and let it wilt, then push to one side.\n' +
      '3. Beat the eggs with a splash of milk and seasoning and pour into the pan.\n' +
      '4. Stir gently over a low heat until just set and creamy.\n' +
      '5. Serve on a slice of wholemeal toast with a grind of black pepper.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Spinach', rawMeasure: '80g' },
      { rawName: 'Cherry tomato', rawMeasure: '120g' },
      { rawName: 'Milk', rawMeasure: '2 tbsp' },
      { rawName: 'Bread', rawMeasure: '2 slices wholemeal' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Banana and oat pancakes',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'Vegetarian'],
    healthLabels: ['Vegetarian'],
    instructions:
      '1. Blitz the banana, oats, eggs and a pinch of cinnamon to a smooth batter.\n' +
      '2. Heat a non-stick pan and brush with a little oil.\n' +
      '3. Drop in small spoonfuls of batter and cook for 2 minutes until bubbles appear.\n' +
      '4. Flip and cook for another minute until golden and set.\n' +
      '5. Stack and serve with the berries and a small drizzle of honey.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '2 ripe' },
      { rawName: 'Oats', rawMeasure: '80g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Frozen mixed berries', rawMeasure: '120g' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Mushroom and poached egg on toast',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'Vegetarian'],
    healthLabels: ['Vegetarian'],
    instructions:
      '1. Cook the sliced mushrooms in a non-stick pan with a teaspoon of oil and the garlic until golden.\n' +
      '2. Poach the eggs in barely simmering water for 3 minutes until the whites set.\n' +
      '3. Toast the wholemeal bread.\n' +
      '4. Pile the garlicky mushrooms onto the toast and top each with a poached egg.\n' +
      '5. Season with black pepper and scatter with parsley.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '250g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Bread', rawMeasure: '2 slices wholemeal' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek yoghurt breakfast bowl',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'Vegetarian', 'High-protein'],
    healthLabels: ['Vegetarian', 'Gluten-free', 'Egg-free'],
    instructions:
      '1. Spoon the Greek yoghurt into two bowls.\n' +
      '2. Top with the sliced banana and the mixed berries.\n' +
      '3. Scatter over a small handful of oats for crunch.\n' +
      '4. Drizzle lightly with honey.\n' +
      '5. Serve straight away while the fruit is fresh.',
    rawLines: [
      { rawName: 'Greek yoghurt', rawMeasure: '300g low-fat' },
      { rawName: 'Banana', rawMeasure: '1' },
      { rawName: 'Frozen mixed berries', rawMeasure: '150g' },
      { rawName: 'Oats', rawMeasure: '40g' },
      { rawName: 'Honey', rawMeasure: '2 tsp' },
    ],
  },

  // ── Light lunches & wraps ────────────────────────────────────────────────
  {
    title: 'Chicken and salad wholemeal wrap',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Mix the cooked, shredded chicken with the natural yoghurt, a little mustard and seasoning.\n' +
      '2. Lay the wholemeal wraps flat and spread the chicken down the middle.\n' +
      '3. Top with shredded lettuce, sliced cucumber and tomato.\n' +
      '4. Fold in the sides and roll up tightly.\n' +
      '5. Cut in half on the diagonal and serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '200g cooked' },
      { rawName: 'Tortilla wrap', rawMeasure: '2 wholemeal' },
      { rawName: 'Natural yoghurt', rawMeasure: '2 tbsp low-fat' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Cucumber', rawMeasure: '1/4' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Hummus and roasted vegetable pitta',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Middle Eastern',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Roast the courgette, pepper and red onion with a teaspoon of oil for 20 minutes.\n' +
      '2. Warm the wholemeal pittas and split them open.\n' +
      '3. Spread the inside generously with hummus.\n' +
      '4. Stuff with the roasted vegetables and a handful of rocket.\n' +
      '5. Finish with a squeeze of lemon and a grind of pepper.',
    rawLines: [
      { rawName: 'Pitta bread', rawMeasure: '2 wholemeal' },
      { rawName: 'Chickpeas', rawMeasure: '100g hummus' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Rocket', rawMeasure: '40g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jacket potato with tuna and sweetcorn',
    servingsBase: 2,
    totalTimeMinutes: 60,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'High-protein', 'Pescatarian'],
    healthLabels: ['Pescatarian', 'Gluten-free', 'Egg-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes, sit on a tray and bake for 50–60 minutes until tender.\n' +
      '2. Mix the drained tuna with the sweetcorn, natural yoghurt and a little seasoning.\n' +
      '3. Split the baked potatoes open and fluff up the insides.\n' +
      '4. Spoon over the tuna and sweetcorn mixture.\n' +
      '5. Serve with a crisp side salad.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '2 baking potatoes' },
      { rawName: 'Tuna', rawMeasure: '1 tin (145g), in spring water' },
      { rawName: 'Sweetcorn', rawMeasure: '120g' },
      { rawName: 'Natural yoghurt', rawMeasure: '2 tbsp low-fat' },
      { rawName: 'Baby leaf salad', rawMeasure: '60g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Egg and cress sandwich on wholemeal',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'Vegetarian', 'High-protein'],
    healthLabels: ['Vegetarian'],
    instructions:
      '1. Hard-boil the eggs for 8 minutes, then cool under cold water and peel.\n' +
      '2. Mash the eggs roughly with the natural yoghurt and a little mustard.\n' +
      '3. Season well and stir through the snipped cress.\n' +
      '4. Spread over two slices of wholemeal bread and top with the others.\n' +
      '5. Cut into halves and serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Bread', rawMeasure: '4 slices wholemeal' },
      { rawName: 'Natural yoghurt', rawMeasure: '2 tbsp low-fat' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Spring onion', rawMeasure: '1, snipped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced chickpea and spinach wrap',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Indian',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Soften the onion in a teaspoon of oil, then add the garlic, cumin and curry powder.\n' +
      '2. Add the chickpeas and a splash of water and cook for 5 minutes, lightly crushing some of them.\n' +
      '3. Stir through the spinach until wilted and season.\n' +
      '4. Warm the wholemeal wraps.\n' +
      '5. Spoon the chickpeas down the middle, add a squeeze of lemon, then roll up and serve.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Tortilla wrap', rawMeasure: '2 wholemeal' },
      { rawName: 'Spinach', rawMeasure: '80g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Curry powder', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Light dinners & bowls ────────────────────────────────────────────────
  {
    title: 'Miso salmon with steamed greens',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Low-calorie', 'High-protein', 'Pescatarian'],
    healthLabels: ['Pescatarian', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Mix the soy sauce, honey and grated ginger into a glaze.\n' +
      '2. Sit the salmon fillets on a lined tray and brush with the glaze.\n' +
      '3. Bake for 12–14 minutes, brushing with more glaze halfway, until just cooked.\n' +
      '4. Steam the pak choi and broccoli for 4 minutes until tender-crisp.\n' +
      '5. Serve the salmon on the greens, scattered with sesame seeds and spring onion.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2 (about 240g)' },
      { rawName: 'Pak choi', rawMeasure: '2' },
      { rawName: 'Broccoli', rawMeasure: '150g' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
      { rawName: 'Ginger', rawMeasure: '15g' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
    ],
  },
  {
    title: 'Turkey meatballs in tomato sauce',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Mix the turkey mince with the garlic, oregano, egg and a little seasoning, then roll into small meatballs.\n' +
      '2. Brown the meatballs in a non-stick pan with a teaspoon of oil, then lift out.\n' +
      '3. Soften the onion in the same pan, add the passata and a splash of stock, and simmer for 5 minutes.\n' +
      '4. Return the meatballs and simmer gently for 20 minutes until cooked through and the sauce has thickened.\n' +
      '5. Scatter with basil and serve with courgetti or a small portion of pasta.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 100ml' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced chicken and cauliflower rice bowl',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Toss the diced chicken with the cumin, smoked paprika, garlic and a little oil, then leave for 10 minutes.\n' +
      '2. Pan-fry the chicken over a medium-high heat for 8 minutes until golden and cooked through.\n' +
      '3. Blitz the cauliflower to rice and stir-fry in the same pan for 5 minutes until tender.\n' +
      '4. Divide the cauliflower rice between bowls and top with the spiced chicken.\n' +
      '5. Add cherry tomatoes, cucumber and a squeeze of lemon, then scatter with parsley.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '300g, diced' },
      { rawName: 'Cauliflower', rawMeasure: '1/2 head' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable and tofu laksa-style broth',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Fry the garlic, ginger, lemongrass and chilli in the sesame oil for a minute until fragrant.\n' +
      '2. Pour in the light coconut milk and stock and bring to a gentle simmer.\n' +
      '3. Add the cubed tofu, pepper and mangetout and cook for 5 minutes.\n' +
      '4. Add the rice vermicelli and pak choi and simmer for 3 minutes until soft.\n' +
      '5. Finish with lime juice and soy sauce, and scatter with coriander and spring onion.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '300g firm' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml) light' },
      { rawName: 'Rice vermicelli', rawMeasure: '150g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Mangetout', rawMeasure: '100g' },
      { rawName: 'Pak choi', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Lemongrass', rawMeasure: '1 stalk' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 700ml' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Baked white fish with crushed peas',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'High-protein', 'Pescatarian'],
    healthLabels: ['Pescatarian', 'Gluten-free', 'Egg-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the white fish fillets on a lined tray, season and squeeze over half the lemon.\n' +
      '2. Bake for 12–15 minutes until the fish flakes easily.\n' +
      '3. Cook the peas in boiling water for 3 minutes, then drain.\n' +
      '4. Crush the peas roughly with the mint, a little butter and seasoning.\n' +
      '5. Serve the fish on the crushed peas with the remaining lemon to squeeze over.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2 (about 300g)' },
      { rawName: 'Peas', rawMeasure: '300g' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Butter', rawMeasure: '10g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Quorn-style vegetable bolognese',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Low-fat'],
    instructions:
      '1. Soften the onion, carrot and celery in a teaspoon of oil for 8 minutes, then add the garlic and mushrooms.\n' +
      '2. Stir in the tomato purée, then add the green lentils, chopped tomatoes and a splash of stock.\n' +
      '3. Simmer for 20 minutes until rich and thick, stirring in the oregano.\n' +
      '4. Season well to taste.\n' +
      '5. Serve over courgetti or a small portion of spaghetti with a scattering of basil.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '1 tin (400g) green, drained' },
      { rawName: 'Mushroom', rawMeasure: '200g, finely chopped' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Harissa roasted chicken thighs with chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Gluten-free', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Rub the chicken thighs with the harissa, garlic and a teaspoon of oil.\n' +
      '2. Tip the chickpeas, red onion and cherry tomatoes into a roasting tin and season.\n' +
      '3. Sit the chicken on top and roast for 30 minutes until the chicken is golden and cooked through.\n' +
      '4. Squeeze over the lemon and scatter with coriander.\n' +
      '5. Serve straight from the tin with a green salad.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8 skinless, boneless' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Harissa spice', rawMeasure: '2 tsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Egg and vegetable shakshuka',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Low-calorie', 'Vegetarian', 'High-protein'],
    healthLabels: ['Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the onion and peppers in a teaspoon of oil for 8 minutes, then add the garlic, cumin and smoked paprika.\n' +
      '2. Pour in the chopped tomatoes and a splash of water and simmer for 10 minutes until thick.\n' +
      '3. Make four wells in the sauce and crack an egg into each.\n' +
      '4. Cover and cook gently for 6–8 minutes until the whites set but the yolks stay soft.\n' +
      '5. Scatter with coriander and serve with a small piece of wholemeal bread to mop up.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (800g)' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Bread', rawMeasure: '4 small slices wholemeal' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sweet potato and black bean traybake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the sweet potato chunks and pepper with the cumin, smoked paprika and a teaspoon of oil.\n' +
      '2. Spread on a tray and roast for 25 minutes.\n' +
      '3. Stir in the black beans and cherry tomatoes and roast for a further 10 minutes.\n' +
      '4. Squeeze over the lime and season to taste.\n' +
      '5. Scatter with coriander and serve with a spoonful of dairy-free yoghurt.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '600g, cubed' },
      { rawName: 'Black beans', rawMeasure: '1 tin (400g), drained' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp dairy-free' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Steamed sea bass with ginger and spring onion',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Low-calorie', 'High-protein', 'Pescatarian'],
    healthLabels: ['Pescatarian', 'Dairy-free', 'Egg-free'],
    instructions:
      '1. Sit the white fish fillets on a heatproof plate and scatter over half the ginger and spring onion.\n' +
      '2. Steam over simmering water for 8–10 minutes until the fish flakes easily.\n' +
      '3. Heat the sesame oil in a small pan until shimmering.\n' +
      '4. Top the fish with the remaining ginger and spring onion, then pour over the hot oil and the soy sauce.\n' +
      '5. Serve with steamed pak choi and a small portion of rice.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2 sea bass (about 280g)' },
      { rawName: 'Ginger', rawMeasure: '25g, shredded' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Pak choi', rawMeasure: '2' },
      { rawName: 'Sesame oil', rawMeasure: '2 tsp' },
    ],
  },
  {
    title: 'Spiced bulgur and roasted vegetable pilaf',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Low-fat'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Roast the courgette, pepper and red onion with a teaspoon of oil for 25 minutes.\n' +
      '2. Meanwhile rinse the bulgur wheat and simmer in the stock with the cumin for 12 minutes until tender. Drain off any excess.\n' +
      '3. Fold the roasted vegetables through the bulgur.\n' +
      '4. Stir in the chopped parsley and mint and a squeeze of lemon.\n' +
      '5. Season and serve warm with a spoonful of low-fat yoghurt if you like.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '200g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and vegetable broth with pearl barley',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'High-protein'],
    healthLabels: ['Dairy-free', 'Egg-free'],
    instructions:
      '1. Soften the onion, carrot, celery and leek in a teaspoon of oil for 8 minutes.\n' +
      '2. Add the pearl barley and stir to coat, then pour in the stock.\n' +
      '3. Add the diced chicken and bring to a gentle simmer, then cook for 30 minutes until the barley is tender.\n' +
      '4. Season well and stir through the chopped parsley.\n' +
      '5. Ladle into deep bowls and serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '300g, diced' },
      { rawName: 'Oats', rawMeasure: '120g pearl barley' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Leek', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1.2 litres' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Light puddings (low-cal sweet finishes) ──────────────────────────────
  {
    title: 'Berry and yoghurt frozen pots',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'Vegetarian'],
    healthLabels: ['Vegetarian', 'Gluten-free', 'Egg-free'],
    instructions:
      '1. Blitz the frozen mixed berries with the Greek yoghurt and honey until thick and smooth.\n' +
      '2. Taste and add a little more honey if needed.\n' +
      '3. Spoon into small pots or glasses.\n' +
      '4. Freeze for 30 minutes for a soft-set finish, or longer for a firmer scoop.\n' +
      '5. Top with a few fresh berries and serve.',
    rawLines: [
      { rawName: 'Frozen mixed berries', rawMeasure: '300g' },
      { rawName: 'Greek yoghurt', rawMeasure: '300g low-fat' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Raspberries', rawMeasure: '60g fresh' },
    ],
  },
  {
    title: 'Grilled peaches with cinnamon yoghurt',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'Vegetarian'],
    healthLabels: ['Vegetarian', 'Gluten-free', 'Egg-free'],
    instructions:
      '1. Heat the grill or a griddle pan. Halve and stone the peaches.\n' +
      '2. Brush the cut sides lightly with honey and grill for 4–5 minutes until caramelised.\n' +
      '3. Stir a pinch of cinnamon through the Greek yoghurt.\n' +
      '4. Spoon the cinnamon yoghurt into bowls and sit the warm peaches on top.\n' +
      '5. Scatter with a few flaked almonds and a final drizzle of honey.',
    rawLines: [
      { rawName: 'Peach', rawMeasure: '4 ripe' },
      { rawName: 'Greek yoghurt', rawMeasure: '250g low-fat' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Almonds', rawMeasure: '20g flaked' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Baked apples with sultanas',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'Vegan'],
    healthLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Egg-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Core the apples and score a line around the middle of each.\n' +
      '2. Mix the sultanas with a pinch of cinnamon and a teaspoon of honey.\n' +
      '3. Pack the mixture into the cored apples and sit them in a baking dish.\n' +
      '4. Pour a little water into the dish and bake for 35 minutes until soft and fluffy.\n' +
      '5. Serve warm with a spoonful of dairy-free yoghurt.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '4 eating apples' },
      { rawName: 'Sultanas', rawMeasure: '60g' },
      { rawName: 'Honey', rawMeasure: '4 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp dairy-free' },
    ],
  },
  {
    title: 'Eton mess with meringue and berries',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Low-calorie', 'Vegetarian'],
    healthLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Whip the Greek yoghurt lightly to loosen it and fold in a little vanilla.\n' +
      '2. Roughly crush the meringue nests into bite-sized pieces.\n' +
      '3. Halve the strawberries and lightly crush a few to release their juices.\n' +
      '4. Fold the meringue and most of the berries through the yoghurt for a rippled mess.\n' +
      '5. Spoon into glasses and top with the reserved berries.',
    rawLines: [
      { rawName: 'Greek yoghurt', rawMeasure: '300g low-fat' },
      { rawName: 'Strawberries', rawMeasure: '250g' },
      { rawName: 'Egg', rawMeasure: '2 meringue nests' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
    ],
  },
]
