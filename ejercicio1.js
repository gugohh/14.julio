// Parte 1

fetch('https://dog.ceo/api/breeds/list/all')
    .then( (datosRazas) => datosRazas.json() )
    .then( (datosRazasJSON) => console.log(datosRazasJSON) )  


// Parte 2

fetch('https://dog.ceo/api/breed/rottweiler/images/random')
    .then( ( imgData ) =>{ return imgData.json() })
    .then(imgDataJSON => console.log(imgDataJSON.message))



// Parte 3


// IMPRIMIR

let formulario = document.getElementById("formulario")
let raza = document.getElementById("raza");
let contenedor = document.getElementById('contenedor');


formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    let razaUsuario = raza.value;

    fetch(`https://dog.ceo/api/breed/${razaUsuario}/images/random`)
        .then( datos => datos.json() )
        .then( (imagesJSON) => {
            
            contenedor.innerHTML = `
                <img src="${imagesJSON.message}">
            `;

        } )

});