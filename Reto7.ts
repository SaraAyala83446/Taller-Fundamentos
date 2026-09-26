// 1. Descripción:
// Recibir una lista de números y calcular su suma.

// 2. Solución:
// La función recorre la lista y acumula todos los números.
function suma(numeros: number[]){
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma;
}

// 3. Pruebas:
// Se prueba con una lista de números positivos y con números negativos.
console.log(suma([1, 2, 3, 4, 5])); 
console.log(suma([10, 20, 30]));
console.log(suma([-1, -2, -3, -4, -5]));
console.log(suma([]));
// 4. Estrategia:
// Utilizo un acumulador que empieza en cero y un ciclo para recorrer la lista.

// 5. Caso límite:
// Se puede probar con una lista vacía o con un solo número.