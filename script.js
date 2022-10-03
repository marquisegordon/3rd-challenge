// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specChar = "!@#$%^&*\|/?.,`~=+-_";
var selected = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Adds functionality to generatePassword variable
function generatePassword() {
  var endResult = "";
  var length = window.prompt("Length of password? (8-128 characters)");
  var includeUpper = confirm("Does it contain upper case letters?");
  var includeLower = confirm("Does it contain lower case letters?");
  var includeNumbers = confirm("Does it contain numbers?");
  var includeSpecial = confirm("Does it contain special characters?");
  // If user does not input a number between 8 and 128 window displays "Must put a number between 8 and 128!" and restarts
  if (length < 8 || length > 128) {
    window.alert("Must put a number between 8 and 128!");
    return generatePassword();
  }

  // If user declines all window prompts window displays "You must choose 1 character type!"
  if (!includeUpper && !includeLower && !includeNumbers && !includeSpecial){
    alert("You must choose 1 character type!");
    return generatePassword()
  }

  if(includeUpper){
    selected += upperCase
  }

  if(includeLower){
    selected += lowerCase
  }

  if(includeNumbers) {
    selected += number
  }

  if(includeSpecial) {
    selected += specChar
  }

for (var i = 0; i < length; i++) {
  endResult += selected.charAt(Math.floor(Math.random() * selected.length));
}
return endResult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
