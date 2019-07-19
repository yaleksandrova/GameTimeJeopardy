import $ from 'jquery';
import Clues from './Clues';
import Data from '../src/data/data';
import Player from "./Player";

// import data from '../src/data/data';
//import 

let domUpdates = {


  displayPlayersName(arrayOfPlayers) {
    console.log(arrayOfPlayers)

    arrayOfPlayers.forEach((person, index) => {
      $(`.player${index}-name-display`).html(person.name);

    })
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
      $(`#js-row-${index}`).html(clue.pointValue);
    })
  },

  displayCluesQuestions(clues) {
    let findClues = clues.findMatchingQuestions();
    clues.forEach((clue, index) => {
      console.log('displayQ', clue.categoryId)
      $(`#js-row-${index}`).html(clue.question);
    })
  },

  displayCategories(clues) {
    let findCat = clues.categories;
    findCat.forEach((category, index) => {
      $(`#js-category-${index}`).html(category[0]);
    })
  },

  //check answer() have an event listener for submit answer button 

  //display final round(one category with one card only)

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

  //display game winner




}

export default domUpdates;
