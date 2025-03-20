//Ejercicio 5.3: try...catch...finally

try {
    let resultado = 10 / 2;
    console.log(resultado);
} catch (error) {
    console.log("Ocurrió un error");
} finally {
    console.log("Esto se ejecuta siempre.");
}