const { crearArchivo } = require('./multiplicar/multiplicar');




//============================
//Obtener datos del process
//============================
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];


//let base = '45';

crearArchivo(base)
    .then(archivo => console.log(`Archivo Creado: ${archivo}`))
    .catch(err => console.log(err));