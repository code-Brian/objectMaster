const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// use filter to only return pokémon names starting with "B"
console.log("\npokémon name begins with 'B'")
const bListPkmn = pokémon.filter( p => p.name[0] ==="B")
bListPkmn.forEach( p => console.log(p.name))

// return only the pokémon ids which are divisible by 3
console.log("\npokémon id divisible by 3")
const byThree = pokémon.filter( p => p.id % 3 === 0).map( p => p)
byThree.forEach( p => console.log(p.name))

// return only pokémon types which are fire
console.log("\npokémon type 'fire'")
const typeFire = pokémon.filter( p => p.types.includes("fire")).map( p => p)
typeFire.forEach(p => console.log(p.name))

// return only pokémon with more than one type
console.log("\npokémon with more than one type")
const moreThanOne = pokémon.filter( p => p.types.length > 1).map( p => p)
moreThanOne.forEach( p => console.log(p.name))

// an array with only the names of all pokémon
console.log("\npokémon names only")
const pokéNames = pokémon.filter( p => p.name).map( p => p)
pokéNames.forEach( p => console.log(p.name))

// an array with only names of pokémon with ids greater than 99.
console.log("\npokémon with names, and ids > 99")
const pokéNameIds = pokémon.filter( p => p.name && p.id > 99).map( p => p)
pokéNameIds.forEach( p => console.log(p.name))

// an array with names of pokémon whose only type is poison
console.log("\npokémon names whose only type is poison")
const typeOnlyPoison = pokémon.filter( p => p.name && p.types.includes("poison") && p.types.length === 1).map(p => p)
typeOnlyPoison.forEach( p => console.log(p.name))

// an array with second types which are flying
console.log("\npokémon array with only first types, whose second type is flying")
const secondTypeFlying = pokémon.filter( p => p.name && p.types.includes("flying", 1)).map( p => p)
secondTypeFlying.forEach( p => console.log(p.name, p.types[0]))

// a count of the number of pokémon whose type is normal
console.log("\npokémon count of normies")
const typeNormalCount = pokémon.filter( p => p.name && p.types.includes("normal")).map( p => p)
console.log(typeNormalCount.length)