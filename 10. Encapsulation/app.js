// In JavaScript, we can achieve encapsulation by using closures to create private members.
function Counter() {
  let _count = 0 // Private Variable
  // Public method that can access and modify the private variable

  this.increment = function () {
    _count++
  }

  this.decrement = function() {
    _count--
  }

  this.getCount = function() {
    return _count
  }
}


const nati = new Counter()
console.log(nati.getCount())
// nati.decrement()   // It will -1 when we run it every time 
// nati.decrement()
// nati.decrement()
// console.log(nati.getCount())