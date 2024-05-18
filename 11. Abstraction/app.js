// Abstract class (providing a blueprint for subclasses)
class Animal {
  constructor(name){
    this.name = name;
  };
  // Abstract method (to be implemented by subclasses)
  makeSound() {
    throw new Error("method (makeSound) must be implemented")
  }
};

class Dog extends Animal{
  constructor(name){
    super(name)
  }

  // IMplementing the abstract method
  makeSound(){
    return "Woff"
  }
}

class Cat extends Animal{
  constructor(name){
    super(name)
  };

  makeSound(){
    return "Mewo"
  }
}

let bingo = new Dog("bingo")
console.log(`this is my dog ${bingo.name} he syas ${bingo.makeSound()}`)