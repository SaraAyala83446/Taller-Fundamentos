// 1. Descripción:
// Crear una función que reciba un nombre y devuelva un saludo.

// 2. Solución:
// La función recibe el nombre y devuelve un mensaje de saludo.
function saludar(nombre: string) {
    return "hola " +nombre;
}

// 3. Pruebas:
// Se prueba con diferentes nombres para comprobar que el saludo funcione.
console.log(saludar("sara"));
console.log(saludar("juan"));
console.log(saludar("A"));
console.log(saludar("123"));
console.log(saludar(""));
// 4. Estrategia:
// Recibo el nombre como parámetro y lo utilizo para crear el saludo.
// 5. Caso límite:
// Se puede comprobar qué ocurre si se recibe un nombre vacío.