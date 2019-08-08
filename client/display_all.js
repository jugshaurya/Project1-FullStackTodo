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
            <span class="title"><a href = 'single.html?id=${item.todoID}'> ${item.title}</a></span>
            <span class = "edit">
              <img src="edit.svg" alt="edit" />
            </span>
            <span class ="garbage">
              <img src="garbage.svg" alt="garbage" />
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
})


