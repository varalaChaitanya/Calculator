const displayinput = document.getElementById("display");

function appendToDisplay(value) {
  displayinput.value += value;
}

function clearDisplay() {
  displayinput.value = "";
}

function calculateResult() {
  try {
    displayinput.value = eval(displayinput.value); // If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.
  } catch (error) {
    // handles the error occured in try block
    displayinput.value = "Wrong expression!";
  }
}

function calculateSquare() {
  const number = parseFloat(display.value);
  if (!isNaN(number)) {
    displayinput.value = Math.pow(number, 2);
  } else {
    displayinput.value = "Not a Number";
  }
}
