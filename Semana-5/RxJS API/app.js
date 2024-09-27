document.addEventListener('DOMContentLoaded', () => {

  const { fromEvent, of } = rxjs;
  const {
      debounceTime,
      map,
      switchMap,
      catchError,
  } = rxjs.operators;
  const { ajax } = rxjs.ajax;

  console.log('Hola, el script está funcionando');

  const botonConsultar = document.getElementById('consultarDatos');
  const divResultado = document.getElementById('resultado');
  const divError = document.getElementById('error');

  // Función para mostrar los datos del personaje de One Piece
  function mostrarDatosPersonaje(personaje) {
      divResultado.innerHTML = `
          <h3>${personaje.name}</h3>
          <p>Recompensa: ${personaje.bounty}</p>
          <p>Fruta: ${personaje.fruit ? personaje.fruit.name : 'N/A'}, tipo ${personaje.fruit ? personaje.fruit.type : 'N/A'}</p>
          <img src="${personaje.picture ? personaje.picture.large : ''}" alt="Imagen del personaje" />
      `;
  }

  // Función para manejar errores
  function mostrarError(error) {
      divError.textContent = `Error: ${error}`;
  }

  // Evento para capturar el clic en el botón de consulta
  fromEvent(botonConsultar, 'click').pipe(
      switchMap(() => {
          const entradaNombre = document.getElementById('nombre');
          const nombrePersonaje = entradaNombre.value;

          // Realizamos la consulta a la API
          return ajax.getJSON(`https://api.api-onepiece.com/v2/characters/en/search?name=${nombrePersonaje}`).pipe(
              catchError((error) => {
                  mostrarError(error.message);
                  console.log(error);
                  return of(error);
              })
          );
      })
  ).subscribe({
      next: (personaje) => {
          if (personaje) {
              mostrarDatosPersonaje(personaje[0]);  // Si la respuesta es válida, mostramos el personaje
              divError.textContent = '';  // Limpiamos el mensaje de error si lo hubiera
          } else {
              mostrarError('Personaje no encontrado');
          }
      },
      error: (error) => {
          console.log('Error en la suscripción:', error);
      }
  });

});

/* con esto se le quitan restricciones a chrome em casos donde te genera erores

"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\tmpChromeSession" */