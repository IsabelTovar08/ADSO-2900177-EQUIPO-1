function cocinararrozExa(){
    let nombre=prompt("Ingrese su nombre");
    alert("¡Hola "+nombre+"!");
    alert("¡Hora de cocinar arroz!");
    alert("Primero, asegúrate de tener los siguientes ingredientes:");
    alert("- Arroz");
    alert("- Agua");
    alert("- Sal");
    alert("¡Listo para empezar!");

    alert("¿Cuántas tazas de arroz quieres preparar?");
    tazasArroz = parseInt(prompt("Ingrese el número de tazas de arroz: "));

    cantidadAgua = tazasArroz * 2;
    cantidadSal = Math.floor(tazasArroz / 2);

    
    alert(`Para preparar ${tazasArroz} tazas de arroz, necesitas:`);
    alert(`- ${tazasArroz} tazas de arroz`);
    alert(`- ${cantidadAgua} tazas de agua`);
    alert("- Sal al gusto");

    alert("Lava el arroz bajo la llave para lavarlo hasta que el agua salga clara.");
    alert(`Añade ${tazasArroz} tazas de arroz, ${cantidadAgua} tazas de agua.`);
    alert("Añade sal al gusto.");
    alert("Pon el arroz y el agua en una olla a fuego medio-alto y llevala a la estufa.");
    alert("Una vez que hierva, reduce el fuego y tapa la olla.");
    alert("Deja cocinar durante 15-20 minutos.");
    alert("Una vez cocido, apaga el fuego y deja reposar el arroz durante unos minutos.");
    alert("¡Listo para servir y disfrutar!");
}
cocinararrozExa()
