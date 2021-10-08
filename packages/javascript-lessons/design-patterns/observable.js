// Implements the observable pattern with a simple event emitter (X2 examples)
// Use rxjs-observable-patterns to implement the observable pattern with rxjs

function Click() {
  this.handlers = [];
}

Click.prototype = {
  on: function (handler) {
    this.handlers.push(handler);
  },
  unsubscribe: function (handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  },
  emit: function (data, thisArg) {
    const scope = thisArg || globalThis;
    this.handlers.forEach(function (handler) {
      handler.call(scope, data);
    });
  },
};

function run() {
  const click = new Click();

  const handler = function (data) {
    console.log("handler", data);
  };

  click.on(handler);
  click.emit("click #1");
  click.unsubscribe(handler);
  click.emit("click #2");
  click.on(handler);
  click.emit("click #3");
}

run();
