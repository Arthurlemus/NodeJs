// requireds

const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor Introducido (${base}) no es un numero`);
            return; // aqui termina el resto del codigo
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base}.txt`);

        });
    });
}

// Se declara en el archivo global la funcion a utilizar
module.exports = {
    crearArchivo
}