// Assignment code here

// An object to hold all possible characters
var characters = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}

// A function to select a random element from a string
function randomElement(x) {
  return x[Math.floor(Math.random()*(x.length))];
}

// A function that takes in user criteria and generates a password
function generatePassword() {
    // Prompt user for password length and store as a float
    var passwordLength = parseFloat(prompt("How long would you like your password to be?", 10));

    // Make sure the length is an integer or restart the function
    if (passwordLength % 1 !== 0) {
        alert("Password length must be an integer");
        generatePassword();

    // Make sure the length is between 8 and 128 or restart the function
    } else if (passwordLength < 8 || passwordLength > 128) {
        alert("Passwords must be between 8 and 128 characters");
        generatePassword();
    }

        // Create a variable to store the password as it is build
        var output = "";

        // Create a variable to store all allowed characters
        var allowedCharacters = "";

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);