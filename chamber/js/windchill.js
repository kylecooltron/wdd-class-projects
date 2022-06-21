

export default function update_windchil(){

//extract values to calculate wind chill from page
let temp = Number(document.querySelector("#current-temp").innerHTML);
let wSpeed= Number(document.querySelector("#current-wind").innerHTML);
// default windChill value is "N/A"
let windChill = "N/A";
// "Wind Chill Temperature is officially defined for temperatures at or below (50 °F) and wind speeds above (3.0 mph).
if(temp < 50 && wSpeed > 3.0){
//calculate
windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
windChill= Math.round(windChill);
}else{
  // if wind chill is N/A Hide the unit text (°F)
  document.getElementById("windchill-unit").style.display = "none";
}

// display the calculated windchill
document.getElementById("windchill").innerHTML= windChill;

}