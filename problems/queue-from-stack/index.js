/**
 * Problem:
 * Implement Queue data structure from two stack
 * *IMPORTANT* Do not use array as storage in Queue, use two stack instances
 * Queue should implement following methods: add, remove and peek
 */

const Stack = require('./../../data-structures/stack/stack.js');

class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  add(item) {
    this.stackA.push(item);
  }

  remove() {
    if (!this.stackA.peek()) {
      return null;
    }

    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }

    let returnValue = this.stackB.pop();

    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }

    return returnValue;
  }

  peek() {
    if (!this.stackA.peek()) {
      return null;
    }

    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }

    let returnValue = this.stackB.peek();

    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }

    return returnValue;
  }
}


let myQueue = new Queue();

myQueue.add('Test 1');
myQueue.add('Test 2');
myQueue.add('Test 3');

console.log(myQueue.remove());
console.log(myQueue.remove());
console.log(myQueue.remove());
