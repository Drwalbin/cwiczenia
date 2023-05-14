"Use strict";

class NintendoHeroes {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  getNameAndAge() {
    return `${this.#name} is ${this.#age} years old`;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    this.#age = newAge;
  }
  }


const mario = new NintendoHeroes("Mario", 45);
log(mario);

mario.getFullInfo = methods.getFullInfo.bind(mario);

log(mario.getFullInfo("Plumber"))
 
const luigi = Object.create(mario);

log(luigi.getFullInfo("Green plumber"))

const peach = Object.create(luigi)

log(mario.isPrototypeOf(luigi))
log(mario.isPrototypeOf(peach))
log(peach.hasOwnProperty("age"))
peach.newAge = 16;
log(peach.hasOwnProperty("age"))



const zelda = new NintendoHeroes("Zelda", 17)
zelda.age = 21; 

log(zelda.getNameAndAge())

