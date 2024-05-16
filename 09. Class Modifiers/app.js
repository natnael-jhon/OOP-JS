function Modifiers(publicField, privateField, protectedField) {
  // Public Modifiers
  this.publicField = publicField;
  // Private Field
  const _privateField = privateField;
  // Protected Field
  const _protectedField = protectedField;


  // Public Method

  this.publicMethod = function () {
    return `Public Field: ${this.publicField}`
  }


  // Private Method(closure)

  function _privateMethod() {
    return `Private Method: ${_privateField}`
  }

  // Protected Method(Closure)
  function _protectedMethod() {
    return `Protected Method: ${_protectedField}`
  }
  this.accessPrivateMethod = function() {
    return `${_privateMethod()}`
  }

  // Method to access protected method
  this.accessProtectedMethod = function() {
    return _protectedMethod();
  };
};


const test = new Modifiers("public", "private", "protected")
// console.log(test.publicField)  //public field
// console.log(test._privateField)
// console.log(test.publicMethod()) 
console.log(test.publicMethod())
console.log(test._privateField)
console.log(test.accessProtectedMethod())
console.log(test.accessPrivateMethod())