
var count = 0;
$(document).ready(function () {
console.log('jq');
$('.generateButton').on('click', function () {
  console.log('on click');
  $('.content').append('<div id="newDiv"</div>');
  count++;
  makeNew();
}); // end initial click event listener
$('.content').on('click','#newDiv', '.swapButton', function () {
  console.log('this work?');
  $(this).addClass('buttonSwapped');



});//end swap button

$('.content').on('click','#newDiv','.deleteButton', function () {
  $(this).parent().remove();

});//end delete button

});

function makeNew () {
  // $('.generateButton').on('click', function() {
  //
  // } );
  $('#newDiv').append('<p>Button clicked: '+ count +' times</p>' );//this will add a new div like a million times
  $('#newDiv').append('<button class="swapButton">Swap</button>');
  $('#newDiv').append('<button class="deleteButton">Delete</button>');
}
