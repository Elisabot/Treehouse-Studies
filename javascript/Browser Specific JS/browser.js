//examples and DOM

var button = document.getElementById('action');
var input = document.getElementById('text_field');

//onclick can only store/use one function at a time
// button.onclick = function () {
// 	console.log('clicked');
// }

// button.onclick = function () {
// 	console.log('Other click listener');
// }


//addEventListener can hold much more information than onclick, but less browser compatibility.
button.addEventListener('click', function () {
	console.log('clicked');
});

button.addEventListener('click', function () {
	console.log('other click');
	input.setAttribute('value', 'Hello orld');
});
























