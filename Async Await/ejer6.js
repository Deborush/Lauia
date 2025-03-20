//Ejercicio 6.1: Función con setTimeout y async/await

async function esperarSegundos(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos * 1000));
}

async function ejecutar() {
    console.log("Esperando...");
    await esperarSegundos(2);
    console.log("Pasaron 2 segundos.");
}

ejecutar();
