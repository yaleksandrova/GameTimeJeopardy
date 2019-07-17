import Player from "./Player";
// import data from '../src/data/data';

let DOMupdates = {

  displayPlayersName(data) {
    const players = data.players.map(person => {
      return person.name;
    })
    return players;
  },

  //show current round in top of the screen

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