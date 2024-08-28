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

  isValidTask(taskDescription) {
      return taskDescription.length > 0;
  }

  clearInput() {
      this.taskInput.value = '';
      this.taskInput.focus();
  }

  renderTask(task) {
      const listItem = document.createElement('li');
      listItem.textContent = task.description;
      if (task.completed) {
          listItem.classList.add('completed');
      }

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.classList.add('delete-button');
      deleteButton.style.textDecoration = 'none';
      deleteButton.style.marginLeft = '10px';

      listItem.appendChild(deleteButton);
      this.taskListContainer.appendChild(listItem);
  }

  deleteTask(taskElement) {
      const index = Array.from(this.taskListContainer.children).indexOf(taskElement);
      if (index > -1) {
          this.tasks.splice(index, 1);
          this.taskListContainer.removeChild(taskElement);
      }
  }

  clearAllTasks() {
      this.tasks = [];
      this.taskListContainer.innerHTML = '';
  }

  handleTaskClick(event) {
      if (event.target.tagName === 'LI') {
          const index = Array.from(this.taskListContainer.children).indexOf(event.target);
          if (index > -1) {
              this.tasks[index].toggleComplete();
              event.target.classList.toggle('completed');
          }
      } else if (event.target.classList.contains('delete-button')) {
          event.stopPropagation();
          this.deleteTask(event.target.parentElement);
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