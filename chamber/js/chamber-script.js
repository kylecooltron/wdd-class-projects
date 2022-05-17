






window.onload=function(){

  /* add functionality for responsive hamburger menu*/
let hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

  // update the text to be the current year
  document.querySelector('#year').textContent = new Date().getFullYear();

  //update the last modified text
  document.getElementById("modified").innerHTML = document.lastModified;

}

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 1028) mainnav.classList.remove('responsive')};
