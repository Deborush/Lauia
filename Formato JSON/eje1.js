//Ejercicio 4.1: Objeto de libro y convertirlo a JSON

let libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943
};

let libroJSON = JSON.stringify(libro);
console.log(libroJSON);