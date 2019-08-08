// File for a single Todo 

// Functionality :- display particular todo

$(() => {
  const id = window.location.href.split('=')[1]
  $.get(`${API_URL}/${id}`)
    .then(todos => {
      // console.log(todos[0])
      const todo = todos[0]
      $('.card').html(
          `
          <div class="card-header">${todo.title}</div>
          <div class="card-body">
            <p class="card-text">${todo.description}</p>
            <button class="btn btn-success">
              Priority <span class="badge badge-dark">${todo.priority}</span>
            </button>
            <p>${todo.done}</p>
            <p>${todo.date}</p>
          </div>`  
      )
    })
    .catch(err => {
      console.log(err)
    })


})