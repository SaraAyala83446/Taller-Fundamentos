// 1. Descripción:
// Determinar si un número es par o impar.

// 2. Solución:
// La función recibe un número y determina si es divisible entre dos.
function parOImpar(numero: number){
    if (numero % 2 === 0) {
        return "El número es par";
    }

    return "El número es impar";
}

// 3. Pruebas:
// Se prueba con un número par y con un número impar.
console.log(parOImpar(4));
console.log(parOImpar(7));
console.log(parOImpar(0));
console.log(parOImpar(-3));
// 4. Estrategia:
// Utilizo el operador % para comprobar el residuo de la división entre dos.

// 5. Caso límite:
// Se puede probar con cero y con números negativos.