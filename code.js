function myFunction(e) {
  x = e.clientX;
  y = e.clientY;
  //coor = "Coordinates: (" + x + "," + y + ")";
  //document.getElementById("demo").innerHTML = coor;
  document.getElementById("box").style.transform =
    "translate( " + (x - 45) + "px, " + (y - 45) + "px)";
  document.getElementById("box").style.display = "block";
  // document.getElementById("box").style.animation = "box-size 0.5s linear 1";
}

// function myDrag() {
//     document.getElementById("box").style.animation = "box-size 0.5s linear 1";
// }

function clearCoor() {
  // document.getElementById("demo").innerHTML = "";
  document.getElementById("box").style.display = "block";
}
