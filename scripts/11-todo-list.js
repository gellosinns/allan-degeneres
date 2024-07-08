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

  for (let i = 0; i < todoList.length; i++) {
    const { name, dueDate} = todoList[i];


    const html = `
    <div>
      ${name}
    </div> 
    <div>
      ${dueDate}
    </div> 
    <button onclick = "
      todoList.splice(${i}, 1);
      renderTodoList();
      localStorage.removeItem('todoList');
    "
    class = "delete-button"
    >
      Delete
    </button>
  
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

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