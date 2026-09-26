// 1. Descripción:
// Contar cuántas vocales aparecen en una frase.

// 2. Solución:
// La función recibe una frase y cuenta las vocales que contiene.
function contarVocales(frase: string){
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        const letra = frase[i];

        if (letra === 'a' || 
            letra === 'e' || 
            letra === 'i' || 
            letra === 'o' || 
            letra === 'u' 
        ) {
            contador++;
        }   
    }

    return contador;

}

// 3. Pruebas:
// Se prueba con una frase que tenga varias vocales y otra que no tenga vocales.
console.log(contarVocales("hola mundo"));
console.log(contarVocales("programación"));
console.log(contarVocales("ZZZ"));
console.log(contarVocales("Aeiou"));
 // 4. Estrategia:
// Recorro cada carácter de la frase y compruebo si es una vocal.

// 5. Caso límite:
// Se pueden tener en cuenta las vocales con tilde y las letras mayúsculas.