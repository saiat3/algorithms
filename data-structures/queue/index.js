/*
 * A Queue is a linear structure which follows a particular order in which the operations are performed.
 * The order is First In First Out (FIFO).
 * Even though Javascript Array has native queue functionality, you may be asked to implement queue from scratch
 *
 * Problem:
 * Implement a queue data structure.
 */

const Queue = require('./queue.js');

let myQueue = new Queue();

myQueue.add(25);
myQueue.add(10);

console.log(myQueue.remove());
console.log(myQueue.remove());
