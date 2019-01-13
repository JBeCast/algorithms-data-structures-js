// Implementation of a singly linked list and all of its methods, including reverse.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) { // insert a new node with the given value at the end of the list
    // create new node using val
    const node = new Node(val);
    // if there is no head, set the head and tail to be the newly created node
    if (!this.head) this.head = this.tail = node; // Otherwise, set the next property on the tail and the tail property on the list to be the new node
    else this.tail.next = this.tail = node;
    // Increase list length
    this.length++;
    // Return the list
    return this;
  }

  pop() { // Remove and return the last element in the list
    // If the list is empty, we return null
    if (!this.length) return null;
    // Keep a copy of the previous tail
    const prevTail = this.tail;
    // Traverse the list and find the 2nd to last element
    let newTail = this.head;
    while (newTail.next && newTail.next.next) newTail = newTail.next;
    // Erase the reference to the previous tail from the new tail
    newTail.next = null;
    // Assign the new tail to the list
    this.tail = newTail;
    // Decrement list's length
    --this.length;
    // If the list is empty, both the head and the tail should be null
    if (!this.length) this.head = this.tail = null;
    // Return the value of the previous tail
    return prevTail;
  }

  shift() { // Remove and return the first element in the list
    // If the list is empty, return null
    if (!this.length) return null;
    // Save a reference to the current head
    const prevHead = this.head;
    // Set the list head to the 2nd element (head.next)
    this.head = this.head.next;
    // Set the previous head next to null
    prevHead.next = null;
    // Decrement length
    --this.length;
    // If the list is now empty, set the tail to null
    if (!this.length) this.tail = null;
    // Return the previous head
    return prevHead;
  }

  unshift(val) { // insert a new node with the given value at the beginning of the list
    // Create the new node
    const node = new Node(val);
    // Set its next prop to the current head of the list (will be null if list was empty)
    node.next = this.head;
    // Set the new node as head of the list
    this.head = node;
    // If the list was empty (there was no tail), set new node as tail
    if (!this.tail) 
      this.tail = node;
    // Increment the list length
    ++this.length;
  }

  get(index) { // get the node at the given index (1-based)
    // Edge cases
    if (!this.length || index < 1 || index > this.length) return null;
    // Start at the head of the list
    let node = this.head;
    // Traverse the list until the nth item
    for (let i = 1; i < index; i++) node = node.next;
    // Return the requested node
    return node;
  }

  set(index, val) { // Change the value of the node at the given index
    const node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  insert(index, val) { // Add a node at a specific position
    // Edge cases
    if (index < 1 || index > this.length + 1) return false;
    // Insert at head or tail if that's the case
    if (index === 1) return !!this.unshift(val);
    if (index === this.length + 1) return !!this.push(val);
    // Else create a new node
    const node = new Node(val);
    // Get the previous node (index - 1)
    const prevNode = this.get(index - 1);
    // Point the new node's next to the previous node's next
    node.next = prevNode.next; // Will be null if prevNode was tail
    // Point previous node's next to the new node
    prevNode.next = node;
    // Increment length
    ++this.length;
    // Return true
    return true;
  }

  remove(index) { // Remove and return a node at a specific position
    // Edge cases
    if (index < 1 || index > this.length + 1) return null;
    // Remove from head or tail
    if (index === 1) return shift(index);
    if (index === this.length) return pop(index);
    // Remove from rest of the list Get previous element
    const prevNode = this.get(index - 1);
    // Save a reference to the node to be removed
    const removedNode = prevNode.next;
    // Point prevNode.next to the next node
    prevNode.next = removedNode.next;
    // Isolate and return the removed node
    removedNode.next = null;
    return removedNode;
  }

  reverse() { // Reverse the whole list
    // Swap head and tail
    [this.head, this.tail] = [this.tail, this.head];
    let currNode = this.tail,
      nextNode = this.tail.next;
    // Traverse the list starting from the tail (previous head)
    while (nextNode) {
      const prevNode = currNode;
      currNode = nextNode;
      nextNode = currNode.next;
      currNode.next = prevNode;
    }
    // Set the list tail's next to null
    this.tail.next = null;
    return this;
  }
}
