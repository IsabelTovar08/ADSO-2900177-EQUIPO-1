let x = 0;
let distancia = 0;
let opcion,c,s = "";

let velocidad
let tiempo= 0;


const opcional=(popcion="si")=>{

    opcion = prompt("señor usuario quiere comenzar el programa, presione (si) o si quiere salir del programa presione(no) ??")

    if(opcion == "si" || opcion == "SI"){
        alert("señor usuario la distancia es de km y la  velocidad es km/h que transcurre el objecto ")
        distancia = parseInt(prompt("señor usuario ingrese la distancia de km"))
        velocidad = parseFloat(prompt("señor usuario ingrese la velocidad que esta transcurriendo"))
        tiempo = distancia/velocidad;
        tiempo = tiempo*60
        alert("el tiempo se va a pasar a minutos ")
        alert(`la distancia que recorrio el carro fue de ${distancia} km  y el tiempo que transcurrio fue: ${tiempo} mi con una velocidad de ${velocidad} km/h`)

        opcion = prompt( "señor usuario si quiere repetir el programa presione (si), o si quiere salir del programa presione (no??")
        
        if(opcion == "si" || opcion== "SI"){;
     
            opcional("si")
        }else{
            alert("señor usuario te a salido del programa")
            
        }
    }else {
       alert("señor usuario te a salido del programa")
    }
}   
opcional()


