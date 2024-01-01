//TODO
//win condition
//loss condition
//random word selector---DONE
//keydown listener
//reset button logic
//start button logic
//timer
//underscore array builder==DONE


var startButton = document.querySelector(".start-button");
var underScoreContainer = document.querySelector(".word-blanks");
var timerTextEl = document.querySelector(".timer-count");
var winEl = document.querySelector(".win");
var loseEl = document.querySelector(".lose");
var resetButton = document.querySelector(".reset-button");
var timerText = document.querySelector('.timer-text');

var wordLibrary = [
  "javascript",
  "variable",
  "function",
  "array",
  "christmas",
  "present",
  "holiday",
  "snowman",
  "rudolph",
];

var word;
var unsolvedWord;
var lettersRemaining;
var timeInterval;
var wins = localStorage.getItem("wins");
var losses = localStorage.getItem("losses");

startButton.addEventListener('click', function() {
    wordSelector();
    unscoreWord();
    setTime();
}
)

resetButton.addEventListener('click', function() {
    localStorage.clear();
    wins = 0;
    losses = 0;
}
)

document.addEventListener('keydown', keydownAction);
//take key press and compare it against the word, if matches then place letter at that index in empty array else underscore
function keydownAction(event) {
    var keyPress = ' ' + event.key + ' ';
    var newUnderScoreArr = [];
    var underScore = ' _ '
    for (var i = 0; i < word.length; i++) {
        if (keyPress === word[i]) {
            newUnderScoreArr[i] = keyPress;
        } else {
            newUnderScoreArr[i] = underScore;
        }
    }
    underScoreContainer.textContent = newUnderScoreArr.join(' ');
}

function wordSelector() {
    var randomNum = Math.floor(Math.random() * wordLibrary.length);
    word = wordLibrary[randomNum];
}

function unscoreWord() {
    var underScoreArr = [];
    var underScore = ' _ '
    for (var i = 0; i < word.length; i++) {
        underScoreArr[i] = underScore;
    };
    underScoreContainer.textContent = underScoreArr.join(' ');
};

function setTime() {
    var secondsLeft = 10;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerTextEl.textContent = secondsLeft; 

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            
        }
    }, 1000)
};

for ( var i = 0; i < word.length; i++) {
    if (word[i] === key) {
        underScoreContainer.textContent[i] = key
    }
}