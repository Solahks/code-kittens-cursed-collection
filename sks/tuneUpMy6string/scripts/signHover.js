// SIGN FOR MENU
menu.addEventListener("mouseover", sign);
function sign() {
  document.getElementById("sign").style.visibility = "visible";
  setTimeout(rehideSign, 2000);}
function rehideSign() {
  document.getElementById("sign").style.visibility = "hidden";
}

//LOVES PETS SIGN
myCat.addEventListener("mouseover", petSign);
function petSign() {
  document.getElementById("pets").style.visibility = "visible";
  setTimeout(rehidePetSign, 1000);
}
function rehidePetSign() {
  document.getElementById("pets").style.visibility = "hidden";
}

mysixString = getElementById("audio-button6");
mysixString.addEventListener("mouseover", petSign);
function sixString() {
  document.getElementById("pets").style.visibility = "visible";
  setTimeout(rehidePetSign, 1000);
  console.log("6string");
}
function rehidePetSign() {
  document.getElementById("pets").style.visibility = "hidden";
}
