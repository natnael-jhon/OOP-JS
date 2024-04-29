// Every javascript object has a anonymous property called prototype
// Remember functions & arrays are also a object
// that prototype will be the parent of that object, prototype property is object by itself, which have some special properties & methods

// Every object is associated with another object.
// The object (a) is associated with [[Prototype]] Object
// -> which means a object will inherit all properties of Object.prototype || [[Prototype]]

// We can check the prototype of something in 3 ways:
// --> obj.__proto__
// --> obj.constructor.prototype
// --> Object.getPrototypeOf(a)
const obj = {}
// console.log(obj.__proto__);
// console.log(obj.__proto__.__proto__);
// console.log(obj.constructor.prototype)
// console.log(Object.getPrototypeOf(obj))
// prototype for arry
const arry1 = [];
// console.log(arry1.__proto__)
// console.log(arry1.constructor.prototype)
// console.log(Object.getPrototypeOf(arry1))

// ProtoType of a function

function Person(fname, lname){
  this.fname = fname;
  this.lname = lname;
}
// const nati = new Person("nati", "jhon")
// console.log(nati.__proto__)

// ----------- Playing with build in prototypes -----------


Array.prototype.pop = () => {
  return `Hi`
}


String.prototype.hello = function() {
  return this.toUpperCase()
}

console.log("hello".hello())


// Fun animation
document.querySelector("button").addEventListener("click", () => {
  document.querySelector("h1").classList.toggle("anime")
})