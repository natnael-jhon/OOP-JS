// Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. It is a fundamental concept in the language and is based on the prototype model. In prototypal inheritance, objects can serve as prototypes for other objects, forming a hierarchical chain of inheritance.
// In JavaScript, every object has an internal property called [[Prototype]] (often referred to as __proto__), which points to its prototype object. When you access a property or method on an object, and that property or method is not found in the object itself, JavaScript looks for it in the object's prototype (and further up the prototype chain, if needed) until it finds the property or reaches the top of the prototype chain, which is usually the Object.prototype.


function Animal(name, noice){
    this.name = name;
    this.noice = noice;
}
Animal.prototype.sound = function(){
    return this.noice
}
function Cat(name, noice){
    Animal.call(this, name)
    this.noice = noice;
}
Cat.prototype = Object.create(Animal.prototype)

const i = new Cat("nigu", "mawu")
console.log(i.sound())