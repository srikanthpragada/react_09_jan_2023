
function f1() {
    console.log(a)   // undefined 
    var a = 10;
    console.log(a)   // 10
}

function f1_real() {
    var a;
    console.log(a)   // undefined 
    a = 10;
    console.log(a)   // 10
}

function f2() {
    a = 100;
    console.log(a)
    var a;
}

function f3() {
    console.log(a)
    let a;
}


f1()
f2()
f3()