let x = 0;
let km = 0;
let opcion,c,s = "";



const opcional=(popcion="si")=>{

    opcion = prompt("señor usuario si quiere continuar en el programa presiones(si) o si quiere salir presione(no)")

    if(opcion == "si" ){
        alert("señor usuario este programa calcule la velocidad de desplazamiento en km/h y damos el tiempo");
        km = prompt("digite su desplamiento")
        x =km*(5/18);
        parseInt(x)
        alert( "la velocidad que se desplaza es: "+x+"m/s" );
        opcion = prompt( "señor usuario si quiere repetri el programa presiones(si) o si quiere salir presione(no)")
        
        if(opcion == "si"){document.write("señor usuario el programa se ha salido");
           
            
        }else{
            opcional("si")
        }
    }else {
        document.write("señor usuario el programa se ha salido");
    }
}
opcional()