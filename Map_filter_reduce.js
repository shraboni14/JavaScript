/* Map creates a new array.
Difference between map and foreeach loop is - > 
foreach loop does not create a new array, It helps to do some certain operation. where, map is use to do operations as well as converting the output into a new array. */

let arr = [45, 23, 21, 27]
let n = arr.map((element) => {  // create a new array
    return element
})
console.log(n)  // output - > [ 45, 23, 21, 27 ]

let n1 = arr.map((element, index, array) => {
    console.log(element, index, array)
})
/* This is the output
45 0[45, 23, 21, 27]
23 1[45, 23, 21, 27]
21 2[45, 23, 21, 27]
27 3[45, 23, 21, 27]
*/

// Filter Method -> It does not change original value -> it return a new array
let arr2 = [45, 8, 1, 4, 14, 23, 21, 27]
let narr = arr.filter((smallerthan) => { return smallerthan < 20 })
console.log(narr)   // It will display only <20 values

// Reduce Method -> it return a new value. Does not change or generate array
let arr3 = [5, 8, 1, 4, 2, 3, 7]
let newarr3 = arr3.reduce((h1, h2) => { return (h1 + h2) })
console.log(newarr3)    //it will run the function with first two element of the array. Then it will run the function with the (output of previous run, next element of the array)

// another way
let arr4 = [5, 8, 1, 4, 2, 3, 7]
const reduce_func = (h1, h2) => { return h1 + h2 }  // creating an other function

let newarr4 = arr3.reduce(reduce_func) // call the function
console.log(newarr3)

