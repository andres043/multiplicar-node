// Requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('========================'.blue);
    console.log(`===== Tabla del ${base} =====`.blue);
    console.log('========================'.blue);

    return new Promise((resolve, reject) => {
        let contenido = '';

        if (!Number(base)) {
            reject(`El valor 'base' introducido '${base}' no es numerico`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor 'limite' introducido '${limite}' no es numerico`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            contenido += `${base} x ${i} = ${base * i}\n`;
        }

        resolve(contenido);
    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let contenido = '';

        if (!Number(base)) {
            reject(`El valor 'base' introducido '${base}' no es numerico`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor 'limite' introducido '${limite}' no es numerico`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            contenido += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}