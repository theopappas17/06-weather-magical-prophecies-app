const apiKey = "03dfa929ee4dd9dfb9feba4929296d27";
const submit = document.getElementById("submit");
const destinationCity = document.getElementById("cityName");
const displayWeather = document.getElementById("weather");
const time = moment();
const now = document.getElementById("moment");
const temp = document.getElementById("temperature")

function retrieveWeather() {
  //Get the value of the submit field
  let destination = destinationCity.value;
  //Create the URL to get weather data 
  let getWeather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    destination +
    //Exclude minute by minute data
    "&exclude=minutely&appid=" +
    apiKey;
    //Replace any spaces in a city with an &, which makes the URL valid, e.g. New York
  getWeatherUrl = getWeather.replace(/\s/g, '&').trim();
  //Console.log--I don't know. Ideally they should be removed, but it's not like the user sees them and they help one remember important points where one should check the code. I suppose you could just leave a comment like check code here.
  console.log(getWeatherUrl);
  //Uses the Url made by getWeatherUrl to access Open Weather Map API
  fetch(getWeatherUrl)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    //Displays data from the response json on HTML
    temp.innerHTML = data.main.temp;
    displayWeather.innerHTML = data.weather[0].description;
    });
  }

function fluffyClouds() {
  now.innerHTML = time.format("dddd, MMMM Do");
}

//Calls function retrieveWeather after click on submit button
submit.addEventListener("click", retrieveWeather);
fluffyClouds();