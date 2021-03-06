var axios = require('axios');

//const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&appid=eee2108b7568f9cf8a5a8a5613798b43';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=eee2108b7568f9cf8a5a8a5613798b43';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        console.log(res.data.message);
        throw new Error(res.data.message);
      }
      else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error('Unable to fetch weather for that location');
    });
  }
}
