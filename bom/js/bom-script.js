
//script adds the user's input to a list element on the page

//make sure the browser is fully loaded
window.onload=function(){


const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

//when the input button is clicked
button.addEventListener('click', () => {

  const myItem = input.value;
  //make sure the user typed something
  if(myItem != ""){
  //clear the input box 
  input.value = '';
  //create new elements
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');
  //append them to to ul
  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);
  //add listener to remove button to remove the listItem and its children
  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });
  //focus on the input button
  input.focus();
}
});

}