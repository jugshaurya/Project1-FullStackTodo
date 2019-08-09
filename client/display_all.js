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
      todos.sort((a, b) => a.todoID - b.todoID);
      const $todos = $('.list-group')
      $todos.html(                
        todos.reduce((acum, item) => {
          return acum +
            `<div class="list-group-item"> 
              <span class="title"><a href = 'single.html?id=${item.todoID}'>${item.title} (${item.todoID})</a></span>
              <small class="status" data-id = ${item.todoID}>
                ${
                  item.done ? 'Done' : 'Pending...'
                }
              </small>
              <span class="edit">
                <a href ='/edit.html?id=${item.todoID}'><img src="images/edit.svg" alt ="edit" /></a>
              </span>
              <span class="garbage" >
                <img src="images/garbage.svg" alt="garbage" data-id = ${item.todoID} />
              </span>
            </div>`
        }, '')
      )

      // Delete Todos when garbage.svg is clicked
      $('.garbage').map((item) => {
        const $eachBin = $($('.garbage')[item]) 
        $eachBin.click((event) => {
          // console.log(event.target)
          // console.log(event.target.dataset)
          const id = event.target.dataset.id
          // console.log(id)
          if(isValidId(id)){
            $.ajax({
              type: 'DELETE',
              url: `${API_URL}/${id}`,
              success: function (response) {
                window.location = '/'
              },
              failure : function (err) {
                window.location = '/error.html'
              }
            });
          }else{
            // Invalid Id
          }
        });
      })

      // Marking done as Pending or vice-versa -> 
      // Approach : getting info of a stored todo in database using id then sending updated todo
      $('.status').click(event => {
        const id = event.target.dataset.id;
        console.log(id)
        if (isValidId(id)){
          $.get(`${API_URL}/${id}`)
            .then(todos => {
              const todo = todos[0] 
              const updatedTodo = {
                title : todo.title,
                description: todo.description,
                priority : todo.priority,
                done: !todo.done, // toggle
              } 
              console.log(updatedTodo)
              $.ajax({
                type: "PUT",
                url: `${API_URL}/${id}`,
                data: JSON.stringify(updatedTodo),
                dataType: "json",
                contentType: "application/json;charset=utf-8",
              })
            .then(result => {
              window.location = '/'
            })
            .catch(err => {
              // Can not toggle in DB
            })
          })
        }else{
        // Invalid ID
      }
    })

  })
  .catch(err => {
    console.log(err)
  })

  function isValidId(){
    return true;
  }

  function validTodo(todo){
    return true;
  }

  // Add more todos by redirecting to new.html page
  $('.addbtn').click(event => {
    window.location = '/new.html'
  });
})