import chai from 'chai';
const expect = chai.expect;
import Round from '../src/round';
import Data from '../src/data.js';
import Turn from '../src/turn.js'

describe('Round', function() {

beforeEach(() => {
    let round = new Round(players, data, turn)
    let players = [
    {id: 1, name: 'Spam', score: 0},
    {id: 2, name: 'Jessie', score: 0},
    {id: 3, name: 'Yana', score: 0}
    ];
    let clues = {
      question: "Cable channel where you'd find \"Mouseterpiece Theatre",
      pointValue: 200,
      answer: "the Disney Channel",
      categoryId: 10
    };

  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have four categories', () => {

  expect(round.returnCategories().length).to.eql(4)
  });

  describe('Daily Double') => ({

  it('should have one daily double for the first round', () => {

     expect(round.returnDailyDouble()).to.eql(1)
  });

  it('should have two daily doubles for the second round', () => {
    
     expect(round.returnDailyDouble()).to.eql(2)
  });
  })

  it('should display one category in the third round', () => {

    expect(round.roundNumber).to.eql(3)
    expect(round.returnCategories().length).to.eql(1)
  })

  it('should populate 16 cards for rounds 1 and 2', () => {

    expect(round.populateCards().length).to.eql(16)
  })



});