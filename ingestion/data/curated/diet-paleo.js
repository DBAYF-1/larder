// Curated PALEO recipes for Larder.
//
// Per-diet curated floor for the "Paleo" filter (catalogue-10k design §2/§3).
// Each record is culinary content ONLY — sources/curated.js (mapCurated) adds the
// source/sourceId/imageUrl boilerplate and a generated SVG placeholder.
//
// Shape per record (same as data/curated/mains.js):
//   { title, servingsBase, totalTimeMinutes, course, cuisine, dietLabels,
//     healthLabels?, instructions, rawLines:[{rawName, rawMeasure}] }
//
// HARD PALEO RULE — every recipe here STRICTLY EXCLUDES:
//   • Grains & pseudo-grains — no wheat, flour, bread, pasta, rice, oats, corn,
//     cornflour, couscous, quinoa, buckwheat, rye, semolina, breadcrumbs.
//   • Legumes — no beans (incl. baked/refried), lentils, chickpeas, peas,
//     soya/soy sauce/tofu/tempeh, and no peanuts (a legume) or peanut products.
//   • Dairy — no milk, butter, cheese, cream, yoghurt, crème fraîche or ghee.
//     Fats used are coconut oil, olive oil and the animal's own fat/duck fat.
//   • Refined sugar — sweetness comes only from whole fruit, dried fruit, dates
//     and raw honey; never caster/granulated/icing/brown sugar or syrups.
//   • Processed foods — no stock cubes, sausages, bacon cures with sugar/nitrate
//     fillers, ketchup, Worcestershire/soy/oyster sauce, jarred mustard, etc.
//     Stocks are home-style (water + aromatics); seasoning is whole-spice based.
//
// Labels are tagged HONESTLY. Every recipe carries 'Paleo'. Because a strict
// paleo dish never contains grains, legumes or dairy, every recipe is also
// genuinely 'Gluten-free' and 'Dairy-free'; meat-free recipes additionally carry
// 'Vegetarian'/'Vegan', and seafood mains carry 'Pescatarian'. Extra
// healthLabels (e.g. 'Egg-free', 'Tree-nut-free') are added only where the
// ingredient list truly supports them. Method prose is original British English;
// no website wording is copied.

export default [
  // ── Poultry mains ───────────────────────────────────────────────────────────
  {
    title: 'Paleo lemon and thyme roast chicken',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Pat the chicken dry inside and out and sit it in a roasting tin.\n' +
      '2. Halve the lemon and push it into the cavity with a few thyme sprigs and two of the garlic cloves.\n' +
      '3. Rub the skin all over with olive oil, then season generously with salt and pepper and scatter the remaining thyme and crushed garlic around the bird.\n' +
      '4. Roast for 1 hour 20 minutes, basting once or twice, until the skin is deep gold and the juices run clear from the thickest part of the thigh.\n' +
      '5. Lift onto a board, tent loosely and rest for 15 minutes. Tip the resting juices back into the tin, squeeze in the roasted lemon and warm through to make a light pan jus.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1, about 1.6kg' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Thyme', rawMeasure: '1 small bunch' },
      { rawName: 'Garlic', rawMeasure: '5 cloves' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo chicken and vegetable traybake',
    servingsBase: 4,
    totalTimeMinutes: 55,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the oven to 210°C (fan 190°C). Tip the sweet potato, carrot and red onion into a large roasting tin.\n' +
      '2. Nestle the chicken thighs among the vegetables, skin-side up. Scatter over the garlic and rosemary.\n' +
      '3. Drizzle everything with olive oil, season well and toss the vegetables to coat, leaving the chicken skin on top.\n' +
      '4. Roast for 40–45 minutes until the chicken skin is crisp and the sweet potato is tender at the edges.\n' +
      '5. Squeeze over the lemon and serve straight from the tin.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Sweet potato', rawMeasure: '2, in chunks' },
      { rawName: 'Carrot', rawMeasure: '3, in batons' },
      { rawName: 'Red onion', rawMeasure: '2, wedged' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Rosemary', rawMeasure: '3 sprigs' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo coconut chicken curry',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Indian',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Warm the coconut oil in a deep pan and soften the onion gently for 8 minutes until golden.\n' +
      '2. Stir in the garlic, ginger, ground coriander, cumin and turmeric and cook for a minute until fragrant.\n' +
      '3. Add the chicken thigh pieces and turn to coat in the spices, then pour in the coconut milk and chopped tomatoes.\n' +
      '4. Simmer gently for 25 minutes until the chicken is tender and the sauce has thickened.\n' +
      '5. Season, squeeze in the lime and finish with a generous handful of fresh coriander. Serve with cauliflower rice.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '700g, boneless, in chunks' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Ground coriander', rawMeasure: '2 tsp' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Turmeric', rawMeasure: '1 tsp' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Chopped tomatoes', rawMeasure: '200g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Coconut oil', rawMeasure: '2 tbsp' },
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo chicken cacciatore',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Season the chicken thighs and brown them in the olive oil over a medium-high heat until golden, then lift out.\n' +
      '2. Soften the onion, pepper and mushrooms in the same pan for 8 minutes.\n' +
      '3. Stir in the garlic and oregano, then pour in the passata and a splash of water. Return the chicken to the pan.\n' +
      '4. Cover and simmer gently for 35 minutes until the chicken is tender and the sauce is rich.\n' +
      '5. Stir through the olives, season and scatter with parsley before serving.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '8, bone-in' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Mushroom', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Olives', rawMeasure: '75g, pitted' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo Thai green chicken curry',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Warm the coconut oil in a wok and fry the lemongrass, garlic and ginger for a minute until fragrant.\n' +
      '2. Add the chilli and a little of the coconut milk and bubble for 2 minutes to make a fragrant base.\n' +
      '3. Stir in the sliced chicken and cook until sealed, then pour in the rest of the coconut milk.\n' +
      '4. Add the green beans-free mangetout and simmer for 12 minutes until the chicken is cooked and the sauce is glossy.\n' +
      '5. Squeeze in the lime, scatter with Thai basil and serve with cauliflower rice.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '500g, sliced' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Lemongrass', rawMeasure: '1 stalk, bruised' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: "Bird's eye chilli", rawMeasure: '2' },
      { rawName: 'Mangetout', rawMeasure: '150g' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Coconut oil', rawMeasure: '1 tbsp' },
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo spatchcock harissa chicken',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Sit the spatchcocked chicken skin-side up in a large roasting tin.\n' +
      '2. Mix the harissa, olive oil, crushed garlic, cumin and lemon juice into a loose paste and rub it all over the bird.\n' +
      '3. Tuck the red onion wedges around the chicken and season everything well.\n' +
      '4. Roast for 50–55 minutes, basting halfway, until the skin is burnished and the juices run clear.\n' +
      '5. Rest for 10 minutes, then scatter with coriander and serve with the roasted onions.',
    rawLines: [
      { rawName: 'Whole chicken', rawMeasure: '1, spatchcocked' },
      { rawName: 'Harissa spice', rawMeasure: '2 tbsp' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '2, wedged' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo chicken liver and sage sauté',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Pat the chicken livers dry, trim away any sinew and season well.\n' +
      '2. Warm the olive oil in a frying pan over a high heat. Add the livers in a single layer and sear for 2 minutes without moving them.\n' +
      '3. Turn the livers, add the shallot, garlic and sage and cook for a further 2–3 minutes until the livers are blushing pink in the middle.\n' +
      '4. Splash in the cider vinegar and let it sizzle to deglaze the pan.\n' +
      '5. Serve at once over a pile of dressed rocket.',
    rawLines: [
      { rawName: 'Chicken liver', rawMeasure: '300g' },
      { rawName: 'Shallot', rawMeasure: '1, finely sliced' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Sage', rawMeasure: '6 leaves' },
      { rawName: 'Cider', rawMeasure: '1 tbsp cider vinegar' },
      { rawName: 'Rocket', rawMeasure: '2 handfuls' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo turkey and courgette meatballs',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Tree-nut-free'],
    instructions:
      '1. Coarsely grate the courgette, squeeze out the excess moisture and tip into a bowl with the turkey mince.\n' +
      '2. Add the egg, garlic, oregano and plenty of seasoning, then mix well and roll into walnut-sized meatballs.\n' +
      '3. Brown the meatballs all over in the olive oil, then lift out.\n' +
      '4. Soften the onion in the same pan, pour in the passata, season and return the meatballs.\n' +
      '5. Simmer gently for 20 minutes until cooked through, then finish with basil. Serve over courgetti.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Courgette', rawMeasure: '3 (1 grated, 2 spiralised)' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo duck breast with cherry sauce',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Score the duck skin in a criss-cross and season well. Lay skin-side down in a cold frying pan and set over a medium heat.\n' +
      '2. Render gently for 8 minutes until the skin is crisp and golden, pouring off the fat as it collects.\n' +
      '3. Turn and cook for 3–4 minutes for pink meat, then rest on a board.\n' +
      '4. Pour off all but a little fat, add the shallot and cherries and cook for 2 minutes. Splash in the red wine and honey and bubble to a glossy sauce.\n' +
      '5. Slice the duck and spoon over the cherry sauce.',
    rawLines: [
      { rawName: 'Duck', rawMeasure: '2 breasts' },
      { rawName: 'Shallot', rawMeasure: '1, finely chopped' },
      { rawName: 'Cherry', rawMeasure: '150g, pitted' },
      { rawName: 'Red wine', rawMeasure: '100ml' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Beef, lamb & pork mains ─────────────────────────────────────────────────
  {
    title: 'Paleo beef and root vegetable stew',
    servingsBase: 4,
    totalTimeMinutes: 150,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Season the stewing beef and brown it in batches in the olive oil over a high heat, then lift out.\n' +
      '2. Soften the onion, carrot and celery in the same pan for 10 minutes, then stir in the garlic and tomato purée.\n' +
      '3. Return the beef, pour in enough water to cover, add the bay and thyme and bring to a gentle simmer.\n' +
      '4. Cover and cook very gently for 2 hours, adding the swede and parsnip for the final 40 minutes.\n' +
      '5. Season well and serve in deep bowls, scattered with parsley.',
    rawLines: [
      { rawName: 'Stewing beef', rawMeasure: '700g, in chunks' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Carrot', rawMeasure: '3' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Swede', rawMeasure: '1 small' },
      { rawName: 'Parsnip', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo grilled steak with chimichurri',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Take the steaks out of the fridge 30 minutes before cooking, then pat dry and season well.\n' +
      '2. For the chimichurri, finely chop the parsley and garlic and stir together with the oregano, chilli flakes, red wine vinegar and most of the olive oil. Season and set aside.\n' +
      '3. Get a heavy frying pan or griddle smoking hot. Rub the steaks with a little olive oil and sear for 2–3 minutes each side for medium-rare.\n' +
      '4. Rest the steaks on a warm plate for 5 minutes.\n' +
      '5. Slice against the grain and spoon over the chimichurri.',
    rawLines: [
      { rawName: 'Sirloin steak', rawMeasure: '2, about 250g each' },
      { rawName: 'Parsley', rawMeasure: '1 large bunch' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Chilli flakes', rawMeasure: '1/2 tsp' },
      { rawName: 'Red wine', rawMeasure: '2 tbsp red wine vinegar' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo beef and mushroom stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Slice the beef thinly against the grain and toss with the ginger and a little of the coconut oil.\n' +
      '2. Get a wok smoking hot, add the rest of the coconut oil and stir-fry the beef in batches for 1 minute until browned. Lift out.\n' +
      '3. Add the broccoli, pepper and mushrooms and stir-fry for 4 minutes until just tender.\n' +
      '4. Return the beef with the garlic and spring onion, splash in the cider vinegar and toss for a minute.\n' +
      '5. Season and finish with sesame seeds. Serve over cauliflower rice.',
    rawLines: [
      { rawName: 'Beef steak', rawMeasure: '500g' },
      { rawName: 'Broccoli', rawMeasure: '1 head, in florets' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Mushroom', rawMeasure: '150g' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Spring onion', rawMeasure: '4' },
      { rawName: 'Cider', rawMeasure: '1 tbsp cider vinegar' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Coconut oil', rawMeasure: '2 tbsp' },
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo slow-braised lamb shanks',
    servingsBase: 4,
    totalTimeMinutes: 180,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the oven to 160°C (fan 140°C). Season the lamb shanks and brown them all over in the olive oil in a casserole, then lift out.\n' +
      '2. Soften the onion, carrot and celery for 10 minutes, then stir in the garlic and tomato purée.\n' +
      '3. Pour in the red wine and let it bubble for 2 minutes, then add the chopped tomatoes, rosemary and enough water to almost cover the shanks.\n' +
      '4. Return the shanks, cover and braise in the oven for 2½ hours until the meat is falling from the bone.\n' +
      '5. Skim any fat, season the sauce and serve over celeriac mash.',
    rawLines: [
      { rawName: 'Lamb shank', rawMeasure: '4' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Red wine', rawMeasure: '250ml' },
      { rawName: 'Chopped tomatoes', rawMeasure: '400g' },
      { rawName: 'Rosemary', rawMeasure: '3 sprigs' },
      { rawName: 'Celeriac', rawMeasure: '1, for mash' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo lamb and apricot tagine',
    servingsBase: 4,
    totalTimeMinutes: 120,
    course: 'Dinner',
    cuisine: 'Moroccan',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Season the lamb shoulder and brown it in batches in the olive oil, then lift out.\n' +
      '2. Soften the onion for 8 minutes, then stir in the garlic, ginger, ras el hanout and cinnamon and cook for a minute.\n' +
      '3. Return the lamb, add the chopped tomatoes, dried apricots and enough water to almost cover.\n' +
      '4. Cover and simmer very gently for 1¾ hours until the lamb is meltingly tender.\n' +
      '5. Season, stir through the coriander and serve with cauliflower couscous.',
    rawLines: [
      { rawName: 'Lamb shoulder', rawMeasure: '800g, in chunks' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Ras el hanout', rawMeasure: '2 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '400g' },
      { rawName: 'Dried apricots', rawMeasure: '100g' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo rosemary and garlic roast lamb',
    servingsBase: 6,
    totalTimeMinutes: 110,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Make small incisions all over the lamb leg and push in slivers of garlic and small sprigs of rosemary.\n' +
      '2. Rub the joint with olive oil and season generously, then sit it on a bed of the onion halves in a roasting tin.\n' +
      '3. Roast for 1 hour 15 minutes for pink lamb, or longer to taste, basting once or twice.\n' +
      '4. Rest the lamb on a board, tented, for 20 minutes.\n' +
      '5. Tip a splash of water into the tin and warm through, scraping the base, to make a light jus. Carve and serve.',
    rawLines: [
      { rawName: 'Lamb leg', rawMeasure: '1, about 2kg' },
      { rawName: 'Garlic', rawMeasure: '4 cloves' },
      { rawName: 'Rosemary', rawMeasure: '1 small bunch' },
      { rawName: 'Onion', rawMeasure: '2, halved' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo pork and apple casserole',
    servingsBase: 4,
    totalTimeMinutes: 90,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Season the pork shoulder and brown it in the olive oil in a casserole, then lift out.\n' +
      '2. Soften the onion and leek for 8 minutes, then add the garlic and sage.\n' +
      '3. Return the pork, pour in the cider and enough water to almost cover, and bring to a gentle simmer.\n' +
      '4. Cover and cook gently for 1 hour, then add the apple wedges and cook for a further 15 minutes until everything is tender.\n' +
      '5. Season well and serve in shallow bowls.',
    rawLines: [
      { rawName: 'Pork shoulder', rawMeasure: '700g, in chunks' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Leek', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Sage', rawMeasure: '6 leaves' },
      { rawName: 'Cider', rawMeasure: '250ml dry cider' },
      { rawName: 'Apple', rawMeasure: '2, wedged' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo pork tenderloin with mustard seed crust',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Lightly crush the mustard seeds and fennel seeds and mix with the crushed garlic and a little olive oil.\n' +
      '2. Season the pork tenderloin and rub it all over with the spice paste.\n' +
      '3. Sear the pork in an ovenproof pan over a high heat until browned all over, about 4 minutes.\n' +
      '4. Transfer to the oven and roast for 18–20 minutes until just cooked through with a hint of blush.\n' +
      '5. Rest for 5 minutes, then slice thickly and serve with steamed greens.',
    rawLines: [
      { rawName: 'Pork tenderloin', rawMeasure: '1, about 500g' },
      { rawName: 'Mustard seeds', rawMeasure: '2 tsp' },
      { rawName: 'Fennel seeds', rawMeasure: '1 tsp' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo slow-roast pork belly',
    servingsBase: 4,
    totalTimeMinutes: 210,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Pat the pork belly skin very dry, score it deeply and rub all over with salt and the crushed fennel seeds. Chill, uncovered, for an hour if you can.\n' +
      '2. Heat the oven to 160°C (fan 140°C). Sit the belly skin-side up on a bed of onion and apple in a roasting tin and pour a splash of water around.\n' +
      '3. Roast slowly for 3 hours until the meat is meltingly tender.\n' +
      '4. Turn the oven up to 220°C (fan 200°C) and blast for 25–30 minutes until the crackling is puffed and crisp.\n' +
      '5. Rest for 15 minutes, then carve into thick slices.',
    rawLines: [
      { rawName: 'Pork belly', rawMeasure: '1.2kg' },
      { rawName: 'Fennel seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Onion', rawMeasure: '2, sliced' },
      { rawName: 'Apple', rawMeasure: '2, sliced' },
      { rawName: 'Salt', rawMeasure: '2 tbsp' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo meatza with vegetable topping',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Italian',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Tree-nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Mix the minced beef with the egg, oregano, garlic and plenty of seasoning.\n' +
      '2. Press the mixture out into a thin round on a lined baking tray to form the base.\n' +
      '3. Bake the meat base for 12 minutes, then pour off any fat.\n' +
      '4. Spread with passata, scatter over the pepper, mushrooms and olives and drizzle with olive oil.\n' +
      '5. Return to the oven for 12–15 minutes until the topping is bubbling. Scatter with basil and slice.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Passata', rawMeasure: '150g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Mushroom', rawMeasure: '100g' },
      { rawName: 'Olives', rawMeasure: '50g' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo beef and sweet potato chilli',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Brown the minced beef in the olive oil over a high heat, then lift out, leaving the fat behind.\n' +
      '2. Soften the onion and pepper for 8 minutes, then stir in the garlic, cumin, smoked paprika and chilli powder.\n' +
      '3. Return the beef, add the chopped tomatoes, sweet potato and a splash of water, and season well.\n' +
      '4. Simmer gently for 35 minutes until the sweet potato is soft and the chilli is thick.\n' +
      '5. Squeeze in the lime, stir through coriander and serve topped with sliced avocado.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Cumin', rawMeasure: '2 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chilli powder', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '400g' },
      { rawName: 'Sweet potato', rawMeasure: '2, diced' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo lamb koftas with herb salad',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Mix the minced lamb with the grated onion, garlic, cumin, coriander and cinnamon and season well.\n' +
      '2. Shape the mixture around skewers into sausage-like koftas and chill for 10 minutes to firm up.\n' +
      '3. Brush with olive oil and grill or griddle over a high heat for 10–12 minutes, turning, until charred and cooked through.\n' +
      '4. Toss the cucumber, tomato, parsley and mint with lemon juice and a little olive oil.\n' +
      '5. Serve the koftas on the herb salad with extra lemon to squeeze.',
    rawLines: [
      { rawName: 'Minced lamb', rawMeasure: '500g' },
      { rawName: 'Onion', rawMeasure: '1, grated' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Ground coriander', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo oxtail and butternut braise',
    servingsBase: 4,
    totalTimeMinutes: 210,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the oven to 150°C (fan 130°C). Season the oxtail and brown the pieces all over in the olive oil in a casserole, then lift out.\n' +
      '2. Soften the onion, carrot and celery for 10 minutes, then stir in the garlic and tomato purée.\n' +
      '3. Pour in the red wine, let it bubble, then add enough water to cover the oxtail along with the bay and thyme.\n' +
      '4. Cover and braise for 3 hours, adding the butternut squash for the final 45 minutes, until the meat slips from the bone.\n' +
      '5. Skim, season and serve with the rich gravy.',
    rawLines: [
      { rawName: 'Oxtail', rawMeasure: '1.2kg, jointed' },
      { rawName: 'Onion', rawMeasure: '1 large' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Red wine', rawMeasure: '250ml' },
      { rawName: 'Bay leaves', rawMeasure: '2' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Butternut squash', rawMeasure: '1/2, in chunks' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Fish & seafood mains (Pescatarian) ──────────────────────────────────────
  {
    title: 'Paleo baked salmon with lemon and dill',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Sit the salmon fillets on a lined baking tray.\n' +
      '2. Drizzle with olive oil, season well and scatter over the dill and lemon slices.\n' +
      '3. Bake for 12–15 minutes until the salmon is just opaque and flakes easily.\n' +
      '4. Meanwhile, steam the asparagus and tenderstem until just tender.\n' +
      '5. Serve the salmon on the greens with the resting juices spooned over and extra lemon to squeeze.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Dill', rawMeasure: '1 small bunch' },
      { rawName: 'Asparagus', rawMeasure: '200g' },
      { rawName: 'Purple sprouting broccoli', rawMeasure: '200g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo sea bass with salsa verde',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Paleo', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. For the salsa verde, finely chop the parsley, capers and garlic and stir together with the lemon juice and most of the olive oil. Season and set aside.\n' +
      '2. Pat the sea bass fillets dry and season the skin.\n' +
      '3. Heat the remaining olive oil in a frying pan over a medium-high heat and lay the fillets skin-side down. Press gently for 3–4 minutes until the skin is crisp.\n' +
      '4. Turn and cook for a further minute until just opaque.\n' +
      '5. Serve the fish skin-side up with the salsa verde spooned over.',
    rawLines: [
      { rawName: 'Sea bass', rawMeasure: '2 fillets' },
      { rawName: 'Parsley', rawMeasure: '1 large bunch' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo prawn and courgette coconut curry',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Paleo', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Warm the coconut oil in a wok and fry the garlic, ginger and chilli for a minute until fragrant.\n' +
      '2. Add the courgette and pepper and stir-fry for 3 minutes.\n' +
      '3. Pour in the coconut milk and bring to a gentle simmer, then add the prawns.\n' +
      '4. Cook for 4–5 minutes until the prawns are pink and just cooked through.\n' +
      '5. Squeeze in the lime, scatter with coriander and serve over cauliflower rice.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '400g, raw' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Coconut milk', rawMeasure: '400ml' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: "Bird's eye chilli", rawMeasure: '1' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Coconut oil', rawMeasure: '1 tbsp' },
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo baked cod with tomato and olives',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Paleo', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Warm the olive oil in an ovenproof pan and soften the onion for 6 minutes.\n' +
      '2. Stir in the garlic, then add the cherry tomatoes and cook for 5 minutes until they begin to collapse.\n' +
      '3. Stir through the olives and capers and season.\n' +
      '4. Nestle the white fish fillets into the sauce, spoon a little over the top and bake for 12–15 minutes until the fish flakes.\n' +
      '5. Scatter with parsley and serve with steamed greens.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '4' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cherry tomato', rawMeasure: '300g' },
      { rawName: 'Olives', rawMeasure: '75g' },
      { rawName: 'Capers', rawMeasure: '1 tbsp' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo seared tuna with avocado salsa',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Dinner',
    cuisine: 'Mexican',
    dietLabels: ['Paleo', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. For the salsa, dice the avocado, tomato and red onion and toss with lime juice, coriander and a little olive oil. Season and set aside.\n' +
      '2. Pat the tuna steaks dry, rub with a little olive oil and season well.\n' +
      '3. Get a frying pan smoking hot and sear the tuna for 1–1½ minutes each side, leaving the centre rare.\n' +
      '4. Rest the tuna for a couple of minutes, then slice thickly.\n' +
      '5. Serve topped with the avocado salsa.',
    rawLines: [
      { rawName: 'Tuna', rawMeasure: '2 steaks' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo mackerel with beetroot and orange',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Peel and finely slice the cooked beetroot and segment the orange, catching any juice.\n' +
      '2. Toss the beetroot and orange with the rocket, a squeeze of the orange juice and a little olive oil. Season.\n' +
      '3. Pat the mackerel fillets dry, season the skin and slash it a couple of times.\n' +
      '4. Heat the remaining olive oil in a frying pan and cook the mackerel skin-side down for 3 minutes until crisp, then turn for a final minute.\n' +
      '5. Serve the mackerel on the beetroot and orange salad.',
    rawLines: [
      { rawName: 'Mackerel', rawMeasure: '4 fillets' },
      { rawName: 'Beetroot', rawMeasure: '250g, cooked' },
      { rawName: 'Orange', rawMeasure: '1' },
      { rawName: 'Rocket', rawMeasure: '2 handfuls' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo prawn, mango and avocado salad',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Lunch',
    cuisine: 'Thai',
    dietLabels: ['Paleo', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Whisk the lime juice with a little olive oil, the grated ginger and a pinch of chilli flakes to make a dressing. Season.\n' +
      '2. Dice the mango and avocado and slice the cucumber.\n' +
      '3. Pile the lettuce, mango, avocado and cucumber into a bowl with the cooked prawns.\n' +
      '4. Spoon over the dressing and toss gently.\n' +
      '5. Scatter with coriander and serve straight away.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '250g, cooked' },
      { rawName: 'Mango', rawMeasure: '1' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Lettuce', rawMeasure: '1 little gem' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Ginger', rawMeasure: '1 small piece' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo Thai-style fishcakes',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Thai',
    dietLabels: ['Paleo', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Tree-nut-free'],
    instructions:
      '1. Blitz the white fish fillets in a food processor with the garlic, ginger, chilli, coriander and lime zest to a coarse paste.\n' +
      '2. Add the egg and a little salt and pulse to bind, then shape into small patties.\n' +
      '3. Chill the fishcakes for 10 minutes to firm up.\n' +
      '4. Warm the coconut oil in a frying pan and cook the fishcakes for 3 minutes each side until golden and cooked through.\n' +
      '5. Serve with lime wedges and a crunchy cucumber salad.',
    rawLines: [
      { rawName: 'White fish fillet', rawMeasure: '500g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Ginger', rawMeasure: '1 small piece' },
      { rawName: "Bird's eye chilli", rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Egg', rawMeasure: '1' },
      { rawName: 'Cucumber', rawMeasure: '1/2' },
      { rawName: 'Coconut oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo grilled sardines with lemon',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Paleo', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the grill to high. Pat the sardines dry, rub with olive oil and season inside and out.\n' +
      '2. Lay the sardines on a grill tray and grill for 3–4 minutes each side until the skin is blistered and the flesh is just cooked.\n' +
      '3. Meanwhile, toss the rocket and tomato with a little olive oil and lemon juice.\n' +
      '4. Scatter the sardines with parsley and the crushed garlic.\n' +
      '5. Serve hot with the salad and plenty of lemon to squeeze.',
    rawLines: [
      { rawName: 'Sardines', rawMeasure: '8, gutted' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Rocket', rawMeasure: '2 handfuls' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo mussels in tomato and chilli broth',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Paleo', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Scrub the mussels well and pull away any beards, discarding any that stay open when tapped.\n' +
      '2. Warm the olive oil in a large lidded pan and soften the shallot for 4 minutes, then add the garlic and chilli.\n' +
      '3. Stir in the chopped tomatoes and a splash of water and bring to a brisk simmer.\n' +
      '4. Tip in the mussels, cover and steam for 4–5 minutes, shaking the pan, until they open. Discard any that stay shut.\n' +
      '5. Scatter with parsley and serve in deep bowls with the broth.',
    rawLines: [
      { rawName: 'Mussels', rawMeasure: '1kg' },
      { rawName: 'Shallot', rawMeasure: '2' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli', rawMeasure: '1 red' },
      { rawName: 'Chopped tomatoes', rawMeasure: '400g' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  // ── Egg-based & breakfast ───────────────────────────────────────────────────
  {
    title: 'Paleo sweet potato and spinach frittata',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Tree-nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Steam or boil the diced sweet potato for 6 minutes until just tender, then drain.\n' +
      '2. Warm the olive oil in an ovenproof frying pan and soften the onion for 6 minutes. Add the sweet potato and wilt in the spinach.\n' +
      '3. Beat the eggs with plenty of seasoning and pour into the pan, shaking to settle.\n' +
      '4. Cook on the hob for 3 minutes until the edges set, then transfer to the oven for 12–15 minutes until just set in the middle.\n' +
      '5. Cool for a few minutes, then cut into wedges and serve warm or cold.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '8' },
      { rawName: 'Sweet potato', rawMeasure: '1, diced' },
      { rawName: 'Spinach', rawMeasure: '100g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo shakshuka',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'Middle Eastern',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Tree-nut-free'],
    instructions:
      '1. Warm the olive oil in a frying pan and soften the onion and pepper for 8 minutes.\n' +
      '2. Stir in the garlic, cumin and smoked paprika and cook for a minute until fragrant.\n' +
      '3. Pour in the chopped tomatoes, season and simmer for 10 minutes until thick.\n' +
      '4. Make four wells in the sauce and crack an egg into each. Cover and cook gently for 5–7 minutes until the whites are set but the yolks still soft.\n' +
      '5. Scatter with coriander and serve straight from the pan.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '400g' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo bacon and mushroom omelette',
    servingsBase: 1,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Tree-nut-free'],
    instructions:
      '1. Snip the bacon into pieces and fry in a non-stick pan over a medium heat until crisp, then add the sliced mushrooms and cook until golden. Lift out.\n' +
      '2. Beat the eggs with a little seasoning.\n' +
      '3. Add the olive oil to the pan, pour in the eggs and swirl to coat the base.\n' +
      '4. As the omelette sets, scatter the bacon and mushrooms over one half.\n' +
      '5. Fold over, slide onto a plate and scatter with chives.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Bacon', rawMeasure: '2 rashers' },
      { rawName: 'Mushroom', rawMeasure: '75g' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, snipped' },
      { rawName: 'Olive oil', rawMeasure: '1 tsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo coconut and berry breakfast bowl',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free'],
    instructions:
      '1. Warm the coconut milk gently in a small pan, just to take the chill off.\n' +
      '2. Divide the blueberries and raspberries between two bowls.\n' +
      '3. Pour over the warmed coconut milk.\n' +
      '4. Scatter with the flaked almonds and desiccated coconut.\n' +
      '5. Drizzle with a little honey and serve straight away.',
    rawLines: [
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Raspberries', rawMeasure: '100g' },
      { rawName: 'Almonds', rawMeasure: '30g, flaked' },
      { rawName: 'Desiccated coconut', rawMeasure: '2 tbsp' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Paleo baked eggs in avocado',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Tree-nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Halve the avocados and remove the stones, then scoop out a little extra flesh to make room for the egg.\n' +
      '2. Sit the avocado halves snugly in a baking dish so they stay level.\n' +
      '3. Crack an egg into each hollow and season well.\n' +
      '4. Bake for 12–15 minutes until the whites are just set.\n' +
      '5. Scatter with chives and a pinch of chilli flakes and serve at once.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2' },
      { rawName: 'Egg', rawMeasure: '4 small' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, snipped' },
      { rawName: 'Chilli flakes', rawMeasure: '1 pinch' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo banana and almond pancakes',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: [],
    instructions:
      '1. Mash the banana well in a bowl until almost smooth.\n' +
      '2. Beat in the eggs, then stir in the ground almonds, cinnamon and a pinch of salt to make a thick batter.\n' +
      '3. Warm a little coconut oil in a non-stick frying pan over a medium-low heat.\n' +
      '4. Drop in small spoonfuls of batter and cook for 2 minutes each side until golden and set.\n' +
      '5. Stack up and serve with fresh berries and a drizzle of honey.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '2 ripe' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Almonds', rawMeasure: '60g, ground' },
      { rawName: 'Cinnamon', rawMeasure: '1/2 tsp' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
      { rawName: 'Coconut oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Paleo smoked salmon and egg breakfast plate',
    servingsBase: 2,
    totalTimeMinutes: 15,
    course: 'Breakfast',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Tree-nut-free'],
    instructions:
      '1. Bring a pan of water to a gentle simmer and add a splash of cider vinegar.\n' +
      '2. Crack each egg into a cup and slip into the water. Poach for 3 minutes for a soft yolk, then lift onto kitchen paper.\n' +
      '3. Arrange the smoked salmon and avocado slices on two plates with a handful of rocket.\n' +
      '4. Sit a poached egg on each plate and season well.\n' +
      '5. Finish with chives, a squeeze of lemon and a drizzle of olive oil.',
    rawLines: [
      { rawName: 'Smoked salmon', rawMeasure: '120g' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Rocket', rawMeasure: '2 handfuls' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, snipped' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Cider', rawMeasure: '1 tbsp cider vinegar' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Vegetable mains & sides (Vegetarian / Vegan) ────────────────────────────
  {
    title: 'Paleo cauliflower rice with herbs',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Break the cauliflower into florets and pulse in a food processor until it resembles rice.\n' +
      '2. Warm the olive oil in a large frying pan and soften the spring onion for 2 minutes.\n' +
      '3. Add the cauliflower and stir-fry over a medium-high heat for 5–6 minutes until just tender but still with a little bite.\n' +
      '4. Season well and squeeze in the lemon.\n' +
      '5. Stir through the parsley and serve as a base for curries and stews.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo roasted vegetable and avocado salad',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'Mediterranean',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the aubergine, courgette, pepper and red onion with olive oil and seasoning in a roasting tin.\n' +
      '2. Roast for 30–35 minutes, turning once, until tender and caramelised at the edges.\n' +
      '3. Whisk the lemon juice with a little olive oil and the crushed garlic to make a dressing.\n' +
      '4. Pile the rocket onto a platter and scatter over the warm roasted vegetables and sliced avocado.\n' +
      '5. Drizzle with the dressing and scatter with basil.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Rocket', rawMeasure: '2 handfuls' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo stuffed peppers with cauliflower rice',
    servingsBase: 4,
    totalTimeMinutes: 50,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the peppers and remove the seeds, then sit them cut-side up in a baking dish.\n' +
      '2. Pulse the cauliflower to rice. Warm the olive oil and soften the onion, then add the cauliflower, garlic and cumin and cook for 5 minutes.\n' +
      '3. Stir in the chopped tomatoes, pine nuts and parsley and season well.\n' +
      '4. Spoon the mixture into the pepper halves, drizzle with olive oil and cover loosely with foil.\n' +
      '5. Bake for 30 minutes, removing the foil for the last 10, until the peppers are tender.',
    rawLines: [
      { rawName: 'Pepper (capsicum)', rawMeasure: '4' },
      { rawName: 'Cauliflower', rawMeasure: '1/2 head' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '200g' },
      { rawName: 'Pine nuts', rawMeasure: '40g' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo butternut squash soup',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Warm the olive oil in a large pan and soften the onion and carrot for 8 minutes.\n' +
      '2. Stir in the garlic and ginger, then add the butternut squash chunks and turn to coat.\n' +
      '3. Pour in enough water to cover, season and bring to the boil, then simmer for 25 minutes until everything is soft.\n' +
      '4. Stir in most of the coconut milk and blitz until silky smooth.\n' +
      '5. Season to taste, swirl in the rest of the coconut milk and serve.',
    rawLines: [
      { rawName: 'Butternut squash', rawMeasure: '1, in chunks' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Coconut milk', rawMeasure: '200ml' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo cauliflower and almond soup',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free'],
    instructions:
      '1. Warm the olive oil in a large pan and soften the onion and leek for 8 minutes.\n' +
      '2. Add the garlic, then the cauliflower florets, and turn to coat.\n' +
      '3. Pour in enough water to cover, season and simmer for 20 minutes until the cauliflower is very soft.\n' +
      '4. Add the ground almonds and blitz until smooth and creamy.\n' +
      '5. Season to taste and serve scattered with toasted flaked almonds.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Leek', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Almonds', rawMeasure: '50g, ground, plus flaked to serve' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo ratatouille',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Dinner',
    cuisine: 'French',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Warm the olive oil in a large pan and soften the onion for 8 minutes.\n' +
      '2. Add the aubergine and courgette and cook for 10 minutes until starting to colour.\n' +
      '3. Stir in the pepper, garlic and thyme and cook for a further 5 minutes.\n' +
      '4. Add the chopped tomatoes, season and simmer gently for 30 minutes until thick and glossy.\n' +
      '5. Stir through the basil and serve warm or at room temperature.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '1' },
      { rawName: 'Courgette', rawMeasure: '2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Chopped tomatoes', rawMeasure: '400g' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo sweet potato wedges',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'American',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the oven to 210°C (fan 190°C). Cut the sweet potatoes into thick wedges, leaving the skin on.\n' +
      '2. Toss the wedges with the olive oil, smoked paprika, garlic granules and plenty of seasoning.\n' +
      '3. Spread out in a single layer on a baking tray.\n' +
      '4. Roast for 30–35 minutes, turning halfway, until crisp at the edges and tender within.\n' +
      '5. Scatter with parsley and serve hot.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '3 large' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Garlic granules', rawMeasure: '1 tsp' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo celeriac mash',
    servingsBase: 4,
    totalTimeMinutes: 30,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Peel the celeriac and cut into even chunks.\n' +
      '2. Boil in salted water for 18–20 minutes until very tender, then drain well and leave to steam-dry for a minute.\n' +
      '3. Tip the celeriac back into the pan with the olive oil and crushed garlic.\n' +
      '4. Mash thoroughly until smooth and creamy, loosening with a splash of the cooking water if needed.\n' +
      '5. Season well and finish with snipped chives.',
    rawLines: [
      { rawName: 'Celeriac', rawMeasure: '1 large' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, snipped' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo courgetti with avocado pesto',
    servingsBase: 2,
    totalTimeMinutes: 20,
    course: 'Lunch',
    cuisine: 'Italian',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free'],
    instructions:
      '1. Spiralise the courgettes into noodles, or use a julienne peeler.\n' +
      '2. For the pesto, blitz the avocado, basil, pine nuts, garlic and lemon juice with the olive oil until smooth. Season well.\n' +
      '3. Warm a frying pan over a medium heat with a little olive oil and toss the courgetti for 2 minutes, just to take the raw edge off.\n' +
      '4. Remove from the heat and stir through the avocado pesto to coat.\n' +
      '5. Scatter with halved cherry tomatoes and a few extra pine nuts to serve.',
    rawLines: [
      { rawName: 'Courgette', rawMeasure: '3' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Basil', rawMeasure: '1 large bunch' },
      { rawName: 'Pine nuts', rawMeasure: '40g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo roasted carrot and walnut salad',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Side',
    cuisine: 'Middle Eastern',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the carrots with the cumin, olive oil and seasoning and spread on a baking tray.\n' +
      '2. Roast for 30 minutes until tender and caramelised.\n' +
      '3. Toast the walnuts in a dry pan until fragrant, then roughly chop.\n' +
      '4. Whisk the lemon juice with a little olive oil and the honey to make a dressing.\n' +
      '5. Pile the rocket on a platter, top with the warm carrots, scatter with walnuts and mint and drizzle with the dressing.',
    rawLines: [
      { rawName: 'Carrot', rawMeasure: '6' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Walnuts', rawMeasure: '50g' },
      { rawName: 'Rocket', rawMeasure: '2 handfuls' },
      { rawName: 'Mint', rawMeasure: '1 small bunch' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo cauliflower steaks with romesco',
    servingsBase: 2,
    totalTimeMinutes: 45,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free'],
    instructions:
      '1. Heat the oven to 210°C (fan 190°C). Cut the cauliflower through the core into two thick steaks, plus florets from the trimmings.\n' +
      '2. Brush the steaks with olive oil, season and roast for 30 minutes until tender and golden.\n' +
      '3. For the romesco, blitz the roasted pepper, almonds, garlic, smoked paprika and cider vinegar with olive oil until thick. Season.\n' +
      '4. Spread the romesco onto warm plates.\n' +
      '5. Sit the cauliflower steaks on top and scatter with parsley.',
    rawLines: [
      { rawName: 'Cauliflower', rawMeasure: '1 large head' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 red, roasted' },
      { rawName: 'Almonds', rawMeasure: '50g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cider', rawMeasure: '1 tbsp cider vinegar' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '5 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo mushroom and spinach sauté',
    servingsBase: 4,
    totalTimeMinutes: 20,
    course: 'Side',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Warm the olive oil in a large frying pan over a high heat.\n' +
      '2. Add the mushrooms and cook, undisturbed at first, for 6–7 minutes until deep gold.\n' +
      '3. Stir in the garlic and thyme and cook for a minute.\n' +
      '4. Add the spinach in handfuls, letting each wilt before adding the next.\n' +
      '5. Season well, squeeze in a little lemon and serve.',
    rawLines: [
      { rawName: 'Mushroom', rawMeasure: '400g' },
      { rawName: 'Spinach', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '2 sprigs' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo aubergine and tomato bake',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Mediterranean',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Slice the aubergines, brush with olive oil and roast on trays for 20 minutes until soft.\n' +
      '2. Meanwhile, soften the onion in olive oil, add the garlic, then the passata and oregano, and simmer for 10 minutes. Season.\n' +
      '3. Layer the aubergine and tomato sauce in a baking dish, finishing with sauce.\n' +
      '4. Bake for 30 minutes until bubbling and slightly reduced.\n' +
      '5. Scatter with basil and rest for 5 minutes before serving.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '3' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '3 cloves' },
      { rawName: 'Passata', rawMeasure: '500g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Basil', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo sweet potato and kale hash',
    servingsBase: 2,
    totalTimeMinutes: 30,
    course: 'Breakfast',
    cuisine: 'American',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Warm the olive oil in a large frying pan and add the diced sweet potato. Cook over a medium heat for 12 minutes, turning, until tender and golden.\n' +
      '2. Add the onion and cook for a further 5 minutes until soft.\n' +
      '3. Stir in the garlic and smoked paprika and cook for a minute.\n' +
      '4. Add the kale and a splash of water, cover and steam for 3 minutes until wilted.\n' +
      '5. Season well and serve hot.',
    rawLines: [
      { rawName: 'Sweet potato', rawMeasure: '2, diced' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Kale', rawMeasure: '150g' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo Greek-style salad',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'Greek',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Cut the tomatoes into wedges and the cucumber into chunks.\n' +
      '2. Thinly slice the red onion and pepper.\n' +
      '3. Combine the vegetables in a bowl with the olives.\n' +
      '4. Whisk the olive oil with the cider vinegar and dried oregano, and season.\n' +
      '5. Pour the dressing over the salad, toss gently and serve.',
    rawLines: [
      { rawName: 'Tomato', rawMeasure: '4' },
      { rawName: 'Cucumber', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1 green' },
      { rawName: 'Olives', rawMeasure: '75g' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Cider', rawMeasure: '1 tbsp cider vinegar' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo cabbage and carrot slaw',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Side',
    cuisine: 'American',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Finely shred the cabbage and coarsely grate the carrot.\n' +
      '2. Thinly slice the red onion and tip everything into a large bowl.\n' +
      '3. Whisk the olive oil with the cider vinegar, mustard seeds and a little honey to make a dressing. Season.\n' +
      '4. Pour the dressing over the vegetables and toss thoroughly.\n' +
      '5. Leave to sit for 10 minutes, then stir through the parsley and serve.',
    rawLines: [
      { rawName: 'Cabbage', rawMeasure: '1/2 small white' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Mustard seeds', rawMeasure: '1 tsp' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
      { rawName: 'Cider', rawMeasure: '2 tbsp cider vinegar' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '4 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Snacks & light bites ────────────────────────────────────────────────────
  {
    title: 'Paleo guacamole',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Mexican',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Halve the avocados, scoop the flesh into a bowl and mash to a chunky paste.\n' +
      '2. Finely chop the tomato, red onion and chilli and stir through.\n' +
      '3. Squeeze in the lime juice and add the chopped coriander.\n' +
      '4. Season generously with salt and a grind of pepper and mix well.\n' +
      '5. Serve straight away with crudités of carrot, cucumber and pepper.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '3 ripe' },
      { rawName: 'Tomato', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Chilli', rawMeasure: '1 red' },
      { rawName: 'Lime', rawMeasure: '1' },
      { rawName: 'Coriander', rawMeasure: '1 small bunch' },
      { rawName: 'Carrot', rawMeasure: '2, to serve' },
      { rawName: 'Cucumber', rawMeasure: '1/2, to serve' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo date and almond energy balls',
    servingsBase: 6,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free'],
    instructions:
      '1. Soak the dates in just-boiled water for 5 minutes to soften, then drain.\n' +
      '2. Blitz the almonds in a food processor until finely chopped.\n' +
      '3. Add the dates, cacao and a pinch of salt and blitz to a sticky paste.\n' +
      '4. Roll the mixture into walnut-sized balls.\n' +
      '5. Toss in desiccated coconut and chill for 20 minutes to firm up.',
    rawLines: [
      { rawName: 'Medjool dates', rawMeasure: '150g, stoned' },
      { rawName: 'Almonds', rawMeasure: '100g' },
      { rawName: 'Cacao', rawMeasure: '2 tbsp' },
      { rawName: 'Desiccated coconut', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Paleo spiced roasted nuts',
    servingsBase: 6,
    totalTimeMinutes: 20,
    course: 'Snack',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free'],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C). Tip the almonds, cashews and walnuts into a bowl.\n' +
      '2. Add the olive oil, smoked paprika, cumin and a good pinch of salt and toss to coat.\n' +
      '3. Spread the nuts in a single layer on a baking tray.\n' +
      '4. Roast for 12–14 minutes, stirring once, until fragrant and lightly toasted.\n' +
      '5. Cool completely before serving; they crisp up as they cool.',
    rawLines: [
      { rawName: 'Almonds', rawMeasure: '100g' },
      { rawName: 'Cashews', rawMeasure: '100g' },
      { rawName: 'Walnuts', rawMeasure: '100g' },
      { rawName: 'Smoked paprika', rawMeasure: '1 tsp' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Paleo beetroot and walnut dip',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Snack',
    cuisine: 'Middle Eastern',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free'],
    instructions:
      '1. Roughly chop the cooked beetroot and tip into a food processor.\n' +
      '2. Add the walnuts, garlic, cumin, lemon juice and olive oil.\n' +
      '3. Blitz to a coarse, vivid purée, scraping down once or twice.\n' +
      '4. Season well and loosen with a little water if needed.\n' +
      '5. Spoon into a bowl, drizzle with olive oil and serve with vegetable crudités.',
    rawLines: [
      { rawName: 'Beetroot', rawMeasure: '250g, cooked' },
      { rawName: 'Walnuts', rawMeasure: '50g' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Cumin', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo deviled eggs',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Snack',
    cuisine: 'American',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Tree-nut-free'],
    instructions:
      '1. Lower the eggs into boiling water and cook for 9 minutes, then cool quickly in iced water and peel.\n' +
      '2. Halve the eggs and scoop the yolks into a bowl.\n' +
      '3. Mash the yolks with the olive oil, mustard seeds (lightly crushed), a squeeze of lemon and seasoning until smooth.\n' +
      '4. Spoon or pipe the mixture back into the whites.\n' +
      '5. Dust with smoked paprika and scatter with chives to serve.',
    rawLines: [
      { rawName: 'Egg', rawMeasure: '6' },
      { rawName: 'Mustard seeds', rawMeasure: '1/2 tsp' },
      { rawName: 'Lemon', rawMeasure: '1/2' },
      { rawName: 'Smoked paprika', rawMeasure: '1 pinch' },
      { rawName: 'Chives', rawMeasure: '1 tbsp, snipped' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  // ── Puddings & sweet (refined-sugar-free) ──────────────────────────────────
  {
    title: 'Paleo baked apples with cinnamon',
    servingsBase: 4,
    totalTimeMinutes: 45,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free'],
    instructions:
      '1. Heat the oven to 180°C (fan 160°C). Core the apples and sit them in a small baking dish.\n' +
      '2. Mix the chopped walnuts, sultanas, cinnamon and a little honey together.\n' +
      '3. Pack the mixture into the cored centres of the apples.\n' +
      '4. Pour a splash of water into the dish and bake for 35 minutes until the apples are soft and fluffy.\n' +
      '5. Serve warm with the syrupy juices spooned over.',
    rawLines: [
      { rawName: 'Apple', rawMeasure: '4 large' },
      { rawName: 'Walnuts', rawMeasure: '40g' },
      { rawName: 'Sultanas', rawMeasure: '40g' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Paleo coconut and berry chia pudding',
    servingsBase: 2,
    totalTimeMinutes: 10,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Whisk the coconut milk with a little honey and the vanilla extract.\n' +
      '2. Stir in the sesame seeds and leave to stand for 5 minutes, stirring once more so they do not clump.\n' +
      '3. Divide between two glasses and chill for at least an hour until thickened.\n' +
      '4. Top with the raspberries and blueberries.\n' +
      '5. Finish with a scattering of desiccated coconut and serve.',
    rawLines: [
      { rawName: 'Coconut milk', rawMeasure: '300ml' },
      { rawName: 'Sesame seeds', rawMeasure: '4 tbsp' },
      { rawName: 'Honey', rawMeasure: '1 tsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
      { rawName: 'Raspberries', rawMeasure: '100g' },
      { rawName: 'Blueberries', rawMeasure: '100g' },
      { rawName: 'Desiccated coconut', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Paleo dark chocolate and avocado mousse',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Scoop the avocado flesh into a food processor.\n' +
      '2. Add the cacao, honey, vanilla extract and a pinch of salt.\n' +
      '3. Blitz until completely smooth, scraping down the sides, loosening with a little coconut milk if needed.\n' +
      '4. Spoon into small glasses and chill for 30 minutes.\n' +
      '5. Top with fresh raspberries to serve.',
    rawLines: [
      { rawName: 'Avocado', rawMeasure: '2 ripe' },
      { rawName: 'Cacao', rawMeasure: '4 tbsp' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1 tsp' },
      { rawName: 'Coconut milk', rawMeasure: '3 tbsp' },
      { rawName: 'Raspberries', rawMeasure: '100g' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Paleo grilled peaches with honey and pistachios',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'Mediterranean',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free'],
    instructions:
      '1. Heat a griddle pan over a medium-high heat. Halve and stone the peaches.\n' +
      '2. Brush the cut sides lightly with coconut oil.\n' +
      '3. Griddle the peaches cut-side down for 3–4 minutes until charred and softened.\n' +
      '4. Arrange on plates and drizzle with honey.\n' +
      '5. Scatter with chopped pistachios and a little mint to serve.',
    rawLines: [
      { rawName: 'Peach', rawMeasure: '4' },
      { rawName: 'Honey', rawMeasure: '2 tbsp' },
      { rawName: 'Pistachios', rawMeasure: '40g' },
      { rawName: 'Mint', rawMeasure: 'a few leaves' },
      { rawName: 'Coconut oil', rawMeasure: '1 tbsp' },
    ],
  },
  {
    title: 'Paleo banana and walnut loaf',
    servingsBase: 8,
    totalTimeMinutes: 60,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: [],
    instructions:
      '1. Heat the oven to 170°C (fan 150°C) and line a loaf tin. Mash the bananas in a large bowl.\n' +
      '2. Beat in the eggs, melted coconut oil and honey until well combined.\n' +
      '3. Stir in the ground almonds, cinnamon, bicarbonate of soda and a pinch of salt to make a thick batter.\n' +
      '4. Fold in most of the chopped walnuts, then scrape into the tin and scatter the rest on top.\n' +
      '5. Bake for 45–50 minutes until risen and a skewer comes out clean. Cool in the tin before slicing.',
    rawLines: [
      { rawName: 'Banana', rawMeasure: '3 ripe' },
      { rawName: 'Egg', rawMeasure: '3' },
      { rawName: 'Almonds', rawMeasure: '200g, ground' },
      { rawName: 'Walnuts', rawMeasure: '60g' },
      { rawName: 'Honey', rawMeasure: '3 tbsp' },
      { rawName: 'Cinnamon', rawMeasure: '1 tsp' },
      { rawName: 'Bicarbonate of soda', rawMeasure: '1 tsp' },
      { rawName: 'Coconut oil', rawMeasure: '60g, melted' },
      { rawName: 'Salt', rawMeasure: '1 pinch' },
    ],
  },
  {
    title: 'Paleo almond and orange cake',
    servingsBase: 8,
    totalTimeMinutes: 75,
    course: 'Dessert',
    cuisine: 'Mediterranean',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: [],
    instructions:
      '1. Simmer the whole oranges in water for 45 minutes until soft, then drain and cool. Blitz the whole fruit (skin and all) to a purée, discarding any pips.\n' +
      '2. Heat the oven to 170°C (fan 150°C) and line a round tin. Whisk the eggs with the honey until pale and thick.\n' +
      '3. Fold in the orange purée, ground almonds and baking powder.\n' +
      '4. Pour into the tin and bake for 45–50 minutes until set and golden, covering with foil if it browns too fast.\n' +
      '5. Cool in the tin, then dust with a little extra ground almond and serve.',
    rawLines: [
      { rawName: 'Orange', rawMeasure: '2' },
      { rawName: 'Egg', rawMeasure: '4' },
      { rawName: 'Almonds', rawMeasure: '250g, ground' },
      { rawName: 'Honey', rawMeasure: '4 tbsp' },
      { rawName: 'Baking powder', rawMeasure: '1 tsp' },
    ],
  },
  {
    title: 'Paleo berry and coconut fool',
    servingsBase: 4,
    totalTimeMinutes: 15,
    course: 'Dessert',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Chill the can of coconut milk overnight, then scoop out the thick cream that sets at the top into a bowl.\n' +
      '2. Whisk the coconut cream with a little honey and the vanilla extract until softly whipped.\n' +
      '3. Lightly crush half the raspberries and strawberries with a fork.\n' +
      '4. Ripple the crushed berries through the coconut cream.\n' +
      '5. Spoon into glasses, top with the remaining whole berries and serve.',
    rawLines: [
      { rawName: 'Coconut milk', rawMeasure: '400ml, chilled' },
      { rawName: 'Raspberries', rawMeasure: '150g' },
      { rawName: 'Strawberries', rawMeasure: '150g' },
      { rawName: 'Honey', rawMeasure: '1 tbsp' },
      { rawName: 'Vanilla extract', rawMeasure: '1/2 tsp' },
    ],
  },
  {
    title: 'Paleo stuffed dates with almond butter',
    servingsBase: 4,
    totalTimeMinutes: 10,
    course: 'Snack',
    cuisine: 'Middle Eastern',
    dietLabels: ['Paleo', 'Vegan', 'Vegetarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free'],
    instructions:
      '1. Slit each date down one side and remove the stone.\n' +
      '2. Blitz the almonds with a little coconut oil to a coarse nut butter, or use a generous spoonful of ready almond paste.\n' +
      '3. Spoon a little of the almond mixture into each date.\n' +
      '4. Press a whole pistachio on top of each.\n' +
      '5. Dust lightly with cinnamon and serve as a sweet bite.',
    rawLines: [
      { rawName: 'Medjool dates', rawMeasure: '12' },
      { rawName: 'Almonds', rawMeasure: '60g' },
      { rawName: 'Pistachios', rawMeasure: '12' },
      { rawName: 'Cinnamon', rawMeasure: '1 pinch' },
      { rawName: 'Coconut oil', rawMeasure: '1 tsp' },
    ],
  },
  // ── More mains for breadth ──────────────────────────────────────────────────
  {
    title: 'Paleo chicken and vegetable skewers',
    servingsBase: 4,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'Greek',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Cut the chicken into chunks and toss with the olive oil, lemon juice, garlic, oregano and seasoning. Leave to marinate for 15 minutes.\n' +
      '2. Thread the chicken onto skewers with pieces of pepper, courgette and red onion.\n' +
      '3. Heat a griddle pan or barbecue to high.\n' +
      '4. Cook the skewers for 12–15 minutes, turning, until the chicken is charred and cooked through.\n' +
      '5. Squeeze over extra lemon and serve with a crunchy salad.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '600g' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '2' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Oregano', rawMeasure: '1 tsp dried' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo pork and cabbage stir-fry',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Warm the coconut oil in a wok over a high heat and stir-fry the minced pork until browned and crisp at the edges.\n' +
      '2. Push the pork to one side, add the ginger, garlic and chilli and fry for a minute.\n' +
      '3. Add the shredded cabbage and carrot and stir-fry for 4 minutes until just wilted.\n' +
      '4. Splash in the cider vinegar and toss everything together.\n' +
      '5. Season, scatter with spring onion and sesame seeds and serve.',
    rawLines: [
      { rawName: 'Minced pork', rawMeasure: '500g' },
      { rawName: 'Cabbage', rawMeasure: '1/2 small' },
      { rawName: 'Carrot', rawMeasure: '1' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Chilli', rawMeasure: '1 red' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Sesame seeds', rawMeasure: '1 tbsp' },
      { rawName: 'Cider', rawMeasure: '1 tbsp cider vinegar' },
      { rawName: 'Coconut oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo beef burgers in lettuce wraps',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'American',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Mix the minced beef with the grated onion, garlic and plenty of seasoning, then shape into four patties.\n' +
      '2. Heat the olive oil in a frying pan over a medium-high heat.\n' +
      '3. Cook the burgers for 4 minutes each side for medium, or to your liking.\n' +
      '4. Rest the burgers for a couple of minutes.\n' +
      '5. Wrap each burger in large lettuce leaves with sliced tomato, avocado and red onion.',
    rawLines: [
      { rawName: 'Minced beef', rawMeasure: '600g' },
      { rawName: 'Onion', rawMeasure: '1, grated' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lettuce', rawMeasure: '1 round, leaves separated' },
      { rawName: 'Tomato', rawMeasure: '2' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1/2' },
      { rawName: 'Olive oil', rawMeasure: '1 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo roast vegetable and chicken soup',
    servingsBase: 4,
    totalTimeMinutes: 60,
    course: 'Lunch',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Warm the olive oil in a large pan and soften the onion, carrot and celery for 10 minutes.\n' +
      '2. Stir in the garlic and thyme, then add the chicken thighs and pour in enough water to cover.\n' +
      '3. Bring to a gentle simmer and cook for 30 minutes until the chicken is tender.\n' +
      '4. Lift out the chicken, shred the meat and discard the bones, then return the meat to the pan.\n' +
      '5. Add the courgette and cook for a further 8 minutes. Season well and finish with parsley.',
    rawLines: [
      { rawName: 'Chicken thigh', rawMeasure: '6, bone-in' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Thyme', rawMeasure: '3 sprigs' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo salmon and vegetable traybake',
    servingsBase: 4,
    totalTimeMinutes: 40,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the oven to 200°C (fan 180°C). Toss the courgette, pepper, red onion and cherry tomatoes with olive oil and seasoning in a roasting tin.\n' +
      '2. Roast the vegetables for 15 minutes until starting to soften.\n' +
      '3. Nestle the salmon fillets among the vegetables and scatter over the garlic and lemon slices.\n' +
      '4. Return to the oven for 12–15 minutes until the salmon is just cooked and the vegetables are tender.\n' +
      '5. Scatter with dill and serve straight from the tin.',
    rawLines: [
      { rawName: 'Salmon fillet', rawMeasure: '4' },
      { rawName: 'Courgette', rawMeasure: '1' },
      { rawName: 'Pepper (capsicum)', rawMeasure: '1' },
      { rawName: 'Red onion', rawMeasure: '1' },
      { rawName: 'Cherry tomato', rawMeasure: '200g' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Dill', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo turkey and sweet potato shepherdless pie',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Brown the turkey mince in the olive oil over a high heat, then lift out.\n' +
      '2. Soften the onion, carrot and celery for 8 minutes, then stir in the garlic and tomato purée.\n' +
      '3. Return the turkey, add the chopped tomatoes and a splash of water, season and simmer for 20 minutes.\n' +
      '4. Meanwhile, boil the sweet potato until tender, drain and mash with a little olive oil and seasoning.\n' +
      '5. Heat the oven to 200°C (fan 180°C). Spoon the turkey into a dish, top with the sweet potato mash and bake for 25 minutes until golden.',
    rawLines: [
      { rawName: 'Turkey mince', rawMeasure: '500g' },
      { rawName: 'Sweet potato', rawMeasure: '800g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Carrot', rawMeasure: '2' },
      { rawName: 'Celery', rawMeasure: '2 sticks' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Tomato purée', rawMeasure: '2 tbsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '400g' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo prawn and cauliflower fried rice',
    servingsBase: 4,
    totalTimeMinutes: 25,
    course: 'Dinner',
    cuisine: 'Chinese',
    dietLabels: ['Paleo', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Tree-nut-free'],
    instructions:
      '1. Pulse the cauliflower to rice in a food processor.\n' +
      '2. Warm half the coconut oil in a wok, pour in the beaten eggs and scramble lightly, then lift out.\n' +
      '3. Add the rest of the oil and stir-fry the ginger, garlic, carrot and peas-free mangetout for 3 minutes.\n' +
      '4. Add the prawns and cook until pink, then tip in the cauliflower and stir-fry for 4 minutes.\n' +
      '5. Return the egg, splash in the cider vinegar, season and finish with spring onion.',
    rawLines: [
      { rawName: 'Prawns', rawMeasure: '300g, raw' },
      { rawName: 'Cauliflower', rawMeasure: '1 head' },
      { rawName: 'Egg', rawMeasure: '2' },
      { rawName: 'Carrot', rawMeasure: '1, finely diced' },
      { rawName: 'Mangetout', rawMeasure: '100g' },
      { rawName: 'Ginger', rawMeasure: '1 thumb' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Spring onion', rawMeasure: '3' },
      { rawName: 'Cider', rawMeasure: '1 tbsp cider vinegar' },
      { rawName: 'Coconut oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo herb-roasted whole trout',
    servingsBase: 2,
    totalTimeMinutes: 35,
    course: 'Dinner',
    cuisine: 'British',
    dietLabels: ['Paleo', 'Pescatarian', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Slash the trout a couple of times on each side and sit on a lined tray.\n' +
      '2. Stuff the cavities with lemon slices, dill and a little of the garlic.\n' +
      '3. Drizzle with olive oil and season well inside and out.\n' +
      '4. Roast for 20–25 minutes until the flesh is opaque and pulls easily from the bone.\n' +
      '5. Serve with the resting juices and a green salad.',
    rawLines: [
      { rawName: 'Trout', rawMeasure: '2 whole, gutted' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Dill', rawMeasure: '1 small bunch' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Olive oil', rawMeasure: '2 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo spiced lamb-stuffed aubergines',
    servingsBase: 4,
    totalTimeMinutes: 70,
    course: 'Dinner',
    cuisine: 'Middle Eastern',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free'],
    instructions:
      '1. Heat the oven to 190°C (fan 170°C). Halve the aubergines, score the flesh, brush with olive oil and roast cut-side up for 25 minutes.\n' +
      '2. Meanwhile, brown the minced lamb in olive oil, then add the onion and soften for 6 minutes.\n' +
      '3. Stir in the garlic, cumin, cinnamon and ras el hanout, then the chopped tomatoes and pine nuts, and simmer for 10 minutes.\n' +
      '4. Pile the spiced lamb into the roasted aubergine halves.\n' +
      '5. Return to the oven for 20 minutes, then scatter with parsley to serve.',
    rawLines: [
      { rawName: 'Aubergine', rawMeasure: '2 large' },
      { rawName: 'Minced lamb', rawMeasure: '400g' },
      { rawName: 'Onion', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '2 cloves' },
      { rawName: 'Cumin', rawMeasure: '1 tsp' },
      { rawName: 'Cinnamon', rawMeasure: '1/4 tsp' },
      { rawName: 'Ras el hanout', rawMeasure: '1 tsp' },
      { rawName: 'Chopped tomatoes', rawMeasure: '200g' },
      { rawName: 'Pine nuts', rawMeasure: '30g' },
      { rawName: 'Parsley', rawMeasure: '1 small bunch' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
    ],
  },
  {
    title: 'Paleo chicken, avocado and bacon salad',
    servingsBase: 2,
    totalTimeMinutes: 25,
    course: 'Lunch',
    cuisine: 'American',
    dietLabels: ['Paleo', 'Gluten-free', 'Dairy-free'],
    healthLabels: ['Egg-free', 'Tree-nut-free'],
    instructions:
      '1. Season the chicken breasts and cook in the olive oil over a medium heat for 6 minutes each side until cooked through. Rest, then slice.\n' +
      '2. Fry the bacon in the same pan until crisp, then snip into pieces.\n' +
      '3. Whisk the lemon juice with a little olive oil and crushed garlic to make a dressing. Season.\n' +
      '4. Toss the lettuce, cherry tomatoes and sliced avocado with the dressing.\n' +
      '5. Top with the sliced chicken and crisp bacon to serve.',
    rawLines: [
      { rawName: 'Chicken breast', rawMeasure: '2' },
      { rawName: 'Bacon', rawMeasure: '4 rashers' },
      { rawName: 'Lettuce', rawMeasure: '1 cos' },
      { rawName: 'Cherry tomato', rawMeasure: '150g' },
      { rawName: 'Avocado', rawMeasure: '1' },
      { rawName: 'Garlic', rawMeasure: '1 clove' },
      { rawName: 'Lemon', rawMeasure: '1' },
      { rawName: 'Olive oil', rawMeasure: '3 tbsp' },
      { rawName: 'Salt', rawMeasure: 'to taste' },
      { rawName: 'Black pepper', rawMeasure: 'to taste' },
    ],
  },
]
