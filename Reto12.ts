// 1. Descripción:
// Calcular el factorial de un número entero no negativo.

// 2. Solución:
// La función verifica primero que el número no sea negativo y después calcula el factorial.
function factorial(numero: number) {
    if (numero < 0) {
        return "Número inválido";
    }

    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }

    return resultado;
}

// 3. Pruebas:
// Se prueba con números como 5, 3 y 0, además de un número negativo.
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));
console.log(factorial(-5));
// 4. Estrategia:
// Utilizo una cláusula de guarda para rechazar números negativos y un ciclo para multiplicar los números.

// 5. Caso límite:
// Se puede validar que el número recibido sea entero y no decimal.
