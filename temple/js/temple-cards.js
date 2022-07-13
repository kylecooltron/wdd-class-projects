


const requestURL = 'json/data.json';
let card_button_list = [];
let cards_created = 0;

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(displayTemple);
  });


  function displayTemple(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let portrait = document.createElement('img');
    let like = document.createElement('button');

    //'LIKE' button/interface

    //address, telephone, email, services, history, ordinance schedule, session schedule, temple closure schedule

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${temple.name}`;
  
    // Change the textContent property of the p1 element to contain the prophet's birth date
    p1.textContent = `Date of Birth: ${temple.history.dedicated}`
    
    // Change the textContent property of the p2 element to contain the prophet's birth place
    p2.textContent = `Place of Birth: ${temple.address}`

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', temple.imageurl);
    portrait.setAttribute('alt', `Portait of ${temple.name} Latter-day Temple`);
    portrait.setAttribute('loading', 'lazy');
  
    // Set text content of like button cards_created
    let liketext = window.localStorage.getItem(`liked-temples-ls ${cards_created}`);
    if (liketext){
      like.textContent = liketext;
    }else{
      like.textContent = "👍 Like";
    }


    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);
    card.appendChild(like);
  
    card_button_list.push(like);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#temple-card-container').appendChild(card);

    //increment
    cards_created += 1;
  }

  

  document.addEventListener('click',function(e){
    if(e.target){
          // for each button
          for(i=0; i<card_button_list.length; i++){
            // check if it was clicked
            if( e.target== card_button_list[i])
            {
                // do something
                if(card_button_list[i].textContent == "👍 Like"){
                  card_button_list[i].textContent = "👍 You Like This"
                }else{
                  card_button_list[i].textContent = "👍 Like"
                }
                
                // store the time we are visiting now
                localStorage.setItem(`liked-temples-ls ${i}`, card_button_list[i].textContent);
            }
          }
     }
 });

