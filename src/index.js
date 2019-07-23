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

$('#js-jeopardy-board').hide();
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
  $('#js-input-names').hide();
  $('#js-jeopardy-board').show();
  // domUpdates.displayCurrentQuestion(e)

    $('.card').on('click', function(e) {
  
      game.round.currentTurn.currentCard = $(e.target)[0].id;


      let question = $(e.target)[0].innerText;
      let clue = clues.cards.find(clue => {
        return clue.question === question;
      })
      game.round.currentTurn.currentClue = clue;
      console.log('clue object', clue)
    })
  $('#js-guess-button').click(function(e) {
    e.preventDefault();
    let guess = $('#js-guess-input').val();
    let answer = game.round.currentTurn.evaluateGuess(guess)
    console.log('answer', answer)
    console.log(game.round.currentTurn.currentCard);
    
    domUpdates.giveFeedback(answer, game.round.currentTurn.currentCard);
    game.round.changePlayer();
  })
  
})
