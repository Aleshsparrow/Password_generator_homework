// Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

// function copyToClipboard() {
//   // BONUS 
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // BONUS EVENT LISTENER

function generatePassword()
{
    var generateBtn = getElementById("generate")

    var desiredLength = document.getElementById("user-length").value
var passValues = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"
var Password = ""

for (var i = 0; i <= desiredLength; i++){
   console.log(passValues)
   
    // generatedPassword = generatedPassword + passValues.charAt(Math.floor(Math.random() * Math.floor(passValues.length - 1)));
    // generateBtn.addEventListener("click", generatePassword);
}

}


