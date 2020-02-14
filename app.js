const request = require('request')

const url = 'https://api.darksky.net/forecast/126448b60c32da91c9441bbae8dde06a/37.8267,-122.4233?lang=es&units=us'

request({ url : url, json: true  }, (err, resp) => {
    //ESTO ES IMPORTANTE aqui se accede a la propiedad Actual
    // Esto contiene la información del pronostico Actual del clima 
    // console.log(resp.body.currently); 

    console.log(resp.body.daily.data[0].summary + ' La termperatura actual es: ' + resp.body.currently.temperature + 'C. La probabilidad de que llueva es de:  ' + resp.body.currently.precipProbability + '%. Para el Área de la CDMX ');
})

// Geolocalización 
// El usuario proveera una dirección => esto se comvertira en Longitud y latitud mediante la API para poder saber el clima que nos da la pagina de dark  

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHJpb25peGRldmVsb3AiLCJhIjoiY2s2bXRmZTNuMDVjZDNrbXp6em16M3R0cSJ9.aiqfmG8PexWFT73wo07n6w'

request({ url: geocodeURL, json: true}, (err, resp) => {
    const latitude = resp.body.features[0].center[1]
    const longitude = resp.body.features[0].center[0]
    console.log(latitude, longitude);

})