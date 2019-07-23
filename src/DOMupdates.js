import $ from 'jquery';
import Clues from './Clues';
import Data from '../src/data/data';
import Player from "./Player";

import Turn from '../src/turn'

let domUpdates = {


  displayPlayersName(data) {
    const players = data.players.map(person => {
      return person.name;
    })
    return players;
  },


  displayCluesIds(clues) {
    let findClues = clues.cards;
    findClues.forEach((clue, index) => {
      $(".card").on("click", function(e) {
        $(e.target).closest($(`#js-row-${index}`)).html(`<p>${clue.question}</p>`
        )
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

    giveFeedback(value, card) {
    if (value === true) {
      $("#js-show-answer").text('YOU GUESSED CORRECTLY!');
      $(`#${card.id}`).text('')
      $('#js-guess-input').val('')
      } else {
      $("#js-show-answer").text('YOU GUESSED INCORRECTLY!');
      $('#js-guess-input').val('')

      
    }
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


}














export default domUpdates;