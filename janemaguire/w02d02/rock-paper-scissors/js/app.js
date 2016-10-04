document.addEventListener("DOMContentLoaded", function () {

  var rockButton = document.getElementById("rock");
  var paperButton = document.getElementById("paper");
  var scissorsButton = document.getElementById("scissors");
  var userChoice = "";
  var choices = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * choices.length);
  var compChoice = choices[randomIndex];

  rockButton.addEventListener("click", function(){
      userChoice = "rock";
      if (compChoice === "rock") {
      console.log("Computer chose rock, it's a draw");
    } else if (compChoice === "paper") {
      console.log("Computer chose paper, computer wins");
      } else if (compChoice === "scissors") {
      console.log("Computer chose scissors, user wins");
      }
    });

  paperButton.addEventListener("click", function(){
      userChoice = "paper";
      if (compChoice === "paper") {
      console.log("Computer chose paper, it's a draw");
    } else if (compChoice === "scissors") {
      console.log("Computer chose scissors, computer wins");
    } else if (compChoice === "rock") {
      console.log("Computer chose rock, user wins");
      }
    });

  scissorsButton.addEventListener("click", function(){
      userChoice = "scissors";
      if (compChoice === "scissors") {
      console.log("Computer chose scissors, it's a draw");
    } else if (compChoice === "rock") {
      console.log("Computer chose rock, computer wins");
    } else if (compChoice === "paper") {
      console.log("Computer chose paper, user wins");
      }
    });

  });
