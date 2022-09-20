// let resultadoSuma = sumar(1,2);
// let resultadoResta = restar(3,2);

// mostrarConsola(resultadoSuma);
// mostrarConsola(resultadoResta);

// function sumar(num1, num2) {
//     return num1 + num2;
// }
// function restar(num1, num2) {
//     let resultado = num1 - num2;
//     return resultado;
// }
// function mostrarConsola(valor) {
//     console.log(valor);
// }

// Ejercicio de Array

// let peliculas = new Array("Como entrenar a tu dragon", "Shrek", "Megamente", "Madagascar", "Buscando a  Nemo");

let divisoresDe32 = new Array(1, 2, 4, 8, 16, 32);

console.log(divisoresDe32[3]); // Output: Madagascar

console.log("Tamaño es: " + divisoresDe32.length);

console.log("El ultimo elemento es: " + divisoresDe32[divisoresDe32.length - 1]);

console.log("El primer elemento eliminado es: " + divisoresDe32.shift());

console.log("El ultimo elemento eliminado es: " + divisoresDe32.pop());

let palabras = divisoresDe32.map(function convertirArray(x) {
    return "*" + x;
});
console.log({divisoresDe32});

console.log("La posicion del numero 16 es: " + divisoresDe32.indexOf(16));

console.log("El numero 16 pertenece al array?: " + divisoresDe32.includes(16));

let resultado = divisoresDe32.map(function sumaTodosLosValores(x) {
    for (let i = 0; i < divisoresDe32.length; i++) {
        x += divisoresDe32[i];
    }
    return x;
});

console.log({resultado});

