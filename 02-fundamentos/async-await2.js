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
// Se declara la funcion con Async
//==============================
let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe el Empleado con ID ${id}`);
    } else {
        return empleadoDB;
    }
}

//==============================
// Se declara la funcion con Async
//==============================
let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`El empleado con ID ${empleado.id} llamado ${empleado.nombre} no tiene salario`);
    } else {
        return `El ID ${empleado.id} empleado ${empleado.nombre} tiene un Salario de: ${salarioDB.salario} Mensuales`;
    }
}

//==============================
// Usando el Async Await
//==============================
let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    // console.log(resp);
    return resp;
}

getInformacion(1).then(mensaje => {
    console.log(mensaje);
}).catch(err => console.log(err));