// requireds

const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject(`La Base y el limite deben de ser Numericos`);
            return;
        }
        let datos = '';
        for (let i = 1; i <= limite; i++) {
            datos += `${base} x ${i} = ${base*i}\n`;
        }
        resolve(datos);
    });
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor Introducido (${base}) no es un numero`);
            return; // aqui termina el resto del codigo
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base} al ${limite}`);

        });
    });
}

// Se declara en el archivo global la funcion a utilizar
module.exports = {
    crearArchivo,
    listarTabla
}