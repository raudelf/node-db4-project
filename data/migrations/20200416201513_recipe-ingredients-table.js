
exports.up = function(knex) {
    return (
        knex.schema.createTable('recipes', tbl => {
        tbl.increments('id');
        tbl.text('recipe')
            .notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments('id');
            tbl.text('ingredient')
                .notNullable()
                .unique();
        })
        .createTable('recipe-ingredients', tbl => {
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.float('quantity')
                .notNullable();
        })
        .createTable('steps', tbl => {
            tbl.increments('id')
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('step_number')
                .unsigned()
                .notNullable()
                .unique()
                .autoIncrement()
            tbl.text('instructions')
                .notNullable()
        })
    )
};

exports.down = function(knex) {
  
};
