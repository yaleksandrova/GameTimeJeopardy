class Round {
  constructor(players, numberOfRounds = 1, categories, cards) {
    this.numberOfRounds = numberOfRounds;
    this.players = players;
    this.currentTurn = 1;
    this.currentRound = 1;
    this.categories = categories;
    this.cards = cards;

  }

  //methods

  //DONE
  //1. Daily double method
  // ---> depending on the round (this.numberOfRound)
  // generates a random number
  // array.from() creates array from an array like/iterable object
  // length = current round
  // --> creating an array of random numbers

  //2. returnRoundWinner()
  // ---> player name needed
  // ---> calculate highest score (player.score)???
  // check players array, should be able to evaluate whose score is highest ---> find()?? sort???
  // math.max for the score??? 
  // NEED TO FIGURE OUT HOW TO IMPLEMENT AN INCREMENTOR.
  // ---> THAT INCREMENTOR NEEDS TO COME FROM THE TURN CLASS

  // how can we check when the round is over??

  // 3. increaseCurrentRound();
  // if the questions exceed 16 questions, then the next round is activated.

  // 



  returnDailyDouble() {
    return Array.from({length: this.numberOfRounds}, () => Math.floor(Math.random() * 16))
  }

  returnGameWinner(players) {
    return players.sort((a, b) => b.score - a.score)[0].name;
  }


  // increaseCurrentRound(clue) { //jquery convert
  //  if(clue.length > 16) {
  //   return this.currentRound++
  // }


}

export default Round;