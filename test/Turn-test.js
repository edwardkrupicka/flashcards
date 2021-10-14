const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user guess', function() {
    const turn = new Turn(21);
    expect(turn.userGuess).to.equal(21);
  });

  it('should return user guess', function() {
    const turn = new Turn('array');
    expect(turn.returnGuess()).to.equal('array'); 
  });

  it('should return card', function() {
    const card = new Card (
      1, 
      "What allows you to define a set of related information using key-value pairs?", 
      ["object", "array", "function"], 
      "object"
    );
    const turn = new Turn("array", card);
    expect(turn.returnCard()).to.equal(card);
  });
  
  it('should compare the userGuess with the card correctAnswer and return a boolean value', function() {
    const card = new Card (
      1, 
      "What allows you to define a set of related information using key-value pairs?", 
      ["object", "array", "function"], 
      "object"
    );
    const turn = new Turn ("object", card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give feedback when turn is taken', function() {
    const card = new Card (
      1, 
      "What allows you to define a set of related information using key-value pairs?", 
      ["object", "array", "function"], 
      "object"
    );
    const turn = new Turn ("object", card);
    expect(turn.giveFeedback()).to.equal(`BZZZ CORRECT!`);
  });


});