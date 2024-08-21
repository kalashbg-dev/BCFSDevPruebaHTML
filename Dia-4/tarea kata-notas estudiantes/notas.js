// Array de estudiantes con nombres dominicanos y sus calificaciones
const estudiantes = [
    { nombre: 'Juan Pérez', calificacion: 85 },
    { nombre: 'Ana Gómez', calificacion: 92 },
    { nombre: 'Pedro Martínez', calificacion: 78 },
    { nombre: 'María Rodríguez', calificacion: 64 },
    { nombre: 'Luis Sánchez', calificacion: 88 },
    { nombre: 'Carmen Fernández', calificacion: 91 },
    { nombre: 'José García', calificacion: 55 },
    { nombre: 'Laura López', calificacion: 73 },
    { nombre: 'Carlos Díaz', calificacion: 84 },
    { nombre: 'Miguel Jiménez', calificacion: 90 }
];

// Estudiantes agregados por el usuario
let estudiantesAgregados = [];

// Función para validar las calificaciones
const esCalificacionValida = calificacion => !isNaN(calificacion) && calificacion >= 0 && calificacion <= 100;

// Filtrar estudiantes con calificaciones válidas
let estudiantesValidos = estudiantes.filter(est => esCalificacionValida(est.calificacion));

// Función para crear y actualizar el dashboard
const crearDashboard = estudiantes => {
    const dashboardDiv = document.getElementById('dashboard');
    dashboardDiv.innerHTML = '';

    let totalCalificaciones = 0;
    let aprobados = 0;
    let reprobados = 0;

    estudiantes.forEach((estudiante, index) => {
        totalCalificaciones += estudiante.calificacion;
        estudiante.calificacion >= 65 ? aprobados++ : reprobados++;

        const estudianteDiv = document.createElement('div');
        estudianteDiv.classList.add('estudiante');
        estudianteDiv.dataset.index = index;

        estudianteDiv.innerHTML = `
            <h2>${estudiante.nombre}</h2>
            <p class='calificacion'>Calificación: ${estudiante.calificacion}</p>
            <p class='promedio'></p>
        `;

        // Añadimos el evento de clic para mostrar detalles del estudiante
        estudianteDiv.addEventListener('click', () => {
            mostrarDetallesEstudiante(estudiante);
        });

        dashboardDiv.appendChild(estudianteDiv);
    });

    const promedio = totalCalificaciones / estudiantes.length;

    estudiantes.forEach((estudiante, index) => {
        const estudianteDiv = dashboardDiv.children[index];
        const resultadoPromedio = estudianteDiv.querySelector('.promedio');
        if (estudiante.calificacion >= promedio) {
            resultadoPromedio.textContent = 'Calificación por encima del promedio';
            estudianteDiv.classList.add('por-encima');
        } else {
            resultadoPromedio.textContent = 'Calificación por debajo del promedio';
            estudianteDiv.classList.add('por-debajo');
        }
    });

    const resumenDiv = document.createElement('div');
    resumenDiv.classList.add('estudiante');

    resumenDiv.innerHTML = `
        <h2>Resumen</h2>
        <p>Total de estudiantes: ${estudiantes.length + estudiantesAgregados.length}</p>
        <p>Estudiantes aprobados: ${aprobados}</p>
        <p>Estudiantes reprobados: ${reprobados}</p>
        <p>Promedio general: ${promedio.toFixed(2)}</p>
    `;

    dashboardDiv.appendChild(resumenDiv);
};

// Función para ordenar estudiantes
const ordenar = (criterio, orden) => {
    const todosLosEstudiantes = [...estudiantesValidos, ...estudiantesAgregados];
    todosLosEstudiantes.sort((a, b) => {
        switch (orden) {
            case 'asc':
                return a[criterio] > b[criterio] ? 1 : -1;
            case 'desc':
                return a[criterio] < b[criterio] ? 1 : -1;
            default:
                return 0;
        }
    });
    crearDashboard(todosLosEstudiantes);
};

// Función para mostrar detalles del estudiante
const mostrarDetallesEstudiante = (estudiante) => {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="estudiante-detalle">
            <h2>${estudiante.nombre}</h2>
            <p>Calificación: ${estudiante.calificacion}</p>
            <p>${estudiante.calificacion >= 65 ? 'Aprobado' : 'Reprobado'}</p>
        </div>
    `;
    modal.style.display = 'block';
};

// Cerrar el modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Función para buscar estudiantes
const buscarEstudiantes = () => {
    const query = document.getElementById('buscar').value.toLowerCase();
    const todosLosEstudiantes = [...estudiantesValidos, ...estudiantesAgregados];
    const estudiantesFiltrados = todosLosEstudiantes.filter(estudiante => 
        estudiante.nombre.toLowerCase().includes(query) ||
        estudiante.calificacion.toString().includes(query) ||
        estudiante.nombre.split(' ').slice(1).join(' ').toLowerCase().includes(query) // Busca en el apellido
    );
    crearDashboard(estudiantesFiltrados);
};

// Función para mostrar el modal de agregar o borrar estudiante
const mostrarModal = (tipo) => {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = tipo === 'agregar' 
        ? `
            <h2>Agregar Estudiante</h2>
            <input type="text" id="nuevo-nombre" placeholder="Nombre del estudiante">
            <input type="number" id="nueva-calificacion" placeholder="Calificación">
            <button onclick="agregarEstudiante()">Agregar</button>
        `
        : `
            <h2>Borrar Estudiante</h2>
            <input type="text" id="nombre-borrar" placeholder="Nombre del estudiante">
            <button onclick="borrarEstudiantePorNombre()">Borrar</button>
        `;
    modal.style.display = 'block';
};

// Función para agregar un nuevo estudiante
const agregarEstudiante = () => {
    const nombre = document.getElementById('nuevo-nombre').value;
    const calificacion = parseFloat(document.getElementById('nueva-calificacion').value);

    if (nombre && esCalificacionValida(calificacion)) {
        const nuevoEstudiante = { nombre, calificacion };
        estudiantesAgregados.push(nuevoEstudiante);
        crearDashboard([...estudiantesValidos, ...estudiantesAgregados]);
        document.getElementById('modal').style.display = 'none';
        alert('¿Desea guardar este estudiante de forma permanente?');
        // Aquí puedes agregar la lógica para guardar el estudiante de forma permanente
    } else {
        alert('Nombre o calificación inválidos. Por favor, intente de nuevo.');
    }
};

// Función para borrar un estudiante por nombre
const borrarEstudiantePorNombre = () => {
    const nombre = document.getElementById('nombre-borrar').value;
    const todosLosEstudiantes = [...estudiantesValidos, ...estudiantesAgregados];
    const index = todosLosEstudiantes.findIndex(estudiante => estudiante.nombre.toLowerCase() === nombre.toLowerCase());

    if (index !== -1) {
        if (index < estudiantesValidos.length) {
            // Estudiante de la lista original
            alert('No se puede borrar este estudiante. Solo se pueden borrar los estudiantes agregados por el usuario.');
        } else {
            // Estudiante agregado por el usuario
            estudiantesAgregados.splice(index - estudiantesValidos.length, 1);
            crearDashboard([...estudiantesValidos, ...estudiantesAgregados]);
            document.getElementById('modal').style.display = 'none';
        }
    } else {
        alert('Estudiante no encontrado. Por favor, intente de nuevo.');
    }
};

// Evento para el botón de agregar estudiante
document.getElementById('agregar-estudiante').addEventListener('click', () => mostrarModal('agregar'));

// Evento para el botón de borrar estudiante
document.getElementById('borrar-estudiante').addEventListener('click', () => mostrarModal('borrar'));

// Evento para el botón de refrescar
document.getElementById('refrescar').addEventListener('click', () => {
    estudiantesValidos = estudiantes.filter(est => esCalificacionValida(est.calificacion));
    estudiantesAgregados = [];
    crearDashboard([...estudiantesValidos, ...estudiantesAgregados]);
});

// Evento para actualizar la búsqueda en tiempo real
document.getElementById('buscar').addEventListener('input', buscarEstudiantes);

// Crear el dashboard inicial
crearDashboard([...estudiantesValidos, ...estudiantesAgregados]);