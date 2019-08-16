// File for a single Todo 

// Functionality :- display particular todo

$(() => {
  const id = window.location.href.split('=')[1]
  $.get(`${API_URL}/${id}`)
    .then(todos => {
      const todo = todos[0]
      $('.card').html(
          `
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
            |
            Time: 
            ${new Date(todo.date).getHours()}:
            ${new Date(todo.date).getMinutes()}:
            ${new Date(todo.date).getSeconds()}
            
            </p>
            <small class="status in_single_file" data-id = ${todo.todoID}>
              ${
                todo.done ? 'Done' : 'Pending...'
              }
            </small>
            <span class="edit">
              <a href ='/edit.html?id=${todo.todoID}'><img src="images/edit.svg" alt= "edit" /></a>
            </span>
            <span class="garbage" >
              <img src="images/garbage.svg" alt="garbage" data-id = ${todo.todoID} />
            </span>
          </div>
          `  
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
    })
    .catch(err => {
      console.log(err)
    })

    function isValidId(){
      return true;
    }
  
})