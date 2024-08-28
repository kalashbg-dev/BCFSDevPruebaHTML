# PRACTICA DE USO DEL DOM

¡Hola! Si estás leyendo esto, es porque estás trabajando en mejorar tus habilidades como desarrollador web. Aquí te voy a explicar cómo mejorar y corregir un código básico de una lista de tareas (To-Do List) que manipula el DOM con JavaScript. Esta es una excelente práctica para entender cómo interactuar con los elementos de una página web desde el código.

En esta pequeña práctica usamos conocimientos de manejo del DOM. Corrigiendo un trabajo incompleto hecho por alguien más.

Como extra, creamos un segundo script, hecho bajo el cumplimiento del paradigma de la programación orientada a objetos.

## Estructura Base

Primero, tenemos la estructura básica en HTML. El HTML es como el esqueleto de nuestra aplicación; define dónde van a estar los elementos que queremos manipular.

### Lo que se hizo

1. **Contenedor principal**: Se usó un `div` con la clase `container` para envolver todo, dándole un área específica donde nuestro contenido va a estar.  
2. **Título**: Usamos un `h1` para el título de la app, que dice "To-Do List".
3. **Entrada y Botón**: Usamos un `input` de tipo `text` para que el usuario pueda escribir la nueva tarea, y un botón (`button`) para que pueda agregarla.
4. **Lista de Tareas**: Un `ul` vacío que es donde se van a añadir las tareas.

### HTML  

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>To-Do List App</title>
    <!--TODO: Importar CSS -->
</head>
<body>
    <h1>To-Do List</h1>
    <input type="text" id="newTaskInput" placeholder="Añade una nueva tarea aquí...">
    <button id="addTaskButton">Añadir Tarea</button>
    <ul id="taskList"></ul>

    <!--TODO: Importar script -->
</body>
</html>
```

### CSS

un css guía

```css
body {
    font-family: Arial, sans-serif;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin: 8px 0;
    background-color: #f4f4f4;
    padding: 10px;
    cursor: pointer;
}

li.completed {
    text-decoration: line-through;
}
```

### JS

y un Javascript incompleto

```js
/*TODO: Get Button Element By Id*/.('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('newTaskInput');
    const newTask = taskInput.value.trim();

    if (newTask) {
        addTask(newTask);
        taskInput.value = ''; // Limpiar el campo de entrada después de añadir la tarea
    } else {
        alert('Por favor, ingresa una tarea.');
    }
});

function addTask(taskDescription) {
    const taskList = document.getElementById('taskList');
    const newListItem = document./*TODO: Create a new element*/.('li');
    newListItem.textContent = taskDescription;

    newListItem./*TODO: Add new event listener*/(/*TODO: click event*/, function() {
        this.classList.toggle('completed');
    });

    taskList./*TODO: Append a new child*/(newListItem);
}
```
