
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // Use TRUNCATE instead since it will also reset IDs
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe: 'French Market Chicken With Herbed Potatoes'},
        {recipe: 'Root Beer Pulled Pork'},
        {recipe: 'Potato Gnocchi Pasta'}
      ]);
    });
};
