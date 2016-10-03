var buttons = document.querySelectorAll("li");

for (var i=0; i<buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    console.log(sounds);
  });
}

var sounds = document.getElementsByClassName("tile"); {
  for (var i=0; i<sounds.length; i++) {
    console.log(sounds[i].innerHTML);
  }
}
//
// var noiseMaker = document.getElementById('noise-maker');
// var button = document.getElementById('play-button');
//
// button.addEventListener("click", function() {
//
// noiseMaker.src = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Eastern_Whipbird.ogg";
// noiseMaker.play();
//
// });
