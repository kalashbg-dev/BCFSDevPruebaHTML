class Task {
	constructor(description) {
			this.description = description;
			this.completed = false;
	}

	toggleComplete() {
			this.completed = !this.completed;
	}
}

class TodoList {
	constructor() {
			this.tasks = [];
			this.taskInput = document.getElementById('newTaskInput');
			this.addTaskButton = document.getElementById('addTaskButton');
			this.taskListContainer = document.getElementById('taskList');
			this.clearAllButton = document.getElementById('clearAllButton');

			this.addTaskButton.addEventListener('click', () => this.addNewTask());
			this.clearAllButton.addEventListener('click', () => this.clearAllTasks());
			this.taskListContainer.addEventListener('click', (event) => this.handleTaskClick(event));
	}

	addNewTask() {
			const newTaskDescription = this.taskInput.value.trim();
			if (this.isValidTask(newTaskDescription)) {
					const task = new Task(newTaskDescription);
					this.tasks.push(task);
					this.renderTask(task);
					this.clearInput();
			} else {
					alert('Por favor, ingresa una tarea válida.');
			}
	}

	isValidTask(task) {
			return task.length > 0;
	}

	clearInput() {
			this.taskInput.value = '';
			this.taskInput.focus();
	}

	renderTask(task) {
			const listItem = document.createElement('li');
			listItem.textContent = task.description;
			
			const taskContent = document.createElement('span');
			const deleteButton = document.createElement('button');
			deleteButton.textContent = 'X';
			deleteButton.classList.add('delete-button');
			deleteButton.addEventListener('click', () => this.deleteTask(task));

			taskContent.appendChild(deleteButton);
			listItem.appendChild(taskContent);

			if (task.completed) {
					listItem.classList.add('completed');
			}

			this.taskListContainer.appendChild(listItem);
	}

	deleteTask(task) {
			const index = this.tasks.indexOf(task);
			if (index > -1) {
					this.tasks.splice(index, 1);
					this.renderAllTasks();
			}
	}

	clearAllTasks() {
			this.tasks = [];
			this.renderAllTasks();
	}

	renderAllTasks() {
			this.taskListContainer.innerHTML = '';
			this.tasks.forEach(task => this.renderTask(task));
	}

	handleTaskClick(event) {
			if (event.target.tagName === 'LI' || event.target.tagName === 'SPAN') {
					const listItem = event.target.closest('li');
					const taskIndex = Array.from(this.taskListContainer.children).indexOf(listItem);
					if (taskIndex > -1) {
							this.tasks[taskIndex].toggleComplete();
							listItem.classList.toggle('completed');
					}
			}

			if (event.target.tagName === 'BUTTON') {
					event.stopPropagation();
			}
	}
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
	const todoList = new TodoList();
});
/* 

Esta versión del código utiliza los principios de la POO:

1. **Encapsulación: se han creado dos clases principales, `Task` y `TodoList`, que encapsulan los datos y comportamientos relacionados.

2. **Abstracción**: Las clases proporcionan una interfaz clara para interactuar con las tareas y la lista de tareas, ocultando los detalles de implementación.

3. **Modularidad**: El código está organizado en métodos más pequeños y específicos, mejorando la legibilidad y mantenibilidad.

4. **Reutilización**: La estructura de clases permite una fácil reutilización y extensión del código.

Cambios y mejoras:

- Se creó una clase `Task` para representar cada tarea individual.
- Se implementó una clase `TodoList` que maneja toda la lógica de la aplicación.
- Los event listeners ahora están dentro del constructor de `TodoList`.
- Se mejoró la gestión del estado de las tareas (completadas/no completadas).

Este código es más organizado y se mantiene mejor.

*/