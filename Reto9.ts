// 1. Descripción:
// Recibir una lista de notas, calcular el promedio y determinar si la persona aprobó.

// 2. Solución:
// La función suma las notas, calcula el promedio y devuelve una decisión.
function calcularPromedio(notas: number[]) {
    if (notas.length === 0) {
        return "No hay notas para calcular";
    }

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }

    const promedio = suma/ notas.length;

    if (promedio >= 3) {
        return "Aprobado con promedio " + promedio;
    } else {
        return "Reprobado con promedio " + promedio;
    }
}

// 3. Pruebas:
// Se prueba con notas que den un promedio aprobatorio y otro no aprobatorio.
console.log(calcularPromedio([4, 5, 3, 2, 1]));
console.log(calcularPromedio([2, 2, 2, 2]));
console.log(calcularPromedio([5, 5, 5, 5]));
console.log(calcularPromedio([]));
// 4. Estrategia:
// Recorro las notas, calculo la suma y la divido entre la cantidad de notas.

// 5. Caso límite:
// Se puede comprobar qué ocurre cuando la lista de notas está vacía.