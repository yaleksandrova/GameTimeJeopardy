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
  // select a categrory and a clue in one function
  //checking if the clue is daily double
  //if it is must accept a wager
  //player must input the wager, check the wager is valid and if it is
  //inputting the answer and check the answer
  //update score based on the answer
  //if there is no wager, still check the answer and updare score
  //round class determines what comes to the dashboard


evaluateGuess(guess) {
  if(this.currentClue.answer === guess) {
    this.currentPlayer.addScore(this.currentClue.pointValue)
    // this.round.changePlayer()
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