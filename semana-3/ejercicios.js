// 1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion" con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3. Agrega a la lista "lenguagesDeProgramacion" los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'Golang');

// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion".
function mostrarLista(lista) {
    console.log(`Lista desde función: ${lista}`);
}
mostrarLista(lenguagesDeProgramacion);

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion" en orden inverso.
function mostrarListaInversa(lista) {
    console.log(`Lista inversa desde función: ${lista.slice().reverse()}`);
}
mostrarListaInversa(lenguagesDeProgramacion);

// Otra forma para mostrar la lista en orden inverso
for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
}

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function sumaPromedio(listaNumeros) {
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        suma += listaNumeros[i];
    }
    return suma;
}

function promedio(listaNumeros) {
    let suma = sumaPromedio(listaNumeros);
    return suma / listaNumeros.length;
}

let numeros = [1, 5, 7, 3, 9, 8];
console.log(`El promedio de los números ${numeros} es: ${promedio(numeros)}`);

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function numerosGrandesPequenos(listaNumeros) {
    let minimo = Infinity;
    let maximo = -Infinity;

    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > maximo) {
            maximo = listaNumeros[i];
        }
        if (listaNumeros[i] < minimo) {
            minimo = listaNumeros[i];
        }
    }
    console.log(`El valor máximo es: ${maximo} y el valor mínimo es: ${minimo}`);
}

let numerosRandom = [6, 7, 2, 1, 98, 23];
numerosGrandesPequenos(numerosRandom);

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumar(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

let numerosV = [6, 7, 2, 1, 98, 23];
console.log(`La suma de los números ${numerosV} es: ${sumar(numerosV)}`);

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function posicionExiste(lista, objetivo) {
    return lista.indexOf(objetivo);
}

let numerosVa = [4, 6, 1, 78, 23, 9, 12, 46, 15];
console.log(`La posición del número 9 en la lista es: ${posicionExiste(numerosVa, 9)}`);

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function dosListas(listaUno, listaDos) {
    let suma = [];
    if (listaUno.length !== listaDos.length) {
        console.log('Error: las listas no tienen el mismo tamaño');
    } else {
        for (let i = 0; i < listaUno.length; i++) {
            suma.push(listaUno[i] + listaDos[i]);
        }
    }
    return suma;
}

let listaUno = [6, 12, 87, 34, 41, 1];
let listaDos = [32, 15, 98, 19, 43, 45];
console.log(`La suma de las dos listas es: ${dosListas(listaUno, listaDos)}`);
