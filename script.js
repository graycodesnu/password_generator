// Assignment Code

//elements
var generateBtn = document.querySelector("#generate");

var password = document.querySelector("#password");
var lengthInputEl = document.querySelector("#inputs");
var uppercaseCheckBoxEl = document.querySelector("#uppercase");
var lowercaseCheckBoxEl = document.querySelector("#lowercase");
var numbersCheckBoxEl = document.querySelector("#numbers");
var symbolsCheckBoxEl = document.querySelector("#symbols");

var validCharacters = "abcdefghijklmnopqrstuvwxyz";

var password = "";

while (password.length < passwordLength){

var randomIndex = Math.floor(Math.random() * validCharacters.length);
var randomCharacter = validCharacters[randomIndex];
  password += randomCharacter;

for (var i = 0; i < passwordLength; i ++){}



if (includeLowercase) = "" {
  validCharacters += "123456789".getRandomNumber
}


function writePassword() {
  var length = Number.parseInt(lengthInputEl.value, 10);
  var hasUpper = uppercaseCheckBoxEl.ariaChecked;
  var hasLower = lowercaseCheckBoxEl.ariaChecked;
  var hasNumbers = numbersCheckBoxEl.ariaChecked;
  var hasSymbols = symbolsCheckBoxEl.ariaChecked;

//Define + call selectors function
// var selectors = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbols: getRandomSymbol,
// };

// Write password to the #password input
function generatePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  //selectors function
  var typesCount = lower + upper + number + numbers + symbols;

  var typesArr = [{ lower }, { upper }, { numbers }, { symbols }].filter(
    (item) => Object.values(item)[0]
  );

  //no checkboxes selected
  if (typesCount === 0) {
    return "";
  }

  //loop
  // for (let i = 0; i < length; i += typesCount) {
  //   typesArr.forEach((type) => {
  //     var funcName = Object.keys(type)[0];
  //     writePassword += randomGen[funcName]();
  //   });
  // }

  var generatePassword = writePassword.slice(0, length);
  return password;
}

//Generator functions for characters

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//   const symbols = "!@#$%^&*(){}[]=<>/,.";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  password.innerText = writePassword(
    length,
    hasUpper,
    hasLower,
    hasNumbers,
    hasSymbols
  );
}
