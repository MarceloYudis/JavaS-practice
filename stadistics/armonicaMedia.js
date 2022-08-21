const listado = [];

// media armonica = cantidad de elementos / ( suma de los reciprocos de cada elemento )
let sumaReciproca = 0;


function generadorDeListas(datillos) {
    for(i = 0; i < datillos.length; i++) {
        listado.push( datillos[i]); 
    }


}

function calcularMedianaArmonica(listado) {
    for(i = 0; i < listado.length; i++) {
        console.log("la lista " + listado[i]);
    
        let valorReciproco = 1 / listado[i];
        console.log("reciproco "+ valorReciproco);
    
        
         sumaReciproca = sumaReciproca + valorReciproco;
    
         console.log(" -> " + sumaReciproca);
    
    }

    const armonicaMedia = listado.length / sumaReciproca;
    console.log("MEDIANA ARMONICA " + armonicaMedia)
}


generadorDeListas([1, 10, 3, 99, 54, 12, 28, 7]);
calcularMedianaArmonica(listado);