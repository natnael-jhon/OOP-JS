// // --------------------------
// // Using "this" as a global scope
// console.log(window);
// console.log(this);
// console.log(this === window);

// window.firstName = "NaTi";
// this.lastName = "WebDev";
    // 
// let fullName = function () {
//   console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
// };
    // 
// const printThis = () => this;
// console.log(printThis())

// fullName();
// // --------------------------

// // --------------------------
// // Using "this" in object
// const obj = {
//   fname: "nati",
//   lname: "Dev",
//   full: function() {  // if we use the arrow function it will give as te window not the object
//     return this;
//   }
// };
// const res = obj.full();
// console.log(res);
// // --------------------------

// // --------------------------
// // Using "this" in Function
// function callThis() {
//   return this;
// }

// const res2 = callThis();
// console.log(res2);
// // --------------------------

// // --------------------------
// // using "this" keyword in arrow method
// const obj2 = {
//   name: "John",
//   regularFunction: function () {
//     return this.name;
//   },
//   arrowFunction: () => this.name,
// };

// console.log(obj2.regularFunction()); // Output: 'John'
// console.log(obj2.arrowFunction()); // Output: undefined
// // --------------------------

// // --------------------------
// let naTi = {
//   firstName: "Nati",
//   lastName: "WebDev",
//   fullName: function () {
//     // let firstName = "Nati";
//     // let lastName = "WebDev";
//     console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
//   },
// };

// naTi.fullName();
// // --------------------------
