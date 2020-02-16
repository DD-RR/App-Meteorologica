const gecode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

console.log(process.argv);

if (!address) {
    console.log('Ingresa una Ubicación:  ');
} else {

    gecode(address, (err, { latitude, longitude, location }) => {
        if (err) {
            return console.log(err);
        }

        forecast(latitude, longitude, (err, forecastData) => {

            if (err) {
                return console.log(err)
            }

            console.log(location)
            console.log(forecastData)
        });
    })
}