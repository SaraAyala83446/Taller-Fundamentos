// 1. Descripción:
// Convertir una temperatura en grados Celsius a Fahrenheit y Kelvin.

// 2. Solución:
// La función recibe los grados Celsius y realiza las dos conversiones.
function convertirTemperatura(celsius: number) {
const fahrenheit = (celsius * 9/5) + 32;
const kelvin = celsius + 273.15;

return {
fahrenheit: fahrenheit,
kelvin: kelvin
}

}

// 3. Pruebas:
// Se prueban diferentes temperaturas para comprobar los resultados.
console.log(convertirTemperatura(35)); 
console.log(convertirTemperatura(0));
console.log(convertirTemperatura(-15));
// 4. Estrategia:
// Utilizo las fórmulas de conversión de Celsius a Fahrenheit y Kelvin.

// 5. Caso límite:
// Se puede probar con temperaturas negativas y con cero.