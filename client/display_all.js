// Todo Structure
// -----------------
// todoID - integer
// title - String
// description - String
// priority : integer - 1 to 5
// done: Boolean
// date - Date() 

$(() => {
  // 1. render all todos
  $.get(API_URL)
  .then(todos => {
    const $todos = $('.list-group')
    $todos.html( 
      todos.reduce((acum, item) => {
        return acum +
          `<div class="list-group-item"> 
            <span class="title"><a href = 'single.html?id=${item.todoID}'> ${item.title} (${item.todoID})</a></span>
            <span class = "edit">
              <a href ='/edit.html?id=${item.todoID}'><img src="images/edit.svg" alt= "edit" /></a>
            </span>
            <span class ="garbage">
              <a><img src="images/garbage.svg" alt="garbage" /></a>
            </span>
          </div>`
      }, '')
    )
  })
  .catch(err => {
    console.log(err)
  })

  // Add more todos by redirecting to new.html page
  $('.addbtn').click(e => { 
    window.location = '/new.html'
  });

  // Delete Todos when garbage.svg is clicked
  


})


