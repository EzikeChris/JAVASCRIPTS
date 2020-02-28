var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickcolor = colors[3];
var colorDisplay =document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

         
for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    sqaures[i].style.background = colors[i];

    //add click listeners to squares 
    squares[i].addEventListener("click", function(){
        alert("clicked a square");
        
    });
}