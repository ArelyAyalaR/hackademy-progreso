// Ejercicio 1: Mostrar mensaje de bienvenida
console.log('Hola, bienvenidx.');

// Ejercicio 2: Mostrar nombre en consola
let nombre = 'Arely';
console.log(`¡Hola, ${nombre}!`);

// Ejercicio 3: Mostrar nombre en alerta
let nombreDos = 'Daniel';
alert(`¡Hola, ${nombreDos}!`);

// Ejercicio 4: Preguntar lenguaje de programación favorito
let respuesta = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(`El lenguaje de programación que más te gusta es: ${respuesta}`);

// Ejercicio 5: Sumar dos valores y mostrar resultado
let valor1 = 4;
let valor2 = 9;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

// Ejercicio 6: Restar dos valores y mostrar resultado
let valorUno = 43;
let valorDos = 25;
let resultadoResta = valorUno - valorDos;
console.log(`La resta de ${valorUno} y ${valorDos} es igual a ${resultadoResta}.`);

// Ejercicio 7: Verificar si el usuario es mayor o menor de edad
let edad = parseInt(prompt('Ingresa tu edad: '));
if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

// Utilizando ternario
let edadUsuario = parseInt(prompt('Ingresa tu edad: '));
console.log(`${edadUsuario >= 18 ? 'Eres mayor de edad.' : 'Eres menor de edad.'}`);

// Ejercicio 8: Verificar si un número es positivo, negativo o cero
let numero = parseInt(prompt('Ingresa un numero: '));
if (numero > 0) {
    console.log(`${numero} es positivo.`);
} else if (numero < 0) {
    console.log(`${numero} es negativo.`);
} else {
    console.log('Es cero.');
}

// Ejercicio 9: Mostrar números del 1 al 10 usando while
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Ejercicio 10: Verificar si una nota es aprobada o reprobada
let nota = 7;
console.log(`${nota >= 7 ? 'Aprobado.' : 'Reprobado.'}`);

// Ejercicio 11: Generar número aleatorio
console.log(`${Math.random()}`);

// Ejercicio 12: Generar número entero aleatorio entre 1 y 10
console.log(`${Math.floor(Math.random() * 10) + 1}`);

// Ejercicio 13: Generar número entero aleatorio entre 1 y 1000
console.log(`${Math.floor(Math.random() * 1000) + 1}`);
