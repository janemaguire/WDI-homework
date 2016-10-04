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
var button1  =  document.getElementById("1");

button1.addEventListener("click", function () {
  playWorkIt.src = "sounds/work_it.wav";
  playWorkIt.play();
});

var playMakeIt = document.getElementById("makeit");
var button2  =  document.getElementById("2");

button2.addEventListener("click", function () {
  playMakeIt.src = "sounds/make_it.wav";
  playMakeIt.play();
});

var playDoIt = document.getElementById("doit");
var button3 = document.getElementById("3");

button3.addEventListener("click", function () {
  playDoIt.src = "sounds/do_it.wav";
  playDoIt.play();
});

var playMakesUs = document.getElementById("makesus");
var button4 = document.getElementById("4");

button4.addEventListener("click", function () {
  playMakesUs.src = "sounds/makes_us.wav";
  playMakesUs.play();
});

var playHarder = document.getElementById("harder");
var button5 = document.getElementById("5");

button5.addEventListener("click", function () {
  playHarder.src = "sounds/harder.wav";
  playHarder.play();
 });

var playBetter = document.getElementById("better");
var button6 = document.getElementById("6");

button6.addEventListener("click", function () {
  playBetter.src = "sounds/better.wav";
  playBetter.play();
});

var playFaster = document.getElementById("faster");
var button7 = document.getElementById("7");

button7.addEventListener("click", function () {
  playFaster.src = "sounds/faster.wav";
  playFaster.play();
});

var playStronger = document.getElementById("stronger");
var button8 = document.getElementById("8");

button8.addEventListener("click", function () {
  playStronger.src = "sounds/stronger.wav";
  playStronger.play();
});

var playMoreThan = document.getElementById("morethan");
var button9 = document.getElementById("9");

button9.addEventListener("click", function () {
  playMoreThan.src = "sounds/more_than.wav";
  playMoreThan.play();
});

var playHour = document.getElementById("hour");
var button10 = document.getElementById("10");

button10.addEventListener("click", function () {
  playHour.src = "sounds/hour.wav";
  playHour.play();
});

var playOur = document.getElementById("our");
var button11 = document.getElementById("11");
button11.addEventListener("click", function () {
  playOur.src = "sounds/our.wav";
  playOur.play();
});

var playNever = document.getElementById("never");
var button12 = document.getElementById("12");
button12.addEventListener("click", function () {
  playNever.src = "sounds/never.wav";
  playNever.play();
});

var playEver = document.getElementById("ever");
var button13 = document.getElementById("13");
button13.addEventListener("click", function () {
  playEver.src = "sounds/ever.wav";
  playEver.play();
});

var playAfter = document.getElementById("after");
var button14 = document.getElementById("14");
button14.addEventListener("click", function () {
  playAfter.src = "sounds/after.wav";
  playAfter.play();
});

var playWorkIs = document.getElementById("workis");
var button15 = document.getElementById("15");
button15.addEventListener("click", function () {
  playWorkIs.src = "sounds/work_is.wav";
  playWorkIs.play();
});

var playOver = document.getElementById("over");
var button16 = document.getElementById("16");
button16.addEventListener("click", function () {
  playOver.src = "sounds/over.wav";
  playOver.play();
});
