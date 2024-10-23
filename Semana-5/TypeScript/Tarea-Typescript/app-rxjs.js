// este es el codigo que deberia salir al hacer tsc desde consola.
document.addEventListener('DOMContentLoaded', () => {
    const { fromEvent } = rxjs;
    const { map, filter } = rxjs.operators;

    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');
    const resultadoElement = document.getElementById('resultado');
    const sumarButton = document.getElementById('sumar');
    const borrarButton = document.getElementById('borrar');

    // Capturar el evento de clic en el botón de sumar
    const sumar$ = fromEvent(sumarButton, 'click').pipe(
        map(() => {
            const num1 = parseFloat(numero1Input.value);
            const num2 = parseFloat(numero2Input.value);
            return num1 + num2;
        }),
        filter(suma => !isNaN(suma))
    );

    sumar$.subscribe(suma => {
        resultadoElement.textContent = `La suma es: ${suma}`;
    });

    // Capturar el evento de clic en el botón de borrar
    fromEvent(borrarButton, 'click').subscribe(() => {
        numero1Input.value = '';
        numero2Input.value = '';
        resultadoElement.textContent = '';
    });
});
