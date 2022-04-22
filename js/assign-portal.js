

document.addEventListener("DOMContentLoaded", function() { 
  // use query selector to get the the span element
  const year = document.querySelector('#year');
  // update the text to be the current year
  year.textContent = new Date().getFullYear();

  //update the last modified text
  document.getElementById("last-modified").innerHTML = document.lastModified;
});





//  DISPLAY TODAYS DATE:
//set display options for date object
//const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
//set the 'currentdate' elements text to today's date
//document.getElementById('').textContent = new Date().toLocaleDateString('en-US', options);
