// Editing a existing Todo with id in URL

// Todo Structure
// -----------------
// todoID - integer
// title - String
// description - String
// priority : integer - 1 to 5
// done: Boolean
// date - Date() 

$(() => {
  // Populating the form with todo of given id
  const id = Number(window.location.href.split('=')[1])
  console.log(id)
  if(!isValidID){
    //errror and return
    window.location = '/error.html'
  }

  $.get(`${API_URL}/${id}`)
    .then(todos => {
      const todo = todos[0]
      console.log(todo)
      $('#title').val(todo.title)
      $('#description').val(todo.description)
      $('#priority').val(todo.priority)

    })
    .catch(err => {
      console.log(err)
      window.location = '/error.html'
    })

  $('form').submit(e => {
    e.preventDefault()

  })

  $('form').submit(e => {
    e.preventDefault()
    const $title = $('#title').val()
    const $description = $('#description').val()
    const $priority = $('#priority').val()
    const todo = {
      title: $title,
      description : $description,
      priority: $priority,
    };

    // validate todos
    if(validTodo(todo)){
      $.ajax({
        type: "PUT",
        url: `${API_URL}/${id}`,
        data: JSON.stringify(todo),
        dataType: "json",
        contentType: "application/json;charset=utf-8",
      })
      .then(updatedTodo => {
        window.location = '/'
      })
    }else{
      // Invalid Todo
    }
  })

  function isValidID(id){
    return true;
  }

  function validTodo(todo) {
    return true;
  }
})