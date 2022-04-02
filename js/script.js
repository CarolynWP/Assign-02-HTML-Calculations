function calculate() {
	//variables
	let base = parseInt(document.getElementById('base').value);
	let height = parseInt(document.getElementById('height').value);

	//calculations
	let surface = 6*base*height+3*Math.sqrt(3)*base**2
	let volume = 3*Math.sqrt(3)/2*base**2*height

	//output
	document.getElementById('surface-area').innerHTML = 'The surface area of this hexagonal prism will be ' + surface.toFixed(2)
	document.getElementById('volume').innerHTML = 'The volume of this hexagonal prism will be ' + volume.toFixed(2)
}