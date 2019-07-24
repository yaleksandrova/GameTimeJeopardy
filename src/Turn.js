import Round from '../src/round'
import domUpdates from '../src/domUpdates'

class Turn {
  constructor (currentPlayer, round) {
    this.currentPlayer = currentPlayer;
    this.round = round;
    this.currentClue;
    this.currentCard;
    console.log(this)
  }

evaluateGuess(guess) {
  if(this.currentClue.answer === guess) {
    this.currentPlayer.addScore(this.currentClue.pointValue)
    this.round.continueRound() 
    domUpdates.giveFeedback(true, this.currentCard)
    this.round.roundCards--;
    domUpdates.checkRoundEnd(this.round.roundCards);
  } else {
    this.currentPlayer.minusScore(this.currentClue.pointValue)
    this.round.changePlayer()
    this.round.continueRound()
    domUpdates.giveFeedback(false, this.currentCard)
    this.round.roundCards--;
    domUpdates.checkRoundEnd(this.round.roundCards);
  }
}

  checkIfCLueIsDailyDouble() {
    const clue = data.clues.filter(item => {
      return item.pointValue === this.points &&
      item.categoryId === this.category
    })
    return clue;
  }  
  }

export default Turn;