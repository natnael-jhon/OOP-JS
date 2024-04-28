// create a factory function that generates different types of vehicles. Each vehicle object should have properties like type, brand, model, and year.

// Create a factory function for vehicles
function createCarInfo(type, brand, model, year){
  return{
    type:type,
    brand: brand,
    model: model,
    year: year,
    info: function() {
      return `Car Info: ${this.type}, ${this.brand}, ${this.model}, ${this.year}`
    }
  }
}


let toyota = createCarInfo("SUV", "Toyota", "V8", 2024)
console.log(toyota.info())