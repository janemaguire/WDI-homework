console.log("yay");

document.getElementById("button").addEventListener("click", calculate);

function calculate(e) {
  e.preventDefault();
  var input1 = document.getElementById("input1").value;
  var operator = document.getElementById("operator").value;
  var input2 = document.getElementById("input2").value;

switch (operator) {

  case "+":
  console.log((parseFloat(input1)) + parseFloat(input2));
  break;

  case "-":
  console.log((parseFloat(input1)) - parseFloat(input2));
  break;

  case "*":
  console.log((parseFloat(input1)) * parseFloat(input2));
  break;

  case "/":
  console.log((parseFloat(input1)) / parseFloat(input2));
  break;
}

}
