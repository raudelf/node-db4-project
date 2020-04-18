const db = require('../data/db-config.js');

function getRecipes() {
    return db('recipes');
};

function getShoppingList(id) {
    return db('recipe-ingredients as n')
        .join('recipes as r', 'n.recipe_id', 'r.id').select('r.recipe')
        .join('ingredients as i', 'n.ingredient_id', 'i.id').select('i.ingredient', 'n.quantity')
        .where('n.recipe_id', id);
};

function getInstructions(id) {
    return db('steps as s')
        .join('recipes as r', 's.recipe_id', 'r.id')
        .select('s.recipe_id', 'r.recipe', 's.step_number', 's.instructions')
        .orderBy('s.step_number')
        .where('s.recipe_id', id);
};

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}