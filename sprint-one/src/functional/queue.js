var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var storageLength = someInstance.size();

    storage[storageLength + 1] = value;
  };

  someInstance.dequeue = function() {
    var exitLine = storage[1];

    delete storage[1];

    for (var key in storage) {
      key = Number.parseInt(key);
      storage[key - 1] = storage[key];
    }

    delete storage[someInstance.size()];

    return exitLine;
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
