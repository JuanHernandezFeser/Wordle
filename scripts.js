function nuevaPartida() {
    vidas = 6;

    var palabra = arregloPalabras[Math.round(Math.random() * arregloPalabras.length)];
    palabraSeleccionada = palabra;

    console.log(palabra);
    console.log(vidas);
}

function mostrarLetras(letra) {
    switch (vidas) {
        case 6: {
            if (p1l1.value == "")
                p1l1.value = letra;
            else
                if (p1l2.value == "")
                    p1l2.value = letra;
                else
                    if (p1l3.value == "")
                        p1l3.value = letra;
                    else
                        if (p1l4.value == "")
                            p1l4.value = letra;
                        else
                            if (p1l5.value == "")
                                p1l5.value = letra;
                            else
                                alert("Palabra ya completada");
            break;
        }
    }
}

function crearPalabra(){
    var palabra="";
    switch(vidas){
        case 6:{
            palabra=palabra+p1l1.value+p1l2.value+p1l3.value+p1l4.value+p1l5.value;
        }
    }
    aceptarPalabra(palabra);
}

function aceptarPalabra(palabra) {
    if (arregloPalabras.includes(palabra)) {
        alert("La palabra existe en el arreglo");
    }
    else {
        alert("La palabra no existe en el arreglo, por favor ingrese otra");
    }
}

var ingresarPalabra=document.getElementById("ingresarPalabra");
ingresarPalabra.onclick=crearPalabra;;

var nuevoJuego=document.getElementById("nuevoJuego");
nuevoJuego.onclick=nuevaPartida;


var arregloPalabras = ["messi", "autos", "pista", "cerra"];

var vidas;

var palabraSeleccionada;

var p1l1 = document.getElementById("p1l1");
var p1l2 = document.getElementById("p1l2");
var p1l3 = document.getElementById("p1l3");
var p1l4 = document.getElementById("p1l4");
var p1l5 = document.getElementById("p1l5");

document.addEventListener("keydown", e => {
    mostrarLetras(e.key);
})