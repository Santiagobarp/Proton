
class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo () {
        document.write(this.info + "<br>")
    }
    ladrar() {
        if (this.especie  == "perro") {
            document.write("¡Guau!" + "<br>");
        } else {
            document.write("No puede ladrar, ya que es un " + this.especie + "<br>")
        }
    }
}

class Perro extends Animal {
    constructor(especie,edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
        this.info = `Soy ${this.especie}, de la raza ${this.raza} tengo ${this.edad} años y soy de color ${this.color}`;
    }
    set modificarRaza(newName) {
        this.raza = newName;
    }
}

const perro = new Perro("perro", 5, "marrón", "doberman");
const gato = new Animal("gato", 2, "negro");
const pajaro = new Animal("pajaro", 1, "verde");

perro.modificarRaza = "Pedro"

// document.write(perro.info + "<br>")
// document.write(gato.info + "<br>")
// document.write(pajaro.info + "<br>")

perro.verInfo();
gato.verInfo();
pajaro.verInfo();