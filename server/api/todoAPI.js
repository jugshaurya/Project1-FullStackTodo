const express = require('express')
const router = express.Router()
const knex = require('knex')({
  client: 'pg',
  connection: 'postres://shaurya:abcd@localhost:5432/tododb' // 'postres://user:password@localhost/db_name',
})

router.get('/', (req, res) => {
  // display all the todos
  knex
    .select()
    .from('todos')
    .then(todo => {
      // any developers out there are using Express to create RESTful APIs, and most of the time such APIs return JSON data. 
      // res.json() is similar to res.send() but more effective if sending json data
      res.json(todo)
    })
    .catch(err => {
      res.render('error', {
        message: 'Error while talking to DB',
        error: {
          status: 404,
          stack: err.stack,
        }
      })
    })
})

function validTodo(todo) {
  return true;
}


// Table Structure - todos

// todoID - integer
// title - String
// description - String
// priority : integer - 1 to 5
// done: Boolean
// date - Date() 
router.post('/', (req, res) => {
  if (validTodo(req.body)) {
    const todo = {
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      date : new Date(),
    }

    // Inserting todo to database
    // insert — knex.insert(data, [returning])
    knex
      .insert(todo , '*')
      .into('todos')
      .then(todo => {
        res.json(todo)
      })
      .catch(err => {
        console.log(err)
        res.render('error', {
          message: 'DB Insertion Failure',
          error: err
        })    
      })
    
  } else {
    res.render('error', {
      message: 'Invalid Todo ',
      error: err
    })
  }
})

function isValidId(id){
  return true;
}

router.put('/:id', (req, res) => {
  const id = req.params.id
  if(isValidId(id)){
    if (validTodo(req.body)) {
      const todo = {
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        date : new Date(),
        // update — knex.update(data, [returning])
      }
      knex('todos')
        .update(todo, ['todoID', 'title', 'description', 'priority','date'])
        .where({todoID: id})
        .then(result => {
          res.json(result)
        })
        .catch(err => {
          res.render('error', {
            message : 'Can not update in DB',
            error : err,
          })
        })
    }else{
      res.render('error', {
        message : 'Invalid Todo',
        error : err,
      })  
    }
  }else{
    res.render('error', {
      message : 'Invalid ID',
      error : err,
    })
  }
})

router.delete('/:id', (req, res)  => {
  const id = req.params.id
  if(isValidId(id)){
    knex('todos')
      .del()
      .where({todoID:id})
      .then(() => {
        res.send('Done')
      })
      .catch(err => {
        res.render('error', {
          message : 'Can not delete from DB',
          error : err,
        })    
      })
  }else{
    res.render('error', {
      message : 'Invalid ID',
      error : err,
    })
  }
})


module.exports = router