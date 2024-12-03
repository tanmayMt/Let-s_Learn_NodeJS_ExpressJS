console.clear();
// random-fruits-name <- External Module
const getRandomFruitsName = require('random-fruits-name')

console.log(getRandomFruitsName()) // Apple - English is default language
console.log(getRandomFruitsName('en')) // Apple
console.log(getRandomFruitsName('es')) // Manzana
console.log(getRandomFruitsName('ja')) // りんご
console.log(getRandomFruitsName('pt')) // Maça
console.log(getRandomFruitsName('nl')) // Appel
console.log(getRandomFruitsName('fr')) // Pomme
console.log(getRandomFruitsName('de')) // Apfel
console.log(getRandomFruitsName('cs')) // Jablko
console.log(getRandomFruitsName('bn')) // আপেল


// movies-names <- External Module
var moviesNames = require('movies-names');
//console.log(moviesNames.random()) //returns a random movie name
//console.log(moviesNames.all) //returns all movies
//moviesNames.random(2) //returns specified number of random movies
// moviesNames.getmovieName('The Dark Knight') //returns specified movi