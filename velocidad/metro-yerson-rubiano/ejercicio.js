let x = 0;
let km = 0;
let opcion,c,s = "";
let h = 1;
let seg = 3600;

let cont= 0;


const opcional=(popcion="si")=>{

    opcion = prompt("señor usuario quiere comenzar el programa, presione (si) o si quiere salir del programa presione(no) ??")

    if(opcion == "si" || opcion == "SI"){
        alert("señor usuario es un programa de conversion a km a m");
        function calcularTiempo(distanciaMetros, velocidadMetrosSegundo) {
            return distanciaMetros / velocidadMetrosSegundo;
        }
        
        
        let distanciaKm = parseInt(prompt("digite su desplazamiento")); 
        let distanciaMetros = distanciaKm * 1000; 
        let velocidadMetrosSegundo = 5; 
        
        let tiempoSegundos = calcularTiempo(distanciaMetros, velocidadMetrosSegundo);
        alert("El tiempo necesario para recorrer "+ distanciaMetros+ " metros es de "+ tiempoSegundos+ " segundos.");
        

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


