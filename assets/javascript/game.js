// variables: playerWins, playerLoses, reminingGuesses, 

var playerWins = 0;
var playerLoses = 0;


var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess;


document.getElementById("chooseLetter").onclick = function() {compGuessFunc()};

//  function being used on the "onclick" key word above starts the game
function compGuessFunc (){

  // printing the original scores etc.

  document.getElementById("playerWin").innerHTML= playerWins;
  document.getElementById("playerLoses").innerHTML= playerLoses;

  // printing the number of guess remaining at start of game


  // computer guess
    // index for the computer
  var computerIndex = Math.floor(Math.random()*computerChoices.length); 
  

  console.log(`computer index ${computerIndex}`)
  // generating the guess
   computerGuess = computerChoices[computerIndex];
  console.log(`computer guess ${computerGuess}`)

}

var numGuesses = 0;

document.onkeyup = function (event){
  // the user guess, then logging the userGuess
  var playerGuess = event.key;
  

  console.log(`you pressed ${playerGuess}`);
  // counting the number of times that the function has been called
  numGuesses++;

  console.log(`this is the num of guesses ${numGuesses}`);
  // writing down the guesses remaining 

  if (numGuesses <= 8){
    var remainingGuesses = 8 - numGuesses;

  document.getElementById("remainingGuesses").innerHTML= remainingGuesses;
  }
  // game rules

  if (computerGuess === playerGuess){
    document.getElementById("winLoseIcon").innerHTML="you win man";
  }
  else if (numGuesses === 8){
    document.getElementById("winLoseIcon").innerHTML="you lose man";
    return;

  }
}