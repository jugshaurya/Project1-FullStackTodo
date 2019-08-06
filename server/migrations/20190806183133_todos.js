
// Table Structure - todos

// todoID - integer
// title - String
// description - String
// priority : integer - 1 to 5
// done: Boolean
// date - Date() 

exports.up = function(knex) {
    // Creates a new table on the database, with a callback function to modify the table's structure, using the schema-building commands.
    return knex.schema.createTable('todos', function(table) {
        table.increments('todoID').primary().notNullable() // primary key
        table.string('title').notNullable() 
        table.text('description')
        table.integer('priority').defaultTo(5).notNullable()
        table.boolean('done').defaultTo(false).notNullable()
        table.datetime('date').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('todos')
};
