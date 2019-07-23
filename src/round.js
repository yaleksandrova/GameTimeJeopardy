import Turn from '../src/turn'

class Round {
  constructor(players, game) {
    this.players = players;
    this.currentTurn;
    this.currentPlayer = 0;
    this.game = game;
    
  }

  returnDailyDouble() {
    return Array.from({length: this.numberOfRounds}, () => Math.floor(Math.random() * 16))
  }

  returnGameWinner(players) {
    return players.sort((a, b) => b.score - a.score)[0].name;
  }

  beginRound() {
    this.currentTurn = new Turn(this.findPlayer(), this)
  }

  findPlayer() {
    return this.players[this.currentPlayer]
  }

  changePlayer() {
    if(this.currentPlayer < 2) {
      this.currentPlayer++
    } else {
      this.currentPlayer = 0;
    }
  }

  continueRound() {
    this.currentTurn = new Turn(this.findPlayer(), this)
  }

}

export default Round;