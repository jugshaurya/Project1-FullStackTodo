// Todo Structure
// -----------------
// todoID - integer
// title - String
// description - String
// priority : integer - 1 to 5
// done: Boolean
// date - Date() 

function sortTodoByID(){
  todos.sort((a, b) => a.todoID - b.todoID);
}

$(() => {
  // 1. render all todos
  $.get(API_URL)
  .then(todos => {
    sortTodoByID()
    $('.list-group').html(                
      todos.reduce((acum, item) => {
        return acum +
          `<div class="list-group-item"> 
            <span class="badge badge-dark in_all">${item.priority}</span>
            <span class="title"><a href = 'single.html?id=${item.todoID}'>${item.title}</a></span>
            <small class="status" data-id = ${item.todoID}>
              ${
                item.done ? 'Done' : 'Pending...'
              }
            </small>
            <span class="edit">
              <a href ='/edit.html?id=${ item.todoID }'><img src="images/edit.svg" alt ="edit" /></a>
            </span>
            <span class="garbage" >
              <img src="images/garbage.svg" alt="garbage" data-id = ${item.todoID} />
            </span>
          </div>`
      }, '')
    )

    // 2. Delete Todos when garbage.svg is clicked
    $('.garbage').map((item) => {
      const $eachBin = $($('.garbage')[item]) 
      $eachBin.click((event) => {
        const id = event.target.dataset.id
        if(!isValidId(id)) renderErrorPage() 
        $.ajax({
          type: 'DELETE',
          url: `${API_URL}/${id}`,
        })
        .then(() => {
          renderHomePage()
        })
        .catch((err) => {
          renderErrorPage('Server Deletion Error')
        })
      })
    })

    // 3. Marking done as Pending and vice-versa  
    // Approach : getting info of a stored todo in database using id then sending updated todo
    $('.status').click(event => {
      const id = event.target.dataset.id;
      if (!isValidId(id)) renderErrorPage()
      $.get(`${API_URL}/${id}`)
      .then(todos => {
        const todo = todos[0] 
        const updatedTodo = {
          title : todo.title,
          description: todo.description,
          priority : todo.priority,
          done: !todo.done, // toggle
        }

        $.ajax({
          type: "PUT",
          url: `${API_URL}/${id}`,
          data: JSON.stringify(updatedTodo),
          dataType: "json",
          contentType: "application/json;charset=utf-8",
        })
        .then(result => {
          renderHomePage()
        })
        .catch(err => {
          renderErrorPage('Server Cannot Toggle Error')
        })
      })
    })
  })
  .catch(err => {
    console.log(err)
    renderErrorPage('Server Get Error')
  })

  // 4. Add more todos by redirecting to new.html page
  $('.addbtn').click(event => {
    renderNewPage()
  })

})// loading end