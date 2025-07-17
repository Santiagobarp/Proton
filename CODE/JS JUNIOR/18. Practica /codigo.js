
const productos = (producto,gama) => {
    const almacen = {
        Laptop:[18000,20000],
        Tablet:[12000,15000],
    }
    if (gama == "alta") return almacen[producto][1];
    if (gama == "baja") return almacen[producto][0];
}

const info = (producto, gama) => {
    const precio = productos(producto, gama);
    return `El producto que seleccionaste es <b>${producto}</b> de gama <b>${gama}</b> y el precio es <b>$${precio}</b>`;
};

document.write(info("Laptop", "alta"));