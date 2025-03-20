//Ejercicio 4.2: Convertir JSON a objeto y mostrar la edad

let jsonString = '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}';
let objeto = JSON.parse(jsonString);

console.log(objeto.edad);