// 1. Descripción:
// Recibir una lista de números y encontrar cuál es el mayor.

// 2. Solución:
// La función compara los números de la lista y guarda el mayor.
function encontrarMayor(numeros: number[]) {
    if (numeros.length === 0) {
        return "La lista está vacía";
    }

    let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    return mayor;
}

// 3. Pruebas:
// Se prueba con números positivos, negativos y una lista con un solo número.
console.log(encontrarMayor([4, 8, 2, 10, 5]));
console.log(encontrarMayor([-10, -3, -20, -5]));
console.log(encontrarMayor([7]));
console.log(encontrarMayor([]));
// 4. Estrategia:
// Tomo el primer número como mayor y lo comparo con los demás números.

// 5. Caso límite:
// Se comprueba qué ocurre cuando la lista está vacía.
