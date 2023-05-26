let a = prompt("Hey what's your age? ")
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age")
}
else if(a<9){
  alert(" You are too young, can not drive")
}
else if(a>9 && a<18){
  alert("You can learn but wait to be 18 years old ")
}
else{
  alert("You can drive")
}
console.log("Done")

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;