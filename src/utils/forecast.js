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
			callback(
				undefined,
				body.current.weather_descriptions +
					". It is currently " +
					body.current.temperature +
					" degrees out. There is a " +
					body.current.precip +
					"% chance of rain."
			);
		}
	});
};

module.exports = forecast;
