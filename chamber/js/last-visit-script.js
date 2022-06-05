  
  /* USE LOCAL STORAGE TO DISPLAY DAYS SINCE LAST VISIT */
  
  // display element
  const lastvisitElement = document.getElementById("last-visit")
  //1000 milliseconds in 1 second, 60 seconds in 1 minute, 60 minutes in an hour, 24 hours in 1 day.
  const msInDay = 1000 * 60 * 60 * 24;
  // get the stored value in localStorage
  let lastVisitTime = Number(window.localStorage.getItem("visittime-ls"));
  // determine if this is the first visit or display the number of visits.
  if (lastVisitTime !== 0) {
    //calculate
    lastvisitElement.textContent = Math.round((now.getTime() - lastVisitTime)/msInDay);
  } else {
    lastvisitElement.textContent = `This is your first visit!`;
  }
  // store the time we are visiting now
  localStorage.setItem("visittime-ls", now.getTime());