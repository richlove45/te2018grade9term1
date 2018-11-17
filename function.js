const READLINE = require(" readline-sync");

let dog = {
	name: "Old Yeller",
	numLegs: 4, 
	color: "Yeller"
	breed: "Golden Retriever",
	bark: function(){
		console.log("Bark!");

	},
	sayName: function(){
		console.log (`My name is ${this.name}!`);
		
	}
}
dog.sayName();