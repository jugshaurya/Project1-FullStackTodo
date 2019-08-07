
// const listGroupElement = document.querySelector('.list-group')
const API_URL = 'http://localhost:3000/api/todos'
// // ways to fetch data from apis

$(() => {
  $.get(API_URL, (todos, err) => {
    if(err) {
      console.log(err)
    }else{
      console.log(todos)
    }
  })
})
// // callback(result,err) 
// //defered .done , .fail()
// //promised .then , .catch


// const getTodos = () => {
// }

// // function render(){
// //     // {{#each todo}}
// //     //     <button type="button" class="list-group-item list-group-item-action">
// //     //       {{title}}
// //     //     </button>
// //     //   {{/each}}
// // }

// // render()

// getTodos()