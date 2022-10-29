var LinkedList = function() {
  var list = {};
  list.head = null; //{value:1, next:null}
  list.tail = null; //{value:2, next:null}

  list.length = 0;


  list.addToTail = function(value) {
    var current = Node(value);

    if (list.head === null) {
      list.head = current;
      list.tail = current;
    } else {
      list.tail.next = current;
      list.tail = current;
    }

    list.length++;

    return list;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return undefined;
    }

    var currentHead = list.head;

    list.head = list.head.next;

    list.length--;

    if (list.length === 0) {
      list.tail = null;
    }

    return currentHead.value;
  };

  list.contains = function(target) {
    for (var keys in list) {
      if (list[keys].value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// var newNode = Node(5);

var newList = LinkedList();

newList.addToTail(7);

