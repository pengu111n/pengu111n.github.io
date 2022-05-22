const toDoform = document.getElementById("todo-form");
const toDoInput = toDoform.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDO(event) {
  const li = this.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerHTML = `<img src="img/2.png" height ="30" width="30" opacity="0";/>`;
  button.addEventListener("click", deleteToDO);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  // li.style = `list-style-image : url("img/1.png") `;
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoform.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

if (savedUsername === null) {
  toDoform.classList.add(HIDDEN_CLASSNAMES);
  toDoList.classList.add(HIDDEN_CLASSNAMES);
} else {
  toDoform.classList.remove(HIDDEN_CLASSNAMES);
  toDoList.classList.remove(HIDDEN_CLASSNAMES);
}
