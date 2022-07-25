
// This script handles the current weather and 4-day forecast on the home page

// CURRENT WEATHER API URL with arguments  
const weather_APIurl = "//api.openweathermap.org/data/2.5/weather?id=5378538&appid=7c894b69ae7ae90c1d0eac7949ebdf76&units=imperial"

// FORECAST API URL with arguments  
const forecast_APIurl = "//api.openweathermap.org/data/2.5/forecast?id=5378538&appid=7c894b69ae7ae90c1d0eac7949ebdf76&units=imperial"

function interpolate_color(startcolor, endcolor, percent){
  // interpolates between two rgb colors
  let rgb = [];
  rgb.push(Math.round(startcolor[0] + (endcolor[0] - startcolor[0]) * percent));
  rgb.push(Math.round(startcolor[1] + (endcolor[1] - startcolor[1]) * percent));
  rgb.push(Math.round(startcolor[2] + (endcolor[2] - startcolor[2]) * percent));
  return rgb;
}

function get_temp_color(temperature){
  // gets a color based on temerature (blue is cold to red is hot)
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

fetch(weather_APIurl)
  .then((response) => response.json())
  .then((weatherinfo) => {

    // select HTML elements to edit with current weather information
    const currentTemp = document.querySelector('#current-temp');
    const currentTempText = document.querySelector('.weather-temp');

    const currentHumi = document.querySelector('#current-humidity');
    const currentWind = document.querySelector('#current-wind');

    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('#weather-caption');

    // set temperature and temperature text color
    let temp = weatherinfo.main.temp.toFixed(0);
    currentTemp.innerHTML = `<strong>${temp}</strong>`;
    currentTempText.style.color = get_temp_color(temp);
    // set humidity and wind text value
    currentHumi.innerHTML = `<strong>${weatherinfo.main.humidity.toFixed(0)}</strong>`;
    currentWind.innerHTML = `<strong>${weatherinfo.wind.speed.toFixed(0)} mph</strong>`;
    // set weather icon
    const iconsrc = `https://openweathermap.org/img/w/${weatherinfo.weather[0].icon}.png`;
    const desc = weatherinfo.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    // weather icon caption
    captionDesc.textContent = desc;
});


function getDayName(dt)
{
    // get the day name based on openweather's dt attribute
    let date = new Date(dt * 1000);
    return date.toLocaleDateString(getDayName, { weekday: 'long' });     
}

function displayForecast(forecastinfo){
  // select HTML elements to add forecast elements to
  const forecastDiv = document.querySelector("#forecast-div")
  // crawl through the json data entries
  let i = 0;
  // keep track of the day name so we don't display the same day twice
  let day_name_last = "";
  // find at least four days to display
  for(let j=0; j<4; j++){
    // get the name of this day
    let day = getDayName(forecastinfo.list[i].dt);
    //open weather returns weather for every 3 hours
    while(day_name_last == day){
      // increment which day we are looking at in the data
      i += 1;
      // check to see if the day is different before continuing
      day = getDayName(forecastinfo.list[i].dt);
    }
    //update for next "different day" check
    day_name_last = day;
    //get temperature
    let temp = forecastinfo.list[i].main.temp.toFixed(0);
    // create empty elements for this forecast card
    let div = document.createElement('div');
    let tempDiv = document.createElement('div');
    let h3 = document.createElement('h3');
    let label = document.createElement('p');
    label.innerHTML = "day temp";
    label.style = "color:white;font-size:small";
    // set text of temp
    tempDiv.append(label);
    tempDiv.innerHTML += `<strong>${temp}</strong>`;
    tempDiv.style.color = get_temp_color(temp);
    // set day name display
    h3.textContent = day;
    //append all to central div
    div.append(h3);
    div.append(tempDiv);
    //append central div to page
    forecastDiv.append(div);
    // increment which index we are looking at in the data
    i += 1;
  }
}

fetch(forecast_APIurl)
  .then((response) => response.json())
  .then((forecastinfo) => {
    // apply json data to the DOM
    displayForecast(forecastinfo);
  });




