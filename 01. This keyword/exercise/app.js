// Create a person object and store your name & age
// -> Also create a method name (greetRegular) by using a regular function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`
// -> Create one more method name (greetArrow) using arrow function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`

// *************** SOLUTION

// Create a person object
const obj = {
  name: "NaTi",
  age: 17.9,
  greetRegular: function () {
    return `Hello, my name is ${this.name} and i am ${this.age} old`
  },
  arrowGreet: () => {
    return `Hello, my name is ${this.name} and i am ${this.age} old`
  }

}

console.log(obj.arrowGreet())