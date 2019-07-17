import Player from "./Player";
// import data from '../src/data/data';
//import 

let DOMupdates = {

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

  displayCategories() {
    return Object.keys(data.categories);
  },
  
  //display clues

  //check answer() have an event listener for submit answer button 

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
//update score on the dom and include spies 
  },

  //display game winner




}