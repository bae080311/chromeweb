const todoform = document.getElementById("todo-form");
const todoinput = todoform.querySelector("input");
const todolist = document.getElementById("todo-list");

function deletetodo(event)
{
    const li = event.target.parentElement;
    li.remove();
}
function painttodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deletetodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    todolist.appendChild(li);
}
function submittodo(event)
{
    event.preventDefault();
    const newTodo = todoinput.value;
    todoinput.value="";
    painttodo(newTodo)
}
todoform.addEventListener("submit", submittodo);