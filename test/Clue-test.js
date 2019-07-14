import chai from 'chai';
const expect = chai.expect;
import Clue from '../src/Clue';
import Data from '../src/data/data.js';

describe('Clue', function() {
  let clue;

  beforeEach(function() {
    clue = new Clue(data);
  });

  it('should be an instance of Clue', () => {
    expect(clue).to.be.an.instanceof(Clue);
  });

  it('should receive data file', () => {
    expect(clue.questions).to.be.eql(data);
  });

  it('should pick new categories depending on the round', () => {
    expect(clue.pickCategories().length).to.be.eql(4);
  });

  it('should find the cards based on chosen categories', () => {
    expect(clue.findMatchingQuestions()).to.be.eql();
  });
});