
let divCounter = 0;

$(document).ready(readyNow);

function readyNow() {
  appendDom();
} //end readyNow

function appendDom() {
  $('#generate').on('click', addDiv);
  $('#generate').on('click', countDiv);

}//end appendDom

function addDiv() {
    console.log('in addDiv');
  $('#header').append('<h1>Coding Challenge 3-12-18</h1>');
} //end addDiv


function countDiv() {
  divCounter++;
  console.log('in counter');
  $('#counter').text('div count: ' + divCounter)
};
