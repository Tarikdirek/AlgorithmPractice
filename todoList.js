let todoList = document.getElementById("todoList");
let input = document.getElementById("todoInput");
let button = document.getElementById("addTodo");

button.addEventListener("click", function () {
  if (input.value.trim() === "") return;

  let createdTodo = document.createElement("li");
  createdTodo.classList.add("list-item");
  createdTodo.innerHTML = `<span>${input.value}</span>
        <input type="checkbox" class="done-checkbox">
        <button class="delete-btn">Sil</button>`;
  todoList.appendChild(createdTodo);
  input.value = "";
});

todoList.addEventListener("click", function (event) {
  let todoItem = event.target.classList.closest(".todo-item");
  if (event.target && event.target.classList.contains("delete-btn")) {
    todoItem.remove();
  }
  if (event.target && event.target.contains('done-checkbox')) {
    const span = todoItem.querySelector('span');
    span.textDecoration = event.target.checked ? 'line-trough' : 'none';
    if (event.target.checked) {
        todoList.appendChild(todoItem)
    }
  }
});
