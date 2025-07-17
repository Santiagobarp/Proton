

let free = false;

const validarCliente = (time)=>{
    let edad = prompt ("¿Cual es tu edad");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            document.write("Podes pasar gratis");
        } else {
            document.write(`son las ${time}:00 podes pasar, pero tenes que pagar la entrada.`);
        }
    } else {
        document.write("mira papu, sos menos de edad por ende no vas a pasar maquina");
    }
}

validarCliente (1);