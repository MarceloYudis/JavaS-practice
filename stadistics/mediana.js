const listita = [
    900,
    1000,
    1100,
    1000000,
    8000,
    7,
    90
];

const mitadListita = listita.length / 2;

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

    } else {
        mediana = listita[parseInt(mitadListita)];
        console.log(mediana);
    }
}
calculoMediana(listita);