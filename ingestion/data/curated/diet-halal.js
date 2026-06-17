// Curated, fully-displayable HALAL recipes for Larder.
//
// This file IS the Halal per-diet floor: every record here strictly satisfies a
// Halal diet. The whole set EXCLUDES, without exception:
//   • pork and all pork derivatives (bacon, ham, lard, chorizo, prosciutto,
//     pancetta, gammon, black pudding, etc.)
//   • lard and other non-permitted animal fats
//   • gelatine of non-halal origin (we simply use none)
//   • alcohol in every form (wine, beer, cider, sherry, mirin, sake, rum,
//     brandy, stout, and wine/sherry vinegars) — including as a cooking liquid
//
// Permitted proteins used: chicken, lamb, beef, turkey, goat, fish/seafood,
// eggs, dairy, and plant proteins (chickpeas, lentils, beans, tofu, paneer).
// Where a classic dish would normally take wine/bacon/etc., the method here is
// an honestly halal version (e.g. stock + a splash of pomegranate molasses or
// lemon in place of wine), not a copied recipe.
//
// `dietLabels` carries the *additional* honest labels a dish also satisfies
// (Vegetarian, Vegan, Gluten-free, Dairy-free, High-protein, Mediterranean,
// Pescatarian) — "Halal" itself is implied by membership of this file. Labels
// are only applied when the resolved ingredient lines genuinely support them.
//
// Culinary-content shape only — sources/curated.js (mapCurated) adds the
// source/sourceId/imageUrl boilerplate and the generated SVG image. Ingredient
// lines use the canonical vocabulary in data/ingredients.js so they resolve
// cleanly. Method prose is original, written fresh in British English.

export default [
  // ── Levantine / Middle Eastern ────────────────────────────────────────────
  {
    title: 'Chicken shawarma wraps',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['High-protein'],
    instructions:
      '1. Slice the chicken thighs into thin strips and tip into a bowl. Add the yoghurt, garlic, cumin, coriander, paprika, turmeric, a squeeze of lemon, salt and pepper, then turn to coat. Leave to marinate for 20 minutes.\n' +
      '2. Heat a splash of olive oil in a large frying pan over a high heat and cook the chicken in batches for 4–5 minutes a side until deeply golden and cooked through. Rest for a few minutes, then slice any thick pieces.\n' +
      '3. Warm the pitta breads briefly in the dry pan until soft and puffed.\n' +
      '4. For the garlic sauce, stir a little crushed garlic and lemon into the remaining yoghurt with a pinch of salt.\n' +
      '5. Pile the chicken into the pittas with shredded lettuce, sliced tomato and red onion, drizzle generously with the garlic yoghurt and roll up tightly.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '700g, boneless' },
      { rawName: 'Greek yoghurt', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Pitta bread', rawMeasure: '4 large' },
      { rawName: 'Lettuce', rawMeasure: '¼ head' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1 small' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb kofta kebabs',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['High-protein'],
    instructions:
      '1. Put the minced lamb in a bowl with the grated onion, garlic, parsley, cumin, coriander, cinnamon, salt and pepper. Mix thoroughly with your hands for a couple of minutes until the mixture feels tacky and holds together.\n' +
      '2. Divide into eight and mould each piece firmly around a skewer into a long sausage shape. Chill for 15 minutes to set.\n' +
      '3. Heat a griddle or grill to high. Brush the koftas with a little olive oil and cook for 8–10 minutes, turning, until charred outside and just cooked through.\n' +
      '4. Serve with warm pitta, a tomato and red onion salad and a spoonful of plain yoghurt.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '½ tsp' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Falafel and hummus platter',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Drain the chickpeas well and blitz in a food processor with the onion, garlic, parsley, cumin, ground coriander and a good pinch of salt until coarse but holding together. Stir in the gram flour and bicarbonate of soda and chill for 20 minutes.\n' +
      '2. Shape the mixture into walnut-sized balls and flatten slightly.\n' +
      '3. Heat a 2cm depth of vegetable oil in a deep pan to 180°C. Fry the falafel in batches for 3–4 minutes until deep brown and crisp, then drain on kitchen paper.\n' +
      '4. Spread the hummus over a platter, swirl with olive oil and a dusting of paprika, and pile the falafel alongside. Serve with warm pitta, sliced cucumber and tomato and a wedge of lemon.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 x 400g tins' },
      { rawName: 'Onion', rawMeasure: '1 small' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parsley', rawMeasure: 'large handful' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Gram flour', rawMeasure: '3 tbsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '½ tsp' },
      { rawName: 'Hummus', rawMeasure: '300g' },
      { rawName: 'Paprika', rawMeasure: '1 pinch' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '½' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tabbouleh salad',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Rinse the bulgur wheat, cover with boiling water and leave to swell for 15 minutes, then drain off any excess and fluff with a fork.\n' +
      '2. Finely chop the parsley and mint — the salad should be mostly herbs flecked with grain — and tip into a bowl.\n' +
      '3. Add the diced tomato, cucumber and spring onion along with the cooled bulgur.\n' +
      '4. Dress with plenty of lemon juice, olive oil, salt and pepper, toss well and taste — it should be bright and lemony. Serve chilled.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '80g' },
      { rawName: 'Parsley', rawMeasure: '2 large bunches' },
      { rawName: 'Mint', rawMeasure: 'small bunch' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Cucumber', rawMeasure: '½' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Fattoush salad',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Split the pitta breads open, tear into pieces and toast in a dry pan or hot oven until crisp and golden.\n' +
      '2. Toss the chopped lettuce, tomato, cucumber, radish and spring onion together in a large bowl.\n' +
      '3. Whisk the olive oil with the lemon juice, a teaspoon of sumac, a little crushed garlic, salt and pepper.\n' +
      '4. Add the crisp pitta and most of the dressing to the salad, scatter with chopped parsley and mint and toss. Finish with a last dusting of sumac and serve at once while the bread still has crunch.',
    rawLines: [
      { rawName: 'Pitta bread', rawMeasure: '2' },
      { rawName: 'Lettuce', rawMeasure: '1 small' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Cucumber', rawMeasure: '½' },
      { rawName: 'Radish', rawMeasure: '6' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Sumac', rawMeasure: '2 tsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baba ganoush',
    servingsBase: 6,
    totalTimeMinutes: 45,
    course: 'Starter',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Prick the aubergines all over and roast for 35–40 minutes until collapsed and the skins are blistered and charred. Leave until cool enough to handle.\n' +
      '2. Scoop the soft flesh into a sieve and let it drain for a few minutes, discarding the skins.\n' +
      '3. Mash the flesh with the tahini, crushed garlic, lemon juice and salt until creamy but still a little rough.\n' +
      '4. Spread on a plate, swirl with olive oil and scatter with chopped parsley. Serve with warm pitta.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mujadara — lentils and rice',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Rinse the lentils and simmer in plenty of water for about 20 minutes until almost tender, then drain.\n' +
      '2. Meanwhile, slice the onions thinly. Heat the olive oil in a deep pan and fry two-thirds of them slowly over a medium heat for 15–20 minutes until deep brown and sweet; lift half out to drain for the topping.\n' +
      '3. Stir the cumin and rinsed rice into the onions in the pan, then add the cooked lentils and enough water to cover by a thumb. Season well.\n' +
      '4. Bring to the boil, cover and cook gently for 12–15 minutes until the rice is tender and the water absorbed. Rest off the heat for 5 minutes.\n' +
      '5. Fork through, pile onto a platter and scatter with the crisp fried onions. Serve with yoghurt-free lemon wedges or a simple salad.',
    rawLines: [
      { rawName: 'Brown lentils', rawMeasure: '200g' },
      { rawName: 'Basmati rice', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '3 large' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed vine leaves',
    servingsBase: 6,
    totalTimeMinutes: 80,
    course: 'Starter',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. If using brined vine leaves, rinse and soak them in warm water for 10 minutes, then pat dry.\n' +
      '2. Soften the finely chopped onion in a little olive oil, then stir in the rinsed rice, chopped parsley, mint, a little cinnamon, salt and pepper. Let it cool.\n' +
      '3. Lay a leaf vein-side up, place a teaspoon of filling near the stem, fold in the sides and roll up firmly but not too tight.\n' +
      '4. Pack the rolls seam-side down in a heavy pan, drizzle with olive oil and lemon juice and add water just to cover. Weigh down with a plate.\n' +
      '5. Cover and simmer very gently for 45 minutes until the rice is tender. Cool in the pan, then serve at room temperature with lemon wedges.',
    rawLines: [
      { rawName: 'Vine leaves', rawMeasure: '40' },
      { rawName: 'Basmati rice', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Parsley', rawMeasure: 'large bunch' },
      { rawName: 'Mint', rawMeasure: 'small bunch' },
      { rawName: 'Cinnamon', rawMeasure: '¼ tsp' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Shish taouk chicken skewers',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Cut the chicken breast into large chunks and put in a bowl with the yoghurt, crushed garlic, lemon juice, olive oil, paprika, a pinch of cinnamon, salt and pepper. Marinate for at least 30 minutes.\n' +
      '2. Thread the chicken onto skewers and heat a griddle or grill to high.\n' +
      '3. Cook the skewers for 10–12 minutes, turning, until charred at the edges and cooked through.\n' +
      '4. Serve with a garlic yoghurt sauce, a tomato salad and rice or warm flatbread.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '700g' },
      { rawName: 'Greek yoghurt', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb and chickpea harira soup',
    servingsBase: 6,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Moroccan',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Heat the olive oil in a large pan and brown the diced lamb in batches; lift out and set aside.\n' +
      '2. Soften the onion and celery in the same pan for 8 minutes, then stir in the ginger, turmeric, cinnamon and a good grind of pepper and cook for a minute.\n' +
      '3. Return the lamb, add the chopped tomatoes, chickpeas and lentils and pour in the stock. Bring to the boil, then simmer gently for 40 minutes until the lamb is tender.\n' +
      '4. Stir in a handful of chopped coriander and parsley and a squeeze of lemon. Slacken with a little extra water if needed and check the seasoning. Serve piping hot with bread.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '400g, diced' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Ginger', rawMeasure: '1 tsp, grated' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '½ tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin' },
      { rawName: 'Brown lentils', rawMeasure: '100g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1.2 litres' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Moroccan / North African ──────────────────────────────────────────────
  {
    title: 'Moroccan lamb tagine with apricots',
    servingsBase: 4,
    totalTimeMinutes: 130,
    course: 'Dinner',
    cuisine: 'Moroccan',
    dietLabels: ['High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Toss the diced lamb with the ras el hanout, cinnamon and a little salt. Heat the olive oil in a heavy casserole and brown the lamb in batches; set aside.\n' +
      '2. Soften the onion in the pan for 8–10 minutes, then stir in the garlic and grated ginger for a minute.\n' +
      '3. Return the lamb, add the chopped tomatoes and enough stock to almost cover. Bring to a gentle simmer, cover and cook over a low heat (or in a 160°C oven) for 1½ hours.\n' +
      '4. Stir in the dried apricots and honey and cook uncovered for a further 20–30 minutes until the lamb is meltingly tender and the sauce is thick.\n' +
      '5. Scatter with toasted almonds and chopped coriander and serve with couscous.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '700g, diced' },
      { rawName: 'Ras el hanout', rawMeasure: '2 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '½ tsp' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp, grated' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Dried apricots', rawMeasure: '150g' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Almonds', rawMeasure: '40g' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and preserved-lemon tagine',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'Moroccan',
    dietLabels: ['High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Season the chicken thighs and brown them skin-side down in olive oil in a heavy casserole until golden; set aside.\n' +
      '2. Soften the sliced onion in the pan for 10 minutes, then add the garlic, ginger, turmeric and a pinch of saffron and cook for a minute.\n' +
      '3. Return the chicken, pour in the stock, cover and simmer gently for 35–40 minutes until tender.\n' +
      '4. Stir in the olives and plenty of chopped preserved or fresh lemon and cook uncovered for 10 minutes to reduce the sauce.\n' +
      '5. Finish with chopped coriander and serve with couscous or bread.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp, grated' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Olives', rawMeasure: '100g' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable couscous with chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Moroccan',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Soften the onion in olive oil, then stir in the garlic, ras el hanout and cumin and cook for a minute.\n' +
      '2. Add the diced carrot, courgette and butternut squash, the chopped tomatoes and chickpeas, then pour in the stock. Simmer for 20 minutes until the vegetables are tender and the broth is fragrant.\n' +
      '3. Meanwhile, put the couscous in a bowl, pour over enough boiling stock to cover by 1cm, cover and leave for 5 minutes, then fluff with a fork and a drizzle of olive oil.\n' +
      '4. Pile the couscous into bowls, ladle over the vegetable stew and scatter with chopped coriander.',
    rawLines: [
      { rawName: 'Couscous', rawMeasure: '250g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ras el hanout', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Butternut squash', rawMeasure: '300g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 700ml' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Harissa-roasted chicken thighs',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'North African',
    dietLabels: ['High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Mix the harissa with the olive oil, crushed garlic, a squeeze of lemon and a little salt.\n' +
      '2. Toss the chicken thighs in the paste and arrange skin-side up in a roasting tin with the red onion wedges and pepper chunks.\n' +
      '3. Roast for 40–45 minutes until the chicken is deeply coloured and cooked through and the vegetables are soft and a little charred.\n' +
      '4. Squeeze over more lemon and scatter with chopped coriander. Serve with rice or flatbread.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Harissa spice', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Red onion', rawMeasure: '2' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── South Asian (Indian / Pakistani / Bangladeshi) ────────────────────────
  {
    title: 'Chicken tikka masala',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Cut the chicken breast into chunks and toss with half the yoghurt, the garam masala, half the ginger-garlic paste, a little turmeric and salt. Leave to marinate for 30 minutes, then grill or pan-fry until lightly charred.\n' +
      '2. For the sauce, soften the chopped onion in oil, then add the rest of the ginger-garlic paste, the garam masala, cumin, paprika and a little chilli powder and cook for a minute.\n' +
      '3. Stir in the chopped tomatoes and a splash of water and simmer for 15 minutes, then blend until smooth and return to the pan.\n' +
      '4. Add the charred chicken and the double cream and the remaining yoghurt and simmer gently for 10 minutes until rich and creamy. Finish with chopped coriander and serve with rice or naan.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb rogan josh',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Heat the ghee in a heavy pan and brown the diced lamb in batches; set aside.\n' +
      '2. Soften the sliced onion for 10 minutes, then stir in the ginger-garlic paste, garam masala, cumin, paprika, a little chilli powder and the cardamom and cloves and cook for a minute.\n' +
      '3. Return the lamb, stir in the yoghurt a spoonful at a time, then add the chopped tomatoes and a cup of water.\n' +
      '4. Cover and simmer very gently for 1½ hours, stirring now and then, until the lamb is tender and the sauce deep red and glossy.\n' +
      '5. Check the seasoning, scatter with coriander and serve with basmati rice.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '700g, diced' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tbsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Cardamom', rawMeasure: '4 pods' },
      { rawName: 'Cloves', rawMeasure: '4' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Ghee', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea and spinach curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Soften the chopped onion in oil for 8 minutes, then stir in the ginger-garlic paste, cumin, garam masala, turmeric and a little chilli powder and cook for a minute.\n' +
      '2. Add the chopped tomatoes and cook down for 5 minutes until jammy.\n' +
      '3. Stir in the chickpeas and a splash of water and simmer for 10 minutes.\n' +
      '4. Add the spinach in handfuls, letting it wilt, then finish with a squeeze of lemon and chopped coriander. Serve with rice or naan.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 x 400g tins' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
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
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Rinse the lentils well and put in a pan with the turmeric and plenty of water. Bring to the boil, skim, then simmer for 25–30 minutes until soft and collapsing, topping up with water if needed. Season with salt.\n' +
      '2. For the tarka, heat the oil or ghee in a small pan and fry the cumin and mustard seeds until they pop.\n' +
      '3. Add the sliced garlic and chopped chilli and fry until the garlic turns golden, then stir in a little chilli powder.\n' +
      '4. Pour the sizzling tarka over the dal and stir through. Finish with chopped coriander and a squeeze of lemon. Serve with rice.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Mustard seeds', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken biryani',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein'],
    instructions:
      '1. Toss the chicken thighs with the yoghurt, ginger-garlic paste, biryani masala, turmeric, a little chilli powder and salt. Marinate for 30 minutes.\n' +
      '2. Fry the sliced onions in oil over a medium heat until deep brown and crisp; set half aside for the top.\n' +
      '3. Add the marinated chicken to the onions in the pan and cook for 10 minutes until coloured. Pour in a splash of water, cover and simmer for 15 minutes.\n' +
      '4. Meanwhile, parboil the rinsed basmati in salted water with the cardamom and bay leaves for 6 minutes, then drain.\n' +
      '5. Layer the rice over the chicken, scatter with the reserved onions, chopped coriander and a pinch of saffron soaked in warm water. Cover tightly and steam over a low heat for 15 minutes. Fork through gently and serve.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '700g, boneless' },
      { rawName: 'Basmati rice', rawMeasure: '350g' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Biryani masala', rawMeasure: '2 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Onion', rawMeasure: '3' },
      { rawName: 'Cardamom', rawMeasure: '4 pods' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef keema with peas',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Brown the minced beef in a dry pan over a high heat, breaking it up, then lift out, leaving the fat behind.\n' +
      '2. Soften the chopped onion in the pan for 8 minutes, then stir in the ginger-garlic paste, cumin, garam masala, turmeric and a little chilli powder for a minute.\n' +
      '3. Return the beef, add the chopped tomatoes and a splash of water and simmer for 15 minutes until rich.\n' +
      '4. Stir in the peas and cook for 5 more minutes. Finish with chopped coriander and serve with rice or chapattis.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Saag paneer',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Cut the paneer into cubes and fry in a little oil until golden on all sides; set aside.\n' +
      '2. Soften the chopped onion in the same pan, then add the ginger-garlic paste, cumin, garam masala and turmeric and cook for a minute.\n' +
      '3. Wilt the spinach into the pan in handfuls, then blend the mixture to a coarse purée and return it to the pan.\n' +
      '4. Stir in a spoonful of double cream and the fried paneer and warm through for a few minutes. Season and serve with rice or naan.',
    rawLines: [
      { rawName: 'Paneer', rawMeasure: '250g' },
      { rawName: 'Spinach', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Double cream', rawMeasure: '3 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable samosas',
    servingsBase: 6,
    totalTimeMinutes: 70,
    course: 'Starter',
    cuisine: 'Indian',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Boil the diced potato until just tender, then drain.\n' +
      '2. Heat the oil and fry the cumin and mustard seeds until they pop, then add the chopped onion and soften. Stir in the garam masala, turmeric and a little chilli powder.\n' +
      '3. Add the potato, peas and a squeeze of lemon, mash a little and season well. Let the filling cool.\n' +
      '4. Cut the filo into strips, place a spoon of filling at one end and fold into triangles, sealing the edge with a dab of water.\n' +
      '5. Heat a 2cm depth of oil to 180°C and fry the samosas in batches until golden and crisp. Drain and serve hot.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Mustard seeds', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Filo pastry', rawMeasure: '1 pack' },
      { rawName: 'Vegetable oil', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tandoori chicken',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Slash the chicken drumsticks and thighs deeply and put in a bowl. Mix the yoghurt with the ginger-garlic paste, garam masala, paprika, cumin, turmeric, a little chilli powder, lemon juice and salt, then rub well into the chicken. Marinate for at least 2 hours.\n' +
      '2. Heat the oven to 220°C (fan 200°C). Arrange the chicken on a rack over a lined tray.\n' +
      '3. Roast for 35–40 minutes, turning once, until charred at the edges and cooked through.\n' +
      '4. Squeeze over lemon and serve with rice, salad and a yoghurt dip.',
    rawLines: [
      { rawName: 'Chicken drumstick', rawMeasure: '4' },
      { rawName: 'Chicken thigh', rawMeasure: '4, bone-in' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aloo gobi',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oil and fry the cumin seeds until fragrant, then add the chopped onion and soften for 6–8 minutes.\n' +
      '2. Stir in the ginger-garlic paste, turmeric, garam masala and a little chilli powder, then add the potato and cauliflower and toss to coat.\n' +
      '3. Add a splash of water, cover and cook over a medium heat for 20 minutes, stirring now and then, until the vegetables are tender.\n' +
      '4. Uncover, let any liquid cook off so the edges catch a little, then finish with chopped coriander and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Cauliflower', rawMeasure: '1 small' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb seekh kebabs',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Put the minced lamb in a bowl with the grated onion, ginger-garlic paste, garam masala, cumin, a little chilli powder, chopped coriander, salt and pepper. Knead well for a few minutes until sticky.\n' +
      '2. Divide into eight and press firmly around skewers into long kebabs. Chill for 20 minutes.\n' +
      '3. Heat a griddle or grill to high, brush the kebabs with a little oil and cook for 8–10 minutes, turning, until charred and cooked through.\n' +
      '4. Serve with mint yoghurt, sliced onion and warm naan.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Naan bread', rawMeasure: '4' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Turkish ───────────────────────────────────────────────────────────────
  {
    title: 'Turkish lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Turkish',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Soften the chopped onion and carrot in the olive oil for 8 minutes, then stir in the cumin and a little paprika and cook for a minute.\n' +
      '2. Add the rinsed red lentils and the stock, bring to the boil, then simmer for 20–25 minutes until the lentils are completely soft.\n' +
      '3. Blend until smooth, then loosen with a little extra water to a creamy soup and season well.\n' +
      '4. Serve with a squeeze of lemon, a swirl of olive oil and a final dusting of paprika.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkish lahmacun flatbreads',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Mix the flour, yeast, a pinch of salt and enough warm water to make a soft dough. Knead for 8 minutes, then leave to rise for 30 minutes.\n' +
      '2. For the topping, blitz the minced lamb with the onion, garlic, red pepper, tomato purée, cumin, paprika, a little chilli flakes, parsley, salt and pepper to a coarse paste.\n' +
      '3. Heat the oven to 240°C (fan 220°C) with a baking tray inside. Roll the dough into thin ovals.\n' +
      '4. Spread a thin layer of the lamb mixture right to the edges and bake on the hot tray for 8–10 minutes until the base is crisp and the topping cooked.\n' +
      '5. Squeeze over lemon, scatter with parsley and roll up to eat.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '300g' },
      { rawName: 'Fast-action yeast', rawMeasure: '1 tsp' },
      { rawName: 'Minced lamb', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Romano pepper', rawMeasure: '1' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '½ tsp' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkish chicken pilaf',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Season the diced chicken and brown in olive oil in a deep pan; set aside.\n' +
      '2. Soften the chopped onion in the same pan, then stir in the cinnamon, allspice and tomato purée and cook for a minute.\n' +
      '3. Add the rinsed rice and stir to coat, then return the chicken, pour in the stock and season.\n' +
      '4. Bring to the boil, cover and cook gently for 15 minutes until the rice is tender and the liquid absorbed. Rest off the heat for 5 minutes.\n' +
      '5. Fork through, scatter with toasted pine nuts and chopped parsley and serve.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '500g, diced' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Cinnamon', rawMeasure: '½ tsp' },
      { rawName: 'Allspice', rawMeasure: '½ tsp' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Pine nuts', rawMeasure: '30g' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Persian ───────────────────────────────────────────────────────────────
  {
    title: 'Persian chicken and saffron rice',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Persian',
    dietLabels: ['High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Steep the saffron in 2 tablespoons of warm water.\n' +
      '2. Toss the chicken with the grated onion, turmeric, cinnamon, a little of the saffron water, salt and pepper and leave for 20 minutes.\n' +
      '3. Heat the olive oil and brown the chicken on all sides, then add a splash of water, cover and cook gently for 25 minutes until tender.\n' +
      '4. Meanwhile parboil the rinsed basmati in salted water for 6 minutes, drain, then return to the pan with a drizzle of oil. Cover and steam over a low heat for 20 minutes to form a crust at the base.\n' +
      '5. Stir the rest of the saffron water through the top of the rice, pile onto a platter and serve with the chicken and lemon wedges.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Basmati rice', rawMeasure: '350g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Saffron', rawMeasure: '1 good pinch' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '½ tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Persian herb and bean stew',
    servingsBase: 4,
    totalTimeMinutes: 110,
    course: 'Dinner',
    cuisine: 'Persian',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Brown the diced lamb in olive oil in a heavy pan; set aside.\n' +
      '2. Soften the chopped onion, then add the turmeric and a generous amount of chopped parsley, coriander and a little dried dill and fry until darkened and fragrant.\n' +
      '3. Return the lamb, add the kidney beans, a squeeze of lemon for sourness and enough water to cover. Season.\n' +
      '4. Cover and simmer very gently for about 1½ hours until the lamb is tender and the stew dark and thick.\n' +
      '5. Check the seasoning and serve with basmati rice.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '500g, diced' },
      { rawName: 'Kidney beans', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Parsley', rawMeasure: 'large bunch' },
      { rawName: 'Coriander', rawMeasure: 'large bunch' },
      { rawName: 'Dried dill', rawMeasure: '1 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Halal-friendly British / global mains ─────────────────────────────────
  {
    title: 'Halal beef burgers',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein'],
    instructions:
      '1. Put the minced beef in a bowl with the grated onion, a little mustard, salt and plenty of pepper. Mix lightly — just enough to combine — and shape into four patties slightly wider than the buns.\n' +
      '2. Press a dimple into the centre of each so they cook flat. Heat a little oil in a heavy frying pan over a high heat.\n' +
      '3. Fry the burgers for 3–4 minutes a side for medium, adding a slice of Cheddar to melt over the top for the last minute.\n' +
      '4. Toast the buns and build with lettuce, sliced tomato, red onion and ketchup. Rest the burgers for a minute before serving.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '½' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Cheddar cheese', rawMeasure: '4 slices' },
      { rawName: 'Burger bun', rawMeasure: '4' },
      { rawName: 'Lettuce', rawMeasure: 'few leaves' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Tomato ketchup', rawMeasure: 'to serve' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halal chicken and chips',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Toss the chip-cut potatoes with a little vegetable oil and salt and spread on a tray.\n' +
      '2. Bake the chips for 35–40 minutes, turning once, until golden and crisp.\n' +
      '3. Meanwhile, dip the chicken breast pieces in seasoned flour, then beaten egg, then breadcrumbs.\n' +
      '4. Shallow-fry the chicken in a 1cm depth of oil for 4–5 minutes a side until deep gold and cooked through; drain on kitchen paper.\n' +
      '5. Serve the crisp chicken with the chips, a wedge of lemon and a side salad.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Plain flour', rawMeasure: '60g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Breadcrumbs', rawMeasure: '120g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced lamb shepherd-style pie',
    servingsBase: 4,
    totalTimeMinutes: 85,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Brown the minced lamb in a large pan over a high heat, then lift out, leaving most of the fat behind.\n' +
      '2. Soften the onion, carrot and celery for 8–10 minutes, then stir in the cumin, cinnamon and tomato purée and cook for a minute.\n' +
      '3. Return the lamb, add the chopped tomatoes and stock and simmer for 25 minutes until thick. Stir through the peas.\n' +
      '4. Meanwhile, boil the potatoes until tender, drain and mash with the butter and milk; season.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Spoon the lamb into a dish, top with the mash, fork the surface and bake for 25–30 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '¼ tsp' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halal chicken fajitas',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Slice the chicken breast into strips and toss with the fajita seasoning, a little oil and a squeeze of lime.\n' +
      '2. Heat a large frying pan until very hot and cook the chicken for 5–6 minutes until coloured and cooked through; set aside.\n' +
      '3. Add the sliced peppers and onion to the pan and stir-fry for 5 minutes until softened and charred at the edges.\n' +
      '4. Return the chicken, toss together and warm the tortilla wraps.\n' +
      '5. Pile the chicken and peppers into the wraps with salsa, shredded lettuce and a squeeze of lime.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g' },
      { rawName: 'Fajita seasoning', rawMeasure: '2 tbsp' },
      { rawName: 'Mixed peppers', rawMeasure: '3' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Tortilla wrap', rawMeasure: '8' },
      { rawName: 'Salsa', rawMeasure: 'to serve' },
      { rawName: 'Lettuce', rawMeasure: '¼ head' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef and vegetable stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Slice the beef steak thinly against the grain and toss with a little cornflour and soy sauce.\n' +
      '2. Heat a wok until smoking, add a little oil and stir-fry the beef in two batches for a minute until just browned; set aside.\n' +
      '3. Add more oil and stir-fry the garlic and ginger for a few seconds, then add the broccoli, peppers and mangetout and stir-fry for 3–4 minutes.\n' +
      '4. Return the beef, pour in the soy sauce, oyster sauce and a splash of water and toss for a minute until glossy.\n' +
      '5. Finish with a drizzle of sesame oil and sliced spring onion. Serve with rice.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '400g' },
      { rawName: 'Broccoli', rawMeasure: '1 head' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Mangetout', rawMeasure: '100g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp, grated' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Oyster sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '1 tsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Chicken chow mein',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Cook the noodles to packet instructions, drain and toss with a drop of sesame oil.\n' +
      '2. Slice the chicken thighs and stir-fry in a hot wok with a little oil until golden and cooked; set aside.\n' +
      '3. Stir-fry the garlic, ginger, sliced peppers and bean sprouts for 3 minutes.\n' +
      '4. Return the chicken and add the noodles, soy sauce, oyster sauce and a splash of water, tossing over a high heat until everything is coated and hot.\n' +
      '5. Finish with sliced spring onion and serve.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '400g, boneless' },
      { rawName: 'Noodles', rawMeasure: '300g' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Bean sprouts', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp, grated' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Oyster sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Thai green chicken curry',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat a little oil in a wok and fry the Thai green curry paste for a minute until fragrant.\n' +
      '2. Stir in half the coconut milk and let it bubble and split, then add the sliced chicken thighs and cook for 5 minutes.\n' +
      '3. Pour in the rest of the coconut milk along with the sliced peppers and mangetout and simmer for 10 minutes until the chicken is cooked and the vegetables tender.\n' +
      '4. Season with fish sauce and a squeeze of lime, scatter with torn basil and serve with jasmine or basmati rice.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g, boneless' },
      { rawName: 'Thai green curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 x 400ml tin' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Mangetout', rawMeasure: '100g' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: 'handful' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Lamb massaman curry',
    servingsBase: 4,
    totalTimeMinutes: 110,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Brown the diced lamb in a little oil in a heavy pan; set aside.\n' +
      '2. Fry the massaman curry paste for a minute, then stir in half the coconut milk and let it bubble.\n' +
      '3. Return the lamb, add the rest of the coconut milk, the diced potato, a splash of water, fish sauce and a squeeze of tamarind. Bring to a gentle simmer.\n' +
      '4. Cover and cook over a low heat for about 1½ hours until the lamb is tender and the sauce thick, adding the peanuts for the last 15 minutes.\n' +
      '5. Check the seasoning and serve with rice.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '600g, diced' },
      { rawName: 'Massaman curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 x 400ml tin' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Peanuts', rawMeasure: '50g' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Tamarind paste', rawMeasure: '1 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Lentil and vegetable soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Soften the chopped onion, carrot and celery in the olive oil for 10 minutes.\n' +
      '2. Stir in the cumin and a little smoked paprika, then add the rinsed lentils, chopped tomatoes and stock.\n' +
      '3. Bring to the boil and simmer for 25 minutes until the lentils are soft and the soup thick.\n' +
      '4. Season well, add a squeeze of lemon and serve with crusty bread.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '½ tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Seafood (pescatarian-compatible, halal) ───────────────────────────────
  {
    title: 'Baked salmon with lemon and herbs',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian', 'High-protein', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the salmon fillets on a lined tray.\n' +
      '2. Drizzle with olive oil, scatter with chopped dill and parsley, season and lay a few lemon slices over each.\n' +
      '3. Bake for 12–15 minutes until the salmon flakes easily and is just opaque in the centre.\n' +
      '4. Squeeze over the roasted lemon and serve with new potatoes and greens.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Dill', rawMeasure: 'small handful' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'New potatoes', rawMeasure: '600g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and coconut curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Pescatarian', 'High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Soften the chopped onion in oil, then stir in the ginger-garlic paste, cumin, turmeric, garam masala and a little chilli powder for a minute.\n' +
      '2. Add the chopped tomatoes and cook down for 5 minutes, then pour in the coconut milk and simmer for 5 minutes.\n' +
      '3. Add the prawns and cook for 4–5 minutes until pink and just cooked through.\n' +
      '4. Finish with a squeeze of lime and chopped coriander. Serve with basmati rice.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '400g, raw' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Coconut milk', rawMeasure: '1 x 400ml tin' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced fish tacos',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Pescatarian', 'High-protein', 'Dairy-free'],
    instructions:
      '1. Cut the white fish into chunks and toss with the cajun seasoning, a little oil and salt.\n' +
      '2. Fry the fish in a hot pan for 2–3 minutes a side until golden and cooked through.\n' +
      '3. Toss the shredded cabbage and red onion with lime juice and a pinch of salt for a quick slaw.\n' +
      '4. Warm the tortillas, fill with the fish and slaw, add a spoon of salsa and a wedge of lime.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '500g' },
      { rawName: 'Cajun', rawMeasure: '2 tsp' },
      { rawName: 'Cabbage', rawMeasure: '¼ small' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Corn tortillas', rawMeasure: '8' },
      { rawName: 'Salsa', rawMeasure: 'to serve' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled spiced mackerel',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian', 'High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the grill to high. Slash the mackerel a few times on each side.\n' +
      '2. Rub with a paste of olive oil, crushed garlic, paprika, cumin, lemon juice and salt, working it into the slashes.\n' +
      '3. Grill the fish for 4–5 minutes a side until the skin blisters and the flesh is cooked through.\n' +
      '4. Squeeze over more lemon, scatter with chopped parsley and serve with a crisp salad.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '4 whole' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Egyptian / Levantine vegetarian ───────────────────────────────────────
  {
    title: 'Koshari',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Egyptian',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Simmer the brown lentils in water for about 20 minutes until tender, then drain.\n' +
      '2. Cook the rice and the macaroni-style pasta separately until just tender and drain.\n' +
      '3. Fry the thinly sliced onions slowly in oil until deep brown and crisp; drain on kitchen paper.\n' +
      '4. For the sauce, soften a little garlic in oil, add the cumin and chilli flakes, then the passata and a splash of vinegar-free lemon, and simmer for 10 minutes.\n' +
      '5. Pile the rice, lentils, pasta and chickpeas into bowls, spoon over the tomato sauce and crown with the crisp onions.',
    rawLines: [
      { rawName: 'Brown lentils', rawMeasure: '200g' },
      { rawName: 'Rice', rawMeasure: '200g' },
      { rawName: 'Pasta', rawMeasure: '150g' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '3 large' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '½ tsp' },
      { rawName: 'Passata', rawMeasure: '400g' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced chickpea shakshuka',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Soften the chopped onion and pepper in olive oil for 8 minutes, then stir in the garlic, cumin, paprika and a little chilli flakes.\n' +
      '2. Add the chopped tomatoes and chickpeas and simmer for 10 minutes until thick and rich. Season well.\n' +
      '3. Make four wells in the sauce and crack an egg into each. Cover and cook gently for 6–8 minutes until the whites are set but the yolks still soft.\n' +
      '4. Scatter with chopped parsley and serve straight from the pan with warm bread.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '½ tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── More South Asian / Gulf ───────────────────────────────────────────────
  {
    title: 'Chicken karahi',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Pakistani',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oil in a wide pan and brown the chicken pieces over a high heat; set aside.\n' +
      '2. Soften the chopped onion, then add the ginger-garlic paste and cook for a minute. Stir in the chopped tomatoes and cook hard for 8–10 minutes until the oil separates.\n' +
      '3. Return the chicken and add the cumin, garam masala, a little chilli powder and crushed coriander seeds. Cook for 15 minutes until the chicken is tender and the sauce clingy.\n' +
      '4. Stir through sliced green chilli, julienned ginger and chopped coriander and serve with naan.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '700g, bone-in' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Chilli', rawMeasure: '2' },
      { rawName: 'Ginger', rawMeasure: 'thumb' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Kabsa — Gulf spiced rice with chicken',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Brown the chicken pieces in olive oil in a deep pan; set aside.\n' +
      '2. Soften the chopped onion, then stir in the garlic, kabsa spice and tomato purée and cook for a minute.\n' +
      '3. Return the chicken, add the chopped tomatoes and stock, cover and simmer for 25 minutes until the chicken is tender. Lift the chicken out.\n' +
      '4. Stir the rinsed rice into the spiced broth, season, cover and cook gently for 15 minutes until the rice is tender and the liquid absorbed.\n' +
      '5. Sit the chicken back on top to warm through, scatter with toasted almonds and serve.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1, jointed' },
      { rawName: 'Basmati rice', rawMeasure: '350g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Kabsa spice', rawMeasure: '2 tbsp' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 700ml' },
      { rawName: 'Almonds', rawMeasure: '40g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chana masala',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Soften the chopped onion in oil for 8 minutes, then stir in the ginger-garlic paste and cook for a minute.\n' +
      '2. Add the cumin, garam masala, ground coriander, turmeric and a little chilli powder and toast for 30 seconds, then add the chopped tomatoes and cook down for 8 minutes.\n' +
      '3. Stir in the chickpeas and a splash of water and simmer for 15 minutes, lightly crushing some of the chickpeas to thicken.\n' +
      '4. Finish with a squeeze of lemon and chopped coriander. Serve with rice or naan.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 x 400g tins' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Butter chicken',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Toss the chicken with the yoghurt, half the ginger-garlic paste, garam masala and a little chilli powder and marinate for 30 minutes, then grill or pan-fry until lightly charred.\n' +
      '2. Melt the butter in a pan and soften the chopped onion, then add the rest of the ginger-garlic paste and cook for a minute.\n' +
      '3. Stir in the chopped tomatoes and a splash of water and simmer for 15 minutes, then blend smooth and return to the pan.\n' +
      '4. Add the charred chicken and the double cream and simmer gently for 10 minutes until rich and silky. Finish with a little extra butter and chopped coriander. Serve with rice or naan.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g, boneless' },
      { rawName: 'Natural yoghurt', rawMeasure: '120g' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Double cream', rawMeasure: '120ml' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Goat curry',
    servingsBase: 4,
    totalTimeMinutes: 140,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Toss the diced goat with the jerk seasoning, curry powder, thyme and a little salt and leave for 30 minutes.\n' +
      '2. Brown the meat in oil in a heavy pan in batches; set aside.\n' +
      '3. Soften the chopped onion, garlic and a little chopped scotch bonnet, then return the meat with the chopped tomatoes and enough water to cover.\n' +
      '4. Cover and simmer very gently for about 2 hours until the goat is tender, adding the diced potato for the last 30 minutes.\n' +
      '5. Check the seasoning and serve with rice and peas or plain rice.',
    rawLines: [
      { rawName: 'Goat meat', rawMeasure: '800g, diced' },
      { rawName: 'Jerk seasoning', rawMeasure: '2 tbsp' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Scotch bonnet', rawMeasure: '½' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jerk chicken',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Slash the chicken thighs and drumsticks and rub all over with the jerk seasoning, crushed garlic, thyme, a little chopped scotch bonnet, lime juice and oil. Marinate for at least 2 hours.\n' +
      '2. Heat the oven to 200°C (fan 180°C). Arrange the chicken on a rack over a lined tray.\n' +
      '3. Roast for 40–45 minutes, turning once, until charred at the edges and cooked through.\n' +
      '4. Squeeze over lime and serve with rice and peas and a slaw.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '4, bone-in' },
      { rawName: 'Chicken drumstick', rawMeasure: '4' },
      { rawName: 'Jerk seasoning', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Scotch bonnet', rawMeasure: '½' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Mediterranean / vegetable mains ───────────────────────────────────────
  {
    title: 'Stuffed peppers with rice and herbs',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Slice the tops off the peppers and remove the seeds.\n' +
      '2. Soften the chopped onion in olive oil, then stir in the garlic, rinsed rice, chopped tomatoes, parsley, mint, a little cinnamon, salt and pepper. Cook for a few minutes.\n' +
      '3. Spoon the filling into the peppers, sit them upright in a baking dish, replace the lids and pour a little water around them.\n' +
      '4. Drizzle with olive oil, cover with foil and bake for 40 minutes, then uncover for 15 minutes until the peppers are soft and the rice tender.',
    rawLines: [
      { rawName: 'Mixed peppers', rawMeasure: '4 large' },
      { rawName: 'Basmati rice', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Cinnamon', rawMeasure: '¼ tsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted vegetable and halloumi traybake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the chunky courgette, pepper, red onion and cherry tomatoes with olive oil, oregano, salt and pepper and spread over a large tray.\n' +
      '2. Roast for 20 minutes until starting to soften and colour.\n' +
      '3. Slice the feta-style halloumi and tuck it among the vegetables, then roast for a further 12–15 minutes until the cheese is golden.\n' +
      '4. Squeeze over lemon and scatter with chopped parsley. Serve with couscous or bread.',
    rawLines: [
      { rawName: 'Feta', rawMeasure: '250g, firm block' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '2' },
      { rawName: 'Cherry tomato', rawMeasure: '250g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced cauliflower and chickpea traybake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the cauliflower florets and drained chickpeas with olive oil, cumin, paprika, turmeric, salt and pepper.\n' +
      '2. Spread over a large tray and roast for 30–35 minutes, turning once, until the cauliflower is tender and golden and the chickpeas crisp.\n' +
      '3. Whisk the tahini with lemon juice, a little crushed garlic and enough water to make a drizzling sauce.\n' +
      '4. Pile onto a platter, drizzle with the tahini sauce and scatter with chopped parsley.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced lamb and aubergine bake',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Slice the aubergines, brush with olive oil and roast or griddle until softened and golden; set aside.\n' +
      '2. Brown the minced lamb in a pan, then add the chopped onion and garlic and soften. Stir in the cinnamon, oregano and tomato purée, then the chopped tomatoes, and simmer for 20 minutes until thick.\n' +
      '3. For the topping, warm the milk, whisk in a little cornflour to thicken, then beat in the egg and most of the grated cheese off the heat.\n' +
      '4. Heat the oven to 190°C (fan 170°C). Layer the lamb and aubergine in a dish, pour over the topping and scatter with the rest of the cheese.\n' +
      '5. Bake for 35–40 minutes until golden and set. Rest before serving.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cinnamon', rawMeasure: '½ tsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Milk', rawMeasure: '400ml' },
      { rawName: 'Cornflour', rawMeasure: '2 tbsp' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek-style chicken gyros',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['High-protein'],
    instructions:
      '1. Slice the chicken thighs and toss with olive oil, crushed garlic, oregano, paprika, lemon juice, salt and pepper. Marinate for 30 minutes.\n' +
      '2. For the tzatziki, grate the cucumber, squeeze out the liquid and stir into the yoghurt with a little garlic, lemon and chopped mint.\n' +
      '3. Cook the chicken in a hot pan for 5–6 minutes until charred and cooked through.\n' +
      '4. Warm the flatbreads, then fill with the chicken, sliced tomato, red onion and a generous spoon of tzatziki and roll up.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '700g, boneless' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Greek yoghurt', rawMeasure: '200g' },
      { rawName: 'Cucumber', rawMeasure: '½' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Pitta bread', rawMeasure: '4 large' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Soups, sides & lighter dishes ─────────────────────────────────────────
  {
    title: 'Spiced butternut squash soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the diced butternut squash with olive oil, cumin and a pinch of chilli flakes and roast for 25 minutes until soft and caramelised.\n' +
      '2. Meanwhile soften the chopped onion and garlic in a pan.\n' +
      '3. Add the roasted squash and the stock, bring to the boil and simmer for 10 minutes.\n' +
      '4. Blend until silky, season well and loosen with a little water if needed. Serve with a swirl of olive oil and crusty bread.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '1 large' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced rice and peas',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Side',
    cuisine: 'Caribbean',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Soften the chopped onion and garlic in a little oil, then add the thyme and a small piece of scotch bonnet (whole, for flavour without too much heat).\n' +
      '2. Stir in the rinsed rice and the kidney beans, then pour in the coconut milk and enough water to cover by 1cm. Season.\n' +
      '3. Bring to the boil, cover and cook gently for 15 minutes until the rice is tender and the liquid absorbed.\n' +
      '4. Remove the chilli, fluff with a fork and serve alongside jerk chicken or curry.',
    rawLines: [
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Kidney beans', rawMeasure: '1 x 400g tin' },
      { rawName: 'Coconut milk', rawMeasure: '1 x 400ml tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Scotch bonnet', rawMeasure: '1 whole' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Garlic and herb flatbreads',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Side',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Mix the flour, yeast and a pinch of salt, then add the yoghurt and enough warm water to make a soft dough. Knead for 8 minutes and leave to rise for 45 minutes.\n' +
      '2. Divide into six and roll each into an oval.\n' +
      '3. Cook the flatbreads in a hot dry pan for 1–2 minutes a side until puffed and spotted brown.\n' +
      '4. Brush at once with melted butter mixed with crushed garlic and chopped parsley. Serve warm.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '350g' },
      { rawName: 'Fast-action yeast', rawMeasure: '1 tsp' },
      { rawName: 'Natural yoghurt', rawMeasure: '100g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Salt', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Turkish white bean salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Turkish',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Drain and rinse the cannellini beans and tip into a bowl.\n' +
      '2. Add the diced tomato, sliced red onion and chopped parsley.\n' +
      '3. Whisk the olive oil with lemon juice, a little crushed garlic, salt and pepper and pour over the beans.\n' +
      '4. Toss gently and leave for 10 minutes for the flavours to mingle. Serve with bread.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '2 x 400g tins' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1 small' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Breakfasts & lighter halal dishes ─────────────────────────────────────
  {
    title: 'Halal full English breakfast',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['High-protein'],
    instructions:
      '1. Fry the halal beef or chicken sausages gently in a little oil for 12–15 minutes, turning, until browned and cooked through.\n' +
      '2. Add the turkey rashers and fry until crisp at the edges; keep warm.\n' +
      '3. Fry the mushrooms and halved tomatoes in the same pan until soft and golden.\n' +
      '4. Warm the baked beans in a small pan, and fry or poach the eggs to your liking.\n' +
      '5. Toast the bread and bring everything together on warm plates.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '4 halal' },
      { rawName: 'Turkey ham', rawMeasure: '4 rashers' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Baked beans', rawMeasure: '1 x 400g tin' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Masala omelette',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian', 'High-protein', 'Gluten-free'],
    instructions:
      '1. Beat the eggs with a little salt and a pinch of turmeric.\n' +
      '2. Stir in the finely chopped onion, tomato, green chilli and chopped coriander.\n' +
      '3. Heat a little oil in a non-stick pan and pour in the egg mixture, swirling to spread it out.\n' +
      '4. Cook over a medium heat until the base is set and golden, then fold and slide onto a plate. Serve with buttered toast.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Onion', rawMeasure: '½' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Turmeric', rawMeasure: '1 pinch' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea and potato breakfast hash',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Boil the diced potato for 8 minutes until just tender, then drain.\n' +
      '2. Heat the oil in a large frying pan and fry the potato until crisp and golden, then add the chopped onion and pepper and soften.\n' +
      '3. Stir in the chickpeas, cumin, smoked paprika and a pinch of chilli flakes and fry for 5 minutes until everything is hot and a little crisp.\n' +
      '4. Make wells and crack in the eggs, cover and cook until set. Scatter with chopped parsley and serve.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── More mains for breadth ────────────────────────────────────────────────
  {
    title: 'Turkey and vegetable meatballs in tomato sauce',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Mix the turkey mince with the breadcrumbs, grated onion, garlic, oregano, salt and pepper. Roll into small meatballs.\n' +
      '2. Brown the meatballs in olive oil in a large pan, turning, then lift out.\n' +
      '3. Soften a little chopped onion and garlic in the pan, then add the passata and a pinch of sugar and simmer for 10 minutes.\n' +
      '4. Return the meatballs and simmer gently for 15 minutes until cooked through and the sauce is rich.\n' +
      '5. Scatter with chopped basil and serve with pasta or rice.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Breadcrumbs', rawMeasure: '50g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Basil', rawMeasure: 'handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken shawarma rice bowl',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Toss the sliced chicken thighs with the yoghurt, garlic, cumin, coriander, paprika, turmeric, lemon and salt and marinate for 20 minutes.\n' +
      '2. Cook the chicken in a hot pan until deeply golden and cooked through.\n' +
      '3. Meanwhile cook the rice until tender and fluff with a fork.\n' +
      '4. Stir the tahini with lemon, garlic and water to make a sauce.\n' +
      '5. Build bowls with rice, the shawarma chicken, sliced tomato, cucumber and red onion, and drizzle with the tahini sauce.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g, boneless' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Greek yoghurt', rawMeasure: '120g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Tahini', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Cucumber', rawMeasure: '½' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb biryani',
    servingsBase: 4,
    totalTimeMinutes: 130,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein'],
    instructions:
      '1. Toss the diced lamb with the yoghurt, ginger-garlic paste, biryani masala, turmeric, a little chilli powder and salt. Marinate for 30 minutes.\n' +
      '2. Fry the sliced onions in ghee until deep brown; set half aside.\n' +
      '3. Add the lamb to the onions in the pan and brown, then add a cup of water, cover and simmer for about 1 hour until almost tender.\n' +
      '4. Parboil the rinsed basmati with the cardamom and bay leaves for 6 minutes and drain.\n' +
      '5. Layer the rice over the lamb, top with the reserved onions, chopped coriander and saffron water, cover tightly and steam over a low heat for 25 minutes. Fork through gently and serve.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '700g, diced' },
      { rawName: 'Basmati rice', rawMeasure: '350g' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Biryani masala', rawMeasure: '2 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Onion', rawMeasure: '3' },
      { rawName: 'Cardamom', rawMeasure: '4 pods' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Ghee', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced lentil and sweet potato curry',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Soften the chopped onion in oil, then add the ginger-garlic paste, cumin, garam masala, turmeric and a little chilli powder and cook for a minute.\n' +
      '2. Stir in the diced sweet potato and rinsed red lentils, then add the chopped tomatoes and coconut milk and a splash of water.\n' +
      '3. Simmer for 25–30 minutes until the lentils are soft and the sweet potato tender, stirring now and then.\n' +
      '4. Season, add a squeeze of lime and chopped coriander, and serve with rice.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '500g' },
      { rawName: 'Lentils', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Coconut milk', rawMeasure: '1 x 400ml tin' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef shawarma wraps',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Slice the beef steak thinly and toss with cumin, coriander, paprika, cinnamon, crushed garlic, a squeeze of lemon, olive oil and salt. Marinate for 20 minutes.\n' +
      '2. Heat a large pan until very hot and sear the beef in batches for a minute or two until browned but still tender; rest briefly.\n' +
      '3. Stir the tahini with lemon, garlic and water for a quick sauce.\n' +
      '4. Warm the flatbreads, pile in the beef with shredded lettuce, tomato and red onion, drizzle with the tahini sauce and roll up tightly.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '600g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '¼ tsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tahini', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Pitta bread', rawMeasure: '4 large' },
      { rawName: 'Lettuce', rawMeasure: '¼ head' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced roast chicken with potatoes',
    servingsBase: 4,
    totalTimeMinutes: 100,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Mix the olive oil with crushed garlic, paprika, cumin, a little turmeric, lemon juice and salt.\n' +
      '2. Rub the paste all over the whole chicken, inside and out, and sit it in a roasting tin.\n' +
      '3. Toss the chunky potatoes with a little oil and salt and scatter around the bird.\n' +
      '4. Roast for about 1 hour 20 minutes, basting once, until the chicken is golden and the juices run clear and the potatoes are crisp.\n' +
      '5. Rest the chicken for 10 minutes, then carve and serve with the potatoes and a green salad.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1.6kg' },
      { rawName: 'Potato', rawMeasure: '1kg' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Paprika', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Egg and potato curry',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Hard-boil the eggs for 8 minutes, cool, peel and set aside.\n' +
      '2. Soften the chopped onion in oil, then stir in the ginger-garlic paste, cumin, garam masala, turmeric and a little chilli powder.\n' +
      '3. Add the chopped tomatoes and cook down for 8 minutes, then add the diced potato and enough water to cover and simmer for 15 minutes until the potato is tender.\n' +
      '4. Halve the eggs and add to the sauce to warm through. Finish with chopped coriander and serve with rice.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced chicken wings',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Starter',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Pat the chicken wings dry and toss with olive oil, paprika, cumin, garlic granules, a little chilli powder and salt.\n' +
      '2. Spread on a rack over a lined tray.\n' +
      '3. Roast for 35–40 minutes, turning once, until deeply golden and crisp.\n' +
      '4. Squeeze over lemon and serve with a yoghurt and mint dip.',
    rawLines: [
      { rawName: 'Chicken wing', rawMeasure: '1kg' },
      { rawName: 'Paprika', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garlic granules', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced beef and bean chilli',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Brown the minced beef in a large pan over a high heat, then lift out, leaving the fat behind.\n' +
      '2. Soften the chopped onion and pepper in the pan, then stir in the garlic, cumin, smoked paprika, a little chilli powder and a pinch of cinnamon.\n' +
      '3. Return the beef, add the chopped tomatoes, kidney beans and a splash of stock and simmer for 30 minutes until rich and thick.\n' +
      '4. Season, add a squeeze of lime and serve with rice or in wraps with a spoon of soured cream.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Kidney beans', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced fish curry',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Pescatarian', 'High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Cut the white fish into large chunks and toss with a little turmeric and salt.\n' +
      '2. Soften the chopped onion in oil, then stir in the ginger-garlic paste, cumin, garam masala, the rest of the turmeric and a little chilli powder.\n' +
      '3. Add the chopped tomatoes and coconut milk and simmer for 10 minutes.\n' +
      '4. Slip in the fish and simmer very gently for 6–8 minutes until just cooked through. Finish with lime and coriander and serve with rice.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Coconut milk', rawMeasure: '1 x 400ml tin' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halal cottage-style pie with beef',
    servingsBase: 4,
    totalTimeMinutes: 80,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Brown the minced beef in a large pan over a high heat, then lift out, leaving the fat behind.\n' +
      '2. Soften the onion, carrot and celery for 8–10 minutes, then stir in the tomato purée and cook for a minute.\n' +
      '3. Return the beef, add the chopped tomatoes and stock, season and simmer for 25–30 minutes until rich and thick.\n' +
      '4. Meanwhile boil the potatoes until tender, drain and mash with the butter and milk; season.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Spoon the beef into a dish, top with the mash, fork the surface and scatter with grated Cheddar.\n' +
      '6. Bake for 25–30 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 250ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '50g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced potato and pea curry',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oil and fry the cumin and mustard seeds until they pop, then add the chopped onion and soften.\n' +
      '2. Stir in the ginger-garlic paste, garam masala, turmeric and a little chilli powder, then add the chopped tomatoes and cook down for 5 minutes.\n' +
      '3. Add the diced potato and enough water to cover and simmer for 15 minutes until almost tender.\n' +
      '4. Stir in the peas and cook for 5 more minutes. Finish with a squeeze of lemon and chopped coriander. Serve with rice or chapattis.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Mustard seeds', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb shank in rich tomato sauce',
    servingsBase: 4,
    totalTimeMinutes: 165,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['High-protein', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Season the lamb shanks and brown all over in olive oil in a heavy casserole; set aside.\n' +
      '2. Soften the chopped onion, carrot and celery in the pan for 10 minutes, then add the garlic, rosemary and tomato purée and cook for a minute.\n' +
      '3. Return the shanks, add the chopped tomatoes and enough stock to come halfway up. Bring to a simmer.\n' +
      '4. Cover and cook in the oven for about 2½ hours, turning once, until the meat is falling from the bone.\n' +
      '5. Lift out the shanks, reduce the sauce on the hob if needed, season and serve with mash or polenta.',
    rawLines: [
      { rawName: 'Lamb shank', rawMeasure: '4' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced chickpea and spinach soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Soften the chopped onion and carrot in olive oil for 8 minutes, then stir in the garlic, cumin and a little harissa.\n' +
      '2. Add the chopped tomatoes, chickpeas and stock and simmer for 15 minutes.\n' +
      '3. Lightly crush some of the chickpeas to thicken, then stir in the spinach to wilt.\n' +
      '4. Finish with a squeeze of lemon and serve with bread.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Harissa spice', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and vegetable noodle soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Soften the chopped onion, carrot and celery in a little oil for 8 minutes.\n' +
      '2. Add the diced chicken breast and cook until coloured, then pour in the stock and simmer for 15 minutes.\n' +
      '3. Add the noodles and sweetcorn and cook for a few minutes until the noodles are tender.\n' +
      '4. Season well, stir in chopped parsley and a squeeze of lemon and serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '300g' },
      { rawName: 'Noodles', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Sweetcorn', rawMeasure: '150g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1.2 litres' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced aubergine and chickpea stew',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Cut the aubergine into chunks, toss with olive oil and a little salt and fry or roast until golden and soft; set aside.\n' +
      '2. Soften the chopped onion in oil, then stir in the garlic, cumin, cinnamon and a little chilli flakes.\n' +
      '3. Add the chopped tomatoes and chickpeas and simmer for 15 minutes, then fold in the aubergine and warm through.\n' +
      '4. Finish with a squeeze of lemon and chopped parsley. Serve with rice or flatbread.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2' },
      { rawName: 'Chickpeas', rawMeasure: '1 x 400g tin' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '¼ tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '½ tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey mince and rice stuffed cabbage',
    servingsBase: 4,
    totalTimeMinutes: 80,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Blanch the cabbage leaves in boiling water for a couple of minutes until pliable, then drain.\n' +
      '2. Mix the turkey mince with the part-cooked rice, grated onion, garlic, parsley, cumin, salt and pepper.\n' +
      '3. Place a little filling on each leaf, fold in the sides and roll up. Pack the rolls seam-side down in a pan.\n' +
      '4. Pour over the passata mixed with stock and a squeeze of lemon, cover and simmer gently for 45 minutes until the filling is cooked and the leaves tender.\n' +
      '5. Serve with the sauce spooned over.',
    rawLines: [
      { rawName: 'Cabbage leaves', rawMeasure: '12 large' },
      { rawName: 'Turkey mince', rawMeasure: '400g' },
      { rawName: 'Basmati rice', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Passata', rawMeasure: '400g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced okra-style green bean and tomato stew',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Soften the chopped onion in olive oil for 8 minutes, then add the garlic and cook for a minute.\n' +
      '2. Stir in the coriander, cumin and a little allspice, then add the green beans and toss to coat.\n' +
      '3. Add the chopped tomatoes and a splash of water and simmer for 20 minutes until the beans are very tender and the sauce thick.\n' +
      '4. Finish with a squeeze of lemon and chopped coriander. Serve with rice or bread.',
    rawLines: [
      { rawName: 'Green beans', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Allspice', rawMeasure: '¼ tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Honey and harissa roasted carrots',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'North African',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the carrots into batons and toss with olive oil, a little harissa, honey, cumin and salt.\n' +
      '2. Spread on a tray and roast for 30 minutes, turning once, until tender and caramelised at the edges.\n' +
      '3. Squeeze over lemon and scatter with chopped parsley. Serve warm.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '600g' },
      { rawName: 'Harissa spice', rawMeasure: '2 tsp' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '½ tsp' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced yoghurt grilled chicken salad',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Toss the chicken breast strips with the yoghurt, paprika, cumin, crushed garlic, lemon and salt and leave for 20 minutes.\n' +
      '2. Cook the chicken in a hot griddle pan for 4–5 minutes a side until charred and cooked through.\n' +
      '3. Toss the leaves, cucumber, tomato and red onion with olive oil and lemon.\n' +
      '4. Slice the chicken over the salad and finish with a little extra yoghurt loosened with lemon as a dressing.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g' },
      { rawName: 'Greek yoghurt', rawMeasure: '150g' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Baby leaf salad', rawMeasure: '100g' },
      { rawName: 'Cucumber', rawMeasure: '½' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1 small' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced beef kofta curry',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Mix the minced beef with the grated onion, half the ginger-garlic paste, garam masala, cumin, chopped coriander, salt and pepper. Roll into small koftas.\n' +
      '2. Brown the koftas in oil in a pan, turning gently, then lift out.\n' +
      '3. Soften a little chopped onion in the pan, add the rest of the ginger-garlic paste, the turmeric and a little chilli powder, then the chopped tomatoes and a splash of water and simmer for 10 minutes.\n' +
      '4. Return the koftas and simmer gently for 15 minutes until cooked through. Finish with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '½ tsp' },
      { rawName: 'Chilli powder', rawMeasure: '½ tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sumac roasted chicken with freekeh',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the chicken thighs with olive oil, sumac, cumin, crushed garlic, lemon and salt and arrange in a roasting tin.\n' +
      '2. Roast for 40–45 minutes until golden and cooked through.\n' +
      '3. Meanwhile rinse the freekeh and simmer in stock for 20–25 minutes until tender, then drain any excess.\n' +
      '4. Fork chopped parsley and a drizzle of olive oil through the freekeh, top with the chicken and its juices and finish with more sumac.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Freekeh', rawMeasure: '250g' },
      { rawName: 'Sumac', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced bulgur and vegetable pilaf',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Soften the chopped onion and pepper in olive oil for 8 minutes, then stir in the garlic, cumin and tomato purée and cook for a minute.\n' +
      '2. Add the bulgur wheat and stir to coat, then pour in the stock and season.\n' +
      '3. Bring to the boil, cover and cook over a low heat for 12–15 minutes until the bulgur is tender and the liquid absorbed.\n' +
      '4. Rest off the heat for 5 minutes, fork through chopped parsley and a squeeze of lemon and serve.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '250g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '½' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Halal chicken doner kebab',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: ['High-protein'],
    instructions:
      '1. Toss the sliced chicken thighs with yoghurt, garlic, cumin, paprika, oregano, a little chilli flakes, lemon and salt and marinate for 30 minutes.\n' +
      '2. Spread the chicken on a tray and grill, turning, until charred at the edges and cooked through, then slice into strips.\n' +
      '3. Warm the flatbreads. Stir a little garlic and lemon into more yoghurt for a white sauce.\n' +
      '4. Fill the flatbreads with the chicken, shredded lettuce, tomato, red onion and the white sauce, with a drizzle of chilli sauce if you like.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '700g, boneless' },
      { rawName: 'Greek yoghurt', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '½ tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Pitta bread', rawMeasure: '4 large' },
      { rawName: 'Lettuce', rawMeasure: '¼ head' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Chilli sauce', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced lamb pilaf with apricots',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Brown the diced lamb in olive oil in a deep pan; set aside.\n' +
      '2. Soften the chopped onion, then stir in the cumin, cinnamon and a little allspice.\n' +
      '3. Return the lamb, add the rinsed rice, dried apricots and stock and season.\n' +
      '4. Bring to the boil, cover and cook gently for 20 minutes until the rice and lamb are tender and the liquid absorbed. Rest off the heat for 5 minutes.\n' +
      '5. Fork through, scatter with toasted almonds and chopped parsley and serve.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '500g, diced' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Dried apricots', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '½ tsp' },
      { rawName: 'Allspice', rawMeasure: '¼ tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Almonds', rawMeasure: '40g' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
]
