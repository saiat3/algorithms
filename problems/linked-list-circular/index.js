/**
 * Problem:
 * Given LinkedList object instance, determine whether it is circular or not
 *
 * const myList = new LinkedList();
 *
 * const node1 = new Node('one');
 * const node2 = new Node('two');
 * const node3 = new Node('three');
 *
 * myList.head = node1;
 * node1.next = node2;
 * node2.next = node3;
 * node3.next = node2;
 *
 * isLinkedListCircular(myList) === true
 */

const {LinkedList, Node} = require('./../../data-structures/linked-list/linked-list');
const solution_1 = require('./solution_1');

const myList = new LinkedList();
const node1 = new Node('one');
const node2 = new Node('two');
const node3 = new Node('three');

myList.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node2;

console.log(solution_1(myList));
