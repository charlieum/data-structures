var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var currentStackLength = someInstance.size();

    storage[currentStackLength + 1] = value;
  };

  someInstance.pop = function() {
    var currentStackLength = someInstance.size();

    var exitStack = storage[currentStackLength];

    delete storage[currentStackLength];

    return exitStack;
  };

  someInstance.size = function() {
    var counter = 0;

    for (var key in storage) {
      counter++;
    }

    return counter;
  };

  return someInstance;
};
