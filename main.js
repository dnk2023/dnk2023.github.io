//SECCION QUE APARECE Y DESAPARECE EL MENU SELECCIONADO
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}

//DESAPARECER MENU

var x = document.getElementById("nav");
x.className = "";

// FUNCION QUE MUESTRA AL MENU RESPONSIVE 
function responsiveMenu(){
    var x= document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }
    else{
        x.className="";
    }
}