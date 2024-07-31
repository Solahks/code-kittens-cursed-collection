//troll fuckery
function addTroll() {
    var src = "images/firefox2.png";
    showImage("images/firefox2.png", 276, 110, "Troll");
  }
  
  function showImage(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
  }
