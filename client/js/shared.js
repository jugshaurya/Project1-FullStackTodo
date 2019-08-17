const API_URL = 'http://localhost:3000/api/todos'

// Validation
function isValidId(id){
    return !isNaN(id)
}
  
function isTodoValid(todo){
  return todo.title && todo.title.trim() !== '' &&
  !isNaN(todo.priority) 
}
// ---------------------------------------

// rendering Pages
function renderHomePage() {
  window.location = '/'
}

function renderNewPage() {
  window.location = '/new.html'
}

function renderSinglePage(id) {
  window.location = `/single.html?id=${id}`
}

function renderErrorPage(err_msg){
  window.location = `/error.html?message=${err_msg}`
}
// ---------------------------------------


// URL Extraction
function get_id_from_url(){
  return  window.location.href.split('=')[1]
}

// ---------------------------------------


// Form In and Out
function getTodoFromForm(){
  return {
    title: $('#title').val(),
    description :  $('#description').val(),
    priority: $('#priority').val(),
  }
}

function setTodoToForm (todo) {
  $('#title').val(todo.title)
  $('#description').val(todo.description)
  $('#priority').val(todo.priority) 
}
// ---------------------------------------
