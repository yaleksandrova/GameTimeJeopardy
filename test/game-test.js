import chai from 'chai';
const expect = chai.expect;
import Round from '../src/round';
import Game from '../src/game';
import Data from '../src/data/data';
import Turn from '../src/Turn';
import Clues from '../src/Clues';
import spies from 'chai-spies';
import DOMupdates from '../src/DOMupdates.js';
chai.use(spies);

describe('Game', function() {

  let players;
  let round;
  let clues;
  let game;

    beforeEach(function() {
    players = [
      {id: 1, name: 'Spam', score: 5},
      {id: 2, name: 'Jessie', score: 2},
      {id: 3, name: 'Yana', score: 20}
    ];
    game = new Game(Data, players, clues)
    round = new Round(players)
    clues = new Clues(Data)
    

  });

    it('should be an instance of Game', () => {
      expect(game).to.be.an.instanceof(Game);
    });

    it('should', () => {
      
    });

})
