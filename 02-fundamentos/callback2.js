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
// Se declara la funcion 
//==============================
let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe el Empleado con ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

//==============================
// Se declara la funcion 
//==============================
let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`El empleado con ID ${empleado.id} llamado ${empleado.nombre} no tiene salario`);
    } else {
        callback(null, {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
}

//==============================
// Se mandan llamar las dos funcones
//==============================
getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    } else {
        //console.log(empleado);
        getSalario(empleado, (err, salario) => {
            if (err) {
                return console.log(err);
            } else {
                console.log(salario);
            }

        })
    }
});