let marks = [89, 87, 78, 98, 59, 'shraboni']
console.log("First array is - ", marks)
console.log("Length of marks is - ", marks.length)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])

// Changing the value of previous index
marks[1] = 94  // It is possible to change the value of array by re giving the value
console.log("Updating Array is - ", marks)
console.log('The array type is - ', typeof marks)

// Iterating an array by using for loop
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i])
}

//   Array Methods
let number = [1, 4, 3, 6, 7]
console.log(number)

let b = number.toString()  // Using toString Method
console.log(b)  // It will print the same array as string type

let c = number.join(" and ")  // Using join method  // given string will be add in between of every element
console.log(c)
console.log(typeof c) // It is a string type of Array

number.pop()  // It will elemenate the last element of the array. It return the pop element
console.log(number)

let r = number.push(12) // It will add the value on the end of the array

number.shift()  // It will elemenate(Remove) the first element of the array
console.log(number)

number.unshift(78)  // It will add the given element in the front of the array. It returns new array length
console.log(number) // it will display

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19]

console.log(num.length);
delete num[1]  // In this case item will be deleted but the memory of an array is always constant. So the size will be same always. 
console.log(num.length);
console.log(num)

let newarray = num.concat(num2) // concat function create a new array by using concat operation. But the previous array will not be change.
// it can concatinate multiple arrays
console.log(newarray)

let num3 = [121, 122, 13, 14, 150, 16, 172, 18, 169]
num2.sort() // It sorted array alphabetically like string sorting
console.log(num3)
// Output is - [121, 122,  13,  14, 150,  16, 169, 172, 18]

//  compare function
let compare = (a, b) => {
  return a - b; // This is for ascending, for descending(b-a)
}
let comnum = [121, 122, 13, 14, 150, 16, 172, 18, 169]
num2.sort(compare)  // it will sort the array value wise
console.log(comnum)

// ARRAY SPLICE OPERATION
let splicenum = [121, 122, 13, 14, 150, 16, 172, 18, 169]
// splice modifies the array

splicenum.splice(2, 3, 1021, 1022, 1023, 1024, 1025) // 1st parameter is index, how much values you want to delete, what values you want to insert on that given index
console.log(splicenum)    // it will print the modified Array

let deletedvalue = splicenum.splice(2, 3, 1021, 1022, 1023, 1024, 1025) // in this case the new Array will collect the deleted values from the array,
console.log(deletedvalue)

// slice does not modify an array, it creates new array

let newnum = splicenum.slice(2) // it will delete 2 element from the begginning of the Array. 
console.log(newnum)

