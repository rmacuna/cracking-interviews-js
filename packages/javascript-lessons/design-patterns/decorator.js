// Implements the decorator pattern with examples
/** 
 * Decorators are a structural design pattern that aim to promote code reuse.
   Similar to Mixins, they can be considered another viable alternative 
   to object subclassing.
   @see: https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s14.html
*/
function MacBook() {
  this.cost = function () {
    return 997;
  };
  this.screenSize = function () {
    return 11.6;
  };
}

// Decorator 1
function Memory(macbook = new MacBook()) {
  const value = macbook.cost();
  macbook.cost = function () {
    return value + 75;
  };
}

// Decorator 2
function Engraving(macbook = new MacBook()) {
  const value = macbook.cost();
  macbook.cost = function () {
    return value + 200;
  };
}

// Decorator 3
function Insurance(macbook = new MacBook()) {
  const value = macbook.cost();
  macbook.cost = function () {
    return value + 250;
  };
}

const macbookM1 = new MacBook();
Memory(macbookM1);
Engraving(macbookM1);
Insurance(macbookM1);

console.log(macbookM1.cost()); // 1222
console.log(macbookM1.screenSize()); // 11.6
