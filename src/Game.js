const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }
  start() {
    const cards = prototypeQuestions.map((prototype) => {
      const card = new Card(prototype.id, prototype.question, prototype.answers, prototype.correctAnswer)
      return card
    });

    let deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck);
    this.printQuestion(this.currentRound);
  };

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;