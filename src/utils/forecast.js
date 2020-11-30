const request = require("request");

const forecast = (latitude, longitude, callback) => {
	const url =
		"http://api.weatherstack.com/current?access_key=ff2cd8425fceb6ed7ad6491b9aa5b107&query=" +
		latitude +
		"," +
		longitude +
		"&units=m";
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback("Unable to connect to weather services", undefined);
		} else if (body.error) {
			callback(body.error.info + " Unable to find location", undefined);
		} else {
			callback(undefined, {
				weather_description: body.current.weather_descriptions,
				temperature: body.current.temperature,
				rainfall: body.current.precip,
				humidity: body.current.humidity,
				wind_speed: body.current.wind_speed,
			});
		}
	});
};

module.exports = forecast;
