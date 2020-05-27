class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let size = 0;
    let node = this.head;

    while (node) {
      size++;
      node = node.next;
    }

    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node) {
      if (!node.next) break;
      node = node.next
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFist() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previousNode = this.head;
    let currentNode = this.head.next;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = previousNode.next;
    }

    previousNode.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();

    if (!lastNode) {
      this.head = new Node(data);
    } else {
      lastNode.next = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previousNode = this.getAt(index - 1);

    if (!previousNode || !previousNode.next) {
      return;
    }

    previousNode.next = previousNode.next.next;
  }

  insertAt(index, data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previousNode = this.getAt(index - 1) || this.getLast();
    previousNode.next = new Node(data, previousNode.next);
  }
}

module.exports = {Node, LinkedList};
