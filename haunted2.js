const READLINE = require("readline-sync")
let player = {
  name: undefined,
  courage: 99,
  intellect: 151,
  strength: 33,
  charm: 10000,
  weapon: "Vacuum",
  strength: 300,
  charm: 100,
  weapon: "supernatural Localizer",
  item: "flashlight",
};
    
console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story
  console.log (`${player.name} Enters and feels that he/she is not alone,`)
  console.log (`${player.name} takes out the ${player.item} and looks around,`);
  console.log(`${player.name} was petrified they were able to move for 1 min`);
   console.log (`${player.name} takes out the ${player.item} and looks around,`);
  console.log(`${player.name} was petrified they were able to move for a moment`);
  console.log(`${player.name} Just saw one of the most horrifying thing ever`)
} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...
  once you see the house it can't never get out of your brain til you face your fears.`);
  console.log(`${player.name} Was having nightmares and flashbacks for over 5 months now.`)
  console.log (`${player.name} thinks about going back to the house`)
}
let goBacktohouse = READLINE.question("Will you go back to  the house? (yes or no) ");
if(goBacktohouse == "y" || goBacktohouse == "yes") {
  player.courage++;
  console.log(`${player.name} goes back with his ${player.weapon} he/she wasn't scared this time he/she was just here to face their fears and go back living their normal life. He/she enters the house with one goal facing their fears!`)
  console.log(`${player.name} came in to the house heard more screaming from a door.`) 
  let openDoor = READLINE.question("Will you look into the door? (yes or no) ");
  if (openDoor == "y" || openDoor == "yes") {
    player.courage++;
    console.log(`${player.name} opens the door and see's a little girl.She tought she was stuck in the house but once she got closer the little girl had sharp teeth with blood all over them`)
    console.log(`${player.name} she ran back to the hallway but she stopped because she realized she was running away from a fear,so she went back and used her ${player.item} to blind the little devil.`)
  } else {
  console.log(`${player.name} you're such a chicken.`)
}
console.log("Thanks for playing!");
} else {
 console.log(`${player.name} Sorry you Lost!!`) 
}
                                                    