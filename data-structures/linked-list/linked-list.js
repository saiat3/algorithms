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
}

module.exports = {Node, LinkedList};
