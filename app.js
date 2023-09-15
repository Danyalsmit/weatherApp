

const options = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Key': 'c1d29bfc4dmshcdf291e5d5a8058p14d476jsn0b3807e81e25',
	  'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
	},
  };
  
  const cityName = document.getElementById("cityName");
  const temp = document.getElementById("temp");
  const temp2 = document.getElementById("temp2");
  const feelsLike = document.getElementById("feels_like");
  const humidity = document.getElementById("humidity");
  const humidity2 = document.getElementById("humidity2");
  const min_temp = document.getElementById("min_temp");
  const max_temp = document.getElementById("max_temp");
  const windSpeed = document.getElementById("wind_speed");
  const windSpeed2 = document.getElementById("wind_speed2");
  const windDegrees = document.getElementById("wind_degrees");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  const submit = document.getElementById("submit");
  const cityInput = document.getElementById("cityInput"); 
  const feelLike = document.getElementById("feeels_like");
  const Humidityy = document.getElementById("Humidityy");
  const MaxTempp = document.getElementById("Max_tempp");
  const MinTempp = document.getElementById("Min_tempp");
  const Sunrisee = document.getElementById("Sunrisee");
  const Sunsett = document.getElementById("Sunsett");
  const Tempp = document.getElementById("Tempp");
  const WindDegreess = document.getElementById("Wind_degreess");
  
  
  const getWeather = (city) => {
	cityName.innerHTML = city;
	cityNamee.innerHTML = city;
  
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	  .then(response => response.json())
	  .then((response) => {
		console.log(response);
		temp.innerHTML = response.temp;
		temp2.innerHTML = response.temp;
		feelsLike.innerHTML = response.feels_like;
		humidity.innerHTML = response.humidity;
		humidity2.innerHTML = response.humidity;
		min_temp.innerHTML = response.min_temp;
		max_temp.innerHTML = response.max_temp;
		windSpeed.innerHTML = response.wind_speed;
		windSpeed2.innerHTML = response.wind_speed;
		windDegrees.innerHTML = response.wind_degrees;
		sunrise.innerHTML = response.sunrise;
		sunset.innerHTML = response.sunset;
		feelLike.innerHTML = response.feels_like;
		Humidityy.innerHTML = response.humidity;
		MaxTempp.innerHTML = response.max_temp;
		MinTempp.innerHTML = response.min_temp;
		Sunrisee.innerHTML = response.sunrise;
		Sunsett.innerHTML = response.sunset;
		Tempp.innerHTML = response.temp;
		WindDegreess.innerHTML = response.wind_degrees;
		WindSpeedd.innerHTML = response.wind_speed;
	})
	  
	  .catch(err => console.error(err));
  }
  
  submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(cityInput.value); 
  });
  
  getWeather("Quetta");
  