console.group()
console.log("HORA DEL CAFE");

let cuadradoLado = 9;
console.log( "Cada lado del cuadrado mide: " + cuadradoLado + " mts")

function perimetroCu(cuadradoLadito) { return cuadradoLadito * 4;

}

perimetroCu();

console.log("El perimetro es de un total de: " + perimetroCu + " mts");

function areaCu(cuadradoLadito) {
 
    return    cuadradoLadito * cuadradoLadito;
};

areaCu();

console.log("Su area es de: "+ areaCu +" mts cuadrados")
console.groupEnd();


// Espacio del triangulo
console.group()

function perimetroTriang (trianguloLado,trianguloLado2,trianguloBase) {

    return trianguloLado + trianguloLado2 + trianguloBase
} 

perimetroTriang(1, 2, 3);

function areaTriang(trianguloBase, trianguloH) {

    return (trianguloBase * trianguloH)/2;

}

areaTriang(4, 5);

console.log();

console.groupEnd();

//Calculo del circulo
console.group();





function circuloCIRC(circuloRadio) {
    let circuloDiam = circuloRadio * 2;
    let valorPI = Math.PI;

    return valorPI * circuloDiam;
}

circuloCIRC(30);

function circuloArea(circuloRadio) {
    let valorPI = Math.PI;
    return valorPI * circuloRadio * circuloRadio;
} 

console.log("La circuferencia es de: "  );
console.log("El area del circulo es de: " + circuloArea(9));

console.groupEnd();