let todoList = JSON.parse(localStorage.getItem('todoList')) ||
[{
  name: 'hi', 
  dueDate: '2022-12-22'
}, {
  name: 'hello', 
  dueDate: '2022-12-24'
}
];





renderTodoList ();

function renderTodoList (){
  let todoListHTML = '';

  todoList.forEach((todoObject, index) =>{
    const { name, dueDate} = todoObject;


    const html = `
    <div>
      ${name}
    </div> 
    <div>
      ${dueDate}
    </div> 
    <button 
    class = "delete-button js-delete-button"
    >
      Delete
    </button>
  
    `;
    todoListHTML += html;
  });


  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();  
      });
    });

}

document.querySelector ('.js-add-todo-button').addEventListener('click', () => {
  addTodo ();
});


function addTodo (){
  const inputElement = document.querySelector ('.js-name-input');

  const name = inputElement.value;

  const dateInputElement = document.querySelector ('.js-due-date-input');

  const dueDate = dateInputElement.value; 

  todoList.push({
    name,
    dueDate
  });

  localStorage.setItem('todoList', JSON.stringify(todoList));

  inputElement.value = '';

  renderTodoList ();
}