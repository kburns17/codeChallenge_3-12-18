
let divCounter = 0;

$(document).ready(readyNow);

function readyNow() {
  appendDom();
} //end readyNow


function appendDom() {
  $('#generate').on('click', addDiv);
  $('#generate').on('click', countDiv);
  $('#header').addClass('red');

}//end appendDom

function addDiv() {
    console.log('in addDiv');
  $('#header').append('<h1>Coding Challenge 3-12-18</h1>');
  $('#header').append('<button id="swap">Swap</button>')
  $('#header').append('<button id="delete">Delete</button>')
  $('#swap').on('click', swapColor);


} //end addDiv

function countDiv() {
  divCounter++;
  console.log('in counter');
  $('#counter').text('div count: ' + divCounter)
} // end countDiv

function swapColor() {
  console.log('in swap color');
    if (  $('#header').addClass('red')) {
      $('#header').addClass('yellow')
    } else {
    
    }
}
