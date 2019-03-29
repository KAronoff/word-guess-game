// variables: playerWins, playerLoses, reminingGuesses, 

var playerWins;
var playerLoses;
var reminingGuesses;

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess;
var numGuesses
var letterGuess = [];

//  computer choice function
function compGuessFunc (){

  // printing the original scores etc.
  
  remainingGuesses = 10;
  document.getElementById("remainingGuesses").innerHTML= remainingGuesses;
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
// craeting the reset button

function resetFunc (){
  playerWins = 0;
  playerLoses = 0;
  remainingGuesses = 8;
  numGuesses = 0;
  document.getElementById("remainingGuesses").innerHTML= remainingGuesses;
  document.getElementById("playerWin").innerHTML= playerWins;
  document.getElementById("playerLoses").innerHTML= playerLoses;
  compGuessFunc();
}
// the actual button
document.getElementById("reset").onclick = function() {resetFunc()};

// creating a new round button
// new round function
function newRoundFunc (){
  remainingGuesses = 8;
  numGuesses = 0;
  compGuessFunc();
  document.getElementById("remainingGuesses").innerHTML= remainingGuesses;
  document.getElementById("reset").onclick = function() {resetFunc()};
  document.getElementById("winLoseIcon").innerHTML=" ";
}

// new round button
document.getElementById("chooseLetter").onclick = function() {newRoundFunc()};


// game play
document.onkeyup = function (event){
  // the user guess, then logging the userGuess
  var playerGuess = event.key;
  
  letterGuess.push(playerGuess);
  for (var i = 1; i <= 10; i++){
    document.getElementById("lettersGuessed").innerHTML(letterGuess.indexOf(i))
  }
  console.log(`you pressed ${playerGuess}`);
  // counting the number of times that the function has been called
  numGuesses++;

  console.log(`this is the num of guesses ${numGuesses}`);
  // writing down the guesses remaining 

  if (numGuesses <= 8){
    remainingGuesses = 8 - numGuesses;

  document.getElementById("remainingGuesses").innerHTML= remainingGuesses;
  }
  // game rules

  if (computerGuess === playerGuess){
    playerWins++;
    document.getElementById("playerWin").innerHTML=playerWins;
    document.getElementById("winLoseIcon").innerHTML="you win man";
    console.log(playerWins);


  }
  else if (numGuesses === 8){
    playerLoses++;
    document.getElementById("playerLoses").innerHTML=playerLoses;
    document.getElementById("winLoseIcon").innerHTML="you lose man";

  }
}