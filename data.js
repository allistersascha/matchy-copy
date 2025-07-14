/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//keep it var
//debug with console.log()
//only do parts 1 and 2

var animal = {};
animal.species = "cat";
animal["name"] = "Princess Snugglepuss";
animal.noises = [];
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "mrrow";
noises.push("mee-EEEYYOW!!");
noises.unshift("rrrrrowowwwww??");
noises[noises.length] = "prrrrrRRRrRRrrp";
console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
animal.noises.push("squeeeek");
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
  species: "duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "woosh"]
};
animals.push(duck);

var dog = {
  species: "dog",
  name: "Bailey",
  noises: ["woof", "awooo?", "nomnomnom"]
};
animals.push(dog);

var bat = {
  species: "bat",
  name: "Bela",
  noises: ["eeekeekeeekekeke", "screee", "chirpchirp"]
};
animals.push(bat);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
//chose an array because it is a list in no particular order
console.log(animals);
function getRandom(animals){
  /*
  var rando = Math.random() * (Math.floor(animals.length + 1) - Math.ceil(0));
  return rando;
  */
  var rando = Math.floor(Math.random() * animals.length);
  return rando;
}

friends.push(animals[getRandom(animals)].name);

//friends array into prop on an object in animals array
animals[1]["friends"] = friends;
console.log(animals[1]);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}