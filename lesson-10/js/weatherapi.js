// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//API URL with arguments  
const APIurl = "//api.openweathermap.org/data/2.5/weather?id=5562087&appid=7c894b69ae7ae90c1d0eac7949ebdf76&units=imperial"

fetch(APIurl)
  .then((response) => response.json())
  .then((weatherinfo) => {

    console.log(weatherinfo); // this is temporary for development only

    currentTemp.innerHTML = `<strong>${weatherinfo.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherinfo.weather[0].icon}.png`;
    const desc = weatherinfo.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

  });




