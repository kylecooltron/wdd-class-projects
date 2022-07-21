


const requestURL = 'json/data.json';
let card_button_list = [];
let cards_created = 0;

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.forEach(displayTemple);
  });


  function displayTemple(temple) {

    // Create elements to add to the document
    let card = document.createElement('section');

    // temple title
    let h2_title = document.createElement('h2');
    // address of temple
    let p_address = document.createElement('p');
    // telephone number
    let p_telephone = document.createElement('p');
    // email address
    let p_email = document.createElement('p');
    // services
    let div_services = document.createElement('div');
    let h3_services = document.createElement('h3');
    let ul_services = document.createElement('ul');
    // history
    let div_history = document.createElement('div');
    let h3_history = document.createElement('h3');
    let dl_history = document.createElement('dl');
    // ordinance schedule
    let p_ordinance = document.createElement('p');
    // session schedule
    let p_session = document.createElement('p');
    // closure schedule
    let div_closures = document.createElement('div');
    let h3_closures = document.createElement('h3');
    let ul_closures = document.createElement('ul');
    // image of temple
    let portrait = document.createElement('img');
    let image_container = document.createElement('div');
    let like = document.createElement('button');
    
    // temple name
    h2_title.textContent = `${temple.name}`;
    // address
    p_address.innerHTML = `<b>Address:</b></br> ${temple.address}`;
    // telephone number
    p_telephone.innerHTML = `<b>Telephone:</b></br>${temple.phone}`;
    // email
    p_email.innerHTML = `<b>Email:</b></br>${temple.email}`;
    // services 
    h3_services.textContent = `Services:`;
    temple.services.forEach(element => ul_services.innerHTML += `<li>${element}</li>`);
    div_services.appendChild(h3_services)
    div_services.appendChild(ul_services)
    // history
    h3_history.textContent = `History:`;
    Object.entries(temple.history).forEach(([key, value]) => {
      dl_history.innerHTML += `<dt>${key}</dt><dd>${value}</dd>`;
    });
    div_history.appendChild(h3_history)
    div_history.appendChild(dl_history)
    // ordinance shedule
    p_ordinance.innerHTML = `<b>Ordinance Schedule:</b></br>${temple.ordinance}`;
    // session shedule
    p_session.innerHTML = `<b>Session Schedule:</b></br>${temple.session}`;
    // closure schedule
    h3_closures.textContent = `Closures:`;
    temple.closures.forEach(element => ul_closures.innerHTML += `<li>${element}</li>`);
    div_closures.appendChild(h3_closures)
    div_closures.appendChild(ul_closures)
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    portrait.setAttribute('src', temple.imageurl);
    portrait.setAttribute('alt', `Portait of ${temple.name} Latter-day Temple`);
    portrait.setAttribute('loading', 'lazy');
    // Check for local storage value
    let liketext = window.localStorage.getItem(`liked-temples-ls ${cards_created}`);
    // Set text content of like button
    if (liketext == "👍 You Like This"){ like.textContent = liketext; like.style.backgroundColor="white";}else{ like.textContent = "👍 Like"; }
    // Add it to our list
    card_button_list.push(like);
    // Add/append portait and like button to the image container div
    image_container.appendChild(portrait);
    image_container.appendChild(like);
    image_container.classList.add("temple-card-imgbox");

    // Add/append the new elements to the cards starting with temple title
    card.appendChild(h2_title)
    // address of temple
    card.appendChild(p_address)
    // telephone number
    card.appendChild(p_telephone)
    // email address
    card.appendChild(p_email)
    // services
    card.appendChild(div_services)
    // history
    card.appendChild(div_history)
    // ordinance schedule
    card.appendChild(p_ordinance)
    // session schedule
    card.appendChild(p_session)
    // closure schedule
    card.appendChild(div_closures)
    // image of temple
    card.appendChild(image_container);

    // Add/append the card to the .cards class element
    document.querySelector('.cards').appendChild(card);

    //increment cards created
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
                  card_button_list[i].style.backgroundColor="white";
                }else{
                  card_button_list[i].textContent = "👍 Like"
                  card_button_list[i].style.backgroundColor="rgb(154, 172, 187)";
                }
                
                // store the time we are visiting now
                localStorage.setItem(`liked-temples-ls ${i}`, card_button_list[i].textContent);
            }
          }
     }
 });

