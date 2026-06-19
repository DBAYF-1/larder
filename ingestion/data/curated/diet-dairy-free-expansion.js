// Curated DAIRY-FREE expansion batch for Larder — additional per-diet floor recipes.
//
// All records satisfy the strict dairy-free rule: no milk, butter, ghee, cream,
// cheese, yoghurt (dairy), whey, casein, or any dairy derivative. Plant milks,
// coconut milk/cream, vegan butter and vegan cheese are all fine.
//
// Shape per record (culinary content ONLY — mapCurated adds source/imageUrl):
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     instructions, rawLines:[{rawName, rawMeasure}] }
//
// dietLabels are tagged HONESTLY. Free-from health labels are derived downstream.
// Every title is distinct from the sibling diet-dairy-free.js file.
// Method prose is original, written fresh in British English.

const DF = ['Dairy-free']
const DF_VEG = ['Dairy-free', 'Vegetarian']
const DF_VEGAN = ['Dairy-free', 'Vegan', 'Vegetarian']
const DF_PESC = ['Dairy-free', 'Pescatarian']

export default [

  // ── Breakfast ─────────────────────────────────────────────────────────────
  {
    title: 'Coconut milk French toast with mango',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: DF_VEG,
    instructions:
      '1. Whisk the eggs together with the coconut milk, a pinch of cinnamon and a tiny pinch of salt in a shallow bowl.\n' +
      '2. Dip each slice of bread into the egg mixture, letting it soak for about 30 seconds per side.\n' +
      '3. Melt the vegan butter in a non-stick pan over a medium heat and fry the soaked bread in batches for 2–3 minutes per side until deep golden.\n' +
      '4. Meanwhile dice the mango flesh and toss with a squeeze of lime juice.\n' +
      '5. Pile the French toast onto plates, top with the mango and a trickle of maple syrup, and serve at once.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Coconut milk', rawMeasure: '80ml' },
      { rawName: 'Bread', rawMeasure: '4 thick slices' },
      { rawName: 'Mango', rawMeasure: '1 ripe' },
      { rawName: 'Lime', rawMeasure: '1/2' },
      { rawName: 'Maple syrup', rawMeasure: '2 tbsp' },
      { rawName: 'Vegan butter', rawMeasure: '20g' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Ackee and saltfish',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Breakfast',
    cuisine: 'Caribbean',
    dietLabels: DF_PESC,
    instructions:
      '1. Soak the saltfish in cold water overnight, changing the water once; drain, cover with fresh water and simmer for 15 minutes, then drain, flake and remove any bones and skin.\n' +
      '2. Heat the vegetable oil in a large pan and fry the sliced onion, scotch bonnet and thyme for 5 minutes until softened.\n' +
      '3. Add the diced tomato and fry for a further 3 minutes.\n' +
      '4. Gently fold in the drained ackee and the flaked saltfish, being careful not to break up the ackee too much.\n' +
      '5. Season with black pepper, heat through for 2 minutes and serve with fried dumplings or bread.',
    rawLines: [
      { rawName: 'Saltfish', rawMeasure: '300g (dried, salted cod)' },
      { rawName: 'Ackee', rawMeasure: '1 tin (540g), drained' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Scotch bonnet chilli', rawMeasure: '1, deseeded' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Savoury rice porridge with spring onion and ginger',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'Chinese',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Rinse the jasmine rice and tip into a pan with the stock and the grated ginger.\n' +
      '2. Bring to the boil, then reduce the heat to its lowest setting and cook, stirring now and then, for 25–30 minutes until the rice has broken down to a thick, creamy congee.\n' +
      '3. Loosen with a splash more water if needed and season with soy sauce and a little salt.\n' +
      '4. Ladle into bowls and scatter with sliced spring onion and sesame seeds.\n' +
      '5. Finish with a drizzle of sesame oil and serve hot.',
    rawLines: [
      { rawName: 'Jasmine rice', rawMeasure: '150g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced poha (flattened rice) with peas',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'Indian',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Rinse the poha in a sieve under cold water, shake off the excess and leave to soften for 5 minutes; it should be tender but not mushy.\n' +
      '2. Heat the oil in a wide pan and fry the mustard seeds until they pop, then add the curry leaves, sliced chilli and onion and cook for 5 minutes.\n' +
      '3. Stir in the turmeric and the peas and cook for 2 minutes.\n' +
      '4. Gently fold in the softened poha, season with salt and toss over the heat for 2 minutes until warmed through.\n' +
      '5. Finish with a squeeze of lemon, scatter with chopped coriander and serve.',
    rawLines: [
      { rawName: 'Poha (flattened rice)', rawMeasure: '200g' },
      { rawName: 'Peas', rawMeasure: '80g frozen' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Chilli', rawMeasure: '1 green' },
      { rawName: 'Mustard seeds', rawMeasure: '1 tsp' },
      { rawName: 'Curry leaves', rawMeasure: '8' },
      { rawName: 'Turmeric', rawMeasure: '1/4 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Smoothie bowl with tropical fruit',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Blend the frozen mango and banana with the coconut milk until thick and creamy — it should be scoopable, not drinkable, so use the minimum coconut milk needed.\n' +
      '2. Divide between two bowls and smooth the tops.\n' +
      '3. Arrange the sliced kiwi, fresh pineapple chunks and blueberries in rows over the surface.\n' +
      '4. Scatter with granola and desiccated coconut.\n' +
      '5. Serve immediately before it melts.',
    rawLines: [
      { rawName: 'Mango', rawMeasure: '200g frozen' },
      { rawName: 'Banana', rawMeasure: '2 frozen' },
      { rawName: 'Coconut milk', rawMeasure: '80ml' },
      { rawName: 'Kiwi fruit', rawMeasure: '1' },
      { rawName: 'Pineapple', rawMeasure: '100g' },
      { rawName: 'Blueberries', rawMeasure: '80g' },
      { rawName: 'Granola', rawMeasure: '4 tbsp' },
      { rawName: 'Desiccated coconut', rawMeasure: '2 tbsp' },
    ],
  },

  // ── Lunch ─────────────────────────────────────────────────────────────────
  {
    title: 'Vietnamese-style prawn summer rolls',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Thai',
    dietLabels: DF_PESC,
    instructions:
      '1. Cook the prawns in lightly salted simmering water for 2 minutes until pink, drain and halve lengthways.\n' +
      '2. Soak the rice vermicelli in just-boiled water until tender, drain and set aside.\n' +
      '3. For the dipping sauce, stir the soy sauce, rice vinegar, a squeeze of lime and a pinch of sugar together.\n' +
      '4. Fill a shallow dish with warm water, dip a rice paper wrapper in for 30 seconds until pliable, then lay flat.\n' +
      '5. Pile a little noodle, shredded lettuce, mint, sliced cucumber and 3–4 prawn halves in the centre, fold in the sides and roll up tightly. Repeat for the remaining wrappers and serve with the dipping sauce.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '250g cooked' },
      { rawName: 'Rice vermicelli', rawMeasure: '100g' },
      { rawName: 'Rice paper wrappers', rawMeasure: '8' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Sugar', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Roasted red pepper and lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Halve and deseed the peppers, lay cut-side down on a baking tray, drizzle with oil and roast for 25–30 minutes until the skins blister. Cover with a bowl to steam for 10 minutes, then peel and roughly chop.\n' +
      '2. Meanwhile soften the onion and garlic in the olive oil in a large pan for 8 minutes, then stir in the smoked paprika and cumin.\n' +
      '3. Add the rinsed lentils and the chopped roasted peppers, then pour in the stock.\n' +
      '4. Simmer for 20 minutes until the lentils are soft, then blend until smooth.\n' +
      '5. Season well, finish with a squeeze of lemon and serve with crusty bread.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4 red' },
      { rawName: 'Lentils', rawMeasure: '150g red lentils' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
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
    dietLabels: DF_VEGAN,
    instructions:
      '1. Soak the dried wakame seaweed in cold water for 5 minutes until softened, then drain and squeeze out the excess water.\n' +
      '2. Bring the dashi stock (or vegetable stock) to a gentle simmer in a pan; do not boil.\n' +
      '3. Whisk the miso paste with a ladleful of the warm stock until completely smooth, then stir back into the pan.\n' +
      '4. Add the cubed silken tofu and the wakame and warm gently for 2 minutes without boiling.\n' +
      '5. Ladle into bowls, scatter with sliced spring onion and serve straight away.',
    rawLines: [
      { rawName: 'Miso paste', rawMeasure: '3 tbsp' },
      { rawName: 'Silken tofu', rawMeasure: '200g' },
      { rawName: 'Dried wakame seaweed', rawMeasure: '10g' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Spring onion', rawMeasure: '2' },
    ],
  },
  {
    title: 'Chickpea and roasted tomato flatbread salad',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the halved cherry tomatoes and drained chickpeas with olive oil, cumin and a pinch of chilli flakes and roast for 20 minutes until the tomatoes are concentrated.\n' +
      '2. Tear the flatbreads into rough pieces and lay on a separate baking sheet; toast in the oven for 5–8 minutes until crisp.\n' +
      '3. Whisk the lemon juice, garlic and remaining olive oil for a sharp dressing.\n' +
      '4. Tumble the warm tomatoes, chickpeas and toasted bread into a bowl with the rocket and sliced cucumber.\n' +
      '5. Pour over the dressing, toss, scatter with parsley and serve warm.',
    rawLines: [
      { rawName: 'Cherry tomato', rawMeasure: '300g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Flatbread', rawMeasure: '2' },
      { rawName: 'Rocket', rawMeasure: '50g' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Nicoise-style tuna salad (dairy-free)',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: DF_PESC,
    instructions:
      '1. Boil the eggs for 8 minutes, drain, peel and halve. Cook the green beans in salted boiling water for 3 minutes until just tender, then drain and refresh under cold water.\n' +
      '2. Boil the new potatoes until just tender, drain and halve while still warm.\n' +
      '3. Whisk the olive oil, red wine vinegar, mustard and a little garlic for the dressing, and season well.\n' +
      '4. Arrange the mixed salad leaves on a platter. Top with the warm potatoes, green beans, halved eggs, olives and flaked tuna.\n' +
      '5. Drizzle the dressing over everything and serve at once.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '2 tins (160g each)' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Potato', rawMeasure: '300g new potatoes' },
      { rawName: 'Green beans', rawMeasure: '150g' },
      { rawName: 'Olives', rawMeasure: '80g' },
      { rawName: 'Mixed salad leaves', rawMeasure: '80g' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Red wine vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Japanese soba noodle salad',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Cook the soba noodles according to the packet instructions, then drain and rinse under cold water to cool and prevent sticking.\n' +
      '2. Whisk the soy sauce, rice vinegar, sesame oil, grated ginger and a little sugar together for the dressing.\n' +
      '3. Toss the cold noodles with the dressing, the shredded red cabbage and the grated carrot.\n' +
      '4. Add the edamame beans and the sliced spring onion and toss again.\n' +
      '5. Pile into bowls and scatter with sesame seeds before serving.',
    rawLines: [
      { rawName: 'Soba noodles', rawMeasure: '250g' },
      { rawName: 'Red cabbage', rawMeasure: '150g' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Edamame beans', rawMeasure: '150g, cooked' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Rice vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Sugar', rawMeasure: '1 tsp' },
      { rawName: 'Sesame seeds', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Tomato and white bean soup with rosemary',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Soften the onion and garlic in the olive oil over a medium heat for 8 minutes, then add the chopped rosemary and cook for a further minute.\n' +
      '2. Tip in the chopped tomatoes and the passata and simmer for 10 minutes.\n' +
      '3. Add the drained cannellini beans and the stock and simmer for a further 12 minutes.\n' +
      '4. Use a potato masher to crush some of the beans against the side of the pan to thicken the soup, leaving it chunky.\n' +
      '5. Season well, drizzle with olive oil and serve with crusty bread.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '2 tins (800g)' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Passata', rawMeasure: '200ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Dinner — curries & stews ───────────────────────────────────────────────
  {
    title: 'Lamb rogan josh',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: DF,
    instructions:
      '1. Brown the diced lamb in batches in the vegetable oil over a high heat until coloured on all sides, then lift out and set aside.\n' +
      '2. Fry the sliced onion in the same pan for 12–15 minutes until deep golden, then stir in the ginger garlic paste and cook for a minute.\n' +
      '3. Add the Kashmiri chilli powder, coriander, cumin, turmeric and garam masala and fry for 30 seconds.\n' +
      '4. Stir in the chopped tomatoes, return the lamb and add enough water to just cover. Cover and simmer gently for 50–60 minutes until the lamb is tender and the sauce is rich and dark red.\n' +
      '5. Season, finish with a scatter of chopped coriander and serve with rice or naan.',
    rawLines: [
      { rawName: 'Diced lamb', rawMeasure: '700g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Ginger garlic paste', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Kashmiri chilli powder', rawMeasure: '1 tbsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Massaman lamb curry',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: DF,
    instructions:
      '1. Fry the massaman curry paste in the vegetable oil for 1–2 minutes until fragrant, then stir in the coconut milk and bring to a gentle simmer.\n' +
      '2. Add the diced lamb and stir to coat, then add the potato chunks, sliced onion, fish sauce, tamarind paste and brown sugar.\n' +
      '3. Cover and simmer gently for 1 hour 30 minutes, stirring occasionally, until the lamb and potato are tender and the sauce is thick and fragrant.\n' +
      '4. Taste and adjust the balance of fish sauce, tamarind and sugar — it should be mildly sweet, savoury and a little sour.\n' +
      '5. Scatter with roasted peanuts and serve with steamed jasmine rice.',
    rawLines: [
      { rawName: 'Diced lamb', rawMeasure: '600g' },
      { rawName: 'Massaman curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Fish sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Tamarind paste', rawMeasure: '1 tbsp' },
      { rawName: 'Brown sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Peanuts', rawMeasure: '40g roasted' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Moqueca (Brazilian fish stew)',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: DF_PESC,
    instructions:
      '1. Marinate the white fish fillets cut into large chunks in lime juice, garlic, coriander and a pinch of salt for 15 minutes.\n' +
      '2. Warm the olive oil in a wide pan and gently soften the sliced onion, pepper and tomato for 8 minutes.\n' +
      '3. Lay the marinated fish pieces over the vegetables, pour over any remaining marinade and the coconut milk.\n' +
      '4. Cover and simmer gently for 12–15 minutes until the fish is just cooked through and flakes easily.\n' +
      '5. Scatter with extra coriander and serve with rice and lime wedges.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '600g' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jackfruit pulled BBQ tacos',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Drain and rinse the young green jackfruit, then pull the pieces apart with your fingers to create shreds.\n' +
      '2. Fry the sliced onion and garlic in the vegetable oil for 8 minutes, then add the smoked paprika, cumin and chilli powder and cook for a minute.\n' +
      '3. Stir in the tomato purée and brown sugar, then tip in the jackfruit with a splash of stock. Simmer for 20–25 minutes, stirring and shredding the jackfruit further as it cooks, until thick and sticky.\n' +
      '4. Warm the corn tortillas in a dry pan and shred the red cabbage finely.\n' +
      '5. Fill each tortilla with the pulled jackfruit, cabbage and sliced avocado, and finish with coriander and a squeeze of lime.',
    rawLines: [
      { rawName: 'Young green jackfruit', rawMeasure: '2 tins (560g each)' },
      { rawName: 'Corn tortillas', rawMeasure: '8' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Red cabbage', rawMeasure: '150g' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Brown sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 200ml' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Lamb and vegetable Irish stew',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: DF,
    instructions:
      '1. Layer the diced lamb neck fillet, sliced onion and diced potato alternately in a large heavy pan, seasoning each layer.\n' +
      '2. Tuck in the carrot chunks, the whole garlic cloves, parsley stalks and thyme sprigs.\n' +
      '3. Pour over the stock to just cover, then bring to the boil, skim the surface well and reduce to the gentlest simmer.\n' +
      '4. Cover and cook for about 1 hour 30 minutes until the lamb is meltingly tender and the potatoes have dissolved into the broth to thicken it.\n' +
      '5. Season, scatter with chopped parsley and serve straight from the pot.',
    rawLines: [
      { rawName: 'Diced lamb', rawMeasure: '700g neck fillet' },
      { rawName: 'Potato', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Black-eyed pea and spinach stew',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Soften the diced onion and pepper in the olive oil for 8 minutes, then stir in the garlic, all spice, thyme and a pinch of chilli flakes.\n' +
      '2. Add the chopped tomatoes and cook for 5 minutes until reduced slightly.\n' +
      '3. Tip in the drained black-eyed peas and pour in the stock; simmer for 15 minutes until the sauce is rich.\n' +
      '4. Stir the spinach through in handfuls until wilted, then season with salt and a little sugar to balance the tomatoes.\n' +
      '5. Serve with rice and a squeeze of lime.',
    rawLines: [
      { rawName: 'Black-eyed peas', rawMeasure: '2 tins (800g)' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Allspice', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Sugar', rawMeasure: '1/2 tsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Catalan chickpea and chorizo stew',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: DF,
    instructions:
      '1. Fry the sliced chorizo in a wide pan without added oil until the fat renders and it colours, then lift out and set aside.\n' +
      '2. Fry the diced onion and pepper in the chorizo fat for 8 minutes, then add the garlic and smoked paprika.\n' +
      '3. Stir in the tomato purée and the chopped tomatoes and simmer for 5 minutes.\n' +
      '4. Return the chorizo, tip in the drained chickpeas and pour in the stock. Simmer for 20 minutes until thick.\n' +
      '5. Season, stir through the chopped parsley and serve with crusty bread.',
    rawLines: [
      { rawName: 'Chorizo', rawMeasure: '150g' },
      { rawName: 'Chickpeas', rawMeasure: '2 tins (800g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pumpkin and coconut dal',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Soften the diced onion in the vegetable oil for 8 minutes, then stir in the ginger garlic paste, turmeric, cumin and ground coriander.\n' +
      '2. Add the diced pumpkin and stir to coat in the spices, then pour in the coconut milk and stock.\n' +
      '3. Tip in the rinsed red lentils, bring to the boil and simmer for 25 minutes until the lentils have dissolved and the pumpkin is very soft.\n' +
      '4. Roughly mash some of the pumpkin to thicken the dal and season well.\n' +
      '5. Finish with a squeeze of lime and fresh coriander, and serve with rice or naan.',
    rawLines: [
      { rawName: 'Pumpkin', rawMeasure: '500g, diced' },
      { rawName: 'Lentils', rawMeasure: '200g red lentils' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Jerk chicken with rice and peas',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: DF,
    instructions:
      '1. Blend the jerk seasoning ingredients (scotch bonnet, spring onion, garlic, allspice, thyme, soy sauce and a little vegetable oil) to a thick paste.\n' +
      '2. Slash the chicken thighs a few times and rub all over with the jerk paste; marinate for at least 30 minutes.\n' +
      '3. Grill or griddle the chicken for 8–10 minutes per side until deeply charred and cooked through, or roast at 200°C (fan 180°C) for 35 minutes.\n' +
      '4. For the rice and peas, rinse the rice and cook in the coconut milk topped up with water, with the drained kidney beans, a sprig of thyme and salt, covered, for 15 minutes until the liquid is absorbed.\n' +
      '5. Serve the jerk chicken over the rice and peas with a wedge of lime.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8 bone-in' },
      { rawName: 'Scotch bonnet chilli', rawMeasure: '1' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Allspice', rawMeasure: '1 tsp' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Long grain rice', rawMeasure: '300g' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Dinner — pasta, rice & grains ─────────────────────────────────────────
  {
    title: 'Arrabbiata with rigatoni',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Warm the olive oil in a wide pan over a medium heat and fry the sliced garlic and chilli flakes until the garlic is pale gold — about 2 minutes; be careful not to burn it.\n' +
      '2. Add the chopped tomatoes and passata, stir well and season with salt.\n' +
      '3. Simmer briskly for 15 minutes until the sauce is thick and punchy.\n' +
      '4. Meanwhile cook the rigatoni in well-salted boiling water until al dente, reserving a cup of the cooking water.\n' +
      '5. Toss the drained pasta through the sauce, loosening with a little pasta water, scatter with torn parsley and serve.',
    rawLines: [
      { rawName: 'Rigatoni', rawMeasure: '400g' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Passata', rawMeasure: '300ml' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1–2 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Puttanesca with olives and capers',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: DF_PESC,
    instructions:
      '1. Warm the olive oil in a pan and briefly fry the anchovies, garlic and chilli flakes until the anchovies dissolve into the oil.\n' +
      '2. Add the chopped tomatoes and passata and simmer for 10 minutes.\n' +
      '3. Stir in the olives and capers and simmer for a further 5 minutes; adjust seasoning (the anchovies bring saltiness, so taste before adding salt).\n' +
      '4. Cook the spaghetti in well-salted boiling water until al dente, drain and reserve a little cooking water.\n' +
      '5. Toss the pasta through the sauce, loosening with pasta water as needed, and serve scattered with parsley.',
    rawLines: [
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Anchovies', rawMeasure: '6 fillets' },
      { rawName: 'Olives', rawMeasure: '80g' },
      { rawName: 'Capers', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Passata', rawMeasure: '200ml' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Bibimbap with pickled vegetables and gochujang',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: DF_VEG,
    instructions:
      '1. Cook the short-grain rice and keep warm. In separate pans, briefly stir-fry the shredded spinach, the sliced courgette and the julienned carrot each with a little sesame oil and a pinch of salt until just tender; set each aside.\n' +
      '2. Fry the sliced mushrooms in sesame oil until golden and season with a little soy sauce.\n' +
      '3. Mix the gochujang with a little sesame oil, rice vinegar and a pinch of sugar for a sauce.\n' +
      '4. Divide the rice into bowls, arrange the vegetables on top in sections and add a fried egg per portion.\n' +
      '5. Drizzle the gochujang sauce over everything, scatter with sesame seeds and mix at the table before eating.',
    rawLines: [
      { rawName: 'Short-grain rice', rawMeasure: '300g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Mushroom', rawMeasure: '200g' },
      { rawName: 'Gochujang', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tsp' },
      { rawName: 'Sugar', rawMeasure: '1/2 tsp' },
      { rawName: 'Sesame oil', rawMeasure: '3 tbsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spiced lamb flatbread with herb salad',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: DF,
    instructions:
      '1. Mix the minced lamb with the grated onion, tomato purée, cumin, coriander, paprika, chilli flakes and a good pinch of salt; knead for a minute until the mixture coheres.\n' +
      '2. Divide among 4 flatbreads, spreading the meat mixture thinly to the edges.\n' +
      '3. Bake at 220°C (fan 200°C) for 8–10 minutes until the meat is cooked and the bread crisps.\n' +
      '4. Meanwhile toss the parsley, mint, sliced red onion and pomegranate seeds with a squeeze of lemon.\n' +
      '5. Pile the herb salad over the hot flatbreads, roll up and serve with lemon wedges.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '400g' },
      { rawName: 'Flatbread', rawMeasure: '4' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Pomegranate seeds', rawMeasure: '50g' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Aubergine and lentil moussaka (dairy-free)',
    servingsBase: 6,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Slice the aubergines thickly, brush with olive oil and season, then griddle or roast at 220°C (fan 200°C) for 20 minutes until tender.\n' +
      '2. Meanwhile cook the lentil sauce: soften the onion in olive oil, add the garlic, tomato purée, chopped tomatoes, cinnamon, allspice and stock. Simmer for 20 minutes until the green lentils are tender and the sauce is thick.\n' +
      '3. For the topping, whisk the oat milk, cornflour and nutritional yeast in a pan over a medium heat, stirring constantly, until it thickens to a white sauce; season well.\n' +
      '4. Layer the aubergine and lentil sauce alternately in a large ovenproof dish, then pour the white sauce over the top.\n' +
      '5. Bake at 180°C (fan 160°C) for 30–35 minutes until golden and bubbling; rest for 10 minutes before serving.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '3' },
      { rawName: 'Green lentils', rawMeasure: '250g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Allspice', rawMeasure: '1/4 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Oat milk', rawMeasure: '500ml' },
      { rawName: 'Cornflour', rawMeasure: '3 tbsp' },
      { rawName: 'Nutritional yeast', rawMeasure: '3 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Teriyaki salmon with sesame noodles',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: DF_PESC,
    instructions:
      '1. Stir the soy sauce, mirin, sake and sugar together in a small pan and simmer for 3–4 minutes until slightly thickened to a teriyaki glaze.\n' +
      '2. Place the salmon fillets skin-side up in a lined roasting tin, brush with half the glaze and grill on high for 4 minutes, then turn, brush with more glaze and grill for 3–4 minutes more until caramelised.\n' +
      '3. Meanwhile cook the noodles, drain and toss with sesame oil, soy sauce and sesame seeds.\n' +
      '4. Steam or stir-fry the tenderstem broccoli until just tender.\n' +
      '5. Serve the salmon over the noodles with the broccoli and remaining glaze spooned over.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4' },
      { rawName: 'Noodles', rawMeasure: '250g' },
      { rawName: 'Tenderstem broccoli', rawMeasure: '200g' },
      { rawName: 'Soy sauce', rawMeasure: '4 tbsp' },
      { rawName: 'Mirin', rawMeasure: '3 tbsp' },
      { rawName: 'Sake', rawMeasure: '2 tbsp' },
      { rawName: 'Sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame seeds', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Moroccan lamb and olive tagine',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: DF,
    instructions:
      '1. Brown the diced lamb in the olive oil in batches in a wide casserole, then lift out and set aside.\n' +
      '2. Soften the onion in the same pan for 8 minutes, then stir in the garlic, ras el hanout, cinnamon and ginger.\n' +
      '3. Return the lamb, add the saffron soaked in a little warm water, the chopped tomatoes and enough stock to nearly cover. Bring to a simmer.\n' +
      '4. Cover and cook gently for 1 hour, then stir in the olives and preserved lemon rind and simmer uncovered for a further 10–15 minutes to thicken.\n' +
      '5. Season, scatter with chopped coriander and parsley, and serve with couscous.',
    rawLines: [
      { rawName: 'Diced lamb', rawMeasure: '700g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ras el hanout', rawMeasure: '1 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Ginger', rawMeasure: '1 tsp ground' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Olives', rawMeasure: '100g green' },
      { rawName: 'Preserved lemon', rawMeasure: '1 (rind only)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Pork belly with apple and fennel',
    servingsBase: 4,
    totalTimeMinutes: 150,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: DF,
    instructions:
      '1. Score the pork belly skin closely with a sharp knife. Rub with olive oil and salt, getting into the cuts, then leave uncovered in the fridge for 1 hour to dry the skin.\n' +
      '2. Heat the oven to 220°C (fan 200°C). Sit the pork skin-side up on a rack over a roasting tin. Roast for 30 minutes until the crackling blisters and begins to crisp.\n' +
      '3. Reduce to 160°C (fan 140°C) and roast for a further 1 hour 30 minutes until the meat is meltingly tender.\n' +
      '4. Meanwhile quarter the fennel and apples and roast in a separate tin with olive oil, the fennel seeds and thyme for the last 40 minutes.\n' +
      '5. Rest the pork for 15 minutes, then carve and serve with the roasted fennel and apple.',
    rawLines: [
      { rawName: 'Pork belly', rawMeasure: '1kg, bone-in' },
      { rawName: 'Fennel', rawMeasure: '2 bulbs' },
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Fennel seeds', rawMeasure: '1 tsp' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Chicken shawarma wraps',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: DF,
    instructions:
      '1. Mix the cumin, coriander, turmeric, smoked paprika, cinnamon, garlic, lemon juice and olive oil in a bowl. Coat the sliced chicken thighs in the marinade and leave for 20 minutes.\n' +
      '2. Fry or griddle the chicken for 6–8 minutes, turning, until cooked through and slightly charred at the edges.\n' +
      '3. Stir the tahini, lemon juice and a little water until smooth for the sauce.\n' +
      '4. Warm the flatbreads and spread with the tahini sauce.\n' +
      '5. Pile the shawarma chicken, sliced tomato, shredded lettuce and pickled red onion onto the breads, roll up and serve.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '600g, sliced' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Flatbread', rawMeasure: '4' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Red onion', rawMeasure: '1/2, finely sliced' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Spanish seafood paella',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: DF_PESC,
    instructions:
      '1. Warm the olive oil in a wide, shallow paella pan and fry the diced onion and pepper for 8 minutes until soft.\n' +
      '2. Stir in the garlic, smoked paprika and saffron, then add the paella rice and stir for a minute to coat.\n' +
      '3. Pour in the chopped tomatoes and then the hot fish stock, season well and bring to a brisk simmer.\n' +
      '4. Cook undisturbed for 10 minutes, then press the prawns, squid rings and mussels into the rice. Simmer for a further 10 minutes until the rice is tender and the seafood cooked through.\n' +
      '5. Rest off the heat for 5 minutes, then serve straight from the pan with lemon wedges.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '300g' },
      { rawName: 'Prawns', rawMeasure: '200g raw' },
      { rawName: 'Squid', rawMeasure: '200g, rings' },
      { rawName: 'Mussels', rawMeasure: '300g, cleaned' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Saffron', rawMeasure: '1 pinch' },
      { rawName: 'Stock cube', rawMeasure: '1 fish, made up to 800ml' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'One-pan paprika chicken and rice',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: DF,
    instructions:
      '1. Heat the olive oil in a large, deep lidded pan and brown the chicken thighs, skin-side down, for 5 minutes until golden, then turn and brown the other side; set aside.\n' +
      '2. Fry the diced onion and pepper in the same pan for 8 minutes, then add the garlic and smoked paprika.\n' +
      '3. Stir in the tomato purée and then the rice, coating it in the oil.\n' +
      '4. Pour in the stock, season and nestle the chicken back on top skin-side up.\n' +
      '5. Cover and cook on a low heat for 20–22 minutes until the rice is tender and the chicken cooked through. Rest for 5 minutes before serving with lemon wedges.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8 bone-in, skin-on' },
      { rawName: 'Long grain rice', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '2 tsp' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Dinner — mains misc ────────────────────────────────────────────────────
  {
    title: 'Vietnamese pho with beef',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: DF,
    instructions:
      '1. Toast the halved onion and ginger in a dry pan until lightly charred all over.\n' +
      '2. Simmer the beef stock with the charred onion, ginger, star anise, cinnamon, cloves and fish sauce for 45 minutes, then strain into a clean pan.\n' +
      '3. Soak the flat rice noodles in just-boiled water until tender, then drain.\n' +
      '4. Slice the sirloin steak very thinly across the grain.\n' +
      '5. Divide the noodles among bowls, lay the raw beef slices over and ladle the boiling broth over — the heat will cook the beef. Serve with bean sprouts, sliced chilli, lime, mint and basil on the side.',
    rawLines: [
      { rawName: 'Beef sirloin steak', rawMeasure: '400g' },
      { rawName: 'Rice noodles', rawMeasure: '250g flat' },
      { rawName: 'Stock cube', rawMeasure: '2 beef, made up to 1.5 litres' },
      { rawName: 'Onion', rawMeasure: '1 halved' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Star anise', rawMeasure: '3' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
      { rawName: 'Cloves', rawMeasure: '3' },
      { rawName: 'Fish sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Bean sprouts', rawMeasure: '100g' },
      { rawName: 'Chilli', rawMeasure: '1, sliced' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
    ],
  },
  {
    title: 'Griddled tuna steaks with olive salsa',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: DF_PESC,
    instructions:
      '1. For the salsa, roughly chop the olives and mix with the capers, chopped parsley, lemon zest and juice, a little garlic and enough olive oil to loosen.\n' +
      '2. Pat the tuna steaks dry and rub with olive oil, salt and black pepper.\n' +
      '3. Heat a griddle pan until smoking hot and cook the tuna for 90 seconds per side for a pink centre, or 2 minutes per side for well done.\n' +
      '4. Rest for 2 minutes, then serve with a generous spoonful of the olive salsa on each steak.\n' +
      '5. Accompany with a simple green salad and crusty bread.',
    rawLines: [
      { rawName: 'Tuna steak', rawMeasure: '4 (about 150g each)' },
      { rawName: 'Olives', rawMeasure: '100g mixed' },
      { rawName: 'Capers', rawMeasure: '2 tbsp' },
      { rawName: 'Parsley', rawMeasure: '3 tbsp, chopped' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Korean-style beef bulgogi lettuce cups',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: DF,
    instructions:
      '1. Mix the soy sauce, sesame oil, brown sugar, grated pear, grated ginger, garlic and gochujang together for the marinade.\n' +
      '2. Slice the beef sirloin very thinly, toss in the marinade and leave for 15 minutes.\n' +
      '3. Cook the rice and keep warm.\n' +
      '4. Fry the marinated beef in a very hot pan in batches for 2–3 minutes until caramelised at the edges.\n' +
      '5. To serve, spoon rice and beef into crisp lettuce leaves and garnish with sesame seeds and sliced spring onion; wrap and eat with your hands.',
    rawLines: [
      { rawName: 'Beef sirloin steak', rawMeasure: '500g' },
      { rawName: 'Long grain rice', rawMeasure: '300g' },
      { rawName: 'Iceberg lettuce', rawMeasure: '1 head' },
      { rawName: 'Pear', rawMeasure: '1/2, grated' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Brown sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Gochujang', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
    ],
  },

  // ── Side dishes ────────────────────────────────────────────────────────────
  {
    title: 'Patatas bravas',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Side',
    cuisine: 'Spanish',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Cut the potatoes into rough 3cm chunks, toss with olive oil and season well, then roast for 35–40 minutes, turning once, until crisp and golden.\n' +
      '2. For the bravas sauce, fry the onion in olive oil for 8 minutes, then add the garlic, smoked paprika and chilli flakes.\n' +
      '3. Stir in the tomato purée and chopped tomatoes and simmer for 10 minutes until thick; blend until smooth and season with salt and a splash of vinegar.\n' +
      '4. Transfer the roasted potatoes to a serving dish.\n' +
      '5. Spoon the bravas sauce over and serve at once, garnished with parsley.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '800g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Red wine vinegar', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Oven-baked sweet potato fries',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Side',
    cuisine: 'American',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C) and line two baking sheets.\n' +
      '2. Peel the sweet potatoes and cut into finger-width sticks, trying to make them as uniform as possible.\n' +
      '3. Toss in a bowl with the olive oil, smoked paprika, garlic powder and a good pinch of salt; make sure each stick is evenly coated.\n' +
      '4. Spread in a single layer across the baking sheets — leave space between the fries so they roast rather than steam.\n' +
      '5. Bake for 25–28 minutes, turning once halfway, until golden and crisped at the edges. Serve at once.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '700g' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Garlic powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Fennel and orange salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Trim and very thinly slice the fennel bulbs, reserving the fronds. Use a mandoline if you have one.\n' +
      '2. Peel the oranges and cut into thin rounds, catching any juice.\n' +
      '3. Arrange the fennel slices and orange rounds on a platter, overlapping them attractively.\n' +
      '4. Whisk the olive oil with any reserved orange juice and the lemon juice; season with salt and a little black pepper.\n' +
      '5. Drizzle the dressing over the salad, scatter with the fennel fronds and the sliced black olives, and serve.',
    rawLines: [
      { rawName: 'Fennel', rawMeasure: '2 bulbs' },
      { rawName: 'Orange', rawMeasure: '2' },
      { rawName: 'Olives', rawMeasure: '50g black' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted cauliflower with tahini and pomegranate',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'Middle-Eastern',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Cut the cauliflower into florets, toss with olive oil, cumin, turmeric and a good pinch of salt and roast for 25–30 minutes until deeply golden and caramelised at the edges.\n' +
      '2. Meanwhile mix the tahini with lemon juice and just enough water to make a smooth, pourable dressing; season with salt.\n' +
      '3. Transfer the hot cauliflower to a platter and drizzle the tahini dressing generously over.\n' +
      '4. Scatter with pomegranate seeds and chopped parsley.\n' +
      '5. Serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Pomegranate seeds', rawMeasure: '60g' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/4 tsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Japanese cucumber and sesame salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Japanese',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Halve the cucumbers lengthways, scoop out the seeds with a teaspoon and slice thinly on the diagonal.\n' +
      '2. Sprinkle with a little salt and toss; leave for 10 minutes, then rinse and pat dry to remove excess water.\n' +
      '3. Whisk the rice vinegar, sesame oil, soy sauce, a pinch of sugar and the grated ginger together.\n' +
      '4. Toss the cucumber in the dressing.\n' +
      '5. Scatter with toasted sesame seeds and sliced spring onion and serve chilled.',
    rawLines: [
      { rawName: 'Cucumber', rawMeasure: '2' },
      { rawName: 'Ginger', rawMeasure: '1 tsp, grated' },
      { rawName: 'Rice vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Sugar', rawMeasure: '1/2 tsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Roasted asparagus with lemon and almonds',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Snap off the woody ends of the asparagus spears and lay them in a single layer on a baking tray.\n' +
      '2. Drizzle with olive oil, season with salt and black pepper and toss to coat.\n' +
      '3. Roast for 10–12 minutes until tender with some light char on the tips.\n' +
      '4. Meanwhile toast the flaked almonds in a dry pan until golden.\n' +
      '5. Transfer the asparagus to a platter, squeeze over lemon juice and scatter with the toasted almonds and a little lemon zest.',
    rawLines: [
      { rawName: 'Asparagus', rawMeasure: '400g' },
      { rawName: 'Almonds', rawMeasure: '30g, flaked' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mexican street corn salad (dairy-free)',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'Mexican',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat a cast-iron griddle or dry frying pan until very hot and char the corn cobs for 10–12 minutes, turning, until the kernels are blackened in patches; cool briefly and slice the kernels off the cob with a knife.\n' +
      '2. Toss the corn in a bowl with the dairy-free mayonnaise, lime juice, garlic powder, chilli powder and most of the sliced spring onion.\n' +
      '3. Season with salt and a pinch more chilli.\n' +
      '4. Scatter with the remaining spring onion, chopped coriander and a dusting of smoked paprika.\n' +
      '5. Serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Sweetcorn', rawMeasure: '4 cobs (or 400g frozen kernels)' },
      { rawName: 'Mayonnaise', rawMeasure: '3 tbsp dairy-free' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Garlic powder', rawMeasure: '1/4 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Snacks ─────────────────────────────────────────────────────────────────
  {
    title: 'Muhammara (roasted red pepper and walnut dip)',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Drain and roughly chop the roasted red peppers from a jar.\n' +
      '2. Toast the walnuts briefly in a dry pan until fragrant, then cool.\n' +
      '3. Blend the peppers and walnuts with the breadcrumbs, pomegranate molasses, cumin, chilli flakes, lemon juice and olive oil until you have a thick, slightly textured dip.\n' +
      '4. Taste and adjust — it should be sweet, sour, nutty and a little spicy.\n' +
      '5. Transfer to a bowl, swirl the top, drizzle with olive oil and serve with pitta or vegetable crudites.',
    rawLines: [
      { rawName: 'Roasted red peppers', rawMeasure: '200g (from a jar)' },
      { rawName: 'Walnuts', rawMeasure: '80g' },
      { rawName: 'Breadcrumbs', rawMeasure: '30g' },
      { rawName: 'Pomegranate molasses', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Baked tortilla crisps with salsa',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'Mexican',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Stack the corn tortillas and cut into eighths to make triangles, then separate and spread in a single layer on baking trays.\n' +
      '2. Brush or spray lightly with olive oil and sprinkle with sea salt and a pinch of cumin.\n' +
      '3. Bake for 12–15 minutes, turning once, until crisp and lightly coloured.\n' +
      '4. Meanwhile dice the tomatoes finely and mix with the red onion, chilli, lime juice, coriander and a pinch of salt for the salsa.\n' +
      '5. Cool the crisps briefly and serve with the fresh salsa for dipping.',
    rawLines: [
      { rawName: 'Corn tortillas', rawMeasure: '6' },
      { rawName: 'Tomato', rawMeasure: '4 ripe' },
      { rawName: 'Red onion', rawMeasure: '1/4' },
      { rawName: 'Chilli', rawMeasure: '1 green' },
      { rawName: 'Coriander', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Edamame with sea salt and chilli',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Japanese',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Cook the frozen edamame pods in well-salted boiling water for 4–5 minutes until bright green and just tender.\n' +
      '2. Drain thoroughly and tip into a bowl.\n' +
      '3. Immediately sprinkle generously with flaked sea salt and chilli flakes while still hot.\n' +
      '4. Toss and add a drizzle of sesame oil if liked.\n' +
      '5. Serve in the pods — guests squeeze out the beans to eat them.',
    rawLines: [
      { rawName: 'Edamame pods', rawMeasure: '400g frozen' },
      { rawName: 'Sea salt flakes', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tsp (optional)' },
    ],
  },
  {
    title: 'Peanut butter energy balls',
    servingsBase: 16,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'American',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Combine the oats, peanut butter, maple syrup, vanilla extract and a pinch of salt in a bowl and mix thoroughly — the mixture should hold together when pressed.\n' +
      '2. Stir in the dark chocolate chips and the desiccated coconut.\n' +
      '3. Chill the mixture for 15 minutes in the fridge so it firms up and is easier to handle.\n' +
      '4. Roll into 16 small balls, pressing firmly, and place on a tray lined with baking paper.\n' +
      '5. Refrigerate for at least 30 minutes to firm up, then store in an airtight container in the fridge for up to a week.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '150g' },
      { rawName: 'Peanut butter', rawMeasure: '120g' },
      { rawName: 'Maple syrup', rawMeasure: '4 tbsp' },
      { rawName: 'Plain chocolate', rawMeasure: '50g chips' },
      { rawName: 'Desiccated coconut', rawMeasure: '30g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Spinach and artichoke dip (dairy-free)',
    servingsBase: 8,
    totalTimeMinutes: 30,
    course: 'Snack',
    cuisine: 'American',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Blend the soaked cashews with the oat milk, nutritional yeast, garlic, lemon juice and salt until completely smooth and creamy.\n' +
      '2. Squeeze the frozen spinach thoroughly dry and roughly chop. Drain and roughly chop the artichoke hearts.\n' +
      '3. Mix the cashew cream with the spinach, artichokes and sliced spring onion in a bowl; season well.\n' +
      '4. Transfer to a small ovenproof dish and bake for 20 minutes until hot and golden on top.\n' +
      '5. Serve warm with tortilla chips, crudites or toasted bread.',
    rawLines: [
      { rawName: 'Cashews', rawMeasure: '150g, soaked in water for 2 hours' },
      { rawName: 'Spinach', rawMeasure: '300g frozen, defrosted' },
      { rawName: 'Artichoke hearts', rawMeasure: '1 tin (400g)' },
      { rawName: 'Oat milk', rawMeasure: '100ml' },
      { rawName: 'Nutritional yeast', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Mango and chilli rice paper crisps',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'Thai',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Brush each rice paper wrapper with a little water and leave for 30 seconds to soften slightly.\n' +
      '2. Lay them flat on oiled baking sheets, brush with vegetable oil and sprinkle with a pinch of sea salt, chilli flakes and sesame seeds.\n' +
      '3. Bake at 200°C (fan 180°C) for 8–10 minutes until completely crisp and translucent; cool on a wire rack.\n' +
      '4. Toss the diced mango with a squeeze of lime juice and a tiny pinch of chilli powder.\n' +
      '5. Pile the mango on the crisps and scatter with shredded mint just before serving.',
    rawLines: [
      { rawName: 'Rice paper wrappers', rawMeasure: '8' },
      { rawName: 'Mango', rawMeasure: '1 ripe, diced' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1/2' },
      { rawName: 'Mint', rawMeasure: '2 tbsp, shredded' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Desserts ───────────────────────────────────────────────────────────────
  {
    title: 'Sticky toffee pudding (dairy-free)',
    servingsBase: 8,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: DF_VEG,
    instructions:
      '1. Soak the stoned dates in just-boiled water for 10 minutes, then drain and blend to a smooth paste with the bicarbonate of soda.\n' +
      '2. Beat the vegan butter and brown sugar until fluffy, then beat in the eggs one at a time.\n' +
      '3. Fold in the flour, date paste and vanilla to a smooth batter, then pour into a lined 22cm square tin.\n' +
      '4. Bake at 180°C (fan 160°C) for 25–30 minutes until risen and a skewer comes out clean.\n' +
      '5. For the sauce, gently melt the vegan butter, brown sugar and coconut cream together, stirring until smooth. Pour over the warm pudding and serve at once.',
    rawLines: [
      { rawName: 'Dates', rawMeasure: '200g, stoned' },
      { rawName: 'Plain flour', rawMeasure: '175g' },
      { rawName: 'Vegan butter', rawMeasure: '75g, plus 50g for sauce' },
      { rawName: 'Brown sugar', rawMeasure: '150g, plus 100g for sauce' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1 tsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Coconut cream', rawMeasure: '200ml' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Poached pears in spiced red wine',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'French',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Combine the red wine, sugar, cinnamon stick, star anise, cloves and orange zest in a wide pan and bring to the boil, stirring to dissolve the sugar.\n' +
      '2. Peel the pears, leaving the stalks on, and lower into the wine. The liquid should come about halfway up.\n' +
      '3. Simmer gently for 20–25 minutes, turning the pears every 5 minutes, until they are tender when pierced with the tip of a knife.\n' +
      '4. Lift out the pears and boil the syrup briskly for 10–12 minutes until reduced and syrupy.\n' +
      '5. Serve the pears warm or chilled with the syrup spooned over and a scoop of dairy-free vanilla ice cream.',
    rawLines: [
      { rawName: 'Pear', rawMeasure: '4, ripe but firm' },
      { rawName: 'Red wine', rawMeasure: '500ml' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
      { rawName: 'Star anise', rawMeasure: '2' },
      { rawName: 'Cloves', rawMeasure: '3' },
      { rawName: 'Orange', rawMeasure: '1 (zest only)' },
    ],
  },
  {
    title: 'Pineapple and coconut upside-down cake (dairy-free)',
    servingsBase: 8,
    totalTimeMinutes: 65,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Melt the vegan butter with the brown sugar in a 22cm round tin in the oven for 3–4 minutes until bubbling, then arrange the pineapple rings on top.\n' +
      '2. Beat together the remaining vegan butter and caster sugar until pale and fluffy.\n' +
      '3. Mix in the flour, desiccated coconut, baking powder and coconut milk to a smooth batter.\n' +
      '4. Carefully spoon the batter over the pineapple layer in the tin and spread level.\n' +
      '5. Bake for 35–40 minutes until risen and golden. Cool for 10 minutes, then invert onto a plate and serve warm.',
    rawLines: [
      { rawName: 'Pineapple', rawMeasure: '1 tin (432g) rings, drained' },
      { rawName: 'Self-raising flour', rawMeasure: '200g' },
      { rawName: 'Caster sugar', rawMeasure: '150g' },
      { rawName: 'Brown sugar', rawMeasure: '50g (for base)' },
      { rawName: 'Vegan butter', rawMeasure: '150g, plus 30g for base' },
      { rawName: 'Coconut milk', rawMeasure: '100ml' },
      { rawName: 'Desiccated coconut', rawMeasure: '50g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Oat and raisin cookies (dairy-free)',
    servingsBase: 16,
    totalTimeMinutes: 30,
    course: 'Dessert',
    cuisine: 'American',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line two baking sheets with baking paper.\n' +
      '2. Beat the vegan butter and brown sugar until well combined, then stir in the flax egg (1 tbsp ground flaxseed mixed with 3 tbsp water, left for 5 minutes) and vanilla extract.\n' +
      '3. Fold in the oats, plain flour, cinnamon, bicarbonate of soda and a pinch of salt, then stir through the raisins.\n' +
      '4. Drop tablespoon-sized portions onto the prepared baking sheets, spacing them well apart, and flatten slightly.\n' +
      '5. Bake for 12–14 minutes until lightly golden; they firm up as they cool. Transfer to a wire rack.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '150g' },
      { rawName: 'Plain flour', rawMeasure: '100g' },
      { rawName: 'Vegan butter', rawMeasure: '100g' },
      { rawName: 'Brown sugar', rawMeasure: '120g' },
      { rawName: 'Raisins', rawMeasure: '80g' },
      { rawName: 'Ground flaxseed', rawMeasure: '1 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1/2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Passion fruit and coconut panna cotta',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Sprinkle the agar agar over a few tablespoons of cold coconut milk in a small bowl and leave to bloom for 5 minutes.\n' +
      '2. Heat the remaining coconut milk in a pan with the sugar, vanilla and a pinch of salt until steaming but not boiling, then whisk in the bloomed agar and simmer, stirring, for 2 minutes until dissolved.\n' +
      '3. Strain through a fine sieve and divide among four lightly oiled ramekins or glasses.\n' +
      '4. Cool, then refrigerate for 2 hours until set.\n' +
      '5. Halve the passion fruits and spoon the pulp over each panna cotta just before serving, either in the ramekins or turned out onto plates.',
    rawLines: [
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Caster sugar', rawMeasure: '60g' },
      { rawName: 'Agar agar', rawMeasure: '1 tsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Passion fruit', rawMeasure: '4' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Chocolate and orange polenta cake (dairy-free)',
    servingsBase: 8,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: DF_VEG,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a 20cm round tin. Whisk the eggs and caster sugar until thick and pale, about 4 minutes.\n' +
      '2. Fold in the olive oil, orange zest and juice.\n' +
      '3. Sift in the ground almonds, polenta, cocoa powder and baking powder and fold gently until combined.\n' +
      '4. Pour into the prepared tin and bake for 35–40 minutes until set and a skewer comes out clean.\n' +
      '5. Cool in the tin, then dust liberally with icing sugar and serve in slices with a drizzle of orange glaze made by mixing icing sugar with a little orange juice.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Olive oil', rawMeasure: '100ml' },
      { rawName: 'Orange', rawMeasure: '2 (zest and juice)' },
      { rawName: 'Almonds', rawMeasure: '150g, ground' },
      { rawName: 'Polenta', rawMeasure: '75g, fine' },
      { rawName: 'Cocoa powder', rawMeasure: '25g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Icing sugar', rawMeasure: '50g, for dusting and glaze' },
    ],
  },
  {
    title: 'Caramelised banana split with coconut ice cream',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'American',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Halve each banana lengthways and place cut-side up in a wide pan with the coconut sugar and a knob of vegan butter.\n' +
      '2. Cook over a medium heat for 3–4 minutes, basting, until the banana is caramelised and golden on the cut side.\n' +
      '3. Gently melt the plain chocolate with a splash of coconut milk in a small pan, stirring to a smooth sauce.\n' +
      '4. Arrange two banana halves in each bowl, top with two scoops of coconut ice cream and pour the warm chocolate sauce over.\n' +
      '5. Scatter with chopped toasted almonds and serve straight away.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '4' },
      { rawName: 'Coconut ice cream', rawMeasure: '8 scoops' },
      { rawName: 'Plain chocolate', rawMeasure: '80g' },
      { rawName: 'Coconut milk', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Vegan butter', rawMeasure: '20g' },
      { rawName: 'Almonds', rawMeasure: '30g, toasted' },
    ],
  },
  {
    title: 'Raspberry and coconut chia pudding',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Whisk the chia seeds into the coconut milk with the maple syrup and vanilla; stir well for a minute to prevent clumping.\n' +
      '2. Divide among four glasses or jars, cover and refrigerate overnight (or for at least 4 hours) until set and creamy.\n' +
      '3. Blend half the raspberries with a little maple syrup to a smooth coulis; push through a sieve to remove seeds if preferred.\n' +
      '4. Spoon a layer of the raspberry coulis over each chia pudding.\n' +
      '5. Top with the remaining whole raspberries and a scattering of desiccated coconut, and serve chilled.',
    rawLines: [
      { rawName: 'Chia seeds', rawMeasure: '60g' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Raspberries', rawMeasure: '250g' },
      { rawName: 'Maple syrup', rawMeasure: '3 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Desiccated coconut', rawMeasure: '2 tbsp' },
    ],
  },
  {
    title: 'Fruit crumble bars (dairy-free)',
    servingsBase: 12,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a 22cm square tin. Mix the oats, flour, brown sugar, melted vegan butter and a pinch of salt into a crumble; it should clump when squeezed.\n' +
      '2. Press two thirds of the crumble mixture firmly and evenly into the base of the tin.\n' +
      '3. Mix the fruit jam or compote with a squeeze of lemon juice and spread over the crumble base in an even layer.\n' +
      '4. Scatter the remaining crumble over the top, pressing lightly.\n' +
      '5. Bake for 30–35 minutes until golden and crisp on top. Cool completely in the tin before cutting into bars.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '200g' },
      { rawName: 'Plain flour', rawMeasure: '100g' },
      { rawName: 'Brown sugar', rawMeasure: '120g' },
      { rawName: 'Vegan butter', rawMeasure: '130g, melted' },
      { rawName: 'Jam', rawMeasure: '200g raspberry or apricot' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Mango sticky rice',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dessert',
    cuisine: 'Thai',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Soak the glutinous rice in cold water for 30 minutes, then drain. Steam over a pan of simmering water, covered, for 25 minutes until translucent and tender.\n' +
      '2. While the rice steams, warm the coconut milk with the sugar and a pinch of salt in a small pan until the sugar dissolves, then remove from the heat.\n' +
      '3. Tip the cooked rice into a bowl and pour over three quarters of the coconut milk; stir gently and leave for 10 minutes to absorb.\n' +
      '4. Peel and slice the mangoes.\n' +
      '5. Serve the sticky rice in mounds with the mango alongside, and drizzle over the remaining coconut milk sauce.',
    rawLines: [
      { rawName: 'Glutinous rice', rawMeasure: '300g' },
      { rawName: 'Mango', rawMeasure: '2 ripe' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Caster sugar', rawMeasure: '60g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Strawberry and lime granita',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: DF_VEGAN,
    instructions:
      '1. Blend the hulled strawberries until completely smooth, then pass through a sieve to remove seeds.\n' +
      '2. Stir in the lime juice, caster sugar and 200ml water until the sugar dissolves.\n' +
      '3. Pour into a wide, shallow freezer-proof container and freeze for 1 hour.\n' +
      '4. Drag a fork across the surface to break up the ice crystals, then return to the freezer. Repeat every 30–45 minutes for 2–3 hours until the granita is all fluffy, icy shards.\n' +
      '5. Scoop into glasses with a sprig of fresh mint and serve immediately.',
    rawLines: [
      { rawName: 'Strawberries', rawMeasure: '500g' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Caster sugar', rawMeasure: '80g' },
      { rawName: 'Mint', rawMeasure: '1 small bunch, to serve' },
    ],
  },
]
