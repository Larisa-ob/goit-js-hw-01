const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt("Enter password");
const otvet = "Canceled by user";
const oshib = "Access is denied. Wrong password!";
message =
  message === null
    ? console.log("Enter password")
    : message !== ADMIN_PASSWORD
    ? console.log(oshib)
    : console.log(otvet);
