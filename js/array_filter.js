var a = [10, 20, 30, 11, 23, 40]

// Using arrow function 
var evens = a.filter( (v, idx) => v % 2 === 0 ? true : false )
console.log(evens)
