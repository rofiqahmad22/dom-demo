const todoFormElement = document.getElementById("todo-form");
const todoListElement = document.getElementById("todo-list");

todoFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoInputElement = document.getElementById("todo-input");
  const todoText = todoInputElement.value;
  addNewTodo(todoText);
});

function addNewTodo(todoText) {
  const newTodoElement = document.createElement("li");
  const newTodoTextNode = document.createTextNode(todoText);

  newTodoElement.append(newTodoTextNode);
  todoListElement.append(newTodoElement);
}
