// Implementation of a doubly linked list and all of its methods

// A node in the doubly linked list, using a factory function instead of a class
const Node = val => ({
  val, // Value of the node
  prev: null, // Reference to the previous node in the list
  next: null, // Reference to the next node in the list
});

class DoublyLinkedList {
  constructor() {
    // Reference to the head (first node in the list)
    this.head = null; // Reference to the head (first node in the list)
    this.tail = null; // Reference to the tail (last node in the list)
    this.length = 0; // Length of the list
  }

  push(val) { // Insert a node at the end of the list
    const node = Node(val); // Create the new node
    if (!this.length) this.head = this.tail = node; // If there were no nodes in the list, set the node as the head and tail
    else {
      node.prev = this.tail; // Point the prev link of the new node to the previous tail
      this.tail.next = node; // Point the previous tail's next to the new node
      this.tail = node; // Set the new node as tail
    }
    this.length++; // Increase list length
    return this; // Return a reference to the list, so we can chain methods if needed
  }

  pop() { // Remove and return the last node
    if (!this.length) return null; // If there are no nodes in the list, return null
    const oldTail = this.tail; // Keep a reference to the node to be popped (previous tail)
    this.tail = oldTail.prev; // Point the tail to the previous node (will be null if there wasn't any node)
    oldTail.prev = oldTail.next = null; // Isolate the popped node
    this.length--; // Subtract 1 to the length of the list
    if (!this.length) this.head = null; // If the list has now no length, set the head to null as well
    else this.tail.next = null; // Else set only the tail's next to null
    return oldTail; // Return the popped node
  }

  shift() { // Remove and return element from the beginning of the list
    if (!this.length) return null; // If there are no nodes in the list, return null
    const oldHead = this.head; // Keep a reference the node to be removed (previous head)
    this.head = oldHead.next; // Point the head to the next node (will be null if there wasn't any node)
    oldHead.prev = oldHead.next = null; // Isolate the popped node
    this.length--; // Decrease the length of the list
    if (!this.length) this.tail = null; // If the list has now no length, set the tail to null as well
    else this.head.prev = null; // Else set only the head's next to null
    return oldHead; // Return the node we have removed
  }

  unshift(val) { // Insert a new node at the beginning of the list
    const newHead = Node(val); // Create the new node
    if (!this.length) this.head = this.tail = newHead; // If there were no nodes in the list, set the node as the head and tail
    else {
      newHead.next = this.head; // Point the next link of the new node to the previous head
      this.head.prev = newHead; // Point the previous head's prev to the new node
      this.head = newHead; // Set the new node as head
    }
    this.length++; // Add 1 to the list length
    return this; // Return a reference to the list
  }

  get(index) { // get the node at the given index (1-based)
    if (!this.length || index < 1 || index > this.length) return null; // Return null if the list is empty of the index is out of range
    else return index <= this.length / 2 // Depending on the index, we'll traverse the list forward or backward
      ? this.getFromHead(index)
      : this.getFromTail(index);
  }

  getFromHead(index) { // Get the node at the given index starting at the head and traversing it forward
    let node = this.head; // Start at the head of the list
    for (let i = 1; i < index; i++) node = node.next; // Traverse the list until the nth item
    return node; // Return the requested node
  }

  getFromTail(index) { // Get the node at the given index starting at the tail and traversing it backward
    let node = this.tail; // Start at the tail of the list
    for (let i = this.length; i > index; i--) node = node.prev; // Traverse the list until the nth item
    return node; // Return the requested node
  }

  set(index, val) { // Change the value of the node at the given index
    const node = this.get(index); // Get the node at the given index
    if (!node) return null; // If the node doesn't exist (it's value is null), return null
    else node.val = val; // Else assign the new value to the node
    return this; // Return the list with the modified node
  }

  insert(index, val) { // Add a node at a specific position (1-based)
    if (index < 1 || index > this.length + 1) return null; // Index can't be lower than 1 or greater than length + 1
    const newNode = Node(val); // Create the new node to be added
    if (index === 1) return this.unshift(val); // If the index is 1, we should simply unshift the new node
    if (index > this.length) return this.push(val); // Else if the index is the length of the list + 1, push the new node
    // If it shouldn't unshift it nor push it, we proceed to insert it
    const nextNode = this.get(index); // Keep a reference to the node to be displaced forward
    const prevNode = nextNode.prev; // Keep a reference to the previous node
    prevNode.next = nextNode.prev = newNode; // Point the previous node's next and next node's prev to the newNode
    // Set pointers for new node
    newNode.prev = prevNode;
    newNode.next = nextNode;
    this.length++; // Add 1 to list length
    return this; // Return the list with the new inserted element
  }

  remove(index) { // Remove and return the node at the specified index
    if (!this.length || index < 1 || index > this.length) return null; // Return null if the list is empty of the index is out of range
    if (index === 1) return this.shift(); // If the node is at the beginning of the list, shift it and return it
    if (index === this.length) return this.pop(); // If the node is at the end of the list, pop it and return it
    // Else, we proceed to remove it
    const node = this.get(index); // Get the node at the given index
    node.prev.next = node.next; // Set the previous node's next to the next node (skip the removed node)
    node.next.prev = node.prev; // Set the next node's prev to the previous node (skip the removed node)
    node.prev = node.next = null; // Remove node references to the prev and next ones
    this.length--; // Subtract 1 to the length of the list
    return node; // Return the removed node
  }
}
