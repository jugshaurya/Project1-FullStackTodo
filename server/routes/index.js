const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // display all the todos
  res.send(`<h1>Go to /api/todos </h1>`)
})


module.exports = router