const listita = [
    900,
    1000,
    1100,
    1000000,
    8000,
    7,
    
];

const mitadListita = parseInt(listita.length / 2);

function detectarPar(listita) {

    if( listita.length % 2 === 0) {
        return true;

    } else {
        return false;
    }
}

function calculoMediana() {
    const deteccionPar = detectarPar(listita);
    if(deteccionPar) {
        const primerDato = listita[mitadListita]
        const segundoDato = listita[mitadListita - 1]

        const sumaPromedio = (primerDato + segundoDato) / 2;

        console.log("Mediana par igual a = " + sumaPromedio); 

    } else {
        mediana = listita[parseInt(mitadListita)];
        console.log(mediana);
    }


}
calculoMediana(listita);