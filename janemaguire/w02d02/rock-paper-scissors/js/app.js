document.addEventListener("DOMContentLoaded", function () {

  var rockButton = document.getElementById("rock");
  var paperButton = document.getElementById("paper");
  var scissorsButton = document.getElementById("scissors");

  rockButton.addEventListener("click", function(){
      console.log("rock clicked");
    });

  paperButton.addEventListener("click", function(){
      console.log("paper clicked");
    });

  scissorsButton.addEventListener("click", function(){
      console.log("scissors clicked");
    });
});
