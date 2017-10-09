
var btnChangeHeader = document.getElementById('btn-swap-header');
var pageHeader = document.getElementById('page-header');


btnChangeHeader.addEventListener('click', () => {
  console.log('Button Clicked');

  if (pageHeader.innerText === 'This is the 1st Header') {
    pageHeader.innerText = 'This is the 2nd Header';
  } else {
    pageHeader.innerText = 'This is the 1st Header';
  }

});