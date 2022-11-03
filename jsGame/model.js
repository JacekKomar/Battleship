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
      locations = ship.locations;
      var index = locations.indexOf(guess);
      if (index >= 0) {
      }
    }
  },
};
