// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Get references to HTML elements
const userGuessInput = document.getElementById("typeNo");
const guessButton = document.getElementById("enteredNo");
const resultDisplay = document.getElementById("result");
const yourNo = document.getElementById("yourNo");

// Define feedback messages
const correctGuessMessage = "You guessed correct!";
const highGuessMessage = "You guessed too high, try again!";
const lowGuessMessage = "You guessed too low, try again!";

// Event listener for the guess button
guessButton.addEventListener("click", () => {
  // Get the user's guess as a number
  let guessedNumber = parseInt(userGuessInput.value);

  // Display the user's guess
  yourNo.textContent = `Your Guess: ${guessedNumber}`;

  // Provide feedback based on the guess
  if (guessedNumber === randomNumber) {
    resultDisplay.textContent = correctGuessMessage;
  } else if (guessedNumber < randomNumber) {
    resultDisplay.textContent = lowGuessMessage;
  } else {
    resultDisplay.textContent = highGuessMessage;
  }
});

