var tiles = document.getElementsByClassName("tile");
var clickCounter = 0;
var clearButton = document.getElementById("reset");

for (var i=0; i<tiles.length; i++) {
  tiles[i].addEventListener("click", function() {
    if (!this.textContent) {

      clickCounter++;

      var player = clickCounter%2 === 0 ? "0": "X";
      this.textContent = player;

      

      if (tiles[0].textContent && tiles[0].textContent === tiles[1].textContent && tiles[0].textContent === tiles[2].textContent) {
        document.getElementById("output").innerHTML = player + " has won"; tiles[0].style.background = "lightblue"; tiles[1].style.background = "lightblue"; tiles[2].style.background = "lightblue";
      }
      else if (tiles[3].textContent && tiles[3].textContent === tiles[4].textContent && tiles[3].textContent === tiles[5].textContent) {
        document.getElementById("output").innerHTML = player + " has won"; tiles[3].style.background = "lightblue"; tiles[4].style.background = "lightblue"; tiles[5].style.background = "lightblue";
      }
      else if (tiles[6].textContent && tiles[6].textContent === tiles[7].textContent && tiles[6].textContent === tiles[8].textContent) {
        document.getElementById("output").innerHTML = player + " has won"; tiles[6].style.background = "lightblue"; tiles[7].style.background = "lightblue"; tiles[8].style.background = "lightblue";
      }
      else if (tiles[0].textContent && tiles[0].textContent === tiles[3].textContent && tiles[0].textContent === tiles[6].textContent) {
        document.getElementById("output").innerHTML = player + " has won"; tiles[0].style.background = "lightblue"; tiles[3].style.background = "lightblue"; tiles[6].style.background = "lightblue";
      }
      else if (tiles[1].textContent && tiles[1].textContent === tiles[4].textContent && tiles[1].textContent === tiles[7].textContent) {
        document.getElementById("output").innerHTML = player + " has won"; tiles[1].style.background = "lightblue"; tiles[4].style.background = "lightblue"; tiles[7].style.background = "lightblue";
      }
      else if (tiles[2].textContent && tiles[2].textContent === tiles[5].textContent && tiles[2].textContent === tiles[8].textContent) {
        document.getElementById("output").innerHTML = player + " has won"; tiles[2].style.background = "lightblue"; tiles[5].style.background = "lightblue"; tiles[8].style.background = "lightblue";
      }
      else if (tiles[0].textContent && tiles[0].textContent === tiles[4].textContent && tiles[0].textContent === tiles[8].textContent) {
        document.getElementById("output").innerHTML = player + " has won"; tiles[0].style.background = "lightblue"; tiles[4].style.background = "lightblue"; tiles[8].style.background = "lightblue";
      }
      else if (tiles[2].textContent && tiles[2].textContent === tiles[4].textContent && tiles[2].textContent === tiles[6].textContent) {
        document.getElementById("output").innerHTML = player + " has won"; tiles[2].style.background = "lightblue"; tiles[4].style.background = "lightblue"; tiles[6].style.background = "lightblue";
      }
    }
  });
}

//Reset button

clearButton.addEventListener("click", function (){
  clickCounter = 0;
  for (var i=0; i<tiles.length ; i++){
    tiles[i].textContent = "";
    tiles[i].style.background = "";
    output.textContent ="";
  }
});
