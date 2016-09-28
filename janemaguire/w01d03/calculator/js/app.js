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

// Tried mortgage calculator

// var deposit = prompt("How much is your deposit?");
// var yearlyRate = prompt("What is your yearly interest rate?");
// var payments = prompt("How many payments will you make?");
//
// var monthlyRate = ((yearlyRate / 12) / 100);
//
// var a = monthlyRate * Math.pow((1 + monthlyRate), payments);
// var b = (Math.pow((1 + monthlyRate), payments)) - 1;
//
// monthlyPayment = deposit * (a + b);
//
// alert(monthlyPayment);
