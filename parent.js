+const READLINE = require("readline-sync");

console.log(`*******************************************

	WELCOME TO THE PARENT BOT

********************************************`);

let hw = READLINE.question("Did you do your homework? yes/no: ");


if(hw == "yes") {
	console.log("Great!");
}
else {
	let talkback = READLINE.question("You've got to do well in school if you want to get ahead in life. Go do your hw! ");
	if(talkback == "I know" || talkback == "I just dont understand the importance of hw") {
		console.log("it helps keep you busy at home");

	}

}

let bath = READLINE.question("Did you take a shower? ");
if(bath == "no") {
	console.log("Go shower you stink.");
}
else {
	console.log("Good.");
}

let food = READLINE.question("Did you eat when you got home? ");
if(food == "yes") {
	console.log("Good");
}
else {
	console.log("Eating well is really important to your health. Go have a healthy snack at least.");
}
let sleep = READLINE.question("Did you sleep early last night");
if (sleep =="yes"){
	console.log (" Good it makes you get more energy");
}
 else {
 	console.log ("It takes a lot of energy from you")
 }

console.log(`
**************************************************

`);
console.log("Thanks for using The Parent Bot. Good bye for now!");
console.log(`
**************************************************S