




let usuarios = ['gugohh', 'ivanqgervas', 'ichikonwd', 'supermario'];
let newArray = usuarios.map( (value) => fetch(`https://api.github.com/users/${value}`).then( data => data.json() ) );



// console.log(newArray);



Promise.all(newArray)
    .then( newArray => newArray.map( userJSON => console.log('Nombre: ', userJSON.name , ' Repositorios: ', userJSON.public_repos) ));


