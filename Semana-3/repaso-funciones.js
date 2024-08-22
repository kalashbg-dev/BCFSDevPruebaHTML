const numeros = [1, 2, 3, 4, 5];

//1. Funcion Declarada
function incrementarNumero(num) {
    return num + 1;
}

// 2. Funcion Anonima
const multiplicarPor = function(factor) {
    return function(num) {
        return num * factor
    };
};

// 3. Funcion de Flecha (Usada como funcion de orden superior)
const aplicarOperacion = (array, operacion) => {
    return array.map(operacion)
};


// 4. Closure
function crearContador(inicio) {
    let conteo = inicio;
    return function() {
        conteo += 1;
        return conteo;
    };
}
/* 
console.log(Incrementar 4: ${ incrementarNumero(4) });

const multiplicarPorDos = multiplicarPor(2);
console.log(Multiplicar 5 por 2: ${ multiplicarPorDos(5) });

const numerosIncrementados = aplicarOperacion(numeros, incrementarNumero);
console.log(Numeros Incrementados: ${numerosIncrementados});

const contador = crearContador(0);
console.log(Contador: ${contador()});
console.log(Contador: ${contador()});
console.log(Contador: ${contador()});
console.log(Contador: ${contador()});
console.log(Contador: ${contador()});
 */