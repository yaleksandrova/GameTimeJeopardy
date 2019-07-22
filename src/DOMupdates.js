import $ from 'jquery';
import Clues from './Clues';
import Data from '../src/data/data';
import Player from "./Player";

import Turn from '../src/Turn'

let domUpdates = {


  displayPlayersName(data) {
    const players = data.players.map(person => {
      return person.name;
    })
    return players;
  },



  //user interaction
  //method that checksDD() {
  //if click is DD
  //}
  //event listener goes in index.js

  //show current round in top of the screen


  //display the categories



  displayCluesIds(clues) {
    let findClues = clues.cards;
    findClues.forEach((clue, index) => {
      $(".card").on("click", function(e) {
      $(e.target).closest($(`#js-row-${index}`)).html(`<h3>${clue.question}</h3>
          <p hidden class='para' id=${clue.categoryId}>${clue.question}</p>`)
    })
    })
  },

  // displayCluesQuestions(clues) {
  //   let findClues = clues.findMatchingQuestions();
  //   clues.forEach((clue, index) => {
  //     console.log('displayQ', clue.categoryId)
  //     $(`#js-row-${index}`).html(clue.question);
  //   })
  // },

  displayCategories(clues) {
    let findCat = clues.categories;
    findCat.forEach((category, index) => {
      $(`#js-category-${index}`).html(category[0]);
    })
  },


  displayInputFieldForGuess() {
    $(".input-field").html(`<input type="text" class="input-guess" id="js-input-guess-1" />
    <button class="guess-button" id="js-guess-button">
        Submit Guess
      </button>`);

  },

  displayRightOrWrongMessage(turn) {
    alert(turn.feedback);
  },

  //check answer() have an event listener for submit answer button

  //display final round(one category with one card only)

  //display clues

  //display final round(one category with one card only)

  updateScore(data) {
    if (this.evaluateGuess(data) === true) {
      this.player.score += this.value;
      return this.player.score;
    } else {
      return this.player.score;
    }
    //update score on the dom and include spies
  },

  updatePlayerNames() {
    $('#js-player-one-name').text($('#js-input-player-1').val())
    $('#js-player-two-name').text($('#js-input-player-2').val())
    $('#js-player-three-name').text($('#js-input-player-3').val())
  },

  updatePlayerScore(player1, player2, player3) {
    $('#js-player-one-points').text(player1.score)
    $('#js-player-two-points').text(player2.score)
    $('#js-player-three-points').text(player3.score)
  },

  displayCurrentQuestion(e) {
    $('.card').on('click', function(e) {
      $(e.target.closest('h3 ')).hide();
    })
  }


}














export default domUpdates;