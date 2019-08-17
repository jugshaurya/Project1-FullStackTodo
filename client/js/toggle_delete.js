//  Marking done as Pending and vice-versa  
// Approach : getting info of a stored todo in database using id then sending updated todo
function toggleOp(renderPage, id ) {
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

      return $.ajax({
        type: "PUT",
        url: `${API_URL}/${id}`,
        data: JSON.stringify(updatedTodo),
        dataType: "json",
        contentType: "application/json;charset=utf-8",
      })
      .then(() => {
        !id ? renderPage() : renderPage(id)
      })
      .catch(err => {      
        renderErrorPage('Server Cannot Toggle Error')
      })
    })
  })
}

function deleteOp(renderPage){
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
      .then(renderPage)
      .catch(() => {
        renderErrorPage('Server Deletion Error')
      })
    })
  })
}