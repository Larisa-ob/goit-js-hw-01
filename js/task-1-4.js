const credits = 23580;
const pricePerDroid = 300;
let totalPrice;
let quantityPrice = prompt("how many droids do you want to buy?");
if (quantityPrice === null) {
  console.log("canceled by user");
} else {
  totalPrice = Number(quantityPrice) * pricePerDroid;
  totalPrice =
    totalPrice > credits
      ? console.log("Insufficient funds in the account")
      : console.log(
          `you bought ${quantityPrice} droids with ${
            credits - totalPrice
          } credits left on your account`
        );
}
