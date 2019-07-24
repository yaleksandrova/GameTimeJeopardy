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

import domUpdates from './domUpdates'

import $ from 'jquery';

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
  domUpdates.displayCluesIds(clues)
  domUpdates.displayCategories(clues)
  domUpdates.updatePlayerNames()
  $('#js-input-names').hide();
  $('#js-jeopardy-board').show();
  $('#js-players-heading').text(game.round.currentTurn.currentPlayer.name)

$('.card').on('click', function(e) {
  game.round.currentTurn.currentCard = $(e.target)[0].id;
  let question = $(e.target)[0].innerText;
  let clue = clues.cards.find(clue => {
  return clue.question === question;
  })

  game.round.currentTurn.currentClue = clue;
})

$('#js-guess-button').click(function(e) {
  e.preventDefault();
  let guess = $('#js-guess-input').val();
  let answer = game.round.currentTurn.evaluateGuess(guess)
  $('#js-player-one-points').text(game.players[0].score)
  $('#js-player-two-points').text(game.players[1].score)
  $('#js-player-three-points').text(game.players[2].score)
  $('#js-players-heading').text(game.round.currentTurn.currentPlayer.name)
})
  
})
