//cat picture functions
myCat = document.getElementById("cat");
const eyeClose = setInterval(myCatClose, 3500);
const eyeOpen = setInterval(myCatOpen, 3550);
const mouthOpen = setInterval(catMouthOpen, 11500);
const mouthClose = setInterval(catMouthClose, 14500);

function catPet() {
  const mySrc = myCat.getAttribute("src");
  myCat.setAttribute("src", "images/cat4.png");
  const stopPets = setTimeout(endCatPets, 500);
  console.log("pet");
}

function myCatClose() {
  const mySrc = myCat.getAttribute("src");
  if (mySrc === "images/cat1.png") {
    myCat.setAttribute("src", "images/cat2.png");
  }
}

function myCatOpen() {
  const mySrc = myCat.getAttribute("src");
  if (mySrc === "images/cat2.png") {
    myCat.setAttribute("src", "images/cat1.png");
    setInterval(myCatOpen, 3500);
    console.log("open");
  }
  clearInterval(eyeOpen);
}

function catMouthOpen() {
  const mySrc = myCat.getAttribute("src");
  if (mySrc === "images/cat1.png") {
    myCat.setAttribute("src", "images/cat3.png");
  }
}

function catMouthClose() {
  const mySrc = myCat.getAttribute("src");
  if (mySrc === "images/cat3.png") {
    myCat.setAttribute("src", "images/cat1.png");
    setInterval(catMouthClose, 11500);
    console.log("mouth close");
  }
  clearInterval(mouthClose);
}

function endCatPets() {
  const mySrc = myCat.getAttribute("src");
  if (mySrc === "images/cat4.png") {
    myCat.setAttribute("src", "images/cat1.png");
  }
  console.log("endpets");
}