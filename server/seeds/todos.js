
// Table Structure - todos

// todoID - integer
// title - String
// description - String
// priority : integer - 1 to 5
// done: Boolean
// date - Date() 

exports.seed = function(knex) {
  return knex('todos').del()
    .then(function () {
      return knex('todos').insert([
        {todoID : 1 , title :'First CRUD APP', 'description': 'FULL STACK PROJECT ','priority': 1,'done': false, 'date': new Date()},
        {todoID : 2 , title :'Test Todo 1 ', 'description': 'Test 2','priority': 2, 'date': new Date()},
        {todoID : 3 , title :'Test Todo 1 ', 'description': 'Test 3','priority': 3,'done': true, 'date': new Date()},
        {todoID : 4 , title :'Test Todo 1 ','done': true, 'date': new Date()},
        {todoID : 5 , title :'Test Todo 1 ','done': true, 'date': new Date()}
      ]);
    });
};
