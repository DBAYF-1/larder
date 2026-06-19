// Gluten-free expansion batch — additional curated recipes for Larder.
// Every recipe strictly excludes wheat, barley, rye, spelt, malt, regular flour,
// couscous, semolina, bulgur, and standard soy sauce.
// Shape: { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//          instructions, rawLines:[{rawName, rawMeasure}] }

export default [

  // ── Breakfast ──────────────────────────────────────────────────────────────
  {
    title: 'Banana and almond smoothie bowl',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Blend the frozen bananas with the almond milk until thick and creamy.\n' +
      '2. Divide between two wide bowls.\n' +
      '3. Scatter over the sliced strawberries, raspberries and pumpkin seeds.\n' +
      '4. Drizzle the almond butter over the top and finish with a light dusting of cinnamon.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '3, frozen' },
      { rawName: 'Almond milk', rawMeasure: '120ml' },
      { rawName: 'Strawberries', rawMeasure: '100g' },
      { rawName: 'Raspberries', rawMeasure: '80g' },
      { rawName: 'Pumpkin seeds', rawMeasure: '2 tbsp' },
      { rawName: 'Almond butter', rawMeasure: '2 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Coconut rice with mango and lime',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'Thai',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Rinse the jasmine rice, then simmer in the coconut milk with a pinch of salt and a little water for 15–18 minutes until tender and creamy.\n' +
      '2. Remove from the heat, cover and rest for 5 minutes.\n' +
      '3. Dice the mango and slice the lime into wedges.\n' +
      '4. Spoon the rice into bowls, top with the mango and drizzle with a little honey.\n' +
      '5. Squeeze over the lime and serve warm.',
    rawLines: [
      { rawName: 'Rice', rawMeasure: '160g jasmine' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Mango', rawMeasure: '1 large' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Avocado and poached egg on sweet potato toast',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Cut the sweet potato lengthways into 1cm slices and toast in a toaster or griddle pan until cooked through and marked — about 5 minutes per side.\n' +
      '2. Meanwhile bring a pan of water to a gentle simmer, add a splash of vinegar, and poach the eggs for 3 minutes until the whites are set.\n' +
      '3. Mash the avocado with a squeeze of lemon, a pinch of chilli flakes and salt.\n' +
      '4. Spread the avocado over the sweet potato slices and top each with a poached egg.\n' +
      '5. Finish with a grind of black pepper and a scatter of chilli flakes.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '1 large' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Lemon', rawMeasure: '1/4' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Vinegar', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Buckwheat galettes with ham and egg',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'French',
    dietLabels: [],
    instructions:
      '1. Whisk the buckwheat with the egg, milk and a good pinch of salt to a smooth thin batter. Rest for 15 minutes.\n' +
      '2. Melt a little butter in a non-stick frying pan over a medium heat. Pour in a ladleful of batter, swirl to a thin round and cook for 2 minutes until the edges lift.\n' +
      '3. Crack an egg into the centre, lay a slice of ham alongside and add a little grated cheese around the edge.\n' +
      '4. Fold the sides in to form a square parcel and cook for 2 minutes more until the egg white is set.\n' +
      '5. Serve straight from the pan with a grind of pepper.',
    rawLines: [
      { rawName: 'Buckwheat', rawMeasure: '150g buckwheat flour' },
      { rawName: 'Egg', rawMeasure: '5 (1 for batter, 4 for filling)' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Ham', rawMeasure: '4 slices' },
      { rawName: 'Cheddar cheese', rawMeasure: '60g, grated' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chia seed pudding with passion fruit',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Whisk the coconut milk with the maple syrup in a bowl or jug.\n' +
      '2. Stir in the chia seeds, making sure none clump together.\n' +
      '3. Cover and refrigerate overnight or for at least 4 hours, stirring once after 30 minutes.\n' +
      '4. Halve the passion fruits and scoop the pulp over the set pudding.\n' +
      '5. Serve chilled, topped with a few mint leaves if liked.',
    rawLines: [
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Chia seeds', rawMeasure: '60g' },
      { rawName: 'Maple syrup', rawMeasure: '2 tbsp' },
      { rawName: 'Passion fruit', rawMeasure: '3' },
      { rawName: 'Mint', rawMeasure: 'a few leaves, optional' },
    ],
  },
  {
    title: 'Shakshuka',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Warm the olive oil in a wide, deep frying pan and soften the onion and pepper for 8 minutes.\n' +
      '2. Add the garlic, cumin, smoked paprika and chilli flakes and stir for a minute until fragrant.\n' +
      '3. Pour in the chopped tomatoes, season generously and simmer for 10 minutes until the sauce thickens.\n' +
      '4. Make four wells in the sauce and crack an egg into each. Cover the pan and cook over a low heat for 6–8 minutes until the whites are set but the yolks are still a little soft.\n' +
      '5. Scatter with coriander and serve straight from the pan.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smashed avocado with feta and cherry tomatoes',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'Greek',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Halve and stone the avocados, scoop the flesh into a bowl and smash roughly with a fork.\n' +
      '2. Season with salt, pepper and a squeeze of lemon juice.\n' +
      '3. Halve the cherry tomatoes and toss with a little olive oil and a pinch of dried oregano.\n' +
      '4. Spoon the avocado onto plates, top with the tomatoes and crumble the feta over.\n' +
      '5. Finish with a drizzle of olive oil and serve with rice cakes on the side.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2' },
      { rawName: 'Feta', rawMeasure: '80g' },
      { rawName: 'Cherry tomato', rawMeasure: '12' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Dried oregano', rawMeasure: '1/4 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Lunch ──────────────────────────────────────────────────────────────────
  {
    title: 'Roasted butternut squash soup',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the butternut squash, drizzle with oil and season, then roast cut-side down for 35 minutes until tender.\n' +
      '2. Scoop out the flesh and tip into a pan with the softened onion and garlic.\n' +
      '3. Pour in the gluten-free stock and bring to a simmer for 10 minutes.\n' +
      '4. Blend until silky, then stir in the coconut milk and grated fresh ginger.\n' +
      '5. Season to taste, ladle into bowls and finish with toasted pumpkin seeds and a swirl of coconut milk.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '1 large (about 1kg)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Pumpkin seeds', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml (gluten-free)' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Nicoise salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Cook the new potatoes in salted water until just tender, then drain and halve.\n' +
      '2. Blanch the green beans for 3 minutes, then refresh under cold water.\n' +
      '3. Hard-boil the eggs for 8 minutes, then cool, peel and halve.\n' +
      '4. Arrange the lettuce on plates and top with the potatoes, beans, eggs, tomatoes, tuna, anchovies and olives.\n' +
      '5. Whisk the olive oil with the Dijon mustard, lemon juice and seasoning and drizzle over just before serving.',
    rawLines: [
      { rawName: 'New potatoes', rawMeasure: '300g' },
      { rawName: 'Green beans', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Tuna', rawMeasure: '2 tins (145g each)' },
      { rawName: 'Anchovy', rawMeasure: '6 fillets' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Cherry tomato', rawMeasure: '12' },
      { rawName: 'Lettuce', rawMeasure: '1 head Little Gem' },
      { rawName: 'Mustard', rawMeasure: '1 tsp Dijon' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mexican corn and black bean salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Mexican',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Drain and rinse the black beans and tip into a large bowl.\n' +
      '2. Add the sweetcorn, diced red pepper, finely sliced red onion and diced avocado.\n' +
      '3. Whisk together the lime juice, olive oil, cumin and a pinch of chilli flakes for the dressing.\n' +
      '4. Pour over the salad and toss well, then fold in the coriander.\n' +
      '5. Season and serve at room temperature.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Sweetcorn', rawMeasure: '1 tin (200g)' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spanish gazpacho',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Roughly chop the tomatoes, cucumber, pepper, garlic and red onion and place in a blender.\n' +
      '2. Add the olive oil, sherry vinegar and tomato purée and blend until very smooth.\n' +
      '3. Season well and thin with a little cold water if needed to reach a pourable consistency.\n' +
      '4. Pass through a fine sieve, then chill for at least 1 hour until very cold.\n' +
      '5. Serve in bowls with a drizzle of olive oil and finely diced cucumber and tomato on top.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '8 ripe' },
      { rawName: 'Cucumber', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Red onion', rawMeasure: '1/2 small' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Vinegar', rawMeasure: '2 tbsp sherry vinegar' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai beef salad',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Thai',
    dietLabels: [],
    instructions:
      '1. Season the steak and sear in a very hot pan with a little oil for 2 minutes each side for medium-rare. Rest for 5 minutes, then slice thinly against the grain.\n' +
      '2. Mix the fish sauce, lime juice, chilli and a teaspoon of sugar to make a dressing.\n' +
      '3. Combine the shredded lettuce, cucumber, cherry tomatoes, shallots and fresh herbs in a bowl.\n' +
      '4. Add the sliced beef and pour over the dressing, tossing to coat.\n' +
      '5. Serve immediately, scattered with toasted sesame seeds.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '250g sirloin or rump' },
      { rawName: 'Lettuce', rawMeasure: '1/2 head' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Cherry tomato', rawMeasure: '12' },
      { rawName: 'Shallot', rawMeasure: '2' },
      { rawName: 'Mint', rawMeasure: '20g' },
      { rawName: 'Coriander', rawMeasure: '20g' },
      { rawName: 'Fish sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Chilli', rawMeasure: '1 red, finely sliced' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Roasted red pepper and lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the peppers, drizzle with oil and roast for 25 minutes until softened and charred.\n' +
      '2. Meanwhile soften the onion in a large pan, add the garlic and smoked paprika and cook for a minute.\n' +
      '3. Add the rinsed lentils and gluten-free stock and simmer for 20 minutes until the lentils are tender.\n' +
      '4. Add the roasted peppers, then blend until smooth.\n' +
      '5. Season, thin with a little water if needed and serve with a swirl of olive oil.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4 red' },
      { rawName: 'Lentils', rawMeasure: '150g red split lentils' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml (gluten-free)' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek salad with olives and feta',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Lunch',
    cuisine: 'Greek',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Dice the cucumber into large chunks and quarter the tomatoes.\n' +
      '2. Slice the red onion into thin rings and halve the olives.\n' +
      '3. Arrange everything in a large salad bowl.\n' +
      '4. Crumble over the feta, then sprinkle with dried oregano.\n' +
      '5. Drizzle generously with olive oil, squeeze over a little lemon and serve at once.',
    rawLines: [
      { rawName: 'Cucumber', rawMeasure: '1' },
      { rawName: 'Tomato', rawMeasure: '4 large' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Olives', rawMeasure: '100g Kalamata' },
      { rawName: 'Feta', rawMeasure: '200g' },
      { rawName: 'Dried oregano', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Japanese cucumber and sesame salad',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Thinly slice the cucumbers and place in a bowl with a pinch of salt. Leave for 5 minutes, then squeeze out the excess moisture.\n' +
      '2. Whisk together the rice vinegar, sesame oil, tamari and a little sugar.\n' +
      '3. Toss the cucumber in the dressing.\n' +
      '4. Scatter over the toasted sesame seeds and sliced spring onion.\n' +
      '5. Serve chilled as a light lunch or side.',
    rawLines: [
      { rawName: 'Cucumber', rawMeasure: '2' },
      { rawName: 'Rice vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Tamari', rawMeasure: '1 tbsp (gluten-free)' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Sesame seeds', rawMeasure: '2 tbsp, toasted' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Lentil and roasted vegetable bowl',
    servingsBase: 2,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, red onion and cherry tomatoes with olive oil and season, then roast for 25 minutes.\n' +
      '2. Meanwhile cook the lentils in plenty of water for 20 minutes until tender, then drain.\n' +
      '3. Whisk the lemon juice, olive oil, cumin and a little garlic for a dressing.\n' +
      '4. Divide the lentils between bowls, top with the roasted vegetables and pour over the dressing.\n' +
      '5. Scatter with parsley and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '200g Puy lentils' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '16' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '25g' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Miso soup with tofu and wakame',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Bring the water to a gentle simmer and dissolve the white miso paste in it — do not boil.\n' +
      '2. Add the dried wakame and leave for 2 minutes until it rehydrates and expands.\n' +
      '3. Add the diced silken tofu and warm through for 2 minutes.\n' +
      '4. Ladle into bowls and scatter over the finely sliced spring onion.\n' +
      '5. Serve at once, while steaming hot.',
    rawLines: [
      { rawName: 'Miso paste', rawMeasure: '2 tbsp white (check gluten-free)' },
      { rawName: 'Tofu', rawMeasure: '150g silken' },
      { rawName: 'Wakame', rawMeasure: '5g dried' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Water', rawMeasure: '700ml' },
    ],
  },

  // ── Dinner — meat ──────────────────────────────────────────────────────────
  {
    title: 'Slow-cooked pulled pork with rice',
    servingsBase: 6,
    totalTimeMinutes: 270,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: [],
    instructions:
      '1. Rub the pork shoulder all over with the smoked paprika, cumin, garlic powder, brown sugar, salt and pepper.\n' +
      '2. Heat a splash of oil in a large casserole and brown the pork on all sides.\n' +
      '3. Add the chopped tomatoes, cider vinegar, honey and gluten-free stock, then cover and cook over a very low heat for 4 hours until the meat falls apart.\n' +
      '4. Lift the pork out, shred with two forks, then return to the sauce and stir well.\n' +
      '5. Cook the rice and serve the pulled pork piled on top with a scatter of spring onion.',
    rawLines: [
      { rawName: 'Pork shoulder', rawMeasure: '1.5kg, boneless' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garlic powder', rawMeasure: '1 tsp' },
      { rawName: 'Muscovado sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Vinegar', rawMeasure: '2 tbsp cider vinegar' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml (gluten-free)' },
      { rawName: 'Rice', rawMeasure: '400g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken cacciatore',
    servingsBase: 4,
    totalTimeMinutes: 65,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: [],
    instructions:
      '1. Season the chicken pieces and brown all over in olive oil in a deep pan, then set aside.\n' +
      '2. Soften the onion and pepper in the same pan, then add the garlic, olives and capers.\n' +
      '3. Pour in the chopped tomatoes and white wine and bring to a simmer.\n' +
      '4. Return the chicken, tuck in the rosemary and bay, cover and cook gently for 40 minutes until the chicken is cooked through and the sauce is rich.\n' +
      '5. Season, discard the herbs and serve with rice or potatoes.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Olives', rawMeasure: '80g' },
      { rawName: 'Capers', rawMeasure: '2 tbsp' },
      { rawName: 'White wine', rawMeasure: '100ml' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
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
    dietLabels: [],
    instructions:
      '1. Mix together the allspice, thyme, scotch bonnet, garlic, spring onions, brown sugar, lime juice and a little oil to a rough jerk paste.\n' +
      '2. Score the chicken thighs deeply and rub all over with the paste. Marinate for at least 30 minutes.\n' +
      '3. Cook under a hot grill or on a griddle pan for 20–25 minutes, turning, until charred and cooked through.\n' +
      '4. Meanwhile cook the rice with the kidney beans, coconut milk and a little water until tender.\n' +
      '5. Serve the jerk chicken on the rice and peas with lime wedges.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, boneless' },
      { rawName: 'Allspice', rawMeasure: '2 tsp' },
      { rawName: 'Thyme', rawMeasure: '1 tsp dried' },
      { rawName: 'Chilli', rawMeasure: '1 scotch bonnet' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Muscovado sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb rogan josh',
    servingsBase: 4,
    totalTimeMinutes: 100,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: [],
    instructions:
      '1. Heat the oil in a large pan and fry the whole spices for 30 seconds until fragrant.\n' +
      '2. Add the onion and cook for 10 minutes until deep golden brown.\n' +
      '3. Stir in the garlic, ginger, ground coriander, cumin, paprika and a pinch of chilli, then add the diced lamb and brown all over.\n' +
      '4. Pour in the chopped tomatoes and a little water, cover and simmer for 1 hour until the lamb is tender.\n' +
      '5. Stir in the natural yoghurt, season and scatter with coriander. Serve with rice.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '800g, diced' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Ginger', rawMeasure: '25g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Ground coriander', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/4 tsp' },
      { rawName: 'Cardamom pods', rawMeasure: '4' },
      { rawName: 'Cloves', rawMeasure: '3' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkish-style stuffed aubergines',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: [],
    instructions:
      '1. Halve the aubergines lengthways and score the flesh in a crosshatch. Brush with oil, season and roast at 200°C (fan 180°C) for 25 minutes until golden and tender.\n' +
      '2. Scoop out most of the flesh, leaving a shell, and chop the flesh roughly.\n' +
      '3. Brown the minced lamb in a pan, then add the onion, garlic, chopped aubergine, tomato purée, cumin and cinnamon. Cook for 10 minutes.\n' +
      '4. Stir in the chopped tomatoes and simmer for 10 minutes until thick. Season well.\n' +
      '5. Fill the aubergine shells, return to the oven for 20 minutes and serve with natural yoghurt and fresh mint.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '4 medium' },
      { rawName: 'Minced lamb', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Mint', rawMeasure: '25g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork and pineapple stir-fry with rice',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: [],
    instructions:
      '1. Cook the rice according to packet instructions.\n' +
      '2. Slice the pork into thin strips and stir-fry in a hot wok with the oil for 3–4 minutes until cooked through. Lift out.\n' +
      '3. Stir-fry the pepper and spring onion for 2 minutes, then add the pineapple chunks.\n' +
      '4. Whisk together the tamari, rice vinegar, a little honey and the potato starch slaked in water. Pour into the wok and toss until the sauce coats everything.\n' +
      '5. Return the pork, toss over a high heat and serve over the rice.',
    rawLines: [
      { rawName: 'Pork loin', rawMeasure: '300g' },
      { rawName: 'Pineapple', rawMeasure: '200g chunks' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Tamari', rawMeasure: '3 tbsp (gluten-free)' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Potato starch', rawMeasure: '1 tsp' },
      { rawName: 'Rice', rawMeasure: '150g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Spanish-style chicken with chorizo and tomatoes',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: [],
    instructions:
      '1. Brown the chicken thighs all over in olive oil in a deep pan, then set aside.\n' +
      '2. Fry the chorizo until the oil runs, then add the onion, garlic and pepper and soften for 8 minutes.\n' +
      '3. Stir in the smoked paprika, pour in the chopped tomatoes and gluten-free stock and bring to a simmer.\n' +
      '4. Return the chicken, tuck in the bay leaves and cook uncovered for 30 minutes until the sauce is rich and the chicken is cooked through.\n' +
      '5. Season, scatter with parsley and serve with rice or potatoes.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Chorizo', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml (gluten-free)' },
      { rawName: 'Parsley', rawMeasure: '25g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Dinner — fish ──────────────────────────────────────────────────────────
  {
    title: 'Miso-glazed salmon',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Mix the white miso paste with the mirin, tamari, honey and a splash of rice vinegar to a smooth glaze.\n' +
      '2. Line a tray with foil and lay the salmon fillets on it. Spoon the glaze over the flesh side.\n' +
      '3. Leave to marinate for at least 10 minutes.\n' +
      '4. Cook under a hot grill for 8–10 minutes until the glaze is deeply caramelised and the salmon flakes easily.\n' +
      '5. Serve over steamed rice with a scatter of sesame seeds and thinly sliced spring onion.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Miso paste', rawMeasure: '2 tbsp white (check gluten-free)' },
      { rawName: 'Mirin', rawMeasure: '1 tbsp' },
      { rawName: 'Tamari', rawMeasure: '1 tbsp (gluten-free)' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tsp' },
      { rawName: 'Rice', rawMeasure: '150g' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tsp' },
      { rawName: 'Spring onion', rawMeasure: '1' },
    ],
  },
  {
    title: 'Garlic and herb baked cod',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Mix the softened butter with the crushed garlic, chopped parsley, lemon zest and seasoning.\n' +
      '2. Place the cod fillets in a buttered baking dish and dot the herb butter generously over each piece.\n' +
      '3. Scatter the cherry tomatoes around the fish.\n' +
      '4. Bake for 15–18 minutes until the cod is opaque and flakes easily.\n' +
      '5. Serve with the buttery pan juices spooned over and the tomatoes alongside.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2 thick cod fillets' },
      { rawName: 'Butter', rawMeasure: '40g, softened' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Parsley', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '16' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Salmon and sweet potato fishcakes',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Bake or steam the sweet potato until tender, then mash.\n' +
      '2. Flake the cooked or tinned salmon and mix with the sweet potato mash, spring onion, a little lemon zest and plenty of seasoning.\n' +
      '3. Shape into 8 patties and coat lightly in fine cornmeal.\n' +
      '4. Shallow-fry in a little oil over a medium heat for 3–4 minutes each side until golden and heated through.\n' +
      '5. Serve with a wedge of lemon and a simple green salad.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '300g, cooked and flaked' },
      { rawName: 'Sweet potato', rawMeasure: '400g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cornmeal', rawMeasure: '50g' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn pad thai with rice noodles',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Soak the rice noodles in warm water for 15 minutes, then drain.\n' +
      '2. Stir-fry the prawns in hot oil until just pink, then push to one side and scramble the egg in the pan.\n' +
      '3. Add the drained noodles and toss everything together.\n' +
      '4. Mix the fish sauce, rice vinegar, tamari and a little sugar, pour in and toss over a high heat until glossy.\n' +
      '5. Serve topped with bean sprouts, crushed peanuts, spring onion and lime wedges.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '200g' },
      { rawName: 'Brown rice noodles', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Bean sprouts', rawMeasure: '80g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Peanuts', rawMeasure: '40g, roasted' },
      { rawName: 'Fish sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Tamari', rawMeasure: '1 tbsp (gluten-free)' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Grilled mackerel with salsa verde',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Finely chop the parsley, mint, capers and gherkins together, then mix with the olive oil, lemon juice and a little Dijon-style mustard. Season and set aside.\n' +
      '2. Score the mackerel fillets twice through the skin and season.\n' +
      '3. Grill under a high heat for 5–6 minutes, skin-side up, until the skin is crisp and the flesh is cooked through.\n' +
      '4. Spoon the salsa verde over the fish.\n' +
      '5. Serve with new potatoes or a simple green salad.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '4 fillets' },
      { rawName: 'Parsley', rawMeasure: '30g' },
      { rawName: 'Mint', rawMeasure: '15g' },
      { rawName: 'Capers', rawMeasure: '2 tbsp' },
      { rawName: 'Gherkin', rawMeasure: '3' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Dinner — vegetarian & vegan ───────────────────────────────────────────
  {
    title: 'Dhal tadka',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Rinse the lentils and simmer in plenty of water with the turmeric for 25 minutes until completely soft and falling apart.\n' +
      '2. For the tadka, heat the oil in a small pan and add the cumin seeds, mustard seeds and dried chilli. When they pop, add the garlic and ginger and fry for 1 minute.\n' +
      '3. Pour the sizzling tadka into the lentils and stir well.\n' +
      '4. Add the chopped tomatoes and simmer for 10 minutes until the dhal is thick and glossy.\n' +
      '5. Season, finish with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Lentils', rawMeasure: '300g red split lentils' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp seeds' },
      { rawName: 'Mustard seeds', rawMeasure: '1 tsp' },
      { rawName: 'Chilli', rawMeasure: '1 dried red' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '20g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted cauliflower steaks with tahini',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Cut the cauliflower into 2cm thick steaks through the core.\n' +
      '2. Drizzle with olive oil, dust with cumin, smoked paprika and salt, then roast for 25 minutes until deeply golden.\n' +
      '3. Whisk the tahini with lemon juice, garlic and enough water to make a pourable sauce. Season.\n' +
      '4. Spread the tahini sauce over two plates, lay the cauliflower steaks on top.\n' +
      '5. Scatter with pomegranate seeds, toasted pine nuts and parsley.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large' },
      { rawName: 'Tahini', rawMeasure: '4 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Pomegranate seeds', rawMeasure: '3 tbsp' },
      { rawName: 'Pine nuts', rawMeasure: '2 tbsp, toasted' },
      { rawName: 'Parsley', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Courgette and feta fritters',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Grate the courgettes coarsely, toss with salt and leave for 10 minutes, then squeeze out as much liquid as possible in a clean tea towel.\n' +
      '2. Mix the drained courgette with the crumbled feta, beaten eggs, spring onion, mint and enough buckwheat to bind to a thick dropping consistency.\n' +
      '3. Shallow-fry tablespoonfuls in hot olive oil for 3 minutes each side until golden and cooked through.\n' +
      '4. Drain on kitchen paper.\n' +
      '5. Serve with a dollop of Greek yoghurt and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '3' },
      { rawName: 'Feta', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Mint', rawMeasure: '20g' },
      { rawName: 'Buckwheat', rawMeasure: '60g buckwheat flour' },
      { rawName: 'Greek yoghurt', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Red bean and coconut Caribbean stew',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Soften the onion, garlic and scotch bonnet in a little oil for 5 minutes.\n' +
      '2. Add the allspice, thyme and smoked paprika and cook for a minute.\n' +
      '3. Pour in the coconut milk and gluten-free stock, then add the drained kidney beans, sweet potato and diced tomatoes.\n' +
      '4. Simmer for 25 minutes until the sweet potato is tender and the sauce has thickened.\n' +
      '5. Season, stir in the spring onion and serve over rice.',
    rawLines: [
      { rawName: 'Kidney beans', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Sweet potato', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli', rawMeasure: '1/2 scotch bonnet' },
      { rawName: 'Allspice', rawMeasure: '1 tsp' },
      { rawName: 'Thyme', rawMeasure: '1 tsp dried' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml (gluten-free)' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tomato and basil risotto',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Soften the onion and garlic in butter and olive oil for 5 minutes.\n' +
      '2. Add the risotto rice and stir for 2 minutes until the grains are glossy.\n' +
      '3. Add a ladleful of hot gluten-free stock at a time, stirring constantly, letting each be absorbed before adding the next — about 18–20 minutes in total.\n' +
      '4. Stir in the chopped tomatoes for the last 5 minutes of cooking.\n' +
      '5. Remove from the heat, beat in the Parmesan and a knob of butter, tear in the basil, season and serve at once.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '300g risotto rice' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Basil', rawMeasure: '30g' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1L (gluten-free)' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mexican-style baked eggs with black beans',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Soften the onion, pepper and garlic in oil, then stir in the cumin and smoked paprika.\n' +
      '2. Add the chopped tomatoes and drained black beans and simmer for 10 minutes until slightly thickened.\n' +
      '3. Season generously, then make four wells in the sauce.\n' +
      '4. Crack an egg into each well, cover and cook on a gentle heat for 8–10 minutes until the whites are just set.\n' +
      '5. Scatter with crumbled feta, coriander and chilli flakes to serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Black beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Feta', rawMeasure: '80g' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Moussaka with lentils',
    servingsBase: 6,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Slice the aubergines, brush with oil and bake at 200°C (fan 180°C) for 20 minutes until golden. Set aside.\n' +
      '2. Soften the onion and garlic, then stir in the cinnamon, allspice and chopped tomatoes. Add the cooked lentils and simmer for 15 minutes until thick.\n' +
      '3. For the bechamel, melt the butter, stir in the potato starch to a paste, then whisk in the milk over a medium heat until thick. Season and add a pinch of nutmeg.\n' +
      '4. Layer the aubergine and lentil sauce in a baking dish, pour the bechamel over and top with the Parmesan.\n' +
      '5. Bake for 30 minutes until golden and bubbling. Rest before serving.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '3 large' },
      { rawName: 'Lentils', rawMeasure: '250g green lentils, cooked' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Allspice', rawMeasure: '1/2 tsp' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Potato starch', rawMeasure: '3 tbsp' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sweet potato and chickpea tagine',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Soften the onion in olive oil, then add the garlic, ginger, ras el hanout and cinnamon and cook for 2 minutes.\n' +
      '2. Add the diced sweet potato and stir to coat in the spices.\n' +
      '3. Pour in the chopped tomatoes and gluten-free stock and simmer for 20 minutes.\n' +
      '4. Add the drained chickpeas and dried apricots and cook for 10 minutes more until the sweet potato is tender.\n' +
      '5. Season, scatter with coriander and toasted flaked almonds, and serve with rice.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '600g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '15g' },
      { rawName: 'Ras el hanout', rawMeasure: '2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Dried apricots', rawMeasure: '80g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml (gluten-free)' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Almonds', rawMeasure: '30g flaked, toasted' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Sides ──────────────────────────────────────────────────────────────────
  {
    title: 'Roasted garlic mashed potatoes',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Wrap the garlic bulb in foil and roast for 35 minutes until the cloves are soft and golden.\n' +
      '2. Meanwhile boil the potatoes in salted water until very tender, then drain well.\n' +
      '3. Squeeze the roasted garlic cloves out of their skins into the potatoes.\n' +
      '4. Mash with the butter and warm milk until completely smooth and fluffy.\n' +
      '5. Season generously and serve.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '1kg floury' },
      { rawName: 'Garlic', rawMeasure: '1 bulb' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Milk', rawMeasure: '100ml, warmed' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cumin-spiced roasted carrots',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Peel the carrots and halve lengthways.\n' +
      '2. Toss in a roasting tin with the olive oil, cumin seeds, coriander and a pinch of chilli flakes.\n' +
      '3. Season and roast for 30 minutes until tender and caramelised at the edges.\n' +
      '4. Transfer to a serving dish and scatter with fresh coriander and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '600g' },
      { rawName: 'Cumin', rawMeasure: '1 tsp seeds' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Coriander', rawMeasure: '20g fresh' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sauteed spinach with garlic and chilli',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Heat the olive oil in a wide pan over a medium-high heat.\n' +
      '2. Add the sliced garlic and a pinch of chilli flakes and cook for 30 seconds without colouring.\n' +
      '3. Add the spinach in large handfuls, tossing in the oil until wilted — this will take about 2 minutes.\n' +
      '4. Season with salt and a squeeze of lemon juice.\n' +
      '5. Serve at once as a side, draining off any excess liquid.',
    rawLines: [
      { rawName: 'Spinach', rawMeasure: '300g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/4' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Patatas bravas',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Side',
    cuisine: 'Spanish',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Peel and cut the potatoes into rough 3cm chunks.\n' +
      '2. Parboil in salted water for 5 minutes, drain and shake to roughen the edges.\n' +
      '3. Toss with oil and roast for 35 minutes, turning once, until crisp and deep golden.\n' +
      '4. Meanwhile soften the onion and garlic in a little oil, add the smoked paprika and chopped tomatoes and simmer for 15 minutes to a thick, deep-red sauce. Season.\n' +
      '5. Pile the potatoes onto a plate and spoon over the bravas sauce.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Onion', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Steamed broccoli with oyster mushroom sauce',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'Chinese',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Trim the broccoli into florets and steam for 5 minutes until bright green and just tender.\n' +
      '2. Slice the oyster mushrooms and stir-fry in the sesame oil with the garlic for 3 minutes.\n' +
      '3. Add the tamari, a splash of water and the potato starch slaked in cold water. Stir until the sauce thickens.\n' +
      '4. Arrange the broccoli on a dish and spoon the sauce over.\n' +
      '5. Finish with toasted sesame seeds.',
    rawLines: [
      { rawName: 'Broccoli', rawMeasure: '1 large head' },
      { rawName: 'Mushroom', rawMeasure: '150g oyster mushrooms' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tamari', rawMeasure: '2 tbsp (gluten-free)' },
      { rawName: 'Potato starch', rawMeasure: '1 tsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Roasted beetroot with goats cheese',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Wrap the beetroots individually in foil and roast for 45 minutes until tender when pierced.\n' +
      '2. Allow to cool slightly, then peel off the skins and cut into wedges.\n' +
      '3. Arrange on a plate, crumble over the goats cheese and scatter with the toasted walnuts.\n' +
      '4. Drizzle with balsamic vinegar and olive oil.\n' +
      '5. Finish with fresh thyme leaves.',
    rawLines: [
      { rawName: 'Beetroot', rawMeasure: '6 medium' },
      { rawName: 'Goats cheese', rawMeasure: '100g' },
      { rawName: 'Walnuts', rawMeasure: '40g, toasted' },
      { rawName: 'Vinegar', rawMeasure: '2 tbsp balsamic' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Creamed corn',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'American',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Cut the kernels from the corn cobs using a sharp knife and collect any milky juices.\n' +
      '2. Melt the butter in a pan over a medium heat and add the corn and its juices.\n' +
      '3. Cook for 5 minutes, stirring, until the corn begins to soften.\n' +
      '4. Pour in the double cream and season with salt, pepper and a pinch of nutmeg.\n' +
      '5. Simmer for 5 minutes until thick and creamy, then finish with snipped chives.',
    rawLines: [
      { rawName: 'Sweetcorn', rawMeasure: '4 cobs (or 400g frozen)' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Chives', rawMeasure: '15g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced red cabbage',
    servingsBase: 6,
    totalTimeMinutes: 50,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Finely shred the red cabbage and peel and slice the apple.\n' +
      '2. Melt the oil in a large pan and add the onion, cooking for 5 minutes until soft.\n' +
      '3. Add the cabbage, apple, cinnamon, allspice, vinegar, sugar and a splash of water.\n' +
      '4. Cover and cook over a low heat for 40 minutes, stirring occasionally, until tender and the liquid is syrupy.\n' +
      '5. Season and serve as an accompaniment to roast meats or sausages.',
    rawLines: [
      { rawName: 'Red cabbage', rawMeasure: '1 small head (about 800g)' },
      { rawName: 'Apple', rawMeasure: '1 large' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Allspice', rawMeasure: '1/4 tsp' },
      { rawName: 'Vinegar', rawMeasure: '3 tbsp cider vinegar' },
      { rawName: 'Muscovado sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Griddled asparagus with lemon butter',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Snap the woody ends from the asparagus and toss the spears with a little olive oil and seasoning.\n' +
      '2. Heat a griddle pan until smoking, then lay the asparagus across the bars.\n' +
      '3. Cook for 3–4 minutes, turning once, until tender and nicely charred.\n' +
      '4. Meanwhile melt the butter with the lemon zest and juice.\n' +
      '5. Arrange the asparagus on a plate and pour the lemon butter over, adding a few shavings of Parmesan if liked.',
    rawLines: [
      { rawName: 'Asparagus', rawMeasure: '1 bunch (about 250g)' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parmesan', rawMeasure: '20g, optional' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Dessert ────────────────────────────────────────────────────────────────
  {
    title: 'Sticky toffee banana pudding',
    servingsBase: 6,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and butter a medium baking dish.\n' +
      '2. Mash the ripe bananas and beat with the eggs, melted butter, sugar and vanilla extract.\n' +
      '3. Fold in the ground almonds and baking powder until smooth.\n' +
      '4. Pour into the dish and bake for 30–35 minutes until risen and golden.\n' +
      '5. For the sauce, melt the butter with the muscovado sugar and double cream, stir until smooth and serve warm poured over the pudding.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '3 ripe' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Butter', rawMeasure: '80g, melted plus extra for dish' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
      { rawName: 'Almonds', rawMeasure: '150g ground' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp (gluten-free)' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Muscovado sugar', rawMeasure: '80g' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
    ],
  },
  {
    title: 'Cardamom and pistachio panna cotta',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Gently warm the double cream with the milk, caster sugar and crushed cardamom pods until the sugar dissolves — do not boil.\n' +
      '2. Soak the gelatine sheets in cold water for 5 minutes, then squeeze out and stir into the warm cream until dissolved.\n' +
      '3. Strain through a fine sieve into lightly oiled moulds or glasses.\n' +
      '4. Chill for at least 4 hours until firmly set.\n' +
      '5. Turn out or serve in the glasses topped with chopped pistachios and a drizzle of honey.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '400ml' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Caster sugar', rawMeasure: '60g' },
      { rawName: 'Cardamom pods', rawMeasure: '6, lightly crushed' },
      { rawName: 'Gelatine', rawMeasure: '3 sheets' },
      { rawName: 'Pistachios', rawMeasure: '40g, chopped' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Poached pears with red wine and cinnamon',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Pour the red wine and water into a deep pan with the sugar, cinnamon, star anise and vanilla.\n' +
      '2. Bring to a simmer and stir until the sugar dissolves.\n' +
      '3. Peel the pears, leaving the stalks on, and lower into the liquid.\n' +
      '4. Simmer gently for 20 minutes, turning the pears occasionally, until tender when pierced.\n' +
      '5. Lift out the pears and reduce the poaching liquid to a syrup. Serve the pears with the syrup drizzled over.',
    rawLines: [
      { rawName: 'Pear', rawMeasure: '4, firm' },
      { rawName: 'Red wine', rawMeasure: '400ml' },
      { rawName: 'Water', rawMeasure: '200ml' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
      { rawName: 'Star anise', rawMeasure: '2' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Mango sorbet',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Blend the frozen mango with the lime juice, coconut water and icing sugar until completely smooth.\n' +
      '2. Taste and add more sugar or lime as needed.\n' +
      '3. Either churn in an ice-cream machine until firm, then freeze until needed, or pour directly into a lidded container and freeze.\n' +
      '4. If freezing without a machine, stir vigorously every hour for 3 hours to break up the ice crystals.\n' +
      '5. Scoop into glasses and serve with a sprig of mint.',
    rawLines: [
      { rawName: 'Mango', rawMeasure: '600g frozen chunks' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Coconut water', rawMeasure: '100ml' },
      { rawName: 'Icing sugar', rawMeasure: '50g' },
      { rawName: 'Mint', rawMeasure: 'a few sprigs to serve' },
    ],
  },
  {
    title: 'Orange and almond cake',
    servingsBase: 10,
    totalTimeMinutes: 90,
    course: 'Dessert',
    cuisine: 'Spanish',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Simmer two whole oranges in a pan of water for 1 hour until completely tender. Drain, cool, then blitz the whole oranges (including skin) to a puree.\n' +
      '2. Heat the oven to 160°C (fan 140°C) and line a 23cm cake tin.\n' +
      '3. Beat the eggs with the caster sugar until pale, then fold in the orange puree, ground almonds and gluten-free baking powder.\n' +
      '4. Pour into the tin and bake for 45–50 minutes until set and golden. A skewer should come out with just a few moist crumbs.\n' +
      '5. Cool in the tin, then dust with icing sugar and serve with creme fraiche.',
    rawLines: [
      { rawName: 'Orange', rawMeasure: '2 large, navel' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Almonds', rawMeasure: '250g ground' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp (gluten-free)' },
      { rawName: 'Icing sugar', rawMeasure: '2 tbsp, for dusting' },
      { rawName: 'Creme fraiche', rawMeasure: '200g, to serve' },
    ],
  },
  {
    title: 'Raspberry ripple ice cream',
    servingsBase: 8,
    totalTimeMinutes: 30,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Whisk the egg yolks with the caster sugar until pale and thick.\n' +
      '2. Warm the double cream until steaming, then slowly pour over the yolks, whisking. Return to the pan and stir over a low heat until the custard coats the back of a spoon. Cool.\n' +
      '3. Churn in an ice-cream machine until thick and creamy.\n' +
      '4. Warm the raspberries with a little icing sugar until they collapse to a loose sauce, then cool.\n' +
      '5. Layer the ice cream and raspberry sauce in a container, rippling with a skewer, then freeze until firm.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '500ml' },
      { rawName: 'Egg', rawMeasure: '5 yolks' },
      { rawName: 'Caster sugar', rawMeasure: '120g' },
      { rawName: 'Raspberries', rawMeasure: '250g' },
      { rawName: 'Icing sugar', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Coconut flan',
    servingsBase: 6,
    totalTimeMinutes: 70,
    course: 'Dessert',
    cuisine: 'Spanish',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Melt 100g caster sugar with 2 tbsp water in a pan, swirling until a deep amber caramel forms. Pour into a 20cm round tin and tilt to coat the base.\n' +
      '2. Whisk the eggs with the remaining sugar, then whisk in the coconut milk and vanilla extract.\n' +
      '3. Strain into the caramel-lined tin.\n' +
      '4. Place the tin in a roasting tin, pour boiling water around to come halfway up the sides and bake for 45 minutes until just set with a slight wobble.\n' +
      '5. Cool, then chill overnight before running a knife around the edge and inverting onto a plate.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Chocolate mousse',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Melt the plain chocolate over a pan of barely simmering water, then cool for 5 minutes.\n' +
      '2. Separate the eggs. Stir the yolks into the chocolate one at a time.\n' +
      '3. Whisk the egg whites to stiff peaks in a clean bowl.\n' +
      '4. Fold a large spoonful of whites into the chocolate to loosen it, then gently fold in the rest in two batches, keeping as much air as possible.\n' +
      '5. Divide into glasses and chill for at least 2 hours before serving with a small rosette of whipped cream.',
    rawLines: [
      { rawName: 'Plain chocolate', rawMeasure: '175g (at least 70% cocoa)' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Double cream', rawMeasure: '100ml, whipped lightly' },
    ],
  },
  {
    title: 'Banana and walnut loaf',
    servingsBase: 10,
    totalTimeMinutes: 75,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C) and line a 900g loaf tin.\n' +
      '2. Mash the ripe bananas in a large bowl and beat in the melted butter, sugar and beaten eggs.\n' +
      '3. Fold in the ground almonds, desiccated coconut, gluten-free baking powder and a pinch of cinnamon.\n' +
      '4. Stir through the roughly chopped walnuts.\n' +
      '5. Pour into the tin and bake for 55–60 minutes until a skewer inserted in the centre comes out clean. Cool in the tin for 10 minutes before turning out.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '3 very ripe' },
      { rawName: 'Butter', rawMeasure: '80g, melted' },
      { rawName: 'Muscovado sugar', rawMeasure: '100g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Almonds', rawMeasure: '200g ground' },
      { rawName: 'Desiccated coconut', rawMeasure: '50g' },
      { rawName: 'Walnuts', rawMeasure: '80g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp (gluten-free)' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Mango and coconut mousse',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'Caribbean',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Puree the ripe mango flesh until completely smooth.\n' +
      '2. Whip the double cream to soft peaks.\n' +
      '3. Soak the gelatine in cold water for 5 minutes, then warm the coconut milk gently, squeeze out and dissolve the gelatine in it.\n' +
      '4. Stir the coconut mixture into the mango puree with the icing sugar, then fold in the whipped cream.\n' +
      '5. Spoon into glasses and chill for 3 hours until set. Serve topped with toasted desiccated coconut.',
    rawLines: [
      { rawName: 'Mango', rawMeasure: '2 large, ripe' },
      { rawName: 'Double cream', rawMeasure: '200ml' },
      { rawName: 'Coconut milk', rawMeasure: '150ml' },
      { rawName: 'Gelatine', rawMeasure: '2 sheets' },
      { rawName: 'Icing sugar', rawMeasure: '50g' },
      { rawName: 'Desiccated coconut', rawMeasure: '2 tbsp, toasted' },
    ],
  },

  // ── Snacks ─────────────────────────────────────────────────────────────────
  {
    title: 'Kale crisps with sea salt',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C). Strip the kale leaves from the tough stems and tear into pieces.\n' +
      '2. Spread on two large baking trays in a single layer — do not crowd them.\n' +
      '3. Toss with a light drizzle of olive oil and a generous pinch of sea salt.\n' +
      '4. Bake for 15 minutes until completely crisp and dry but still vivid green.\n' +
      '5. Cool on the trays — they will crisp further as they cool — and eat the same day.',
    rawLines: [
      { rawName: 'Kale', rawMeasure: '200g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 tsp sea salt' },
    ],
  },
  {
    title: 'Devilled nuts',
    servingsBase: 6,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Spread the mixed nuts on a lined baking tray.\n' +
      '2. Whisk the olive oil with the smoked paprika, cumin, cayenne pepper and a little salt.\n' +
      '3. Pour over the nuts and toss to coat evenly.\n' +
      '4. Roast for 10–12 minutes, shaking the tray halfway, until golden and fragrant.\n' +
      '5. Tip out onto fresh parchment and cool completely before serving.',
    rawLines: [
      { rawName: 'Mixed nuts', rawMeasure: '300g (cashews, almonds, pecans)' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Cayenne pepper', rawMeasure: '1/4 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Baked sweet potato skins with soured cream',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Snack',
    cuisine: 'American',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Prick the sweet potatoes and bake for 45 minutes until completely tender.\n' +
      '2. Cut in half and scoop out most of the flesh, leaving a thick shell.\n' +
      '3. Brush the insides with butter, season and return to the oven for 10 minutes until the skins crisp.\n' +
      '4. Fill each with a spoonful of soured cream and a scatter of chives.\n' +
      '5. Finish with smoked paprika and serve warm.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '4 medium' },
      { rawName: 'Soured cream', rawMeasure: '150g' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Edamame with chilli salt',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Japanese',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Cook the frozen edamame pods in boiling salted water for 4–5 minutes until heated through and bright green.\n' +
      '2. Drain well and tip into a bowl.\n' +
      '3. Mix the sea salt with the chilli flakes and a pinch of garlic powder.\n' +
      '4. Sprinkle the chilli salt over the edamame and toss to coat.\n' +
      '5. Serve warm, eating the beans by squeezing them from the pods directly into your mouth.',
    rawLines: [
      { rawName: 'Edamame', rawMeasure: '300g frozen pods' },
      { rawName: 'Salt', rawMeasure: '1 tsp sea salt' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Garlic powder', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Mango lassi',
    servingsBase: 2,
    totalTimeMinutes: 5,
    course: 'Snack',
    cuisine: 'Indian',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Tip the ripe mango flesh into a blender with the natural yoghurt and cold milk.\n' +
      '2. Add the cardamom, a pinch of salt and the honey and blend until silky smooth.\n' +
      '3. Taste and adjust sweetness with a little more honey if needed.\n' +
      '4. Pour into tall glasses over ice and serve immediately.',
    rawLines: [
      { rawName: 'Mango', rawMeasure: '1 large ripe' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g' },
      { rawName: 'Milk', rawMeasure: '150ml, chilled' },
      { rawName: 'Cardamom pods', rawMeasure: '2, seeds only, ground' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Stuffed dates with almond butter',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Slit each date lengthways and remove the stone.\n' +
      '2. Fill each with a small teaspoon of almond butter.\n' +
      '3. Press a single pecan or walnut half into the almond butter of each date.\n' +
      '4. Arrange on a plate and dust lightly with cinnamon.\n' +
      '5. Serve at room temperature as a sweet nibble.',
    rawLines: [
      { rawName: 'Dates', rawMeasure: '16 Medjool' },
      { rawName: 'Almond butter', rawMeasure: '4 tbsp' },
      { rawName: 'Walnuts', rawMeasure: '16 halves' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Tomato salsa with corn tortilla chips',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Mexican',
    dietLabels: ['Vegan', 'Vegetarian'],
    instructions:
      '1. Dice the tomatoes finely and place in a bowl, discarding excess juice.\n' +
      '2. Finely chop the red onion, chilli and coriander and add to the tomatoes.\n' +
      '3. Squeeze in the lime juice, season with salt and stir gently to combine.\n' +
      '4. Leave for 5 minutes for the flavours to mingle.\n' +
      '5. Serve alongside the corn tortilla chips for dipping.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4 ripe' },
      { rawName: 'Red onion', rawMeasure: '1/4' },
      { rawName: 'Chilli', rawMeasure: '1 green, mild' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Corn tortilla chips', rawMeasure: '100g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Ricotta with honey and walnuts on rice cakes',
    servingsBase: 2,
    totalTimeMinutes: 5,
    course: 'Snack',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Spread a generous layer of ricotta over each rice cake.\n' +
      '2. Scatter over the roughly broken walnuts.\n' +
      '3. Trickle honey over each rice cake.\n' +
      '4. Finish with a tiny pinch of sea salt to balance the sweetness and serve at once.',
    rawLines: [
      { rawName: 'Ricotta', rawMeasure: '100g' },
      { rawName: 'Rice cakes', rawMeasure: '4' },
      { rawName: 'Walnuts', rawMeasure: '30g' },
      { rawName: 'Honey', rawMeasure: '2 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch sea salt' },
    ],
  },
  {
    title: 'Tzatziki with cucumber',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Greek',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Coarsely grate the cucumber and squeeze firmly in a clean tea towel to remove as much liquid as possible.\n' +
      '2. Mix with the Greek yoghurt, crushed garlic, olive oil, chopped mint and a squeeze of lemon juice.\n' +
      '3. Season generously with salt.\n' +
      '4. Spoon into a bowl, drizzle with a little more olive oil and garnish with a sprig of mint.\n' +
      '5. Serve with cucumber sticks or rice cakes for dipping.',
    rawLines: [
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Greek yoghurt', rawMeasure: '300g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Mint', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1/4' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Additional dinners ──────────────────────────────────────────────────────
  {
    title: 'Pea and mint soup',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Soften the onion in the butter for 5 minutes without colouring.\n' +
      '2. Add the frozen peas and pour in the gluten-free stock. Bring to the boil and simmer for 3 minutes.\n' +
      '3. Add most of the mint and blend until bright green and silky.\n' +
      '4. Stir in the creme fraiche and season well.\n' +
      '5. Ladle into bowls and top with the reserved mint leaves and a swirl of creme fraiche.',
    rawLines: [
      { rawName: 'Peas', rawMeasure: '600g frozen' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Mint', rawMeasure: '30g' },
      { rawName: 'Creme fraiche', rawMeasure: '100ml' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml (gluten-free)' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken and sweet potato traybake',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: [],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Cut the sweet potatoes into wedges and the red onion into chunks.\n' +
      '2. Tip into a large roasting tin with the cherry tomatoes and spread out.\n' +
      '3. Rub the chicken thighs with smoked paprika, garlic powder, oil and seasoning, then nestle among the vegetables.\n' +
      '4. Roast for 40–45 minutes, turning the vegetables halfway, until the chicken is golden and cooked through.\n' +
      '5. Scatter with fresh parsley and serve straight from the tin.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Sweet potato', rawMeasure: '600g' },
      { rawName: 'Red onion', rawMeasure: '2' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Garlic powder', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '25g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef chilli with kidney beans',
    servingsBase: 6,
    totalTimeMinutes: 80,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: [],
    instructions:
      '1. Brown the minced beef in batches in a large pan over a high heat, then lift out.\n' +
      '2. Soften the onion, pepper and garlic in the same pan for 8 minutes.\n' +
      '3. Return the beef, add the cumin, chilli powder, smoked paprika and oregano and stir for a minute.\n' +
      '4. Pour in the chopped tomatoes and gluten-free stock and simmer for 45 minutes until rich and thick.\n' +
      '5. Stir in the drained kidney beans and warm through. Season, then serve with rice, soured cream and grated Cheddar.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '700g' },
      { rawName: 'Kidney beans', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (400g each)' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Dried oregano', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml (gluten-free)' },
      { rawName: 'Rice', rawMeasure: '400g' },
      { rawName: 'Soured cream', rawMeasure: '100g' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai red curry with tofu and vegetables',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Press the tofu, cut into cubes and fry in hot oil until golden on all sides. Drain on kitchen paper.\n' +
      '2. Fry the Thai red curry paste in a splash of oil for a minute, then pour in the coconut milk.\n' +
      '3. Add the broccoli, courgette and red pepper and simmer for 8 minutes until just tender.\n' +
      '4. Season with the tamari and a squeeze of lime.\n' +
      '5. Stir in the tofu, scatter with coriander and serve over jasmine rice.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '280g firm' },
      { rawName: 'Thai red curry paste', rawMeasure: '3 tbsp (check label — most contain shrimp paste; use a vegetarian brand)' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Broccoli', rawMeasure: '1 small head' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Tamari', rawMeasure: '1 tbsp (gluten-free)' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '25g' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Prawn and corn chowder',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Soften the onion, celery and garlic in the butter for 8 minutes.\n' +
      '2. Add the diced potato and sweetcorn and stir to coat.\n' +
      '3. Pour in the gluten-free stock and simmer for 15 minutes until the potato is tender.\n' +
      '4. Stir in the double cream and the prawns and cook for 3–4 minutes until the prawns are just pink.\n' +
      '5. Season, finish with chopped chives and serve in deep bowls.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '300g' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Sweetcorn', rawMeasure: '1 tin (200g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Double cream', rawMeasure: '200ml' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml (gluten-free)' },
      { rawName: 'Chives', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paella with chicken and seafood',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: [],
    instructions:
      '1. Soften the onion, pepper and garlic in olive oil in a wide, shallow pan. Add the smoked paprika and saffron.\n' +
      '2. Stir in the paella rice until glossy, then pour in the chopped tomatoes and gluten-free stock.\n' +
      '3. Tuck in the chicken thigh pieces and arrange the mussels and prawns on top.\n' +
      '4. Cook over a medium heat without stirring for 20 minutes until the rice is just tender and a crust forms on the bottom.\n' +
      '5. Rest for 5 minutes, then squeeze lemon over and serve from the pan.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '300g' },
      { rawName: 'Chicken thigh', rawMeasure: '4, boneless, diced' },
      { rawName: 'Prawns', rawMeasure: '200g, raw' },
      { rawName: 'Mussels', rawMeasure: '300g, cleaned' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml (gluten-free)' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted vegetable frittata',
    servingsBase: 6,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, red pepper and cherry tomatoes in oil, season and roast for 20 minutes until tender.\n' +
      '2. Reduce the oven to 180°C (fan 160°C).\n' +
      '3. Beat the eggs with the milk, most of the Parmesan and seasoning.\n' +
      '4. Arrange the roasted vegetables in a lined 23cm ovenproof frying pan. Pour in the egg mixture and scatter over the remaining Parmesan.\n' +
      '5. Bake for 18–20 minutes until set and golden. Cool slightly before slicing.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Parmesan', rawMeasure: '50g' },
      { rawName: 'Milk', rawMeasure: '4 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked sea bream with olives and capers',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C).\n' +
      '2. Score the sea bream fillets through the skin, season and place in a baking dish.\n' +
      '3. Scatter the sliced olives, capers, cherry tomatoes and garlic around and over the fish.\n' +
      '4. Drizzle everything with olive oil and add a splash of white wine.\n' +
      '5. Bake for 18–20 minutes until the fish is just cooked and the tomatoes have burst. Finish with fresh basil.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '2 large fillets (sea bream)' },
      { rawName: 'Olives', rawMeasure: '80g' },
      { rawName: 'Capers', rawMeasure: '2 tbsp' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, sliced' },
      { rawName: 'White wine', rawMeasure: '50ml' },
      { rawName: 'Basil', rawMeasure: '20g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced lamb meatballs in tomato sauce',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: [],
    instructions:
      '1. Mix the minced lamb with the grated onion, garlic, cumin, cinnamon and seasoning. Roll into walnut-sized balls.\n' +
      '2. Brown the meatballs in olive oil in batches until golden all over, then set aside.\n' +
      '3. In the same pan soften the remaining onion, add the smoked paprika and pour in the chopped tomatoes.\n' +
      '4. Return the meatballs, cover and simmer gently for 20 minutes until cooked through and the sauce is rich.\n' +
      '5. Scatter with fresh mint and serve with rice.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '2 (1 grated, 1 diced)' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Mint', rawMeasure: '25g' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine and mozzarella bake',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Slice the aubergines into 1cm rounds, brush with oil and roast for 20 minutes until golden and tender.\n' +
      '2. Simmer the chopped tomatoes with the garlic, basil and a pinch of sugar for 10 minutes to a thick sauce.\n' +
      '3. Layer the aubergine in a baking dish with the tomato sauce and torn mozzarella, finishing with mozzarella on top.\n' +
      '4. Scatter over the Parmesan.\n' +
      '5. Bake for 20 minutes until bubbling and golden. Rest for 5 minutes before serving.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Mozzarella', rawMeasure: '250g' },
      { rawName: 'Parmesan', rawMeasure: '40g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Basil', rawMeasure: '30g' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Courgette ribbon salad with lemon and ricotta',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Using a vegetable peeler, shave the raw courgettes into long, thin ribbons.\n' +
      '2. Toss the ribbons with the lemon juice, olive oil and a pinch of salt and leave for 5 minutes to soften slightly.\n' +
      '3. Arrange on plates and dot with spoonfuls of ricotta.\n' +
      '4. Scatter over the toasted pine nuts and torn mint leaves.\n' +
      '5. Finish with a grating of lemon zest and a grind of black pepper.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '3 (mixed colours if available)' },
      { rawName: 'Ricotta', rawMeasure: '150g' },
      { rawName: 'Pine nuts', rawMeasure: '30g, toasted' },
      { rawName: 'Mint', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Watermelon, feta and mint salad',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Lunch',
    cuisine: 'Middle Eastern',
    dietLabels: ['Vegetarian'],
    instructions:
      '1. Remove the rind from the watermelon and cut the flesh into rough chunks, discarding any seeds.\n' +
      '2. Arrange on a large platter.\n' +
      '3. Crumble the feta over the watermelon.\n' +
      '4. Scatter over the fresh mint leaves and the black olives if using.\n' +
      '5. Drizzle with olive oil and a little lime juice and serve immediately.',
    rawLines: [
      { rawName: 'Watermelon', rawMeasure: '1kg, flesh only' },
      { rawName: 'Feta', rawMeasure: '200g' },
      { rawName: 'Mint', rawMeasure: '30g' },
      { rawName: 'Olives', rawMeasure: '60g, optional' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
    ],
  },
]
