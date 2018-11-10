//Requireds
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help() // para mostrar la ayudar de la funcion
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
// console.log(argv.base);
// console.log(argv.limite);


//============================
//Utilizando los datos recibidos
//============================
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(`base: ${argv.base} con limite ${argv.limite}`);
        break;

    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo Creaddo: ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log(`Comando (${comando}) no reconocido`);
}


//let base = '45';


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo Creado: ${archivo}`))
//     .catch(err => console.log(err));