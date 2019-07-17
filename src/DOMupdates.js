import $ from 'jquery';
import Clue from './Clue';
import Data from '../src/data/data';
import Player from "./Player";

let domUpdates = {

  displayPlayersName(data) {
    const players = data.players.map(person => {
      return person.name;
    })
    return players;
  },

  //show current round in top of the screen

  //display the categories

  // displayCluesIds() {
  //   let clue = new Clue(Data);
  //   let clues = clue.findMatchingQuestions();
  //   clues.forEach((clue, index) => {
  //     $(`#js-row-${index}`).html(clue.pointValue);
  //   })
  // }

  displayCluesQuestions() {
    let clue = new Clue(Data);
    let clues = clue.findMatchingQuestions();
    clues.forEach((clue, index) => {
      $(`#js-row-${index}`).html(clue.question);
    })
  }

  displayCategories() {
    return Object.keys(data.categories);
  },

  
  //display clues

  //display final round(one category with one card only)

  inputWager() {

  },

  updateScore(data){
    if(this.evaluateGuess(data) === true){
      this.player.score += this.value;
      return this.player.score;
    }else{
      return this.player.score;
    }

  },

  //display game winner




}

export default domUpdates;
