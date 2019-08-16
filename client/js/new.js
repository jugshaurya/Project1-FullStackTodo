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
    const todo = getTodoFromForm()
    if(!isTodoValid(todo)) renderErrorPage('Invalid Todo') 
    $.ajax({
      type: "POST",
      url: API_URL,
      data: JSON.stringify(todo),
      dataType: "json",
      contentType: "application/json;charset=utf-8",
    })
    .then(todos => {
      renderHomePage()
    })
    .catch(err => {
      renderErrorPage('Server Post Error') 
    })
  })
})