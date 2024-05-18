// Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. It is a fundamental concept in the language and is based on the prototype model. In prototypal inheritance, objects can serve as prototypes for other objects, forming a hierarchical chain of inheritance.
// In JavaScript, every object has an internal property called [[Prototype]] (often referred to as __proto__), which points to its prototype object. When you access a property or method on an object, and that property or method is not found in the object itself, JavaScript looks for it in the object's prototype (and further up the prototype chain, if needed) until it finds the property or reaches the top of the prototype chain, which is usually the Object.prototype.

function Animal(name, sex) {
    this.name = name;
    this.sex = sex;
}

Animal.prototype.gender = function () {
    return this.sex
}
// const nati = new Animal("nati", "male")


function Dog(name, sex){
    Animal.call(this, name, sex);
}

Dog.prototype = Object.create(Animal.prototype)

const nathan = new Dog("bingo", "male")
console.log(`My dog name is ${nathan.name} he is ${nathan.gender()}`)