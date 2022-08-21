const listado = [
    1,
    10,
    33,
    5,
    77,
    21,
    11
]

// media armonica = cantidad de elementos / ( suma de los reciprocos de cada elemento )
let sumaReciproca = 0;
for(i = 0; i < listado.length; i++) {
    console.log("la lista " + listado[i]);

    let valorReciproco = 1 / listado[i];
    console.log("reciproco "+ valorReciproco);

    
     sumaReciproca = sumaReciproca + valorReciproco;

     console.log(" ->" +sumaReciproca);

}



const armonicaMedia = listado.length / sumaReciproca;
console.log("MEDIANA ARMONICA " + armonicaMedia)
