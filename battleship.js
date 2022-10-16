var location1 = 3;
var location2 = 4;
var location5 = 5;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Gotów, cel, pal!(podaj liczbę z zakresu od 0-6):");
  if (guess < 0 || gues > 6) {
    alert("Proszę podać prawidłowy numer komórki!");
  } else {
    guesses = guesses + 1;
  }
}
