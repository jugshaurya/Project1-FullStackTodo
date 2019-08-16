// Adding a new Todo

// Todo Structure
// -----------------
// todoID - integer
// title - String
// description - String
// priority : integer - 1 to 5
// done: Boolean
// date - Date() 

$(() => {
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
        type: "POST",
        url: API_URL,
        data: JSON.stringify(todo),
        dataType: "json",
        contentType: "application/json;charset=utf-8",
      })
      .then(todos => {
        window.location = '/'
      })
      .catch(err => {
        window.location = '/error.html'
      })
    }else{
      // Invalid Todo
    }
  })


  function validTodo(todo){
    return true;
  }
})