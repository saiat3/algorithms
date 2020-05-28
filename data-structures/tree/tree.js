class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBreadthFirst(fn) {
    const array = [this.root];
    while (array.length > 0) {
      const node = array.shift();
      array.push(...node.children);
      fn(node);
    }
  }

  traverseDepthFirst(fn) {
    const array = [this.root];
    while (array.length > 0) {
      const node = array.shift();
      array.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = {Node, Tree};
