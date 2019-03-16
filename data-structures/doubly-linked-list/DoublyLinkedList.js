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

  push(val) {
    const node = Node(val);
    if (!this.length) this.head = this.tail = node;
    else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    ++this.length;
    return this;
  }

  pop() {
    if (!this.length) return null;
    const oldTail = this.tail;
    this.tail = oldTail.prev;
    oldTail.prev = oldTail.next = null;
    --this.length;
    if (!this.length) this.head = null;
    else this.tail.next = null;
    return oldTail;
  }

  shift() {
    if (!this.length) return null;
    const oldHead = this.head;
    this.head = oldHead.next;
    oldHead.prev = oldHead.next = null;
    --this.length;
    if (!this.length) this.tail = null;
    else this.head.prev = null;
    return oldHead;
  }

  unshift(val) {
    const newHead = Node(val);
    if (!this.length) this.head = this.tail = newHead;
    else {
      newHead.next = this.head;
      this.head.prev = newHead;
      this.head = newHead;
    }
    ++this.length;
    return this;
  }

  get(index) {
    if (!this.length || index < 1 || index > this.length) return null;
    else return index <= this.length / 2 ?
      this.getFromHead(index) :
      this.getFromTail(index);
  }

  getFromHead(index) {
    let node = this.head;
    for (let i = 1; i < index; i++) node = node.next;
    return node;
  }

  getFromTail(index) {
    let node = this.tail;
    for (let i = this.length; i > index; i--) node = node.prev;
    return node;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return null;
    else node.val = val;
    return this;
  }

  insert(index, val) {
    if (index < 1 || index > this.length + 1) return null;
    const newNode = Node(val);
    if (index === 1) return this.unshift(val);
    if (index > this.length) return this.push(val);
    const nextNode = this.get(index);
    const prevNode = nextNode.prev;
    prevNode.next = nextNode.prev = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    ++this.length;
    return this;
  }

  remove(index) {
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
