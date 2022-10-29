var BinarySearchTree = function(value) {
  var node = Object.create(BinarySearchTree.prototype);

  node.left;
  node.right;
  node.value = value;

  return node;
};


BinarySearchTree.prototype.insert = function (value) {

  if (value < this.value) {
    if (this.left !== undefined) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  }

  if (value > this.value) {
    if (this.right !== undefined) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }

};


BinarySearchTree.prototype.contains = function (value) {

  if (this.value === value) {
    return true;
  }

  if (value < this.value && this.left !== undefined) {
    return this.left.contains(value);
  }
  if (value > this.value && this.right !== undefined) {
    return this.right.contains(value);
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (func) {

  this.value = func(this.value);

  if (this.left !== undefined) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
