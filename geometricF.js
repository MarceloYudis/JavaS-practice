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