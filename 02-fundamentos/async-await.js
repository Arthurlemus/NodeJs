let getNombre = async() => {
    //throw new Error('No existe el nombre');
    return "Irving";
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

//onsole.log(getNombre());

/*
getNombre().then(nombre => {
        console.log(nombre);
    })
    .catch(err => {
        console.log(err);
    });
*/


saludo().then(msj => {
    console.log(msj);
});