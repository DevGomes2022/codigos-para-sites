var rect1 = document.getElementById("rect1");
var rect2 = document.getElementById("rect2");
var rect3 = document.getElementById("rect3");

rect1.addEventListener("mouseover", function() {
    rect1.style.left = "0px";
    rect2.style.left = "200px";
    rect3.style.left = "400px";
    rect1.style.top = "0px";
    rect2.style.top = "0px";
    rect3.style.top = "0px";
});

rect1.addEventListener("mouseout", function() {
    rect1.style.left = "0px";
    rect2.style.left = "20px";
    rect3.style.left = "40px";
    rect1.style.top = "0px";
    rect2.style.top = "20px";
    rect3.style.top = "40px";
});

rect2.addEventListener("mouseover", function() {
    rect1.style.left = "0px";
    rect2.style.left = "200px";
    rect3.style.left = "400px";
    rect1.style.top = "0px";
    rect2.style.top = "0px";
    rect3.style.top = "0px";
});

rect2.addEventListener("mouseout", function() {
    rect1.style.left = "0px";
    rect2.style.left = "20px";
    rect3.style.left = "40px";
    rect1.style.top = "0px";
    rect2.style.top = "20px";
    rect3.style.top = "40px";
});

rect3.addEventListener("mouseover", function() {
    rect1.style.left = "0px";
    rect2.style.left = "200px";
    rect3.style.left = "400px";
    rect1.style.top = "0px";
    rect2.style.top = "0px";
    rect3.style.top = "0px";
});

rect3.addEventListener("mouseout", function() {
    rect1.style.left = "0px";
    rect2.style.left = "20px";
    rect3.style.left = "40px";
    rect1.style.top = "0px";
    rect2.style.top = "20px";
    rect3.style.top = "40px";
});