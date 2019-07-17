import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
import DOMupdates from '../src/DOMupdates.js';
chai.use(spies);
import Player from '../src/Player';
// import data from '../data/data.js';

let player; 

beforeEach(() => {
  player = new Player('Moisey', 1);
});
// global.localStorage = {};
// chai.spy.on(localStorage, ['setItem', 'getItem'], () => {});

describe('Player', () => {

  it('should be a function', () => {
    expect(Player).to.be.a('function');
  });

  it('should be an instance of Players', () => {
    expect(player).to.be.an.instanceof(Player);
  })

  it('should have a name', function() {
    expect(player.name).to.equal('Moisey');
  });  

  it('should have an id', function() {
    expect(player.id).to.equal(1);
  });  
});