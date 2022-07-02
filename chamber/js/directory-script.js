
const requestURL = 'json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });


  function displayBusinesses(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let iconImg = document.createElement('img');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    iconImg.setAttribute('src', business.imageurl);
    iconImg.setAttribute('alt', `Icon image for ${business.name}`);
    iconImg.setAttribute('loading', 'lazy');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${business.name}`;
  
    // Change the textContent property of the p1 element to contain the business address
    p1.textContent = business.address;

    // Change the textContent property of the p2 element to contain the business phone
    p2.textContent = business.phone;

    // Change the textContent and href property of the a element to contain the business website
    a.textContent = business.website;
    a.setAttribute('href', "https://www.youtube.com/user/kylecoulon");
  
    // Add/append the section(card) with the h2 element
    card.appendChild(iconImg);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(a);
  
    // Add/append the existing HTML div with the '.directory-grid' class with the section(card)
    document.querySelector('.directory-grid').appendChild(card);
  }


  //handle buttons for changing from panel to list view
  const directory = document.querySelector('.directory-grid')
  const dirpanelbutton = document.querySelector('#dir-panel');
  const dirlistbutton = document.querySelector('#dir-list');


  dirpanelbutton.addEventListener('click', () => {directory.classList.add('panelview')}, false);
  dirlistbutton.addEventListener('click', () => {directory.classList.remove('panelview')}, false);
