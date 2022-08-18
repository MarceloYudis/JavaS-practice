let listita = 0;

function padreDeLasListas(listarda) {
    
    for(i = 0; i < listarda.length; i++) {
        listita.push(listarda[i]);

    }

    console.log("NACIMIENTO DE LA LISTA " + listita);
};


console.log("lista completa sin ordenacion " + listita);


listita.sort(function ordenadorDeListas(a, b) {
    return a - b;
});

console.log("LISTITA ORDENADA " + listita);

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