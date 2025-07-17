
dineroSantiago = prompt("¿Cuanto dinero tiene Santiago?: ")
dineroRodrigo  = prompt("¿Cuanto dinero tiene Rodrigo?: ")
dineroRoy = prompt("¿Cuanto dinero tiene Roy?: ")

dineroSantiago = parseInt(dineroSantiago);

if (dineroSantiago >= 0.6 && dineroSantiago < 1) {
    alert("Santiago, comprate el helado de agua");
    alert("y te sobran" + (dineroSantiago - 0.6));
}

else if (dineroSantiago >= 1 && dineroSantiago < 1.6) {
    alert("Santiago, comprate el helado de crema");
    alert("y te sobran" + (dineroSantiago - 1));
}

else if (dineroSantiago >= 1.6 && dineroSantiago < 1.7) {
    alert("Santiago, comprate el helado de heladix");
    alert("y te sobran" + (dineroSantiago - 1.6));
}

else if (dineroSantiago >= 1.7 && dineroSantiago < 1.8) {
    alert("Santiago, comprate el helado de heladovich");
    alert("y te sobran" + (dineroSantiago - 1.7));
}

else if (dineroSantiago >= 1.8 && dineroSantiago < 2.9) {
    alert("Santiago, comprate el helado de helardo");
    alert("y te sobran" + (dineroSantiago - 1.8));
}

else if (dineroSantiago >= 2.9) {
    alert("Santiago, comprate el helado de confites o el pote de 1/4kg");
    alert("y te sobran" + (dineroSantiago - 2.9));
}

else {
    alert("Lo siento, pobre, no te alcanza para nada");
}


if (dineroRodrigo >= 0.6 && dineroRodrigo < 1) {
    alert("Rodrigo, comprate el helado de agua");
}

else if (dineroRodrigo >= 1 && dineroRodrigo < 1.6) {
    alert("Rodrigo, comprate el helado de crema");
}

else if (dineroRodrigo >= 1.6 && dineroRodrigo < 1.7) {
    alert("Rodrigo, comprate el helado de heladix");
}

else if (dineroRodrigo >= 1.7 && dineroRodrigo < 1.8) {
    alert("Rodrigo, comprate el helado de heladovich");
}

else if (dineroRodrigo >= 1.8 && dineroRodrigo < 2.9) {
    alert("Rodrigo, comprate el helado de helardo");
}

else if (dineroRodrigo >= 2.9) {
    alert("Rodrigo, comprate el helado de confites o el pote de 1/4kg");
}

else {
    alert("Lo siento, pobre, no te alcanza para nada");
}




if (dineroRoy >= 0.6 && dineroRoy < 1) {
    alert("Roy, comprate el helado de agua");
}

else if (dineroRoy >= 1 && dineroRoy < 1.6) {
    alert("Roy, comprate el helado de crema");
}

else if (dineroRoy >= 1.6 && dineroRoy < 1.7) {
    alert("Roy, comprate el helado de heladix");
}

else if (dineroRoy >= 1.7 && dineroRoy < 1.8) {
    alert("Roy, comprate el helado de heladovich");
}

else if (dineroRoy >= 1.8 && dineroRoy < 2.9) {
    alert("Roy, comprate el helado de helardo");
}

else if (dineroRoy >= 2.9) {
    alert("Roy, comprate el helado de confites o el pote de 1/4kg");
}

else {
    alert("Lo siento, pobre, no te alcanza para nada");
}