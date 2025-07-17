class Celular {
    constructor(color,peso,tamaño,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    prender(){
        if (this.encendido == false) {
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado")
        }
    }
    reiniciar() {
        if (this.encendido == true) {
            alert("Reiniciando celular");
        } else {
            alert("El celular esta apagado")
        }
    }
    tomarFotos(){
        alert(`Foto tomada en una resolución de: ${this,this.resolucionDeCamara}`)
    }
    grabarVideo(){
        alert(`grabando video en ${this,this.resolucionDeCamara}`)
    }
    mostrarInfo(){
        return`
        Color: <b>${this.color}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        Tamaño: <b>${this.tamaño}</b> <br>
        Resolución de Cámara: <b>${this.resolucionDePantalla}</b> <br>
        Resolucion de Video: <b>${this.resolucionDeCamara}</b> <br>
        Memoria Ram: <b>${this.memoriaRam}</b> <br>

        `;
    }
}

class CelularAltaGama extends Celular{
    constructor(color,peso,tamaño,rdp,rdc,ram,rdce) {
        super(color,peso,tamaño,rdp,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return`
        Color: <b>${this.color}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        Tamaño: <b>${this.tamaño}</b> <br>
        Resolución de Cámara: <b>${this.resolucionDePantalla}</b> <br>
        Resolucion de Video: <b>${this.resolucionDeCamara}</b> <br>
        Memoria Ram: <b>${this.memoriaRam}</b> <br>
        Resolución de Camara Extra: <b>${this.resolucionDeCamaraExtra}</b> <br>
        `;
    }
}

celular1 = new Celular("Gris","150g","128GB","5","Full HD","2GB")
celular2 = new Celular("Blanco","15g","128GB","5","Full HD","2GB")
celular3 = new Celular("Negro","150g","128GB","5","Full HD","2GB")

// ALTA GAMA

celular4 = new CelularAltaGama("Platino","130g","256GB","6","Full 4k","4GB","4K")


document.write(`
    ${celular1.mostrarInfo()} <br>
    ${celular2.mostrarInfo()} <br>
    ${celular3.mostrarInfo()} <br>
    ${celular4.infoAltaGama()} <br>
`)