// 1. Descripción:
// Generar la tabla de multiplicar de un número del 1 al 10.

// 2. Solución:
// La función recibe un número y muestra sus multiplicaciones del 1 al 10.
function tablaMultiplicar(numero: number) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

// 3. Pruebas:
// Se prueban diferentes números para comprobar las tablas.
tablaMultiplicar(5);
tablaMultiplicar(7);
tablaMultiplicar(0);
tablaMultiplicar(-11);
// 4. Estrategia:
// Utilizo un ciclo for que recorre del 1 al 10 y multiplica el número recibido.

// 5. Caso límite:
// Se puede probar con cero y con números negativos.