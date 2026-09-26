// 1. Descripción:
// Recibir una contraseña y comprobar que tenga al menos
// ocho caracteres, una mayúscula y un número.

// 2. Solución:
// La función revisa las condiciones necesarias y devuelve si la contraseña es válida o inválida.
function contraseñaValida(contraseña: string) {
    const tieneOchoCaracteres = contraseña.length >= 8;

    let tieneMayuscula = false;
    let tieneNumero = false;

    for (let i = 0; i < contraseña.length; i++) {
        const caracter = contraseña[i];

        if (caracter >= "A" && caracter <= "Z") {
            tieneMayuscula = true;
        }

        if (caracter >= "0" && caracter <= "9") {
            tieneNumero = true;
        }
    }

    if (tieneOchoCaracteres && tieneMayuscula && tieneNumero) {
        return "Contraseña válida";
    }

    return "Contraseña inválida";
}

// 3. Pruebas:
// Se prueba con una contraseña válida y con otras que no cumplan alguna de las condiciones.
console.log(contraseñaValida("HolaSara8"));
console.log(contraseñaValida("HolaSara"));
console.log(contraseñaValida("HolaSara#1"));
console.log(contraseñaValida("A1"));
// 4. Estrategia:
// Recorro los caracteres de la contraseña para buscar una mayúscula y un número, y también compruebo su longitud.

// 5. Mejora o caso límite:
// Se puede agregar una condición para exigir un carácter especial como @, # o $.
