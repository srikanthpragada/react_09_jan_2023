
let d1 = new Date("2022-01-10")  // ISO format
console.log(d1.toString())

let d2 = new Date(2022, 0, 1)
console.log(d2.toString()) 

let cd = new Date();
cd.setDate(cd.getDate() + 10)
console.log(cd.toString()) 

// find out no. of days between two dates 
var t1  = d1.getTime()
var t2  = d2.getTime()

var nm = t1 - t2   // get no. of milliseconds from 1-1-1970
console.log (nm / (3600  * 24 * 1000)) // divide by no. of ms per day 

