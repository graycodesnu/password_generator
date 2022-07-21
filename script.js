// Assignment Code

//elements
var generateBtn = document.querySelector("#generate");

var passwordTextEl = document.querySelector("#password");
var lengthInputEl = document.querySelector("#length");
var uppercaseCheckBoxEl = document.querySelector("#uppercase");
var lowercaseCheckBoxEl = document.querySelector("#lowercase");
var numbersCheckBoxEl = document.querySelector("#numbers");
var symbolsCheckBoxEl = document.querySelector("#symbols");

// passwordTextEl.innerHTML = "this is a string";

// Define valid characters
var validCharacters;
var getUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var getLowercase = "abcdefghijklmnopqrstuvwxyz";
var getSymbols = "!@#$%^&*()";
var getNumbers = "0123456789";

// Link to selected (or unselected) checkboxes

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
    var getUppercase = uppercaseCheckBoxEl
    // Maybe write: uppercaseRandom ( randomize?)  
      var uppercaseCheckBoxEl = document.getElementById('uppercase');
      if(uppercaseCheckBoxEl.checked) {
        console.log('yes uppercase');
      } else {
        console.log('no uppercase');
      }
      // if (getUppercase.checked) {
      // console.log('get uppercase');
      // } else if (getUppercase = false) {
      //   console.log('no uppercase');
      // }


      
  // Select el >>> .innerHTML = value
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
