let indiceImagen = 0;
mostrarImagen(indiceImagen);

function moverCarrusel(n) {
    mostrarImagen(indiceImagen += n);
}

function mostrarImagen(n) {
    let i;
    let imagenes = document.getElementsByClassName("carousel-images")[0].children;

    if (n >= imagenes.length) {
        indiceImagen = 0;
    }
    if (n < 0) {
        indiceImagen = imagenes.length - 1;
    }

  
    for (i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = "none";
    }

 
    imagenes[indiceImagen].style.display = "block";
}

