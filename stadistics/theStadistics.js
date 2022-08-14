//Proceso de creacion de la Lista
const listaCreada = [];

function creacionDeLalista(listita, datoInsertado) {
    listita.push(datoInsertado);

    console.log(listita);
}


function calculoMediaAritmetica(listadoDeDatos) {
    
    console.log("lista de datos " + listadoDeDatos)

    let sumaLista;

    for(let i = 0; i < listadoDeDatos.length; i++) {
        sumaLista = sumaLista + listadoDeDatos[i];
        console.log(sumaLista);
    };

    console.log("suma de la lista " + sumaLista);
    const promedioLista = sumaLista / listadoDeDatos.length;
}



creacionDeLalista(listaCreada, 1);
creacionDeLalista(listaCreada, 2);
creacionDeLalista(listaCreada, 3);

calculoMediaAritmetica(listaCreada)