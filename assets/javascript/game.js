// Letters To Choose
var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                "u", "v", "w", "x", "y", "z"];

//Stats Default
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var guessThisLetter = null;

//Computer Picks Letter
var computerChoice = computerLetters[Math.floor(Math.random() * computerLetters.length)];

//Guesses Are Set To 10

function newGuessesLeft () {
    //Print to DOM
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

//Computer Picks Letter
function newGuessThisLetter () {
    this.guessThisLetter = this.computerLetters[Math.floor(Math.random() * this.computerLetters.length)];

};

//What Has Been Guessed
function newGuessedLetters () {
    //Print to DOM
    document.getElementById("letters").innerHTML = "Letters Guessed: " + guessedLetters.join(", ");
};

//Reset Function
function reset () {
    guessesLeft = 10;
    guessedLetters = [];

    //Call
    newGuessesLeft();
    newGuessThisLetter();
    newGuessedLetters();
}
//Call
newGuessThisLetter();
newGuessesLeft();

//Key Event 
document.onkeyup = function(event) {
    guessesLeft--;
    console.log(guessesLeft);
    console.log(event.key);
    //Save Key Even To Variable
    var letter = String.fromCharCode(event.which).toLowerCase();
    //Put Letter Variable into Guessed Letters Array
    guessedLetters.push(letter);



    if (letter === guessThisLetter) {
        alert("Win!");
        reset();
    } else {
        alert("Wrong!");
    }
};

// // Game Picks Random Letter(sets letterRandom variable to random choice of letter array)

// randomLetter = computerLetters[Math.floor(Math.random() * computerLetters.length)];
// console.log("Computer pick = " + randomLetter);


// // // userTurns to HTML
// function newUserTurns () {
// document.getElementById("#userTurnsLeft").innerHTML =  "Turns Left: " + userTurns;
// };

// var newComputerChoice = function () {
//     this.computerChoice = this.computerLetters[Math.floor(Math.random() * this.computerLetters.length)];
// };

// var userHasGuessed = function () {
//     document.getElementById("#userGuess").innerHTML = "Guessed: " + userGuesses.join(", ");
// };

// var reset = function () {
//     userTurns = 9;
//     userGuesses = [];

//     newUserTurns ();
//     newComputerChoice ();
//     userHasGuessed ();
// }


// // // Capture key
// document.onkeyup = function(event) {
//     console.log("Key Pressed = " + event.key); // Key user presses

//     var x = String.fromCharCode(event.key).toLowerCase();
//     document.getElementById("guess").innerHTML = x;
// }

//     // // Determines whether key pressed is correct guess
//     // if (randomLetter === event.key) {
//     // alert("Correct!") //Correct Alert Window
//     // userWins ++; // Update Wins
//     // console.log("Wins = "  + userWins); // Console Log Wins
//     // document.getElementById("wins").innerHTML = "Wins: " + userWins; // Update Wins on DOM

    
//     // } else {
//     // alert("Wrong!") //Wrong Alert Window
//     // userTurns --; // Reduce Turns
//     // document.getElementById("userGuess").innherHTML = "Guessed:" + letterPicked;
//     // console.log("Turns = " + userTurns); // Console Log Losses
//     // document.getElementById("userTurnsLeft").innerHTML = "Turns Left: " + userTurns; // Update Turns on DOM
    
//     // };


