const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  })

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of game', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

});