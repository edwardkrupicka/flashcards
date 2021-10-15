const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let round;

  beforeEach(function() {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");

    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");

    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should return the current card being played and update current card after a turn is taken', function() {
    expect(round.returnCurrentCard()).to.equal(card1);

    round.takeTurn('object');

    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should increase turn counter when a guess is taken whether it is correct or incorrect', function() { 
    expect(round.turns).to.equal(0);

    round.takeTurn('object');

    expect(round.turns).to.equal(1);

    round.takeTurn('function');

    expect(round.turns).to.equal(2);
  });

  it('should add an incorrect guess to an array', function() {
    round.takeTurn('array');

    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('should return feedback whether the guess is incorrect or correct', function() {
    const turn1 = round.takeTurn("object");

    expect(turn1).to.equal(`BZZZ CORRECT!`);

    const turn2 = round.takeTurn("function");

    expect(turn2).to.equal(`INCORRECT!`);
  });

  it('should be able to calculate the percentage of correct guesses', function() {
    round.takeTurn('object');
    round.takeTurn('array');
    round.takeTurn('array');

    console.log(round.calculatePercentCorrect());

    expect(round.calculatePercentCorrect()).to.equal(66);
  });

  it('should tell the user the the round has ended and the percentage of questions answered correctly', function() {
    round.takeTurn('object');
    round.takeTurn('array');
    round.takeTurn('array');


    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`)

  });

});