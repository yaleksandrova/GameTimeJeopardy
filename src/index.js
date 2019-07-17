// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import domUpdates from './domUpdates'


// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

//event listener for clue button, for name submit button which will call DOM updates methods
//e.target
//check()

$(document).ready(function () {

  domUpdates.displayCluesIds()


  $('#js-row-0').click(function() {
    domUpdates.displayCluesQuestions();
  })
});