const opts = {
    base: { //Flags   //Configuracion  --base 5
        demand: true, //obligatorio,
        alias: 'b' //-b 5
    },
    limite: {
        alias: 'l',
        default: 10 //valor por defecto
    }
}

const argv = require('yargs') //comando listar , ayuda
    .command('listar' /*Nombre del comando*/ , 'Imprime en consola la tabla de comunicar' /*Ayuda para el usuario */ , opts)
    .command('crear', 'Genera un nuevo con la tabla de multiplicar', opts)
    .help() //Imprime el mensaje del comando //la ayuda
    .argv;

module.exports = {
    argv
}