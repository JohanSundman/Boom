/*
* 	Get random colors
*/


// Simple random hex
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}





/* FAIL 1
function getColorRange(color, range){
	color = color.replace("#", ""); // Remove the hash(#)
	var color10 = parseInt(color, 16); // Get a decimal number
	
	// Get a random number
	console.log("color: " + color10);
	var newColor = Math.floor(Math.random() * range) + color10 - range; // Random number(max: RANGE from COLOR)
	console.log("newColor: " + newColor + " , in range: " + range);

	// Make the new color a hexcode again
	newColor = newColor.toString(16);
	newColor = "#" + newColor; // Add the hash

	return newColor;
}*/

/*   FAIL 2
function getColorInRange(color, range, alpha = "r"){
	color = color.replace("#", ""); // Remove the hash(#)
	
	// Get the iduvidual colors
	var r,g,b;
	r = color.substr(0, 2); // #xxXXXX
	g = color.substr(2, 2); // #XXxxXX
	b = color.substr(4, 2); // #XXXXxx


	switch(alpha){
		case "r":
			r = parseInt(r, 16); // Hex -> Decimal
			r = Math.abs(randInRange(r, range));
			r = r.toString(16); // Decimal -> Hex
			break;
		case "g":
 			g = parseInt(g, 16); // Hex -> Decimal
			g = Math.abs(randInRange(g, range));
			g = g.toString(16); // Decimal -> Hex
			break;
		case "b":
			b = parseInt(b, 16); // Hex -> Decimal
			b = Math.abs(randInRange(b, range));
			b = b.toString(16); // Decimal -> Hex
			break;
		default:
			return color; // No aplha recognized send back the default
	}
	
	// Send back the new color
	return "#" + r + g + b;
}


function randInRange(num, range){
	return Math.floor(Math.random() * range + num - range);
}
*/