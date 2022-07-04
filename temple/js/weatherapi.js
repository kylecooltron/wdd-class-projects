
import update_windchil from './windchill.js';

// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const currentTempText = document.querySelector('.weather-temp');

const currentHumi = document.querySelector('#current-humidity');
const currentWind = document.querySelector('#current-wind');

const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//API URL with arguments  
const APIurl = "//api.openweathermap.org/data/2.5/weather?id=5562087&appid=7c894b69ae7ae90c1d0eac7949ebdf76&units=imperial"



function interpolate_color(startcolor, endcolor, percent){
  let rgb = [];
  rgb.push(Math.round(startcolor[0] + (endcolor[0] - startcolor[0]) * percent));
  rgb.push(Math.round(startcolor[1] + (endcolor[1] - startcolor[1]) * percent));
  rgb.push(Math.round(startcolor[2] + (endcolor[2] - startcolor[2]) * percent));
  return rgb;
}

function get_temp_color(temperature){
  let tempcolor = [0,0,0];
  // adjust temperature to be a useful decimal
  temperature = ((temperature*1.25)-30)*0.01;
  if(temperature <= 0.5){   // blue to yellow
  tempcolor = interpolate_color([0,90,200],[255,255,0],temperature*2);
  }else{                    // yellow to red
  tempcolor = interpolate_color([255,255,0],[255,0,0],(temperature-0.5)*2);
  }
  //return as rgb(0,0,0) string
  return "rgb(" + tempcolor[0] + "," + tempcolor[1] + "," + tempcolor[2] + ")";
}


fetch(APIurl)
  .then((response) => response.json())
  .then((weatherinfo) => {

    //set temperature and temperature text color
    let temp = weatherinfo.main.temp.toFixed(0);
    currentTemp.innerHTML = `<strong>${temp}</strong>`;
    currentTempText.style.color = get_temp_color(temp);


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




