// 1. Create a variable type string and try to add a number with it
let a2 = "Shraboni" 
let a1 = 34;

console.log(a2+a1)

// 2. Use of type of operator
 console.log(typeof(a2+a1))

 // 3. Create a const object and try to change the 

const sh = {
    name : "Shraboni",
    department : "MCA",
    college : "Techno India"
}
// console.log(sh.college)
//  sh = 56 -> It's not allowed

// Adding new value into the Object
sh ["Friend"]= "Tanmoy"
console.log(sh)

// Modifying the object in constant sh

sh["name"] = "bubun"
console.log(sh)

// Create a object to create a set of data
const dictionaly = {
    Rain : "rainy day",
    summer : "Hot season of the earth",
    monsoon : "It's rainy season"
}

console.log(dictionaly)
console.log(dictionaly.monsoon)