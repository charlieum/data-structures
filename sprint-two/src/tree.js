var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var currentNode = Tree(value);

  _.extend(currentNode, treeMethods);

  this.children.push(currentNode);
};

treeMethods.contains = function(target) {
  var result = false;

  if (this.value === target) {
    result = true;
  }

  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        result = true;
      }
    }
  }

  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

