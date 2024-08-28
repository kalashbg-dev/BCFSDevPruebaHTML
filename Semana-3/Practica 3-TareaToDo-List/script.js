// Obtener los elementos del DOM necesarios como se vio en clase pasada.
const taskInput = document.getElementById('newTaskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskListContainer = document.getElementById('taskList'); // Aqui cambié el nombre para confundirme menos
const clearAllButton = document.getElementById('clearAllButton'); //Agregué un Botón (color rojo) para eliminar todas las tareas

//el listener al botón de añadir tarea y al boton de eliminar todas
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


function createTaskElement(taskDescription) { //Crear elemento en lista , boton eliminar,
    const newListItem = document.createElement('li');
    newListItem.textContent = taskDescription;


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');

    // estilo css del boton X, Esta parte no me funciona
    deleteButton.style.textDecoration = 'none';
    deleteButton.style.marginLeft = '10px';

    deleteButton.addEventListener('click', () => {
        deleteTask(newListItem);
    });

    newListItem.appendChild(deleteButton);

    return newListItem;
}

// la x
function deleteTask(taskElement) {
    taskListContainer.removeChild(taskElement);
}

//Aquí las tareas se van todas para la chirola.
function clearAllTasks() {
    taskListContainer.innerHTML = '';
}

// Delegación de eventos para marcar tareas completadas
taskListContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }

    // Evitar que el evento se propague al hacer clic en el botón eliminar, tratando de corregir el boton tachado, pero fallé
    if (event.target.tagName === 'BUTTON') {
        event.stopPropagation();
    }
});
