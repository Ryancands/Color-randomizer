const colors = [
	"Green",
	"Red",
	"Yellow",
	"Blue",
	"Orange",
	"Green",
	"Violet",
	"Black",
	"White",
	"Gray",
	"Maroon",
	"Cornflowerblue",
	"Cyan",
	"Darkseagreen",
	"Gold",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const box = document.getElementById("box");
const h2 = document.getElementById("h2");

btn.addEventListener("click", function () {
	const randomNumber = getRandomNumber();
	console.log(randomNumber);

	box.style.backgroundColor = colors[randomNumber];
	color.style.color = colors[randomNumber]

	color.textContent = colors[randomNumber];
	
    
});

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
