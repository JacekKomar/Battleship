import { playSound, SOUND_HIT, SOUND_MISS, SOUND_SUNK } from "./audio.js";
import { addUserListToLocalStorage } from "./localStorageHelpers.js";

// TODO wynieść te 4 obiekty do plików shipData.js
const shipListOne = {
  id: "Lotniskowiec",
  img: "images/ships/lotniskowiec.jpg",
  title: "Lotniskowiec",
  desc: "klasa okrętów, której głównym zadaniem jest prowadzenie operacji bojowych za pomocą bazujących na nich samolotów i przystosowana do tego celu konstrukcyjnie (pokład startowy).Pierwsze okręty tej klasy powstały pod koniec I wojny światowej, następnie odegrały dużą rolę w walkach II wojny światowej, szczególnie na Pacyfiku.",
};

const shipListTwo = {
  id: "Krążownik",
  img: "images/ships/krążownik.jpg",
  desc: "klasa dużych, silnie uzbrojonych okrętów nawodnych, wyróżniana od II połowy XIX wieku do chwili obecnej. Stanowiła jedną z podstawowych klas okrętów.",
};

const shipListThree = {
  id: "Niszczyciel",
  img: "images/ships/niszczyciel.jpg",
  desc: "szybki, wielozadaniowy okręt średniej wielkości, przeznaczony do takich zadań, jak ochrona własnych jednostek, zwalczanie lotnictwa, okrętów podwodnych i innych jednostek wroga.  Pierwsze okręty tej klasy powstały pod koniec XIX wieku dla zwalczania torpedowców. W miarę rozwoju środków wojny morskiej, takich jak samoloty i okręty podwodne, niszczyciele otrzymywały coraz silniejsze i bardziej zróżnicowane uzbrojenie, stając się jednostkami uniwersalnymi.",
};

const shipListFour = {
  id: "Pancernik",
  img: "images/ships/pancernik.jpg",
  desc: "klasa dużych, silnie opancerzonych i uzbrojonych pełnomorskich okrętów artyleryjskich, stanowiących trzon największych flot wojennych od czasu powstania klasy pancerników w drugiej połowie XIX wieku do okresu II wojny światowej. ",
};

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

const shipInfo = {
  displayMessage: function () {
    const showObject = document.querySelector("#showObject");

    showObject.innerHTML = ` <div class="allInfoAboutShip"> <h4 class="bold"> Zatopiłeś:  ${shipListOne.id} </h4>  <img class="imageOfShip" src="${shipListOne.img}"/> <br>  ${shipListOne.desc} </div> `;
  },
};

const shipInfoTwo = {
  displayMessage: function () {
    const showObject = document.querySelector("#showObjectTwo");

    showObject.innerHTML = ` <div class="allInfoAboutShip"> <h4 class="bold"> Zatopiłeś:  ${shipListTwo.id} </h4>  <img class="imageOfShip" src="${shipListTwo.img}"/> <br>  ${shipListTwo.desc} </div> `;
  },
};

const shipInfoThree = {
  displayMessage: function () {
    const showObject = document.querySelector("#showObjectThree");

    showObject.innerHTML = ` <div class="allInfoAboutShip"> <h4 class="bold"> Zatopiłeś:  ${shipListThree.id} </h4>  <img class="imageOfShip" src="${shipListThree.img}"/> <br>  ${shipListThree.desc} </div> `;
  },
};

const shipInfoFour = {
  displayMessage: function () {
    const showObject = document.querySelector("#showObjectFour");

    showObject.innerHTML = ` <div class="allInfoAboutShip"> <h4 class="bold"> Zatopiłeś:  ${shipListFour.id} </h4>  <img class="imageOfShip" src="${shipListFour.img}"/> <br>  ${shipListFour.desc} </div> `;
  },
};

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
