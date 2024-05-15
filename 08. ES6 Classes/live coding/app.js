// Classes are one of the features introduced in the ES6 version of JavaScript.
// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house.

// Since many houses can be made from the same description, we can create many objects from a class.


// Class declaration
class Person {
    constructor(fname, lname, age){
        // Instace members
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.info = function() {
            return `Full Name: ${this.fname} ${this.lname} Age: ${this.age}`
        };
    };

    // creating a prototype for our class
    sayhi() {
        return `${this.info}`
    }
}
// const nati = new Person("NaTi", "Dev", 17)
// console.log(nati.sayhi())

// Class inheritance

class Programmer extends Person{
    constructor(fname, lname, age, favPl, country){
        super(fname, lname, age) // it calls every peroperty form the perosn Con function
        this.favPl = favPl;
        this.country = country;
    }
}

const aba = new Programmer("aba", 'jhon', 22, "Solidity", "duabi")
console.log(aba)