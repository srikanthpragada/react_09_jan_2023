// Spread Operator with arrays 

a = [1, 2, 3]
b = a    // B is one more reference to a

c = [...a, 40, 50]
a.push(4)

console.log(a)  // 1 2 3 4
console.log(b)  // 1 2 3 4
console.log(c)  // 1 2 3 40 50

a[0] = 100

console.log(a)
console.log(b)
console.log(c)

// Spread with functions

function fun(a, b, c) {
    console.log(a + b + c)
}

params = [1, 2, 3]
fun(params)
fun(...params)  // fun(1,2,3)


