function nuevaPartida() {
    vidas = 5;

    var palabra = arregloPalabras[Math.round(Math.random() * arregloPalabras.length - 1)];
    palabraSeleccionada = palabra;

    alert("Nuevo juego comenzado, buena suerte!");

    p1l1.value = "";
    p1l2.value = "";
    p1l3.value = "";
    p1l4.value = "";
    p1l5.value = "";

    p2l1.value = "";
    p2l2.value = "";
    p2l3.value = "";
    p2l4.value = "";
    p2l5.value = "";

    p3l1.value = "";
    p3l2.value = "";
    p3l3.value = "";
    p3l4.value = "";
    p3l5.value = "";

    p4l1.value = "";
    p4l2.value = "";
    p4l3.value = "";
    p4l4.value = "";
    p4l5.value = "";

    p5l1.value = "";
    p5l2.value = "";
    p5l3.value = "";
    p5l4.value = "";
    p5l5.value = "";

    console.log(palabra);
}

function mostrarLetras(letra) {
    if (esLetra(letra.keyCode)) {
        switch (vidas) {
            case 5: {
                if (p1l1.value == "")
                    p1l1.value = letra.key;
                else
                    if (p1l2.value == "")
                        p1l2.value = letra.key;
                    else
                        if (p1l3.value == "")
                            p1l3.value = letra.key;
                        else
                            if (p1l4.value == "")
                                p1l4.value = letra.key;
                            else
                                if (p1l5.value == "")
                                    p1l5.value = letra.key;
                break;
            }
            case 4: {
                if (p2l1.value == "")
                    p2l1.value = letra.key;
                else
                    if (p2l2.value == "")
                        p2l2.value = letra.key;
                    else
                        if (p2l3.value == "")
                            p2l3.value = letra.key;
                        else
                            if (p2l4.value == "")
                                p2l4.value = letra.key;
                            else
                                if (p2l5.value == "")
                                    p2l5.value = letra.key;
                break;
            }
            case 3: {
                if (p3l1.value == "")
                    p3l1.value = letra.key;
                else
                    if (p3l2.value == "")
                        p3l2.value = letra.key;
                    else
                        if (p3l3.value == "")
                            p3l3.value = letra.key;
                        else
                            if (p3l4.value == "")
                                p3l4.value = letra.key;
                            else
                                if (p3l5.value == "")
                                    p3l5.value = letra.key;
                break;
            }
            case 2: {
                if (p4l1.value == "")
                    p4l1.value = letra.key;
                else
                    if (p4l2.value == "")
                        p4l2.value = letra.key;
                    else
                        if (p4l3.value == "")
                            p4l3.value = letra.key;
                        else
                            if (p4l4.value == "")
                                p4l4.value = letra.key;
                            else
                                if (p4l5.value == "")
                                    p4l5.value = letra.key;
                break;
            }
            case 1: {
                if (p5l1.value == "")
                    p5l1.value = letra.key;
                else
                    if (p5l2.value == "")
                        p5l2.value = letra.key;
                    else
                        if (p5l3.value == "")
                            p5l3.value = letra.key;
                        else
                            if (p5l4.value == "")
                                p5l4.value = letra.key;
                            else
                                if (p5l5.value == "")
                                    p5l5.value = letra.key;
                break;
            }
        }
    }
    else
        if (letra.keyCode == 8)
            borrarLetras(letra);
        else
            if (letra.keyCode == 13)
                crearPalabra();
}

function esLetra(tecla) {
    var toReturn = false;
    if (tecla >= 65 && tecla <= 90) {
        toReturn = true;
    }
    return toReturn;
}

function borrarLetras() {
    switch (vidas) {
        case 5: {
            if (p1l5.value != "")
                p1l5.value = "";
            else
                if (p1l4.value != "")
                    p1l4.value = "";
                else
                    if (p1l3.value != "")
                        p1l3.value = "";
                    else
                        if (p1l2.value != "")
                            p1l2.value = "";
                        else
                            if (p1l1.value != "")
                                p1l1.value = "";
            break;
        }
        case 4: {
            if (p2l5.value != "")
                p2l5.value = "";
            else
                if (p2l4.value != "")
                    p2l4.value = "";
                else
                    if (p2l3.value != "")
                        p2l3.value = "";
                    else
                        if (p2l2.value != "")
                            p2l2.value = "";
                        else
                            if (p2l1.value != "")
                                p2l1.value = "";
            break;
        }
        case 3: {
            if (p3l5.value != "")
                p3l5.value = "";
            else
                if (p3l4.value != "")
                    p3l4.value = "";
                else
                    if (p3l3.value != "")
                        p3l3.value = "";
                    else
                        if (p3l2.value != "")
                            p3l2.value = "";
                        else
                            if (p3l1.value != "")
                                p3l1.value = "";
            break;
        }
        case 2: {
            if (p4l5.value != "")
                p4l5.value = "";
            else
                if (p4l4.value != "")
                    p4l4.value = "";
                else
                    if (p4l3.value != "")
                        p4l3.value = "";
                    else
                        if (p4l2.value != "")
                            p4l2.value = "";
                        else
                            if (p4l1.value != "")
                                p4l1.value = "";
            break;
        }
        case 1: {
            if (p5l5.value != "")
                p5l5.value = "";
            else
                if (p5l4.value != "")
                    p5l4.value = "";
                else
                    if (p5l3.value != "")
                        p5l3.value = "";
                    else
                        if (p5l2.value != "")
                            p5l2.value = "";
                        else
                            if (p5l1.value != "")
                                p5l1.value = "";
            break;
        }
    }
}

function crearPalabra() {
    var palabra = "";
    switch (vidas) {
        case 5: {
            palabra = palabra + p1l1.value + p1l2.value + p1l3.value + p1l4.value + p1l5.value;
            break;
        }
        case 4: {
            palabra = palabra + p2l1.value + p2l2.value + p2l3.value + p2l4.value + p2l5.value;
            break;
        }
        case 3: {
            palabra = palabra + p3l1.value + p3l2.value + p3l3.value + p3l4.value + p3l5.value;
            break;
        }
        case 2: {
            palabra = palabra + p4l1.value + p4l2.value + p4l3.value + p4l4.value + p4l5.value;
            break;
        }
        case 1: {
            palabra = palabra + p5l1.value + p5l2.value + p5l3.value + p5l4.value + p5l5.value;
            break;
        }
    }
    aceptarPalabra(palabra);
}

function aceptarPalabra(palabra) {
    if (!arregloPalabras.includes(palabra)) {
        alert("La palabra NO existe, por favor ingrese otra");
    }
    else {
        if (palabraSeleccionada == palabra) {
            alert("PALABRA ENCONTRADA, FELICITACIONES!");
            colorearPalabraCorrecta();
        }
        else {
            colorearPalabra(palabra);
            vidas--;
            if (vidas == 0)
                alert("Has perdido. La palabra era " + palabraSeleccionada);
        }
    }
}

function colorearPalabraCorrecta() {
    switch (vidas) {
        case 5: {
            p1l1.style.backgroundColor = "green";
            p1l1.style.color = "white";

            p1l2.style.backgroundColor = "green";
            p1l2.style.color = "white";

            p1l3.style.backgroundColor = "green";
            p1l3.style.color = "white";

            p1l4.style.backgroundColor = "green";
            p1l4.style.color = "white";

            p1l5.style.backgroundColor = "green";
            p1l5.style.color = "white";

            break;
        }

        case 4: {
            p2l1.style.backgroundColor = "green";
            p2l1.style.color = "white";

            p2l2.style.backgroundColor = "green";
            p2l2.style.color = "white";

            p2l3.style.backgroundColor = "green";
            p2l3.style.color = "white";

            p2l4.style.backgroundColor = "green";
            p2l4.style.color = "white";

            p2l5.style.backgroundColor = "green";
            p2l5.style.color = "white";

            break;
        }

        case 3: {
            p3l1.style.backgroundColor = "green";
            p3l1.style.color = "white";

            p3l2.style.backgroundColor = "green";
            p3l2.style.color = "white";

            p3l3.style.backgroundColor = "green";
            p3l3.style.color = "white";

            p3l4.style.backgroundColor = "green";
            p3l4.style.color = "white";

            p3l5.style.backgroundColor = "green";
            p3l5.style.color = "white";

            break;
        }

        case 2: {
            p4l1.style.backgroundColor = "green";
            p4l1.style.color = "white";

            p4l2.style.backgroundColor = "green";
            p4l2.style.color = "white";

            p4l3.style.backgroundColor = "green";
            p4l3.style.color = "white";

            p4l4.style.backgroundColor = "green";
            p4l4.style.color = "white";

            p4l5.style.backgroundColor = "green";
            p4l5.style.color = "white";

            break;
        }

        case 1: {
            p5l1.style.backgroundColor = "green";
            p5l1.style.color = "white";

            p5l2.style.backgroundColor = "green";
            p5l2.style.color = "white";

            p5l3.style.backgroundColor = "green";
            p5l3.style.color = "white";

            p5l4.style.backgroundColor = "green";
            p5l4.style.color = "white";

            p5l5.style.backgroundColor = "green";
            p5l5.style.color = "white";

            break;
        }
    }
}

function colorearPalabra(palabra) {
    switch (vidas) {
        case 5: {
            if (!palabraSeleccionada.includes(palabra.charAt(0))) {
                p1l1.style.backgroundColor = "gray";
                p1l1.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(0) == palabra.charAt(0)) {
                    p1l1.style.backgroundColor = "green";
                    p1l1.style.color = "white";
                }
                else {
                    p1l1.style.backgroundColor = "orange";
                    p1l1.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(1))) {
                p1l2.style.backgroundColor = "gray";
                p1l2.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(1) == palabra.charAt(1)) {
                    p1l2.style.backgroundColor = "green";
                    p1l2.style.color = "white";
                }
                else {
                    p1l2.style.backgroundColor = "orange";
                    p1l2.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(2))) {
                p1l3.style.backgroundColor = "gray";
                p1l3.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(2) == palabra.charAt(2)) {
                    p1l3.style.backgroundColor = "green";
                    p1l3.style.color = "white";
                }
                else {
                    p1l3.style.backgroundColor = "orange";
                    p1l3.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(3))) {
                p1l4.style.backgroundColor = "gray";
                p1l4.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(3) == palabra.charAt(3)) {
                    p1l4.style.backgroundColor = "green";
                    p1l4.style.color = "white";
                }
                else {
                    p1l4.style.backgroundColor = "orange";
                    p1l4.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(4))) {
                p1l5.style.backgroundColor = "gray";
                p1l5.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(4) == palabra.charAt(4)) {
                    p1l5.style.backgroundColor = "green";
                    p1l5.style.color = "white";
                }
                else {
                    p1l5.style.backgroundColor = "orange";
                    p1l5.style.color = "white";
                }
            break;
        }

        case 4: {
            if (!palabraSeleccionada.includes(palabra.charAt(0))) {
                p2l1.style.backgroundColor = "gray";
                p2l1.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(0) == palabra.charAt(0)) {
                    p2l1.style.backgroundColor = "green";
                    p2l1.style.color = "white";
                }
                else {
                    p2l1.style.backgroundColor = "orange";
                    p2l1.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(1))) {
                p2l2.style.backgroundColor = "gray";
                p2l2.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(1) == palabra.charAt(1)) {
                    p2l2.style.backgroundColor = "green";
                    p2l2.style.color = "white";
                }
                else {
                    p2l2.style.backgroundColor = "orange";
                    p2l2.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(2))) {
                p2l3.style.backgroundColor = "gray";
                p2l3.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(2) == palabra.charAt(2)) {
                    p2l3.style.backgroundColor = "green";
                    p2l3.style.color = "white";
                }
                else {
                    p2l3.style.backgroundColor = "orange";
                    p2l3.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(3))) {
                p2l4.style.backgroundColor = "gray";
                p2l4.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(3) == palabra.charAt(3)) {
                    p2l4.style.backgroundColor = "green";
                    p2l4.style.color = "white";
                }
                else {
                    p2l4.style.backgroundColor = "orange";
                    p2l4.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(4))) {
                p2l5.style.backgroundColor = "gray";
                p2l5.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(4) == palabra.charAt(4)) {
                    p2l5.style.backgroundColor = "green";
                    p2l5.style.color = "white";
                }
                else {
                    p2l5.style.backgroundColor = "orange";
                    p2l5.style.color = "white";
                }
            break;
        }
        case 3: {
            if (!palabraSeleccionada.includes(palabra.charAt(0))) {
                p3l1.style.backgroundColor = "gray";
                p3l1.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(0) == palabra.charAt(0)) {
                    p3l1.style.backgroundColor = "green";
                    p3l1.style.color = "white";
                }
                else {
                    p3l1.style.backgroundColor = "orange";
                    p3l1.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(1))) {
                p3l2.style.backgroundColor = "gray";
                p3l2.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(1) == palabra.charAt(1)) {
                    p3l2.style.backgroundColor = "green";
                    p3l2.style.color = "white";
                }
                else {
                    p3l2.style.backgroundColor = "orange";
                    p3l2.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(2))) {
                p3l3.style.backgroundColor = "gray";
                p3l3.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(2) == palabra.charAt(2)) {
                    p3l3.style.backgroundColor = "green";
                    p3l3.style.color = "white";
                }
                else {
                    p3l3.style.backgroundColor = "orange";
                    p3l3.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(3))) {
                p3l4.style.backgroundColor = "gray";
                p3l4.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(3) == palabra.charAt(3)) {
                    p3l4.style.backgroundColor = "green";
                    p3l4.style.color = "white";
                }
                else {
                    p3l4.style.backgroundColor = "orange";
                    p3l4.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(4))) {
                p3l5.style.backgroundColor = "gray";
                p3l5.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(4) == palabra.charAt(4)) {
                    p3l5.style.backgroundColor = "green";
                    p3l5.style.color = "white";
                }
                else {
                    p3l5.style.backgroundColor = "orange";
                    p3l5.style.color = "white";
                }
            break;
        }
        case 2: {
            if (!palabraSeleccionada.includes(palabra.charAt(0))) {
                p4l1.style.backgroundColor = "gray";
                p4l1.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(0) == palabra.charAt(0)) {
                    p4l1.style.backgroundColor = "green";
                    p4l1.style.color = "white";
                }
                else {
                    p4l1.style.backgroundColor = "orange";
                    p4l1.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(1))) {
                p4l2.style.backgroundColor = "gray";
                p4l2.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(1) == palabra.charAt(1)) {
                    p4l2.style.backgroundColor = "green";
                    p4l2.style.color = "white";
                }
                else {
                    p4l2.style.backgroundColor = "orange";
                    p4l2.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(2))) {
                p4l3.style.backgroundColor = "gray";
                p4l3.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(2) == palabra.charAt(2)) {
                    p4l3.style.backgroundColor = "green";
                    p4l3.style.color = "white";
                }
                else {
                    p4l3.style.backgroundColor = "orange";
                    p4l3.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(3))) {
                p4l4.style.backgroundColor = "gray";
                p4l4.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(3) == palabra.charAt(3)) {
                    p4l4.style.backgroundColor = "green";
                    p4l4.style.color = "white";
                }
                else {
                    p4l4.style.backgroundColor = "orange";
                    p4l4.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(4))) {
                p4l5.style.backgroundColor = "gray";
                p4l5.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(4) == palabra.charAt(4)) {
                    p4l5.style.backgroundColor = "green";
                    p4l5.style.color = "white";
                }
                else {
                    p4l5.style.backgroundColor = "orange";
                    p4l5.style.color = "white";
                }
            break;
        }
        case 1: {
            if (!palabraSeleccionada.includes(palabra.charAt(0))) {
                p5l1.style.backgroundColor = "gray";
                p5l1.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(0) == palabra.charAt(0)) {
                    p5l1.style.backgroundColor = "green";
                    p5l1.style.color = "white";
                }
                else {
                    p5l1.style.backgroundColor = "orange";
                    p5l1.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(1))) {
                p5l2.style.backgroundColor = "gray";
                p5l2.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(1) == palabra.charAt(1)) {
                    p5l2.style.backgroundColor = "green";
                    p5l2.style.color = "white";
                }
                else {
                    p5l2.style.backgroundColor = "orange";
                    p5l2.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(2))) {
                p5l3.style.backgroundColor = "gray";
                p5l3.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(2) == palabra.charAt(2)) {
                    p5l3.style.backgroundColor = "green";
                    p5l3.style.color = "white";
                }
                else {
                    p5l3.style.backgroundColor = "orange";
                    p5l3.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(3))) {
                p5l4.style.backgroundColor = "gray";
                p5l4.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(3) == palabra.charAt(3)) {
                    p5l4.style.backgroundColor = "green";
                    p5l4.style.color = "white";
                }
                else {
                    p5l4.style.backgroundColor = "orange";
                    p5l4.style.color = "white";
                }

            if (!palabraSeleccionada.includes(palabra.charAt(4))) {
                p5l5.style.backgroundColor = "gray";
                p5l5.style.color = "white";
            }
            else
                if (palabraSeleccionada.charAt(4) == palabra.charAt(4)) {
                    p5l5.style.backgroundColor = "green";
                    p5l5.style.color = "white";
                }
                else {
                    p5l5.style.backgroundColor = "orange";
                    p5l5.style.color = "white";
                }
            break;
        }
    }
}

var ingresarPalabra = document.getElementById("ingresarPalabra");
ingresarPalabra.onclick = crearPalabra;

var nuevoJuego = document.getElementById("nuevoJuego");
nuevoJuego.onclick = nuevaPartida;


var arregloPalabras = ["PISTA","PASTA","CESTO","CERRO","CARPA","MIEDO","MESSI","RIEGO","SUEÑO","FUEGO","TEXTO","PEDIR","COMER","MEDIA","HASTA","GORDO","ABAJO"];

var vidas;

var palabraSeleccionada;

document.addEventListener("keydown", e => {
    mostrarLetras(e);
})