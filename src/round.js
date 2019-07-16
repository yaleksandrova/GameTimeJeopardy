class Round {
  constructor(players, numberOfRounds = 1, data) {
    this.numberOfRounds = numberOfRounds;
    this.data = data;
    // this.dailyDouble = dailyDoiu;
    this.players = players;
    // this.turnCounter = null; //possiblay??

  }

  //methods

  //Daily double method
  // ---> depending on the round (this.numberOfRound)
  // generates a random number
  // array.from() creates array from an array like/iterable object
  // length = current round
  // --> creating an array of random numbers

  //returnRoundWinner()
  // ---> player name needed
  // ---> calculate highest score
  // check players array, should be able to evaluate whose score is highest ---> find()?? sort???
  // math.max for the score??? 

  //how can we check when the round is over??


returnDailyDouble() {
  return Array.from({length: this.numberOfRounds}, () => Math.floor(Math.random() * 16))
}





}

export default Round;