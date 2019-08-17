// File for a single Todo 
// Functionality :- display particular todo


/*
 Todo Structure
  todoID - integer
  title - String
  description - String
  priority : integer - 1 to 5
  done: Boolean
  date - Date() 
*/

function pageHtml(todo) {
  return `
    <div class="card-header">
      <span> ${todo.title} </span>
      <button class="btn btn-secondary">
        <span class="badge badge-dark">${todo.priority}</span>
      </button>
    </div>

    <div class="card-body">
      <p class="card-text">${todo.description}</p>
    </div>
    
    <div class="bottom-right-side">
      <p>
        Date:
        ${new Date(todo.date).getDate()}- 
        ${new Date(todo.date).getMonth()}-
        ${new Date(todo.date).getFullYear()}
        |Time: 
        ${new Date(todo.date).getHours()}:
        ${new Date(todo.date).getMinutes()}:
        ${new Date(todo.date).getSeconds()}  
      </p>
    
      <small class="status in_single_file" data-id = ${todo.todoID}>
        ${todo.done ? 'Done' : 'Pending...'}
      </small>
    
      <span class="edit">
        <a href ="/edit.html?id=${todo.todoID}"> 
          <img src="images/edit.svg" alt= "edit" />
        </a>
      </span>
    
      <span class="garbage" >
        <img src="images/garbage.svg" alt="garbage" data-id = ${todo.todoID} />
      </span>
    </div>`
}

$(() => {
  const id = get_id_from_url()

  // Showing all Todos from DB
  $.get(`${API_URL}/${id}`)
    .then(todos => {
      const todo = todos[0]
      $('.card').html(pageHtml(todo))

      // Delete Todos when garbage.svg is clicked
      deleteOp(renderHomePage)        
      toggleOp(renderSinglePage, id)
    })
    .catch((err) => {
      renderErrorPage('Server Get/id Error')
    })
})