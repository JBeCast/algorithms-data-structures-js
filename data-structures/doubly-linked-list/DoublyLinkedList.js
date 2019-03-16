class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) { // Insert a node at the end of the list
    // Create the new node
    const node = new Node(val);
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
    // Return the list;
    return this;
  }

  pop() { // Remove and return the last node
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
    // Else set only the tail's next to null
    if (!this.length) this.head = null;
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
    // Return the popped node
    return oldHead;
  }

  unshift(val) { // Insert a new node at the beginning of the list
    // Create the new node
    const newHead = new Node(val);
    // If there were no nodes in the list, set the node as the head and tail
    if (!this.length) this.head = this.tail = newHead;
    else {
      // Point the next link of the new node to the previous head
      newHead.next = this.head;
      // Point the previous tail's next to the new node
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
    if (!node) return false;
    else node.val = val;
    return true;
  }

  insert(index, val) { // Add a node at a specific position (1-based)
    // Insertion index can't be lower than 1 or greater than length + 1
    if (index < 1 || index > this.length + 1) return false;
    // Create the new node to be added
    const newNode = new Node(val);
    // If the index is 1, we should unshift the new node
    if (index === 1) return !!this.unshift(val);
    // Else if the index is the length of the list + 1, push the new node
    if (index > this.length) return !!this.push(val);
    // Else actually insert it
    // Keep a reference to the node to be displaced forward
    const nextNode = this.get(index);
    // Keep a reference to the previous node
    const prevNode = nextNode.prev;
    // Point the previous node's next to the newNode
    prevNode.next = newNode;
    // Point next node's prev to the newNode
    nextNode.prev = newNode;
    // Set pointers for new node
    newNode.prev = prevNode;
    newNode.next = nextNode;
    // Increase list length
    ++this.length;
    // Return true indicating that the operation was successful
    return true;
  }
  remove(index) { // Remove and return the node at the specified index
    if (index < 1 || index > this.length) return null;
    if (index === 1) return this.shift();
    if (index === this.length) return this.pop();
    const node = this.get(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = node.next = null;
    --this.length;
    return node;
  }
}
