let cadena = "cadena de prueba";
let cadena2 = " cadena 2";

resultado = cadena.concat(cadena2);

document.write(resultado + "<br>");

//

resultado = cadena.startsWith("cadena");

document.write(resultado + "<br>");

//

resultado = cadena.includes("cadena");

document.write(resultado + "<br>");

//

resultado = cadena.indexOf(" de");

document.write(resultado + "<br>");

//

let cadena4 = "Hola hola hola hola hola hola";

resultado = cadena4.lastIndexOf("hola");

document.write(resultado + "<br>");

//

let cadena5 = " abc";

resultado = cadena5.padStart(10,"az ");

document.write(resultado + "<br>");

resultado = cadena5.padEnd(10," ac");

document.write(resultado + "<br>");

resultado = cadena5.repeat(10);

document.write(resultado + "<br>");

//

let cadena6 = "HOLA,como,ESTAS";

resultado = cadena6.split(",");

document.write(resultado[2] + "<br>");

//

resultado = cadena6.substring(0,2);

document.write(resultado + "<br>");

//

resultado = cadena6.toLowerCase();

document.write(resultado + "<br>");

//

resultado = cadena6.toUpperCase();

document.write(resultado + "<br>");

// CONVERTIR ARRAY A CADENAS DE TEXTO CON toString

let cadena7 = ["pedro","matias"];

resultado = cadena7.toString();

document.write(resultado[0] + "<br>");

//

resultado = cadena7.toString();

document.write(resultado.length + "<br>");

// ELIMINAR ESPACIOS EN BLANCO DE AL PRINCIPIO Y FINAL

let cadena8 = "    Hola    "

resultado = cadena8.trimStart();

document.write(resultado.length + "<br>");

resultado = cadena8.trim();

document.write(resultado.length + "<br>");