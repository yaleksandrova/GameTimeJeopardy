let clues;
let game;

fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data')
  .then(response => response.json())
  .then(gameData => {
    clues = new Clues(gameData.data);
    game = new Game(clues);
  })
  .catch(error => console.log(error))

import Clues from '../src/Clues'
import Player from '../src/Player'
import Game from '../src/game';
import Round from '../src/round'
import Turn from '../src/turn'

// import Data from '../src/data/data'
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
  game.startRound();
  let player1 = new Player($('#js-input-player-1').val(), 1)
  let player2 = new Player($('#js-input-player-2').val(), 2)
  let player3 = new Player($('#js-input-player-3').val(), 3)
  game.players.push(player1, player2, player3)
  game.gameStart();
  domUpdates.updatePlayerScore(player1, player2, player3)
  domUpdates.displayCluesIds(clues)
  domUpdates.displayCategories(clues)
  domUpdates.updatePlayerNames()

  setTimeout(function() {
    if (window.confirm("player 1 it's your turn! Are you ready?")) {
      var allCards = document.getElementsByClassName('card');

      // for(let item of allCards ) {
      //   console.log(item.id)
      // }
      for (var i = 0; i < allCards.length; i++) {
        if (allCards[i].id && allCards[i].id != "") {
          let test = allCards[i]
          document.getElementById(allCards[i].id).addEventListener("click", function() {
            onCardClick(test)
          });
        }
      }

      function onCardClick(card) {

        //HERE WE WOULD HAVE OUR CARD FLIP AND SHOW THE Q

        domUpdates.displayInputFieldForGuess()
        $('#js-guess-button').click(function(e) {

          let categorySelected = $(card).children('p')[0].id
          let valueSelected = $(card)[0].outerText;
          let guessInputted = $('#js-input-guess-1').val()
          let turn = new Turn(categorySelected, valueSelected, guessInputted, player1);

          turn.evaluateGuess(clues);
          turn.giveFeedback(clues);

          domUpdates.displayRightOrWrongMessage(turn)
        })
      }
    } else {
      alert("You may exit the game");
      return false;
    }
  }, 2000);

})
