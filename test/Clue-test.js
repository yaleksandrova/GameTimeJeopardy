import chai from 'chai';
const expect = chai.expect;
import Clue from '../src/Clue';
import Data from '../src/data/data.js';
import spies from 'chai-spies';
import DOMupdates from '../src/DOMupdates.js';
chai.use(spies);

describe('Clue', function() {
  let clue;

  beforeEach(function() {
    clue = new Clue(Data);
  });

  it('should be an instance of Clue', () => {
    expect(clue).to.be.an.instanceof(Clue);
  });

  it('should receive data file', () => {
    expect(clue.data).to.be.eql(Data);
  });

  it('should pick new categories depending on the round', () => {
    expect(clue.pickCategories().length).to.be.eql(4);
  });

  it('should find the cards based on chosen categories', () => {
    expect(clue.findMatchingQuestions().length).to.be.eql(16);
  });
});