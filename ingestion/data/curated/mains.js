// Curated classic British savoury recipes for Larder.
//
// Each record is culinary content ONLY — the source/sourceId/imageUrl
// boilerplate is added by sources/curated.js (mapCurated). Ingredient lines
// use vocabulary from data/ingredients.js so they resolve cleanly (plain
// flour, minced beef/lamb, double cream, etc.). Method prose is original,
// written fresh in British English. No website wording is copied.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  {
    title: "Shepherd's pie",
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat a splash of olive oil in a large pan and brown the minced lamb over a high heat, breaking it up as it colours. Lift out and set aside.\n' +
      '2. Lower the heat, add the onion, carrot and celery and soften for 8–10 minutes. Stir in the tomato purée and cook for a minute.\n' +
      '3. Return the lamb, pour in the stock and Worcestershire sauce, season, then simmer gently for 25 minutes until thick and glossy. Stir through the peas.\n' +
      '4. Meanwhile, boil the potatoes in salted water until tender, drain well, then mash with the butter and milk. Season to taste.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Tip the lamb into a baking dish, spoon the mash over and rough up the top with a fork.\n' +
      '6. Bake for 25–30 minutes until the topping is golden and the filling bubbles at the edges. Rest for 5 minutes before serving.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
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
    dietLabels: [],
    instructions:
      '1. Brown the minced beef in a large pan over a high heat, then lift out, leaving the fat behind.\n' +
      '2. Soften the onion, carrot and celery in the pan for 8–10 minutes. Stir in the tomato purée and cook for a minute.\n' +
      '3. Return the beef, add the stock and Worcestershire sauce, season well and simmer for 25–30 minutes until rich and thickened.\n' +
      '4. Meanwhile boil the potatoes until tender, drain and mash with the butter and milk; season to taste.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Spoon the beef into a baking dish, top with the mash, fork the surface and scatter over the grated Cheddar.\n' +
      '6. Bake for 25–30 minutes until golden and bubbling. Rest briefly before serving.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '50g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Toad in the hole',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Whisk the flour, eggs and milk with a pinch of salt into a smooth batter and leave to rest for 30 minutes.\n' +
      '2. Heat the oven to 220°C (fan 200°C). Put the vegetable oil and sausages into a roasting tin and roast for 10 minutes until the sausages colour and the fat is smoking hot.\n' +
      '3. Quickly pour the batter around the sausages and return to the oven at once.\n' +
      '4. Bake for 25–30 minutes without opening the door until the batter is risen, deep gold and crisp.\n' +
      '5. Serve straight away with onion gravy and greens.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '8' },
      { rawName: 'Plain flour', rawMeasure: '140g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Milk', rawMeasure: '250ml' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Bangers and mash',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Fry the sausages gently in a little vegetable oil for 15–20 minutes, turning, until browned all over and cooked through.\n' +
      '2. Meanwhile boil the potatoes in salted water until tender, drain well, then mash with the butter and milk and season.\n' +
      '3. For the gravy, soften the sliced onions in the same pan until deep gold, stir in the flour, then gradually add the stock. Simmer until thickened and glossy.\n' +
      '4. Pile the mash onto plates, top with the sausages and pour over plenty of onion gravy.',
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
  {
    title: 'Full English breakfast',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Grill or fry the sausages first, turning, as they take the longest — about 15 minutes.\n' +
      '2. Fry the bacon until done to your liking and keep warm. Halve the tomatoes and fry cut-side down with the mushrooms in a little oil.\n' +
      '3. Tip the baked beans into a small pan and warm through gently.\n' +
      '4. Fry the eggs in the bacon pan, basting the tops with the hot fat until set.\n' +
      '5. Toast the bread, butter it, and serve everything together while hot.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '4' },
      { rawName: 'Bacon', rawMeasure: '4 rashers' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Baked beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Butter', rawMeasure: 'for spreading' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Fish and chips',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Cut the potatoes into thick chips, rinse and pat dry. Fry in oil at 140°C for 6–7 minutes until soft but pale, then drain.\n' +
      '2. Whisk the flour, a pinch of salt and the cold sparkling water into a smooth, thick batter.\n' +
      '3. Heat the oil to 180°C. Dust each fish fillet in a little extra flour, dip into the batter and lower carefully into the oil.\n' +
      '4. Fry the fish for 6–8 minutes until the batter is crisp and golden; drain on kitchen paper and season.\n' +
      '5. Return the chips to the hot oil for a second fry of 2–3 minutes until crisp and golden. Drain and salt.\n' +
      '6. Serve the fish and chips together with mushy peas and a wedge of lemon.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Plain flour', rawMeasure: '200g' },
      { rawName: 'Sparkling water', rawMeasure: '300ml, chilled' },
      { rawName: 'Vegetable oil', rawMeasure: '1.5 litres, for frying' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Steak and kidney pie',
    servingsBase: 4,
    totalTimeMinutes: 180,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Toss the diced beef steak and kidney in the seasoned flour. Brown in batches in a little oil in a heavy pan, then set aside.\n' +
      '2. Soften the onion in the pan, return the meat, pour in the stock and Worcestershire sauce, then cover and simmer very gently for 1.5–2 hours until tender. Leave to cool.\n' +
      '3. Heat the oven to 200°C (fan 180°C). Spoon the filling into a pie dish.\n' +
      '4. Roll out the pastry, lay it over the dish, trim and crimp the edges, then cut a small steam hole. Brush with beaten egg.\n' +
      '5. Bake for 30–35 minutes until the pastry is deep golden and crisp. Rest for 5 minutes before serving.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '600g, diced' },
      { rawName: "Lamb's kidney", rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Shortcrust pastry', rawMeasure: '375g' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lancashire hotpot',
    servingsBase: 4,
    totalTimeMinutes: 150,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C). Toss the diced lamb in the seasoned flour and brown in a little oil in a casserole, then set aside.\n' +
      '2. Soften the onion and carrot in the same pan, stir in any leftover flour and gradually add the stock and Worcestershire sauce.\n' +
      '3. Return the lamb, season, and bring to a simmer. Arrange the sliced potatoes over the top in overlapping layers, brush with melted butter and season.\n' +
      '4. Cover and bake for 1.5 hours, then uncover and bake for a further 30 minutes until the potatoes are golden and the lamb is meltingly tender.',
    rawLines: [
      { rawName: 'Lamb', rawMeasure: '700g, diced' },
      { rawName: 'Potato', rawMeasure: '700g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Butter', rawMeasure: '30g, melted' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cornish pasty',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Rub the butter into the flour with a pinch of salt, then bring together with cold water into a firm dough. Wrap and chill for 30 minutes.\n' +
      '2. Toss the finely diced beef steak, potato, swede and onion together, season generously with salt and pepper.\n' +
      '3. Heat the oven to 200°C (fan 180°C). Roll the pastry and cut four circles. Pile the filling onto one half of each, dot with butter.\n' +
      '4. Brush the edges with beaten egg, fold over and crimp into a tight seal along the top. Brush all over with egg.\n' +
      '5. Bake for 45–50 minutes until deep golden. Cool a little before eating.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '350g' },
      { rawName: 'Potato', rawMeasure: '200g' },
      { rawName: 'Swede', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Plain flour', rawMeasure: '400g' },
      { rawName: 'Butter', rawMeasure: '200g' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: "Ploughman's lunch",
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Cut a generous wedge of Cheddar and arrange on a board or plate.\n' +
      '2. Add thick slices of crusty bread, buttered, and a spoonful of pickle and chutney.\n' +
      '3. Halve the boiled eggs and add to the board with the pickled onions.\n' +
      '4. Finish with crisp apple wedges, cucumber, tomato and a few salad leaves. Serve at room temperature.',
    rawLines: [
      { rawName: 'Cheddar cheese', rawMeasure: '200g' },
      { rawName: 'Bread', rawMeasure: '4 thick slices' },
      { rawName: 'Egg', rawMeasure: '2, hard-boiled' },
      { rawName: 'Branston pickle', rawMeasure: '2 tbsp' },
      { rawName: 'Pickled onions', rawMeasure: '4' },
      { rawName: 'Apple', rawMeasure: '1' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Cucumber', rawMeasure: '1/4' },
      { rawName: 'Butter', rawMeasure: 'for spreading' },
    ],
  },
  {
    title: 'Welsh rarebit',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Melt the butter in a small pan, stir in the flour and cook for a minute to a paste.\n' +
      '2. Gradually whisk in the milk, then the ale, and cook to a thick smooth sauce.\n' +
      '3. Off the heat, stir in the grated Cheddar, mustard and Worcestershire sauce until glossy and melted; season with black pepper.\n' +
      '4. Toast the bread on both sides. Spoon the cheese mixture thickly over the toast.\n' +
      '5. Grill until bubbling and blistered golden brown. Serve at once.',
    rawLines: [
      { rawName: 'Cheddar cheese', rawMeasure: '200g' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Milk', rawMeasure: '50ml' },
      { rawName: 'Ale', rawMeasure: '50ml' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bubble and squeak',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Roughly crush the cooked potatoes and mix with the shredded cooked cabbage and any leftover greens. Season well.\n' +
      '2. Melt the butter with a little oil in a large frying pan over a medium heat.\n' +
      '3. Press the mixture into the pan in an even layer and fry for 6–8 minutes until a golden crust forms underneath.\n' +
      '4. Break it up and turn in sections to colour the other side, pressing down again, for another 6–8 minutes.\n' +
      '5. Serve hot, crisp and golden, on its own or topped with a fried egg.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '500g, cooked' },
      { rawName: 'Cabbage', rawMeasure: '300g, cooked' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roast chicken dinner',
    servingsBase: 4,
    totalTimeMinutes: 110,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the chicken in a roasting tin, rub all over with softened butter and season. Tuck the lemon halves inside.\n' +
      '2. Roast for about 1 hour 20 minutes, basting once or twice, until the juices run clear. Rest, loosely covered, for 15 minutes.\n' +
      '3. Meanwhile parboil the potatoes for 8 minutes, drain and rough up, then roast in hot oil for 45–50 minutes until crisp.\n' +
      '4. Boil the carrots and peas until just tender.\n' +
      '5. For the gravy, stir the flour into the chicken pan juices, then whisk in the stock and simmer until thickened.\n' +
      '6. Carve the chicken and serve with the roast potatoes, vegetables and gravy.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1 (about 1.5kg)' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Carrot', rawMeasure: '4' },
      { rawName: 'Peas', rawMeasure: '200g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
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
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Break the cauliflower into florets and boil for 5–6 minutes until just tender; drain well.\n' +
      '2. Melt the butter in a pan, stir in the flour and cook for a minute. Gradually whisk in the milk to a smooth sauce and simmer until thickened.\n' +
      '3. Off the heat, stir in most of the grated Cheddar and the mustard; season.\n' +
      '4. Tip the cauliflower into a baking dish, pour over the sauce and scatter with the remaining cheese.\n' +
      '5. Bake for 20–25 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jacket potato with beans',
    servingsBase: 2,
    totalTimeMinutes: 90,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the potatoes all over, rub with a little oil and salt.\n' +
      '2. Bake directly on the oven shelf for about 1 hour 15 minutes until the skins are crisp and the insides fluffy.\n' +
      '3. Towards the end, warm the baked beans through gently in a small pan.\n' +
      '4. Split each potato open, add a knob of butter and fluff the inside with a fork.\n' +
      '5. Spoon over the hot beans and top with grated Cheddar.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '2 large baking potatoes' },
      { rawName: 'Baked beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cheddar cheese', rawMeasure: '60g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Kedgeree',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Poach the smoked haddock gently in the milk for 8 minutes until it flakes. Lift out, reserving the milk, and flake the fish, discarding skin and bones.\n' +
      '2. Soft-boil the eggs for 6 minutes, then cool, peel and quarter.\n' +
      '3. Soften the onion in the butter, stir in the curry powder and rice and coat well.\n' +
      '4. Pour in the reserved milk topped up with water, cover and simmer for 12–15 minutes until the rice is tender and the liquid absorbed.\n' +
      '5. Fork through the flaked fish, peas and most of the parsley. Top with the eggs and remaining parsley and serve with lemon wedges.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '400g' },
      { rawName: 'Basmati rice', rawMeasure: '250g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cullen skink',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Soften the onion in the butter until translucent. Add the diced potato and stir to coat.\n' +
      '2. Pour in the milk and an equal amount of water, bring to a gentle simmer and cook for 12–15 minutes until the potato is tender.\n' +
      '3. Lay the smoked haddock on top, cover and poach for 5–6 minutes until it flakes. Lift out and flake, discarding skin and bones.\n' +
      '4. Lightly crush some of the potato to thicken the soup, then return the flaked fish and stir through the double cream.\n' +
      '5. Season, scatter with parsley and serve with crusty bread.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '400g' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Scotch eggs',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Boil four of the eggs for 6–7 minutes, then cool in iced water and peel carefully.\n' +
      '2. Skin the sausages and mix the meat with the mustard and a little black pepper. Divide into four.\n' +
      '3. Flatten each portion, wrap evenly around a boiled egg and seal well.\n' +
      '4. Roll each in flour, then in the remaining beaten egg, then in breadcrumbs to coat fully.\n' +
      '5. Deep-fry at 170°C for 7–8 minutes until deep golden and the sausage is cooked through. Drain and cool a little before serving.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '5' },
      { rawName: 'Sausage', rawMeasure: '6 (about 400g)' },
      { rawName: 'Breadcrumbs', rawMeasure: '100g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 litre, for frying' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sausage rolls',
    servingsBase: 6,
    totalTimeMinutes: 45,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Skin the sausages and mix the meat with the mustard, mixed herbs and black pepper.\n' +
      '2. Roll out the puff pastry and cut into two long strips. Pipe or spoon the sausage meat down the centre of each.\n' +
      '3. Brush one long edge with beaten egg, fold the pastry over the filling and press to seal along the base.\n' +
      '4. Cut into short rolls, sit on a lined tray, brush with egg and snip a couple of vents in each.\n' +
      '5. Bake for 22–25 minutes until puffed and deep golden. Cool slightly before serving.',
    rawLines: [
      { rawName: 'Sausage', rawMeasure: '6 (about 400g)' },
      { rawName: 'Puff pastry', rawMeasure: '320g' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Mixed herbs', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cumberland sausage and mash',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Coil the Cumberland sausage in an oiled tin, securing with a skewer, and roast for 30–35 minutes until browned and cooked through.\n' +
      '2. Meanwhile boil the potatoes until tender, drain and mash with the butter and milk; season.\n' +
      '3. For the gravy, soften the sliced onions until deep gold, stir in the flour, then gradually add the stock and simmer until glossy.\n' +
      '4. Cut the sausage coil into portions and serve over the mash with onion gravy and peas.',
    rawLines: [
      { rawName: 'Cumberland sausage', rawMeasure: '600g coil' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Peas', rawMeasure: '200g' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '60ml' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Liver and onions',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      "1. Soften the sliced onions slowly in the butter and a little oil for 12–15 minutes until sweet and deep gold. Lift out and keep warm.\n" +
      '2. Toss the liver slices in the seasoned flour, shaking off the excess.\n' +
      '3. Raise the heat and fry the liver for about 1–2 minutes each side until browned but still blushing pink within. Lift out and rest.\n' +
      '4. Return the onions to the pan, sprinkle in any leftover flour, then pour in the stock and Worcestershire sauce and simmer to a gravy.\n' +
      '5. Spoon the onion gravy over the liver and serve with mash and greens.',
    rawLines: [
      { rawName: "Lamb's liver", rawMeasure: '500g, sliced' },
      { rawName: 'Onion', rawMeasure: '3' },
      { rawName: 'Plain flour', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Ham, egg and chips',
    servingsBase: 2,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Cut the potatoes into chips, rinse and pat dry. Fry in oil at 140°C for 6–7 minutes until soft and pale, then drain.\n' +
      '2. Raise the oil to 180°C and fry the chips again for 2–3 minutes until crisp and golden; drain and salt.\n' +
      '3. Fry the eggs in a little oil, basting the tops until set to your liking.\n' +
      '4. Warm the ham through briefly in the pan if you like it hot.\n' +
      '5. Plate the ham with the chips and fried eggs and serve at once.',
    rawLines: [
      { rawName: 'Ham', rawMeasure: '4 thick slices' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 litre, for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: "Fisherman's pie",
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Boil the potatoes until tender, drain and mash with the butter and a splash of the milk; season.\n' +
      '2. Poach the white fish and salmon gently in the remaining milk for 5 minutes, then lift out and flake, reserving the milk.\n' +
      '3. Melt the butter in a pan, stir in the flour, then gradually whisk in the poaching milk to a smooth sauce. Simmer until thickened.\n' +
      '4. Stir the flaked fish, prawns, peas and parsley into the sauce and tip into a baking dish.\n' +
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
    title: 'Coronation chicken',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Poach the chicken breasts in lightly salted water for 15 minutes until cooked through, then cool and cut into bite-sized pieces.\n' +
      '2. Mix the mayonnaise and natural yoghurt with the curry powder, mango chutney and a squeeze of lemon juice. Season to taste.\n' +
      '3. Fold the chicken through the dressing along with the sultanas until evenly coated.\n' +
      '4. Scatter over the toasted flaked almonds and serve on a bed of salad leaves, with rice or in a sandwich.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp' },
      { rawName: 'Natural yoghurt', rawMeasure: '3 tbsp' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Mango chutney', rawMeasure: '2 tbsp' },
      { rawName: 'Sultanas', rawMeasure: '40g' },
      { rawName: 'Almonds', rawMeasure: '30g, flaked' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef Wellington',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Season the beef fillet and sear in a hot pan with a little oil on all sides until browned. Brush with mustard and leave to cool.\n' +
      '2. Fry the finely chopped mushrooms with the thyme until all the moisture has cooked off to a dry paste; cool completely.\n' +
      '3. Lay the prosciutto on cling film, spread with the mushroom mixture, sit the beef on top and roll into a tight cylinder. Chill for 20 minutes.\n' +
      '4. Heat the oven to 200°C (fan 180°C). Roll out the puff pastry, unwrap the beef onto it, and wrap snugly, sealing the edges. Brush with beaten egg.\n' +
      '5. Bake for 30–35 minutes for medium-rare. Rest for 10 minutes, then carve into thick slices.',
    rawLines: [
      { rawName: 'Beef fillet', rawMeasure: '600g' },
      { rawName: 'Mushroom', rawMeasure: '400g' },
      { rawName: 'Prosciutto', rawMeasure: '8 slices' },
      { rawName: 'Puff pastry', rawMeasure: '500g' },
      { rawName: 'Mustard', rawMeasure: '2 tbsp' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Yorkshire puddings',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Whisk the flour, eggs and milk with a pinch of salt to a smooth, pourable batter and rest for 30 minutes.\n' +
      '2. Heat the oven to 220°C (fan 200°C). Pour a little oil into each hole of a 12-hole tin and heat in the oven until smoking hot.\n' +
      '3. Carefully and quickly pour the batter into the hot tins, filling each about halfway.\n' +
      '4. Bake for 20–25 minutes without opening the door until risen, deep gold and crisp. Serve straight away.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '140g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Milk', rawMeasure: '200ml' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Mushy peas',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegan'],
    instructions:
      '1. Rinse the soaked marrowfat peas and tip into a pan. Cover with fresh water and bring to the boil.\n' +
      '2. Skim off any foam, lower the heat and simmer gently for 25–30 minutes, stirring now and then, until the peas collapse into a thick purée.\n' +
      '3. Beat in a little butter or a splash of oil and season generously with salt and pepper.\n' +
      '4. Loosen with a little water if needed and serve hot alongside fish and chips or pies.',
    rawLines: [
      { rawName: 'Marrowfat peas', rawMeasure: '250g, soaked overnight' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
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
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Melt the butter in a large pan and gently soften the sliced leeks and onion for 8–10 minutes without colouring.\n' +
      '2. Add the diced potato, stir to coat, then pour in the stock. Bring to the boil and simmer for 15–20 minutes until the potato is soft.\n' +
      '3. Blend until smooth, then stir through the double cream and season to taste.\n' +
      '4. Reheat gently without boiling, scatter with chives and serve with crusty bread.',
    rawLines: [
      { rawName: 'Leek', rawMeasure: '3' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml' },
      { rawName: 'Double cream', rawMeasure: '75ml' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Faggots and peas',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Mix the minced pork and pork liver with the breadcrumbs, onion, sage and seasoning.\n' +
      '2. Shape into eight balls and sit them snugly in a baking dish.\n' +
      '3. For the gravy, soften the sliced onion, stir in the flour, then gradually add the stock and Worcestershire sauce and simmer until thickened.\n' +
      '4. Pour the gravy over the faggots, cover with foil and bake for 30 minutes, then uncover and bake for a further 15 minutes.\n' +
      '5. Serve with mushy or buttered peas and plenty of the onion gravy.',
    rawLines: [
      { rawName: 'Minced pork', rawMeasure: '400g' },
      { rawName: 'Pork liver', rawMeasure: '200g' },
      { rawName: 'Breadcrumbs', rawMeasure: '75g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Peas', rawMeasure: '300g' },
      { rawName: 'Sage', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Glamorgan sausages',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Mix most of the breadcrumbs with the grated Cheddar, leek, mustard and parsley. Bind with the beaten eggs and season.\n' +
      '2. Shape the mixture into eight small sausages and roll each in the remaining breadcrumbs to coat.\n' +
      '3. Chill for 15 minutes to firm up.\n' +
      '4. Fry gently in a little oil, turning, for 8–10 minutes until golden and crisp all over.\n' +
      '5. Serve with a sharp chutney and a green salad.',
    rawLines: [
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Breadcrumbs', rawMeasure: '150g' },
      { rawName: 'Leek', rawMeasure: '1' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
]
