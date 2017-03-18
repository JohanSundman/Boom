/*
* 	The code starting the program
*/

// Start tracking the mouse with as the mouse object
var mouse = new Mouse();
mouse.click = function(e){
	spawnBoom(e);
}

// Set up the canvas
var fps = 60;
var canvas = document.getElementById("frame");
var render = new Render(canvas, fps);

// Create an explosion once called
function spawnBoom(e = null){
	var data = [];

	// Set all the variables
	var x = Math.floor(Math.random() * window.innerWidth);
	var y = Math.floor(Math.random() * window.innerHeight);
	var size = Math.floor(Math.random() * (window.innerWidth / 100) + 10);
	var duration = 200;
	//var color = getColorInRange("#ff0000", 1000, "r");
	var color = getRandomColor();

	// Check if mouse pos is found
	if(e !== null){
		x = e.clientX;
		y = e.clientY;
	}

	// Push the new element to the array and push that array to the list
	data.push(new Boom(x, y, size, duration, color));
	render.append(data); // Append the explosions
}

setInterval(spawnBoom, 50);