//first we create our node with a value and a next property
var Node = function(value){
  this.value = value;
  this.next = null;
};
//then we create our linked list with a head and a tail property
var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value){
  //we take the value passed and create a node
  var node = new Node(value);
  //if the head is null, then we know that the tail is a well and assign that node to both
  if(this.head === null){
    this.head = node;
    this.tail = node;
    //if the tail equals the head at this point, then we know that the new node will be the tail
  }else if(this.tail === this.head){
    this.head.next = node;
    this.tail = node;
    //finally if neither of the above are true, then we assign the node to the current tails next and then assign the node to the tail
  }else{
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function(){
  //we create a temperary variable to hold the current head
  var currentHead = this.head;
  //we assign the current heads next property to the head
  this.head = this.head.next;
  //and return the temperary variable that holds the now previous head
  return currentHead;
};

LinkedList.prototype.contains = function(target){
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
