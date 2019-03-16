class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.size) this.top = this.bottom = newNode;
    else {
      newNode.next = this.top;
      this.top = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (!this.size) return null;
    const poppedNode = this.top;
    this.size--;
    if (!this.size) this.top = this.bottom = null;
    else this.top = poppedNode.next;
    return poppedNode.val;
  }
}
