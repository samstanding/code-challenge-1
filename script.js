var count = 0;
$(document).ready(function () {
$('.generateButton').on('click', function () {
  console.log('on click');
  $('.content').append('<div class="newDiv"></div>');
  count++;
  $('.newDiv').append('<p>Button clicked: '+ count +' times</p>' );//this will add a new div like a million times
  $('.newDiv').append('<button class="swapButton">Swap</button>');
  $('.newDiv').append('<button class="deleteButton">Delete</button>');

}); // end initial click event listener

$('.content').on('click','.newDiv', '.swapButton', function () {
  console.log('this work?');//why are you deleting my divs!?!?!
  $(this).toggleClass('buttonSwapped','addOrRemove');



});//end swap button

// $('.content').on('click','.newDiv','.deleteButton', function () {
//   $(this).remove();
//
// });//end delete button

});

// function makeNew () {
//   $('.newDiv').append('<p>Button clicked: '+ count +' times</p>' );//this will add a new div like a million times
//   $('.newDiv').append('<button class="swapButton">Swap</button>');
//   $('.newDiv').append('<button class="deleteButton">Delete</button>');
// }
