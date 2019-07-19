let gameData;


import Clues from '../src/Clues';

import Player from '../src/Player';

import Game from '../src/game';

import Round from '../src/round';

import Turn from '../src/turn';


// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import domUpdates from './domUpdates'

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';



//event listener for clue button, for name submit button which will call DOM updates methods
//e.target
//check()



// $('#js-row-0').click(function() {
//   // domUpdates.displayCluesQuestions();
// })

$('#js-names-button').click(function(e) {
  e.preventDefault();


  let displayJeopardy = document.querySelector("#display-jeopardy");
  fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data')
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      let clues = new Clues(result.data)
      clues.shuffleCategories()
      clues.pickCategories()
      clues.findMatchingQuestions()
      let players = [];
      let player1 = new Player($('#js-input-player-1').val(), 1)
      let player2 = new Player($('#js-input-player-2').val(), 2)
      let player3 = new Player($('#js-input-player-3').val(), 3)
      players.push(player1, player2, player3)
      let game = new Game(clues, players)
      let round = new Round(players, 1, clues.categories, clues.cards)
      // let turn = new Turn(category, value, guess, player)
      domUpdates.displayCluesIds(clues)
      domUpdates.displayCategories(clues)   
      domUpdates.displayPlayersName(players)
      console.log('sup', round)
})
    });

$('#js-row-8').click(function(e) {
  e.preventDefault();
  let clues = new Clues(gameData)
})

