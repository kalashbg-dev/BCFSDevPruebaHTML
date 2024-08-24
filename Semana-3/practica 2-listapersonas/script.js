class Persona {
	constructor(nombre, edad, intereses = []) {
			this.nombre = nombre;
			this.edad = edad;
			this.intereses = intereses;
	}

	añadirInteres(interes) {
			this.intereses.push(interes);
	}

	eliminarInteres(interes) {
			this.intereses = this.intereses.filter(i => i !== interes);
	}

	mostrarIntereses() {
			return this.intereses.join(', ');
	}

	mostrarInformacion() {
			return `Nombre: ${this.nombre}, Edad: ${this.edad}, Intereses: ${this.mostrarIntereses()}`;
	}
}

// Crear objetos de la clase Persona
const personas = [];

// Función para mostrar personas en la página
function mostrarPersonas() {
	const personasListElement = document.getElementById('personas-list');
	personasListElement.innerHTML = ''; // Limpiar lista antes de volver a mostrar

	personas.forEach(persona => {
			const personaElement = document.createElement('div');
			personaElement.classList.add('persona');
			
			personaElement.innerHTML = `
					<h2>${persona.nombre} (${persona.edad} años)</h2>
					<ul class="intereses">
							${persona.intereses.map(interes => `<li>${interes}</li>`).join('')}
					</ul>
			`;
			
			personasListElement.appendChild(personaElement);
	});
}

// Añadir evento al formulario para agregar nuevas personas
document.getElementById('formAgregarPersona').addEventListener('submit', function(event) {
	event.preventDefault();

	const nombre = document.getElementById('nombre').value;
	const edad = document.getElementById('edad').value;
	const intereses = document.getElementById('intereses').value.split(',').map(interes => interes.trim());

	const nuevaPersona = new Persona(nombre, parseInt(edad), intereses);
	personas.push(nuevaPersona);

	mostrarPersonas();

	// Limpiar el formulario después de agregar
	this.reset();
});

// Inicializar mostrando las personas creadas inicialmente (si hubiera)
mostrarPersonas();
