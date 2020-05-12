

class Queue {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.unshift(item);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
