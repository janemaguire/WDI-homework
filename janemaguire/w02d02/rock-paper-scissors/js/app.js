document.addEventListener("DOMContentLoaded", function () {
  var status = document.getElementById("status");
  var rockButton = document.getElementById("rock");
  var paperButton = document.getElementById("paper");
  var scissorsButton = document.getElementById("scissors");
  var userChoice = "";
  var choices = ["rock", "paper", "scissors"];
  var compChoice = "";
  var userScore = 0;
  var compScore = 0;
  var userScoreBoard = document.getElementById('humanScore');
  var computerScoreBoard = document.getElementById('computerScore');

  rockButton.addEventListener("click", function(){

    userChoice = "rock";
    var randomIndex = Math.floor(Math.random() * choices.length);
    compChoice = choices[randomIndex];

    if (compChoice === "rock") {
      status.innerHTML = "Computer chose rock, it's a draw";
    } else if (compChoice === "paper") {
      status.innerHTML = "Computer chose paper, computer wins";
      compScore++;
    } else if (compChoice === "scissors") {
      status.innerHTML = "Computer chose scissors, user wins";
      userScore++;
    }

    userScoreBoard.innerHTML = userScore;
    computerScoreBoard.innerHTML = compScore;
  });

  paperButton.addEventListener("click", function(){
      userChoice = "paper";
      if (compChoice === "paper") {
        status.innerHTML = "Computer chose paper, it's a draw";
      } else if (compChoice === "scissors") {
        status.innerHTML = "Computer chose scissors, computer wins";
        compScore++;
      } else if (compChoice === "rock") {
        status.innerHTML = "Computer chose rock, user wins";
        userScore++;
      }

      userScoreBoard.innerHTML = userScore;
      computerScoreBoard.innerHTML = compScore;
    });

  scissorsButton.addEventListener("click", function(){
      userChoice = "scissors";
      if (compChoice === "scissors") {
        status.innerHTML = "Computer chose scissors, it's a draw";
      } else if (compChoice === "rock") {
        status.innerHTML = "Computer chose rock, computer wins";
        compScore++;
      } else if (compChoice === "paper") {
        status.innerHTML = "Computer chose paper, user wins";
        userScore++;
      }

      userScoreBoard.innerHTML = userScore;
      computerScoreBoard.innerHTML = compScore;
    });



  });
