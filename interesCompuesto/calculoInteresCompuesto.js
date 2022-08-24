let montoInicial = 0;
let periodoDeTiempo = 0;
let porcentajeUsuario = 0;
let tasaInteres = 0;



//Interes copmuesto al finalizar el periodo de resguardo
function calculoInteresCompuestoFinal(montoInicial, tasaInteres, periodoDeTiempo) {
    const capitalFinal = Math.pow(montoInicial * (1 + periodoDeTiempo), tasaInteres );


    return parseInt(capitalFinal);
}

//Interes compuesto durante cada año
let lapsoDeTiempo = 1;
for(i = 0; i < lapsoDeTiempo; i++) {
    
    let elCapital = montoInicial * (1 + tasaInteres) ** i;
    console.log(elCapital);
}

function obtencionDatosUsuario() {
    montoInicial = document.getElementById("montoUsuario");
    periodoDeTiempo = document.getElementById("tiempoUsuario")
    porcentajeUsuario = document.getElementById("interesUsuario");

    const montoInicialVALOR = montoInicial.value; 
    const periodoDeTiempoVALOR = periodoDeTiempo.value;
    const porcentajeUsuarioVALOR = porcentajeUsuario.value;

    console.log(porcentajeUsuarioVALOR)
    tasaInteres = porcentajeUsuarioVALOR / 100;

    const gananciaCompuesta = calculoInteresCompuestoFinal(montoInicialVALOR, periodoDeTiempoVALOR, tasaInteres);
    console.log(gananciaCompuesta);
}