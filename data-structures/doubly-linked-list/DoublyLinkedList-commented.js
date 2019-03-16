// A node in the doubly linked list, using a factory function instead of a class
const Node = val => ({
  val,
  next: null,
  prev: null,
});

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) { // Insert a node at the end of the list
    // Create the new node
    const node = Node(val);
    // If there were no nodes in the list, set the node as the head and tail
    if (!this.length) this.head = this.tail = node;
    else {
      // Point the prev link of the new node to the previous tail
      node.prev = this.tail;
      // Point the previous tail's next to the new node
      this.tail.next = node;
      // Set the new node as tail
      this.tail = node;
    }
    // Increase list length
    ++this.length;
    // Return a reference to the list, so we can chain methods if needed
    return this;
  }

  pop() { // Remove and return the last node
    // If there are no nodes in the list, return null
    if (!this.length) return null;
    // Keep a reference to the node to be popped (previous tail)
    const oldTail = this.tail;
    // Point the tail to the previous node (will be null if there wasn't any node)
    this.tail = oldTail.prev;
    // Isolate the popped node
    oldTail.prev = oldTail.next = null;
    // Decrease the length of the list
    --this.length;
    // If the list has now no length, set the head to null as well
    if (!this.length) this.head = null;
    // Else set only the tail's next to null
    else this.tail.next = null;
    // Return the popped node
    return oldTail;
  }

  shift() { // Remove and return element from the beginning of the list
    if (!this.length) return null;
    // Keep a reference the node to be removed (previous head)
    const oldHead = this.head;
    // Point the head to the next node (will be null if there wasn't any node)
    this.head = oldHead.next;
    // Isolate the popped node
    oldHead.prev = oldHead.next = null;
    // Decrease the length of the list
    --this.length;
    // If the list has now no length, set the tail to null as well
    // Else set only the head's next to null
    if (!this.length) this.tail = null;
    else this.head.prev = null;
    // Return the node we have removed
    return oldHead;
  }

  unshift(val) { // Insert a new node at the beginning of the list
    // Create the new node
    const newHead = Node(val);
    // If there were no nodes in the list, set the node as the head and tail
    if (!this.length) this.head = this.tail = newHead;
    else {
      // Point the next link of the new node to the previous head
      newHead.next = this.head;
      // Point the previous head's prev to the new node
      this.head.prev = newHead;
      // Set the new node as head
      this.head = newHead;
    }
    // Increase list length
    ++this.length;
    // Return the list;
    return this;
  }

  get(index) { // get the node at the given index (1-based)
    // Edge cases
    if (!this.length || index < 1 || index > this.length) return null;
    // Depending on the index, we'll traverse the list forward or backwards
    else return index <= this.length / 2 ?
      this.getFromHead(index) :
      this.getFromTail(index);
  }

  getFromHead(index) {
    // Start at the head of the list
    let node = this.head;
    // Traverse the list until the nth item
    for (let i = 1; i < index; i++) node = node.next;
    // Return the requested node
    return node;
  }

  getFromTail(index) {
    // Start at the tail of the list
    let node = this.tail;
    // Traverse the list until the nth item
    for (let i = this.length; i > index; i--) node = node.prev;
    // Return the requested node
    return node;
  }

  set(index, val) { // Change the value of the node at the given index
    const node = this.get(index);
     // If the node doesn't exists (it's value is null), return null
    if (!node) return null;
    // Else assign the new value to the node
    else node.val = val;
    // Return the list with the modified node
    return true;
  }

  insert(index, val) { // Add a node at a specific position (1-based)
    // Index can't be lower than 1 or greater than length + 1
    if (index < 1 || index > this.length + 1) return null;
    // Create the new node to be added
    const newNode = Node(val);
    // If the index is 1, we should simply unshift the new node
    if (index === 1) return this.unshift(val);
    // Else if the index is the length of the list + 1, push the new node
    if (index > this.length) return this.push(val);
    // If it shouldn't unshift it nor push it, we proceed to insert it
    // Keep a reference to the node to be displaced forward
    const nextNode = this.get(index);
    // Keep a reference to the previous node
    const prevNode = nextNode.prev;
    // Point the previous node's next and next node's prev to the newNode
    prevNode.next = nextNode.prev = newNode;
    // Set pointers for new node
    newNode.prev = prevNode;
    newNode.next = nextNode;
    // Increase list length
    ++this.length;
    // Return the list with the new inserted element
    return this;
  }

  remove(index) { // Remove and return the node at the specified index
    // Index can't be lower than 1 or greater than length + 1    
    if (index < 1 || index > this.length) return null;
    // If the node is at the beginning of the list, shift it and return it
    if (index === 1) return this.shift();
    // If the node is at the end of the list, pop it and return it
    if (index === this.length) return this.pop();
    // Else, we proceed to remove it
    // Get the node at the given index
    const node = this.get(index);
    // Set the previous node's next to the next node (skip the removed node)
    node.prev.next = node.next;
    // Set the next node's prev to the previous node (skip the removed node)
    node.next.prev = node.prev;
    // Remove node references to the prev and next ones
    node.prev = node.next = null;
    // Subtract 1 to the length of the list
    --this.length;
    // Return the removed node
    return node;
  }
}
