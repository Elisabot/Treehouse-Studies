// javascript functions

var color = 'black';
var number = '1';

function showColor () {
	var color = 'green';
	shape = 'square';

	number = 2;

	console.log('showColor color', color);
	console.log('showColor number', number);
	console.log('showColor shape', shape);


}

showColor();

console.log('Global color', color);
console.log('Global number', number);
console.log('Global shape', shape);

// by neglecting to include var in your code you can change the globa variable accidentally.
// var is important!

