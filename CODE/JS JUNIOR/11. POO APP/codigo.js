class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir () {
        if (this.iniciada = true) {
            this.iniciada == true;
            alert("App encendida");
        }
    }
    cerrar(){
        if (this.iniciada = true) {
            this.iniciada == false;
            alert("App cerrada");
        }
    }
    instalar(){
        if(this.iniciada == false) {
            this.iniciada = true;
            alert("App instalada correctamente")
        }
    }
    desinstalar(){
        if(this.iniciada == true) {
            this.instalada = false;
            alert("App desinstalada correctamente")
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b> <br>
        Puntuación: <b>${this.puntuacion}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        `
    }
}

app = new App("16.000","5 estrellas","900mb")

document.write(`${app.appInfo()}`)


App.instalar()
App.abrir()