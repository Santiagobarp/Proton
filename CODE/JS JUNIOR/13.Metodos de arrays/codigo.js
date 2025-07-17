// QUITA ELEMENTOS DEL FINAL

let nombres = ["pedro","jorge","maria","juan"]

document.write("<b> Array original: </b>" + nombres + "<br>")

resultado = nombres.pop()

document.write("<b> Elemento removido al final: </b>" + resultado + "<br>")
document.write("<b> Resultado: </b>" + nombres + "<br>")

// QUITA ELEMENTOS DEL PRINCIPIO

resultado = nombres.shift()

document.write("<b> Elemento removido al principio: </b>" + resultado + "<br>")
document.write("<b> Resultado: </b>" + nombres + "<br>")

// AGREGA ELEMENTOS AL FINAL

resultado = nombres.push("santiago")

document.write("<br>" + "<b> Resultado con push: </b>" + nombres + "<br>")

//

resultado = nombres.reverse()

document.write("<br>" + "<b> Resultado con reverse: </b>" + nombres + "<br>")

// AGREGA ELEMENTOS AL PRINCIPIO

resultado = nombres.unshift("polo")

document.write("<br>" + "<b> Resultado con unshift: </b>" + nombres + "<br>")

// ORDENA LOS ELEMTOS ALFABETICAMENTE

resultado = nombres.sort()

document.write("<br>" + "<b> Resultado con sort: </b>" + nombres + "<br>")

// ELIMINA ELEMENTOS CON TRES PARAMETROS (POSICION, CANTIDAD, AGREGAR)

resultado = nombres.splice(1,2, "gustavo")

document.write("<br>" + "<b> Resultado con splice: </b>" + resultado + "<br>")

// LA VARIABLE PRINCIPAL NO SE MODIFICA SI NO QUE SE CREA OTRO Y PUEDES AGREGAR ELEMENTOS

resultado = nombres.join("<b><br>Elemento: </b>")

document.write("<br>" + "<b> Elemento: </b>" + resultado + "<br>")

// LA VARIABLE PRINCIPAL NO SE MODIFICA SI NO QUE SE CREA OTRO Y LOS ORDENA SEGUN LOS PARAMETROS SEGUN RANGO DE INICIO Y FINAL

resultado = nombres.slice(1,2)

document.write("<br>" + "<b> Elemento: </b>" + resultado + "<br>")

// LA VARIABLE PRINCIPAL NO SE MODIFICA SI NO QUE SE CREA OTRO Y TE DA LA POSICIÓN DEL INDICE DE LO QUE BUSCAS

resultado = nombres.indexOf("gustavo")

document.write("<br>" + "<b> Elemento: </b>" + resultado + "<br>" + "<br>")

// FILTER: SIRVE PARA HACER FUNCIONES DONDE FILTRAMOS PARAMETROS CON FUNCIONES

let numeros = ["abecedario","manzana","pedro","dedo","bobo","pedros"]

resultado = numeros.filter(numero => numero.length > 5)

document.write(resultado)

