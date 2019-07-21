import Round from "./round";

class Game {
  constructor(clues) {
    this.clues = clues;
    this.players = [];
    this.roundNum = 1;
    this.round;
  }

  startRound() {
    this.clues.shuffleCategories();
    this.clues.pickCategories();
    this.clues.findMatchingQuestions();
  }

  gameStart() {
    this.round = new Round(this.players, this.roundNum, this);
  }

}

export default Game;