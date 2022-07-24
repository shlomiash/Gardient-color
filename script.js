// putting html elements inside var
var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gardient"); 
var btn1 = document.querySelector(".btn");

// set background colors
function setColor() {
body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	h3.textContent = body.style.background;
}

// random numbers
function randomNumbers() {
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	h3.textContent = body.style.background;
}


// initial starting loading page colors
h3.textContent = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";;



color1.addEventListener("input",setColor);
color2.addEventListener("input",setColor);
btn1.addEventListener("click",randomNumbers)

