// Curated NUT-FREE recipes for Larder — expansion batch.
//
// Every recipe strictly excludes peanuts and all tree nuts (almond, cashew,
// walnut, hazelnut, pecan, pistachio, chestnut, pine nut, macadamia, brazil,
// coconut is used sparingly as UK FSA lists it separately). Method prose is
// original, written fresh in British English. No website wording is copied.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  // ── Breakfast ────────────────────────────────────────────────────────────
  {
    title: 'Avocado and poached egg on toast',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Bring a pan of water to a gentle simmer and add the white wine vinegar.\n' +
      '2. Crack each egg into a cup, swirl the water and slide the eggs in. Poach for 3 minutes until the whites are just set but the yolk is still runny, then lift out with a slotted spoon.\n' +
      '3. Meanwhile, toast the bread and halve and scoop the avocado flesh into a bowl. Mash with the lemon juice, chilli flakes and seasoning.\n' +
      '4. Spread the avocado over the toast and top each slice with a poached egg.\n' +
      '5. Finish with a pinch of chilli flakes and a grind of black pepper.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Avocado', rawMeasure: '2' },
      { rawName: 'Bread', rawMeasure: '4 slices sourdough' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'White wine vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Eggy bread with griddled tomatoes',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Beat the eggs with the milk and a pinch of salt in a shallow dish.\n' +
      '2. Halve the tomatoes and season the cut faces.\n' +
      '3. Heat a little butter in a large frying pan. Press both sides of the bread into the egg mixture, letting it soak in for 30 seconds per side.\n' +
      '4. Fry the soaked bread over a medium heat for 2–3 minutes each side until golden. At the same time, griddle or fry the tomatoes cut-side down for 3 minutes.\n' +
      '5. Serve the eggy bread with the tomatoes alongside.',
    rawLines: [
      { rawName: 'Bread', rawMeasure: '4 thick slices' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Milk', rawMeasure: '3 tbsp' },
      { rawName: 'Tomato', rawMeasure: '4 on the vine' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Overnight oats with berries',
    servingsBase: 2,
    totalTimeMinutes: 5,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Stir the oats, milk and yoghurt together in a jar or bowl with the honey.\n' +
      '2. Cover and refrigerate overnight.\n' +
      '3. In the morning, stir well and add a little more milk if too thick.\n' +
      '4. Top with the mixed berries and a drizzle of honey before serving cold.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '100g rolled' },
      { rawName: 'Milk', rawMeasure: '200ml' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Mixed berries', rawMeasure: '150g' },
    ],
  },
  {
    title: 'Smoked salmon and cream cheese bagels',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: ['Nut-free', 'Pescatarian'],
    instructions:
      '1. Split the bagels and toast until lightly golden.\n' +
      '2. Spread the cream cheese generously over both cut halves.\n' +
      '3. Lay the smoked salmon over the bottom halves and add the sliced red onion and capers.\n' +
      '4. Squeeze over a little lemon juice, season with black pepper and close the bagels.\n' +
      '5. Serve immediately with the remaining lemon on the side.',
    rawLines: [
      { rawName: 'Bagel', rawMeasure: '2' },
      { rawName: 'Smoked salmon', rawMeasure: '100g' },
      { rawName: 'Cream cheese', rawMeasure: '80g' },
      { rawName: 'Red onion', rawMeasure: '1/4, thinly sliced' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Shakshuka',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the olive oil in a wide, deep frying pan and soften the onion and peppers for 8 minutes.\n' +
      '2. Stir in the garlic, cumin, smoked paprika and chilli flakes and cook for a minute until fragrant.\n' +
      '3. Pour in the chopped tomatoes and season well. Simmer for 10 minutes until the sauce thickens.\n' +
      '4. Make four wells in the sauce and crack an egg into each. Cover and cook over a low heat for 6–8 minutes until the whites are set but yolks still runny.\n' +
      '5. Scatter with coriander and serve with warm flatbreads.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (800g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2 red' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Flatbread', rawMeasure: 'to serve' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'French toast with maple syrup',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'French',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Whisk together the eggs, milk, vanilla extract and a pinch of cinnamon in a wide shallow dish.\n' +
      '2. Dip the bread slices in the egg mixture, turning once, and allow to soak for 30 seconds per side.\n' +
      '3. Melt the butter in a non-stick frying pan over a medium heat until foaming.\n' +
      '4. Fry the soaked bread for 2–3 minutes each side until deep golden and set through.\n' +
      '5. Serve immediately with maple syrup and fresh berries.',
    rawLines: [
      { rawName: 'Bread', rawMeasure: '4 thick slices brioche' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Milk', rawMeasure: '80ml' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Maple syrup', rawMeasure: '4 tbsp' },
      { rawName: 'Mixed berries', rawMeasure: '100g' },
    ],
  },

  // ── Lunch ─────────────────────────────────────────────────────────────────
  {
    title: 'Prawn and avocado salad',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Arrange the salad leaves on two plates.\n' +
      '2. Halve, stone and slice the avocado and divide between the plates.\n' +
      '3. Scatter over the cooked prawns and halved cherry tomatoes.\n' +
      '4. Whisk the olive oil with the lemon juice, a little Dijon mustard and seasoning.\n' +
      '5. Drizzle over the salad and serve with crusty bread.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '200g cooked' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Salad leaves', rawMeasure: '80g' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Mustard', rawMeasure: '1 tsp Dijon' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spicy black bean soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Mexican',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oil and soften the onion and pepper for 8 minutes.\n' +
      '2. Stir in the garlic, cumin and chilli powder and cook for a minute.\n' +
      '3. Add the drained black beans, chopped tomatoes and stock. Simmer for 20 minutes.\n' +
      '4. Use a stick blender to partially blitz the soup — leave plenty of whole beans for texture.\n' +
      '5. Squeeze in the lime, season and serve topped with coriander and sliced red chilli.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '2 tins (800g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Red chilli', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted red pepper and tomato soup',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Place the peppers, tomatoes and garlic on a baking tray, drizzle with olive oil and roast for 30 minutes until soft and charred.\n' +
      '2. Once cool enough to handle, peel the peppers and squeeze the garlic from its skins.\n' +
      '3. Tip everything into a pan with the stock and smoked paprika.\n' +
      '4. Blend until smooth, then season and gently reheat.\n' +
      '5. Serve drizzled with a little extra olive oil.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4 red' },
      { rawName: 'Tomato', rawMeasure: '6 large' },
      { rawName: 'Garlic', rawMeasure: '1 bulb' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'BLT sandwich',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'American',
    dietLabels: ['Nut-free', 'Dairy-free'],
    instructions:
      '1. Grill or dry-fry the bacon rashers until crisp and golden, then drain on kitchen paper.\n' +
      '2. Toast the bread slices.\n' +
      '3. Spread one side of each toasted slice with mayonnaise.\n' +
      '4. Layer the bacon, sliced tomato and lettuce leaves on two of the slices. Season the tomato.\n' +
      '5. Close the sandwiches, press firmly, cut in half and serve.',
    rawLines: [
      { rawName: 'Bacon', rawMeasure: '6 rashers' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Mayonnaise', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Warm lentil and roasted vegetable salad',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, pepper and red onion wedges with olive oil and seasoning, then roast for 30 minutes until tender and golden.\n' +
      '2. Meanwhile, simmer the lentils in salted water for 20 minutes until just tender, then drain.\n' +
      '3. Whisk the olive oil with the red wine vinegar, Dijon mustard and a pinch of sugar to make a dressing.\n' +
      '4. Toss the warm lentils with the roasted vegetables and the dressing.\n' +
      '5. Scatter with parsley and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '250g Puy or green' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '2' },
      { rawName: 'Red wine vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Mustard', rawMeasure: '1 tsp Dijon' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Coronation chicken wrap',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Nut-free'],
    instructions:
      '1. Mix the mayonnaise with the curry powder, mango chutney and a little lemon juice.\n' +
      '2. Fold the shredded cooked chicken through the coronation sauce and season.\n' +
      '3. Warm the tortilla wraps briefly.\n' +
      '4. Lay the salad leaves down the centre of each wrap, pile the chicken mixture on top and scatter with raisins.\n' +
      '5. Roll up tightly, cut in half and serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '300g cooked, shredded' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp' },
      { rawName: 'Curry powder', rawMeasure: '1 tsp' },
      { rawName: 'Mango chutney', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Tortilla wrap', rawMeasure: '2 large' },
      { rawName: 'Salad leaves', rawMeasure: '40g' },
      { rawName: 'Raisins', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Gazpacho',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Roughly chop the tomatoes, cucumber, red pepper, garlic and red onion and tip into a blender.\n' +
      '2. Add the olive oil, sherry vinegar, a slice of stale bread torn up, and plenty of seasoning.\n' +
      '3. Blend thoroughly until very smooth, then taste and adjust the seasoning and vinegar.\n' +
      '4. Chill for at least 1 hour until very cold.\n' +
      '5. Pour into bowls and serve with a drizzle of olive oil and finely diced cucumber and tomato on top.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '800g ripe' },
      { rawName: 'Cucumber', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Red onion', rawMeasure: '1/4' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Bread', rawMeasure: '1 slice, stale' },
      { rawName: 'Sherry vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tabbouleh',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Pour boiling water over the bulgur wheat and leave to soak for 15 minutes, then drain and squeeze out any excess water.\n' +
      '2. Finely chop the parsley and mint — there should be more herbs than grain.\n' +
      '3. Dice the tomatoes and cucumber small and slice the spring onions thinly.\n' +
      '4. Combine everything with the olive oil and lemon juice, and season well.\n' +
      '5. Leave for 10 minutes for the flavours to meld, then serve.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '100g' },
      { rawName: 'Parsley', rawMeasure: '1 large bunch' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Miso soup with tofu',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Bring the water to a gentle simmer — do not boil.\n' +
      '2. Whisk in the miso paste until fully dissolved.\n' +
      '3. Add the tofu cubes and sliced spring onion and warm through for 2 minutes.\n' +
      '4. Add the dried wakame seaweed and allow it to rehydrate for 1 minute.\n' +
      '5. Ladle into bowls and serve immediately.',
    rawLines: [
      { rawName: 'Miso paste', rawMeasure: '3 tbsp' },
      { rawName: 'Firm tofu', rawMeasure: '150g' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Dried wakame', rawMeasure: '1 tsp' },
      { rawName: 'Water', rawMeasure: '700ml' },
    ],
  },
  {
    title: 'Halloumi and roasted vegetable flatbread',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette and pepper slices with olive oil, seasoning and dried oregano, then roast for 20 minutes until soft.\n' +
      '2. Slice the halloumi thickly and fry in a dry non-stick pan for 2 minutes each side until golden.\n' +
      '3. Warm the flatbreads in a low oven for 3 minutes.\n' +
      '4. Spread each flatbread with the hummus, then layer on the roasted vegetables and halloumi.\n' +
      '5. Drizzle with chilli sauce, scatter with fresh parsley and serve.',
    rawLines: [
      { rawName: 'Halloumi', rawMeasure: '225g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Flatbread', rawMeasure: '2' },
      { rawName: 'Hummus', rawMeasure: '4 tbsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Chilli sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Dinner ─────────────────────────────────────────────────────────────────
  {
    title: 'Beef tacos',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Nut-free', 'Dairy-free'],
    instructions:
      '1. Heat the oil in a large frying pan and brown the minced beef over a high heat, breaking it up as it cooks.\n' +
      '2. Drain off excess fat, then stir in the garlic, cumin, smoked paprika, chilli powder and tomato purée.\n' +
      '3. Add a splash of water and simmer for 5 minutes until the beef is rich and saucy. Season well.\n' +
      '4. Warm the taco shells as directed on the pack.\n' +
      '5. Fill with the beef, shredded lettuce, diced tomato and a squeeze of lime. Serve with salsa.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Taco shells', rawMeasure: '8' },
      { rawName: 'Lettuce', rawMeasure: '1/4, shredded' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Salsa', rawMeasure: 'to serve' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken katsu curry',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Nut-free', 'Dairy-free'],
    instructions:
      '1. Coat the chicken breasts in seasoned flour, then dip in the beaten egg and press into the breadcrumbs to coat all over.\n' +
      '2. Shallow-fry in vegetable oil for 4–5 minutes each side until golden and cooked through. Drain on kitchen paper and keep warm.\n' +
      '3. For the sauce, soften the onion and carrot in a little oil for 8 minutes, stir in the garlic, curry powder and turmeric, then add the stock and coconut milk.\n' +
      '4. Simmer for 15 minutes, blend until smooth, then season and stir in the soy sauce.\n' +
      '5. Slice the chicken, serve on rice with the curry sauce poured over.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Egg', rawMeasure: '2, beaten' },
      { rawName: 'Breadcrumbs', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai green prawn curry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Nut-free', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oil in a wide pan over a medium heat and fry the green curry paste for 1–2 minutes until fragrant.\n' +
      '2. Pour in the coconut milk and bring to a gentle simmer.\n' +
      '3. Add the mangetout, baby corn and kaffir lime leaves, and simmer for 4 minutes.\n' +
      '4. Add the prawns and cook for 3 minutes until pink and cooked through.\n' +
      '5. Stir in the fish sauce and lime juice, scatter with Thai basil and serve with jasmine rice.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '400g raw' },
      { rawName: 'Green curry paste', rawMeasure: '2 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Mangetout', rawMeasure: '150g' },
      { rawName: 'Baby corn', rawMeasure: '150g' },
      { rawName: 'Kaffir lime leaves', rawMeasure: '3' },
      { rawName: 'Fish sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Thai basil', rawMeasure: 'small bunch' },
      { rawName: 'Jasmine rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Beef burgers with the lot',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['Nut-free'],
    instructions:
      '1. Mix the minced beef with the Worcestershire sauce, onion powder, salt and pepper. Divide into four and shape into patties slightly wider than the buns.\n' +
      '2. Heat a griddle pan until very hot and cook the burgers for 3–4 minutes each side for medium. Lay a slice of Cheddar on each for the last minute.\n' +
      '3. Lightly toast the buns cut-side down in the same pan.\n' +
      '4. Spread the bun bases with mayonnaise and ketchup, then layer with lettuce, tomato, the burger and gherkins.\n' +
      '5. Close the buns and serve immediately with chips.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '600g' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Onion powder', rawMeasure: '1 tsp' },
      { rawName: 'Burger bun', rawMeasure: '4' },
      { rawName: 'Cheddar cheese', rawMeasure: '4 slices' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Gherkins', rawMeasure: '8 slices' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp' },
      { rawName: 'Tomato ketchup', rawMeasure: '2 tbsp' },
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
    dietLabels: ['Nut-free', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Mix the jerk seasoning, olive oil, soy sauce, lime juice, garlic and thyme into a paste. Score the chicken thighs and rub all over with the marinade. Leave for at least 20 minutes or overnight.\n' +
      '2. Heat the oven to 200°C (fan 180°C). Roast the chicken for 35–40 minutes until charred and cooked through.\n' +
      '3. For the rice and peas, rinse the rice and cook with the kidney beans and coconut milk topped up with water, a pinch of thyme and seasoning, simmering for 15 minutes until the liquid is absorbed.\n' +
      '4. Fluff the rice with a fork.\n' +
      '5. Serve the jerk chicken on the rice with lime wedges.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in, skin-on' },
      { rawName: 'Jerk seasoning', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Rice', rawMeasure: '300g long-grain' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb kofta with flatbreads and yoghurt',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: ['Nut-free', 'Gluten-free'],
    instructions:
      '1. Mix the minced lamb with the onion, garlic, cumin, coriander, chilli flakes, fresh herbs and plenty of seasoning.\n' +
      '2. Divide into eight portions and shape each around a skewer or into an oval. Chill for 10 minutes.\n' +
      '3. Grill or griddle over a high heat for 10–12 minutes, turning, until cooked through and nicely charred.\n' +
      '4. Stir the yoghurt with the garlic and mint; season.\n' +
      '5. Serve the kofta with warm flatbreads, the yoghurt sauce and sliced cucumber and tomato.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1, grated' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Parsley', rawMeasure: 'small bunch' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g' },
      { rawName: 'Mint', rawMeasure: 'small bunch' },
      { rawName: 'Flatbread', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked cod with lemon and herbs',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Pescatarian', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the cod fillets in a single layer in a baking dish.\n' +
      '2. Drizzle with olive oil, lay lemon slices on top, scatter over the garlic slices and fresh thyme.\n' +
      '3. Season well with salt and black pepper.\n' +
      '4. Bake for 12–15 minutes until the fish flakes easily when pressed.\n' +
      '5. Serve with new potatoes and steamed green beans.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4 cod fillets' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, sliced' },
      { rawName: 'Thyme', rawMeasure: '4 sprigs' },
      { rawName: 'New potatoes', rawMeasure: '600g' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spaghetti arrabbiata',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free'],
    instructions:
      '1. Cook the spaghetti in plenty of salted boiling water until al dente, reserving a mugful of pasta water.\n' +
      '2. While the pasta cooks, heat the olive oil in a pan and gently fry the garlic and chilli flakes for 1 minute — do not let the garlic brown.\n' +
      '3. Add the chopped tomatoes and passata, season with salt and a pinch of sugar, and simmer for 15 minutes until the sauce is rich.\n' +
      '4. Drain the pasta and toss through the sauce, adding a splash of pasta water to loosen if needed.\n' +
      '5. Scatter with torn basil and serve.',
    rawLines: [
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Passata', rawMeasure: '200ml' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1 tsp' },
      { rawName: 'Basil', rawMeasure: 'small bunch' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sweet and sour pork',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Nut-free', 'Dairy-free'],
    instructions:
      '1. Toss the pork pieces in the cornflour with seasoning until evenly coated.\n' +
      '2. Fry in hot vegetable oil in a wok for 5–6 minutes until golden and cooked through, then drain and set aside.\n' +
      '3. Mix the ketchup, rice vinegar, soy sauce, caster sugar and pineapple juice in a bowl.\n' +
      '4. Stir-fry the pepper and onion in a little oil for 3 minutes, pour in the sauce and bring to a bubble.\n' +
      '5. Return the pork and pineapple chunks and toss for 2 minutes until glazed. Serve with steamed rice.',
    rawLines: [
      { rawName: 'Pork shoulder', rawMeasure: '500g, cut into chunks' },
      { rawName: 'Cornflour', rawMeasure: '3 tbsp' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pineapple', rawMeasure: '200g chunks' },
      { rawName: 'Tomato ketchup', rawMeasure: '3 tbsp' },
      { rawName: 'Rice vinegar', rawMeasure: '3 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Pineapple juice', rawMeasure: '100ml' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Moussaka',
    servingsBase: 6,
    totalTimeMinutes: 105,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Nut-free'],
    instructions:
      '1. Slice the aubergines, brush with olive oil and griddle in batches for 3 minutes each side until golden. Set aside.\n' +
      '2. Brown the minced lamb, then soften the onion and garlic with it. Add the chopped tomatoes, cinnamon, oregano and red wine. Simmer for 25 minutes.\n' +
      '3. For the topping, melt the butter and stir in the flour, then gradually whisk in the milk to a smooth béchamel. Simmer until thick, then stir in the egg yolks and half the Parmesan. Season.\n' +
      '4. Layer the aubergines and meat sauce in a baking dish, pour over the béchamel and scatter with the remaining Parmesan.\n' +
      '5. Bake at 180°C (fan 160°C) for 40 minutes until golden and set. Rest for 10 minutes before serving.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '600g' },
      { rawName: 'Aubergine', rawMeasure: '3' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Red wine', rawMeasure: '150ml' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Egg', rawMeasure: '2 yolks' },
      { rawName: 'Parmesan', rawMeasure: '60g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Dhal tadka',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Rinse the lentils and simmer in plenty of water with the turmeric for 25 minutes until completely soft and breaking down. Stir vigorously to make a smooth, thick mixture. Season.\n' +
      '2. For the tadka, heat the oil in a small pan and add the mustard seeds. When they pop, add the cumin seeds, sliced shallots and dried chilli.\n' +
      '3. Fry until the shallots are golden, then add the garlic and ginger and cook for another minute.\n' +
      '4. Pour the sizzling tadka over the lentils and stir through.\n' +
      '5. Serve with basmati rice and warm chapati.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '300g red' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Mustard seeds', rawMeasure: '1 tsp' },
      { rawName: 'Cumin seeds', rawMeasure: '1 tsp' },
      { rawName: 'Shallot', rawMeasure: '3' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Dried chilli', rawMeasure: '2' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken souvlaki',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Nut-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Cut the chicken into chunks and mix with the olive oil, lemon juice, garlic, oregano, paprika and seasoning. Leave to marinate for at least 20 minutes.\n' +
      '2. Thread onto skewers and grill or barbecue for 10–12 minutes, turning, until charred and cooked through.\n' +
      '3. Mix the cucumber with the yoghurt, garlic, dill and lemon juice. Season.\n' +
      '4. Warm the flatbreads.\n' +
      '5. Serve the chicken skewers with the tzatziki, tomatoes, red onion and warm flatbreads.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cucumber', rawMeasure: '1/2, grated' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g' },
      { rawName: 'Dill', rawMeasure: '1 tbsp' },
      { rawName: 'Flatbread', rawMeasure: '4' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spanish omelette',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the olive oil in a medium non-stick frying pan and gently fry the potato slices and sliced onion over a low heat for 20 minutes, turning occasionally, until completely tender. Drain, reserving the oil.\n' +
      '2. Beat the eggs in a large bowl with seasoning, then stir in the cooked potato and onion.\n' +
      '3. Return 2 tbsp of the oil to the pan over a medium heat and pour in the egg mixture. Cook for 5–6 minutes until the base is set.\n' +
      '4. Put a large plate over the pan, flip the tortilla onto it, then slide it back in uncooked-side down.\n' +
      '5. Cook for 3–4 minutes more until just set. Serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Potato', rawMeasure: '500g, thinly sliced' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '150ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn pad thai',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Nut-free', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soak the rice noodles in boiling water for 8 minutes until just tender, then drain.\n' +
      '2. Whisk together the fish sauce, tamarind paste, soy sauce and caster sugar.\n' +
      '3. Heat the oil in a wok over a high heat and stir-fry the prawns for 2 minutes until pink, then push to one side and scramble the eggs in the space.\n' +
      '4. Add the noodles, beansprouts, spring onions and the sauce. Toss everything vigorously for 2 minutes until heated through.\n' +
      '5. Serve with lime wedges and sliced red chilli.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '300g raw' },
      { rawName: 'Noodles', rawMeasure: '200g flat rice noodles' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Beansprouts', rawMeasure: '150g' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Fish sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Tamarind paste', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Red chilli', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Chicken shawarma',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Nut-free', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Mix the olive oil with the cumin, coriander, turmeric, smoked paprika, cinnamon, garlic and lemon juice. Toss the chicken thighs in the marinade and leave for 20 minutes.\n' +
      '2. Heat the oven to 200°C (fan 180°C). Roast the chicken on a baking tray for 30–35 minutes until cooked through and beginning to char at the edges.\n' +
      '3. Rest for 5 minutes, then slice thinly.\n' +
      '4. Serve in warm flatbreads with sliced tomato, shredded red cabbage and a drizzle of tahini-free garlic sauce or chilli sauce.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '800g boneless, skinless' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Flatbread', rawMeasure: '4' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Cabbage', rawMeasure: '1/4 red, shredded' },
      { rawName: 'Chilli sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Teriyaki salmon',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Nut-free', 'Pescatarian', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Whisk the soy sauce, mirin, sake and caster sugar together in a small pan. Bring to a simmer and cook for 3 minutes until slightly syrupy.\n' +
      '2. Heat the oil in an ovenproof frying pan and sear the salmon fillets skin-side down for 3 minutes until the skin is crisp.\n' +
      '3. Flip the salmon, pour over the teriyaki sauce and transfer the pan to the oven at 200°C (fan 180°C) for 6–8 minutes until just cooked through.\n' +
      '4. Baste with the sauce once or twice.\n' +
      '5. Serve the salmon and its glossy sauce over steamed rice with sliced spring onion and sesame seeds.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Mirin', rawMeasure: '3 tbsp' },
      { rawName: 'Sake', rawMeasure: '2 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Adobo chicken',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Nut-free', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Combine the soy sauce, white wine vinegar, garlic, bay leaves and black peppercorns in a wide pan.\n' +
      '2. Add the chicken thighs and bring to a simmer. Cook covered for 25 minutes, turning once.\n' +
      '3. Remove the lid, turn up the heat slightly and cook for a further 15 minutes until the sauce reduces and becomes slightly sticky, turning the chicken to glaze all sides.\n' +
      '4. The chicken should be very tender and deeply flavoured.\n' +
      '5. Serve over steamed rice with the reduced sauce spooned over.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8 bone-in' },
      { rawName: 'Soy sauce', rawMeasure: '100ml' },
      { rawName: 'White wine vinegar', rawMeasure: '100ml' },
      { rawName: 'Garlic', rawMeasure: '6 cloves' },
      { rawName: 'Bay leaves', rawMeasure: '4' },
      { rawName: 'Black peppercorns', rawMeasure: '1 tsp' },
      { rawName: 'Rice', rawMeasure: '300g' },
    ],
  },
  {
    title: 'Pork escalopes with lemon and capers',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Nut-free', 'Dairy-free'],
    instructions:
      '1. Lay the pork steaks between cling film and bash to 5mm thickness with a rolling pin.\n' +
      '2. Season the flour and use it to dust each escalope.\n' +
      '3. Heat the olive oil in a large frying pan over a high heat and fry the escalopes for 2–3 minutes each side until golden. Work in batches and keep warm.\n' +
      '4. Pour the white wine and stock into the pan and bubble for 2 minutes, scraping up any bits. Add the capers and lemon juice.\n' +
      '5. Pour the sauce over the escalopes and serve with sautéed courgette.',
    rawLines: [
      { rawName: 'Pork loin steak', rawMeasure: '4' },
      { rawName: 'Plain flour', rawMeasure: '3 tbsp' },
      { rawName: 'White wine', rawMeasure: '100ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 100ml' },
      { rawName: 'Capers', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkey and vegetable stew',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Gluten-free', 'Dairy-free', 'High-protein'],
    instructions:
      '1. Heat the oil in a large casserole and brown the diced turkey in batches, then set aside.\n' +
      '2. Soften the onion, leek and carrot for 8 minutes, then return the turkey.\n' +
      '3. Pour in the stock and add the bay, thyme and diced swede. Bring to a simmer.\n' +
      '4. Cook uncovered for 30 minutes until the turkey is cooked through and the vegetables are tender.\n' +
      '5. Stir in the peas, season and serve with mash or crusty bread.',
    rawLines: [
      { rawName: 'Turkey', rawMeasure: '600g diced breast' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Leek', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Swede', rawMeasure: '1/2' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Thyme', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 900ml' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Orecchiette with sausage and broccoli',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Nut-free', 'Dairy-free'],
    instructions:
      '1. Cook the pasta in plenty of salted boiling water until al dente, adding the broccoli florets for the last 3 minutes.\n' +
      '2. Squeeze the sausage meat from its casings and fry in olive oil in a wide pan, breaking it into crumbles, until golden.\n' +
      '3. Add the garlic and chilli flakes and cook for a minute.\n' +
      '4. Drain the pasta and broccoli, reserving a cupful of pasta water. Add to the sausage pan and toss vigorously, adding pasta water to bring it together.\n' +
      '5. Season, drizzle with olive oil and serve.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '400g orecchiette' },
      { rawName: 'Sausage', rawMeasure: '4 Italian-style' },
      { rawName: 'Broccoli', rawMeasure: '300g in florets' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Caribbean beef curry',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['Nut-free', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Toss the beef with the curry powder, allspice, thyme, garlic and a little salt. Leave to marinate for 20 minutes.\n' +
      '2. Brown the beef in a little oil in a heavy casserole, then lift out.\n' +
      '3. Fry the onion and spring onions for 6 minutes, then return the beef and add the potato cubes, chopped tomatoes and stock.\n' +
      '4. Simmer covered for 1 hour 15 minutes until the beef is tender and the sauce rich.\n' +
      '5. Adjust seasoning and serve with rice.',
    rawLines: [
      { rawName: 'Stewing beef', rawMeasure: '700g' },
      { rawName: 'Curry powder', rawMeasure: '2 tbsp' },
      { rawName: 'Allspice', rawMeasure: '1/2 tsp' },
      { rawName: 'Thyme', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Garlic and herb butter roast leg of lamb',
    servingsBase: 6,
    totalTimeMinutes: 105,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Beat the softened butter with the garlic, rosemary, thyme, lemon zest and seasoning.\n' +
      '2. Make deep cuts all over the lamb leg with a small knife and push a little of the herb butter into each cut.\n' +
      '3. Spread the remaining butter all over the surface.\n' +
      '4. Roast for 20 minutes to start, then reduce to 180°C (fan 160°C) and roast for a further 60 minutes for pink, or 80 minutes for well done.\n' +
      '5. Rest under foil for 20 minutes before carving.',
    rawLines: [
      { rawName: 'Lamb leg', rawMeasure: '2kg' },
      { rawName: 'Butter', rawMeasure: '100g, softened' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Lemon', rawMeasure: '1, zest only' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna pasta bake',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Pescatarian'],
    instructions:
      '1. Cook the pasta in salted water until just under al dente, then drain.\n' +
      '2. Melt the butter, stir in the flour and cook for a minute, then whisk in the milk gradually to a smooth sauce. Simmer for 5 minutes.\n' +
      '3. Stir in half the Cheddar, the drained tuna, sweetcorn and spring onions. Season.\n' +
      '4. Fold in the pasta and tip into a baking dish. Scatter with the remaining cheese.\n' +
      '5. Bake at 200°C (fan 180°C) for 20–25 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '350g penne' },
      { rawName: 'Tuna', rawMeasure: '2 tins (280g drained)' },
      { rawName: 'Sweetcorn', rawMeasure: '1 tin (200g)' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Sides ──────────────────────────────────────────────────────────────────
  {
    title: 'Buttered spring greens',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Finely shred the spring greens, discarding any tough stalks.\n' +
      '2. Bring a large pan of well-salted water to the boil.\n' +
      '3. Add the greens and cook for 2–3 minutes until just tender but still vivid green.\n' +
      '4. Drain well, then return to the pan and toss with the butter and a little crushed garlic.\n' +
      '5. Season with black pepper and serve immediately.',
    rawLines: [
      { rawName: 'Spring greens', rawMeasure: '400g' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted Mediterranean vegetables',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Side',
    cuisine: 'Mediterranean',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C).\n' +
      '2. Cut the courgette, aubergine, peppers, and red onion into similar-sized pieces.\n' +
      '3. Toss in a large roasting tin with olive oil, garlic, dried mixed herbs and seasoning.\n' +
      '4. Roast for 35 minutes, turning halfway, until tender and slightly caramelised at the edges.\n' +
      '5. Squeeze over a little lemon and scatter with fresh basil before serving.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Mixed herbs', rawMeasure: '1 tsp dried' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Basil', rawMeasure: 'small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Steamed rice with coriander and lime',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'Mexican',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Rinse the rice in cold water until the water runs clear.\n' +
      '2. Put in a pan with the measured water and a good pinch of salt. Bring to the boil, stir once, then reduce to the lowest heat and cover tightly.\n' +
      '3. Cook for 12 minutes, then remove from the heat and leave, still covered, for 5 minutes.\n' +
      '4. Fluff with a fork.\n' +
      '5. Fold through the chopped coriander and lime zest, then squeeze over the lime juice and serve.',
    rawLines: [
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Water', rawMeasure: '450ml' },
      { rawName: 'Coriander', rawMeasure: 'small bunch' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Braised red cabbage',
    servingsBase: 6,
    totalTimeMinutes: 75,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Finely shred the red cabbage, discarding the core.\n' +
      '2. Peel, core and slice the apples.\n' +
      '3. Layer the cabbage, apple and onion in a large pan with the sugar, red wine vinegar, cinnamon and cloves.\n' +
      '4. Pour in the orange juice, cover and cook over a low heat for 1 hour, stirring every 15 minutes, until very soft and glossy.\n' +
      '5. Season and serve — it keeps well in the fridge for several days.',
    rawLines: [
      { rawName: 'Red cabbage', rawMeasure: '1 small head' },
      { rawName: 'Apple', rawMeasure: '2 cooking' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Caster sugar', rawMeasure: '3 tbsp' },
      { rawName: 'Red wine vinegar', rawMeasure: '3 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Cloves', rawMeasure: '2' },
      { rawName: 'Orange juice', rawMeasure: '100ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mushy peas',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Cook the peas in boiling salted water for 3–4 minutes until very tender.\n' +
      '2. Drain and return to the pan.\n' +
      '3. Add the butter and mash roughly with a potato masher — leave some texture.\n' +
      '4. Stir in the mint sauce and season generously with salt and pepper.\n' +
      '5. Reheat briefly if needed and serve.',
    rawLines: [
      { rawName: 'Peas', rawMeasure: '500g frozen' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Mint sauce', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced roasted chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Side',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Drain and rinse the chickpeas, then dry thoroughly with kitchen paper.\n' +
      '2. Toss with the olive oil, smoked paprika, cumin, garlic powder and a generous pinch of salt.\n' +
      '3. Spread in a single layer on a baking tray.\n' +
      '4. Roast for 25–30 minutes, shaking once, until crisp and golden.\n' +
      '5. Cool briefly before serving — they crisp up further as they cool.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (800g)' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garlic powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Snacks ─────────────────────────────────────────────────────────────────
  {
    title: 'Hummus with crudités',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Drain and rinse the chickpeas and tip into a food processor with the garlic, lemon juice and cumin.\n' +
      '2. Add the olive oil and 3 tablespoons of cold water and blend until very smooth, scraping down the sides.\n' +
      '3. Season generously with salt and a little more lemon if needed.\n' +
      '4. Spoon into a bowl, make a swirl and drizzle with a little extra olive oil and a pinch of paprika.\n' +
      '5. Serve with carrot, celery and cucumber sticks for dipping.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Paprika', rawMeasure: 'to garnish' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '3 sticks' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Guacamole with tortilla chips',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Mexican',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Halve and stone the avocados, then scoop the flesh into a bowl.\n' +
      '2. Mash with a fork to a rough consistency — do not over-mash.\n' +
      '3. Finely dice the red onion and tomato and add to the avocado along with the lime juice, coriander and chilli.\n' +
      '4. Season with salt and stir to combine.\n' +
      '5. Serve immediately with tortilla chips.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '3 ripe' },
      { rawName: 'Red onion', rawMeasure: '1/4' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp chopped' },
      { rawName: 'Green chilli', rawMeasure: '1/2, finely chopped' },
      { rawName: 'Tortilla chips', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cheese and oatcakes',
    servingsBase: 2,
    totalTimeMinutes: 5,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Arrange the oatcakes on a board.\n' +
      '2. Slice or crumble the cheese and place on the oatcakes.\n' +
      '3. Add a small dollop of chutney alongside each piece of cheese.\n' +
      '4. Garnish with a couple of grapes or sliced apple if desired.\n' +
      '5. Serve immediately.',
    rawLines: [
      { rawName: 'Oatcakes', rawMeasure: '8' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g' },
      { rawName: 'Chutney', rawMeasure: '2 tbsp' },
      { rawName: 'Apple', rawMeasure: '1 (optional)' },
    ],
  },
  {
    title: 'Stuffed cherry tomatoes',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'Italian',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Slice the top off each cherry tomato and scoop out the seeds with a small teaspoon.\n' +
      '2. Mix the cream cheese with the chopped chives, garlic powder and a little salt and pepper.\n' +
      '3. Spoon or pipe the cream cheese mixture into each tomato.\n' +
      '4. Sit the lids back on at an angle.\n' +
      '5. Chill for 10 minutes before serving.',
    rawLines: [
      { rawName: 'Cherry tomato', rawMeasure: '24' },
      { rawName: 'Cream cheese', rawMeasure: '150g' },
      { rawName: 'Chives', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic powder', rawMeasure: '1/4 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Edamame with sea salt',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Japanese',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free', 'High-protein'],
    instructions:
      '1. Bring a pan of well-salted water to the boil.\n' +
      '2. Add the frozen edamame pods and cook for 4–5 minutes until bright green and tender.\n' +
      '3. Drain and rinse briefly under cold water.\n' +
      '4. Tip into a bowl and sprinkle generously with flaky sea salt.\n' +
      '5. Eat by squeezing the beans straight from the pod into your mouth.',
    rawLines: [
      { rawName: 'Edamame', rawMeasure: '300g frozen in pods' },
      { rawName: 'Salt', rawMeasure: '1 tsp flaky sea salt' },
    ],
  },
  {
    title: 'Smoked salmon blinis',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'French',
    dietLabels: ['Nut-free', 'Pescatarian'],
    instructions:
      '1. Mix the self-raising flour, a pinch of salt and the egg with enough milk to make a thick dropping batter.\n' +
      '2. Heat a little butter in a non-stick pan and drop in small spoonfuls to make blinis about 5cm across.\n' +
      '3. Cook for 1–2 minutes until bubbles appear, then flip and cook for a minute more. Leave to cool slightly.\n' +
      '4. Top each blini with a small spoonful of soured cream, a fold of smoked salmon and a pinch of dill.\n' +
      '5. Finish with a squeeze of lemon and serve.',
    rawLines: [
      { rawName: 'Self-raising flour', rawMeasure: '100g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Smoked salmon', rawMeasure: '150g' },
      { rawName: 'Soured cream', rawMeasure: '100ml' },
      { rawName: 'Dill', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Butter', rawMeasure: 'for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Dessert ────────────────────────────────────────────────────────────────
  {
    title: 'Crème brûlée',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C). Warm the cream with the vanilla pod and seeds until just steaming, then leave to infuse for 10 minutes.\n' +
      '2. Whisk the egg yolks with the caster sugar until pale. Remove the vanilla pod and pour the warm cream over the yolks, whisking constantly.\n' +
      '3. Strain through a sieve into a jug and pour into four ramekins placed in a deep roasting tin.\n' +
      '4. Pour boiling water into the tin to come halfway up the ramekins and bake for 30–35 minutes until set with a slight wobble. Chill for at least 2 hours.\n' +
      '5. Sprinkle each with caster sugar and caramelise with a blowtorch until amber and crackling.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '500ml' },
      { rawName: 'Vanilla pod', rawMeasure: '1' },
      { rawName: 'Egg', rawMeasure: '6 yolks' },
      { rawName: 'Caster sugar', rawMeasure: '80g plus extra for brûlée' },
    ],
  },
  {
    title: 'Strawberry pavlova',
    servingsBase: 8,
    totalTimeMinutes: 120,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 130°C (fan 110°C). Line a baking tray with baking paper and draw a 24cm circle.\n' +
      '2. Whisk the egg whites to stiff peaks, then gradually add the caster sugar a tablespoon at a time, whisking well after each addition, until glossy and thick.\n' +
      '3. Fold in the cornflour and white wine vinegar, then spread inside the circle, creating a slight dip in the centre.\n' +
      '4. Bake for 1 hour 15 minutes, then switch off and leave the oven door ajar until completely cool.\n' +
      '5. Whip the cream to soft peaks and spoon into the dip. Pile on the strawberries and serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '6 whites' },
      { rawName: 'Caster sugar', rawMeasure: '300g' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'White wine vinegar', rawMeasure: '1 tsp' },
      { rawName: 'Double cream', rawMeasure: '400ml' },
      { rawName: 'Strawberries', rawMeasure: '400g' },
    ],
  },
  {
    title: 'Treacle tart',
    servingsBase: 8,
    totalTimeMinutes: 75,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Rub the cold butter into the flour with a pinch of salt until like fine crumbs. Stir in just enough cold water to bring it together. Wrap and chill for 30 minutes.\n' +
      '2. Heat the oven to 190°C (fan 170°C). Roll out the pastry and line a 23cm tart tin. Chill for 15 minutes, then blind bake for 12 minutes.\n' +
      '3. Mix the golden syrup with the breadcrumbs, double cream and lemon juice and zest.\n' +
      '4. Pour into the pastry case and bake for 25–30 minutes until just set and golden.\n' +
      '5. Cool for 10 minutes and serve warm with clotted cream.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '225g' },
      { rawName: 'Butter', rawMeasure: '110g, cold' },
      { rawName: 'Golden syrup', rawMeasure: '350g' },
      { rawName: 'Breadcrumbs', rawMeasure: '100g fresh' },
      { rawName: 'Double cream', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Clotted cream', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Chocolate mousse',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Melt the plain chocolate in a heatproof bowl over barely simmering water, then leave to cool for 10 minutes.\n' +
      '2. Whisk the egg whites to soft peaks in a clean bowl.\n' +
      '3. Lightly whip the double cream to soft folds.\n' +
      '4. Stir the egg yolks and caster sugar into the cooled chocolate, then fold in the cream. Finally fold in the egg whites in three additions, keeping as much air as possible.\n' +
      '5. Divide between four glasses or pots and chill for at least 2 hours before serving.',
    rawLines: [
      { rawName: 'Plain chocolate', rawMeasure: '150g (at least 70%)' },
      { rawName: 'Egg', rawMeasure: '3, separated' },
      { rawName: 'Caster sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
    ],
  },
  {
    title: 'Rhubarb and custard fool',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Chop the rhubarb into 2cm pieces and put in a pan with the caster sugar and a splash of water.\n' +
      '2. Simmer for 8–10 minutes until completely soft, then mash to a rough purée. Leave to cool.\n' +
      '3. Whip the double cream to soft peaks.\n' +
      '4. Gently fold the custard through the cream to create a marbled effect, then loosely ripple in most of the rhubarb purée.\n' +
      '5. Spoon into glasses, top with the remaining rhubarb and serve.',
    rawLines: [
      { rawName: 'Rhubarb', rawMeasure: '400g' },
      { rawName: 'Caster sugar', rawMeasure: '80g' },
      { rawName: 'Double cream', rawMeasure: '300ml' },
      { rawName: 'Custard', rawMeasure: '200ml ready-made' },
    ],
  },
  {
    title: 'Bread and butter pudding',
    servingsBase: 6,
    totalTimeMinutes: 65,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Butter the bread generously and cut each slice into triangles. Arrange in a buttered baking dish in overlapping layers, scattering raisins between each layer.\n' +
      '2. Warm the milk and cream together until steaming. Whisk the eggs, egg yolks and caster sugar in a jug, then pour over the warm milk, whisking.\n' +
      '3. Pour the custard over the bread, pressing down gently. Leave to soak for 15 minutes.\n' +
      '4. Scatter the surface with a little extra sugar and nutmeg.\n' +
      '5. Bake for 35–40 minutes until the custard is set and the top is golden. Serve warm.',
    rawLines: [
      { rawName: 'Bread', rawMeasure: '10 slices white' },
      { rawName: 'Butter', rawMeasure: '60g, softened' },
      { rawName: 'Raisins', rawMeasure: '80g' },
      { rawName: 'Milk', rawMeasure: '350ml' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Egg', rawMeasure: '3 whole plus 2 yolks' },
      { rawName: 'Caster sugar', rawMeasure: '60g' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Vanilla panna cotta',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Put the milk in a small bowl and sprinkle the powdered gelatine over. Leave for 5 minutes to bloom.\n' +
      '2. Warm the cream, sugar and vanilla in a pan until steaming and the sugar has dissolved. Do not boil.\n' +
      '3. Stir in the bloomed gelatine until fully dissolved.\n' +
      '4. Pour into four lightly oiled ramekins or moulds and chill for at least 4 hours until set.\n' +
      '5. To serve, run a knife around the edge and invert onto plates. Top with fresh berries.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '400ml' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Caster sugar', rawMeasure: '50g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Gelatine powder', rawMeasure: '2 tsp' },
      { rawName: 'Mixed berries', rawMeasure: '200g, to serve' },
    ],
  },
  {
    title: 'Lemon posset',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Pour the cream and caster sugar into a pan and bring to the boil, stirring to dissolve the sugar.\n' +
      '2. Boil for exactly 3 minutes, stirring occasionally.\n' +
      '3. Remove from the heat and stir in the lemon juice and zest. Taste — it should be bright and tangy.\n' +
      '4. Pour into four small glasses or pots and chill for at least 2 hours until set to a soft, creamy consistency.\n' +
      '5. Serve with a few fresh raspberries on top.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '600ml' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '3' },
      { rawName: 'Raspberries', rawMeasure: '100g, to serve' },
    ],
  },
  {
    title: 'Berry compote with yoghurt',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian', 'Gluten-free'],
    instructions:
      '1. Tip the frozen berries into a pan with the sugar and a splash of water.\n' +
      '2. Heat gently for 8–10 minutes until the berries have collapsed and the juices are syrupy.\n' +
      '3. Stir in a squeeze of lemon juice and taste for sweetness.\n' +
      '4. Spoon the Greek yoghurt into bowls.\n' +
      '5. Ladle the warm or cooled compote over the yoghurt and serve.',
    rawLines: [
      { rawName: 'Mixed berries', rawMeasure: '400g frozen' },
      { rawName: 'Caster sugar', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Greek yoghurt', rawMeasure: '400g' },
    ],
  },
  {
    title: 'Spotted dick',
    servingsBase: 6,
    totalTimeMinutes: 100,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Mix the self-raising flour, suet, caster sugar and a pinch of salt in a bowl.\n' +
      '2. Stir in the lemon zest and currants, then add enough milk to bring it to a soft, slightly sticky dough.\n' +
      '3. Shape into a log, wrap loosely in buttered baking paper and foil, twisting the ends to seal.\n' +
      '4. Steam for 1 hour 20 minutes, topping up the water as needed, until firm and cooked through.\n' +
      '5. Unwrap and slice. Serve with hot custard.',
    rawLines: [
      { rawName: 'Self-raising flour', rawMeasure: '175g' },
      { rawName: 'Suet', rawMeasure: '85g' },
      { rawName: 'Caster sugar', rawMeasure: '75g' },
      { rawName: 'Currants', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '1, zest only' },
      { rawName: 'Milk', rawMeasure: '150ml' },
      { rawName: 'Custard', rawMeasure: 'to serve' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Mango sorbet',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'Caribbean',
    dietLabels: ['Nut-free', 'Vegan', 'Vegetarian', 'Dairy-free', 'Gluten-free'],
    instructions:
      '1. Put the caster sugar and water in a small pan and heat gently until the sugar dissolves. Leave to cool.\n' +
      '2. Blend the mango flesh until completely smooth, then stir in the cooled sugar syrup and lime juice.\n' +
      '3. Pour into a shallow freezer container and freeze for 2 hours until slushy around the edges.\n' +
      '4. Beat thoroughly with a fork to break up ice crystals, then refreeze for at least 3 more hours.\n' +
      '5. Scoop into glasses and serve with lime wedges.',
    rawLines: [
      { rawName: 'Mango', rawMeasure: '3 large, ripe' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
      { rawName: 'Water', rawMeasure: '100ml' },
      { rawName: 'Lime', rawMeasure: '1' },
    ],
  },
  {
    title: 'Churros with chocolate dipping sauce',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dessert',
    cuisine: 'Spanish',
    dietLabels: ['Nut-free', 'Vegetarian'],
    instructions:
      '1. Bring the water, butter and a pinch of salt to the boil in a pan. Add the flour all at once and stir vigorously over the heat for 2 minutes until the dough pulls away from the sides. Cool slightly.\n' +
      '2. Beat in the eggs one at a time until you have a smooth, pipeable dough.\n' +
      '3. Heat a deep pan of vegetable oil to 180°C. Pipe the dough through a star nozzle directly into the oil in 10cm lengths, cutting with scissors.\n' +
      '4. Fry in batches for 3–4 minutes until golden, then drain and roll in cinnamon sugar.\n' +
      '5. For the sauce, melt the plain chocolate with the cream and stir until smooth. Serve alongside.',
    rawLines: [
      { rawName: 'Water', rawMeasure: '250ml' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Plain flour', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Caster sugar', rawMeasure: '4 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Plain chocolate', rawMeasure: '100g' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Vegetable oil', rawMeasure: 'for deep frying' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
]
