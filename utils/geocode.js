const request = require('request')

const gecode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHJpb25peGRldmVsb3AiLCJhIjoiY2s2bXRmZTNuMDVjZDNrbXp6em16M3R0cSJ9.aiqfmG8PexWFT73wo07n6w&limit=1';

    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('Lo siento no se puede conectar con el Servicio Meteologico!!!', undefined)
        } else if (body.features.length === 0) {
            callback(' No se puede encontrar la ubicación. Intente con otra busqueda. ', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = gecode;

/* const url = 'https://api.darksky.net/forecast/126448b60c32da91c9441bbae8dde06a/19.41944,-99.14556?lang=es&units=us'

request({ url: url, json: true }, (err, resp) => {
    //ESTO ES IMPORTANTE aqui se accede a la propiedad Actual
    // Esto contiene la información del pronostico Actual del clima 
    // console.log(resp.body.currently); 
    if (err) {
        console.log(' Lo siento no se puede conectar con el Servicio Meteologico!!!');
    } else if (resp.body.err) {
        console.log(' No se puede acceder a la Ubicación Verfique los datos!!!');
    } else {

        console.log(resp.body.daily.data[0].summary + ' La termperatura actual es: ' + resp.body.currently.temperature + ' °C. La probabilidad de que llueva es de:  ' + resp.body.currently.precipProbability + ' %. Para el Área de la CDMX ');
    }
}); */