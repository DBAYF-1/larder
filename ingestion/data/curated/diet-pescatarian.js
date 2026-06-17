// Curated PESCATARIAN recipes for Larder (per-diet floor seed).
//
// Every record STRICTLY satisfies the Pescatarian diet: NO meat and NO poultry.
// Fish and seafood ARE allowed; many dishes are also meat-free vegetarian-style
// (egg/dairy/veg) which a pescatarian eats freely. Where a dish happens to also
// be gluten-free, dairy-free, etc., that is recorded honestly in healthLabels.
//
// Culinary content ONLY — sources/curated.js (mapCurated) adds source/sourceId/
// imageUrl boilerplate and generates the on-brand SVG placeholder. mapCurated
// reads `dietLabels`; `healthLabels` is carried for honesty and downstream use.
//
// Method prose is original, written fresh in British English; no website wording
// is copied. rawLines use vocabulary from data/ingredients.js so they resolve.
//
// Shape per record:
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     healthLabels, instructions, rawLines:[{rawName, rawMeasure}] }

export default [
  // ── Classic British fish ───────────────────────────────────────────────────
  {
    title: 'Beer-battered cod with chips',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: [],
    instructions:
      '1. Cut the potatoes into thick chips, rinse off the starch and pat dry. Heat the vegetable oil in a deep pan to 150°C and blanch the chips for 6–7 minutes until soft but pale. Lift out and drain.\n' +
      '2. Whisk the plain flour with a pinch of salt, then beat in enough cold beer to make a thick, smooth batter the texture of double cream.\n' +
      '3. Bring the oil up to 190°C. Dust the white fish fillets lightly in flour, dip into the batter and lower carefully into the oil. Fry for 5–6 minutes until deep gold and crisp, turning once.\n' +
      '4. Return the chips to the hot oil for a final 2–3 minutes until golden, then drain on kitchen paper and season with salt.\n' +
      '5. Serve the fish and chips with peas and lemon wedges.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4 (about 600g)' },
      { rawName: 'Potato', rawMeasure: '1kg' },
      { rawName: 'Plain flour', rawMeasure: '200g' },
      { rawName: 'Beer', rawMeasure: '300ml' },
      { rawName: 'Peas', rawMeasure: '200g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 litres, for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Classic fish pie',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: [],
    instructions:
      '1. Boil the potatoes in salted water until tender, drain well and mash with the butter and a splash of the milk; season and set aside.\n' +
      '2. Poach the white fish and smoked haddock gently in the remaining milk for 5 minutes, then lift out, flake into large pieces and reserve the milk.\n' +
      '3. Melt a knob of butter in a pan, stir in the plain flour and cook for a minute, then gradually whisk in the poaching milk to make a smooth sauce. Stir in the parsley.\n' +
      '4. Fold the flaked fish, prawns and quartered eggs into the sauce and tip into a baking dish.\n' +
      '5. Spoon the mash over the top, fork the surface and bake at 200°C (fan 180°C) for 25–30 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '300g' },
      { rawName: 'Smoked haddock', rawMeasure: '300g' },
      { rawName: 'Prawns', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '3, hard-boiled' },
      { rawName: 'Potato', rawMeasure: '900g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Butter', rawMeasure: '60g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked haddock kedgeree',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Poach the smoked haddock in just enough milk to cover for 5 minutes, then lift out, flake and discard the skin.\n' +
      '2. Soften the onion in the butter, stir in the curry powder and turmeric and cook for a minute until fragrant.\n' +
      '3. Add the basmati rice, coat in the spiced butter, then pour in the stock. Cover and simmer gently for 12 minutes until the rice is tender and the liquid absorbed.\n' +
      '4. Gently fork through the flaked haddock and quartered hard-boiled eggs, warming through for a couple of minutes.\n' +
      '5. Scatter with coriander and serve with lemon wedges.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '400g' },
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Egg', rawMeasure: '4, hard-boiled' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Curry powder', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Milk', rawMeasure: '200ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
    ],
  },
  {
    title: 'Fishcakes with parsley and lemon',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: [],
    instructions:
      '1. Boil the potatoes until tender, drain very well and mash dry; leave to cool a little.\n' +
      '2. Poach the white fish in a little milk for 5 minutes, flake and fold into the mash with the parsley, lemon zest and plenty of seasoning.\n' +
      '3. Shape into eight patties and chill for 15 minutes to firm up.\n' +
      '4. Dip each cake in beaten egg, then coat in breadcrumbs.\n' +
      '5. Fry in a little vegetable oil over a medium heat for 3–4 minutes a side until golden and hot through. Serve with lemon wedges.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '500g' },
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Breadcrumbs', rawMeasure: '100g' },
      { rawName: 'Parsley', rawMeasure: '4 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Grilled mackerel with mustard butter',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the grill to high. Slash the mackerel skin a few times, brush with olive oil and season well.\n' +
      '2. Grill the fish for 4–5 minutes a side until the skin blisters and the flesh is just cooked through.\n' +
      '3. Meanwhile beat the softened butter with the mustard, lemon juice and chopped chives.\n' +
      '4. Sit the hot mackerel on warm plates and top each with a spoon of the mustard butter so it melts down.\n' +
      '5. Serve with new potatoes and a green salad.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '2 whole, gutted' },
      { rawName: 'Butter', rawMeasure: '50g, softened' },
      { rawName: 'Mustard', rawMeasure: '1 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'New potatoes', rawMeasure: '400g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Cullen skink (smoked haddock soup)',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Soften the chopped onion and leek in the butter without colouring for 8 minutes.\n' +
      '2. Add the diced potatoes and the milk, bring to a gentle simmer and cook for 12–15 minutes until the potatoes are tender.\n' +
      '3. Lay the smoked haddock on top, cover and poach for 5 minutes, then lift out, flake and return the fish to the pan.\n' +
      '4. Lightly crush some of the potatoes against the side of the pan to thicken, then stir in the double cream and warm through.\n' +
      '5. Season, scatter with chopped chives and serve with crusty bread.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '400g' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Leek', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Milk', rawMeasure: '600ml' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Potted shrimp on toast',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: [],
    instructions:
      '1. Melt the butter gently and skim off any foam. Stir in a pinch of cayenne-style chilli powder, a grate of nutmeg-like spice and a squeeze of lemon.\n' +
      '2. Warm the prawns through in the spiced butter for a minute, without boiling.\n' +
      '3. Divide between four small pots, pour over enough clarified butter to cover and chill until set.\n' +
      '4. Toast thick slices of bread until golden.\n' +
      '5. Bring the potted shrimp back to cool room temperature and serve with the hot toast and lemon wedges.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '300g, cooked and peeled' },
      { rawName: 'Butter', rawMeasure: '200g' },
      { rawName: 'Chilli powder', rawMeasure: '1 pinch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Bread', rawMeasure: '4 thick slices' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Kipper pâté',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Cook the herring fillets gently in a little water for 4 minutes, then drain, cool and remove any skin and bones.\n' +
      '2. Flake the fish into a bowl and beat in the cream cheese and softened butter until almost smooth.\n' +
      '3. Season with lemon juice, black pepper and a little chopped chives.\n' +
      '4. Pack into a serving dish and chill for at least an hour to firm up.\n' +
      '5. Serve spread on toast or oatcakes with extra lemon.',
    rawLines: [
      { rawName: 'Herring', rawMeasure: '300g fillets' },
      { rawName: 'Cream cheese', rawMeasure: '150g' },
      { rawName: 'Butter', rawMeasure: '50g, softened' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Salmon en croûte',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: [],
    instructions:
      '1. Wilt the spinach in a dry pan, squeeze out all the liquid, then chop and mix with the cream cheese, lemon zest and seasoning.\n' +
      '2. Roll out the puff pastry and lay one salmon fillet in the centre. Spread the spinach mixture over, then top with the second fillet.\n' +
      '3. Brush the pastry borders with beaten egg, fold up to enclose the fish and seal the edges well. Score the top lightly.\n' +
      '4. Brush all over with more egg and chill for 15 minutes.\n' +
      '5. Bake at 200°C (fan 180°C) for 30–35 minutes until deep gold and puffed. Rest 5 minutes before slicing.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2 large (about 600g)' },
      { rawName: 'Puff pastry', rawMeasure: '500g' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Cream cheese', rawMeasure: '150g' },
      { rawName: 'Egg', rawMeasure: '1, beaten' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roast salmon with dill and new potatoes',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Boil the new potatoes in salted water until just tender, then drain.\n' +
      '2. Sit the salmon fillets on a lined tray, drizzle with olive oil, season and scatter with half the dill and lemon slices.\n' +
      '3. Roast at 200°C (fan 180°C) for 12–14 minutes until the salmon flakes easily.\n' +
      '4. Toss the warm potatoes with olive oil, the remaining dill and a squeeze of lemon.\n' +
      '5. Serve the salmon on the dilled potatoes with a green salad.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4' },
      { rawName: 'New potatoes', rawMeasure: '700g' },
      { rawName: 'Dill', rawMeasure: '4 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
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
    healthLabels: [],
    instructions:
      '1. Cook the pasta in boiling salted water until just shy of al dente, then drain.\n' +
      '2. Melt the butter, stir in the plain flour and cook for a minute, then gradually whisk in the milk to make a smooth sauce. Stir in most of the Cheddar.\n' +
      '3. Fold the drained pasta, flaked tuna, sweetcorn and peas into the sauce and season.\n' +
      '4. Tip into a baking dish, scatter over the remaining cheese and the breadcrumbs.\n' +
      '5. Bake at 200°C (fan 180°C) for 20–25 minutes until golden and bubbling.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '2 tins (about 320g)' },
      { rawName: 'Pasta', rawMeasure: '350g' },
      { rawName: 'Sweetcorn', rawMeasure: '200g' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Cheddar cheese', rawMeasure: '150g' },
      { rawName: 'Milk', rawMeasure: '500ml' },
      { rawName: 'Butter', rawMeasure: '40g' },
      { rawName: 'Plain flour', rawMeasure: '40g' },
      { rawName: 'Breadcrumbs', rawMeasure: '40g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Devilled whitebait-style fried sardines',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: [],
    instructions:
      '1. Pat the sardines dry. Mix the plain flour with the paprika, a little chilli powder and seasoning.\n' +
      '2. Toss the sardines in the seasoned flour until lightly coated, shaking off the excess.\n' +
      '3. Heat the vegetable oil in a deep pan to 190°C and fry the fish in batches for 2–3 minutes until crisp and golden.\n' +
      '4. Drain on kitchen paper and season with a little extra salt.\n' +
      '5. Pile onto a plate and serve with lemon wedges and brown bread.',
    rawLines: [
      { rawName: 'Sardines', rawMeasure: '500g, small' },
      { rawName: 'Plain flour', rawMeasure: '100g' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '1 litre, for frying' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Trout with almonds and brown butter',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Season the trout inside and out. Dust very lightly with plain flour if you like a crisper skin.\n' +
      '2. Fry the trout in a little butter over a medium heat for 4–5 minutes a side until the skin is golden and the flesh just cooked.\n' +
      '3. Lift the fish onto warm plates. Add the remaining butter and the flaked almonds to the pan and cook until the butter turns nut-brown and the almonds are toasted.\n' +
      '4. Squeeze in lemon juice and scatter with parsley.\n' +
      '5. Spoon the almond butter over the trout and serve at once.',
    rawLines: [
      { rawName: 'Trout', rawMeasure: '2 whole, gutted' },
      { rawName: 'Almonds', rawMeasure: '50g, flaked' },
      { rawName: 'Butter', rawMeasure: '80g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Mediterranean & Italian ─────────────────────────────────────────────────
  {
    title: 'Spaghetti alle vongole (clams) with mussels',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Cook the spaghetti in plenty of boiling salted water until al dente.\n' +
      '2. Meanwhile, soften the garlic and chilli in olive oil in a wide pan without browning.\n' +
      '3. Add the cleaned mussels and the white wine, cover and steam for 3–4 minutes until they open. Discard any that stay shut.\n' +
      '4. Drain the pasta and toss into the pan with a splash of its cooking water, the parsley and a final drizzle of olive oil.\n' +
      '5. Season and serve straight away with lemon wedges.',
    rawLines: [
      { rawName: 'Mussels', rawMeasure: '1kg' },
      { rawName: 'Spaghetti', rawMeasure: '350g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'White wine', rawMeasure: '150ml' },
      { rawName: 'Parsley', rawMeasure: '4 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn linguine with chilli and garlic',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Cook the linguine in boiling salted water until al dente.\n' +
      '2. Gently warm the garlic and chilli in the olive oil until fragrant but not coloured.\n' +
      '3. Add the prawns and cook for 2–3 minutes until pink and just cooked through.\n' +
      '4. Drain the pasta, reserving a little water, and toss into the pan with the parsley, lemon juice and enough pasta water to coat.\n' +
      '5. Season and serve immediately.',
    rawLines: [
      { rawName: 'Tiger prawns', rawMeasure: '350g' },
      { rawName: 'Linguine', rawMeasure: '350g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '4 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna and white bean salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Drain and rinse the cannellini beans and tip into a bowl.\n' +
      '2. Add the flaked tuna, thinly sliced red onion and halved cherry tomatoes.\n' +
      '3. Whisk the olive oil with the lemon juice, season well and pour over.\n' +
      '4. Fold through the parsley and let the salad sit for 10 minutes for the flavours to mingle.\n' +
      '5. Serve at room temperature with crusty bread.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '2 tins (about 320g)' },
      { rawName: 'Cannellini beans', rawMeasure: '2 tins (about 480g drained)' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Cherry tomatoes', rawMeasure: '200g' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Sicilian sardine and fennel pasta',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Cook the pasta in boiling salted water until al dente.\n' +
      '2. Soften the sliced fennel and onion in olive oil for 8 minutes until sweet.\n' +
      '3. Stir in the sardines, raisins and toasted pine nuts, breaking up the fish a little.\n' +
      '4. Toss in the drained pasta with a splash of cooking water and the fennel seeds.\n' +
      '5. Season, finish with parsley and serve.',
    rawLines: [
      { rawName: 'Sardines', rawMeasure: '2 tins (about 240g)' },
      { rawName: 'Pasta', rawMeasure: '350g' },
      { rawName: 'Fennel', rawMeasure: '1 bulb' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Raisins', rawMeasure: '40g' },
      { rawName: 'Pine nuts', rawMeasure: '40g' },
      { rawName: 'Fennel seeds', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Seafood risotto',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Heat the fish stock and keep it at a gentle simmer.\n' +
      '2. Soften the onion and garlic in the butter, then stir in the risotto rice for a minute until glossy.\n' +
      '3. Pour in the white wine and let it bubble away, then add the hot stock a ladle at a time, stirring, until the rice is creamy and just tender (about 18 minutes).\n' +
      '4. Stir in the frozen seafood mix for the final 4 minutes until hot through.\n' +
      '5. Season, add a final knob of butter and a squeeze of lemon, and serve scattered with parsley.',
    rawLines: [
      { rawName: 'Frozen seafood mix', rawMeasure: '400g' },
      { rawName: 'Arborio rice', rawMeasure: '300g' },
      { rawName: 'Fish stock', rawMeasure: '1 litre' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'White wine', rawMeasure: '150ml' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked sea bass with tomatoes and olives',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Scatter the cherry tomatoes, sliced garlic and olives in a baking dish, drizzle with olive oil and season.\n' +
      '2. Roast at 200°C (fan 180°C) for 10 minutes until the tomatoes begin to soften.\n' +
      '3. Sit the sea bass fillets on top, drizzle with a little more oil and add lemon slices.\n' +
      '4. Return to the oven for 10–12 minutes until the fish is just cooked.\n' +
      '5. Finish with torn basil and serve with bread to mop up the juices.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '2 fillets' },
      { rawName: 'Cherry tomatoes', rawMeasure: '250g' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: 'a handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Greek-style baked prawns with feta',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Soften the chopped onion and garlic in olive oil, then stir in the chopped tomatoes and a pinch of chilli flakes.\n' +
      '2. Simmer the sauce for 12–15 minutes until thick, then season.\n' +
      '3. Stir the prawns into the sauce and tip into a baking dish.\n' +
      '4. Crumble over the feta and bake at 200°C (fan 180°C) for 12–15 minutes until bubbling and the prawns are pink.\n' +
      '5. Scatter with parsley and serve with crusty bread.',
    rawLines: [
      { rawName: 'Tiger prawns', rawMeasure: '400g' },
      { rawName: 'Feta cheese', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (about 800g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Salt cod and potato gratin (brandade-style)',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Soak the salt cod in cold water for 24 hours, changing the water often, then drain.\n' +
      '2. Poach the cod gently in milk with the garlic for 10 minutes, then flake, discarding any skin and bone.\n' +
      '3. Boil the potatoes until tender, drain and crush roughly.\n' +
      '4. Beat the flaked cod into the potato with olive oil and a little of the poaching milk to a soft, fluffy mash; season.\n' +
      '5. Spread in a dish, drizzle with oil and bake at 200°C (fan 180°C) for 20 minutes until golden. Serve with bread.',
    rawLines: [
      { rawName: 'Salt cod', rawMeasure: '400g' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Milk', rawMeasure: '400ml' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mediterranean tuna stuffed peppers',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Halve the peppers, remove the seeds and sit them cut-side up in a baking dish.\n' +
      '2. Cook the rice until tender and drain. Mix with the flaked tuna, sweetcorn, chopped tomatoes and half the cheese; season.\n' +
      '3. Spoon the filling into the pepper halves and drizzle with olive oil.\n' +
      '4. Cover with foil and bake at 200°C (fan 180°C) for 25 minutes, then uncover, top with the rest of the cheese and bake 10 minutes more.\n' +
      '5. Scatter with parsley and serve.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4' },
      { rawName: 'Tuna', rawMeasure: '2 tins (about 320g)' },
      { rawName: 'Rice', rawMeasure: '150g' },
      { rawName: 'Sweetcorn', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cheddar cheese', rawMeasure: '100g' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  // ── Asian-inspired ──────────────────────────────────────────────────────────
  {
    title: 'Thai green prawn curry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Fry the Thai green curry paste in a little vegetable oil for a minute until fragrant.\n' +
      '2. Pour in the coconut milk and bring to a gentle simmer.\n' +
      '3. Add the sliced peppers and pak choi stems and cook for 4 minutes.\n' +
      '4. Stir in the prawns and the pak choi leaves and simmer for 3–4 minutes until the prawns are pink.\n' +
      '5. Season with fish sauce and lime juice, scatter with coriander and serve with rice.',
    rawLines: [
      { rawName: 'Tiger prawns', rawMeasure: '400g' },
      { rawName: 'Thai green curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g, to serve' },
    ],
  },
  {
    title: 'Thai red salmon curry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Fry the Thai red curry paste in a little oil until fragrant, then pour in the coconut milk.\n' +
      '2. Bring to a gentle simmer and add the green beans; cook for 4 minutes.\n' +
      '3. Lower in the chunks of salmon and poach gently for 5–6 minutes until just cooked, without stirring too hard.\n' +
      '4. Season with fish sauce, a little palm sugar and lime juice.\n' +
      '5. Scatter with coriander and serve with jasmine or basmati rice.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '500g, cubed' },
      { rawName: 'Thai red curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Palm sugar', rawMeasure: '1 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g, to serve' },
    ],
  },
  {
    title: 'Salmon teriyaki with rice',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Mix the soy sauce, honey, grated ginger and a splash of water for the teriyaki glaze.\n' +
      '2. Sear the salmon fillets skin-side down in a little oil for 3 minutes, then turn.\n' +
      '3. Pour the glaze into the pan and let it bubble and thicken, spooning it over the salmon for 3–4 minutes until sticky and just cooked.\n' +
      '4. Steam or boil the rice until tender.\n' +
      '5. Serve the glazed salmon on the rice, scattered with spring onion and sesame seeds.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '150g' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Prawn pad thai',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Soak the rice noodles in warm water until pliable, then drain.\n' +
      '2. Mix the fish sauce, palm sugar, lime juice and a little tamarind-style vinegar for the sauce.\n' +
      '3. Stir-fry the prawns in hot oil for 2 minutes, push to one side and scramble the beaten egg.\n' +
      '4. Add the noodles, bean sprouts and sauce and toss over a high heat until coated and hot.\n' +
      '5. Finish with spring onion, crushed peanuts and a wedge of lime.',
    rawLines: [
      { rawName: 'Tiger prawns', rawMeasure: '250g' },
      { rawName: 'Noodles', rawMeasure: '200g, rice noodles' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Bean sprouts', rawMeasure: '150g' },
      { rawName: 'Fish sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Palm sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Peanuts', rawMeasure: '40g' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Sweet chilli salmon stir-fry',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Cut the salmon into chunks and toss in a little cornflour.\n' +
      '2. Stir-fry the salmon in hot oil for 3–4 minutes until just cooked, then lift out.\n' +
      '3. Stir-fry the broccoli and sliced pepper for 4 minutes until crisp-tender.\n' +
      '4. Return the salmon, add the chilli sauce and soy sauce and toss to coat and glaze.\n' +
      '5. Serve over rice or noodles, scattered with spring onion.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '300g' },
      { rawName: 'Broccoli', rawMeasure: '200g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Chilli sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '150g, to serve' },
    ],
  },
  {
    title: 'Chinese steamed sea bass with ginger and spring onion',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Slash the sea bass fillets and sit them on a heatproof plate. Scatter over half the shredded ginger.\n' +
      '2. Steam over simmering water for 8–10 minutes until the flesh is just cooked.\n' +
      '3. Pour off any liquid, then scatter the fish with the spring onion and remaining ginger.\n' +
      '4. Heat the vegetable and sesame oils until shimmering and pour over the aromatics so they sizzle.\n' +
      '5. Drizzle with soy sauce and serve with steamed rice.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '2 fillets' },
      { rawName: 'Ginger', rawMeasure: '4cm piece' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '150g, to serve' },
    ],
  },
  {
    title: 'Salt and pepper squid',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Chinese',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Score the cleaned squid lightly and cut into pieces. Pat very dry.\n' +
      '2. Mix the cornflour with plenty of black pepper, a little chilli flakes and salt.\n' +
      '3. Toss the squid in the seasoned cornflour to coat.\n' +
      '4. Heat the vegetable oil to 190°C and fry the squid in batches for 1–2 minutes until pale gold and crisp; drain.\n' +
      '5. Quickly stir-fry the sliced chilli and spring onion, toss with the squid and serve with lime wedges.',
    rawLines: [
      { rawName: 'Squid', rawMeasure: '500g, cleaned' },
      { rawName: 'Cornflour', rawMeasure: '80g' },
      { rawName: 'Chilli flakes', rawMeasure: '1 tsp' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Black pepper', rawMeasure: '1 tbsp' },
      { rawName: 'Vegetable oil', rawMeasure: '1 litre, for frying' },
      { rawName: 'Salt', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Miso-glazed cod',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Mix the miso paste with the honey, soy sauce and a splash of water into a thick glaze.\n' +
      '2. Sit the white fish fillets on a lined tray and brush generously with the glaze.\n' +
      '3. Leave to marinate for 15 minutes if you have time.\n' +
      '4. Grill under a medium-high heat for 8–10 minutes, basting once, until caramelised and just cooked.\n' +
      '5. Scatter with spring onion and sesame seeds and serve with rice and pak choi.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '2 (about 300g)' },
      { rawName: 'Miso paste', rawMeasure: '3 tbsp' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Basmati rice', rawMeasure: '150g, to serve' },
    ],
  },
  {
    title: 'Prawn and vegetable fried rice',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Use cold, cooked rice for the best texture. Beat the eggs and scramble lightly in a little oil, then set aside.\n' +
      '2. Stir-fry the diced carrot and peas in hot oil for 3 minutes.\n' +
      '3. Add the prawns and cook for 2 minutes until pink.\n' +
      '4. Tip in the rice and toss over a high heat, breaking up any clumps, then return the egg.\n' +
      '5. Season with soy sauce and sesame oil and finish with spring onion.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '300g' },
      { rawName: 'Rice', rawMeasure: '400g, cooked and cooled' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Japanese salmon and rice bowl',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Steam or boil the rice until tender and keep warm.\n' +
      '2. Season the salmon and pan-fry in a little oil for 3–4 minutes a side until just cooked, then flake into chunks.\n' +
      '3. Quickly pickle the cucumber ribbons in a little vinegar and a pinch of sugar.\n' +
      '4. Pile the rice into bowls, top with the salmon, sliced avocado and pickled cucumber.\n' +
      '5. Drizzle with soy sauce and sesame oil and scatter with sesame seeds and spring onion.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '2' },
      { rawName: 'Rice', rawMeasure: '160g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Singapore-style noodles with prawns',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Soak the rice noodles until pliable, then drain.\n' +
      '2. Scramble the beaten egg in a little oil and set aside.\n' +
      '3. Stir-fry the sliced pepper, carrot and bean sprouts for 3 minutes, then add the prawns and cook until pink.\n' +
      '4. Add the noodles, curry powder, soy sauce and the egg and toss over a high heat until coated and hot.\n' +
      '5. Finish with spring onion and serve.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '300g' },
      { rawName: 'Noodles', rawMeasure: '250g, rice vermicelli' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Bean sprouts', rawMeasure: '150g' },
      { rawName: 'Curry powder', rawMeasure: '2 tsp' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  // ── Indian & South Asian ────────────────────────────────────────────────────
  {
    title: 'Goan prawn curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the chopped onion in a little oil until golden, then stir in the ginger garlic paste.\n' +
      '2. Add the turmeric, chilli powder and ground coriander and cook for a minute until fragrant.\n' +
      '3. Pour in the coconut milk and chopped tomatoes, bring to a simmer and cook for 12–15 minutes until thickened.\n' +
      '4. Stir in the prawns and simmer for 4–5 minutes until pink and cooked.\n' +
      '5. Finish with a squeeze of lime and coriander; serve with rice.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '400g' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '2 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g, to serve' },
    ],
  },
  {
    title: 'Bengali fish curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Rub the white fish with turmeric and salt and fry briefly in mustard oil to seal; lift out.\n' +
      '2. Fry the mustard seeds until they pop, then add the chopped onion and soften.\n' +
      '3. Stir in the ginger garlic paste, more turmeric, chilli powder and ground cumin and cook for a minute.\n' +
      '4. Add the chopped tomatoes and a splash of water, simmer for 10 minutes, then return the fish.\n' +
      '5. Simmer gently for 6–8 minutes until cooked. Scatter with coriander and serve with rice.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '500g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Mustard seeds', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Mustard oil', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g, to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'South Indian fish moilee',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the sliced onion in coconut oil with the curry leaves and green chilli.\n' +
      '2. Stir in the ginger garlic paste and turmeric and cook for a minute.\n' +
      '3. Pour in the coconut milk, bring to a gentle simmer and season.\n' +
      '4. Lower in the white fish pieces and poach gently for 8 minutes until just cooked.\n' +
      '5. Finish with a squeeze of lime and serve with rice or appams.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '500g' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Curry leaves', rawMeasure: '10' },
      { rawName: 'Green chilli', rawMeasure: '2' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coconut oil', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g, to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tandoori-style baked salmon',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Mix the natural yoghurt with the ginger garlic paste, garam masala, turmeric, chilli powder and lemon juice.\n' +
      '2. Coat the salmon fillets in the spiced yoghurt and marinate for 20 minutes.\n' +
      '3. Sit on a lined tray and bake at 200°C (fan 180°C) for 14–16 minutes until just cooked and lightly charred at the edges.\n' +
      '4. Scatter with coriander.\n' +
      '5. Serve with rice, lemon wedges and a cucumber salad.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Basmati rice', rawMeasure: '300g, to serve' },
    ],
  },
  {
    title: 'Prawn biryani',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Parboil the basmati rice with a little salt and a few whole spices until 70% cooked, then drain.\n' +
      '2. Fry the sliced onion until deep golden; set half aside for the top.\n' +
      '3. Stir the ginger garlic paste, garam masala, turmeric and chilli powder into the remaining onion, then add the yoghurt and prawns and cook for 3 minutes.\n' +
      '4. Layer the rice over the prawns, scatter with the reserved onion, coriander and a little saffron-soaked milk.\n' +
      '5. Cover tightly and steam over a low heat for 15 minutes, then fork through gently and serve.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '400g' },
      { rawName: 'Basmati rice', rawMeasure: '350g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Natural yoghurt', rawMeasure: '150g' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Coriander', rawMeasure: '4 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  // ── Smoked salmon, eggs & light meals ───────────────────────────────────────
  {
    title: 'Smoked salmon and scrambled eggs',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Beat the eggs with a splash of milk and a little seasoning.\n' +
      '2. Melt the butter gently in a non-stick pan over a low heat.\n' +
      '3. Pour in the eggs and stir slowly with a spatula until softly set but still creamy.\n' +
      '4. Fold through the smoked salmon strips and chives at the last moment so they just warm.\n' +
      '5. Serve at once on hot buttered toast.',
    rawLines: [
      { rawName: 'Smoked salmon', rawMeasure: '120g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Milk', rawMeasure: '2 tbsp' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked salmon and cream cheese bagels',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: [],
    instructions:
      '1. Slice and toast the bagels until golden.\n' +
      '2. Spread the cut sides generously with cream cheese.\n' +
      '3. Layer over the smoked salmon and a few thin slices of red onion.\n' +
      '4. Add a squeeze of lemon and a grind of black pepper.\n' +
      '5. Sandwich together and serve straight away.',
    rawLines: [
      { rawName: 'Smoked salmon', rawMeasure: '120g' },
      { rawName: 'Bagel', rawMeasure: '2' },
      { rawName: 'Cream cheese', rawMeasure: '100g' },
      { rawName: 'Red onion', rawMeasure: '1/4' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Salmon and dill quiche',
    servingsBase: 6,
    totalTimeMinutes: 70,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: [],
    instructions:
      '1. Line a tart tin with the shortcrust pastry, prick the base and blind-bake at 190°C (fan 170°C) for 15 minutes.\n' +
      '2. Beat the eggs with the double cream and milk, season and stir in the dill.\n' +
      '3. Scatter the flaked salmon over the pastry base.\n' +
      '4. Pour over the egg mixture and bake for 30–35 minutes until just set with a slight wobble.\n' +
      '5. Cool a little before slicing; serve warm or at room temperature with salad.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '300g, cooked and flaked' },
      { rawName: 'Shortcrust pastry', rawMeasure: '320g' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Double cream', rawMeasure: '200ml' },
      { rawName: 'Milk', rawMeasure: '100ml' },
      { rawName: 'Dill', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna melt',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'American',
    dietLabels: ['Pescatarian'],
    healthLabels: [],
    instructions:
      '1. Mix the flaked tuna with the mayonnaise, finely chopped spring onion and a little black pepper.\n' +
      '2. Pile the tuna onto slices of bread and top with grated Cheddar.\n' +
      '3. Sit on a tray under a medium grill.\n' +
      '4. Grill for 3–4 minutes until the cheese is bubbling and golden.\n' +
      '5. Serve hot, cut in half, with a few salad leaves.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '1 tin (160g)' },
      { rawName: 'Bread', rawMeasure: '4 slices' },
      { rawName: 'Cheddar cheese', rawMeasure: '80g' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn cocktail',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Make the sauce by mixing the mayonnaise with the ketchup, a little lemon juice and a few drops of Worcestershire-style seasoning.\n' +
      '2. Shred the lettuce finely and divide between glasses or bowls.\n' +
      '3. Toss the prawns in the sauce until well coated.\n' +
      '4. Spoon the dressed prawns over the lettuce.\n' +
      '5. Dust with paprika and serve with lemon wedges and brown bread.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '300g, cooked and peeled' },
      { rawName: 'Lettuce', rawMeasure: '1/2 head' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp' },
      { rawName: 'Tomato ketchup', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Paprika', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Salmon fishcakes with sweet chilli',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: [],
    instructions:
      '1. Boil the potatoes until tender, drain well and mash dry; cool a little.\n' +
      '2. Flake the cooked salmon and fold into the mash with the spring onion, a little chilli sauce, lemon zest and seasoning.\n' +
      '3. Shape into eight cakes and chill for 15 minutes.\n' +
      '4. Coat each in beaten egg and then breadcrumbs.\n' +
      '5. Fry in a little oil for 3–4 minutes a side until crisp and golden. Serve with extra chilli sauce.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '400g, cooked' },
      { rawName: 'Potato', rawMeasure: '500g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Breadcrumbs', rawMeasure: '100g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Chilli sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Soups, stews & one-pots ─────────────────────────────────────────────────
  {
    title: 'Mediterranean fish stew',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the chopped onion, fennel and garlic in olive oil for 8 minutes.\n' +
      '2. Stir in the chopped tomatoes, fish stock and a pinch of saffron and simmer for 15 minutes.\n' +
      '3. Add the chunks of white fish and the mussels, cover and cook for 5–6 minutes until the fish is just cooked and the mussels open.\n' +
      '4. Stir in the prawns and warm through for 2 minutes.\n' +
      '5. Season, scatter with parsley and serve with crusty bread.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '400g' },
      { rawName: 'Mussels', rawMeasure: '400g' },
      { rawName: 'Prawns', rawMeasure: '200g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Fish stock', rawMeasure: '500ml' },
      { rawName: 'Fennel', rawMeasure: '1 bulb' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Thai-style mussels in coconut broth',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Fry the Thai red curry paste in a little oil until fragrant.\n' +
      '2. Pour in the coconut milk, bring to a simmer and add a splash of fish sauce and lime juice.\n' +
      '3. Tip in the cleaned mussels, cover and steam for 3–4 minutes until they open. Discard any that stay shut.\n' +
      '4. Scatter with coriander and sliced chilli.\n' +
      '5. Serve in bowls with the broth and bread or rice to soak it up.',
    rawLines: [
      { rawName: 'Mussels', rawMeasure: '1kg' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Thai red curry paste', rawMeasure: '2 tbsp' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Smoked mackerel chowder',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Soften the chopped onion and leek in the butter for 8 minutes.\n' +
      '2. Add the diced potatoes, sweetcorn and stock and simmer for 15 minutes until the potatoes are tender.\n' +
      '3. Flake in the smoked mackerel, discarding any skin.\n' +
      '4. Stir in the milk and warm through gently without boiling.\n' +
      '5. Season, scatter with chives and serve.',
    rawLines: [
      { rawName: 'Smoked mackerel', rawMeasure: '300g' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Leek', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Sweetcorn', rawMeasure: '150g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Milk', rawMeasure: '300ml' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spanish-style seafood paella',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the chopped onion, pepper and garlic in olive oil in a wide pan.\n' +
      '2. Stir in the paprika and saffron, then the rice, coating it in the oil.\n' +
      '3. Pour in the hot fish stock and chopped tomatoes, season, and simmer without stirring for 15 minutes.\n' +
      '4. Nestle in the mussels and prawns, cover loosely and cook for a further 8–10 minutes until the rice is tender and the shellfish cooked.\n' +
      '5. Rest for 5 minutes, then serve with lemon wedges and parsley.',
    rawLines: [
      { rawName: 'Frozen seafood mix', rawMeasure: '300g' },
      { rawName: 'Mussels', rawMeasure: '300g' },
      { rawName: 'Tiger prawns', rawMeasure: '200g' },
      { rawName: 'Paella rice', rawMeasure: '300g' },
      { rawName: 'Fish stock', rawMeasure: '900ml' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked paprika cod and butter bean stew',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the chopped onion and garlic in olive oil, then stir in the smoked paprika.\n' +
      '2. Add the chopped tomatoes and drained butter beans and simmer for 12–15 minutes until thickened.\n' +
      '3. Season the sauce well, then nestle in the chunks of white fish.\n' +
      '4. Cover and poach gently for 6–8 minutes until the fish is just cooked.\n' +
      '5. Scatter with parsley and serve with crusty bread.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '500g' },
      { rawName: 'Butter beans', rawMeasure: '2 tins (about 480g drained)' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  // ── Tacos, salads & lighter bites ───────────────────────────────────────────
  {
    title: 'Fish tacos with lime slaw',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Pescatarian'],
    healthLabels: [],
    instructions:
      '1. Toss the shredded cabbage and carrot with lime juice, a little mayonnaise and seasoning to make the slaw.\n' +
      '2. Dust the white fish strips with the seasoned flour and a pinch of paprika.\n' +
      '3. Fry the fish in a little oil for 2–3 minutes a side until golden and just cooked.\n' +
      '4. Warm the tortillas in a dry pan.\n' +
      '5. Fill with the slaw, fish, sliced avocado and coriander, and finish with a squeeze of lime.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '500g' },
      { rawName: 'Tortilla wrap', rawMeasure: '8 small' },
      { rawName: 'Cabbage', rawMeasure: '1/4 head' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Plain flour', rawMeasure: '3 tbsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and avocado salad',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Arrange the salad leaves on plates.\n' +
      '2. Scatter over the prawns, sliced avocado, cherry tomatoes and cucumber.\n' +
      '3. Whisk the olive oil with lemon juice and seasoning.\n' +
      '4. Drizzle the dressing over the salad.\n' +
      '5. Finish with a little chopped dill and serve.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '250g, cooked and peeled' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Lettuce', rawMeasure: '1 small head' },
      { rawName: 'Cherry tomatoes', rawMeasure: '150g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Dill', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Niçoise-style tuna salad',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Boil the new potatoes until tender, adding the green beans for the last 4 minutes; drain and cool a little.\n' +
      '2. Boil the eggs for 8 minutes, then cool, peel and quarter.\n' +
      '3. Arrange the salad leaves, potatoes, beans, halved tomatoes and olives on a platter.\n' +
      '4. Flake over the tuna and add the eggs.\n' +
      '5. Whisk the olive oil with lemon juice and a little mustard, drizzle over and serve.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '2 tins (about 320g)' },
      { rawName: 'New potatoes', rawMeasure: '400g' },
      { rawName: 'Green beans', rawMeasure: '200g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Cherry tomatoes', rawMeasure: '200g' },
      { rawName: 'Olives', rawMeasure: '60g' },
      { rawName: 'Lettuce', rawMeasure: '1 small head' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Crab and sweetcorn soup',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Chinese',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Bring the fish stock to a simmer with the grated ginger.\n' +
      '2. Stir in the creamed sweetcorn and the crab meat and simmer for 5 minutes.\n' +
      '3. Slake the cornflour with a little cold water and stir in to thicken slightly.\n' +
      '4. Pour in the beaten egg in a thin stream, stirring once so it sets in ribbons.\n' +
      '5. Season with soy sauce, scatter with spring onion and serve.',
    rawLines: [
      { rawName: 'Crab meat', rawMeasure: '200g' },
      { rawName: 'Creamed sweetcorn', rawMeasure: '1 tin (about 400g)' },
      { rawName: 'Fish stock', rawMeasure: '800ml' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Ginger', rawMeasure: '2cm piece' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
    ],
  },
  {
    title: 'Anchovy, garlic and chilli spaghetti',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Cook the spaghetti in boiling salted water until al dente.\n' +
      '2. Warm the olive oil with the sliced garlic and chilli flakes over a low heat.\n' +
      '3. Add the anchovy fillets and stir until they melt into the oil.\n' +
      '4. Drain the pasta and toss into the pan with a little cooking water and the parsley.\n' +
      '5. Season with black pepper (the anchovies bring the salt) and serve.',
    rawLines: [
      { rawName: 'Anchovy fillets', rawMeasure: '8' },
      { rawName: 'Spaghetti', rawMeasure: '350g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked salmon and pea risotto',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Keep the fish stock at a gentle simmer.\n' +
      '2. Soften the onion in the butter, stir in the risotto rice for a minute, then add the white wine and let it bubble away.\n' +
      '3. Add the hot stock a ladle at a time, stirring, until the rice is creamy and just tender.\n' +
      '4. Stir in the peas for the final 4 minutes.\n' +
      '5. Off the heat, fold through the smoked salmon strips, a knob of butter and a little lemon; serve with chives.',
    rawLines: [
      { rawName: 'Smoked salmon', rawMeasure: '150g' },
      { rawName: 'Arborio rice', rawMeasure: '300g' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Fish stock', rawMeasure: '1 litre' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'White wine', rawMeasure: '125ml' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked cod with herb crust',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: [],
    instructions:
      '1. Mix the breadcrumbs with the chopped parsley, lemon zest, melted butter and seasoning.\n' +
      '2. Sit the white fish fillets on a lined tray.\n' +
      '3. Press the herb crumbs firmly over the top of each fillet.\n' +
      '4. Bake at 200°C (fan 180°C) for 14–16 minutes until the crust is golden and the fish flakes.\n' +
      '5. Serve with lemon wedges and seasonal vegetables.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4' },
      { rawName: 'Breadcrumbs', rawMeasure: '80g' },
      { rawName: 'Parsley', rawMeasure: '4 tbsp, chopped' },
      { rawName: 'Butter', rawMeasure: '40g, melted' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Hake with chickpeas and spinach',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the chopped onion and garlic in olive oil, then stir in the smoked paprika.\n' +
      '2. Add the drained chickpeas and chopped tomatoes and simmer for 10 minutes.\n' +
      '3. Stir in the spinach until wilted, then season the sauce well.\n' +
      '4. Nestle in the hake fillets, cover and cook gently for 8 minutes until just cooked.\n' +
      '5. Finish with a squeeze of lemon and parsley.',
    rawLines: [
      { rawName: 'Hake', rawMeasure: '4 fillets' },
      { rawName: 'Chickpeas', rawMeasure: '2 tins (about 480g drained)' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Monkfish and prawn skewers',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Cut the monkfish into chunks and thread onto skewers with the prawns and pieces of pepper.\n' +
      '2. Mix the olive oil with the lemon juice, crushed garlic, paprika and seasoning.\n' +
      '3. Brush the skewers all over with the marinade.\n' +
      '4. Grill or griddle for 3–4 minutes a side until the fish is just cooked and lightly charred.\n' +
      '5. Squeeze over more lemon and serve with rice or salad.',
    rawLines: [
      { rawName: 'Monkfish', rawMeasure: '400g' },
      { rawName: 'Tiger prawns', rawMeasure: '200g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Red snapper with tomato and caper sauce',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the chopped garlic in olive oil, then add the cherry tomatoes and cook until they collapse.\n' +
      '2. Stir in the capers and olives and a splash of water to make a loose sauce; season.\n' +
      '3. Season the red snapper fillets and add to the pan, skin-side down.\n' +
      '4. Spoon some sauce over, cover and cook for 6–8 minutes until just done.\n' +
      '5. Finish with basil and a drizzle of oil.',
    rawLines: [
      { rawName: 'Red snapper', rawMeasure: '2 fillets' },
      { rawName: 'Cherry tomatoes', rawMeasure: '250g' },
      { rawName: 'Capers', rawMeasure: '2 tbsp' },
      { rawName: 'Olives', rawMeasure: '50g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Basil', rawMeasure: 'a handful' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Barramundi with lemon and herb butter',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Pat the barramundi fillets dry and season.\n' +
      '2. Fry skin-side down in a little olive oil for 4 minutes until the skin is crisp, then turn for 2 minutes more.\n' +
      '3. Lift the fish onto warm plates.\n' +
      '4. Add the butter, lemon juice and chopped parsley to the pan and swirl into a quick sauce.\n' +
      '5. Spoon the herb butter over the fish and serve with greens.',
    rawLines: [
      { rawName: 'Barramundi', rawMeasure: '2 fillets' },
      { rawName: 'Butter', rawMeasure: '50g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked salmon and avocado on sourdough',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Toast the sourdough until golden and crisp.\n' +
      '2. Mash the avocado roughly with lemon juice, salt and a pinch of chilli flakes.\n' +
      '3. Spread the avocado over the toast.\n' +
      '4. Drape the smoked salmon over the top.\n' +
      '5. Finish with black pepper, a little more lemon and chives.',
    rawLines: [
      { rawName: 'Smoked salmon', rawMeasure: '120g' },
      { rawName: 'Sourdough bread', rawMeasure: '2 slices' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mussels in white wine and cream (moules marinière)',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Clean the mussels well, discarding any that are open and will not close.\n' +
      '2. Soften the chopped shallot and garlic in the butter without colouring.\n' +
      '3. Pour in the white wine and bring to the boil, then tip in the mussels and cover.\n' +
      '4. Steam for 3–4 minutes, shaking the pan, until they open. Discard any that stay shut.\n' +
      '5. Stir in the double cream and parsley, season and serve with bread or chips.',
    rawLines: [
      { rawName: 'Mussels', rawMeasure: '1kg' },
      { rawName: 'White wine', rawMeasure: '200ml' },
      { rawName: 'Double cream', rawMeasure: '100ml' },
      { rawName: 'Shallot', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Tuna and sweetcorn jacket potatoes',
    servingsBase: 4,
    totalTimeMinutes: 75,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Prick the potatoes, rub with a little oil and salt and bake at 200°C (fan 180°C) for about an hour until crisp outside and fluffy within.\n' +
      '2. Mix the flaked tuna with the sweetcorn, mayonnaise and a little black pepper.\n' +
      '3. Split the hot potatoes and fluff the insides with a fork.\n' +
      '4. Pile the tuna mixture into each potato.\n' +
      '5. Top with a little grated Cheddar and serve with salad.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '4 large baking potatoes' },
      { rawName: 'Tuna', rawMeasure: '2 tins (about 320g)' },
      { rawName: 'Sweetcorn', rawMeasure: '150g' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp' },
      { rawName: 'Cheddar cheese', rawMeasure: '60g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn and chickpea curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the chopped onion in oil until golden, then stir in the ginger garlic paste.\n' +
      '2. Add the garam masala, turmeric and chilli powder and cook for a minute.\n' +
      '3. Stir in the chopped tomatoes and drained chickpeas and simmer for 12 minutes.\n' +
      '4. Add the prawns and cook for 4–5 minutes until pink and cooked through.\n' +
      '5. Finish with coriander and a squeeze of lemon; serve with rice.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '350g' },
      { rawName: 'Chickpeas', rawMeasure: '2 tins (about 480g drained)' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '2 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g, to serve' },
    ],
  },
  {
    title: 'Grilled sardines with lemon and oregano',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Heat the grill to high. Pat the sardines dry and slash the skin a couple of times.\n' +
      '2. Brush with olive oil and season with salt, pepper and dried oregano.\n' +
      '3. Grill for 3–4 minutes a side until the skin is crisp and the flesh just cooked.\n' +
      '4. Squeeze over plenty of lemon juice.\n' +
      '5. Serve hot with bread and a tomato salad.',
    rawLines: [
      { rawName: 'Sardines', rawMeasure: '8 whole, gutted' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Oregano', rawMeasure: '1 tsp, dried' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Creamy smoked haddock and leek pasta',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: [],
    instructions:
      '1. Cook the pasta in boiling salted water until al dente.\n' +
      '2. Soften the sliced leek in the butter for 6 minutes until tender.\n' +
      '3. Pour in the double cream and a splash of the pasta water, then add the smoked haddock pieces and poach for 4 minutes.\n' +
      '4. Flake the fish gently into the sauce and stir in the peas.\n' +
      '5. Toss through the drained pasta, season, finish with chives and serve.',
    rawLines: [
      { rawName: 'Smoked haddock', rawMeasure: '350g' },
      { rawName: 'Pasta', rawMeasure: '350g' },
      { rawName: 'Leek', rawMeasure: '2' },
      { rawName: 'Double cream', rawMeasure: '200ml' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Seafood linguine in tomato sauce',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Cook the linguine in boiling salted water until al dente.\n' +
      '2. Soften the garlic and chilli in olive oil, then add the chopped tomatoes and simmer for 8 minutes.\n' +
      '3. Stir in the frozen seafood mix and cook for 4–5 minutes until hot through.\n' +
      '4. Add a splash of white wine and let it bubble.\n' +
      '5. Toss through the drained pasta with parsley, season and serve.',
    rawLines: [
      { rawName: 'Frozen seafood mix', rawMeasure: '400g' },
      { rawName: 'Linguine', rawMeasure: '350g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'White wine', rawMeasure: '100ml' },
      { rawName: 'Parsley', rawMeasure: '4 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked trout parcels with vegetables',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Lay out two large squares of baking paper or foil.\n' +
      '2. Divide the sliced courgette, pepper and cherry tomatoes between them and drizzle with olive oil.\n' +
      '3. Sit a trout fillet on each, top with lemon slices, dill and seasoning.\n' +
      '4. Fold up into sealed parcels and bake at 200°C (fan 180°C) for 18–20 minutes.\n' +
      '5. Open the parcels at the table and serve with new potatoes.',
    rawLines: [
      { rawName: 'Trout', rawMeasure: '2 fillets' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Cherry tomatoes', rawMeasure: '150g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Dill', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Prawn saganaki with feta and tomato',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Soften the chopped onion and garlic in olive oil.\n' +
      '2. Add the chopped tomatoes, a pinch of chilli flakes and the dried oregano and simmer for 12 minutes until thick.\n' +
      '3. Stir in the prawns and cook for 3 minutes.\n' +
      '4. Crumble over the feta and pop under a hot grill for 3–4 minutes until the cheese softens.\n' +
      '5. Scatter with parsley and serve with bread.',
    rawLines: [
      { rawName: 'Tiger prawns', rawMeasure: '400g' },
      { rawName: 'Feta cheese', rawMeasure: '120g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp, dried' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pan-fried sea bass with crushed minted peas',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Cook the peas in boiling water for 3 minutes, drain and crush roughly with the butter, mint and a little lemon.\n' +
      '2. Pat the sea bass fillets dry and season the skin.\n' +
      '3. Fry skin-side down in a little olive oil for 3–4 minutes until crisp, then turn briefly to finish.\n' +
      '4. Spoon the crushed peas onto plates.\n' +
      '5. Sit the sea bass on top, skin-side up, and serve with lemon.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '2 fillets' },
      { rawName: 'Peas', rawMeasure: '250g' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Butter', rawMeasure: '30g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoked salmon frittata',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Breakfast',
    cuisine: 'Italian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Beat the eggs with a splash of milk and seasoning.\n' +
      '2. Soften the sliced spring onion in a little butter in an ovenproof pan.\n' +
      '3. Scatter in the smoked salmon strips and peas, then pour over the eggs.\n' +
      '4. Cook over a low heat until the base sets, then finish under a hot grill until just set and golden.\n' +
      '5. Scatter with chives, cut into wedges and serve warm.',
    rawLines: [
      { rawName: 'Smoked salmon', rawMeasure: '120g' },
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Peas', rawMeasure: '80g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Milk', rawMeasure: '2 tbsp' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Crab linguine with lemon and chilli',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Dairy-free'],
    instructions:
      '1. Cook the linguine in boiling salted water until al dente.\n' +
      '2. Warm the garlic and chilli gently in the olive oil.\n' +
      '3. Stir in the brown and white crab meat with the lemon zest and a splash of pasta water to loosen.\n' +
      '4. Toss through the drained pasta with the parsley and lemon juice.\n' +
      '5. Season and serve at once.',
    rawLines: [
      { rawName: 'Crab meat', rawMeasure: '250g' },
      { rawName: 'Linguine', rawMeasure: '350g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Fish finger sandwich with tartare',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: [],
    instructions:
      '1. Cut the white fish into finger-sized strips, dust in seasoned flour, dip in beaten egg and coat in breadcrumbs.\n' +
      '2. Fry in a little oil for 2–3 minutes a side until golden and cooked through.\n' +
      '3. Mix the mayonnaise with chopped capers, gherkin and a squeeze of lemon for a quick tartare.\n' +
      '4. Spread the tartare over thick slices of buttered bread.\n' +
      '5. Pile in the fish fingers, add a little lettuce, close up and serve.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '400g' },
      { rawName: 'Bread', rawMeasure: '4 thick slices' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Breadcrumbs', rawMeasure: '100g' },
      { rawName: 'Plain flour', rawMeasure: '3 tbsp' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Dill pickles', rawMeasure: '1 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Lettuce', rawMeasure: 'a few leaves' },
      { rawName: 'Butter', rawMeasure: '20g' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
    ],
  },
  {
    title: 'Coconut and lime fish curry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Soften the chopped onion, ginger and garlic in a little oil.\n' +
      '2. Stir in the turmeric and a pinch of chilli flakes, then pour in the coconut milk.\n' +
      '3. Bring to a gentle simmer and season with fish sauce.\n' +
      '4. Lower in the chunks of white fish and poach for 6–8 minutes until just cooked.\n' +
      '5. Finish with lime juice and coriander; serve with rice.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '500g' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger', rawMeasure: '3cm piece' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Fish sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Basmati rice', rawMeasure: '300g, to serve' },
    ],
  },
  {
    title: 'Smoked mackerel pâté',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free'],
    instructions:
      '1. Peel the skin from the smoked mackerel and flake the flesh into a bowl, checking for bones.\n' +
      '2. Add the cream cheese, crème fraîche, lemon juice and a little horseradish-style mustard.\n' +
      '3. Mash and beat together until creamy but still a little chunky.\n' +
      '4. Season with black pepper and a little chopped chives.\n' +
      '5. Chill briefly and serve on toast or with crudités.',
    rawLines: [
      { rawName: 'Smoked mackerel', rawMeasure: '250g' },
      { rawName: 'Cream cheese', rawMeasure: '100g' },
      { rawName: 'Crème fraîche', rawMeasure: '3 tbsp' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Chives', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Salmon and broccoli traybake',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Pescatarian'],
    healthLabels: ['Gluten-free', 'Dairy-free'],
    instructions:
      '1. Toss the new potatoes in olive oil, season and roast at 200°C (fan 180°C) for 20 minutes.\n' +
      '2. Add the broccoli florets and cherry tomatoes to the tray and toss.\n' +
      '3. Sit the salmon fillets among the vegetables, drizzle with oil and add lemon slices.\n' +
      '4. Roast for a further 12–14 minutes until the salmon is just cooked and the vegetables tender.\n' +
      '5. Squeeze over lemon and serve from the tray.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4' },
      { rawName: 'New potatoes', rawMeasure: '600g' },
      { rawName: 'Broccoli', rawMeasure: '300g' },
      { rawName: 'Cherry tomatoes', rawMeasure: '200g' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
]
