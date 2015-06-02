// JavaScript Arrays

// var x = ['get some', 'extra', 43, true, 'here'];
// console.log(x.length);

// var y = ['a string', 3, ['a sub array', 2, 3, 4], 'dog', function(a, b){return a + b}]

// var z = [];

// var a = new Array(50);

// Getting and Setting

// var my_array = ["hello", 42, true, function (a) {return a * 2}];

// var word = my_array[0];
// var answer = my_array[1];
// var doubler = my_array[3];
// console.log(doubler(10));

// my_array[1] = 43;
// var new_answer = my_array[1];
//answer will remain as 42 becuase it calls the value before the value is changed.

//by phrasing this in that way my_array will give you one addition to the end of your array.
// my_array[my_array.length] = "A new string";



// Methods


//Push and Pop

// var my_array = [2, 3, 4];
// console.log(my_array.toString());

// my_array.push(5);
// console.log(my_array.toString());

// var value = my_array.pop();
// console.log(my_array.toString());

// var value2 = my_array.pop();
// console.log(my_array.toString());


// Unshift and Shift

// var my_array = [2, 3, 4];
// console.log(my_array.toString());

// my_array.unshift(1);
// console.log(my_array.toString());

// var value = my_array.shift();
// console.log(my_array.toString());


// Sorting

// var my_array = [10, 44, 32, 100, 0 , 44, 3, 4];
// console.log(my_array.toString());

// my_array.sort(function (a, b) {
// 	//return a - b;
// 	return Math.random() - 0.5;
// });
// console.log(my_array.toString());


// var my_array = [1, 2, 3, 4, 5];
// console.log(my_array.toString());

// my_array.reverse();
// console.log(my_array.toString());

// Methods to call on arrays

// var x = [1, 2, 3];
// var y = [4, 5, 6];
// var z = x.concat(y [7, 8, 9]);

// console.log(x);
// console.log(y);
// console.log(z);

// Slice

// var my_array = [0, 1, 2, 3, 4, 5];
// var result = my_array.slice(1, 4);

// console.log(result);

// Join

// var words = ["these", "are", "some", "words", "bob"];
// var result = words.join(' ');


// Splice

// var my_array = [0, 1, 2, 3, 4, 5, 6];
// console.log(my_array.toString());


// delete my_array[2];
// console.log(my_array.toString());

//splice can both remove and add things to an array.

var my_array = [0, 1, 2, 3, 4, 5, 6];
console.log(my_array.toString());

my_array.splice(2, 0, 'two', 'Two', 'something else');
//this is equivilent
//my_array[2] = 'two'

console.log(my_array.toString());













