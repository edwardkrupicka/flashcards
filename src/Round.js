const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.incorrectGuesses = [];
    this.turns = 0;
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(userGuess) {
    let newTurn = new Turn(userGuess, this.currentCard);
    if (!newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(newTurn.card.id)
    }
    this.turns++;
    this.currentCard = this.deck[this.turns];
    if (this.turns > this.deck.length) {
      this.endRound();
    }
    return newTurn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.floor(((this.deck.length - this.incorrectGuesses.length) / this.turns) * 100);
  }
  endRound() {
    console.log (`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return (`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }

};

module.exports = Round;