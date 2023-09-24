// Add a number in array by taking input from user
let arr = [1, 2, 3, 4, 5, 6, 83]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)

console.log(arr)

// continiously adding the number untill 0 is added
let arr2 = [1, 2, 3, 4, 5, 6, 83]
let a2;
do {
    a2 = prompt("Enter a number")
    a2 = Number.parseInt(a)
    arr.push(a)
} while (a2 != 0)
console.log(arr2)

// Find out the numbers which are divisable by 10
let arr3 = [10, 12, 20, 34, 50, 76, 83]
let narr = arr3.filter((a) => { return (a % 10) == 0 })
console.log(narr);

// create an array of square of given numbers
let arr4 = [10, 7, 2, 4]
let square = arr4.map((e) => { return e * e })
console.log(square)

// sequentially multiplication of all numbers
let arr5 = [10, 7, 2, 4]
let reducearr = arr5.reduce((e, f) => { return e * f })
console.log(reducearr)