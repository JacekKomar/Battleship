var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipSunk: 0,

  ships: [
    { locations: ["10", "20", "30"], hits: ["", "", ""] },
    { locations: ["32", "33", "34"], hits: ["", "", ""] },
    { locations: ["63", "64", "65"], hits: ["", "", ""] },
  ],

  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ship[i];

      var index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = "hit";
        visualViewport.displayHit(guess);
        visualViewport.displayMessage("TRAFIONY!");
        if (this.isSunk(ship)) {
          visualViewport.displayMessage("Zatopiłeś mój okręt !");
          this.shipSunk++;
        }

        return true;
      }
    }
    visualViewport.displayMiss(guess);
    visualViewport.displayMessage("Spudłowałeś.");
    return false;
  },

  isSunk: function (ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
      return true;
    }
  },
};
