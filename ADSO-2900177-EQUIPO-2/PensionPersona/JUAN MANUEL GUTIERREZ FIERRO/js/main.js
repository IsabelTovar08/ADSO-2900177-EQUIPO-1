let anioN;
let anioA = 2024;
let semanasp = 576;
let sexo;
let confirmar = "no"
let totals;

function edadd(anioN){
    let edad =  anioA - anioN;
    return "su edad es: "+edad
}
function sexoo(sexo,semanasp, anioN){
    if(sexo=='M'){
        totals = 1300-semanasp;
        return "su edad es "+edadd(anioN)+" sus semanas restantes son: "+totals;
    }else{
        if(sexo=='F'){;
            totals = 1000-semanasp;
            return "su edad es "+edadd(anioN)+" sus semanas restantes son: "+totals;
        }
        else{
            return 'Inserte digitos validos';
        }
    }
}     
		
		

    
		
			
		