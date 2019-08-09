// Todo Structure
// -----------------
// todoID - integer
// title - String
// description - String
// priority : integer - 1 to 5
// done: Boolean
// date - Date() 

$(() => {
  // 1. render all todos
  $.get(API_URL)
    .then(todos => {
      const $todos = $('.list-group')
      $todos.html(
        todos.reduce((acum, item) => {
          return acum +
            `<div class="list-group-item"> 
            <a href = 'single.html?id=${item.todoID}'> <span class="title"> ${item.title} (${item.todoID})</span></a>
            <span class="edit">
              <a href ='/edit.html?id=${item.todoID}'><img src="images/edit.svg" alt= "edit" /></a>
            </span>
            <span class="garbage" >
              <img src="images/garbage.svg" alt="garbage" data-id = ${item.todoID} />
            </span>
          </div>`
        }, '')
      )

      // Delete Todos when garbage.svg is clicked
      $('.garbage').map((item) => {
        const $eachBin = $($('.garbage')[item]) 
        $eachBin.click((event) => {
          console.log(event.target)
          console.log(event.target.dataset)
          const id = event.target.dataset.id
          event.target.style.cursor = 'pointer'
          console.log(id)
          if(isValidId(id)){
            $.ajax({
              type: 'DELETE',
              url: `${API_URL}/${id}`,
              success: function (response) {
                window.location = '/'
              },
              failure : function (err) {
                window.location = '/error.html'
              }
            });
          }else{
            // Invalid Id
          }
        });
      })
    })
    .catch(err => {
      console.log(err)
    })


    function isValidId(){
      return true;
    }

  // Add more todos by redirecting to new.html page
  $('.addbtn').click(event => {
    window.location = '/new.html'
  });
})