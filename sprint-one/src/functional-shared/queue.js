var Queue = function() {
  var someInstance = {};

  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var queueLength = this.size();

  this.storage[queueLength + 1] = value;
};

queueMethods.dequeue = function() {
  var exitQueue = this.storage[1];

  delete this.storage[1];

  for (var key in this.storage) {
    key = Number.parseInt(key);
    this.storage[key - 1] = this.storage[key];
  }

  delete this.storage[this.size()];

  return exitQueue;
};

queueMethods.size = function() {
  var counter = 0;

  for (var key in this.storage) {
    counter++;
  }

  return counter;
};
