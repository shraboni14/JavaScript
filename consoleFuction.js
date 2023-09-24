obj = { a: 1, b: 2, c: 3 }
console.table(obj)



alert("Enter value of a !")
let a = prompt("Enter here", 578)

a = Number.parseInt(a)
let write = confirm("Do you want to write it to the page? ")
if (write) {
    document.write(a)
} else {
    document.write("Please allow me to write")
}

alert("You entered a type of : " + (typeof a))