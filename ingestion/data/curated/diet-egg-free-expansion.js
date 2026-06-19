// Curated EGG-FREE recipes — expansion batch for Larder.
//
// Every recipe here is DISTINCT from those in diet-egg-free.js.
// No eggs, egg whites, egg yolks, mayonnaise, aioli, fresh egg pasta,
// meringue, or any binder that relies on egg.
//
// Shape: { title, servingsBase, totalTimeMinutes, course, cuisine,
//           dietLabels, instructions, rawLines:[{rawName, rawMeasure}] }
// ES module — import via sources/curated.js (mapCurated adds source/imageUrl).

export default [

  // ──────────────────────── Breakfast ────────────────────────

  {
    title: 'Coconut porridge with passion fruit',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Pour the coconut milk and water into a pan and bring to a gentle simmer.\n' +
      '2. Stir in the oats and cook over a medium-low heat for 7–8 minutes, stirring often, until thick and creamy.\n' +
      '3. Sweeten with the maple syrup and divide between two bowls.\n' +
      '4. Halve the passion fruits and scoop the pulp over the porridge, then scatter with toasted coconut flakes and serve.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Water', rawMeasure: '200ml' },
      { rawName: 'Maple syrup', rawMeasure: '1 tbsp' },
      { rawName: 'Passion fruit', rawMeasure: '2' },
      { rawName: 'Desiccated coconut', rawMeasure: '2 tbsp, toasted' },
    ],
  },

  {
    title: 'Spiced apple porridge',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Peel, core and dice the apple and soften in the butter in a small pan with the cinnamon for 3 minutes.\n' +
      '2. Meanwhile combine the oats and milk in a second pan, bring to a simmer and stir for 5–6 minutes until creamy.\n' +
      '3. Spoon the porridge into bowls, pile the warm apple on top and finish with a drizzle of honey.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Milk', rawMeasure: '450ml' },
      { rawName: 'Apple', rawMeasure: '1 large' },
      { rawName: 'Butter', rawMeasure: '10g' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
    ],
  },

  {
    title: 'Mango and oat breakfast smoothie bowl',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Blend the frozen mango with the almond milk until thick and smooth.\n' +
      '2. Pour into two bowls — it should be too thick to drink.\n' +
      '3. Scatter over the oats, sliced banana and blueberries.\n' +
      '4. Drizzle with a little maple syrup and serve at once.',
    rawLines: [
      { rawName: 'Mango', rawMeasure: '300g, frozen' },
      { rawName: 'Almond milk', rawMeasure: '150ml' },
      { rawName: 'Oats', rawMeasure: '30g' },
      { rawName: 'Banana', rawMeasure: '1' },
      { rawName: 'Blueberries', rawMeasure: '80g' },
      { rawName: 'Maple syrup', rawMeasure: '1 tsp' },
    ],
  },

  {
    title: 'Peanut butter and banana toast',
    servingsBase: 2,
    totalTimeMinutes: 8,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Toast the bread to a deep golden brown.\n' +
      '2. Spread each slice generously with peanut butter.\n' +
      '3. Slice the banana and arrange over the peanut butter.\n' +
      '4. Drizzle with a little honey and add a sprinkle of cinnamon. Serve at once.',
    rawLines: [
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Peanut butter', rawMeasure: '4 tbsp' },
      { rawName: 'Banana', rawMeasure: '2' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
    ],
  },

  {
    title: 'Warm stewed prunes on yoghurt',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Simmer the prunes in the orange juice with the cinnamon and a little water for 8–10 minutes until plump and syrupy.\n' +
      '2. Spoon the Greek yoghurt into two bowls.\n' +
      '3. Pile the warm prunes and their syrup over the yoghurt.\n' +
      '4. Scatter over the flaked almonds and serve.',
    rawLines: [
      { rawName: 'Prunes', rawMeasure: '200g' },
      { rawName: 'Orange', rawMeasure: '1, juiced' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
      { rawName: 'Greek yoghurt', rawMeasure: '300g' },
      { rawName: 'Flaked almonds', rawMeasure: '2 tbsp' },
    ],
  },

  {
    title: 'Griddled banana with oat granola',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Toss the oats with the maple syrup, coconut oil and a pinch of cinnamon, then spread on a baking sheet and toast in a 180°C (fan 160°C) oven for 12–15 minutes, stirring once.\n' +
      '2. Heat a griddle or dry frying pan until hot. Halve the bananas lengthways and griddle cut-side down for 2–3 minutes until caramelised.\n' +
      '3. Spoon coconut yoghurt into bowls, sit the griddled banana halves on top and pile over the warm granola.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '80g' },
      { rawName: 'Maple syrup', rawMeasure: '2 tbsp' },
      { rawName: 'Coconut oil', rawMeasure: '1 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
      { rawName: 'Banana', rawMeasure: '2' },
      { rawName: 'Coconut yoghurt', rawMeasure: '200g' },
    ],
  },

  // ──────────────────────── Lunch ────────────────────────

  {
    title: 'French onion soup',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Melt the butter with the olive oil in a large, heavy pan. Add the thinly sliced onions and a pinch of sugar and cook very slowly over a low heat for 40 minutes, stirring now and then, until deep golden and jammy.\n' +
      '2. Pour in the wine and let it bubble for a minute, then add the stock and thyme. Simmer for 15 minutes and season.\n' +
      '3. Ladle into ovenproof bowls, float a slice of crusty bread on top and scatter generously with grated Gruyère.\n' +
      '4. Slide under a hot grill for 3–4 minutes until the cheese is bubbling and golden.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '1kg' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'White wine', rawMeasure: '150ml' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1 litre' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Crusty bread', rawMeasure: '4 slices' },
      { rawName: 'Gruyère', rawMeasure: '120g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Roasted pepper and tomato soup',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve and deseed the peppers and halve the tomatoes, place cut-side up on a tray with the garlic cloves and trickle with olive oil. Roast for 30 minutes until softened and lightly charred.\n' +
      '2. Squeeze the garlic from its skins into a blender. Add the roasted peppers, tomatoes, stock and smoked paprika.\n' +
      '3. Blitz until smooth, then pass through a sieve if you like a silky texture. Season and warm through.\n' +
      '4. Serve with a swirl of olive oil and crusty bread.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4 red' },
      { rawName: 'Tomato', rawMeasure: '500g' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Miso soup with tofu and wakame',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Bring the water to a gentle simmer — do not boil hard as it destroys the delicate miso flavour.\n' +
      '2. Stir in the dried wakame and let it rehydrate for 2 minutes.\n' +
      '3. Ladle a little of the hot water into a bowl, whisk in the miso paste until smooth, then pour back into the pan.\n' +
      '4. Add the diced silken tofu and the sliced spring onion, warm through for a minute and serve in deep bowls.',
    rawLines: [
      { rawName: 'Miso paste', rawMeasure: '4 tbsp' },
      { rawName: 'Water', rawMeasure: '1.2 litres' },
      { rawName: 'Tofu', rawMeasure: '200g silken' },
      { rawName: 'Dried wakame', rawMeasure: '2 tsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
    ],
  },

  {
    title: 'Black bean tacos with salsa and soured cream',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Mexican',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Drain and rinse the black beans. Warm them in a pan with the cumin, smoked paprika, a splash of water and a pinch of salt until hot and slightly crushed.\n' +
      '2. Combine the finely diced tomato, red onion and coriander with a squeeze of lime and a pinch of salt to make a quick salsa.\n' +
      '3. Warm the corn tortillas in a dry pan or directly over a gas flame.\n' +
      '4. Pile the beans into the tortillas, spoon over the salsa and add a dollop of soured cream. Serve with lime wedges.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '2 x 400g tins' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Corn tortillas', rawMeasure: '8' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: '1 handful' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Soured cream', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Lentil, spinach and lemon soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the onion and garlic in the olive oil for 8 minutes. Stir in the cumin and turmeric and cook for a minute.\n' +
      '2. Add the red lentils and stock, bring to a simmer and cook for 20 minutes until the lentils are completely soft.\n' +
      '3. Stir through the spinach and let it wilt, then squeeze in the lemon juice and season.\n' +
      '4. Serve with a drizzle of olive oil and warm pitta bread.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g red' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1 litre' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Prawn and avocado rice paper rolls',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Thai',
    dietLabels: ['Pescatarian', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Soak each rice paper wrapper in warm water for 20 seconds until just pliable.\n' +
      '2. Lay on a clean damp surface and arrange sliced avocado, cooked prawns, cucumber, carrot strips and mint leaves in the centre.\n' +
      '3. Fold in the sides and roll up tightly to enclose the filling.\n' +
      '4. Whisk together the soy sauce, lime juice and a little sweet chilli sauce for a dipping sauce. Serve the rolls alongside.',
    rawLines: [
      { rawName: 'Rice paper wrappers', rawMeasure: '8' },
      { rawName: 'Prawns', rawMeasure: '200g cooked' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Mint', rawMeasure: '1 handful' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Sweet chilli sauce', rawMeasure: '2 tbsp' },
    ],
  },

  {
    title: 'Beetroot, walnut and goat\'s cheese salad',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free', 'Mediterranean'],
    instructions:
      '1. Slice or cube the cooked beetroot and arrange on a bed of salad leaves.\n' +
      '2. Scatter over the walnuts and crumble the goat\'s cheese on top.\n' +
      '3. Whisk the olive oil, balsamic vinegar and a pinch of salt together into a dressing.\n' +
      '4. Drizzle the dressing over the salad and serve with crusty bread.',
    rawLines: [
      { rawName: 'Beetroot', rawMeasure: '250g cooked' },
      { rawName: 'Salad leaves', rawMeasure: '80g' },
      { rawName: 'Walnuts', rawMeasure: '40g' },
      { rawName: 'Goat\'s cheese', rawMeasure: '100g' },
      { rawName: 'Balsamic vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Spiced lentil and roasted carrot salad',
    servingsBase: 2,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the carrot batons with olive oil, cumin and coriander, then roast for 25 minutes until tender and lightly charred.\n' +
      '2. Meanwhile cook the lentils in plenty of water for 20 minutes until just tender, then drain and season.\n' +
      '3. Toss the warm lentils with the roasted carrots, parsley and a squeeze of lemon.\n' +
      '4. Drizzle with tahini loosened with a little water and lemon juice. Serve warm.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g green' },
      { rawName: 'Carrot', rawMeasure: '400g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 tsp ground, plus 1 handful fresh' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Tahini', rawMeasure: '2 tbsp' },
      { rawName: 'Parsley', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Gazpacho',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Roughly chop the tomatoes, cucumber, pepper and red onion and place in a blender with the garlic.\n' +
      '2. Add the olive oil, red wine vinegar and a generous pinch of salt.\n' +
      '3. Blitz until very smooth, then taste and adjust seasoning. The soup should be slightly tangy and well-seasoned.\n' +
      '4. Chill in the fridge for at least an hour. Serve cold with a drizzle of olive oil and finely diced cucumber and tomato on top.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '700g ripe' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Red onion', rawMeasure: '1/4' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Red wine vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Coronation chicken and rice salad',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Cook the rice, drain and cool completely. Shred or dice the cooked chicken breast.\n' +
      '2. Mix the natural yoghurt with the curry powder, mango chutney and a pinch of salt to make a dressing (yoghurt-based, no mayonnaise).\n' +
      '3. Fold the chicken and rice into the dressing along with the sultanas and the sliced spring onion.\n' +
      '4. Arrange on a bed of lettuce leaves, scatter with coriander and serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '400g cooked' },
      { rawName: 'Rice', rawMeasure: '200g' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Curry powder', rawMeasure: '2 tsp' },
      { rawName: 'Mango chutney', rawMeasure: '2 tbsp' },
      { rawName: 'Sultanas', rawMeasure: '40g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Lettuce', rawMeasure: '1/2 head' },
      { rawName: 'Coriander', rawMeasure: '1 small handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ──────────────────────── Dinner ────────────────────────

  {
    title: 'Chicken tikka masala',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['High-protein', 'Gluten-free'],
    instructions:
      '1. Marinate the chicken pieces in yoghurt, garlic, ginger, cumin and a pinch of turmeric for at least 20 minutes.\n' +
      '2. Thread onto skewers and grill for 10–12 minutes, turning, until charred and cooked. Alternatively cook on a hot griddle.\n' +
      '3. Soften the onion in the oil for 8 minutes. Stir in the curry powder, passata and coconut milk and simmer for 10 minutes.\n' +
      '4. Add the grilled chicken to the sauce and simmer for 5 minutes. Season and scatter with coriander. Serve with rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g, cut into chunks' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Passata', rawMeasure: '400ml' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Coriander', rawMeasure: '1 handful' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Beef and black bean stir-fry with rice',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Slice the beef steak into thin strips against the grain and toss with the cornflour and soy sauce.\n' +
      '2. Heat the vegetable oil in a wok over a high heat and stir-fry the beef in two batches until browned; lift out.\n' +
      '3. Stir-fry the pepper and spring onion for 2 minutes. Add the garlic, ginger and black bean sauce and cook for a minute.\n' +
      '4. Return the beef, toss everything together and serve over steamed rice.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '500g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Black bean sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },

  {
    title: 'Ratatouille',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Heat 2 tablespoons of olive oil in a large, wide pan. Soften the onion and garlic for 8 minutes.\n' +
      '2. Add the diced courgette and aubergine and cook, stirring, for 10 minutes until beginning to colour.\n' +
      '3. Stir in the chopped peppers, the tinned tomatoes, thyme and a pinch of sugar. Season well.\n' +
      '4. Simmer uncovered for 25 minutes, stirring occasionally, until the vegetables are very soft and the sauce thick.\n' +
      '5. Stir through the basil and serve with crusty bread or alongside fish or chicken.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '1 large' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Basil', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Pad Thai with tofu',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Soak the rice noodles in boiling water for 5 minutes, then drain.\n' +
      '2. Press and cube the tofu and fry in vegetable oil until golden on all sides; lift out.\n' +
      '3. Stir-fry the bean sprouts, spring onion and garlic in the wok for 2 minutes.\n' +
      '4. Add the noodles, tofu, soy sauce, a little tamarind paste, lime juice and a pinch of sugar. Toss vigorously until everything is hot and coated.\n' +
      '5. Serve topped with crushed peanuts, coriander and lime wedges.',
    rawLines: [
      { rawName: 'Rice vermicelli', rawMeasure: '300g' },
      { rawName: 'Tofu', rawMeasure: '400g' },
      { rawName: 'Bean sprouts', rawMeasure: '150g' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Tamarind paste', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Peanuts', rawMeasure: '50g, roughly crushed' },
      { rawName: 'Coriander', rawMeasure: '1 handful' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },

  {
    title: 'Chicken and mushroom pie with suet pastry',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['High-protein'],
    instructions:
      '1. Fry the chicken thigh pieces in butter until golden; lift out. Soften the leek and mushrooms in the same pan for 6 minutes.\n' +
      '2. Stir in the flour and cook for a minute, then gradually whisk in the stock and milk until a smooth sauce forms. Return the chicken and simmer for 10 minutes; season.\n' +
      '3. Tip the filling into a deep pie dish. For the pastry, rub the suet into the flour with a pinch of salt and enough cold water to form a soft dough — no egg required.\n' +
      '4. Roll out and lay over the filling. Trim and crimp the edges. Bake at 200°C (fan 180°C) for 30–35 minutes until the pastry is golden.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g, boneless' },
      { rawName: 'Mushroom', rawMeasure: '250g' },
      { rawName: 'Leek', rawMeasure: '1 large' },
      { rawName: 'Plain flour', rawMeasure: '200g, plus 2 tbsp' },
      { rawName: 'Suet', rawMeasure: '80g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Jerk chicken with rice and peas',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Blend the spring onions, garlic, scotch bonnet, thyme, allspice, soy sauce, a splash of vegetable oil and a little sugar to a jerk marinade. Score the chicken thighs and rub the marinade in; leave for at least 30 minutes.\n' +
      '2. Grill or roast the chicken at 200°C (fan 180°C) for 30–35 minutes until cooked and charred in places.\n' +
      '3. Meanwhile cook the rice in coconut milk topped up with water, adding the kidney beans in the last 5 minutes. Season and serve alongside the chicken with lime wedges.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8 bone-in' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli', rawMeasure: '1 scotch bonnet' },
      { rawName: 'Thyme', rawMeasure: '1 tsp dried' },
      { rawName: 'Allspice', rawMeasure: '1 tsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Kidney beans', rawMeasure: '1 x 400g tin' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Baked cod with herb crust',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian', 'High-protein', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Mix the breadcrumbs with the parsley, lemon zest, olive oil and a pinch of salt into a loose crumb mixture — no egg binder needed.\n' +
      '2. Sit the cod fillets on a lined baking tray. Press the herby crumb firmly onto the top of each fillet.\n' +
      '3. Bake for 15–18 minutes until the crust is golden and the fish flakes easily.\n' +
      '4. Serve with lemon wedges and steamed new potatoes.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2 thick cod' },
      { rawName: 'Breadcrumbs', rawMeasure: '60g' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, finely chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'New potatoes', rawMeasure: '400g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Moussaka',
    servingsBase: 6,
    totalTimeMinutes: 100,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['High-protein'],
    instructions:
      '1. Slice the aubergines, toss with a little salt and leave to drain for 10 minutes. Pat dry, brush with olive oil and bake at 200°C (fan 180°C) for 20 minutes.\n' +
      '2. Brown the minced lamb with the onion and garlic. Stir in the cinnamon, oregano, chopped tomatoes and a little stock; simmer for 20 minutes until thick.\n' +
      '3. For the white sauce: melt butter in a pan, stir in the flour and cook for a minute, then gradually whisk in the milk until smooth and thick. Season and stir in half the cheese. No egg is used — the sauce sets from the starch alone.\n' +
      '4. Layer the aubergine and meat sauce in a deep dish, finishing with the white sauce. Scatter the remaining cheese on top.\n' +
      '5. Bake at 180°C (fan 160°C) for 40 minutes until bubbling and deep golden. Rest for 10 minutes before serving.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '3 large' },
      { rawName: 'Minced lamb', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 100ml' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Dal makhani',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Cook the drained black lentils and kidney beans in the butter with the garlic and ginger over a medium heat for 5 minutes.\n' +
      '2. Stir in the garam masala, cumin, chilli powder and the tomato purée and cook for 2 minutes.\n' +
      '3. Pour in the passata and a splash of water; simmer gently for 25–30 minutes until thick and rich.\n' +
      '4. Stir in the cream, warm through, season and serve with rice or naan, finished with a little extra butter and coriander.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g black, soaked overnight' },
      { rawName: 'Kidney beans', rawMeasure: '1 x 400g tin' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Passata', rawMeasure: '300ml' },
      { rawName: 'Double cream', rawMeasure: '4 tbsp' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Coriander', rawMeasure: '1 handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Teriyaki salmon with stir-fried greens',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Pescatarian', 'High-protein', 'Dairy-free'],
    instructions:
      '1. Mix the soy sauce, honey and mirin together to make a teriyaki glaze.\n' +
      '2. Heat a non-stick frying pan and cook the salmon fillets skin-side down for 4 minutes. Turn, spoon over the glaze and cook for 3 more minutes, basting frequently.\n' +
      '3. Stir-fry the pak choi and broccoli in the sesame oil with a splash of soy sauce for 3–4 minutes until just tender.\n' +
      '4. Serve the salmon over steamed rice with the greens alongside.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Mirin', rawMeasure: '2 tbsp' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Rice', rawMeasure: '200g' },
    ],
  },

  {
    title: 'Slow-cooked pulled pork with slaw',
    servingsBase: 6,
    totalTimeMinutes: 240,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Rub the pork shoulder all over with the smoked paprika, cumin, garlic powder, brown sugar and salt.\n' +
      '2. Place in a roasting tin, add the stock and a splash of cider vinegar, cover tightly with foil and cook at 160°C (fan 140°C) for 3½–4 hours until the meat falls apart.\n' +
      '3. Shred the pork with two forks, mixing in the cooking juices.\n' +
      '4. Toss the shredded cabbage, carrot and spring onion with olive oil, vinegar and a pinch of sugar for a quick slaw (no mayonnaise). Serve the pulled pork in bread rolls with the slaw.',
    rawLines: [
      { rawName: 'Pork shoulder', rawMeasure: '1.5kg, boneless' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '1 tsp ground' },
      { rawName: 'Brown sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Cider vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Cabbage', rawMeasure: '1/4 white' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Bread rolls', rawMeasure: '6' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Bouillabaisse-style fish stew',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Pescatarian', 'Gluten-free', 'High-protein', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Soften the fennel, onion and garlic in the olive oil for 10 minutes. Stir in the saffron, smoked paprika and tomato purée and cook for a minute.\n' +
      '2. Pour in the chopped tomatoes, white wine and fish stock and bring to a simmer.\n' +
      '3. Add the potatoes and cook for 15 minutes until nearly tender, then add the chunked white fish and the mussels.\n' +
      '4. Cover and cook for 6–8 minutes until the fish is cooked through and the mussels have opened. Discard any that stay shut. Season and serve with crusty bread.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '400g, chunked' },
      { rawName: 'Mussels', rawMeasure: '400g cleaned' },
      { rawName: 'Fennel', rawMeasure: '1 bulb' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'White wine', rawMeasure: '150ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml fish stock' },
      { rawName: 'New potatoes', rawMeasure: '300g' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Taco al pastor-style pork',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Blend the chipotle paste, garlic, lime juice, cumin, smoked paprika and pineapple juice to a marinade. Coat the thinly sliced pork tenderloin and leave for 20 minutes.\n' +
      '2. Cook the pork in a hot pan in a little vegetable oil, in batches, for 3–4 minutes each side until caramelised and cooked through.\n' +
      '3. Warm the corn tortillas. Fill with the pork and top with diced pineapple, coriander and thinly sliced red onion.\n' +
      '4. Serve with lime wedges and a spoonful of salsa.',
    rawLines: [
      { rawName: 'Pork tenderloin', rawMeasure: '600g' },
      { rawName: 'Chipotle paste', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Pineapple', rawMeasure: '1/4, diced' },
      { rawName: 'Corn tortillas', rawMeasure: '8' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: '1 handful' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Turkish red pepper chicken',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the onion and garlic in olive oil for 8 minutes. Stir in the red pepper paste, smoked paprika and cumin and cook for 2 minutes.\n' +
      '2. Add the diced chicken thigh and stir to coat in the spiced paste.\n' +
      '3. Pour in the chopped tomatoes and stock, season, cover and simmer for 25 minutes until the chicken is cooked and the sauce thick.\n' +
      '4. Stir through the parsley and serve with bulgur wheat or rice.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g boneless, diced' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Red pepper paste', rawMeasure: '2 tbsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Parsley', rawMeasure: '1 handful' },
      { rawName: 'Bulgur wheat', rawMeasure: '250g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Spinach and potato curry (saag aloo)',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oil in a large pan. Add the cumin seeds and let them sizzle for 30 seconds.\n' +
      '2. Stir in the onion and cook for 8 minutes, then add the garlic, ginger, turmeric, coriander and garam masala and cook for a minute.\n' +
      '3. Add the diced potato and stir to coat. Pour in a splash of water, cover and cook for 15 minutes until the potato is almost tender.\n' +
      '4. Stir in the spinach and cook until wilted. Season and serve with rice or naan.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '600g, diced' },
      { rawName: 'Spinach', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Cumin seeds', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 tsp ground' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Moqueca-style prawn stew',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['Pescatarian', 'High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the onion, garlic and pepper in the oil for 8 minutes.\n' +
      '2. Stir in the smoked paprika and the chopped tomatoes and simmer for 5 minutes.\n' +
      '3. Pour in the coconut milk and bring to a gentle simmer.\n' +
      '4. Add the prawns and cook for 4–5 minutes until pink and just cooked. Season and stir through the coriander.\n' +
      '5. Serve with rice and lime wedges.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '500g raw' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 x 400g tin' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 handful' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Spanish-style baked chicken thighs with olives',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Season the chicken thighs and brown them skin-side down in an ovenproof pan for 5 minutes until golden; flip and cook 2 minutes more.\n' +
      '2. Remove the chicken. Add the sliced onion, garlic and red pepper to the pan and soften for 5 minutes.\n' +
      '3. Stir in the smoked paprika, then add the cherry tomatoes, olives, white wine and a pinch of saffron.\n' +
      '4. Nestle the chicken back in, skin-side up, and transfer to the oven for 30–35 minutes until cooked through. Scatter with parsley and serve.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8 bone-in, skin-on' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Cherry tomato', rawMeasure: '250g' },
      { rawName: 'Olives', rawMeasure: '100g' },
      { rawName: 'White wine', rawMeasure: '150ml' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Parsley', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Vegetable bibimbap-style rice bowl',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Cook the rice and keep warm. Separately sauté the spinach, beansprouts, carrot and mushrooms in sesame oil with a splash of soy sauce until just tender.\n' +
      '2. Divide the warm rice between two deep bowls.\n' +
      '3. Arrange the vegetables in sections over the rice.\n' +
      '4. Mix the gochujang with a little sesame oil and soy sauce and drizzle over the top. Scatter with sesame seeds and serve.',
    rawLines: [
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Bean sprouts', rawMeasure: '100g' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Gochujang', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
    ],
  },

  {
    title: 'Harissa lamb shoulder with couscous',
    servingsBase: 4,
    totalTimeMinutes: 180,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['High-protein', 'Dairy-free'],
    instructions:
      '1. Rub the lamb shoulder all over with the harissa paste, cumin and olive oil. Season generously.\n' +
      '2. Place in a roasting tin with the onion halves, pour in the stock and cover tightly with foil.\n' +
      '3. Roast at 170°C (fan 150°C) for 2 hours 30 minutes until the meat is completely tender and falls off the bone.\n' +
      '4. Meanwhile prepare the couscous: pour boiling stock over the couscous, cover and leave for 5 minutes, then fork through with olive oil and the herbs.\n' +
      '5. Shred the lamb and serve over the couscous with the pan juices spooned over.',
    rawLines: [
      { rawName: 'Lamb', rawMeasure: '1.2kg shoulder, bone-in' },
      { rawName: 'Harissa paste', rawMeasure: '3 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Onion', rawMeasure: '2, halved' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Couscous', rawMeasure: '300g' },
      { rawName: 'Parsley', rawMeasure: '1 handful' },
      { rawName: 'Coriander', rawMeasure: '1 handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Mushroom bourguignon',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Fry the shallots and garlic in the olive oil until softened. Add the chunked mushrooms and cook until golden.\n' +
      '2. Stir in the tomato purée and cook for a minute, then pour in the red wine and let it bubble and reduce by half.\n' +
      '3. Add the stock, thyme and bay leaf, season and simmer for 25 minutes until the sauce is rich and glossy.\n' +
      '4. Mix the cornflour with a little cold water and stir in to thicken slightly. Serve over mashed potato or with crusty bread.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '600g, chunked' },
      { rawName: 'Shallots', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Red wine', rawMeasure: '200ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Bay leaf', rawMeasure: '1' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Singapore noodles with prawns',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Pescatarian', 'High-protein', 'Dairy-free'],
    instructions:
      '1. Soak the rice vermicelli in boiling water for 3 minutes, then drain and set aside.\n' +
      '2. Stir-fry the prawns in vegetable oil for 2–3 minutes until pink; lift out.\n' +
      '3. Stir-fry the sliced peppers, spring onion and beansprouts for 3 minutes. Add the curry powder and garlic and cook for a minute.\n' +
      '4. Return the prawns and add the noodles. Toss everything with the soy sauce over a high heat for 2 minutes until fragrant. Serve at once.',
    rawLines: [
      { rawName: 'Rice vermicelli', rawMeasure: '250g' },
      { rawName: 'Prawns', rawMeasure: '300g raw' },
      { rawName: 'Mixed peppers', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Bean sprouts', rawMeasure: '150g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Curry powder', rawMeasure: '2 tsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },

  {
    title: 'Slow-cooked lamb shank with flageolet beans',
    servingsBase: 2,
    totalTimeMinutes: 180,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['High-protein', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Season the lamb shanks and brown on all sides in olive oil in a casserole; lift out.\n' +
      '2. Soften the carrot, onion and celery for 8 minutes, then add the garlic, thyme and rosemary.\n' +
      '3. Return the lamb, pour in the red wine and stock, bring to a simmer, cover and cook at 160°C (fan 140°C) for 2 hours 30 minutes until the meat is falling from the bone.\n' +
      '4. Add the flageolet beans in the last 20 minutes to warm through. Season and serve with the braising juices and crusty bread.',
    rawLines: [
      { rawName: 'Lamb', rawMeasure: '2 shanks' },
      { rawName: 'Flageolet beans', rawMeasure: '1 x 400g tin' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Red wine', rawMeasure: '200ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Rosemary', rawMeasure: '1 sprig' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Puttanesca pasta',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Pescatarian', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Cook the spaghetti in salted boiling water until al dente.\n' +
      '2. Meanwhile, warm the olive oil with the garlic and chilli flakes. Stir in the capers, olives and anchovies and cook for 2 minutes.\n' +
      '3. Add the passata and simmer for 8 minutes until the sauce is punchy and thickened.\n' +
      '4. Drain the pasta, reserving a splash of water, and toss through the sauce with enough pasta water to make it glossy. Serve immediately.',
    rawLines: [
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Anchovies', rawMeasure: '6 fillets' },
      { rawName: 'Olives', rawMeasure: '80g, halved' },
      { rawName: 'Capers', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Passata', rawMeasure: '400ml' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ──────────────────────── Side dishes ────────────────────────

  {
    title: 'Patatas bravas',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'Spanish',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Cut the potatoes into 3cm cubes, toss with olive oil and roast for 35–40 minutes until crisp and golden, turning halfway.\n' +
      '2. Meanwhile simmer the passata with the smoked paprika, a little vinegar and a pinch of cayenne for 10 minutes to make a bravas sauce.\n' +
      '3. Pile the potatoes onto a plate, spoon over the sauce generously and serve at once.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '1kg' },
      { rawName: 'Passata', rawMeasure: '200ml' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tsp' },
      { rawName: 'Cayenne pepper', rawMeasure: '1/4 tsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Tabbouleh',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Pour boiling water over the bulgur wheat to barely cover it, then cover and leave for 15 minutes. Drain any excess and leave to cool.\n' +
      '2. Finely chop the parsley and mint; they should make up the bulk of the salad rather than the grain.\n' +
      '3. Dice the tomatoes and cucumber finely and add to the herbs.\n' +
      '4. Stir in the bulgur wheat, dress generously with olive oil and lemon juice, season and serve.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '100g' },
      { rawName: 'Parsley', rawMeasure: '2 large bunches' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Panzanella',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Tear the stale bread into rough chunks and toast in a 180°C oven for 8–10 minutes until dried but not too hard.\n' +
      '2. Chop the tomatoes roughly and squeeze them gently over a bowl so the juices fall in; add the tomatoes.\n' +
      '3. Add the bread, thinly sliced red onion, basil, capers and olives.\n' +
      '4. Dress with olive oil and red wine vinegar, toss well and leave for 10 minutes so the bread soaks up the dressing. Serve at room temperature.',
    rawLines: [
      { rawName: 'Crusty bread', rawMeasure: '200g stale' },
      { rawName: 'Tomato', rawMeasure: '600g ripe' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Basil', rawMeasure: '1 handful' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Red wine vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Roasted butternut squash with sage and brown butter',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the butternut squash into wedges, toss with olive oil and a pinch of nutmeg and roast for 30–35 minutes until tender and golden.\n' +
      '2. A minute or two before the squash is done, melt the butter in a small pan until it turns a nutty amber, then add the sage leaves and fry briefly until crisp.\n' +
      '3. Arrange the squash on a plate, spoon over the browned butter and sage and season well.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '1 medium' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Sage', rawMeasure: '10 leaves' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Braised red cabbage with apple',
    servingsBase: 6,
    totalTimeMinutes: 60,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Finely shred the cabbage and toss into a large pan with the diced apple, onion, vinegar, sugar and cinnamon.\n' +
      '2. Season, add a splash of water, then cover and cook over a very low heat for 45–50 minutes, stirring occasionally, until the cabbage is meltingly tender.\n' +
      '3. Taste and adjust the balance of sweet and sour. Serve warm alongside roast meats.',
    rawLines: [
      { rawName: 'Red cabbage', rawMeasure: '1 small, about 700g' },
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Vinegar', rawMeasure: '3 tbsp red wine' },
      { rawName: 'Brown sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Baba ganoush',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'Mediterranean'],
    instructions:
      '1. Pierce the aubergines all over and char directly over a gas flame or under a very hot grill for 20–25 minutes, turning, until completely blackened outside and collapsed inside.\n' +
      '2. Leave to cool, then halve and scoop the soft flesh into a sieve; press gently to remove excess liquid.\n' +
      '3. Tip into a bowl and beat in the tahini, garlic, lemon juice and a good pinch of salt until smooth and creamy.\n' +
      '4. Spread onto a plate, drizzle with olive oil and dust with smoked paprika. Serve with pitta or crudités.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Smoked paprika', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Glazed carrots with cumin and orange',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Peel and slice the carrots on the diagonal and place in a wide pan with the butter, orange juice, cumin and a pinch of salt.\n' +
      '2. Add a splash of water, bring to a simmer, cover and cook for 10 minutes.\n' +
      '3. Uncover and increase the heat; cook for 5 minutes more until the liquid has reduced to a glossy glaze and the carrots are tender.\n' +
      '4. Scatter with chopped parsley and serve.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '600g' },
      { rawName: 'Orange', rawMeasure: '1, juiced' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '1 small handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ──────────────────────── Desserts ────────────────────────

  {
    title: 'Sticky toffee pudding',
    servingsBase: 6,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and butter a 20cm square baking tin. This recipe replaces egg with very well-soaked and puréed Medjool dates, which bind and moisten the sponge.\n' +
      '2. Pour boiling water over the chopped dates and bicarbonate of soda; leave for 10 minutes then mash to a paste.\n' +
      '3. Beat the butter and brown sugar until pale, then stir in the date paste, soya milk and vanilla. Fold in the flour and baking powder.\n' +
      '4. Pour into the tin and bake for 25–30 minutes until risen and a skewer comes out clean.\n' +
      '5. For the toffee sauce, melt the butter, brown sugar and double cream together in a pan until smooth. Pour over the warm pudding to serve.',
    rawLines: [
      { rawName: 'Dates', rawMeasure: '200g Medjool, stoned' },
      { rawName: 'Plain flour', rawMeasure: '175g' },
      { rawName: 'Brown sugar', rawMeasure: '150g' },
      { rawName: 'Butter', rawMeasure: '100g, plus extra for sauce' },
      { rawName: 'Soya milk', rawMeasure: '100ml' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1 tsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
    ],
  },

  {
    title: 'Mango and lime panna cotta',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Soak the gelatine leaves in cold water for 5 minutes. Gently heat the double cream and milk with the sugar until just steaming — do not boil.\n' +
      '2. Squeeze the gelatine to remove excess water, then whisk it into the warm cream until dissolved. Stir in the lime zest.\n' +
      '3. Pour into four rinsed dariole moulds or glasses and chill for at least 4 hours until set.\n' +
      '4. Blend the mango with a squeeze of lime juice to make a smooth coulis. Turn the panna cottas out (or leave in glasses) and spoon over the mango coulis to serve.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '400ml' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Caster sugar', rawMeasure: '50g' },
      { rawName: 'Gelatine', rawMeasure: '3 leaves' },
      { rawName: 'Lime', rawMeasure: '1, zested and juiced' },
      { rawName: 'Mango', rawMeasure: '1' },
    ],
  },

  {
    title: 'Banana foster with vanilla ice cream',
    servingsBase: 2,
    totalTimeMinutes: 12,
    course: 'Dessert',
    cuisine: 'American',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Melt the butter and brown sugar together in a frying pan over a medium heat until bubbling and caramelised.\n' +
      '2. Halve the bananas lengthways and add to the pan, cooking for 1–2 minutes each side until golden and coated in the sauce.\n' +
      '3. Add a splash of dark rum and briefly flambé if you wish, or simply let it bubble for a minute.\n' +
      '4. Serve immediately over vanilla ice cream.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '2' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Brown sugar', rawMeasure: '3 tbsp' },
      { rawName: 'Dark rum', rawMeasure: '2 tbsp' },
      { rawName: 'Vanilla ice cream', rawMeasure: '4 scoops' },
    ],
  },

  {
    title: 'Coconut rice pudding with raspberries',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Combine the pudding rice, coconut milk and water in a pan with the sugar and a pinch of salt.\n' +
      '2. Bring to a gentle simmer, then cook over a low heat for 25–30 minutes, stirring often, until the rice is tender and the pudding thick and creamy.\n' +
      '3. Stir in the vanilla extract and taste for sweetness.\n' +
      '4. Spoon into bowls and top with fresh raspberries. Serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Pudding rice', rawMeasure: '120g' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Water', rawMeasure: '200ml' },
      { rawName: 'Caster sugar', rawMeasure: '50g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Raspberries', rawMeasure: '150g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },

  {
    title: 'Baked cinnamon apples with raisins',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Core the apples and score a thin ring around the middle to prevent them from bursting.\n' +
      '2. Mix the butter, brown sugar, cinnamon, raisins and a pinch of nutmeg together into a paste.\n' +
      '3. Stuff the mixture into the hollows of the apples, sit them in a baking dish and add a splash of water to the dish.\n' +
      '4. Bake for 30–35 minutes until the apples are completely soft. Serve with custard or cream.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '4 large Bramley or Cox' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Brown sugar', rawMeasure: '3 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Raisins', rawMeasure: '40g' },
    ],
  },

  {
    title: 'Tiramisu without eggs',
    servingsBase: 6,
    totalTimeMinutes: 25,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Whip the double cream and the mascarpone together until soft peaks form. Stir in the icing sugar and a splash of vanilla. This cream mixture takes the place of the usual egg-yolk sabayon.\n' +
      '2. Mix the strong coffee with the coffee liqueur in a shallow dish.\n' +
      '3. Quickly dip each sponge finger in the coffee mixture and arrange a layer in a dish.\n' +
      '4. Spread half the mascarpone cream over the biscuits. Repeat with a second layer of soaked biscuits and cream.\n' +
      '5. Dust generously with cocoa powder and chill for at least 3 hours before serving.',
    rawLines: [
      { rawName: 'Mascarpone', rawMeasure: '250g' },
      { rawName: 'Double cream', rawMeasure: '250ml' },
      { rawName: 'Icing sugar', rawMeasure: '50g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Sponge fingers', rawMeasure: '24' },
      { rawName: 'Instant coffee', rawMeasure: '200ml, strong, cooled' },
      { rawName: 'Coffee liqueur', rawMeasure: '3 tbsp' },
      { rawName: 'Cocoa powder', rawMeasure: '2 tbsp' },
    ],
  },

  {
    title: 'Dark chocolate and orange tart',
    servingsBase: 8,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Make a pastry case: rub the butter into the flour and icing sugar until like breadcrumbs, then stir in cold water (1–2 tbsp) to form a dough. No egg is used; the pastry relies on water and butter for cohesion.\n' +
      '2. Roll out and line a 23cm tart tin. Chill for 15 minutes, then blind-bake at 180°C (fan 160°C) for 15 minutes.\n' +
      '3. Melt the dark chocolate gently in the double cream with the orange zest, stirring until smooth. Let it cool a little.\n' +
      '4. Pour the filling into the baked case and chill for 2 hours until set.\n' +
      '5. Serve in slim slices with a little crème fraîche.',
    rawLines: [
      { rawName: 'Dark chocolate', rawMeasure: '200g' },
      { rawName: 'Double cream', rawMeasure: '200ml' },
      { rawName: 'Orange', rawMeasure: '1, zested' },
      { rawName: 'Plain flour', rawMeasure: '175g' },
      { rawName: 'Butter', rawMeasure: '90g cold, cubed' },
      { rawName: 'Icing sugar', rawMeasure: '30g' },
      { rawName: 'Crème fraîche', rawMeasure: '100g, to serve' },
    ],
  },

  {
    title: 'Rhubarb and ginger crumble',
    servingsBase: 6,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Chop the rhubarb into 3cm lengths and toss with the sugar and ground ginger in a baking dish.\n' +
      '2. Rub the butter into the flour until the mixture resembles coarse breadcrumbs; no egg is needed in a crumble topping.\n' +
      '3. Stir in the oats, brown sugar and a pinch more ginger.\n' +
      '4. Scatter the crumble evenly over the rhubarb and bake for 35–40 minutes until golden and bubbling at the edges. Serve with custard or cream.',
    rawLines: [
      { rawName: 'Rhubarb', rawMeasure: '700g' },
      { rawName: 'Caster sugar', rawMeasure: '80g for fruit' },
      { rawName: 'Plain flour', rawMeasure: '150g' },
      { rawName: 'Oats', rawMeasure: '40g' },
      { rawName: 'Brown sugar', rawMeasure: '60g' },
      { rawName: 'Butter', rawMeasure: '100g cold' },
      { rawName: 'Ginger', rawMeasure: '1 tsp ground' },
    ],
  },

  {
    title: 'Eton mess without meringue',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Lightly crush the amaretti biscuits — they provide the crunch here without using meringue.\n' +
      '2. Whip the double cream to soft peaks and fold in the icing sugar and vanilla.\n' +
      '3. Crush half the strawberries with a fork to make a rough sauce; halve the rest.\n' +
      '4. Layer the crushed biscuits, cream and strawberries into glasses or a bowl in a pleasing mess. Serve at once.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '300ml' },
      { rawName: 'Strawberries', rawMeasure: '400g' },
      { rawName: 'Amaretti biscuits', rawMeasure: '100g' },
      { rawName: 'Icing sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
    ],
  },

  {
    title: 'Spiced carrot cake',
    servingsBase: 10,
    totalTimeMinutes: 70,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a 20cm cake tin. The moisture from grated carrot and banana, plus bicarbonate of soda reacting with the milk, replace the need for egg.\n' +
      '2. Mash the banana and mix with the grated carrot, oil, milk and sugar.\n' +
      '3. Sift in the flour, baking powder, bicarbonate of soda, cinnamon and mixed spice and fold until just combined.\n' +
      '4. Bake for 45–50 minutes until a skewer comes out clean. Cool completely.\n' +
      '5. Beat the cream cheese with the icing sugar and vanilla to make a frosting and spread over the cooled cake.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '250g, grated' },
      { rawName: 'Banana', rawMeasure: '2 ripe, mashed' },
      { rawName: 'Plain flour', rawMeasure: '250g' },
      { rawName: 'Caster sugar', rawMeasure: '180g' },
      { rawName: 'Vegetable oil', rawMeasure: '120ml' },
      { rawName: 'Milk', rawMeasure: '80ml' },
      { rawName: 'Baking powder', rawMeasure: '2 tsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1/2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '2 tsp' },
      { rawName: 'Mixed spice', rawMeasure: '1 tsp' },
      { rawName: 'Cream cheese', rawMeasure: '200g' },
      { rawName: 'Icing sugar', rawMeasure: '80g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
    ],
  },

  // ──────────────────────── Snacks ────────────────────────

  {
    title: 'Tzatziki with warm pitta',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Greek',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Coarsely grate the cucumber and squeeze out as much liquid as possible in a clean cloth.\n' +
      '2. Mix the drained cucumber into the Greek yoghurt with the garlic, lemon juice, chopped dill and olive oil.\n' +
      '3. Season generously and transfer to a serving bowl.\n' +
      '4. Warm the pitta breads and serve alongside the tzatziki for dipping.',
    rawLines: [
      { rawName: 'Greek yoghurt', rawMeasure: '400g' },
      { rawName: 'Cucumber', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Dill', rawMeasure: '1 small handful' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Oat and raisin cookies',
    servingsBase: 12,
    totalTimeMinutes: 30,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line two baking sheets. The mashed banana acts as a binder here, replacing egg.\n' +
      '2. Beat the melted butter and brown sugar together, then mash in the ripe banana until well combined.\n' +
      '3. Stir in the oats, flour and raisins until a thick dough forms.\n' +
      '4. Roll into balls the size of a walnut, space well apart on the baking sheets and flatten slightly.\n' +
      '5. Bake for 12–14 minutes until golden at the edges. Cool on a wire rack — they firm up as they cool.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '150g' },
      { rawName: 'Plain flour', rawMeasure: '100g' },
      { rawName: 'Brown sugar', rawMeasure: '120g' },
      { rawName: 'Butter', rawMeasure: '100g, melted' },
      { rawName: 'Banana', rawMeasure: '1 very ripe, mashed' },
      { rawName: 'Raisins', rawMeasure: '80g' },
    ],
  },

  {
    title: 'Roasted red pepper and walnut dip (muhammara)',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Char the peppers over a gas flame or under a hot grill until blackened all over. Seal in a bag for 5 minutes, then peel, deseed and roughly chop.\n' +
      '2. Toast the walnuts in a dry pan for 2–3 minutes until fragrant.\n' +
      '3. Blend the peppers, walnuts, olive oil, lemon juice, cumin and a pinch of chilli flakes until smooth but with a little texture.\n' +
      '4. Season, taste for heat and serve with crudités or warm flatbread.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '3 large red' },
      { rawName: 'Walnuts', rawMeasure: '80g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Cheesy nachos with salsa and jalapeños',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'Mexican',
    dietLabels: ['Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Spread the tortilla chips in a single layer on a large baking tray.\n' +
      '2. Scatter over the grated Cheddar and the sliced jalapeños.\n' +
      '3. Bake for 8–10 minutes until the cheese is melted and bubbling.\n' +
      '4. Top with the tomato salsa and a dollop of soured cream and serve at once.',
    rawLines: [
      { rawName: 'Corn tortillas', rawMeasure: '200g tortilla chips' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g, grated' },
      { rawName: 'Jalapeños', rawMeasure: '2 tbsp sliced from jar' },
      { rawName: 'Chopped tomatoes', rawMeasure: '200g drained, as salsa' },
      { rawName: 'Soured cream', rawMeasure: '4 tbsp' },
    ],
  },

  {
    title: 'Edamame with sea salt and chilli',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Japanese',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Cook the edamame in boiling salted water for 4–5 minutes until just tender.\n' +
      '2. Drain and transfer to a bowl.\n' +
      '3. Toss with the sesame oil, a generous pinch of sea salt and the chilli flakes.\n' +
      '4. Squeeze a little lime juice over the top and serve warm in the pods.',
    rawLines: [
      { rawName: 'Edamame', rawMeasure: '300g frozen in pods' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Lime', rawMeasure: '1/2' },
      { rawName: 'Salt', rawMeasure: '1/2 tsp sea salt' },
    ],
  },

  {
    title: 'Olive and rosemary focaccia',
    servingsBase: 8,
    totalTimeMinutes: 90,
    course: 'Snack',
    cuisine: 'Italian',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Stir the yeast and sugar into the warm water and leave for 10 minutes until frothy.\n' +
      '2. Combine the flour and salt in a large bowl, make a well and pour in the yeast mixture and 4 tablespoons of olive oil. Mix to a soft, sticky dough and knead for 8 minutes.\n' +
      '3. Place in an oiled bowl, cover and leave to rise for 1 hour until doubled in size.\n' +
      '4. Press the dough into an oiled 30 x 20cm tin and dimple the surface all over with your fingers. Scatter with olives, rosemary and sea salt, drizzle with olive oil.\n' +
      '5. Leave to puff for 20 minutes, then bake at 220°C (fan 200°C) for 20–25 minutes until golden.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '400g' },
      { rawName: 'Yeast', rawMeasure: '7g fast-action' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Water', rawMeasure: '280ml warm' },
      { rawName: 'Olive oil', rawMeasure: '6 tbsp' },
      { rawName: 'Olives', rawMeasure: '80g' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Salt', rawMeasure: '1 tsp fine, plus sea salt to top' },
    ],
  },

  {
    title: 'Mango salsa with plantain chips',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Snack',
    cuisine: 'Caribbean',
    dietLabels: ['Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Thinly slice the green plantain and spread on a baking tray. Brush with oil, season and bake at 200°C (fan 180°C) for 20–25 minutes until golden and crisp.\n' +
      '2. Dice the mango finely and combine with the red onion, coriander, chilli, lime juice and a pinch of salt to make the salsa.\n' +
      '3. Serve the warm plantain chips alongside the mango salsa for dipping.',
    rawLines: [
      { rawName: 'Plantain', rawMeasure: '2 green' },
      { rawName: 'Mango', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1/4' },
      { rawName: 'Coriander', rawMeasure: '1 small handful' },
      { rawName: 'Chilli', rawMeasure: '1/2, finely diced' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Cheese and chive scones',
    servingsBase: 8,
    totalTimeMinutes: 35,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C) and line a baking sheet. Rub the butter into the flour with the baking powder and salt until the mixture resembles fine crumbs.\n' +
      '2. Stir in most of the grated Cheddar and the snipped chives, then pour in the milk and mix quickly to a soft, slightly sticky dough. No egg is needed — the milk and butter provide the necessary moisture and richness.\n' +
      '3. Pat out to 3cm thick on a floured surface and stamp into rounds with a cutter.\n' +
      '4. Place on the baking sheet, scatter the remaining cheese on top and bake for 12–15 minutes until well risen and golden.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '250g' },
      { rawName: 'Butter', rawMeasure: '60g cold, cubed' },
      { rawName: 'Baking powder', rawMeasure: '2 tsp' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g, grated' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, snipped' },
      { rawName: 'Milk', rawMeasure: '150ml' },
      { rawName: 'Salt', rawMeasure: '1/2 tsp' },
    ],
  },

  {
    title: 'Apple and walnut snack bars',
    servingsBase: 12,
    totalTimeMinutes: 40,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a 20cm square tin. Grated apple and its natural pectin bind these bars without egg.\n' +
      '2. Mix the oats, flour, brown sugar and a pinch of cinnamon in a bowl.\n' +
      '3. Stir in the melted coconut oil, apple sauce and grated apple until well combined.\n' +
      '4. Fold in the chopped walnuts, press firmly into the tin and bake for 20–25 minutes until golden.\n' +
      '5. Cool completely in the tin before cutting into bars.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '200g' },
      { rawName: 'Plain flour', rawMeasure: '80g' },
      { rawName: 'Brown sugar', rawMeasure: '80g' },
      { rawName: 'Apple', rawMeasure: '1, grated' },
      { rawName: 'Apple sauce', rawMeasure: '4 tbsp' },
      { rawName: 'Coconut oil', rawMeasure: '60g, melted' },
      { rawName: 'Walnuts', rawMeasure: '60g, roughly chopped' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
    ],
  },

]
