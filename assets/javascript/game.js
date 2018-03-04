//VARIABLES
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

    
//Guesses Are Set To 10

function newGuessesLeft () {
    //Print to DOM
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

//Computer Picks Letter
function newGuessThisLetter () {
    this.guessThisLetter = this.computerLetters[Math.floor(Math.random() * this.computerLetters.length)];
    console.log("Computer Letter: " + guessThisLetter);

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

//MAIN PROCESS
//Key Event 
document.onkeyup = function(event) {
    guessesLeft--; //Subtracts from guessesLeft
    console.log("Guesses Left: " + guessesLeft); 
    console.log(event.key); 

    //Save Key Even To Variable
    var letter = String.fromCharCode(event.which).toLowerCase();

    //Put Letter Variable into Guessed Letters Array
        guessedLetters.push(letter); //Pushes Letter Variable to Guessed Letters Array
        newGuessesLeft(); //Update Guesses Left Variable on Key
        newGuessedLetters(); //Adds Letter to Guessed Letters Array on Key


    //If Correct Key Event
    if (letter === guessThisLetter) {
        wins++;
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
        document.getElementById("wins").innerHTML = "Wins: " + wins;//Print To DOM
        alert("Win!");
        reset();

    //Else If (Wrong) Letter Key Event    
    } else if(guessesLeft == 0) {
        losses++
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
        document.getElementById("losses").innerHTML = "Losses: " + losses; //Print To DOM
        alert("Game Over");
        reset();
    }
};

