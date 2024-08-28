// Obtener los elementos del DOM necesarios como se vio en clase
const taskInput = document.getElementById('newTaskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskListContainer = document.getElementById('taskList'); // Cambiamos el nombre para claridad
const clearAllButton = document.getElementById('clearAllButton'); // Botón para eliminar todas las tareas

// Añadir el listener al botón de añadir tarea
addTaskButton.addEventListener('click', () => {
    const newTask = taskInput.value.trim();

    if (isValidTask(newTask)) {
        addTask(newTask);
        clearInput();
    } else {
        alert('Por favor, ingresa una tarea válida.');
    }
});

// Añadir evento listener al botón de eliminar todas las tareas
clearAllButton.addEventListener('click', clearAllTasks);

// Función para validar la tarea, para que no se agregue en blanco
function isValidTask(task) {
    return task.length > 0;
}

// Función para limpiar el campo de entrada al agregar tarea
function clearInput() {
    taskInput.value = '';
    taskInput.focus();
}

// Función para añadir una nueva tarea a la lista
function addTask(taskDescription) {
    const newListItem = createTaskElement(taskDescription);
    taskListContainer.appendChild(newListItem);
}

// Función para crear un nuevo elemento de tarea
function createTaskElement(taskDescription) {
    const newListItem = document.createElement('li');
    newListItem.textContent = taskDescription;

    // Botón para eliminar tarea individual
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');

    // Aplicar estilo directo al botón para evitar el tachado
    deleteButton.style.textDecoration = 'none'; // Asegura que el texto del botón no se tache
    deleteButton.style.marginLeft = '10px'; // Ajuste de margen para el botón

    deleteButton.addEventListener('click', () => {
        deleteTask(newListItem);
    });

    newListItem.appendChild(deleteButton);

    return newListItem;
}

// Función para eliminar una tarea específica
function deleteTask(taskElement) {
    taskListContainer.removeChild(taskElement);
}

// Función para eliminar todas las tareas
function clearAllTasks() {
    taskListContainer.innerHTML = '';
}

// Delegación de eventos para marcar tareas completadas
taskListContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }

    // Evitar que el evento se propague al hacer clic en el botón eliminar
    if (event.target.tagName === 'BUTTON') {
        event.stopPropagation();
    }
});
