// var buttons = document.querySelectorAll("li");
// var sounds = document.getElementsByClassName("tile");
//
// for (var i=0; i<buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     this.play(innerHTML);
//   });
// }
//
// var sounds = document.getElementsByClassName("tile"); {
//   for (var i=0; i<sounds.length; i++) {
//     console.log(sounds[i].innerHTML);
//   }
// }

// Put event listener on first tile and play correct music

// Get audio
// Get button
// Put event listener on button
// Make function

var playWorkIt = document.getElementById("workit");
var button  =  document.getElementById("1");

button.addEventListener("click", function (){
  playWorkIt.src = "sounds/work_it.wav";
  playWorkIt.play();
});
