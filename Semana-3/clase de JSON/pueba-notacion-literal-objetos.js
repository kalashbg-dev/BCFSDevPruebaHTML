const data = {
  "estudiantes": [
    {
      "nombre": "Ana",
      "edad": 20,
      "grado": 3,
      "especialidad": "Biología"
    },
    {
      "nombre": "Carlos",
      "edad": 21,
      "grado": 3,
      "especialidad": "Física"
    },
    {
      "nombre": "Diana",
      "edad": 22,
      "grado": 4,
      "especialidad": "Química"
    }
  ],
  "klk": function() {
    this.estudiantes.forEach(estudiante => {
      console.log(`Klk, me llamo ${estudiante.nombre}`);
    });
  }
};

// Ejecutar la función klk
data.klk();
