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
  const id = get_id_from_url()
  if(!isValidId(id)) renderErrorPage('Invalid ID')
  $.get(`${API_URL}/${id}`)
    .then(todos => {
      setTodoToForm(todos[0])
    })
    .catch(err => {
      renderErrorPage('Server Get/id Error')
    })
  
  // Submitting the edited todo
  $('form').submit(event => {
    event.preventDefault()
    const todo = getTodoFromForm()
    if(!isTodoValid(todo)) renderErrorPage('Invalid Todo') 
      $.ajax({
        type: "PUT",
        url: `${API_URL}/${id}`,
        data: JSON.stringify(todo),
        dataType: "json",
        contentType: "application/json;charset=utf-8",
      })
      .then(updatedTodo => {
        renderHomePage()
      })
    })
})