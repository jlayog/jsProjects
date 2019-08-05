var player1 = document.getElementsByTagName("button")[0];
var player2 = document.getElementsByTagName("button")[1];
var reset = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")
var numInput = document.querySelector("input[type='number']")
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


player1.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

player2.addEventListener("click", function() {
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

reset.addEventListener("click", scoreReset)




function scoreReset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
};

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    scoreReset();
});