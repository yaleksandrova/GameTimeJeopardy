import Round from '../src/round'

class Turn {
  constructor (answer, points, guess, player) {
    this.answer = answer;
    this.points = points;
    this.guess = guess;
    this.player = player;

    console.log(this);
  }
  // select a categrory and a clue in one function
  //checking if the clue is daily double
  //if it is must accept a wager
  //player must input the wager, check the wager is valid and if it is
  //inputting the answer and check the answer
  //update score based on the answer
  //if there is no wager, still check the answer and updare score
  //round class determines what comes to the dashboard



  evaluateGuess() {
    console.log('this', this)
    return this.answer === this.guess;
    // this.giveFeedback();
  }

  updateScore(value, card) {
    console.log('value', value)
    if (value === true) {

      this.player.score += this.points;
      // console.log('player', this.player)

      // return this.player.score;

    } else {
       console.log('player', this.player)
       // this.player.score -= this.points;
      // return this.player.score;
    }

  }

  checkIfCLueIsDailyDouble() {
    const clue = data.clues.filter(item => {
      return item.pointValue === this.points &&
      item.categoryId === this.category
    })
    return clue;
  }

  // if(clue.includes(round.returnDailyDouble()){
        
  //   return true
  // }else{
  //   return false
  // }
 
  
  //calls on DOM checkDD(){
  //domUpdates()
  //wager()
  //}
  //add DD class
  

  inputWager() {
      const highestPointValue = 400;
      if (round.currentTurn === 2) {
        highestPointValue = 800
      } else if (round.currentTurn === 3) {
        highestPointValue = this.player.points
      }
      const wagerMin = 5;
      const wagerMax = highestPointValue;
    } 
  }

export default Turn;