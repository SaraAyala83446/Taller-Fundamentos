// 1. Descripción:
// Recibir una edad y determinar si una persona puede entrar a una actividad.

// 2. Solución:
// La función recibe la edad y devuelve si puede entrar o no.

function entradaValida(edad: number) {
    if (edad >= 18) {
        return "Puede entrar";
    }
    return "No puede entrar";
}

// 3. Pruebas:
// Se prueba con una edad que permita entrar y otra que no.
console.log(entradaValida(20)); 
console.log(entradaValida(17));
console.log(entradaValida(18));
// 4. Estrategia:
// Comparo la edad recibida con la edad mínima utilizando if.

// 5. Caso límite:
// Se puede probar exactamente la edad mínima permitida.