//JavaScript Numbers

//Whole Numbers
var a = 11,
	b = -123;

var c = 1.5,
	d = 123.456343;

//In some languages a whole number is an interger, but in js any number is considered the same kind of number.
//This kind of number is known as floating point.

var e = 0.1,
	f = 0.2;

var result = e * f;

var g = 1.23E6;

var h = 012;
//octal weirdness, don't lead your numbers by a 0 or you'll end up with octo-crazy stuff happening.
var i = 0x10;
//the 10 insures that parseInt will grab your number as a base ten instead of going bananas.
var j = parseInt("0187, 10");
var k = parseInt("01011", 2);
//NaN below
var l = parseInt("There are 34 people, 10");
// console.log(isNaN(l))

var m = parseFloat("123.2342 is a strange number");

var o = 1 + k;
var p = 10 - 4.54;

var q = 3 * 9;
var r = 15/10;
//gives you the remainder, called modulo?
var s = 15 % 10;
//mutiplication and division come before addition and subtraction. Parenthasis first.
var t = (1 + 2) * 3 / 4;

// console.log(1 !== 3);

// if (1 < 2) {
// 	console.log("Yes");
// } else {
// 	console.log("No");
// }

//math objects are cool. Observe:
var u = Math.round(Math.random() * 10);
var v = Math.round(2.5);
var w = Math.floor(3.7);
var x = Math.ceil(6.2);
var y = Math.pow(2, 5);
var z = Math.sqrt(4);























