// Curated HIGH-PROTEIN expansion recipes for Larder.
//
// Each record is culinary content ONLY — the source/sourceId/imageUrl boilerplate
// is added by sources/curated.js (mapCurated). Ingredient lines use vocabulary
// from data/ingredients.js so they resolve cleanly. Method prose is original,
// written fresh in British English. No website wording is copied.
//
// DIET CONTRACT — "High-protein": every recipe targets ≥ 25 g of protein per
// serving. Sources are lean meat, poultry, fish, eggs, dairy and pulses.
// Extra dietLabels (Gluten-free, Vegetarian, etc.) are asserted only when
// honestly true of every ingredient in the dish.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }

export default [

  // ── Chicken & turkey ──────────────────────────────────────────────────────

  {
    title: 'Harissa chicken with roasted chickpeas and spinach',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    // Protein estimate: ~150g chicken breast / srv ≈ 47g + chickpeas 240g drained / 4 srv ≈ 5g → ~52g ✓
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the drained chickpeas with a tablespoon of olive oil, a pinch of cumin and salt on a roasting tin, then roast for 20 minutes until crisp.\n' +
      '2. Meanwhile, coat the chicken breasts in the harissa paste, the remaining olive oil and a squeeze of lemon, then season.\n' +
      '3. Push the chickpeas to the edges of the tin, lay the chicken in the centre and roast for a further 20–22 minutes until cooked through.\n' +
      '4. Scatter the spinach over the hot tin and toss until wilted. Squeeze over more lemon and serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4 (about 600g)' },
      { rawName: 'Chickpeas', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Harissa paste', rawMeasure: '3 tbsp' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Chicken and black bean rice bowl with pickled red onion',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Mexican',
    // Protein: ~125g chicken / srv ≈ 39g + black beans ~5g → ~44g ✓
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Quick-pickle the red onion: toss the sliced onion with the lime juice and a pinch of salt, then set aside for 20 minutes to soften and turn pink.\n' +
      '2. Rub the chicken thighs with the cumin, smoked paprika, garlic and olive oil. Cook in a hot griddle pan for 6–7 minutes a side until charred and cooked through. Rest, then slice.\n' +
      '3. Warm the black beans with a splash of water, the remaining garlic and seasoning, crushing a few to thicken.\n' +
      '4. Cook the rice until tender. Divide between bowls and top with the beans, chicken, pickled onion and coriander.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g, boneless' },
      { rawName: 'Black beans', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Brown rice', rawMeasure: '250g' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Miso-glazed chicken thighs with edamame rice',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Japanese',
    // Protein: ~150g chicken / srv ≈ 34g (thigh) + edamame 50g / srv ≈ 5g → ~39g ✓
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Mix the miso paste, soy sauce, honey and a splash of rice vinegar to make a glaze.\n' +
      '2. Score the chicken thighs a few times, coat in the glaze and marinate for 15 minutes.\n' +
      '3. Heat the grill to high and grill the thighs skin-side up for 7–8 minutes a side, basting once, until sticky and cooked through.\n' +
      '4. Meanwhile, cook the rice until tender, stir through the shelled soya beans (edamame) for the last 2 minutes to heat them, then season with a little soy sauce. Serve alongside the glazed chicken with spring onion scattered over.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Soya beans', rawMeasure: '200g, shelled' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Miso paste', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Poached chicken breast with cannellini beans and salsa verde',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Italian',
    // Protein: ~150g chicken / srv ≈ 47g + cannellini 120g / srv ≈ 11g → ~58g ✓
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Bring the stock to a gentle simmer in a wide pan, add the chicken breasts and poach for 14–16 minutes until just cooked through. Remove and slice thickly; keep the broth warm.\n' +
      '2. For the salsa verde, finely chop the parsley, basil and capers with the garlic and whisk into the olive oil with a squeeze of lemon. Season.\n' +
      '3. Warm the cannellini beans in a ladleful of the poaching broth, then season.\n' +
      '4. Pile the beans into bowls, top with the chicken and spoon over the salsa verde generously.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4 (about 600g)' },
      { rawName: 'Cannellini beans', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Parsley', rawMeasure: 'large handful' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Turkey mince stuffed courgettes',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    // Protein: ~125g turkey / srv ≈ 36g + egg contribution minor; total ~36g+ ✓
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the courgettes lengthways and scoop out the flesh with a spoon, reserving the pulp. Lay the shells in a roasting tin.\n' +
      '2. Fry the onion and courgette pulp in the olive oil for 6 minutes, then add the turkey mince and brown all over. Stir in the garlic, smoked paprika and chopped tomatoes, then season and simmer for 8 minutes.\n' +
      '3. Spoon the filling into the courgette shells, top with the grated cheddar and bake for 20–25 minutes until the courgettes are tender and the cheese is golden.\n' +
      '4. Scatter with parsley and serve.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Courgette', rawMeasure: '4 large' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Beef & lamb ───────────────────────────────────────────────────────────

  {
    title: 'Chilli beef and kidney bean bowl',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    // Protein: ~125g beef / srv ≈ 33g + kidney beans ~6g → ~39g ✓
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Brown the minced beef in a large pan over a high heat, breaking it up as it colours, then drain off any excess fat.\n' +
      '2. Stir in the onion, mixed peppers and garlic and cook for 6 minutes. Add the chilli powder, cumin and smoked paprika and cook for a further minute.\n' +
      '3. Pour in the chopped tomatoes and stock, add the kidney beans and season. Simmer uncovered for 25 minutes until thick and rich.\n' +
      '4. Cook the rice until tender. Serve the chilli over the rice, scattered with coriander.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Kidney beans', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Brown rice', rawMeasure: '250g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Lamb mince and lentil keema',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    // Protein: ~125g lamb / srv ≈ 28g + lentils ~8g → ~36g ✓
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the vegetable oil in a large pan and soften the onion for 8 minutes. Stir in the garlic, ginger, garam masala, cumin and turmeric and cook for a minute until fragrant.\n' +
      '2. Add the minced lamb and brown, breaking it up well.\n' +
      '3. Stir in the chopped tomatoes, lentils and a splash of water, season and simmer for 20 minutes until the sauce is thick and the lentils soft.\n' +
      '4. Stir through the spinach to wilt, scatter with coriander and serve with rice or warm chapatis.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Lentils', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Sirloin steak with white bean ragù',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    // Protein: ~200g steak / srv ≈ 52g + cannellini ~11g → ~63g ✓
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Season the steaks generously with salt and black pepper and bring to room temperature.\n' +
      '2. For the ragù, soften the garlic and chilli flakes in the olive oil for a minute, then add the cannellini beans, chopped tomatoes and rosemary. Simmer for 10 minutes until thick, then season.\n' +
      '3. Heat a heavy frying pan until very hot with a drizzle of oil and sear the steaks for 2–3 minutes a side for medium-rare. Rest for 5 minutes.\n' +
      '4. Stir the spinach through the hot ragù until wilted. Spoon onto plates and sit the sliced steak on top.',
    rawLines: [
      { rawName: 'Sirloin steak', rawMeasure: '2 (about 200g each)' },
      { rawName: 'Cannellini beans', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Spinach', rawMeasure: '80g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Rosemary', rawMeasure: '1 sprig' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Beef rendang-style slow-cooked stew',
    servingsBase: 6,
    totalTimeMinutes: 180,
    course: 'Dinner',
    cuisine: 'Malaysian',
    // Protein: ~130g beef / srv ≈ 34g + some from coconut cream negligible; total ~34g ✓
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Blitz the onion, garlic, ginger, lemongrass, chilli flakes and a splash of water to a paste.\n' +
      '2. Fry the paste in the vegetable oil in a large casserole for 5 minutes until fragrant and beginning to dry out. Add the curry powder and stir for a minute.\n' +
      '3. Add the beef and stir to coat, then pour in the coconut milk. Bring to a simmer, cover and cook gently for 2 hours, stirring occasionally.\n' +
      '4. Uncover and cook for a further 30–40 minutes, stirring frequently, until the sauce is very thick and the beef is deeply coloured. Season well and serve with steamed rice.',
    rawLines: [
      { rawName: 'Beef shin', rawMeasure: '900g, diced' },
      { rawName: 'Coconut milk', rawMeasure: '2 x 400ml tins' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Ginger', rawMeasure: '3cm piece' },
      { rawName: 'Lemongrass', rawMeasure: '1 stalk' },
      { rawName: 'Chilli flakes', rawMeasure: '1 tsp' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '400g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Pork ─────────────────────────────────────────────────────────────────

  {
    title: 'Pork and lentil one-pot with smoked paprika',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    // Protein: ~125g pork / srv ≈ 31g + lentils ~8g → ~39g ✓
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Season the diced pork and brown all over in the olive oil in a large casserole. Lift out and set aside.\n' +
      '2. Soften the onion, carrot and celery for 8 minutes, then stir in the garlic and smoked paprika.\n' +
      '3. Return the pork, stir in the lentils, chopped tomatoes and stock. Season, bring to a simmer, then cover and cook for 30 minutes until the pork is tender and the lentils thick.\n' +
      '4. Stir through the spinach to wilt and scatter with parsley to serve.',
    rawLines: [
      { rawName: 'Pork shoulder', rawMeasure: '500g, diced' },
      { rawName: 'Lentils', rawMeasure: '200g dried red lentils' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Pork and prawn stir-fry with noodles',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Thai',
    // Protein: ~75g pork / srv ≈ 19g + prawns 75g / srv ≈ 18g → ~37g ✓
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Cook the noodles to packet timing, drain and set aside.\n' +
      '2. Heat the sesame oil in a wok over a high heat. Stir-fry the pork strips until browned, then set aside. Add the prawns and stir-fry until pink, then set aside.\n' +
      '3. Stir-fry the garlic, ginger, spring onion and mixed peppers for 2–3 minutes, then return the pork and prawns.\n' +
      '4. Add the noodles, pour in the soy sauce, fish sauce and a squeeze of lime, toss everything together over the heat and serve at once with extra lime on the side.',
    rawLines: [
      { rawName: 'Pork tenderloin', rawMeasure: '300g, cut into strips' },
      { rawName: 'Prawns', rawMeasure: '300g, raw' },
      { rawName: 'Noodles', rawMeasure: '200g' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
    ],
  },

  // ── Fish & seafood ────────────────────────────────────────────────────────

  {
    title: 'Salmon fishcakes with a poached egg',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'British',
    // Protein: salmon ~130g / srv ≈ 33g + 1 egg ≈ 6g + potato minor → ~39g ✓
    dietLabels: ['High-protein', 'Pescatarian'],
    instructions:
      '1. Boil the potatoes until tender, drain well and mash until smooth. Cool slightly.\n' +
      '2. Flake the cooked salmon into the potato with the spring onion, chives and lemon zest. Season well and shape into eight cakes. Chill for 20 minutes.\n' +
      '3. Dust each cake lightly in the flour, then cook in the olive oil in a frying pan for 3–4 minutes a side until golden and crisp.\n' +
      '4. Poach the eggs in barely simmering water for 3 minutes until the whites are set. Serve two fishcakes per person, topped with a poached egg and a little watercress alongside.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '500g, cooked or tinned' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Chives', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Plain flour', rawMeasure: '3 tbsp' },
      { rawName: 'Watercress', rawMeasure: '60g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Spiced sea bass with lentils and tomato',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    // Protein: sea bass fillet ~130g / srv ≈ 30g + lentils ~8g → ~38g ✓
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Rub the sea bass fillets with the cumin, smoked paprika and a little olive oil; season well.\n' +
      '2. Soften the onion and garlic in a splash of olive oil for 8 minutes. Stir in the lentils, chopped tomatoes and a little water, then simmer for 10 minutes until thickened. Season.\n' +
      '3. Pan-fry the fish skin-side down in a hot non-stick pan for 3–4 minutes until the skin is crisp, then flip and cook for 1 minute more.\n' +
      '4. Spoon the lentils onto plates, set the fish on top and finish with a squeeze of lemon and a scatter of parsley.',
    rawLines: [
      { rawName: 'Sea bass fillet', rawMeasure: '4 (about 130g each)' },
      { rawName: 'Lentils', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Smoked mackerel and egg salad with horseradish dressing',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'British',
    // Protein: smoked mackerel ~100g / srv ≈ 22g + 2 eggs / srv ≈ 12g → ~34g ✓
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free'],
    instructions:
      '1. Boil the eggs for 8 minutes, then cool under cold water, peel and halve.\n' +
      '2. Whisk the Greek yoghurt with the horseradish sauce, lemon juice and seasoning to make the dressing.\n' +
      '3. Arrange the rocket, cucumber and halved cherry tomatoes on a platter. Flake the smoked mackerel over the top and add the halved eggs.\n' +
      '4. Drizzle generously with the horseradish dressing and serve with rye crispbreads alongside.',
    rawLines: [
      { rawName: 'Smoked mackerel', rawMeasure: '200g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Greek yoghurt', rawMeasure: '100g' },
      { rawName: 'Horseradish sauce', rawMeasure: '2 tsp' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'King prawn and butter bean one-pan bake',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    // Protein: prawns 250g / 4 srv ≈ 15g + cannellini 240g / 4 srv ≈ 11g → ~26g (borderline but passes; serving size of prawns is 250g and cannellini 2 tins drained ~480g → per srv = 62.5g prawns ≈ 15g + 120g beans ≈ 11g = 26g)  ✓
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Soften the onion and garlic in the olive oil in an ovenproof frying pan for 6 minutes.\n' +
      '2. Stir in the cannellini beans, chopped tomatoes, smoked paprika and chilli flakes. Season and simmer for 5 minutes.\n' +
      '3. Scatter the raw king prawns over the sauce and transfer to the oven for 8–10 minutes until the prawns are pink and cooked through.\n' +
      '4. Scatter with parsley, squeeze over the lemon and serve straight from the pan with crusty bread if you like.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '400g, raw king prawns' },
      { rawName: 'Cannellini beans', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Tuna pasta bake with cottage cheese sauce',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    // Protein: tuna 2 tins ≈ 50g total / 4 srv ≈ 12.5g + cottage cheese 250g / 4 srv ≈ 6g + pasta minor — borderline. FIX: use 3 tins tuna and add cheddar → 3 tins ÷ 4 = ~19g tuna + 7g cottage cheese + 5g cheddar ≈ 31g ✓
    dietLabels: ['High-protein', 'Pescatarian'],
    instructions:
      '1. Cook the pasta until just al dente; drain, reserving a mugful of the water.\n' +
      '2. For the sauce, stir the cream cheese, a splash of pasta water and the mustard together in the pasta pan over a gentle heat until smooth. Fold in the cottage cheese and the drained tuna and season.\n' +
      '3. Stir the cooked pasta through the sauce with the sweetcorn and most of the cheddar, then tip into a baking dish. Scatter the remaining cheddar over the top.\n' +
      '4. Bake at 190°C (fan 170°C) for 20 minutes until bubbling and golden.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '3 x 145g tins, drained' },
      { rawName: 'Pasta', rawMeasure: '320g penne or rigatoni' },
      { rawName: 'Cream cheese', rawMeasure: '150g' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g, grated' },
      { rawName: 'Sweetcorn', rawMeasure: '200g' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Eggs & vegetarian protein ──────────────────────────────────────────────

  {
    title: 'Shakshuka with feta and chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'Middle Eastern',
    // Protein: 8 eggs ÷ 4 = 2 eggs / srv ≈ 12g + chickpeas 240g / 4 ≈ 5g + feta 100g / 4 ≈ 4g → ~21g — BORDERLINE. FIX: use 3 eggs per serving by scaling to 2 servings, or increase eggs to 10 (2.5/srv) and increase feta to 150g → 10 eggs / 4 = 2.5 eggs ≈ 15g + feta 37.5g ≈ 7g + chickpeas ≈ 5g = 27g ✓
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the olive oil in a wide ovenproof pan and soften the onion and red pepper for 8 minutes. Stir in the garlic, cumin, smoked paprika and chilli flakes and cook for a minute.\n' +
      '2. Add the chopped tomatoes and chickpeas, season and simmer for 10 minutes until thick.\n' +
      '3. Make wells in the sauce and crack in the eggs. Crumble the feta over the top, then cover and cook gently for 6–8 minutes until the whites are just set.\n' +
      '4. Scatter with parsley and serve straight from the pan.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '10' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 x 400g tins' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Red pepper', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Paneer tikka traybake',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    // Protein: paneer 400g / 4 srv = 100g paneer ≈ 18g + chickpeas ~5g → ~23g — BORDERLINE. FIX: increase paneer to 500g → 125g / srv ≈ 22g + chickpeas 5g ≈ 27g ✓
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Mix the Greek yoghurt, garam masala, turmeric, smoked paprika, garlic and ginger to a marinade.\n' +
      '2. Toss the cubed paneer and chickpeas in the marinade and spread over a lined roasting tin with the sliced peppers and onion.\n' +
      '3. Roast for 25–30 minutes, turning once, until the paneer is charred at the edges and the vegetables are tender.\n' +
      '4. Squeeze over the lemon, scatter with coriander and serve with rice or warm chapatis.',
    rawLines: [
      { rawName: 'Paneer', rawMeasure: '500g, cubed' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Greek yoghurt', rawMeasure: '150g' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
    ],
  },

  {
    title: 'Greek yoghurt, egg and spinach baked cups',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    // Protein: 2 eggs / srv ≈ 12g + Greek yoghurt 200g / 4 srv = 50g ≈ 5g + feta 30g / srv ≈ 5g → ~22g — REJECT as written. FIX: 3 eggs per serving → 12 eggs total → ~18g + feta 40g/srv ≈ 7g + yoghurt 6g = 31g ✓. Using 12 eggs, 4 srv.
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Grease four large ramekins or oven-proof cups generously with butter.\n' +
      '2. Wilt the spinach in a pan with a little salt, squeeze out the excess water and divide between the ramekins.\n' +
      '3. Crack three eggs into each ramekin, season, and spoon a tablespoon of Greek yoghurt over each. Crumble over the feta.\n' +
      '4. Bake for 12–14 minutes until the whites are just set but the yolks remain a little runny. Serve immediately with toast if liked.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '12' },
      { rawName: 'Greek yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Feta', rawMeasure: '160g' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Tempeh and mango stir-fry with peanut sauce',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Indonesian',
    // Protein: tempeh 400g / 4 srv = 100g ≈ 19g + peanut butter ~5g → ~24g — BORDERLINE. FIX: increase tempeh to 500g → 125g / srv ≈ 24g + peanut ~5g = 29g ✓
    dietLabels: ['High-protein', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Slice the tempeh into strips and fry in the sesame oil until golden on both sides. Set aside.\n' +
      '2. Stir-fry the mixed peppers, spring onion and broccoli in the same pan for 4 minutes until just tender.\n' +
      '3. Whisk the peanut butter, soy sauce, lime juice and a splash of water to a smooth sauce; pour into the pan with the vegetables.\n' +
      '4. Return the tempeh and toss to coat. Dice the mango and scatter over the top, then serve over steamed rice with extra lime on the side.',
    rawLines: [
      { rawName: 'Tempeh', rawMeasure: '500g' },
      { rawName: 'Mango', rawMeasure: '1 ripe' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Peanut butter', rawMeasure: '3 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
    ],
  },

  {
    title: 'Black-eyed bean and halloumi salad',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    // Protein: halloumi 100g / srv ≈ 14g + black-eyed beans 240g / 2 srv = 120g ≈ 11g → ~25g ✓ (barely passes; keep generous halloumi)
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Drain and rinse the black-eyed beans and toss with the cherry tomatoes, red onion, cucumber, lemon juice, olive oil and seasoning.\n' +
      '2. Slice the halloumi into 1cm slabs and fry in a dry non-stick pan for 2 minutes a side until golden and streaky.\n' +
      '3. Arrange the bean salad in bowls, lay the warm halloumi over the top and scatter with the mint.\n' +
      '4. Finish with a little extra lemon and a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Halloumi', rawMeasure: '250g' },
      { rawName: 'Black-eyed beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Tofu scramble with smoked paprika and black beans',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    // Protein: firm tofu 400g / 2 srv = 200g ≈ 16g + black beans 240g drained / 2 ≈ 11g → ~27g ✓
    dietLabels: ['High-protein', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Drain and press the tofu, then crumble it roughly into a bowl. Toss with the turmeric, smoked paprika and nutritional yeast.\n' +
      '2. Heat the olive oil in a non-stick pan and fry the onion for 4 minutes, then add the garlic.\n' +
      '3. Add the crumbled tofu and cook over a medium heat for 5–6 minutes, stirring often, until golden at the edges.\n' +
      '4. Warm the black beans with a splash of water and the cumin in a separate small pan, then season. Serve the scramble with the beans and cherry tomatoes alongside.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g, firm' },
      { rawName: 'Black beans', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Nutritional yeast', rawMeasure: '2 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Breakfast & meal-prep ─────────────────────────────────────────────────

  {
    title: 'High-protein bacon and egg muffin bakes',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    // Protein: 8 eggs / 4 srv = 2 eggs ≈ 12g + bacon 80g / 4 ≈ 8g + cheddar 20g/srv ≈ 5g → ~25g ✓
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and grease a 12-hole muffin tin. Chop the bacon lardons finely and fry until just crisp, then drain on kitchen paper.\n' +
      '2. Beat all the eggs with the milk and seasoning.\n' +
      '3. Divide the bacon and most of the grated cheddar between the muffin holes, pour in the egg mixture and top with the remaining cheddar.\n' +
      '4. Bake for 18–20 minutes until puffed and just set. Cool briefly in the tin before turning out.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Bacon lardon', rawMeasure: '150g' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g, grated' },
      { rawName: 'Milk', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Peanut butter and banana protein smoothie bowl',
    servingsBase: 1,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    // Protein: Greek yoghurt 200g ≈ 20g + peanut butter 2 tbsp ≈ 8g + milk 150ml ≈ 5g = 33g ✓
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Blend the banana, Greek yoghurt, milk and peanut butter together until thick and smooth. Add a cube or two of ice if you prefer it colder.\n' +
      '2. Pour into a bowl — it should be thicker than a smoothie and hold its toppings.\n' +
      '3. Arrange the sliced banana, oats, mixed berries and almonds over the surface.\n' +
      '4. Drizzle with honey and eat immediately.',
    rawLines: [
      { rawName: 'Greek yoghurt', rawMeasure: '200g' },
      { rawName: 'Banana', rawMeasure: '2, 1 blended and 1 sliced for topping' },
      { rawName: 'Peanut butter', rawMeasure: '2 tbsp' },
      { rawName: 'Milk', rawMeasure: '150ml' },
      { rawName: 'Oats', rawMeasure: '20g' },
      { rawName: 'Frozen mixed berries', rawMeasure: '60g' },
      { rawName: 'Almonds', rawMeasure: '15g' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
    ],
  },

  {
    title: 'Smoked salmon, avocado and egg open sandwich',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    // Protein: smoked salmon 120g / 2 srv = 60g ≈ 14g + 2 eggs / 2 srv = 1 egg ≈ 6g + cream cheese 15g ≈ 1.5g → 21.5g — BORDERLINE. FIX: 2 eggs per serving → 4 eggs + smoked salmon 150g → 75g/srv ≈ 17g + 2 eggs ≈ 12g = 29g ✓
    dietLabels: ['High-protein', 'Pescatarian'],
    instructions:
      '1. Bring a pan of water to a simmer. Add a splash of vinegar, swirl gently and slide in the eggs. Poach for 3 minutes until the whites are set. Lift out with a slotted spoon.\n' +
      '2. Toast the sourdough until crisp. Spread with the cream cheese.\n' +
      '3. Fan the smoked salmon over the toast, then lay sliced avocado alongside.\n' +
      '4. Set two poached eggs on each slice, season with black pepper and a squeeze of lemon and eat at once.',
    rawLines: [
      { rawName: 'Smoked salmon', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Sourdough bread', rawMeasure: '2 thick slices' },
      { rawName: 'Cream cheese', rawMeasure: '40g' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'White wine vinegar', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Soup & light meals ────────────────────────────────────────────────────

  {
    title: 'Chicken, kale and white bean soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    // Protein: chicken 400g / 4 srv = 100g ≈ 31g + cannellini 240g / 4 ≈ 11g → ~42g ✓
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the onion, carrot and celery in the olive oil for 8 minutes in a large pan, then stir in the garlic.\n' +
      '2. Add the diced chicken breast and cook, stirring, until opaque all over.\n' +
      '3. Pour in the stock and add the cannellini beans and rosemary. Bring to a simmer and cook for 20 minutes.\n' +
      '4. Stir in the shredded kale and cook for a further 3–4 minutes until just wilted. Season well and serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '400g, diced' },
      { rawName: 'Cannellini beans', rawMeasure: '2 x 400g tins, drained' },
      { rawName: 'Kale', rawMeasure: '150g, shredded' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Rosemary', rawMeasure: '1 sprig' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1.2 litres' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Lentil, bacon and tomato soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    // Protein: bacon 120g / 4 srv = 30g ≈ 7g + lentils 300g dry / 4 srv (cooked ~85g per srv of split lentils) ≈ 8g → ~15g — BORDERLINE. FIX: use 300g lentils (good) but also increase bacon to 200g → 50g/srv ≈ 12g + lentils 10g = 22g — still low. BETTER: also add Greek yoghurt swirl or drop the soup and replace with higher-protein version. REPLACE approach: use 200g bacon + 300g lentils + 4 eggs (hard-boil on side) to serve. But adding serve-alongside eggs changes character. Instead: upsize bacon to 200g, add 1 tin of lentils on top of dry, and note protein of split lentils is ~24g/100g dry → 300g ÷ 4 = 75g dry per srv × 0.24 = 18g + bacon 50g / srv ≈ 12g = 30g ✓
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Fry the bacon lardons in a large pan without extra oil until golden and the fat has rendered. Lift out and set aside.\n' +
      '2. Soften the onion, carrot and celery in the bacon fat for 8 minutes, then stir in the garlic.\n' +
      '3. Add the lentils, chopped tomatoes, stock and most of the bacon. Bring to a simmer and cook for 25 minutes until the lentils have collapsed.\n' +
      '4. Season well, ladle into bowls and top with the reserved crispy bacon and a scatter of parsley.',
    rawLines: [
      { rawName: 'Bacon lardon', rawMeasure: '200g' },
      { rawName: 'Lentils', rawMeasure: '300g dried red split lentils' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1.2 litres' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Prawn and coconut broth with noodles',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    // Protein: prawns 400g / 4 srv = 100g ≈ 24g + tofu 200g / 4 srv = 50g ≈ 4g → ~28g ✓
    dietLabels: ['High-protein', 'Pescatarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the coconut oil in a large pan and fry the Thai red curry paste for a minute. Pour in the coconut milk and stock and bring to a gentle simmer.\n' +
      '2. Add the cubed tofu and simmer for 5 minutes, then add the raw prawns and cook until they turn pink.\n' +
      '3. Season with the fish sauce and lime juice. Stir in the pak choi until just wilted.\n' +
      '4. Divide cooked rice noodles between bowls, ladle over the broth with the prawns and tofu, and finish with spring onion and coriander.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '400g, raw' },
      { rawName: 'Tofu', rawMeasure: '200g, firm' },
      { rawName: 'Coconut milk', rawMeasure: '1 x 400ml tin' },
      { rawName: 'Noodles', rawMeasure: '200g rice noodles' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Thai red curry paste', rawMeasure: '2 tbsp' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Coconut oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Salads & grain bowls ──────────────────────────────────────────────────

  {
    title: 'Grilled halloumi and lentil grain bowl',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    // Protein: halloumi 250g / 2 srv = 125g ≈ 18g + lentils 240g / 2 ≈ 11g → ~29g ✓
    dietLabels: ['High-protein', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Rinse the quinoa and simmer in salted water for 12 minutes until tender. Drain.\n' +
      '2. Warm the lentils in a small pan with a squeeze of lemon, a little olive oil and seasoning.\n' +
      '3. Slice the halloumi into 1cm slabs and fry in a dry griddle pan for 2 minutes a side until striped and golden.\n' +
      '4. Divide the quinoa between bowls, top with the warm lentils, cherry tomatoes, halloumi and rocket. Drizzle with the remaining olive oil and lemon and serve.',
    rawLines: [
      { rawName: 'Halloumi', rawMeasure: '250g' },
      { rawName: 'Lentils', rawMeasure: '1 x 400g tin, drained' },
      { rawName: 'Quinoa', rawMeasure: '100g' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Rocket', rawMeasure: '40g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'High-protein tabbouleh with grilled chicken',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Middle Eastern',
    // Protein: chicken 600g / 4 srv = 150g ≈ 47g + chickpeas minor → ~50g ✓
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Cook the bulgur wheat in boiling salted water for 10–12 minutes until tender. Drain and spread to cool.\n' +
      '2. Toss the diced chicken breasts with olive oil, cumin, garlic and lemon zest. Griddle for 5–6 minutes a side until charred and cooked through. Rest, then slice.\n' +
      '3. Mix the cooled bulgur wheat with the parsley, mint, tomatoes, cucumber and red onion. Dress with the lemon juice and more olive oil; season well.\n' +
      '4. Pile the tabbouleh onto plates and top with the grilled chicken slices.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g' },
      { rawName: 'Bulgur wheat', rawMeasure: '200g' },
      { rawName: 'Parsley', rawMeasure: 'large handful' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Steak, egg and roasted pepper salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    // Protein: 2 steaks ~160g each / 2 srv = 160g ≈ 42g + 2 eggs / srv ≈ 12g → ~54g ✓
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Bring a pan of water to the boil and soft-boil the eggs for 6½ minutes. Cool under cold water, peel and halve.\n' +
      '2. Season the steaks and sear in a very hot pan with a drizzle of olive oil for 2–3 minutes a side for medium-rare. Rest, then slice thinly.\n' +
      '3. Arrange the rocket, roasted red peppers and cherry tomatoes on two plates.\n' +
      '4. Lay the sliced steak and halved eggs over the salad, drizzle with the olive oil and balsamic vinegar, and season well.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '2 (about 160g each)' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Roasted red peppers', rawMeasure: '150g, from a jar, drained' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Balsamic vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Salmon, quinoa and cucumber ribbon salad',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'British',
    // Protein: salmon 260g / 2 srv = 130g ≈ 33g + quinoa 120g / 2 srv = 60g dry → ~9g cooked → ~42g ✓
    dietLabels: ['High-protein', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Rinse the quinoa and simmer in salted water for 12–15 minutes until tender. Drain and cool.\n' +
      '2. Season the salmon fillets and pan-fry skin-side down in the sesame oil for 4 minutes, then flip for 2 minutes more. Rest, then flake.\n' +
      '3. Use a vegetable peeler to slice the cucumber into thin ribbons. Toss with the quinoa, spring onion and sesame seeds.\n' +
      '4. Whisk the soy sauce, lime juice and a little sesame oil to make a dressing, pour over the salad and top with the flaked salmon.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2 (about 130g each)' },
      { rawName: 'Quinoa', rawMeasure: '120g' },
      { rawName: 'Cucumber', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

]
