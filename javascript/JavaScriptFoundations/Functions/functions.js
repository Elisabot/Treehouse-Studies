// Javascript Functions

function sayHello (name, greeting) {
	if (typeof name === 'undefined') {
		return 0;
	}
	if (typeof greeting === 'undefined'){
		greeting = 'Hello';
	}
	console.log(name + " " + greeting + " World. ");

	return name.length;
	console.log('End of function');
}

console.log(sayHello("James", "Greetings"));

console.log(sayHello("Jim"));

console.log(sayHello())

var garbage = 2
function garbagefun (inputs) {
	// some actions
}