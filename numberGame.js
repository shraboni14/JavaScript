let number = Math.floor(Math.random() * 10);

let chance = 0;
let input;
while (input != number) {
    input = prompt("Enter your guess");
    chance++;
}
console.log("The acctual number was", number, "Your score is : ", (100 - chance))

let number2 = Math.floor(Math.random() * 100);

let chance2;
let input2;
for (chance2 = 0; input2 != number2; chance2++) {
    input2 = prompt("Enter your guess : ")
    if (input2 == number2) {
        console.log("You win")
        console.log("The acctual number was", number2)
        console.log("Your score is : ", (100 - chance2))
        break;
    }
    else if (number2 > input2) {
        console.log("Enter a bigger number")
    }
    else if (number2 < input2) {
        console.log("Enter a smaller number")
    }
    else {
        console.log("Error")
    }
}
