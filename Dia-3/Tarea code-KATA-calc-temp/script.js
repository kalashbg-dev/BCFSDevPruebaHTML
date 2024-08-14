// Agrega un evento al botón de conversión
document.getElementById('convertBtn').addEventListener('click', () => {
    // Obtiene el valor de la temperatura ingresada y la escala seleccionada
    const temp = parseFloat(document.getElementById('temperature').value);
    const scale = document.getElementById('scale').value;

    // Verifica si la entrada de temperatura es un número válido
    if (isNaN(temp)) {
        alert('Por favor, ingrese una temperatura válida.');
        return;
    }

    // Funciones de conversión de temperaturas
    const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;
    const celsiusToKelvin = celsius => celsius + 273.15;
    const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;
    const fahrenheitToKelvin = fahrenheit => (fahrenheit - 32) * 5/9 + 273.15;
    const kelvinToCelsius = kelvin => kelvin - 273.15;
    const kelvinToFahrenheit = kelvin => (kelvin - 273.15) * 9/5 + 32;

    // Variables para almacenar los resultados de las conversiones
    let resultCelsius = 0;
    let resultFahrenheit = 0;
    let resultKelvin = 0;

    // Realiza las conversiones según la escala seleccionada
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

    // Muestra los resultados en los elementos correspondientes
    document.getElementById('result-celsius').textContent = `Celsius: ${resultCelsius.toFixed(2)}`;
    document.getElementById('result-fahrenheit').textContent = `Fahrenheit: ${resultFahrenheit.toFixed(2)}`;
    document.getElementById('result-kelvin').textContent = `Kelvin: ${resultKelvin.toFixed(2)}`;
});
