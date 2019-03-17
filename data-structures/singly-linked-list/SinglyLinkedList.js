const Node = val => ({
  val,
  next: null,
});

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = Node(val);
    if (!this.head) this.head = this.tail = node;
    else this.tail.next = this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return null;
    const prevTail = this.tail;
    const newTail = this.get(this.length - 1);
    if (newTail) newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (!this.length) this.head = null;
    return prevTail;
  }

  shift() {
    if (!this.length) return null;
    const prevHead = this.head;
    this.head = this.head.next;
    prevHead.next = null;
    this.length--;
    if (!this.length) this.tail = null;
    return prevHead;
  }

  unshift(val) {
    const node = Node(val);
    node.next = this.head;
    this.head = node;
    if (!this.tail) this.tail = node;
    this.length++;
    return this;
  }

  get(index) {
    if (!this.length || index < 1 || index > this.length) return null;
    let node = this.head;
    for (let i = 1; i < index; i++) node = node.next;
    return node;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return null;
    node.val = val;
    return this;
  }

  insert(index, val) {
    if (index < 1 || index > this.length + 1) return false;
    if (index === 1) return this.unshift(val);
    if (index === this.length + 1) return this.push(val);
    const node = Node(val);
    const prevNode = this.get(index - 1);
    node.next = prevNode.next;
    prevNode.next = node;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 1 || index > this.length) return null;
    if (index === 1) return this.shift(index);
    if (index === this.length) return this.pop(index);
    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }

  reverse() {
    [this.head, this.tail] = [this.tail, this.head];
    let currNode = this.tail,
      nextNode = this.tail.next;
    while (nextNode) {
      const prevNode = currNode;
      currNode = nextNode;
      nextNode = currNode.next;
      currNode.next = prevNode;
    }
    this.tail.next = null;
    return this;
  }
}

module.exports = SinglyLinkedList;