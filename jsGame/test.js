var view = {
    displayMessage: function (msg) {
      var messageArea = document.getElementById("messageArea");
      messageArea.innerHTML = msg;
    },
  
    displayHit: function (location) {
      var cell = document.getElementById(location);
      cell.setAttribute("class", "hit");
    },
  
    displayMiss: function (location) {
      var cell = document.getElementById(location);
      cell.setAttribute("class", "miss");
    },
  };
  
  view.displayMiss("00");
  view.displayHit("34");
  view.displayMiss("55");
  view.displayHit("12");
  view.displayMiss("25");
  view.displayHit("26");
  
  view.displayMessage("test");
  view.displayMessage("test");
  view.displayMessage("test");
  view.displayMessage("test");
  view.displayMessage("test");
  view.displayMessage("test");
  view.displayMessage("test");

  var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipSunk: 0,
  
    ships: [
      { locations: [0, 0, 0], hits: ["", "", ""] },
      { locations: [0, 0, 0], hits: ["", "", ""] },
      { locations: [0, 0, 0], hits: ["", "", ""] }
    ],
  
    fire: function (guess) {
      for (var i = 0; i < this.numShips; i++) {
        var ship = this.ship[i];
        var index = ship.locations.indexOf(guess);
        if (index >= 0) {
          ship.hits[index] = "hit";
          view.displayHit(guess);
          view.displayMessage("TRAFIONY!");
          if (this.isSunk(ship)) {
            view.displayMessage("Zatopiłeś mój okręt !");
            this.shipSunk++;
          }
  
          return true;
        }
      }
      view.displayMiss(guess);
      view.displayMessage("Spudłowałeś.");
      return false;
    },
  
    isSunk: function (ship) {
      for (var i = 0; i < this.shipLength; i++) {
        if (ship.hits[i] !== "hit") {
          return false;
        }
        return true;
      }
    }
  };



  function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "F", "G"];
  
    if (guess === null || guess.length !== 2) {
      alert("Ups, proszę wpisać literę i cyfrę");
    } else {
      firstChar = guess.charAt(0);
      var row = alphabet.indexOf(firstChar);
      var column = guess.charAt(1);
  
      if (isNaN(row) || isNaN(column)) {
        alert("Ups to nie są współżędne!");
      } else if (row < 0 || row >= model.boardSize || column < 0 || 
        column >= model.boardSize) {
        alert("Ups, pole poza planszą !");
      } else {
        return row + column;
      }
      }
      return null;
    }
  
   

  var controller = {
    guesses: 0,
  
    processGuess: function (guess) {
      var location = parseGuess(guess);
      if (location) {
        this.guesses++;
        var hit = model.fire(location);
  
        if (hit && model.shipsSunk === model.numShips) {
          view.displayMessage(
            "Zatopiłeś wszystkie moje okręty, w " + this.guesses + "próbach"
          );
        }
      }
    }
  };
























  function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
  } 


 /* function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.Value;
    controller.processGuess(guess);
  
    guessInput.value = ""; 
  } */
  
  window.onload = init;
  
  function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
      fireButton.click();
      return false;
    }
  
    model.generateShipLocations();
} 
  



  generateShip: function() {
    var direction = Math.floor(Math.random() * 2);
  var row, col;
  if(direction ===1){
    row = Math.floor(Math.random() * this.boardSize);
  col = Math.floor(Math.random() * (this.boardSize - this.shipLength));

  }else {
   row = Math.floor(Math.random() * this.boardSize - this.shipLength);
    col = Math.floor(Math.random() * (this.boardSize));
  }
  
  }
  var newShipLocations = [];
  for (var i = 0; i < this.shipLength; i++){
    if (direction === 1){
        newShipLocations.push(row + "" +(col + i));
  
    } else {
newShipLocations.push((row + i) + "" + col);

    }
}

return newShipLocations
},
 



  collision: function(locations) {
    for(var i = 0; i < this.numShips; i++){
        var ship = model.ships[i];
        for (var j = 0; j <locations.length; j++) {
            if (ship.locations.indexOf(locations[j]) >=0) {
                return true;
            }
        }

    }
    return false
  }





 









  





  
  
 







