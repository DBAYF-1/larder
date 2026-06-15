// Curated everyday British home-cooking dinners for Larder.
//
// Each record is culinary content ONLY — the source/sourceId/imageUrl
// boilerplate is added by sources/curated.js (mapCurated). Ingredient lines
// use vocabulary from data/ingredients.js so they resolve cleanly (minced
// beef, kidney beans, basmati rice, coconut milk, passata, etc.). Method prose
// is original, written fresh in British English. No website wording is copied.
//
// These are the staples of the modern British midweek dinner table and sit
// alongside the classics in mains.js — no title here duplicates one there.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  {
    title: 'Spaghetti bolognese',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the olive oil in a large pan and fry the bacon until it crisps and releases its fat. Add the onion, carrot and celery and soften for 8–10 minutes.\n' +
      '2. Stir in the garlic for a minute, then add the minced beef and brown over a high heat, breaking up any clumps with a spoon.\n' +
      '3. Squeeze in the tomato purée and cook for a minute, then pour in the red wine and let it bubble away.\n' +
      '4. Add the chopped tomatoes, stock, bay leaf and oregano. Season, then simmer gently for 35–40 minutes until rich and thick, stirring now and then.\n' +
      '5. Meanwhile cook the spaghetti in plenty of salted water until al dente, then drain.\n' +
      '6. Discard the bay leaf, check the seasoning and toss the spaghetti through the sauce or pile the sauce on top. Serve with grated Parmesan.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Bacon', rawMeasure: '2 rashers' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Red wine', rawMeasure: '150ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Bay leaf', rawMeasure: '1' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Parmesan', rawMeasure: '30g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chilli con carne',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oil in a large pan and soften the onion for 6–8 minutes. Stir in the garlic, cumin, paprika and chilli powder and cook for a minute until fragrant.\n' +
      '2. Add the minced beef and brown over a high heat, breaking it up well.\n' +
      '3. Stir in the tomato purée, then add the chopped tomatoes, stock and a pinch of sugar. Season and bring to a simmer.\n' +
      '4. Cook gently for 30 minutes, stirring occasionally, until thickened. Add the drained kidney beans and simmer for a final 10 minutes.\n' +
      '5. Check the seasoning and serve over fluffy basmati rice, with soured cream and grated Cheddar if you like.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1–2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken tikka masala',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Mix the natural yoghurt with half the garlic, ginger, garam masala and paprika. Coat the diced chicken and leave to marinate for at least 20 minutes.\n' +
      '2. Heat the oil in a large pan and soften the onion for 8 minutes. Stir in the remaining garlic, ginger and spices and cook for a minute.\n' +
      '3. Push the onions aside, add the marinated chicken and brown the pieces all over.\n' +
      '4. Stir in the tomato purée and passata, then pour in a splash of water. Simmer gently for 15 minutes until the chicken is cooked through.\n' +
      '5. Stir through the double cream and warm without boiling. Season, scatter with chopped coriander and serve with basmati rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g, diced' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Passata', rawMeasure: '300ml' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken korma',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oil in a large pan and gently soften the onion for 10 minutes until pale gold. Stir in the garlic, ginger, garam masala and turmeric and cook for a minute.\n' +
      '2. Add the diced chicken and turn in the spices until sealed all over.\n' +
      '3. Pour in the coconut milk and a splash of water, then simmer gently for 15–18 minutes until the chicken is tender and the sauce has thickened.\n' +
      '4. Stir in the ground almonds and natural yoghurt and warm through without boiling.\n' +
      '5. Season, add a pinch of sugar to balance, and serve with basmati rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g, diced' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Ground almonds', rawMeasure: '2 tbsp' },
      { rawName: 'Natural yoghurt', rawMeasure: '2 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb rogan josh',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oil in a heavy pan and brown the diced lamb in batches over a high heat, then set aside.\n' +
      '2. Soften the onion in the same pan for 8 minutes, then stir in the garlic, ginger, cumin, coriander, paprika and garam masala and cook for a minute.\n' +
      '3. Return the lamb, stir in the tomato purée, then add the chopped tomatoes and natural yoghurt a spoonful at a time.\n' +
      '4. Pour in enough water to almost cover, season, then cover and simmer very gently for about 1.5 hours until the lamb is meltingly tender.\n' +
      '5. Uncover for the last 15 minutes to thicken the sauce. Scatter with coriander and serve with basmati rice.',
    rawLines: [
      { rawName: 'Lamb', rawMeasure: '600g, diced' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Natural yoghurt', rawMeasure: '3 tbsp' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '2 tsp' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Fish pie',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Boil the potatoes in salted water until tender, drain and mash with half the butter and a splash of the milk; season.\n' +
      '2. Lay the white fish and salmon in a wide pan, pour over the remaining milk and poach gently for 4–5 minutes. Lift out, flake the fish and reserve the milk.\n' +
      '3. Melt the rest of the butter in a pan, stir in the flour and cook for a minute, then gradually whisk in the warm poaching milk to a smooth sauce. Simmer until thickened.\n' +
      '4. Fold the flaked fish, prawns, peas and parsley through the sauce and tip into a baking dish.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Spread the mash over the top, fork the surface and bake for 25–30 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '300g' },
      { rawName: 'Salmon fillet', rawMeasure: '200g' },
      { rawName: 'Prawns', rawMeasure: '150g' },
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Macaroni cheese',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Cook the macaroni in plenty of salted water until just tender, then drain.\n' +
      '2. Melt the butter in a pan, stir in the flour and cook for a minute to a paste. Gradually whisk in the milk and simmer to a smooth, thick sauce.\n' +
      '3. Off the heat, stir in most of the grated Cheddar and the mustard until melted and glossy; season well.\n' +
      '4. Fold the drained macaroni through the sauce and tip into a baking dish.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Scatter over the remaining cheese and the breadcrumbs and bake for 20 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Macaroni', rawMeasure: '300g' },
      { rawName: 'Cheddar cheese', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Breadcrumbs', rawMeasure: '30g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lasagne',
    servingsBase: 6,
    totalTimeMinutes: 105,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Soften the onion, carrot and celery in the olive oil for 8–10 minutes, then stir in the garlic. Add the minced beef and brown well.\n' +
      '2. Stir in the tomato purée, then add the chopped tomatoes, stock and oregano. Season and simmer for 30 minutes until rich.\n' +
      '3. Meanwhile make the white sauce: melt the butter, stir in the flour, then gradually whisk in the milk and simmer until thickened. Season and stir in half the Parmesan.\n' +
      '4. Heat the oven to 190°C (fan 170°C). Layer the meat sauce, lasagne sheets and white sauce in a dish, finishing with white sauce.\n' +
      '5. Scatter over the remaining Parmesan and bake for 35–40 minutes until golden and bubbling. Rest for 10 minutes before serving.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Lasagne sheets', rawMeasure: '250g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (800g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sausage and bean casserole',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Brown the sausages all over in the oil in a large pan, then lift out and slice into chunks.\n' +
      '2. Soften the onion in the same pan for 6–8 minutes, then stir in the garlic and paprika for a minute.\n' +
      '3. Add the chopped tomatoes, stock and a dash of Worcestershire sauce, then return the sausages.\n' +
      '4. Simmer for 20 minutes, then stir in the drained kidney beans and baked beans and cook for a final 10 minutes until thick.\n' +
      '5. Season to taste and serve with crusty bread or mash.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '8' },
      { rawName: 'Baked beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef stew and dumplings',
    servingsBase: 4,
    totalTimeMinutes: 165,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Toss the stewing beef in the seasoned flour and brown in batches in the oil in a casserole; set aside.\n' +
      '2. Soften the onion, carrot and celery in the pan, stir in any leftover flour and the tomato purée, then gradually add the stock and Worcestershire sauce.\n' +
      '3. Return the beef with the bay leaf and thyme, bring to a simmer, cover and cook in the oven for about 2 hours until tender.\n' +
      '4. For the dumplings, rub the suet into the self-raising flour with a pinch of salt, then bring together with a little cold water into a soft dough and shape into eight balls.\n' +
      '5. Sit the dumplings on top of the stew, cover and cook for 20 minutes, then uncover for a final 10 minutes until risen and golden.',
    rawLines: [
      { rawName: 'Stewing beef', rawMeasure: '700g, diced' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Bay leaf', rawMeasure: '1' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Self-raising flour', rawMeasure: '150g' },
      { rawName: 'Suet', rawMeasure: '75g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
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
    dietLabels: [],
    instructions:
      '1. Fry the diced chicken in a little of the butter until golden, then lift out. Soften the onion and mushrooms in the rest of the butter for 8 minutes.\n' +
      '2. Stir in the flour and cook for a minute, then gradually add the stock and milk, stirring to a smooth, thick sauce.\n' +
      '3. Return the chicken, stir in the parsley and season well. Simmer for 5 minutes, then tip into a pie dish and leave to cool a little.\n' +
      '4. Heat the oven to 200°C (fan 180°C). Roll out the puff pastry, lay it over the dish, trim and crimp the edges and cut a steam hole. Brush with beaten egg.\n' +
      '5. Bake for 25–30 minutes until the pastry is puffed and deep golden.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g, diced' },
      { rawName: 'Mushroom', rawMeasure: '250g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Puff pastry', rawMeasure: '320g' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Gammon and chips',
    servingsBase: 2,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Cut the potatoes into thick chips, rinse and pat dry. Fry in oil at 140°C for 6–7 minutes until soft and pale, then drain.\n' +
      '2. Snip the rind of the gammon steaks in a few places to stop them curling. Brush with a little oil and grind over some black pepper.\n' +
      '3. Fry or grill the gammon for 4–5 minutes each side until cooked through and lightly charred at the edges.\n' +
      '4. Raise the oil to 180°C and fry the chips again for 2–3 minutes until crisp and golden; drain and salt.\n' +
      '5. Fry the eggs and serve each gammon steak with the chips, a fried egg and a ring of grilled pineapple.',
    rawLines: [
      { rawName: 'Gammon steak', rawMeasure: '2' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Pineapple', rawMeasure: '2 rings' },
      { rawName: 'Vegetable oil', rawMeasure: '1 litre, for frying' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roast beef with Yorkshire puddings',
    servingsBase: 4,
    totalTimeMinutes: 130,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Rub the beef with oil, salt and plenty of pepper and sit it in a roasting tin. Roast for 20 minutes, then drop to 180°C (fan 160°C) and roast for about 45 minutes for medium-rare. Rest, loosely covered, for 20 minutes.\n' +
      '2. Whisk the flour, eggs and milk with a pinch of salt to a smooth batter and rest while the beef cooks.\n' +
      '3. Parboil the potatoes for 8 minutes, drain and rough up, then roast in hot oil for 45–50 minutes until crisp.\n' +
      '4. Heat a little oil in a 12-hole tin until smoking, pour in the batter and bake at 220°C for 20–25 minutes until risen and golden.\n' +
      '5. For the gravy, stir the flour into the beef pan juices, whisk in the stock and simmer until glossy. Carve the beef and serve with everything.',
    rawLines: [
      { rawName: 'Beef brisket', rawMeasure: '1.2kg' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Plain flour', rawMeasure: '140g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Milk', rawMeasure: '200ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Vegetable oil', rawMeasure: '6 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roast pork with crackling',
    servingsBase: 4,
    totalTimeMinutes: 150,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Pat the pork rind very dry, score it closely and rub all over with oil and plenty of salt.\n' +
      '2. Sit the joint on the sliced onion in a roasting tin and roast for 30 minutes to blister the crackling, then drop to 180°C (fan 160°C).\n' +
      '3. Roast for a further 1 hour 15 minutes until cooked through and the crackling is crisp. Rest, loosely covered, for 20 minutes.\n' +
      '4. Meanwhile parboil the potatoes for 8 minutes, drain and rough up, then roast in hot oil for 45–50 minutes until golden.\n' +
      '5. For the gravy, stir the flour into the pan juices, whisk in the stock and simmer until glossy. Carve the pork and serve with the crackling, potatoes and apple sauce.',
    rawLines: [
      { rawName: 'Pork shoulder', rawMeasure: '1.3kg, rind scored' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Vegetable oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork chops with apple sauce',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Peel and chop the apples and simmer in a small pan with a splash of water and the sugar for 8–10 minutes until soft. Beat to a rough sauce and keep warm.\n' +
      '2. Pat the pork chops dry and season well on both sides.\n' +
      '3. Heat the oil and a knob of butter in a frying pan and cook the chops for 4–5 minutes each side until golden and cooked through, spooning over the buttery juices.\n' +
      '4. Rest the chops for a few minutes, adding the sage to the pan to crisp.\n' +
      '5. Serve the chops with the warm apple sauce, the crisp sage and buttered mash or greens.',
    rawLines: [
      { rawName: 'Pork chop', rawMeasure: '2' },
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Caster sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Sage', rawMeasure: '4 leaves' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef chow mein',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Cook the noodles according to the packet, drain, toss with a little sesame oil and set aside.\n' +
      '2. Slice the beef steak thinly and toss with a splash of the soy sauce. Heat a wok with the vegetable oil until very hot and stir-fry the beef for 2 minutes until browned; lift out.\n' +
      '3. Add the onion, pepper and carrot and stir-fry for 3–4 minutes, then add the garlic, ginger and bean sprouts for a minute.\n' +
      '4. Return the beef with the noodles, the remaining soy sauce and a splash of water, and toss over a high heat until hot and glossy.\n' +
      '5. Scatter with sliced spring onion and serve straight away.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '350g' },
      { rawName: 'Noodles', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Bean sprouts', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Sweet and sour chicken',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Toss the diced chicken in the cornflour. Heat the oil in a wok and fry the chicken in batches until golden and cooked through; set aside.\n' +
      '2. Stir-fry the onion, pepper and carrot for 3–4 minutes until just tender, then add the garlic for a minute.\n' +
      '3. Mix the tomato ketchup, vinegar, soy sauce, sugar and pineapple juice with a little water and a teaspoon of cornflour.\n' +
      '4. Pour the sauce into the wok, bring to a simmer and cook until thickened and glossy.\n' +
      '5. Return the chicken with the pineapple chunks, toss to coat and serve with rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g, diced' },
      { rawName: 'Pineapple', rawMeasure: '1 tin (220g)' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato ketchup', rawMeasure: '3 tbsp' },
      { rawName: 'Vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '2 tbsp' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
    ],
  },
  {
    title: 'Egg fried rice',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Cook the rice ahead and cool completely, ideally chilled — cold rice fries best.\n' +
      '2. Beat the eggs. Heat half the oil in a hot wok, pour in the eggs and scramble lightly, then tip out and set aside.\n' +
      '3. Add the remaining oil and stir-fry the spring onion, peas and sweetcorn for 2 minutes.\n' +
      '4. Add the cold rice and toss over a high heat, breaking up any clumps, for 3–4 minutes until piping hot.\n' +
      '5. Return the egg, splash in the soy sauce and sesame oil, toss together and serve at once.',
    rawLines: [
      { rawName: 'Rice', rawMeasure: '300g (cooked weight 750g)' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Sweetcorn', rawMeasure: '100g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Vegetable curry',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegan'],
    instructions:
      '1. Heat the oil in a large pan and soften the onion for 8 minutes. Stir in the garlic, ginger and curry powder and cook for a minute until fragrant.\n' +
      '2. Add the diced potato and carrot and turn in the spices, then pour in the chopped tomatoes and coconut milk.\n' +
      '3. Simmer for 15 minutes, then add the cauliflower florets and green beans and cook for a further 10 minutes until everything is tender.\n' +
      '4. Stir through the peas and warm for a couple of minutes. Season to taste.\n' +
      '5. Scatter with coriander and serve with basmati rice.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '300g' },
      { rawName: 'Cauliflower', rawMeasure: '1/2 head' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Green beans', rawMeasure: '150g' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tarka dhal',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegan'],
    instructions:
      '1. Rinse the red lentils well, then tip into a pan with the turmeric and plenty of water. Bring to the boil, skim, then simmer for 25–30 minutes, stirring now and then, until soft and soupy.\n' +
      '2. Meanwhile heat the oil in a small frying pan and fry the onion until deep gold.\n' +
      '3. Add the garlic, ginger, cumin and a little chilli and sizzle for a minute to make a fragrant tarka.\n' +
      '4. Stir most of the tarka into the lentils with a squeeze of lemon and season well, loosening with a little water if needed.\n' +
      '5. Spoon the rest of the tarka over the top, scatter with coriander and serve with rice or flatbread.',
    rawLines: [
      { rawName: 'Red lentils', rawMeasure: '250g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea curry',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegan'],
    instructions:
      '1. Heat the oil in a pan and soften the onion for 8 minutes. Stir in the garlic, ginger, cumin, garam masala and turmeric and cook for a minute.\n' +
      '2. Add the chopped tomatoes and a splash of water, then simmer for 10 minutes until thickened.\n' +
      '3. Tip in the drained chickpeas and coconut milk and simmer for a further 12–15 minutes.\n' +
      '4. Stir through the spinach until wilted and season to taste with a squeeze of lemon.\n' +
      '5. Scatter with coriander and serve with basmati rice.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (800g)' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cheese and beans jacket potato',
    servingsBase: 2,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes all over, rub with a little oil and salt.\n' +
      '2. Bake directly on the oven shelf for about 1 hour 15 minutes until the skins are crisp and the insides fluffy.\n' +
      '3. Towards the end, warm the baked beans through gently in a small pan.\n' +
      '4. Split each potato open, add a knob of butter and half the grated Cheddar, and fluff the inside with a fork.\n' +
      '5. Spoon over the hot beans and finish with the remaining cheese so it melts into the top.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '2 large baking potatoes' },
      { rawName: 'Baked beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Fish finger sandwich',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C) and bake the fish fingers on a tray for 15–18 minutes, turning once, until crisp and golden.\n' +
      '2. Meanwhile butter the bread and mix the mayonnaise with a squeeze of lemon.\n' +
      '3. Spread the lemony mayonnaise (or a little tomato ketchup) over the bread.\n' +
      '4. Lay the hot fish fingers on the bottom slices and add a few crisp lettuce leaves.\n' +
      '5. Top with the remaining bread, press gently and cut in half to serve.',
    rawLines: [
      { rawName: 'Fish fingers', rawMeasure: '6' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Mayonnaise', rawMeasure: '2 tbsp' },
      { rawName: 'Lettuce', rawMeasure: 'a few leaves' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Tomato ketchup', rawMeasure: '1 tbsp (optional)' },
      { rawName: 'Butter', rawMeasure: 'for spreading' },
    ],
  },
  {
    title: 'Cheese omelette',
    servingsBase: 1,
    totalTimeMinutes: 10,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Beat the eggs with a little salt and pepper until just combined.\n' +
      '2. Melt the butter in a non-stick frying pan over a medium heat until foaming.\n' +
      '3. Pour in the eggs and, as they begin to set, draw the edges into the centre and tilt the pan so the runny egg fills the gaps.\n' +
      '4. While the top is still slightly soft, scatter the grated Cheddar over one half.\n' +
      '5. Fold the omelette over the cheese, slide onto a plate and serve at once.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Cheddar cheese', rawMeasure: '50g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spanish-style chicken',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Brown the chicken thighs skin-side down in the oil in a large pan until golden, then lift out.\n' +
      '2. Soften the onion and pepper in the same pan for 8 minutes, then add the chorizo and let it release its oil. Stir in the garlic and paprika.\n' +
      '3. Pour in the chopped tomatoes and stock, then return the chicken skin-side up.\n' +
      '4. Simmer gently for 30 minutes until the chicken is cooked through and the sauce is rich.\n' +
      '5. Season, scatter with parsley and serve with rice or crusty bread.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Chorizo', rawMeasure: '100g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken Caesar salad',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Season the chicken breasts and fry in a little oil for 6–7 minutes each side until golden and cooked through. Rest, then slice.\n' +
      '2. Tear the bread into chunks, toss with a little oil and bake at 200°C for 8–10 minutes until crisp to make croutons.\n' +
      '3. For the dressing, mash the anchovy fillets with the garlic, then whisk in the mayonnaise, most of the Parmesan, a squeeze of lemon and a little water to loosen.\n' +
      '4. Toss the crisp lettuce leaves with most of the dressing.\n' +
      '5. Top with the sliced chicken and croutons, drizzle over the rest of the dressing and finish with the remaining Parmesan.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Lettuce', rawMeasure: '1 cos' },
      { rawName: 'Bread', rawMeasure: '2 slices' },
      { rawName: 'Anchovy fillets', rawMeasure: '4' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef burger and chips',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Cut the potatoes into chips, rinse and pat dry. Fry in oil at 140°C for 6–7 minutes until soft and pale, then drain.\n' +
      '2. Mix the minced beef with the grated onion and seasoning, then shape into four patties and chill for 10 minutes.\n' +
      '3. Fry or griddle the burgers for 4–5 minutes each side until cooked to your liking, adding a slice of Cheddar to melt at the end.\n' +
      '4. Raise the oil to 180°C and fry the chips again for 2–3 minutes until crisp and golden; drain and salt.\n' +
      '5. Toast the buns, spread with a little mayonnaise and tomato ketchup, and build each burger with lettuce, tomato and onion. Serve with the chips.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Burger buns', rawMeasure: '4' },
      { rawName: 'Potato', rawMeasure: '700g' },
      { rawName: 'Cheddar cheese', rawMeasure: '4 slices' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Lettuce', rawMeasure: 'a few leaves' },
      { rawName: 'Mayonnaise', rawMeasure: '2 tbsp' },
      { rawName: 'Tomato ketchup', rawMeasure: '2 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 litre, for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roast turkey dinner',
    servingsBase: 6,
    totalTimeMinutes: 180,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Sit the turkey crown in a roasting tin, rub all over with softened butter and season well.\n' +
      '2. Cover loosely with foil and roast for about 2 hours, removing the foil for the last 30 minutes, until the juices run clear. Rest, covered, for 20 minutes.\n' +
      '3. Parboil the potatoes for 8 minutes, drain and rough up, then roast in hot oil for 45–50 minutes until crisp.\n' +
      '4. Wrap each chipolata in half a rasher of bacon and roast for 25 minutes to make pigs in blankets. Boil the carrots and Brussels sprouts until just tender.\n' +
      '5. For the gravy, stir the flour into the turkey pan juices, whisk in the stock and simmer until glossy. Carve the turkey and serve with everything and the stuffing.',
    rawLines: [
      { rawName: 'Turkey', rawMeasure: '1 crown (about 2kg)' },
      { rawName: 'Potato', rawMeasure: '1kg' },
      { rawName: 'Carrot', rawMeasure: '4' },
      { rawName: 'Brussels sprouts', rawMeasure: '400g' },
      { rawName: 'Chipolata sausages', rawMeasure: '6' },
      { rawName: 'Bacon', rawMeasure: '3 rashers' },
      { rawName: 'Sage and onion stuffing', rawMeasure: '1 pack' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Vegetable oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Minestrone soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oil in a large pan and soften the onion, carrot and celery for 8–10 minutes. Stir in the garlic for a minute.\n' +
      '2. Add the chopped tomatoes, stock and oregano, then bring to a simmer.\n' +
      '3. Tip in the drained cannellini beans and the small pasta and cook for 10–12 minutes until the pasta is tender.\n' +
      '4. Stir through the courgette and spinach for the last few minutes until just wilted. Season to taste.\n' +
      '5. Ladle into bowls and finish with grated Parmesan and a little black pepper.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '100g small shapes' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Spinach', rawMeasure: '50g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Parmesan', rawMeasure: '30g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna pasta bake',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Cook the penne in salted water until just tender, then drain.\n' +
      '2. Melt the butter in a pan, stir in the flour and cook for a minute, then gradually whisk in the milk to a smooth sauce. Simmer until thickened.\n' +
      '3. Off the heat, stir in most of the grated Cheddar and the mustard; season well.\n' +
      '4. Fold the pasta, drained tuna, sweetcorn and peas through the sauce and tip into a baking dish.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Scatter over the remaining cheese and bake for 20–25 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Penne', rawMeasure: '300g' },
      { rawName: 'Tuna', rawMeasure: '2 tins (320g)' },
      { rawName: 'Sweetcorn', rawMeasure: '150g' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cauliflower and chickpea curry',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegan'],
    instructions:
      '1. Heat the oil in a large pan and soften the onion for 8 minutes. Stir in the garlic, ginger, curry powder and turmeric and cook for a minute.\n' +
      '2. Add the cauliflower florets and turn in the spices, then pour in the chopped tomatoes and coconut milk.\n' +
      '3. Simmer for 15 minutes until the cauliflower is almost tender, then tip in the drained chickpeas.\n' +
      '4. Cook for a further 8–10 minutes until everything is tender and the sauce has thickened. Stir through the spinach until wilted.\n' +
      '5. Season, finish with a squeeze of lemon and coriander, and serve with basmati rice.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegan'],
    instructions:
      '1. Cook the noodles according to the packet, drain and toss with a little sesame oil.\n' +
      '2. Heat the vegetable oil in a wok until very hot. Add the harder vegetables — carrot, broccoli and pepper — and stir-fry for 3–4 minutes.\n' +
      '3. Add the mushrooms, spring onion, garlic and ginger and stir-fry for a further 2 minutes.\n' +
      '4. Tip in the bean sprouts and noodles, then pour in the soy sauce and a splash of water and toss over a high heat until hot.\n' +
      '5. Finish with a drizzle of sesame oil and serve straight away.',
    rawLines: [
      { rawName: 'Noodles', rawMeasure: '250g' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Bean sprouts', rawMeasure: '150g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Ratatouille',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Vegan'],
    instructions:
      '1. Heat the olive oil in a large pan and fry the diced aubergine until golden, then lift out.\n' +
      '2. Add the courgette and pepper and colour for a few minutes, then lift out.\n' +
      '3. Soften the onion in the same pan for 8 minutes, then stir in the garlic and the tomato purée.\n' +
      '4. Return all the vegetables, add the chopped tomatoes and oregano, season and simmer gently for 25–30 minutes until thick and glossy.\n' +
      '5. Stir through the basil and serve warm with crusty bread or rice.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Quiche Lorraine',
    servingsBase: 6,
    totalTimeMinutes: 75,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Roll out the shortcrust pastry and line a 23cm tart tin, then chill for 15 minutes.\n' +
      '2. Line the pastry with baking paper and beans and blind-bake for 15 minutes, then remove the paper and bake for a further 5 minutes.\n' +
      '3. Meanwhile fry the bacon until crisp, then scatter over the pastry base with most of the grated Cheddar.\n' +
      '4. Beat the eggs with the double cream and milk, season with pepper and a little salt, and pour into the case.\n' +
      '5. Scatter over the remaining cheese and bake for 30–35 minutes until just set with a slight wobble. Cool a little before serving.',
    rawLines: [
      { rawName: 'Shortcrust pastry', rawMeasure: '320g' },
      { rawName: 'Bacon', rawMeasure: '6 rashers' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Corned beef hash',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Boil the diced potatoes in salted water for 6–8 minutes until just tender, then drain well.\n' +
      '2. Heat the oil in a large frying pan and soften the onion for 6–8 minutes.\n' +
      '3. Add the potatoes and fry until they start to crisp and colour at the edges.\n' +
      '4. Stir in the diced corned beef and a dash of Worcestershire sauce, pressing the hash down to build a golden crust, then turn it in sections.\n' +
      '5. Season with plenty of pepper and serve topped with a fried egg and a spoonful of baked beans.',
    rawLines: [
      { rawName: 'Corned beef', rawMeasure: '340g' },
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Baked beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
]
