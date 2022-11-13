//! Elements by ID
var generateBtn = document.querySelector("#generate");

//! Define valid characters and requirements
  var getUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var getLowercase = "abcdefghijklmnopqrstuvwxyz";
  var getSymbols = "!@#$%^&*()";
  var getNumbers = "0123456789";

  var passwordLength = 0;
  var password = "";
  var allValidCharacters = "";

// Write password to the #password input
function writePassword() {
  console.log("hi");
  allValidCharacters = "";
  password = "";
  passwordLength = "";

  //! Prompts
  // Length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Enter a number between 8 and 128.");
  };

  // Uppercase req
  var uppercaseReq = window.confirm("Should uppercase characters be included?");
  if (uppercaseReq) {
    allValidCharacters += getUppercase;
    console.log("UPPERCASE REQS", getUppercase)
  };

  // Lowercase req
  var lowercaseReq = window.confirm("Should lowercase characters be included?");
  if (lowercaseReq) {
    allValidCharacters += getLowercase;
    console.log("LOWERCASE REQS", getLowercase)
  };

  // Symbol req
  var symbolReq = window.confirm("Should symbols be included?");
  if (symbolReq) {
    allValidCharacters += getSymbols;
    console.log("SYMBOL REQ", getSymbols)
  };

  // Number req 
  var numberReq = window.confirm("Should numbers be included?");
  if (numberReq) {
    allValidCharacters += getNumbers;
    console.log("NUMBER REQ", numberReq)
  };
}

//! Generate password from requirements using math.floor and math.random
function generatePassword() {
  writePassword();
  for (let i = 1; i <= passwordLength; i++) {
    let number = Math.floor(Math.random() * allValidCharacters.length)
    password += allValidCharacters[number];
  }
  return password;
}

//! Display password text
function displayPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
}

//! Add event listener to generate button
generateBtn.addEventListener("click", displayPassword);
