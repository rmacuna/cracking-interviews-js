// Implement the prototype design pattern with a Dog class.

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

// Add a bark method to the Dog class.
Dog.prototype.bark = function () {
  console.log(`${this.name} barks!`);
};
