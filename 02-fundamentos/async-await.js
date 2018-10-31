let getNombre = async() => {
    //throw new Error('No existe el nombre');
    return "Irving";
}

getNombre().then(nombre => {
        console.log(nombre);
    })
    .catch(err => {
        console.log(err);
    });

// console.log(getNombre());