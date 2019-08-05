var stringGuess = prompt("Guess a Number between 1 and 10");
var guess = Number(stringGuess);

function randomNumber() {
    let min = 1;
    let max = 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var secretNumber = randomNumber;
console.log(secretNumber);
