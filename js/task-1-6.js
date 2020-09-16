let input;
let total = 0;
do {
  input = prompt("Enter the namber");
  const invalidNamber = Number(input);
  if (Number.isNaN(invalidNamber)) {
    alert(`No number is entered, please try again`);
  } else {
    console.log(input);
    total += Number(input);
  }
} while (input !== null);
alert(`The total amount is ${total}`);
