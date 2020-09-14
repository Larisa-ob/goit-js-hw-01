let input;
let total = 0;
do {
  input = prompt("Enter the namber");
  console.log(input);
  total += Number(input);
} while (input !== null);
alert(`The total amount is ${total}`);
