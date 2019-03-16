const Node = val => ({
  val,
  next: null,
});

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(val) {
    const newElem = Node(val);
    if (!this.size) this.front = this.rear = newElem;
    else {
      this.rear.next = newElem;
      this.rear = newElem;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.size) return null;
    const poppedElem = this.front;
    --this.size;
    if (!this.size) this.front = this.rear = null;
    else this.front = poppedElem.next;
    return poppedElem.val;
  }
}
