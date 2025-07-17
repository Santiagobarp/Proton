let pc = {
    nombre: "SantiMac",
    procesador: "M1",
    ram: "16GB",
    espacio: "1TB"
};

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

frase = `el nombre de mi PC es: ${nombre} <br>
        el procesador de mi PC es: ${procesador} <br>
        la momoria ram de mi PC es: ${ram} <br>
        el espacio en disco de mi PC es: ${espacio}`;

document.write(frase)

document.write("<br>");
document.write("<br>");

let numero = 0;

while (numero < 100) {
    numero++;
    document.write(numero + "<br>");
    if (numero ==15) {
        break;
    }
}

for (let i = 0; i <= 6; i++) {
    document.write(i + "<br>")
}

document.write("<br>");

for (let i = 6; i >= 0; i--) {
    document.write(i + "<br>")
}

document.write("<br>");

for (let i = 0; i <= 15; i++) {
    if (i == 12) {
        continue;
    }
    document.write(i + "<br>")
}

document.write("<br>");

let animales = ["gato","perro","tiranosaurio rex"];

for (animal in animales) {
    document.write(animal + "<br>")
}

document.write("<br>");

for (animal of animales) {
    document.write(animal + "<br>")
}

document.write("<br>");

array1 = ["maria","jose","roberto"]
array2 = ["pedro","juan",array1, "josefina"]

for (let array in array2) {
    if (array == 2) {
        for (let array of array1){
            document.write(array + "<br>");
            break
        }
    }   else {
        document.write(array2[array] + "<br>");
    }
}