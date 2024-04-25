function notas(){
    let nombre=prompt("Ingrese su nombre:");
    alert("¡Hola "+nombre+"!");
    let notaUno=parseFloat(prompt("Ingrese la nota 1:"));
    let notaDos=parseFloat(prompt("Ingrese la nota 2:"));
    let notaTres=parseFloat(prompt("Ingrese la nota 3:"));
    let calificacion=(notaUno+notaDos+notaTres)/3;


	if (calificacion==5) {
        document.write("Tu nota promedio fue ",calificacion,'<BR/>');
        document.write("tu calificacion fue superior",'<BR/>');
       
    }
	else if (calificacion>=4) {
        document.write("Tu nota promedio fue ",calificacion,'<BR/>');
		document.write("tu calificacion fue alta",'<BR/>');
         
	} else if (calificacion>=3) {
        document.write("Tu nota promedio fue ",calificacion,'<BR/>');
		document.write("Felicidades! Usted aprobo el examen.",'<BR/>');
            
               
	} else {
        document.write("Tu nota promedio fue ",calificacion,'<BR/>');
		document.write("Obtuvo una calificacion baja.",'<BR/>');
		document.write("Lo siento, usted reprobo el examen.",'<BR/>');
             
	}
}
notas()