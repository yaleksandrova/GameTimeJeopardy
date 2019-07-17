import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
import DOMupdates from '../src/DOMupdates.js';
import Turn from '../src/Turn';
import data from '../src/data/data';
import Player from '../src/Player';
chai.use(spies);
// chai.spy.on(document, ['setItem', 'getItem'], () => {});

let turn;
let player;
beforeEach(() => {
  player = new Player('Moisey', 1);
  turn = new Turn(7, 200, "Buddha", player);
});

describe('Turn', () => {

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  }),

  it('should evaluate guess', function() {
    expect(turn.evaluateGuess(data)).to.equal(true);
  });  

  it('should give feedback', function() {
    expect(turn.giveFeedback(data)).to.equal('correct!');
  });  

  it('should update score', function() {
    expect(turn.updateScore(data)).to.equal(200);
  });  

});