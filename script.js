"use strict";
const { log } = console;

const person = {
  name: "Jon",
  lastName: "Snow",
  died: true,
  age: 35,

};


const myMethods = { 
  
  getWholeObject() {
    return this;
  },
  getWholeObjectArrFC: () => {
    return this;
  },
    getName() {
    return `${this.name} ${this.lastName}`;
  },
  setName(name) {
    this.name = name;
  },
  giveInfo(title, emoji) {
    return `${title} ${this.name} is ${this.age} years old ${emoji}`;
  },

}


const person2 = {
  name: "Tom",
  lastName: "Cat",
  age: 4,
  food: "Jerry and turkey"
};

function getFavoriteFood() {
  return this.food;
}

log(getFavoriteFood.call(person2));

Window.prototype.globalValue = "Property available";

function showGlobal() {
  log("Global value: ", this.globalValue);
}
 
showGlobal.call(window);

const Ann = {
  name: "Anna Jonson",
  age: 43,
}

const Boob = {
  name: "Boob Tucker",
  age: 23,
}


// log(myMethods.giveInfo.call(Ann, "Mrs.", "😋"));
// log(myMethods.giveInfo.apply(Boob, ["Mr.", "😋"]));

Boob.info = myMethods.giveInfo.bind(Boob);
// log("After BIND", Boob)

// log(Boob.info("Miss", "😋"));

// log(myMethods.giveInfo.call(person, "Mr", "😋"));

// log(Ann)