// Curated DASH / LOW-SODIUM recipes — expansion batch for Larder.
//
// Extends diet-dash.js with entirely new titles. Same diet contract applies:
// no added salt, no cured/smoked/processed meat or fish, no high-salt
// condiments (no soy sauce, fish sauce, Worcestershire, miso, ketchup, etc.),
// no salty cheeses. Flavour from herbs, spices, citrus, vinegar and aromatics.
// Where stock appears it is always low-salt / no-added-salt.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  // ── Breakfasts ──────────────────────────────────────────────────────────────
  {
    title: 'Warm spiced pear and oat bowl',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Heart-healthy'],
    instructions:
      '1. Simmer the oats in the milk and water, stirring often, for 5 minutes until thick and creamy. No salt added.\n' +
      '2. Meanwhile quarter, core and slice the pears. Warm them in a small pan with the cinnamon, ground cardamom and a splash of water for 3 minutes until just soft.\n' +
      '3. Spoon the porridge into bowls and heap the spiced pears on top.\n' +
      '4. Scatter with the toasted flaked almonds and a light drizzle of honey, then serve straight away.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '250ml' },
      { rawName: 'Water', rawMeasure: '150ml' },
      { rawName: 'Pear', rawMeasure: '2 ripe' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Ground cardamom', rawMeasure: '1/4 tsp' },
      { rawName: 'Almonds', rawMeasure: '20g, flaked, toasted' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Mango and coconut smoothie bowl',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Blend the frozen mango with the coconut milk and banana until completely smooth and thick.\n' +
      '2. Pour into two shallow bowls — the mixture should be spoonable, not drinkable.\n' +
      '3. Arrange the sliced kiwi, fresh strawberries and a handful of blueberries over the top.\n' +
      '4. Scatter with the pumpkin seeds and unsweetened coconut flakes, then eat straight away before it melts.',
    rawLines: [
      { rawName: 'Mango', rawMeasure: '300g frozen chunks' },
      { rawName: 'Coconut milk', rawMeasure: '150ml' },
      { rawName: 'Banana', rawMeasure: '1 frozen' },
      { rawName: 'Kiwi', rawMeasure: '1' },
      { rawName: 'Strawberries', rawMeasure: '100g' },
      { rawName: 'Blueberries', rawMeasure: '60g' },
      { rawName: 'Pumpkin seeds', rawMeasure: '2 tbsp' },
      { rawName: 'Desiccated coconut', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Buckwheat pancakes with lemon ricotta',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Heart-healthy'],
    instructions:
      '1. Whisk the buckwheat flour, egg, milk and baking powder into a smooth batter. Leave for 5 minutes.\n' +
      '2. Beat the ricotta with the lemon zest and a drizzle of honey to make the topping.\n' +
      '3. Heat a non-stick pan lightly brushed with vegetable oil. Drop in 2-tablespoon rounds of batter and cook for 2 minutes until bubbles appear, then flip and cook for a further minute.\n' +
      '4. Stack the pancakes on plates, spoon over the lemon ricotta and top with fresh raspberries.',
    rawLines: [
      { rawName: 'Buckwheat flour', rawMeasure: '120g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Milk', rawMeasure: '180ml' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Ricotta', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '1, zest only' },
      { rawName: 'Honey', rawMeasure: '2 tsp' },
      { rawName: 'Raspberries', rawMeasure: '100g' },
      { rawName: 'Vegetable oil', rawMeasure: 'for the pan' },
    ],
  },
  {
    title: 'Egg and vegetable breakfast bowl',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy', 'High-protein', 'Low-carb'],
    instructions:
      '1. Heat the olive oil in a non-stick pan. Add the diced sweet potato and cook over a medium heat for 8 minutes until golden and soft.\n' +
      '2. Add the sliced mushrooms and cook for 3 minutes until they release their liquid and colour.\n' +
      '3. Stir through the spinach until wilted, then push everything to the sides and crack in the eggs. Cook to your liking.\n' +
      '4. Season generously with black pepper, scatter with chopped chives and serve in bowls — no salt needed.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Sweet potato', rawMeasure: '200g, finely diced' },
      { rawName: 'Mushroom', rawMeasure: '150g, sliced' },
      { rawName: 'Spinach', rawMeasure: '60g' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, snipped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Stewed plums with yoghurt and seeds',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Halve and stone the plums and place cut-side down in a pan with the orange juice, cinnamon and vanilla extract.\n' +
      '2. Simmer gently for 10–12 minutes until the plums are completely soft and the liquid has reduced to a light syrup. No sugar needed.\n' +
      '3. Spoon the natural yoghurt into bowls and top with the warm stewed plums and their juices.\n' +
      '4. Scatter with the sunflower and pumpkin seeds and serve at once.',
    rawLines: [
      { rawName: 'Plum', rawMeasure: '6, ripe' },
      { rawName: 'Orange', rawMeasure: '1, juiced' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
      { rawName: 'Natural yoghurt', rawMeasure: '250g' },
      { rawName: 'Sunflower seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Pumpkin seeds', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Savoury oat porridge with poached egg',
    servingsBase: 2,
    totalTimeMinutes: 18,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Simmer the oats in the low-salt vegetable stock and water, stirring, for 5 minutes until thick and creamy.\n' +
      '2. Meanwhile bring a pan of water to a gentle simmer and add a splash of vinegar. Crack in the eggs and poach for 3 minutes until the whites are set. Lift out onto kitchen paper.\n' +
      '3. Stir the chopped chives and a little black pepper through the oats.\n' +
      '4. Spoon into bowls, set the poached eggs on top, and finish with a pinch of smoked paprika and a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 300ml' },
      { rawName: 'Water', rawMeasure: '200ml' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp white wine vinegar' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, snipped' },
      { rawName: 'Smoked paprika', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Soups ────────────────────────────────────────────────────────────────────
  {
    title: 'Courgette and herb soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Soften the chopped onion and garlic in the olive oil over a medium heat for 6 minutes without colouring.\n' +
      '2. Add the sliced courgettes and cook for a further 5 minutes until starting to soften.\n' +
      '3. Pour in the low-salt stock, bring to the boil and simmer for 15 minutes.\n' +
      '4. Add the basil and mint and blend until smooth. Season with black pepper and a squeeze of lemon, then serve with a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '4' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Basil', rawMeasure: 'large handful' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 800ml' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sweet potato and coconut soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Caribbean',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Soften the chopped onion in the vegetable oil for 5 minutes, then add the crushed garlic, grated ginger and a pinch of chilli flakes and cook for a minute.\n' +
      '2. Add the cubed sweet potato, the coconut milk and the low-salt stock. Bring to a simmer and cook for 20 minutes until the sweet potato is very soft.\n' +
      '3. Blend until silky smooth.\n' +
      '4. Season with black pepper and a squeeze of lime, scatter with chopped coriander and serve.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '750g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp grated' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 400ml' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Broccoli and almond soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Soften the chopped onion in the olive oil for 5 minutes. Add the garlic and cook for a further minute.\n' +
      '2. Add the broccoli florets and the low-salt stock. Bring to the boil and simmer for 12 minutes until the broccoli is completely tender.\n' +
      '3. Add the ground almonds and blend until very smooth and creamy.\n' +
      '4. Season with black pepper and a squeeze of lemon, and serve scattered with toasted flaked almonds.',
    rawLines: [
      { rawName: 'Broccoli', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ground almonds', rawMeasure: '50g' },
      { rawName: 'Almonds', rawMeasure: '20g, flaked, toasted' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 900ml' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkish red pepper and tomato soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Turkish',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the red peppers and tomatoes and place cut-side down on a baking tray. Roast for 25 minutes until soft and blistered.\n' +
      '2. Peel off any loose skins from the peppers and tip everything into a pan with the low-salt stock and smoked paprika.\n' +
      '3. Blend until smooth, then bring to a gentle simmer. Stir in the lemon juice and black pepper.\n' +
      '4. Ladle into bowls and finish with a swirl of natural yoghurt and a pinch of dried mint.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '3 red' },
      { rawName: 'Tomato', rawMeasure: '500g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 600ml' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Dried mint', rawMeasure: '1 pinch' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Salads & light lunches ───────────────────────────────────────────────────
  {
    title: 'Brown rice and edamame salad',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Cook the brown rice in plenty of unsalted boiling water for 25–30 minutes until tender, then drain and cool.\n' +
      '2. Blanch the podded edamame in unsalted boiling water for 3 minutes, then drain.\n' +
      '3. Whisk together the rice vinegar, sesame oil, grated ginger, a little lime juice and black pepper to make the dressing — no soy sauce.\n' +
      '4. Toss the rice with the edamame, shredded carrot, sliced spring onion and cucumber, dress and scatter with sesame seeds.',
    rawLines: [
      { rawName: 'Brown rice', rawMeasure: '200g' },
      { rawName: 'Edamame beans', rawMeasure: '200g podded' },
      { rawName: 'Carrot', rawMeasure: '1, grated' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '1/2, diced' },
      { rawName: 'Sesame seeds', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Rice vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Ginger', rawMeasure: '1 tsp, grated' },
      { rawName: 'Lime', rawMeasure: '1/2' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Watermelon, cucumber and mint salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Low-carb'],
    instructions:
      '1. Cube the watermelon flesh into bite-sized pieces and place in a wide bowl.\n' +
      '2. Halve the cucumber lengthways, scoop out the seeds with a spoon and slice thinly. Add to the bowl.\n' +
      '3. Tear the mint leaves and scatter over with a handful of rocket.\n' +
      '4. Dress with the lime juice, a drizzle of olive oil, a pinch of chilli flakes and black pepper. Toss gently and serve immediately.',
    rawLines: [
      { rawName: 'Watermelon', rawMeasure: '1kg flesh' },
      { rawName: 'Cucumber', rawMeasure: '1' },
      { rawName: 'Mint', rawMeasure: 'large handful' },
      { rawName: 'Rocket', rawMeasure: '50g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 small pinch' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Courgette and black bean salad',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Mexican',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Use a vegetable peeler to create wide courgette ribbons or slice very thinly on a mandolin.\n' +
      '2. Drain and rinse the black beans and tip into a large bowl with the courgette, halved cherry tomatoes and sliced spring onion.\n' +
      '3. Whisk together the lime juice, olive oil, crushed garlic, ground cumin and black pepper for the dressing.\n' +
      '4. Toss everything together, fold through chopped coriander and serve at room temperature.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '3' },
      { rawName: 'Black beans', rawMeasure: '1 tin, drained and rinsed' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'handful' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled peach and rocket salad',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy', 'Mediterranean'],
    instructions:
      '1. Halve and stone the peaches. Brush the cut sides with a little olive oil and griddle over a high heat for 2–3 minutes until charred and slightly softened.\n' +
      '2. Arrange the rocket on a platter and scatter over the toasted walnuts.\n' +
      '3. Lay the warm peaches over the top.\n' +
      '4. Whisk the remaining olive oil with the balsamic vinegar and black pepper, drizzle over and serve with shavings of Parmesan.',
    rawLines: [
      { rawName: 'Peach', rawMeasure: '4 ripe' },
      { rawName: 'Rocket', rawMeasure: '100g' },
      { rawName: 'Walnuts', rawMeasure: '40g, toasted' },
      { rawName: 'Parmesan', rawMeasure: '20g, shaved' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp balsamic vinegar' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Farro and roasted tomato salad',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Halve the cherry tomatoes and roast with a little olive oil for 25 minutes until caramelised and sweet.\n' +
      '2. Meanwhile cook the farro in unsalted boiling water for 20–25 minutes until tender, then drain and cool slightly.\n' +
      '3. Combine the farro with the roasted tomatoes, the diced cucumber, sliced red onion, torn basil and chopped parsley.\n' +
      '4. Dress with olive oil, red wine vinegar and black pepper. Toss and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Farro', rawMeasure: '200g' },
      { rawName: 'Cherry tomato', rawMeasure: '400g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Basil', rawMeasure: 'handful' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp red wine vinegar' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mango, avocado and black-eyed pea salad',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Caribbean',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Drain and rinse the black-eyed peas and tip into a large bowl.\n' +
      '2. Dice the mango and avocado and add to the bowl with the finely sliced red onion and diced red pepper.\n' +
      '3. Whisk together the lime juice, olive oil, a pinch of chilli flakes and black pepper to make the dressing.\n' +
      '4. Pour over the salad, fold through the chopped coriander and serve at once.',
    rawLines: [
      { rawName: 'Black-eyed peas', rawMeasure: '1 tin, drained and rinsed' },
      { rawName: 'Mango', rawMeasure: '1 ripe' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red, diced' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Coriander', rawMeasure: 'handful' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Poultry & lean meat mains ───────────────────────────────────────────────
  {
    title: 'Moroccan-spiced chicken with apricots',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['DASH', 'Low-sodium', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Rub the chicken thighs with the ras el hanout, cinnamon, ground coriander and black pepper. Leave for 15 minutes.\n' +
      '2. Brown the chicken in the olive oil over a high heat, then lift out. Soften the sliced onion in the same pan for 5 minutes.\n' +
      '3. Add the crushed garlic, the chopped tomatoes, the dried apricots and a splash of low-salt stock. Return the chicken, cover and simmer gently for 30 minutes until cooked through.\n' +
      '4. Scatter with toasted flaked almonds and chopped coriander, and serve with couscous.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, skinless and boneless' },
      { rawName: 'Ras el hanout', rawMeasure: '2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Dried apricots', rawMeasure: '80g, roughly chopped' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 150ml' },
      { rawName: 'Almonds', rawMeasure: '30g, flaked, toasted' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek-style baked chicken with lemon and oregano',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['DASH', 'Low-sodium', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Arrange the chicken pieces in a large roasting tin.\n' +
      '2. Whisk together the olive oil, lemon juice and zest, crushed garlic, dried oregano and black pepper to make the marinade.\n' +
      '3. Pour over the chicken and tuck the lemon wedges and quartered tomatoes around it.\n' +
      '4. Roast for 40–45 minutes, basting once, until the chicken is golden and cooked through. Scatter with chopped parsley and serve with a big Greek salad.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Lemon', rawMeasure: '3' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Dried oregano', rawMeasure: '2 tsp' },
      { rawName: 'Tomato', rawMeasure: '4, quartered' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey mince and vegetable ragu',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['DASH', 'Low-sodium', 'Dairy-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Brown the turkey mince in a little olive oil over a high heat, breaking it up as it cooks. Lift out and set aside.\n' +
      '2. Soften the finely diced onion, carrot and celery in the same pan for 8 minutes.\n' +
      '3. Add the crushed garlic and cook for a minute, then stir in the chopped tomatoes, the courgette and the browned turkey. Add the dried mixed herbs and black pepper.\n' +
      '4. Simmer for 25 minutes until thick and rich. Serve tossed with wholewheat pasta and a scattering of fresh basil.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '1 stick' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (800g)' },
      { rawName: 'Mixed herbs', rawMeasure: '1 tsp' },
      { rawName: 'Wholewheat pasta', rawMeasure: '320g' },
      { rawName: 'Basil', rawMeasure: 'handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken tikka-style bake',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['DASH', 'Low-sodium', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Mix the natural yoghurt with the crushed garlic, grated ginger, garam masala, turmeric, ground coriander and paprika.\n' +
      '2. Score the chicken breast pieces and coat thoroughly in the marinade. Leave for at least 30 minutes, or overnight in the fridge.\n' +
      '3. Spread on a foil-lined tray and roast at 220°C (fan 200°C) for 20–22 minutes until charred at the edges and cooked through.\n' +
      '4. Season with black pepper, scatter with coriander and serve with rice and a wedge of lemon.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g, cubed' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp grated' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Lemon', rawMeasure: '1, cut into wedges' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Slow-cooked beef and root vegetable pot',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Toss the braising steak in a little black pepper. Brown in batches in the olive oil in a wide casserole, then set aside.\n' +
      '2. Soften the chopped onion and celery for 5 minutes, then add the garlic, thyme and bay leaves.\n' +
      '3. Return the beef, add the diced carrot, parsnip and swede and pour over enough low-salt stock to just cover.\n' +
      '4. Bring to a gentle simmer, cover and cook on a low heat for 1.5 hours until the beef is tender. Season with black pepper and scatter with chopped parsley.',
    rawLines: [
      { rawName: 'Braising steak', rawMeasure: '600g, cubed' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Parsnip', rawMeasure: '2' },
      { rawName: 'Swede', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Bay leaf', rawMeasure: '2' },
      { rawName: 'Stock cube', rawMeasure: '2 low-salt, made up to 700ml' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai basil chicken bowl',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['DASH', 'Low-sodium', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Heat the vegetable oil in a wok or large frying pan until very hot. Add the sliced garlic and chilli and stir-fry for 30 seconds.\n' +
      '2. Add the minced chicken and stir-fry over a high heat, breaking it up, for 5 minutes until cooked through.\n' +
      '3. Stir in the rice vinegar, a splash of water, the sliced pepper and spring onions and toss for 2 minutes.\n' +
      '4. Remove from the heat, fold through the basil leaves and black pepper. Serve over jasmine rice with a wedge of lime — no fish sauce or soy.',
    rawLines: [
      { rawName: 'Chicken mince', rawMeasure: '500g' },
      { rawName: 'Garlic', rawMeasure: '4 cloves, sliced' },
      { rawName: 'Chilli', rawMeasure: '2, sliced' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red, sliced' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Basil', rawMeasure: 'large handful (Thai basil if available)' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Jasmine rice', rawMeasure: '280g, cooked to serve' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Fish & seafood mains ─────────────────────────────────────────────────────
  {
    title: 'Baked cod with olive oil and herbs',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['DASH', 'Low-sodium', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein', 'Low-carb', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Place the cod fillets in a lightly oiled baking dish.\n' +
      '2. Scatter over the crushed garlic, finely chopped parsley, smoked paprika and the sliced cherry tomatoes.\n' +
      '3. Drizzle generously with the olive oil and season with black pepper. No salt.\n' +
      '4. Bake for 16–18 minutes until the cod is just flaking. Squeeze over the lemon and serve with roasted new potatoes.',
    rawLines: [
      { rawName: 'Cod fillet', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, crushed' },
      { rawName: 'Parsley', rawMeasure: 'large handful, finely chopped' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cherry tomato', rawMeasure: '200g, halved' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai-style steamed sea bass',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['DASH', 'Low-sodium', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein', 'Low-carb'],
    instructions:
      '1. Score the sea bass fillets on the skin side. Lay on a heatproof plate that fits inside a steamer basket.\n' +
      '2. Scatter the grated ginger, sliced chilli and lemongrass over the fish.\n' +
      '3. Place over simmering water, cover and steam for 8–10 minutes until the flesh is opaque and just flaking.\n' +
      '4. Warm the lime juice, sesame oil and rice vinegar together and pour over the fish, then scatter with coriander and spring onion. Serve with steamed jasmine rice.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '2 fillets' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp, grated' },
      { rawName: 'Chilli', rawMeasure: '1, sliced' },
      { rawName: 'Lemongrass', rawMeasure: '1 stalk, thinly sliced' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Spring onion', rawMeasure: '2' },
    ],
  },
  {
    title: 'Prawn and mango salad',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Thai',
    dietLabels: ['DASH', 'Low-sodium', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein', 'Low-carb'],
    instructions:
      '1. Peel the prawns and toss in a little lime juice and chilli flakes. Leave for 5 minutes.\n' +
      '2. Heat a drizzle of vegetable oil in a pan over a high heat and cook the prawns for 2–3 minutes until pink and just cooked. Cool slightly.\n' +
      '3. Combine the shredded Chinese leaf, diced mango, cucumber, sliced spring onion and mint in a large bowl.\n' +
      '4. Whisk the lime juice, sesame oil, grated ginger and black pepper together, dress the salad, top with the prawns and serve at once.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '300g, peeled' },
      { rawName: 'Mango', rawMeasure: '1 ripe, diced' },
      { rawName: 'Chinese leaf', rawMeasure: '200g, shredded' },
      { rawName: 'Cucumber', rawMeasure: '1/2, sliced' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Mint', rawMeasure: 'handful' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Ginger', rawMeasure: '1 tsp, grated' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Salmon and brown rice power bowl',
    servingsBase: 2,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['DASH', 'Low-sodium', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Cook the brown rice in unsalted water for 25–30 minutes until tender, then drain.\n' +
      '2. Rub the salmon fillets with a little sesame oil, grated ginger and black pepper. Heat a non-stick pan and cook skin-side down for 4 minutes, then flip and cook for 2 more minutes.\n' +
      '3. Blanch the edamame in unsalted water for 3 minutes, then drain.\n' +
      '4. Arrange the rice in bowls with the salmon, edamame, sliced avocado and shredded carrot. Dress with a mixture of rice vinegar, sesame oil and lime juice. Scatter with sesame seeds.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Brown rice', rawMeasure: '150g' },
      { rawName: 'Edamame beans', rawMeasure: '100g podded' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1, grated' },
      { rawName: 'Sesame seeds', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Ginger', rawMeasure: '1 tsp, grated' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled mackerel with caponata-style vegetables',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['DASH', 'Low-sodium', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Toss the diced aubergine, sliced celery and chopped tomatoes in a roasting tin with the olive oil, crushed garlic, red wine vinegar and black pepper. No salt.\n' +
      '2. Roast for 25 minutes until soft and lightly caramelised. Stir through the pine nuts and raisins for the last 5 minutes.\n' +
      '3. Meanwhile heat the grill to high. Slash the mackerel fillets, brush with olive oil and grill skin-side up for 4–5 minutes until the skin is crisp and the flesh is just cooked.\n' +
      '4. Serve the mackerel over the sweet-sour vegetables with a squeeze of lemon.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '4 fillets' },
      { rawName: 'Aubergine', rawMeasure: '1, diced' },
      { rawName: 'Celery', rawMeasure: '2 sticks, sliced' },
      { rawName: 'Tomato', rawMeasure: '4, chopped' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Pine nuts', rawMeasure: '30g' },
      { rawName: 'Raisins', rawMeasure: '30g' },
      { rawName: 'Vinegar', rawMeasure: '2 tbsp red wine vinegar' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Vegetarian & vegan mains ─────────────────────────────────────────────────
  {
    title: 'Black bean and sweet potato burrito bowl',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the cubed sweet potato in olive oil, smoked paprika and cumin and roast for 25 minutes until soft.\n' +
      '2. Warm the rinsed black beans in a pan with the crushed garlic, chilli powder and lime juice for 5 minutes.\n' +
      '3. Cook the brown rice in unsalted water until tender, then fluff with a fork and stir through the chopped coriander.\n' +
      '4. Build bowls: rice at the base, then the sweet potato and beans, topped with sliced avocado, shredded red cabbage and a squeeze of lime. No salt.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '600g' },
      { rawName: 'Black beans', rawMeasure: '2 tins, drained and rinsed' },
      { rawName: 'Brown rice', rawMeasure: '200g' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Red cabbage', rawMeasure: '100g, shredded' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/4 tsp' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Coriander', rawMeasure: 'handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Ribollita-style Tuscan bean stew',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Soften the finely chopped onion, carrot and celery in the olive oil for 10 minutes. Add the crushed garlic and rosemary and cook for a minute.\n' +
      '2. Stir in the chopped tomatoes and the low-salt stock, bring to the boil and simmer for 15 minutes.\n' +
      '3. Add the rinsed cannellini beans and the shredded cavolo nero or Savoy cabbage, and simmer for a further 15 minutes.\n' +
      '4. Tear in the wholegrain bread to thicken the stew, season with black pepper and a drizzle of olive oil, and serve.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '2 tins, drained and rinsed' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs, chopped' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cavolo nero', rawMeasure: '200g, shredded' },
      { rawName: 'Wholegrain bread', rawMeasure: '2 thick slices, torn' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 800ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cauliflower and spinach dal',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Soften the chopped onion in the vegetable oil for 5 minutes, then add the crushed garlic, grated ginger and all the spices. Cook for a minute until fragrant.\n' +
      '2. Stir in the rinsed red lentils and the cauliflower florets, pour over enough water to cover generously, and bring to the boil.\n' +
      '3. Simmer for 20–22 minutes, stirring often, until the lentils are creamy and the cauliflower is tender.\n' +
      '4. Fold through the spinach until wilted. Finish with lime juice and black pepper, scatter with coriander and serve with wholemeal flatbread.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g red lentils' },
      { rawName: 'Cauliflower', rawMeasure: '1/2 head, small florets' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp, grated' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/4 tsp' },
      { rawName: 'Water', rawMeasure: '900ml' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'handful' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetarian moussaka',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Slice the aubergines, brush with olive oil and roast for 20 minutes until soft and golden.\n' +
      '2. Meanwhile make the filling: soften the chopped onion in olive oil, add the crushed garlic, cinnamon and ground allspice, then stir in the rinsed lentils and chopped tomatoes. Simmer for 15 minutes until thick.\n' +
      '3. Make the topping: stir the natural yoghurt, eggs and grated nutmeg together with a little black pepper.\n' +
      '4. Layer the aubergine and lentil filling in a baking dish, pour over the yoghurt topping and bake for 30 minutes until golden and set.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Lentils', rawMeasure: '250g green lentils, rinsed' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Ground allspice', rawMeasure: '1/4 tsp' },
      { rawName: 'Natural yoghurt', rawMeasure: '300g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spanish-style beans with peppers',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Soften the sliced onion and deseeded, sliced peppers in the olive oil over a medium heat for 10 minutes until soft and sweet.\n' +
      '2. Add the crushed garlic, smoked paprika and dried thyme and cook for a minute.\n' +
      '3. Stir in the chopped tomatoes and the rinsed butter beans. Simmer for 20 minutes until the sauce is thick and the beans are tender.\n' +
      '4. Season generously with black pepper and a splash of sherry vinegar, scatter with parsley and serve with crusty wholegrain bread.',
    rawLines: [
      { rawName: 'Butter beans', rawMeasure: '2 tins, drained and rinsed' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '3 mixed' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Thyme', rawMeasure: '1 tsp dried' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Sherry vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Courgette, pea and mint frittata',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy', 'High-protein', 'Low-carb', 'Mediterranean'],
    instructions:
      '1. Heat the olive oil in a 24 cm ovenproof frying pan over a medium heat. Fry the sliced courgettes for 5 minutes until lightly golden.\n' +
      '2. Add the peas and spring onions and stir for a minute.\n' +
      '3. Beat the eggs with the torn mint leaves, black pepper and a few torn basil leaves, then pour over the vegetables.\n' +
      '4. Cook on the hob for 3–4 minutes until the edges are set, then transfer to a 180°C (fan 160°C) oven for 8–10 minutes until just set in the centre. Serve in wedges with a green salad.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Basil', rawMeasure: 'small handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pea and lemon risotto',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy', 'Mediterranean'],
    instructions:
      '1. Soften the finely chopped onion in the olive oil for 5 minutes. Add the garlic and stir for a minute.\n' +
      '2. Add the risotto rice and stir to coat. Pour in the white wine and stir until absorbed.\n' +
      '3. Add the warm low-salt stock, a ladleful at a time, stirring until each is absorbed, for about 20 minutes until the rice is al dente.\n' +
      '4. Stir in the peas and cook for 3 minutes. Remove from the heat, fold through the lemon zest, juice, fresh mint and a little Parmesan. Season with black pepper and serve.',
    rawLines: [
      { rawName: 'Arborio rice', rawMeasure: '300g' },
      { rawName: 'Peas', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'White wine', rawMeasure: '100ml' },
      { rawName: 'Stock cube', rawMeasure: '2 low-salt, made up to 1 litre' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Parmesan', rawMeasure: '30g, grated' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chinese-style vegetable and tofu noodle soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Bring the low-salt vegetable stock to the boil in a large pan with the grated ginger, sliced garlic, star anise and a splash of rice vinegar.\n' +
      '2. Simmer for 10 minutes, then remove the star anise.\n' +
      '3. Add the sliced bok choy, shredded Chinese leaf, sliced mushrooms and cubed firm tofu. Simmer for 5 minutes until the vegetables are just tender.\n' +
      '4. Cook the noodles separately in unsalted water, drain and divide into bowls. Ladle over the soup broth and top with spring onion, a drizzle of sesame oil and black pepper.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '300g firm, cubed' },
      { rawName: 'Stock cube', rawMeasure: '2 low-salt, made up to 1.5 litres' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp, grated' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, sliced' },
      { rawName: 'Star anise', rawMeasure: '2' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Bok choy', rawMeasure: '2 heads, halved' },
      { rawName: 'Chinese leaf', rawMeasure: '100g, shredded' },
      { rawName: 'Mushroom', rawMeasure: '200g, sliced' },
      { rawName: 'Noodles', rawMeasure: '200g rice noodles' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted tomato and lentil pasta',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the tomatoes and roast with the whole garlic cloves and olive oil for 25 minutes until caramelised.\n' +
      '2. Tip into a large pan and squeeze the garlic out of its skins. Add the rinsed Puy lentils and enough water to cover generously. Simmer for 20 minutes until the lentils are tender.\n' +
      '3. Cook the pasta in a large pan of unsalted boiling water until just al dente. Reserve a cup of the cooking water, then drain.\n' +
      '4. Stir the pasta into the tomato-lentil sauce with a splash of pasta water, torn basil and black pepper. Toss and serve with a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '700g' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Lentils', rawMeasure: '150g Puy lentils' },
      { rawName: 'Pasta', rawMeasure: '300g penne or rigatoni' },
      { rawName: 'Basil', rawMeasure: 'large handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mixed mushroom and herb grain bowl',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy'],
    instructions:
      '1. Cook the spelt or farro in unsalted boiling water for 25 minutes until tender. Drain and keep warm.\n' +
      '2. Heat the olive oil in a large frying pan. Add the mixed sliced mushrooms in batches and cook over a high heat until golden and all liquid has evaporated. Add the crushed garlic and thyme for the last minute.\n' +
      '3. Combine the grains and mushrooms in a bowl.\n' +
      '4. Dress with extra olive oil, a squeeze of lemon, chopped parsley and black pepper. Toss well and top with a handful of toasted pumpkin seeds.',
    rawLines: [
      { rawName: 'Spelt', rawMeasure: '200g' },
      { rawName: 'Mushroom', rawMeasure: '500g mixed' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '2 tsp, chopped' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Pumpkin seeds', rawMeasure: '40g, toasted' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Sides ────────────────────────────────────────────────────────────────────
  {
    title: 'Charred tenderstem broccoli with garlic',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Low-carb'],
    instructions:
      '1. Preheat a griddle pan or heavy frying pan until very hot.\n' +
      '2. Toss the tenderstem broccoli in the olive oil and lay in the hot pan in a single layer.\n' +
      '3. Cook without moving for 2–3 minutes until deeply charred, then turn and cook for another 2 minutes.\n' +
      '4. Transfer to a platter, scatter over the thinly sliced garlic that you have softened separately in a tiny bit of olive oil, squeeze over the lemon and season with black pepper.',
    rawLines: [
      { rawName: 'Tenderstem broccoli', rawMeasure: '400g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, thinly sliced' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cumin-roasted cauliflower',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Side',
    cuisine: 'Middle-Eastern',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Low-carb'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Break the cauliflower into florets and toss in the olive oil, ground cumin, turmeric and black pepper.\n' +
      '2. Spread in a single layer on a large baking tray — avoid overcrowding.\n' +
      '3. Roast for 25–28 minutes, turning once, until deeply golden and tender at the edges.\n' +
      '4. Squeeze over the lemon, scatter with chopped parsley and a pinch of chilli flakes, and serve.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Wilted spinach with pine nuts and raisins',
    servingsBase: 4,
    totalTimeMinutes: 12,
    course: 'Side',
    cuisine: 'Spanish',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Low-carb', 'Mediterranean'],
    instructions:
      '1. Toast the pine nuts in a large, dry frying pan for 2–3 minutes until golden. Tip out and set aside.\n' +
      '2. Add the olive oil to the pan and soften the sliced garlic over a gentle heat for a minute without colouring.\n' +
      '3. Add all the spinach in batches, tossing as it wilts, until just collapsed. It should still be bright green.\n' +
      '4. Fold in the raisins and pine nuts, squeeze over the lemon and season with black pepper. Serve immediately.',
    rawLines: [
      { rawName: 'Spinach', rawMeasure: '600g' },
      { rawName: 'Pine nuts', rawMeasure: '40g' },
      { rawName: 'Raisins', rawMeasure: '30g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, sliced' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bulgur wheat pilaf with herbs',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Side',
    cuisine: 'Turkish',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy', 'Mediterranean'],
    instructions:
      '1. Soften the finely chopped onion in the olive oil for 6 minutes until translucent.\n' +
      '2. Add the bulgur wheat and stir for a minute to toast lightly in the oil.\n' +
      '3. Pour over the low-salt stock, bring to the boil, then cover and cook on the lowest heat for 15 minutes until all the liquid is absorbed.\n' +
      '4. Take off the heat, lay a clean tea towel under the lid for 5 minutes to absorb steam, then fork through the chopped parsley, mint, spring onion and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 350ml' },
      { rawName: 'Parsley', rawMeasure: 'large handful' },
      { rawName: 'Mint', rawMeasure: 'small handful' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Honey-roasted parsnips and carrots',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Peel the parsnips and carrots and cut into similar-sized batons.\n' +
      '2. Toss in a roasting tin with the olive oil, honey and dried thyme and season with black pepper — no salt.\n' +
      '3. Spread out so they are not touching and roast for 30–35 minutes, turning once, until caramelised at the edges and tender throughout.\n' +
      '4. Scatter with fresh thyme leaves and serve.',
    rawLines: [
      { rawName: 'Parsnip', rawMeasure: '4' },
      { rawName: 'Carrot', rawMeasure: '4' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Thyme', rawMeasure: '1 tsp dried, plus a few fresh sprigs' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Steamed asparagus with lemon and almonds',
    servingsBase: 4,
    totalTimeMinutes: 12,
    course: 'Side',
    cuisine: 'French',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Low-carb'],
    instructions:
      '1. Snap off the woody ends of the asparagus and steam for 4–5 minutes until just tender but still bright green.\n' +
      '2. Meanwhile toast the flaked almonds in a dry frying pan for 2 minutes until golden.\n' +
      '3. Arrange the asparagus on a platter.\n' +
      '4. Drizzle with the olive oil, squeeze over the lemon juice and scatter the zest and toasted almonds over the top. Season with black pepper and serve.',
    rawLines: [
      { rawName: 'Asparagus', rawMeasure: '500g' },
      { rawName: 'Almonds', rawMeasure: '30g, flaked' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked sweet potato wedges with herbs',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'American',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Scrub the sweet potatoes and cut into thick wedges, leaving the skin on.\n' +
      '2. Toss in a bowl with the olive oil, smoked paprika, dried oregano and black pepper — no salt.\n' +
      '3. Spread on a large baking tray, making sure they are not overlapping, and bake for 30–35 minutes, turning once, until tender inside and slightly crisp outside.\n' +
      '4. Scatter with fresh parsley and a squeeze of lime before serving.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '800g' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Dried oregano', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Lime', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Snacks ───────────────────────────────────────────────────────────────────
  {
    title: 'Baked aubergine with tahini',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Halve the aubergines, score the flesh deeply in a cross-hatch, brush generously with olive oil and place cut-side up on a baking tray.\n' +
      '2. Roast for 25 minutes until the flesh is completely soft and the top is golden.\n' +
      '3. Whisk together the tahini, lemon juice, crushed garlic and a splash of water to make a thin, pourable sauce.\n' +
      '4. Spoon the tahini sauce over the baked aubergines, scatter with parsley and chilli flakes, and serve with wholemeal pitta.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Edamame with chilli and lime',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Japanese',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Cook the edamame (still in pods) in unsalted boiling water for 4–5 minutes, then drain.\n' +
      '2. Toss in a bowl with the lime juice, chilli flakes, sesame oil and black pepper — no salt.\n' +
      '3. Scatter with the sesame seeds.\n' +
      '4. Eat the beans straight from the pods, squeezing them into your mouth. Serve while still warm.',
    rawLines: [
      { rawName: 'Edamame beans', rawMeasure: '400g in pods' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Apple and almond butter bites',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Core the apples and slice into thick rounds.\n' +
      '2. Spread each round generously with unsalted almond butter.\n' +
      '3. Press a few fresh blueberries or a pinch of cinnamon onto the almond butter side.\n' +
      '4. Arrange on a board and serve at once as a quick, naturally sweet and satisfying snack.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Almond butter', rawMeasure: '4 tbsp unsalted' },
      { rawName: 'Blueberries', rawMeasure: '60g' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Cucumber rounds with avocado',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Low-carb'],
    instructions:
      '1. Slice the cucumber into rounds about 1 cm thick and arrange on a platter.\n' +
      '2. Scoop the avocado flesh into a bowl and mash with the lime juice, chilli flakes and black pepper — no salt.\n' +
      '3. Spoon a small mound of the avocado mash onto each cucumber round.\n' +
      '4. Top with a halved cherry tomato and a few coriander leaves, and serve immediately.',
    rawLines: [
      { rawName: 'Cucumber', rawMeasure: '1 large' },
      { rawName: 'Avocado', rawMeasure: '1 ripe' },
      { rawName: 'Lime', rawMeasure: '1/2' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Cherry tomato', rawMeasure: '8, halved' },
      { rawName: 'Coriander', rawMeasure: 'small handful' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Walnut and date energy balls',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Place the pitted dates in a food processor and blitz until they form a sticky paste.\n' +
      '2. Add the walnuts, oats, cinnamon and vanilla extract and process until the mixture clumps together.\n' +
      '3. Roll into 12–14 small balls, each about the size of a walnut. If the mixture is too sticky, chill for 10 minutes first.\n' +
      '4. Roll in the desiccated coconut or leave plain. Store in the fridge for up to 5 days.',
    rawLines: [
      { rawName: 'Medjool dates', rawMeasure: '200g, pitted' },
      { rawName: 'Walnuts', rawMeasure: '100g' },
      { rawName: 'Oats', rawMeasure: '60g' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Desiccated coconut', rawMeasure: '3 tbsp (optional, for rolling)' },
    ],
  },
  // ── Desserts ─────────────────────────────────────────────────────────────────
  {
    title: 'Mango and coconut panna cotta',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Warm the coconut milk gently in a pan with the vanilla extract. Do not boil.\n' +
      '2. Whisk in the agar agar flakes according to the packet — typically 1 tsp per 200ml — and keep stirring for 2 minutes until dissolved.\n' +
      '3. Pour into four ramekins or glasses and chill in the fridge for at least 3 hours until set.\n' +
      '4. Blend the mango flesh with the lime juice to a smooth coulis. Spoon over the set panna cotta just before serving.',
    rawLines: [
      { rawName: 'Coconut milk', rawMeasure: '600ml' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Agar agar', rawMeasure: '3 tsp flakes' },
      { rawName: 'Mango', rawMeasure: '1 ripe, flesh only' },
      { rawName: 'Lime', rawMeasure: '1, juiced' },
    ],
  },
  {
    title: 'Baked banana with cardamom and pistachios',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Leave the bananas in their skins and place on a baking tray.\n' +
      '2. Bake for 15 minutes until the skins are black and the flesh is very soft.\n' +
      '3. Slit each banana along its length, open it up and sprinkle with the ground cardamom and a little orange zest.\n' +
      '4. Scatter with the chopped pistachios and a squeeze of orange juice, and serve in the skins — the banana needs no added sugar.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '4 ripe' },
      { rawName: 'Ground cardamom', rawMeasure: '1/2 tsp' },
      { rawName: 'Orange', rawMeasure: '1, zest and juice' },
      { rawName: 'Pistachios', rawMeasure: '40g, roughly chopped' },
    ],
  },
  {
    title: 'Poached peaches with vanilla',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Halve and stone the peaches. Bring a pan of water with the vanilla pod and a strip of lemon peel to a gentle simmer.\n' +
      '2. Lower in the peach halves and poach for 8–10 minutes until just tender. Lift out carefully.\n' +
      '3. Reduce the poaching liquid by half over a high heat to concentrate the vanilla flavour, then spoon it over the peaches.\n' +
      '4. Serve the peaches warm or at room temperature with a spoonful of natural yoghurt and a scatter of toasted flaked almonds.',
    rawLines: [
      { rawName: 'Peach', rawMeasure: '4 ripe' },
      { rawName: 'Vanilla pod', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1 strip of peel' },
      { rawName: 'Natural yoghurt', rawMeasure: '4 tbsp' },
      { rawName: 'Almonds', rawMeasure: '20g, flaked, toasted' },
    ],
  },
  {
    title: 'Berry and almond clafoutis',
    servingsBase: 6,
    totalTimeMinutes: 40,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Lightly grease a round baking dish with a little unsalted butter.\n' +
      '2. Scatter the mixed berries over the base of the dish.\n' +
      '3. Whisk the eggs, milk, ground almonds, vanilla extract and a little honey until smooth.\n' +
      '4. Pour the batter over the berries and bake for 28–30 minutes until just set and golden at the edges. Dust with cinnamon and serve warm.',
    rawLines: [
      { rawName: 'Frozen mixed berries', rawMeasure: '350g, thawed' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Milk', rawMeasure: '200ml' },
      { rawName: 'Ground almonds', rawMeasure: '80g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
      { rawName: 'Unsalted butter', rawMeasure: 'a little, for greasing' },
    ],
  },
  {
    title: 'Mango and raspberry frozen yoghurt',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegetarian', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Blend the frozen mango with the natural yoghurt and a squeeze of lime juice until smooth and creamy.\n' +
      '2. Add the raspberries and pulse briefly so they are folded in but still a little chunky.\n' +
      '3. Taste — the fruits are sweet enough without added sugar.\n' +
      '4. Pour into a freezer-safe container and freeze for 2 hours for a scoopable texture, or serve immediately as a thick soft-serve.',
    rawLines: [
      { rawName: 'Mango', rawMeasure: '400g frozen' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g' },
      { rawName: 'Lime', rawMeasure: '1/2' },
      { rawName: 'Raspberries', rawMeasure: '150g' },
    ],
  },
  {
    title: 'Chocolate and avocado mousse',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Halve, stone and scoop out the avocado flesh into a food processor.\n' +
      '2. Add the cocoa powder, maple syrup, vanilla extract and coconut milk and blend until completely smooth and glossy. Scrape down the sides as needed.\n' +
      '3. Taste and add a little more maple syrup if needed — the mousse should be richly chocolatey but not overly sweet.\n' +
      '4. Spoon into four glasses, top with raspberries and a pinch of chilli flakes if you like, and chill for 30 minutes before serving.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2 ripe' },
      { rawName: 'Cocoa powder', rawMeasure: '3 tbsp unsweetened' },
      { rawName: 'Maple syrup', rawMeasure: '2 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Coconut milk', rawMeasure: '80ml' },
      { rawName: 'Raspberries', rawMeasure: '100g' },
    ],
  },
  {
    title: 'Spiced orange and date salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'Middle-Eastern',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy'],
    instructions:
      '1. Peel the oranges and slice into thin rounds, removing any pips and white pith.\n' +
      '2. Halve the pitted dates and slice thinly.\n' +
      '3. Arrange the orange slices on a platter and scatter over the dates.\n' +
      '4. Dust with a little cinnamon and ground cardamom, drizzle over the orange blossom water and scatter with the pistachios. Serve chilled or at room temperature.',
    rawLines: [
      { rawName: 'Orange', rawMeasure: '4' },
      { rawName: 'Medjool dates', rawMeasure: '8, pitted' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Ground cardamom', rawMeasure: '1/4 tsp' },
      { rawName: 'Orange blossom water', rawMeasure: '1 tbsp' },
      { rawName: 'Pistachios', rawMeasure: '30g, roughly chopped' },
    ],
  },
  // ── Extra variety ────────────────────────────────────────────────────────────
  {
    title: 'Greek salad with chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Mediterranean', 'High-protein'],
    instructions:
      '1. Combine the halved cherry tomatoes, diced cucumber, sliced red onion and drained, rinsed chickpeas in a large bowl.\n' +
      '2. Add the pitted Kalamata-style olives in very small quantity for flavour only — or omit entirely for stricter sodium control.\n' +
      '3. Whisk together the olive oil, red wine vinegar, dried oregano and black pepper to make the dressing.\n' +
      '4. Pour over the salad, toss well and leave for 5 minutes before serving.',
    rawLines: [
      { rawName: 'Cherry tomato', rawMeasure: '300g, halved' },
      { rawName: 'Cucumber', rawMeasure: '1, diced' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin, drained and rinsed' },
      { rawName: 'Dried oregano', rawMeasure: '1 tsp' },
      { rawName: 'Vinegar', rawMeasure: '2 tbsp red wine vinegar' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine and tomato flatbread',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Turkish',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Heart-healthy', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the aubergines lengthways, score the flesh and roast cut-side up for 20 minutes until completely soft.\n' +
      '2. Scoop out the flesh and chop roughly. Mix with the crushed garlic, lemon juice, olive oil, ground cumin and black pepper.\n' +
      '3. Warm the wholemeal flatbreads in the oven for 3 minutes.\n' +
      '4. Spread the aubergine mixture thickly over the flatbreads, top with sliced tomato and scatter with chopped parsley and chilli flakes.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Tomato', rawMeasure: '2, sliced' },
      { rawName: 'Parsley', rawMeasure: 'handful' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Flatbread', rawMeasure: '4 small wholemeal' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lemon and herb baked tofu',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein', 'Low-carb'],
    instructions:
      '1. Press the tofu between kitchen paper for 15 minutes to remove moisture, then cut into thick slabs.\n' +
      '2. Whisk together the olive oil, lemon zest and juice, crushed garlic, chopped rosemary, thyme and plenty of black pepper.\n' +
      '3. Toss the tofu in the marinade and leave for 10 minutes, then spread on a lined baking tray.\n' +
      '4. Bake at 200°C (fan 180°C) for 25 minutes, turning once, until golden. Serve over a green salad or alongside roasted vegetables.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g extra firm' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Rosemary', rawMeasure: '1 tsp, finely chopped' },
      { rawName: 'Thyme', rawMeasure: '1 tsp, finely chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pesto-style courgette noodles',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Low-carb', 'Mediterranean'],
    instructions:
      '1. Use a spiraliser or vegetable peeler to create long courgette noodles.\n' +
      '2. Blend the basil, spinach, crushed garlic, pine nuts, olive oil and lemon juice until smooth to make the pesto. Season with black pepper and no salt.\n' +
      '3. Warm a large frying pan over a medium heat and toss the courgette noodles for 2 minutes — just enough to take the raw edge off without making them soggy.\n' +
      '4. Toss through the green pesto, scatter with cherry tomatoes and toasted pine nuts, and serve immediately.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '4 large' },
      { rawName: 'Basil', rawMeasure: '2 large handfuls' },
      { rawName: 'Spinach', rawMeasure: '50g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Pine nuts', rawMeasure: '40g, plus extra to serve' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '150g, halved' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Coconut and turmeric chicken soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Thai',
    dietLabels: ['DASH', 'Low-sodium', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Bring the low-salt chicken stock to the boil in a large pan with the sliced lemongrass, grated ginger and turmeric.\n' +
      '2. Add the thinly sliced chicken breast and simmer for 10 minutes until cooked through.\n' +
      '3. Stir in the coconut milk, sliced mushrooms and the juice of the lime. Simmer gently for 5 more minutes.\n' +
      '4. Ladle into bowls and scatter with sliced spring onion, coriander and a fresh chilli. No fish sauce needed.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '400g, thinly sliced' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 800ml' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Lemongrass', rawMeasure: '2 stalks, bruised and sliced' },
      { rawName: 'Ginger', rawMeasure: '2 tsp, grated' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Mushroom', rawMeasure: '200g, sliced' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Coriander', rawMeasure: 'handful' },
      { rawName: 'Chilli', rawMeasure: '1, sliced' },
    ],
  },
  {
    title: 'Caribbean pumpkin and kidney bean stew',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Soften the chopped onion in the vegetable oil for 6 minutes, then add the crushed garlic, grated ginger, allspice, cinnamon, thyme and a chopped scotch bonnet (deseeded for less heat).\n' +
      '2. Add the cubed pumpkin or butternut squash and stir to coat in the spices.\n' +
      '3. Pour in the chopped tomatoes and the low-salt stock and bring to the boil. Simmer for 20 minutes, then add the rinsed kidney beans and cook for a further 15 minutes until the pumpkin is tender.\n' +
      '4. Finish with a squeeze of lime, scatter with spring onion and serve with rice.',
    rawLines: [
      { rawName: 'Pumpkin', rawMeasure: '700g, cubed (or butternut squash)' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin, drained and rinsed' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 tbsp, grated' },
      { rawName: 'Ground allspice', rawMeasure: '1/2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Chilli', rawMeasure: '1, deseeded and chopped' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1 low-salt, made up to 300ml' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Gazpacho',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'Low-carb', 'Mediterranean'],
    instructions:
      '1. Roughly chop the ripe tomatoes, cucumber, deseeded red pepper, red onion and garlic and tip into a blender.\n' +
      '2. Add the olive oil, red wine vinegar and plenty of black pepper. Blitz until very smooth.\n' +
      '3. Pass through a sieve if you like a smooth texture, or leave as is for something more rustic.\n' +
      '4. Chill for at least 1 hour until very cold. Serve in chilled bowls with a drizzle of olive oil and finely diced cucumber, tomato and pepper as a garnish.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '800g very ripe' },
      { rawName: 'Cucumber', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Vinegar', rawMeasure: '2 tbsp red wine vinegar' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Seared tuna with sesame and ginger dressing',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['DASH', 'Low-sodium', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'Heart-healthy', 'High-protein', 'Low-carb'],
    instructions:
      '1. Pat the tuna steaks dry and coat in the sesame seeds and black pepper.\n' +
      '2. Heat a heavy pan until very hot. Sear the tuna for 1 minute each side for rare, or 2 minutes for medium. The inside should still be pink.\n' +
      '3. Whisk together the sesame oil, rice vinegar, grated ginger and lime juice to make the dressing — no soy sauce.\n' +
      '4. Slice the tuna against the grain and arrange over a bed of salad leaves, drizzle with the dressing and scatter with sliced spring onion.',
    rawLines: [
      { rawName: 'Tuna steak', rawMeasure: '4 (about 150g each)' },
      { rawName: 'Sesame seeds', rawMeasure: '4 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Ginger', rawMeasure: '1 tsp, grated' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Mixed salad leaves', rawMeasure: '100g' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beetroot, lentil and walnut salad',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['DASH', 'Low-sodium', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'Heart-healthy', 'High-protein'],
    instructions:
      '1. Simmer the Puy lentils in unsalted water for 20–25 minutes until tender but holding shape. Drain and cool.\n' +
      '2. Peel and dice the cooked beetroot (or use vacuum-packed beetroot without vinegar).\n' +
      '3. Combine the lentils, beetroot, toasted walnuts, sliced spring onion and baby spinach in a large bowl.\n' +
      '4. Whisk together the olive oil, balsamic vinegar, Dijon-style mustard and black pepper, pour over and toss. Serve straight away.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g Puy lentils' },
      { rawName: 'Beetroot', rawMeasure: '400g cooked' },
      { rawName: 'Walnuts', rawMeasure: '60g, toasted' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Spinach', rawMeasure: '80g baby leaf' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp balsamic vinegar' },
      { rawName: 'Dijon mustard', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
]
