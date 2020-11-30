const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-one");
const messageTwo = document.querySelector("#message-two");

weatherForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const location = search.value;

	messageOne.textContent = "";
	messageTwo.textContent = "";

	fetch("/weather?address=" + location).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				messageOne.textContent = data.error;
			} else {
				messageOne.textContent = data.location;
				messageTwo.textContent =
					"Current condition: " +
					data.forecast.weather_description +
					". " +
					data.forecast.temperature +
					" degree celsius outside. Wind speed is " +
					data.forecast.wind_speed +
					" kmph. " +
					data.forecast.humidity +
					"% humidity. There is a " +
					data.forecast.rainfall +
					"% chance of rain. ";
			}
		});
	});
});
