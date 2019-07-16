import chai from 'chai';
const expect = chai.expect;
import Round from '../src/round';
import Data from '../src/data/data';
import Turn from '../src/Turn';
import Clue from '../src/Clue';
import spies from 'chai-spies';
import DOMupdates from '../src/DOMupdates.js';
chai.use(spies);

describe('Round', function() {
  let players;
  let round;
  let clue;

  beforeEach(function() {
    players = [
      {id: 1, name: 'Spam', score: 0},
      {id: 2, name: 'Jessie', score: 0},
      {id: 3, name: 'Yana', score: 0}
    ];
    round = new Round(players)
    clue = new Clue(Data)
    // clue = {
    //   question: "Cable channel where you'd find \"Mouseterpiece Theatre",
    //   pointValue: 200,
    //   answer: "the Disney Channel",
    //   categoryId: 10
    // };

  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  describe('Daily Double', () => {

    it('should have one daily double for the first round', () => {

      expect(round.returnDailyDouble()).to.have.lengthOf(1)
    });

    it('should have two daily doubles for the second round', () => {

      let round = new Round(players, 2, Data)
      expect(round.returnDailyDouble()).to.have.lengthOf(2)
    });
  })

  it('should have three players', () => {
    
    expect(round.players).to.have.lengthOf(3)
  })

  // it.skip('should have three players', () => {
    
  //   expect(round.players).to.have.lengthOf(3)
  // })



});