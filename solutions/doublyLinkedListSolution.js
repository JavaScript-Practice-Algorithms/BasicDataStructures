

var Node = function(value){
  this.value = value;
  this.previous = null;
  this.next = null;
};

var DoublyLinkedList = function(){
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(item){
  var node = new Node(item);
  if(this.head === null){
    this.head = node;
    this.tail = node;
  }else if(this.tail === null){
    this.head.next = node;
    node.previous = this.head;
    this.tail = node;
  }else{
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
};

DoublyLinkedList.prototype.addToHead = function(item){
  var node = new Node(item);
  if(this.head === null){
    this.head = node;
    this.tail = node;
  }else{
    this.head.previous = node;
    node.next = this.head;
    this.head = node;
  }
};

DoublyLinkedList.prototype.removeTail = function(){
  var currentTail = this.tail;
  this.tail = this.tail.previous;
  this.tail.next = null;
  return currentTail;
};

DoublyLinkedList.prototype.removeHead = function(){
  var currentHead = this.head;
  this.head = this.head.next;
  this.head.previous = null;
  return currentHead;
};

DoublyLinkedList.prototype.contains = function(target){
  //we assign the head of the liked list to a variable
  var node = this.head;
  //continue looping until the next node doesn't exist
  while(node !== null){
    //if the current nodes value is the same as the target return true
    if(node.value === target){
      return true;
    }
    //set the next node to the current
    node = node.next;
  }
  //if that doesn't work return false
  return false;
};