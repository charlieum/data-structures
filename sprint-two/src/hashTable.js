

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // creates array with a limit of 8 elements (which will be the buckets)
};

/* note on structure for insert/retrieve/remove functions: storage array contains bucket arrays that contain
arrays of (key, value) tuple pairs (where array[0] is the key and array[1] is the index) */ /// AKA arrayCEPTION

/* process summed up on slide 56 */
HashTable.prototype.insert = function(k, v) { // takes in a (key, value) pair, both key and value are strings (slide 25)
  /* converts key (k) of type string to an index of type number // (slides 44-47) // hashing function = helper function provided in 'hashTableHelpers.js' */
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this._storage[index] = [];
  }

  // if (HashTable.retrieve[k] !== undefined) {}
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i][0] = v;
    }
  }

  var tupleArray = [k, v];
  this._storage[index].push(tupleArray);

  // return undefined; // (slide 26)
};

HashTable.prototype.retrieve = function(k) { // takes in a key of type string (k) to look for key's associated value (slide 51)
  /* converts key (k) of type string to an index of type number // (slides 44-47) // hashing function = helper function provided in 'hashTableHelpers.js' */
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

