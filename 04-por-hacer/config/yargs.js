const opCrear = { //opciones para Crear nuevo registro
    descripcion: {
        demand: true,
        alias: 'd'
    }
};

const opActualizar = { // Opciones para Actualizar
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
};

const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", opCrear)
    .command("actualizar", "Actualiza el estado completado de una tarea", opActualizar)
    .help().argv;

module.exports = {
    argv
}