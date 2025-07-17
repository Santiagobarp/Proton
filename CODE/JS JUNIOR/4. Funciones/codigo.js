
function suma (num1,num2){
    let res = num1 + num2;
    return res
}

let resultado = suma(20,30)

document.write(resultado + "<br>")

function saludar(nombre) {
    let frase = `¡Hola ${nombre}! ¿Comó estas?`;
    document.write(frase + "<br>");
}

// FUNCIONES FLECHA
// const saludar = (nombre) => {
//    document.write("Hola como estas" + nombre)
// }

saludar("Santiago")