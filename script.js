// Assignment Code

//elements
var generateBtn = document.querySelector("#generate");

var passwordTextEl = document.querySelector("#password");
var lengthInputEl = document.querySelector("#length");
var uppercaseCheckBoxEl = document.querySelector("#uppercase");
var lowercaseCheckBoxEl = document.querySelector("#lowercase");
var numbersCheckBoxEl = document.querySelector("#numbers");
var symbolsCheckBoxEl = document.querySelector("#symbols");

// Will write to textbox element
passwordTextEl.innerHTML = 'string';


// document.getElementById("password").innerHTML = password

// Define valid characters
var validCharacters;
var getUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var getLowercase = "abcdefghijklmnopqrstuvwxyz";
var getSymbols = "!@#$%^&*()";
var getNumbers = "0123456789";

// Link criteria functions to password field/function

// Write password to the #password input
function writePassword() {
  console.log("hi");
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(lengthInputEl.value);
  var lengthInputValue = lengthInputEl.value;
  if (lengthInputValue === 128) {
    console.log("yay!");
  } else {
    console.log("no");
  }

  passwordText.value = password;

  // Uppercase function
  var getUppercase = uppercaseCheckBoxEl;
  var uppercaseCheckBoxEl = document.getElementById("uppercase");
  if (uppercaseCheckBoxEl.checked) {
    console.log("yes uppercase");
    return Math.floor(Math.random(getUppercase));
  } else {
    console.log("no uppercase");
  }

  // Lowercase function
  var getLowercase = lowercaseCheckBoxEl;
  var lowercaseCheckBoxEl = document.getElementById("lowercase");
  if (lowercaseCheckBoxEl.checked) {
    console.log("yes lowercase");
    return Math.floor(Math.random(getLowercase));
  } else {
    console.log("no lowercase");
  }

  // Symbols function
  var getSymbols = symbolsCheckBoxEl;
  var symbolsCheckBoxEl = document.getElementById("symbols");
  if (symbolsCheckBoxEl.checked) {
    console.log("yes symbols");
    return Math.floor(Math.random(getSymbols));
  } else {
    console.log("no symbols");
  }

  // Numbers function
  var getNumbers = numbersCheckBoxEl;
  var numbersCheckBoxEl = document.getElementById("numbers");
  if (numbersCheckBoxEl.checked) {
    console.log("yes numbers");
    return Math.floor(Math.random(getNumbers));
  } else {
    console.log("no numbers");
  }

  // Select el >>> .innerHTML = value
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
