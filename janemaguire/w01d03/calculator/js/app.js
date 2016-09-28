console.log("js loaded");

var userFirstNumber = prompt("What is your first number?");
var userAction = prompt("What action would you like to take? Choose from + , - , / , * , p (to the power of) , s (square root of). ");

if (userAction === s) {
  console.log(Math.sqrt(parseFloat(userFirstNumber)));
}

else {
  var userSecondNumber = prompt ("What is your second number?");
}

switch(userAction) {

  case "+":
  console.log(parseFloat(userFirstNumber) + parseFloat(userSecondNumber));
  break;

  case "-":
  console.log(parseFloat(userFirstNumber) - parseFloat(userSecondNumber));
  break;

  case "/":
  console.log(parseFloat(userFirstNumber) / parseFloat(userSecondNumber));
  break;

  case "*":
  console.log(parseFloat(userFirstNumber) * parseFloat(userSecondNumber));
  break;

  case "p":
  console.log(Math.pow(parseFloat(userFirstNumber), parseFloat(userSecondNumber)));
  break;

  default:
  console.log("Please choose an action from the list!");
}
