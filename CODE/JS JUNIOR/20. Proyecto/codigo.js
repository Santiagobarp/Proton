let tp = "100 minutos hacer trabajos prácticos";
let estudio = "100 minutos";
let trabajo = "240 minutos";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("Tareas");

for (let i = 0; i < 14; i++) {
    if (i == 0) {
        console.group("semana 1")
    }

console.group("dia" + (i + 1));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
if (i == 7) {
    if (i == 0) {
        console.groupEnd
        console.group("semana 1")
    }
}
}
