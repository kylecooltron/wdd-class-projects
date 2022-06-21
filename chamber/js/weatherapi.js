
import update_windchil from './windchill.js';

// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const currentHumi = document.querySelector('#current-humidity');
const currentWind = document.querySelector('#current-wind');

const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//API URL with arguments  
const APIurl = "//api.openweathermap.org/data/2.5/weather?id=5562087&appid=7c894b69ae7ae90c1d0eac7949ebdf76&units=imperial"

fetch(APIurl)
  .then((response) => response.json())
  .then((weatherinfo) => {

    console.log(weatherinfo); // this is temporary for development only

    currentTemp.innerHTML = `<strong>${weatherinfo.main.temp.toFixed(0)}</strong>`;
    currentHumi.innerHTML = `<strong>${weatherinfo.main.humidity.toFixed(0)}</strong>`;
    currentWind.innerHTML = `<strong>${weatherinfo.wind.speed.toFixed(0)}</strong>`;
    
    // weather icon
    const iconsrc = `https://openweathermap.org/img/w/${weatherinfo.weather[0].icon}.png`;
    const desc = weatherinfo.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    // weather icon caption
    captionDesc.textContent = desc;

    update_windchil();

  });




