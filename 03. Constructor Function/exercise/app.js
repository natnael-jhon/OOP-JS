// 1. Create a person constructor which has parameters of (name, age, gender)
// 2. Access parameter values to the call object.
// 3. Create a method name (info), which will just print the info.
// 4. Create a few instances
// 5. Access each property

// constructor function

function CreatePerson(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.getInfo = function () {
    return `name: ${this.name}, age: (${this.age}), gender: ${this.gender}`
  }
}

let nati = new CreatePerson("nati", 19, "male")
console.log(nati)
console.log(nati.getInfo())