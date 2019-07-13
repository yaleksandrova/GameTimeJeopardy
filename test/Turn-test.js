import chai from 'chai';
const expect = chai.expect;


import Turn from '../src/Turn';

let turn;
beforeEach(() => {
  turn = new Turn();
});

describe('Turn', () => {

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  })
});