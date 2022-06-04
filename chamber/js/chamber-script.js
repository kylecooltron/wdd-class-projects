//CHAMBER PROJECT SCRIPT


  /* REUSED VARIABLES*/
  const now = new Date();

  /* ANNOUNCEMENT BANNER */

  const announcementbanner = document.querySelector(".announcement-banner");
  if( now.getDay() === 2 || now.getDay() === 3){
    //if today is Monday or Tuesday, display the announcement banner
    announcementbanner.style.display = "flex";
  }else{
    //otherwise do not display it
    announcementbanner.style.display = "none";
  }


  /* HAMBURGER MENU */

  let hambutton = document.querySelector('.ham');
  const mainnav = document.querySelector('.navigation')
  //add functionality for responsive hamburger menu
  hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


  /* HEADER DATE */

  const datefield = document.querySelector(".date");
  // derive the current date using a date object
  const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
  //set dates text to full date
  datefield.innerHTML = `<em>${fulldate}</em>`;


  /* FOOTER DATE and LAST MODIFIED */

  // update the text in footer to be the current year
  document.querySelector('#year').textContent = new Date().getFullYear();
  //update the last modified
  document.getElementById("modified").innerHTML = document.lastModified;

  // To solve the mid resizing issue with responsive class on
  window.onresize = () => {if (window.innerWidth > 1028) mainnav.classList.remove('responsive')};


