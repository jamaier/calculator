// business logic
function add(number1, number2) {
  return number1 + number2;

}

function subtract(number1, number2) {
  return number1 - number2;
}

function div(number1, number2) {
  return number1 / number2;
}

function mult(number1, number2) {
  return number1 * number2;
}

// user interface logic
const number1 = parseInt(prompt('Enter a number:'));
const number2 = parseInt(prompt('Enter another number:'));

window.alert("The difference of your numbers =" + subtract(number1, number2)+ ".");
window.alert("The sum of your numbers =" + add(number1, number2)+ ".");
window.alert("The remainder of your numbers =" + div(number1, number2)+ ".");
window.alert("The product of your numbers =" + mult(number1, number2)+ ".");