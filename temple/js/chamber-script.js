//CHAMBER PROJECT SCRIPT


  /* REUSED VARIABLES*/
  const now = new Date();

    /* BAD WEATHER BANNER */

  // hide bad weather banner (default)
  const badweatherbanner = document.querySelector(".weather-warning-banner");
  badweatherbanner.style.display = "none";
    
  //API URL with arguments  
  const APIAlerturl = "//api.openweathermap.org/data/2.5/onecall?lat=41.55&lon=-124.08&exclude=hourly,daily&appid=7c894b69ae7ae90c1d0eac7949ebdf76";

  fetch(APIAlerturl)
    .then((response) => response.json())
    .then((weatherinfo) => {
      // IF THERE IS BAD WEATHER
      if(weatherinfo.alerts != undefined){
      badweatherbanner.innerHTML += `<strong>EVENT: ${weatherinfo.alerts.event} DESCRIPTION: ${weatherinfo.alerts.description}</strong>`;
      badweatherbanner.style.display = "block";
      }
    
  });
  
  function closeWeatherAlert(){
    badweatherbanner.style.display = "none";
  }



  /* HAMBURGER MENU */

  let hambutton = document.querySelector('.ham');
  const mainnav = document.querySelector('.navigation')
  //add functionality for responsive hamburger menu
  hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


  /* HEADER DATE */

  // derive the current date using a date object
  const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

  let datefields = document.querySelectorAll(".date");
  for (let i = 0; i < datefields.length; i++) {
  //set dates text to full date
  datefields[i].innerHTML = `<em>${fulldate}</em>`;
  }



  /* FOOTER DATE and LAST MODIFIED */

  // update the text in footer to be the current year
  document.querySelector('#year').textContent = new Date().getFullYear();
  //update the last modified
  document.getElementById("modified").innerHTML = document.lastModified;

  // To solve the mid resizing issue with responsive class on
  window.onresize = () => {if (window.innerWidth > 1028) mainnav.classList.remove('responsive')};


  