// // -------------- ES5 Code
// // // Superclass constructor
// function Animal(name){
//   this.name = name;
// }

// // method shared among all animal instances 
// Animal.prototype.makeSound = function(){
//   return `Unknow sound`
// }

// // Subclass construcotr inheriting from Animal
// function Dog(name){
//   Animal.call(this, name); // call the superclass construcor 

// }
// // Setup prototype chain for dog to inherit from animal 
// Dog.prototype = Object.create(Animal.prototype)

// // Method spercific to Dog
// Dog.prototype.makeSound = function () {
//   return 'woof!'
// }

// // Creating Instances of the classes
// const bingo = new Dog("Bingo");

// console.log(bingo.makeSound())

// ES6
// Superclass
class Animal{
  constructor(name){
    this.name = name;

  }


  makeSound(){
    return "unknown sound"
  }
}


// subclass inheriting from Animal superclass

class Dog extends Animal{
  constructor(name){
    super(name)
  }

  makeSound() {
    return  `Woff!`
  }
}

const bigro = new Dog("bigro")
console.log(bigro.makeSound())