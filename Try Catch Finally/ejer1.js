//Ejercicio 5.1: Función para dividir con manejo de error

function dividir(a, b) {
    try {
    if (b === 0) throw "No se puede dividir por cero";
    return a / b;
    } catch (error) {
    console.log(error);
    }
}

console.log(dividir(10, 2));
console.log(dividir(10, 0));