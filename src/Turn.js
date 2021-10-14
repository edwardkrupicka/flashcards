class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
  }
  returnGuess() {
    return this.userGuess;      
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    return (this.userGuess === this.card.correctAnswer);
  }
  giveFeedback() {
    if (this.userGuess === this.card.correctAnswer) {
      return `BZZZ CORRECT!`
    } else {
      return `INCORRECT!`
    }
  }
};

module.exports = Turn;