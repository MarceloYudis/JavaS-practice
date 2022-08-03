console.group()
console.log("HORA DEL CAFE");

let cuadradoLado = 9;
console.log( "Cada lado del cuadrado mide: " + cuadradoLado + " mts")

let perimetroCu = cuadradoLado * 4;

console.log("El perimetro es de un total de: " + perimetroCu + " mts");

let areaCu = cuadradoLado * cuadradoLado;

console.log("Su area es de: "+ areaCu +" mts cuadrados")
console.groupEnd();


// Espacio del triangulo
console.group()
let trianguloLado = 6;
let trianguloLado2 = 6;
let trianguloBase = 4;
let trianguloH = 7;

console.log("Los lados del triangulo valen: " + trianguloLado + "cm, " + trianguloLado2 + "cm, " +
trianguloBase + "cm. ")

let perimetroTriang = trianguloLado + trianguloLado2 + trianguloBase;

let areaTriang = (trianguloBase * trianguloH)/2;

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