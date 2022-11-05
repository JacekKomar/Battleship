function parseGuess(guess) {
  var alphabet = ["A", "B", "C", "D", "F", "G"];

  if (guess === null || guess.lenght !== 2) {
    alert("Ups, proszę wpisać literę i cyfrę");
  } else {
    firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert("Ups to nie są współżędne!");
    } else if (
      row < 0 ||
      row >= model.boardSize ||
      column < 0 ||
      column >= model.boardSize
    ) {
      alert("Ups, pole poza planszą !");
    } else {
      return row + column;
    }
    return null;
  }

  console.log(parseGuess("A0"));
  console.log(parseGuess("B6"));
  console.log(parseGuess("G3"));
  console.log(parseGuess("H0"));
  console.log(parseGuess("A7"));
}

var controller = {
  guesses: 0,

  processGuess: function (guess) {
    var location = parseGuess(guess);
    if (location) {
      this.guesses++;
      var hit = model.fire(location);

      if (hit && model.shipsSunk === model.numShips) {
        view.displayNessage(
          "Zatopiłeś wszystkie moje okręty, w " + this.guesses + "próbach"
        );
      }
    }
  },
};
