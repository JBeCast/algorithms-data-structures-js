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
}
