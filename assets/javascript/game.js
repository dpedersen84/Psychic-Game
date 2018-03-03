// Arrays

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                "u", "v", "w", "x", "y", "z"];

var turns = 10;

var wins = 0;

var losses = 0;

// Game Picks Random Letter

var letterRandom = letter[Math.floor(Math.random() * letter.length)];
console.log(letterRandom);

// Capture key

document.onkeyup = function(event) {
    console.log(event.key);

    var key = [];

    // Determines whether key pressed is correct guess
    if (letterRandom === event.key) {
    alert("Correct!") //Correct Alert Window
    wins = wins + 1;
    console.log(wins);
    document.querySelector("#wins").innerHTML = "Wins: " + wins; 
    } else {
    alert("wrong!") //Wrong Alert Window
    losses = losses + 1;
    console.log(losses);
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    }


};

