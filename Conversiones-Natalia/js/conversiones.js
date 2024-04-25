//Conversiones de longitud 
let turquia =6000000
let italia =5000000
let peru = 4000000
let chile = 7000000

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


alert("Señor usuario aqui podras calcular a que país puedes viajar con tus ahorros de 6 meses. ")

let destino = prompt("señor usuario digite su destino: (Turquia-Italia-Chile-Peru)");
diasTrab = parseInt(prompt("Digite los días Trabajados"));
valorDia = parseFloat(prompt("Digite el valor del día"));
let sal = salario(diasTrab, valorDia);
let ahorross = ahorros(sal);
alert("Señor usuario su salario es de: "+ sal);
alert("Señor usuario, sus ahorros en 6 meses son de: "+ahorross);
let percance = ahorross*0.2;
let ahorroTotal = ahorross - percance;
alert("Señor usuario el dinero utilizado para un percance sera: "+percance);



 
if (destino.toLowerCase() == "turquia"){
    
    if (ahorroTotal>= turquia){
        let sobrante =ahorroTotal-turquia;
        if (sobrante>0){
            let compras = sobrante*0.4;
            let donar = sobrante * 0.6

            alert(`Puede viajar a Turquia \n El 40% de lo que le sobra se utilizaran para compras: ${compras}\n El 60% de lo que le sobra se donará: ${donar}`)
        }else{
            alert("No le sobrara dinero")
        } 
    }
    else{
        alert("Saldo insuficiente para viajar a turquia");
    }

}
if (destino.toLowerCase() == "italia"){
    
    if (ahorroTotal>= italia){
        let sobrante =ahorroTotal-italia;
        if (sobrante>0){
            let compras = sobrante*0.4;
            let donar = sobrante * 0.6

            alert(`Puede viajar a Italia \n El 40% de lo que le sobra se utilizaran para compras: ${compras}\n El 60% de lo que le sobra se donará: ${donar}`)
        }else{
            alert("No le sobrara dinero")
        } 
    }
    else{
        alert("Saldo insuficiente para viajar a Italia");
    }

}
if (destino.toLowerCase() == "peru"){
    
    if (ahorroTotal>= peru){
        let sobrante =ahorroTotal-peru;
        if (sobrante>0){
            let compras = sobrante*0.4;
            let donar = sobrante * 0.6

            alert(`Puede viajar a Peru \n El 40% de lo que le sobra se utilizaran para compras: ${compras}\n El 60% de lo que le sobra se donará: ${donar}`)
        }else{
            alert("No le sobrara dinero")
        } 
    }
    else{
        alert("Saldo insuficiente para viajar a Peru");
    }

}
if (destino.toLowerCase() == "chile"){
    
    if (ahorroTotal>= chile){
        let sobrante =ahorroTotal-chile;
        if (sobrante>0){
            let compras = sobrante*0.4;
            let donar = sobrante * 0.6

            alert(`Puede viajar a Chile \n El 40% de lo que le sobra se utilizaran para compras: ${compras}\n El 60% de lo que le sobra se donará: ${donar}`)
        }else{
            alert("No le sobrara dinero")
        } 
    }
    else{
        alert("Saldo insuficiente para viajar a Chile");
    }

}








//         if(ahorroTotal<turquia && ahorroTotal>=italia){
//             let sobrante = ahorroTotal-italia;
//             if (sobrante>0){
//                 let compras;
//             compras = sobrante*0.4;
//             let donar = sobrante * 0.6
//             return "Podra viajar a Italia"+"\n"+
//             "El 40% de lo que le sobra se utilizaran para compras: "+compras+"\n"+
//             "El 60% de lo que le sobra se donará: "+donar;
//             }else{
//                 return "No le sobra dinero"
//             }

//         }else{
//             return "No podra viajar"
//         }
        
//     }
// }






