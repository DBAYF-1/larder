// Curated SOY-FREE recipes for Larder.
//
// Each record is culinary content ONLY — the source/sourceId/imageUrl
// boilerplate is added by sources/curated.js (mapCurated). These recipes seed
// the per-diet "Soy-free" floor that the Audit phase tops up.
//
// HARD RULE — every recipe here STRICTLY excludes soy in all forms:
//   no soy, soya, tofu, tempeh, edamame, soy sauce, miso.
// To stay genuinely soy-free we also avoid the usual hidden-soy condiments
// (Worcestershire sauce, hoisin/oyster/teriyaki/barbecue sauces, shop stock
// cubes/bouillon and margarine-style spreads), building flavour from fresh
// aromatics, herbs, citrus, dairy butter and home-made stock instead.
//
// dietLabels are tagged HONESTLY: every recipe carries 'Soy-free', plus any
// other diet it genuinely satisfies (a soy-free dish is often also gluten-free,
// dairy-free, vegan, etc.). The pipeline derives healthLabels/allergens from the
// resolved ingredient lines; these labels are the author's honest claims.
//
// Shape per record (the culinary-content shape from mains.js):
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }
//
// Method prose is original British English. rawNames use the canonical
// vocabulary in data/ingredients.js so they resolve cleanly.

export default [
  // ── Soups & light lunches ──────────────────────────────────────────────────
  {
    title: 'Roast tomato and basil soup',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the tomatoes and tumble them with the red onion wedges and garlic in a roasting tin with the olive oil; season well.\n' +
      '2. Roast for 30–35 minutes until soft, slumped and lightly charred at the edges.\n' +
      '3. Tip everything into a pan, squeezing the garlic from its skins. Pour in the stock and add most of the basil.\n' +
      '4. Simmer for 10 minutes, then blend until smooth. Loosen with a splash more stock if needed and check the seasoning.\n' +
      '5. Stir through the double cream, scatter with the remaining basil and serve with crusty bread.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '1kg' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Water', rawMeasure: '600ml' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Double cream', rawMeasure: '3 tbsp' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
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
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Melt the butter in a large pan and soften the sliced leeks and onion gently for 8–10 minutes without colouring.\n' +
      '2. Add the diced potatoes and stir to coat in the butter.\n' +
      '3. Pour in the water, season, bring to a simmer and cook for 18–20 minutes until the potatoes are tender.\n' +
      '4. Blend until smooth, then stir in the milk and warm through without boiling.\n' +
      '5. Check the seasoning and serve scattered with chives.',
    rawLines: [
      { rawName: 'Leek', rawMeasure: '3' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Water', rawMeasure: '800ml' },
      { rawName: 'Milk', rawMeasure: '150ml' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, snipped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced carrot and lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Low-calorie'],
    instructions:
      '1. Warm the olive oil in a large pan and toast the cumin and chilli flakes for 30 seconds until fragrant.\n' +
      '2. Add the grated carrot and red lentils, stir to coat, then pour in the water.\n' +
      '3. Bring to the boil and simmer for 15 minutes until the lentils are soft and collapsing.\n' +
      '4. Blend until smooth, season generously and loosen with a little hot water if needed.\n' +
      '5. Serve with a swirl of natural yoghurt and a final pinch of cumin.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '600g' },
      { rawName: 'Lentils', rawMeasure: '140g red split' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Water', rawMeasure: '1 litre' },
      { rawName: 'Natural yoghurt', rawMeasure: 'to serve' },
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
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Soften the onion, carrot and celery in the olive oil for 10 minutes until sweet.\n' +
      '2. Stir in the garlic and tomato purée and cook for a minute.\n' +
      '3. Add the chopped tomatoes, cannellini beans and water; season and simmer for 15 minutes.\n' +
      '4. Drop in the pasta and the shredded cabbage and cook for 8–10 minutes until the pasta is tender.\n' +
      '5. Stir through the parsley, check the seasoning and serve with a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Pasta', rawMeasure: '100g small shapes' },
      { rawName: 'Cabbage', rawMeasure: '150g' },
      { rawName: 'Water', rawMeasure: '900ml' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chunky vegetable and barley broth',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Lunch',
    cuisine: 'Scottish',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Low-fat'],
    instructions:
      '1. Soften the onion, carrot, celery and leek in the olive oil for 10 minutes.\n' +
      '2. Stir in the pearl barley and the swede, then pour in the water.\n' +
      '3. Bring to the boil, then simmer gently for 40 minutes until the barley is plump and tender.\n' +
      '4. Season well, stir through the parsley and serve in deep bowls with bread.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Leek', rawMeasure: '1' },
      { rawName: 'Swede', rawMeasure: '200g' },
      { rawName: 'Bulgur wheat', rawMeasure: '100g pearl barley' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Water', rawMeasure: '1.2 litres' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Salads ─────────────────────────────────────────────────────────────────
  {
    title: 'Greek salad with feta',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Mediterranean', 'Low-carb'],
    instructions:
      '1. Cut the tomatoes into wedges and the cucumber into thick half-moons; tip into a large bowl.\n' +
      '2. Add the thinly sliced red onion, the olives and the chunks of feta.\n' +
      '3. Whisk the olive oil with the lemon juice and dried oregano and season with black pepper.\n' +
      '4. Pour the dressing over the salad, toss gently and serve at once.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Olives', rawMeasure: '80g' },
      { rawName: 'Feta', rawMeasure: '200g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2, juiced' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea, cucumber and mint salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Tip the drained chickpeas into a bowl with the diced cucumber, halved cherry tomatoes and finely sliced red onion.\n' +
      '2. Add the chopped mint and parsley.\n' +
      '3. Whisk the olive oil with the lemon juice, season and pour over the salad.\n' +
      '4. Toss well and leave for 5 minutes for the flavours to mingle before serving.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1, juiced' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beetroot, orange and goat\'s cheese salad',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Arrange the rocket over a platter and scatter over the cooked beetroot wedges.\n' +
      '2. Peel and segment the oranges, working over the salad so the juice drips down.\n' +
      '3. Crumble the goat\'s cheese over the top and scatter with the walnuts.\n' +
      '4. Whisk the olive oil with the sherry vinegar, season, drizzle over and serve.',
    rawLines: [
      { rawName: 'Beetroot', rawMeasure: '4 cooked' },
      { rawName: 'Orange', rawMeasure: '2' },
      { rawName: "Goat's cheese", rawMeasure: '120g' },
      { rawName: 'Rocket', rawMeasure: '80g' },
      { rawName: 'Walnuts', rawMeasure: '50g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Sherry vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi-free Mediterranean grain bowl',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Cook the quinoa in plenty of salted water for 12–15 minutes, then drain and cool slightly.\n' +
      '2. Meanwhile toss the courgette and pepper with a little olive oil and griddle until charred and tender.\n' +
      '3. Tip the quinoa into a bowl with the chickpeas, cherry tomatoes and the griddled vegetables.\n' +
      '4. Dress with the remaining olive oil, the lemon juice and the chopped parsley; season well and serve.',
    rawLines: [
      { rawName: 'Quinoa', rawMeasure: '200g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1, juiced' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Chicken & poultry mains ──────────────────────────────────────────────────
  {
    title: 'Lemon and herb roast chicken',
    servingsBase: 4,
    totalTimeMinutes: 100,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the chicken in a roasting tin and rub all over with the olive oil; season generously.\n' +
      '2. Halve the lemon and push it into the cavity with the rosemary and thyme.\n' +
      '3. Scatter the garlic cloves around the bird and roast for 1 hour 20 minutes, basting once, until the juices run clear.\n' +
      '4. Rest the chicken for 15 minutes under foil.\n' +
      '5. Tip the resting juices into the tin, add a splash of water and bubble on the hob to make a light gravy. Carve and serve.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1.6kg' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 bulb, halved' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Water', rawMeasure: '100ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken, leek and tarragon pie',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free'],
    instructions:
      '1. Melt the butter and soften the sliced leeks for 8 minutes. Add the chicken thigh pieces and colour lightly.\n' +
      '2. Stir in the flour and cook for a minute, then gradually add the milk, stirring, until you have a smooth sauce.\n' +
      '3. Simmer for 10 minutes until the chicken is cooked, then stir in the tarragon and season well. Cool a little.\n' +
      '4. Heat the oven to 200°C (fan 180°C). Tip the filling into a pie dish, lay the puff pastry over and trim. Brush with beaten egg.\n' +
      '5. Bake for 30–35 minutes until the pastry is deep gold and crisp.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g, diced' },
      { rawName: 'Leek', rawMeasure: '2' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '30g' },
      { rawName: 'Milk', rawMeasure: '400ml' },
      { rawName: 'Tarragon', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Puff pastry', rawMeasure: '320g sheet' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
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
    dietLabels: ['Soy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Mix the natural yoghurt with the garam masala, turmeric and half the ginger garlic paste. Coat the chicken and leave to marinate for 20 minutes.\n' +
      '2. Grill or fry the chicken pieces in batches until charred at the edges and just cooked; set aside.\n' +
      '3. Soften the onion in a little oil, add the remaining ginger garlic paste and cook for a minute.\n' +
      '4. Stir in the chopped tomatoes and curry powder and simmer for 12 minutes until thick.\n' +
      '5. Return the chicken, pour in the double cream and warm through. Season and finish with coriander. Serve with rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g, diced' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spanish chicken and chorizo traybake',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Tumble the chicken thighs, new potatoes, pepper and red onion into a large roasting tin.\n' +
      '2. Scatter over the sliced chorizo, drizzle with olive oil and season with the smoked paprika and salt.\n' +
      '3. Roast for 40–45 minutes, turning once, until the chicken is golden and cooked and the potatoes are crisp.\n' +
      '4. Squeeze over the lemon, scatter with parsley and serve straight from the tin.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Chorizo', rawMeasure: '150g' },
      { rawName: 'New potatoes', rawMeasure: '600g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Coronation chicken',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Stir the mayonnaise and natural yoghurt together with the curry powder until smooth.\n' +
      '2. Mix in the mango chutney, the sultanas and a squeeze of lemon; season to taste.\n' +
      '3. Fold the cooked, shredded chicken through the sauce until evenly coated.\n' +
      '4. Scatter with the toasted flaked almonds and chopped coriander, and serve in baked potatoes or with salad.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g, cooked and shredded' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp' },
      { rawName: 'Natural yoghurt', rawMeasure: '3 tbsp' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Mango', rawMeasure: '2 tbsp chutney' },
      { rawName: 'Sultanas', rawMeasure: '40g' },
      { rawName: 'Almonds', rawMeasure: '30g flaked' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1/2, juiced' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Honey and mustard glazed chicken thighs',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Whisk the honey, mustard, olive oil and a little lemon juice into a glaze.\n' +
      '2. Sit the chicken thighs in a roasting tin, season and brush generously with the glaze.\n' +
      '3. Roast for 35–40 minutes, basting twice, until sticky, deep gold and cooked through.\n' +
      '4. Rest for 5 minutes, then serve with the pan juices spooned over.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Honey', rawMeasure: '3 tbsp' },
      { rawName: 'Mustard', rawMeasure: '2 tbsp wholegrain' },
      { rawName: 'Lemon', rawMeasure: '1/2, juiced' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey and vegetable keema',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free', 'High-protein', 'Low-calorie'],
    instructions:
      '1. Brown the turkey mince in a little oil over a high heat, breaking it up well.\n' +
      '2. Add the onion and soften, then stir in the ginger garlic paste, garam masala and turmeric and cook for a minute.\n' +
      '3. Tip in the chopped tomatoes and the peas, season and simmer for 15 minutes until rich.\n' +
      '4. Finish with chopped coriander and serve with rice or warm flatbread.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Beef, lamb & pork mains ──────────────────────────────────────────────────
  {
    title: 'Slow-braised beef in red wine',
    servingsBase: 4,
    totalTimeMinutes: 180,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Soy-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C). Toss the beef in the seasoned flour and brown in batches in a little oil in a casserole; set aside.\n' +
      '2. Soften the onion, carrot and celery in the same pot for 10 minutes.\n' +
      '3. Return the beef, pour in the red wine and water, add the bay leaves and thyme and bring to a simmer.\n' +
      '4. Cover and braise in the oven for 2½ hours until the beef is meltingly tender.\n' +
      '5. Skim, check the seasoning and serve with mash or crusty bread.',
    rawLines: [
      { rawName: 'Stewing beef', rawMeasure: '800g, diced' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Red wine', rawMeasure: '350ml' },
      { rawName: 'Water', rawMeasure: '300ml' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cottage pie with soy-free gravy',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Gluten-free'],
    instructions:
      '1. Brown the minced beef in a large pan over a high heat, then lift out, leaving the fat behind.\n' +
      '2. Soften the onion, carrot and celery in the pan for 8–10 minutes, then stir in the tomato purée and cook for a minute.\n' +
      '3. Return the beef, add the water, season well and simmer for 25–30 minutes until rich; stir through the peas.\n' +
      '4. Meanwhile boil the potatoes until tender, drain and mash with the butter and milk; season.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Spoon the beef into a baking dish, top with the mash and fork the surface.\n' +
      '6. Bake for 25–30 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Water', rawMeasure: '300ml' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb and rosemary hotpot',
    servingsBase: 4,
    totalTimeMinutes: 150,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Brown the diced lamb shoulder in a little oil in a casserole; set aside.\n' +
      '2. Soften the onion and carrot in the same pot, then return the lamb with the water, rosemary and bay leaves; season.\n' +
      '3. Layer the sliced potatoes over the top, overlapping, and brush with melted butter.\n' +
      '4. Cover and bake for 1 hour, then uncover and bake for a further 45 minutes until the potatoes are golden and the lamb is tender.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '700g, diced' },
      { rawName: 'Potato', rawMeasure: '700g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Water', rawMeasure: '500ml' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek lamb kleftiko',
    servingsBase: 4,
    totalTimeMinutes: 200,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Soy-free', 'Gluten-free', 'Dairy-free', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Rub the lamb leg all over with olive oil, oregano, the crushed garlic and the lemon juice; season well.\n' +
      '2. Sit the lamb on a bed of new potatoes and red onion in a deep tin, tuck in the lemon halves and add a splash of water.\n' +
      '3. Cover tightly with foil and bake for 3 hours until the lamb is falling apart.\n' +
      '4. Remove the foil and roast for a final 20 minutes to colour. Shred the lamb and serve with the potatoes.',
    rawLines: [
      { rawName: 'Lamb leg', rawMeasure: '1.3kg' },
      { rawName: 'New potatoes', rawMeasure: '700g' },
      { rawName: 'Red onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Oregano', rawMeasure: '2 tsp dried' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Water', rawMeasure: '150ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork chops with apple and cider',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Season the pork chops and brown them in the butter and a little oil for 3–4 minutes each side; set aside.\n' +
      '2. Soften the sliced onion in the pan, then add the apple wedges and colour lightly.\n' +
      '3. Pour in the cider, scraping the base, and let it bubble down by half.\n' +
      '4. Stir in the double cream and the mustard, return the chops and simmer for 5 minutes until cooked through.\n' +
      '5. Season and serve with mash and greens.',
    rawLines: [
      { rawName: 'Pork chop', rawMeasure: '4' },
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Cider', rawMeasure: '250ml' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Mustard', rawMeasure: '1 tbsp' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
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
    dietLabels: ['Soy-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Brown the sausages in a little oil in a casserole, then lift out and slice thickly.\n' +
      '2. Soften the onion and pepper in the same pot, then stir in the garlic and smoked paprika.\n' +
      '3. Add the chopped tomatoes, the cannellini beans and a splash of water; season.\n' +
      '4. Return the sausages and simmer gently for 25 minutes until thick and rich.\n' +
      '5. Finish with parsley and serve with crusty bread.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '8' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef and ale stew with dumplings',
    servingsBase: 4,
    totalTimeMinutes: 165,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free'],
    instructions:
      '1. Toss the beef in the seasoned flour and brown in batches in a little oil in a casserole; set aside.\n' +
      '2. Soften the onion and carrot, then return the beef, pour in the ale and water and add the thyme. Simmer, covered, for 1½ hours.\n' +
      '3. For the dumplings, rub the suet into the self-raising flour with a pinch of salt, add enough cold water to make a soft dough and shape into balls.\n' +
      '4. Sit the dumplings on top of the stew, cover and cook for a final 25 minutes until risen and fluffy. Season and serve.',
    rawLines: [
      { rawName: 'Stewing beef', rawMeasure: '700g, diced' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Stout', rawMeasure: '330ml ale' },
      { rawName: 'Water', rawMeasure: '300ml' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Self-raising flour', rawMeasure: '120g' },
      { rawName: 'Suet', rawMeasure: '60g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced lamb koftas with yoghurt',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Soy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Mix the minced lamb with the grated onion, the cumin, the chopped mint and plenty of seasoning until well combined.\n' +
      '2. Shape around skewers into long sausages and chill for 10 minutes to firm up.\n' +
      '3. Griddle or grill for 8–10 minutes, turning, until charred and cooked through.\n' +
      '4. Stir the natural yoghurt with the lemon juice and a pinch of salt and serve alongside with warm flatbread and salad.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1, grated' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '1/2, juiced' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Fish & seafood mains ─────────────────────────────────────────────────────
  {
    title: 'Baked salmon with lemon and dill',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Pescatarian', 'Gluten-free', 'High-protein', 'Low-carb'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Sit the salmon fillets on a lined tray, skin-side down.\n' +
      '2. Drizzle with olive oil, season and scatter over the chopped dill.\n' +
      '3. Lay a couple of lemon slices on each fillet and bake for 14–16 minutes until just opaque and flaking.\n' +
      '4. Squeeze over a little more lemon and serve with new potatoes and greens.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Dill', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Fishcakes with parsley sauce',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Pescatarian'],
    instructions:
      '1. Boil the potatoes until tender, drain and mash without milk; cool slightly.\n' +
      '2. Flake the cooked white fish into the mash with the parsley and a squeeze of lemon; season and shape into cakes.\n' +
      '3. Coat each cake in flour, then beaten egg, then breadcrumbs.\n' +
      '4. Fry in a little oil for 3–4 minutes each side until golden and hot through.\n' +
      '5. For the sauce, melt the butter, stir in a little flour, then whisk in the milk until smooth; simmer, season and stir through extra parsley. Serve over the fishcakes.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '400g, cooked' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1/2, juiced' },
      { rawName: 'Plain flour', rawMeasure: '3 tbsp' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
      { rawName: 'Breadcrumbs', rawMeasure: '80g' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
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
    dietLabels: ['Soy-free', 'Pescatarian', 'Dairy-free', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Cook the linguine in plenty of salted boiling water until al dente; reserve a cup of the water.\n' +
      '2. Meanwhile soften the garlic and chilli flakes in the olive oil, then add the cherry tomatoes and cook until they slump.\n' +
      '3. Add the prawns and cook for 2–3 minutes until pink and just done.\n' +
      '4. Toss the drained pasta through the sauce with a splash of the cooking water and the parsley. Season and serve with lemon.',
    rawLines: [
      { rawName: 'Linguine', rawMeasure: '350g' },
      { rawName: 'Prawns', rawMeasure: '300g' },
      { rawName: 'Cherry tomato', rawMeasure: '300g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked haddock and leek fish pie',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Pescatarian'],
    instructions:
      '1. Poach the smoked haddock gently in the milk for 6–8 minutes, then lift out, flake and reserve the milk.\n' +
      '2. Soften the leeks in the butter, stir in the flour and cook for a minute, then whisk in the reserved milk to make a smooth sauce.\n' +
      '3. Stir through the parsley and the flaked fish; season and tip into a baking dish.\n' +
      '4. Boil the potatoes until tender, mash with a little butter and milk, then spoon over the filling and fork the top.\n' +
      '5. Bake at 200°C (fan 180°C) for 25–30 minutes until golden.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '500g' },
      { rawName: 'Leek', rawMeasure: '2' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Plain flour', rawMeasure: '30g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mackerel with beetroot and horseradish',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Pescatarian', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the mackerel fillets skin-side up on a tray, brush with olive oil and season.\n' +
      '2. Roast for 10–12 minutes until the skin is crisp and the flesh flakes.\n' +
      '3. Mix the cooked beetroot with the horseradish, a little soured cream and a squeeze of lemon.\n' +
      '4. Spoon the beetroot onto plates, lay the mackerel on top and scatter with dill.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '4 fillets' },
      { rawName: 'Beetroot', rawMeasure: '4 cooked' },
      { rawName: 'Horseradish', rawMeasure: '2 tsp' },
      { rawName: 'Soured cream', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Dill', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cod with chorizo and chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Soy-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Fry the sliced chorizo in a dry pan until its oil runs, then add the onion and soften.\n' +
      '2. Stir in the garlic and smoked paprika, then add the chickpeas and chopped tomatoes; simmer for 10 minutes.\n' +
      '3. Nestle the cod fillets into the sauce, season, cover and cook for 8–10 minutes until the fish flakes.\n' +
      '4. Scatter with parsley and serve with crusty bread.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4 cod' },
      { rawName: 'Chorizo', rawMeasure: '120g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna and sweetcorn pasta bake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Pescatarian', 'High-protein'],
    instructions:
      '1. Cook the pasta until just shy of al dente, then drain.\n' +
      '2. Melt the butter, stir in the flour and cook for a minute, then whisk in the milk to make a smooth sauce; stir in most of the cheese.\n' +
      '3. Fold the drained tuna, the sweetcorn and the pasta through the sauce; season and tip into a baking dish.\n' +
      '4. Scatter with the remaining cheese and bake at 200°C (fan 180°C) for 20 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '350g' },
      { rawName: 'Tuna', rawMeasure: '2 tins (145g each)' },
      { rawName: 'Sweetcorn', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '120g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Vegetarian & vegan mains ────────────────────────────────────────────────
  {
    title: 'Chickpea and spinach curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Soften the onion in the oil for 8 minutes, then stir in the ginger garlic paste, curry powder and turmeric and cook for a minute.\n' +
      '2. Add the chopped tomatoes and simmer for 5 minutes until thick.\n' +
      '3. Stir in the chickpeas and a splash of water and simmer for 10 minutes.\n' +
      '4. Fold through the spinach until wilted, season and finish with coriander. Serve with rice.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and chestnut wellington',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Fry the mushrooms in the butter over a high heat until any liquid has cooked off and they are deep gold.\n' +
      '2. Stir in the garlic, thyme and the chopped cooked chestnuts; season well and leave to cool.\n' +
      '3. Heat the oven to 200°C (fan 180°C). Roll out the puff pastry, pile the filling along the centre and fold over, sealing the edges.\n' +
      '4. Brush with beaten egg, score the top and bake for 30–35 minutes until deep gold and crisp. Rest, then slice.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '500g' },
      { rawName: 'Cooked chestnuts', rawMeasure: '180g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '2 tsp, chopped' },
      { rawName: 'Puff pastry', rawMeasure: '320g sheet' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted vegetable and lentil moussaka',
    servingsBase: 4,
    totalTimeMinutes: 80,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Soy-free', 'Vegetarian', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the aubergine slices in olive oil and roast for 20 minutes until soft.\n' +
      '2. Soften the onion, stir in the garlic, cinnamon and oregano, then add the lentils and chopped tomatoes; simmer for 15 minutes.\n' +
      '3. Layer the lentil sauce and aubergine in a baking dish.\n' +
      '4. Beat the eggs into the natural yoghurt with most of the cheese, season and pour over the top.\n' +
      '5. Scatter with the remaining cheese and bake for 30 minutes until set and golden.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2' },
      { rawName: 'Lentils', rawMeasure: '1 tin (400g) green' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Natural yoghurt', rawMeasure: '250g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable and butter bean tagine',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Moroccan',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the onion in the olive oil, then stir in the garlic, ras el hanout and cumin and cook for a minute.\n' +
      '2. Add the butternut squash and carrot, stir to coat, then tip in the chopped tomatoes and a splash of water.\n' +
      '3. Simmer for 20 minutes until the vegetables are tender, then stir in the cannellini beans and the dried apricots.\n' +
      '4. Cook for a further 10 minutes, season and finish with coriander. Serve with couscous.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '500g' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ras el hanout', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Dried apricots', rawMeasure: '60g' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed peppers with rice and feta',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers and sit them cut-side up in a baking dish.\n' +
      '2. Soften the onion in the olive oil, stir in the garlic, then add the cooked rice, chopped tomatoes and oregano; season.\n' +
      '3. Spoon the filling into the peppers and crumble the feta over the top.\n' +
      '4. Cover with foil and bake for 25 minutes, then uncover and bake for a further 15 minutes until the peppers are soft and the tops golden.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4' },
      { rawName: 'Rice', rawMeasure: '200g cooked' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1/2 tin (200g)' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Feta', rawMeasure: '120g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cauliflower and chickpea traybake',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Low-calorie'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the cauliflower florets and chickpeas with the olive oil, cumin, turmeric and chilli flakes.\n' +
      '2. Spread over a large tray and roast for 25–30 minutes, turning once, until the cauliflower is charred and tender.\n' +
      '3. Squeeze over the lemon, scatter with coriander and serve with rice or flatbread.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Macaroni cheese',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Cook the macaroni until just shy of al dente, then drain.\n' +
      '2. Melt the butter, stir in the flour and cook for a minute, then whisk in the milk a little at a time until smooth and thickened.\n' +
      '3. Stir in most of the Cheddar and the mustard; season well.\n' +
      '4. Fold the pasta through the sauce, tip into a dish, scatter with the rest of the cheese and the breadcrumbs.\n' +
      '5. Bake at 200°C (fan 180°C) for 20 minutes until golden and bubbling.',
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
    title: 'Spinach and ricotta cannelloni',
    servingsBase: 4,
    totalTimeMinutes: 65,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Soy-free', 'Vegetarian', 'Mediterranean'],
    instructions:
      '1. Wilt the spinach, squeeze out the water and chop, then mix with the ricotta, half the Parmesan and a grating of nutmeg; season.\n' +
      '2. For the sauce, soften the garlic in the olive oil, add the passata, simmer for 10 minutes and season.\n' +
      '3. Spoon the spinach mixture into the cannelloni tubes and lay them in a dish over a little sauce.\n' +
      '4. Pour the rest of the sauce over, scatter with the remaining Parmesan and the mozzarella.\n' +
      '5. Bake at 190°C (fan 170°C) for 35 minutes until bubbling and golden.',
    rawLines: [
      { rawName: 'Spinach', rawMeasure: '400g' },
      { rawName: 'Ricotta', rawMeasure: '250g' },
      { rawName: 'Parmesan', rawMeasure: '60g' },
      { rawName: 'Mozzarella', rawMeasure: '125g' },
      { rawName: 'Pasta', rawMeasure: '16 cannelloni tubes' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
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
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Soften the onion and pepper in the olive oil, then stir in the garlic, cumin, smoked paprika and chilli powder.\n' +
      '2. Add the diced sweet potato and stir to coat, then tip in the chopped tomatoes and black beans with a splash of water.\n' +
      '3. Simmer for 25 minutes until the sweet potato is tender and the sauce is thick.\n' +
      '4. Season, squeeze over the lime and finish with coriander. Serve with rice.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '500g' },
      { rawName: 'Black beans', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine parmigiana',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Brush the aubergine slices with olive oil and roast for 20 minutes until soft and golden.\n' +
      '2. Soften the garlic in a little olive oil, add the passata and basil and simmer for 10 minutes; season.\n' +
      '3. Layer the aubergine, tomato sauce, mozzarella and Parmesan in a baking dish, repeating until used up.\n' +
      '4. Finish with Parmesan and bake for 25 minutes until bubbling and golden. Rest before serving.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '3' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Mozzarella', rawMeasure: '250g' },
      { rawName: 'Parmesan', rawMeasure: '60g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegan shepherd\'s pie with lentils',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the onion, carrot and celery in the olive oil for 10 minutes, then stir in the garlic and tomato purée.\n' +
      '2. Add the green lentils, chopped tomatoes and a splash of water; simmer for 20 minutes until thick, then stir in the peas and season.\n' +
      '3. Meanwhile boil the potatoes until tender, drain and mash with a little olive oil and a splash of the cooking water; season.\n' +
      '4. Tip the lentils into a dish, spoon the mash over and fork the top.\n' +
      '5. Bake at 200°C (fan 180°C) for 25–30 minutes until golden.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '2 tins (400g each) green' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi-free vegetable fajitas',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Slice the peppers and onion and toss with the olive oil, cumin, smoked paprika and chilli powder.\n' +
      '2. Fry over a high heat for 8–10 minutes until charred at the edges and just tender.\n' +
      '3. Squeeze over the lime and season.\n' +
      '4. Warm the tortilla wraps and pile in the vegetables with the sliced avocado and a scatter of coriander.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '3' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Tortilla wrap', rawMeasure: '8' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pea and mint risotto',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Soften the onion in the butter and a little olive oil, then stir in the risotto rice for a minute until glossy.\n' +
      '2. Pour in the white wine and let it bubble away, then add the hot water a ladleful at a time, stirring, until the rice is creamy and tender.\n' +
      '3. Stir in the peas for the last few minutes to warm through.\n' +
      '4. Beat in the Parmesan and the chopped mint, season and serve at once.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '300g risotto rice' },
      { rawName: 'Peas', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'White wine', rawMeasure: '100ml' },
      { rawName: 'Water', rawMeasure: '1 litre, hot' },
      { rawName: 'Parmesan', rawMeasure: '60g' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Saag aloo',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Side',
    cuisine: 'Indian',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Parboil the diced potatoes for 6 minutes until just tender, then drain.\n' +
      '2. Toast the cumin and mustard seeds in the oil until they pop, then add the onion and soften.\n' +
      '3. Stir in the garlic, ginger and turmeric, then add the potatoes and fry until golden at the edges.\n' +
      '4. Fold through the spinach until wilted, season and serve.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Spinach', rawMeasure: '250g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp, grated' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Mustard seeds', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Breakfasts & brunch ──────────────────────────────────────────────────────
  {
    title: 'Porridge with banana and honey',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Tip the oats into a pan with the milk and a pinch of salt.\n' +
      '2. Bring gently to a simmer, stirring, and cook for 4–5 minutes until thick and creamy.\n' +
      '3. Spoon into bowls, top with sliced banana and a drizzle of honey.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Banana', rawMeasure: '1' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Mushrooms on toast',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Melt the butter in a pan and fry the sliced mushrooms over a high heat until golden and any liquid has cooked off.\n' +
      '2. Stir in the garlic and thyme and cook for a minute, then add a splash of double cream and bubble to a glossy sauce; season.\n' +
      '3. Toast the bread, pile the mushrooms on top and scatter with parsley.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Thyme', rawMeasure: '1 tsp, chopped' },
      { rawName: 'Double cream', rawMeasure: '3 tbsp' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Parsley', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Shakshuka',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Soften the onion and pepper in the olive oil for 10 minutes, then stir in the garlic, cumin and smoked paprika.\n' +
      '2. Add the chopped tomatoes and simmer for 12 minutes until thick; season well.\n' +
      '3. Make four wells in the sauce and crack an egg into each.\n' +
      '4. Cover and cook gently for 6–8 minutes until the whites are set but the yolks still soft.\n' +
      '5. Scatter with coriander and serve with crusty bread.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smashed avocado on sourdough',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Scoop the avocado into a bowl and mash roughly with a fork.\n' +
      '2. Stir in the lime juice and the chilli flakes; season with salt and black pepper.\n' +
      '3. Toast the bread, drizzle with a little olive oil and pile the avocado on top. Finish with extra chilli flakes.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2' },
      { rawName: 'Lime', rawMeasure: '1, juiced' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Bread', rawMeasure: '2 slices sourdough' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cheese and tomato omelette',
    servingsBase: 1,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Low-carb', 'High-protein'],
    instructions:
      '1. Beat the eggs with a little salt and pepper.\n' +
      '2. Melt the butter in a non-stick pan over a medium heat and pour in the eggs.\n' +
      '3. As the edges set, draw them in and tilt the pan so the runny egg flows underneath.\n' +
      '4. When almost set, scatter over the diced tomato and the grated Cheddar, fold in half and slide onto a plate.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Cheddar cheese', rawMeasure: '40g' },
      { rawName: 'Butter', rawMeasure: '15g' },
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
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Mash the banana, then whisk in the egg and the milk.\n' +
      '2. Fold in the self-raising flour and the baking powder to a thick batter, then fold through the blueberries.\n' +
      '3. Melt a little butter in a non-stick pan and drop in spoonfuls of batter.\n' +
      '4. Cook for 2 minutes until bubbles appear, then flip and cook for a minute more. Serve in stacks with honey.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '2' },
      { rawName: 'Self-raising flour', rawMeasure: '150g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Milk', rawMeasure: '150ml' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Honey', rawMeasure: 'to serve' },
    ],
  },

  // ── Sides ────────────────────────────────────────────────────────────────────
  {
    title: 'Garlic and herb roast potatoes',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Parboil the potato chunks in salted water for 8 minutes, then drain and rough up the edges.\n' +
      '2. Tip into a roasting tin with the olive oil and toss to coat; season.\n' +
      '3. Roast for 40 minutes, turning once, until crisp and golden.\n' +
      '4. Add the crushed garlic and rosemary for the last 5 minutes, toss and serve.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '1kg' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Honey-roast carrots and parsnips',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the carrots and parsnips into batons and toss with the olive oil; season.\n' +
      '2. Roast for 25 minutes, then drizzle over the honey and add the thyme.\n' +
      '3. Roast for a further 10–15 minutes until caramelised and tender. Serve hot.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '400g' },
      { rawName: 'Parsnip', rawMeasure: '400g' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemony green beans with almonds',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Low-carb'],
    instructions:
      '1. Boil or steam the green beans for 4–5 minutes until just tender, then drain.\n' +
      '2. Warm the olive oil in a pan, add the flaked almonds and toast until golden.\n' +
      '3. Toss the beans through with the lemon juice and zest; season and serve.',
    rawLines: [
      { rawName: 'Green beans', rawMeasure: '400g' },
      { rawName: 'Almonds', rawMeasure: '40g flaked' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Buttered savoy cabbage',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free', 'Low-carb'],
    instructions:
      '1. Shred the cabbage finely, discarding the tough core.\n' +
      '2. Melt the butter in a wide pan, add the cabbage and a splash of water and cover.\n' +
      '3. Cook for 5–6 minutes, tossing, until just tender but still bright.\n' +
      '4. Season with salt, plenty of black pepper and a little grated nutmeg.',
    rawLines: [
      { rawName: 'Cabbage', rawMeasure: '1 savoy' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Water', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bombay potatoes',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Side',
    cuisine: 'Indian',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Boil the diced potatoes until just tender, then drain.\n' +
      '2. Toast the mustard and cumin seeds in the oil until they pop, then add the onion and soften.\n' +
      '3. Stir in the garlic, turmeric and chilli powder, then add the potatoes and the chopped tomatoes.\n' +
      '4. Cook for 10 minutes until the potatoes take on the spices; season and finish with coriander.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '700g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Mustard seeds', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp seeds' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1/2 tin (200g)' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Puddings & bakes ─────────────────────────────────────────────────────────
  {
    title: 'Victoria sponge',
    servingsBase: 8,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line two sandwich tins.\n' +
      '2. Beat the butter and caster sugar until pale and fluffy, then beat in the eggs one at a time.\n' +
      '3. Fold in the self-raising flour and a splash of milk to a soft dropping consistency.\n' +
      '4. Divide between the tins and bake for 20–25 minutes until risen and springy. Cool on a rack.\n' +
      '5. Sandwich with the raspberry jam and whipped double cream and dust with icing sugar.',
    rawLines: [
      { rawName: 'Butter', rawMeasure: '200g, softened' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Self-raising flour', rawMeasure: '200g' },
      { rawName: 'Milk', rawMeasure: '2 tbsp' },
      { rawName: 'Raspberry jam', rawMeasure: '4 tbsp' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Icing sugar', rawMeasure: 'to dust' },
    ],
  },
  {
    title: 'Apple and blackberry crumble',
    servingsBase: 6,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Peel and slice the apples and tip into a baking dish with the blackberries and half the caster sugar.\n' +
      '2. Rub the butter into the plain flour until it resembles breadcrumbs, then stir in the remaining sugar and the oats.\n' +
      '3. Scatter the crumble evenly over the fruit.\n' +
      '4. Bake for 35–40 minutes until golden on top and bubbling at the edges. Serve with custard.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '4 cooking' },
      { rawName: 'Blackberries', rawMeasure: '200g' },
      { rawName: 'Plain flour', rawMeasure: '150g' },
      { rawName: 'Butter', rawMeasure: '100g' },
      { rawName: 'Caster sugar', rawMeasure: '120g' },
      { rawName: 'Oats', rawMeasure: '50g' },
      { rawName: 'Custard', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Sticky toffee pudding',
    servingsBase: 6,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Cover the chopped dates with the boiling water and the bicarbonate of soda and leave to soften.\n' +
      '2. Beat the butter and muscovado sugar until creamy, then beat in the eggs.\n' +
      '3. Fold in the self-raising flour, then the date mixture. Pour into a lined tin and bake for 30–35 minutes until risen and firm.\n' +
      '4. For the sauce, melt the butter, muscovado sugar and double cream together and simmer until glossy.\n' +
      '5. Pour some sauce over the warm pudding and serve the rest alongside.',
    rawLines: [
      { rawName: 'Dates', rawMeasure: '200g, chopped' },
      { rawName: 'Water', rawMeasure: '250ml boiling' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '75g' },
      { rawName: 'Muscovado sugar', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Self-raising flour', rawMeasure: '175g' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
    ],
  },
  {
    title: 'Lemon drizzle cake',
    servingsBase: 8,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a loaf tin.\n' +
      '2. Beat the butter and caster sugar until pale, then beat in the eggs and the lemon zest.\n' +
      '3. Fold in the self-raising flour and a splash of milk, then spoon into the tin.\n' +
      '4. Bake for 40–45 minutes until golden and a skewer comes out clean.\n' +
      '5. Mix the lemon juice with the granulated sugar and spoon over the warm cake so it soaks in. Cool in the tin.',
    rawLines: [
      { rawName: 'Butter', rawMeasure: '175g, softened' },
      { rawName: 'Caster sugar', rawMeasure: '175g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Self-raising flour', rawMeasure: '175g' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Granulated sugar', rawMeasure: '85g' },
      { rawName: 'Milk', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Eton mess',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Hull and roughly chop most of the strawberries, keeping a few whole for the top.\n' +
      '2. Whip the double cream to soft peaks.\n' +
      '3. Crush the meringue nests into chunks and fold through the cream with the chopped strawberries.\n' +
      '4. Spoon into glasses, top with the reserved strawberries and serve at once.',
    rawLines: [
      { rawName: 'Strawberries', rawMeasure: '400g' },
      { rawName: 'Double cream', rawMeasure: '300ml' },
      { rawName: 'Meringue nests', rawMeasure: '4' },
    ],
  },
  {
    title: 'Rice pudding',
    servingsBase: 4,
    totalTimeMinutes: 130,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C). Butter an ovenproof dish.\n' +
      '2. Tip in the pudding rice, sugar and milk and stir, then dot with the butter and grate over a little nutmeg.\n' +
      '3. Bake for 2 hours, stirring once after the first 30 minutes, until thick, creamy and golden-skinned on top.\n' +
      '4. Serve warm, with a spoon of jam if you like.',
    rawLines: [
      { rawName: 'Pudding rice', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '800ml' },
      { rawName: 'Caster sugar', rawMeasure: '50g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Chocolate and pear pudding',
    servingsBase: 6,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and butter a baking dish.\n' +
      '2. Beat the butter and caster sugar until pale, beat in the eggs, then fold in the self-raising flour and cocoa powder.\n' +
      '3. Spread into the dish and press the pear slices gently into the top.\n' +
      '4. Bake for 30–35 minutes until risen and just firm. Serve warm with cream.',
    rawLines: [
      { rawName: 'Butter', rawMeasure: '150g, softened' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Self-raising flour', rawMeasure: '120g' },
      { rawName: 'Cocoa powder', rawMeasure: '30g' },
      { rawName: 'Pear', rawMeasure: '3' },
      { rawName: 'Double cream', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Vegan chocolate avocado mousse',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Scoop the ripe avocados into a blender with the cocoa powder, the maple-style golden syrup and a pinch of salt.\n' +
      '2. Add the almond milk and the vanilla extract and blend until completely smooth and glossy.\n' +
      '3. Spoon into glasses and chill for at least 30 minutes.\n' +
      '4. Serve topped with fresh raspberries.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2 ripe' },
      { rawName: 'Cocoa powder', rawMeasure: '4 tbsp' },
      { rawName: 'Golden syrup', rawMeasure: '4 tbsp' },
      { rawName: 'Almond milk', rawMeasure: '4 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Raspberries', rawMeasure: '100g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Flapjacks',
    servingsBase: 12,
    totalTimeMinutes: 40,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a square tin.\n' +
      '2. Melt the butter, golden syrup and muscovado sugar together gently until smooth.\n' +
      '3. Stir in the oats until evenly coated, then press firmly into the tin.\n' +
      '4. Bake for 20–25 minutes until golden at the edges. Mark into squares while warm and cool in the tin.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '300g' },
      { rawName: 'Butter', rawMeasure: '150g' },
      { rawName: 'Golden syrup', rawMeasure: '3 tbsp' },
      { rawName: 'Muscovado sugar', rawMeasure: '100g' },
    ],
  },
  {
    title: 'Scones with jam and clotted cream',
    servingsBase: 8,
    totalTimeMinutes: 35,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Rub the butter into the self-raising flour until it resembles breadcrumbs, then stir in the caster sugar.\n' +
      '2. Make a well, pour in most of the milk and bring together quickly into a soft dough; do not overwork.\n' +
      '3. Pat out to 2cm thick and cut out rounds. Brush the tops with the remaining milk.\n' +
      '4. Bake for 10–12 minutes until risen and golden. Serve split with jam and clotted cream.',
    rawLines: [
      { rawName: 'Self-raising flour', rawMeasure: '350g' },
      { rawName: 'Butter', rawMeasure: '85g, cold' },
      { rawName: 'Caster sugar', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '175ml' },
      { rawName: 'Jam', rawMeasure: 'to serve' },
      { rawName: 'Clotted cream', rawMeasure: 'to serve' },
    ],
  },
  {
    title: 'Bakewell tart',
    servingsBase: 8,
    totalTimeMinutes: 75,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Soy-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Line a tart tin with the shortcrust pastry and chill, then blind-bake for 12 minutes.\n' +
      '2. Spread the raspberry jam over the base.\n' +
      '3. Beat the butter and caster sugar until pale, beat in the eggs, then fold in the ground almonds and a little plain flour.\n' +
      '4. Spread the frangipane over the jam and scatter with flaked almonds.\n' +
      '5. Bake for 30–35 minutes until golden and set. Cool, then dust with icing sugar.',
    rawLines: [
      { rawName: 'Shortcrust pastry', rawMeasure: '320g' },
      { rawName: 'Raspberry jam', rawMeasure: '4 tbsp' },
      { rawName: 'Butter', rawMeasure: '120g, softened' },
      { rawName: 'Caster sugar', rawMeasure: '120g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Almonds', rawMeasure: '120g ground' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Icing sugar', rawMeasure: 'to dust' },
    ],
  },
]
