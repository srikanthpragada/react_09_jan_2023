var a = [10, 20, 30, 11, 23, 40]

// Using arrow function 
var num_type = a.map( v => v % 2 === 0 ? "Even" : "Odd" )
console.log(num_type)
