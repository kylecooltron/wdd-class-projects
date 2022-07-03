
const requestURL = 'json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    chooseHighlights(businesses);
  });


  function chooseHighlights(businesses){

    const filteredMembership = businesses.filter(function (business) {
        return business.membership == "gold" ||
              business.membership == "silver";
    });

    // shuffle filteredMambership
    const shuffledMembership = filteredMembership.sort(() => 0.5 - Math.random());

    // use first three shuffled members to populate spotlight elements
    displayHighlight(shuffledMembership[0], "#spotlight1");
    displayHighlight(shuffledMembership[1], "#spotlight2");

    //slice off the two we've just used from the list
    const slicedMembership = shuffledMembership.slice(2);

    // make sure the last spotlight is gold
    const filteredGold = slicedMembership.filter(function (business) {
      return business.membership == "gold";
    });

    // populate element
    displayHighlight(filteredGold[0], "#spotlight3");

  }

  
  function displayHighlight(business, elementID) {

    // Create elements to add to the document
    let h3 = document.createElement('h3');
    let logoImg = document.createElement('img');
    let divSlogan = document.createElement('div');
    let hr = document.createElement('hr');
    let divSpotinfo = document.createElement('div');
    let a = document.createElement('a');

    // Change the textContent property of the h23 element to contain the business name
    h3.innerHTML = `${business.name} <span class="tiny-text">&copy;</span>`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logoImg.setAttribute('src', business.imageurl);
    logoImg.setAttribute('alt', `Logo image for ${business.name}`);
    logoImg.setAttribute('loading', 'lazy');

    // Update textContent of slogan div
    divSlogan.textContent = `"${business.slogan}"`;
    divSlogan.style.fontStyle = "italic";
    divSlogan.style.color = "white";
 
    //
    hr.style.margin = "1em";
    // Update textContent of spotinfo div
    divSpotinfo.innerHTML = "<div>" + business.address + ", Smith River</div>";
    divSpotinfo.innerHTML += business.phone + " | ";
    divSpotinfo.classList.add('spotinfo');

    // Change the textContent and href property of the a element to contain the business website
    a.textContent = business.website;
    a.setAttribute('href', "https://www.youtube.com/user/kylecoulon");
  
    // append the website link into the spotinfo div
    divSpotinfo.appendChild(a);

    // Get container
    const spotlightContainer = document.querySelector(elementID)

    spotlightContainer.removeChild(spotlightContainer.firstElementChild);

    // Add/append the spotlightContainer with the new elements
    spotlightContainer.appendChild(h3);
    spotlightContainer.appendChild(logoImg);
    spotlightContainer.appendChild(divSlogan);
    spotlightContainer.appendChild(hr);
    spotlightContainer.appendChild(divSpotinfo);



  }
 

