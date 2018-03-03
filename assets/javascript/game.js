// Arrays

const letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                "u", "v", "w", "x", "y", "z"];

let turns = 9;

let wins = 0;

let losses = 0;

// let letterPicked = [];

// Game Picks Random Letter(sets letterRandom variable to random choice of letter array)

let letterRandom = letter[Math.floor(Math.random() * letter.length)];
console.log("Computer pick = " + letterRandom);

// Sets turnsRemaining Function to show Turns Left on main page

function turnsRemaining () {
    document.getElementById("turns").innerHTML = "Turns Left: " + turns;
    
}

// Sets lettersUsed function to show Letters picked on main page

function lettersUsed () {
    document.getElementById("letterPicked").innerHTML = "Letters Picked: " + letterPicked.join(' ');
    
}

// Reset function

function reset () {
    var turns = 9;

}

// // Capture key

document.onkeyup = function(event) {
    console.log("Key Pressed = " + event.key); // Key user presses

    var letterPicked = [];

    document.getElementById("letters").innerHTML = letterPicked;
    
    function lettersUsed () {
        letterPicked.push(event.key);
        document.getElementById("letters").innerHTML = letterPicked;
    }

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
    reset ();
    }


};

