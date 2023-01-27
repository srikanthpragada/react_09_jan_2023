class Counter {
    constructor() {
      this.value = 0
    }
    increment() {
      this.value ++ 
    }
    decrement() {
      this.value --
    }
    getValue() {
      return this.value 
    }
 }
 
 c = new Counter()   // create object 
 c.increment()
 c.increment()
 console.log(c.getValue())
 