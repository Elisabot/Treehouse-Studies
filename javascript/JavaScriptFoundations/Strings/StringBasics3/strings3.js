/* JavaScript Strings */

// var name = "Liz";
// console.log(name);

// var name2 = 'Liz';
// console.log(name2);

// var statement = "This is Liz's string";
// console.log(statement);

// var statement2 = 'She said "This is awesome"';
// console.log(statement2);

// var statement3 = "He said \"This is Liz\'s string\"";
// console.log(statement3);

// var path = "C:\\folder\\myfile.txt";
// console.log(path);

// var multiline = "This is line 1\nThis is line 2\nThis is line 3";
// console.log(multiline);

// var tabchar = "This is a tab \t in js"
// console.log(tabchar);

// var part1 = "Hello ";
// var part2 = "World!";
// var whole = part1 + part2;
// console.log(whole);

// var multiline = "This is line 1\n" + 
// "This is line 2\n" + 
// "This is line 3";
// console.log(multiline);

// var length = whole.length;
// console.log(whole, length);

// var index = whole.indexOf("World");
// console.log(index);

// var index2 = whole.indexOf("world");
// console.log(index2);

// if (whole.indexOf("W") !== -1) {
// 	console.log("W exists in string")
// } else {
// 	console.log("W does not exist in the string");
// }

// console.log(whole.charAt(1));

// "Hello World!"
// var world = whole.substr(6, 5);
// console.log(world);

// console.log(whole.toLowerCase());
// console.log(whole.toUpperCase());


var first = "Hello"
var second = "hello"

if (first.toLowerCase() === second.toLowerCase()) {
	console.log("The strings are equal");
} else {
	console.log("The strings are different");
}

function compare(a, b) {
	console.log(a + " < " + b, a < b);
}

compare('a', 'b');
compare('a', 'A');

compare('apples', 'oranges');
compare('apples', 'applicants');
compare('apples', 'apparel');

compare('hello', 'hello');







