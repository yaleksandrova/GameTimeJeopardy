import $ from 'jquery';
import Clue from './Clue';
import Data from '../src/data/data';

let domUpdates = {

  //player's names display after inputted

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
  
  //display clues

  //display final round(one category with one card only)

  //input wager for daily doubles

  //update an individual player's score

  //display game winner




}

export default domUpdates;
