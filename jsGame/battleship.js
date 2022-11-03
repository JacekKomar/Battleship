var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Gotów, cel, pal!(podaj liczbę z zakresu od 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Proszę podać prawidłowy numer komórki!");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert("TRAFIONY!");
      hits = hits + 1;

      if (hits == 3) {
        isSunk = true;
        alert("Zatopiłeś mój okęrt!");
      }
    } else {
      alert("PUDŁO");
    }
  }
}

var stats =
  "Potrzebowałeś " +
  guesses +
  "prób, by zatopić okręt, " +
  "czyli Twoja efektywność wynosi: " +
  3 / guesses;
alert(stats);
