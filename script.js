const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask(todoInput.value);
    todoInput.value = "";
});

function addTask(task) {
    if (!task) return;
    const listItem = document.createElement("li");
    listItem.textContent = task;
    listItem.setAttribute("draggable", "true");
    listItem.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", event.target.id);
        event.target.style.opacity = "0.5";
        });
        listItem.addEventListener("dragend", (event) => {
            event.target.style.opacity = "";
        });
        
        listItem.addEventListener("dragover", (event) => {
            event.preventDefault();
        });
        
        listItem.addEventListener("drop", (event) => {
            event.preventDefault();
            const draggedId = event.dataTransfer.getData("text/plain");
            const draggedItem = document.getElementById(draggedId);
            if (draggedItem && draggedItem !== event.target) {
                todoList.insertBefore(draggedItem, event.target.nextSibling);
            }
        });
        
        listItem.id = `task-${Date.now()}`;
        todoList.appendChild(listItem);}

        function enableDragAndDrop() {
        const listItems = document.querySelectorAll("li");
        listItems.forEach((item) => {
        item.setAttribute("draggable", "true");
        });
        }
        
        enableDragAndDrop();
        
        