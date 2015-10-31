// Create a queue class with head, tail, size, and a storage object
var Queue = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
  this.storage = {};
};

// Add enqueue and dequeue methods to prototype
Queue.prototype.enqueue = function(value) {
  // If this is the first value, initialize head and tail
  if (this.head === null) {
    this.storage[0] = value;
    this.head = 0;
    this.tail = 0;
  // Otherwise increment tail and add value to tail
  } else {
    this.tail ++;
    this.storage[this.tail] = value;
  }
  // Increment size
  this.size ++;
};

Queue.prototype.dequeue = function() {
  // If queue is empty, return
  if (this.size === 0) {
    return "Queue is empty";
  }
  // Temporarily store result
  var result = this.storage[this.head];
  // Delete item from queue
  delete this.storage[this.head];
  // Move head up to the next key
  this.head ++;
  // Decrement size
  this.size --;
  // Return dequeued value
  return result;
};