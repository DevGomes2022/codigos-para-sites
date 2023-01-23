var square = document.getElementById("square");

document.addEventListener("mousemove", function(event) {
  square.style.left = (event.clientX - 50) + "px";
  square.style.top = (event.clientY - 50) + "px";
});
