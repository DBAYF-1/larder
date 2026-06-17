// Curated HIGH-PROTEIN recipes for Larder.
//
// Each record is culinary content ONLY — the source/sourceId/imageUrl boilerplate
// is added by sources/curated.js (mapCurated). The pipeline (parse -> resolve ->
// normalise -> buildRecipeDoc) derives allergens, nutrition and free-from
// healthLabels from the resolved ingredient lines, so we only assert dietLabels
// here. Ingredient lines use vocabulary from data/ingredients.js so they resolve
// cleanly. Method prose is original, written fresh in British English.
//
// DIET CONTRACT — "High-protein": every recipe is protein-dense, designed to land
// at roughly 25 g of protein per serving or more. There is no forbidden-list for
// this diet, so dishes lean on lean meat, poultry, fish, eggs, dairy and pulses.
// Where a dish is also honestly e.g. gluten-free or vegetarian the extra
// dietLabels are tagged truthfully; free-from health labels are left to the
// pipeline to derive from the resolved lines.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  // ── Chicken & turkey ──────────────────────────────────────────────────────
  {
    title: 'High-protein chicken and quinoa power bowl',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Rinse the quinoa under cold water, then simmer in plenty of salted water for 12–15 minutes until tender. Drain well and set aside to steam-dry.\n' +
      '2. Season the chicken breasts all over with salt, black pepper and smoked paprika. Heat the olive oil in a griddle pan and cook for 5–6 minutes a side until cooked through with a good colour. Rest for a few minutes, then slice.\n' +
      '3. Fold the chickpeas and spinach through the warm quinoa so the leaves wilt slightly. Squeeze over half the lemon and season.\n' +
      '4. Divide between two bowls, top with the sliced chicken and avocado, and finish with a dollop of Greek yoghurt and the remaining lemon.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2 (about 350g)' },
      { rawName: 'Quinoa', rawMeasure: '120g' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Spinach', rawMeasure: '80g' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Greek yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled peri-peri chicken thighs',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Whisk together the olive oil, smoked paprika, chilli flakes, garlic, lemon juice and a good pinch of salt to make a peri-peri marinade.\n' +
      '2. Toss the chicken thighs through the marinade and leave for at least 20 minutes, or overnight in the fridge.\n' +
      '3. Heat the grill to high. Lay the thighs skin-side up on a rack and grill for 7–8 minutes a side, basting with the marinade, until charred at the edges and cooked through.\n' +
      '4. Rest briefly, then serve with the pan juices spooned over and extra lemon on the side.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, crushed' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and chickpea curry',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the vegetable oil in a large pan and soften the onion for 8 minutes. Stir in the garlic, ginger and curry powder and cook for a minute until fragrant.\n' +
      '2. Add the diced chicken and brown all over. Pour in the chopped tomatoes and a splash of water, then season.\n' +
      '3. Tip in the chickpeas, cover and simmer for 20 minutes until the chicken is tender and the sauce has thickened.\n' +
      '4. Stir through the spinach until wilted, scatter with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g, diced' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tandoori chicken with cucumber raita',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Slash each chicken breast a few times. Mix half the Greek yoghurt with the garam masala, garlic, ginger, smoked paprika and a squeeze of lemon, then coat the chicken and marinate for 30 minutes.\n' +
      '2. Heat the oven to 220°C (fan 200°C). Lay the chicken on a lined tray and roast for 22–25 minutes until charred at the edges and cooked through.\n' +
      '3. Meanwhile, stir the grated cucumber and chopped mint through the remaining yoghurt and season to make the raita.\n' +
      '4. Serve the tandoori chicken with the raita and warm rice alongside.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4 (about 600g)' },
      { rawName: 'Greek yoghurt', rawMeasure: '250g' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemon and herb roast chicken breast with butter beans',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Rub the chicken breasts with olive oil, lemon zest, thyme, salt and black pepper.\n' +
      '2. Tip the cannellini beans into a roasting tin with the garlic, a splash of stock and a drizzle of oil. Sit the chicken on top.\n' +
      '3. Roast for 22–25 minutes until the chicken is cooked through and the beans are creamy.\n' +
      '4. Squeeze over the lemon, stir the spinach through the hot beans until wilted and serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4 (about 600g)' },
      { rawName: 'Cannellini beans', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Thyme', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken souvlaki skewers with tzatziki',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Toss the diced chicken with olive oil, oregano, garlic, lemon juice and seasoning, then thread onto skewers.\n' +
      '2. Grate the cucumber, squeeze out the excess water and stir into the Greek yoghurt with a little garlic and mint to make the tzatziki. Season.\n' +
      '3. Heat a griddle pan and cook the skewers for 10–12 minutes, turning, until charred and cooked through.\n' +
      '4. Serve the skewers with the tzatziki and a crisp salad.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g, diced' },
      { rawName: 'Greek yoghurt', rawMeasure: '250g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tbsp' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Lettuce', rawMeasure: '1/2 head' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sticky hoisin chicken stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Slice the chicken into strips and toss with the cornflour. Heat half the sesame oil in a wok and stir-fry the chicken in batches until golden. Set aside.\n' +
      '2. Add the rest of the oil and stir-fry the mixed peppers, broccoli and spring onion for 3–4 minutes until just tender.\n' +
      '3. Return the chicken with the garlic and ginger, then pour in the hoisin and soy sauce. Toss for 2 minutes until everything is glossy and coated.\n' +
      '4. Serve over steamed rice with extra spring onion scattered over.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Hoisin sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
    ],
  },
  {
    title: 'Turkey and black bean chilli',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the vegetable oil in a large pan and brown the turkey mince, breaking it up with a spoon. Lift out and set aside.\n' +
      '2. Soften the onion and mixed peppers for 8 minutes, then stir in the garlic, cumin, smoked paprika and chilli powder and cook for a minute.\n' +
      '3. Return the turkey, add the chopped tomatoes, black beans and a splash of stock, then season. Simmer for 25 minutes until thick.\n' +
      '4. Stir through the coriander and serve with rice or in warm tortillas.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Black beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey meatballs in tomato sauce',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['High-protein'],
    instructions:
      '1. Mix the turkey mince with the breadcrumbs, egg, half the garlic, oregano and seasoning. Roll into walnut-sized balls.\n' +
      '2. Heat the olive oil in a deep pan and brown the meatballs all over. Lift out.\n' +
      '3. Soften the onion in the same pan, add the remaining garlic, then pour in the passata with a splash of water. Season and simmer for 10 minutes.\n' +
      '4. Return the meatballs and simmer for 15 minutes until cooked through. Scatter with parmesan and basil and serve with pasta.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Breadcrumbs', rawMeasure: '40g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Parmesan', rawMeasure: '30g' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Spaghetti', rawMeasure: '320g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken Caesar protein salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['High-protein'],
    instructions:
      '1. Season the chicken breasts and griddle in the olive oil for 5–6 minutes a side until cooked through. Rest, then slice.\n' +
      '2. Whisk the Greek yoghurt with the mustard, anchovy fillets (mashed), lemon juice and half the parmesan to make a lighter Caesar dressing.\n' +
      '3. Toss the lettuce with most of the dressing and pile onto plates.\n' +
      '4. Top with the sliced chicken, the remaining dressing, a halved boiled egg and the rest of the parmesan.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2 (about 350g)' },
      { rawName: 'Lettuce', rawMeasure: '1 head' },
      { rawName: 'Greek yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Anchovy fillets', rawMeasure: '3' },
      { rawName: 'Parmesan', rawMeasure: '30g' },
      { rawName: 'Egg', rawMeasure: '2, boiled' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Garlic butter chicken with broccoli',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Season the chicken breasts well. Heat the olive oil in a large pan and cook for 5–6 minutes a side until golden and cooked through. Lift out and rest.\n' +
      '2. Lower the heat, add the butter and garlic and cook gently for a minute until fragrant.\n' +
      '3. Steam or boil the broccoli for 4 minutes until just tender, then toss in the garlic butter with the lemon juice.\n' +
      '4. Slice the chicken, return to the pan to coat in the buttery juices, and serve with the broccoli.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4 (about 600g)' },
      { rawName: 'Broccoli', rawMeasure: '400g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai green chicken curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the coconut oil in a wok and fry the Thai green curry paste for a minute until fragrant.\n' +
      '2. Add the sliced chicken and stir-fry until it turns opaque, then pour in the coconut milk and bring to a gentle simmer.\n' +
      '3. Add the mangetout and mixed peppers and simmer for 8–10 minutes until the chicken is cooked and the vegetables are just tender.\n' +
      '4. Season with the fish sauce and lime juice, scatter with coriander and serve with jasmine rice.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g, sliced' },
      { rawName: 'Thai green curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 x 400ml tin' },
      { rawName: 'Mangetout', rawMeasure: '150g' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Coconut oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Turkey and spinach lasagne',
    servingsBase: 6,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['High-protein'],
    instructions:
      '1. Brown the turkey mince in the olive oil, then lift out. Soften the onion and garlic, return the turkey, add the chopped tomatoes and oregano and simmer for 20 minutes. Stir the spinach through to wilt.\n' +
      '2. For the sauce, melt the butter, stir in the plain flour, then whisk in the milk over a low heat until thick and smooth. Stir in half the cheddar.\n' +
      '3. Heat the oven to 190°C (fan 170°C). Layer the meat sauce, lasagne sheets and cheese sauce in a dish, finishing with cheese sauce and the rest of the cheddar.\n' +
      '4. Bake for 35–40 minutes until golden and bubbling. Rest for 10 minutes before serving.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '700g' },
      { rawName: 'Lasagne sheets', rawMeasure: '12 sheets' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 x 400g tins' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken shawarma protein wraps',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['High-protein'],
    instructions:
      '1. Toss the sliced chicken thighs with the cumin, smoked paprika, garlic, lemon juice, olive oil and seasoning. Marinate for 20 minutes.\n' +
      '2. Heat a large frying pan and cook the chicken over a high heat for 8–10 minutes until charred and cooked through.\n' +
      '3. Mix the Greek yoghurt with the tahini, a little garlic and lemon to make a quick sauce.\n' +
      '4. Warm the pitta breads, fill with the chicken, salad and a generous drizzle of the yoghurt-tahini sauce.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '700g, sliced' },
      { rawName: 'Greek yoghurt', rawMeasure: '150g' },
      { rawName: 'Tahini', rawMeasure: '2 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Lettuce', rawMeasure: '1/2 head' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roast turkey breast with lentils',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Rub the turkey breast with olive oil, thyme, salt and black pepper, and roast for 30–35 minutes until cooked through. Rest before slicing.\n' +
      '2. Meanwhile, soften the onion and carrot in a little oil for 8 minutes, then stir in the garlic.\n' +
      '3. Add the lentils, chopped tomatoes and a splash of stock. Simmer for 15 minutes until thick, then season.\n' +
      '4. Slice the turkey and serve over the warm lentils with parsley scattered over.',
    rawLines: [
      { rawName: 'Turkey', rawMeasure: '600g breast' },
      { rawName: 'Lentils', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '1 tbsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Beef, lamb & pork ─────────────────────────────────────────────────────
  {
    title: 'Seared steak with peppercorn sauce',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Bring the steaks to room temperature and season generously. Heat a heavy pan until very hot with the olive oil.\n' +
      '2. Sear the steaks for 2–3 minutes a side for medium-rare, then rest on a warm plate.\n' +
      '3. Lower the heat, add the butter, shallot and crushed black peppercorns, and soften for a minute. Pour in the brandy, then the double cream, and simmer until glossy.\n' +
      '4. Spoon the sauce over the rested steaks and serve with green beans.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '2 (about 250g each)' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Shallot', rawMeasure: '1' },
      { rawName: 'Black peppercorns', rawMeasure: '1 tbsp' },
      { rawName: 'Brandy', rawMeasure: '2 tbsp' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef and broccoli stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Slice the beef steak thinly across the grain and toss with the cornflour and half the soy sauce.\n' +
      '2. Heat half the sesame oil in a wok until smoking and stir-fry the beef in batches until browned. Set aside.\n' +
      '3. Add the rest of the oil and stir-fry the broccoli, garlic and ginger for 3–4 minutes.\n' +
      '4. Return the beef, add the remaining soy sauce and the oyster sauce, toss for a minute and serve over rice.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '500g' },
      { rawName: 'Broccoli', rawMeasure: '300g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Oyster sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
    ],
  },
  {
    title: 'Lean beef kofta with minted yoghurt',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Mix the minced beef with the grated onion, garlic, cumin, smoked paprika and seasoning. Shape around skewers into sausage shapes.\n' +
      '2. Heat a griddle pan and cook the kofta for 8–10 minutes, turning, until charred and cooked through.\n' +
      '3. Stir the chopped mint through the Greek yoghurt with a squeeze of lemon and season.\n' +
      '4. Serve the kofta with the minted yoghurt, a tomato salad and warm flatbread.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '600g' },
      { rawName: 'Greek yoghurt', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'High-protein beef and bean burrito bowl',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Brown the minced beef in the olive oil, then stir in the onion, garlic, cumin and smoked paprika and cook for 5 minutes.\n' +
      '2. Add the kidney beans, chopped tomatoes and a splash of water, season and simmer for 15 minutes until thick.\n' +
      '3. Cook the rice until tender and divide between bowls.\n' +
      '4. Top with the spiced beef, sweetcorn, avocado, a spoon of soured cream and a scatter of coriander.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Kidney beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Brown rice', rawMeasure: '250g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Sweetcorn', rawMeasure: '200g' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Soured cream', rawMeasure: '4 tbsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Slow-braised beef shin with butter beans',
    servingsBase: 4,
    totalTimeMinutes: 180,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C). Season the beef shin and brown all over in the olive oil in a casserole. Lift out.\n' +
      '2. Soften the onion, carrot and celery for 10 minutes, then stir in the garlic and tomato purée.\n' +
      '3. Return the beef, pour in the red wine and stock, add the bay leaves, cover and braise in the oven for 2½ hours until meltingly tender.\n' +
      '4. Stir in the cannellini beans and cook for a final 20 minutes. Scatter with parsley and serve.',
    rawLines: [
      { rawName: 'Beef shin', rawMeasure: '800g, diced' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Red wine', rawMeasure: '250ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork tenderloin with apple and mustard',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Season the pork tenderloin and sear all over in the olive oil in an ovenproof pan.\n' +
      '2. Transfer to the oven and roast for 15–18 minutes until just cooked through. Rest, then slice.\n' +
      '3. In the same pan soften the apple wedges in the butter, then stir in the mustard and double cream and simmer until glossy.\n' +
      '4. Serve the sliced pork with the apple-mustard sauce and steamed greens.',
    rawLines: [
      { rawName: 'Pork tenderloin', rawMeasure: '600g' },
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Mustard', rawMeasure: '2 tsp' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Broccoli', rawMeasure: '300g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled lamb chops with white bean mash',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Rub the lamb chops with the rosemary, garlic, olive oil and seasoning, then leave for 15 minutes.\n' +
      '2. Heat a griddle pan and cook the chops for 3–4 minutes a side until charred outside and pink within. Rest.\n' +
      '3. Warm the cannellini beans with a little garlic, the butter and a splash of stock, then crush roughly to a coarse mash and season.\n' +
      '4. Serve the chops on the white bean mash with the resting juices spooned over.',
    rawLines: [
      { rawName: 'Lamb chop', rawMeasure: '8' },
      { rawName: 'Cannellini beans', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Rosemary', rawMeasure: '1 tbsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 100ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork and cabbage stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Slice the pork tenderloin thinly and toss with the cornflour and a little soy sauce.\n' +
      '2. Heat the sesame oil in a wok and stir-fry the pork until browned, then set aside.\n' +
      '3. Stir-fry the cabbage, garlic and ginger for 3–4 minutes until just wilted.\n' +
      '4. Return the pork with the remaining soy and the oyster sauce, toss for a minute and serve with rice.',
    rawLines: [
      { rawName: 'Pork tenderloin', rawMeasure: '500g' },
      { rawName: 'Cabbage', rawMeasure: '1/2 head' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Oyster sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
    ],
  },
  {
    title: 'Spiced lamb mince with chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Brown the minced lamb in a large pan, then lift out, leaving most of the fat behind.\n' +
      '2. Soften the onion for 8 minutes, then stir in the garlic, cumin, cinnamon and ras el hanout.\n' +
      '3. Return the lamb, add the chickpeas, chopped tomatoes and a splash of water, then season and simmer for 20 minutes.\n' +
      '4. Stir through the spinach to wilt, scatter with coriander and serve with rice or flatbread.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Ras el hanout', rawMeasure: '1 tsp' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Steak and egg breakfast plate',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Season the sirloin steak well and bring to room temperature. Heat half the olive oil in a hot pan and sear for 2–3 minutes a side. Rest.\n' +
      '2. In the same pan, soften the mushrooms and halved tomatoes for a few minutes until golden.\n' +
      '3. Fry the eggs in the remaining oil to your liking.\n' +
      '4. Slice the steak and serve with the eggs, mushrooms and tomatoes.',
    rawLines: [
      { rawName: 'Sirloin steak', rawMeasure: '2 (about 200g each)' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Fish & seafood ────────────────────────────────────────────────────────
  {
    title: 'Baked salmon with lentils and spinach',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the salmon fillets on a lined tray, drizzle with olive oil, season and squeeze over half the lemon. Bake for 12–14 minutes until just cooked.\n' +
      '2. Meanwhile, soften the onion and carrot in a little oil for 8 minutes, then stir in the garlic.\n' +
      '3. Add the lentils with a splash of stock and warm through, then fold in the spinach to wilt and season.\n' +
      '4. Spoon the lentils onto plates, top with the salmon and finish with the rest of the lemon.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4 (about 130g each)' },
      { rawName: 'Lentils', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 100ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna and white bean salad',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Drain the tuna and the cannellini beans and tip into a bowl.\n' +
      '2. Add the halved cherry tomatoes, sliced red onion and rocket.\n' +
      '3. Whisk the olive oil with the lemon juice and seasoning, then toss through the salad.\n' +
      '4. Pile onto plates and serve at once with crusty bread if you like.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '2 x 145g tins' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Garlic prawn and chickpea sauté',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the garlic and chilli flakes for a minute.\n' +
      '2. Add the chickpeas and warm through, crushing a few against the pan, then stir in the chopped tomatoes and season.\n' +
      '3. Add the prawns and cook for 3–4 minutes until pink and cooked through.\n' +
      '4. Stir through the spinach and parsley until wilted, squeeze over the lemon and serve.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '300g, raw' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Spinach', rawMeasure: '80g' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked haddock with poached eggs',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free'],
    instructions:
      '1. Sit the smoked haddock in a wide pan, pour over the milk, add a knob of butter and poach gently for 6–8 minutes until the fish flakes.\n' +
      '2. Bring a second pan of water to a bare simmer, swirl, and poach the eggs for 3 minutes until the whites are set.\n' +
      '3. Wilt the spinach in a little butter and season.\n' +
      '4. Lift the haddock onto plates with the spinach, top each with a poached egg and a grind of black pepper.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '2 fillets (about 300g)' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Spinach', rawMeasure: '120g' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cod and chorizo one-pan bake',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Fry the chorizo in a roasting tin until its oil runs, then add the onion and mixed peppers and roast for 10 minutes.\n' +
      '2. Stir in the cannellini beans and chopped tomatoes, season and return to the oven for 5 minutes.\n' +
      '3. Nestle the white fish fillets into the sauce, drizzle with olive oil and bake for 12–14 minutes until the fish flakes.\n' +
      '4. Scatter with parsley and squeeze over the lemon to serve.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4 (about 140g each)' },
      { rawName: 'Chorizo', rawMeasure: '100g' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Seared tuna steak with sesame greens',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['High-protein', 'Pescatarian', 'Dairy-free'],
    instructions:
      '1. Pat the tuna steaks dry and season. Press the sesame seeds onto both sides.\n' +
      '2. Heat the sesame oil in a hot pan and sear the tuna for 1–2 minutes a side, leaving the centre pink. Rest, then slice.\n' +
      '3. Stir-fry the pak choi and broccoli with the garlic and soy sauce for 3–4 minutes until just tender.\n' +
      '4. Serve the sliced tuna over the sesame greens with a squeeze of lime.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '2 steaks (about 150g each)' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Broccoli', rawMeasure: '150g' },
      { rawName: 'Sesame seeds', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mackerel and quinoa salad',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Rinse the quinoa and simmer in salted water for 12–15 minutes until tender. Drain and cool slightly.\n' +
      '2. Flake the mackerel into large pieces, discarding any skin.\n' +
      '3. Toss the quinoa with the cucumber, cherry tomatoes, red onion and rocket.\n' +
      '4. Whisk the olive oil with the lemon juice, fold through the salad with the mackerel and season.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '2 fillets (about 200g)' },
      { rawName: 'Quinoa', rawMeasure: '120g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Rocket', rawMeasure: '50g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and egg fried rice',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['High-protein', 'Pescatarian', 'Dairy-free'],
    instructions:
      '1. Beat the eggs and scramble lightly in the hot sesame oil, then set aside.\n' +
      '2. Stir-fry the prawns until pink, add the garlic, ginger and peas and toss for a minute.\n' +
      '3. Add the cooked rice and stir-fry over a high heat until piping hot, breaking up any clumps.\n' +
      '4. Return the egg, pour in the soy sauce, scatter with spring onion and toss to combine.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '300g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Basmati rice', rawMeasure: '300g, cooked and cooled' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Baked cod with butter beans and tomato',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Soften the onion and garlic in olive oil in an ovenproof dish for 6 minutes.\n' +
      '2. Stir in the cannellini beans, chopped tomatoes and a pinch of chilli flakes, then season and simmer for 5 minutes.\n' +
      '3. Sit the white fish fillets on top, drizzle with oil and bake for 12–14 minutes until the fish flakes.\n' +
      '4. Scatter with parsley and serve with the lemon.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4 (about 140g each)' },
      { rawName: 'Cannellini beans', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Salmon and egg protein breakfast',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free'],
    instructions:
      '1. Beat the eggs with a splash of milk and season.\n' +
      '2. Melt the butter in a non-stick pan over a low heat and gently scramble the eggs until just set and creamy.\n' +
      '3. Fold the smoked salmon and chopped chives through the eggs at the last moment.\n' +
      '4. Serve at once with a few cherry tomatoes alongside.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Smoked salmon', rawMeasure: '120g' },
      { rawName: 'Chives', rawMeasure: 'small handful' },
      { rawName: 'Cherry tomato', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '2 tbsp' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Eggs, dairy & vegetarian protein ──────────────────────────────────────
  {
    title: 'High-protein cottage cheese scramble',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Beat the eggs with the cream cheese, a splash of milk and seasoning until smooth.\n' +
      '2. Melt the butter in a non-stick pan over a low heat and pour in the egg mixture.\n' +
      '3. Stir gently and continuously until the eggs are softly set and creamy.\n' +
      '4. Fold the spinach through to wilt, scatter with chives and serve with wholemeal toast.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Cream cheese', rawMeasure: '60g' },
      { rawName: 'Spinach', rawMeasure: '60g' },
      { rawName: 'Chives', rawMeasure: 'small handful' },
      { rawName: 'Milk', rawMeasure: '2 tbsp' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Wholemeal flour', rawMeasure: '2 slices bread' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paneer and chickpea curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Cut the paneer into cubes and fry in the vegetable oil until golden on all sides. Lift out.\n' +
      '2. Soften the onion for 8 minutes, then stir in the garlic, ginger and garam masala and cook for a minute.\n' +
      '3. Add the chopped tomatoes and chickpeas with a splash of water and simmer for 10 minutes. Stir in the Greek yoghurt off the heat.\n' +
      '4. Return the paneer, fold the spinach through to wilt, season and serve with rice.',
    rawLines: [
      { rawName: 'Paneer', rawMeasure: '400g' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Greek yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spinach and feta protein frittata',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Soften the onion in olive oil in an ovenproof frying pan for 6 minutes, then add the spinach to wilt.\n' +
      '2. Beat the eggs with seasoning and pour over the vegetables. Crumble the feta on top.\n' +
      '3. Cook on the hob for 3–4 minutes until the edges set, then transfer to the oven for 12–15 minutes until just firm.\n' +
      '4. Cool slightly, cut into wedges and serve with a green salad.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halloumi and lentil traybake',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the mixed peppers, red onion and courgette with olive oil and seasoning, and roast for 20 minutes.\n' +
      '2. Stir the lentils and chopped tomatoes through the roasted vegetables and return to the oven for 5 minutes.\n' +
      '3. Slice the feta-style halloumi (use paneer or feta if preferred) and lay over the top, then roast for a final 8–10 minutes until golden.\n' +
      '4. Scatter with parsley and squeeze over the lemon to serve.',
    rawLines: [
      { rawName: 'Paneer', rawMeasure: '250g' },
      { rawName: 'Lentils', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek yoghurt protein pancakes',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Vegetarian'],
    instructions:
      '1. Whisk the eggs with the Greek yoghurt, then fold in the self-raising flour, oats and a pinch of salt to a thick batter.\n' +
      '2. Heat a non-stick pan with a little butter and drop in spoonfuls of batter.\n' +
      '3. Cook for 2 minutes until bubbles form, then flip and cook for another minute until golden.\n' +
      '4. Stack and serve with extra Greek yoghurt, berries and a drizzle of honey.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Greek yoghurt', rawMeasure: '250g' },
      { rawName: 'Self-raising flour', rawMeasure: '100g' },
      { rawName: 'Oats', rawMeasure: '40g' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Butter', rawMeasure: '10g' },
      { rawName: 'Salt', rawMeasure: 'pinch' },
    ],
  },
  {
    title: 'Baked eggs in tomato and bean sauce',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'Middle Eastern',
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the olive oil in a wide ovenproof pan and soften the onion and mixed peppers for 8 minutes. Stir in the garlic, cumin and smoked paprika.\n' +
      '2. Add the chopped tomatoes and cannellini beans, season and simmer for 10 minutes until thick.\n' +
      '3. Make four wells in the sauce and crack an egg into each. Cover and cook gently for 6–8 minutes until the whites are set.\n' +
      '4. Scatter with coriander and crumbled feta and serve from the pan.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 x 400g tins' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cottage cheese and berry protein bowl',
    servingsBase: 1,
    totalTimeMinutes: 5,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Spoon the cream cheese and Greek yoghurt into a bowl and stir together until smooth.\n' +
      '2. Top with the mixed berries and banana slices.\n' +
      '3. Scatter over the almonds and a sprinkle of oats.\n' +
      '4. Drizzle with honey and serve straight away.',
    rawLines: [
      { rawName: 'Greek yoghurt', rawMeasure: '200g' },
      { rawName: 'Cream cheese', rawMeasure: '60g' },
      { rawName: 'Frozen mixed berries', rawMeasure: '100g' },
      { rawName: 'Banana', rawMeasure: '1' },
      { rawName: 'Almonds', rawMeasure: '20g' },
      { rawName: 'Oats', rawMeasure: '20g' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Tofu and edamame stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['High-protein', 'Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Press the tofu, cut into cubes and toss with the cornflour. Fry in the sesame oil until golden and crisp, then set aside.\n' +
      '2. Stir-fry the broccoli, mixed peppers, garlic and ginger for 4 minutes until just tender.\n' +
      '3. Add the soya beans and toss to heat through.\n' +
      '4. Return the tofu, pour in the soy sauce and a splash of water, toss to coat and serve over rice.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g, firm' },
      { rawName: 'Soya beans', rawMeasure: '200g, shelled' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
    ],
  },
  {
    title: 'Tempeh and lentil bolognese',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['High-protein', 'Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Crumble the tempeh and fry in the olive oil until golden. Set aside.\n' +
      '2. Soften the onion, carrot and celery for 10 minutes, then stir in the garlic and tomato purée.\n' +
      '3. Return the tempeh, add the lentils, chopped tomatoes and a splash of water, season and simmer for 20 minutes.\n' +
      '4. Serve over spaghetti with basil scattered over.',
    rawLines: [
      { rawName: 'Tempeh', rawMeasure: '300g' },
      { rawName: 'Lentils', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 x 400g tins' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Spaghetti', rawMeasure: '320g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea and quinoa protein salad',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['High-protein', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Rinse the quinoa and simmer in salted water for 12–15 minutes until tender. Drain and cool.\n' +
      '2. Tip the chickpeas into a bowl with the quinoa, cucumber, cherry tomatoes and red onion.\n' +
      '3. Whisk the olive oil with the lemon juice and a little cumin, then toss through.\n' +
      '4. Fold in the parsley, season well and serve.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Quinoa', rawMeasure: '120g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Black bean and tofu burrito bowl',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['High-protein', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Press the tofu, cut into cubes, toss with the smoked paprika and cumin and fry in the vegetable oil until golden.\n' +
      '2. Warm the black beans with the garlic and a splash of water, crushing a few to thicken, then season.\n' +
      '3. Cook the rice until tender and divide between bowls.\n' +
      '4. Top with the tofu, beans, sweetcorn, avocado and a scatter of coriander, then squeeze over the lime.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g, firm' },
      { rawName: 'Black beans', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Brown rice', rawMeasure: '250g' },
      { rawName: 'Sweetcorn', rawMeasure: '200g' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Red lentil and spinach dhal',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the onion in the vegetable oil for 8 minutes, then stir in the garlic, ginger, cumin, turmeric and curry powder.\n' +
      '2. Add the lentils, chopped tomatoes and enough water to cover, then simmer for 20–25 minutes until the lentils collapse and thicken.\n' +
      '3. Stir the spinach through to wilt and season well.\n' +
      '4. Scatter with coriander and serve with rice or naan.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '300g red split lentils' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Marinated tofu poke-style bowl',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: ['High-protein', 'Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Cube the marinated tofu and toss with the soy sauce, sesame oil and a little grated ginger.\n' +
      '2. Cook the sushi rice until tender, then cool slightly and divide between bowls.\n' +
      '3. Top with the tofu, edamame (soya beans), cucumber, avocado and shredded carrot.\n' +
      '4. Scatter with sesame seeds and spring onion and squeeze over the lime.',
    rawLines: [
      { rawName: 'Marinated tofu', rawMeasure: '400g' },
      { rawName: 'Sushi rice', rawMeasure: '200g' },
      { rawName: 'Soya beans', rawMeasure: '150g, shelled' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Ginger', rawMeasure: '1cm piece' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Three-bean protein chilli',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['High-protein', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the onion and mixed peppers in the olive oil for 8 minutes, then stir in the garlic, cumin, smoked paprika and chilli powder.\n' +
      '2. Add the kidney beans, black beans, cannellini beans and chopped tomatoes with a splash of water. Season.\n' +
      '3. Simmer for 25 minutes until thick and rich, mashing some beans against the pan to thicken.\n' +
      '4. Scatter with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Kidney beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Black beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 x 400g tins' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Brown rice', rawMeasure: '250g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Egg white and oat protein omelette',
    servingsBase: 1,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Beat the eggs with the egg whites and a splash of milk, then season.\n' +
      '2. Melt the butter in a non-stick pan and pour in the eggs, swirling to cover the base.\n' +
      '3. As the omelette sets, scatter over the spinach and grated cheddar.\n' +
      '4. Fold over and slide onto a plate; serve with cherry tomatoes.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Egg white', rawMeasure: '4' },
      { rawName: 'Cheddar cheese', rawMeasure: '40g' },
      { rawName: 'Spinach', rawMeasure: '50g' },
      { rawName: 'Cherry tomato', rawMeasure: '80g' },
      { rawName: 'Milk', rawMeasure: '1 tbsp' },
      { rawName: 'Butter', rawMeasure: '10g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── More poultry & meat variety ───────────────────────────────────────────
  {
    title: 'Chicken and lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the onion, carrot and celery in the olive oil for 10 minutes, then stir in the garlic.\n' +
      '2. Add the diced chicken and cook until it turns opaque.\n' +
      '3. Tip in the lentils and stock, bring to a simmer and cook for 20 minutes until the lentils are tender.\n' +
      '4. Season well, stir through the parsley and serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '400g, diced' },
      { rawName: 'Lentils', rawMeasure: '200g dried red lentils' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1.2 litres' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cajun chicken and rice one-pot',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Toss the diced chicken with the Cajun seasoning. Brown in the olive oil in a large pan, then lift out.\n' +
      '2. Soften the onion and mixed peppers for 6 minutes, then stir in the garlic and rice.\n' +
      '3. Return the chicken, pour in the chopped tomatoes and stock, and add the kidney beans. Season.\n' +
      '4. Cover and simmer for 20 minutes until the rice is tender and the liquid absorbed. Rest, then fluff and serve.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g, diced' },
      { rawName: 'Basmati rice', rawMeasure: '250g' },
      { rawName: 'Kidney beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cajun', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Honey-mustard chicken with green beans',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Whisk the honey, mustard, garlic and olive oil together.\n' +
      '2. Coat the chicken breasts in the glaze and sit in a roasting tin. Roast for 22–25 minutes, basting once, until cooked through and sticky.\n' +
      '3. Boil or steam the green beans for 4 minutes until just tender, then toss with a little butter.\n' +
      '4. Slice the chicken and serve with the green beans and pan juices.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4 (about 600g)' },
      { rawName: 'Green beans', rawMeasure: '300g' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Mustard', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey burger with halloumi',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein'],
    instructions:
      '1. Mix the turkey mince with the grated onion, garlic, oregano and seasoning, then shape into four patties.\n' +
      '2. Heat the olive oil in a pan and cook the burgers for 5–6 minutes a side until cooked through.\n' +
      '3. Fry the sliced paneer for a minute a side until golden.\n' +
      '4. Build each burger in a bun with lettuce, tomato, the paneer slice and a little mayonnaise.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '600g' },
      { rawName: 'Paneer', rawMeasure: '150g' },
      { rawName: 'Burger bun', rawMeasure: '4' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Mayonnaise', rawMeasure: '2 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken fajita protein bowl',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Toss the sliced chicken with the fajita seasoning and a little olive oil.\n' +
      '2. Heat a large pan and cook the chicken over a high heat until charred and cooked through. Lift out.\n' +
      '3. Stir-fry the mixed peppers and onion in the same pan until softened and lightly charred.\n' +
      '4. Cook the rice and divide between bowls; top with the chicken, peppers, black beans, avocado and a spoon of soured cream.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g, sliced' },
      { rawName: 'Black beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Mixed peppers', rawMeasure: '3' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Fajita seasoning', rawMeasure: '2 tbsp' },
      { rawName: 'Brown rice', rawMeasure: '250g' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Soured cream', rawMeasure: '4 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork chops with cannellini beans and kale',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Season the pork chops well. Heat the olive oil in a large pan and cook for 4–5 minutes a side until golden and cooked through. Rest.\n' +
      '2. In the same pan soften the garlic, then add the cannellini beans with a splash of stock and warm through, crushing a few to thicken.\n' +
      '3. Stir in the kale and cook until just wilted; season.\n' +
      '4. Serve the chops over the beans and kale with the pan juices spooned over.',
    rawLines: [
      { rawName: 'Pork chop', rawMeasure: '4' },
      { rawName: 'Cannellini beans', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Kale', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef and lentil cottage pie',
    servingsBase: 6,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Brown the minced beef in a large pan, then lift out, leaving the fat behind.\n' +
      '2. Soften the onion, carrot and celery for 10 minutes, then stir in the garlic and tomato purée.\n' +
      '3. Return the beef, add the lentils, stock and Worcestershire sauce, season and simmer for 25 minutes until thick.\n' +
      '4. Heat the oven to 200°C (fan 180°C). Boil the potatoes until tender, mash with the butter and milk, spoon over the filling and bake for 25–30 minutes until golden.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '600g' },
      { rawName: 'Lentils', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
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
    title: 'Lamb and butter bean stew',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Season the diced lamb shoulder and brown in the olive oil in a casserole. Lift out.\n' +
      '2. Soften the onion, carrot and celery for 10 minutes, then stir in the garlic and tomato purée.\n' +
      '3. Return the lamb, add the chopped tomatoes, stock and rosemary, cover and braise for 1½ hours until tender.\n' +
      '4. Stir in the cannellini beans and cook for a final 20 minutes; scatter with parsley to serve.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '700g, diced' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Rosemary', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and egg ramen-style noodle bowl',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Poach the chicken breasts in the stock for 12–15 minutes until cooked through. Lift out, slice, and keep the broth warm with the soy sauce, garlic and ginger.\n' +
      '2. Soft-boil the eggs for 6½ minutes, then cool, peel and halve.\n' +
      '3. Cook the noodles to packet timing and divide between two deep bowls. Ladle over the hot broth.\n' +
      '4. Top with the sliced chicken, halved eggs, pak choi and spring onion.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2 (about 350g)' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Noodles', rawMeasure: '150g' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
    ],
  },
  {
    title: 'High-protein steak burrito',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['High-protein'],
    instructions:
      '1. Season the skirt steak and sear in a hot pan with the olive oil for 2–3 minutes a side. Rest, then slice thinly across the grain.\n' +
      '2. Warm the black beans with the cumin and a splash of water, then season.\n' +
      '3. Cook the rice until tender.\n' +
      '4. Fill each tortilla wrap with rice, beans, sliced steak, avocado, soured cream and a little salsa, then roll up tightly.',
    rawLines: [
      { rawName: 'Skirt steak', rawMeasure: '500g' },
      { rawName: 'Black beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Brown rice', rawMeasure: '200g' },
      { rawName: 'Tortilla wrap', rawMeasure: '4 large' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Soured cream', rawMeasure: '4 tbsp' },
      { rawName: 'Salsa', rawMeasure: '4 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and bean minestrone',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Soften the onion, carrot and celery in the olive oil for 10 minutes, then stir in the garlic.\n' +
      '2. Add the diced chicken and cook until opaque, then pour in the chopped tomatoes and stock.\n' +
      '3. Add the cannellini beans and pasta and simmer for 12–15 minutes until the pasta is tender.\n' +
      '4. Stir the spinach through to wilt, season and finish with parmesan.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '400g, diced' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Pasta', rawMeasure: '150g small shapes' },
      { rawName: 'Spinach', rawMeasure: '80g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parmesan', rawMeasure: '30g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked salmon and egg protein muffins',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and grease a muffin tin well.\n' +
      '2. Beat the eggs with the cream cheese and seasoning until smooth, then stir in the chopped smoked salmon, spinach and chives.\n' +
      '3. Divide between the muffin holes.\n' +
      '4. Bake for 18–20 minutes until risen and just set. Cool slightly before turning out.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Smoked salmon', rawMeasure: '120g' },
      { rawName: 'Cream cheese', rawMeasure: '60g' },
      { rawName: 'Spinach', rawMeasure: '60g' },
      { rawName: 'Chives', rawMeasure: 'small handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and quinoa stuffed peppers',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the mixed peppers, remove the seeds and sit in a roasting tin.\n' +
      '2. Cook the quinoa until tender. Brown the chicken mince (use diced chicken if preferred) with the onion, garlic, cumin and smoked paprika.\n' +
      '3. Stir the quinoa and chopped tomatoes through the chicken, season, and spoon into the pepper halves.\n' +
      '4. Top with grated cheddar and bake for 25–30 minutes until the peppers are tender and the cheese golden.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '400g, minced or finely diced' },
      { rawName: 'Quinoa', rawMeasure: '120g' },
      { rawName: 'Mixed peppers', rawMeasure: '4 large' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and tofu laksa-style noodles',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['High-protein', 'Pescatarian', 'Dairy-free'],
    instructions:
      '1. Fry the Thai red curry paste in the coconut oil for a minute, then pour in the coconut milk and stock and bring to a simmer.\n' +
      '2. Add the cubed tofu and simmer for 5 minutes, then add the prawns and cook until pink.\n' +
      '3. Stir in the pak choi and cook until just wilted; season with the fish sauce and lime.\n' +
      '4. Divide cooked noodles between bowls and ladle over the laksa broth, prawns and tofu.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '250g' },
      { rawName: 'Tofu', rawMeasure: '250g, firm' },
      { rawName: 'Noodles', rawMeasure: '200g' },
      { rawName: 'Coconut milk', rawMeasure: '1 x 400ml tin' },
      { rawName: 'Thai red curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Coconut oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Beef stir-fry with peppers and cashews',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Slice the beef steak thinly across the grain and toss with the cornflour and a little soy sauce.\n' +
      '2. Heat the sesame oil in a wok and stir-fry the beef in batches until browned. Set aside.\n' +
      '3. Stir-fry the mixed peppers, garlic and ginger for 3–4 minutes, then add the cashews.\n' +
      '4. Return the beef, add the remaining soy and the oyster sauce, toss until glossy and serve over rice.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '500g' },
      { rawName: 'Mixed peppers', rawMeasure: '3' },
      { rawName: 'Cashews', rawMeasure: '60g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Oyster sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
    ],
  },
  {
    title: 'Overnight protein oats with Greek yoghurt',
    servingsBase: 1,
    totalTimeMinutes: 5,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Vegetarian'],
    instructions:
      '1. Stir the oats together with the Greek yoghurt and milk in a jar or bowl.\n' +
      '2. Mix in the peanut butter and a little honey.\n' +
      '3. Cover and chill overnight so the oats soften.\n' +
      '4. In the morning, top with the banana, berries and a scatter of almonds.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '60g' },
      { rawName: 'Greek yoghurt', rawMeasure: '200g' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Peanut butter', rawMeasure: '1 tbsp' },
      { rawName: 'Banana', rawMeasure: '1' },
      { rawName: 'Frozen mixed berries', rawMeasure: '80g' },
      { rawName: 'Almonds', rawMeasure: '15g' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Chicken, bacon and bean traybake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the chicken thighs and bacon lardons with olive oil, garlic and thyme in a roasting tin.\n' +
      '2. Roast for 20 minutes until the chicken is browning.\n' +
      '3. Stir in the cannellini beans and chopped tomatoes, season, and return to the oven for 15 minutes.\n' +
      '4. Scatter with parsley and serve straight from the tin.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Bacon lardon', rawMeasure: '120g' },
      { rawName: 'Cannellini beans', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Thyme', rawMeasure: '1 tbsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Salmon and quinoa protein bowl',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Rinse the quinoa and simmer in salted water for 12–15 minutes until tender. Drain.\n' +
      '2. Season the salmon fillets and pan-fry skin-side down in the olive oil for 4 minutes, then flip and cook for 2 minutes more.\n' +
      '3. Toss the quinoa with the cucumber, cherry tomatoes, avocado and rocket, dressed with lemon and oil.\n' +
      '4. Flake or set the salmon on top and serve.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2 (about 130g each)' },
      { rawName: 'Quinoa', rawMeasure: '120g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Rocket', rawMeasure: '50g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lentil and paneer protein curry',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Fry the cubed paneer in the vegetable oil until golden, then lift out.\n' +
      '2. Soften the onion for 8 minutes, then stir in the garlic, ginger, curry powder and turmeric.\n' +
      '3. Add the lentils, chopped tomatoes and enough water to cover, and simmer for 20 minutes until thick.\n' +
      '4. Return the paneer, stir in the spinach to wilt and the Greek yoghurt off the heat, then season and serve with rice.',
    rawLines: [
      { rawName: 'Paneer', rawMeasure: '300g' },
      { rawName: 'Lentils', rawMeasure: '200g red split lentils' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Greek yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cottage pie-topped baked sweet potato with chicken',
    servingsBase: 2,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the sweet potatoes and bake for 40–45 minutes until soft.\n' +
      '2. Meanwhile, brown the chicken mince (or finely diced chicken) with the onion, garlic and smoked paprika.\n' +
      '3. Stir in the chopped tomatoes and kidney beans, season and simmer for 15 minutes.\n' +
      '4. Split the sweet potatoes, pile in the chicken filling, top with grated cheddar and a spoon of Greek yoghurt.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '300g, minced or finely diced' },
      { rawName: 'Sweet potato', rawMeasure: '2 large' },
      { rawName: 'Kidney beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Cheddar cheese', rawMeasure: '60g' },
      { rawName: 'Greek yoghurt', rawMeasure: '2 tbsp' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna and egg protein jacket potato',
    servingsBase: 2,
    totalTimeMinutes: 60,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes and bake for 50–60 minutes until crisp outside and fluffy within.\n' +
      '2. Boil the eggs for 8 minutes, then cool, peel and chop.\n' +
      '3. Mix the drained tuna with the mayonnaise, sweetcorn, chopped egg and seasoning.\n' +
      '4. Split the potatoes, fluff the insides and pile in the tuna mixture; finish with chives.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '2 large baking potatoes' },
      { rawName: 'Tuna', rawMeasure: '2 x 145g tins' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Sweetcorn', rawMeasure: '100g' },
      { rawName: 'Mayonnaise', rawMeasure: '2 tbsp' },
      { rawName: 'Chives', rawMeasure: 'small handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek-style chicken and feta traybake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the chicken thighs with the mixed peppers, red onion, garlic, oregano, olive oil and seasoning in a roasting tin.\n' +
      '2. Roast for 25 minutes until the chicken is browning and the vegetables soften.\n' +
      '3. Scatter over the cherry tomatoes and crumble the feta on top, then return to the oven for 10 minutes.\n' +
      '4. Squeeze over the lemon and scatter with parsley to serve.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Soya bean and tofu protein noodle salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Thai',
    dietLabels: ['High-protein', 'Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Press the tofu, cut into cubes and fry in the sesame oil until golden and crisp.\n' +
      '2. Cook the noodles to packet timing, drain and rinse under cold water.\n' +
      '3. Whisk the soy sauce, lime juice and a little grated ginger to make a dressing.\n' +
      '4. Toss the noodles with the soya beans, cucumber, carrot, spring onion and dressing, then top with the crisp tofu and sesame seeds.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '300g, firm' },
      { rawName: 'Soya beans', rawMeasure: '150g, shelled' },
      { rawName: 'Noodles', rawMeasure: '150g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Ginger', rawMeasure: '1cm piece' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Chicken and cottage cheese protein wrap',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['High-protein'],
    instructions:
      '1. Season the chicken breasts and griddle in the olive oil for 5–6 minutes a side until cooked through. Rest, then slice.\n' +
      '2. Mix the cream cheese with the chives and a squeeze of lemon and season.\n' +
      '3. Spread the cream cheese over the tortilla wraps and lay over the lettuce and tomato.\n' +
      '4. Add the sliced chicken, roll up tightly and cut in half to serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2 (about 350g)' },
      { rawName: 'Cream cheese', rawMeasure: '100g' },
      { rawName: 'Tortilla wrap', rawMeasure: '2 large' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Chives', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked feta, chickpea and egg brunch',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'Mediterranean',
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Tip the chickpeas, cherry tomatoes, garlic and olive oil into a baking dish and roast for 15 minutes.\n' +
      '2. Crumble in the feta and stir gently, then make four wells and crack in the eggs.\n' +
      '3. Return to the oven for 8–10 minutes until the whites are just set.\n' +
      '4. Scatter with parsley and a pinch of chilli flakes and serve with toast.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Cherry tomato', rawMeasure: '250g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey and quinoa power meatballs',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Cook the quinoa until tender and cool slightly. Mix half of it with the turkey mince, egg, garlic, oregano and seasoning, then roll into balls.\n' +
      '2. Brown the meatballs in the olive oil, then lift out.\n' +
      '3. Soften the onion, add the passata and remaining quinoa, season and simmer for 10 minutes.\n' +
      '4. Return the meatballs and simmer for 15 minutes until cooked through; scatter with parmesan and basil.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Quinoa', rawMeasure: '100g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Parmesan', rawMeasure: '30g' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cod, prawn and bean cioppino-style stew',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the onion and garlic in the olive oil for 6 minutes, then stir in the tomato purée and a pinch of chilli flakes.\n' +
      '2. Pour in the chopped tomatoes and stock, add the cannellini beans and simmer for 10 minutes.\n' +
      '3. Add the white fish in chunks and the prawns and simmer gently for 6–8 minutes until just cooked.\n' +
      '4. Stir through the parsley, season and serve with crusty bread.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '400g' },
      { rawName: 'Prawns', rawMeasure: '200g' },
      { rawName: 'Cannellini beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'High-protein chicken Cobb salad',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'American',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Season the chicken breasts and griddle in the olive oil for 5–6 minutes a side until cooked through. Rest, then slice.\n' +
      '2. Boil the eggs for 8 minutes, then cool, peel and halve. Fry the bacon lardons until crisp.\n' +
      '3. Arrange the lettuce, cherry tomatoes, avocado, chicken, egg and bacon in rows on plates.\n' +
      '4. Whisk the olive oil with lemon juice and seasoning, drizzle over and finish with crumbled feta.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2 (about 350g)' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Bacon lardon', rawMeasure: '80g' },
      { rawName: 'Feta', rawMeasure: '60g' },
      { rawName: 'Lettuce', rawMeasure: '1 head' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
]
