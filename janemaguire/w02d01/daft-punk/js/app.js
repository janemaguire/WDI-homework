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

var work_it = document.getElementById('work_it');
var button = document.getElementById('work_it');

button.addEventListener("click", function() {

work_it.src = "/sounds/work_it.wav";
document.work_it.play();

  });
