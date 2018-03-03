// Arrays

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                "u", "v", "w", "x", "y", "z"];

var turns = 9;

var wins = 0;

var losses = 0;

var letterPicked = [];

// Game Picks Random Letter(sets letterRandom variable to random choice of letter array)

var letterRandom = letter[Math.floor(Math.random() * letter.length)];
console.log("Computer pick = " + letterRandom);

// Sets turnsRemaining Function to show Turns Left on main page

function turnsRemaining () {
    document.getElementById("turns").innerHTML = "Turns Left: " + turns;
    console.log(turns);
}

// Sets lettersUsed function to show Letters picked on main page

function lettersUsed () {
    document.getElementById("letterPicked").innerHTML = "Letters Picked: " + letterPicked.join(' ');
    console.log(lettersUsed);
}

// Reset function

function reset () {
    var turns = 9;

}

// // Capture key

document.onkeyup = function(event) {
    console.log("Key Pressed = " + event.key); // Key user presses
    console.log(letterPicked);
    

    // Determines whether key pressed is correct guess
    if (letterRandom === event.key) {
    alert("Correct!") //Correct Alert Window
    wins = wins + 1;
    console.log("Wins = "  + wins);
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    reset ();
    
    } else {
    alert("wrong!") //Wrong Alert Window
    losses = losses + 1;
    console.log("Losses = " + losses);
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    }


};

