

// fetch(' https://api.github.com/users/IvanQGervas').then(datos => datos.json())
// .then(datosJSon => {
//     console.log(datosJSon.name);
//     console.log(datosJSon.public_repos);
//     console.log(datosJSon.avatar_url);
// })


let form = document.getElementById("form");
let user = document.getElementById("user");
let contenedor = document.getElementById("contenedor2");

form.addEventListener('submit'   , (event) => {
    event.preventDefault();

    let userData=user.value

    fetch(`https://api.github.com/users/${userData}`).then(datos => datos.json())
    .then( (datosJSon) => {
        
        

        contenedor.innerHTML = `
            ${datosJSon.name}
            ${datosJSon.public_repos}
            d<img src="${datosJSon.avatar_url}">
        `;

})

})


//eje3



let usuarios = ['gugohh', 'ivanqgervas', 'ichikonwd'];

let newArray = usuarios.map((value)=> fetch(`https://api.github.com/users/${value}`));

console.log(newArray);


Promise.all(newArray).then(()=> console.log('ey'))



// Promise.all([p1,p2,p3]).then()



