
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '765ae348e1msh703264b178e7641p14874fjsn5c733f0a49e6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {

	cityName.innerHTML = city;
	cityName2.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			temp.innerHTML = response.temp
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed

		})
		.catch(err => console.error(err));

}

searchButton.addEventListener("click", (e) => {
	e.preventDefault();  //Prevents From Reloading
	getWeather(city.value)
})
getWeather("Mumbai");
