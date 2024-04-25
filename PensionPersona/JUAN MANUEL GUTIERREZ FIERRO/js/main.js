let anioN;
let anioA = 2024;
let semanasp;
let sexo;
// let confirmar = "no"
let totals;


function edadd(anioN){
    let edad =  anioA - anioN;
    return edad
}

function sexoo(sexo){
    
    if(sexo=='M'){
        semanasp = prompt("Digite sus semanas de pension realizadas: "); 
        totals = 1300-semanasp;
        alert("su edad es "+edadd(anioN)+" sus semanas restantes son: "+totals);
    }else{
        if(sexo=='F'){;
            semanasp = prompt("Digite sus semanas de pension realizadas: "); 
            totals = 1000-semanasp;
            alert("su edad es "+edadd(anioN)+" sus semanas restantes son: "+totals);
        }
        else{
            alert('Inserte digitos validos');
        }
    }
}     
		
		

    
		
			
		