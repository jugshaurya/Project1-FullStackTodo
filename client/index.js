$(() => {
  $.get(API_URL)
  .then(todos => {
    state = todos
    render(state) // function in shared.js
  })
  .catch(err => {
    console.log(err)
  })
})