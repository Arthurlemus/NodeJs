/*
setTimeout(() => {
    console.log('Hola Mundo Callback');
}, 3000);
*/

//==============================
// Se crea la funcion de flecha
//==============================
let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Irving',
        id
    };

    if (id === 20) {
        callback(`El usuario con ID ${id}, No existe`);
    } else {
        callback(null, usuario);
    }

}

//==============================
// Se manda llamar la funcion
//==============================
getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err); //con el return ya no se ejecuta el resto del codigo
    } else {
        console.log('Usuario de BD: ', usuario);
    }

});
//==============================