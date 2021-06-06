const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=3db0df8cd2754c54cfa71eab0332677c&query=${latitude},${longitude}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to get weather information try again", undefined);
    } else {
      callback(
        undefined,
        `It is ${body.current.temperature}°C  out there. It feels like ${body.current.feelslike}°C  out there and ${body.current.weather_descriptions[0]} `
      );
    }
  });
};

module.exports = forecast;
