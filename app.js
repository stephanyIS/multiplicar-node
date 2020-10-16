//const { argv } = require('./config/yargs');
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //destructuracion


let comando = argv._[0];


switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.green(archivo))) //otra forma
            .catch(e => console.log(e));
        break;

        console.log(colors.green('Hello %s'), name);
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}




//const fs = require('fs'); //Libreria propia que ya existente en node
//requiere('express')   Paquetes que no son nativos de node, expansiones echas por alguien mas
//requiere('./Path')   Los requiere que nosotros hicimos en el proyecto se identifican por el ./path o ../


//process variable de entorno
//console.log(process.argv); //Ubicacion de node y de este archivo Path de este archivo

//PASAR ARGUMENTOS POR CONSOLA
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]; //pasa a arreglo y divide los elementos seguidos del =


//console.log(argv); //Yars 
//console.log(argv2); //Procesos