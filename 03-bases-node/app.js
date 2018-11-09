//Requireds
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        }
    })
    .argv;


const { crearArchivo } = require('./multiplicar/multiplicar');




//============================
//Obtener datos del process
//============================
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];


//============================
//Obtener datos del process con Yargs
//============================
console.log(argv);

//let base = '45';


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo Creado: ${archivo}`))
//     .catch(err => console.log(err));