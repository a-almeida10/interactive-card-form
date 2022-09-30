///Form variables
let getName = document.getElementById("form-name");
let getNumber = document.getElementById("form-number");
let getYear = document.getElementById("form-year");
let getMonth = document.getElementById("form-month");
let getCvc = document.getElementById("form-cvc");
let btnSubmit = document.getElementById("submit");

//Card Variables
let cardName = document.getElementById("card-name");
let cardNumber = document.getElementById("card-number");
let cardMonth = document.getElementById("card-month");
let cardYear = document.getElementById("card-year");
let cardCvc = document.getElementById("card-cvc");

//Event Listeners
btnSubmit.addEventListener("click", fillCard);

//Functions
function fillCard() {
  cardName.innerText = getName.value;
  cardNumber.innerText = getNumber.value;
  cardMonth.innerText = getMonth.value;
  cardYear.innerText = getYear.value;
  cardCvc.innerText = getCvc.value;
}
