// Curated MEDITERRANEAN-diet expansion recipes for Larder.
// Additional batch — every title is distinct from diet-mediterranean.js.
// Rules: no heavy processed/red meat; emphasis on veg, fish, olive oil,
// pulses, wholegrains. Method prose is original British English.
// Shape: { title, servingsBase, totalTimeMinutes, course, cuisine,
//          dietLabels, instructions, rawLines:[{rawName, rawMeasure}] }

export default [

  // ── Breakfasts ─────────────────────────────────────────────────────────────
  {
    title: 'Baked eggs with spinach and feta',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Wilt the spinach in a dry pan for 2 minutes, then squeeze out excess moisture and divide between two small ovenproof dishes.\n' +
      '2. Crumble the feta over the spinach and make a well in the centre of each dish.\n' +
      '3. Crack two eggs into each dish, drizzle with olive oil and season with black pepper and a pinch of chilli flakes.\n' +
      '4. Bake for 10–12 minutes until the whites are set but the yolks remain a little runny.\n' +
      '5. Scatter with parsley and serve straight from the dish with toasted wholegrain bread.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Wholegrain bread', rawMeasure: '4 slices, to serve' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smashed avocado with za\'atar and poached egg',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'Middle Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Mash the avocado with the lemon juice and a little olive oil until roughly smooth. Season well.\n' +
      '2. Toast the wholegrain bread and pile the avocado onto each slice.\n' +
      '3. Bring a pan of water to a gentle simmer, add a splash of vinegar and swirl gently. Crack an egg into a cup and slide it in. Poach for 3 minutes until the white is set. Repeat with the second egg.\n' +
      '4. Lay the poached eggs on top of the avocado, drizzle with olive oil and scatter with za\'atar and chilli flakes. Serve at once.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '1 ripe' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Wholegrain bread', rawMeasure: '2 thick slices' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Za\'atar', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Vinegar', rawMeasure: '1 splash' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Warm farro porridge with almonds and honey',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Rinse the farro and cook in a pan with the milk and a pinch of cinnamon over a medium-low heat, stirring often, for 20–25 minutes until creamy and tender.\n' +
      '2. Stir in the honey and a squeeze of lemon zest, then divide between two bowls.\n' +
      '3. Scatter with the toasted flaked almonds and a few sliced dried figs.\n' +
      '4. Finish with a drizzle of honey and serve warm.',
    rawLines: [
      { rawName: 'Farro', rawMeasure: '150g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
      { rawName: 'Flaked almonds', rawMeasure: '30g' },
      { rawName: 'Dried figs', rawMeasure: '4' },
      { rawName: 'Lemon', rawMeasure: '1/2 zest only' },
    ],
  },
  {
    title: 'Greek yoghurt flatbread with olives and tomato',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Combine the flour, Greek yoghurt and a pinch of salt to form a soft dough. Divide in two and roll each piece out to a thin round.\n' +
      '2. Cook the flatbreads in a dry non-stick pan over a medium-high heat for 2 minutes per side until charred in spots and cooked through.\n' +
      '3. Spread each flatbread generously with Greek yoghurt, then top with the sliced tomato, olives and a drizzle of olive oil.\n' +
      '4. Scatter with dried oregano and a pinch of chilli flakes. Serve at once.',
    rawLines: [
      { rawName: 'Self-raising flour', rawMeasure: '150g' },
      { rawName: 'Greek yoghurt', rawMeasure: '200g' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Olives', rawMeasure: '40g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Snacks ─────────────────────────────────────────────────────────────────
  {
    title: 'White bean and roasted garlic dip',
    servingsBase: 6,
    totalTimeMinutes: 35,
    course: 'Snack',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Wrap the whole garlic bulb in foil with a drizzle of olive oil and roast for 30 minutes until the cloves are soft and sweet.\n' +
      '2. Drain the cannellini beans and tip into a food processor. Squeeze in the roasted garlic.\n' +
      '3. Add the lemon juice, olive oil and a splash of water, then blend until smooth and creamy. Season well.\n' +
      '4. Spread into a bowl, drizzle with olive oil, scatter with chopped rosemary and serve with warm pitta or crudités.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Garlic', rawMeasure: '1 bulb' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Rosemary', rawMeasure: '1 sprig' },
      { rawName: 'Pitta bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced roasted chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Snack',
    cuisine: 'Middle Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Drain and rinse the chickpeas and pat very dry with kitchen paper.\n' +
      '2. Spread in a single layer on a lined tray, drizzle with olive oil and roast for 20 minutes, shaking the pan halfway.\n' +
      '3. Toss with the smoked paprika, cumin, a pinch of cayenne and a good pinch of salt.\n' +
      '4. Return to the oven for a further 10 minutes until deep golden and crunchy. Cool on the tray before serving.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cayenne pepper', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled courgette with mint yoghurt',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Slice the courgettes lengthways into long thin strips and toss with olive oil and seasoning.\n' +
      '2. Heat a griddle pan until very hot and cook the courgette in batches for 2–3 minutes per side until charred and tender.\n' +
      '3. Stir the chopped mint and a little garlic into the Greek yoghurt and season.\n' +
      '4. Arrange the courgette on a board or plate, spoon over the mint yoghurt and finish with a drizzle of olive oil and lemon zest.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '3' },
      { rawName: 'Greek yoghurt', rawMeasure: '150g' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Lemon', rawMeasure: '1/2 zest only' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stuffed mushrooms with herbed ricotta',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Snack',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Remove the mushroom stalks, chop them finely and mix with the ricotta, garlic, parsley, thyme and Parmesan. Season well.\n' +
      '2. Brush the mushroom caps with olive oil and place gill-side up on a lined tray.\n' +
      '3. Spoon the ricotta filling into each cap and scatter with a little extra Parmesan.\n' +
      '4. Bake for 18–20 minutes until the mushrooms are tender and the filling is golden. Serve warm with a squeeze of lemon.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '8 large' },
      { rawName: 'Ricotta', rawMeasure: '150g' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Lunches ─────────────────────────────────────────────────────────────────
  {
    title: 'Roasted pepper and lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve and deseed the peppers, toss with olive oil and roast for 25 minutes until soft and charred.\n' +
      '2. Meanwhile soften the onion and celery in olive oil for 10 minutes, then add the garlic, smoked paprika and rinsed red lentils.\n' +
      '3. Add the stock and bring to a simmer. Cook for 15 minutes until the lentils are tender.\n' +
      '4. Add the roasted peppers and blend until smooth, loosening with a little water if needed.\n' +
      '5. Season, sharpen with lemon juice and serve with a swirl of olive oil and crusty bread.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4 red' },
      { rawName: 'Red lentils', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Niçoise-style salad with cannellini beans',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Boil the eggs for 7 minutes, cool under cold water and halve. Blanch the green beans in salted water for 3 minutes, then refresh.\n' +
      '2. Whisk the olive oil with the Dijon mustard, red wine vinegar and a little garlic to make a dressing.\n' +
      '3. Arrange the lettuce leaves on two plates and scatter over the drained cannellini beans, green beans, olives and sliced tomato.\n' +
      '4. Top with the halved eggs, spoon over the dressing and scatter with capers and parsley.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Green beans', rawMeasure: '150g' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Olives', rawMeasure: '50g' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Lettuce', rawMeasure: '1 baby gem' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Mustard', rawMeasure: '1 tsp Dijon' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp red wine' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked mackerel and grain salad',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Cook the spelt in boiling salted water for 15 minutes until tender with a little bite, then drain and leave to cool slightly.\n' +
      '2. Flake the smoked mackerel into large pieces, discarding the skin.\n' +
      '3. Toss the warm spelt with the rocket, cucumber, spring onions and capers.\n' +
      '4. Whisk the olive oil with the lemon juice and horseradish to make a dressing, pour over and toss gently.\n' +
      '5. Fold through the mackerel, season and serve.',
    rawLines: [
      { rawName: 'Spelt', rawMeasure: '150g' },
      { rawName: 'Smoked mackerel', rawMeasure: '2 fillets' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Horseradish sauce', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted beetroot and orange soup',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Wrap the beetroot in foil and roast for 40 minutes until tender, then rub off the skins.\n' +
      '2. Soften the onion and garlic in the olive oil in a large pan for 8 minutes.\n' +
      '3. Chop the beetroot and add to the pan with the stock and orange juice. Simmer for 10 minutes.\n' +
      '4. Blend until smooth, season and brighten with a little extra orange juice.\n' +
      '5. Serve with a swirl of Greek yoghurt, a little dill and crusty bread.',
    rawLines: [
      { rawName: 'Beetroot', rawMeasure: '600g raw' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Orange', rawMeasure: '1, juiced' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
      { rawName: 'Greek yoghurt', rawMeasure: 'to serve' },
      { rawName: 'Dill', rawMeasure: 'small handful' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkish-style lentil and bulgur kofte (mercimek köftesi)',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'Turkish',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Simmer the red lentils in water for 15 minutes until completely soft, then drain thoroughly.\n' +
      '2. While hot, stir in the fine bulgur wheat and cover for 15 minutes so the bulgur absorbs the steam and softens.\n' +
      '3. Add the spring onions, parsley, cumin, sweet paprika, tomato purée and olive oil to the cooled mixture and knead together until combined. Season well.\n' +
      '4. Shape into small oval patties and arrange on a platter lined with lettuce leaves.\n' +
      '5. Serve with lemon wedges, sliced tomato and extra parsley.',
    rawLines: [
      { rawName: 'Red lentils', rawMeasure: '200g' },
      { rawName: 'Bulgur wheat', rawMeasure: '100g fine' },
      { rawName: 'Spring onion', rawMeasure: '5' },
      { rawName: 'Parsley', rawMeasure: 'large handful' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Sweet paprika', rawMeasure: '1 tsp' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Lettuce', rawMeasure: '1 baby gem' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled halloumi and roasted vegetable wrap',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the sliced pepper and courgette with olive oil and seasoning and roast for 20 minutes until tender.\n' +
      '2. Slice the halloumi and griddle for 2 minutes per side until golden.\n' +
      '3. Warm the flatbreads briefly in the oven or a dry pan.\n' +
      '4. Spread each flatbread with a little hummus, then pile on the roasted vegetables, halloumi, rocket and a squeeze of lemon.\n' +
      '5. Roll up tightly, cut in half and serve.',
    rawLines: [
      { rawName: 'Halloumi', rawMeasure: '200g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Flatbread', rawMeasure: '2' },
      { rawName: 'Hummus', rawMeasure: '4 tbsp' },
      { rawName: 'Rocket', rawMeasure: '40g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spelt, roasted tomato and mozzarella salad',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the cherry tomatoes, toss with olive oil and seasoning and roast for 20 minutes until caramelised.\n' +
      '2. Cook the spelt in salted boiling water for 20 minutes until tender with bite, then drain and cool slightly.\n' +
      '3. Toss the warm spelt with the roasted tomatoes, torn mozzarella, basil and a little red wine vinegar.\n' +
      '4. Drizzle with olive oil, season generously and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Spelt', rawMeasure: '200g' },
      { rawName: 'Cherry tomato', rawMeasure: '350g' },
      { rawName: 'Mozzarella', rawMeasure: '125g' },
      { rawName: 'Basil', rawMeasure: 'handful' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp red wine' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and avocado salad with lime dressing',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Whisk the olive oil with the lime juice, a pinch of cumin and chilli flakes to make a dressing.\n' +
      '2. Halve, stone and dice the avocado and toss immediately with a little of the dressing to prevent browning.\n' +
      '3. Arrange the rocket on two plates and top with the cooked prawns, avocado, sliced cucumber and cherry tomatoes.\n' +
      '4. Spoon over the remaining dressing, scatter with coriander and serve at once.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '250g cooked' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1/4 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Sides ───────────────────────────────────────────────────────────────────
  {
    title: 'Braised peas with spring onions and mint',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'French',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the olive oil in a wide pan and gently soften the spring onions for 3 minutes without colouring.\n' +
      '2. Add the peas and a small splash of stock or water, then cover and cook gently for 5 minutes until the peas are tender and bright green.\n' +
      '3. Remove the lid, stir through the butter, chopped mint and lemon zest, then season.\n' +
      '4. Serve warm as a side dish.',
    rawLines: [
      { rawName: 'Peas', rawMeasure: '400g' },
      { rawName: 'Spring onion', rawMeasure: '6' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Lemon', rawMeasure: '1/2 zest only' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted courgettes with lemon and pine nuts',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Slice the courgettes into thick rounds and toss with the olive oil, seasoning and garlic.\n' +
      '2. Spread on a roasting tray in a single layer and roast for 20 minutes until golden at the edges.\n' +
      '3. Toast the pine nuts in a dry pan until golden.\n' +
      '4. Arrange the courgettes on a platter, scatter over the pine nuts, lemon zest and torn basil. Finish with a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '4' },
      { rawName: 'Pine nuts', rawMeasure: '30g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, sliced' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1 zest only' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Wilted greens with garlic and lemon (horta)',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Wash the greens thoroughly and shake off excess water.\n' +
      '2. Heat a large pan with the olive oil over a medium heat and add the garlic, cooking for 30 seconds until fragrant.\n' +
      '3. Add the greens in batches and stir until wilted and tender, about 5 minutes.\n' +
      '4. Season generously, squeeze over the lemon juice and serve warm with bread and olives.',
    rawLines: [
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Kale', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, sliced' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olives', rawMeasure: 'to serve' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Patatas bravas with romesco',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'Spanish',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Chop the potatoes into 2cm chunks, toss with olive oil, seasoning and a pinch of smoked paprika and roast for 35 minutes until crisp and golden.\n' +
      '2. For the romesco, blend the roasted red peppers with the almonds, garlic, a splash of sherry vinegar and olive oil until smooth. Season.\n' +
      '3. Pile the hot potatoes onto a plate and spoon the romesco generously over the top.\n' +
      '4. Scatter with chopped parsley and serve at once.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2 roasted red, from a jar' },
      { rawName: 'Almonds', rawMeasure: '50g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp sherry' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted aubergine with miso and sesame',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Side',
    cuisine: 'Japanese',
    dietLabels: ['Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the aubergines lengthways and score the flesh in a criss-cross pattern.\n' +
      '2. Mix the miso, soy sauce, sesame oil and a little honey to make a glaze. Brush generously over the cut sides.\n' +
      '3. Place cut-side up on a lined tray and roast for 25 minutes until the flesh is soft and the glaze is caramelised.\n' +
      '4. Scatter with sesame seeds and spring onion and serve warm.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2' },
      { rawName: 'Miso paste', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Warm lentil and spinach salad with mustard dressing',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Side',
    cuisine: 'French',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Cook the brown lentils in plenty of water for 20 minutes until just tender, then drain.\n' +
      '2. Whisk together the olive oil, red wine vinegar, Dijon mustard and garlic to make a sharp dressing.\n' +
      '3. Toss the warm lentils with the baby spinach and most of the dressing — the heat of the lentils will gently wilt the leaves.\n' +
      '4. Season well, scatter with capers and the remaining dressing and serve warm.',
    rawLines: [
      { rawName: 'Brown lentils', rawMeasure: '250g' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Mustard', rawMeasure: '1 tsp Dijon' },
      { rawName: 'Vinegar', rawMeasure: '2 tbsp red wine' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chickpea and herb stuffed flatbread',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Side',
    cuisine: 'Turkish',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Mash the drained chickpeas with the cumin, lemon juice, olive oil, garlic and a little salt.\n' +
      '2. Stir through the chopped parsley and spring onion and season well.\n' +
      '3. Divide the flatbread dough (or use shop-bought pitta) and stuff each with a spoonful of the chickpea mixture, pressing to enclose.\n' +
      '4. Cook in a dry frying pan for 3 minutes per side until golden and cooked through. Serve with Greek yoghurt and lemon.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Greek yoghurt', rawMeasure: 'to serve' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Fish & Seafood Dinners ──────────────────────────────────────────────────
  {
    title: 'Sea bream baked with olives and fennel',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Very thinly slice the fennel and spread in a baking dish with the sliced shallot, olives and thyme. Drizzle with olive oil and season.\n' +
      '2. Slash the sea bream fillets twice on each side and lay on top of the fennel.\n' +
      '3. Squeeze over the lemon, add a splash of white wine and drizzle with a little more olive oil.\n' +
      '4. Bake for 18–20 minutes until the fish is opaque and the fennel is tender.\n' +
      '5. Scatter with parsley and serve with new potatoes.',
    rawLines: [
      { rawName: 'Sea bream', rawMeasure: '2 fillets' },
      { rawName: 'Fennel', rawMeasure: '1 bulb' },
      { rawName: 'Shallot', rawMeasure: '2' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'White wine', rawMeasure: '60ml' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'New potatoes', rawMeasure: '400g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and white bean stew with tomato',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Heat the olive oil in a wide pan and soften the onion and garlic gently for 8 minutes.\n' +
      '2. Add the chilli flakes, then pour in the passata and a splash of water. Simmer for 10 minutes until thickened.\n' +
      '3. Stir in the drained cannellini beans and cook for 5 minutes.\n' +
      '4. Add the prawns and cook for 3–4 minutes until pink and just cooked through.\n' +
      '5. Finish with the parsley, a squeeze of lemon and a drizzle of olive oil. Serve with crusty bread.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '400g' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Passata', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled tuna steak with salsa verde',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Make the salsa verde by blending the parsley, capers, anchovy fillets, garlic, lemon juice and olive oil to a coarse green sauce. Season.\n' +
      '2. Brush the tuna steaks with olive oil and season well.\n' +
      '3. Heat a griddle pan until very hot and sear the tuna for 2 minutes per side for rare, or 3 minutes for medium.\n' +
      '4. Rest for a minute, then slice and serve with the salsa verde, a green salad and bread.',
    rawLines: [
      { rawName: 'Tuna steak', rawMeasure: '2 fresh' },
      { rawName: 'Parsley', rawMeasure: 'large handful' },
      { rawName: 'Capers', rawMeasure: '2 tbsp' },
      { rawName: 'Anchovy fillets', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced salmon with a chickpea and cucumber raita',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Mix the cumin, coriander, a pinch of cayenne and olive oil and rub all over the salmon fillets.\n' +
      '2. Heat a non-stick pan over a medium-high heat and cook the salmon skin-side down for 4 minutes, then flip and cook for 2 minutes more until just cooked through.\n' +
      '3. For the raita, stir the drained chickpeas, diced cucumber, mint and lemon juice through the Greek yoghurt. Season.\n' +
      '4. Serve the salmon alongside the raita with warm flatbread and a wedge of lemon.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2 fillets' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Greek yoghurt', rawMeasure: '200g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Cayenne pepper', rawMeasure: '1 pinch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Flatbread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cuttlefish and pea risotto',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Heat the olive oil in a wide pan and soften the shallots for 6 minutes, then add the garlic.\n' +
      '2. Stir in the risotto rice to toast for 2 minutes, then add the white wine and stir until absorbed.\n' +
      '3. Add the squid ink (if using) and begin adding the hot stock a ladle at a time, stirring continuously for about 20 minutes until the rice is creamy and al dente.\n' +
      '4. Stir in the cuttlefish rings and peas 5 minutes before the end; cook until the cuttlefish is just tender.\n' +
      '5. Finish with parsley, lemon zest and a drizzle of olive oil. Season and serve immediately.',
    rawLines: [
      { rawName: 'Risotto rice', rawMeasure: '300g' },
      { rawName: 'Cuttlefish', rawMeasure: '300g cleaned, rings' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Shallot', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'White wine', rawMeasure: '100ml' },
      { rawName: 'Squid ink', rawMeasure: '1 sachet (optional)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre fish stock' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1 zest only' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Miso-glazed cod with stir-fried greens',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Mix the miso paste with the soy sauce, honey and a little sesame oil to make a glaze. Spread over the cod fillets and leave for 10 minutes.\n' +
      '2. Heat the grill to high and grill the cod on a lined tray for 6–8 minutes until the glaze is caramelised and the fish flakes easily.\n' +
      '3. Meanwhile heat the olive oil in a wok and stir-fry the pak choi and spring onions for 3–4 minutes with a splash of soy sauce.\n' +
      '4. Serve the cod over brown rice with the greens, scattered with sesame seeds.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2 cod fillets' },
      { rawName: 'Miso paste', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Pak choi', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Brown rice', rawMeasure: '150g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Prawn tacos with mango salsa',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Toss the prawns with the olive oil, cumin, smoked paprika and a pinch of cayenne. Fry in a hot pan for 2–3 minutes until pink and lightly charred.\n' +
      '2. Dice the mango and mix with the red onion, coriander, lime juice and a pinch of chilli flakes to make a fresh salsa.\n' +
      '3. Warm the corn tortillas in a dry pan or oven.\n' +
      '4. Fill each tortilla with a spoonful of the mango salsa, a few prawns and a dollop of Greek yoghurt.\n' +
      '5. Squeeze over extra lime and serve at once.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '400g' },
      { rawName: 'Corn tortilla', rawMeasure: '8 small' },
      { rawName: 'Mango', rawMeasure: '1 ripe' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cayenne pepper', rawMeasure: '1 pinch' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Greek yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pan-fried sea bass with caponata',
    servingsBase: 2,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Fry the diced aubergine in olive oil until golden all over, then set aside.\n' +
      '2. In the same pan soften the onion and celery for 8 minutes, add the cherry tomatoes, olives, capers and a splash of red wine vinegar and a pinch of sugar. Return the aubergine and simmer for 10 minutes.\n' +
      '3. Season the sea bass fillets. Heat a non-stick pan with a little olive oil over a high heat and fry skin-side down for 4 minutes until the skin is crisp, then flip and cook for 1 minute.\n' +
      '4. Spoon the caponata onto plates and rest the fish on top. Finish with fresh basil and olive oil.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '2 fillets' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Onion', rawMeasure: '1/2' },
      { rawName: 'Olives', rawMeasure: '40g' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp red wine' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked salmon with harissa and roasted vegetables',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Mediterranean', 'Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, pepper and red onion chunks with olive oil and seasoning and roast for 15 minutes.\n' +
      '2. Mix the harissa with a little olive oil and lemon juice. Spread over the salmon fillets.\n' +
      '3. Nestle the salmon among the part-cooked vegetables and return to the oven for 12–15 minutes until the salmon is just cooked and the vegetables are tender and caramelised.\n' +
      '4. Scatter with coriander and serve with couscous.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4 fillets' },
      { rawName: 'Harissa', rawMeasure: '2 tbsp' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Couscous', rawMeasure: '200g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Vegetarian / Vegan Dinners ──────────────────────────────────────────────
  {
    title: 'Turkish red lentil and bulgur soup (ezogelin)',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the onion for 8 minutes, then add the garlic, cumin, sweet paprika and dried mint.\n' +
      '2. Stir in the rinsed red lentils and fine bulgur wheat to coat, then pour in the stock and tomato purée.\n' +
      '3. Bring to a simmer and cook for 20 minutes until the lentils have dissolved and the soup is thick and creamy.\n' +
      '4. Adjust the consistency with water if needed. Season well and serve with a swirl of olive oil, a pinch of chilli flakes and lemon wedges.',
    rawLines: [
      { rawName: 'Red lentils', rawMeasure: '200g' },
      { rawName: 'Bulgur wheat', rawMeasure: '60g fine' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Sweet paprika', rawMeasure: '1 tsp' },
      { rawName: 'Dried mint', rawMeasure: '1 tsp' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch, to serve' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1.2 litres' },
      { rawName: 'Lemon', rawMeasure: '1, to serve' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted squash and sage brown-butter pasta',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cube the butternut squash, toss with olive oil and seasoning and roast for 30 minutes until tender and caramelised at the edges.\n' +
      '2. Cook the pasta in salted water until al dente, reserving a cup of cooking water.\n' +
      '3. Melt the butter in a pan over a medium heat until it foams and turns a pale nutty brown, then add the sage leaves and cook for 30 seconds until crisp.\n' +
      '4. Drain the pasta and add to the brown butter with the squash and a splash of pasta water. Toss to coat.\n' +
      '5. Finish with grated Parmesan, season and serve at once.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '400g' },
      { rawName: 'Butternut squash', rawMeasure: '500g' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Sage', rawMeasure: '10 leaves' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Black bean and sweet potato enchiladas',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Dice the sweet potatoes, toss with olive oil, cumin, smoked paprika and seasoning and roast for 25 minutes until tender.\n' +
      '2. Mix with the drained black beans, half the coriander and a little lime juice.\n' +
      '3. Divide the filling among the tortillas, roll up and lay seam-side down in a baking dish.\n' +
      '4. Pour the passata over the top, scatter with crumbled feta and bake for 20 minutes until bubbling.\n' +
      '5. Scatter with the remaining coriander and serve with Greek yoghurt.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '400g' },
      { rawName: 'Black beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Corn tortilla', rawMeasure: '8' },
      { rawName: 'Passata', rawMeasure: '400g' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'handful' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Greek yoghurt', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pumpkin and sage risotto',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the onion and garlic for 8 minutes.\n' +
      '2. Stir in the risotto rice and toast for 2 minutes, then add the white wine and stir until absorbed.\n' +
      '3. Add the hot stock a ladle at a time, stirring continuously for 20 minutes until creamy and al dente.\n' +
      '4. Stir in the roasted pumpkin purée (simply blend roasted pumpkin with a little stock) and the Parmesan in the final 5 minutes.\n' +
      '5. Fry the sage leaves in a little butter until crisp and lay over the risotto. Season and serve.',
    rawLines: [
      { rawName: 'Risotto rice', rawMeasure: '300g' },
      { rawName: 'Pumpkin', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'White wine', rawMeasure: '100ml' },
      { rawName: 'Sage', rawMeasure: '10 leaves' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spinach and ricotta stuffed cannelloni',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Wilt the spinach in a dry pan, squeeze out all liquid and chop finely.\n' +
      '2. Mix with the ricotta, Parmesan, egg and a grating of nutmeg. Season.\n' +
      '3. Fill the dried cannelloni tubes with the mixture using a piping bag or teaspoon.\n' +
      '4. Spread half the passata in a baking dish, lay in the filled cannelloni, then pour over the rest of the passata.\n' +
      '5. Scatter with extra Parmesan, cover with foil and bake for 30 minutes. Uncover for a further 10 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Cannelloni', rawMeasure: '250g dried tubes' },
      { rawName: 'Spinach', rawMeasure: '400g' },
      { rawName: 'Ricotta', rawMeasure: '250g' },
      { rawName: 'Parmesan', rawMeasure: '60g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Passata', rawMeasure: '700g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted cauliflower and chickpea curry',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the cauliflower florets and drained chickpeas with the olive oil, cumin, turmeric and a little chilli and roast for 25 minutes until golden.\n' +
      '2. Meanwhile soften the onion and garlic in olive oil for 8 minutes, then add the ginger, garam masala and ground coriander and cook for a minute.\n' +
      '3. Stir in the chopped tomatoes and 100ml water and simmer for 10 minutes.\n' +
      '4. Fold in the roasted cauliflower and chickpeas and heat through. Season.\n' +
      '5. Serve with brown rice, scattered with coriander and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 medium' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tsp grated' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Chilli', rawMeasure: '1 green' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Brown rice', rawMeasure: '250g' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushroom and walnut lentil bolognese',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the onion, carrot and celery for 10 minutes.\n' +
      '2. Add the garlic, then stir in the finely chopped mushrooms and cook over a high heat for 8 minutes until all liquid has evaporated.\n' +
      '3. Stir in the drained green lentils, passata, tomato purée and the roughly blitzed walnuts. Add a little water to loosen.\n' +
      '4. Season, add dried thyme and simmer gently for 20 minutes until rich and thick.\n' +
      '5. Toss with cooked wholewheat spaghetti and serve with a scatter of parsley.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '400g' },
      { rawName: 'Green lentils', rawMeasure: '1 tin (400g)' },
      { rawName: 'Walnuts', rawMeasure: '60g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Thyme', rawMeasure: '1 tsp dried' },
      { rawName: 'Spaghetti', rawMeasure: '400g wholewheat' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Green shakshuka with herbs and feta',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the olive oil in a wide pan and soften the spring onions for 3 minutes, then add the garlic and cumin.\n' +
      '2. Add the courgette and cook for 4 minutes, then fold in the spinach and peas and cook until wilted.\n' +
      '3. Stir in the chopped parsley and dill, season generously, then make four wells in the mixture.\n' +
      '4. Crack an egg into each well, cover and cook gently for 5–7 minutes until the whites are set.\n' +
      '5. Crumble over the feta and serve straight from the pan with warm flatbread.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Feta', rawMeasure: '100g' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Dill', rawMeasure: 'small handful' },
      { rawName: 'Flatbread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tofu and vegetable stir-fry with miso dressing',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Press the tofu between sheets of kitchen paper for 10 minutes, then cut into cubes. Fry in olive oil in a hot pan for 4–5 minutes per side until golden. Set aside.\n' +
      '2. Whisk the miso, soy sauce, sesame oil and a squeeze of lemon to make a dressing.\n' +
      '3. Stir-fry the broccoli, snap peas and pepper in the same pan for 5 minutes until just tender with a little bite.\n' +
      '4. Return the tofu, pour over the dressing and toss to coat.\n' +
      '5. Serve over brown rice scattered with sesame seeds and spring onion.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g firm' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Snap peas', rawMeasure: '150g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Miso paste', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Brown rice', rawMeasure: '250g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Caribbean-style black-eyed bean rice and peas',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a large pan and soften the onion and garlic for 8 minutes, then add the spring onion and thyme.\n' +
      '2. Stir in the rinsed rice to coat, then add the drained black-eyed beans, the coconut milk and enough water to cover by 2cm.\n' +
      '3. Bring to a simmer, cover tightly and cook on a very low heat for 18–20 minutes until the rice is tender and all liquid absorbed.\n' +
      '4. Season, fluff with a fork and serve with a wedge of lime and hot sauce on the side.',
    rawLines: [
      { rawName: 'Rice', rawMeasure: '300g long grain' },
      { rawName: 'Black-eyed beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted pepper and feta tart',
    servingsBase: 6,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Unroll the filo pastry and layer four sheets in a lightly oiled 30cm tart tin, brushing each with olive oil and letting the edges overhang.\n' +
      '2. Scatter the sliced roasted peppers, sliced olives and crumbled feta over the base.\n' +
      '3. Whisk the eggs with the cream, oregano and seasoning and pour over the filling.\n' +
      '4. Fold over the overhanging pastry to create a rustic border and brush with olive oil.\n' +
      '5. Bake for 30–35 minutes until the filling is set and the pastry is crisp and golden. Cool slightly before slicing.',
    rawLines: [
      { rawName: 'Filo pastry', rawMeasure: '270g (1 pack)' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '3 roasted red, from a jar' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Kale, lemon and almond pesto pasta',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Blanch the kale in salted boiling water for 3 minutes, drain and cool slightly.\n' +
      '2. Blend the kale with the toasted almonds, garlic, lemon zest and juice and olive oil to a coarse pesto. Season well.\n' +
      '3. Cook the pasta in salted water until al dente, reserving a cup of the cooking water.\n' +
      '4. Drain the pasta and toss with the kale pesto, loosening with pasta water to a saucy consistency.\n' +
      '5. Season, drizzle with olive oil and serve at once with extra lemon on the side.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '400g wholewheat' },
      { rawName: 'Kale', rawMeasure: '200g' },
      { rawName: 'Almonds', rawMeasure: '60g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai-inspired tofu and vegetable noodle soup',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a large pan and fry the diced tofu until golden on all sides, about 5 minutes. Set aside.\n' +
      '2. In the same pan soften the spring onions and garlic for 3 minutes, then add the grated ginger and lemongrass.\n' +
      '3. Pour in the stock and a splash of soy sauce and bring to a simmer.\n' +
      '4. Add the rice noodles, pak choi and frozen edamame and cook for 4–5 minutes until tender.\n' +
      '5. Return the tofu, stir in the lime juice and serve scattered with coriander and sliced chilli.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '300g firm' },
      { rawName: 'Rice noodles', rawMeasure: '200g' },
      { rawName: 'Pak choi', rawMeasure: '2' },
      { rawName: 'Edamame', rawMeasure: '150g frozen' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Lemongrass', rawMeasure: '1 stalk' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Chilli', rawMeasure: '1 red' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre vegetable stock' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Chickpea and coconut dhal',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the olive oil in a large pan and fry the onion for 8 minutes until golden, then add the garlic and ginger.\n' +
      '2. Stir in the cumin, ground coriander, turmeric and garam masala and cook for a minute.\n' +
      '3. Add the red lentils and the coconut milk with 400ml water and bring to a simmer.\n' +
      '4. Cook for 15 minutes until the lentils are soft, then fold in the drained chickpeas and spinach and heat through.\n' +
      '5. Season, squeeze over lemon and serve with brown rice and coriander.',
    rawLines: [
      { rawName: 'Red lentils', rawMeasure: '200g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tsp grated' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Brown rice', rawMeasure: '250g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked courgette and halloumi frittata',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Fry the sliced halloumi in a little olive oil in an ovenproof pan until golden on both sides, then set aside.\n' +
      '2. In the same pan soften the courgette and spring onions for 5 minutes, then scatter back in the halloumi.\n' +
      '3. Beat the eggs with the herbs, lemon zest and seasoning and pour over the vegetables.\n' +
      '4. Cook on the hob for 2 minutes until the edges just start to set, then transfer to the oven for 12–15 minutes until puffed and golden.\n' +
      '5. Slide onto a board, cut into wedges and serve warm with a green salad.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Halloumi', rawMeasure: '200g' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1 zest only' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine and tomato gratin with breadcrumbs',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Slice the aubergines into 1cm rounds, brush with olive oil and roast on trays for 20 minutes until golden and soft.\n' +
      '2. Meanwhile simmer the passata with the garlic, basil and seasoning for 10 minutes to make a quick sauce.\n' +
      '3. Layer the aubergine slices with the tomato sauce and sliced tomatoes in a baking dish.\n' +
      '4. Mix the breadcrumbs with Parmesan and thyme and scatter over the top, then drizzle with olive oil.\n' +
      '5. Bake for 25 minutes until the topping is crisp and golden. Rest 5 minutes before serving.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Passata', rawMeasure: '400g' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Basil', rawMeasure: 'handful' },
      { rawName: 'Breadcrumbs', rawMeasure: '60g' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Thyme', rawMeasure: '1 tsp dried' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Farro and roasted vegetable bowl with tahini drizzle',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the diced sweet potato, beetroot and red onion with olive oil, cumin and seasoning and roast for 30 minutes until caramelised.\n' +
      '2. Cook the farro in boiling salted water for 25 minutes until tender, then drain.\n' +
      '3. Whisk the tahini with the lemon juice and a little water to make a pourable dressing. Season.\n' +
      '4. Divide the farro between bowls and top with the roasted vegetables, rocket and a spoonful of hummus.\n' +
      '5. Drizzle with the tahini dressing and scatter with parsley and pomegranate seeds.',
    rawLines: [
      { rawName: 'Farro', rawMeasure: '200g' },
      { rawName: 'Sweet potato', rawMeasure: '300g' },
      { rawName: 'Beetroot', rawMeasure: '200g raw' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Hummus', rawMeasure: '4 tbsp' },
      { rawName: 'Rocket', rawMeasure: '60g' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Pomegranate', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chinese-style stir-fried tofu with black bean sauce and greens',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Press the tofu and cut into cubes. Fry in the olive oil over a high heat until golden on all sides, then set aside.\n' +
      '2. Stir-fry the garlic, ginger and sliced pepper in the same pan for 2 minutes.\n' +
      '3. Add the black bean sauce, a splash of soy sauce and the drained black beans. Cook for 2 minutes.\n' +
      '4. Return the tofu and add the pak choi. Stir-fry for 3–4 minutes until the greens are wilted.\n' +
      '5. Serve over brown rice scattered with spring onion and sesame seeds.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g firm' },
      { rawName: 'Black beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Pak choi', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tsp grated' },
      { rawName: 'Black bean sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Brown rice', rawMeasure: '250g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Moroccan-spiced lentil and apricot stuffed peppers',
    servingsBase: 4,
    totalTimeMinutes: 65,
    course: 'Dinner',
    cuisine: 'Moroccan',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve and deseed the peppers, brush with olive oil and roast for 15 minutes.\n' +
      '2. Simmer the red lentils in stock for 12 minutes until just tender. Drain.\n' +
      '3. Mix with the cooked couscous, chopped dried apricots, cumin, cinnamon, ras el hanout and coriander. Season.\n' +
      '4. Fill the par-baked pepper halves with the lentil mixture and return to the oven for 20 minutes until the tops are lightly golden.\n' +
      '5. Serve with a wedge of lemon and extra coriander.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4 large' },
      { rawName: 'Red lentils', rawMeasure: '150g' },
      { rawName: 'Couscous', rawMeasure: '100g' },
      { rawName: 'Dried apricots', rawMeasure: '60g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Ras el hanout', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Light chicken (used sparingly) ─────────────────────────────────────────
  {
    title: 'Chicken and lemon orzo bake',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Brown the chicken thighs in olive oil in a large ovenproof pan for 4 minutes per side. Set aside.\n' +
      '2. In the same pan soften the onion and garlic for 6 minutes, then stir in the orzo to coat.\n' +
      '3. Add the chopped tomatoes, stock and lemon juice and bring to a simmer, then nestle the chicken back in.\n' +
      '4. Bake uncovered for 30–35 minutes until the orzo is tender, the chicken cooked through and the top lightly golden.\n' +
      '5. Rest for 5 minutes, scatter with parsley and serve with a Greek salad.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8 skinless' },
      { rawName: 'Pasta', rawMeasure: '300g orzo' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken, fennel and white bean cassoulet',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Brown the chicken thighs in olive oil in a casserole for 5 minutes per side. Remove.\n' +
      '2. Soften the sliced fennel and onion in the pan for 10 minutes, then add the garlic and thyme.\n' +
      '3. Stir in the chopped tomatoes and drained cannellini beans, season, and nestle the chicken back in.\n' +
      '4. Add the stock, cover and braise in the oven for 30 minutes, then uncover for a final 10 minutes until the chicken is golden.\n' +
      '5. Scatter with parsley and serve with crusty bread.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Cannellini beans', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Fennel', rawMeasure: '1 bulb' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Parsley', rawMeasure: 'small handful' },
      { rawName: 'Crusty bread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Harissa chicken with roasted chickpeas and greens',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Rub the chicken thighs with harissa and olive oil and place in a roasting tin.\n' +
      '2. Scatter the drained chickpeas around the chicken, toss with a little more olive oil and cumin.\n' +
      '3. Roast for 35–40 minutes until the chicken is cooked through and the chickpeas are crisp.\n' +
      '4. Wilt the kale in a pan with olive oil, garlic and a squeeze of lemon.\n' +
      '5. Serve the chicken and chickpeas on the wilted kale, scattered with coriander.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8' },
      { rawName: 'Harissa', rawMeasure: '3 tbsp' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Kale', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Desserts ────────────────────────────────────────────────────────────────
  {
    title: 'Orange and almond polenta cake',
    servingsBase: 8,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C). Grease and line a 20cm round cake tin. Beat the olive oil with the caster sugar and eggs until light and creamy.\n' +
      '2. Fold in the ground almonds, fine polenta, baking powder, orange zest and juice to form a thick batter.\n' +
      '3. Pour into the tin and bake for 35–40 minutes until a skewer inserted in the centre comes out clean.\n' +
      '4. Cool in the tin for 10 minutes, then turn out. Dust with icing sugar and serve with Greek yoghurt and a few orange segments.',
    rawLines: [
      { rawName: 'Ground almonds', rawMeasure: '200g' },
      { rawName: 'Polenta', rawMeasure: '100g fine' },
      { rawName: 'Caster sugar', rawMeasure: '175g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Orange', rawMeasure: '2, zest and juice' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Icing sugar', rawMeasure: 'to dust' },
      { rawName: 'Greek yoghurt', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '100ml' },
    ],
  },
  {
    title: 'Poached pears with honey and cinnamon yoghurt',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Peel the pears and halve them, removing the core.\n' +
      '2. Bring a pan of water to a simmer with the honey, cinnamon stick, cloves, strips of orange zest and a splash of white wine.\n' +
      '3. Add the pears and simmer very gently for 15–18 minutes, turning once, until tender when pierced with a skewer.\n' +
      '4. Lift out the pears and reduce the poaching liquid by half to make a syrup.\n' +
      '5. Stir the ground cinnamon into the Greek yoghurt with a drizzle of honey and serve alongside the pears, drizzled with the syrup.',
    rawLines: [
      { rawName: 'Pear', rawMeasure: '4' },
      { rawName: 'Honey', rawMeasure: '3 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
      { rawName: 'Cloves', rawMeasure: '3' },
      { rawName: 'Orange', rawMeasure: '1, zest only' },
      { rawName: 'White wine', rawMeasure: '100ml' },
      { rawName: 'Greek yoghurt', rawMeasure: '300g' },
    ],
  },
  {
    title: 'Semolina halva with pistachios and rosewater',
    servingsBase: 8,
    totalTimeMinutes: 30,
    course: 'Dessert',
    cuisine: 'Middle Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the olive oil in a heavy pan over a medium heat and toast the semolina, stirring constantly, for 5–8 minutes until golden and nutty-smelling.\n' +
      '2. Meanwhile bring the milk, sugar and rosewater to a simmer in a separate pan.\n' +
      '3. Carefully pour the hot milk into the toasted semolina — it will spit — and stir vigorously over a low heat for 5 minutes until very thick and pulling away from the sides.\n' +
      '4. Turn into a lightly oiled dish or individual moulds and leave to set for 15 minutes.\n' +
      '5. Turn out, scatter with the roughly chopped pistachios and a little extra rosewater to serve.',
    rawLines: [
      { rawName: 'Semolina', rawMeasure: '200g coarse' },
      { rawName: 'Milk', rawMeasure: '700ml' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
      { rawName: 'Rosewater', rawMeasure: '1 tbsp' },
      { rawName: 'Pistachios', rawMeasure: '50g' },
      { rawName: 'Olive oil', rawMeasure: '60ml' },
    ],
  },
  {
    title: 'Baked figs with honey, walnuts and Greek yoghurt',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'Greek',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the figs and place cut-side up in a baking dish.\n' +
      '2. Drizzle with the honey and a small splash of white wine or water, then scatter over the roughly chopped walnuts.\n' +
      '3. Bake for 12–15 minutes until the figs are soft and the edges are beginning to caramelise.\n' +
      '4. Serve warm with a generous spoonful of thick Greek yoghurt and any pan juices drizzled over.',
    rawLines: [
      { rawName: 'Fig', rawMeasure: '8 fresh' },
      { rawName: 'Honey', rawMeasure: '3 tbsp' },
      { rawName: 'Walnuts', rawMeasure: '50g' },
      { rawName: 'White wine', rawMeasure: '2 tbsp' },
      { rawName: 'Greek yoghurt', rawMeasure: '300g' },
    ],
  },
  {
    title: 'Lemon and olive oil cake with a syrup soak',
    servingsBase: 10,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C). Grease and line a 23cm cake tin. Beat together the olive oil, sugar and eggs until well combined.\n' +
      '2. Stir in the ground almonds, flour, baking powder, lemon zest and juice to form a smooth batter.\n' +
      '3. Pour into the tin and bake for 35–40 minutes until golden and a skewer comes out clean.\n' +
      '4. While the cake bakes, simmer the extra lemon juice with 2 tbsp sugar until the sugar dissolves to make a syrup.\n' +
      '5. Prick the warm cake all over and pour over the syrup. Cool in the tin before slicing.',
    rawLines: [
      { rawName: 'Ground almonds', rawMeasure: '100g' },
      { rawName: 'Plain flour', rawMeasure: '150g' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Lemon', rawMeasure: '3, zest and juice' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '150ml' },
    ],
  },
  {
    title: 'Frozen yoghurt bark with berries and pistachios',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'Mediterranean',
    dietLabels: ['Mediterranean', 'Vegetarian'],
    instructions:
      '1. Stir the honey through the Greek yoghurt until smooth, then spread in a roughly even layer about 1cm thick on a lined baking tray.\n' +
      '2. Scatter the mixed berries, chopped pistachios and a pinch of cinnamon evenly over the surface.\n' +
      '3. Freeze for at least 3 hours until firm.\n' +
      '4. Break into shards and serve straight from the freezer.',
    rawLines: [
      { rawName: 'Greek yoghurt', rawMeasure: '500g' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Frozen mixed berries', rawMeasure: '150g' },
      { rawName: 'Pistachios', rawMeasure: '40g' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Walnut and date energy balls',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'Middle Eastern',
    dietLabels: ['Mediterranean', 'Vegetarian', 'Vegan'],
    instructions:
      '1. Blitz the pitted dates and walnuts in a food processor until the mixture clumps together. Add the oats, cocoa powder, cinnamon and a pinch of salt and pulse to combine.\n' +
      '2. If the mixture feels too dry, add a teaspoon of water and pulse again.\n' +
      '3. Roll the mixture into balls roughly the size of a walnut.\n' +
      '4. Roll in desiccated coconut or cocoa powder to coat and chill for 30 minutes before serving.',
    rawLines: [
      { rawName: 'Medjool dates', rawMeasure: '200g pitted' },
      { rawName: 'Walnuts', rawMeasure: '100g' },
      { rawName: 'Oats', rawMeasure: '50g' },
      { rawName: 'Cocoa powder', rawMeasure: '1 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Desiccated coconut', rawMeasure: '40g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },

]
