//Ejercicio 4.3: Parsear JSON y listar los productos

let productosJSON = '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]';
let productos = JSON.parse(productosJSON);

productos.forEach(p => console.log(p.producto));