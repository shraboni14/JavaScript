let name = 'Shraboni';
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,4))
console.log(name.slice(2))
console.log(name.replace("Shr","Pho"))

// using concatinate function
let friend = 'tanmoy'
console.log(name , " is a friend of " ,friend)
console.log(name + " is a friend of " + friend)
console.log(name.concat(" is a friend of ", friend))

// triming function
let she ='    satarupa    '
console.log(she.trim())
console.log(she[1])

// Iteration with for loop
let name1 = 'Shraboni';

for(let i = 0; i<name1.length ; i++){
  console.log(name[i])
}

// using include function
const sentense = "I am a rich girl"
const word = "rich"
console.log(sentense.includes(word))

// Trying to change String
let actor = 'Deepika'
actor[3] = 'r'      // It will not through error but it will never change because string is immutable
console.log(actor)