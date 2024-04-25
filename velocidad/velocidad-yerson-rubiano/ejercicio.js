let x = 0;
let km = 0;
let opcion,c,s = "";



const opcional=(popcion="si")=>{

    opcion = prompt("señor usuario quiere comenzar el programa, presione (si) o si quiere salir del programa presione(no) ??")

    if(opcion == "si" ){
        alert("señor usuario es un programa de conversion a km a m");
        km = parseInt(prompt("digite su desplazamiento"))
        x =(km*1000)/1;
        alert( "el desplazamiento es: "+x+" m" );
        opcion = prompt( "señor usuario si quiere repetir el programa presione (si), o si quiere salir del programa presione (no??")
        
        if(opcion == "si"){;
     
            opcional("si")
        }else{
            alert("señor usuario te a salido del programa")
            
        }
    }else {
       alert("señor usuario te a salido del programa")
    }
}   
opcional()