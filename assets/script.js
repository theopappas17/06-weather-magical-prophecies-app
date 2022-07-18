var apiKey = "03dfa929ee4dd9dfb9feba4929296d27";
var cityName = document.getElementById("cityName");

function retrieveWeather(cityName) {
  var getWeather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    apiKey;
  console.log(getWeather);
}

retrieveWeather(cityName);
