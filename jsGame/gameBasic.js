import { playSound, SOUND_HIT, SOUND_MISS, SOUND_SUNK } from "./audio.js";
import { addUserListToLocalStorage } from "./localStorageHelpers.js";
import {
  shipListOne,
  shipListTwo,
  shipListThree,
  shipListFour,
  shipInfo,
  shipInfoTwo,
  shipInfoThree,
  shipInfoFour,
} from "./allShips.js";

class WarshipGameModel {
  constructor() {
    this.boardSize = 7;
    this.numShips = 3;
    this.shipLength = 3;
    this.shipsSunk = 0;
    this.randomShipDescriptionList = [];

    this.ships = [
      { locations: [0, 0, 0], hits: ["", "", ""] },
      { locations: [0, 0, 0], hits: ["", "", ""] },
      { locations: [0, 0, 0], hits: ["", "", ""] },
    ];
  }

  randomizeShipDescription() {
    let random = Math.floor(Math.random() * 4);

    if (this.randomShipDescriptionList.length === 4) {
      return 0;
    }

    if (this.randomShipDescriptionList.includes(random) === true) {
      return this.randomizeShipDescription();
    } else {
      this.randomShipDescriptionList.push(random);

      return random;
    }
  }

  fire(guess) {
    const element = document.getElementById("incrementText");
    let value = element.innerHTML;

    --value;
    if (value <= 0)
      alert(
        "Przegrałeś grę, straciłeś wszystkie możliwe strzały. Zacznij grę jeszcze raz !"
      );
    if (value <= 0) location.href = "index.html";

    document.getElementById("incrementText").innerHTML = value;

    for (let i = 0; i < this.numShips; i++) {
      const ship = this.ships[i];
      const index = ship.locations.indexOf(guess);

      if (ship.hits[index] === "hit") {
        playSound("sounds/shot.mp3");
        view.displayMessage("Już tu strzeliłeś !");
        return true;
      } else if (index >= 0) {
        ship.hits[index] = "hit";
        playSound("sounds/hit.mp3");
        view.displayHit(guess);
        view.displayMessage("Trafiłeś !");

        if (this.isSunk(ship)) {
          view.displayMessage("Zatopiłeś okręt przeciwnika!");
          this.shipsSunk++;

          let random = this.randomizeShipDescription();
          console.log("wylosowany statek nr: ", random);
          const elementy = [shipInfo, shipInfoTwo, shipInfoThree, shipInfoFour];

          elementy[random].displayMessage();
        }

        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("Pudło !");
    playSound("sounds/Miss.mp3");
    return false;
  }

  isSunk(ship) {
    for (let i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  }

  generateShipLocations() {
    let locations;
    for (let i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }

    console.log(this.ships);
  }

  generateShip() {
    const direction = Math.floor(Math.random() * 2);
    let row, col;
    if (direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
    } else {
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
      col = Math.floor(Math.random() * this.boardSize);
    }

    const newShipLocations = [];
    for (let i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + "" + (col + i));
      } else {
        newShipLocations.push(row + i + "" + col);
      }
    }

    return newShipLocations;
  }

  collision(locations) {
    for (let i = 0; i < this.numShips; i++) {
      const ship = this.ships[i];
      for (let j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  }
}

class View {
  displayMessage(msg) {
    const messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  }

  displayHit(location) {
    const cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  }

  displayMiss(location) {
    const cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
}

const view = new View();

class Controller {
  constructor(model) {
    this.model = model;
    this.guesses = 0;
  }

  processGuess(guess) {
    const location = parseGuess(guess);
    if (location) {
      this.guesses++;
      const hit = this.model.fire(location);
      if (hit && this.model.shipsSunk === this.model.numShips) {
        view.displayMessage(
          "Zatopiłeś wszystkie okręty, po " + this.guesses + " próbach"
        );

        const points = document.getElementById("incrementText").innerHTML || 0;

        const name = prompt(
          "Gratulacje wygrałeś ! Podaj swoje imię do rankingu"
        );
        addUserListToLocalStorage({ name: name, points: points });
      }
    }
  }
}

const model = new WarshipGameModel();
const controller = new Controller(model);

function parseGuess(guess) {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G"];

  if (guess === null || guess.length !== 2) {
    alert("Ups, proszę wpisać literę i cyfrę");
  } else {
    let firstChar = guess.charAt(0);
    const row = alphabet.indexOf(firstChar);
    let column = guess.charAt(1);
    if (isNaN(row) || isNaN(column)) {
      alert("Ups to nie są współżędne!");
      return null;
    }

    column = parseInt(column) - 1;

    if (
      row < 0 ||
      row >= model.boardSize ||
      column < 0 ||
      column >= model.boardSize
    ) {
      alert("Ups, pole poza planszą !");
    } else {
      return `${row}${column}`;
    }
  }
  return null;
}

function handleFireButton() {
  const guessInput = document.getElementById("guessInput");
  const guess = guessInput.value.toUpperCase();
  controller.processGuess(guess);
  guessInput.value = "";
}

function handleFireClick(coords) {
  const guess = coords.toUpperCase();
  controller.processGuess(guess);
}

window.handleFireClick = handleFireClick;

function handleKeyPress(e) {
  const fireButton = document.getElementById("fireButton");

  e = e || window.event;

  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

function init() {
  const fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;

  const guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeyPress;

  model.generateShipLocations();
}

window.onload = init;
