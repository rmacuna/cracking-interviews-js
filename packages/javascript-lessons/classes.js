class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  #owner;
  constructor(name, owner) {
    super(name);
    this.#owner = owner;
  }

  get dowOwner() {
    return this.#owner;
  }

  logDetails() {
    return this.#logOwner();
  }

  #logOwner() {
    console.log(`${this.name} is owned by ${this.#owner}`);
  }
}
const perro = new Dog("Firulais", "Roberto");
perro.logDetails();
