let anioN;
let anioA = 2024;
let semanasp;
let sexo;
let confirmar;
let totals;
let año;
let edad




   do{
        anioN = prompt("Digite su año de nacimiento: ");
        sexo = prompt("Digite su sexo (M/F): "); 
        edad =  anioA - anioN;
        if(sexo=='M'){
            semanasp = prompt("Digite sus semanas de pension realizadas: "); 
            totals = 1300-semanasp;
            año = totals * 0.0191781
            alert("su edad es "+edad+" sus semanas restantes son: "+totals+" lo que equivale a "+año+" en años");
            estado = 1;
        }
        else if(sexo=='F'){;
            semanasp = prompt("Digite sus semanas de pension realizadas: "); 
            totals = 1000-semanasp;
            año = totals * 0.0191781
            alert("su edad es "+edad+" sus semanas restantes son: "+totals+" lo que equivale a "+año+" en años");
            estado = 1;
        }
        else{
            alert('Inserte digitos validos');
            estado = 0;
        }
    
    }while(estado < 1);


    
		
		

    
		
			
		