
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'Red-Skinned Potatoes'},
        {ingredient: 'Bunch of Rosemary Herb'},
        {ingredient: 'Whole Chicken'},
        {ingredient: 'Pork Shoulder'},
        {ingredient: 'Can of Root Beer'},
        {ingredient: 'Bbq Sauce'},
        {ingredient: 'Hamburger Buns'},
        {ingredient: 'Baking Potatoes'},
        {ingredient: 'Egg Yolk'},
        {ingredient: 'All-Purpose Flour'},
      ]);
    });
};
