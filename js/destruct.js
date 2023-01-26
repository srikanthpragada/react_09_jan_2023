
var a = [1, 2];

// v1 = a[0]
// v2 = a[1]
 
// console.log(v1)
// console.log(v2)

let [v1, v2, v3 = 0] = a   // Destructuring assignment 

console.log(v1)
console.log(v2)
console.log(v3)

a = [1,2,3,4]
let [n1, ...nums] = a 
console.log(n1)
console.log(nums)


