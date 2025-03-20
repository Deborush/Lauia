//Ejercicio 2.1: Dado el array [3, 7, 2, 9, 5], calcula su suma usando for o for...of.

const numeros = [3, 7, 2, 9, 5];
let suma = 0;

for (let numero of numeros) {
suma += numero;
}

console.log("Suma total:", suma);