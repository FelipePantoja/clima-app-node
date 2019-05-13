const lugar = require('./lugar/lugar')
const clima = require('./Clima/clima')


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;
//argv.direccion


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log(r.direccion));

// clima.getClima(45.419998, -75.690002)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo obtener el clima de ${direccion}`
    }


    console.log(coords)
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)