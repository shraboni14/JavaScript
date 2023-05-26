// THIS IS SIMPLE FOR LOOP
let fact = 1;
let n = prompt("Enter the value of n");
for(let i =1; i<=n; i++){
  fact = fact*i;
}
console.log(fact);

// THIS IS FOR-IN LOOP
let obj = {
    shraboni : 27,
    tanmoy : 27,
    debdatta :25,
    satarupa : 28
  }
  
  for(let a in obj){
  console.log(a) // It shows only the left side
    console.log(obj[a]) // It shows the value means right side 
  }

//   THIS IS FOR-OF LOOP-> In case of for-of loop we need to use iterable object. 
for ( let b of "shraboni"){
    console.log(b)
  }

//   WHILE LOOP
let m = prompt("Enter the value of n");
n = Number.parseInt(n);

let i = 0;
while(i<=m){
  console.log(i);
  i++;
}
