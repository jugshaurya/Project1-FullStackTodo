/*
 Todo Structure
  todoID - integer
  title - String
  description - String
  priority : integer - 1 to 5
  done: Boolean
  date - Date() 
*/

function sortTodoByID(todos){
  todos.sort((a, b) => a.todoID - b.todoID);
}

function pageHtml(todo){
  return `
  <div class="list-group-item"> 
    <span class="badge badge-dark in_all">${todo.priority}</span>
    <span class="title"><a href = 'single.html?id=${todo.todoID}'>${todo.title}</a></span>
    <small class="status" data-id = ${todo.todoID}>
      ${
        todo.done ? 'Done' : 'Pending...'
      }
    </small>
    <span class="edit">
      <a href ='/edit.html?id=${ todo.todoID }'><img src="images/edit.svg" alt ="edit" /></a>
    </span>
    <span class="garbage" >
      <img src="images/garbage.svg" alt="garbage" data-id = ${todo.todoID} />
    </span>
  </div>`
}

$(() => {
  // 1. render all todos
  $.get(API_URL)
    .then(todos => {
      console.log('slhdgk')
      sortTodoByID(todos)
      $('.list-group').html(                
        todos.reduce((acum, todo) => {
          return acum + pageHtml(todo)
        }, '')
      )

      // 2. Delete Todos when garbage.svg is clicked
      deleteOp(renderHomePage)

      // 3. Marking done as Pending and vice-versa  
      toggleOp(renderHomePage)

    })
    .catch(() => {
      renderErrorPage('Server Get Error')
    })

  // 4. Add more todos by redirecting to new.html page
  $('.addbtn').click(renderNewPage)
  
}) // Loading End