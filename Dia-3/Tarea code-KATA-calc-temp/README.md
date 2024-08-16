# Explicación de el script calculadora de temperatura

Aquí tienes una descripción detallada, clara y en lenguaje llano, al estilo dominicano(ja, ja, ja) para explicar este script de JavaScript hecho como parte de mi aprendizaje en esta primera semana de mi BootCamp para ser un Desarrollador FullStak Junior en C#: Se omite asumiendo dominio del tema, la descripción de los archivos __*"temp-calc.html"*__ y __*"styles.css"*__

---
__NOTA IMPORTANTE A RESALTAR:__

*SE UTILIZÓ INTELIGENCIA ARTIFICIAL GENERATIVA Y LLM PARA REVISAR ESTE SCRIPT Y OPTIMIZARLO, A RAZÓN DE QUE CUMPLA CON LAS MEJORES PRACTICAS DE DESARROLLO, SINTAXIS Y CLEAN CODE. EL LLM UTILIZADO SE LLAMA __SHINKAI__, UNA IA DE WEB3, LA CUAL ESTOY PONIENDO A PRUEBA.*

__Descripción del código:__

Vamos a desglosar el código paso a paso para que entiendan bien lo que está pasando. Este código lo que hace es convertir temperaturas entre diferentes escalas: Celsius, Fahrenheit, y Kelvin. Pero ahora, además de mostrar los resultados en la página web, también los muestra en la consola del navegador.

1. __El botón de conversión:__
   Primero, le decimos al botón de conversión que haga algo cuando lo presionen. Eso se logra con esta línea:

   ```javascript
   document.getElementById('convertButn').addEventListener('click', () => {
   ```

   Aquí, `convertButn` es el ID del botón en la página. Cuando hacen clic en él, el código dentro de las llaves `{}` se ejecuta.

2. __Obteniendo la temperatura y la escala:__
   Luego, el código agarra el valor de la temperatura que el usuario escribió y la escala que seleccionó (Celsius, Fahrenheit, o Kelvin). Esto se hace con:

   ```javascript
   const temp = parseFloat(document.getElementById('temperature').value);
   const scale = document.getElementById('scale').value;
   ```

   Aquí, `temp` guarda la temperatura y `scale` guarda la escala elegida.

3. __Verificando si es un número:__
   Después, el código chequea si lo que el usuario escribió es realmente un número. Si no lo es, muestra un mensaje diciendo que ponga una temperatura válida:

   ```javascript
   if (isNaN(temp)) {
       alert('Por favor, ingrese una temperatura que sea válida.');
       return;
   }
   ```

   Esto es importante porque no podemos convertir algo que no sea un número.

4. __Definiendo las funciones de conversión:__
   Luego, se definen varias funciones que convierten las temperaturas de una escala a otra. Por ejemplo, `celsiusToFahrenheit` convierte de Celsius a Fahrenheit, `kelvinToCelsius` convierte de Kelvin a Celsius, y así sucesivamente. Estas funciones son fórmulas matemáticas para hacer las conversiones:

   ```javascript
   const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;
   const celsiusToKelvin = celsius => celsius + 273.15;
   const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;
   const fahrenheitToKelvin = fahrenheit => (fahrenheit - 32) * 5/9 + 273.15;
   const kelvinToCelsius = kelvin => kelvin - 273.15;
   const kelvinToFahrenheit = kelvin => (kelvin - 273.15) * 9/5 + 32;
   ```

5. __Almacenando los resultados:__
   Se crean tres variables (`resultCelsius`, `resultFahrenheit`, `resultKelvin`) para guardar los resultados de las conversiones. Al principio están en 0 porque aún no hemos hecho ninguna conversión:

   ```javascript
   let resultCelsius = 0;
   let resultFahrenheit = 0;
   let resultKelvin = 0;
   ```

6. __Haciendo las conversiones:__
   Dependiendo de la escala que el usuario seleccionó, el código decide cuál conversión hacer. Esto se hace con un `switch`. Según la escala, se calculan los valores correspondientes y se guardan en las variables de resultados:

   ```javascript
   switch (scale) {
       case 'celsius':
           resultCelsius = temp;
           resultFahrenheit = celsiusToFahrenheit(temp);
           resultKelvin = celsiusToKelvin(temp);
           break;
       case 'fahrenheit':
           resultCelsius = fahrenheitToCelsius(temp);
           resultFahrenheit = temp;
           resultKelvin = fahrenheitToKelvin(temp);
           break;
       case 'kelvin':
           resultCelsius = kelvinToCelsius(temp);
           resultFahrenheit = kelvinToFahrenheit(temp);
           resultKelvin = temp;
           break;
       default:
           alert('Seleccione una escala de temperatura válida.');
           return;
   }
   ```

7. __Mostrando los resultados en la página web:__
   Una vez hechas las conversiones, el código muestra los resultados en la página web. Esto se logra cambiando el texto de los elementos HTML que tienen los IDs `result-celsius`, `result-fahrenheit`, y `result-kelvin`:

   ```javascript
   document.getElementById('result-celsius').textContent = `Celsius: ${resultCelsius.toFixed(2)}`;
   document.getElementById('result-fahrenheit').textContent = `Fahrenheit: ${resultFahrenheit.toFixed(2)}`;
   document.getElementById('result-kelvin').textContent = `Kelvin: ${resultKelvin.toFixed(2)}`;
   ```

   Por ejemplo, si la conversión da 25 grados Celsius, se mostrará como `Celsius: 25.00`.

8. __Mostrando los resultados en la consola:__
   Además de mostrarse en la página web, los resultados también se muestran en la consola del navegador. Esto es útil si quieres ver los resultados mientras estás trabajando en el código:

   ```javascript
   console.log(`Celsius: ${resultCelsius.toFixed(2)}`);
   console.log(`Fahrenheit: ${resultFahrenheit.toFixed(2)}`);
   console.log(`Kelvin: ${resultKelvin.toFixed(2)}`);
   ```

   Esto hace que, si abres la consola del navegador, veas algo como:

   ```javascript
   Celsius: 25.00
   Fahrenheit: 77.00
   Kelvin: 298.15
   ```

__En resumen, puedo sintetizar que:__
Este es un código que agarra una temperatura en una escala (Celsius, Fahrenheit o Kelvin), la convierte a las otras dos escalas, muestra los resultados en la página web, y también en la consola del navegador. Así, el usuario puede ver las conversiones fácilmente, y tú como desarrollador puedes verificar que todo esté funcionando bien.
