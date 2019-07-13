class Turn {
  constructor (usersGuess, answer, player, data) {
    this.usersGuess = usersGuess;
    this.answer = answer;
    this.player = player;
    this.data = data;
  }
// select a categrory and a clue in one function
//checking if the clue is daily double 
//if it is must accept a wager 
//player must input the wager, check the wager is valid and if it is 
//inputting the answer and check the answer
//update score based on the answer
//if there is no wager, still check the answer and updare score
//round class determines what comes to the dashboard

  selectCategoryAndClue(category, clue) {
    //method from Clue class that displayes categories and clues
  if( this.checkIfCLueIsDailyDouble()){
    this.inputWager();
    this.inputAndEvaluateAnswer();
  } else {
    this.inputAndEvaluateAnswer();
  }
    updateScore();
  }

  checkIfCLueIsDailyDouble() {
  
  }

  inputWager(points) {
// check if the wager is valid
//if (points > 0)
//come from the round class or logic needs set up here
  }

  inputAndEvaluateAnswer() {
    
  }

  updateScore() {

  }

}



export default Turn;