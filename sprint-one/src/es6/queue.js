class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

}

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