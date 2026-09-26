// 1. Descripción:
// Recibir dos números y determinar cuál es mayor o si son iguales.

// 2. Solución:
// La función compara los dos números utilizando condiciones.
function compararNumeros(num1: number, num2: number) {
    if (num1 > num2) {
        console.log(" Num1 es mayor que Num2");
    } else if (num2 > num1) {
        console.log(" Num2 es mayor que Num1");
    } else {
        console.log(" Los números son iguales");
    }
}

// 3. Pruebas:
// Se prueba cuando el primer número es mayor y cuando los dos son iguales.
(compararNumeros(15, 8));
(compararNumeros(3, 3));
(compararNumeros(-7, -10));
// 4. Estrategia:
// Comparo los números utilizando if y else para determinar el resultado.

// 5. Caso límite:
// Se pueden probar números negativos y números iguales.
