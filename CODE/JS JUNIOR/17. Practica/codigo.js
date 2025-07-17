
let usuario = 5000;

const prendas = (producto) => {
    const productos = {
        Camisas: [800,500,300],
        Zapatos: [1500,1200,1000],
        Pantalones: [700,500,200]
    }
    return productos[producto];
}

const calidad = (producto,gama) => {
    const precios = prendas(producto)
    if (gama == "baja") return precios[2];
    if (gama == "media") return precios[1];
    if (gama == "alta") return precios[0];
};

const mostrarInformacion = (producto,gama) => {
    precio = calidad(producto,gama); 
    document.write(`El precio de <b>${producto}</b> en gama <b>${gama}</b> es de <b> $${precio}</b>`)    
}

mostrarInformacion("Zapatos","media")