
let names = ["JavaScript", "Java", "Python"] // array 

// take indexes 
for (let idx in names) {
    console.log(`Value at ${idx} is ${names[idx]}`)
}

// take values 
for (let name of names) {
    console.log(name)
}