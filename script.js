//! Elements by ID
var generateBtn = document.querySelector("#generate");

// var passwordTextEl = document.querySelector("#password");
// var lengthInputEl = document.querySelector("#length");
// var uppercaseCheckBoxEl = document.querySelector("#uppercase");
// var lowercaseCheckBoxEl = document.querySelector("#lowercase");
// var numbersCheckBoxEl = document.querySelector("#numbers");
// var symbolsCheckBoxEl = document.querySelector("#symbols");


// document.getElementById("password").innerHTML = password

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

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt(
      "Enter a number between 8 and 128."
    );
  }

  var uppercaseReq = window.confirm("Should uppercase characters be included?");
  if (uppercaseReq) {
    allValidCharacters += getUppercase;
  };

  }

//   // Uppercase function
//   var getUppercase = uppercaseCheckBoxEl;
//   var uppercaseCheckBoxEl = document.getElementById("uppercase");
//   if (uppercaseCheckBoxEl.checked) {
//     console.log("yes uppercase");
//     // return Math.floor(Math.random(getUppercase));
//   } else {
//     console.log("no uppercase");
//   }

//   // Lowercase function
//   var getLowercase = lowercaseCheckBoxEl;
//   var lowercaseCheckBoxEl = document.getElementById("lowercase");
//   if (lowercaseCheckBoxEl.checked) {
//     console.log("yes lowercase");
//     // return Math.floor(Math.random(getLowercase));
//   } else {
//     console.log("no lowercase");
//   }

//   // Symbols function
//   var getSymbols = symbolsCheckBoxEl;
//   var symbolsCheckBoxEl = document.getElementById("symbols");
//   if (symbolsCheckBoxEl.checked) {
//     console.log("yes symbols");
//     // return Math.floor(Math.random(getSymbols));
//   } else {
//     console.log("no symbols");
//   }

//   // Numbers function
//   var getNumbers = numbersCheckBoxEl;
//   var numbersCheckBoxEl = document.getElementById("numbers");
//   if (numbersCheckBoxEl.checked) {
//     console.log("yes numbers");
//     // return Math.floor(Math.random(getNumbers));
//   } else {
//     console.log("no numbers");
//   }

// // Will write to password
//   // Select el >>> .innerHTML = value
//   passwordTextEl.innerHTML = "";

//   return generatePassword();

// }

// Will write to password text element 

function generatePassword() {
  const password = writePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
    // For loop
    for (let i = 0; i < lengthInputValue; i ++) {
      console.log("running for loop");
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
