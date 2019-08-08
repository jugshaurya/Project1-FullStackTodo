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
    console.log($title, $description, $priority)
    const todo = {
      title: $title,
      description : $description,
      priority: $priority,
    };
    // validate todos
    if(validTodo(todo)){
      $.post(API_URL, todo)
        .then(todo => {
          window.location = '/'
        })
        .catch(err => {
          console.log(err)
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