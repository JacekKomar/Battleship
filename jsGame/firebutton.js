function init() {
  var fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
  var guessInput = document.getElementById("guessInput");
  guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeyPress;
}
function handleFireButton() {
  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.Value;
  controller.processGuess(guess);

  guessInput.value = "";
}

window.onload = init;

function handleKeyPress(e) {
  var fireButton = document.getElementById("fireButton");
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}
