let preciOriginal = 150;
const descuento = 30;
let precioDescontado;

function calcularDescuentos(precio, descuento) {
    let porcentajeDescuento = 100 - descuento;
    precioDescontado =  (( precio * porcentajeDescuento ))/100;

    return precioDescontado
}




function extraccionDeInputs() {
    const precio = document.getElementById("IngresoPrecio");
    const desc = document.getElementById("DescuentoIngresado");

    const precioVALOR = precio.value;
    const descVALOR = desc.value;

    let datosDeDescuento = calcularDescuentos(precioVALOR, descVALOR) ;
 
    
    let escrituraDeRespuesta = document.getElementById("resultadoDelDescuento");
    escrituraDeRespuesta.innerText = "El precio del articulo con el descuento es de: $" + datosDeDescuento;

}

function extraccionDeCupones() {
    const precioProducto = document.getElementById("IngresoPrecio");
    const infoCupon = document.getElementById("CuponesDeDescuento");
    let productoValor = precioProducto.value;
    let cuponsito = infoCupon.value;
    cuponsito = parseInt(cuponsito);

    console.log(productoValor)
    console.log(cuponsito)

    const precioFinal = calcularDescuentos(productoValor, cuponsito);

    console.log(precioFinal);

    const escribiRespuesta = document.getElementById("resultadoDelDescuento");
    escribiRespuesta.innerText = "El precio del producto aplicando el cupon del 15% es de $" + precioFinal;

}