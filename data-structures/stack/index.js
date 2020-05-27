/*
 * A stack is a basic data structure that can be logically thought of as a linear structure represented by a real
 * physical stack or pile, a structure where insertion and deletion of items takes place at one end called top
 * of the stack.
 *
 * The order is First In Last Out (FILO).
 * Even though Javascript Array has native stack functionality, you may be asked to implement stack from scratch
 *
 * Problem:
 * Implement a stack data structure.
 */

const Stack = require('./stack.js');

let myStack = new Stack();

myStack.push(25);
myStack.push(10);

console.log(myStack.pop());
console.log(myStack.pop());
