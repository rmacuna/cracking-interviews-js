"use-strict";

// Implementation of bind. Example 1:
const Car = {
  name: "Tesla Model X",
  getName() {
    console.log(this.name);
    return this.name;
  },
};

// const getName = Car.getName;
// getName(); // undefined (this is undefined because the this keyword )

const getName = Car.getName.bind(Car);
getName();

// Implementation of bind. Example 2:
function list() {
  return Array.prototype.slice.call(arguments);
}
const fixedArgumentList = list.bind(null, "a");
console.log(fixedArgumentList("b", "c"));

// Implementation of bind. Example 3:

function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12);
}

LateBloomer.prototype.bloom = function () {
  setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function () {
  console.log("I am a beautiful flower with " + this.petalCount + " petals.");
};

const flower = new LateBloomer();
flower.bloom();
