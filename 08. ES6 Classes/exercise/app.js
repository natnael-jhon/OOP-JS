// 1. Create a class name "Hero", properties (name, level)
// 2. Create greet method which will just greet
// 3. Create Instance of "hero" class
// 4. Create New class name "Mega", inherit properties from "hero" class & provide property of spell
// 5. Create instance of "Mega" class
class Hero{
  constructor(name, level){
    this.name = name;
    this.level = level;
    this.hi = function(){
      return `Hello ${this.name}`
    }
  }

  greetUp(){
    return `Hello ${this.name}`.toUpperCase()
  }

  greetLow(){
    return `Hello ${this.name}`.toLocaleLowerCase()
  }
}

// const hero = new Hero("hero", "99")
// console.log(hero.greetLow())

class Mega extends Hero{
  constructor(name, level, nah ){
    super(name, level)
    this.nah = nah;
  }
}

const nah = new Mega("nati", "100", 'k')
console.log(nah)