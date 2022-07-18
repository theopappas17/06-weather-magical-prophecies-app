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
  console.log(destination);
  console.log(getWeather);
}

submit.addEventListener("click", retrieveWeather)
