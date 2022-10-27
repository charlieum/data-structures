var Stack = function() {
  this.storage = {};
};

// stackMethods = {};

Stack.prototype.push = function (value) {
  var currentStackLength = this.size();

  this.storage[currentStackLength + 1] = value;
};

Stack.prototype.pop = function () {
  var currentStackLength = this.size();

  var exitStack = this.storage[currentStackLength];

  delete this.storage[currentStackLength];

  return exitStack;
};

Stack.prototype.size = function () {
  var counter = 0;

  for (var key in this.storage) {
    counter++;
  }

  return counter;
};
