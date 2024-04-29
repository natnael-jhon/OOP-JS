// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

let info = {
    greet: function() {
        return `Hello  i am ${this.firstName} ${this.lastName}`
    }
}

let nati = Object.create(info)
nati.firstName = "Nati";
nati.lastName = "Jhon";
console.log(nati.greet())

let jhon = Object.create(info,{
    firstName: {value: "jhon"},
    lastName: {value: "Doe"}
} )

console.log(jhon.greet())