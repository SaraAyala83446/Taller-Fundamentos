// 1. Descripción:
// Recorrer los números del 1 al 100 y mostrar Fizz, Buzz o FizzBuzz según las condiciones.

// 2. Solución
// La función recorre los números del 1 al 100 y aplica las condiciones correspondientes.
function fizzBuzz(){
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// 3. Pruebas:
// Se comprueban números que sean múltiplos de 3, de 5 y de ambos.
fizzBuzz();
// 4. Estrategia:
// Utilizo un ciclo for y condiciones para identificar los múltiplos de 3 y 5.

// 5. Caso límite:
// Se puede comprobar especialmente el número 15, que debe mostrar FizzBuzz.

