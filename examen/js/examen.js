// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).
function calificacionexamen() {
	var calificacion =parseInt( prompt("Ingrese la calificaci�n del examen (0-5.0):"))
	if (calificacion<=5) {
		if (calificacion>=4) {
			document.write("tu calificacion fue alta",'<BR/>');
		} else {
			if (calificacion>=3) {
				document.write("Felicidades! Usted aprobo el examen.",'<BR/>');
			} else {
				document.write("Obtuvo una calificacion baja.",'<BR/>');
				document.write("Lo siento, usted reprobo el examen.",'<BR/>');
			}
		}
	} else {
		document.write("La calificacion ingresada no es valida.",'<BR/>');
    }
}
calificacionexamen()