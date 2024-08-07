let text;
let person = prompt("Please enter your name:", "");
if(person = "codeKitten") {
  text = "You're too early!  The secret path is still being paved!";
}
else if (person = "" || person == null) {
    text = "I'm sorry, that is the incorrect response."
}
document.getElementById("secret").innerHTML = text;
