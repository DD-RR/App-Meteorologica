const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/126448b60c32da91c9441bbae8dde06a/' + latitude + ',' + longitude;

    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('Lo siento no se puede conectar con el Servicio Meteologico!!!', undefined);
        } else if (body.error) {
            callback('No se puede acceder a la Ubicación Verfique los datos!!!', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' La termperatura actual es: ' + body.currently.temperature + ' °C. La probabilidad de que llueva es de:  ' + body.currently.precipProbability + ' %.');
        }
    });
};


module.exports = forecast;