// THIS IS SIMPLE FOR LOOP
let fact = 1;
let n = prompt("Enter the value of n");
for (let i = 1; i <= n; i++) {
  fact = fact * i;
}
console.log(fact);

// THIS IS FOR-IN LOOP in object
let obj = {
  shraboni: 27,
  tanmoy: 27,
  debdatta: 25,
  satarupa: 28
}

for (let a in obj) {
  console.log(a) // It shows only Keys [the left side]
  console.log(obj[a]) // It shows the value means right side 
}

// THIS IS FOR-IN LOOP in array
let numm = [3, 5, 1, 2, 4]
for (let i in numm) {
  console.log(i)  // It will return 0 1 2 3 4 -> it returns the indexes of the array
}

//   THIS IS FOR-OF LOOP-> In case of for-of loop we need to use iterable object. 
for (let b of "shraboni") {
  console.log(b)  // It gives output one by one all alphabet from an string
}

//   WHILE LOOP
let m = prompt("Enter the value of n");
n = Number.parseInt(n);

let i = 0;
while (i <= m) {
  console.log(i);
  i++;
}

// For each loop
let num = [3, 54, 1, 2, 4]
num.forEach((element) => { console.log("Square of", element, "is: ", element * element) })

