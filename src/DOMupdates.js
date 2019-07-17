import $ from 'jquery';
import Clues from './Clues';
import Data from '../src/data/data';
import Player from "./Player";

// import data from '../src/data/data';
//import 

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

  displayCluesIds() {
    let clues = new Clues(Data);
    let findClues = clues.findMatchingQuestions();
    findClues.forEach((clue, index) => {
      $(`#js-row-${index}`).html(clue.pointValue);
    })
  },

  displayCluesQuestions() {
    let clues = new Clues(Data);
    let findClues = clues.findMatchingQuestions();
    findClues.forEach((clue, index) => {
      $(`#js-row-${index}`).html(clue.question);
    })
  },

  displayCategories() {
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

  //display game winner




}

export default domUpdates;
