const fs = require('fs');
const colors = require('colors');


//module.exports.crearArchivo= ..
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }

        let contenido = '';
        for (let i = 1; i <= limite; i++) {
            contenido += `${base} * ${i} = ${base * i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, contenido, (err) => { // ./ raiz ../ directorio anterior
            // if (err) throw err; //si existe el error
            if (err)
                reject(err); //retornando 
            else
                resolve(`tabla-${base}-al-${limite}.txt`);

        });
    });
}

let listarTabla = (base, limite = 10) => {
    console.log('========================'.green);
    console.log(`Tabla de ${base}`.green);
    console.log('========================'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}


//modulo objeto global
module.exports = {
    crearArchivo, //crearArchivo:crearArchivo es lo mismo
    listarTabla
}