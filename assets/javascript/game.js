// variables: playerWins, playerLoses, reminingGuesses, 

var playerWins = 0;
var playerLoses = 0;
var numGuesses = 0;
var remainingGuesses = 20 - numGuesses;

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// printing the original scores etc.

document.getElementById("playerWin").innerHTML= playerWins;
document.getElementById("playerLoses").innerHTML= playerLoses;
document.getElementById("remainingGuesses").innerHTML= remainingGuesses;

document.onkeyup = function (event){
  // the user guess, then logging the userGuess
  var playerGuess = event.key;
 
  console.log(`you pressed ${playerGuess}`)

  // computer guess
    // index for the computer
  var computerIndex = Math.floor(Math.random()*computerChoices.length); 
  

  console.log(`computer index ${computerIndex}`)

  var computerGuess = computerChoices[computerIndex];
  console.log(`computer guess ${computerGuess}`);
}