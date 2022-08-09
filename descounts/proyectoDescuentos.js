let preciOriginal = 150;
const descuento = 30;
let precioDescontado;

function calcularDescuentos(precio, descuento) {
    let porcentajeDescuento = 100 - descuento;
    precioDescontado =  (( precio * porcentajeDescuento ))/100;

    return precioDescontado
}


calcularDescuentos(preciOriginal, descuento)


