import Round from '../src/Round'

class Turn {
  constructor (category, value, guess, player) {
    this.category = category;
    this.value = value;
    this.guess = guess;
    this.player = player;
    this.feedback = '';
  }
  // select a categrory and a clue in one function
  //checking if the clue is daily double
  //if it is must accept a wager
  //player must input the wager, check the wager is valid and if it is
  //inputting the answer and check the answer
  //update score based on the answer
  //if there is no wager, still check the answer and updare score
  //round class determines what comes to the dashboard


  evaluateGuess(data) {
    const array = [];
    data.clues.forEach(item => {

      if (item.categoryId === this.category) {
        array.push(item);
      }
    });

    const result = [];
    array.forEach(el => {
      if (el.pointValue === this.value) {
        result.push(el.answer);
      }
    });

    if (result.includes(this.guess)) {
      return true
    } else {
      return false
    }
  }

  giveFeedback(data) {
    if (this.evaluateGuess(data) === true) {
      this.feedback = "correct";
      return 'correct!';

    } else {
      this.feedback = "incorrect";
      return 'incorrect!';

    }
  }

  updateScore(data) {
    if (this.evaluateGuess(data) === true) {
      this.player.score += this.value;
      return this.player.score;
    } else {
      return this.player.score;
    }

  }

  checkIfCLueIsDailyDouble() {
    const clue = data.clues.filter(item => {
      return item.pointValue === this.value &&
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
        highestPointValue = this.player.score
      }
      const wagerMin = 5;
      const wagerMax = highestPointValue;
    } 
  }

export default Turn;