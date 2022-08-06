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

function areaTriang() {

    return (trianguloBase * trianguloH)/2;

}

console.log("El area del triangulo es de: " + areaTriang + "cm");

console.groupEnd();

//Calculo del circulo
console.group();
let circuloRadio = 10;
let circuloDiam = circuloRadio * 2;

let valorPI = Math.PI;

console.log("El radio del circulo es de: " + circuloRadio);
console.log("El diametro es de: " + circuloDiam);

let circuloCIRC = valorPI * circuloDiam;
let circuloArea = valorPI * circuloRadio * circuloRadio;

console.log("La circuferencia es de: " + circuloCIRC);
console.log("El area del circulo es de: " + circuloArea);

console.groupEnd();