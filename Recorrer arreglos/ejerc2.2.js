//Ejercicio 2.2: Encuentra el número mayor en el array [12, 45, 6, 89, 23].

let numeros2 = [12, 45, 6, 89, 23];
let mayor = numeros2[0];

for(let num of numeros2){
    if(num > mayor){
        mayor = num;
    }
}

console.log(mayor);