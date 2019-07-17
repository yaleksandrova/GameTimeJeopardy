import chai from 'chai';
const expect = chai.expect;
import Clues from '../src/Clues';
import Data from '../src/data/data.js';
import spies from 'chai-spies';
import DOMupdates from '../src/DOMupdates.js';
chai.use(spies);

describe('Clues', function() {
  let clues;

  beforeEach(function() {
    clues = new Clues(Data);
  });

  it('should be an instance of Clue', () => {
    expect(clues).to.be.an.instanceof(Clues);
  });

  it('should receive data file', () => {
    expect(clues.data).to.be.eql(Data);
  });

  it('should pick new categories depending on the round', () => {
    expect(clues.pickCategories()).to.have.lengthOf(4);
  });

  it('should find the cards based on chosen categories', () => {
    expect(clues.findMatchingQuestions()).to.have.lengthOf(16);
  });
});