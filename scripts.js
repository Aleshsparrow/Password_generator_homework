// Assignment Code
var generateBtn = document.querySelector("#generate");


var characters = ["A", "B", "C", "D", "E","F","G", "H","I", "J","K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2","3", "4","5", "6", "7", "8", "9", "!", "@", "#", "$","%", "&", "*"]
// Write password to the #password input
function writePassword() {
    
   
  var password = generatePassword();
  for (var i = 0; i = characters.length; i++);

  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER

function generate(){
    var complexcity = document.getElementById("slide").value;
    var values = ["A", "B", "C", "D", "E","F","G", "H","I", "J","K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2","3", "4","5", "6", "7", "8", "9", "!", "@", "#", "$","%", "&", "*"]
}




 