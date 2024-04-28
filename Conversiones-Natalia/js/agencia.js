//Agencia de viajes 
let turquia =6000000
let italia =5000000
let peru = 4000000
let chile = 7000000
let guatemala = 6000000
let brasil = 6500000
let mexico = 5000000

function salario(pdiasTrab, pvalorDia){
    let diasTrab = pdiasTrab;
    let valorDia = pvalorDia
    let sueldo = diasTrab * valorDia;
    return sueldo
}
function ahorroSalario(psueldo, pporcentaje){
    let sueldo = psueldo;
    let porcentaje = pporcentaje;
    let ahorroMensual = sueldo/100 * porcentaje;
    return ahorroMensual;
}

function ahorros(pahorroMensual, ppais){
    let ahorroMensual = pahorroMensual;
    let pais = ppais;
    let ahorro = pais/ahorroMensual;
    return ahorro
}

alert("Señor usuario esta es una agencia de viajes que te ayudará a calcular cuánto dinero debes de ahorrar para poder llegar a tu destino y además te ayudará a tener un buen control sobre tu dinero.")

let destino = prompt("Elige tu destino: "+"\n"+ "Turquia = 6000000" +"\n"+ "Italia = 5000000" +"\n"+ "Peru = 4000000" +"\n"+ "Chile = 7000000" +"\n"+ "Guatemala = 6000000" +"\n"+ "Brasil = 6500000" +"\n"+ "Mexico = 5000000");

alert("Señor usuario necesito calcular tu salario para saber cuánto dinero debes ahorrar para viajar a tu destino. Para esto necesito que me ingreses los siguientes datos:")

    diasTrab = parseInt(prompt("Días trabajados"));
    valorDia = parseFloat(prompt("Valor del día"));

    let sal = salario(diasTrab, valorDia);
    alert("Señor usuario su salario es de: "+ sal);

    let porcentaje = parseInt(prompt("¿Qué porcentaje deseas ahorrar de tu salario?" +"\n"+ "10%" +"\n"+ "20%" +"\n"+ "30%" +"\n"+ "40%" +"\n"+ "50%" +"\n"+ "60%" +"\n"+ "70%" +"\n"+ "80%" +"\n"+ "90%" +"\n"+ "100%"));

    let ahorrosMensaules = ahorroSalario(sal, porcentaje);
    alert("Señor usuario usted ahorrara: " + ahorrosMensaules + " pesos mensuales ");



if (destino.toLowerCase() == "turquia"){
    let meses = ahorros(ahorrosMensaules, turquia)
    alert("Señor usuario para viajar a Turquia necesitara ahorrar " + meses + " meses el " + porcentaje + " porciento de su salario ")
    }
    else{
        if (destino.toLowerCase() == "italia"){
            let meses = ahorros(ahorrosMensaules, italia)
            alert(" Señor usuario para viajar a Italia necesitara ahorrar " + meses + " meses el " + porcentaje + " porciento de su salario ")
            }
            else{
                if (destino.toLowerCase() == "peru"){
                    let meses = ahorros(ahorrosMensaules, peru)
                    alert("Señor usuario para viajar a Peru necesitara ahorrar " + meses + " meses el " + porcentaje + " porciento de su salario ")
                    }
                    else{
                        if (destino.toLowerCase() == "chile"){
                            let meses = ahorros(ahorrosMensaules, chile)
                            alert("Señor usuario para viajar a Chile necesitara ahorrar " + meses + " meses el " + porcentaje + " porciento de su salario ")
                            }
                            else{
                                if (destino.toLowerCase() == "guatemala"){
                                    let meses = ahorros(ahorrosMensaules, guatemala)
                                    alert("Señor usuario para viajar a Guatemala necesitara ahorrar " + meses + " meses el " + porcentaje + " porciento de su salario ")
                                    }
                                    else{
                                        if (destino.toLowerCase() == "brasil"){
                                            let meses = ahorros(ahorrosMensaules, brasil)
                                            alert("Señor usuario para viajar a Brasil necesitara ahorrar " + meses + " meses el " + porcentaje + " porciento de su salario ")
                                            }
                                            else{
                                                if (destino.toLowerCase() == "mexico"){
                                                    let meses = ahorros(ahorrosMensaules, mexico)
                                                    alert("Señor usuario para viajar a Mexico necesitara ahorrar " + meses + " meses el " + porcentaje + " porciento de su salario ")
                                                    }
                                            }
                                    
                                    }

                            }
                    
                    }
            }    
    }


   















