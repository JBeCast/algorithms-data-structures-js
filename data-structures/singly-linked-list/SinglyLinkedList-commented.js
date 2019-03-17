// Implementation of a singly linked list and all of its methods, including reverse.

// Node in the list, using a factory function instead of a class
const Node = val => ({
  val, // Value of the node
  next: null, // Reference to the next node in the list
});

class SinglyLinkedList {
  constructor() {
    this.head = null; // Reference to the head (first node in the list)
    this.tail = null; // Reference to the tail (last node in the list)
    this.length = 0; // Length of the list
  }

  push(val) { // insert a new node with the given value at the end of the list
    const node = Node(val); // Create a new node using with the received value
    if (!this.head) this.head = this.tail = node; // if there is no head, set the head and tail to be the newly created node
    else this.tail.next = this.tail = node; // Otherwise, set the next property on the tail and the tail property on the list to be the new node
    this.length++; // Add 1 to list length
    return this; // Return the list
  }

  pop() { // Remove and return the last element in the list
    if (!this.length) return null; // If the list is empty, we return null
    const prevTail = this.tail; // Keep a copy of the previous tail
    const newTail = this.get(this.length - 1); // Get the 2nd to last element and assign it as the new tail (null if there isn't any, i.e. length === 1)
    if (newTail) newTail.next = null; // Erase the reference to the next element (the previous tail) from the new tail (if tail node exists, i.e. not null)
    this.tail = newTail; // Assign the new tail to the list
    this.length--; // Subtract 1 to list's length
    if (!this.length) this.head = this.tail = null; // If the list is empty, both the head and the tail should be null
    return prevTail; // Return the value of the previous tail (the removed node)
  }

  shift() { // Remove and return the first element in the list
    if (!this.length) return null; // If the list is empty, return null
    const prevHead = this.head; // Save a reference to the current head
    this.head = this.head.next; // Set the list head to the 2nd element (head.next) or null
    prevHead.next = null; // Set the previous head next to null
    this.length--; // Subtract 1 to list's length
    if (!this.length) this.tail = null; // If the list is now empty, set the tail to null (head was already null)
    return prevHead; // Return the previous head (the removed node)
  }

  unshift(val) { // insert a new node with the given value at the beginning of the list
    const node = Node(val); // Create the new node
    node.next = this.head; // Set its next prop to the current head of the list (will be null if list was empty)
    this.head = node; // Set the new node as head of the list
    if (!this.tail) this.tail = node; // If the list was empty (there was no tail), set new node as tail
    this.length++; // Add 1 to list's length
    return this; // Return a reference to the list
  }

  get(index) { // get the node at the given index (1-based)
    if (!this.length || index < 1 || index > this.length) return null; // Return null if the list is empty of the index is out of range
    let node = this.head; // Start at the head of the list
    for (let i = 1; i < index; i++) node = node.next; // Traverse the list until the nth item
    return node; // Return the requested node
  }

  set(index, val) { // Change the value of the node at the given index
    const node = this.get(index); // Get the node at index
    if (!node) return null; // Return null if there was no node at the given index
    node.val = val; // Set the value of the node at index to val
    return this; // Return a reference to the list
  }

  insert(index, val) { // Add a node at a specific position (1-based)
    if (index < 1 || index > this.length + 1) return false; // Return null if the index is out of range
    if (index === 1) return this.unshift(val); // Insert at head if index is 1 and return a reference to the list
    if (index === this.length + 1) return this.push(val); // Push if index is at the end of the list and return a reference to the list
    const node = Node(val); // Else create a new node
    const prevNode = this.get(index - 1); // Get the previous node (index - 1)
    node.next = prevNode.next; // Point the new node's next to the previous node's next (null if prevNode was the tail)
    prevNode.next = node; // Point previous node's next to the new node
    this.length++; // Add 1 to list's length
    return this; // Return a reference to the list
  }

  remove(index) { // Remove and return a node at a specific position (1-based)
    if (index < 1 || index > this.length) return null; // Return null if the index is out of range
    if (index === 1) return this.shift(index); // Shift the head and return the node if necessary
    if (index === this.length) return this.pop(index); // Pop the tail and return the node if necessary
    const prevNode = this.get(index - 1); // Get the element before the index
    const removedNode = prevNode.next; // Save a reference to the node to be removed
    prevNode.next = removedNode.next; // Point prevNode.next to the next node
    removedNode.next = null; // Isolate (remove the reference to next node)
    this.length--;
    return removedNode; // Return the removed node
  }

  reverse() { // Reverse the whole list
    [this.head, this.tail] = [this.tail, this.head]; // Swap head and tail
    let currNode = this.tail, // Keep a reference to the current tail (previous head)
      nextNode = this.tail.next; // and the next node (of the previous head, current tail)
    while (nextNode) { // Traverse the list and swap every reference while there's still a next node
      const prevNode = currNode; // Keep a reference to the current node as the previous node
      currNode = nextNode; // Replace the current node reference with a reference to the next node
      nextNode = currNode.next; // Now that currNode points to the next node, nextNode has to point to currNode.next
      currNode.next = prevNode; // Once we've got the appropriate references to currNode and nexNode, we can finally reverse the link
    }
    this.tail.next = null; // Set the list tail's next to null (as the tail was originally the head and its next pointed to the 2nd node)
    return this;
  }
}
