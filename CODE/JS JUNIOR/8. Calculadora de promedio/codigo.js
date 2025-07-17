
// CALCULADOR DE PROMEDIO

let cantidad = prompt("¿Cuántos números quieres escribir?");
cantidad = parseInt(cantidad);

let numeros = [];

for (let i = 0; i < cantidad; i++) {
    let numero = prompt(`Ingresa el número ${i + 1} (del 1 al 100)`);
    numeros.push(parseFloat(numero));
}

const calcularPromedio = (numeros) => {
    let suma = 0;
    for (let num of array) {
        suma += num;
    }
    return suma / numeros.length;
};

let resultado = calcularPromedio(numeros);
console.log(`El promedio es: ${resultado}`);
