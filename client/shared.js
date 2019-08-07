const API_URL = 'http://localhost:3000/api/todos'
const listGroupElement = document.querySelector('.list-group')
let state = []

function render (state) {
  listGroupElement.innerHTML = state.reduce((acum , item) => {
    return acum + `<button 
        type="button"
        class="list-group-item
        list-group-item-action">
      ${item.title}
    
    </button>`
  }, '')
}
