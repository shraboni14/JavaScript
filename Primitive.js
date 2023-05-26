// nn ss bb u
Null, Number
Symbol, String
 Bollean, Bigint
Undefined

let a = null; // Null
let b = 26; // Number

let c = Symbol("I am a symbol"); // Symbol
let d = "Shraboni Sinha" //  String 

let e = true; // Bollean
let f = BigInt("567")+BigInt("4"); // Bigint

let g = undefined; // undefined-> If we don't write undefined then automatically it will become undefined.

console.log("Final bigint is "+f);
console.log(typeof(f));

// Objects -> Non primitive Datatype

const item = {
    "Shraboni" : true,
    "Sinha" : false,
    "Bubun" : 26,
    "Kolkata" : undefined
}
console.log(item.Sinha)
console.log(item.Shraboni)
console.log(item.Kolkata)
console.log(item["Bubun"])

