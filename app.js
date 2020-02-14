const request = require('request')

const url = 'https://api.darksky.net/forecast/126448b60c32da91c9441bbae8dde06a/37.8267,-122.4233'

request({ url : url  }, (err, resp) => {
    const data = JSON.parse(resp.body)
    console.log(data.currently); //ESTO ES IMPORTANTE aqui se accede a la propiedad Actual
    // Esto contiene la información del pronostico Actual del clima
})