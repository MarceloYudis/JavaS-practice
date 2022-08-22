let salarioLista = [];

salarioLista = colombia.map(
    function(usuario) {

        return usuario.salary;
    }
);

const listaOrdenada = salarioLista.sort(
    function(a,b) {
        return a - b;
    }
);

function hallarPar(dato) {
    return (dato % 2 === 0);
}

function medianaSalario(lista)  {
    const mitad = parseInt(lista.length / 2);

    if( hallarPar(lista.length)) {
        const userA = lista[mitad];
        const userB = lista[mitad - 1];

        const medianaPar = ( userA + userB) / 2;
        return medianaPar;

    } else {
        const usuarioMedio = lista[mitad]
        return usuarioMedio;
    }
};

console.log("listarda " + medianaSalario(listaOrdenada));