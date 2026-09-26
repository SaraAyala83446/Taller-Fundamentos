// 1. Descripción:
// Recibir una lista de números y contar cuántos son mayores que cero.

// 2. Solución:
// La función recorre la lista y aumenta un contador cada vez que encuentra un número positivo.
function contarPositivos(numeros: number[]) {
    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            contador++;
        }
    }

    return contador;
}

// 3. Pruebas:
// Se prueba con una lista que tenga números positivos, negativos y cero.
console.log(contarPositivos([3, -2, 5, 0, 8]));
console.log(contarPositivos([-5, -2, -8]));
console.log(contarPositivos([7]));
console.log(contarPositivos([0]));
// 4. Estrategia:
// Utilizo un contador que empieza en cero y compruebo si cada número es mayor que cero.

// 5. Caso límite:
// Se puede probar con una lista vacía y recordar que cero no es positivo.