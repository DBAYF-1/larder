// Curated VEGAN expansion recipes for Larder — second batch, all titles distinct
// from diet-vegan.js. British English, original method prose, no animal products.
//
// Shape: { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//          instructions, rawLines:[{rawName, rawMeasure}] }

const VEGAN = ['Vegan', 'Vegetarian']

export default [

  // ── Breakfast ─────────────────────────────────────────────────────────────

  {
    title: 'Smoothie bowl with granola and fruit',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: VEGAN,
    instructions:
      '1. Blend the frozen banana, frozen mango and oat milk together until thick and completely smooth — add only a splash more milk if the blender struggles.\n' +
      '2. Pour into two shallow bowls; the mixture should be thick enough to hold toppings without sinking.\n' +
      '3. Arrange sliced fresh strawberries and kiwi across each bowl.\n' +
      '4. Scatter over the granola and the chia seeds.\n' +
      '5. Finish with a drizzle of golden syrup and serve immediately before the granola softens.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '2, frozen' },
      { rawName: 'Mango', rawMeasure: '200g frozen' },
      { rawName: 'Oat milk', rawMeasure: '100ml' },
      { rawName: 'Strawberries', rawMeasure: '100g' },
      { rawName: 'Kiwi fruit', rawMeasure: '1' },
      { rawName: 'Vegan granola', rawMeasure: '60g' },
      { rawName: 'Chia seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Golden syrup', rawMeasure: '1 tbsp' },
    ],
  },

  {
    title: 'Avocado and tomato on sourdough',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Toast the sourdough slices until deep golden and crisp.\n' +
      '2. Halve the avocado, discard the stone and scoop the flesh into a bowl. Mash with a fork, then season with salt, black pepper and a squeeze of lemon.\n' +
      '3. Spread the mashed avocado generously over the hot toast.\n' +
      '4. Arrange the sliced tomato on top and scatter with chilli flakes.\n' +
      '5. Finish with a drizzle of olive oil and serve straight away.',
    rawLines: [
      { rawName: 'Sourdough bread', rawMeasure: '2 thick slices' },
      { rawName: 'Avocado', rawMeasure: '1 ripe' },
      { rawName: 'Tomato', rawMeasure: '1 large' },
      { rawName: 'Lemon', rawMeasure: '1/4' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Coconut yoghurt with mango and lime',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Peel and dice the mango, cutting close to the stone to get as much flesh as possible.\n' +
      '2. Zest the lime, then cut in half and squeeze out the juice.\n' +
      '3. Toss the mango in most of the lime juice with a little of the zest.\n' +
      '4. Spoon the coconut yoghurt into bowls and pile the dressed mango on top.\n' +
      '5. Scatter with the remaining lime zest and the toasted desiccated coconut to serve.',
    rawLines: [
      { rawName: 'Coconut yoghurt', rawMeasure: '300g' },
      { rawName: 'Mango', rawMeasure: '1 ripe' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Desiccated coconut', rawMeasure: '2 tbsp, toasted' },
    ],
  },

  {
    title: 'Baked oats with cinnamon and apple',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 190°C (fan 170°C) and grease a medium baking dish.\n' +
      '2. Peel, core and finely dice the apple, then toss with the cinnamon and most of the brown sugar.\n' +
      '3. Stir the oats together with the oat milk, baking powder, vanilla and a pinch of salt.\n' +
      '4. Fold the spiced apple through the oat mixture, then tip into the baking dish and smooth level. Scatter with the remaining sugar.\n' +
      '5. Bake for 25–28 minutes until set and lightly golden on top. Serve warm with a splash more oat milk.',
    rawLines: [
      { rawName: 'Oats', rawMeasure: '200g' },
      { rawName: 'Oat milk', rawMeasure: '500ml' },
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Brown sugar', rawMeasure: '50g' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },

  {
    title: 'Peanut butter and banana toast',
    servingsBase: 2,
    totalTimeMinutes: 5,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Toast the bread until golden and firm.\n' +
      '2. Spread each slice generously with peanut butter while still warm.\n' +
      '3. Peel and slice the banana into rounds and arrange over the peanut butter.\n' +
      '4. Dust with a little ground cinnamon.\n' +
      '5. Drizzle with a little golden syrup and serve at once.',
    rawLines: [
      { rawName: 'Bread', rawMeasure: '2 thick slices' },
      { rawName: 'Peanut butter', rawMeasure: '3 tbsp' },
      { rawName: 'Banana', rawMeasure: '1' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
      { rawName: 'Golden syrup', rawMeasure: '1 tsp' },
    ],
  },

  // ── Soups & Lunches ───────────────────────────────────────────────────────

  {
    title: 'Spiced parsnip and apple soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion in the olive oil over a medium heat for 8 minutes until soft and sweet.\n' +
      '2. Stir in the curry powder and cook for a further minute until fragrant.\n' +
      '3. Add the diced parsnip, peeled and chopped apple, and the stock. Bring to the boil, then lower the heat and simmer for 20–22 minutes until the parsnip is very tender.\n' +
      '4. Blend until completely smooth, then season well and loosen with a little water if needed.\n' +
      '5. Serve in warm bowls with a drizzle of olive oil and crusty bread on the side.',
    rawLines: [
      { rawName: 'Parsnip', rawMeasure: '600g' },
      { rawName: 'Apple', rawMeasure: '1' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Curry powder', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'French onion soup (vegan)',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Lunch',
    cuisine: 'French',
    dietLabels: VEGAN,
    instructions:
      '1. Melt the vegan butter and olive oil together in a large heavy pan. Add the thinly sliced onions and a pinch of salt, then cook over a low heat for 40–45 minutes, stirring regularly, until deeply caramelised and golden.\n' +
      '2. Increase the heat, stir in the garlic and the flour and cook for a minute.\n' +
      '3. Pour in the red wine and let it bubble for 2 minutes, then add the stock, thyme and bay leaf. Simmer for 15 minutes and season.\n' +
      '4. Ladle into ovenproof bowls. Top each with a slice of baguette and a generous smear of vegan butter, then grill until the bread is toasted.\n' +
      '5. Serve straight from the bowls with extra thyme if liked.',
    rawLines: [
      { rawName: 'Onion', rawMeasure: '6 large' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Red wine', rawMeasure: '150ml' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1.2 litres' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Bay leaf', rawMeasure: '1' },
      { rawName: 'Baguette', rawMeasure: '4 slices' },
      { rawName: 'Vegan butter', rawMeasure: '40g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Roasted red pepper and tomato soup',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Place the halved red peppers and halved tomatoes cut-side down on a large roasting tray with the unpeeled garlic cloves.\n' +
      '2. Drizzle with olive oil and roast for 30–35 minutes until the peppers are soft and the skins blistered.\n' +
      '3. Squeeze the garlic from its skins and peel the peppers, then tip everything into a large pan with the stock and smoked paprika.\n' +
      '4. Simmer for 5 minutes, then blend until silky smooth. Season generously.\n' +
      '5. Serve in warm bowls with a drizzle of olive oil and warm bread.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4 red' },
      { rawName: 'Tomato', rawMeasure: '6 large, ripe' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Tuscan white bean and kale soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Warm the olive oil in a large pan and soften the chopped onion, carrot and celery for 10 minutes over a medium heat.\n' +
      '2. Stir in the garlic, rosemary and chilli flakes and cook for a minute.\n' +
      '3. Add one tin of cannellini beans, crush lightly to thicken the broth, then pour in the stock and the chopped tomatoes.\n' +
      '4. Simmer for 15 minutes, then add the remaining whole beans and the shredded kale and cook for a further 8 minutes.\n' +
      '5. Season generously, finish with a drizzle of olive oil and serve with crusty bread.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '2 tins (800g)' },
      { rawName: 'Kale', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Rosemary', rawMeasure: '1 sprig' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Miso and mushroom broth with soba noodles',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: VEGAN,
    instructions:
      '1. Bring the water to a gentle simmer in a large pan and stir in the white miso until dissolved — do not boil as this dulls the miso flavour.\n' +
      '2. Add the sliced shiitake mushrooms and simmer for 5 minutes until tender.\n' +
      '3. Cook the soba noodles in a separate pan of boiling water according to the packet, then drain and rinse under cold water.\n' +
      '4. Add the noodles to the miso broth with the pak choi, sliced tofu and soy sauce. Warm through for 2–3 minutes until the pak choi is just wilted.\n' +
      '5. Ladle into deep bowls and top with sliced spring onion and a drizzle of sesame oil.',
    rawLines: [
      { rawName: 'Soba noodles', rawMeasure: '200g' },
      { rawName: 'Mushroom', rawMeasure: '200g shiitake' },
      { rawName: 'Tofu', rawMeasure: '200g firm, sliced' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'White miso paste', rawMeasure: '3 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Water', rawMeasure: '1.2 litres' },
    ],
  },

  {
    title: 'Tabbouleh',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Pour just enough boiling water over the bulgur wheat to cover it by 1cm. Cover and leave for 15 minutes until the water is absorbed and the grains are tender.\n' +
      '2. Fluff up with a fork and spread on a tray to cool completely.\n' +
      '3. Very finely chop the flat-leaf parsley — use a large bunch, as parsley is the hero here, not the grain.\n' +
      '4. Combine the cooled bulgur with the parsley, chopped mint, diced tomatoes and finely sliced spring onion.\n' +
      '5. Dress with plenty of lemon juice, olive oil, salt and black pepper. Toss well and serve at room temperature.',
    rawLines: [
      { rawName: 'Bulgur wheat', rawMeasure: '100g' },
      { rawName: 'Parsley', rawMeasure: '2 large bunches' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Lemon', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Mexican bean and avocado wrap',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Mexican',
    dietLabels: VEGAN,
    instructions:
      '1. Warm the black beans in a small pan with the cumin, smoked paprika and a pinch of salt until hot, then lightly crush with the back of a spoon.\n' +
      '2. Mash the avocado with lime juice and a little salt.\n' +
      '3. Warm the tortillas briefly in a dry frying pan or directly over a gas flame.\n' +
      '4. Spread the crushed beans down the centre of each tortilla, then add the mashed avocado, shredded lettuce, sliced tomato and coriander.\n' +
      '5. Roll up tightly, tucking in the ends, and serve immediately with a wedge of lime.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Avocado', rawMeasure: '2 ripe' },
      { rawName: 'Tortilla wrap', rawMeasure: '4' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Roasted beetroot and lentil salad',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Peel and cut the beetroot into wedges, toss with a little olive oil and season, then roast for 35–40 minutes until tender and caramelised at the edges.\n' +
      '2. Meanwhile rinse the puy lentils and simmer in cold water for 20–22 minutes until just tender; drain well.\n' +
      '3. Whisk the remaining olive oil with the red wine vinegar, mustard and a little salt to make a dressing.\n' +
      '4. Toss the warm lentils with most of the dressing and the rocket.\n' +
      '5. Top with the roasted beetroot, chopped walnuts and a final drizzle of dressing.',
    rawLines: [
      { rawName: 'Beetroot', rawMeasure: '500g raw' },
      { rawName: 'Puy lentils', rawMeasure: '200g' },
      { rawName: 'Rocket', rawMeasure: '80g' },
      { rawName: 'Walnuts', rawMeasure: '50g' },
      { rawName: 'Red wine vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Fattoush salad',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Tear the pitta bread into rough pieces, toss with a little olive oil and bake for 10–12 minutes until crisp and golden.\n' +
      '2. While the pitta toasts, chop the tomatoes, cucumber and radishes and slice the spring onions.\n' +
      '3. Whisk the remaining olive oil with the lemon juice, pomegranate molasses, sumac and a pinch of salt.\n' +
      '4. Combine the vegetables with the shredded lettuce and most of the crisped pitta in a large bowl.\n' +
      '5. Pour over the dressing, toss gently, scatter with the remaining pitta and serve immediately.',
    rawLines: [
      { rawName: 'Pitta bread', rawMeasure: '2' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Radish', rawMeasure: '6' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Lettuce', rawMeasure: '1 small' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Sumac', rawMeasure: '1 tsp' },
      { rawName: 'Pomegranate molasses', rawMeasure: '1 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Gazpacho',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Spanish',
    dietLabels: VEGAN,
    instructions:
      '1. Roughly chop the tomatoes, cucumber, red pepper and garlic and place in a blender.\n' +
      '2. Add the olive oil, sherry vinegar, a good pinch of salt and the soaked stale bread (squeezed dry).\n' +
      '3. Blend until very smooth, then pass through a sieve for an extra-silky result.\n' +
      '4. Taste and adjust the seasoning and vinegar, then chill for at least 1 hour until very cold.\n' +
      '5. Serve in chilled bowls with a drizzle of olive oil and very finely diced cucumber, tomato and pepper on top.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '800g ripe' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Bread', rawMeasure: '1 slice stale, soaked in water' },
      { rawName: 'Sherry vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Edamame and sesame noodle salad',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: VEGAN,
    instructions:
      '1. Cook the noodles according to the packet, drain and rinse under cold water until completely cool.\n' +
      '2. Cook the edamame in boiling water for 3 minutes, then drain.\n' +
      '3. Whisk together the soy sauce, sesame oil, rice vinegar, grated ginger and a little sugar to make a dressing.\n' +
      '4. Toss the noodles with the edamame, shredded carrot, sliced cucumber and the dressing.\n' +
      '5. Pile into bowls and scatter with sesame seeds and sliced spring onion.',
    rawLines: [
      { rawName: 'Noodles', rawMeasure: '250g' },
      { rawName: 'Edamame beans', rawMeasure: '200g frozen' },
      { rawName: 'Carrot', rawMeasure: '1, shredded' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
    ],
  },

  // ── Dinners — Indian & Asian ──────────────────────────────────────────────

  {
    title: 'Aloo gobi',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the vegetable oil in a wide pan over a medium heat. Add the cumin seeds and let them sizzle for 30 seconds.\n' +
      '2. Add the chopped onion and cook for 8 minutes until soft and golden.\n' +
      '3. Stir in the ginger garlic paste, turmeric, coriander and chilli powder and cook for a minute.\n' +
      '4. Add the diced potato and cauliflower florets, stir to coat and pour in a splash of water. Cover and cook over a low heat for 20–22 minutes, stirring occasionally, until both vegetables are tender.\n' +
      '5. Season, uncover and increase the heat briefly to dry off any excess moisture. Scatter with fresh coriander and serve with rice or roti.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '400g' },
      { rawName: 'Cauliflower', rawMeasure: '1/2 head' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp seeds' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Dal makhani (vegan)',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: VEGAN,
    instructions:
      '1. Soak the whole black lentils overnight, then drain. Simmer in plenty of fresh water for 45–50 minutes until completely tender.\n' +
      '2. Meanwhile soften the finely chopped onion in the vegetable oil over a medium heat for 10 minutes.\n' +
      '3. Stir in the ginger garlic paste, garam masala, cumin and chilli powder and cook for a minute, then add the tomato purée and chopped tomatoes. Cook down for 8–10 minutes.\n' +
      '4. Drain most of the water from the cooked lentils leaving just enough to loosen, then stir the lentils into the tomato base. Add the coconut milk and simmer gently for 20 minutes, stirring often, until rich and thick.\n' +
      '5. Season, finish with a knob of vegan butter and coriander, and serve with rice or naan.',
    rawLines: [
      { rawName: 'Black lentils', rawMeasure: '250g whole (urad dal)' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Vegan butter', rawMeasure: '20g' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Paneer-free palak tofu',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: VEGAN,
    instructions:
      '1. Press the tofu, cut into cubes and fry in a little vegetable oil until golden on all sides. Lift out and set aside.\n' +
      '2. Blanch the spinach briefly in boiling water, drain, squeeze dry and blend to a smooth purée.\n' +
      '3. Soften the chopped onion in the remaining oil for 8 minutes, then stir in the ginger garlic paste and the spices; cook for a minute.\n' +
      '4. Stir in the blended spinach with a splash of water and simmer for 5 minutes. Add the coconut cream and the fried tofu.\n' +
      '5. Simmer gently for 5–8 minutes until the tofu is heated through and the sauce is rich. Season and serve with rice.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g firm' },
      { rawName: 'Spinach', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Garam masala', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1/4 tsp' },
      { rawName: 'Coconut cream', rawMeasure: '100ml' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Thai red curry with butternut squash and chickpeas',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: VEGAN,
    instructions:
      '1. Fry the Thai red curry paste in a large pan or wok for a minute until fragrant, then pour in the coconut milk and bring to a simmer.\n' +
      '2. Add the diced butternut squash and simmer for 10 minutes until just beginning to soften.\n' +
      '3. Tip in the drained chickpeas and the green beans and cook for a further 8 minutes until the squash is tender.\n' +
      '4. Stir in the soy sauce, lime juice and most of the basil, taste and adjust the seasoning.\n' +
      '5. Serve over steamed jasmine rice with the remaining basil scattered on top.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '600g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Green beans', rawMeasure: '150g' },
      { rawName: 'Thai red curry paste', rawMeasure: '3 tbsp' },
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Rice', rawMeasure: '300g jasmine' },
    ],
  },

  {
    title: 'Indonesian-style tempeh stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: VEGAN,
    instructions:
      '1. Cut the tempeh into small cubes and fry in the vegetable oil over a medium-high heat until golden and crisp on the outside; lift out and set aside.\n' +
      '2. Stir-fry the sliced onion, pepper and pak choi over a high heat for 3–4 minutes.\n' +
      '3. Add the garlic and ginger and cook for a minute, then add the chopped tomatoes, sweet chilli sauce and soy sauce.\n' +
      '4. Return the tempeh to the pan and toss everything together, cooking for 2 minutes until the sauce coats the tempeh.\n' +
      '5. Scatter with spring onion and serve with steamed rice.',
    rawLines: [
      { rawName: 'Tempeh', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Pak choi', rawMeasure: '2 heads' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1/2 tin (200g)' },
      { rawName: 'Sweet chilli sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Rice', rawMeasure: '300g' },
    ],
  },

  {
    title: 'Japanese mushroom ramen',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: VEGAN,
    instructions:
      '1. Bring the stock to a simmer with the kombu (if using) for 10 minutes, then discard the kombu. Stir in the white miso, soy sauce and sesame oil.\n' +
      '2. Slice the mushrooms and fry in a little vegetable oil over a high heat until golden; season and set aside.\n' +
      '3. Cook the ramen noodles according to the packet, drain and divide among four large bowls.\n' +
      '4. Ladle the hot miso broth over the noodles, then top with the sautéed mushrooms, sliced spring onion, a handful of beansprouts and sliced bamboo shoots.\n' +
      '5. Drizzle each bowl with a little extra sesame oil and serve immediately with chilli oil on the side.',
    rawLines: [
      { rawName: 'Ramen noodles', rawMeasure: '300g' },
      { rawName: 'Mushroom', rawMeasure: '300g mixed' },
      { rawName: 'White miso paste', rawMeasure: '3 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '2, made up to 1.2 litres' },
      { rawName: 'Bean sprouts', rawMeasure: '100g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Chilli oil', rawMeasure: '1 tsp, to serve' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
    ],
  },

  {
    title: 'Korean-style spicy tofu rice bowl',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: VEGAN,
    instructions:
      '1. Press the tofu and cut into cubes. Toss with the cornflour, salt and pepper, then fry in the vegetable oil until crisp and golden all over. Set aside.\n' +
      '2. Whisk the gochujang, soy sauce, sesame oil, rice vinegar and a little sugar together into a sauce.\n' +
      '3. Stir-fry the sliced courgette and carrot over a high heat for 3 minutes, then pour in the sauce and toss to coat.\n' +
      '4. Return the tofu and toss briefly.\n' +
      '5. Serve over steamed rice, topped with sliced spring onion and sesame seeds.',
    rawLines: [
      { rawName: 'Tofu', rawMeasure: '400g firm' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Gochujang paste', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Rice vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Cornflour', rawMeasure: '2 tbsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Tom kha (vegan coconut and galangal broth)',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: VEGAN,
    instructions:
      '1. Bring the stock to a simmer and add the sliced galangal (or ginger), lemongrass stalks (bruised), kaffir lime leaves and chilli. Simmer for 10 minutes to infuse.\n' +
      '2. Remove the galangal and lemongrass, then pour in the coconut milk and bring to a gentle simmer.\n' +
      '3. Add the sliced mushrooms and simmer for 5 minutes, then stir in the drained tofu and the baby corn.\n' +
      '4. Season with soy sauce and lime juice — the broth should be fragrant, slightly sour and gently spiced.\n' +
      '5. Ladle into bowls, scatter with coriander and serve with steamed rice or noodles.',
    rawLines: [
      { rawName: 'Coconut milk', rawMeasure: '1 tin (400ml)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 600ml' },
      { rawName: 'Tofu', rawMeasure: '250g firm' },
      { rawName: 'Mushroom', rawMeasure: '200g' },
      { rawName: 'Baby corn', rawMeasure: '100g' },
      { rawName: 'Galangal', rawMeasure: '3 slices (or use ginger)' },
      { rawName: 'Lemongrass', rawMeasure: '2 stalks' },
      { rawName: 'Lime leaves', rawMeasure: '4' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Soy sauce', rawMeasure: '2 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
    ],
  },

  // ── Dinners — European & Mediterranean ───────────────────────────────────

  {
    title: 'Puttanesca pasta (vegan)',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Warm the olive oil in a wide pan over a medium heat and add the garlic, chilli flakes and capers; cook for a minute until the garlic just begins to colour.\n' +
      '2. Add the olives and passata, season lightly and simmer for 12–15 minutes until the sauce has thickened and deepened in colour.\n' +
      '3. Meanwhile cook the spaghetti in plenty of well-salted boiling water until al dente, reserving a cup of the cooking water.\n' +
      '4. Drain the pasta and add to the sauce with a splash of cooking water; toss vigorously until every strand is coated.\n' +
      '5. Serve topped with torn flat-leaf parsley.',
    rawLines: [
      { rawName: 'Spaghetti', rawMeasure: '400g' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Olives', rawMeasure: '100g black, pitted' },
      { rawName: 'Capers', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Pasta e fagioli',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Warm the olive oil in a large heavy pan and soften the chopped onion, carrot and celery for 10 minutes.\n' +
      '2. Stir in the garlic, rosemary and tomato purée and cook for a minute.\n' +
      '3. Add the chopped tomatoes and the stock and bring to a simmer for 10 minutes.\n' +
      '4. Tip in the drained borlotti beans, lightly crushing a third to thicken the broth, then add the small pasta shapes. Cook for 8–10 minutes until the pasta is just tender.\n' +
      '5. Adjust the consistency with a little water if needed, season well and drizzle with extra olive oil to serve.',
    rawLines: [
      { rawName: 'Borlotti beans', rawMeasure: '2 tins (800g)' },
      { rawName: 'Pasta', rawMeasure: '150g small shapes' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Rosemary', rawMeasure: '1 sprig' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Vegan arancini',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Snack',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the finely chopped onion in the olive oil, then stir in the risotto rice, coating well.\n' +
      '2. Add the hot stock a ladleful at a time, stirring, until absorbed and the rice is tender — about 18 minutes. Season and cool completely.\n' +
      '3. Shape the cold risotto into golf-ball-sized balls. Push a small cube of vegan mozzarella into the centre of each and close the rice around it.\n' +
      '4. Roll in flour, dip in a little soya milk and coat in breadcrumbs.\n' +
      '5. Shallow-fry in the vegetable oil for 3–4 minutes, turning, until crisp and deep golden. Drain on kitchen paper and serve hot with tomato sauce for dipping.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '300g risotto rice' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Vegan mozzarella', rawMeasure: '100g' },
      { rawName: 'Breadcrumbs', rawMeasure: '150g' },
      { rawName: 'Plain flour', rawMeasure: '50g' },
      { rawName: 'Soya milk', rawMeasure: '100ml' },
      { rawName: 'Passata', rawMeasure: '200g, to serve' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Spanish-style braised chickpeas with spinach',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Spanish',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the olive oil in a wide pan and soften the chopped onion for 8 minutes until sweet and golden.\n' +
      '2. Stir in the garlic, smoked paprika and cumin and cook for a minute.\n' +
      '3. Add the chopped tomatoes and tomato purée and cook down for 5 minutes until thickened.\n' +
      '4. Add the drained chickpeas and a splash of water, season and simmer for 10 minutes.\n' +
      '5. Stir through the spinach in handfuls until wilted, finish with a splash of sherry vinegar and serve with crusty bread.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (800g)' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Sherry vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Greek gigantes plaki',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Soften the sliced onion in the olive oil in a flameproof casserole for 10 minutes, then stir in the garlic, smoked paprika and dried oregano.\n' +
      '2. Add the chopped tomatoes, tomato purée, sugar and stock and bring to a simmer.\n' +
      '3. Drain the butter beans and fold gently into the tomato sauce.\n' +
      '4. Transfer to the oven and bake uncovered for 35–40 minutes until the beans are very tender and the sauce has reduced around them.\n' +
      '5. Season, scatter with flat-leaf parsley and serve warm or at room temperature with bread.',
    rawLines: [
      { rawName: 'Butter beans', rawMeasure: '2 tins (800g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  // ── Dinners — Middle Eastern & African ───────────────────────────────────

  {
    title: 'Shakshuka with white beans',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the olive oil in a wide, deep frying pan and soften the chopped onion and pepper over a medium heat for 8 minutes.\n' +
      '2. Stir in the garlic, cumin, smoked paprika and a pinch of chilli flakes; cook for a minute until fragrant.\n' +
      '3. Add the chopped tomatoes and tomato purée and simmer for 10 minutes until thickened and rich.\n' +
      '4. Tip in the drained cannellini beans and simmer for 5 minutes, then make wells in the sauce and nestle in spoonfuls of crumbled tofu seasoned with turmeric.\n' +
      '5. Cover and cook gently for 5 minutes until the tofu is warmed through. Season, scatter with parsley and serve with flatbread.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tofu', rawMeasure: '200g firm' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (800g)' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Turmeric', rawMeasure: '1/4 tsp' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Moroccan-spiced roasted vegetable couscous',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Toss the diced aubergine, courgette, red onion wedges and pepper with the olive oil, ras el hanout and a generous pinch of salt.\n' +
      '2. Spread in a large roasting tin and roast for 30–35 minutes, turning once, until tender and caramelised.\n' +
      '3. Meanwhile tip the couscous into a bowl, pour over the same volume of boiling stock, cover and leave for 5 minutes.\n' +
      '4. Fluff the couscous with a fork and stir through the lemon juice, most of the parsley and the drained chickpeas.\n' +
      '5. Top with the roasted vegetables, scatter with the remaining parsley and drizzle with a little extra olive oil.',
    rawLines: [
      { rawName: 'Couscous', rawMeasure: '250g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Ras el hanout', rawMeasure: '1.5 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Turkish red lentil soup (mercimek corbasi)',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Turkish',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion in the olive oil over a medium heat for 8 minutes, then stir in the garlic and carrot.\n' +
      '2. Add the rinsed red lentils, chopped tomatoes and stock. Bring to the boil, then simmer for 20–25 minutes until the lentils have completely broken down.\n' +
      '3. Blend until very smooth, then return to the pan and reheat gently; adjust the consistency with a little water if very thick.\n' +
      '4. For the paprika butter, melt the vegan butter in a small pan and stir in the paprika and a pinch of chilli flakes until sizzling.\n' +
      '5. Ladle the soup into bowls, drizzle with the paprika butter and serve with warm flatbread and a squeeze of lemon.',
    rawLines: [
      { rawName: 'Red lentils', rawMeasure: '250g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1/2 tin (200g)' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Vegan butter', rawMeasure: '20g' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Ful medames',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Drain the broad beans and warm in a pan with a splash of water over a low heat for 5 minutes.\n' +
      '2. Roughly mash about half of the beans with the back of a spoon, leaving the rest whole for texture.\n' +
      '3. Stir in the olive oil, garlic, cumin, lemon juice and tomato and heat through gently. Season well.\n' +
      '4. Tip into a wide bowl and make a well in the centre. Drizzle with extra olive oil and scatter with the chopped parsley, spring onion and a pinch of chilli flakes.\n' +
      '5. Serve warm with warm flatbread and sliced fresh tomato.',
    rawLines: [
      { rawName: 'Broad beans', rawMeasure: '2 tins (800g)' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, crushed' },
      { rawName: 'Tomato', rawMeasure: '1, diced' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Imam bayildi (Turkish stuffed aubergine)',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Turkish',
    dietLabels: VEGAN,
    instructions:
      '1. Halve the aubergines lengthways and score the flesh in a diamond pattern without cutting through the skin. Brush generously with olive oil and place cut-side down in a roasting tin.\n' +
      '2. Roast at 200°C (fan 180°C) for 25 minutes until tender, then flip cut-side up and cool slightly.\n' +
      '3. Meanwhile soften the sliced onions in olive oil for 15 minutes, then add the garlic, chopped tomatoes, sugar and cinnamon and cook for 10 minutes until thick.\n' +
      '4. Spoon the tomato mixture over each aubergine half, pressing gently into the scored flesh.\n' +
      '5. Return to the oven for 20 minutes until meltingly tender. Cool to room temperature, scatter with parsley and serve with flatbread.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '4' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'West African groundnut stew',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: VEGAN,
    instructions:
      '1. Warm the vegetable oil in a large pan and soften the chopped onion for 8 minutes, then stir in the garlic, ginger and chilli.\n' +
      '2. Add the sweet potato, chopped tomatoes and stock. Bring to the boil and simmer for 15 minutes until the sweet potato begins to soften.\n' +
      '3. Stir in the peanut butter and half the toasted groundnuts; simmer for a further 10 minutes until the stew is rich and nutty.\n' +
      '4. Add the drained chickpeas and the spinach, stirring until the spinach wilts and the chickpeas are warmed through.\n' +
      '5. Season, scatter with the remaining groundnuts and coriander, and serve with rice or flatbread.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '500g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Spinach', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Peanut butter', rawMeasure: '3 tbsp' },
      { rawName: 'Peanuts', rawMeasure: '60g, toasted' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 500ml' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Caribbean rice and peas',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Side',
    cuisine: 'Caribbean',
    dietLabels: VEGAN,
    instructions:
      '1. Rinse the rice and set aside. Soften the sliced spring onion and thyme in the vegetable oil for 2 minutes.\n' +
      '2. Add the garlic, allspice and whole scotch bonnet pepper (left whole so it adds flavour without too much heat).\n' +
      '3. Stir in the rice, then pour in the coconut milk and stock. Bring to the boil.\n' +
      '4. Drain the kidney beans and stir in. Cover tightly, reduce the heat to very low and cook for 15–18 minutes until the liquid is absorbed.\n' +
      '5. Remove the scotch bonnet, rest for 5 minutes then fork through and serve.',
    rawLines: [
      { rawName: 'Basmati rice', rawMeasure: '300g long grain' },
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Allspice', rawMeasure: '1/2 tsp' },
      { rawName: 'Scotch bonnet chilli', rawMeasure: '1, left whole' },
      { rawName: 'Vegetable oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Jerk-spiced jackfruit with rice',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Caribbean',
    dietLabels: VEGAN,
    instructions:
      '1. Drain and rinse the jackfruit and shred each piece by pulling it apart with two forks, removing any large seeds.\n' +
      '2. Mix the jerk seasoning with the soy sauce, lime juice, garlic and a little oil to make a marinade. Toss the jackfruit well and leave for 15 minutes.\n' +
      '3. Heat a griddle or frying pan over a high heat and cook the jackfruit for 6–8 minutes, turning, until charred and fragrant.\n' +
      '4. Meanwhile cook the rice, then drain and fluff.\n' +
      '5. Serve the jerk jackfruit over the rice with sliced spring onion, lime wedges and a simple cucumber salad.',
    rawLines: [
      { rawName: 'Jackfruit', rawMeasure: '2 tins (560g each)' },
      { rawName: 'Jerk seasoning', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Rice', rawMeasure: '300g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
    ],
  },

  // ── Dinners — British & American ─────────────────────────────────────────

  {
    title: 'Vegan mushroom Wellington',
    servingsBase: 6,
    totalTimeMinutes: 80,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the olive oil in a wide pan and fry the finely chopped mushrooms over a high heat until all moisture has evaporated and the mixture is deep brown and dry — this is the duxelles.\n' +
      '2. Stir in the garlic, thyme, mustard and some black pepper, cook for a minute and cool completely.\n' +
      '3. Roll out the vegan puff pastry into a large rectangle. Spoon the duxelles in a thick line down the centre, leaving a border around the edges.\n' +
      '4. Place the whole portobello mushrooms end to end on the duxelles, then fold the pastry over, pressing and crimping the edges to seal. Brush with soya milk.\n' +
      '5. Bake at 200°C (fan 180°C) for 30–35 minutes until deep golden and the pastry is crisp. Rest for 5 minutes before slicing.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '400g chestnut' },
      { rawName: 'Portobello mushroom', rawMeasure: '4 large' },
      { rawName: 'Puff pastry', rawMeasure: '320g (check vegan)' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Soya milk', rawMeasure: '2 tbsp, to glaze' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Vegan chilli with chocolate',
    servingsBase: 6,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion and peppers in the olive oil for 10 minutes over a medium heat.\n' +
      '2. Stir in the garlic, cumin, smoked paprika, chilli powder and oregano and cook for a minute.\n' +
      '3. Add the tomato purée, chopped tomatoes and stock, then tip in all the drained beans. Bring to the boil.\n' +
      '4. Lower the heat and simmer gently for 30 minutes, stirring occasionally. Stir in the dark chocolate and season — the chocolate adds depth and rounds the heat.\n' +
      '5. Serve with steamed rice, sliced avocado and fresh coriander.',
    rawLines: [
      { rawName: 'Kidney beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Black beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '2 tins (800g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Plain chocolate', rawMeasure: '25g (vegan)' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Vegan hotpot with root vegetables',
    servingsBase: 4,
    totalTimeMinutes: 80,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion and carrot in the olive oil in a large casserole for 10 minutes.\n' +
      '2. Stir in the garlic, thyme, rosemary and tomato purée, then scatter in the flour and stir well.\n' +
      '3. Gradually add the stock, bring to a simmer and stir in the drained lentils and diced swede. Season.\n' +
      '4. Arrange overlapping slices of potato on top, brush with a little olive oil and press down gently.\n' +
      '5. Cover and bake at 190°C (fan 170°C) for 40 minutes, then uncover and bake for 20 more minutes until the potato topping is crisp and golden.',
    rawLines: [
      { rawName: 'Potato', rawMeasure: '600g, thinly sliced' },
      { rawName: 'Brown lentils', rawMeasure: '200g, rinsed' },
      { rawName: 'Swede', rawMeasure: '300g' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Rosemary', rawMeasure: '1 sprig' },
      { rawName: 'Tomato purée', rawMeasure: '1 tbsp' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Cauliflower steaks with chimichurri',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Remove any leaves from the cauliflower and cut vertically through the head into four thick steaks.\n' +
      '2. Brush both sides with olive oil, season and place on a large lined tray. Roast for 25–30 minutes, turning once, until deep golden and tender.\n' +
      '3. For the chimichurri, finely chop the parsley, oregano and chilli and combine with the garlic, red wine vinegar and olive oil; season.\n' +
      '4. Remove the cauliflower from the oven and transfer to plates.\n' +
      '5. Spoon the chimichurri generously over each steak and serve with flatbread or crusty bread.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '2 large heads' },
      { rawName: 'Parsley', rawMeasure: '1 large bunch' },
      { rawName: 'Oregano', rawMeasure: '1 tbsp fresh or dried' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Red wine vinegar', rawMeasure: '2 tbsp' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Lentil soup with lemon and sumac',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion in the olive oil for 8 minutes, then add the garlic, cumin and turmeric.\n' +
      '2. Stir in the rinsed red lentils and the stock, bring to the boil and simmer for 20–25 minutes until the lentils are very soft.\n' +
      '3. Blend until smooth, then return to the pan and season. Add more water or stock to reach a thick but pourable consistency.\n' +
      '4. Finish with a generous squeeze of lemon juice.\n' +
      '5. Serve in bowls topped with a pinch of sumac, a drizzle of olive oil and warm flatbread alongside.',
    rawLines: [
      { rawName: 'Red lentils', rawMeasure: '200g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Sumac', rawMeasure: '1 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Sides ─────────────────────────────────────────────────────────────────

  {
    title: 'Roasted broccoli with garlic and chilli',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Side',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Break the broccoli into florets and cut any thick stems in half lengthways so they roast at the same rate as the florets.\n' +
      '2. Toss with the olive oil, sliced garlic and chilli flakes, then season generously.\n' +
      '3. Spread in a single layer on a large roasting tray — do not crowd or the broccoli will steam rather than roast.\n' +
      '4. Roast for 18–20 minutes until the edges are deeply browned and slightly crisp.\n' +
      '5. Squeeze over a little lemon juice immediately on coming out of the oven and serve.',
    rawLines: [
      { rawName: 'Broccoli', rawMeasure: '600g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Crispy smashed potatoes with herbs',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Side',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Boil the baby potatoes in well-salted water for 15–18 minutes until completely tender. Drain and leave to steam-dry for 5 minutes.\n' +
      '2. Heat the oven to 230°C (fan 210°C). Drizzle a large roasting tray with olive oil and put it in the oven to heat for 5 minutes.\n' +
      '3. Transfer the potatoes to the hot tray and press each one flat with a potato masher or the bottom of a cup.\n' +
      '4. Drizzle with more oil, scatter with the chopped rosemary and garlic and season well.\n' +
      '5. Roast for 25–30 minutes until crispy and deep golden. Finish with a squeeze of lemon and sea salt.',
    rawLines: [
      { rawName: 'Baby potato', rawMeasure: '800g' },
      { rawName: 'Rosemary', rawMeasure: '2 sprigs, finely chopped' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, finely chopped' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Spiced red cabbage with apple',
    servingsBase: 6,
    totalTimeMinutes: 60,
    course: 'Side',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Finely shred the red cabbage, discarding the tough core.\n' +
      '2. Melt the vegan butter in a large pan and add the cabbage with the sliced onion. Stir over a medium heat for 5 minutes.\n' +
      '3. Stir in the peeled, cored and diced apple, the vinegar, sugar, ground cloves and cinnamon. Season.\n' +
      '4. Add a splash of water, cover and cook over a low heat for 40–45 minutes, stirring occasionally, until the cabbage is completely tender.\n' +
      '5. Adjust the sweet-sour balance with a little extra vinegar or sugar and serve.',
    rawLines: [
      { rawName: 'Red cabbage', rawMeasure: '1 small (about 700g)' },
      { rawName: 'Apple', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Red wine vinegar', rawMeasure: '3 tbsp' },
      { rawName: 'Brown sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Ground cloves', rawMeasure: '1 pinch' },
      { rawName: 'Vegan butter', rawMeasure: '20g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Baba ganoush',
    servingsBase: 6,
    totalTimeMinutes: 40,
    course: 'Snack',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Char the whole aubergines directly over a gas flame (or under a very hot grill), turning with tongs, for 15–20 minutes until the skin is completely blackened and the flesh has collapsed.\n' +
      '2. Transfer to a colander and leave to drain until cool enough to handle, then peel away the charred skin and discard.\n' +
      '3. Finely chop the soft flesh or briefly blend, keeping some texture.\n' +
      '4. Mix with the tahini, garlic, lemon juice and olive oil; season generously with salt and cumin.\n' +
      '5. Spread into a bowl, drizzle with olive oil and dust with smoked paprika. Serve with warm flatbread.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '3 large' },
      { rawName: 'Tahini', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 pinch' },
      { rawName: 'Pitta bread', rawMeasure: '4' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Sauteed cavolo nero with garlic and lemon',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Strip the cavolo nero leaves from the tough central stalks and tear into large pieces.\n' +
      '2. Blanch in boiling salted water for 2 minutes, then drain and squeeze out excess water.\n' +
      '3. Heat the olive oil in a wide frying pan over a medium heat and add the sliced garlic; cook until pale golden.\n' +
      '4. Add the blanched cavolo nero and the chilli flakes and toss over the heat for 2–3 minutes until coated and tender.\n' +
      '5. Season, squeeze over the lemon juice and serve at once.',
    rawLines: [
      { rawName: 'Cavolo nero', rawMeasure: '300g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chilli flakes', rawMeasure: '1/4 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Minted broad beans on toast',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Cook the broad beans in boiling water for 3 minutes, then drain and refresh briefly under cold water.\n' +
      '2. Pop the beans from their pale outer skins if they are large — this gives a vibrant green colour.\n' +
      '3. Crush them lightly in a bowl with the olive oil, lemon juice and a pinch of salt, leaving some beans whole.\n' +
      '4. Stir through the torn mint leaves and season well.\n' +
      '5. Toast the sourdough, pile the crushed beans on top and finish with a drizzle of olive oil and black pepper.',
    rawLines: [
      { rawName: 'Broad beans', rawMeasure: '300g frozen' },
      { rawName: 'Sourdough bread', rawMeasure: '2 thick slices' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Hasselback sweet potatoes',
    servingsBase: 4,
    totalTimeMinutes: 65,
    course: 'Side',
    cuisine: 'American',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Place a chopstick on either side of a sweet potato to act as a guide, then slice across the potato at 5mm intervals without cutting all the way through.\n' +
      '2. Repeat with the remaining potatoes, then place on a lined tray.\n' +
      '3. Mix the olive oil with the smoked paprika, garlic and a pinch of cayenne. Brush generously over each potato, working the oil between the slices.\n' +
      '4. Roast for 50–55 minutes, basting once more halfway through, until the flesh is tender and the edges of the slices are crisp.\n' +
      '5. Season with salt, scatter with spring onion and serve.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '4 medium' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves, finely grated' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Cayenne pepper', rawMeasure: '1 pinch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── More Dinners ─────────────────────────────────────────────────────────

  {
    title: 'Vegan mushroom stroganoff',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Fry the sliced mushrooms in the olive oil over a high heat in batches until well browned and any liquid has gone; set aside.\n' +
      '2. In the same pan soften the finely sliced onion for 6 minutes, then add the garlic and smoked paprika.\n' +
      '3. Stir in the flour, then gradually add the stock, stirring until smooth. Simmer for 3 minutes.\n' +
      '4. Return the mushrooms and stir in the coconut cream and the mustard. Simmer for 5 minutes until glossy and rich. Season.\n' +
      '5. Serve over wide noodles or rice, scattered with parsley.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '600g mixed' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Plain flour', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 300ml' },
      { rawName: 'Coconut cream', rawMeasure: '150ml' },
      { rawName: 'Mustard', rawMeasure: '1 tsp' },
      { rawName: 'Noodles', rawMeasure: '300g wide' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Roasted aubergine with miso and sesame',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Japanese',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Halve the aubergines lengthways and score the flesh in a crisscross pattern without cutting through the skin.\n' +
      '2. Brush the cut surfaces with sesame oil and season, then place cut-side down on a lined tray. Roast for 20 minutes.\n' +
      '3. Whisk the white miso, soy sauce, mirin, sesame oil and a pinch of sugar into a glaze.\n' +
      '4. Flip the aubergines cut-side up, brush generously with the miso glaze and return to the oven for 10–12 minutes until the glaze is caramelised and sticky.\n' +
      '5. Scatter with sesame seeds and spring onion and serve over steamed rice.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '4' },
      { rawName: 'White miso paste', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Mirin', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '3 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Rice', rawMeasure: '300g' },
    ],
  },

  {
    title: 'Vegan biryani with vegetables',
    servingsBase: 6,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: VEGAN,
    instructions:
      '1. Parboil the rinsed basmati rice in well-salted water for 5 minutes — it should be about 60% cooked. Drain and set aside.\n' +
      '2. In a large heavy pan, fry the sliced onions in the vegetable oil until deep gold and beginning to crisp, then set half aside for garnish.\n' +
      '3. Add the ginger garlic paste, all the spices and the diced vegetables to the remaining onions and cook for 5 minutes.\n' +
      '4. Stir in the chopped tomatoes and cook for 5 minutes, then layer the part-cooked rice over the vegetable base. Drizzle with saffron water and a little more oil, then seal tightly with a lid.\n' +
      '5. Cook over a very low heat (or in the oven at 160°C) for 25–30 minutes, then rest for 10 minutes. Gently fork together and serve with the crispy onions on top.',
    rawLines: [
      { rawName: 'Basmati rice', rawMeasure: '400g' },
      { rawName: 'Cauliflower', rawMeasure: '1/2 head' },
      { rawName: 'Potato', rawMeasure: '200g' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Peas', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '3' },
      { rawName: 'Ginger garlic paste', rawMeasure: '1 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1/2 tin (200g)' },
      { rawName: 'Garam masala', rawMeasure: '1.5 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Saffron', rawMeasure: '1 pinch, soaked in 3 tbsp warm water' },
      { rawName: 'Vegetable oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Courgette and corn fritters with avocado salsa',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'American',
    dietLabels: VEGAN,
    instructions:
      '1. Grate the courgette and squeeze out as much moisture as possible in a clean tea towel.\n' +
      '2. Mix the drained sweetcorn, gram flour, spring onion, chilli flakes, salt and pepper with the grated courgette, adding just enough cold water to make a thick batter that holds together.\n' +
      '3. Heat the vegetable oil in a wide frying pan and fry large spoonfuls for 3 minutes each side until golden and crisp.\n' +
      '4. For the salsa, mash the avocado with lime juice, diced tomato, coriander and salt.\n' +
      '5. Drain the fritters on kitchen paper and serve immediately with the avocado salsa alongside.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Sweetcorn', rawMeasure: '1 tin (325g)' },
      { rawName: 'Gram flour', rawMeasure: '100g' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Avocado', rawMeasure: '1 ripe' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Pea and mint risotto',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onion in the vegan butter and olive oil for 6–8 minutes, then stir in the garlic.\n' +
      '2. Add the risotto rice and stir for a minute, then pour in the white wine and let it bubble away.\n' +
      '3. Add the hot stock a ladleful at a time, stirring constantly, until the rice is just tender and the mixture is creamy — about 18 minutes.\n' +
      '4. Stir through the peas for the last 3 minutes to warm through.\n' +
      '5. Off the heat stir in the remaining vegan butter, most of the torn mint and season generously. Serve topped with the remaining mint.',
    rawLines: [
      { rawName: 'Paella rice', rawMeasure: '300g risotto rice' },
      { rawName: 'Peas', rawMeasure: '300g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'White wine', rawMeasure: '100ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 1 litre' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Vegan butter', rawMeasure: '40g' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Vegan tacos with black beans and salsa',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: VEGAN,
    instructions:
      '1. Warm the black beans in a small pan with the cumin, smoked paprika, garlic and a splash of water for 5 minutes. Lightly mash to a rough paste and season.\n' +
      '2. For the salsa, finely dice the tomatoes, red onion, chilli and coriander and mix with the lime juice and a pinch of salt.\n' +
      '3. Warm the corn tortillas directly in a dry frying pan for 30 seconds each side.\n' +
      '4. Spread a spoonful of beans on each tortilla, top with salsa and sliced avocado.\n' +
      '5. Add shredded lettuce and a squeeze of lime, then serve straight away.',
    rawLines: [
      { rawName: 'Black beans', rawMeasure: '2 tins (800g)' },
      { rawName: 'Corn tortillas', rawMeasure: '8' },
      { rawName: 'Avocado', rawMeasure: '1 ripe' },
      { rawName: 'Tomato', rawMeasure: '3' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Lime', rawMeasure: '2' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Chinese-style braised aubergine with black bean sauce',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: VEGAN,
    instructions:
      '1. Cut the aubergine into thick batons and fry in the sesame oil over a high heat until golden and soft on all sides. Set aside.\n' +
      '2. In the same pan fry the garlic, ginger and spring onion for a minute, then add the black bean sauce and stir-fry for 30 seconds.\n' +
      '3. Add the stock, soy sauce and a pinch of sugar, then return the aubergine and simmer for 5 minutes.\n' +
      '4. Mix the cornflour with a splash of cold water and stir into the pan; cook until the sauce is thick and glossy.\n' +
      '5. Scatter with sesame seeds and extra spring onion and serve over steamed rice.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2' },
      { rawName: 'Black bean sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 150ml' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '3 tbsp' },
      { rawName: 'Rice', rawMeasure: '300g' },
    ],
  },

  {
    title: 'Loaded vegan nachos',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Snack',
    cuisine: 'Mexican',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Spread the tortilla chips in a single layer on a large ovenproof tray.\n' +
      '2. Warm the black beans with the cumin, smoked paprika and a pinch of salt; spoon over the chips.\n' +
      '3. Scatter the vegan cheese shreds evenly over the top.\n' +
      '4. Bake for 8–10 minutes until the cheese has melted and the chips are hot.\n' +
      '5. Top with sliced jalapeños, diced tomato, the mashed avocado, sliced spring onion and coriander. Serve immediately.',
    rawLines: [
      { rawName: 'Tortilla chips', rawMeasure: '200g' },
      { rawName: 'Black beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Vegan cheese', rawMeasure: '80g grated' },
      { rawName: 'Avocado', rawMeasure: '1 ripe' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Jalapeño', rawMeasure: '1 jar, sliced' },
      { rawName: 'Spring onion', rawMeasure: '2' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1/2 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Socca (chickpea flour flatbread)',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Snack',
    cuisine: 'French',
    dietLabels: VEGAN,
    instructions:
      '1. Whisk the gram flour with the water, olive oil and a generous pinch of salt until you have a smooth, thin batter. Leave to rest for 15 minutes.\n' +
      '2. Heat the grill to its highest setting. Put a 30cm ovenproof frying pan or skillet in the oven under the grill to heat for 5 minutes.\n' +
      '3. Carefully add a splash of oil to the hot pan, swirl to coat, then pour in enough batter to make a thin pancake (about a ladleful per socca).\n' +
      '4. Grill for 5–6 minutes until the top is set and the edges are crisping; scatter with rosemary and black pepper.\n' +
      '5. Slide onto a board, tear into pieces and serve hot with hummus or a simple tomato salsa.',
    rawLines: [
      { rawName: 'Gram flour', rawMeasure: '200g' },
      { rawName: 'Water', rawMeasure: '300ml' },
      { rawName: 'Rosemary', rawMeasure: '1 tbsp, finely chopped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Roasted chickpeas with smoked paprika',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Snack',
    cuisine: 'Spanish',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 220°C (fan 200°C). Drain and rinse the chickpeas, then tip onto a clean tea towel and pat completely dry — this is key to getting them crispy.\n' +
      '2. Spread on a large lined baking tray and roast for 20 minutes until beginning to dry out and colour.\n' +
      '3. Toss with the olive oil, smoked paprika, cumin, garlic powder and a generous pinch of salt.\n' +
      '4. Return to the oven for a further 10–12 minutes until very crisp and golden.\n' +
      '5. Cool on the tray for 5 minutes — they crisp further as they cool. Eat on the same day.',
    rawLines: [
      { rawName: 'Chickpeas', rawMeasure: '2 tins (800g)' },
      { rawName: 'Smoked paprika', rawMeasure: '1.5 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Garlic powder', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Mango and chilli salsa with tortilla chips',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Mexican',
    dietLabels: VEGAN,
    instructions:
      '1. Peel and dice the mango into small cubes, working close to the stone.\n' +
      '2. Finely dice the red onion, deseed and finely chop the chilli, and finely chop the coriander.\n' +
      '3. Combine all the prepared ingredients in a bowl with the lime juice and a pinch of salt.\n' +
      '4. Taste and adjust — it should be fresh, sweet, spicy and sharp in equal measure.\n' +
      '5. Serve straight away with tortilla chips, or leave for 10 minutes at room temperature to let the flavours meld.',
    rawLines: [
      { rawName: 'Mango', rawMeasure: '2 ripe' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Chilli', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Tortilla chips', rawMeasure: '150g' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  // ── Desserts ─────────────────────────────────────────────────────────────

  {
    title: 'Vegan sticky toffee pudding',
    servingsBase: 6,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and grease a 20cm square baking tin. Cover the stoned dates with boiling water and leave to soak for 10 minutes, then blend to a smooth paste.\n' +
      '2. Beat the vegan butter and brown sugar until light, then stir in the date paste, soya milk, vanilla, flour, bicarbonate of soda and baking powder until just combined.\n' +
      '3. Pour into the tin and bake for 25–30 minutes until risen and a skewer comes out clean.\n' +
      '4. For the toffee sauce, melt the vegan butter with the brown sugar and coconut cream in a small pan, stirring until smooth and glossy.\n' +
      '5. Pierce the warm sponge all over with a skewer, pour half the sauce over and return to the oven for 5 minutes. Serve with the remaining warm sauce.',
    rawLines: [
      { rawName: 'Dates', rawMeasure: '200g stoned' },
      { rawName: 'Plain flour', rawMeasure: '180g' },
      { rawName: 'Brown sugar', rawMeasure: '150g' },
      { rawName: 'Vegan butter', rawMeasure: '80g, plus extra for sauce' },
      { rawName: 'Soya milk', rawMeasure: '100ml' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1 tsp' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Coconut cream', rawMeasure: '150ml' },
    ],
  },

  {
    title: 'Poached pears with mulled spice syrup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Peel the pears, leaving the stalks intact, and slice a little off the base so they stand upright.\n' +
      '2. Combine the red wine, water, sugar, cinnamon stick, star anise and orange zest in a pan large enough to hold all the pears. Bring to the boil, stirring to dissolve the sugar.\n' +
      '3. Lower the pears into the liquid — they should be mostly submerged. Simmer gently for 20–25 minutes, turning occasionally, until a knife slides in easily.\n' +
      '4. Lift out the pears. Increase the heat and simmer the poaching liquid for 10 minutes until slightly syrupy.\n' +
      '5. Serve the pears in shallow bowls with the warm syrup poured around.',
    rawLines: [
      { rawName: 'Pear', rawMeasure: '4 firm, ripe' },
      { rawName: 'Red wine', rawMeasure: '300ml' },
      { rawName: 'Caster sugar', rawMeasure: '100g' },
      { rawName: 'Cinnamon', rawMeasure: '1 stick' },
      { rawName: 'Star anise', rawMeasure: '2' },
      { rawName: 'Orange', rawMeasure: '1, zest only' },
      { rawName: 'Water', rawMeasure: '200ml' },
    ],
  },

  {
    title: 'Vegan lemon drizzle cake',
    servingsBase: 8,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a 900g loaf tin. Whisk the soya milk and cider vinegar together and leave for 5 minutes to curdle.\n' +
      '2. Beat the vegetable oil with the caster sugar, lemon zest and vanilla until combined, then stir in the soya milk mixture.\n' +
      '3. Fold in the sifted flour, baking powder and a pinch of salt until just smooth.\n' +
      '4. Pour into the tin and bake for 35–40 minutes until risen and a skewer comes out clean.\n' +
      '5. While warm, mix the lemon juice with icing sugar to a thin drizzle and pour over; leave to soak in and cool before slicing.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '220g' },
      { rawName: 'Caster sugar', rawMeasure: '180g' },
      { rawName: 'Soya milk', rawMeasure: '180ml' },
      { rawName: 'Vegetable oil', rawMeasure: '120ml' },
      { rawName: 'Lemon', rawMeasure: '2 (zest and juice)' },
      { rawName: 'Cider vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Baking powder', rawMeasure: '1.5 tsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Icing sugar', rawMeasure: '80g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },

  {
    title: 'Baked cinnamon pears with maple syrup',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the pears lengthways and scoop out the cores with a teaspoon.\n' +
      '2. Sit the pears cut-side up in a baking dish and drizzle with the maple syrup.\n' +
      '3. Mix the vegan butter with the ground cinnamon and dot a little into each pear hollow.\n' +
      '4. Add a splash of water or orange juice to the dish, then bake for 25–30 minutes until completely tender and beginning to caramelise at the edges.\n' +
      '5. Serve warm with a scoop of dairy-free vanilla ice cream.',
    rawLines: [
      { rawName: 'Pear', rawMeasure: '4 ripe' },
      { rawName: 'Maple syrup', rawMeasure: '3 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Vegan butter', rawMeasure: '20g' },
      { rawName: 'Orange juice', rawMeasure: '2 tbsp' },
    ],
  },

  {
    title: 'Vegan gingerbread',
    servingsBase: 16,
    totalTimeMinutes: 45,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a square 20cm tin. Gently melt the vegan butter, golden syrup and black treacle together in a pan; cool slightly.\n' +
      '2. Stir in the soya milk and brown sugar, then sift in the flour, ground ginger, mixed spice and bicarbonate of soda.\n' +
      '3. Mix until smooth, then pour into the tin.\n' +
      '4. Bake for 25–30 minutes until risen and a skewer comes out with only a few moist crumbs.\n' +
      '5. Cool completely in the tin before cutting into squares — it improves with a day\'s keeping.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '250g' },
      { rawName: 'Vegan butter', rawMeasure: '100g' },
      { rawName: 'Golden syrup', rawMeasure: '100g' },
      { rawName: 'Black treacle', rawMeasure: '50g' },
      { rawName: 'Brown sugar', rawMeasure: '100g' },
      { rawName: 'Soya milk', rawMeasure: '150ml' },
      { rawName: 'Ground ginger', rawMeasure: '2 tsp' },
      { rawName: 'Mixed spice', rawMeasure: '1 tsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1 tsp' },
    ],
  },

  {
    title: 'Vegan panna cotta with raspberry coulis',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Stir the agar agar into the coconut cream in a small pan. Heat gently over a medium heat, stirring, until the agar agar has fully dissolved — about 3 minutes.\n' +
      '2. Add the caster sugar and vanilla extract and stir until the sugar dissolves.\n' +
      '3. Pour into four lightly oiled ramekins and leave to cool to room temperature, then chill for at least 2 hours until set firm.\n' +
      '4. For the coulis, simmer the raspberries with a little icing sugar and a squeeze of lemon until soft, then push through a sieve.\n' +
      '5. Run a knife around the edge of each ramekin, turn out onto plates and pour the coulis around.',
    rawLines: [
      { rawName: 'Coconut cream', rawMeasure: '400ml' },
      { rawName: 'Agar agar', rawMeasure: '2 tsp' },
      { rawName: 'Caster sugar', rawMeasure: '50g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Raspberries', rawMeasure: '200g' },
      { rawName: 'Icing sugar', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1/4' },
    ],
  },

  {
    title: 'Vegan treacle tart',
    servingsBase: 8,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Rub the vegan butter into the flour with a pinch of salt until the mixture resembles fine breadcrumbs. Add just enough ice-cold water to bring together into a dough. Wrap and chill for 20 minutes.\n' +
      '2. Roll out and line a 23cm tart tin. Prick the base, line with paper and baking beans and blind bake at 190°C (fan 170°C) for 12 minutes; remove the beans and bake for 5 more minutes.\n' +
      '3. Gently warm the golden syrup with the lemon juice and zest until runny. Stir in the breadcrumbs and oat milk until combined.\n' +
      '4. Pour the filling into the pastry case and bake at 180°C for 20–25 minutes until the filling is just set.\n' +
      '5. Cool to room temperature before slicing and serve with dairy-free cream or custard.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '200g' },
      { rawName: 'Vegan butter', rawMeasure: '100g' },
      { rawName: 'Golden syrup', rawMeasure: '350g' },
      { rawName: 'Breadcrumbs', rawMeasure: '100g' },
      { rawName: 'Oat milk', rawMeasure: '2 tbsp' },
      { rawName: 'Lemon', rawMeasure: '1 (zest and juice)' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },

  {
    title: 'Vegan berry crumble bars',
    servingsBase: 12,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a 20cm square tin. Rub the vegan butter into the flour, oats and sugar until clumping together; divide in two.\n' +
      '2. Press half the mixture firmly into the base of the tin.\n' +
      '3. Toss the mixed berries with the cornflour and icing sugar and spread over the base in an even layer.\n' +
      '4. Scatter the remaining crumble mixture over the fruit and press very lightly.\n' +
      '5. Bake for 30–35 minutes until the topping is golden and the fruit is bubbling at the edges. Cool completely in the tin before cutting into bars.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '150g' },
      { rawName: 'Oats', rawMeasure: '100g' },
      { rawName: 'Brown sugar', rawMeasure: '100g' },
      { rawName: 'Vegan butter', rawMeasure: '130g' },
      { rawName: 'Raspberries', rawMeasure: '200g' },
      { rawName: 'Blueberries', rawMeasure: '150g' },
      { rawName: 'Cornflour', rawMeasure: '1 tbsp' },
      { rawName: 'Icing sugar', rawMeasure: '2 tbsp' },
    ],
  },

  {
    title: 'Vegan carrot cake',
    servingsBase: 10,
    totalTimeMinutes: 65,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line two 20cm round tins. Whisk the vegetable oil, brown sugar, soya milk and apple cider vinegar together.\n' +
      '2. Sift in the flour, bicarbonate of soda, baking powder, cinnamon, mixed spice and a pinch of salt; fold until combined.\n' +
      '3. Fold through the grated carrot and the walnuts.\n' +
      '4. Divide between the tins and bake for 30–35 minutes until risen and a skewer comes out clean. Cool completely.\n' +
      '5. Beat the vegan cream cheese with the icing sugar and a little vanilla until smooth and fluffy. Sandwich the cold cakes with half the icing, then spread the rest on top. Decorate with walnut halves.',
    rawLines: [
      { rawName: 'Plain flour', rawMeasure: '280g' },
      { rawName: 'Brown sugar', rawMeasure: '200g' },
      { rawName: 'Vegetable oil', rawMeasure: '200ml' },
      { rawName: 'Soya milk', rawMeasure: '150ml' },
      { rawName: 'Carrot', rawMeasure: '300g, grated' },
      { rawName: 'Walnuts', rawMeasure: '80g' },
      { rawName: 'Cider vinegar', rawMeasure: '1 tbsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1 tsp' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '2 tsp' },
      { rawName: 'Mixed spice', rawMeasure: '1 tsp' },
      { rawName: 'Vegan cream cheese', rawMeasure: '250g' },
      { rawName: 'Icing sugar', rawMeasure: '150g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },

  {
    title: 'Coconut ice cream with toasted coconut',
    servingsBase: 6,
    totalTimeMinutes: 20,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Whisk the coconut milk with the icing sugar, vanilla extract and a pinch of salt until the sugar has dissolved.\n' +
      '2. Pour into a shallow freezer-proof container and freeze for 1 hour until the edges are beginning to set.\n' +
      '3. Scrape the partially frozen mixture into a bowl and beat vigorously with a wooden spoon to break up the ice crystals, then return to the container.\n' +
      '4. Repeat this freezing and beating process twice more at 1-hour intervals, then leave to freeze solid for at least 3 hours.\n' +
      '5. Remove from the freezer 5 minutes before serving. Scoop into bowls and scatter with the toasted desiccated coconut.',
    rawLines: [
      { rawName: 'Coconut milk', rawMeasure: '2 tins (800ml)' },
      { rawName: 'Icing sugar', rawMeasure: '80g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Desiccated coconut', rawMeasure: '3 tbsp, toasted' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },

  {
    title: 'Rhubarb and ginger oat crumble',
    servingsBase: 6,
    totalTimeMinutes: 50,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Cut the rhubarb into short lengths and tip into a baking dish with the sugar, grated ginger and a splash of orange juice. Stir together.\n' +
      '2. For the crumble topping, rub the vegan butter into the flour until breadcrumb-like, then stir in the oats, brown sugar and ground ginger.\n' +
      '3. Scatter the crumble evenly over the rhubarb.\n' +
      '4. Bake for 35–40 minutes until the topping is crisp and golden and the rhubarb is bubbling through.\n' +
      '5. Rest for 5 minutes and serve with dairy-free custard or coconut yoghurt.',
    rawLines: [
      { rawName: 'Rhubarb', rawMeasure: '700g' },
      { rawName: 'Oats', rawMeasure: '75g' },
      { rawName: 'Plain flour', rawMeasure: '100g' },
      { rawName: 'Brown sugar', rawMeasure: '100g, plus 50g for fruit' },
      { rawName: 'Vegan butter', rawMeasure: '80g' },
      { rawName: 'Ginger', rawMeasure: '1 thumb, grated' },
      { rawName: 'Ground ginger', rawMeasure: '1 tsp' },
      { rawName: 'Orange juice', rawMeasure: '2 tbsp' },
    ],
  },

  // ── Further variety ─────────────────────────────────────────────────────

  {
    title: 'Vegan French toast',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'French',
    dietLabels: VEGAN,
    instructions:
      '1. Whisk the oat milk, gram flour, vanilla extract, cinnamon and a pinch of salt together until smooth — the gram flour acts as a binder in place of egg.\n' +
      '2. Pour into a wide shallow dish and dip each slice of bread in the batter, turning so both sides are well coated and letting them soak for a minute.\n' +
      '3. Melt a knob of vegan butter in a non-stick frying pan over a medium heat.\n' +
      '4. Cook the soaked bread for 2–3 minutes each side until deep golden and slightly puffed.\n' +
      '5. Serve immediately dusted with icing sugar and topped with mixed berries.',
    rawLines: [
      { rawName: 'Bread', rawMeasure: '4 thick slices' },
      { rawName: 'Oat milk', rawMeasure: '150ml' },
      { rawName: 'Gram flour', rawMeasure: '2 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Vegan butter', rawMeasure: '20g' },
      { rawName: 'Icing sugar', rawMeasure: '1 tbsp' },
      { rawName: 'Raspberries', rawMeasure: '100g' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },

  {
    title: 'Spiced pumpkin soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the olive oil in a large pan and soften the chopped onion for 8 minutes. Stir in the garlic, cumin, coriander and a pinch of chilli flakes and cook for a minute.\n' +
      '2. Add the diced pumpkin and stir to coat in the spiced oil.\n' +
      '3. Pour in the stock, bring to the boil and simmer for 20–25 minutes until the pumpkin is completely tender.\n' +
      '4. Blend until smooth, stir in the coconut milk and season generously. Reheat gently if needed.\n' +
      '5. Serve in warm bowls with a swirl of coconut milk, pumpkin seeds and crusty bread.',
    rawLines: [
      { rawName: 'Pumpkin', rawMeasure: '800g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Coconut milk', rawMeasure: '100ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 900ml' },
      { rawName: 'Pumpkin seeds', rawMeasure: '2 tbsp, toasted' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Vegan sushi rice bowl',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Lunch',
    cuisine: 'Japanese',
    dietLabels: VEGAN,
    instructions:
      '1. Cook the sushi rice according to the packet, then season with rice vinegar, sugar and a pinch of salt while still hot; cool to room temperature.\n' +
      '2. Slice the avocado, cucumber and spring onion. Thaw the edamame beans.\n' +
      '3. Divide the rice between four bowls.\n' +
      '4. Arrange the avocado, cucumber, edamame and shredded nori on top, then sprinkle with sesame seeds.\n' +
      '5. Drizzle with soy sauce and sesame oil and serve.',
    rawLines: [
      { rawName: 'Sushi rice', rawMeasure: '300g' },
      { rawName: 'Avocado', rawMeasure: '2' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Edamame beans', rawMeasure: '200g frozen' },
      { rawName: 'Nori', rawMeasure: '2 sheets, shredded' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Sesame seeds', rawMeasure: '2 tbsp' },
      { rawName: 'Soy sauce', rawMeasure: '3 tbsp' },
      { rawName: 'Rice vinegar', rawMeasure: '3 tbsp' },
      { rawName: 'Sesame oil', rawMeasure: '1 tbsp' },
      { rawName: 'Caster sugar', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Vegan goulash with butter beans',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Soften the chopped onions in the olive oil over a medium heat for 10 minutes until golden.\n' +
      '2. Stir in the garlic, sweet paprika, smoked paprika and caraway seeds and cook for a minute.\n' +
      '3. Add the diced pepper, tomato purée and chopped tomatoes and cook for 5 minutes.\n' +
      '4. Pour in the stock, add the drained butter beans and simmer for 20 minutes until the sauce is rich and thick. Season.\n' +
      '5. Stir through the coconut cream off the heat and serve over mashed potato with chopped parsley.',
    rawLines: [
      { rawName: 'Butter beans', rawMeasure: '2 tins (800g)' },
      { rawName: 'Onion', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2 red' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Paprika', rawMeasure: '2 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Caraway seeds', rawMeasure: '1/2 tsp' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 400ml' },
      { rawName: 'Coconut cream', rawMeasure: '100ml' },
      { rawName: 'Parsley', rawMeasure: '2 tbsp, chopped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Vegan kedgeree with smoked tofu',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Cook the basmati rice in well-salted water until tender, then drain and set aside.\n' +
      '2. Crumble the smoked tofu into large flakes and fry in the oil until warmed through and starting to colour; set aside.\n' +
      '3. In the same pan soften the sliced spring onion for 2 minutes, then stir in the curry powder and turmeric.\n' +
      '4. Add the cooked rice and toss over the heat to coat in the spiced oil.\n' +
      '5. Fold through the tofu, peas and most of the parsley; season. Serve with lemon wedges.',
    rawLines: [
      { rawName: 'Basmati rice', rawMeasure: '300g' },
      { rawName: 'Smoked tofu', rawMeasure: '250g' },
      { rawName: 'Peas', rawMeasure: '150g' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Turmeric', rawMeasure: '1/2 tsp' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Creamy roasted tomato and red pepper pasta',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the tomatoes and place cut-side up on a tray with the pepper halves and garlic. Drizzle with olive oil, season and roast for 30–35 minutes until soft.\n' +
      '2. Peel the peppers and squeeze the garlic from their skins, then blend everything with the cashews and a splash of water until very smooth.\n' +
      '3. Pour the sauce into a wide pan and warm gently; season and adjust the consistency.\n' +
      '4. Cook the pasta in well-salted boiling water until al dente; drain, reserving a cup of cooking water.\n' +
      '5. Toss the pasta with the sauce, loosening with pasta water until silky. Serve with fresh basil.',
    rawLines: [
      { rawName: 'Pasta', rawMeasure: '400g' },
      { rawName: 'Tomato', rawMeasure: '500g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2 red' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Cashews', rawMeasure: '60g' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Vegan mushroom and lentil burgers',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: VEGAN,
    instructions:
      '1. Finely chop the mushrooms and fry in the olive oil over a high heat until all moisture has gone and they are deep brown. Cool.\n' +
      '2. Combine with the cooked lentils, breadcrumbs, gram flour, garlic, smoked paprika and soy sauce. Mash until the mixture holds its shape.\n' +
      '3. Season well and form into four patties. Chill for 15 minutes to firm up.\n' +
      '4. Fry in a little oil for 4–5 minutes each side until a deep crust forms and the patties are piping hot throughout.\n' +
      '5. Serve in toasted buns with lettuce, tomato and vegan mayo.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '300g' },
      { rawName: 'Brown lentils', rawMeasure: '200g cooked' },
      { rawName: 'Breadcrumbs', rawMeasure: '60g' },
      { rawName: 'Gram flour', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Soy sauce', rawMeasure: '1 tbsp' },
      { rawName: 'Burger bun', rawMeasure: '4' },
      { rawName: 'Lettuce', rawMeasure: '4 leaves' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Mayonnaise', rawMeasure: '4 tbsp vegan' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Spiced aubergine and lentil soup',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Lunch',
    cuisine: 'Middle-Eastern',
    dietLabels: VEGAN,
    instructions:
      '1. Toss the diced aubergine with a little olive oil, season and roast at 220°C (fan 200°C) for 20 minutes until golden. Set aside.\n' +
      '2. Soften the chopped onion in the remaining oil for 8 minutes, then stir in the garlic, cumin, coriander and cinnamon.\n' +
      '3. Add the rinsed red lentils, chopped tomatoes and stock. Bring to the boil and simmer for 20 minutes until lentils are soft.\n' +
      '4. Stir in the roasted aubergine and simmer for 5 minutes. Blend about half the soup for a thick but textured result.\n' +
      '5. Season with lemon juice and salt; serve with a drizzle of olive oil and crusty bread.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Red lentils', rawMeasure: '150g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chopped tomatoes', rawMeasure: '1 tin (400g)' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 800ml' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Roasted vegetable and white bean gratin',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the sliced courgette, pepper, red onion and aubergine with olive oil, season and roast for 20 minutes until softened.\n' +
      '2. Warm the passata with the garlic, thyme and a pinch of sugar and pour into a baking dish.\n' +
      '3. Layer the roasted vegetables and drained cannellini beans over the tomato base.\n' +
      '4. Mix the breadcrumbs with a little olive oil and scatter generously over the top.\n' +
      '5. Bake for 25–30 minutes until the topping is golden and the sauce bubbles at the edges.',
    rawLines: [
      { rawName: 'Cannellini beans', rawMeasure: '1 tin (400g)' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Passata', rawMeasure: '400g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Caster sugar', rawMeasure: '1 pinch' },
      { rawName: 'Breadcrumbs', rawMeasure: '80g' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Vegan chocolate and beetroot brownies',
    servingsBase: 12,
    totalTimeMinutes: 55,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: VEGAN,
    instructions:
      '1. Heat the oven to 180°C (fan 160°C) and line a 20cm square tin. Blend the cooked beetroot until completely smooth.\n' +
      '2. Melt the vegan chocolate and vegan butter together over hot water, then stir in the beetroot purée and vanilla.\n' +
      '3. Stir in the sugar, soya milk, sifted flour, cocoa powder and a pinch of salt to a thick glossy batter.\n' +
      '4. Pour into the tin and bake for 25–28 minutes until the top is set but the centre still has a slight wobble.\n' +
      '5. Cool completely in the tin before cutting into squares.',
    rawLines: [
      { rawName: 'Plain chocolate', rawMeasure: '150g (vegan)' },
      { rawName: 'Beetroot', rawMeasure: '200g cooked' },
      { rawName: 'Vegan butter', rawMeasure: '100g' },
      { rawName: 'Caster sugar', rawMeasure: '200g' },
      { rawName: 'Plain flour', rawMeasure: '100g' },
      { rawName: 'Cocoa powder', rawMeasure: '30g' },
      { rawName: 'Soya milk', rawMeasure: '60ml' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },

  {
    title: 'Spiced chickpea and sweet potato soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'Caribbean',
    dietLabels: VEGAN,
    instructions:
      '1. Warm the vegetable oil in a large pan and soften the chopped onion for 8 minutes.\n' +
      '2. Stir in the garlic, ginger, curry powder and allspice and cook for a minute.\n' +
      '3. Add the diced sweet potato and drained chickpeas, then pour in the stock and coconut milk. Bring to the boil and simmer for 18–20 minutes until the sweet potato is tender.\n' +
      '4. Roughly blend about a third of the soup to thicken it while keeping plenty of texture.\n' +
      '5. Season with lime and serve scattered with coriander and warm flatbread alongside.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '500g' },
      { rawName: 'Chickpeas', rawMeasure: '1 tin (400g)' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Curry powder', rawMeasure: '1 tbsp' },
      { rawName: 'Allspice', rawMeasure: '1/4 tsp' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Stock cube', rawMeasure: '1, made up to 700ml' },
      { rawName: 'Lime', rawMeasure: '1/2' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Vegetable oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },

  {
    title: 'Vegan tiramisu',
    servingsBase: 6,
    totalTimeMinutes: 30,
    course: 'Dessert',
    cuisine: 'Italian',
    dietLabels: VEGAN,
    instructions:
      '1. Brew strong coffee and leave to cool, then stir in a little extra sugar if liked.\n' +
      '2. Whip the coconut cream until light and fluffy, then fold in the icing sugar and vanilla extract.\n' +
      '3. Quickly dip the sponge fingers into the cooled coffee one at a time — moist but not soggy — and lay in a single layer in a dish.\n' +
      '4. Spread half the coconut cream over the sponge fingers, then repeat with another layer of dipped fingers and the remaining cream.\n' +
      '5. Dust generously with cocoa powder, cover and chill for at least 4 hours before serving.',
    rawLines: [
      { rawName: 'Sponge fingers', rawMeasure: '200g (vegan)' },
      { rawName: 'Coconut cream', rawMeasure: '2 tins (800ml), chilled overnight' },
      { rawName: 'Icing sugar', rawMeasure: '80g' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Strong coffee', rawMeasure: '250ml, cooled' },
      { rawName: 'Cocoa powder', rawMeasure: '3 tbsp' },
    ],
  },

]

