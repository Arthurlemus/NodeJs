//Requireds



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');



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
        // console.log(`base: ${argv.base} con limite ${argv.limite}`);
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
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