var Stack = function() {
  var newStack = Object.create(stackMethods);

  newStack.storage = {};

  return newStack;
};

stackMethods = {};

stackMethods.push = function (value) {
  var currentStackLength = this.size();

  this.storage[currentStackLength + 1] = value;
};

stackMethods.pop = function () {
  var currentStackLength = this.size();

  var exitStack = this.storage[currentStackLength];

  delete this.storage[currentStackLength];

  return exitStack;
};

stackMethods.size = function () {
  var counter = 0;

  for (var key in this.storage) {
    counter++;
  }

  return counter;
};

console.log(stackMethods);
