
Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
    var strength = document.getElementById("slide")
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    var passwordText = ""
   
  var password = generatePassword();
  for (var i = 0; i = strength.length; i++);
    passwordText = passwordText + characters.charAt(Math.floor(Math.random) * characters.length)
    
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  generateBtn.addEventListener("click", writePassword);

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

// function copyToClipboard() {
  // BONUS 
// }

// Add event listener to generate button


// BONUS EVENT LISTENER

// function generate(){
//     var complexcity = document.getElementById("slide").value;
//     var values = ["A", "B", "C", "D", "E","F","G", "H","I", "J","K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2","3", "4","5", "6", "7", "8", "9", "!", "@", "#", "$","%", "&", "*"]
// }




 