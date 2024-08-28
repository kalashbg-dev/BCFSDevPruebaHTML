# Código hecho bajo el paradigma de la POO

## LEA HASTA EL FINAL

### 1. Clase Task

```javascript
class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}
```

- Esta clase representa una tarea individual.
- El constructor inicializa una tarea con una descripción y la marca como no completada.
- El método `toggleComplete()` cambia el estado de completado de la tarea.

### 2. Clase TodoList

```javascript
class TodoList {
    constructor() {
        this.tasks = [];
        // ... (inicialización de elementos del DOM)
    }
    // ... (otros métodos)
}
```

- Esta es la clase principal que maneja toda la funcionalidad de la lista de tareas.
- El constructor inicializa un array vacío para las tareas y configura los elementos del DOM y los event listeners.

### 3. Métodos de TodoList

a. addNewTask():

```javascript
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
```

- Este método crea una nueva tarea, la añade al array de tareas y la renderiza en la interfaz.

b. renderTask(task):

```javascript
renderTask(task) {
    const listItem = document.createElement('li');
    // ... (creación de elementos del DOM)
    this.taskListContainer.appendChild(listItem);
}
```

- Este método crea los elementos del DOM necesarios para mostrar una tarea en la interfaz.

c. deleteTask(task):

```javascript
deleteTask(task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
        this.tasks.splice(index, 1);
        this.renderAllTasks();
    }
}
```

- Este método elimina una tarea del array y actualiza la interfaz.

d. clearAllTasks():

```javascript
clearAllTasks() {
    this.tasks = [];
    this.renderAllTasks();
}
```

- Este método elimina todas las tareas.

e. handleTaskClick(event):

```javascript
handleTaskClick(event) {
    if (event.target.tagName === 'LI' || event.target.tagName === 'SPAN') {
        // ... (lógica para marcar una tarea como completada)
    }
    // ... (manejo de eventos para el botón de eliminar)
}
```

- Este método maneja los clics en las tareas para marcarlas como completadas o eliminarlas.

### 4. Inicialización

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const todoList = new TodoList();
});
```

- Este código crea una instancia de TodoList cuando el DOM está completamente cargado.

La estructura POO en este código ofrece varias ventajas:

1. Organización: Cada clase (Task y TodoList) encapsula su propia lógica y datos.
2. Mantenibilidad: Es más fácil añadir o modificar funcionalidades sin afectar otras partes del código.
3. Reutilización: Puedes crear múltiples instancias de TodoList si lo necesitas.
4. Abstracción: Los detalles de implementación están ocultos dentro de las clases, proporcionando una interfaz clara para su uso.
