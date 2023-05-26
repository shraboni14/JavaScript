let marks = [89,87,78,98,59,'shraboni']
console.log("First array is - ",marks)
console.log("Length of marks is - ",marks.length)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])

// Changing the value of previous index
marks[1] = 94  // It is possible to change the value of array by re giving the value
console.log("Updating Array is - ", marks)
console.log('The array type is - ' , typeof marks)

// Iterating an array by using for loop
for(let i = 0; i<marks.length ; i++){
    console.log(marks[i])
  }

//   Array Methods
let number = [1,4,3,6,7]
console.log(number)

let b = number.toString()  // Using toString Method
console.log(b)

let c = number.join(" and ")  // Using join method
console.log(c)
console.log(typeof c) // It is a string

number.pop()  // It will elemenate the last element of the array. It return the pop element
console.log(number)

let r = number.push(12) // It will add the value on the end of the array

number.shift()  // It will elemenate(Remove) the first element of the array
console.log(number)

number.unshift(78)  // It will add the given element in the front of the array. It returns new array length
console.log(number) // it will display


