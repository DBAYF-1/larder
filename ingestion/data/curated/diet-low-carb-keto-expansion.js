// Curated LOW-CARB / KETO expansion recipes for Larder.
// Second batch — every title is distinct from diet-low-carb-keto.js.
// Shape: { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//          instructions, rawLines:[{rawName, rawMeasure}] }
// HARD KETO RULE: no sugar, flour, bread, pasta, rice, potatoes, or high-carb fruit.

export default [
  // ── Breakfast ────────────────────────────────────────────────────────────────
  {
    title: 'Smoked salmon and cream cheese omelette',
    servingsBase: 1,
    totalTimeMinutes: 12,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    instructions:
      '1. Beat the eggs with a pinch of salt and black pepper in a small bowl.\n' +
      '2. Melt the butter in a non-stick frying pan over a medium heat until it foams.\n' +
      '3. Pour in the eggs and draw the edges in with a spatula as they begin to set, tilting the pan so raw egg runs underneath.\n' +
      '4. When just barely set on top, dot teaspoons of cream cheese and the smoked salmon across one half.\n' +
      '5. Fold the omelette over the filling and slide onto a warm plate. Finish with a squeeze of lemon and a few chives.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Smoked salmon', rawMeasure: '50g, torn' },
      { rawName: 'Cream cheese', rawMeasure: '40g' },
      { rawName: 'Butter', rawMeasure: '15g' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/4' },
      { rawName: 'Chives', rawMeasure: '1 tsp, snipped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spinach and feta baked eggs',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'Middle Eastern',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Warm the olive oil in a small ovenproof frying pan and soften the spring onion and garlic for 2 minutes.\n' +
      '2. Add the spinach in handfuls, stirring until each batch wilts. Season with a pinch of chilli flakes and nutmeg.\n' +
      '3. Make four hollows in the spinach and crack an egg into each. Crumble over the feta.\n' +
      '4. Transfer to the oven and bake for 8–10 minutes until the whites are just set but the yolks remain runny. Serve straight from the pan.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Feta', rawMeasure: '80g' },
      { rawName: 'Spring onion', rawMeasure: '3, sliced' },
      { rawName: 'Garlic', rawMeasure: '1 clove, sliced' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Keto coconut and almond porridge',
    servingsBase: 1,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Combine the ground almonds, desiccated coconut and chia seeds in a small saucepan.\n' +
      '2. Pour in the coconut milk and stir over a gentle heat for 3–4 minutes until thick and creamy. Add a splash more coconut milk if it gets too thick.\n' +
      '3. Stir in the vanilla extract and a pinch of salt.\n' +
      '4. Spoon into a bowl and top with a few fresh raspberries and a light scatter of flaked almonds.',
    rawLines: [
      { rawName: 'Almonds', rawMeasure: '40g ground' },
      { rawName: 'Desiccated coconut', rawMeasure: '20g' },
      { rawName: 'Chia seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '150ml' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
      { rawName: 'Raspberries', rawMeasure: '30g, to serve' },
      { rawName: 'Almonds', rawMeasure: '10g flaked, to serve' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Egg and halloumi breakfast traybake',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Slice the halloumi into thick rounds and lay in a roasting tin with the cherry tomatoes and mushrooms.\n' +
      '2. Drizzle with olive oil, season and roast for 15 minutes until the halloumi is golden and the tomatoes are beginning to burst.\n' +
      '3. Make two wells in the vegetables and crack an egg into each.\n' +
      '4. Return to the oven for 5–7 minutes until the whites are set. Scatter with chilli flakes and serve.',
    rawLines: [
      { rawName: 'Halloumi', rawMeasure: '225g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkish-style eggs with herb butter',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'Turkish',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Beat the natural yoghurt with the crushed garlic and a pinch of salt, then divide between two warmed bowls.\n' +
      '2. Poach the eggs in gently simmering water with a splash of vinegar for 3–4 minutes until the whites are set but the yolks are runny. Lift out and sit on the yoghurt.\n' +
      '3. In a small pan, melt the butter with the chilli flakes and dried mint until sizzling and deep red.\n' +
      '4. Spoon the spiced butter over the eggs and finish with a pinch of paprika.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Chilli flakes', rawMeasure: '1 tsp' },
      { rawName: 'Dried mint', rawMeasure: '1/2 tsp' },
      { rawName: 'Paprika', rawMeasure: '1/4 tsp' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Lunch ────────────────────────────────────────────────────────────────────
  {
    title: 'Thai beef salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Thai',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Season the sirloin steak and sear in a hot pan for 2–3 minutes each side for medium-rare. Rest for 5 minutes, then slice thinly across the grain.\n' +
      '2. Whisk the lime juice, fish sauce, sesame oil and chilli together to make a dressing.\n' +
      '3. Pile the shredded Chinese leaf, cucumber ribbons, spring onion, coriander and mint onto plates.\n' +
      '4. Lay the steak over the salad, pour over the dressing and scatter with toasted sesame seeds.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '300g sirloin' },
      { rawName: 'Chinese leaf', rawMeasure: '1/4, shredded' },
      { rawName: 'Cucumber', rawMeasure: '1/2, cut into ribbons' },
      { rawName: 'Spring onion', rawMeasure: '3, sliced' },
      { rawName: 'Coriander', rawMeasure: '1 small handful' },
      { rawName: 'Mint', rawMeasure: '1 small handful' },
      { rawName: 'Lime', rawMeasure: 'juice of 1' },
      { rawName: 'Fish sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Chilli', rawMeasure: '1, finely sliced' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp, toasted' },
    ],
  },
  {
    title: 'Crayfish and avocado lettuce cups',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    instructions:
      '1. Stir the mayonnaise with the crème fraîche, a squeeze of lemon, a pinch of cayenne and the chopped dill; season well.\n' +
      '2. Fold the crayfish tails through the dressing.\n' +
      '3. Dice the avocado and fold in gently.\n' +
      '4. Spoon the mixture into firm baby gem lettuce leaves and serve with lemon wedges.',
    rawLines: [
      { rawName: 'Crayfish tails', rawMeasure: '200g, cooked' },
      { rawName: 'Avocado', rawMeasure: '1, diced' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp' },
      { rawName: 'Crème fraîche', rawMeasure: '2 tbsp' },
      { rawName: 'Dill', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1, juice and wedges to serve' },
      { rawName: 'Cayenne pepper', rawMeasure: '1 pinch' },
      { rawName: 'Lettuce', rawMeasure: '2 baby gem, leaves separated' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Nicoise-style salad with tuna',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    instructions:
      '1. Boil the eggs for 7 minutes, cool, peel and halve. Blanch the green beans in boiling salted water for 3 minutes, then refresh under cold water.\n' +
      '2. Arrange the lettuce, green beans, cherry tomatoes, olives and egg halves on plates.\n' +
      '3. Flake the tuna over the top and scatter with the anchovy fillets.\n' +
      '4. Whisk the olive oil, red wine vinegar and Dijon mustard; season and drizzle over.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '2 tins, drained' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Green beans', rawMeasure: '150g' },
      { rawName: 'Cherry tomato', rawMeasure: '150g, halved' },
      { rawName: 'Olives', rawMeasure: '50g' },
      { rawName: 'Lettuce', rawMeasure: '2 romaine hearts' },
      { rawName: 'Anchovy fillets', rawMeasure: '4' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Red wine vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Dijon mustard', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced lamb and cucumber salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Middle Eastern',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Mix the minced lamb with the cumin, coriander, garlic, chilli flakes and a little salt, then shape into small flattened patties.\n' +
      '2. Fry in a dry pan over a medium-high heat for 3–4 minutes each side until cooked through.\n' +
      '3. While the lamb cooks, toss the sliced cucumber, tomatoes, red onion and parsley together with the olive oil, lemon juice and a pinch of sumac.\n' +
      '4. Pile the salad onto plates and top with the warm lamb patties.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '300g' },
      { rawName: 'Cucumber', rawMeasure: '1/2, sliced' },
      { rawName: 'Tomato', rawMeasure: '2, chopped' },
      { rawName: 'Red onion', rawMeasure: '1/2, thinly sliced' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Garlic', rawMeasure: '1 clove, crushed' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 tsp ground' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Sumac', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cauliflower soup with crispy chorizo',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: ['Keto', 'Low-carb'],
    instructions:
      '1. Fry the chorizo in a dry pan until crisp and the oil has run out. Scoop out with a slotted spoon and set aside, leaving the oil in the pan.\n' +
      '2. Soften the onion and garlic in the chorizo oil for 5 minutes, then add the cauliflower florets and smoked paprika.\n' +
      '3. Pour in the stock, bring to a simmer and cook for 15 minutes until the cauliflower is very tender.\n' +
      '4. Blend until smooth, stir in the double cream and season. Ladle into bowls and top with the crispy chorizo.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large head, in florets' },
      { rawName: 'Chorizo', rawMeasure: '100g, diced' },
      { rawName: 'Onion', rawMeasure: '1, chopped' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Miso-glazed aubergine with sesame',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: ['Keto', 'Low-carb', 'Vegan'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the aubergines lengthways and score the flesh in a criss-cross pattern.\n' +
      '2. Stir together the miso paste, sesame oil, rice wine vinegar and grated ginger.\n' +
      '3. Brush the cut sides generously with the miso glaze and lay cut-side up on a lined tray. Roast for 20–25 minutes until deep golden and tender.\n' +
      '4. Scatter with sesame seeds and spring onion and serve with shredded cabbage.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2' },
      { rawName: 'Miso paste', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
      { rawName: 'Rice wine vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Sesame seeds', rawMeasure: '2 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2, sliced' },
      { rawName: 'Cabbage', rawMeasure: '1/4, shredded, to serve' },
    ],
  },

  // ── Dinner ───────────────────────────────────────────────────────────────────
  {
    title: 'Pork belly bites with Chinese five-spice',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Cut the pork belly into 3cm cubes. Toss with the five-spice, soy sauce, garlic and sesame oil; leave to marinate for 15 minutes.\n' +
      '2. Heat the oven to 220°C (fan 200°C). Spread the pork on a roasting rack set over a tray.\n' +
      '3. Roast for 30–35 minutes, turning once, until caramelised and crisp at the edges.\n' +
      '4. Scatter with spring onion and sesame seeds. Serve with stir-fried bok choy.',
    rawLines: [
      { rawName: 'Pork belly', rawMeasure: '700g, skinless' },
      { rawName: 'Five-spice powder', rawMeasure: '1 tsp' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, crushed' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2, sliced' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Bok choy', rawMeasure: '2, halved, to serve' },
    ],
  },
  {
    title: 'Lamb rogan josh',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Heat the oil in a heavy pan and brown the lamb pieces in batches over a high heat. Lift out.\n' +
      '2. In the same pan, fry the onion until deep gold, about 10 minutes. Stir in the garlic, ginger, garam masala, cumin, coriander, turmeric, chilli and tomato purée.\n' +
      '3. Cook the spices for 2 minutes, then return the lamb with the chopped tomatoes and a splash of water. Season well.\n' +
      '4. Simmer gently, covered, for 50–60 minutes until the lamb is tender and the sauce is rich. Scatter with coriander leaves and serve with cauliflower rice.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '700g, diced' },
      { rawName: 'Onion', rawMeasure: '2, thinly sliced' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Garlic', rawMeasure: '4 cloves, crushed' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 tsp ground' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Coriander', rawMeasure: 'handful of leaves, to serve' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn green curry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian', 'Dairy-free'],
    instructions:
      '1. Warm the coconut oil in a large pan and fry the green curry paste for 2 minutes until fragrant.\n' +
      '2. Pour in the coconut milk, add the fish sauce and bring to a gentle simmer.\n' +
      '3. Add the courgette and pepper and cook for 5 minutes, then tip in the prawns and cook for 3–4 minutes until pink and just cooked through.\n' +
      '4. Stir in the lime juice and Thai basil leaves. Serve over cauliflower rice.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '400g, peeled' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Green curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Courgette', rawMeasure: '1, sliced' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1, sliced' },
      { rawName: 'Fish sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: 'juice of 1' },
      { rawName: 'Basil', rawMeasure: 'handful of Thai basil' },
      { rawName: 'Coconut oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Chicken fajita bowls (no tortilla)',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Slice the chicken breasts and toss with the cumin, smoked paprika, garlic, chilli powder, olive oil and seasoning.\n' +
      '2. Fry in a hot pan for 6–8 minutes until cooked through and a little charred. Lift out.\n' +
      '3. In the same pan, fry the pepper and red onion strips for 5 minutes until soft and catching colour.\n' +
      '4. Divide cauliflower rice between bowls, top with the chicken and peppers, then add sliced avocado, a spoon of soured cream and a squeeze of lime.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2, sliced' },
      { rawName: 'Red onion', rawMeasure: '1, sliced' },
      { rawName: 'Avocado', rawMeasure: '1, sliced' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Lime', rawMeasure: 'juice of 1' },
      { rawName: 'Soured cream', rawMeasure: '4 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked trout with brown butter and capers',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Season the trout fillets and lay skin-side down on a buttered baking tray.\n' +
      '2. Bake for 12–14 minutes until the flesh is opaque and flakes easily.\n' +
      '3. Meanwhile, melt the butter in a small pan over a medium heat and cook until it turns a nutty golden-brown, then add the capers and lemon juice — stand back as it will spit.\n' +
      '4. Spoon the brown butter and capers over the trout and scatter with parsley to serve.',
    rawLines: [
      { rawName: 'Trout fillet', rawMeasure: '2' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Capers', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek moussaka with aubergine',
    servingsBase: 6,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Keto', 'Low-carb'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Slice the aubergines and brush both sides with olive oil. Roast on trays for 20 minutes until golden. Set aside.\n' +
      '2. Fry the onion in a little oil until soft, add the garlic, lamb mince and cinnamon and cook until browned. Stir in the chopped tomatoes and tomato purée; simmer for 15 minutes until thick.\n' +
      '3. For the topping, warm the double cream gently, whisk in the eggs and Parmesan and season with nutmeg and salt.\n' +
      '4. Layer the aubergine and lamb in a baking dish, pour the cream topping over and bake for 30–35 minutes until golden and set. Rest 10 minutes before serving.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1, finely chopped' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Double cream', rawMeasure: '300ml' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Parmesan', rawMeasure: '50g, grated' },
      { rawName: 'Nutmeg', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jerk chicken thighs',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Blitz the spring onion, garlic, Scotch bonnet, allspice, thyme, soy sauce, lime juice, olive oil, ginger and black pepper in a small blender to a rough paste.\n' +
      '2. Score the chicken thighs, rub all over with the jerk paste and marinate for at least 30 minutes.\n' +
      '3. Heat the oven to 200°C (fan 180°C). Roast the thighs on a rack for 35–40 minutes until deeply coloured and cooked through.\n' +
      '4. Rest for 5 minutes and serve with shredded cabbage slaw and lime wedges.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Chilli', rawMeasure: '1 Scotch bonnet, deseeded' },
      { rawName: 'Allspice', rawMeasure: '1 tsp' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs, leaves only' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: 'juice of 1, plus wedges to serve' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Cabbage', rawMeasure: '1/4, shredded, to serve' },
      { rawName: 'Black pepper', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Pork tenderloin with mushroom cream sauce',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Keto', 'Low-carb'],
    instructions:
      '1. Season the pork tenderloin and sear all over in the olive oil in a hot ovenproof pan. Transfer to the oven at 190°C (fan 170°C) for 18–20 minutes until just cooked through. Rest, covered.\n' +
      '2. In the same pan, fry the shallot and mushrooms in the butter over a medium-high heat until golden, about 8 minutes.\n' +
      '3. Add the garlic and thyme, then pour in the double cream and stock. Simmer for 5 minutes until the sauce has thickened; season.\n' +
      '4. Slice the pork, lay on plates and spoon the mushroom cream sauce over.',
    rawLines: [
      { rawName: 'Pork tenderloin', rawMeasure: '600g' },
      { rawName: 'Mushroom', rawMeasure: '300g, sliced' },
      { rawName: 'Shallot', rawMeasure: '2, sliced' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Double cream', rawMeasure: '200ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 100ml' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Butter', rawMeasure: '25g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spanish meatballs in tomato sauce',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Mix the minced pork and beef with the garlic, smoked paprika, fennel seeds, egg, salt and pepper. Roll into walnut-sized balls.\n' +
      '2. Brown the meatballs all over in the olive oil, then lift out.\n' +
      '3. In the same pan, fry the onion for 5 minutes, add the garlic and smoked paprika, then pour in the passata and season.\n' +
      '4. Return the meatballs, cover and simmer gently for 20 minutes until cooked through. Scatter with parsley and serve.',
    rawLines: [
      { rawName: 'Minced pork', rawMeasure: '300g' },
      { rawName: 'Minced beef', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1, finely diced' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, crushed' },
      { rawName: 'Passata', rawMeasure: '400g' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Fennel seeds', rawMeasure: '1/2 tsp' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Caribbean coconut fish curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian', 'Dairy-free'],
    instructions:
      '1. Fry the onion, garlic and chilli in the coconut oil for 5 minutes. Add the turmeric, allspice and thyme and cook for a further minute.\n' +
      '2. Pour in the coconut milk and bring to a gentle simmer.\n' +
      '3. Add the white fish pieces and cherry tomatoes, season and cook for 10–12 minutes until the fish is just cooked through.\n' +
      '4. Squeeze over the lime and scatter with coriander. Serve with cauliflower rice.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '600g, cut into chunks' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Onion', rawMeasure: '1, sliced' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, crushed' },
      { rawName: 'Chilli', rawMeasure: '1, sliced' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Allspice', rawMeasure: '1/2 tsp' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Lime', rawMeasure: 'juice of 1' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Coconut oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef rendang',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Blitz the shallots, garlic, lemongrass, ginger, galangal, chilli and turmeric with a splash of water to a smooth paste.\n' +
      '2. Fry the paste in the coconut oil for 4–5 minutes until fragrant and darkened slightly.\n' +
      '3. Add the beef and stir to coat, then pour in the coconut milk. Add the kaffir lime leaves, cinnamon and toasted desiccated coconut.\n' +
      '4. Simmer uncovered, stirring occasionally, for 1 hour 30 minutes until the coconut milk has reduced to a thick, dark coating and the meat is very tender. Season and serve.',
    rawLines: [
      { rawName: 'Braising beef', rawMeasure: '700g, cut into chunks' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Shallot', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Lemongrass', rawMeasure: '2 stalks, roughly chopped' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Chilli', rawMeasure: '2 dried red' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Desiccated coconut', rawMeasure: '30g, toasted' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
      { rawName: 'Coconut oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Courgette pizza with mozzarella',
    servingsBase: 2,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Grate the courgette, salt lightly and squeeze out all the moisture. Mix with the Parmesan, egg and a pinch of oregano to form a dough.\n' +
      '2. Press into two thin rounds on lined baking trays and bake for 15 minutes until set and lightly golden.\n' +
      '3. Spread passata over each base, tear over the mozzarella and add any toppings of your choice.\n' +
      '4. Return to the oven for 10 minutes until the cheese is bubbling. Scatter with fresh basil.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '2 large' },
      { rawName: 'Parmesan', rawMeasure: '60g, grated' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Passata', rawMeasure: '100g' },
      { rawName: 'Mozzarella', rawMeasure: '2 balls, torn' },
      { rawName: 'Basil', rawMeasure: '1 handful' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken souvlaki with tzatziki',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Keto', 'Low-carb'],
    instructions:
      '1. Cut the chicken into chunks and marinate in the olive oil, lemon juice, garlic, oregano and dried thyme for 20 minutes.\n' +
      '2. Thread onto skewers and grill or griddle for 12–15 minutes, turning, until charred and cooked through.\n' +
      '3. Stir the grated cucumber (squeezed dry) through the natural yoghurt with the garlic, mint and a little lemon juice. Season.\n' +
      '4. Serve the skewers with the tzatziki, a chopped tomato and cucumber salad and lemon wedges.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g' },
      { rawName: 'Natural yoghurt', rawMeasure: '200g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, crushed' },
      { rawName: 'Oregano', rawMeasure: '2 tsp' },
      { rawName: 'Thyme', rawMeasure: '1 tsp dried' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1, juice and wedges' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Tomato', rawMeasure: '2, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Seared duck with orange and star anise',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Score the duck skin in a cross-hatch and season well. Lay skin-side down in a cold frying pan and bring up to a medium heat. Render for 8–10 minutes until the skin is deep gold and crisp, then turn.\n' +
      '2. Cook flesh-side for 4 minutes for a pink centre, then rest for 5 minutes.\n' +
      '3. Pour off most of the duck fat, add the orange juice, star anise, soy sauce and a splash of water to the pan. Bubble for 2 minutes to make a quick sauce.\n' +
      '4. Slice the duck and serve with the sauce and wilted pak choy.',
    rawLines: [
      { rawName: 'Duck', rawMeasure: '2 breasts' },
      { rawName: 'Orange', rawMeasure: 'juice of 1 (use sparingly)' },
      { rawName: 'Star anise', rawMeasure: '2' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Pak choy', rawMeasure: '2, halved, to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Turkish lamb stew with aubergine',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Toss the aubergine cubes with a little salt and leave for 10 minutes, then pat dry. Fry in olive oil until golden; set aside.\n' +
      '2. In the same pan, brown the diced lamb in batches. Lift out. Soften the onion and peppers for 5 minutes.\n' +
      '3. Add the garlic, cinnamon, cumin and tomato purée, cook for a minute, then return the lamb with the chopped tomatoes. Season.\n' +
      '4. Simmer covered for 45 minutes, stir in the aubergine and cook uncovered for a further 15 minutes until the sauce is thick. Scatter with parsley.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '600g, diced' },
      { rawName: 'Aubergine', rawMeasure: '1 large, cubed' },
      { rawName: 'Onion', rawMeasure: '1, sliced' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1, sliced' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, crushed' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Crispy skin sea bass with fennel slaw',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian', 'Dairy-free'],
    instructions:
      '1. Pat the sea bass fillets very dry and score the skin three times. Season the flesh side.\n' +
      '2. Heat the olive oil in a non-stick pan over a high heat and lay the fish skin-side down. Press gently with a fish slice and cook for 4–5 minutes until the skin is crisp. Flip and cook for 1 minute.\n' +
      '3. Thinly shave the fennel and toss with the red onion, lemon juice, olive oil and chopped parsley; season.\n' +
      '4. Serve the fish on the fennel slaw with lemon wedges.',
    rawLines: [
      { rawName: 'Sea bass fillet', rawMeasure: '2, skin on' },
      { rawName: 'Fennel', rawMeasure: '1 bulb, thinly shaved' },
      { rawName: 'Red onion', rawMeasure: '1/4, thinly sliced' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1, juice and wedges' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Keto butter chicken',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Keto', 'Low-carb'],
    instructions:
      '1. Marinate the chicken in the yoghurt, garam masala, cumin and half the garlic for 20 minutes. Fry in a little butter until charred; set aside.\n' +
      '2. Melt the remaining butter in a pan and cook the onion until soft and golden. Add the rest of the garlic and ginger, turmeric, chilli powder and tomato purée.\n' +
      '3. Pour in the passata and double cream, season and simmer for 10 minutes.\n' +
      '4. Return the chicken and simmer for a further 10 minutes until cooked through. Serve over cauliflower rice with fresh coriander.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g, diced' },
      { rawName: 'Natural yoghurt', rawMeasure: '100g' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Onion', rawMeasure: '1, finely diced' },
      { rawName: 'Passata', rawMeasure: '200g' },
      { rawName: 'Double cream', rawMeasure: '150ml' },
      { rawName: 'Garlic', rawMeasure: '4 cloves, crushed' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Coriander', rawMeasure: 'handful, to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Beef and pepper stir-fry with black bean sauce',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Slice the beef thinly against the grain and toss with a tablespoon of soy sauce and a pinch of pepper.\n' +
      '2. Heat the sesame oil in a wok until smoking and stir-fry the beef in batches for 2 minutes. Lift out.\n' +
      '3. Add the peppers and garlic to the wok and toss for 3 minutes. Pour in the black bean sauce, remaining soy and a splash of water.\n' +
      '4. Return the beef, toss everything together for a minute and scatter with spring onion. Serve with cauliflower rice.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '500g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2, sliced' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, sliced' },
      { rawName: 'Black bean sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2, sliced' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Salmon en papillote with asparagus and dill',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Lay each salmon fillet on a large sheet of baking paper and arrange the asparagus around it.\n' +
      '2. Dot the butter over the fish, scatter with dill, lemon zest and a squeeze of lemon juice. Season well.\n' +
      '3. Fold the paper over and scrunch the edges to seal into parcels. Place on a baking tray.\n' +
      '4. Bake for 15–18 minutes until the fish is just cooked through. Open the parcels at the table.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Asparagus', rawMeasure: '200g' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Dill', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: 'zest and juice of 1/2' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spicy minced pork lettuce wraps',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Heat the oil in a wok and fry the minced pork over a high heat, breaking it up, until well browned.\n' +
      '2. Add the garlic, ginger, lemongrass and chilli and fry for 2 minutes.\n' +
      '3. Stir in the fish sauce, lime juice and sesame oil and remove from the heat. Fold in the coriander and mint.\n' +
      '4. Spoon the pork into cold, crisp lettuce leaves and top with sliced spring onion and crushed toasted peanuts.',
    rawLines: [
      { rawName: 'Minced pork', rawMeasure: '500g' },
      { rawName: 'Lettuce', rawMeasure: '2 baby gem, leaves separated' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, crushed' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Lemongrass', rawMeasure: '1 stalk, finely sliced' },
      { rawName: 'Chilli', rawMeasure: '1, sliced' },
      { rawName: 'Fish sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: 'juice of 1' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Spring onion', rawMeasure: '2, sliced' },
      { rawName: 'Peanuts', rawMeasure: '30g, toasted and crushed' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Meatza (meat-base pizza)',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['Keto', 'Low-carb'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Mix the minced beef with the egg, garlic, oregano, Parmesan and seasoning. Press into a thin round on a lined baking tray.\n' +
      '2. Bake for 15 minutes until set and beginning to brown. Carefully pour off any excess fat.\n' +
      '3. Spread with passata, scatter over the sliced pepper, mushrooms and torn mozzarella.\n' +
      '4. Return to the oven for 10 minutes until the cheese is melted and golden. Serve cut into wedges.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Parmesan', rawMeasure: '30g, grated' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Oregano', rawMeasure: '1 tsp' },
      { rawName: 'Passata', rawMeasure: '100g' },
      { rawName: 'Mozzarella', rawMeasure: '1 ball, torn' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1/2, sliced' },
      { rawName: 'Mushroom', rawMeasure: '80g, sliced' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Lamb keema with spinach',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Fry the onion in the oil until golden, then add the garlic, ginger and whole spices. Cook for a minute.\n' +
      '2. Add the lamb mince, breaking it up, and brown well all over. Stir in the ground spices, tomato purée and chopped tomatoes.\n' +
      '3. Simmer for 15 minutes until thick and fragrant. Stir in the spinach a handful at a time until wilted.\n' +
      '4. Season, scatter with coriander and serve over cauliflower rice.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1, finely diced' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, crushed' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 tsp ground' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: 'handful of leaves' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Side dishes ──────────────────────────────────────────────────────────────
  {
    title: 'Roasted courgettes with Parmesan',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Halve the courgettes lengthways and score the flesh lightly.\n' +
      '2. Drizzle with olive oil, season and lay cut-side up on a roasting tray. Scatter generously with grated Parmesan.\n' +
      '3. Roast for 18–20 minutes until the courgettes are tender and the Parmesan is golden and crunchy.\n' +
      '4. Finish with a squeeze of lemon and a few torn basil leaves.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '4' },
      { rawName: 'Parmesan', rawMeasure: '60g, grated' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/4' },
      { rawName: 'Basil', rawMeasure: 'handful' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Garlic roasted tenderstem broccoli',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegan'],
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Spread the tenderstem broccoli on a large roasting tray.\n' +
      '2. Scatter over the sliced garlic and chilli flakes, drizzle generously with olive oil and toss to coat. Season well.\n' +
      '3. Roast for 12–15 minutes until the stems are tender and the florets have caught some colour and crisped.\n' +
      '4. Squeeze over a little lemon and serve immediately.',
    rawLines: [
      { rawName: 'Tenderstem broccoli', rawMeasure: '400g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, thinly sliced' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/4' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Buttered kale with garlic and chilli',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Strip the kale leaves from their stems and tear into pieces. Wash and shake off the excess water.\n' +
      '2. Melt the butter in a wide pan over a medium heat and add the garlic and chilli flakes. Cook for 30 seconds until fragrant.\n' +
      '3. Add the kale with any water clinging to it, toss well, cover and steam for 4–5 minutes until just tender.\n' +
      '4. Season with salt and a squeeze of lemon. Serve as a side with any grilled meat or fish.',
    rawLines: [
      { rawName: 'Kale', rawMeasure: '400g' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, sliced' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/4' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Warm spinach and bacon salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'French',
    dietLabels: ['Keto', 'Low-carb'],
    instructions:
      '1. Fry the bacon lardons in a dry pan until crisp and golden. Lift out, leaving the fat in the pan.\n' +
      '2. Add the sliced shallot to the pan and cook for 2 minutes until softened.\n' +
      '3. Splash in the red wine vinegar — it will sizzle — then stir in the Dijon mustard and a good grind of pepper.\n' +
      '4. Pile the spinach leaves into a bowl, pour over the warm dressing, scatter the bacon on top and serve immediately.',
    rawLines: [
      { rawName: 'Spinach', rawMeasure: '200g, baby leaves' },
      { rawName: 'Bacon', rawMeasure: '150g lardons' },
      { rawName: 'Shallot', rawMeasure: '2, sliced' },
      { rawName: 'Red wine vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Dijon mustard', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted peppers with anchovies and olives',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve and deseed the peppers and place cut-side up in a roasting tin.\n' +
      '2. Drizzle with olive oil, lay an anchovy fillet inside each half and scatter in the olives and garlic slivers. Season.\n' +
      '3. Roast for 25–30 minutes until the peppers are soft and slightly charred at the edges.\n' +
      '4. Scatter with basil and a drizzle of extra olive oil to serve.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4, mixed colours' },
      { rawName: 'Anchovy fillets', rawMeasure: '8' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, thinly sliced' },
      { rawName: 'Basil', rawMeasure: 'handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Fried cabbage with caraway',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Quarter the cabbage, remove the core and shred finely.\n' +
      '2. Melt the butter in a large frying pan or wok over a medium-high heat.\n' +
      '3. Add the cabbage and caraway seeds with a good pinch of salt. Fry, tossing frequently, for 6–8 minutes until the cabbage is wilted and some edges have caught and crisped.\n' +
      '4. Season with black pepper and a splash of cider vinegar to finish.',
    rawLines: [
      { rawName: 'Cabbage', rawMeasure: '1/2, shredded' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Caraway seeds', rawMeasure: '1 tsp' },
      { rawName: 'Cider vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted cherry tomatoes with basil oil',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb', 'Vegan'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Tip the cherry tomatoes into a roasting tin, drizzle with olive oil and season generously.\n' +
      '2. Scatter over the garlic slivers and fresh thyme.\n' +
      '3. Roast for 20–25 minutes until the skins have split and the tomatoes are soft and slightly jammy.\n' +
      '4. Drizzle with a little extra-virgin olive oil, scatter with fresh basil and serve.',
    rawLines: [
      { rawName: 'Cherry tomato', rawMeasure: '500g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, sliced' },
      { rawName: 'Thyme', rawMeasure: '4 sprigs' },
      { rawName: 'Basil', rawMeasure: 'handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Snacks ───────────────────────────────────────────────────────────────────
  {
    title: 'Prosciutto and mozzarella roll-ups',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb'],
    instructions:
      '1. Tear the mozzarella into bite-sized pieces and pat dry.\n' +
      '2. Lay a slice of prosciutto flat and place a piece of mozzarella and a basil leaf at one end.\n' +
      '3. Roll up firmly and secure with a cocktail stick if needed.\n' +
      '4. Arrange on a board, drizzle with a little olive oil and a grind of black pepper to serve.',
    rawLines: [
      { rawName: 'Prosciutto', rawMeasure: '100g (about 8 slices)' },
      { rawName: 'Mozzarella', rawMeasure: '1 ball' },
      { rawName: 'Basil', rawMeasure: '8 leaves' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Celery sticks with almond butter',
    servingsBase: 2,
    totalTimeMinutes: 5,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegan'],
    instructions:
      '1. Trim the celery sticks and cut into 10cm lengths.\n' +
      '2. Spoon the almond butter into a small dipping bowl.\n' +
      '3. Arrange the celery alongside.\n' +
      '4. Serve as a quick keto snack — the fat and fibre combination is very satisfying.',
    rawLines: [
      { rawName: 'Celery', rawMeasure: '6 sticks' },
      { rawName: 'Almond butter', rawMeasure: '4 tbsp' },
    ],
  },
  {
    title: 'Crispy baked Parma ham',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C) and line a tray with baking paper.\n' +
      '2. Lay the Parma ham slices flat on the tray in a single layer, making sure they do not overlap.\n' +
      '3. Bake for 8–10 minutes until deep red, shrunken and crisp all over. They crisp further as they cool.\n' +
      '4. Serve as a chip-like snack or crumble over salads. Store in an airtight tin for up to 2 days.',
    rawLines: [
      { rawName: 'Prosciutto', rawMeasure: '100g Parma ham' },
    ],
  },
  {
    title: 'Spiced nuts',
    servingsBase: 8,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegan'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Toss the mixed nuts with the olive oil, cumin, smoked paprika, cayenne and salt.\n' +
      '2. Spread on a lined tray in a single layer.\n' +
      '3. Roast for 12–15 minutes, stirring once, until deep golden and fragrant. Take care as they catch quickly.\n' +
      '4. Cool completely before storing in an airtight jar for up to 2 weeks.',
    rawLines: [
      { rawName: 'Mixed nuts', rawMeasure: '300g (almonds, walnuts, pecans)' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cayenne pepper', rawMeasure: '1/4 tsp' },
      { rawName: 'Salt', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Cheese and chive egg muffins',
    servingsBase: 6,
    totalTimeMinutes: 30,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and grease a 12-hole muffin tin generously.\n' +
      '2. Beat the eggs with the double cream, chives, most of the Cheddar and a good pinch of salt and pepper.\n' +
      '3. Pour the mixture evenly into the muffin holes, filling each about two-thirds full. Scatter the remaining cheese on top.\n' +
      '4. Bake for 18–20 minutes until set and puffed. Cool for 5 minutes before removing. Eat warm or cold.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g, grated' },
      { rawName: 'Double cream', rawMeasure: '4 tbsp' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, snipped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Marinated olives with herbs and lemon',
    servingsBase: 6,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Mediterranean',
    dietLabels: ['Keto', 'Low-carb', 'Vegan'],
    instructions:
      '1. Drain the olives and tip into a bowl.\n' +
      '2. Add the olive oil, lemon zest, crushed garlic, thyme leaves, chilli flakes and a grind of black pepper.\n' +
      '3. Toss well to coat and leave to marinate at room temperature for at least 30 minutes before serving.\n' +
      '4. Serve with cocktail sticks. Refrigerate any leftovers in the oil for up to a week.',
    rawLines: [
      { rawName: 'Olives', rawMeasure: '300g, mixed' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Lemon', rawMeasure: 'zest of 1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs, leaves stripped' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pepperoni and cheese cracker stacks',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'American',
    dietLabels: ['Keto', 'Low-carb'],
    instructions:
      '1. Arrange the Parmesan crisps (or use shop-bought cheese crisps) on a board.\n' +
      '2. Top each crisp with a slice of pepperoni.\n' +
      '3. Add a small cube of cream cheese or a thin sliver of Cheddar.\n' +
      '4. Finish with a sliver of pickled green pepper or a grind of black pepper to serve.',
    rawLines: [
      { rawName: 'Parmesan', rawMeasure: '80g, grated (for crisps)' },
      { rawName: 'Pepperoni', rawMeasure: '60g, sliced' },
      { rawName: 'Cream cheese', rawMeasure: '50g' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Desserts ─────────────────────────────────────────────────────────────────
  {
    title: 'Keto lemon posset',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Pour the double cream into a saucepan and add the lemon zest. Bring slowly to a full boil, stirring, then boil for 3 minutes exactly.\n' +
      '2. Remove from the heat and stir in the lemon juice. Add a low-carb sweetener to taste.\n' +
      '3. Pour into four small glasses or ramekins and cool to room temperature.\n' +
      '4. Refrigerate for at least 2 hours until set to a silky, just-trembling consistency. Serve with a tiny scattering of lemon zest.',
    rawLines: [
      { rawName: 'Double cream', rawMeasure: '600ml' },
      { rawName: 'Lemon', rawMeasure: 'zest of 2 and juice of 2' },
    ],
  },
  {
    title: 'Almond flour brownies',
    servingsBase: 12,
    totalTimeMinutes: 40,
    course: 'Dessert',
    cuisine: 'American',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C) and line a 20cm square tin. Gently melt the dark chocolate (85% cocoa) with the butter, then cool slightly.\n' +
      '2. Beat in the eggs one at a time, then stir in the ground almonds, cocoa powder, vanilla extract and a low-carb sweetener to taste.\n' +
      '3. Pour into the prepared tin and bake for 20–22 minutes — the centre should still have a slight wobble.\n' +
      '4. Cool completely in the tin before cutting into squares. They firm up on cooling.',
    rawLines: [
      { rawName: 'Dark chocolate', rawMeasure: '100g (85% cocoa)' },
      { rawName: 'Butter', rawMeasure: '80g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Almonds', rawMeasure: '100g ground' },
      { rawName: 'Cocoa powder', rawMeasure: '2 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Coconut panna cotta with raspberries',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Soak the gelatine leaves in cold water for 5 minutes.\n' +
      '2. Warm the coconut milk and double cream together with the vanilla until just below a simmer. Squeeze the gelatine dry and stir into the warm cream until dissolved.\n' +
      '3. Add a low-carb sweetener to taste. Pour into four lightly oiled ramekins and refrigerate for at least 4 hours until set.\n' +
      '4. Unmould onto plates and serve with a few fresh raspberries scattered around.',
    rawLines: [
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Double cream', rawMeasure: '300ml' },
      { rawName: 'Gelatine', rawMeasure: '3 leaves' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Raspberries', rawMeasure: '60g, to serve' },
    ],
  },
  {
    title: 'Keto cheesecake cups',
    servingsBase: 6,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'American',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Mix the ground almonds with the melted butter and a pinch of salt to form a damp crumb. Press a tablespoon of the mixture into the base of six small glasses or cups.\n' +
      '2. Beat the cream cheese with the double cream, vanilla and lemon juice until smooth and thick. Add a low-carb sweetener to taste.\n' +
      '3. Spoon the cream cheese mixture over the almond base.\n' +
      '4. Chill for at least 1 hour. Top with a few fresh raspberries or strawberry slices before serving.',
    rawLines: [
      { rawName: 'Cream cheese', rawMeasure: '250g' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Almonds', rawMeasure: '100g ground' },
      { rawName: 'Butter', rawMeasure: '40g, melted' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Raspberries', rawMeasure: 'handful, to serve' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Dark chocolate bark with almonds and sea salt',
    servingsBase: 8,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegan'],
    instructions:
      '1. Melt the dark chocolate (85% cocoa) gently over a bain-marie until smooth. Do not overheat.\n' +
      '2. Pour onto a tray lined with baking paper and spread to a rough rectangle about 5mm thick.\n' +
      '3. Scatter the toasted flaked almonds, pumpkin seeds and a generous pinch of flaky sea salt over the surface.\n' +
      '4. Leave to set at room temperature for 1 hour, or refrigerate for 20 minutes, then snap into shards.',
    rawLines: [
      { rawName: 'Dark chocolate', rawMeasure: '200g (85% cocoa)' },
      { rawName: 'Almonds', rawMeasure: '30g flaked, toasted' },
      { rawName: 'Pumpkin seeds', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: '1 tsp flaky sea salt' },
    ],
  },
  {
    title: 'Whipped ricotta with berries',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Tip the ricotta into a bowl and beat with a wooden spoon or electric whisk until smooth and fluffy.\n' +
      '2. Stir in the vanilla extract and lemon zest.\n' +
      '3. Add a low-carb sweetener to taste — the result should be lightly sweet and fragrant.\n' +
      '4. Spoon into four glasses and top with a small handful of mixed berries and a light dusting of cocoa powder.',
    rawLines: [
      { rawName: 'Ricotta', rawMeasure: '400g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: 'zest of 1/2' },
      { rawName: 'Strawberries', rawMeasure: '100g mixed berries, to serve' },
      { rawName: 'Cocoa powder', rawMeasure: '1 tsp, to dust' },
    ],
  },
  {
    title: 'Chia seed pudding with coconut',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegan'],
    instructions:
      '1. Whisk the chia seeds into the coconut milk with the vanilla extract and a low-carb sweetener to taste.\n' +
      '2. Leave to stand for 10 minutes, then stir again to break up any clumps.\n' +
      '3. Cover and refrigerate for at least 4 hours or overnight until set to a thick pudding consistency.\n' +
      '4. Spoon into bowls and top with toasted desiccated coconut and a few fresh raspberries.',
    rawLines: [
      { rawName: 'Chia seeds', rawMeasure: '4 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '300ml' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
      { rawName: 'Desiccated coconut', rawMeasure: '2 tbsp, toasted' },
      { rawName: 'Raspberries', rawMeasure: 'handful, to serve' },
    ],
  },

  // ── Additional varied recipes ─────────────────────────────────────────────────
  {
    title: 'Shakshuka with feta',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'Middle Eastern',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Warm the olive oil in a large, deep frying pan and soften the onion and pepper for 6–8 minutes.\n' +
      '2. Add the garlic, cumin, paprika and chilli flakes and fry for a minute. Stir in the chopped tomatoes and season.\n' +
      '3. Simmer for 10 minutes until the sauce is thick, then crumble in most of the feta.\n' +
      '4. Make wells in the sauce and crack in the eggs. Cover and cook for 6–8 minutes until the whites are set. Crumble over the remaining feta and scatter with parsley.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Feta', rawMeasure: '120g' },
      { rawName: 'Onion', rawMeasure: '1, diced' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1, diced' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Griddled courgette with goat\'s cheese and mint',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Slice the courgettes lengthways into 5mm planks. Brush both sides with olive oil and season.\n' +
      '2. Griddle in batches over a high heat for 2–3 minutes each side until charred and just tender.\n' +
      '3. Arrange on a platter and crumble the goat\'s cheese over while the courgette is still warm.\n' +
      '4. Scatter with fresh mint, drizzle with a little more olive oil and a squeeze of lemon. Serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '4' },
      { rawName: 'Goat\'s cheese', rawMeasure: '150g' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken liver pâté',
    servingsBase: 6,
    totalTimeMinutes: 25,
    course: 'Snack',
    cuisine: 'French',
    dietLabels: ['Keto', 'Low-carb'],
    instructions:
      '1. Fry the shallot and garlic in half the butter until soft, about 5 minutes.\n' +
      '2. Add the chicken livers and fry over a medium-high heat for 4–5 minutes, keeping them a little pink in the centre.\n' +
      '3. Pour in the brandy and let it bubble for a minute, then tip everything into a blender with the remaining butter, the thyme leaves and seasoning. Blend until very smooth.\n' +
      '4. Pass through a sieve, pour into ramekins and seal with melted butter. Chill for at least 2 hours. Serve with cucumber and celery spears.',
    rawLines: [
      { rawName: 'Chicken livers', rawMeasure: '300g, trimmed' },
      { rawName: 'Butter', rawMeasure: '150g' },
      { rawName: 'Shallot', rawMeasure: '2, sliced' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs, leaves only' },
      { rawName: 'Brandy', rawMeasure: '2 tbsp' },
      { rawName: 'Cucumber', rawMeasure: '1/2, to serve' },
      { rawName: 'Celery', rawMeasure: '2 sticks, to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pan-fried hake with salsa verde',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian', 'Dairy-free'],
    instructions:
      '1. For the salsa verde, blitz the parsley, mint, capers, anchovy, garlic, Dijon mustard and olive oil together until roughly combined but not too smooth. Season.\n' +
      '2. Pat the hake fillets dry, season the skin and fry skin-side down in the olive oil over a medium-high heat for 4–5 minutes until crisp. Flip and cook for 2 minutes.\n' +
      '3. Rest the fish for a minute, then transfer to plates.\n' +
      '4. Spoon the salsa verde generously over and serve with a simple green salad.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2 hake fillets' },
      { rawName: 'Parsley', rawMeasure: '30g' },
      { rawName: 'Mint', rawMeasure: '15g' },
      { rawName: 'Capers', rawMeasure: '2 tbsp' },
      { rawName: 'Anchovy fillets', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Dijon mustard', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '6 tbsp (4 for salsa)' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Vegetable Thai green curry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Keto', 'Low-carb', 'Vegan'],
    instructions:
      '1. Warm the coconut oil in a wok and fry the green curry paste for 2 minutes until fragrant.\n' +
      '2. Pour in the coconut milk, add the soy sauce and bring to a gentle simmer.\n' +
      '3. Add the courgette, broccoli, pepper and aubergine. Simmer for 8–10 minutes until the vegetables are just tender.\n' +
      '4. Stir in the lime juice and torn basil. Serve with cauliflower rice.',
    rawLines: [
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Green curry paste', rawMeasure: '2 tbsp' },
      { rawName: 'Courgette', rawMeasure: '1, sliced' },
      { rawName: 'Broccoli', rawMeasure: '1/2 head, in florets' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1, sliced' },
      { rawName: 'Aubergine', rawMeasure: '1/2, cubed' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: 'juice of 1' },
      { rawName: 'Basil', rawMeasure: 'handful of Thai basil' },
      { rawName: 'Coconut oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Steak tartare',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Use the freshest beef fillet you can find. Finely chop or mince the beef by hand and chill until needed.\n' +
      '2. Mix together the Dijon mustard, Worcestershire sauce, Tabasco, chopped shallot, capers and gherkins. Fold gently through the beef.\n' +
      '3. Season carefully with salt and pepper and fold in most of the chives.\n' +
      '4. Shape into two neat rounds on chilled plates, make a small hollow in the top and set a raw egg yolk in each. Scatter with the remaining chives and serve immediately with celery sticks.',
    rawLines: [
      { rawName: 'Beef fillet', rawMeasure: '250g, very fresh' },
      { rawName: 'Egg', rawMeasure: '2 yolks' },
      { rawName: 'Shallot', rawMeasure: '1, finely chopped' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Gherkins', rawMeasure: '2, finely chopped' },
      { rawName: 'Dijon mustard', rawMeasure: '1 tsp' },
      { rawName: 'Worcestershire sauce', rawMeasure: '1 tsp' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, snipped' },
      { rawName: 'Celery', rawMeasure: '2 sticks, to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked Camembert with garlic and rosemary',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'French',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Unwrap the Camembert and score the top in a cross-hatch pattern.\n' +
      '2. Push slivers of garlic and small sprigs of rosemary into the cuts. Drizzle with a little olive oil.\n' +
      '3. Wrap the cheese box loosely in foil and bake for 12–15 minutes until the cheese is completely molten inside.\n' +
      '4. Uncover and serve immediately with celery sticks, cucumber batons and chicory leaves for dipping.',
    rawLines: [
      { rawName: 'Camembert', rawMeasure: '1 (250g)' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, slivered' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Celery', rawMeasure: '3 sticks, to serve' },
      { rawName: 'Cucumber', rawMeasure: '1/2, cut into batons' },
    ],
  },
  {
    title: 'Mushroom and thyme soup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Vegetarian'],
    instructions:
      '1. Melt the butter in a large saucepan and fry the onion over a medium heat for 5 minutes until soft.\n' +
      '2. Add the mushrooms and thyme and cook over a high heat for 8–10 minutes until the mushrooms are deep golden and any liquid has evaporated.\n' +
      '3. Stir in the garlic, then pour in the stock and simmer for 10 minutes. Remove the thyme sprigs.\n' +
      '4. Blend until smooth, stir in the double cream and season well. Serve with a swirl of cream and a few reserved sautéed mushrooms.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '600g, mixed' },
      { rawName: 'Onion', rawMeasure: '1, diced' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Thyme', rawMeasure: '5 sprigs' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Double cream', rawMeasure: '100ml, plus extra to serve' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Poached chicken with green herb sauce',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Keto', 'Low-carb', 'Dairy-free'],
    instructions:
      '1. Place the chicken breasts in a pan and cover with cold water. Add the peppercorns, bay leaf, half the garlic and a good pinch of salt.\n' +
      '2. Bring slowly to a bare simmer, cover and poach for 18–20 minutes until just cooked through. Rest in the liquid.\n' +
      '3. While the chicken poaches, blitz the parsley, tarragon, basil, remaining garlic, Dijon mustard, lemon juice and olive oil to a vivid green sauce. Season.\n' +
      '4. Slice the chicken and arrange on plates. Spoon the herb sauce over and serve with a green salad.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '4' },
      { rawName: 'Parsley', rawMeasure: '30g' },
      { rawName: 'Tarragon', rawMeasure: '15g' },
      { rawName: 'Basil', rawMeasure: '15g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Dijon mustard', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Olive oil', rawMeasure: '6 tbsp' },
      { rawName: 'Bay leaves', rawMeasure: '1' },
      { rawName: 'Black peppercorns', rawMeasure: '6' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and courgette linguine (courgetti)',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Keto', 'Low-carb', 'Pescatarian'],
    instructions:
      '1. Spiralise or peel the courgettes into long noodles. Lay on kitchen paper to absorb excess moisture.\n' +
      '2. Warm the olive oil and butter in a pan, add the garlic and chilli flakes and cook for 30 seconds.\n' +
      '3. Add the prawns and fry for 2–3 minutes until pink, then tip in the courgetti and toss for 2 minutes over a high heat.\n' +
      '4. Season, squeeze over the lemon, scatter with parsley and serve straight from the pan.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '3 large' },
      { rawName: 'Prawns', rawMeasure: '300g, peeled' },
      { rawName: 'Garlic', rawMeasure: '3 cloves, sliced' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: 'juice of 1/2' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
]
