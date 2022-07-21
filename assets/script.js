const apiKey = "03dfa929ee4dd9dfb9feba4929296d27";
const submit = document.getElementById("submit");
const destinationCity = document.getElementById("cityName");

function retrieveWeather(e) {
  e.preventDefault();
  let destination = destinationCity.value; 
  let getWeather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    destination +
    "&appid=" +
    apiKey;
  getWeatherUrl = getWeather.replace(/\s/g, '&').trim();
  console.log(getWeatherUrl)
  fetch(getWeatherUrl).then(function(response) {
    return response.json();
    })
}


submit.addEventListener("click", retrieveWeather)
