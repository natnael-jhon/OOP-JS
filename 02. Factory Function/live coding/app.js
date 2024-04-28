// // A factory function is a type of function that is used to create and return objects. It's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword.

// // ------------------------------------------

let john = {
  firstName: "John",
  lastName: "doe",
  fullName: function () {
    console.log(
      `Hello my name is ${this.firstName} ${this.lastName} & i love javascript`
    );
  },
};

// // john.fullName();

// ------------------------------------------
function createPerson(firstName, lastName, pl) {
  return {
    firstName: firstName,
    lastName: lastName,
    pl: pl,
    intro: function (){
        return `my name is ${this.firstName} ${this.lastName} & and i love ${this.pl}`
    }
  };
}

const aba = createPerson("aba", "jhon", "node");
const nati = createPerson("HuXn", "WebDev", "Golang");
const jordan = createPerson("jordan", "peterson", "JavaScript");
console.log(aba)
console.log(nati);
console.log(jordan);


console.log(aba.intro());
console.log(nati.intro());
console.log(jordan.intro());
// // ------------------------------------------

// // ------------------------------------------
// function createPerson(firstName, lastName, pl) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     pl: pl,
//     fullName: function () {
//       console.log(
//         `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl}`
//       );
//     },
//   };
// }

// const john = createPerson("John", "Doe", "Python");
// const huxn = createPerson("HuXn", "WebDev", "Golang");
// const jordan = createPerson("jordan", "peterson", "JavaScript");
// console.log(john);
// console.log(huxn);
// console.log(jordan);

// console.log(john.fullName());
// console.log(huxn.fullName());
// console.log(jordan.fullName());
// // ------------------------------------------
