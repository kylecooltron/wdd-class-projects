


//wait until page is fully loaded
window.onload=function(){

let temp= 56;
let wSpeed= 16;
let windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

windChill= Math.round(windChill);

document.getElementById("windChill").innerHTML= windChill;

}