console.log("js loaded");

var userFirstNumber = prompt("What is your first number?");
var userAction = prompt("What action would you like to take? Choose from + , - , / , * , p (to the power of) , s (square root of). ");

if (userAction !== "s") {
    var userSecondNumber = prompt ("What is your second number?");
}

switch(userAction) {

  case "+":
  alert("The answer is " + (parseFloat(userFirstNumber) + parseFloat(userSecondNumber)));
  break;

  case "-":
  alert("The answer is " + (parseFloat(userFirstNumber) - parseFloat(userSecondNumber)));
  break;

  case "/":
  alert("The answer is " + (parseFloat(userFirstNumber) / parseFloat(userSecondNumber)));
  break;

  case "*":
  alert("The answer is " + (parseFloat(userFirstNumber) * parseFloat(userSecondNumber)));
  break;

  case "p":
  alert("The answer is " + (Math.pow(parseFloat(userFirstNumber), parseFloat(userSecondNumber))));
  break;

  case "s":
  alert("The answer is " + (Math.sqrt(parseFloat(userFirstNumber))));
  break;

  default:
  alert("Please choose an action from the list!");
}
