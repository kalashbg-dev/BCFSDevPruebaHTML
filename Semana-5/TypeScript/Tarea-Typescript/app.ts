/*declare const rxjs: any; // papá google, esto lo puse para declarar que rxjs es un objeto global y que lo halo desde CDN via HTML por <script></SCript>

document.addEventListener('DOMContentLoaded', () => {
    const { fromEvent } = rxjs;
    const { map, filter } = rxjs.operators;

    const numero1Input = document.getElementById('numero1') as HTMLInputElement | null;
    const numero2Input = document.getElementById('numero2') as HTMLInputElement | null;
    const resultadoElement = document.getElementById('resultado') as HTMLElement | null;
    const sumarButton = document.getElementById('sumar') as HTMLButtonElement | null;
    const borrarButton = document.getElementById('borrar') as HTMLButtonElement | null;

    // son nulos?
    if (!numero1Input || !numero2Input || !resultadoElement || !sumarButton || !borrarButton) {
        console.error('Uno o más elementos no se encontraron en el DOM');
        return;
    }

    const sumar$ = fromEvent(sumarButton, 'click').pipe(
        map(() => {
            const num1 = parseFloat(numero1Input.value);
            const num2 = parseFloat(numero2Input.value);
            return num1 + num2;
        }),
        filter((suma: number) => !isNaN(suma))
    );

    sumar$.subscribe((suma: number) => {
        resultadoElement.textContent = `La suma es: ${suma}`;
    });

    fromEvent(borrarButton, 'click').subscribe(() => {
        numero1Input.value = '';
        numero2Input.value = '';
        resultadoElement.textContent = '';
    });
});
*/
/*version del codigo sin RxJs*/

document.addEventListener('DOMContentLoaded', () => {
    const numero1Input = document.getElementById('numero1') as HTMLInputElement;
    const numero2Input = document.getElementById('numero2') as HTMLInputElement;
    const resultadoElement = document.getElementById('resultado') as HTMLElement;
    const sumarButton = document.getElementById('sumar') as HTMLButtonElement;
    const borrarButton = document.getElementById('borrar') as HTMLButtonElement;

    //sUM
    sumarButton.addEventListener('click', () => {
        const num1 = parseFloat(numero1Input.value);
        const num2 = parseFloat(numero2Input.value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const suma = num1 + num2;
            resultadoElement.textContent = `La suma es: ${suma}`;
        } else {
            resultadoElement.textContent = 'Por favor, ingresa números válidos';
        }
    });

    // Función Ers
    borrarButton.addEventListener('click', () => {
        numero1Input.value = '';
        numero2Input.value = '';
        resultadoElement.textContent = '';
    });
});


