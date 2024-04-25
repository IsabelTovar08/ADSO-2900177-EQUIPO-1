function totalSemana(){
    let precioLitro=parseInt(prompt("Ingrese el precio por litro de leche: "));
    let lunes=parseInt(prompt("Ingrese la cantidad en litros de leche de vaca recogida el lunes"));
    let martes=parseInt(prompt("Ingrese la cantidad en litros de leche de vaca recogida el martes"));
    let miercoles=parseInt(prompt("Ingrese la cantidad en litros de leche de vaca recogida el miercoles"));
    let jueves=parseInt(prompt("Ingrese la cantidad en litros de leche de vaca recogida el jueves"));
    let viernes=parseInt(prompt("Ingrese la cantidad en litros de leche de vaca recogida el viernes"));
    let totalSemanaLeche;
    let precioTotal;
    let promedioLeche;
    
    totalSemanaLeche=lunes+martes+miercoles+jueves+viernes;
    precioTotal=precioLitro*totalSemanaLeche;
    promedioLeche=totalSemanaLeche/5;

    alert("El total de leche recogida durante la semana fue "+totalSemanaLeche+" litros.");
    alert("El total a pagar es: $"+precioTotal);
    alert("El promedio de la semana es: "+promedioLeche+" litros.");
}
 totalSemana()