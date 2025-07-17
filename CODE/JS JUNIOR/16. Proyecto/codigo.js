const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Perez","pedro","pepito","cofla","maria"],
        programacion: ["Dalto","pedro","juan","pepito"],
        logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
        quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia], materia];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

if (informacion !== false) {
    let Profesor = obtenerInformacion(materia)[0][0];
    let Alumnos = obtenerInformacion(materia)[0];
    Alumnos.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b>${Profesor}</b> <br>
        Los alumnos son: <b>${Alumnos}</b> <br><br>`)
}
}

const cantidadDeClases = (alumno) => {
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (let materia in informacion) {
        if (informacion[materia].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + materia);
        }
    }
    return `<b>${alumno}</b> está en <b>${cantidadTotal}</b> clases:<br>
    Esta cursando las clases: <b>${clasesPresentes}</b> <br><br>
    `;
}

mostrarInformacion("fisica")
mostrarInformacion("programacion")
mostrarInformacion("logica")
mostrarInformacion("quimica")

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("pedro"))