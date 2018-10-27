let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

//==============================
// Se declara la funcion con promesas
//==============================
let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe el Empleado con ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

//==============================
// Se declara la funcion con promesas
//==============================
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`El empleado con ID ${empleado.id} llamado ${empleado.nombre} no tiene salario`);
        } else {
            resolve(`El ID ${empleado.id} empleado ${empleado.nombre} tiene un Salario de: ${salarioDB.salario} Mensuales`);
        }
    });


}

//==============================
// Se Utiliza la funcion getempleado y salario
//==============================
/*
getEmpleado(30).then(empleado => {
    //console.log('Empleado de BD', empleado);
    getSalario(empleado).then(salario => {
        console.log(salario);
    }, err => {
        console.log(err);
    });
}, err => {
    console.log(err);
});
*/

//==============================
// Promesas en CADENA
//==============================
getEmpleado(20).then(empleado => {
        return getSalario(empleado);
    })
    .then(salario => {
        console.log(salario);
    })
    .catch(err => {
        console.log(err);
    })