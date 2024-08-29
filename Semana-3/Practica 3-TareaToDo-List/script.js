// Obtener los elementos del DOM necesarios como se vio en clase pasada.
const taskInput = document.getElementById('newTaskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskListContainer = document.getElementById('taskList'); // Aquí cambié el nombre para confundirme menos
const clearAllButton = document.getElementById('clearAllButton'); // Agregué un botón (color rojo) para eliminar todas las tareas

// El listener al botón de añadir tarea y al botón de eliminar todas
addTaskButton.addEventListener('click', () => {
    const newTask = taskInput.value.trim();

    if (isValidTask(newTask)) {
        addTask(newTask);
        clearInput();
    } else {
        alert('Por favor, ingresa una tarea válida.');
    }
});

clearAllButton.addEventListener('click', clearAllTasks);

// Función para validar la tarea, para que no se agregue en blanco y para que se limpie el campo de entrada.
function isValidTask(task) {
    return task.length > 0;
}

function clearInput() {
    taskInput.value = '';
    taskInput.focus();
}

// Función para añadir una nueva tarea a la lista
function addTask(taskDescription) {
    const newListItem = createTaskElement(taskDescription);
    taskListContainer.appendChild(newListItem);
}

// Función para crear un elemento de lista, botón eliminar dentro de un <span>
function createTaskElement(taskDescription) { // Crear elemento en lista, botón eliminar
    const newListItem = document.createElement('li');
    newListItem.textContent = taskDescription; //el texto de la tarea.

    const taskContent = document.createElement('span'); // Crear un <span> para contener el texto y el botón
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        deleteTask(newListItem);
    });

    taskContent.appendChild(deleteButton); // Añadir el botón dentro del <span>
    newListItem.appendChild(taskContent); // Añadir el <span> al elemento de lista

    return newListItem;
}

// La X
function deleteTask(taskElement) {
    taskListContainer.removeChild(taskElement);
}

// Aquí las tareas se van todas para la chirola.
function clearAllTasks() {
    taskListContainer.innerHTML = '';
}

// Delegación de eventos para marcar tareas completadas
taskListContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI' || event.target.tagName === 'SPAN') { // Verificar si se hizo clic en un <li> o <span>
        event.target.closest('li').classList.toggle('completed'); // Marcar o desmarcar la tarea como completada
    }

    // Evitar que el evento se propague al hacer clic en el botón eliminar (no es necesario)
    if (event.target.tagName === 'BUTTON') {
        event.stopPropagation();
    }
});
