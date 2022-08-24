const montoInicial = 0;
const periodoDeTiempo = 0;
const porcentajeUsuario = 0;

//Calculo de la tasa de interes
const tasaInteres = porcentajeUsuario / 100;

//Interes copmuesto al finalizar el periodo de resguardo
 const capitalFinal = Math.pow(montoInicial * (1 + tasaInteres), periodoDeTiempo );

//Interes compuesto durante cada año

for(i = 0; i < lapsoDeTiempo; i++) {
    
    let elCapital = montoInicial * (1 + tasaInteres) ** i;
    console.log(elCapital);
}
