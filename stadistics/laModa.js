console.log("////////////////////////////////////////////////////////");
const miLista = [
    1,7,7,7,4,4,8,5,9,9,9,9,9
];

const objetoLista = {};

miLista.map(
    function (elemento) {
        if(objetoLista[elemento]) {
            objetoLista[elemento] += 1;
        } else {
            objetoLista[elemento] = 1;
        }
    }
);

const ArrayLista = Object.entries( objetoLista).sort(
    function (a, b) {
        return a[1] - b[1];
    }
);
console.log(ArrayLista);

const moda = ArrayLista[ArrayLista.length - 1];