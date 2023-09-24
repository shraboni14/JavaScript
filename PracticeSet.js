// Question 1
let age = prompt("Enter your age : ")
age = Number.parseInt(age)

const canDrive = (age) => {
    return age >= 18 ? true : false
}

if (canDrive(age)) {
    alert("Yes you can drive")
} else {
    alert("Can not drive")
}

// Question 2

let runAgain = true;

const canDrive2 = (age) => {
    return age >= 18 ? true : false
}
while (runAgain) {
    let age = prompt("Enter your age : ")
    age = Number.parseInt(age)

    if (canDrive2(age)) {
        alert("Yes you can drive")
    }
    else {
        alert("Can not drive")
    }
    runAgain = confirm("Do you want to play again? ")
}

// Question 3
let number = prompt("Enter a number")
number = Number.parseInt(number)

if (number > 4) {
    location.href = "https://google.com"
}

//  Question 4
let color = prompt("Enter the color you want in background ")
document.body.style.background = color;