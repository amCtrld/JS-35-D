let randomNumber = Math.floor(Math.random() * 100) + 1;
const userGuess = document.getElementById("typeNo");
const guessSubmit = document.getElementById("enteredNo");

const result = document.getElementById("result");

const correctGuess = "You guessed correct!";
const highGuess = "You guessed too high, try again!";
const lowGuess = "You guessed too low, try again!";
guessSubmit.addEventListener("click", () => {

    let guessedNo = parseInt(userGuess.value);
    if (guessedNo === randomNumber){
        result.textContent = correctGuess;
    } else if(guessedNo < randomNumber){
        result.textContent = lowGuess;
    } else{
        result.textContent = highGuess;
    }

}
);
