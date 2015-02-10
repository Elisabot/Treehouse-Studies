//Basic Objects in Javascript or object literals
// { "key": "value" };
// key strings do not always need to be surrounded in quotations
// name: or skills:

// var liz = { 
// 	"name": "Liz", 
// 	"skills": ["Javascript", "html", "Painting"],
// 	"favorite color": "rouge", 
// 	greet: function (name, mood) {
// 		name = name || "You";
// 		mood = mood || "good";

// 		console.log("Hello, " + name + 
// 					" I am " + this.name +
// 					" and I am in a " + mood + " mood!");
// 	}
// };

// var james = { "name": "James", 
// 	name: "James",
// 	greet: liz.greet
// };

// var godzilla = {
// 	name: "Godzilla",
// 	greet: liz.greet
// };

// console.log(liz["name"]);
// console.log(liz["favorite color"]);

// liz.name = "DAh Lizzard";

// liz["greet"]("Ryan", "great");
// james.greet();


//this: an object in javascript given value when the method is called.
//this can wreak havoc with your code and mess with the global scope of things. It must me used with caution and only in the most fitting of circumstances.
//Method: A function that is a property of an object


//the following does not work using this, it loses the context.
// var lizGreet = liz.greet;
// lizGreet();

// function whatIsThis() {
// 	console.log(this);
// }

// whatIsThis();




//
// Call and Apply //
// this is call
// var lizGreet = liz.greet;

// lizGreet.call({name: "cleverbot"}, "Matt", "bad");

// // this is apply
// // it takes arguments differently,
// // check out that array
// liz.greet.apply(james, ["Matt", "whimsical"]);

// var args = ["Dante", "infernal"];
// liz.greet.apply(liz, args)


var personProtype = {
	name: 'Anonymous',
		greet: function (name, mood) {
			name = name || "You";
			mood = mood || "good";

			console.log("Hello, " + name + 
						" I am " + this.name +
						" and I am in a " + mood + " mood!");
	},

	species: 'Homo Sapien'

};

//capital P indicates constructor function
function Person (name) {
	this.name = name;
}

Person.prototype = personProtype;

jim = new Person("Jim")
nick = new Person("Nick")




















