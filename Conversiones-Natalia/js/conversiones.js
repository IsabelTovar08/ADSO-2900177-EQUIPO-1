//Conversiones de longitud 
let turquia =6000000
let italia =5000000

function salario(pdiasTrab, pvalorDia){
    let diasTrab = pdiasTrab;
    let valorDia = pvalorDia
    let sueldo = diasTrab * valorDia;
    return sueldo
}

function ahorros(psueldo){
    let sueldo = psueldo;
    let ahorro = sueldo * 6;
    return ahorro
}

function viaje(pahorroTotal){
    let ahorroTotal = pahorroTotal
    if (ahorroTotal>= turquia){
        let sobrante =ahorroTotal-turquia;
        if (sobrante>0){
            let compras;
        compras = sobrante*0.4;
        let donar = sobrante * 0.6
        return "Puede viajar a Turquia"+"\n"+
                "El 40% de lo que le sobra se utilizaran para compras: "+compras+"\n"+
               "El 60% de lo que le sobra se donará: "+donar;
        }else{
            return "No le sobrara dinero"
        } 
     }
    else{
        if(ahorroTotal<turquia && ahorroTotal>=italia){
            let sobrante = ahorroTotal-italia;
            if (sobrante>0){
                let compras;
            compras = sobrante*0.4;
            let donar = sobrante * 0.6
            return "Podra viajar a Italia"+"\n"+
            "El 40% de lo que le sobra se utilizaran para compras: "+compras+"\n"+
            "El 60% de lo que le sobra se donará: "+donar;
            }else{
                return "No le sobra dinero"
            }

        }else{
            return "No podra viajar"
        }
        
    }
}






