let price;
let country = prompt("Enter your contry name");
console.log(country);
if (country === null) {
  console.log("Canceled by user");
}
country = country[0].toUpperCase() + country.slice(1).toLowerCase();
console.log(country);
switch (country) {
  case "China":
    price = 100;
    break;
  case "Chile":
    price = 250;
    break;
  case "Australia":
    price = 170;
    break;
  case "India":
    price = 80;
    break;
  case "Jamaica":
    price = 120;
    break;
  default:
    alert("Delivery is not available in your country");
}
console.log(`delivery to the ${country} will cost ${price} credits`);
