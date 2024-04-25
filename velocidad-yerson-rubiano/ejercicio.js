let x = 0;
let km = 0;
let opcion,c,s = "";



const opcional=(popcion="si")=>{

    opcion = prompt("señor usuario si quiere continuar en el programa presione (si), o si quiere salir presione (no).")

    if(opcion == "si" ){
        alert("señor usuario es un programa de conversion a km a m");
        km = prompt("digite su desplazamiento")
        x =(km*1000)/1;
        parseInt(x)
        alert( "el desplazamiento es: "+x+" m" );
        opcion = prompt( "señor usuario si quiere repetri el programa presione (si), o si quiere salir presione(no).")
        
        if(opcion == "si"){document.write("señor usuario el programa se ha salido");
           
            
        }else{
            opcional("si")
        }
    }else {
       
    }
}
opcional()
