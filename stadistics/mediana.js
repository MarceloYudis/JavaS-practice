let listita = [];

function padreDeLasListas(listarda) {
    
    console.log("LISTA DEL PADRE " + listarda);

    for(i = 0; i < listarda.length; i++) {
        listita.push(listarda[i]);

    };

    console.log("NACIMIENTO DE LA LISTA " + listita);
    
    encargadoDeOrdenar(listita);

    console.log("LISTA YA ORDENADA!!! " + listita)
};

function encargadoDeOrdenar(listita) {

    console.log("la lista de valores " + listita);
    listita.sort( ordenadorDeListas );


    return listita;
  
}

console.log("lista completa sin ordenacion " + listita);



function ordenadorDeListas(a, b) {
    console.log("A = " + a + ",B = " + b);
    return a - b;
}   

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
        
    }


}
padreDeLasListas([1, 10, 3, 9999, 1000, 33, 27, 56, 100]);
calculoMediana(listita);
