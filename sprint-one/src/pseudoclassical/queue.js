var Queue = function() {
  this.storage = {};
};

// var queueMethods = {};

Queue.prototype.enqueue = function(value) {
  var queueLength = this.size();

  this.storage[queueLength + 1] = value;
};

Queue.prototype.dequeue = function() {
  var exitQueue = this.storage[1];

  delete this.storage[1];

  for (var key in this.storage) {
    key = Number.parseInt(key);
    this.storage[key - 1] = this.storage[key];
  }

  delete this.storage[this.size()];

  return exitQueue;
};

Queue.prototype.size = function() {
  var counter = 0;

  for (var key in this.storage) {
    counter++;
  }

  return counter;
};
