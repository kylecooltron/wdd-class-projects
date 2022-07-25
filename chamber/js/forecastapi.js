
// select HTML elements to edit
const forecastDiv = document.querySelector("#forecast-div")

//API URL with arguments  
const APIurl = "//api.openweathermap.org/data/2.5/forecast?id=5562087&appid=7c894b69ae7ae90c1d0eac7949ebdf76&units=imperial"


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

function getDayName(dt)
{
    let date = new Date(dt * 1000);
    
    return date.toLocaleDateString(getDayName, { weekday: 'long' });    
        
}

function displayForecast(forecastinfo){

  let i = 0;
  let day_name_last = "";
  
  for(let j=0; j<4; j++){

    
    let day = getDayName(forecastinfo.list[i].dt);

    //open weather returns weather for every 3 hours
    //so make sure the day is different before continuing
    while(day_name_last == day){
      i += 1;
      day = getDayName(forecastinfo.list[i].dt);
    }
    //update for next check
    day_name_last = day;

    let div = document.createElement('div');
    let tempDiv = document.createElement('div');
    let h3 = document.createElement('h3');

    //get temperature
    let temp = forecastinfo.list[i].main.temp.toFixed(0);

    let label = document.createElement('p');
    label.innerHTML = "day temp";
    label.style = "color:white;font-size:small";

    // set text of temp
    tempDiv.append(label);
    tempDiv.innerHTML += `<strong>${temp}</strong>`;
    tempDiv.style.color = get_temp_color(temp);

    // update date
    h3.textContent = day;
   
   
    //append all to main div
    div.append(h3);
    div.append(tempDiv);

    //append main div to page
    forecastDiv.append(div);


    i += 1;
  }

}

fetch(APIurl)
  .then((response) => response.json())
  .then((forecastinfo) => {

    console.log(forecastinfo)

    displayForecast(forecastinfo);

    /*
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
    */


  });




