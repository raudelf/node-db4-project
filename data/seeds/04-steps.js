
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step_number: 1, instructions: 'Preheat the oven to 450˚. Toss the potatoes, two tablespoons olive oil, one tablespoon chopped herbs (your choice), and ½ teaspoon salt in a large cast-iron skillet or shallow baking dish. Spread in an even layer.'},
        {recipe_id: 1, step_number: 2, instructions: 'Remove the giblets from the chicken, if needed. Rinse and dry the chicken very well (inside and out) with paper towels. Put the chicken, breast-side down, on a cutting board. Starting at the bottom, cut along both sides of the backbone using kitchen shears or very sharp scissors; discard the backbone. Flip the chicken over and open it like a book; press down on the breastbone to flatten.'},
        {recipe_id: 1, step_number: 3, instructions: 'Brush chicken with one tablespoon olive oil and generously season all over with about 1½ teaspoons salt and ½ teaspoon pepper.'},
        {recipe_id: 1, step_number: 4, instructions: 'Put the chicken on top of the potatoes in the skillet (tuck some extra herbs under the chicken, if desired) and roast until golden and a thermometer inserted into the thigh registers 180˚, about 45 minutes. Let cool slightly before serving. Garnish with more herbs, if desired.'},
        {recipe_id: 2, step_number: 1, instructions: 'Place the pork in a slow cooker and pour the can of root beer over the meat. Cover and cook on low for 6 hours or until pork shreds easily with a fork.'},
        {recipe_id: 2, step_number: 2, instructions: 'After pork has cooked, drain and discard the root beer. Shred the pork and place it back in the slow cooker. Pour the barbecue sauce over the pork and stir to combine. Serve immediately or keep warm in slow cooker until ready to serve. Serve on hamburger buns.'},
        {recipe_id: 3, step_number: 1, instructions: 'First, bake the potatoes at 400 degres F (200C) for about 1 hour, or until fork-tender.'},
        {recipe_id: 3, step_number: 2, instructions: 'Out of oven, immediately spilt them open. Then peel off the flesh and add in a bowl. Mash with a potato masher or a fork. Season with salt. Continue mashing until smooth. Then add to a fine sieve and push the potato with a spoon. This will remove any lumps. You can use a food mill or a ricer.'},
        {recipe_id: 3, step_number: 3, instructions: 'Now sprinkle half of the flour on the clean working surface. And transfer the potato over the flour and spread evenly. Then sprinkle remaining flour over the potato. And make a well in the center and add in an egg yolk. Then break it with an index finger and make circles. And start kneading. It should form a slightly sticky dough. If it\'s too sticky add flour a little more.'},
        {recipe_id: 3, step_number: 4, instructions: 'And roll out in half-inch thick with a rolling pin. And cut in ribbons with a pizza cutter or a knife. Roll a ribbon into a rope. Then cut the rope into 1-inch lengths.'},
        {recipe_id: 3, step_number: 5, instructions: 'Dust with flour on a parchment-lined baking sheet. Roll each piece into a ball. And arrange the dumplings on the sheet. Then lightly push a dumpling on the back of a fork to make a ridge pattern. Repeat with remaining dumplings.'},
        {recipe_id: 3, step_number: 6, instructions: 'In a large pan of generously salted boiling water, add gnocchi. Cook in batches, not all at once. I am cooking 10 dumplings at a time. Then cook until they rise to the surface. Cook them on the surface for additional 30 seconds. With a slotted spoon, transfer to a dish. The dumplings will get harder as they cool.'},
        {recipe_id: 3, step_number: 7, instructions: 'Serve with pomodoro sauce, pepper and cheese.'}
      ]);
    });
};
