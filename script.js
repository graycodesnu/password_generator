// Assignment Code

//elements 
var generateBtn = document.querySelector("#generate");

var password = document.querySelector("#password");
var lengthInput = document.querySelector("#inputs");
var uppercaseMarker = document.querySelector("#uppercase");
var lowercaseMarker = document.querySelector("#lowercase");
var numbersMarker = document.querySelector("#numbers");
var symbolsMarker = document.querySelector("#symbols");

//Define + call selectors function
var selectors = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol,
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    
  passwordText.value = password;


//selectors function 
  var typesCount = lower + upper + number + numbers + symbols;

  var typesArr = [{lower}, {upper}, {numbers}, {symbols}].filter
(
  item => Object.values(item)[0]
);

//no checkboxes selected
  if(typesCount === 0) {
    return "";
}

//loop
  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];
      writePassword += randomGen[funcName]();
    });
  }

  var generatePassword = writePassword.slice(0, length);
  return password;
}

//Generator functions for characters 

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

function getRandomNumber() {
 return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var length = +lengthInput.value;
  var hasUpper = uppercaseMarker.ariaChecked;
  var hasLower = lowercaseMarker.ariaChecked;
  var hasNumbers = numbersMarker.ariaChecked;
  var hasSymbols = symbolsMarker.ariaChecked;
  
  password.innerText = writePassword(length, hasUpper, hasLower, hasNumbers, hasSymbols);
}