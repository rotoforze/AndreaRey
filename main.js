window.onload = inicio();

function inicio () {
    document.getElementById("galeria").addEventListener("click", sw); // El clicker para cambiar entre sobre mi y la galería
    document.getElementById("galeria").addEventListener("mouseenter", cursor); // Para cambiar el cursor y hacer feedback al usuario 
}

function cursor() {
    document.getElementById("galeria").style.cursor="pointer"; // Cambiamos el cursor
}

let am = document.getElementById("aboutme"); // Acortamos código
let gal = document.getElementById("gal"); // "

function sw(){
    if(document.getElementById("gal").hidden==true){ // Cambiar a galería
        document.getElementById("gal").hidden=false; 
        document.getElementById("aboutme").hidden=true;
        document.querySelector("img").src = "./IMAGE/IMG_0444.PNG"
    }else if(document.getElementById("aboutme").hidden==true){ // Cambiar a sobre mi
        document.getElementById("gal").hidden=true;
        document.getElementById("aboutme").hidden=false;
        document.querySelector("img").src = "./IMAGE/IMG_0445.PNG"
    }
}
