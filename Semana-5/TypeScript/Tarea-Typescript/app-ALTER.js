import { fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';
document.addEventListener('DOMContentLoaded', () => {
    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');
    const resultadoElement = document.getElementById('resultado');
    const sumarButton = document.getElementById('sumar');
    const borrarButton = document.getElementById('borrar');
    //evento click, asi se llama , en este caso para sumar, para que no se me olvide
    const sumar$ = fromEvent(sumarButton, 'click').pipe(map(() => {
        const num1 = parseFloat(numero1Input.value) || 0;
        const num2 = parseFloat(numero2Input.value) || 0;
        return num1 + num2;
    }), filter(suma => !isNaN(suma)));
    sumar$.subscribe(suma => {
        resultadoElement.textContent = `La suma es: ${suma}`;
    });
    // Capturar evento botón de borrar, jejeje
    fromEvent(borrarButton, 'click').subscribe(() => {
        numero1Input.value = '';
        numero2Input.value = '';
        resultadoElement.textContent = '';
    });
});
/*version del codigo sin RxJs

document.addEventListener('DOMContentLoaded', () => {
    const numero1Input = document.getElementById('numero1') as HTMLInputElement;
    const numero2Input = document.getElementById('numero2') as HTMLInputElement;
    const resultadoElement = document.getElementById('resultado') as HTMLElement;
    const sumarButton = document.getElementById('sumar') as HTMLButtonElement;
    const borrarButton = document.getElementById('borrar') as HTMLButtonElement;

    // Función para sumar los valores de los inputs
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

    // Función para borrar los valores de los inputs y el resultado
    borrarButton.addEventListener('click', () => {
        numero1Input.value = '';
        numero2Input.value = '';
        resultadoElement.textContent = '';
    });
});*/
